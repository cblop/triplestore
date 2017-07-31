// Compiled by ClojureScript 1.9.229 {}
goog.provide('metagator.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('metagator.query');
goog.require('reagent.core');
metagator.views.tab_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tab1","tab1",457878244),new cljs.core.Keyword(null,"label","label",1718410804),"Create Metadata"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tab2","tab2",13933134),new cljs.core.Keyword(null,"label","label",1718410804),"Query Data"], null)], null);
metagator.views.filename = (function metagator$views$filename(){
var fname = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fname","fname",1500291491)], null));
return ((function (fname){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),fname,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fname){
return (function (p1__11896_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fname-change","fname-change",-2050391303),p1__11896_SHARP_], null));
});})(fname))
,new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
});
;})(fname))
});
metagator.views.localfile = (function metagator$views$localfile(){
var fname = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fname","fname",1500291491)], null));
return ((function (fname){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fname){
return (function (p1__11897_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),p1__11897_SHARP_], null));
});})(fname))
], null)], null);
});
;})(fname))
});
metagator.views.dataset_name = (function metagator$views$dataset_name(){
var dname = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dname","dname",-245817722)], null));
return ((function (dname){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Name of the dataset:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),dname,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (dname){
return (function (p1__11898_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dname-change","dname-change",-1804709417),p1__11898_SHARP_], null));
});})(dname))
,new cljs.core.Keyword(null,"width","width",-384071477),"40%"], null)], null)], null);
});
;})(dname))
});
metagator.views.description = (function metagator$views$description(){
var desc = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null));
return ((function (desc){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Description of the dataset:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),desc,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (desc){
return (function (p1__11899_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-description","update-description",1448758130),p1__11899_SHARP_], null));
});})(desc))
,new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], null);
});
;})(desc))
});
metagator.views.fbutton = (function metagator$views$fbutton(){
var fname = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fname","fname",1500291491)], null));
return ((function (fname){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Fetch",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fname){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch","fetch",-1081994244),cljs.core.deref.call(null,fname)], null));
});})(fname))
], null);
});
;})(fname))
});
metagator.views.rows_meta = (function metagator$views$rows_meta(type){
var types = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-types","data-types",-2140125264)], null));
var metas = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",-1269645878)))?re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null)):re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null)));
var cats = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),cljs.core.deref.call(null,types))));
var file = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",-1269645878)))?true:false);
var catmap = cljs.core.map.call(null,((function (types,metas,cats,file){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(types,metas,cats,file))
,cats,cljs.core.range.call(null,cljs.core.count.call(null,cats)));
var id_for_label = ((function (types,metas,cats,file,catmap){
return (function (label){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (types,metas,cats,file,catmap){
return (function (p1__11900_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11900_SHARP_),label);
});})(types,metas,cats,file,catmap))
,catmap)));
});})(types,metas,cats,file,catmap))
;
return ((function (types,metas,cats,file,catmap,id_for_label){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__7197__auto__ = ((function (types,metas,cats,file,catmap,id_for_label){
return (function metagator$views$rows_meta_$_iter__11925(s__11926){
return (new cljs.core.LazySeq(null,((function (types,metas,cats,file,catmap,id_for_label){
return (function (){
var s__11926__$1 = s__11926;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11926__$1);
if(temp__4657__auto__){
var s__11926__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11926__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11926__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11928 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11927 = (0);
while(true){
if((i__11927 < size__7196__auto__)){
var vec__11935 = cljs.core._nth.call(null,c__7195__auto__,i__11927);
var i = cljs.core.nth.call(null,vec__11935,(0),null);
var m = cljs.core.nth.call(null,vec__11935,(1),null);
cljs.core.chunk_append.call(null,b__11928,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",-1269645878)))?"#dfd":"#eef"),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Category:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),id_for_label.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11901_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-cat-a","set-file-cat-a",-1198416506),p1__11901_SHARP_,i], null));
});})(i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11902_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cat-a","set-cat-a",1941039827),p1__11902_SHARP_,i], null));
});})(i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"choices","choices",1385611597),catmap], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m))?(function (){var cat_b_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m)], null));
var selected_cat_b = ((file)?re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-file-cat-b","selected-file-cat-b",1378222179),cljs.core.deref.call(null,cat_b_filter),i], null)):re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-b","selected-cat-b",-1359388313),cljs.core.deref.call(null,cat_b_filter),i], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sub-category:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,selected_cat_b),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (i__11927,cat_b_filter,selected_cat_b,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11903_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-cat-b","set-file-cat-b",-749138455),p1__11903_SHARP_,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(i__11927,cat_b_filter,selected_cat_b,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (i__11927,cat_b_filter,selected_cat_b,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11904_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cat-b","set-cat-b",1237813548),p1__11904_SHARP_,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(i__11927,cat_b_filter,selected_cat_b,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.deref.call(null,cat_b_filter)], null)], null)], null);
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m))?(function (){var cat_c_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m)], null));
var selected_cat_c = ((file)?re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-file-cat-c","selected-file-cat-c",-621949955),cljs.core.deref.call(null,cat_c_filter),i], null)):re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-c","selected-cat-c",-2068898831),cljs.core.deref.call(null,cat_c_filter),i], null)));
if(cljs.core.seq.call(null,cljs.core.deref.call(null,cat_c_filter))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sub-sub-category:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,selected_cat_c),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (i__11927,cat_c_filter,selected_cat_c,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11905_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-cat-c","set-file-cat-c",814811210),p1__11905_SHARP_,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(i__11927,cat_c_filter,selected_cat_c,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (i__11927,cat_c_filter,selected_cat_c,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11906_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cat-c","set-cat-c",1657502319),p1__11906_SHARP_,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(i__11927,cat_c_filter,selected_cat_c,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.deref.call(null,cat_c_filter)], null)], null)], null);
} else {
return null;
}
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(m))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Label (optional):"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(m))?new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(m):""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11907_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-label","set-file-label",671965795),p1__11907_SHARP_,i], null));
});})(i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11908_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-label","set-label",646867621),p1__11908_SHARP_,i], null));
});})(i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((file)?((function (i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-file-row","delete-file-row",-2041013449),i], null));
});})(i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),i], null));
});})(i__11927,vec__11935,i,m,c__7195__auto__,size__7196__auto__,b__11928,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
)], null)], null)], null)], null)], null));

