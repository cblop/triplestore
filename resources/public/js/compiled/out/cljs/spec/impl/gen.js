// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107392 = arguments.length;
var i__45810__auto___107393 = (0);
while(true){
if((i__45810__auto___107393 < len__45809__auto___107392)){
args__45816__auto__.push((arguments[i__45810__auto___107393]));

var G__107394 = (i__45810__auto___107393 + (1));
i__45810__auto___107393 = G__107394;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq107391){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107391));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107396 = arguments.length;
var i__45810__auto___107397 = (0);
while(true){
if((i__45810__auto___107397 < len__45809__auto___107396)){
args__45816__auto__.push((arguments[i__45810__auto___107397]));

var G__107398 = (i__45810__auto___107397 + (1));
i__45810__auto___107397 = G__107398;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq107395){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107395));
});

var g_QMARK__107399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_107400 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__107399){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__107399))
,null));
var mkg_107401 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__107399,g_107400){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__107399,g_107400))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__107399,g_107400,mkg_107401){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__107399).call(null,x);
});})(g_QMARK__107399,g_107400,mkg_107401))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__107399,g_107400,mkg_107401){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_107401).call(null,gfn);
});})(g_QMARK__107399,g_107400,mkg_107401))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__107399,g_107400,mkg_107401){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_107400).call(null,generator);
});})(g_QMARK__107399,g_107400,mkg_107401))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__54943__auto___107420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__54943__auto___107420){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107421 = arguments.length;
var i__45810__auto___107422 = (0);
while(true){
if((i__45810__auto___107422 < len__45809__auto___107421)){
args__45816__auto__.push((arguments[i__45810__auto___107422]));

var G__107423 = (i__45810__auto___107422 + (1));
i__45810__auto___107422 = G__107423;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107420))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107420){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107420),args);
});})(g__54943__auto___107420))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__54943__auto___107420){
return (function (seq107402){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107402));
});})(g__54943__auto___107420))
;


var g__54943__auto___107424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__54943__auto___107424){
return (function cljs$spec$impl$gen$list(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107425 = arguments.length;
var i__45810__auto___107426 = (0);
while(true){
if((i__45810__auto___107426 < len__45809__auto___107425)){
args__45816__auto__.push((arguments[i__45810__auto___107426]));

var G__107427 = (i__45810__auto___107426 + (1));
i__45810__auto___107426 = G__107427;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107424))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107424){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107424),args);
});})(g__54943__auto___107424))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__54943__auto___107424){
return (function (seq107403){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107403));
});})(g__54943__auto___107424))
;


var g__54943__auto___107428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__54943__auto___107428){
return (function cljs$spec$impl$gen$map(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107429 = arguments.length;
var i__45810__auto___107430 = (0);
while(true){
if((i__45810__auto___107430 < len__45809__auto___107429)){
args__45816__auto__.push((arguments[i__45810__auto___107430]));

var G__107431 = (i__45810__auto___107430 + (1));
i__45810__auto___107430 = G__107431;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107428))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107428){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107428),args);
});})(g__54943__auto___107428))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__54943__auto___107428){
return (function (seq107404){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107404));
});})(g__54943__auto___107428))
;


var g__54943__auto___107432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__54943__auto___107432){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107433 = arguments.length;
var i__45810__auto___107434 = (0);
while(true){
if((i__45810__auto___107434 < len__45809__auto___107433)){
args__45816__auto__.push((arguments[i__45810__auto___107434]));

var G__107435 = (i__45810__auto___107434 + (1));
i__45810__auto___107434 = G__107435;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107432))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107432){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107432),args);
});})(g__54943__auto___107432))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__54943__auto___107432){
return (function (seq107405){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107405));
});})(g__54943__auto___107432))
;


var g__54943__auto___107436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__54943__auto___107436){
return (function cljs$spec$impl$gen$set(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107437 = arguments.length;
var i__45810__auto___107438 = (0);
while(true){
if((i__45810__auto___107438 < len__45809__auto___107437)){
args__45816__auto__.push((arguments[i__45810__auto___107438]));

var G__107439 = (i__45810__auto___107438 + (1));
i__45810__auto___107438 = G__107439;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107436))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107436){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107436),args);
});})(g__54943__auto___107436))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__54943__auto___107436){
return (function (seq107406){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107406));
});})(g__54943__auto___107436))
;


