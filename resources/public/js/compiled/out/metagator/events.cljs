(ns metagator.events
    (:require [re-frame.core :as re-frame]
              [ajax.core :refer [GET POST]]
              [metagator.parser :as parser]
              [re-com.dropdown :refer [filter-choices-by-keyword]]
              [metagator.meta :refer [make-triples]]
              [metagator.types :refer [detect-type]]
              [metagator.db :as db]))

;; (def HOST "http://mist.cs.bath.ac.uk")
(def HOST "http://localhost:3449")


(def query-template "PREFIX csv:<http://www.ntnu.no/ub/data/csv#>
  PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>

  SELECT ?f ?i 
  WHERE {?f csv:hasColumn ?c .
                ?c csv:mapsTo ssn:hasValue .
                ?c csv:hasIndex ?i .}")

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :ftype
 (fn [db [_ type]]
   (assoc db :ftype type)))


(re-frame/reg-event-db
 :ftype2
 (fn [db [_ type]]
   (assoc db :ftype2 type)))

(re-frame/reg-event-db
 :fname-change
 (fn [db [_ fname]]
   (parser/parse-remote-sample fname 10)
   (assoc db :url fname)))

(re-frame/reg-event-db
 :dname-change
 (fn [db [_ dname]]
   (assoc db :dataset-name dname)))

(re-frame/reg-event-db
 :upload-file
 (fn [db [_ fname]]
   (let [url (first (array-seq (.-files (.getElementById js/document "file"))))]
     (do
       (parser/parse-sample url 10)
       (assoc db :url (str "http://mist.cs.bath.ac.uk/dataset/" (.-name url)))))))

(re-frame/reg-event-db
 :stream-local
 (fn [db [_ fname]]
   (let [url (first (array-seq (.-files (.getElementById js/document "file"))))]
     (do
       (parser/parse-local url)
       ))))

(re-frame/reg-event-db
 :fetch
 (fn [db [_ fname]]
   (do
     (parser/parse-sample fname 10)
     db)))

(re-frame/reg-event-db
 :set-types
 (fn [db [_ rows]]
   (let [types (map detect-type (first rows))]
     (assoc db :row-types types))))

(re-frame/reg-event-db
 :update-description
 (fn [db [_ description]]
   (assoc db :description description)))

