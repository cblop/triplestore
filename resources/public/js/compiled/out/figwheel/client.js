// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args110468 = [];
var len__45809__auto___110471 = arguments.length;
var i__45810__auto___110472 = (0);
while(true){
if((i__45810__auto___110472 < len__45809__auto___110471)){
args110468.push((arguments[i__45810__auto___110472]));

var G__110473 = (i__45810__auto___110472 + (1));
i__45810__auto___110472 = G__110473;
continue;
} else {
}
break;
}

var G__110470 = args110468.length;
switch (G__110470) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args110468.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45816__auto__ = [];
var len__45809__auto___110476 = arguments.length;
var i__45810__auto___110477 = (0);
while(true){
if((i__45810__auto___110477 < len__45809__auto___110476)){
args__45816__auto__.push((arguments[i__45810__auto___110477]));

var G__110478 = (i__45810__auto___110477 + (1));
i__45810__auto___110477 = G__110478;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq110475){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq110475));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45816__auto__ = [];
var len__45809__auto___110480 = arguments.length;
var i__45810__auto___110481 = (0);
while(true){
if((i__45810__auto___110481 < len__45809__auto___110480)){
args__45816__auto__.push((arguments[i__45810__auto___110481]));

var G__110482 = (i__45810__auto___110481 + (1));
i__45810__auto___110481 = G__110482;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq110479){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq110479));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__110483 = cljs.core._EQ_;
var expr__110484 = (function (){var or__44734__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e110487){if((e110487 instanceof Error)){
var e = e110487;
return false;
} else {
throw e110487;

}
}})();
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__110483.call(null,"true",expr__110484))){
return true;
} else {
if(cljs.core.truth_(pred__110483.call(null,"false",expr__110484))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__110484)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e110489){if((e110489 instanceof Error)){
var e = e110489;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e110489;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__110490){
var map__110493 = p__110490;
var map__110493__$1 = ((((!((map__110493 == null)))?((((map__110493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110493):map__110493);
var message = cljs.core.get.call(null,map__110493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__110493__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44734__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44722__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44722__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44722__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__51011__auto___110655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___110655,ch){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___110655,ch){
return (function (state_110624){
var state_val_110625 = (state_110624[(1)]);
if((state_val_110625 === (7))){
var inst_110620 = (state_110624[(2)]);
var state_110624__$1 = state_110624;
var statearr_110626_110656 = state_110624__$1;
(statearr_110626_110656[(2)] = inst_110620);

(statearr_110626_110656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (1))){
var state_110624__$1 = state_110624;
var statearr_110627_110657 = state_110624__$1;
(statearr_110627_110657[(2)] = null);

(statearr_110627_110657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (4))){
var inst_110577 = (state_110624[(7)]);
var inst_110577__$1 = (state_110624[(2)]);
var state_110624__$1 = (function (){var statearr_110628 = state_110624;
(statearr_110628[(7)] = inst_110577__$1);

return statearr_110628;
})();
if(cljs.core.truth_(inst_110577__$1)){
var statearr_110629_110658 = state_110624__$1;
(statearr_110629_110658[(1)] = (5));

} else {
var statearr_110630_110659 = state_110624__$1;
(statearr_110630_110659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (15))){
var inst_110584 = (state_110624[(8)]);
var inst_110599 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_110584);
var inst_110600 = cljs.core.first.call(null,inst_110599);
var inst_110601 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_110600);
var inst_110602 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_110601)].join('');
var inst_110603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_110602);
var state_110624__$1 = state_110624;
var statearr_110631_110660 = state_110624__$1;
(statearr_110631_110660[(2)] = inst_110603);

(statearr_110631_110660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (13))){
var inst_110608 = (state_110624[(2)]);
var state_110624__$1 = state_110624;
var statearr_110632_110661 = state_110624__$1;
(statearr_110632_110661[(2)] = inst_110608);

(statearr_110632_110661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (6))){
var state_110624__$1 = state_110624;
var statearr_110633_110662 = state_110624__$1;
(statearr_110633_110662[(2)] = null);

(statearr_110633_110662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (17))){
var inst_110606 = (state_110624[(2)]);
var state_110624__$1 = state_110624;
var statearr_110634_110663 = state_110624__$1;
(statearr_110634_110663[(2)] = inst_110606);

(statearr_110634_110663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (3))){
var inst_110622 = (state_110624[(2)]);
var state_110624__$1 = state_110624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110624__$1,inst_110622);
} else {
if((state_val_110625 === (12))){
var inst_110583 = (state_110624[(9)]);
var inst_110597 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_110583,opts);
var state_110624__$1 = state_110624;
if(cljs.core.truth_(inst_110597)){
var statearr_110635_110664 = state_110624__$1;
(statearr_110635_110664[(1)] = (15));

} else {
var statearr_110636_110665 = state_110624__$1;
(statearr_110636_110665[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (2))){
var state_110624__$1 = state_110624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110624__$1,(4),ch);
} else {
if((state_val_110625 === (11))){
var inst_110584 = (state_110624[(8)]);
var inst_110589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_110590 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_110584);
var inst_110591 = cljs.core.async.timeout.call(null,(1000));
var inst_110592 = [inst_110590,inst_110591];
var inst_110593 = (new cljs.core.PersistentVector(null,2,(5),inst_110589,inst_110592,null));
var state_110624__$1 = state_110624;
return cljs.core.async.ioc_alts_BANG_.call(null,state_110624__$1,(14),inst_110593);
} else {
if((state_val_110625 === (9))){
var inst_110584 = (state_110624[(8)]);
var inst_110610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_110611 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_110584);
var inst_110612 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_110611);
var inst_110613 = [cljs.core.str("Not loading: "),cljs.core.str(inst_110612)].join('');
var inst_110614 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_110613);
var state_110624__$1 = (function (){var statearr_110637 = state_110624;
(statearr_110637[(10)] = inst_110610);

return statearr_110637;
})();
var statearr_110638_110666 = state_110624__$1;
(statearr_110638_110666[(2)] = inst_110614);

(statearr_110638_110666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (5))){
var inst_110577 = (state_110624[(7)]);
var inst_110579 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_110580 = (new cljs.core.PersistentArrayMap(null,2,inst_110579,null));
var inst_110581 = (new cljs.core.PersistentHashSet(null,inst_110580,null));
var inst_110582 = figwheel.client.focus_msgs.call(null,inst_110581,inst_110577);
var inst_110583 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_110582);
var inst_110584 = cljs.core.first.call(null,inst_110582);
var inst_110585 = figwheel.client.autoload_QMARK_.call(null);
var state_110624__$1 = (function (){var statearr_110639 = state_110624;
(statearr_110639[(9)] = inst_110583);

(statearr_110639[(8)] = inst_110584);

return statearr_110639;
})();
if(cljs.core.truth_(inst_110585)){
var statearr_110640_110667 = state_110624__$1;
(statearr_110640_110667[(1)] = (8));

} else {
var statearr_110641_110668 = state_110624__$1;
(statearr_110641_110668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (14))){
var inst_110595 = (state_110624[(2)]);
var state_110624__$1 = state_110624;
var statearr_110642_110669 = state_110624__$1;
(statearr_110642_110669[(2)] = inst_110595);

(statearr_110642_110669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (16))){
var state_110624__$1 = state_110624;
var statearr_110643_110670 = state_110624__$1;
(statearr_110643_110670[(2)] = null);

(statearr_110643_110670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (10))){
var inst_110616 = (state_110624[(2)]);
var state_110624__$1 = (function (){var statearr_110644 = state_110624;
(statearr_110644[(11)] = inst_110616);

return statearr_110644;
})();
var statearr_110645_110671 = state_110624__$1;
(statearr_110645_110671[(2)] = null);

(statearr_110645_110671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110625 === (8))){
var inst_110583 = (state_110624[(9)]);
var inst_110587 = figwheel.client.reload_file_state_QMARK_.call(null,inst_110583,opts);
var state_110624__$1 = state_110624;
if(cljs.core.truth_(inst_110587)){
var statearr_110646_110672 = state_110624__$1;
(statearr_110646_110672[(1)] = (11));

} else {
var statearr_110647_110673 = state_110624__$1;
(statearr_110647_110673[(1)] = (12));

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
});})(c__51011__auto___110655,ch))
;
return ((function (switch__50899__auto__,c__51011__auto___110655,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50900__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50900__auto____0 = (function (){
var statearr_110651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_110651[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50900__auto__);

(statearr_110651[(1)] = (1));

return statearr_110651;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50900__auto____1 = (function (state_110624){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_110624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e110652){if((e110652 instanceof Object)){
var ex__50903__auto__ = e110652;
var statearr_110653_110674 = state_110624;
(statearr_110653_110674[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e110652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110675 = state_110624;
state_110624 = G__110675;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50900__auto__ = function(state_110624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50900__auto____1.call(this,state_110624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50900__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50900__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___110655,ch))
})();
var state__51013__auto__ = (function (){var statearr_110654 = f__51012__auto__.call(null);
(statearr_110654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___110655);

return statearr_110654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___110655,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__110676_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__110676_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_110679 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_110679){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e110678){if((e110678 instanceof Error)){
var e = e110678;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_110679], null));
} else {
var e = e110678;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_110679))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__110680){
var map__110689 = p__110680;
var map__110689__$1 = ((((!((map__110689 == null)))?((((map__110689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110689):map__110689);
var opts = map__110689__$1;
var build_id = cljs.core.get.call(null,map__110689__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__110689,map__110689__$1,opts,build_id){
return (function (p__110691){
var vec__110692 = p__110691;
var seq__110693 = cljs.core.seq.call(null,vec__110692);
var first__110694 = cljs.core.first.call(null,seq__110693);
var seq__110693__$1 = cljs.core.next.call(null,seq__110693);
var map__110695 = first__110694;
var map__110695__$1 = ((((!((map__110695 == null)))?((((map__110695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110695):map__110695);
var msg = map__110695__$1;
var msg_name = cljs.core.get.call(null,map__110695__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__110693__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__110692,seq__110693,first__110694,seq__110693__$1,map__110695,map__110695__$1,msg,msg_name,_,map__110689,map__110689__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__110692,seq__110693,first__110694,seq__110693__$1,map__110695,map__110695__$1,msg,msg_name,_,map__110689,map__110689__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__110689,map__110689__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__110703){
var vec__110704 = p__110703;
var seq__110705 = cljs.core.seq.call(null,vec__110704);
var first__110706 = cljs.core.first.call(null,seq__110705);
var seq__110705__$1 = cljs.core.next.call(null,seq__110705);
var map__110707 = first__110706;
var map__110707__$1 = ((((!((map__110707 == null)))?((((map__110707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110707):map__110707);
var msg = map__110707__$1;
var msg_name = cljs.core.get.call(null,map__110707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__110705__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__110709){
var map__110721 = p__110709;
var map__110721__$1 = ((((!((map__110721 == null)))?((((map__110721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110721):map__110721);
var on_compile_warning = cljs.core.get.call(null,map__110721__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__110721__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__110721,map__110721__$1,on_compile_warning,on_compile_fail){
return (function (p__110723){
var vec__110724 = p__110723;
var seq__110725 = cljs.core.seq.call(null,vec__110724);
var first__110726 = cljs.core.first.call(null,seq__110725);
var seq__110725__$1 = cljs.core.next.call(null,seq__110725);
var map__110727 = first__110726;
var map__110727__$1 = ((((!((map__110727 == null)))?((((map__110727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__110727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__110727):map__110727);
var msg = map__110727__$1;
var msg_name = cljs.core.get.call(null,map__110727__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__110725__$1;
var pred__110729 = cljs.core._EQ_;
var expr__110730 = msg_name;
if(cljs.core.truth_(pred__110729.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__110730))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__110729.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__110730))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__110721,map__110721__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__,msg_hist,msg_names,msg){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__,msg_hist,msg_names,msg){
return (function (state_110958){
var state_val_110959 = (state_110958[(1)]);
if((state_val_110959 === (7))){
var inst_110878 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110878)){
var statearr_110960_111010 = state_110958__$1;
(statearr_110960_111010[(1)] = (8));

} else {
var statearr_110961_111011 = state_110958__$1;
(statearr_110961_111011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (20))){
var inst_110952 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110962_111012 = state_110958__$1;
(statearr_110962_111012[(2)] = inst_110952);

(statearr_110962_111012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (27))){
var inst_110948 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110963_111013 = state_110958__$1;
(statearr_110963_111013[(2)] = inst_110948);

(statearr_110963_111013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (1))){
var inst_110871 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110871)){
var statearr_110964_111014 = state_110958__$1;
(statearr_110964_111014[(1)] = (2));

} else {
var statearr_110965_111015 = state_110958__$1;
(statearr_110965_111015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (24))){
var inst_110950 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110966_111016 = state_110958__$1;
(statearr_110966_111016[(2)] = inst_110950);

(statearr_110966_111016[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (4))){
var inst_110956 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_110958__$1,inst_110956);
} else {
if((state_val_110959 === (15))){
var inst_110954 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110967_111017 = state_110958__$1;
(statearr_110967_111017[(2)] = inst_110954);

(statearr_110967_111017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (21))){
var inst_110907 = (state_110958[(2)]);
var inst_110908 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110909 = figwheel.client.auto_jump_to_error.call(null,opts,inst_110908);
var state_110958__$1 = (function (){var statearr_110968 = state_110958;
(statearr_110968[(7)] = inst_110907);

return statearr_110968;
})();
var statearr_110969_111018 = state_110958__$1;
(statearr_110969_111018[(2)] = inst_110909);

(statearr_110969_111018[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (31))){
var inst_110937 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110937)){
var statearr_110970_111019 = state_110958__$1;
(statearr_110970_111019[(1)] = (34));

} else {
var statearr_110971_111020 = state_110958__$1;
(statearr_110971_111020[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (32))){
var inst_110946 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110972_111021 = state_110958__$1;
(statearr_110972_111021[(2)] = inst_110946);

(statearr_110972_111021[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (33))){
var inst_110933 = (state_110958[(2)]);
var inst_110934 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110935 = figwheel.client.auto_jump_to_error.call(null,opts,inst_110934);
var state_110958__$1 = (function (){var statearr_110973 = state_110958;
(statearr_110973[(8)] = inst_110933);

return statearr_110973;
})();
var statearr_110974_111022 = state_110958__$1;
(statearr_110974_111022[(2)] = inst_110935);

(statearr_110974_111022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (13))){
var inst_110892 = figwheel.client.heads_up.clear.call(null);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(16),inst_110892);
} else {
if((state_val_110959 === (22))){
var inst_110913 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110914 = figwheel.client.heads_up.append_warning_message.call(null,inst_110913);
var state_110958__$1 = state_110958;
var statearr_110975_111023 = state_110958__$1;
(statearr_110975_111023[(2)] = inst_110914);

(statearr_110975_111023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (36))){
var inst_110944 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110976_111024 = state_110958__$1;
(statearr_110976_111024[(2)] = inst_110944);

(statearr_110976_111024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (29))){
var inst_110924 = (state_110958[(2)]);
var inst_110925 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110926 = figwheel.client.auto_jump_to_error.call(null,opts,inst_110925);
var state_110958__$1 = (function (){var statearr_110977 = state_110958;
(statearr_110977[(9)] = inst_110924);

return statearr_110977;
})();
var statearr_110978_111025 = state_110958__$1;
(statearr_110978_111025[(2)] = inst_110926);

(statearr_110978_111025[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (6))){
var inst_110873 = (state_110958[(10)]);
var state_110958__$1 = state_110958;
var statearr_110979_111026 = state_110958__$1;
(statearr_110979_111026[(2)] = inst_110873);

(statearr_110979_111026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (28))){
var inst_110920 = (state_110958[(2)]);
var inst_110921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110922 = figwheel.client.heads_up.display_warning.call(null,inst_110921);
var state_110958__$1 = (function (){var statearr_110980 = state_110958;
(statearr_110980[(11)] = inst_110920);

return statearr_110980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(29),inst_110922);
} else {
if((state_val_110959 === (25))){
var inst_110918 = figwheel.client.heads_up.clear.call(null);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(28),inst_110918);
} else {
if((state_val_110959 === (34))){
var inst_110939 = figwheel.client.heads_up.flash_loaded.call(null);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(37),inst_110939);
} else {
if((state_val_110959 === (17))){
var inst_110898 = (state_110958[(2)]);
var inst_110899 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110900 = figwheel.client.auto_jump_to_error.call(null,opts,inst_110899);
var state_110958__$1 = (function (){var statearr_110981 = state_110958;
(statearr_110981[(12)] = inst_110898);

return statearr_110981;
})();
var statearr_110982_111027 = state_110958__$1;
(statearr_110982_111027[(2)] = inst_110900);

(statearr_110982_111027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (3))){
var inst_110890 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110890)){
var statearr_110983_111028 = state_110958__$1;
(statearr_110983_111028[(1)] = (13));

} else {
var statearr_110984_111029 = state_110958__$1;
(statearr_110984_111029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (12))){
var inst_110886 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110985_111030 = state_110958__$1;
(statearr_110985_111030[(2)] = inst_110886);

(statearr_110985_111030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (2))){
var inst_110873 = (state_110958[(10)]);
var inst_110873__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_110958__$1 = (function (){var statearr_110986 = state_110958;
(statearr_110986[(10)] = inst_110873__$1);

return statearr_110986;
})();
if(cljs.core.truth_(inst_110873__$1)){
var statearr_110987_111031 = state_110958__$1;
(statearr_110987_111031[(1)] = (5));

} else {
var statearr_110988_111032 = state_110958__$1;
(statearr_110988_111032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (23))){
var inst_110916 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110916)){
var statearr_110989_111033 = state_110958__$1;
(statearr_110989_111033[(1)] = (25));

} else {
var statearr_110990_111034 = state_110958__$1;
(statearr_110990_111034[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (35))){
var state_110958__$1 = state_110958;
var statearr_110991_111035 = state_110958__$1;
(statearr_110991_111035[(2)] = null);

(statearr_110991_111035[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (19))){
var inst_110911 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110911)){
var statearr_110992_111036 = state_110958__$1;
(statearr_110992_111036[(1)] = (22));

} else {
var statearr_110993_111037 = state_110958__$1;
(statearr_110993_111037[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (11))){
var inst_110882 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_110994_111038 = state_110958__$1;
(statearr_110994_111038[(2)] = inst_110882);

(statearr_110994_111038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (9))){
var inst_110884 = figwheel.client.heads_up.clear.call(null);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(12),inst_110884);
} else {
if((state_val_110959 === (5))){
var inst_110875 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_110958__$1 = state_110958;
var statearr_110995_111039 = state_110958__$1;
(statearr_110995_111039[(2)] = inst_110875);

(statearr_110995_111039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (14))){
var inst_110902 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110902)){
var statearr_110996_111040 = state_110958__$1;
(statearr_110996_111040[(1)] = (18));

} else {
var statearr_110997_111041 = state_110958__$1;
(statearr_110997_111041[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (26))){
var inst_110928 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_110958__$1 = state_110958;
if(cljs.core.truth_(inst_110928)){
var statearr_110998_111042 = state_110958__$1;
(statearr_110998_111042[(1)] = (30));

} else {
var statearr_110999_111043 = state_110958__$1;
(statearr_110999_111043[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (16))){
var inst_110894 = (state_110958[(2)]);
var inst_110895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110896 = figwheel.client.heads_up.display_exception.call(null,inst_110895);
var state_110958__$1 = (function (){var statearr_111000 = state_110958;
(statearr_111000[(13)] = inst_110894);

return statearr_111000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(17),inst_110896);
} else {
if((state_val_110959 === (30))){
var inst_110930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110931 = figwheel.client.heads_up.display_warning.call(null,inst_110930);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(33),inst_110931);
} else {
if((state_val_110959 === (10))){
var inst_110888 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_111001_111044 = state_110958__$1;
(statearr_111001_111044[(2)] = inst_110888);

(statearr_111001_111044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (18))){
var inst_110904 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_110905 = figwheel.client.heads_up.display_exception.call(null,inst_110904);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(21),inst_110905);
} else {
if((state_val_110959 === (37))){
var inst_110941 = (state_110958[(2)]);
var state_110958__$1 = state_110958;
var statearr_111002_111045 = state_110958__$1;
(statearr_111002_111045[(2)] = inst_110941);

(statearr_111002_111045[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_110959 === (8))){
var inst_110880 = figwheel.client.heads_up.flash_loaded.call(null);
var state_110958__$1 = state_110958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_110958__$1,(11),inst_110880);
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
});})(c__51011__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50899__auto__,c__51011__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto____0 = (function (){
var statearr_111006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111006[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto__);

(statearr_111006[(1)] = (1));

return statearr_111006;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto____1 = (function (state_110958){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_110958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e111007){if((e111007 instanceof Object)){
var ex__50903__auto__ = e111007;
var statearr_111008_111046 = state_110958;
(statearr_111008_111046[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_110958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111047 = state_110958;
state_110958 = G__111047;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto__ = function(state_110958){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto____1.call(this,state_110958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__,msg_hist,msg_names,msg))
})();
var state__51013__auto__ = (function (){var statearr_111009 = f__51012__auto__.call(null);
(statearr_111009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_111009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__,msg_hist,msg_names,msg))
);

return c__51011__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__51011__auto___111110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___111110,ch){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___111110,ch){
return (function (state_111093){
var state_val_111094 = (state_111093[(1)]);
if((state_val_111094 === (1))){
var state_111093__$1 = state_111093;
var statearr_111095_111111 = state_111093__$1;
(statearr_111095_111111[(2)] = null);

(statearr_111095_111111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111094 === (2))){
var state_111093__$1 = state_111093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111093__$1,(4),ch);
} else {
if((state_val_111094 === (3))){
var inst_111091 = (state_111093[(2)]);
var state_111093__$1 = state_111093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111093__$1,inst_111091);
} else {
if((state_val_111094 === (4))){
var inst_111081 = (state_111093[(7)]);
var inst_111081__$1 = (state_111093[(2)]);
var state_111093__$1 = (function (){var statearr_111096 = state_111093;
(statearr_111096[(7)] = inst_111081__$1);

return statearr_111096;
})();
if(cljs.core.truth_(inst_111081__$1)){
var statearr_111097_111112 = state_111093__$1;
(statearr_111097_111112[(1)] = (5));

} else {
var statearr_111098_111113 = state_111093__$1;
(statearr_111098_111113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111094 === (5))){
var inst_111081 = (state_111093[(7)]);
var inst_111083 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_111081);
var state_111093__$1 = state_111093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111093__$1,(8),inst_111083);
} else {
if((state_val_111094 === (6))){
var state_111093__$1 = state_111093;
var statearr_111099_111114 = state_111093__$1;
(statearr_111099_111114[(2)] = null);

(statearr_111099_111114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111094 === (7))){
var inst_111089 = (state_111093[(2)]);
var state_111093__$1 = state_111093;
var statearr_111100_111115 = state_111093__$1;
(statearr_111100_111115[(2)] = inst_111089);

(statearr_111100_111115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111094 === (8))){
var inst_111085 = (state_111093[(2)]);
var state_111093__$1 = (function (){var statearr_111101 = state_111093;
(statearr_111101[(8)] = inst_111085);

return statearr_111101;
})();
var statearr_111102_111116 = state_111093__$1;
(statearr_111102_111116[(2)] = null);

(statearr_111102_111116[(1)] = (2));


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
});})(c__51011__auto___111110,ch))
;
return ((function (switch__50899__auto__,c__51011__auto___111110,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50900__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50900__auto____0 = (function (){
var statearr_111106 = [null,null,null,null,null,null,null,null,null];
(statearr_111106[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50900__auto__);

(statearr_111106[(1)] = (1));

return statearr_111106;
});
var figwheel$client$heads_up_plugin_$_state_machine__50900__auto____1 = (function (state_111093){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_111093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e111107){if((e111107 instanceof Object)){
var ex__50903__auto__ = e111107;
var statearr_111108_111117 = state_111093;
(statearr_111108_111117[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111118 = state_111093;
state_111093 = G__111118;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50900__auto__ = function(state_111093){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50900__auto____1.call(this,state_111093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50900__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50900__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___111110,ch))
})();
var state__51013__auto__ = (function (){var statearr_111109 = f__51012__auto__.call(null);
(statearr_111109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___111110);

return statearr_111109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___111110,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__){
return (function (state_111139){
var state_val_111140 = (state_111139[(1)]);
if((state_val_111140 === (1))){
var inst_111134 = cljs.core.async.timeout.call(null,(3000));
var state_111139__$1 = state_111139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111139__$1,(2),inst_111134);
} else {
if((state_val_111140 === (2))){
var inst_111136 = (state_111139[(2)]);
var inst_111137 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_111139__$1 = (function (){var statearr_111141 = state_111139;
(statearr_111141[(7)] = inst_111136);

return statearr_111141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111139__$1,inst_111137);
} else {
return null;
}
}
});})(c__51011__auto__))
;
return ((function (switch__50899__auto__,c__51011__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50900__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50900__auto____0 = (function (){
var statearr_111145 = [null,null,null,null,null,null,null,null];
(statearr_111145[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50900__auto__);

(statearr_111145[(1)] = (1));

return statearr_111145;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50900__auto____1 = (function (state_111139){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_111139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e111146){if((e111146 instanceof Object)){
var ex__50903__auto__ = e111146;
var statearr_111147_111149 = state_111139;
(statearr_111147_111149[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111150 = state_111139;
state_111139 = G__111150;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50900__auto__ = function(state_111139){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50900__auto____1.call(this,state_111139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50900__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50900__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__))
})();
var state__51013__auto__ = (function (){var statearr_111148 = f__51012__auto__.call(null);
(statearr_111148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_111148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__))
);

return c__51011__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__,figwheel_version,temp__4657__auto__){
return (function (state_111173){
var state_val_111174 = (state_111173[(1)]);
if((state_val_111174 === (1))){
var inst_111167 = cljs.core.async.timeout.call(null,(2000));
var state_111173__$1 = state_111173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111173__$1,(2),inst_111167);
} else {
if((state_val_111174 === (2))){
var inst_111169 = (state_111173[(2)]);
var inst_111170 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_111171 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_111170);
var state_111173__$1 = (function (){var statearr_111175 = state_111173;
(statearr_111175[(7)] = inst_111169);

return statearr_111175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111173__$1,inst_111171);
} else {
return null;
}
}
});})(c__51011__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__50899__auto__,c__51011__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto____0 = (function (){
var statearr_111179 = [null,null,null,null,null,null,null,null];
(statearr_111179[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto__);

(statearr_111179[(1)] = (1));

return statearr_111179;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto____1 = (function (state_111173){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_111173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e111180){if((e111180 instanceof Object)){
var ex__50903__auto__ = e111180;
var statearr_111181_111183 = state_111173;
(statearr_111181_111183[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e111180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111184 = state_111173;
state_111173 = G__111184;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto__ = function(state_111173){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto____1.call(this,state_111173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__,figwheel_version,temp__4657__auto__))
})();
var state__51013__auto__ = (function (){var statearr_111182 = f__51012__auto__.call(null);
(statearr_111182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_111182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__,figwheel_version,temp__4657__auto__))
);

return c__51011__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__111185){
var map__111189 = p__111185;
var map__111189__$1 = ((((!((map__111189 == null)))?((((map__111189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__111189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111189):map__111189);
var file = cljs.core.get.call(null,map__111189__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__111189__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__111189__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__111191 = "";
var G__111191__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__111191),cljs.core.str("file "),cljs.core.str(file)].join(''):G__111191);
var G__111191__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__111191__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__111191__$1);
if(cljs.core.truth_((function (){var and__44722__auto__ = line;
if(cljs.core.truth_(and__44722__auto__)){
return column;
} else {
return and__44722__auto__;
}
})())){
return [cljs.core.str(G__111191__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__111191__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__111192){
var map__111199 = p__111192;
var map__111199__$1 = ((((!((map__111199 == null)))?((((map__111199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__111199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111199):map__111199);
var ed = map__111199__$1;
var formatted_exception = cljs.core.get.call(null,map__111199__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__111199__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__111199__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__111201_111205 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__111202_111206 = null;
var count__111203_111207 = (0);
var i__111204_111208 = (0);
while(true){
if((i__111204_111208 < count__111203_111207)){
var msg_111209 = cljs.core._nth.call(null,chunk__111202_111206,i__111204_111208);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_111209);

var G__111210 = seq__111201_111205;
var G__111211 = chunk__111202_111206;
var G__111212 = count__111203_111207;
var G__111213 = (i__111204_111208 + (1));
seq__111201_111205 = G__111210;
chunk__111202_111206 = G__111211;
count__111203_111207 = G__111212;
i__111204_111208 = G__111213;
continue;
} else {
var temp__4657__auto___111214 = cljs.core.seq.call(null,seq__111201_111205);
if(temp__4657__auto___111214){
var seq__111201_111215__$1 = temp__4657__auto___111214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__111201_111215__$1)){
var c__45545__auto___111216 = cljs.core.chunk_first.call(null,seq__111201_111215__$1);
var G__111217 = cljs.core.chunk_rest.call(null,seq__111201_111215__$1);
var G__111218 = c__45545__auto___111216;
var G__111219 = cljs.core.count.call(null,c__45545__auto___111216);
var G__111220 = (0);
seq__111201_111205 = G__111217;
chunk__111202_111206 = G__111218;
count__111203_111207 = G__111219;
i__111204_111208 = G__111220;
continue;
} else {
var msg_111221 = cljs.core.first.call(null,seq__111201_111215__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_111221);

var G__111222 = cljs.core.next.call(null,seq__111201_111215__$1);
var G__111223 = null;
var G__111224 = (0);
var G__111225 = (0);
seq__111201_111205 = G__111222;
chunk__111202_111206 = G__111223;
count__111203_111207 = G__111224;
i__111204_111208 = G__111225;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__111226){
var map__111229 = p__111226;
var map__111229__$1 = ((((!((map__111229 == null)))?((((map__111229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__111229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111229):map__111229);
var w = map__111229__$1;
var message = cljs.core.get.call(null,map__111229__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44722__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44722__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44722__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__111241 = cljs.core.seq.call(null,plugins);
var chunk__111242 = null;
var count__111243 = (0);
var i__111244 = (0);
while(true){
if((i__111244 < count__111243)){
var vec__111245 = cljs.core._nth.call(null,chunk__111242,i__111244);
var k = cljs.core.nth.call(null,vec__111245,(0),null);
var plugin = cljs.core.nth.call(null,vec__111245,(1),null);
if(cljs.core.truth_(plugin)){
var pl_111251 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__111241,chunk__111242,count__111243,i__111244,pl_111251,vec__111245,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_111251.call(null,msg_hist);
});})(seq__111241,chunk__111242,count__111243,i__111244,pl_111251,vec__111245,k,plugin))
);
} else {
}

var G__111252 = seq__111241;
var G__111253 = chunk__111242;
var G__111254 = count__111243;
var G__111255 = (i__111244 + (1));
seq__111241 = G__111252;
chunk__111242 = G__111253;
count__111243 = G__111254;
i__111244 = G__111255;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__111241);
if(temp__4657__auto__){
var seq__111241__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__111241__$1)){
var c__45545__auto__ = cljs.core.chunk_first.call(null,seq__111241__$1);
var G__111256 = cljs.core.chunk_rest.call(null,seq__111241__$1);
var G__111257 = c__45545__auto__;
var G__111258 = cljs.core.count.call(null,c__45545__auto__);
var G__111259 = (0);
seq__111241 = G__111256;
chunk__111242 = G__111257;
count__111243 = G__111258;
i__111244 = G__111259;
continue;
} else {
var vec__111248 = cljs.core.first.call(null,seq__111241__$1);
var k = cljs.core.nth.call(null,vec__111248,(0),null);
var plugin = cljs.core.nth.call(null,vec__111248,(1),null);
if(cljs.core.truth_(plugin)){
var pl_111260 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__111241,chunk__111242,count__111243,i__111244,pl_111260,vec__111248,k,plugin,seq__111241__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_111260.call(null,msg_hist);
});})(seq__111241,chunk__111242,count__111243,i__111244,pl_111260,vec__111248,k,plugin,seq__111241__$1,temp__4657__auto__))
);
} else {
}

var G__111261 = cljs.core.next.call(null,seq__111241__$1);
var G__111262 = null;
var G__111263 = (0);
var G__111264 = (0);
seq__111241 = G__111261;
chunk__111242 = G__111262;
count__111243 = G__111263;
i__111244 = G__111264;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args111265 = [];
var len__45809__auto___111272 = arguments.length;
var i__45810__auto___111273 = (0);
while(true){
if((i__45810__auto___111273 < len__45809__auto___111272)){
args111265.push((arguments[i__45810__auto___111273]));

var G__111274 = (i__45810__auto___111273 + (1));
i__45810__auto___111273 = G__111274;
continue;
} else {
}
break;
}

var G__111267 = args111265.length;
switch (G__111267) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args111265.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__111268_111276 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__111269_111277 = null;
var count__111270_111278 = (0);
var i__111271_111279 = (0);
while(true){
if((i__111271_111279 < count__111270_111278)){
var msg_111280 = cljs.core._nth.call(null,chunk__111269_111277,i__111271_111279);
figwheel.client.socket.handle_incoming_message.call(null,msg_111280);

var G__111281 = seq__111268_111276;
var G__111282 = chunk__111269_111277;
var G__111283 = count__111270_111278;
var G__111284 = (i__111271_111279 + (1));
seq__111268_111276 = G__111281;
chunk__111269_111277 = G__111282;
count__111270_111278 = G__111283;
i__111271_111279 = G__111284;
continue;
} else {
var temp__4657__auto___111285 = cljs.core.seq.call(null,seq__111268_111276);
if(temp__4657__auto___111285){
var seq__111268_111286__$1 = temp__4657__auto___111285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__111268_111286__$1)){
var c__45545__auto___111287 = cljs.core.chunk_first.call(null,seq__111268_111286__$1);
var G__111288 = cljs.core.chunk_rest.call(null,seq__111268_111286__$1);
var G__111289 = c__45545__auto___111287;
var G__111290 = cljs.core.count.call(null,c__45545__auto___111287);
var G__111291 = (0);
seq__111268_111276 = G__111288;
chunk__111269_111277 = G__111289;
count__111270_111278 = G__111290;
i__111271_111279 = G__111291;
continue;
} else {
var msg_111292 = cljs.core.first.call(null,seq__111268_111286__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_111292);

var G__111293 = cljs.core.next.call(null,seq__111268_111286__$1);
var G__111294 = null;
var G__111295 = (0);
var G__111296 = (0);
seq__111268_111276 = G__111293;
chunk__111269_111277 = G__111294;
count__111270_111278 = G__111295;
i__111271_111279 = G__111296;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45816__auto__ = [];
var len__45809__auto___111301 = arguments.length;
var i__45810__auto___111302 = (0);
while(true){
if((i__45810__auto___111302 < len__45809__auto___111301)){
args__45816__auto__.push((arguments[i__45810__auto___111302]));

var G__111303 = (i__45810__auto___111302 + (1));
i__45810__auto___111302 = G__111303;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((0) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__111298){
var map__111299 = p__111298;
var map__111299__$1 = ((((!((map__111299 == null)))?((((map__111299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__111299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111299):map__111299);
var opts = map__111299__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq111297){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq111297));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e111305){if((e111305 instanceof Error)){
var e = e111305;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e111305;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__111309){
var map__111310 = p__111309;
var map__111310__$1 = ((((!((map__111310 == null)))?((((map__111310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__111310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111310):map__111310);
var msg_name = cljs.core.get.call(null,map__111310__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1494918381512