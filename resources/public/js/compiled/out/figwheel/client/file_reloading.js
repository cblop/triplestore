// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44734__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44734__auto__){
return or__44734__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44734__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__106336_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__106336_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__106341 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__106342 = null;
var count__106343 = (0);
var i__106344 = (0);
while(true){
if((i__106344 < count__106343)){
var n = cljs.core._nth.call(null,chunk__106342,i__106344);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__106345 = seq__106341;
var G__106346 = chunk__106342;
var G__106347 = count__106343;
var G__106348 = (i__106344 + (1));
seq__106341 = G__106345;
chunk__106342 = G__106346;
count__106343 = G__106347;
i__106344 = G__106348;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__106341);
if(temp__4657__auto__){
var seq__106341__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106341__$1)){
var c__45545__auto__ = cljs.core.chunk_first.call(null,seq__106341__$1);
var G__106349 = cljs.core.chunk_rest.call(null,seq__106341__$1);
var G__106350 = c__45545__auto__;
var G__106351 = cljs.core.count.call(null,c__45545__auto__);
var G__106352 = (0);
seq__106341 = G__106349;
chunk__106342 = G__106350;
count__106343 = G__106351;
i__106344 = G__106352;
continue;
} else {
var n = cljs.core.first.call(null,seq__106341__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__106353 = cljs.core.next.call(null,seq__106341__$1);
var G__106354 = null;
var G__106355 = (0);
var G__106356 = (0);
seq__106341 = G__106353;
chunk__106342 = G__106354;
count__106343 = G__106355;
i__106344 = G__106356;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__106407_106418 = cljs.core.seq.call(null,deps);
var chunk__106408_106419 = null;
var count__106409_106420 = (0);
var i__106410_106421 = (0);
while(true){
if((i__106410_106421 < count__106409_106420)){
var dep_106422 = cljs.core._nth.call(null,chunk__106408_106419,i__106410_106421);
topo_sort_helper_STAR_.call(null,dep_106422,(depth + (1)),state);

var G__106423 = seq__106407_106418;
var G__106424 = chunk__106408_106419;
var G__106425 = count__106409_106420;
var G__106426 = (i__106410_106421 + (1));
seq__106407_106418 = G__106423;
chunk__106408_106419 = G__106424;
count__106409_106420 = G__106425;
i__106410_106421 = G__106426;
continue;
} else {
var temp__4657__auto___106427 = cljs.core.seq.call(null,seq__106407_106418);
if(temp__4657__auto___106427){
var seq__106407_106428__$1 = temp__4657__auto___106427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106407_106428__$1)){
var c__45545__auto___106429 = cljs.core.chunk_first.call(null,seq__106407_106428__$1);
var G__106430 = cljs.core.chunk_rest.call(null,seq__106407_106428__$1);
var G__106431 = c__45545__auto___106429;
var G__106432 = cljs.core.count.call(null,c__45545__auto___106429);
var G__106433 = (0);
seq__106407_106418 = G__106430;
chunk__106408_106419 = G__106431;
count__106409_106420 = G__106432;
i__106410_106421 = G__106433;
continue;
} else {
var dep_106434 = cljs.core.first.call(null,seq__106407_106428__$1);
topo_sort_helper_STAR_.call(null,dep_106434,(depth + (1)),state);

var G__106435 = cljs.core.next.call(null,seq__106407_106428__$1);
var G__106436 = null;
var G__106437 = (0);
var G__106438 = (0);
seq__106407_106418 = G__106435;
chunk__106408_106419 = G__106436;
count__106409_106420 = G__106437;
i__106410_106421 = G__106438;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__106411){
var vec__106415 = p__106411;
var seq__106416 = cljs.core.seq.call(null,vec__106415);
var first__106417 = cljs.core.first.call(null,seq__106416);
var seq__106416__$1 = cljs.core.next.call(null,seq__106416);
var x = first__106417;
var xs = seq__106416__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__106415,seq__106416,first__106417,seq__106416__$1,x,xs,get_deps__$1){
return (function (p1__106357_SHARP_){
return clojure.set.difference.call(null,p1__106357_SHARP_,x);
});})(vec__106415,seq__106416,first__106417,seq__106416__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__106451 = cljs.core.seq.call(null,provides);
var chunk__106452 = null;
var count__106453 = (0);
var i__106454 = (0);
while(true){
if((i__106454 < count__106453)){
var prov = cljs.core._nth.call(null,chunk__106452,i__106454);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__106455_106463 = cljs.core.seq.call(null,requires);
var chunk__106456_106464 = null;
var count__106457_106465 = (0);
var i__106458_106466 = (0);
while(true){
if((i__106458_106466 < count__106457_106465)){
var req_106467 = cljs.core._nth.call(null,chunk__106456_106464,i__106458_106466);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106467,prov);

var G__106468 = seq__106455_106463;
var G__106469 = chunk__106456_106464;
var G__106470 = count__106457_106465;
var G__106471 = (i__106458_106466 + (1));
seq__106455_106463 = G__106468;
chunk__106456_106464 = G__106469;
count__106457_106465 = G__106470;
i__106458_106466 = G__106471;
continue;
} else {
var temp__4657__auto___106472 = cljs.core.seq.call(null,seq__106455_106463);
if(temp__4657__auto___106472){
var seq__106455_106473__$1 = temp__4657__auto___106472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106455_106473__$1)){
var c__45545__auto___106474 = cljs.core.chunk_first.call(null,seq__106455_106473__$1);
var G__106475 = cljs.core.chunk_rest.call(null,seq__106455_106473__$1);
var G__106476 = c__45545__auto___106474;
var G__106477 = cljs.core.count.call(null,c__45545__auto___106474);
var G__106478 = (0);
seq__106455_106463 = G__106475;
chunk__106456_106464 = G__106476;
count__106457_106465 = G__106477;
i__106458_106466 = G__106478;
continue;
} else {
var req_106479 = cljs.core.first.call(null,seq__106455_106473__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106479,prov);

var G__106480 = cljs.core.next.call(null,seq__106455_106473__$1);
var G__106481 = null;
var G__106482 = (0);
var G__106483 = (0);
seq__106455_106463 = G__106480;
chunk__106456_106464 = G__106481;
count__106457_106465 = G__106482;
i__106458_106466 = G__106483;
continue;
}
} else {
}
}
break;
}

var G__106484 = seq__106451;
var G__106485 = chunk__106452;
var G__106486 = count__106453;
var G__106487 = (i__106454 + (1));
seq__106451 = G__106484;
chunk__106452 = G__106485;
count__106453 = G__106486;
i__106454 = G__106487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__106451);
if(temp__4657__auto__){
var seq__106451__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106451__$1)){
var c__45545__auto__ = cljs.core.chunk_first.call(null,seq__106451__$1);
var G__106488 = cljs.core.chunk_rest.call(null,seq__106451__$1);
var G__106489 = c__45545__auto__;
var G__106490 = cljs.core.count.call(null,c__45545__auto__);
var G__106491 = (0);
seq__106451 = G__106488;
chunk__106452 = G__106489;
count__106453 = G__106490;
i__106454 = G__106491;
continue;
} else {
var prov = cljs.core.first.call(null,seq__106451__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__106459_106492 = cljs.core.seq.call(null,requires);
var chunk__106460_106493 = null;
var count__106461_106494 = (0);
var i__106462_106495 = (0);
while(true){
if((i__106462_106495 < count__106461_106494)){
var req_106496 = cljs.core._nth.call(null,chunk__106460_106493,i__106462_106495);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106496,prov);

var G__106497 = seq__106459_106492;
var G__106498 = chunk__106460_106493;
var G__106499 = count__106461_106494;
var G__106500 = (i__106462_106495 + (1));
seq__106459_106492 = G__106497;
chunk__106460_106493 = G__106498;
count__106461_106494 = G__106499;
i__106462_106495 = G__106500;
continue;
} else {
var temp__4657__auto___106501__$1 = cljs.core.seq.call(null,seq__106459_106492);
if(temp__4657__auto___106501__$1){
var seq__106459_106502__$1 = temp__4657__auto___106501__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106459_106502__$1)){
var c__45545__auto___106503 = cljs.core.chunk_first.call(null,seq__106459_106502__$1);
var G__106504 = cljs.core.chunk_rest.call(null,seq__106459_106502__$1);
var G__106505 = c__45545__auto___106503;
var G__106506 = cljs.core.count.call(null,c__45545__auto___106503);
var G__106507 = (0);
seq__106459_106492 = G__106504;
chunk__106460_106493 = G__106505;
count__106461_106494 = G__106506;
i__106462_106495 = G__106507;
continue;
} else {
var req_106508 = cljs.core.first.call(null,seq__106459_106502__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_106508,prov);

var G__106509 = cljs.core.next.call(null,seq__106459_106502__$1);
var G__106510 = null;
var G__106511 = (0);
var G__106512 = (0);
seq__106459_106492 = G__106509;
chunk__106460_106493 = G__106510;
count__106461_106494 = G__106511;
i__106462_106495 = G__106512;
continue;
}
} else {
}
}
break;
}