var g__54943__auto___107440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__54943__auto___107440){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107441 = arguments.length;
var i__45810__auto___107442 = (0);
while(true){
if((i__45810__auto___107442 < len__45809__auto___107441)){
args__45816__auto__.push((arguments[i__45810__auto___107442]));

var G__107443 = (i__45810__auto___107442 + (1));
i__45810__auto___107442 = G__107443;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107440))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107440){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107440),args);
});})(g__54943__auto___107440))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__54943__auto___107440){
return (function (seq107407){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107407));
});})(g__54943__auto___107440))
;


var g__54943__auto___107444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__54943__auto___107444){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107445 = arguments.length;
var i__45810__auto___107446 = (0);
while(true){
if((i__45810__auto___107446 < len__45809__auto___107445)){
args__45816__auto__.push((arguments[i__45810__auto___107446]));

var G__107447 = (i__45810__auto___107446 + (1));
i__45810__auto___107446 = G__107447;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107444))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107444){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107444),args);
});})(g__54943__auto___107444))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__54943__auto___107444){
return (function (seq107408){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107408));
});})(g__54943__auto___107444))
;


var g__54943__auto___107448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__54943__auto___107448){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107449 = arguments.length;
var i__45810__auto___107450 = (0);
while(true){
if((i__45810__auto___107450 < len__45809__auto___107449)){
args__45816__auto__.push((arguments[i__45810__auto___107450]));

var G__107451 = (i__45810__auto___107450 + (1));
i__45810__auto___107450 = G__107451;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107448))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107448){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107448),args);
});})(g__54943__auto___107448))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__54943__auto___107448){
return (function (seq107409){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107409));
});})(g__54943__auto___107448))
;


var g__54943__auto___107452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__54943__auto___107452){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107453 = arguments.length;
var i__45810__auto___107454 = (0);
while(true){
if((i__45810__auto___107454 < len__45809__auto___107453)){
args__45816__auto__.push((arguments[i__45810__auto___107454]));

var G__107455 = (i__45810__auto___107454 + (1));
i__45810__auto___107454 = G__107455;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107452))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107452){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107452),args);
});})(g__54943__auto___107452))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__54943__auto___107452){
return (function (seq107410){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107410));
});})(g__54943__auto___107452))
;


var g__54943__auto___107456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__54943__auto___107456){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107457 = arguments.length;
var i__45810__auto___107458 = (0);
while(true){
if((i__45810__auto___107458 < len__45809__auto___107457)){
args__45816__auto__.push((arguments[i__45810__auto___107458]));

var G__107459 = (i__45810__auto___107458 + (1));
i__45810__auto___107458 = G__107459;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107456))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107456){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107456),args);
});})(g__54943__auto___107456))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__54943__auto___107456){
return (function (seq107411){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107411));
});})(g__54943__auto___107456))
;


var g__54943__auto___107460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__54943__auto___107460){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107461 = arguments.length;
var i__45810__auto___107462 = (0);
while(true){
if((i__45810__auto___107462 < len__45809__auto___107461)){
args__45816__auto__.push((arguments[i__45810__auto___107462]));

var G__107463 = (i__45810__auto___107462 + (1));
i__45810__auto___107462 = G__107463;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107460))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107460){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107460),args);
});})(g__54943__auto___107460))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__54943__auto___107460){
return (function (seq107412){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107412));
});})(g__54943__auto___107460))
;


var g__54943__auto___107464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__54943__auto___107464){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107465 = arguments.length;
var i__45810__auto___107466 = (0);
while(true){
if((i__45810__auto___107466 < len__45809__auto___107465)){
args__45816__auto__.push((arguments[i__45810__auto___107466]));

var G__107467 = (i__45810__auto___107466 + (1));
i__45810__auto___107466 = G__107467;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107464))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107464){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107464),args);
});})(g__54943__auto___107464))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__54943__auto___107464){
return (function (seq107413){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107413));
});})(g__54943__auto___107464))
;


