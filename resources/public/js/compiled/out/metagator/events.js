// Compiled by ClojureScript 1.9.229 {}
goog.provide('metagator.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('metagator.db');
goog.require('metagator.meta');
goog.require('metagator.parser');
goog.require('metagator.types');
goog.require('re_com.dropdown');
goog.require('re_frame.core');
metagator.events.HOST = "http://localhost:3449";
metagator.events.query_template = "PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n  PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\n\n  SELECT ?f ?i \n  WHERE {?f csv:hasColumn ?c .\n                ?c csv:mapsTo ssn:hasValue .\n                ?c csv:hasIndex ?i .}";
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return metagator.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype","ftype",1067426552),(function (db,p__11686){
var vec__11687 = p__11686;
var _ = cljs.core.nth.call(null,vec__11687,(0),null);
var type = cljs.core.nth.call(null,vec__11687,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype","ftype",1067426552),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),(function (db,p__11690){
var vec__11691 = p__11690;
var _ = cljs.core.nth.call(null,vec__11691,(0),null);
var type = cljs.core.nth.call(null,vec__11691,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fname-change","fname-change",-2050391303),(function (db,p__11694){
var vec__11695 = p__11694;
var _ = cljs.core.nth.call(null,vec__11695,(0),null);
var fname = cljs.core.nth.call(null,vec__11695,(1),null);
metagator.parser.parse_remote_sample.call(null,fname,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),fname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dname-change","dname-change",-1804709417),(function (db,p__11698){
var vec__11699 = p__11698;
var _ = cljs.core.nth.call(null,vec__11699,(0),null);
var dname = cljs.core.nth.call(null,vec__11699,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725),dname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),(function (db,p__11702){
var vec__11703 = p__11702;
var _ = cljs.core.nth.call(null,vec__11703,(0),null);
var fname = cljs.core.nth.call(null,vec__11703,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
metagator.parser.parse_sample.call(null,url,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http://mist.cs.bath.ac.uk/dataset/"),cljs.core.str(url.name)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stream-local","stream-local",784320646),(function (db,p__11706){
var vec__11707 = p__11706;
var _ = cljs.core.nth.call(null,vec__11707,(0),null);
var fname = cljs.core.nth.call(null,vec__11707,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
return metagator.parser.parse_local.call(null,url);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),(function (db,p__11710){
var vec__11711 = p__11710;
var _ = cljs.core.nth.call(null,vec__11711,(0),null);
var fname = cljs.core.nth.call(null,vec__11711,(1),null);
metagator.parser.parse_sample.call(null,fname,(10));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-types","set-types",-1195325353),(function (db,p__11714){
var vec__11715 = p__11714;
var _ = cljs.core.nth.call(null,vec__11715,(0),null);
var rows = cljs.core.nth.call(null,vec__11715,(1),null);
var types = cljs.core.map.call(null,metagator.types.detect_type,cljs.core.first.call(null,rows));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),types);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-description","update-description",1448758130),(function (db,p__11718){
var vec__11719 = p__11718;
var _ = cljs.core.nth.call(null,vec__11719,(0),null);
var description = cljs.core.nth.call(null,vec__11719,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"description","description",-1428560544),description);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-type","update-type",-137057043),(function (db,p__11723){
var vec__11724 = p__11723;
var _ = cljs.core.nth.call(null,vec__11724,(0),null);
var type = cljs.core.nth.call(null,vec__11724,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var new_type = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tab,vec__11724,_,type){
return (function (p1__11722_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11722_SHARP_),type);
});})(tab,vec__11724,_,type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),cljs.core.assoc.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"row-types","row-types",-301702756).cljs$core$IFn$_invoke$arity$1(db)),tab,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new_type)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-selected-type","set-selected-type",1542768903),(function (db,p__11727){
var vec__11728 = p__11727;
var _ = cljs.core.nth.call(null,vec__11728,(0),null);
var type = cljs.core.nth.call(null,vec__11728,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-type","selected-type",97396872),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),(function (db,p__11731){
var vec__11732 = p__11731;
var _ = cljs.core.nth.call(null,vec__11732,(0),null);
var rows = cljs.core.nth.call(null,vec__11732,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.first.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-meta","add-meta",20238360),(function (db,_){
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.conj.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-file-meta","add-file-meta",320031083),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.conj.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-a","set-cat-a",1941039827),(function (db,p__11735){
var vec__11736 = p__11735;
var _ = cljs.core.nth.call(null,vec__11736,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11736,(1),null);
var row_id = cljs.core.nth.call(null,vec__11736,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-b","set-cat-b",1237813548),(function (db,p__11739){
var vec__11740 = p__11739;
var _ = cljs.core.nth.call(null,vec__11740,(0),null);
var cat_b = cljs.core.nth.call(null,vec__11740,(1),null);
var cat_a = cljs.core.nth.call(null,vec__11740,(2),null);
var row_id = cljs.core.nth.call(null,vec__11740,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),cat_a], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_bs),cat_b));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-c","set-cat-c",1657502319),(function (db,p__11743){
var vec__11744 = p__11743;
var _ = cljs.core.nth.call(null,vec__11744,(0),null);
var cat_c = cljs.core.nth.call(null,vec__11744,(1),null);
var cat_b = cljs.core.nth.call(null,vec__11744,(2),null);
var row_id = cljs.core.nth.call(null,vec__11744,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_cs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),cat_b], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_cs),cat_c));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-a","set-file-cat-a",-1198416506),(function (db,p__11747){
var vec__11748 = p__11747;
var _ = cljs.core.nth.call(null,vec__11748,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11748,(1),null);
var row_id = cljs.core.nth.call(null,vec__11748,(2),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-b","set-file-cat-b",-749138455),(function (db,p__11751){
var vec__11752 = p__11751;
var _ = cljs.core.nth.call(null,vec__11752,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11752,(1),null);
var cat_a = cljs.core.nth.call(null,vec__11752,(2),null);
var row_id = cljs.core.nth.call(null,vec__11752,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-c","set-file-cat-c",814811210),(function (db,p__11755){
var vec__11756 = p__11755;
var _ = cljs.core.nth.call(null,vec__11756,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11756,(1),null);
var cat_b = cljs.core.nth.call(null,vec__11756,(2),null);
var row_id = cljs.core.nth.call(null,vec__11756,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-metadata","set-metadata",1293757705),(function (db,p__11759){
var vec__11760 = p__11759;
var _ = cljs.core.nth.call(null,vec__11760,(0),null);
var meta_id = cljs.core.nth.call(null,vec__11760,(1),null);
var cat = cljs.core.nth.call(null,vec__11760,(2),null);
var row_id = cljs.core.nth.call(null,vec__11760,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-metadata","set-file-metadata",-1632351526),(function (db,p__11763){
var vec__11764 = p__11763;
var _ = cljs.core.nth.call(null,vec__11764,(0),null);
var meta_id = cljs.core.nth.call(null,vec__11764,(1),null);
var cat = cljs.core.nth.call(null,vec__11764,(2),null);
var row_id = cljs.core.nth.call(null,vec__11764,(3),null);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
metagator.events.drop_nth = (function metagator$events$drop_nth(coll,n){
return cljs.core.keep_indexed.call(null,(function (p1__11767_SHARP_,p2__11768_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__11767_SHARP_,n)){
return p2__11768_SHARP_;
} else {
return null;
}
}),coll);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),(function (db,p__11769){
var vec__11770 = p__11769;
var _ = cljs.core.nth.call(null,vec__11770,(0),null);
var row_id = cljs.core.nth.call(null,vec__11770,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.vec.call(null,metagator.events.drop_nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-file-row","delete-file-row",-2041013449),(function (db,p__11773){
var vec__11774 = p__11773;
var _ = cljs.core.nth.call(null,vec__11774,(0),null);
var row_id = cljs.core.nth.call(null,vec__11774,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.vec.call(null,metagator.events.drop_nth.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-label","set-label",646867621),(function (db,p__11777){
var vec__11778 = p__11777;
var _ = cljs.core.nth.call(null,vec__11778,(0),null);
var label_data = cljs.core.nth.call(null,vec__11778,(1),null);
var row_id = cljs.core.nth.call(null,vec__11778,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-label","set-file-label",671965795),(function (db,p__11781){
var vec__11782 = p__11781;
var _ = cljs.core.nth.call(null,vec__11782,(0),null);
var label_data = cljs.core.nth.call(null,vec__11782,(1),null);
var row_id = cljs.core.nth.call(null,vec__11782,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),(function (db,p__11785){
var vec__11786 = p__11785;
var _ = cljs.core.nth.call(null,vec__11786,(0),null);
var tab = cljs.core.nth.call(null,vec__11786,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),tab);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"srate-change","srate-change",-1919140064),(function (db,p__11789){
var vec__11790 = p__11789;
var _ = cljs.core.nth.call(null,vec__11790,(0),null);
var val = cljs.core.nth.call(null,vec__11790,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),(function (db,p__11793){
var vec__11794 = p__11793;
var _ = cljs.core.nth.call(null,vec__11794,(0),null);
var rows = cljs.core.nth.call(null,vec__11794,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"metas","metas",-187243671),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.first.call(null,rows)),cljs.core.PersistentVector.EMPTY)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-chart-data","reset-chart-data",-1279678973),(function (db,p__11797){
var vec__11798 = p__11797;
var _ = cljs.core.nth.call(null,vec__11798,(0),null);
var data = cljs.core.nth.call(null,vec__11798,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.PersistentVector.EMPTY], null)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-chart-data","set-chart-data",-1309213466),(function (db,p__11801){
var vec__11802 = p__11801;
var _ = cljs.core.nth.call(null,vec__11802,(0),null);
var data = cljs.core.nth.call(null,vec__11802,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-chart-data","add-chart-data",1222194486),(function (db,p__11805){
var vec__11806 = p__11805;
var _ = cljs.core.nth.call(null,vec__11806,(0),null);
var data = cljs.core.nth.call(null,vec__11806,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"labels","labels",-626734591)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"datasets","datasets",1896364419),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$2(cljs.core.first.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-rows","set-rows",-1811730869),(function (db,p__11809){
var vec__11810 = p__11809;
var _ = cljs.core.nth.call(null,vec__11810,(0),null);
var rows = cljs.core.nth.call(null,vec__11810,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-types","set-types",-1195325353),cljs.core.rest.call(null,rows)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.rest.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),(function (db,p__11813){
var vec__11814 = p__11813;
var _ = cljs.core.nth.call(null,vec__11814,(0),null);
var response = cljs.core.nth.call(null,vec__11814,(1),null);
cljs.core.println.call(null,response);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__11817){
var vec__11818 = p__11817;
var _ = cljs.core.nth.call(null,vec__11818,(0),null);
var response = cljs.core.nth.call(null,vec__11818,(1),null);
cljs.core.println.call(null,response);

return db;
}));
metagator.events.download = (function metagator$events$download(fname,text){
var element = document.createElement("a");
element.setAttribute("href",[cljs.core.str("data:text/plain;charset=utf-8,"),cljs.core.str(encodeURIComponent(text))].join(''));

element.setAttribute("download",fname);

element.style.display = "none";

document.body.appendChild(element);

element.click();

return document.body.removeChild(element);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"download-turtle","download-turtle",-218138836),(function (db,_){
var hmap_11821 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
metagator.events.download.call(null,[cljs.core.str(new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str(".ttl")].join(''),metagator.meta.make_triples.call(null,hmap_11821));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metadata","create-metadata",-737314720),(function (db,_){
var metas = cljs.core.map.call(null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db));
var hmap = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
cljs.core.println.call(null,metagator.meta.make_triples.call(null,hmap));

ajax.core.POST.call(null,[cljs.core.str(metagator.events.HOST),cljs.core.str("/add/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),metagator.meta.make_triples.call(null,hmap)], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (metas,hmap){
return (function (p1__11822_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__11822_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__11823_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__11823_SHARP_], null));
});})(metas,hmap))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql","update-sparql",-180981025),(function (db,p__11824){
var vec__11825 = p__11824;
var _ = cljs.core.nth.call(null,vec__11825,(0),null);
var query = cljs.core.nth.call(null,vec__11825,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql","sparql",1388494024),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),(function (db,p__11828){
var vec__11829 = p__11828;
var _ = cljs.core.nth.call(null,vec__11829,(0),null);
var query = cljs.core.nth.call(null,vec__11829,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-dataset","set-dataset",-649615350),(function (db,p__11832){
var vec__11833 = p__11832;
var _ = cljs.core.nth.call(null,vec__11833,(0),null);
var ids = cljs.core.nth.call(null,vec__11833,(1),null);
var i = parseInt(cljs.core.first.call(null,ids));
cljs.core.println.call(null,i);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),i)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-srate","update-srate",-1652749956),(function (db,p__11836){
var vec__11837 = p__11836;
var _ = cljs.core.nth.call(null,vec__11837,(0),null);
var rate = cljs.core.nth.call(null,vec__11837,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),rate);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-triple","add-triple",-625145023),(function (db,_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),cljs.core.conj.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-a","change-cat-a",1674669587),(function (db,p__11840){
var vec__11841 = p__11840;
var _ = cljs.core.nth.call(null,vec__11841,(0),null);
var i = cljs.core.nth.call(null,vec__11841,(1),null);
var new$ = cljs.core.nth.call(null,vec__11841,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),i], null),new$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),i], null),cljs.core.vec.call(null,re_com.dropdown.filter_choices_by_keyword.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),new$))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-b","change-cat-b",2124561258),(function (db,p__11844){
var vec__11845 = p__11844;
var _ = cljs.core.nth.call(null,vec__11845,(0),null);
var i = cljs.core.nth.call(null,vec__11845,(1),null);
var new$ = cljs.core.nth.call(null,vec__11845,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),new$);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-q-row","delete-q-row",-1585082354),(function (db,p__11848){
var vec__11849 = p__11848;
var _ = cljs.core.nth.call(null,vec__11849,(0),null);
var row_id = cljs.core.nth.call(null,vec__11849,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.vec.call(null,metagator.events.drop_nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),(function (db,p__11852){
var vec__11853 = p__11852;
var _ = cljs.core.nth.call(null,vec__11853,(0),null);
var response = cljs.core.nth.call(null,vec__11853,(1),null);
var json = cljs.core.get.call(null,response,"out");
var p = cljs.core.println.call(null,response);
var j = cljs.core.js__GT_clj.call(null,JSON.parse(json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var f = cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(0),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"value","value",305978217)], null));
var x = cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(0),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"value","value",305978217)], null));
var y = cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(1),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"value","value",305978217)], null));
var local = (cljs.core.truth_(document.getElementById("file"))?cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files)):null);
cljs.core.println.call(null,f);

