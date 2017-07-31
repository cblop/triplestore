(ns triplestore.db
  (:require [clojure.java.shell :refer [sh]])
  )


(defn start-server []
  (sh "sh" "fuseki-server" "--port" "3030" "--update" "--loc=./ds" "/ds" :dir "fuseki")) ;; port is 3030

;; (sh "sh" "fuseki-server" :dir "fuseki")

;; (defonce ds (atom nil))
;; (defonce server (atom nil))

;; (defn create-db [dbname]
;;   (reset! ds (TDBFactory/createDataset dbname)))

;; (defn start-server [port]
;;   (let [fuseki (-> (FusekiServer/create)
;;                    (.setPort port)
;;                    (.add "/ds" @ds)
;;                    .build
;;                    .start)]
;;     (reset! server fuseki)))