var g__54943__auto___107468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__54943__auto___107468){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107469 = arguments.length;
var i__45810__auto___107470 = (0);
while(true){
if((i__45810__auto___107470 < len__45809__auto___107469)){
args__45816__auto__.push((arguments[i__45810__auto___107470]));

var G__107471 = (i__45810__auto___107470 + (1));
i__45810__auto___107470 = G__107471;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107468))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107468){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107468),args);
});})(g__54943__auto___107468))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__54943__auto___107468){
return (function (seq107414){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107414));
});})(g__54943__auto___107468))
;


var g__54943__auto___107472 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__54943__auto___107472){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107473 = arguments.length;
var i__45810__auto___107474 = (0);
while(true){
if((i__45810__auto___107474 < len__45809__auto___107473)){
args__45816__auto__.push((arguments[i__45810__auto___107474]));

var G__107475 = (i__45810__auto___107474 + (1));
i__45810__auto___107474 = G__107475;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107472))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107472){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107472),args);
});})(g__54943__auto___107472))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__54943__auto___107472){
return (function (seq107415){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107415));
});})(g__54943__auto___107472))
;


var g__54943__auto___107476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__54943__auto___107476){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107477 = arguments.length;
var i__45810__auto___107478 = (0);
while(true){
if((i__45810__auto___107478 < len__45809__auto___107477)){
args__45816__auto__.push((arguments[i__45810__auto___107478]));

var G__107479 = (i__45810__auto___107478 + (1));
i__45810__auto___107478 = G__107479;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107476))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107476){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107476),args);
});})(g__54943__auto___107476))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__54943__auto___107476){
return (function (seq107416){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107416));
});})(g__54943__auto___107476))
;


var g__54943__auto___107480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__54943__auto___107480){
return (function cljs$spec$impl$gen$return(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107481 = arguments.length;
var i__45810__auto___107482 = (0);
while(true){
if((i__45810__auto___107482 < len__45809__auto___107481)){
args__45816__auto__.push((arguments[i__45810__auto___107482]));

var G__107483 = (i__45810__auto___107482 + (1));
i__45810__auto___107482 = G__107483;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107480))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107480){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107480),args);
});})(g__54943__auto___107480))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__54943__auto___107480){
return (function (seq107417){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107417));
});})(g__54943__auto___107480))
;


var g__54943__auto___107484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__54943__auto___107484){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107485 = arguments.length;
var i__45810__auto___107486 = (0);
while(true){
if((i__45810__auto___107486 < len__45809__auto___107485)){
args__45816__auto__.push((arguments[i__45810__auto___107486]));

var G__107487 = (i__45810__auto___107486 + (1));
i__45810__auto___107486 = G__107487;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107484))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107484){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107484),args);
});})(g__54943__auto___107484))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__54943__auto___107484){
return (function (seq107418){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107418));
});})(g__54943__auto___107484))
;


var g__54943__auto___107488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__54943__auto___107488){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107489 = arguments.length;
var i__45810__auto___107490 = (0);
while(true){
if((i__45810__auto___107490 < len__45809__auto___107489)){
args__45816__auto__.push((arguments[i__45810__auto___107490]));

var G__107491 = (i__45810__auto___107490 + (1));
i__45810__auto___107490 = G__107491;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54943__auto___107488))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54943__auto___107488){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54943__auto___107488),args);
});})(g__54943__auto___107488))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__54943__auto___107488){
return (function (seq107419){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107419));
});})(g__54943__auto___107488))
;

var g__54956__auto___107513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__54956__auto___107513){
return (function cljs$spec$impl$gen$any(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107514 = arguments.length;
var i__45810__auto___107515 = (0);
while(true){
if((i__45810__auto___107515 < len__45809__auto___107514)){
args__45816__auto__.push((arguments[i__45810__auto___107515]));

var G__107516 = (i__45810__auto___107515 + (1));
i__45810__auto___107515 = G__107516;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107513))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107513){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107513);
});})(g__54956__auto___107513))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__54956__auto___107513){
return (function (seq107492){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107492));
});})(g__54956__auto___107513))
;


