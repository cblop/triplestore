// Compiled by ClojureScript 1.9.229 {}
goog.provide('metagator.meta');
goog.require('cljs.core');
goog.require('re_frame.core');
metagator.meta.CSV = "http://www.ntnu.no/ub/data/csv#";
metagator.meta.RDFS = "http://www.w3.org/2000/01/rdf-schema#";
metagator.meta.DC = "http://purl.org/dc/terms/";
metagator.meta.XSD = "http://www.w3.org/2001/XMLSchema#";
metagator.meta.prefixer = (function metagator$meta$prefixer(name,uri){
return [cljs.core.str("@prefix "),cljs.core.str(name),cljs.core.str(":<"),cljs.core.str(uri),cljs.core.str("> .")].join('');
});
metagator.meta.column_triples = (function metagator$meta$column_triples(columns){
var iter__7197__auto__ = (function metagator$meta$column_triples_$_iter__11648(s__11649){
return (new cljs.core.LazySeq(null,(function (){
var s__11649__$1 = s__11649;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11649__$1);
if(temp__4657__auto__){
var s__11649__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11649__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11649__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11651 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11650 = (0);
while(true){
if((i__11650 < size__7196__auto__)){
var i = cljs.core._nth.call(null,c__7195__auto__,i__11650);
cljs.core.chunk_append.call(null,b__11651,(function (){var col = cljs.core.nth.call(null,columns,i);
return [cljs.core.str(":column"),cljs.core.str(i),cljs.core.str(" a csv:Column ;\n"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str("  rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("\" ;\n")].join(''):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = ((function (i__11650,col,i,c__7195__auto__,size__7196__auto__,b__11651,s__11649__$2,temp__4657__auto__){
return (function metagator$meta$column_triples_$_iter__11648_$_iter__11660(s__11661){
return (new cljs.core.LazySeq(null,((function (i__11650,col,i,c__7195__auto__,size__7196__auto__,b__11651,s__11649__$2,temp__4657__auto__){
return (function (){
var s__11661__$1 = s__11661;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11661__$1);
if(temp__4657__auto____$1){
var s__11661__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11661__$2)){
var c__7195__auto____$1 = cljs.core.chunk_first.call(null,s__11661__$2);
var size__7196__auto____$1 = cljs.core.count.call(null,c__7195__auto____$1);
var b__11663 = cljs.core.chunk_buffer.call(null,size__7196__auto____$1);
if((function (){var i__11662 = (0);
while(true){
if((i__11662 < size__7196__auto____$1)){
var m = cljs.core._nth.call(null,c__7195__auto____$1,i__11662);
cljs.core.chunk_append.call(null,b__11663,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})());

var G__11668 = (i__11662 + (1));
i__11662 = G__11668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11663),metagator$meta$column_triples_$_iter__11648_$_iter__11660.call(null,cljs.core.chunk_rest.call(null,s__11661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11663),null);
}
} else {
var m = cljs.core.first.call(null,s__11661__$2);
return cljs.core.cons.call(null,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})(),metagator$meta$column_triples_$_iter__11648_$_iter__11660.call(null,cljs.core.rest.call(null,s__11661__$2)));
}
} else {
return null;
}
break;
}
});})(i__11650,col,i,c__7195__auto__,size__7196__auto__,b__11651,s__11649__$2,temp__4657__auto__))
,null,null));
});})(i__11650,col,i,c__7195__auto__,size__7196__auto__,b__11651,s__11649__$2,temp__4657__auto__))
;
return iter__7197__auto__.call(null,col);
})())),cljs.core.str("  csv:hasIndex \""),cljs.core.str(i),cljs.core.str("\" .\n\n")].join('');
})());

var G__11669 = (i__11650 + (1));
i__11650 = G__11669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11651),metagator$meta$column_triples_$_iter__11648.call(null,cljs.core.chunk_rest.call(null,s__11649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11651),null);
}
} else {
var i = cljs.core.first.call(null,s__11649__$2);
return cljs.core.cons.call(null,(function (){var col = cljs.core.nth.call(null,columns,i);
return [cljs.core.str(":column"),cljs.core.str(i),cljs.core.str(" a csv:Column ;\n"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str("  rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("\" ;\n")].join(''):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = ((function (col,i,s__11649__$2,temp__4657__auto__){
return (function metagator$meta$column_triples_$_iter__11648_$_iter__11664(s__11665){
return (new cljs.core.LazySeq(null,((function (col,i,s__11649__$2,temp__4657__auto__){
return (function (){
var s__11665__$1 = s__11665;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11665__$1);
if(temp__4657__auto____$1){
var s__11665__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11665__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11665__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11667 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11666 = (0);
while(true){
if((i__11666 < size__7196__auto__)){
var m = cljs.core._nth.call(null,c__7195__auto__,i__11666);
cljs.core.chunk_append.call(null,b__11667,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})());

var G__11670 = (i__11666 + (1));
i__11666 = G__11670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11667),metagator$meta$column_triples_$_iter__11648_$_iter__11664.call(null,cljs.core.chunk_rest.call(null,s__11665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11667),null);
}
} else {
var m = cljs.core.first.call(null,s__11665__$2);
return cljs.core.cons.call(null,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})(),metagator$meta$column_triples_$_iter__11648_$_iter__11664.call(null,cljs.core.rest.call(null,s__11665__$2)));
}
} else {
return null;
}
break;
}
});})(col,i,s__11649__$2,temp__4657__auto__))
,null,null));
});})(col,i,s__11649__$2,temp__4657__auto__))
;
return iter__7197__auto__.call(null,col);
})())),cljs.core.str("  csv:hasIndex \""),cljs.core.str(i),cljs.core.str("\" .\n\n")].join('');
})(),metagator$meta$column_triples_$_iter__11648.call(null,cljs.core.rest.call(null,s__11649__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,columns)));
});
metagator.meta.make_triples = (function metagator$meta$make_triples(hmap){
var csv = metagator.meta.prefixer.call(null,"csv",metagator.meta.CSV);
var rdfs = metagator.meta.prefixer.call(null,"rdfs",metagator.meta.RDFS);
var dcterms = metagator.meta.prefixer.call(null,"dcterms",metagator.meta.DC);
var xsd = metagator.meta.prefixer.call(null,"xsd",metagator.meta.XSD);
var seas = metagator.meta.prefixer.call(null,"seas","https://w3id.org/seas#");
var dm4t = metagator.meta.prefixer.call(null,"dm4t","http://www.cs.bath.ac.uk/dm4t#");
var ssn = metagator.meta.prefixer.call(null,"ssn","http://purl.oclc.org/NET/ssnx/ssn#");
var prefix = [cljs.core.str("@prefix: <http://www.cs.bath.ac.uk/dm4t/dataset/"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("/> .")].join('');
return cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,"\n",csv,"\n",dm4t,"\n",rdfs,"\n",dcterms,"\n",xsd,"\n",seas,"\n",ssn,"\n","\n\n",[cljs.core.str("<"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("> a csv:CsvDocument ;\n")].join(''),[cljs.core.str("  rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("\" ;\n")].join(''),[cljs.core.str("  rdfs:comment \""),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("\" ;\n")].join(''),cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = ((function (csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix){
return (function metagator$meta$make_triples_$_iter__11675(s__11676){
return (new cljs.core.LazySeq(null,((function (csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix){
return (function (){
var s__11676__$1 = s__11676;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11676__$1);
if(temp__4657__auto__){
var s__11676__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11676__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11676__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11678 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11677 = (0);
while(true){
if((i__11677 < size__7196__auto__)){
var i = cljs.core._nth.call(null,c__7195__auto__,i__11677);
cljs.core.chunk_append.call(null,b__11678,[cljs.core.str("  csv:hasColumn :column"),cljs.core.str(i),cljs.core.str(((cljs.core._EQ_.call(null,i,(cljs.core.count.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap)) - (1))))?" .\n\n":" ;\n"))].join(''));

var G__11679 = (i__11677 + (1));
i__11677 = G__11679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11678),metagator$meta$make_triples_$_iter__11675.call(null,cljs.core.chunk_rest.call(null,s__11676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11678),null);
}
} else {
var i = cljs.core.first.call(null,s__11676__$2);
return cljs.core.cons.call(null,[cljs.core.str("  csv:hasColumn :column"),cljs.core.str(i),cljs.core.str(((cljs.core._EQ_.call(null,i,(cljs.core.count.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap)) - (1))))?" .\n\n":" ;\n"))].join(''),metagator$meta$make_triples_$_iter__11675.call(null,cljs.core.rest.call(null,s__11676__$2)));
}
} else {
return null;
}
break;
}
});})(csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix))
,null,null));
});})(csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix))
;
return iter__7197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap))));
})()),cljs.core.apply.call(null,cljs.core.str,metagator.meta.column_triples.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap)))], null));
});

//# sourceMappingURL=meta.js.map?rel=1501400719613