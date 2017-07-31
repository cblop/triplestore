goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('metagator.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__111314__delegate = function (x){
if(cljs.core.truth_(metagator.core.mount_root)){
return cljs.core.apply.call(null,metagator.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metagator.core/mount-root' is missing");
}
};
var G__111314 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__111315__i = 0, G__111315__a = new Array(arguments.length -  0);
while (G__111315__i < G__111315__a.length) {G__111315__a[G__111315__i] = arguments[G__111315__i + 0]; ++G__111315__i;}
  x = new cljs.core.IndexedSeq(G__111315__a,0);
} 
return G__111314__delegate.call(this,x);};
G__111314.cljs$lang$maxFixedArity = 0;
G__111314.cljs$lang$applyTo = (function (arglist__111316){
var x = cljs.core.seq(arglist__111316);
return G__111314__delegate(x);
});
G__111314.cljs$core$IFn$_invoke$arity$variadic = G__111314__delegate;
return G__111314;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
