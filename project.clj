(defproject triplestore "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-json "0.4.0"]
                 [ring-partial-content "1.0.0"]
                 [org.clojars.quoll/turtle "0.2.2"]
                 [ring/ring-core "1.6.2"]
                 [net.solicode/middlebrow-fx "0.1.0-SNAPSHOT"]
                 [net.solicode/middlebrow-thrust "0.1.0-SNAPSHOT"]
                 ;; [ring "1.5.0"]
                 [net.solicode/middlebrow "0.1.0-SNAPSHOT"]
                 [ring/ring-jetty-adapter "1.6.2"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-defaults "0.2.1"]
                 ]
  :main triplestore.core
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler triplestore.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}
  )
