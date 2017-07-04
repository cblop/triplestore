(ns triplestore.handler
  (:require [compojure.core :refer :all]
            [clojure.java.shell :refer [sh]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.util.response :refer [response file-response resource-response]]
            [ring.middleware.json :as middleware]
            [ring.middleware.partial-content :refer [wrap-partial-content]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def root "/home/mrt32/repos/triplestore/public")

(defn put-triples-graph [triplefile]
  (sh "/home/mrt32/bin/s-put" "http://localhost:3030/ds/data" "default" triplefile))

(defn query-graph [sparql]
  (sh "/home/mrt32/bin/s-query" "--service" "http://localhost:3030/ds/query" sparql))

(defn add-triples [data]
  (do
    (spit "resources/test.ttl" data)
    (put-triples-graph "resources/test.ttl")))

(defn get-file [fname]
  (file-response fname {:root (str root "/datasets")}))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/add/" [] "Hello Add")
  ;; (route/resources "/")
  ;; (GET "/dataset/" [] "http://localhost:1339/dataset/")
  (POST "/add/" [& data] (add-triples (:file data)))
  (POST "/query/" [& data] (response (query-graph (:sparql data))))
  ;; (POST "/dataset/" [& data] (response (get-file (:file data))))
  ;; (GET "/dataset/:fname" [fname] (response (get-file (:file fname))))
  ;; (POST "/add/" [] (println "Post"))
  ;; (POST "/add/" [data] (println "Post"))
  (route/not-found "Not Found"))

(def cors-headers
  "Generic CORS headers"
  {"Access-Control-Allow-Origin"  "*"
   "Access-Control-Allow-Headers" "X-Requested-With,Content-Type,Cache-Control,range,Content-Range,If-None-Match"
   "Access-Control-Expose-Headers" "X-Requested-With,Content-Type,Cache-Control,range,Content-Range,If-None-Match"
   "Access-Control-Allow-Methods" "GET, POST"})

(defn preflight?
  "Returns true if the request is a preflight request"
  [request]
  (= (request :request-method) :options))

(defn all-cors
  "Allow requests from all origins - also check preflight"
  [handler]
  (fn [request]
    (if (preflight? request)
      {:status 200
       :headers cors-headers
       :body "preflight complete"}
      (let [response (handler request)]
        (update-in response [:headers]
                   merge cors-headers )))))

;; (def app
;;   (-> app-routes
;;       wrap-cors
;;       ))

(def app
  (-> app-routes
      all-cors
      ;; #(wrap-defaults % site-defaults)
      ;; wrap-partial-content
      wrap-keyword-params
      middleware/wrap-json-params
      middleware/wrap-json-response
      ))

;; (def app
;;   (wrap-defaults (all-cors app-routes) site-defaults))

;; (def app
;;   (wrap-cors (wrap-defaults app-routes site-defaults)))