var G__11941 = (i__11927 + (1));
i__11927 = G__11941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11928),metagator$views$rows_meta_$_iter__11925.call(null,cljs.core.chunk_rest.call(null,s__11926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11928),null);
}
} else {
var vec__11938 = cljs.core.first.call(null,s__11926__$2);
var i = cljs.core.nth.call(null,vec__11938,(0),null);
var m = cljs.core.nth.call(null,vec__11938,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"file","file",-1269645878)))?"#dfd":"#eef"),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Category:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),id_for_label.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11901_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-cat-a","set-file-cat-a",-1198416506),p1__11901_SHARP_,i], null));
});})(vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11902_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cat-a","set-cat-a",1941039827),p1__11902_SHARP_,i], null));
});})(vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"choices","choices",1385611597),catmap], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m))?(function (){var cat_b_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m)], null));
var selected_cat_b = ((file)?re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-file-cat-b","selected-file-cat-b",1378222179),cljs.core.deref.call(null,cat_b_filter),i], null)):re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-b","selected-cat-b",-1359388313),cljs.core.deref.call(null,cat_b_filter),i], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sub-category:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,selected_cat_b),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (cat_b_filter,selected_cat_b,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11903_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-cat-b","set-file-cat-b",-749138455),p1__11903_SHARP_,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(cat_b_filter,selected_cat_b,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (cat_b_filter,selected_cat_b,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11904_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cat-b","set-cat-b",1237813548),p1__11904_SHARP_,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(cat_b_filter,selected_cat_b,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.deref.call(null,cat_b_filter)], null)], null)], null);
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m))?(function (){var cat_c_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m)], null));
var selected_cat_c = ((file)?re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-file-cat-c","selected-file-cat-c",-621949955),cljs.core.deref.call(null,cat_c_filter),i], null)):re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-c","selected-cat-c",-2068898831),cljs.core.deref.call(null,cat_c_filter),i], null)));
if(cljs.core.seq.call(null,cljs.core.deref.call(null,cat_c_filter))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sub-sub-category:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,selected_cat_c),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (cat_c_filter,selected_cat_c,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11905_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-cat-c","set-file-cat-c",814811210),p1__11905_SHARP_,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(cat_c_filter,selected_cat_c,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (cat_c_filter,selected_cat_c,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11906_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-cat-c","set-cat-c",1657502319),p1__11906_SHARP_,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(m),i], null));
});})(cat_c_filter,selected_cat_c,vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.deref.call(null,cat_c_filter)], null)], null)], null);
} else {
return null;
}
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(m))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Label (optional):"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(m))?new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(m):""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((file)?((function (vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11907_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-file-label","set-file-label",671965795),p1__11907_SHARP_,i], null));
});})(vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (p1__11908_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-label","set-label",646867621),p1__11908_SHARP_,i], null));
});})(vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
),new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((file)?((function (vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-file-row","delete-file-row",-2041013449),i], null));
});})(vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
:((function (vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),i], null));
});})(vec__11938,i,m,s__11926__$2,temp__4657__auto__,types,metas,cats,file,catmap,id_for_label))
)], null)], null)], null)], null)], null),metagator$views$rows_meta_$_iter__11925.call(null,cljs.core.rest.call(null,s__11926__$2)));
}
} else {
return null;
}
break;
}
});})(types,metas,cats,file,catmap,id_for_label))
,null,null));
});})(types,metas,cats,file,catmap,id_for_label))
;
return iter__7197__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,metas)));
})()], null);
});
;})(types,metas,cats,file,catmap,id_for_label))
});
metagator.views.metadata = (function metagator$views$metadata(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"label","label",1718410804),"File Metadata:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"This metadata is added to all rows in the table."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.rows_meta,new cljs.core.Keyword(null,"file","file",-1269645878)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add Metadata",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-file-meta","add-file-meta",320031083)], null));
})], null)], null)], null);
});
});
metagator.views.dtype = (function metagator$views$dtype(){
var selected = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
var types = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"types","types",590030639)], null));
var type = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-type","selected-type",97396872)], null));
return ((function (selected,types,type){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"label","label",1718410804),"Data Type:"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,type),new cljs.core.Keyword(null,"width","width",-384071477),"40%",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref.call(null,type))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#bbffbb",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected,types,type){
return (function (p1__11942_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-type","update-type",-137057043),p1__11942_SHARP_], null));
});})(selected,types,type))
,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.deref.call(null,types)], null)], null)], null);
});
;})(selected,types,type))
});
metagator.views.column = (function metagator$views$column(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.dtype], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"label","label",1718410804),"Metadata:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.rows_meta,new cljs.core.Keyword(null,"column","column",2078222095)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Add Metadata",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-meta","add-meta",20238360)], null));
})], null)], null)], null);
});
});
metagator.views.columns = (function metagator$views$columns(){
var headers = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-tabs","row-tabs",1912262317)], null));
var selected = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null));
return ((function (headers,selected){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.metadata], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"40px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,selected),new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.deref.call(null,headers),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (headers,selected){
return (function (p1__11943_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),p1__11943_SHARP_], null));
});})(headers,selected))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.column], null)], null)], null);
});
;})(headers,selected))
});
metagator.views.page_title = (function metagator$views$page_title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null)], null)], null);
});
;})(name))
});
metagator.views.go_button = (function metagator$views$go_button(){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Create Metadata!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-metadata","create-metadata",-737314720)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success"], null);
});
});
metagator.views.file_button = (function metagator$views$file_button(){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"200px"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Download .ttl file",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"download-turtle","download-turtle",-218138836)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default"], null);
});
});
metagator.views.tabs = (function metagator$views$tabs(){
var current_tab = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_tabs,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,current_tab),new cljs.core.Keyword(null,"tabs","tabs",-779855354),metagator.views.tab_list,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_tab){
return (function (p1__11944_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-changed","tab-changed",-2075573081),p1__11944_SHARP_], null));
});})(current_tab))
], null);
});
metagator.views.create_tab = (function metagator$views$create_tab(){
var heads = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-tabs","row-tabs",1912262317)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 15%",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Path to local CSV file:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.localfile], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"OR"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"60px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Path to remote CSV file:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.filename], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.fbutton], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.dataset_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.description], null),(cljs.core.truth_(cljs.core.deref.call(null,heads))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.columns], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 50px 0",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.file_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.go_button], null)], null)], null)], null):null)], null)], null);
});
metagator.views.query_tab = (function metagator$views$query_tab(){
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.dataset_drop], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.cat_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.sparql_text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.send_query], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.sample_rate], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.localfile_b], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"900px",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.query.chart_inner,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))], null)], null)], null)], null);
});
metagator.views.content = (function metagator$views$content(){
var current_tab = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null));
var G__11946 = (((cljs.core.deref.call(null,current_tab) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,current_tab).fqn:null);
switch (G__11946) {
case "tab1":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.create_tab], null);

break;
case "tab2":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.query_tab], null);

break;
default:
return re_com.core.gap;

}
});
metagator.views.main_panel = (function metagator$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.page_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.content], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=views.js.map?rel=1501400720097