goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('metagator.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__56182__delegate = function (x){
if(cljs.core.truth_(metagator.core.mount_root)){
return cljs.core.apply.call(null,metagator.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metagator.core/mount-root' is missing");
}
};
var G__56182 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__56183__i = 0, G__56183__a = new Array(arguments.length -  0);
while (G__56183__i < G__56183__a.length) {G__56183__a[G__56183__i] = arguments[G__56183__i + 0]; ++G__56183__i;}
  x = new cljs.core.IndexedSeq(G__56183__a,0);
} 
return G__56182__delegate.call(this,x);};
G__56182.cljs$lang$maxFixedArity = 0;
G__56182.cljs$lang$applyTo = (function (arglist__56184){
var x = cljs.core.seq(arglist__56184);
return G__56182__delegate(x);
});
G__56182.cljs$core$IFn$_invoke$arity$variadic = G__56182__delegate;
return G__56182;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
