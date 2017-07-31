// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._header[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._header["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._has_body[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._body[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._body["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__11978__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__11978__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__11978__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__11978__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__11977__auto__ = temp__4657__auto____$2;
return goog.object.get(o__11977__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__7499__auto__ = [];
var len__7492__auto___11999 = arguments.length;
var i__7493__auto___12000 = (0);
while(true){
if((i__7493__auto___12000 < len__7492__auto___11999)){
args__7499__auto__.push((arguments[i__7493__auto___12000]));

var G__12001 = (i__7493__auto___12000 + (1));
i__7493__auto___12000 = G__12001;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq11998){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11998));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12003 = arguments.length;
var i__7493__auto___12004 = (0);
while(true){
if((i__7493__auto___12004 < len__7492__auto___12003)){
args__7499__auto__.push((arguments[i__7493__auto___12004]));

var G__12005 = (i__7493__auto___12004 + (1));
i__7493__auto___12004 = G__12005;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq12002){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12002));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12007 = arguments.length;
var i__7493__auto___12008 = (0);
while(true){
if((i__7493__auto___12008 < len__7492__auto___12007)){
args__7499__auto__.push((arguments[i__7493__auto___12008]));

var G__12009 = (i__7493__auto___12008 + (1));
i__7493__auto___12008 = G__12009;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq12006){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12006));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12011 = arguments.length;
var i__7493__auto___12012 = (0);
while(true){
if((i__7493__auto___12012 < len__7492__auto___12011)){
args__7499__auto__.push((arguments[i__7493__auto___12012]));

var G__12013 = (i__7493__auto___12012 + (1));
i__7493__auto___12012 = G__12013;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12010){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12010));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12015 = arguments.length;
var i__7493__auto___12016 = (0);
while(true){
if((i__7493__auto___12016 < len__7492__auto___12015)){
args__7499__auto__.push((arguments[i__7493__auto___12016]));

var G__12017 = (i__7493__auto___12016 + (1));
i__7493__auto___12016 = G__12017;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq12014){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12014));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12019 = arguments.length;
var i__7493__auto___12020 = (0);
while(true){
if((i__7493__auto___12020 < len__7492__auto___12019)){
args__7499__auto__.push((arguments[i__7493__auto___12020]));

var G__12021 = (i__7493__auto___12020 + (1));
i__7493__auto___12020 = G__12021;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq12018){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12018));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12023 = arguments.length;
var i__7493__auto___12024 = (0);
while(true){
if((i__7493__auto___12024 < len__7492__auto___12023)){
args__7499__auto__.push((arguments[i__7493__auto___12024]));

var G__12025 = (i__7493__auto___12024 + (1));
i__7493__auto___12024 = G__12025;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq12022){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12022));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12033 = arguments.length;
var i__7493__auto___12034 = (0);
while(true){
if((i__7493__auto___12034 < len__7492__auto___12033)){
args__7499__auto__.push((arguments[i__7493__auto___12034]));

var G__12035 = (i__7493__auto___12034 + (1));
i__7493__auto___12034 = G__12035;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12029){
var vec__12030 = p__12029;
var state_override = cljs.core.nth.call(null,vec__12030,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__12030,state_override){
return (function (p1__12026_SHARP_){
return cljs.core.merge.call(null,p1__12026_SHARP_,state_override);
});})(vec__12030,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq12027){
var G__12028 = cljs.core.first.call(null,seq12027);
var seq12027__$1 = cljs.core.next.call(null,seq12027);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__12028,seq12027__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12037 = arguments.length;
var i__7493__auto___12038 = (0);
while(true){
if((i__7493__auto___12038 < len__7492__auto___12037)){
args__7499__auto__.push((arguments[i__7493__auto___12038]));

var G__12039 = (i__7493__auto___12038 + (1));
i__7493__auto___12038 = G__12039;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq12036){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12036));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12042 = arguments.length;
var i__7493__auto___12043 = (0);
while(true){
if((i__7493__auto___12043 < len__7492__auto___12042)){
args__7499__auto__.push((arguments[i__7493__auto___12043]));

var G__12044 = (i__7493__auto___12043 + (1));
i__7493__auto___12043 = G__12044;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12040){
var G__12041 = cljs.core.first.call(null,seq12040);
var seq12040__$1 = cljs.core.next.call(null,seq12040);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__12041,seq12040__$1);
});


//# sourceMappingURL=format.js.map?rel=1501400720373