(re-frame/reg-event-db
 :update-type
 (fn [db [_ type]]
   (let [tab (:selected-tab db)
         new-type (first (filter #(= (:id %) type) (:types db)))]
     ;; (re-frame/dispatch [:set-selected-type type])
     (assoc db :row-types (assoc (vec (:row-types db)) tab (:label new-type)))
     )))

(re-frame/reg-event-db
 :set-selected-type
 (fn [db [_ type]]
   (assoc db :selected-type type)))

(re-frame/reg-event-db
 :set-headers
 (fn [db [_ rows]]
   (assoc db :headers (first rows))))

(re-frame/reg-event-db
 :add-meta
 (fn [db _]
   (let [tab (:selected-tab db)]
     (assoc-in db [:metas tab] (conj (nth (:metas db) tab) {:cat-a nil :cat-b nil :cat-c nil :label nil})))))

(re-frame/reg-event-db
 :add-file-meta
 (fn [db _]
   (assoc db :file-metas (conj (:file-metas db) {:cat-a nil :cat-b nil :cat-c nil :label nil}))))

(re-frame/reg-event-db
 :set-cat-a
 (fn [db [_ cat-id row-id]]
   (let [tab (:selected-tab db)
         cat-label (re-frame/subscribe [:cat-label cat-id])]
     (assoc-in db [:metas tab row-id :cat-a] @cat-label))))

(re-frame/reg-event-db
 :set-cat-b
 (fn [db [_ cat-b cat-a row-id]]
   (let [tab (:selected-tab db)
         cat-bs (re-frame/subscribe [:cat-b-for-cat-a cat-a])
         cat-label (:label (nth @cat-bs cat-b))
         ]
     (assoc-in db [:metas tab row-id :cat-b] cat-label))))

(re-frame/reg-event-db
 :set-cat-c
 (fn [db [_ cat-c cat-b row-id]]
   (let [tab (:selected-tab db)
         cat-cs (re-frame/subscribe [:cat-c-for-cat-b cat-b])
         cat-label (:label (nth @cat-cs cat-c))
         ]
     (assoc-in db [:metas tab row-id :cat-c] cat-label))))

(re-frame/reg-event-db
 :set-file-cat-a
 (fn [db [_ cat-id row-id]]
   (let [cat-label (re-frame/subscribe [:cat-label cat-id])]
     (assoc-in db [:file-metas row-id :cat-a] @cat-label))))


(re-frame/reg-event-db
 :set-file-cat-b
 (fn [db [_ cat-id cat-a row-id]]
   (let [cat-label (re-frame/subscribe [:cat-label cat-id])]
     (assoc-in db [:file-metas row-id :cat-b] @cat-label))))

(re-frame/reg-event-db
 :set-file-cat-c
 (fn [db [_ cat-id cat-b row-id]]
   (let [cat-label (re-frame/subscribe [:cat-label cat-id])]
     (assoc-in db [:file-metas row-id :cat-c] @cat-label))))

(re-frame/reg-event-db
 :set-metadata
 (fn [db [_ meta-id cat row-id]]
   (let [tab (:selected-tab db)
         metas (re-frame/subscribe [:metas-for-cat cat])
         label (:label (nth @metas meta-id))
         meta-data (re-frame/subscribe [:meta-for-label label])
         ]
     (assoc-in db [:metas tab row-id :metadata] @meta-data)
     ;; db
     )))


(re-frame/reg-event-db
 :set-file-metadata
 (fn [db [_ meta-id cat row-id]]
   (let [
         metas (re-frame/subscribe [:metas-for-cat cat])
         label (:label (nth @metas meta-id))
         meta-data (re-frame/subscribe [:meta-for-label label])
         ]
     (assoc-in db [:file-metas row-id :metadata] @meta-data)
     ;; db
     )))

(defn drop-nth [coll n]
  (keep-indexed #(if (not= %1 n) %2) coll))

(re-frame/reg-event-db
 :delete-row
 (fn [db [_ row-id]]
   (let [tab (:selected-tab db)]
     (assoc-in db [:metas tab] (vec (drop-nth (nth (:metas db) tab) row-id))))))


(re-frame/reg-event-db
 :delete-file-row
 (fn [db [_ row-id]]
   (assoc db :file-metas (vec (drop-nth (:file-metas db) row-id)))))

(re-frame/reg-event-db
 :set-label
 (fn [db [_ label-data row-id]]
   (let [tab (:selected-tab db)
         ]
     (assoc-in db [:metas tab row-id :label] label-data)
     ;; db
     )))

(re-frame/reg-event-db
 :set-file-label
 (fn [db [_ label-data row-id]]
   (assoc-in db [:file-metas row-id :label] label-data)
   ;; db
   ))

(re-frame/reg-event-db
 :change-tab
 (fn [db [_ tab]]
   (assoc db :selected-tab tab)))

(re-frame/reg-event-db
 :srate-change
 (fn [db [_ val]]
   (assoc db :srate val)))

(re-frame/reg-event-db
 :create-metas
 (fn [db [_ rows]]
   (assoc db :metas (vec (repeat (count (first rows)) [])))))

(re-frame/reg-event-db
 :reset-chart-data
 (fn [db [_ data]]
   (assoc db :chart-data {:data {:labels []
                                 :datasets []}})))

(re-frame/reg-event-db
 :set-chart-data
 (fn [db [_ data]]
   ;; (println (:chart-data db))
   (assoc db :chart-data data)))


(re-frame/reg-event-db
 :add-chart-data
 (fn [db [_ data]]
   (println (:chart-data db))
   (assoc-in
    (assoc-in db [:chart-data :data :labels] (conj (:labels (:data (:chart-data db))) (:label data)))
    [:chart-data :data :datasets 0 :data] (conj (:data (first (:datasets (:data (:chart-data db)))) (:data data)))
    )))


(re-frame/reg-event-db
 :set-rows
 (fn [db [_ rows]]
   (do
     (re-frame/dispatch [:set-headers rows])
     (re-frame/dispatch [:create-metas rows])
     (re-frame/dispatch [:set-types (rest rows)])
     (assoc db :rows (rest rows)))))

(re-frame/reg-event-db
 :load-turtle-handler
 (fn [db [_ response]]
   (println response)
   db))

(re-frame/reg-event-db
 :bad-response
 (fn [db [_ response]]
   (println response)
   db))

(defn download [fname text]
  (let [element (.createElement js/document "a")
        ]
    (do
      (.setAttribute element "href" (str "data:text/plain;charset=utf-8," (js/encodeURIComponent text)))
      (.setAttribute element "download" fname)
      (set! (.-display (.-style element)) "none")
      (.appendChild (.-body js/document) element)
      (.click element)
      (.removeChild (.-body js/document) element)
      )))

(re-frame/reg-event-db
 :download-turtle
 (fn [db _]
   (let [hmap {:name (:dataset-name db)
               :description (:description db)
               :url (:url db)
               :columns (:metas db)
               }]
     (download (str (:dataset-name db) ".ttl") (make-triples hmap)))

   db))

(re-frame/reg-event-db
 :create-metadata
 (fn [db _]
   (let [metas (map :metadata (:metas db))
         hmap {:name (:dataset-name db)
               :description (:description db)
               :url (:url db)
               :columns (:metas db)
               }]
     (println (make-triples hmap))
     (POST (str HOST "/add/") {:params {:file (make-triples hmap)}
                               :headers {:content-type "application/json"
                                         ;; :access-control-allow-origin "*"
                                         ;; :access-control-allow-methods "GET, POST"
                                         ;; :access-control-allow-headers "X-Custom-Header"
                                         }
                               :format :json
                               :handler #(re-frame/dispatch [:load-turtle-handler %1])
                               :bad-response #(re-frame/dispatch [:bad-response %1])})
     db)))

;; QUERY STUFF

(re-frame/reg-event-db
 :update-sparql
 (fn [db [_ query]]
   (assoc db :sparql query)))


(re-frame/reg-event-db
 :update-sparql-b
 (fn [db [_ query]]
   (assoc db :sparql-b query)))


(re-frame/reg-event-db
 :set-dataset
 (fn [db [_ ids]]
   (let [i (js/parseInt (first ids))]
     (println i)
     (assoc db :dataset (:label (nth (:datasets db) i))))))

(re-frame/reg-event-db
 :update-srate
 (fn [db [_ rate]]
   (assoc db :srate rate)))

(re-frame/reg-event-db
 :add-triple
 (fn [db _]
   (assoc (assoc (assoc db :cat-qa (conj (:cat-qa db) nil)) :cat-qb (conj (:cat-qb db) nil)) :filtered-cats (conj (:filtered-cats db) []))))

(re-frame/reg-event-db
 :change-cat-a
 (fn [db [_ i new]]
   (println new)
   (assoc-in (assoc-in (assoc-in db [:cat-qa i] new) [:filtered-cats i] (vec (filter-choices-by-keyword (:cat-bs db) :cat-id new))) [:cat-qb i] nil)))

(re-frame/reg-event-db
 :change-cat-b
 (fn [db [_ i new]]
   (println new)
   (assoc-in db [:cat-qb i] new)))

(re-frame/reg-event-db
 :delete-q-row
 (fn [db [_ row-id]]
   (assoc db :cat-qa (vec (drop-nth (:cat-qa db) row-id)))))


(re-frame/reg-event-db
 :query-response-handler
 (fn [db [_ response]]
   (let [json (get response "out")
         p (println response)
         j (js->clj (.parse js/JSON json) :keywordize-keys true)
         f (get-in j [:results :bindings 0 :f :value])
         x (get-in j [:results :bindings 0 :x :value])
         y (get-in j [:results :bindings 1 :y :value])
         local (if (.getElementById js/document "file") (first (array-seq (.-files (.getElementById js/document "file")))) nil)
         ]
     ;; (println response)
     (println f)
     (if local (println "local" "remote"))
     (if local
       (parser/parse-local local)
       (parser/parse-stream f))
     (assoc (assoc (assoc db :response response) :x x) :y y))))


(re-frame/reg-event-db
 :query-response-handler-b
 (fn [db [_ response]]
   (println response)
   (assoc db :response response)))

(re-frame/reg-event-db
 :error-handler
 (fn [db [_ response]]
   (do
     (println (str "SERVER ERROR: " response))
     db)
   ))

(re-frame/reg-event-db
 :send-sparql
 (let [query (re-frame/subscribe [:sparql])]
   (fn [db _]
     ;; (js/alert (str "Query is: " (:sparql db)))
     ;; (re-frame/dispatch [:set-chart-data {:date {:labels []
     ;;                                             :datasets [{:data []
     ;;                                                         :label "Value"}]}}])
     (POST (str HOST "/query/")
           {:params {:sparql @query}
            :format :json
            :access-control-allow-origin "*"
            :access-control-allow-methods "GET, POST"
            :access-control-allow-headers "X-Custom-Header,Content-Range,range"
            :handler #(re-frame/dispatch [:query-response-handler %1])
            :error-handler #(re-frame/dispatch [:error-handler %1])})

     db)))


(re-frame/reg-event-db
 :send-sparql-b
 (fn [db _]
   ;; (js/alert (str "Query is: " (:sparql db)))
   (POST (str HOST "/query/")
         {:params {:sparql (:sparql-b db)}
          :format :json
          :access-control-allow-origin "*"
          :access-control-allow-methods "GET, POST"
          :access-control-allow-headers "X-Custom-Header,Content-Range,range"
          :handler #(re-frame/dispatch [:query-response-handler-b %1])
          :error-handler #(re-frame/dispatch [:error-handler %1])})

   db))

(re-frame/reg-event-db
 :get-datasets
 (fn [db _]
   (do
     (re-frame/dispatch [:update-sparql-b (str
                                              "PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"
                                              "PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"
                                              "PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n"
                                              "SELECT ?label ?url WHERE {?url rdf:type csv:CsvDocument .\n"
                                              "                          ?url rdfs:label ?label}")])
     (re-frame/dispatch [:send-sparql-b])
     (let [urls (re-frame/subscribe [:data-urls])]
       (println (str "URLS:" @urls))
       (assoc db :datasets (map-indexed #(hash-map :id %1 :label (:label %2)) @urls))
       )
     )))

(re-frame/reg-event-db
 :tab-changed
 (fn [db [_ tab-id]]
   ;; (re-frame/dispatch [:get-datasets])
   (assoc db :current-tab tab-id)))