var G__106513 = cljs.core.next.call(null,seq__106451__$1);
var G__106514 = null;
var G__106515 = (0);
var G__106516 = (0);
seq__106451 = G__106513;
chunk__106452 = G__106514;
count__106453 = G__106515;
i__106454 = G__106516;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__106521_106525 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__106522_106526 = null;
var count__106523_106527 = (0);
var i__106524_106528 = (0);
while(true){
if((i__106524_106528 < count__106523_106527)){
var ns_106529 = cljs.core._nth.call(null,chunk__106522_106526,i__106524_106528);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_106529);

var G__106530 = seq__106521_106525;
var G__106531 = chunk__106522_106526;
var G__106532 = count__106523_106527;
var G__106533 = (i__106524_106528 + (1));
seq__106521_106525 = G__106530;
chunk__106522_106526 = G__106531;
count__106523_106527 = G__106532;
i__106524_106528 = G__106533;
continue;
} else {
var temp__4657__auto___106534 = cljs.core.seq.call(null,seq__106521_106525);
if(temp__4657__auto___106534){
var seq__106521_106535__$1 = temp__4657__auto___106534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106521_106535__$1)){
var c__45545__auto___106536 = cljs.core.chunk_first.call(null,seq__106521_106535__$1);
var G__106537 = cljs.core.chunk_rest.call(null,seq__106521_106535__$1);
var G__106538 = c__45545__auto___106536;
var G__106539 = cljs.core.count.call(null,c__45545__auto___106536);
var G__106540 = (0);
seq__106521_106525 = G__106537;
chunk__106522_106526 = G__106538;
count__106523_106527 = G__106539;
i__106524_106528 = G__106540;
continue;
} else {
var ns_106541 = cljs.core.first.call(null,seq__106521_106535__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_106541);

var G__106542 = cljs.core.next.call(null,seq__106521_106535__$1);
var G__106543 = null;
var G__106544 = (0);
var G__106545 = (0);
seq__106521_106525 = G__106542;
chunk__106522_106526 = G__106543;
count__106523_106527 = G__106544;
i__106524_106528 = G__106545;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44734__auto__ = goog.require__;
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__106546__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__106546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__106547__i = 0, G__106547__a = new Array(arguments.length -  0);
while (G__106547__i < G__106547__a.length) {G__106547__a[G__106547__i] = arguments[G__106547__i + 0]; ++G__106547__i;}
  args = new cljs.core.IndexedSeq(G__106547__a,0);
} 
return G__106546__delegate.call(this,args);};
G__106546.cljs$lang$maxFixedArity = 0;
G__106546.cljs$lang$applyTo = (function (arglist__106548){
var args = cljs.core.seq(arglist__106548);
return G__106546__delegate(args);
});
G__106546.cljs$core$IFn$_invoke$arity$variadic = G__106546__delegate;
return G__106546;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__106550 = cljs.core._EQ_;
var expr__106551 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__106550.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__106551))){
var path_parts = ((function (pred__106550,expr__106551){
return (function (p1__106549_SHARP_){
return clojure.string.split.call(null,p1__106549_SHARP_,/[\/\\]/);
});})(pred__106550,expr__106551))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__106550,expr__106551){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e106553){if((e106553 instanceof Error)){
var e = e106553;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e106553;

}
}})());
});
;})(path_parts,sep,root,pred__106550,expr__106551))
} else {
if(cljs.core.truth_(pred__106550.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__106551))){
return ((function (pred__106550,expr__106551){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__106550,expr__106551){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__106550,expr__106551))
);

return deferred.addErrback(((function (deferred,pred__106550,expr__106551){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__106550,expr__106551))
);
});
;})(pred__106550,expr__106551))
} else {
return ((function (pred__106550,expr__106551){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__106550,expr__106551))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__106554,callback){
var map__106557 = p__106554;
var map__106557__$1 = ((((!((map__106557 == null)))?((((map__106557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106557):map__106557);
var file_msg = map__106557__$1;
var request_url = cljs.core.get.call(null,map__106557__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__106557,map__106557__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__106557,map__106557__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__){
return (function (state_106581){
var state_val_106582 = (state_106581[(1)]);
if((state_val_106582 === (7))){
var inst_106577 = (state_106581[(2)]);
var state_106581__$1 = state_106581;
var statearr_106583_106603 = state_106581__$1;
(statearr_106583_106603[(2)] = inst_106577);

(statearr_106583_106603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (1))){
var state_106581__$1 = state_106581;
var statearr_106584_106604 = state_106581__$1;
(statearr_106584_106604[(2)] = null);

(statearr_106584_106604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (4))){
var inst_106561 = (state_106581[(7)]);
var inst_106561__$1 = (state_106581[(2)]);
var state_106581__$1 = (function (){var statearr_106585 = state_106581;
(statearr_106585[(7)] = inst_106561__$1);

return statearr_106585;
})();
if(cljs.core.truth_(inst_106561__$1)){
var statearr_106586_106605 = state_106581__$1;
(statearr_106586_106605[(1)] = (5));

} else {
var statearr_106587_106606 = state_106581__$1;
(statearr_106587_106606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (6))){
var state_106581__$1 = state_106581;
var statearr_106588_106607 = state_106581__$1;
(statearr_106588_106607[(2)] = null);

(statearr_106588_106607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (3))){
var inst_106579 = (state_106581[(2)]);
var state_106581__$1 = state_106581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106581__$1,inst_106579);
} else {
if((state_val_106582 === (2))){
var state_106581__$1 = state_106581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106581__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_106582 === (11))){
var inst_106573 = (state_106581[(2)]);
var state_106581__$1 = (function (){var statearr_106589 = state_106581;
(statearr_106589[(8)] = inst_106573);

return statearr_106589;
})();
var statearr_106590_106608 = state_106581__$1;
(statearr_106590_106608[(2)] = null);

(statearr_106590_106608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (9))){
var inst_106565 = (state_106581[(9)]);
var inst_106567 = (state_106581[(10)]);
var inst_106569 = inst_106567.call(null,inst_106565);
var state_106581__$1 = state_106581;
var statearr_106591_106609 = state_106581__$1;
(statearr_106591_106609[(2)] = inst_106569);

(statearr_106591_106609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (5))){
var inst_106561 = (state_106581[(7)]);
var inst_106563 = figwheel.client.file_reloading.blocking_load.call(null,inst_106561);
var state_106581__$1 = state_106581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106581__$1,(8),inst_106563);
} else {
if((state_val_106582 === (10))){
var inst_106565 = (state_106581[(9)]);
var inst_106571 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_106565);
var state_106581__$1 = state_106581;
var statearr_106592_106610 = state_106581__$1;
(statearr_106592_106610[(2)] = inst_106571);

(statearr_106592_106610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106582 === (8))){
var inst_106561 = (state_106581[(7)]);
var inst_106567 = (state_106581[(10)]);
var inst_106565 = (state_106581[(2)]);
var inst_106566 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_106567__$1 = cljs.core.get.call(null,inst_106566,inst_106561);
var state_106581__$1 = (function (){var statearr_106593 = state_106581;
(statearr_106593[(9)] = inst_106565);

(statearr_106593[(10)] = inst_106567__$1);

return statearr_106593;
})();
if(cljs.core.truth_(inst_106567__$1)){
var statearr_106594_106611 = state_106581__$1;
(statearr_106594_106611[(1)] = (9));

} else {
var statearr_106595_106612 = state_106581__$1;
(statearr_106595_106612[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51011__auto__))
;
return ((function (switch__50899__auto__,c__51011__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50900__auto__ = null;
var figwheel$client$file_reloading$state_machine__50900__auto____0 = (function (){
var statearr_106599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_106599[(0)] = figwheel$client$file_reloading$state_machine__50900__auto__);

(statearr_106599[(1)] = (1));

return statearr_106599;
});
var figwheel$client$file_reloading$state_machine__50900__auto____1 = (function (state_106581){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_106581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e106600){if((e106600 instanceof Object)){
var ex__50903__auto__ = e106600;
var statearr_106601_106613 = state_106581;
(statearr_106601_106613[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106614 = state_106581;
state_106581 = G__106614;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50900__auto__ = function(state_106581){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50900__auto____1.call(this,state_106581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50900__auto____0;
figwheel$client$file_reloading$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50900__auto____1;
return figwheel$client$file_reloading$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__))
})();
var state__51013__auto__ = (function (){var statearr_106602 = f__51012__auto__.call(null);
(statearr_106602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_106602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__))
);

return c__51011__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__106615,callback){
var map__106618 = p__106615;
var map__106618__$1 = ((((!((map__106618 == null)))?((((map__106618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106618):map__106618);
var file_msg = map__106618__$1;
var namespace = cljs.core.get.call(null,map__106618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__106618,map__106618__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__106618,map__106618__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__106620){
var map__106623 = p__106620;
var map__106623__$1 = ((((!((map__106623 == null)))?((((map__106623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106623):map__106623);
var file_msg = map__106623__$1;
var namespace = cljs.core.get.call(null,map__106623__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44722__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__44722__auto__){
var or__44734__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
var or__44734__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44734__auto____$1)){
return or__44734__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44722__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__106625,callback){
var map__106628 = p__106625;
var map__106628__$1 = ((((!((map__106628 == null)))?((((map__106628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106628):map__106628);
var file_msg = map__106628__$1;
var request_url = cljs.core.get.call(null,map__106628__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__106628__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__51011__auto___106732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___106732,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___106732,out){
return (function (state_106714){
var state_val_106715 = (state_106714[(1)]);
if((state_val_106715 === (1))){
var inst_106688 = cljs.core.seq.call(null,files);
var inst_106689 = cljs.core.first.call(null,inst_106688);
var inst_106690 = cljs.core.next.call(null,inst_106688);
var inst_106691 = files;
var state_106714__$1 = (function (){var statearr_106716 = state_106714;
(statearr_106716[(7)] = inst_106691);

(statearr_106716[(8)] = inst_106690);

(statearr_106716[(9)] = inst_106689);

return statearr_106716;
})();
var statearr_106717_106733 = state_106714__$1;
(statearr_106717_106733[(2)] = null);

(statearr_106717_106733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106715 === (2))){
var inst_106691 = (state_106714[(7)]);
var inst_106697 = (state_106714[(10)]);
var inst_106696 = cljs.core.seq.call(null,inst_106691);
var inst_106697__$1 = cljs.core.first.call(null,inst_106696);
var inst_106698 = cljs.core.next.call(null,inst_106696);
var inst_106699 = (inst_106697__$1 == null);
var inst_106700 = cljs.core.not.call(null,inst_106699);
var state_106714__$1 = (function (){var statearr_106718 = state_106714;
(statearr_106718[(11)] = inst_106698);

(statearr_106718[(10)] = inst_106697__$1);

return statearr_106718;
})();
if(inst_106700){
var statearr_106719_106734 = state_106714__$1;
(statearr_106719_106734[(1)] = (4));

} else {
var statearr_106720_106735 = state_106714__$1;
(statearr_106720_106735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106715 === (3))){
var inst_106712 = (state_106714[(2)]);
var state_106714__$1 = state_106714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106714__$1,inst_106712);
} else {
if((state_val_106715 === (4))){
var inst_106697 = (state_106714[(10)]);
var inst_106702 = figwheel.client.file_reloading.reload_js_file.call(null,inst_106697);
var state_106714__$1 = state_106714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106714__$1,(7),inst_106702);
} else {
if((state_val_106715 === (5))){
var inst_106708 = cljs.core.async.close_BANG_.call(null,out);
var state_106714__$1 = state_106714;
var statearr_106721_106736 = state_106714__$1;
(statearr_106721_106736[(2)] = inst_106708);

(statearr_106721_106736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106715 === (6))){
var inst_106710 = (state_106714[(2)]);
var state_106714__$1 = state_106714;
var statearr_106722_106737 = state_106714__$1;
(statearr_106722_106737[(2)] = inst_106710);

(statearr_106722_106737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106715 === (7))){
var inst_106698 = (state_106714[(11)]);
var inst_106704 = (state_106714[(2)]);
var inst_106705 = cljs.core.async.put_BANG_.call(null,out,inst_106704);
var inst_106691 = inst_106698;
var state_106714__$1 = (function (){var statearr_106723 = state_106714;
(statearr_106723[(12)] = inst_106705);

(statearr_106723[(7)] = inst_106691);

return statearr_106723;
})();
var statearr_106724_106738 = state_106714__$1;
(statearr_106724_106738[(2)] = null);

(statearr_106724_106738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__51011__auto___106732,out))
;
return ((function (switch__50899__auto__,c__51011__auto___106732,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto____0 = (function (){
var statearr_106728 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106728[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto__);

(statearr_106728[(1)] = (1));

return statearr_106728;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto____1 = (function (state_106714){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_106714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e106729){if((e106729 instanceof Object)){
var ex__50903__auto__ = e106729;
var statearr_106730_106739 = state_106714;
(statearr_106730_106739[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106740 = state_106714;
state_106714 = G__106740;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto__ = function(state_106714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto____1.call(this,state_106714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___106732,out))
})();
var state__51013__auto__ = (function (){var statearr_106731 = f__51012__auto__.call(null);
(statearr_106731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___106732);

return statearr_106731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___106732,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__106741,opts){
var map__106745 = p__106741;
var map__106745__$1 = ((((!((map__106745 == null)))?((((map__106745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__106745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106745):map__106745);
var eval_body__$1 = cljs.core.get.call(null,map__106745__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__106745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44722__auto__ = eval_body__$1;
if(cljs.core.truth_(and__44722__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__44722__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e106747){var e = e106747;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__106748_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__106748_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__106757){
var vec__106758 = p__106757;
var k = cljs.core.nth.call(null,vec__106758,(0),null);
var v = cljs.core.nth.call(null,vec__106758,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__106761){
var vec__106762 = p__106761;
var k = cljs.core.nth.call(null,vec__106762,(0),null);
var v = cljs.core.nth.call(null,vec__106762,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__106768,p__106769){
var map__107016 = p__106768;
var map__107016__$1 = ((((!((map__107016 == null)))?((((map__107016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107016):map__107016);
var opts = map__107016__$1;
var before_jsload = cljs.core.get.call(null,map__107016__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__107016__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__107016__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__107017 = p__106769;
var map__107017__$1 = ((((!((map__107017 == null)))?((((map__107017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107017):map__107017);
var msg = map__107017__$1;
var files = cljs.core.get.call(null,map__107017__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__107017__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__107017__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_107170){
var state_val_107171 = (state_107170[(1)]);
if((state_val_107171 === (7))){
var inst_107033 = (state_107170[(7)]);
var inst_107032 = (state_107170[(8)]);
var inst_107034 = (state_107170[(9)]);
var inst_107031 = (state_107170[(10)]);
var inst_107039 = cljs.core._nth.call(null,inst_107032,inst_107034);
var inst_107040 = figwheel.client.file_reloading.eval_body.call(null,inst_107039,opts);
var inst_107041 = (inst_107034 + (1));
var tmp107172 = inst_107033;
var tmp107173 = inst_107032;
var tmp107174 = inst_107031;
var inst_107031__$1 = tmp107174;
var inst_107032__$1 = tmp107173;
var inst_107033__$1 = tmp107172;
var inst_107034__$1 = inst_107041;
var state_107170__$1 = (function (){var statearr_107175 = state_107170;
(statearr_107175[(7)] = inst_107033__$1);

(statearr_107175[(8)] = inst_107032__$1);

(statearr_107175[(9)] = inst_107034__$1);

(statearr_107175[(11)] = inst_107040);

(statearr_107175[(10)] = inst_107031__$1);

return statearr_107175;
})();
var statearr_107176_107262 = state_107170__$1;
(statearr_107176_107262[(2)] = null);

(statearr_107176_107262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (20))){
var inst_107074 = (state_107170[(12)]);
var inst_107082 = figwheel.client.file_reloading.sort_files.call(null,inst_107074);
var state_107170__$1 = state_107170;
var statearr_107177_107263 = state_107170__$1;
(statearr_107177_107263[(2)] = inst_107082);

(statearr_107177_107263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (27))){
var state_107170__$1 = state_107170;
var statearr_107178_107264 = state_107170__$1;
(statearr_107178_107264[(2)] = null);

(statearr_107178_107264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (1))){
var inst_107023 = (state_107170[(13)]);
var inst_107020 = before_jsload.call(null,files);
var inst_107021 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_107022 = (function (){return ((function (inst_107023,inst_107020,inst_107021,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__106765_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__106765_SHARP_);
});
;})(inst_107023,inst_107020,inst_107021,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107023__$1 = cljs.core.filter.call(null,inst_107022,files);
var inst_107024 = cljs.core.not_empty.call(null,inst_107023__$1);
var state_107170__$1 = (function (){var statearr_107179 = state_107170;
(statearr_107179[(14)] = inst_107020);

(statearr_107179[(13)] = inst_107023__$1);

(statearr_107179[(15)] = inst_107021);

return statearr_107179;
})();
if(cljs.core.truth_(inst_107024)){
var statearr_107180_107265 = state_107170__$1;
(statearr_107180_107265[(1)] = (2));

} else {
var statearr_107181_107266 = state_107170__$1;
(statearr_107181_107266[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (24))){
var state_107170__$1 = state_107170;
var statearr_107182_107267 = state_107170__$1;
(statearr_107182_107267[(2)] = null);

(statearr_107182_107267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (39))){
var inst_107124 = (state_107170[(16)]);
var state_107170__$1 = state_107170;
var statearr_107183_107268 = state_107170__$1;
(statearr_107183_107268[(2)] = inst_107124);

(statearr_107183_107268[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (46))){
var inst_107165 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
var statearr_107184_107269 = state_107170__$1;
(statearr_107184_107269[(2)] = inst_107165);

(statearr_107184_107269[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (4))){
var inst_107068 = (state_107170[(2)]);
var inst_107069 = cljs.core.List.EMPTY;
var inst_107070 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_107069);
var inst_107071 = (function (){return ((function (inst_107068,inst_107069,inst_107070,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__106766_SHARP_){
var and__44722__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__106766_SHARP_);
if(cljs.core.truth_(and__44722__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__106766_SHARP_));
} else {
return and__44722__auto__;
}
});
;})(inst_107068,inst_107069,inst_107070,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107072 = cljs.core.filter.call(null,inst_107071,files);
var inst_107073 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_107074 = cljs.core.concat.call(null,inst_107072,inst_107073);
var state_107170__$1 = (function (){var statearr_107185 = state_107170;
(statearr_107185[(12)] = inst_107074);

(statearr_107185[(17)] = inst_107068);

(statearr_107185[(18)] = inst_107070);

return statearr_107185;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_107186_107270 = state_107170__$1;
(statearr_107186_107270[(1)] = (16));

} else {
var statearr_107187_107271 = state_107170__$1;
(statearr_107187_107271[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (15))){
var inst_107058 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
var statearr_107188_107272 = state_107170__$1;
(statearr_107188_107272[(2)] = inst_107058);

(statearr_107188_107272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (21))){
var inst_107084 = (state_107170[(19)]);
var inst_107084__$1 = (state_107170[(2)]);
var inst_107085 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_107084__$1);
var state_107170__$1 = (function (){var statearr_107189 = state_107170;
(statearr_107189[(19)] = inst_107084__$1);

return statearr_107189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107170__$1,(22),inst_107085);
} else {
if((state_val_107171 === (31))){
var inst_107168 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107170__$1,inst_107168);
} else {
if((state_val_107171 === (32))){
var inst_107124 = (state_107170[(16)]);
var inst_107129 = inst_107124.cljs$lang$protocol_mask$partition0$;
var inst_107130 = (inst_107129 & (64));
var inst_107131 = inst_107124.cljs$core$ISeq$;
var inst_107132 = (inst_107130) || (inst_107131);
var state_107170__$1 = state_107170;
if(cljs.core.truth_(inst_107132)){
var statearr_107190_107273 = state_107170__$1;
(statearr_107190_107273[(1)] = (35));

} else {
var statearr_107191_107274 = state_107170__$1;
(statearr_107191_107274[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (40))){
var inst_107145 = (state_107170[(20)]);
var inst_107144 = (state_107170[(2)]);
var inst_107145__$1 = cljs.core.get.call(null,inst_107144,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_107146 = cljs.core.get.call(null,inst_107144,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_107147 = cljs.core.not_empty.call(null,inst_107145__$1);
var state_107170__$1 = (function (){var statearr_107192 = state_107170;
(statearr_107192[(20)] = inst_107145__$1);

(statearr_107192[(21)] = inst_107146);

return statearr_107192;
})();
if(cljs.core.truth_(inst_107147)){
var statearr_107193_107275 = state_107170__$1;
(statearr_107193_107275[(1)] = (41));

} else {
var statearr_107194_107276 = state_107170__$1;
(statearr_107194_107276[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (33))){
var state_107170__$1 = state_107170;
var statearr_107195_107277 = state_107170__$1;
(statearr_107195_107277[(2)] = false);

(statearr_107195_107277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (13))){
var inst_107044 = (state_107170[(22)]);
var inst_107048 = cljs.core.chunk_first.call(null,inst_107044);
var inst_107049 = cljs.core.chunk_rest.call(null,inst_107044);
var inst_107050 = cljs.core.count.call(null,inst_107048);
var inst_107031 = inst_107049;
var inst_107032 = inst_107048;
var inst_107033 = inst_107050;
var inst_107034 = (0);
var state_107170__$1 = (function (){var statearr_107196 = state_107170;
(statearr_107196[(7)] = inst_107033);

(statearr_107196[(8)] = inst_107032);

(statearr_107196[(9)] = inst_107034);

(statearr_107196[(10)] = inst_107031);

return statearr_107196;
})();
var statearr_107197_107278 = state_107170__$1;
(statearr_107197_107278[(2)] = null);

(statearr_107197_107278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (22))){
var inst_107088 = (state_107170[(23)]);
var inst_107084 = (state_107170[(19)]);
var inst_107092 = (state_107170[(24)]);
var inst_107087 = (state_107170[(25)]);
var inst_107087__$1 = (state_107170[(2)]);
var inst_107088__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_107087__$1);
var inst_107089 = (function (){var all_files = inst_107084;
var res_SINGLEQUOTE_ = inst_107087__$1;
var res = inst_107088__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_107088,inst_107084,inst_107092,inst_107087,inst_107087__$1,inst_107088__$1,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__106767_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__106767_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_107088,inst_107084,inst_107092,inst_107087,inst_107087__$1,inst_107088__$1,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107090 = cljs.core.filter.call(null,inst_107089,inst_107087__$1);
var inst_107091 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_107092__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_107091);
var inst_107093 = cljs.core.not_empty.call(null,inst_107092__$1);
var state_107170__$1 = (function (){var statearr_107198 = state_107170;
(statearr_107198[(23)] = inst_107088__$1);

(statearr_107198[(24)] = inst_107092__$1);

(statearr_107198[(26)] = inst_107090);

(statearr_107198[(25)] = inst_107087__$1);

return statearr_107198;
})();
if(cljs.core.truth_(inst_107093)){
var statearr_107199_107279 = state_107170__$1;
(statearr_107199_107279[(1)] = (23));

} else {
var statearr_107200_107280 = state_107170__$1;
(statearr_107200_107280[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (36))){
var state_107170__$1 = state_107170;
var statearr_107201_107281 = state_107170__$1;
(statearr_107201_107281[(2)] = false);

(statearr_107201_107281[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (41))){
var inst_107145 = (state_107170[(20)]);
var inst_107149 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_107150 = cljs.core.map.call(null,inst_107149,inst_107145);
var inst_107151 = cljs.core.pr_str.call(null,inst_107150);
var inst_107152 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_107151)].join('');
var inst_107153 = figwheel.client.utils.log.call(null,inst_107152);
var state_107170__$1 = state_107170;
var statearr_107202_107282 = state_107170__$1;
(statearr_107202_107282[(2)] = inst_107153);

(statearr_107202_107282[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (43))){
var inst_107146 = (state_107170[(21)]);
var inst_107156 = (state_107170[(2)]);
var inst_107157 = cljs.core.not_empty.call(null,inst_107146);
var state_107170__$1 = (function (){var statearr_107203 = state_107170;
(statearr_107203[(27)] = inst_107156);

return statearr_107203;
})();
if(cljs.core.truth_(inst_107157)){
var statearr_107204_107283 = state_107170__$1;
(statearr_107204_107283[(1)] = (44));

} else {
var statearr_107205_107284 = state_107170__$1;
(statearr_107205_107284[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (29))){
var inst_107088 = (state_107170[(23)]);
var inst_107084 = (state_107170[(19)]);
var inst_107092 = (state_107170[(24)]);
var inst_107124 = (state_107170[(16)]);
var inst_107090 = (state_107170[(26)]);
var inst_107087 = (state_107170[(25)]);
var inst_107120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_107123 = (function (){var all_files = inst_107084;
var res_SINGLEQUOTE_ = inst_107087;
var res = inst_107088;
var files_not_loaded = inst_107090;
var dependencies_that_loaded = inst_107092;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107124,inst_107090,inst_107087,inst_107120,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__107122){
var map__107206 = p__107122;
var map__107206__$1 = ((((!((map__107206 == null)))?((((map__107206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107206):map__107206);
var namespace = cljs.core.get.call(null,map__107206__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107124,inst_107090,inst_107087,inst_107120,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107124__$1 = cljs.core.group_by.call(null,inst_107123,inst_107090);
var inst_107126 = (inst_107124__$1 == null);
var inst_107127 = cljs.core.not.call(null,inst_107126);
var state_107170__$1 = (function (){var statearr_107208 = state_107170;
(statearr_107208[(28)] = inst_107120);

(statearr_107208[(16)] = inst_107124__$1);

return statearr_107208;
})();
if(inst_107127){
var statearr_107209_107285 = state_107170__$1;
(statearr_107209_107285[(1)] = (32));

} else {
var statearr_107210_107286 = state_107170__$1;
(statearr_107210_107286[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (44))){
var inst_107146 = (state_107170[(21)]);
var inst_107159 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_107146);
var inst_107160 = cljs.core.pr_str.call(null,inst_107159);
var inst_107161 = [cljs.core.str("not required: "),cljs.core.str(inst_107160)].join('');
var inst_107162 = figwheel.client.utils.log.call(null,inst_107161);
var state_107170__$1 = state_107170;
var statearr_107211_107287 = state_107170__$1;
(statearr_107211_107287[(2)] = inst_107162);

(statearr_107211_107287[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (6))){
var inst_107065 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
var statearr_107212_107288 = state_107170__$1;
(statearr_107212_107288[(2)] = inst_107065);

(statearr_107212_107288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (28))){
var inst_107090 = (state_107170[(26)]);
var inst_107117 = (state_107170[(2)]);
var inst_107118 = cljs.core.not_empty.call(null,inst_107090);
var state_107170__$1 = (function (){var statearr_107213 = state_107170;
(statearr_107213[(29)] = inst_107117);

return statearr_107213;
})();
if(cljs.core.truth_(inst_107118)){
var statearr_107214_107289 = state_107170__$1;
(statearr_107214_107289[(1)] = (29));

} else {
var statearr_107215_107290 = state_107170__$1;
(statearr_107215_107290[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (25))){
var inst_107088 = (state_107170[(23)]);
var inst_107104 = (state_107170[(2)]);
var inst_107105 = cljs.core.not_empty.call(null,inst_107088);
var state_107170__$1 = (function (){var statearr_107216 = state_107170;
(statearr_107216[(30)] = inst_107104);

return statearr_107216;
})();
if(cljs.core.truth_(inst_107105)){
var statearr_107217_107291 = state_107170__$1;
(statearr_107217_107291[(1)] = (26));

} else {
var statearr_107218_107292 = state_107170__$1;
(statearr_107218_107292[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (34))){
var inst_107139 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
if(cljs.core.truth_(inst_107139)){
var statearr_107219_107293 = state_107170__$1;
(statearr_107219_107293[(1)] = (38));

} else {
var statearr_107220_107294 = state_107170__$1;
(statearr_107220_107294[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (17))){
var state_107170__$1 = state_107170;
var statearr_107221_107295 = state_107170__$1;
(statearr_107221_107295[(2)] = recompile_dependents);

(statearr_107221_107295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (3))){
var state_107170__$1 = state_107170;
var statearr_107222_107296 = state_107170__$1;
(statearr_107222_107296[(2)] = null);

(statearr_107222_107296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (12))){
var inst_107061 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
var statearr_107223_107297 = state_107170__$1;
(statearr_107223_107297[(2)] = inst_107061);

(statearr_107223_107297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (2))){
var inst_107023 = (state_107170[(13)]);
var inst_107030 = cljs.core.seq.call(null,inst_107023);
var inst_107031 = inst_107030;
var inst_107032 = null;
var inst_107033 = (0);
var inst_107034 = (0);
var state_107170__$1 = (function (){var statearr_107224 = state_107170;
(statearr_107224[(7)] = inst_107033);

(statearr_107224[(8)] = inst_107032);

(statearr_107224[(9)] = inst_107034);

(statearr_107224[(10)] = inst_107031);

return statearr_107224;
})();
var statearr_107225_107298 = state_107170__$1;
(statearr_107225_107298[(2)] = null);

(statearr_107225_107298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (23))){
var inst_107088 = (state_107170[(23)]);
var inst_107084 = (state_107170[(19)]);
var inst_107092 = (state_107170[(24)]);
var inst_107090 = (state_107170[(26)]);
var inst_107087 = (state_107170[(25)]);
var inst_107095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_107097 = (function (){var all_files = inst_107084;
var res_SINGLEQUOTE_ = inst_107087;
var res = inst_107088;
var files_not_loaded = inst_107090;
var dependencies_that_loaded = inst_107092;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107090,inst_107087,inst_107095,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__107096){
var map__107226 = p__107096;
var map__107226__$1 = ((((!((map__107226 == null)))?((((map__107226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107226):map__107226);
var request_url = cljs.core.get.call(null,map__107226__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107090,inst_107087,inst_107095,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107098 = cljs.core.reverse.call(null,inst_107092);
var inst_107099 = cljs.core.map.call(null,inst_107097,inst_107098);
var inst_107100 = cljs.core.pr_str.call(null,inst_107099);
var inst_107101 = figwheel.client.utils.log.call(null,inst_107100);
var state_107170__$1 = (function (){var statearr_107228 = state_107170;
(statearr_107228[(31)] = inst_107095);

return statearr_107228;
})();
var statearr_107229_107299 = state_107170__$1;
(statearr_107229_107299[(2)] = inst_107101);

(statearr_107229_107299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (35))){
var state_107170__$1 = state_107170;
var statearr_107230_107300 = state_107170__$1;
(statearr_107230_107300[(2)] = true);

(statearr_107230_107300[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (19))){
var inst_107074 = (state_107170[(12)]);
var inst_107080 = figwheel.client.file_reloading.expand_files.call(null,inst_107074);
var state_107170__$1 = state_107170;
var statearr_107231_107301 = state_107170__$1;
(statearr_107231_107301[(2)] = inst_107080);

(statearr_107231_107301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (11))){
var state_107170__$1 = state_107170;
var statearr_107232_107302 = state_107170__$1;
(statearr_107232_107302[(2)] = null);

(statearr_107232_107302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (9))){
var inst_107063 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
var statearr_107233_107303 = state_107170__$1;
(statearr_107233_107303[(2)] = inst_107063);

(statearr_107233_107303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (5))){
var inst_107033 = (state_107170[(7)]);
var inst_107034 = (state_107170[(9)]);
var inst_107036 = (inst_107034 < inst_107033);
var inst_107037 = inst_107036;
var state_107170__$1 = state_107170;
if(cljs.core.truth_(inst_107037)){
var statearr_107234_107304 = state_107170__$1;
(statearr_107234_107304[(1)] = (7));

} else {
var statearr_107235_107305 = state_107170__$1;
(statearr_107235_107305[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (14))){
var inst_107044 = (state_107170[(22)]);
var inst_107053 = cljs.core.first.call(null,inst_107044);
var inst_107054 = figwheel.client.file_reloading.eval_body.call(null,inst_107053,opts);
var inst_107055 = cljs.core.next.call(null,inst_107044);
var inst_107031 = inst_107055;
var inst_107032 = null;
var inst_107033 = (0);
var inst_107034 = (0);
var state_107170__$1 = (function (){var statearr_107236 = state_107170;
(statearr_107236[(7)] = inst_107033);

(statearr_107236[(8)] = inst_107032);

(statearr_107236[(9)] = inst_107034);

(statearr_107236[(10)] = inst_107031);

(statearr_107236[(32)] = inst_107054);

return statearr_107236;
})();
var statearr_107237_107306 = state_107170__$1;
(statearr_107237_107306[(2)] = null);

(statearr_107237_107306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (45))){
var state_107170__$1 = state_107170;
var statearr_107238_107307 = state_107170__$1;
(statearr_107238_107307[(2)] = null);

(statearr_107238_107307[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (26))){
var inst_107088 = (state_107170[(23)]);
var inst_107084 = (state_107170[(19)]);
var inst_107092 = (state_107170[(24)]);
var inst_107090 = (state_107170[(26)]);
var inst_107087 = (state_107170[(25)]);
var inst_107107 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_107109 = (function (){var all_files = inst_107084;
var res_SINGLEQUOTE_ = inst_107087;
var res = inst_107088;
var files_not_loaded = inst_107090;
var dependencies_that_loaded = inst_107092;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107090,inst_107087,inst_107107,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__107108){
var map__107239 = p__107108;
var map__107239__$1 = ((((!((map__107239 == null)))?((((map__107239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107239):map__107239);
var namespace = cljs.core.get.call(null,map__107239__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__107239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107090,inst_107087,inst_107107,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107110 = cljs.core.map.call(null,inst_107109,inst_107088);
var inst_107111 = cljs.core.pr_str.call(null,inst_107110);
var inst_107112 = figwheel.client.utils.log.call(null,inst_107111);
var inst_107113 = (function (){var all_files = inst_107084;
var res_SINGLEQUOTE_ = inst_107087;
var res = inst_107088;
var files_not_loaded = inst_107090;
var dependencies_that_loaded = inst_107092;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107090,inst_107087,inst_107107,inst_107109,inst_107110,inst_107111,inst_107112,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_107088,inst_107084,inst_107092,inst_107090,inst_107087,inst_107107,inst_107109,inst_107110,inst_107111,inst_107112,state_val_107171,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_107114 = setTimeout(inst_107113,(10));
var state_107170__$1 = (function (){var statearr_107241 = state_107170;
(statearr_107241[(33)] = inst_107107);

(statearr_107241[(34)] = inst_107112);

return statearr_107241;
})();
var statearr_107242_107308 = state_107170__$1;
(statearr_107242_107308[(2)] = inst_107114);

(statearr_107242_107308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (16))){
var state_107170__$1 = state_107170;
var statearr_107243_107309 = state_107170__$1;
(statearr_107243_107309[(2)] = reload_dependents);

(statearr_107243_107309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (38))){
var inst_107124 = (state_107170[(16)]);
var inst_107141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_107124);
var state_107170__$1 = state_107170;
var statearr_107244_107310 = state_107170__$1;
(statearr_107244_107310[(2)] = inst_107141);

(statearr_107244_107310[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (30))){
var state_107170__$1 = state_107170;
var statearr_107245_107311 = state_107170__$1;
(statearr_107245_107311[(2)] = null);

(statearr_107245_107311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (10))){
var inst_107044 = (state_107170[(22)]);
var inst_107046 = cljs.core.chunked_seq_QMARK_.call(null,inst_107044);
var state_107170__$1 = state_107170;
if(inst_107046){
var statearr_107246_107312 = state_107170__$1;
(statearr_107246_107312[(1)] = (13));

} else {
var statearr_107247_107313 = state_107170__$1;
(statearr_107247_107313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (18))){
var inst_107078 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
if(cljs.core.truth_(inst_107078)){
var statearr_107248_107314 = state_107170__$1;
(statearr_107248_107314[(1)] = (19));

} else {
var statearr_107249_107315 = state_107170__$1;
(statearr_107249_107315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (42))){
var state_107170__$1 = state_107170;
var statearr_107250_107316 = state_107170__$1;
(statearr_107250_107316[(2)] = null);

(statearr_107250_107316[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (37))){
var inst_107136 = (state_107170[(2)]);
var state_107170__$1 = state_107170;
var statearr_107251_107317 = state_107170__$1;
(statearr_107251_107317[(2)] = inst_107136);

(statearr_107251_107317[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107171 === (8))){
var inst_107031 = (state_107170[(10)]);
var inst_107044 = (state_107170[(22)]);
var inst_107044__$1 = cljs.core.seq.call(null,inst_107031);
var state_107170__$1 = (function (){var statearr_107252 = state_107170;
(statearr_107252[(22)] = inst_107044__$1);

return statearr_107252;
})();
if(inst_107044__$1){
var statearr_107253_107318 = state_107170__$1;
(statearr_107253_107318[(1)] = (10));

} else {
var statearr_107254_107319 = state_107170__$1;
(statearr_107254_107319[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50899__auto__,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto____0 = (function (){
var statearr_107258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107258[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto__);

(statearr_107258[(1)] = (1));

return statearr_107258;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto____1 = (function (state_107170){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_107170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e107259){if((e107259 instanceof Object)){
var ex__50903__auto__ = e107259;
var statearr_107260_107320 = state_107170;
(statearr_107260_107320[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107321 = state_107170;
state_107170 = G__107321;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto__ = function(state_107170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto____1.call(this,state_107170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__51013__auto__ = (function (){var statearr_107261 = f__51012__auto__.call(null);
(statearr_107261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_107261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__,map__107016,map__107016__$1,opts,before_jsload,on_jsload,reload_dependents,map__107017,map__107017__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__51011__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__107324,link){
var map__107327 = p__107324;
var map__107327__$1 = ((((!((map__107327 == null)))?((((map__107327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107327):map__107327);
var file = cljs.core.get.call(null,map__107327__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__107327,map__107327__$1,file){
return (function (p1__107322_SHARP_,p2__107323_SHARP_){
if(cljs.core._EQ_.call(null,p1__107322_SHARP_,p2__107323_SHARP_)){
return p1__107322_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__107327,map__107327__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__107333){
var map__107334 = p__107333;
var map__107334__$1 = ((((!((map__107334 == null)))?((((map__107334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107334):map__107334);
var match_length = cljs.core.get.call(null,map__107334__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__107334__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__107329_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__107329_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args107336 = [];
var len__45809__auto___107339 = arguments.length;
var i__45810__auto___107340 = (0);
while(true){
if((i__45810__auto___107340 < len__45809__auto___107339)){
args107336.push((arguments[i__45810__auto___107340]));

var G__107341 = (i__45810__auto___107340 + (1));
i__45810__auto___107340 = G__107341;
continue;
} else {
}
break;
}

var G__107338 = args107336.length;
switch (G__107338) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args107336.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__107343_SHARP_,p2__107344_SHARP_){
return cljs.core.assoc.call(null,p1__107343_SHARP_,cljs.core.get.call(null,p2__107344_SHARP_,key),p2__107344_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__107345){
var map__107348 = p__107345;
var map__107348__$1 = ((((!((map__107348 == null)))?((((map__107348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107348):map__107348);
var f_data = map__107348__$1;
var file = cljs.core.get.call(null,map__107348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__107350,p__107351){
var map__107360 = p__107350;
var map__107360__$1 = ((((!((map__107360 == null)))?((((map__107360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107360):map__107360);
var opts = map__107360__$1;
var on_cssload = cljs.core.get.call(null,map__107360__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__107361 = p__107351;
var map__107361__$1 = ((((!((map__107361 == null)))?((((map__107361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107361):map__107361);
var files_msg = map__107361__$1;
var files = cljs.core.get.call(null,map__107361__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__107364_107368 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__107365_107369 = null;
var count__107366_107370 = (0);
var i__107367_107371 = (0);
while(true){
if((i__107367_107371 < count__107366_107370)){
var f_107372 = cljs.core._nth.call(null,chunk__107365_107369,i__107367_107371);
figwheel.client.file_reloading.reload_css_file.call(null,f_107372);

var G__107373 = seq__107364_107368;
var G__107374 = chunk__107365_107369;
var G__107375 = count__107366_107370;
var G__107376 = (i__107367_107371 + (1));
seq__107364_107368 = G__107373;
chunk__107365_107369 = G__107374;
count__107366_107370 = G__107375;
i__107367_107371 = G__107376;
continue;
} else {
var temp__4657__auto___107377 = cljs.core.seq.call(null,seq__107364_107368);
if(temp__4657__auto___107377){
var seq__107364_107378__$1 = temp__4657__auto___107377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__107364_107378__$1)){
var c__45545__auto___107379 = cljs.core.chunk_first.call(null,seq__107364_107378__$1);
var G__107380 = cljs.core.chunk_rest.call(null,seq__107364_107378__$1);
var G__107381 = c__45545__auto___107379;
var G__107382 = cljs.core.count.call(null,c__45545__auto___107379);
var G__107383 = (0);
seq__107364_107368 = G__107380;
chunk__107365_107369 = G__107381;
count__107366_107370 = G__107382;
i__107367_107371 = G__107383;
continue;
} else {
var f_107384 = cljs.core.first.call(null,seq__107364_107378__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_107384);

var G__107385 = cljs.core.next.call(null,seq__107364_107378__$1);
var G__107386 = null;
var G__107387 = (0);
var G__107388 = (0);
seq__107364_107368 = G__107385;
chunk__107365_107369 = G__107386;
count__107366_107370 = G__107387;
i__107367_107371 = G__107388;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__107360,map__107360__$1,opts,on_cssload,map__107361,map__107361__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__107360,map__107360__$1,opts,on_cssload,map__107361,map__107361__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1494918374732