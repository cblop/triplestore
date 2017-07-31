// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__10991 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10992 = null;
var count__10993 = (0);
var i__10994 = (0);
while(true){
if((i__10994 < count__10993)){
var vec__10995 = cljs.core._nth.call(null,chunk__10992,i__10994);
var effect_k = cljs.core.nth.call(null,vec__10995,(0),null);
var value = cljs.core.nth.call(null,vec__10995,(1),null);
var temp__4655__auto___11001 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___11001)){
var effect_fn_11002 = temp__4655__auto___11001;
effect_fn_11002.call(null,value);
} else {
}

var G__11003 = seq__10991;
var G__11004 = chunk__10992;
var G__11005 = count__10993;
var G__11006 = (i__10994 + (1));
seq__10991 = G__11003;
chunk__10992 = G__11004;
count__10993 = G__11005;
i__10994 = G__11006;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10991);
if(temp__4657__auto__){
var seq__10991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10991__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__10991__$1);
var G__11007 = cljs.core.chunk_rest.call(null,seq__10991__$1);
var G__11008 = c__7228__auto__;
var G__11009 = cljs.core.count.call(null,c__7228__auto__);
var G__11010 = (0);
seq__10991 = G__11007;
chunk__10992 = G__11008;
count__10993 = G__11009;
i__10994 = G__11010;
continue;
} else {
var vec__10998 = cljs.core.first.call(null,seq__10991__$1);
var effect_k = cljs.core.nth.call(null,vec__10998,(0),null);
var value = cljs.core.nth.call(null,vec__10998,(1),null);
var temp__4655__auto___11011 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___11011)){
var effect_fn_11012 = temp__4655__auto___11011;
effect_fn_11012.call(null,value);
} else {
}

var G__11013 = cljs.core.next.call(null,seq__10991__$1);
var G__11014 = null;
var G__11015 = (0);
var G__11016 = (0);
seq__10991 = G__11013;
chunk__10992 = G__11014;
count__10993 = G__11015;
i__10994 = G__11016;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11017 = cljs.core.seq.call(null,value);
var chunk__11018 = null;
var count__11019 = (0);
var i__11020 = (0);
while(true){
if((i__11020 < count__11019)){
var map__11021 = cljs.core._nth.call(null,chunk__11018,i__11020);
var map__11021__$1 = ((((!((map__11021 == null)))?((((map__11021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11021):map__11021);
var effect = map__11021__$1;
var ms = cljs.core.get.call(null,map__11021__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11021__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11017,chunk__11018,count__11019,i__11020,map__11021,map__11021__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11017,chunk__11018,count__11019,i__11020,map__11021,map__11021__$1,effect,ms,dispatch))
,ms);
}

var G__11025 = seq__11017;
var G__11026 = chunk__11018;
var G__11027 = count__11019;
var G__11028 = (i__11020 + (1));
seq__11017 = G__11025;
chunk__11018 = G__11026;
count__11019 = G__11027;
i__11020 = G__11028;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11017);
if(temp__4657__auto__){
var seq__11017__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11017__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__11017__$1);
var G__11029 = cljs.core.chunk_rest.call(null,seq__11017__$1);
var G__11030 = c__7228__auto__;
var G__11031 = cljs.core.count.call(null,c__7228__auto__);
var G__11032 = (0);
seq__11017 = G__11029;
chunk__11018 = G__11030;
count__11019 = G__11031;
i__11020 = G__11032;
continue;
} else {
var map__11023 = cljs.core.first.call(null,seq__11017__$1);
var map__11023__$1 = ((((!((map__11023 == null)))?((((map__11023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11023):map__11023);
var effect = map__11023__$1;
var ms = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11017,chunk__11018,count__11019,i__11020,map__11023,map__11023__$1,effect,ms,dispatch,seq__11017__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11017,chunk__11018,count__11019,i__11020,map__11023,map__11023__$1,effect,ms,dispatch,seq__11017__$1,temp__4657__auto__))
,ms);
}

var G__11033 = cljs.core.next.call(null,seq__11017__$1);
var G__11034 = null;
var G__11035 = (0);
var G__11036 = (0);
seq__11017 = G__11033;
chunk__11018 = G__11034;
count__11019 = G__11035;
i__11020 = G__11036;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__11037 = cljs.core.seq.call(null,value);
var chunk__11038 = null;
var count__11039 = (0);
var i__11040 = (0);
while(true){
if((i__11040 < count__11039)){
var event = cljs.core._nth.call(null,chunk__11038,i__11040);
re_frame.router.dispatch.call(null,event);

var G__11041 = seq__11037;
var G__11042 = chunk__11038;
var G__11043 = count__11039;
var G__11044 = (i__11040 + (1));
seq__11037 = G__11041;
chunk__11038 = G__11042;
count__11039 = G__11043;
i__11040 = G__11044;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11037);
if(temp__4657__auto__){
var seq__11037__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11037__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__11037__$1);
var G__11045 = cljs.core.chunk_rest.call(null,seq__11037__$1);
var G__11046 = c__7228__auto__;
var G__11047 = cljs.core.count.call(null,c__7228__auto__);
var G__11048 = (0);
seq__11037 = G__11045;
chunk__11038 = G__11046;
count__11039 = G__11047;
i__11040 = G__11048;
continue;
} else {
var event = cljs.core.first.call(null,seq__11037__$1);
re_frame.router.dispatch.call(null,event);

var G__11049 = cljs.core.next.call(null,seq__11037__$1);
var G__11050 = null;
var G__11051 = (0);
var G__11052 = (0);
seq__11037 = G__11049;
chunk__11038 = G__11050;
count__11039 = G__11051;
i__11040 = G__11052;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11053 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__11054 = null;
var count__11055 = (0);
var i__11056 = (0);
while(true){
if((i__11056 < count__11055)){
var event = cljs.core._nth.call(null,chunk__11054,i__11056);
clear_event.call(null,event);

var G__11057 = seq__11053;
var G__11058 = chunk__11054;
var G__11059 = count__11055;
var G__11060 = (i__11056 + (1));
seq__11053 = G__11057;
chunk__11054 = G__11058;
count__11055 = G__11059;
i__11056 = G__11060;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11053);
if(temp__4657__auto__){
var seq__11053__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11053__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__11053__$1);
var G__11061 = cljs.core.chunk_rest.call(null,seq__11053__$1);
var G__11062 = c__7228__auto__;
var G__11063 = cljs.core.count.call(null,c__7228__auto__);
var G__11064 = (0);
seq__11053 = G__11061;
chunk__11054 = G__11062;
count__11055 = G__11063;
i__11056 = G__11064;
continue;
} else {
var event = cljs.core.first.call(null,seq__11053__$1);
clear_event.call(null,event);

var G__11065 = cljs.core.next.call(null,seq__11053__$1);
var G__11066 = null;
var G__11067 = (0);
var G__11068 = (0);
seq__11053 = G__11065;
chunk__11054 = G__11066;
count__11055 = G__11067;
i__11056 = G__11068;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1501400718879