var g__54956__auto___107517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__54956__auto___107517){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107518 = arguments.length;
var i__45810__auto___107519 = (0);
while(true){
if((i__45810__auto___107519 < len__45809__auto___107518)){
args__45816__auto__.push((arguments[i__45810__auto___107519]));

var G__107520 = (i__45810__auto___107519 + (1));
i__45810__auto___107519 = G__107520;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107517))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107517){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107517);
});})(g__54956__auto___107517))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__54956__auto___107517){
return (function (seq107493){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107493));
});})(g__54956__auto___107517))
;


var g__54956__auto___107521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__54956__auto___107521){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107522 = arguments.length;
var i__45810__auto___107523 = (0);
while(true){
if((i__45810__auto___107523 < len__45809__auto___107522)){
args__45816__auto__.push((arguments[i__45810__auto___107523]));

var G__107524 = (i__45810__auto___107523 + (1));
i__45810__auto___107523 = G__107524;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107521))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107521){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107521);
});})(g__54956__auto___107521))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__54956__auto___107521){
return (function (seq107494){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107494));
});})(g__54956__auto___107521))
;


var g__54956__auto___107525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__54956__auto___107525){
return (function cljs$spec$impl$gen$char(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107526 = arguments.length;
var i__45810__auto___107527 = (0);
while(true){
if((i__45810__auto___107527 < len__45809__auto___107526)){
args__45816__auto__.push((arguments[i__45810__auto___107527]));

var G__107528 = (i__45810__auto___107527 + (1));
i__45810__auto___107527 = G__107528;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107525))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107525){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107525);
});})(g__54956__auto___107525))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__54956__auto___107525){
return (function (seq107495){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107495));
});})(g__54956__auto___107525))
;


var g__54956__auto___107529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__54956__auto___107529){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107530 = arguments.length;
var i__45810__auto___107531 = (0);
while(true){
if((i__45810__auto___107531 < len__45809__auto___107530)){
args__45816__auto__.push((arguments[i__45810__auto___107531]));

var G__107532 = (i__45810__auto___107531 + (1));
i__45810__auto___107531 = G__107532;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107529))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107529){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107529);
});})(g__54956__auto___107529))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__54956__auto___107529){
return (function (seq107496){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107496));
});})(g__54956__auto___107529))
;


var g__54956__auto___107533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__54956__auto___107533){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107534 = arguments.length;
var i__45810__auto___107535 = (0);
while(true){
if((i__45810__auto___107535 < len__45809__auto___107534)){
args__45816__auto__.push((arguments[i__45810__auto___107535]));

var G__107536 = (i__45810__auto___107535 + (1));
i__45810__auto___107535 = G__107536;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107533))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107533){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107533);
});})(g__54956__auto___107533))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__54956__auto___107533){
return (function (seq107497){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107497));
});})(g__54956__auto___107533))
;


var g__54956__auto___107537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__54956__auto___107537){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107538 = arguments.length;
var i__45810__auto___107539 = (0);
while(true){
if((i__45810__auto___107539 < len__45809__auto___107538)){
args__45816__auto__.push((arguments[i__45810__auto___107539]));

var G__107540 = (i__45810__auto___107539 + (1));
i__45810__auto___107539 = G__107540;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107537))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107537){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107537);
});})(g__54956__auto___107537))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__54956__auto___107537){
return (function (seq107498){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107498));
});})(g__54956__auto___107537))
;


var g__54956__auto___107541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__54956__auto___107541){
return (function cljs$spec$impl$gen$double(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107542 = arguments.length;
var i__45810__auto___107543 = (0);
while(true){
if((i__45810__auto___107543 < len__45809__auto___107542)){
args__45816__auto__.push((arguments[i__45810__auto___107543]));

var G__107544 = (i__45810__auto___107543 + (1));
i__45810__auto___107543 = G__107544;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107541))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107541){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107541);
});})(g__54956__auto___107541))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__54956__auto___107541){
return (function (seq107499){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107499));
});})(g__54956__auto___107541))
;


