// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__10845_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__10845_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___10846 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___10846)){
var not_i_10847 = temp__4657__auto___10846;
if(cljs.core.fn_QMARK_.call(null,not_i_10847)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_10847);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_10847);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_10862 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10863 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10820__auto___10876 = re_frame.interop.now.call(null);
var duration__10821__auto___10877 = (end__10820__auto___10876 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10864_10878 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10865_10879 = null;
var count__10866_10880 = (0);
var i__10867_10881 = (0);
while(true){
if((i__10867_10881 < count__10866_10880)){
var vec__10868_10882 = cljs.core._nth.call(null,chunk__10865_10879,i__10867_10881);
var k__10822__auto___10883 = cljs.core.nth.call(null,vec__10868_10882,(0),null);
var cb__10823__auto___10884 = cljs.core.nth.call(null,vec__10868_10882,(1),null);
try{cb__10823__auto___10884.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___10877,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10871){if((e10871 instanceof java.lang.Exception)){
var e__10824__auto___10885 = e10871;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___10883,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___10885);
} else {
throw e10871;

}
}
var G__10886 = seq__10864_10878;
var G__10887 = chunk__10865_10879;
var G__10888 = count__10866_10880;
var G__10889 = (i__10867_10881 + (1));
seq__10864_10878 = G__10886;
chunk__10865_10879 = G__10887;
count__10866_10880 = G__10888;
i__10867_10881 = G__10889;
continue;
} else {
var temp__4657__auto___10890 = cljs.core.seq.call(null,seq__10864_10878);
if(temp__4657__auto___10890){
var seq__10864_10891__$1 = temp__4657__auto___10890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10864_10891__$1)){
var c__7228__auto___10892 = cljs.core.chunk_first.call(null,seq__10864_10891__$1);
var G__10893 = cljs.core.chunk_rest.call(null,seq__10864_10891__$1);
var G__10894 = c__7228__auto___10892;
var G__10895 = cljs.core.count.call(null,c__7228__auto___10892);
var G__10896 = (0);
seq__10864_10878 = G__10893;
chunk__10865_10879 = G__10894;
count__10866_10880 = G__10895;
i__10867_10881 = G__10896;
continue;
} else {
var vec__10872_10897 = cljs.core.first.call(null,seq__10864_10891__$1);
var k__10822__auto___10898 = cljs.core.nth.call(null,vec__10872_10897,(0),null);
var cb__10823__auto___10899 = cljs.core.nth.call(null,vec__10872_10897,(1),null);
try{cb__10823__auto___10899.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10821__auto___10877,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10875){if((e10875 instanceof java.lang.Exception)){
var e__10824__auto___10900 = e10875;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10822__auto___10898,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10824__auto___10900);
} else {
throw e10875;

}
}
var G__10901 = cljs.core.next.call(null,seq__10864_10891__$1);
var G__10902 = null;
var G__10903 = (0);
var G__10904 = (0);
seq__10864_10878 = G__10901;
chunk__10865_10879 = G__10902;
count__10866_10880 = G__10903;
i__10867_10881 = G__10904;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10863;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_10862;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1501400718630