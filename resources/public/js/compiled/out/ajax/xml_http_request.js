// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8394,handler){
var map__8395 = p__8394;
var map__8395__$1 = ((((!((map__8395 == null)))?((((map__8395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8395):map__8395);
var uri = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8395__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8395,map__8395__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8393_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8393_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8395,map__8395__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8407 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8407)){
var response_type_8408 = temp__4657__auto___8407;
this$__$1.responseType = cljs.core.name.call(null,response_type_8408);
} else {
}

var seq__8397_8409 = cljs.core.seq.call(null,headers);
var chunk__8398_8410 = null;
var count__8399_8411 = (0);
var i__8400_8412 = (0);
while(true){
if((i__8400_8412 < count__8399_8411)){
var vec__8401_8413 = cljs.core._nth.call(null,chunk__8398_8410,i__8400_8412);
var k_8414 = cljs.core.nth.call(null,vec__8401_8413,(0),null);
var v_8415 = cljs.core.nth.call(null,vec__8401_8413,(1),null);
this$__$1.setRequestHeader(k_8414,v_8415);

var G__8416 = seq__8397_8409;
var G__8417 = chunk__8398_8410;
var G__8418 = count__8399_8411;
var G__8419 = (i__8400_8412 + (1));
seq__8397_8409 = G__8416;
chunk__8398_8410 = G__8417;
count__8399_8411 = G__8418;
i__8400_8412 = G__8419;
continue;
} else {
var temp__4657__auto___8420 = cljs.core.seq.call(null,seq__8397_8409);
if(temp__4657__auto___8420){
var seq__8397_8421__$1 = temp__4657__auto___8420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8397_8421__$1)){
var c__7228__auto___8422 = cljs.core.chunk_first.call(null,seq__8397_8421__$1);
var G__8423 = cljs.core.chunk_rest.call(null,seq__8397_8421__$1);
var G__8424 = c__7228__auto___8422;
var G__8425 = cljs.core.count.call(null,c__7228__auto___8422);
var G__8426 = (0);
seq__8397_8409 = G__8423;
chunk__8398_8410 = G__8424;
count__8399_8411 = G__8425;
i__8400_8412 = G__8426;
continue;
} else {
var vec__8404_8427 = cljs.core.first.call(null,seq__8397_8421__$1);
var k_8428 = cljs.core.nth.call(null,vec__8404_8427,(0),null);
var v_8429 = cljs.core.nth.call(null,vec__8404_8427,(1),null);
this$__$1.setRequestHeader(k_8428,v_8429);

var G__8430 = cljs.core.next.call(null,seq__8397_8421__$1);
var G__8431 = null;
var G__8432 = (0);
var G__8433 = (0);
seq__8397_8409 = G__8430;
chunk__8398_8410 = G__8431;
count__8399_8411 = G__8432;
i__8400_8412 = G__8433;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6417__auto__ = body;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1501400714135