var g__54956__auto___107545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__54956__auto___107545){
return (function cljs$spec$impl$gen$int(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107546 = arguments.length;
var i__45810__auto___107547 = (0);
while(true){
if((i__45810__auto___107547 < len__45809__auto___107546)){
args__45816__auto__.push((arguments[i__45810__auto___107547]));

var G__107548 = (i__45810__auto___107547 + (1));
i__45810__auto___107547 = G__107548;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107545))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107545){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107545);
});})(g__54956__auto___107545))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__54956__auto___107545){
return (function (seq107500){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107500));
});})(g__54956__auto___107545))
;


var g__54956__auto___107549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__54956__auto___107549){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107550 = arguments.length;
var i__45810__auto___107551 = (0);
while(true){
if((i__45810__auto___107551 < len__45809__auto___107550)){
args__45816__auto__.push((arguments[i__45810__auto___107551]));

var G__107552 = (i__45810__auto___107551 + (1));
i__45810__auto___107551 = G__107552;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107549))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107549){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107549);
});})(g__54956__auto___107549))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__54956__auto___107549){
return (function (seq107501){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107501));
});})(g__54956__auto___107549))
;


var g__54956__auto___107553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__54956__auto___107553){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107554 = arguments.length;
var i__45810__auto___107555 = (0);
while(true){
if((i__45810__auto___107555 < len__45809__auto___107554)){
args__45816__auto__.push((arguments[i__45810__auto___107555]));

var G__107556 = (i__45810__auto___107555 + (1));
i__45810__auto___107555 = G__107556;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107553))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107553){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107553);
});})(g__54956__auto___107553))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__54956__auto___107553){
return (function (seq107502){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107502));
});})(g__54956__auto___107553))
;


var g__54956__auto___107557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__54956__auto___107557){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107558 = arguments.length;
var i__45810__auto___107559 = (0);
while(true){
if((i__45810__auto___107559 < len__45809__auto___107558)){
args__45816__auto__.push((arguments[i__45810__auto___107559]));

var G__107560 = (i__45810__auto___107559 + (1));
i__45810__auto___107559 = G__107560;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107557))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107557){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107557);
});})(g__54956__auto___107557))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__54956__auto___107557){
return (function (seq107503){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107503));
});})(g__54956__auto___107557))
;


var g__54956__auto___107561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__54956__auto___107561){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107562 = arguments.length;
var i__45810__auto___107563 = (0);
while(true){
if((i__45810__auto___107563 < len__45809__auto___107562)){
args__45816__auto__.push((arguments[i__45810__auto___107563]));

var G__107564 = (i__45810__auto___107563 + (1));
i__45810__auto___107563 = G__107564;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107561))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107561){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107561);
});})(g__54956__auto___107561))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__54956__auto___107561){
return (function (seq107504){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107504));
});})(g__54956__auto___107561))
;


var g__54956__auto___107565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__54956__auto___107565){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107566 = arguments.length;
var i__45810__auto___107567 = (0);
while(true){
if((i__45810__auto___107567 < len__45809__auto___107566)){
args__45816__auto__.push((arguments[i__45810__auto___107567]));

var G__107568 = (i__45810__auto___107567 + (1));
i__45810__auto___107567 = G__107568;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107565))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107565){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107565);
});})(g__54956__auto___107565))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__54956__auto___107565){
return (function (seq107505){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107505));
});})(g__54956__auto___107565))
;


var g__54956__auto___107569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__54956__auto___107569){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107570 = arguments.length;
var i__45810__auto___107571 = (0);
while(true){
if((i__45810__auto___107571 < len__45809__auto___107570)){
args__45816__auto__.push((arguments[i__45810__auto___107571]));

var G__107572 = (i__45810__auto___107571 + (1));
i__45810__auto___107571 = G__107572;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107569))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107569){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107569);
});})(g__54956__auto___107569))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__54956__auto___107569){
return (function (seq107506){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107506));
});})(g__54956__auto___107569))
;


