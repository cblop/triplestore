// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__11158_11168 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__11159_11169 = null;
var count__11160_11170 = (0);
var i__11161_11171 = (0);
while(true){
if((i__11161_11171 < count__11160_11170)){
var vec__11162_11172 = cljs.core._nth.call(null,chunk__11159_11169,i__11161_11171);
var k_11173 = cljs.core.nth.call(null,vec__11162_11172,(0),null);
var rxn_11174 = cljs.core.nth.call(null,vec__11162_11172,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_11174);

var G__11175 = seq__11158_11168;
var G__11176 = chunk__11159_11169;
var G__11177 = count__11160_11170;
var G__11178 = (i__11161_11171 + (1));
seq__11158_11168 = G__11175;
chunk__11159_11169 = G__11176;
count__11160_11170 = G__11177;
i__11161_11171 = G__11178;
continue;
} else {
var temp__4657__auto___11179 = cljs.core.seq.call(null,seq__11158_11168);
if(temp__4657__auto___11179){
var seq__11158_11180__$1 = temp__4657__auto___11179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11158_11180__$1)){
var c__7228__auto___11181 = cljs.core.chunk_first.call(null,seq__11158_11180__$1);
var G__11182 = cljs.core.chunk_rest.call(null,seq__11158_11180__$1);
var G__11183 = c__7228__auto___11181;
var G__11184 = cljs.core.count.call(null,c__7228__auto___11181);
var G__11185 = (0);
seq__11158_11168 = G__11182;
chunk__11159_11169 = G__11183;
count__11160_11170 = G__11184;
i__11161_11171 = G__11185;
continue;
} else {
var vec__11165_11186 = cljs.core.first.call(null,seq__11158_11180__$1);
var k_11187 = cljs.core.nth.call(null,vec__11165_11186,(0),null);
var rxn_11188 = cljs.core.nth.call(null,vec__11165_11186,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_11188);

var G__11189 = cljs.core.next.call(null,seq__11158_11180__$1);
var G__11190 = null;
var G__11191 = (0);
var G__11192 = (0);
seq__11158_11168 = G__11189;
chunk__11159_11169 = G__11190;
count__11160_11170 = G__11191;
i__11161_11171 = G__11192;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11206 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10820__auto___11219 = re_frame.interop.now.call(null);
var duration__10821__auto___11220 = (end__10820__auto___11219 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11207_11221 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11208_11222 = null;
var count__11209_11223 = (0);
var i__11210_11224 = (0);
while(true){
if((i__11210_11224 < count__11209_11223)){
var vec__11211_11225 = cljs.core._nth.call(null,chunk__11208_11222,i__11210_11224);
var k__10822__auto___11226 = cljs.core.nth.call(null,vec__11211_11225,(0),null);
var cb__10823__auto___11227 = cljs.core.nth.call(null,vec__11211_11225,(1),null);
try{cb__10823__auto___11227.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11220,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11214){if((e11214 instanceof java.lang.Exception)){
var e__10824__auto___11228 = e11214;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11226,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11228);
} else {
throw e11214;

}
}
var G__11229 = seq__11207_11221;
var G__11230 = chunk__11208_11222;
var G__11231 = count__11209_11223;
var G__11232 = (i__11210_11224 + (1));
seq__11207_11221 = G__11229;
chunk__11208_11222 = G__11230;
count__11209_11223 = G__11231;
i__11210_11224 = G__11232;
continue;
} else {
var temp__4657__auto___11233 = cljs.core.seq.call(null,seq__11207_11221);
if(temp__4657__auto___11233){
var seq__11207_11234__$1 = temp__4657__auto___11233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11207_11234__$1)){
var c__7228__auto___11235 = cljs.core.chunk_first.call(null,seq__11207_11234__$1);
var G__11236 = cljs.core.chunk_rest.call(null,seq__11207_11234__$1);
var G__11237 = c__7228__auto___11235;
var G__11238 = cljs.core.count.call(null,c__7228__auto___11235);
var G__11239 = (0);
seq__11207_11221 = G__11236;
chunk__11208_11222 = G__11237;
count__11209_11223 = G__11238;
i__11210_11224 = G__11239;
continue;
} else {
var vec__11215_11240 = cljs.core.first.call(null,seq__11207_11234__$1);
var k__10822__auto___11241 = cljs.core.nth.call(null,vec__11215_11240,(0),null);
var cb__10823__auto___11242 = cljs.core.nth.call(null,vec__11215_11240,(1),null);
try{cb__10823__auto___11242.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11220,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11218){if((e11218 instanceof java.lang.Exception)){
var e__10824__auto___11243 = e11218;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11241,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11243);
} else {
throw e11218;

}
}
var G__11244 = cljs.core.next.call(null,seq__11207_11234__$1);
var G__11245 = null;
var G__11246 = (0);
var G__11247 = (0);
seq__11207_11221 = G__11244;
chunk__11208_11222 = G__11245;
count__11209_11223 = G__11246;
i__11210_11224 = G__11247;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11206;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11248 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11248;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args11249 = [];
var len__7492__auto___11252 = arguments.length;
var i__7493__auto___11253 = (0);
while(true){
if((i__7493__auto___11253 < len__7492__auto___11252)){
args11249.push((arguments[i__7493__auto___11253]));

var G__11254 = (i__7493__auto___11253 + (1));
i__7493__auto___11253 = G__11254;
continue;
} else {
}
break;
}

var G__11251 = args11249.length;
switch (G__11251) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11249.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args11256 = [];
var len__7492__auto___11285 = arguments.length;
var i__7493__auto___11286 = (0);
while(true){
if((i__7493__auto___11286 < len__7492__auto___11285)){
args11256.push((arguments[i__7493__auto___11286]));

var G__11287 = (i__7493__auto___11286 + (1));
i__7493__auto___11286 = G__11287;
continue;
} else {
}
break;
}

var G__11258 = args11256.length;
switch (G__11258) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11256.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11259 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11289 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11289;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11290 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11290;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11291 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11291;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10820__auto___11292 = re_frame.interop.now.call(null);
var duration__10821__auto___11293 = (end__10820__auto___11292 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11260_11294 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11261_11295 = null;
var count__11262_11296 = (0);
var i__11263_11297 = (0);
while(true){
if((i__11263_11297 < count__11262_11296)){
var vec__11264_11298 = cljs.core._nth.call(null,chunk__11261_11295,i__11263_11297);
var k__10822__auto___11299 = cljs.core.nth.call(null,vec__11264_11298,(0),null);
var cb__10823__auto___11300 = cljs.core.nth.call(null,vec__11264_11298,(1),null);
try{cb__10823__auto___11300.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11293,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11267){if((e11267 instanceof java.lang.Exception)){
var e__10824__auto___11301 = e11267;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11299,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11301);
} else {
throw e11267;

}
}
var G__11302 = seq__11260_11294;
var G__11303 = chunk__11261_11295;
var G__11304 = count__11262_11296;
var G__11305 = (i__11263_11297 + (1));
seq__11260_11294 = G__11302;
chunk__11261_11295 = G__11303;
count__11262_11296 = G__11304;
i__11263_11297 = G__11305;
continue;
} else {
var temp__4657__auto___11306 = cljs.core.seq.call(null,seq__11260_11294);
if(temp__4657__auto___11306){
var seq__11260_11307__$1 = temp__4657__auto___11306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11260_11307__$1)){
var c__7228__auto___11308 = cljs.core.chunk_first.call(null,seq__11260_11307__$1);
var G__11309 = cljs.core.chunk_rest.call(null,seq__11260_11307__$1);
var G__11310 = c__7228__auto___11308;
var G__11311 = cljs.core.count.call(null,c__7228__auto___11308);
var G__11312 = (0);
seq__11260_11294 = G__11309;
chunk__11261_11295 = G__11310;
count__11262_11296 = G__11311;
i__11263_11297 = G__11312;
continue;
} else {
var vec__11268_11313 = cljs.core.first.call(null,seq__11260_11307__$1);
var k__10822__auto___11314 = cljs.core.nth.call(null,vec__11268_11313,(0),null);
var cb__10823__auto___11315 = cljs.core.nth.call(null,vec__11268_11313,(1),null);
try{cb__10823__auto___11315.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11293,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11271){if((e11271 instanceof java.lang.Exception)){
var e__10824__auto___11316 = e11271;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11314,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11316);
} else {
throw e11271;

}
}
var G__11317 = cljs.core.next.call(null,seq__11260_11307__$1);
var G__11318 = null;
var G__11319 = (0);
var G__11320 = (0);
seq__11260_11294 = G__11317;
chunk__11261_11295 = G__11318;
count__11262_11296 = G__11319;
i__11263_11297 = G__11320;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11259;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11321 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11321;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11322 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11322;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11323 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11323;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11272 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11324 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11324;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11325 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11325;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___11326 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___11326)){
var not_reactive_11327 = temp__4657__auto___11326;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_11327);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11328 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11328;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_11272){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_11272))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_11272){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_11272))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_11272){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_11272))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10820__auto___11329 = re_frame.interop.now.call(null);
var duration__10821__auto___11330 = (end__10820__auto___11329 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11273_11331 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11274_11332 = null;
var count__11275_11333 = (0);
var i__11276_11334 = (0);
while(true){
if((i__11276_11334 < count__11275_11333)){
var vec__11277_11335 = cljs.core._nth.call(null,chunk__11274_11332,i__11276_11334);
var k__10822__auto___11336 = cljs.core.nth.call(null,vec__11277_11335,(0),null);
var cb__10823__auto___11337 = cljs.core.nth.call(null,vec__11277_11335,(1),null);
try{cb__10823__auto___11337.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11330,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11280){if((e11280 instanceof java.lang.Exception)){
var e__10824__auto___11338 = e11280;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11336,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11338);
} else {
throw e11280;

}
}
var G__11339 = seq__11273_11331;
var G__11340 = chunk__11274_11332;
var G__11341 = count__11275_11333;
var G__11342 = (i__11276_11334 + (1));
seq__11273_11331 = G__11339;
chunk__11274_11332 = G__11340;
count__11275_11333 = G__11341;
i__11276_11334 = G__11342;
continue;
} else {
var temp__4657__auto___11343 = cljs.core.seq.call(null,seq__11273_11331);
if(temp__4657__auto___11343){
var seq__11273_11344__$1 = temp__4657__auto___11343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11273_11344__$1)){
var c__7228__auto___11345 = cljs.core.chunk_first.call(null,seq__11273_11344__$1);
var G__11346 = cljs.core.chunk_rest.call(null,seq__11273_11344__$1);
var G__11347 = c__7228__auto___11345;
var G__11348 = cljs.core.count.call(null,c__7228__auto___11345);
var G__11349 = (0);
seq__11273_11331 = G__11346;
chunk__11274_11332 = G__11347;
count__11275_11333 = G__11348;
i__11276_11334 = G__11349;
continue;
} else {
var vec__11281_11350 = cljs.core.first.call(null,seq__11273_11344__$1);
var k__10822__auto___11351 = cljs.core.nth.call(null,vec__11281_11350,(0),null);
var cb__10823__auto___11352 = cljs.core.nth.call(null,vec__11281_11350,(1),null);
try{cb__10823__auto___11352.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11330,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11284){if((e11284 instanceof java.lang.Exception)){
var e__10824__auto___11353 = e11284;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11351,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11353);
} else {
throw e11284;

}
}
var G__11354 = cljs.core.next.call(null,seq__11273_11344__$1);
var G__11355 = null;
var G__11356 = (0);
var G__11357 = (0);
seq__11273_11331 = G__11354;
chunk__11274_11332 = G__11355;
count__11275_11333 = G__11356;
i__11276_11334 = G__11357;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11272;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11358 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11358;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11359 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11359;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___11360 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___11360)){
var not_reactive_11361 = temp__4657__auto___11360;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_11361);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11362 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11362;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: no subscription handler registered for: \""),cljs.core.str(query_id),cljs.core.str("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__11367){
var vec__11368 = p__11367;
var k = cljs.core.nth.call(null,vec__11368,(0),null);
var v = cljs.core.nth.call(null,vec__11368,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10837__auto___11371 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10837__auto___11371;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__7499__auto__ = [];
var len__7492__auto___11427 = arguments.length;
var i__7493__auto___11428 = (0);
while(true){
if((i__7493__auto___11428 < len__7492__auto___11427)){
args__7499__auto__.push((arguments[i__7493__auto___11428]));

var G__11429 = (i__7493__auto___11428 + (1));
i__7493__auto___11428 = G__11429;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__11374 = cljs.core.count.call(null,input_args);
switch (G__11374) {
case (0):
return ((function (G__11374,computation_fn,input_args,err_header){
return (function() {
var G__11431 = null;
var G__11431__1 = (function (_){
return re_frame.db.app_db;
});
var G__11431__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__11431 = function(_,___$1){
switch(arguments.length){
case 1:
return G__11431__1.call(this,_);
case 2:
return G__11431__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11431.cljs$core$IFn$_invoke$arity$1 = G__11431__1;
G__11431.cljs$core$IFn$_invoke$arity$2 = G__11431__2;
return G__11431;
})()
;})(G__11374,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__11374,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__11374,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__11374,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__11374,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11401 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10820__auto___11432 = re_frame.interop.now.call(null);
var duration__10821__auto___11433 = (end__10820__auto___11432 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11402_11434 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11403_11435 = null;
var count__11404_11436 = (0);
var i__11405_11437 = (0);
while(true){
if((i__11405_11437 < count__11404_11436)){
var vec__11406_11438 = cljs.core._nth.call(null,chunk__11403_11435,i__11405_11437);
var k__10822__auto___11439 = cljs.core.nth.call(null,vec__11406_11438,(0),null);
var cb__10823__auto___11440 = cljs.core.nth.call(null,vec__11406_11438,(1),null);
try{cb__10823__auto___11440.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11433,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11409){if((e11409 instanceof java.lang.Exception)){
var e__10824__auto___11441 = e11409;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11439,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11441);
} else {
throw e11409;

}
}
var G__11442 = seq__11402_11434;
var G__11443 = chunk__11403_11435;
var G__11444 = count__11404_11436;
var G__11445 = (i__11405_11437 + (1));
seq__11402_11434 = G__11442;
chunk__11403_11435 = G__11443;
count__11404_11436 = G__11444;
i__11405_11437 = G__11445;
continue;
} else {
var temp__4657__auto___11446 = cljs.core.seq.call(null,seq__11402_11434);
if(temp__4657__auto___11446){
var seq__11402_11447__$1 = temp__4657__auto___11446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11402_11447__$1)){
var c__7228__auto___11448 = cljs.core.chunk_first.call(null,seq__11402_11447__$1);
var G__11449 = cljs.core.chunk_rest.call(null,seq__11402_11447__$1);
var G__11450 = c__7228__auto___11448;
var G__11451 = cljs.core.count.call(null,c__7228__auto___11448);
var G__11452 = (0);
seq__11402_11434 = G__11449;
chunk__11403_11435 = G__11450;
count__11404_11436 = G__11451;
i__11405_11437 = G__11452;
continue;
} else {
var vec__11410_11453 = cljs.core.first.call(null,seq__11402_11447__$1);
var k__10822__auto___11454 = cljs.core.nth.call(null,vec__11410_11453,(0),null);
var cb__10823__auto___11455 = cljs.core.nth.call(null,vec__11410_11453,(1),null);
try{cb__10823__auto___11455.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11433,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11413){if((e11413 instanceof java.lang.Exception)){
var e__10824__auto___11456 = e11413;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11454,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11456);
} else {
throw e11413;

}
}
var G__11457 = cljs.core.next.call(null,seq__11402_11447__$1);
var G__11458 = null;
var G__11459 = (0);
var G__11460 = (0);
seq__11402_11434 = G__11457;
chunk__11403_11435 = G__11458;
count__11404_11436 = G__11459;
i__11405_11437 = G__11460;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11401;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11414 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10820__auto___11461 = re_frame.interop.now.call(null);
var duration__10821__auto___11462 = (end__10820__auto___11461 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11415_11463 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11416_11464 = null;
var count__11417_11465 = (0);
var i__11418_11466 = (0);
while(true){
if((i__11418_11466 < count__11417_11465)){
var vec__11419_11467 = cljs.core._nth.call(null,chunk__11416_11464,i__11418_11466);
var k__10822__auto___11468 = cljs.core.nth.call(null,vec__11419_11467,(0),null);
var cb__10823__auto___11469 = cljs.core.nth.call(null,vec__11419_11467,(1),null);
try{cb__10823__auto___11469.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11462,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11422){if((e11422 instanceof java.lang.Exception)){
var e__10824__auto___11470 = e11422;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11468,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11470);
} else {
throw e11422;

}
}
var G__11471 = seq__11415_11463;
var G__11472 = chunk__11416_11464;
var G__11473 = count__11417_11465;
var G__11474 = (i__11418_11466 + (1));
seq__11415_11463 = G__11471;
chunk__11416_11464 = G__11472;
count__11417_11465 = G__11473;
i__11418_11466 = G__11474;
continue;
} else {
var temp__4657__auto___11475 = cljs.core.seq.call(null,seq__11415_11463);
if(temp__4657__auto___11475){
var seq__11415_11476__$1 = temp__4657__auto___11475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11415_11476__$1)){
var c__7228__auto___11477 = cljs.core.chunk_first.call(null,seq__11415_11476__$1);
var G__11478 = cljs.core.chunk_rest.call(null,seq__11415_11476__$1);
var G__11479 = c__7228__auto___11477;
var G__11480 = cljs.core.count.call(null,c__7228__auto___11477);
var G__11481 = (0);
seq__11415_11463 = G__11478;
chunk__11416_11464 = G__11479;
count__11417_11465 = G__11480;
i__11418_11466 = G__11481;
continue;
} else {
var vec__11423_11482 = cljs.core.first.call(null,seq__11415_11476__$1);
var k__10822__auto___11483 = cljs.core.nth.call(null,vec__11423_11482,(0),null);
var cb__10823__auto___11484 = cljs.core.nth.call(null,vec__11423_11482,(1),null);
try{cb__10823__auto___11484.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___11462,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11426){if((e11426 instanceof java.lang.Exception)){
var e__10824__auto___11485 = e11426;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___11483,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___11485);
} else {
throw e11426;

}
}
var G__11486 = cljs.core.next.call(null,seq__11415_11476__$1);
var G__11487 = null;
var G__11488 = (0);
var G__11489 = (0);
seq__11415_11463 = G__11486;
chunk__11416_11464 = G__11487;
count__11417_11465 = G__11488;
i__11418_11466 = G__11489;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11414;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq11372){
var G__11373 = cljs.core.first.call(null,seq11372);
var seq11372__$1 = cljs.core.next.call(null,seq11372);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__11373,seq11372__$1);
});


//# sourceMappingURL=subs.js.map?rel=1501400719279