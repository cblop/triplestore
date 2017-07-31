// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8440_8444 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8441_8445 = null;
var count__8442_8446 = (0);
var i__8443_8447 = (0);
while(true){
if((i__8443_8447 < count__8442_8446)){
var k_8448 = cljs.core._nth.call(null,chunk__8441_8445,i__8443_8447);
var v_8449 = (b[k_8448]);
(a[k_8448] = v_8449);

var G__8450 = seq__8440_8444;
var G__8451 = chunk__8441_8445;
var G__8452 = count__8442_8446;
var G__8453 = (i__8443_8447 + (1));
seq__8440_8444 = G__8450;
chunk__8441_8445 = G__8451;
count__8442_8446 = G__8452;
i__8443_8447 = G__8453;
continue;
} else {
var temp__4657__auto___8454 = cljs.core.seq.call(null,seq__8440_8444);
if(temp__4657__auto___8454){
var seq__8440_8455__$1 = temp__4657__auto___8454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8440_8455__$1)){
var c__7228__auto___8456 = cljs.core.chunk_first.call(null,seq__8440_8455__$1);
var G__8457 = cljs.core.chunk_rest.call(null,seq__8440_8455__$1);
var G__8458 = c__7228__auto___8456;
var G__8459 = cljs.core.count.call(null,c__7228__auto___8456);
var G__8460 = (0);
seq__8440_8444 = G__8457;
chunk__8441_8445 = G__8458;
count__8442_8446 = G__8459;
i__8443_8447 = G__8460;
continue;
} else {
var k_8461 = cljs.core.first.call(null,seq__8440_8455__$1);
var v_8462 = (b[k_8461]);
(a[k_8461] = v_8462);

var G__8463 = cljs.core.next.call(null,seq__8440_8455__$1);
var G__8464 = null;
var G__8465 = (0);
var G__8466 = (0);
seq__8440_8444 = G__8463;
chunk__8441_8445 = G__8464;
count__8442_8446 = G__8465;
i__8443_8447 = G__8466;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8467 = [];
var len__7492__auto___8470 = arguments.length;
var i__7493__auto___8471 = (0);
while(true){
if((i__7493__auto___8471 < len__7492__auto___8470)){
args8467.push((arguments[i__7493__auto___8471]));

var G__8472 = (i__7493__auto___8471 + (1));
i__7493__auto___8471 = G__8472;
continue;
} else {
}
break;
}

var G__8469 = args8467.length;
switch (G__8469) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8467.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8474 = (i + (2));
var G__8475 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8474;
ret = G__8475;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8476_8480 = cljs.core.seq.call(null,v);
var chunk__8477_8481 = null;
var count__8478_8482 = (0);
var i__8479_8483 = (0);
while(true){
if((i__8479_8483 < count__8478_8482)){
var x_8484 = cljs.core._nth.call(null,chunk__8477_8481,i__8479_8483);
ret.push(x_8484);

var G__8485 = seq__8476_8480;
var G__8486 = chunk__8477_8481;
var G__8487 = count__8478_8482;
var G__8488 = (i__8479_8483 + (1));
seq__8476_8480 = G__8485;
chunk__8477_8481 = G__8486;
count__8478_8482 = G__8487;
i__8479_8483 = G__8488;
continue;
} else {
var temp__4657__auto___8489 = cljs.core.seq.call(null,seq__8476_8480);
if(temp__4657__auto___8489){
var seq__8476_8490__$1 = temp__4657__auto___8489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8476_8490__$1)){
var c__7228__auto___8491 = cljs.core.chunk_first.call(null,seq__8476_8490__$1);
var G__8492 = cljs.core.chunk_rest.call(null,seq__8476_8490__$1);
var G__8493 = c__7228__auto___8491;
var G__8494 = cljs.core.count.call(null,c__7228__auto___8491);
var G__8495 = (0);
seq__8476_8480 = G__8492;
chunk__8477_8481 = G__8493;
count__8478_8482 = G__8494;
i__8479_8483 = G__8495;
continue;
} else {
var x_8496 = cljs.core.first.call(null,seq__8476_8490__$1);
ret.push(x_8496);

var G__8497 = cljs.core.next.call(null,seq__8476_8490__$1);
var G__8498 = null;
var G__8499 = (0);
var G__8500 = (0);
seq__8476_8480 = G__8497;
chunk__8477_8481 = G__8498;
count__8478_8482 = G__8499;
i__8479_8483 = G__8500;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8501_8505 = cljs.core.seq.call(null,v);
var chunk__8502_8506 = null;
var count__8503_8507 = (0);
var i__8504_8508 = (0);
while(true){
if((i__8504_8508 < count__8503_8507)){
var x_8509 = cljs.core._nth.call(null,chunk__8502_8506,i__8504_8508);
ret.push(x_8509);

var G__8510 = seq__8501_8505;
var G__8511 = chunk__8502_8506;
var G__8512 = count__8503_8507;
var G__8513 = (i__8504_8508 + (1));
seq__8501_8505 = G__8510;
chunk__8502_8506 = G__8511;
count__8503_8507 = G__8512;
i__8504_8508 = G__8513;
continue;
} else {
var temp__4657__auto___8514 = cljs.core.seq.call(null,seq__8501_8505);
if(temp__4657__auto___8514){
var seq__8501_8515__$1 = temp__4657__auto___8514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8501_8515__$1)){
var c__7228__auto___8516 = cljs.core.chunk_first.call(null,seq__8501_8515__$1);
var G__8517 = cljs.core.chunk_rest.call(null,seq__8501_8515__$1);
var G__8518 = c__7228__auto___8516;
var G__8519 = cljs.core.count.call(null,c__7228__auto___8516);
var G__8520 = (0);
seq__8501_8505 = G__8517;
chunk__8502_8506 = G__8518;
count__8503_8507 = G__8519;
i__8504_8508 = G__8520;
continue;
} else {
var x_8521 = cljs.core.first.call(null,seq__8501_8515__$1);
ret.push(x_8521);

var G__8522 = cljs.core.next.call(null,seq__8501_8515__$1);
var G__8523 = null;
var G__8524 = (0);
var G__8525 = (0);
seq__8501_8505 = G__8522;
chunk__8502_8506 = G__8523;
count__8503_8507 = G__8524;
i__8504_8508 = G__8525;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8526_8530 = cljs.core.seq.call(null,v);
var chunk__8527_8531 = null;
var count__8528_8532 = (0);
var i__8529_8533 = (0);
while(true){
if((i__8529_8533 < count__8528_8532)){
var x_8534 = cljs.core._nth.call(null,chunk__8527_8531,i__8529_8533);
ret.push(x_8534);

var G__8535 = seq__8526_8530;
var G__8536 = chunk__8527_8531;
var G__8537 = count__8528_8532;
var G__8538 = (i__8529_8533 + (1));
seq__8526_8530 = G__8535;
chunk__8527_8531 = G__8536;
count__8528_8532 = G__8537;
i__8529_8533 = G__8538;
continue;
} else {
var temp__4657__auto___8539 = cljs.core.seq.call(null,seq__8526_8530);
if(temp__4657__auto___8539){
var seq__8526_8540__$1 = temp__4657__auto___8539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8526_8540__$1)){
var c__7228__auto___8541 = cljs.core.chunk_first.call(null,seq__8526_8540__$1);
var G__8542 = cljs.core.chunk_rest.call(null,seq__8526_8540__$1);
var G__8543 = c__7228__auto___8541;
var G__8544 = cljs.core.count.call(null,c__7228__auto___8541);
var G__8545 = (0);
seq__8526_8530 = G__8542;
chunk__8527_8531 = G__8543;
count__8528_8532 = G__8544;
i__8529_8533 = G__8545;
continue;
} else {
var x_8546 = cljs.core.first.call(null,seq__8526_8540__$1);
ret.push(x_8546);

var G__8547 = cljs.core.next.call(null,seq__8526_8540__$1);
var G__8548 = null;
var G__8549 = (0);
var G__8550 = (0);
seq__8526_8530 = G__8547;
chunk__8527_8531 = G__8548;
count__8528_8532 = G__8549;
i__8529_8533 = G__8550;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8551 = [];
var len__7492__auto___8566 = arguments.length;
var i__7493__auto___8567 = (0);
while(true){
if((i__7493__auto___8567 < len__7492__auto___8566)){
args8551.push((arguments[i__7493__auto___8567]));

var G__8568 = (i__7493__auto___8567 + (1));
i__7493__auto___8567 = G__8568;
continue;
} else {
}
break;
}

var G__8553 = args8551.length;
switch (G__8553) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8551.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8554 = obj;
G__8554.push(kfn.call(null,k),vfn.call(null,v));

return G__8554;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8555 = cljs.core.clone.call(null,handlers);
x8555.forEach = ((function (x8555,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8556 = cljs.core.seq.call(null,coll);
var chunk__8557 = null;
var count__8558 = (0);
var i__8559 = (0);
while(true){
if((i__8559 < count__8558)){
var vec__8560 = cljs.core._nth.call(null,chunk__8557,i__8559);
var k = cljs.core.nth.call(null,vec__8560,(0),null);
var v = cljs.core.nth.call(null,vec__8560,(1),null);
f.call(null,v,k);

var G__8570 = seq__8556;
var G__8571 = chunk__8557;
var G__8572 = count__8558;
var G__8573 = (i__8559 + (1));
seq__8556 = G__8570;
chunk__8557 = G__8571;
count__8558 = G__8572;
i__8559 = G__8573;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8556);
if(temp__4657__auto__){
var seq__8556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8556__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__8556__$1);
var G__8574 = cljs.core.chunk_rest.call(null,seq__8556__$1);
var G__8575 = c__7228__auto__;
var G__8576 = cljs.core.count.call(null,c__7228__auto__);
var G__8577 = (0);
seq__8556 = G__8574;
chunk__8557 = G__8575;
count__8558 = G__8576;
i__8559 = G__8577;
continue;
} else {
var vec__8563 = cljs.core.first.call(null,seq__8556__$1);
var k = cljs.core.nth.call(null,vec__8563,(0),null);
var v = cljs.core.nth.call(null,vec__8563,(1),null);
f.call(null,v,k);

var G__8578 = cljs.core.next.call(null,seq__8556__$1);
var G__8579 = null;
var G__8580 = (0);
var G__8581 = (0);
seq__8556 = G__8578;
chunk__8557 = G__8579;
count__8558 = G__8580;
i__8559 = G__8581;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8555,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8555;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8582 = [];
var len__7492__auto___8588 = arguments.length;
var i__7493__auto___8589 = (0);
while(true){
if((i__7493__auto___8589 < len__7492__auto___8588)){
args8582.push((arguments[i__7493__auto___8589]));

var G__8590 = (i__7493__auto___8589 + (1));
i__7493__auto___8589 = G__8590;
continue;
} else {
}
break;
}

var G__8584 = args8582.length;
switch (G__8584) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8582.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8585 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8586){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8586 = meta8586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8587,meta8586__$1){
var self__ = this;
var _8587__$1 = this;
return (new cognitect.transit.t_cognitect$transit8585(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8586__$1));
});

cognitect.transit.t_cognitect$transit8585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8587){
var self__ = this;
var _8587__$1 = this;
return self__.meta8586;
});

cognitect.transit.t_cognitect$transit8585.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8585.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8585.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8585.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8586","meta8586",-415796096,null)], null);
});

cognitect.transit.t_cognitect$transit8585.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8585.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8585";

cognitect.transit.t_cognitect$transit8585.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/t_cognitect$transit8585");
});

cognitect.transit.__GT_t_cognitect$transit8585 = (function cognitect$transit$__GT_t_cognitect$transit8585(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8586){
return (new cognitect.transit.t_cognitect$transit8585(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8586));
});

}

return (new cognitect.transit.t_cognitect$transit8585(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6417__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1501400714291