var g__54956__auto___107573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__54956__auto___107573){
return (function cljs$spec$impl$gen$string(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107574 = arguments.length;
var i__45810__auto___107575 = (0);
while(true){
if((i__45810__auto___107575 < len__45809__auto___107574)){
args__45816__auto__.push((arguments[i__45810__auto___107575]));

var G__107576 = (i__45810__auto___107575 + (1));
i__45810__auto___107575 = G__107576;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107573))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107573){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107573);
});})(g__54956__auto___107573))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__54956__auto___107573){
return (function (seq107507){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107507));
});})(g__54956__auto___107573))
;


var g__54956__auto___107577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__54956__auto___107577){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107578 = arguments.length;
var i__45810__auto___107579 = (0);
while(true){
if((i__45810__auto___107579 < len__45809__auto___107578)){
args__45816__auto__.push((arguments[i__45810__auto___107579]));

var G__107580 = (i__45810__auto___107579 + (1));
i__45810__auto___107579 = G__107580;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107577))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107577){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107577);
});})(g__54956__auto___107577))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__54956__auto___107577){
return (function (seq107508){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107508));
});})(g__54956__auto___107577))
;


var g__54956__auto___107581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__54956__auto___107581){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107582 = arguments.length;
var i__45810__auto___107583 = (0);
while(true){
if((i__45810__auto___107583 < len__45809__auto___107582)){
args__45816__auto__.push((arguments[i__45810__auto___107583]));

var G__107584 = (i__45810__auto___107583 + (1));
i__45810__auto___107583 = G__107584;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107581))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107581){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107581);
});})(g__54956__auto___107581))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__54956__auto___107581){
return (function (seq107509){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107509));
});})(g__54956__auto___107581))
;


var g__54956__auto___107585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__54956__auto___107585){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107586 = arguments.length;
var i__45810__auto___107587 = (0);
while(true){
if((i__45810__auto___107587 < len__45809__auto___107586)){
args__45816__auto__.push((arguments[i__45810__auto___107587]));

var G__107588 = (i__45810__auto___107587 + (1));
i__45810__auto___107587 = G__107588;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107585))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107585){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107585);
});})(g__54956__auto___107585))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__54956__auto___107585){
return (function (seq107510){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107510));
});})(g__54956__auto___107585))
;


var g__54956__auto___107589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__54956__auto___107589){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107590 = arguments.length;
var i__45810__auto___107591 = (0);
while(true){
if((i__45810__auto___107591 < len__45809__auto___107590)){
args__45816__auto__.push((arguments[i__45810__auto___107591]));

var G__107592 = (i__45810__auto___107591 + (1));
i__45810__auto___107591 = G__107592;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107589))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107589){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107589);
});})(g__54956__auto___107589))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__54956__auto___107589){
return (function (seq107511){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107511));
});})(g__54956__auto___107589))
;


var g__54956__auto___107593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__54956__auto___107593){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107594 = arguments.length;
var i__45810__auto___107595 = (0);
while(true){
if((i__45810__auto___107595 < len__45809__auto___107594)){
args__45816__auto__.push((arguments[i__45810__auto___107595]));

var G__107596 = (i__45810__auto___107595 + (1));
i__45810__auto___107595 = G__107596;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});})(g__54956__auto___107593))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54956__auto___107593){
return (function (args){
return cljs.core.deref.call(null,g__54956__auto___107593);
});})(g__54956__auto___107593))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__54956__auto___107593){
return (function (seq107512){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107512));
});})(g__54956__auto___107593))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45816__auto__ = [];
var len__45809__auto___107599 = arguments.length;
var i__45810__auto___107600 = (0);
while(true){
if((i__45810__auto___107600 < len__45809__auto___107599)){
args__45816__auto__.push((arguments[i__45810__auto___107600]));

var G__107601 = (i__45810__auto___107600 + (1));
i__45810__auto___107600 = G__107601;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__107597_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__107597_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq107598){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107598));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__107602_SHARP_){
return (new Date(p1__107602_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1494918375315