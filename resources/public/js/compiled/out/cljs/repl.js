// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__108405){
var map__108430 = p__108405;
var map__108430__$1 = ((((!((map__108430 == null)))?((((map__108430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108430):map__108430);
var m = map__108430__$1;
var n = cljs.core.get.call(null,map__108430__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__108430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__108432_108454 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__108433_108455 = null;
var count__108434_108456 = (0);
var i__108435_108457 = (0);
while(true){
if((i__108435_108457 < count__108434_108456)){
var f_108458 = cljs.core._nth.call(null,chunk__108433_108455,i__108435_108457);
cljs.core.println.call(null,"  ",f_108458);

var G__108459 = seq__108432_108454;
var G__108460 = chunk__108433_108455;
var G__108461 = count__108434_108456;
var G__108462 = (i__108435_108457 + (1));
seq__108432_108454 = G__108459;
chunk__108433_108455 = G__108460;
count__108434_108456 = G__108461;
i__108435_108457 = G__108462;
continue;
} else {
var temp__4657__auto___108463 = cljs.core.seq.call(null,seq__108432_108454);
if(temp__4657__auto___108463){
var seq__108432_108464__$1 = temp__4657__auto___108463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108432_108464__$1)){
var c__45545__auto___108465 = cljs.core.chunk_first.call(null,seq__108432_108464__$1);
var G__108466 = cljs.core.chunk_rest.call(null,seq__108432_108464__$1);
var G__108467 = c__45545__auto___108465;
var G__108468 = cljs.core.count.call(null,c__45545__auto___108465);
var G__108469 = (0);
seq__108432_108454 = G__108466;
chunk__108433_108455 = G__108467;
count__108434_108456 = G__108468;
i__108435_108457 = G__108469;
continue;
} else {
var f_108470 = cljs.core.first.call(null,seq__108432_108464__$1);
cljs.core.println.call(null,"  ",f_108470);

var G__108471 = cljs.core.next.call(null,seq__108432_108464__$1);
var G__108472 = null;
var G__108473 = (0);
var G__108474 = (0);
seq__108432_108454 = G__108471;
chunk__108433_108455 = G__108472;
count__108434_108456 = G__108473;
i__108435_108457 = G__108474;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_108475 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44734__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_108475);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_108475)))?cljs.core.second.call(null,arglists_108475):arglists_108475));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__108436_108476 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__108437_108477 = null;
var count__108438_108478 = (0);
var i__108439_108479 = (0);
while(true){
if((i__108439_108479 < count__108438_108478)){
var vec__108440_108480 = cljs.core._nth.call(null,chunk__108437_108477,i__108439_108479);
var name_108481 = cljs.core.nth.call(null,vec__108440_108480,(0),null);
var map__108443_108482 = cljs.core.nth.call(null,vec__108440_108480,(1),null);
var map__108443_108483__$1 = ((((!((map__108443_108482 == null)))?((((map__108443_108482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108443_108482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108443_108482):map__108443_108482);
var doc_108484 = cljs.core.get.call(null,map__108443_108483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_108485 = cljs.core.get.call(null,map__108443_108483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_108481);

cljs.core.println.call(null," ",arglists_108485);

if(cljs.core.truth_(doc_108484)){
cljs.core.println.call(null," ",doc_108484);
} else {
}

var G__108486 = seq__108436_108476;
var G__108487 = chunk__108437_108477;
var G__108488 = count__108438_108478;
var G__108489 = (i__108439_108479 + (1));
seq__108436_108476 = G__108486;
chunk__108437_108477 = G__108487;
count__108438_108478 = G__108488;
i__108439_108479 = G__108489;
continue;
} else {
var temp__4657__auto___108490 = cljs.core.seq.call(null,seq__108436_108476);
if(temp__4657__auto___108490){
var seq__108436_108491__$1 = temp__4657__auto___108490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108436_108491__$1)){
var c__45545__auto___108492 = cljs.core.chunk_first.call(null,seq__108436_108491__$1);
var G__108493 = cljs.core.chunk_rest.call(null,seq__108436_108491__$1);
var G__108494 = c__45545__auto___108492;
var G__108495 = cljs.core.count.call(null,c__45545__auto___108492);
var G__108496 = (0);
seq__108436_108476 = G__108493;
chunk__108437_108477 = G__108494;
count__108438_108478 = G__108495;
i__108439_108479 = G__108496;
continue;
} else {
var vec__108445_108497 = cljs.core.first.call(null,seq__108436_108491__$1);
var name_108498 = cljs.core.nth.call(null,vec__108445_108497,(0),null);
var map__108448_108499 = cljs.core.nth.call(null,vec__108445_108497,(1),null);
var map__108448_108500__$1 = ((((!((map__108448_108499 == null)))?((((map__108448_108499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108448_108499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108448_108499):map__108448_108499);
var doc_108501 = cljs.core.get.call(null,map__108448_108500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_108502 = cljs.core.get.call(null,map__108448_108500__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_108498);

cljs.core.println.call(null," ",arglists_108502);

if(cljs.core.truth_(doc_108501)){
cljs.core.println.call(null," ",doc_108501);
} else {
}

var G__108503 = cljs.core.next.call(null,seq__108436_108491__$1);
var G__108504 = null;
var G__108505 = (0);
var G__108506 = (0);
seq__108436_108476 = G__108503;
chunk__108437_108477 = G__108504;
count__108438_108478 = G__108505;
i__108439_108479 = G__108506;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__108450 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__108451 = null;
var count__108452 = (0);
var i__108453 = (0);
while(true){
if((i__108453 < count__108452)){
var role = cljs.core._nth.call(null,chunk__108451,i__108453);
var temp__4657__auto___108507__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___108507__$1)){
var spec_108508 = temp__4657__auto___108507__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_108508));
} else {
}

var G__108509 = seq__108450;
var G__108510 = chunk__108451;
var G__108511 = count__108452;
var G__108512 = (i__108453 + (1));
seq__108450 = G__108509;
chunk__108451 = G__108510;
count__108452 = G__108511;
i__108453 = G__108512;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__108450);
if(temp__4657__auto____$1){
var seq__108450__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__108450__$1)){
var c__45545__auto__ = cljs.core.chunk_first.call(null,seq__108450__$1);
var G__108513 = cljs.core.chunk_rest.call(null,seq__108450__$1);
var G__108514 = c__45545__auto__;
var G__108515 = cljs.core.count.call(null,c__45545__auto__);
var G__108516 = (0);
seq__108450 = G__108513;
chunk__108451 = G__108514;
count__108452 = G__108515;
i__108453 = G__108516;
continue;
} else {
var role = cljs.core.first.call(null,seq__108450__$1);
var temp__4657__auto___108517__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___108517__$2)){
var spec_108518 = temp__4657__auto___108517__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_108518));
} else {
}

var G__108519 = cljs.core.next.call(null,seq__108450__$1);
var G__108520 = null;
var G__108521 = (0);
var G__108522 = (0);
seq__108450 = G__108519;
chunk__108451 = G__108520;
count__108452 = G__108521;
i__108453 = G__108522;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1494918377246