(ns triplestore.core
  (:require [triplestore.db :refer :all]
            [triplestore.handler :refer [app]]
            [middlebrow.core :as mb]
            [middlebrow-thrust.core :as thrust]
            [middlebrow-fx.core :as fx]
            [ring.adapter.jetty :refer :all])
            )

;; (.stop server)
;; (.getPort server)

;; (future (start-server))
;; (future (run-jetty app {:port 7777}))

;; (defn -main
;;   []
;;   (do
;;     ;; (create-db "database")
;;     (start-server)
;;     (run-jetty app {:port 7777})
;;     true
;;     )
;;   )


(defn -main
  []
  (do
    ;; (create-db "database")
    (future (start-server))
    (future (run-jetty app {:port 7777}))
    (let [window (thrust/create-window
                  :url "http://localhost:7777" ; URL to your web app
                  :width 800
                  :height 600
                  :title "MetaMaker")]
      (mb/show window)
      (mb/activate window))
    true
    )
  )



