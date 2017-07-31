// Compiled by ClojureScript 1.9.229 {}
goog.provide('metagator.query');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('metagator.parser');
goog.require('cljsjs.chartjs');
goog.require('reagent.core');
metagator.query.title = (function metagator$query$title(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"MetaMaker",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
});
metagator.query.localfile_b = (function metagator$query$localfile_b(){
var fname = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fname","fname",1500291491)], null));
return ((function (fname){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fname){
return (function (p1__11876_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),p1__11876_SHARP_], null));
});})(fname))
], null)], null);
});
;})(fname))
});
metagator.query.dataset_drop = (function metagator$query$dataset_drop(){
var datasets = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null));
var selected = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Datasets:"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100px",new cljs.core.Keyword(null,"choices","choices",1385611597),datasets,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),false,new cljs.core.Keyword(null,"model","model",331153215),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (datasets,selected){
return (function (p1__11877_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dataset","set-dataset",-649615350),p1__11877_SHARP_], null));
});})(datasets,selected))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-refresh",new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (datasets,selected){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));
});})(datasets,selected))
], null)], null)], null);
});
metagator.query.sparql_text = (function metagator$query$sparql_text(){
var sparql = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sparql","sparql",1388494024)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),sparql,new cljs.core.Keyword(null,"width","width",-384071477),"60%",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (sparql){
return (function (p1__11878_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-sparql","update-sparql",-180981025),p1__11878_SHARP_], null));
});})(sparql))
], null)], null)], null);
});
metagator.query.send_query = (function metagator$query$send_query(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Send Query",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133)], null));
})], null)], null)], null);
});
metagator.query.cat_a_drop = (function metagator$query$cat_a_drop(i){
var selected_cat_a = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-qa","selected-cat-qa",813901657),i], null));
var cat_as = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-as","cat-as",-764873094)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),selected_cat_a,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_cat_a,cat_as){
return (function (p1__11879_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cat-a","change-cat-a",1674669587),i,p1__11879_SHARP_], null));
});})(selected_cat_a,cat_as))
,new cljs.core.Keyword(null,"choices","choices",1385611597),cat_as,new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null)], null)], null);
});
metagator.query.cat_b_drop = (function metagator$query$cat_b_drop(i){
var selected_cat_b = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-qb","selected-cat-qb",760801536),i], null));
var filtered_cats = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),i], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),selected_cat_b,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_cat_b,filtered_cats){
return (function (p1__11880_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cat-b","change-cat-b",2124561258),i,p1__11880_SHARP_], null));
});})(selected_cat_b,filtered_cats))
,new cljs.core.Keyword(null,"choices","choices",1385611597),filtered_cats,new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null)], null)], null);
});
metagator.query.text_filter = (function metagator$query$text_filter(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
})], null);
});
metagator.query.sample_rate = (function metagator$query$sample_rate(){
var srate = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate","srate",-506238591)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sample every "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),srate,new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (srate){
return (function (p1__11881_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate-change","srate-change",-1919140064),p1__11881_SHARP_], null));
});})(srate))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804)," readings."], null)], null)], null);
});
metagator.query.cat_select = (function metagator$query$cat_select(){
var trips = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cats","selected-cats",-1104866136)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__7197__auto__ = ((function (trips){
return (function metagator$query$cat_select_$_iter__11886(s__11887){
return (new cljs.core.LazySeq(null,((function (trips){
return (function (){
var s__11887__$1 = s__11887;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11887__$1);
if(temp__4657__auto__){
var s__11887__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11887__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11887__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11889 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11888 = (0);
while(true){
if((i__11888 < size__7196__auto__)){
var i = cljs.core._nth.call(null,c__7195__auto__,i__11888);
cljs.core.chunk_append.call(null,b__11889,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,i,(0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"X axis:"], null):null),((cljs.core._EQ_.call(null,i,(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Y axis:"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Category"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.cat_a_drop,i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Subcategory"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.cat_b_drop,i], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null)], null)], null));

var G__11890 = (i__11888 + (1));
i__11888 = G__11890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11889),metagator$query$cat_select_$_iter__11886.call(null,cljs.core.chunk_rest.call(null,s__11887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11889),null);
}
} else {
var i = cljs.core.first.call(null,s__11887__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,i,(0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"X axis:"], null):null),((cljs.core._EQ_.call(null,i,(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Y axis:"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Category"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.cat_a_drop,i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Subcategory"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.cat_b_drop,i], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null)], null)], null),metagator$query$cat_select_$_iter__11886.call(null,cljs.core.rest.call(null,s__11887__$2)));
}
} else {
return null;
}
break;
}
});})(trips))
,null,null));
});})(trips))
;
return iter__7197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,trips))));
})()], null);
});
metagator.query.chart_inner = (function metagator$query$chart_inner(){
var chart = cljs.core.atom.call(null,null);
var update = ((function (chart){
return (function (comp){
cljs.core.deref.call(null,chart).data.labels = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,comp)));

cljs.core.deref.call(null,chart).data.datasets = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,comp)));

cljs.core.println.call(null,cljs.core.deref.call(null,chart).data);

cljs.core.println.call(null,reagent.core.props.call(null,comp));

return cljs.core.deref.call(null,chart).update();
});})(chart))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (chart,update){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"chart",new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null)], null);
});})(chart,update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (chart,update){
return (function (comp){
var context_11891 = document.getElementById("chart").getContext("2d");
var data_11892 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Values"], null)], null)], null)], null);
var obj_11893 = (new Chart(context_11891,cljs.core.clj__GT_js.call(null,data_11892)));
cljs.core.reset_BANG_.call(null,chart,obj_11893);

return update.call(null,comp);
});})(chart,update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update,new cljs.core.Keyword(null,"display-name","display-name",694513143),"chart-inner"], null));
});
metagator.query.add_triple = (function metagator$query$add_triple(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-triple","add-triple",-625145023)], null));
})], null)], null)], null);
});
metagator.query.get_readings = (function metagator$query$get_readings(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Get Readings",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null);
});

//# sourceMappingURL=query.js.map?rel=1501400719919