if(cljs.core.truth_(local)){
cljs.core.println.call(null,"local","remote");
} else {
}

if(cljs.core.truth_(local)){
metagator.parser.parse_local.call(null,local);
} else {
metagator.parser.parse_stream.call(null,f);
}

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"response","response",-1068424192),response),new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),(function (db,p__11856){
var vec__11857 = p__11856;
var _ = cljs.core.nth.call(null,vec__11857,(0),null);
var response = cljs.core.nth.call(null,vec__11857,(1),null);
cljs.core.println.call(null,response);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"response","response",-1068424192),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (db,p__11860){
var vec__11861 = p__11860;
var _ = cljs.core.nth.call(null,vec__11861,(0),null);
var response = cljs.core.nth.call(null,vec__11861,(1),null);
cljs.core.println.call(null,[cljs.core.str("SERVER ERROR: "),cljs.core.str(response)].join(''));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133),(function (){var query = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sparql","sparql",1388494024)], null));
return ((function (query){
return (function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metagator.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),cljs.core.deref.call(null,query)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (query){
return (function (p1__11864_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),p1__11864_SHARP_], null));
});})(query))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (query){
return (function (p1__11865_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__11865_SHARP_], null));
});})(query))
], null));

return db;
});
;})(query))
})());
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metagator.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11866_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__11866_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11867_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__11867_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740),(function (db,_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),[cljs.core.str("PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"),cljs.core.str("PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"),cljs.core.str("PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n"),cljs.core.str("SELECT ?label ?url WHERE {?url rdf:type csv:CsvDocument .\n"),cljs.core.str("                          ?url rdfs:label ?label}")].join('')], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904)], null));

var urls = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-urls","data-urls",1907911823)], null));
cljs.core.println.call(null,[cljs.core.str("URLS:"),cljs.core.str(cljs.core.deref.call(null,urls))].join(''));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.map_indexed.call(null,((function (urls){
return (function (p1__11868_SHARP_,p2__11869_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__11868_SHARP_,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p2__11869_SHARP_)]);
});})(urls))
,cljs.core.deref.call(null,urls)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tab-changed","tab-changed",-2075573081),(function (db,p__11870){
var vec__11871 = p__11870;
var _ = cljs.core.nth.call(null,vec__11871,(0),null);
var tab_id = cljs.core.nth.call(null,vec__11871,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),tab_id);
}));

//# sourceMappingURL=events.js.map?rel=1501400719836