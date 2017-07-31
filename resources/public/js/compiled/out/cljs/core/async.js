// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args103558 = [];
var len__45809__auto___103564 = arguments.length;
var i__45810__auto___103565 = (0);
while(true){
if((i__45810__auto___103565 < len__45809__auto___103564)){
args103558.push((arguments[i__45810__auto___103565]));

var G__103566 = (i__45810__auto___103565 + (1));
i__45810__auto___103565 = G__103566;
continue;
} else {
}
break;
}

var G__103560 = args103558.length;
switch (G__103560) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103558.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async103561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async103561 = (function (f,blockable,meta103562){
this.f = f;
this.blockable = blockable;
this.meta103562 = meta103562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async103561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103563,meta103562__$1){
var self__ = this;
var _103563__$1 = this;
return (new cljs.core.async.t_cljs$core$async103561(self__.f,self__.blockable,meta103562__$1));
});

cljs.core.async.t_cljs$core$async103561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103563){
var self__ = this;
var _103563__$1 = this;
return self__.meta103562;
});

cljs.core.async.t_cljs$core$async103561.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async103561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async103561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async103561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async103561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta103562","meta103562",-32223276,null)], null);
});

cljs.core.async.t_cljs$core$async103561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async103561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async103561";

cljs.core.async.t_cljs$core$async103561.cljs$lang$ctorPrWriter = (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async103561");
});

cljs.core.async.__GT_t_cljs$core$async103561 = (function cljs$core$async$__GT_t_cljs$core$async103561(f__$1,blockable__$1,meta103562){
return (new cljs.core.async.t_cljs$core$async103561(f__$1,blockable__$1,meta103562));
});

}

return (new cljs.core.async.t_cljs$core$async103561(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args103570 = [];
var len__45809__auto___103573 = arguments.length;
var i__45810__auto___103574 = (0);
while(true){
if((i__45810__auto___103574 < len__45809__auto___103573)){
args103570.push((arguments[i__45810__auto___103574]));

var G__103575 = (i__45810__auto___103574 + (1));
i__45810__auto___103574 = G__103575;
continue;
} else {
}
break;
}

var G__103572 = args103570.length;
switch (G__103572) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103570.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args103577 = [];
var len__45809__auto___103580 = arguments.length;
var i__45810__auto___103581 = (0);
while(true){
if((i__45810__auto___103581 < len__45809__auto___103580)){
args103577.push((arguments[i__45810__auto___103581]));

var G__103582 = (i__45810__auto___103581 + (1));
i__45810__auto___103581 = G__103582;
continue;
} else {
}
break;
}

var G__103579 = args103577.length;
switch (G__103579) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103577.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args103584 = [];
var len__45809__auto___103587 = arguments.length;
var i__45810__auto___103588 = (0);
while(true){
if((i__45810__auto___103588 < len__45809__auto___103587)){
args103584.push((arguments[i__45810__auto___103588]));

var G__103589 = (i__45810__auto___103588 + (1));
i__45810__auto___103588 = G__103589;
continue;
} else {
}
break;
}

var G__103586 = args103584.length;
switch (G__103586) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103584.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_103591 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_103591);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_103591,ret){
return (function (){
return fn1.call(null,val_103591);
});})(val_103591,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args103592 = [];
var len__45809__auto___103595 = arguments.length;
var i__45810__auto___103596 = (0);
while(true){
if((i__45810__auto___103596 < len__45809__auto___103595)){
args103592.push((arguments[i__45810__auto___103596]));

var G__103597 = (i__45810__auto___103596 + (1));
i__45810__auto___103596 = G__103597;
continue;
} else {
}
break;
}

var G__103594 = args103592.length;
switch (G__103594) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103592.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__45649__auto___103599 = n;
var x_103600 = (0);
while(true){
if((x_103600 < n__45649__auto___103599)){
(a[x_103600] = (0));

var G__103601 = (x_103600 + (1));
x_103600 = G__103601;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__103602 = (i + (1));
i = G__103602;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async103606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async103606 = (function (alt_flag,flag,meta103607){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta103607 = meta103607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async103606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_103608,meta103607__$1){
var self__ = this;
var _103608__$1 = this;
return (new cljs.core.async.t_cljs$core$async103606(self__.alt_flag,self__.flag,meta103607__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async103606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_103608){
var self__ = this;
var _103608__$1 = this;
return self__.meta103607;
});})(flag))
;

cljs.core.async.t_cljs$core$async103606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async103606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async103606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async103606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async103606.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta103607","meta103607",1820337170,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async103606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async103606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async103606";

cljs.core.async.t_cljs$core$async103606.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async103606");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async103606 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async103606(alt_flag__$1,flag__$1,meta103607){
return (new cljs.core.async.t_cljs$core$async103606(alt_flag__$1,flag__$1,meta103607));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async103606(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async103612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async103612 = (function (alt_handler,flag,cb,meta103613){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta103613 = meta103613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async103612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103614,meta103613__$1){
var self__ = this;
var _103614__$1 = this;
return (new cljs.core.async.t_cljs$core$async103612(self__.alt_handler,self__.flag,self__.cb,meta103613__$1));
});

cljs.core.async.t_cljs$core$async103612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103614){
var self__ = this;
var _103614__$1 = this;
return self__.meta103613;
});

cljs.core.async.t_cljs$core$async103612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async103612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async103612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async103612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async103612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta103613","meta103613",-382960979,null)], null);
});

cljs.core.async.t_cljs$core$async103612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async103612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async103612";

cljs.core.async.t_cljs$core$async103612.cljs$lang$ctorPrWriter = (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async103612");
});

cljs.core.async.__GT_t_cljs$core$async103612 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async103612(alt_handler__$1,flag__$1,cb__$1,meta103613){
return (new cljs.core.async.t_cljs$core$async103612(alt_handler__$1,flag__$1,cb__$1,meta103613));
});

}

return (new cljs.core.async.t_cljs$core$async103612(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__103615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__103615_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__103616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__103616_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44734__auto__ = wport;
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return port;
}
})()], null));
} else {
var G__103617 = (i + (1));
i = G__103617;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44734__auto__ = ret;
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44722__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44722__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44722__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45816__auto__ = [];
var len__45809__auto___103623 = arguments.length;
var i__45810__auto___103624 = (0);
while(true){
if((i__45810__auto___103624 < len__45809__auto___103623)){
args__45816__auto__.push((arguments[i__45810__auto___103624]));

var G__103625 = (i__45810__auto___103624 + (1));
i__45810__auto___103624 = G__103625;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((1) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__103620){
var map__103621 = p__103620;
var map__103621__$1 = ((((!((map__103621 == null)))?((((map__103621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__103621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103621):map__103621);
var opts = map__103621__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq103618){
var G__103619 = cljs.core.first.call(null,seq103618);
var seq103618__$1 = cljs.core.next.call(null,seq103618);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__103619,seq103618__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args103626 = [];
var len__45809__auto___103676 = arguments.length;
var i__45810__auto___103677 = (0);
while(true){
if((i__45810__auto___103677 < len__45809__auto___103676)){
args103626.push((arguments[i__45810__auto___103677]));

var G__103678 = (i__45810__auto___103677 + (1));
i__45810__auto___103677 = G__103678;
continue;
} else {
}
break;
}

var G__103628 = args103626.length;
switch (G__103628) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args103626.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51011__auto___103680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___103680){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___103680){
return (function (state_103652){
var state_val_103653 = (state_103652[(1)]);
if((state_val_103653 === (7))){
var inst_103648 = (state_103652[(2)]);
var state_103652__$1 = state_103652;
var statearr_103654_103681 = state_103652__$1;
(statearr_103654_103681[(2)] = inst_103648);

(statearr_103654_103681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (1))){
var state_103652__$1 = state_103652;
var statearr_103655_103682 = state_103652__$1;
(statearr_103655_103682[(2)] = null);

(statearr_103655_103682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (4))){
var inst_103631 = (state_103652[(7)]);
var inst_103631__$1 = (state_103652[(2)]);
var inst_103632 = (inst_103631__$1 == null);
var state_103652__$1 = (function (){var statearr_103656 = state_103652;
(statearr_103656[(7)] = inst_103631__$1);

return statearr_103656;
})();
if(cljs.core.truth_(inst_103632)){
var statearr_103657_103683 = state_103652__$1;
(statearr_103657_103683[(1)] = (5));

} else {
var statearr_103658_103684 = state_103652__$1;
(statearr_103658_103684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (13))){
var state_103652__$1 = state_103652;
var statearr_103659_103685 = state_103652__$1;
(statearr_103659_103685[(2)] = null);

(statearr_103659_103685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (6))){
var inst_103631 = (state_103652[(7)]);
var state_103652__$1 = state_103652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103652__$1,(11),to,inst_103631);
} else {
if((state_val_103653 === (3))){
var inst_103650 = (state_103652[(2)]);
var state_103652__$1 = state_103652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103652__$1,inst_103650);
} else {
if((state_val_103653 === (12))){
var state_103652__$1 = state_103652;
var statearr_103660_103686 = state_103652__$1;
(statearr_103660_103686[(2)] = null);

(statearr_103660_103686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (2))){
var state_103652__$1 = state_103652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103652__$1,(4),from);
} else {
if((state_val_103653 === (11))){
var inst_103641 = (state_103652[(2)]);
var state_103652__$1 = state_103652;
if(cljs.core.truth_(inst_103641)){
var statearr_103661_103687 = state_103652__$1;
(statearr_103661_103687[(1)] = (12));

} else {
var statearr_103662_103688 = state_103652__$1;
(statearr_103662_103688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (9))){
var state_103652__$1 = state_103652;
var statearr_103663_103689 = state_103652__$1;
(statearr_103663_103689[(2)] = null);

(statearr_103663_103689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (5))){
var state_103652__$1 = state_103652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_103664_103690 = state_103652__$1;
(statearr_103664_103690[(1)] = (8));

} else {
var statearr_103665_103691 = state_103652__$1;
(statearr_103665_103691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (14))){
var inst_103646 = (state_103652[(2)]);
var state_103652__$1 = state_103652;
var statearr_103666_103692 = state_103652__$1;
(statearr_103666_103692[(2)] = inst_103646);

(statearr_103666_103692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (10))){
var inst_103638 = (state_103652[(2)]);
var state_103652__$1 = state_103652;
var statearr_103667_103693 = state_103652__$1;
(statearr_103667_103693[(2)] = inst_103638);

(statearr_103667_103693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103653 === (8))){
var inst_103635 = cljs.core.async.close_BANG_.call(null,to);
var state_103652__$1 = state_103652;
var statearr_103668_103694 = state_103652__$1;
(statearr_103668_103694[(2)] = inst_103635);

(statearr_103668_103694[(1)] = (10));


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
});})(c__51011__auto___103680))
;
return ((function (switch__50899__auto__,c__51011__auto___103680){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_103672 = [null,null,null,null,null,null,null,null];
(statearr_103672[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_103672[(1)] = (1));

return statearr_103672;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_103652){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_103652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e103673){if((e103673 instanceof Object)){
var ex__50903__auto__ = e103673;
var statearr_103674_103695 = state_103652;
(statearr_103674_103695[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103696 = state_103652;
state_103652 = G__103696;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_103652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_103652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___103680))
})();
var state__51013__auto__ = (function (){var statearr_103675 = f__51012__auto__.call(null);
(statearr_103675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___103680);

return statearr_103675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___103680))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__103884){
var vec__103885 = p__103884;
var v = cljs.core.nth.call(null,vec__103885,(0),null);
var p = cljs.core.nth.call(null,vec__103885,(1),null);
var job = vec__103885;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__51011__auto___104071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___104071,res,vec__103885,v,p,job,jobs,results){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___104071,res,vec__103885,v,p,job,jobs,results){
return (function (state_103892){
var state_val_103893 = (state_103892[(1)]);
if((state_val_103893 === (1))){
var state_103892__$1 = state_103892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103892__$1,(2),res,v);
} else {
if((state_val_103893 === (2))){
var inst_103889 = (state_103892[(2)]);
var inst_103890 = cljs.core.async.close_BANG_.call(null,res);
var state_103892__$1 = (function (){var statearr_103894 = state_103892;
(statearr_103894[(7)] = inst_103889);

return statearr_103894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103892__$1,inst_103890);
} else {
return null;
}
}
});})(c__51011__auto___104071,res,vec__103885,v,p,job,jobs,results))
;
return ((function (switch__50899__auto__,c__51011__auto___104071,res,vec__103885,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0 = (function (){
var statearr_103898 = [null,null,null,null,null,null,null,null];
(statearr_103898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__);

(statearr_103898[(1)] = (1));

return statearr_103898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1 = (function (state_103892){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_103892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e103899){if((e103899 instanceof Object)){
var ex__50903__auto__ = e103899;
var statearr_103900_104072 = state_103892;
(statearr_103900_104072[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104073 = state_103892;
state_103892 = G__104073;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = function(state_103892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1.call(this,state_103892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___104071,res,vec__103885,v,p,job,jobs,results))
})();
var state__51013__auto__ = (function (){var statearr_103901 = f__51012__auto__.call(null);
(statearr_103901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___104071);

return statearr_103901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___104071,res,vec__103885,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__103902){
var vec__103903 = p__103902;
var v = cljs.core.nth.call(null,vec__103903,(0),null);
var p = cljs.core.nth.call(null,vec__103903,(1),null);
var job = vec__103903;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__45649__auto___104074 = n;
var __104075 = (0);
while(true){
if((__104075 < n__45649__auto___104074)){
var G__103906_104076 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__103906_104076) {
case "compute":
var c__51011__auto___104078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__104075,c__51011__auto___104078,G__103906_104076,n__45649__auto___104074,jobs,results,process,async){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (__104075,c__51011__auto___104078,G__103906_104076,n__45649__auto___104074,jobs,results,process,async){
return (function (state_103919){
var state_val_103920 = (state_103919[(1)]);
if((state_val_103920 === (1))){
var state_103919__$1 = state_103919;
var statearr_103921_104079 = state_103919__$1;
(statearr_103921_104079[(2)] = null);

(statearr_103921_104079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103920 === (2))){
var state_103919__$1 = state_103919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103919__$1,(4),jobs);
} else {
if((state_val_103920 === (3))){
var inst_103917 = (state_103919[(2)]);
var state_103919__$1 = state_103919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103919__$1,inst_103917);
} else {
if((state_val_103920 === (4))){
var inst_103909 = (state_103919[(2)]);
var inst_103910 = process.call(null,inst_103909);
var state_103919__$1 = state_103919;
if(cljs.core.truth_(inst_103910)){
var statearr_103922_104080 = state_103919__$1;
(statearr_103922_104080[(1)] = (5));

} else {
var statearr_103923_104081 = state_103919__$1;
(statearr_103923_104081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103920 === (5))){
var state_103919__$1 = state_103919;
var statearr_103924_104082 = state_103919__$1;
(statearr_103924_104082[(2)] = null);

(statearr_103924_104082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103920 === (6))){
var state_103919__$1 = state_103919;
var statearr_103925_104083 = state_103919__$1;
(statearr_103925_104083[(2)] = null);

(statearr_103925_104083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103920 === (7))){
var inst_103915 = (state_103919[(2)]);
var state_103919__$1 = state_103919;
var statearr_103926_104084 = state_103919__$1;
(statearr_103926_104084[(2)] = inst_103915);

(statearr_103926_104084[(1)] = (3));


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
});})(__104075,c__51011__auto___104078,G__103906_104076,n__45649__auto___104074,jobs,results,process,async))
;
return ((function (__104075,switch__50899__auto__,c__51011__auto___104078,G__103906_104076,n__45649__auto___104074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0 = (function (){
var statearr_103930 = [null,null,null,null,null,null,null];
(statearr_103930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__);

(statearr_103930[(1)] = (1));

return statearr_103930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1 = (function (state_103919){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_103919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e103931){if((e103931 instanceof Object)){
var ex__50903__auto__ = e103931;
var statearr_103932_104085 = state_103919;
(statearr_103932_104085[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104086 = state_103919;
state_103919 = G__104086;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = function(state_103919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1.call(this,state_103919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__;
})()
;})(__104075,switch__50899__auto__,c__51011__auto___104078,G__103906_104076,n__45649__auto___104074,jobs,results,process,async))
})();
var state__51013__auto__ = (function (){var statearr_103933 = f__51012__auto__.call(null);
(statearr_103933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___104078);

return statearr_103933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(__104075,c__51011__auto___104078,G__103906_104076,n__45649__auto___104074,jobs,results,process,async))
);


break;
case "async":
var c__51011__auto___104087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__104075,c__51011__auto___104087,G__103906_104076,n__45649__auto___104074,jobs,results,process,async){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (__104075,c__51011__auto___104087,G__103906_104076,n__45649__auto___104074,jobs,results,process,async){
return (function (state_103946){
var state_val_103947 = (state_103946[(1)]);
if((state_val_103947 === (1))){
var state_103946__$1 = state_103946;
var statearr_103948_104088 = state_103946__$1;
(statearr_103948_104088[(2)] = null);

(statearr_103948_104088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103947 === (2))){
var state_103946__$1 = state_103946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103946__$1,(4),jobs);
} else {
if((state_val_103947 === (3))){
var inst_103944 = (state_103946[(2)]);
var state_103946__$1 = state_103946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103946__$1,inst_103944);
} else {
if((state_val_103947 === (4))){
var inst_103936 = (state_103946[(2)]);
var inst_103937 = async.call(null,inst_103936);
var state_103946__$1 = state_103946;
if(cljs.core.truth_(inst_103937)){
var statearr_103949_104089 = state_103946__$1;
(statearr_103949_104089[(1)] = (5));

} else {
var statearr_103950_104090 = state_103946__$1;
(statearr_103950_104090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103947 === (5))){
var state_103946__$1 = state_103946;
var statearr_103951_104091 = state_103946__$1;
(statearr_103951_104091[(2)] = null);

(statearr_103951_104091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103947 === (6))){
var state_103946__$1 = state_103946;
var statearr_103952_104092 = state_103946__$1;
(statearr_103952_104092[(2)] = null);

(statearr_103952_104092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103947 === (7))){
var inst_103942 = (state_103946[(2)]);
var state_103946__$1 = state_103946;
var statearr_103953_104093 = state_103946__$1;
(statearr_103953_104093[(2)] = inst_103942);

(statearr_103953_104093[(1)] = (3));


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
});})(__104075,c__51011__auto___104087,G__103906_104076,n__45649__auto___104074,jobs,results,process,async))
;
return ((function (__104075,switch__50899__auto__,c__51011__auto___104087,G__103906_104076,n__45649__auto___104074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0 = (function (){
var statearr_103957 = [null,null,null,null,null,null,null];
(statearr_103957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__);

(statearr_103957[(1)] = (1));

return statearr_103957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1 = (function (state_103946){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_103946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e103958){if((e103958 instanceof Object)){
var ex__50903__auto__ = e103958;
var statearr_103959_104094 = state_103946;
(statearr_103959_104094[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104095 = state_103946;
state_103946 = G__104095;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = function(state_103946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1.call(this,state_103946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__;
})()
;})(__104075,switch__50899__auto__,c__51011__auto___104087,G__103906_104076,n__45649__auto___104074,jobs,results,process,async))
})();
var state__51013__auto__ = (function (){var statearr_103960 = f__51012__auto__.call(null);
(statearr_103960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___104087);

return statearr_103960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(__104075,c__51011__auto___104087,G__103906_104076,n__45649__auto___104074,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__104096 = (__104075 + (1));
__104075 = G__104096;
continue;
} else {
}
break;
}

var c__51011__auto___104097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___104097,jobs,results,process,async){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___104097,jobs,results,process,async){
return (function (state_103982){
var state_val_103983 = (state_103982[(1)]);
if((state_val_103983 === (1))){
var state_103982__$1 = state_103982;
var statearr_103984_104098 = state_103982__$1;
(statearr_103984_104098[(2)] = null);

(statearr_103984_104098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103983 === (2))){
var state_103982__$1 = state_103982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103982__$1,(4),from);
} else {
if((state_val_103983 === (3))){
var inst_103980 = (state_103982[(2)]);
var state_103982__$1 = state_103982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103982__$1,inst_103980);
} else {
if((state_val_103983 === (4))){
var inst_103963 = (state_103982[(7)]);
var inst_103963__$1 = (state_103982[(2)]);
var inst_103964 = (inst_103963__$1 == null);
var state_103982__$1 = (function (){var statearr_103985 = state_103982;
(statearr_103985[(7)] = inst_103963__$1);

return statearr_103985;
})();
if(cljs.core.truth_(inst_103964)){
var statearr_103986_104099 = state_103982__$1;
(statearr_103986_104099[(1)] = (5));

} else {
var statearr_103987_104100 = state_103982__$1;
(statearr_103987_104100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103983 === (5))){
var inst_103966 = cljs.core.async.close_BANG_.call(null,jobs);
var state_103982__$1 = state_103982;
var statearr_103988_104101 = state_103982__$1;
(statearr_103988_104101[(2)] = inst_103966);

(statearr_103988_104101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103983 === (6))){
var inst_103963 = (state_103982[(7)]);
var inst_103968 = (state_103982[(8)]);
var inst_103968__$1 = cljs.core.async.chan.call(null,(1));
var inst_103969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103970 = [inst_103963,inst_103968__$1];
var inst_103971 = (new cljs.core.PersistentVector(null,2,(5),inst_103969,inst_103970,null));
var state_103982__$1 = (function (){var statearr_103989 = state_103982;
(statearr_103989[(8)] = inst_103968__$1);

return statearr_103989;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103982__$1,(8),jobs,inst_103971);
} else {
if((state_val_103983 === (7))){
var inst_103978 = (state_103982[(2)]);
var state_103982__$1 = state_103982;
var statearr_103990_104102 = state_103982__$1;
(statearr_103990_104102[(2)] = inst_103978);

(statearr_103990_104102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103983 === (8))){
var inst_103968 = (state_103982[(8)]);
var inst_103973 = (state_103982[(2)]);
var state_103982__$1 = (function (){var statearr_103991 = state_103982;
(statearr_103991[(9)] = inst_103973);

return statearr_103991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103982__$1,(9),results,inst_103968);
} else {
if((state_val_103983 === (9))){
var inst_103975 = (state_103982[(2)]);
var state_103982__$1 = (function (){var statearr_103992 = state_103982;
(statearr_103992[(10)] = inst_103975);

return statearr_103992;
})();
var statearr_103993_104103 = state_103982__$1;
(statearr_103993_104103[(2)] = null);

(statearr_103993_104103[(1)] = (2));


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
});})(c__51011__auto___104097,jobs,results,process,async))
;
return ((function (switch__50899__auto__,c__51011__auto___104097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0 = (function (){
var statearr_103997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_103997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__);

(statearr_103997[(1)] = (1));

return statearr_103997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1 = (function (state_103982){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_103982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e103998){if((e103998 instanceof Object)){
var ex__50903__auto__ = e103998;
var statearr_103999_104104 = state_103982;
(statearr_103999_104104[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104105 = state_103982;
state_103982 = G__104105;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = function(state_103982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1.call(this,state_103982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___104097,jobs,results,process,async))
})();
var state__51013__auto__ = (function (){var statearr_104000 = f__51012__auto__.call(null);
(statearr_104000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___104097);

return statearr_104000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___104097,jobs,results,process,async))
);


var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__,jobs,results,process,async){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__,jobs,results,process,async){
return (function (state_104038){
var state_val_104039 = (state_104038[(1)]);
if((state_val_104039 === (7))){
var inst_104034 = (state_104038[(2)]);
var state_104038__$1 = state_104038;
var statearr_104040_104106 = state_104038__$1;
(statearr_104040_104106[(2)] = inst_104034);

(statearr_104040_104106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (20))){
var state_104038__$1 = state_104038;
var statearr_104041_104107 = state_104038__$1;
(statearr_104041_104107[(2)] = null);

(statearr_104041_104107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (1))){
var state_104038__$1 = state_104038;
var statearr_104042_104108 = state_104038__$1;
(statearr_104042_104108[(2)] = null);

(statearr_104042_104108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (4))){
var inst_104003 = (state_104038[(7)]);
var inst_104003__$1 = (state_104038[(2)]);
var inst_104004 = (inst_104003__$1 == null);
var state_104038__$1 = (function (){var statearr_104043 = state_104038;
(statearr_104043[(7)] = inst_104003__$1);

return statearr_104043;
})();
if(cljs.core.truth_(inst_104004)){
var statearr_104044_104109 = state_104038__$1;
(statearr_104044_104109[(1)] = (5));

} else {
var statearr_104045_104110 = state_104038__$1;
(statearr_104045_104110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (15))){
var inst_104016 = (state_104038[(8)]);
var state_104038__$1 = state_104038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104038__$1,(18),to,inst_104016);
} else {
if((state_val_104039 === (21))){
var inst_104029 = (state_104038[(2)]);
var state_104038__$1 = state_104038;
var statearr_104046_104111 = state_104038__$1;
(statearr_104046_104111[(2)] = inst_104029);

(statearr_104046_104111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (13))){
var inst_104031 = (state_104038[(2)]);
var state_104038__$1 = (function (){var statearr_104047 = state_104038;
(statearr_104047[(9)] = inst_104031);

return statearr_104047;
})();
var statearr_104048_104112 = state_104038__$1;
(statearr_104048_104112[(2)] = null);

(statearr_104048_104112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (6))){
var inst_104003 = (state_104038[(7)]);
var state_104038__$1 = state_104038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104038__$1,(11),inst_104003);
} else {
if((state_val_104039 === (17))){
var inst_104024 = (state_104038[(2)]);
var state_104038__$1 = state_104038;
if(cljs.core.truth_(inst_104024)){
var statearr_104049_104113 = state_104038__$1;
(statearr_104049_104113[(1)] = (19));

} else {
var statearr_104050_104114 = state_104038__$1;
(statearr_104050_104114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (3))){
var inst_104036 = (state_104038[(2)]);
var state_104038__$1 = state_104038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104038__$1,inst_104036);
} else {
if((state_val_104039 === (12))){
var inst_104013 = (state_104038[(10)]);
var state_104038__$1 = state_104038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104038__$1,(14),inst_104013);
} else {
if((state_val_104039 === (2))){
var state_104038__$1 = state_104038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104038__$1,(4),results);
} else {
if((state_val_104039 === (19))){
var state_104038__$1 = state_104038;
var statearr_104051_104115 = state_104038__$1;
(statearr_104051_104115[(2)] = null);

(statearr_104051_104115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (11))){
var inst_104013 = (state_104038[(2)]);
var state_104038__$1 = (function (){var statearr_104052 = state_104038;
(statearr_104052[(10)] = inst_104013);

return statearr_104052;
})();
var statearr_104053_104116 = state_104038__$1;
(statearr_104053_104116[(2)] = null);

(statearr_104053_104116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (9))){
var state_104038__$1 = state_104038;
var statearr_104054_104117 = state_104038__$1;
(statearr_104054_104117[(2)] = null);

(statearr_104054_104117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (5))){
var state_104038__$1 = state_104038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_104055_104118 = state_104038__$1;
(statearr_104055_104118[(1)] = (8));

} else {
var statearr_104056_104119 = state_104038__$1;
(statearr_104056_104119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (14))){
var inst_104018 = (state_104038[(11)]);
var inst_104016 = (state_104038[(8)]);
var inst_104016__$1 = (state_104038[(2)]);
var inst_104017 = (inst_104016__$1 == null);
var inst_104018__$1 = cljs.core.not.call(null,inst_104017);
var state_104038__$1 = (function (){var statearr_104057 = state_104038;
(statearr_104057[(11)] = inst_104018__$1);

(statearr_104057[(8)] = inst_104016__$1);

return statearr_104057;
})();
if(inst_104018__$1){
var statearr_104058_104120 = state_104038__$1;
(statearr_104058_104120[(1)] = (15));

} else {
var statearr_104059_104121 = state_104038__$1;
(statearr_104059_104121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (16))){
var inst_104018 = (state_104038[(11)]);
var state_104038__$1 = state_104038;
var statearr_104060_104122 = state_104038__$1;
(statearr_104060_104122[(2)] = inst_104018);

(statearr_104060_104122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (10))){
var inst_104010 = (state_104038[(2)]);
var state_104038__$1 = state_104038;
var statearr_104061_104123 = state_104038__$1;
(statearr_104061_104123[(2)] = inst_104010);

(statearr_104061_104123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (18))){
var inst_104021 = (state_104038[(2)]);
var state_104038__$1 = state_104038;
var statearr_104062_104124 = state_104038__$1;
(statearr_104062_104124[(2)] = inst_104021);

(statearr_104062_104124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104039 === (8))){
var inst_104007 = cljs.core.async.close_BANG_.call(null,to);
var state_104038__$1 = state_104038;
var statearr_104063_104125 = state_104038__$1;
(statearr_104063_104125[(2)] = inst_104007);

(statearr_104063_104125[(1)] = (10));


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
});})(c__51011__auto__,jobs,results,process,async))
;
return ((function (switch__50899__auto__,c__51011__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0 = (function (){
var statearr_104067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__);

(statearr_104067[(1)] = (1));

return statearr_104067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1 = (function (state_104038){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_104038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e104068){if((e104068 instanceof Object)){
var ex__50903__auto__ = e104068;
var statearr_104069_104126 = state_104038;
(statearr_104069_104126[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104127 = state_104038;
state_104038 = G__104127;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__ = function(state_104038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1.call(this,state_104038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__,jobs,results,process,async))
})();
var state__51013__auto__ = (function (){var statearr_104070 = f__51012__auto__.call(null);
(statearr_104070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_104070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__,jobs,results,process,async))
);

return c__51011__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args104128 = [];
var len__45809__auto___104131 = arguments.length;
var i__45810__auto___104132 = (0);
while(true){
if((i__45810__auto___104132 < len__45809__auto___104131)){
args104128.push((arguments[i__45810__auto___104132]));

var G__104133 = (i__45810__auto___104132 + (1));
i__45810__auto___104132 = G__104133;
continue;
} else {
}
break;
}

var G__104130 = args104128.length;
switch (G__104130) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104128.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args104135 = [];
var len__45809__auto___104138 = arguments.length;
var i__45810__auto___104139 = (0);
while(true){
if((i__45810__auto___104139 < len__45809__auto___104138)){
args104135.push((arguments[i__45810__auto___104139]));

var G__104140 = (i__45810__auto___104139 + (1));
i__45810__auto___104139 = G__104140;
continue;
} else {
}
break;
}

var G__104137 = args104135.length;
switch (G__104137) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104135.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args104142 = [];
var len__45809__auto___104195 = arguments.length;
var i__45810__auto___104196 = (0);
while(true){
if((i__45810__auto___104196 < len__45809__auto___104195)){
args104142.push((arguments[i__45810__auto___104196]));

var G__104197 = (i__45810__auto___104196 + (1));
i__45810__auto___104196 = G__104197;
continue;
} else {
}
break;
}

var G__104144 = args104142.length;
switch (G__104144) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104142.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__51011__auto___104199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___104199,tc,fc){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___104199,tc,fc){
return (function (state_104170){
var state_val_104171 = (state_104170[(1)]);
if((state_val_104171 === (7))){
var inst_104166 = (state_104170[(2)]);
var state_104170__$1 = state_104170;
var statearr_104172_104200 = state_104170__$1;
(statearr_104172_104200[(2)] = inst_104166);

(statearr_104172_104200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (1))){
var state_104170__$1 = state_104170;
var statearr_104173_104201 = state_104170__$1;
(statearr_104173_104201[(2)] = null);

(statearr_104173_104201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (4))){
var inst_104147 = (state_104170[(7)]);
var inst_104147__$1 = (state_104170[(2)]);
var inst_104148 = (inst_104147__$1 == null);
var state_104170__$1 = (function (){var statearr_104174 = state_104170;
(statearr_104174[(7)] = inst_104147__$1);

return statearr_104174;
})();
if(cljs.core.truth_(inst_104148)){
var statearr_104175_104202 = state_104170__$1;
(statearr_104175_104202[(1)] = (5));

} else {
var statearr_104176_104203 = state_104170__$1;
(statearr_104176_104203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (13))){
var state_104170__$1 = state_104170;
var statearr_104177_104204 = state_104170__$1;
(statearr_104177_104204[(2)] = null);

(statearr_104177_104204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (6))){
var inst_104147 = (state_104170[(7)]);
var inst_104153 = p.call(null,inst_104147);
var state_104170__$1 = state_104170;
if(cljs.core.truth_(inst_104153)){
var statearr_104178_104205 = state_104170__$1;
(statearr_104178_104205[(1)] = (9));

} else {
var statearr_104179_104206 = state_104170__$1;
(statearr_104179_104206[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (3))){
var inst_104168 = (state_104170[(2)]);
var state_104170__$1 = state_104170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104170__$1,inst_104168);
} else {
if((state_val_104171 === (12))){
var state_104170__$1 = state_104170;
var statearr_104180_104207 = state_104170__$1;
(statearr_104180_104207[(2)] = null);

(statearr_104180_104207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (2))){
var state_104170__$1 = state_104170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104170__$1,(4),ch);
} else {
if((state_val_104171 === (11))){
var inst_104147 = (state_104170[(7)]);
var inst_104157 = (state_104170[(2)]);
var state_104170__$1 = state_104170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104170__$1,(8),inst_104157,inst_104147);
} else {
if((state_val_104171 === (9))){
var state_104170__$1 = state_104170;
var statearr_104181_104208 = state_104170__$1;
(statearr_104181_104208[(2)] = tc);

(statearr_104181_104208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (5))){
var inst_104150 = cljs.core.async.close_BANG_.call(null,tc);
var inst_104151 = cljs.core.async.close_BANG_.call(null,fc);
var state_104170__$1 = (function (){var statearr_104182 = state_104170;
(statearr_104182[(8)] = inst_104150);

return statearr_104182;
})();
var statearr_104183_104209 = state_104170__$1;
(statearr_104183_104209[(2)] = inst_104151);

(statearr_104183_104209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (14))){
var inst_104164 = (state_104170[(2)]);
var state_104170__$1 = state_104170;
var statearr_104184_104210 = state_104170__$1;
(statearr_104184_104210[(2)] = inst_104164);

(statearr_104184_104210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (10))){
var state_104170__$1 = state_104170;
var statearr_104185_104211 = state_104170__$1;
(statearr_104185_104211[(2)] = fc);

(statearr_104185_104211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104171 === (8))){
var inst_104159 = (state_104170[(2)]);
var state_104170__$1 = state_104170;
if(cljs.core.truth_(inst_104159)){
var statearr_104186_104212 = state_104170__$1;
(statearr_104186_104212[(1)] = (12));

} else {
var statearr_104187_104213 = state_104170__$1;
(statearr_104187_104213[(1)] = (13));

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
});})(c__51011__auto___104199,tc,fc))
;
return ((function (switch__50899__auto__,c__51011__auto___104199,tc,fc){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_104191 = [null,null,null,null,null,null,null,null,null];
(statearr_104191[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_104191[(1)] = (1));

return statearr_104191;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_104170){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_104170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e104192){if((e104192 instanceof Object)){
var ex__50903__auto__ = e104192;
var statearr_104193_104214 = state_104170;
(statearr_104193_104214[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104215 = state_104170;
state_104170 = G__104215;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_104170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_104170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___104199,tc,fc))
})();
var state__51013__auto__ = (function (){var statearr_104194 = f__51012__auto__.call(null);
(statearr_104194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___104199);

return statearr_104194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___104199,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__){
return (function (state_104279){
var state_val_104280 = (state_104279[(1)]);
if((state_val_104280 === (7))){
var inst_104275 = (state_104279[(2)]);
var state_104279__$1 = state_104279;
var statearr_104281_104302 = state_104279__$1;
(statearr_104281_104302[(2)] = inst_104275);

(statearr_104281_104302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (1))){
var inst_104259 = init;
var state_104279__$1 = (function (){var statearr_104282 = state_104279;
(statearr_104282[(7)] = inst_104259);

return statearr_104282;
})();
var statearr_104283_104303 = state_104279__$1;
(statearr_104283_104303[(2)] = null);

(statearr_104283_104303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (4))){
var inst_104262 = (state_104279[(8)]);
var inst_104262__$1 = (state_104279[(2)]);
var inst_104263 = (inst_104262__$1 == null);
var state_104279__$1 = (function (){var statearr_104284 = state_104279;
(statearr_104284[(8)] = inst_104262__$1);

return statearr_104284;
})();
if(cljs.core.truth_(inst_104263)){
var statearr_104285_104304 = state_104279__$1;
(statearr_104285_104304[(1)] = (5));

} else {
var statearr_104286_104305 = state_104279__$1;
(statearr_104286_104305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (6))){
var inst_104266 = (state_104279[(9)]);
var inst_104262 = (state_104279[(8)]);
var inst_104259 = (state_104279[(7)]);
var inst_104266__$1 = f.call(null,inst_104259,inst_104262);
var inst_104267 = cljs.core.reduced_QMARK_.call(null,inst_104266__$1);
var state_104279__$1 = (function (){var statearr_104287 = state_104279;
(statearr_104287[(9)] = inst_104266__$1);

return statearr_104287;
})();
if(inst_104267){
var statearr_104288_104306 = state_104279__$1;
(statearr_104288_104306[(1)] = (8));

} else {
var statearr_104289_104307 = state_104279__$1;
(statearr_104289_104307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (3))){
var inst_104277 = (state_104279[(2)]);
var state_104279__$1 = state_104279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104279__$1,inst_104277);
} else {
if((state_val_104280 === (2))){
var state_104279__$1 = state_104279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104279__$1,(4),ch);
} else {
if((state_val_104280 === (9))){
var inst_104266 = (state_104279[(9)]);
var inst_104259 = inst_104266;
var state_104279__$1 = (function (){var statearr_104290 = state_104279;
(statearr_104290[(7)] = inst_104259);

return statearr_104290;
})();
var statearr_104291_104308 = state_104279__$1;
(statearr_104291_104308[(2)] = null);

(statearr_104291_104308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (5))){
var inst_104259 = (state_104279[(7)]);
var state_104279__$1 = state_104279;
var statearr_104292_104309 = state_104279__$1;
(statearr_104292_104309[(2)] = inst_104259);

(statearr_104292_104309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (10))){
var inst_104273 = (state_104279[(2)]);
var state_104279__$1 = state_104279;
var statearr_104293_104310 = state_104279__$1;
(statearr_104293_104310[(2)] = inst_104273);

(statearr_104293_104310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104280 === (8))){
var inst_104266 = (state_104279[(9)]);
var inst_104269 = cljs.core.deref.call(null,inst_104266);
var state_104279__$1 = state_104279;
var statearr_104294_104311 = state_104279__$1;
(statearr_104294_104311[(2)] = inst_104269);

(statearr_104294_104311[(1)] = (10));


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
});})(c__51011__auto__))
;
return ((function (switch__50899__auto__,c__51011__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50900__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50900__auto____0 = (function (){
var statearr_104298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_104298[(0)] = cljs$core$async$reduce_$_state_machine__50900__auto__);

(statearr_104298[(1)] = (1));

return statearr_104298;
});
var cljs$core$async$reduce_$_state_machine__50900__auto____1 = (function (state_104279){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_104279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e104299){if((e104299 instanceof Object)){
var ex__50903__auto__ = e104299;
var statearr_104300_104312 = state_104279;
(statearr_104300_104312[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104313 = state_104279;
state_104279 = G__104313;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50900__auto__ = function(state_104279){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50900__auto____1.call(this,state_104279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50900__auto____0;
cljs$core$async$reduce_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50900__auto____1;
return cljs$core$async$reduce_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__))
})();
var state__51013__auto__ = (function (){var statearr_104301 = f__51012__auto__.call(null);
(statearr_104301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_104301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__))
);

return c__51011__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args104314 = [];
var len__45809__auto___104366 = arguments.length;
var i__45810__auto___104367 = (0);
while(true){
if((i__45810__auto___104367 < len__45809__auto___104366)){
args104314.push((arguments[i__45810__auto___104367]));

var G__104368 = (i__45810__auto___104367 + (1));
i__45810__auto___104367 = G__104368;
continue;
} else {
}
break;
}

var G__104316 = args104314.length;
switch (G__104316) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104314.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__){
return (function (state_104341){
var state_val_104342 = (state_104341[(1)]);
if((state_val_104342 === (7))){
var inst_104323 = (state_104341[(2)]);
var state_104341__$1 = state_104341;
var statearr_104343_104370 = state_104341__$1;
(statearr_104343_104370[(2)] = inst_104323);

(statearr_104343_104370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (1))){
var inst_104317 = cljs.core.seq.call(null,coll);
var inst_104318 = inst_104317;
var state_104341__$1 = (function (){var statearr_104344 = state_104341;
(statearr_104344[(7)] = inst_104318);

return statearr_104344;
})();
var statearr_104345_104371 = state_104341__$1;
(statearr_104345_104371[(2)] = null);

(statearr_104345_104371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (4))){
var inst_104318 = (state_104341[(7)]);
var inst_104321 = cljs.core.first.call(null,inst_104318);
var state_104341__$1 = state_104341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104341__$1,(7),ch,inst_104321);
} else {
if((state_val_104342 === (13))){
var inst_104335 = (state_104341[(2)]);
var state_104341__$1 = state_104341;
var statearr_104346_104372 = state_104341__$1;
(statearr_104346_104372[(2)] = inst_104335);

(statearr_104346_104372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (6))){
var inst_104326 = (state_104341[(2)]);
var state_104341__$1 = state_104341;
if(cljs.core.truth_(inst_104326)){
var statearr_104347_104373 = state_104341__$1;
(statearr_104347_104373[(1)] = (8));

} else {
var statearr_104348_104374 = state_104341__$1;
(statearr_104348_104374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (3))){
var inst_104339 = (state_104341[(2)]);
var state_104341__$1 = state_104341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104341__$1,inst_104339);
} else {
if((state_val_104342 === (12))){
var state_104341__$1 = state_104341;
var statearr_104349_104375 = state_104341__$1;
(statearr_104349_104375[(2)] = null);

(statearr_104349_104375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (2))){
var inst_104318 = (state_104341[(7)]);
var state_104341__$1 = state_104341;
if(cljs.core.truth_(inst_104318)){
var statearr_104350_104376 = state_104341__$1;
(statearr_104350_104376[(1)] = (4));

} else {
var statearr_104351_104377 = state_104341__$1;
(statearr_104351_104377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (11))){
var inst_104332 = cljs.core.async.close_BANG_.call(null,ch);
var state_104341__$1 = state_104341;
var statearr_104352_104378 = state_104341__$1;
(statearr_104352_104378[(2)] = inst_104332);

(statearr_104352_104378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (9))){
var state_104341__$1 = state_104341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_104353_104379 = state_104341__$1;
(statearr_104353_104379[(1)] = (11));

} else {
var statearr_104354_104380 = state_104341__$1;
(statearr_104354_104380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (5))){
var inst_104318 = (state_104341[(7)]);
var state_104341__$1 = state_104341;
var statearr_104355_104381 = state_104341__$1;
(statearr_104355_104381[(2)] = inst_104318);

(statearr_104355_104381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (10))){
var inst_104337 = (state_104341[(2)]);
var state_104341__$1 = state_104341;
var statearr_104356_104382 = state_104341__$1;
(statearr_104356_104382[(2)] = inst_104337);

(statearr_104356_104382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104342 === (8))){
var inst_104318 = (state_104341[(7)]);
var inst_104328 = cljs.core.next.call(null,inst_104318);
var inst_104318__$1 = inst_104328;
var state_104341__$1 = (function (){var statearr_104357 = state_104341;
(statearr_104357[(7)] = inst_104318__$1);

return statearr_104357;
})();
var statearr_104358_104383 = state_104341__$1;
(statearr_104358_104383[(2)] = null);

(statearr_104358_104383[(1)] = (2));


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
});})(c__51011__auto__))
;
return ((function (switch__50899__auto__,c__51011__auto__){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_104362 = [null,null,null,null,null,null,null,null];
(statearr_104362[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_104362[(1)] = (1));

return statearr_104362;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_104341){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_104341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e104363){if((e104363 instanceof Object)){
var ex__50903__auto__ = e104363;
var statearr_104364_104384 = state_104341;
(statearr_104364_104384[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104385 = state_104341;
state_104341 = G__104385;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_104341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_104341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__))
})();
var state__51013__auto__ = (function (){var statearr_104365 = f__51012__auto__.call(null);
(statearr_104365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_104365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__))
);

return c__51011__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__45397__auto__ = (((_ == null))?null:_);
var m__45398__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,_);
} else {
var m__45398__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__45398__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m,ch);
} else {
var m__45398__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m);
} else {
var m__45398__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async104611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104611 = (function (mult,ch,cs,meta104612){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta104612 = meta104612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_104613,meta104612__$1){
var self__ = this;
var _104613__$1 = this;
return (new cljs.core.async.t_cljs$core$async104611(self__.mult,self__.ch,self__.cs,meta104612__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_104613){
var self__ = this;
var _104613__$1 = this;
return self__.meta104612;
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta104612","meta104612",-950634798,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async104611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async104611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104611";

cljs.core.async.t_cljs$core$async104611.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async104611");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async104611 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async104611(mult__$1,ch__$1,cs__$1,meta104612){
return (new cljs.core.async.t_cljs$core$async104611(mult__$1,ch__$1,cs__$1,meta104612));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async104611(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__51011__auto___104836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___104836,cs,m,dchan,dctr,done){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___104836,cs,m,dchan,dctr,done){
return (function (state_104748){
var state_val_104749 = (state_104748[(1)]);
if((state_val_104749 === (7))){
var inst_104744 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104750_104837 = state_104748__$1;
(statearr_104750_104837[(2)] = inst_104744);

(statearr_104750_104837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (20))){
var inst_104647 = (state_104748[(7)]);
var inst_104659 = cljs.core.first.call(null,inst_104647);
var inst_104660 = cljs.core.nth.call(null,inst_104659,(0),null);
var inst_104661 = cljs.core.nth.call(null,inst_104659,(1),null);
var state_104748__$1 = (function (){var statearr_104751 = state_104748;
(statearr_104751[(8)] = inst_104660);

return statearr_104751;
})();
if(cljs.core.truth_(inst_104661)){
var statearr_104752_104838 = state_104748__$1;
(statearr_104752_104838[(1)] = (22));

} else {
var statearr_104753_104839 = state_104748__$1;
(statearr_104753_104839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (27))){
var inst_104696 = (state_104748[(9)]);
var inst_104689 = (state_104748[(10)]);
var inst_104691 = (state_104748[(11)]);
var inst_104616 = (state_104748[(12)]);
var inst_104696__$1 = cljs.core._nth.call(null,inst_104689,inst_104691);
var inst_104697 = cljs.core.async.put_BANG_.call(null,inst_104696__$1,inst_104616,done);
var state_104748__$1 = (function (){var statearr_104754 = state_104748;
(statearr_104754[(9)] = inst_104696__$1);

return statearr_104754;
})();
if(cljs.core.truth_(inst_104697)){
var statearr_104755_104840 = state_104748__$1;
(statearr_104755_104840[(1)] = (30));

} else {
var statearr_104756_104841 = state_104748__$1;
(statearr_104756_104841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (1))){
var state_104748__$1 = state_104748;
var statearr_104757_104842 = state_104748__$1;
(statearr_104757_104842[(2)] = null);

(statearr_104757_104842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (24))){
var inst_104647 = (state_104748[(7)]);
var inst_104666 = (state_104748[(2)]);
var inst_104667 = cljs.core.next.call(null,inst_104647);
var inst_104625 = inst_104667;
var inst_104626 = null;
var inst_104627 = (0);
var inst_104628 = (0);
var state_104748__$1 = (function (){var statearr_104758 = state_104748;
(statearr_104758[(13)] = inst_104627);

(statearr_104758[(14)] = inst_104625);

(statearr_104758[(15)] = inst_104626);

(statearr_104758[(16)] = inst_104628);

(statearr_104758[(17)] = inst_104666);

return statearr_104758;
})();
var statearr_104759_104843 = state_104748__$1;
(statearr_104759_104843[(2)] = null);

(statearr_104759_104843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (39))){
var state_104748__$1 = state_104748;
var statearr_104763_104844 = state_104748__$1;
(statearr_104763_104844[(2)] = null);

(statearr_104763_104844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (4))){
var inst_104616 = (state_104748[(12)]);
var inst_104616__$1 = (state_104748[(2)]);
var inst_104617 = (inst_104616__$1 == null);
var state_104748__$1 = (function (){var statearr_104764 = state_104748;
(statearr_104764[(12)] = inst_104616__$1);

return statearr_104764;
})();
if(cljs.core.truth_(inst_104617)){
var statearr_104765_104845 = state_104748__$1;
(statearr_104765_104845[(1)] = (5));

} else {
var statearr_104766_104846 = state_104748__$1;
(statearr_104766_104846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (15))){
var inst_104627 = (state_104748[(13)]);
var inst_104625 = (state_104748[(14)]);
var inst_104626 = (state_104748[(15)]);
var inst_104628 = (state_104748[(16)]);
var inst_104643 = (state_104748[(2)]);
var inst_104644 = (inst_104628 + (1));
var tmp104760 = inst_104627;
var tmp104761 = inst_104625;
var tmp104762 = inst_104626;
var inst_104625__$1 = tmp104761;
var inst_104626__$1 = tmp104762;
var inst_104627__$1 = tmp104760;
var inst_104628__$1 = inst_104644;
var state_104748__$1 = (function (){var statearr_104767 = state_104748;
(statearr_104767[(18)] = inst_104643);

(statearr_104767[(13)] = inst_104627__$1);

(statearr_104767[(14)] = inst_104625__$1);

(statearr_104767[(15)] = inst_104626__$1);

(statearr_104767[(16)] = inst_104628__$1);

return statearr_104767;
})();
var statearr_104768_104847 = state_104748__$1;
(statearr_104768_104847[(2)] = null);

(statearr_104768_104847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (21))){
var inst_104670 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104772_104848 = state_104748__$1;
(statearr_104772_104848[(2)] = inst_104670);

(statearr_104772_104848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (31))){
var inst_104696 = (state_104748[(9)]);
var inst_104700 = done.call(null,null);
var inst_104701 = cljs.core.async.untap_STAR_.call(null,m,inst_104696);
var state_104748__$1 = (function (){var statearr_104773 = state_104748;
(statearr_104773[(19)] = inst_104700);

return statearr_104773;
})();
var statearr_104774_104849 = state_104748__$1;
(statearr_104774_104849[(2)] = inst_104701);

(statearr_104774_104849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (32))){
var inst_104689 = (state_104748[(10)]);
var inst_104688 = (state_104748[(20)]);
var inst_104690 = (state_104748[(21)]);
var inst_104691 = (state_104748[(11)]);
var inst_104703 = (state_104748[(2)]);
var inst_104704 = (inst_104691 + (1));
var tmp104769 = inst_104689;
var tmp104770 = inst_104688;
var tmp104771 = inst_104690;
var inst_104688__$1 = tmp104770;
var inst_104689__$1 = tmp104769;
var inst_104690__$1 = tmp104771;
var inst_104691__$1 = inst_104704;
var state_104748__$1 = (function (){var statearr_104775 = state_104748;
(statearr_104775[(10)] = inst_104689__$1);

(statearr_104775[(20)] = inst_104688__$1);

(statearr_104775[(22)] = inst_104703);

(statearr_104775[(21)] = inst_104690__$1);

(statearr_104775[(11)] = inst_104691__$1);

return statearr_104775;
})();
var statearr_104776_104850 = state_104748__$1;
(statearr_104776_104850[(2)] = null);

(statearr_104776_104850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (40))){
var inst_104716 = (state_104748[(23)]);
var inst_104720 = done.call(null,null);
var inst_104721 = cljs.core.async.untap_STAR_.call(null,m,inst_104716);
var state_104748__$1 = (function (){var statearr_104777 = state_104748;
(statearr_104777[(24)] = inst_104720);

return statearr_104777;
})();
var statearr_104778_104851 = state_104748__$1;
(statearr_104778_104851[(2)] = inst_104721);

(statearr_104778_104851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (33))){
var inst_104707 = (state_104748[(25)]);
var inst_104709 = cljs.core.chunked_seq_QMARK_.call(null,inst_104707);
var state_104748__$1 = state_104748;
if(inst_104709){
var statearr_104779_104852 = state_104748__$1;
(statearr_104779_104852[(1)] = (36));

} else {
var statearr_104780_104853 = state_104748__$1;
(statearr_104780_104853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (13))){
var inst_104637 = (state_104748[(26)]);
var inst_104640 = cljs.core.async.close_BANG_.call(null,inst_104637);
var state_104748__$1 = state_104748;
var statearr_104781_104854 = state_104748__$1;
(statearr_104781_104854[(2)] = inst_104640);

(statearr_104781_104854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (22))){
var inst_104660 = (state_104748[(8)]);
var inst_104663 = cljs.core.async.close_BANG_.call(null,inst_104660);
var state_104748__$1 = state_104748;
var statearr_104782_104855 = state_104748__$1;
(statearr_104782_104855[(2)] = inst_104663);

(statearr_104782_104855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (36))){
var inst_104707 = (state_104748[(25)]);
var inst_104711 = cljs.core.chunk_first.call(null,inst_104707);
var inst_104712 = cljs.core.chunk_rest.call(null,inst_104707);
var inst_104713 = cljs.core.count.call(null,inst_104711);
var inst_104688 = inst_104712;
var inst_104689 = inst_104711;
var inst_104690 = inst_104713;
var inst_104691 = (0);
var state_104748__$1 = (function (){var statearr_104783 = state_104748;
(statearr_104783[(10)] = inst_104689);

(statearr_104783[(20)] = inst_104688);

(statearr_104783[(21)] = inst_104690);

(statearr_104783[(11)] = inst_104691);

return statearr_104783;
})();
var statearr_104784_104856 = state_104748__$1;
(statearr_104784_104856[(2)] = null);

(statearr_104784_104856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (41))){
var inst_104707 = (state_104748[(25)]);
var inst_104723 = (state_104748[(2)]);
var inst_104724 = cljs.core.next.call(null,inst_104707);
var inst_104688 = inst_104724;
var inst_104689 = null;
var inst_104690 = (0);
var inst_104691 = (0);
var state_104748__$1 = (function (){var statearr_104785 = state_104748;
(statearr_104785[(10)] = inst_104689);

(statearr_104785[(20)] = inst_104688);

(statearr_104785[(27)] = inst_104723);

(statearr_104785[(21)] = inst_104690);

(statearr_104785[(11)] = inst_104691);

return statearr_104785;
})();
var statearr_104786_104857 = state_104748__$1;
(statearr_104786_104857[(2)] = null);

(statearr_104786_104857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (43))){
var state_104748__$1 = state_104748;
var statearr_104787_104858 = state_104748__$1;
(statearr_104787_104858[(2)] = null);

(statearr_104787_104858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (29))){
var inst_104732 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104788_104859 = state_104748__$1;
(statearr_104788_104859[(2)] = inst_104732);

(statearr_104788_104859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (44))){
var inst_104741 = (state_104748[(2)]);
var state_104748__$1 = (function (){var statearr_104789 = state_104748;
(statearr_104789[(28)] = inst_104741);

return statearr_104789;
})();
var statearr_104790_104860 = state_104748__$1;
(statearr_104790_104860[(2)] = null);

(statearr_104790_104860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (6))){
var inst_104680 = (state_104748[(29)]);
var inst_104679 = cljs.core.deref.call(null,cs);
var inst_104680__$1 = cljs.core.keys.call(null,inst_104679);
var inst_104681 = cljs.core.count.call(null,inst_104680__$1);
var inst_104682 = cljs.core.reset_BANG_.call(null,dctr,inst_104681);
var inst_104687 = cljs.core.seq.call(null,inst_104680__$1);
var inst_104688 = inst_104687;
var inst_104689 = null;
var inst_104690 = (0);
var inst_104691 = (0);
var state_104748__$1 = (function (){var statearr_104791 = state_104748;
(statearr_104791[(10)] = inst_104689);

(statearr_104791[(29)] = inst_104680__$1);

(statearr_104791[(20)] = inst_104688);

(statearr_104791[(30)] = inst_104682);

(statearr_104791[(21)] = inst_104690);

(statearr_104791[(11)] = inst_104691);

return statearr_104791;
})();
var statearr_104792_104861 = state_104748__$1;
(statearr_104792_104861[(2)] = null);

(statearr_104792_104861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (28))){
var inst_104688 = (state_104748[(20)]);
var inst_104707 = (state_104748[(25)]);
var inst_104707__$1 = cljs.core.seq.call(null,inst_104688);
var state_104748__$1 = (function (){var statearr_104793 = state_104748;
(statearr_104793[(25)] = inst_104707__$1);

return statearr_104793;
})();
if(inst_104707__$1){
var statearr_104794_104862 = state_104748__$1;
(statearr_104794_104862[(1)] = (33));

} else {
var statearr_104795_104863 = state_104748__$1;
(statearr_104795_104863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (25))){
var inst_104690 = (state_104748[(21)]);
var inst_104691 = (state_104748[(11)]);
var inst_104693 = (inst_104691 < inst_104690);
var inst_104694 = inst_104693;
var state_104748__$1 = state_104748;
if(cljs.core.truth_(inst_104694)){
var statearr_104796_104864 = state_104748__$1;
(statearr_104796_104864[(1)] = (27));

} else {
var statearr_104797_104865 = state_104748__$1;
(statearr_104797_104865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (34))){
var state_104748__$1 = state_104748;
var statearr_104798_104866 = state_104748__$1;
(statearr_104798_104866[(2)] = null);

(statearr_104798_104866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (17))){
var state_104748__$1 = state_104748;
var statearr_104799_104867 = state_104748__$1;
(statearr_104799_104867[(2)] = null);

(statearr_104799_104867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (3))){
var inst_104746 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104748__$1,inst_104746);
} else {
if((state_val_104749 === (12))){
var inst_104675 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104800_104868 = state_104748__$1;
(statearr_104800_104868[(2)] = inst_104675);

(statearr_104800_104868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (2))){
var state_104748__$1 = state_104748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104748__$1,(4),ch);
} else {
if((state_val_104749 === (23))){
var state_104748__$1 = state_104748;
var statearr_104801_104869 = state_104748__$1;
(statearr_104801_104869[(2)] = null);

(statearr_104801_104869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (35))){
var inst_104730 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104802_104870 = state_104748__$1;
(statearr_104802_104870[(2)] = inst_104730);

(statearr_104802_104870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (19))){
var inst_104647 = (state_104748[(7)]);
var inst_104651 = cljs.core.chunk_first.call(null,inst_104647);
var inst_104652 = cljs.core.chunk_rest.call(null,inst_104647);
var inst_104653 = cljs.core.count.call(null,inst_104651);
var inst_104625 = inst_104652;
var inst_104626 = inst_104651;
var inst_104627 = inst_104653;
var inst_104628 = (0);
var state_104748__$1 = (function (){var statearr_104803 = state_104748;
(statearr_104803[(13)] = inst_104627);

(statearr_104803[(14)] = inst_104625);

(statearr_104803[(15)] = inst_104626);

(statearr_104803[(16)] = inst_104628);

return statearr_104803;
})();
var statearr_104804_104871 = state_104748__$1;
(statearr_104804_104871[(2)] = null);

(statearr_104804_104871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (11))){
var inst_104625 = (state_104748[(14)]);
var inst_104647 = (state_104748[(7)]);
var inst_104647__$1 = cljs.core.seq.call(null,inst_104625);
var state_104748__$1 = (function (){var statearr_104805 = state_104748;
(statearr_104805[(7)] = inst_104647__$1);

return statearr_104805;
})();
if(inst_104647__$1){
var statearr_104806_104872 = state_104748__$1;
(statearr_104806_104872[(1)] = (16));

} else {
var statearr_104807_104873 = state_104748__$1;
(statearr_104807_104873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (9))){
var inst_104677 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104808_104874 = state_104748__$1;
(statearr_104808_104874[(2)] = inst_104677);

(statearr_104808_104874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (5))){
var inst_104623 = cljs.core.deref.call(null,cs);
var inst_104624 = cljs.core.seq.call(null,inst_104623);
var inst_104625 = inst_104624;
var inst_104626 = null;
var inst_104627 = (0);
var inst_104628 = (0);
var state_104748__$1 = (function (){var statearr_104809 = state_104748;
(statearr_104809[(13)] = inst_104627);

(statearr_104809[(14)] = inst_104625);

(statearr_104809[(15)] = inst_104626);

(statearr_104809[(16)] = inst_104628);

return statearr_104809;
})();
var statearr_104810_104875 = state_104748__$1;
(statearr_104810_104875[(2)] = null);

(statearr_104810_104875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (14))){
var state_104748__$1 = state_104748;
var statearr_104811_104876 = state_104748__$1;
(statearr_104811_104876[(2)] = null);

(statearr_104811_104876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (45))){
var inst_104738 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104812_104877 = state_104748__$1;
(statearr_104812_104877[(2)] = inst_104738);

(statearr_104812_104877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (26))){
var inst_104680 = (state_104748[(29)]);
var inst_104734 = (state_104748[(2)]);
var inst_104735 = cljs.core.seq.call(null,inst_104680);
var state_104748__$1 = (function (){var statearr_104813 = state_104748;
(statearr_104813[(31)] = inst_104734);

return statearr_104813;
})();
if(inst_104735){
var statearr_104814_104878 = state_104748__$1;
(statearr_104814_104878[(1)] = (42));

} else {
var statearr_104815_104879 = state_104748__$1;
(statearr_104815_104879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (16))){
var inst_104647 = (state_104748[(7)]);
var inst_104649 = cljs.core.chunked_seq_QMARK_.call(null,inst_104647);
var state_104748__$1 = state_104748;
if(inst_104649){
var statearr_104816_104880 = state_104748__$1;
(statearr_104816_104880[(1)] = (19));

} else {
var statearr_104817_104881 = state_104748__$1;
(statearr_104817_104881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (38))){
var inst_104727 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104818_104882 = state_104748__$1;
(statearr_104818_104882[(2)] = inst_104727);

(statearr_104818_104882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (30))){
var state_104748__$1 = state_104748;
var statearr_104819_104883 = state_104748__$1;
(statearr_104819_104883[(2)] = null);

(statearr_104819_104883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (10))){
var inst_104626 = (state_104748[(15)]);
var inst_104628 = (state_104748[(16)]);
var inst_104636 = cljs.core._nth.call(null,inst_104626,inst_104628);
var inst_104637 = cljs.core.nth.call(null,inst_104636,(0),null);
var inst_104638 = cljs.core.nth.call(null,inst_104636,(1),null);
var state_104748__$1 = (function (){var statearr_104820 = state_104748;
(statearr_104820[(26)] = inst_104637);

return statearr_104820;
})();
if(cljs.core.truth_(inst_104638)){
var statearr_104821_104884 = state_104748__$1;
(statearr_104821_104884[(1)] = (13));

} else {
var statearr_104822_104885 = state_104748__$1;
(statearr_104822_104885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (18))){
var inst_104673 = (state_104748[(2)]);
var state_104748__$1 = state_104748;
var statearr_104823_104886 = state_104748__$1;
(statearr_104823_104886[(2)] = inst_104673);

(statearr_104823_104886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (42))){
var state_104748__$1 = state_104748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104748__$1,(45),dchan);
} else {
if((state_val_104749 === (37))){
var inst_104716 = (state_104748[(23)]);
var inst_104707 = (state_104748[(25)]);
var inst_104616 = (state_104748[(12)]);
var inst_104716__$1 = cljs.core.first.call(null,inst_104707);
var inst_104717 = cljs.core.async.put_BANG_.call(null,inst_104716__$1,inst_104616,done);
var state_104748__$1 = (function (){var statearr_104824 = state_104748;
(statearr_104824[(23)] = inst_104716__$1);

return statearr_104824;
})();
if(cljs.core.truth_(inst_104717)){
var statearr_104825_104887 = state_104748__$1;
(statearr_104825_104887[(1)] = (39));

} else {
var statearr_104826_104888 = state_104748__$1;
(statearr_104826_104888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104749 === (8))){
var inst_104627 = (state_104748[(13)]);
var inst_104628 = (state_104748[(16)]);
var inst_104630 = (inst_104628 < inst_104627);
var inst_104631 = inst_104630;
var state_104748__$1 = state_104748;
if(cljs.core.truth_(inst_104631)){
var statearr_104827_104889 = state_104748__$1;
(statearr_104827_104889[(1)] = (10));

} else {
var statearr_104828_104890 = state_104748__$1;
(statearr_104828_104890[(1)] = (11));

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
});})(c__51011__auto___104836,cs,m,dchan,dctr,done))
;
return ((function (switch__50899__auto__,c__51011__auto___104836,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50900__auto__ = null;
var cljs$core$async$mult_$_state_machine__50900__auto____0 = (function (){
var statearr_104832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104832[(0)] = cljs$core$async$mult_$_state_machine__50900__auto__);

(statearr_104832[(1)] = (1));

return statearr_104832;
});
var cljs$core$async$mult_$_state_machine__50900__auto____1 = (function (state_104748){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_104748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e104833){if((e104833 instanceof Object)){
var ex__50903__auto__ = e104833;
var statearr_104834_104891 = state_104748;
(statearr_104834_104891[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104892 = state_104748;
state_104748 = G__104892;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50900__auto__ = function(state_104748){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50900__auto____1.call(this,state_104748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50900__auto____0;
cljs$core$async$mult_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50900__auto____1;
return cljs$core$async$mult_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___104836,cs,m,dchan,dctr,done))
})();
var state__51013__auto__ = (function (){var statearr_104835 = f__51012__auto__.call(null);
(statearr_104835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___104836);

return statearr_104835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___104836,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args104893 = [];
var len__45809__auto___104896 = arguments.length;
var i__45810__auto___104897 = (0);
while(true){
if((i__45810__auto___104897 < len__45809__auto___104896)){
args104893.push((arguments[i__45810__auto___104897]));

var G__104898 = (i__45810__auto___104897 + (1));
i__45810__auto___104897 = G__104898;
continue;
} else {
}
break;
}

var G__104895 = args104893.length;
switch (G__104895) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104893.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m,ch);
} else {
var m__45398__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m,ch);
} else {
var m__45398__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m);
} else {
var m__45398__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m,state_map);
} else {
var m__45398__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__45397__auto__ = (((m == null))?null:m);
var m__45398__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,m,mode);
} else {
var m__45398__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45816__auto__ = [];
var len__45809__auto___104910 = arguments.length;
var i__45810__auto___104911 = (0);
while(true){
if((i__45810__auto___104911 < len__45809__auto___104910)){
args__45816__auto__.push((arguments[i__45810__auto___104911]));

var G__104912 = (i__45810__auto___104911 + (1));
i__45810__auto___104911 = G__104912;
continue;
} else {
}
break;
}

var argseq__45817__auto__ = ((((3) < args__45816__auto__.length))?(new cljs.core.IndexedSeq(args__45816__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__104904){
var map__104905 = p__104904;
var map__104905__$1 = ((((!((map__104905 == null)))?((((map__104905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104905):map__104905);
var opts = map__104905__$1;
var statearr_104907_104913 = state;
(statearr_104907_104913[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__104905,map__104905__$1,opts){
return (function (val){
var statearr_104908_104914 = state;
(statearr_104908_104914[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__104905,map__104905__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_104909_104915 = state;
(statearr_104909_104915[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq104900){
var G__104901 = cljs.core.first.call(null,seq104900);
var seq104900__$1 = cljs.core.next.call(null,seq104900);
var G__104902 = cljs.core.first.call(null,seq104900__$1);
var seq104900__$2 = cljs.core.next.call(null,seq104900__$1);
var G__104903 = cljs.core.first.call(null,seq104900__$2);
var seq104900__$3 = cljs.core.next.call(null,seq104900__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__104901,G__104902,G__104903,seq104900__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async105081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105081 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta105082){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta105082 = meta105082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_105083,meta105082__$1){
var self__ = this;
var _105083__$1 = this;
return (new cljs.core.async.t_cljs$core$async105081(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta105082__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_105083){
var self__ = this;
var _105083__$1 = this;
return self__.meta105082;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta105082","meta105082",-1493507997,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async105081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async105081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105081";

cljs.core.async.t_cljs$core$async105081.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async105081");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async105081 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async105081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta105082){
return (new cljs.core.async.t_cljs$core$async105081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta105082));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async105081(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51011__auto___105246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___105246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___105246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_105183){
var state_val_105184 = (state_105183[(1)]);
if((state_val_105184 === (7))){
var inst_105099 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
var statearr_105185_105247 = state_105183__$1;
(statearr_105185_105247[(2)] = inst_105099);

(statearr_105185_105247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (20))){
var inst_105111 = (state_105183[(7)]);
var state_105183__$1 = state_105183;
var statearr_105186_105248 = state_105183__$1;
(statearr_105186_105248[(2)] = inst_105111);

(statearr_105186_105248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (27))){
var state_105183__$1 = state_105183;
var statearr_105187_105249 = state_105183__$1;
(statearr_105187_105249[(2)] = null);

(statearr_105187_105249[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (1))){
var inst_105087 = (state_105183[(8)]);
var inst_105087__$1 = calc_state.call(null);
var inst_105089 = (inst_105087__$1 == null);
var inst_105090 = cljs.core.not.call(null,inst_105089);
var state_105183__$1 = (function (){var statearr_105188 = state_105183;
(statearr_105188[(8)] = inst_105087__$1);

return statearr_105188;
})();
if(inst_105090){
var statearr_105189_105250 = state_105183__$1;
(statearr_105189_105250[(1)] = (2));

} else {
var statearr_105190_105251 = state_105183__$1;
(statearr_105190_105251[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (24))){
var inst_105143 = (state_105183[(9)]);
var inst_105157 = (state_105183[(10)]);
var inst_105134 = (state_105183[(11)]);
var inst_105157__$1 = inst_105134.call(null,inst_105143);
var state_105183__$1 = (function (){var statearr_105191 = state_105183;
(statearr_105191[(10)] = inst_105157__$1);

return statearr_105191;
})();
if(cljs.core.truth_(inst_105157__$1)){
var statearr_105192_105252 = state_105183__$1;
(statearr_105192_105252[(1)] = (29));

} else {
var statearr_105193_105253 = state_105183__$1;
(statearr_105193_105253[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (4))){
var inst_105102 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105102)){
var statearr_105194_105254 = state_105183__$1;
(statearr_105194_105254[(1)] = (8));

} else {
var statearr_105195_105255 = state_105183__$1;
(statearr_105195_105255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (15))){
var inst_105128 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105128)){
var statearr_105196_105256 = state_105183__$1;
(statearr_105196_105256[(1)] = (19));

} else {
var statearr_105197_105257 = state_105183__$1;
(statearr_105197_105257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (21))){
var inst_105133 = (state_105183[(12)]);
var inst_105133__$1 = (state_105183[(2)]);
var inst_105134 = cljs.core.get.call(null,inst_105133__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_105135 = cljs.core.get.call(null,inst_105133__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_105136 = cljs.core.get.call(null,inst_105133__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_105183__$1 = (function (){var statearr_105198 = state_105183;
(statearr_105198[(13)] = inst_105135);

(statearr_105198[(11)] = inst_105134);

(statearr_105198[(12)] = inst_105133__$1);

return statearr_105198;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_105183__$1,(22),inst_105136);
} else {
if((state_val_105184 === (31))){
var inst_105165 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105165)){
var statearr_105199_105258 = state_105183__$1;
(statearr_105199_105258[(1)] = (32));

} else {
var statearr_105200_105259 = state_105183__$1;
(statearr_105200_105259[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (32))){
var inst_105142 = (state_105183[(14)]);
var state_105183__$1 = state_105183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105183__$1,(35),out,inst_105142);
} else {
if((state_val_105184 === (33))){
var inst_105133 = (state_105183[(12)]);
var inst_105111 = inst_105133;
var state_105183__$1 = (function (){var statearr_105201 = state_105183;
(statearr_105201[(7)] = inst_105111);

return statearr_105201;
})();
var statearr_105202_105260 = state_105183__$1;
(statearr_105202_105260[(2)] = null);

(statearr_105202_105260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (13))){
var inst_105111 = (state_105183[(7)]);
var inst_105118 = inst_105111.cljs$lang$protocol_mask$partition0$;
var inst_105119 = (inst_105118 & (64));
var inst_105120 = inst_105111.cljs$core$ISeq$;
var inst_105121 = (inst_105119) || (inst_105120);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105121)){
var statearr_105203_105261 = state_105183__$1;
(statearr_105203_105261[(1)] = (16));

} else {
var statearr_105204_105262 = state_105183__$1;
(statearr_105204_105262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (22))){
var inst_105143 = (state_105183[(9)]);
var inst_105142 = (state_105183[(14)]);
var inst_105141 = (state_105183[(2)]);
var inst_105142__$1 = cljs.core.nth.call(null,inst_105141,(0),null);
var inst_105143__$1 = cljs.core.nth.call(null,inst_105141,(1),null);
var inst_105144 = (inst_105142__$1 == null);
var inst_105145 = cljs.core._EQ_.call(null,inst_105143__$1,change);
var inst_105146 = (inst_105144) || (inst_105145);
var state_105183__$1 = (function (){var statearr_105205 = state_105183;
(statearr_105205[(9)] = inst_105143__$1);

(statearr_105205[(14)] = inst_105142__$1);

return statearr_105205;
})();
if(cljs.core.truth_(inst_105146)){
var statearr_105206_105263 = state_105183__$1;
(statearr_105206_105263[(1)] = (23));

} else {
var statearr_105207_105264 = state_105183__$1;
(statearr_105207_105264[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (36))){
var inst_105133 = (state_105183[(12)]);
var inst_105111 = inst_105133;
var state_105183__$1 = (function (){var statearr_105208 = state_105183;
(statearr_105208[(7)] = inst_105111);

return statearr_105208;
})();
var statearr_105209_105265 = state_105183__$1;
(statearr_105209_105265[(2)] = null);

(statearr_105209_105265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (29))){
var inst_105157 = (state_105183[(10)]);
var state_105183__$1 = state_105183;
var statearr_105210_105266 = state_105183__$1;
(statearr_105210_105266[(2)] = inst_105157);

(statearr_105210_105266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (6))){
var state_105183__$1 = state_105183;
var statearr_105211_105267 = state_105183__$1;
(statearr_105211_105267[(2)] = false);

(statearr_105211_105267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (28))){
var inst_105153 = (state_105183[(2)]);
var inst_105154 = calc_state.call(null);
var inst_105111 = inst_105154;
var state_105183__$1 = (function (){var statearr_105212 = state_105183;
(statearr_105212[(15)] = inst_105153);

(statearr_105212[(7)] = inst_105111);

return statearr_105212;
})();
var statearr_105213_105268 = state_105183__$1;
(statearr_105213_105268[(2)] = null);

(statearr_105213_105268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (25))){
var inst_105179 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
var statearr_105214_105269 = state_105183__$1;
(statearr_105214_105269[(2)] = inst_105179);

(statearr_105214_105269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (34))){
var inst_105177 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
var statearr_105215_105270 = state_105183__$1;
(statearr_105215_105270[(2)] = inst_105177);

(statearr_105215_105270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (17))){
var state_105183__$1 = state_105183;
var statearr_105216_105271 = state_105183__$1;
(statearr_105216_105271[(2)] = false);

(statearr_105216_105271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (3))){
var state_105183__$1 = state_105183;
var statearr_105217_105272 = state_105183__$1;
(statearr_105217_105272[(2)] = false);

(statearr_105217_105272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (12))){
var inst_105181 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105183__$1,inst_105181);
} else {
if((state_val_105184 === (2))){
var inst_105087 = (state_105183[(8)]);
var inst_105092 = inst_105087.cljs$lang$protocol_mask$partition0$;
var inst_105093 = (inst_105092 & (64));
var inst_105094 = inst_105087.cljs$core$ISeq$;
var inst_105095 = (inst_105093) || (inst_105094);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105095)){
var statearr_105218_105273 = state_105183__$1;
(statearr_105218_105273[(1)] = (5));

} else {
var statearr_105219_105274 = state_105183__$1;
(statearr_105219_105274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (23))){
var inst_105142 = (state_105183[(14)]);
var inst_105148 = (inst_105142 == null);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105148)){
var statearr_105220_105275 = state_105183__$1;
(statearr_105220_105275[(1)] = (26));

} else {
var statearr_105221_105276 = state_105183__$1;
(statearr_105221_105276[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (35))){
var inst_105168 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
if(cljs.core.truth_(inst_105168)){
var statearr_105222_105277 = state_105183__$1;
(statearr_105222_105277[(1)] = (36));

} else {
var statearr_105223_105278 = state_105183__$1;
(statearr_105223_105278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (19))){
var inst_105111 = (state_105183[(7)]);
var inst_105130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105111);
var state_105183__$1 = state_105183;
var statearr_105224_105279 = state_105183__$1;
(statearr_105224_105279[(2)] = inst_105130);

(statearr_105224_105279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (11))){
var inst_105111 = (state_105183[(7)]);
var inst_105115 = (inst_105111 == null);
var inst_105116 = cljs.core.not.call(null,inst_105115);
var state_105183__$1 = state_105183;
if(inst_105116){
var statearr_105225_105280 = state_105183__$1;
(statearr_105225_105280[(1)] = (13));

} else {
var statearr_105226_105281 = state_105183__$1;
(statearr_105226_105281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (9))){
var inst_105087 = (state_105183[(8)]);
var state_105183__$1 = state_105183;
var statearr_105227_105282 = state_105183__$1;
(statearr_105227_105282[(2)] = inst_105087);

(statearr_105227_105282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (5))){
var state_105183__$1 = state_105183;
var statearr_105228_105283 = state_105183__$1;
(statearr_105228_105283[(2)] = true);

(statearr_105228_105283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (14))){
var state_105183__$1 = state_105183;
var statearr_105229_105284 = state_105183__$1;
(statearr_105229_105284[(2)] = false);

(statearr_105229_105284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (26))){
var inst_105143 = (state_105183[(9)]);
var inst_105150 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_105143);
var state_105183__$1 = state_105183;
var statearr_105230_105285 = state_105183__$1;
(statearr_105230_105285[(2)] = inst_105150);

(statearr_105230_105285[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (16))){
var state_105183__$1 = state_105183;
var statearr_105231_105286 = state_105183__$1;
(statearr_105231_105286[(2)] = true);

(statearr_105231_105286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (38))){
var inst_105173 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
var statearr_105232_105287 = state_105183__$1;
(statearr_105232_105287[(2)] = inst_105173);

(statearr_105232_105287[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (30))){
var inst_105143 = (state_105183[(9)]);
var inst_105135 = (state_105183[(13)]);
var inst_105134 = (state_105183[(11)]);
var inst_105160 = cljs.core.empty_QMARK_.call(null,inst_105134);
var inst_105161 = inst_105135.call(null,inst_105143);
var inst_105162 = cljs.core.not.call(null,inst_105161);
var inst_105163 = (inst_105160) && (inst_105162);
var state_105183__$1 = state_105183;
var statearr_105233_105288 = state_105183__$1;
(statearr_105233_105288[(2)] = inst_105163);

(statearr_105233_105288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (10))){
var inst_105087 = (state_105183[(8)]);
var inst_105107 = (state_105183[(2)]);
var inst_105108 = cljs.core.get.call(null,inst_105107,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_105109 = cljs.core.get.call(null,inst_105107,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_105110 = cljs.core.get.call(null,inst_105107,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_105111 = inst_105087;
var state_105183__$1 = (function (){var statearr_105234 = state_105183;
(statearr_105234[(16)] = inst_105110);

(statearr_105234[(17)] = inst_105108);

(statearr_105234[(18)] = inst_105109);

(statearr_105234[(7)] = inst_105111);

return statearr_105234;
})();
var statearr_105235_105289 = state_105183__$1;
(statearr_105235_105289[(2)] = null);

(statearr_105235_105289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (18))){
var inst_105125 = (state_105183[(2)]);
var state_105183__$1 = state_105183;
var statearr_105236_105290 = state_105183__$1;
(statearr_105236_105290[(2)] = inst_105125);

(statearr_105236_105290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (37))){
var state_105183__$1 = state_105183;
var statearr_105237_105291 = state_105183__$1;
(statearr_105237_105291[(2)] = null);

(statearr_105237_105291[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105184 === (8))){
var inst_105087 = (state_105183[(8)]);
var inst_105104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105087);
var state_105183__$1 = state_105183;
var statearr_105238_105292 = state_105183__$1;
(statearr_105238_105292[(2)] = inst_105104);

(statearr_105238_105292[(1)] = (10));


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
});})(c__51011__auto___105246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50899__auto__,c__51011__auto___105246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50900__auto__ = null;
var cljs$core$async$mix_$_state_machine__50900__auto____0 = (function (){
var statearr_105242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105242[(0)] = cljs$core$async$mix_$_state_machine__50900__auto__);

(statearr_105242[(1)] = (1));

return statearr_105242;
});
var cljs$core$async$mix_$_state_machine__50900__auto____1 = (function (state_105183){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e105243){if((e105243 instanceof Object)){
var ex__50903__auto__ = e105243;
var statearr_105244_105293 = state_105183;
(statearr_105244_105293[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105294 = state_105183;
state_105183 = G__105294;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50900__auto__ = function(state_105183){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50900__auto____1.call(this,state_105183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50900__auto____0;
cljs$core$async$mix_$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50900__auto____1;
return cljs$core$async$mix_$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___105246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51013__auto__ = (function (){var statearr_105245 = f__51012__auto__.call(null);
(statearr_105245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___105246);

return statearr_105245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___105246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__45397__auto__ = (((p == null))?null:p);
var m__45398__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__45398__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__45397__auto__ = (((p == null))?null:p);
var m__45398__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,p,v,ch);
} else {
var m__45398__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args105295 = [];
var len__45809__auto___105298 = arguments.length;
var i__45810__auto___105299 = (0);
while(true){
if((i__45810__auto___105299 < len__45809__auto___105298)){
args105295.push((arguments[i__45810__auto___105299]));

var G__105300 = (i__45810__auto___105299 + (1));
i__45810__auto___105299 = G__105300;
continue;
} else {
}
break;
}

var G__105297 = args105295.length;
switch (G__105297) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105295.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__45397__auto__ = (((p == null))?null:p);
var m__45398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,p);
} else {
var m__45398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__45397__auto__ = (((p == null))?null:p);
var m__45398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45397__auto__)]);
if(!((m__45398__auto__ == null))){
return m__45398__auto__.call(null,p,v);
} else {
var m__45398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45398__auto____$1 == null))){
return m__45398__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args105303 = [];
var len__45809__auto___105428 = arguments.length;
var i__45810__auto___105429 = (0);
while(true){
if((i__45810__auto___105429 < len__45809__auto___105428)){
args105303.push((arguments[i__45810__auto___105429]));

var G__105430 = (i__45810__auto___105429 + (1));
i__45810__auto___105429 = G__105430;
continue;
} else {
}
break;
}

var G__105305 = args105303.length;
switch (G__105305) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105303.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44734__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44734__auto__)){
return or__44734__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44734__auto__,mults){
return (function (p1__105302_SHARP_){
if(cljs.core.truth_(p1__105302_SHARP_.call(null,topic))){
return p1__105302_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__105302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44734__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async105306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta105307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta105307 = meta105307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_105308,meta105307__$1){
var self__ = this;
var _105308__$1 = this;
return (new cljs.core.async.t_cljs$core$async105306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta105307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_105308){
var self__ = this;
var _105308__$1 = this;
return self__.meta105307;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta105307","meta105307",134826773,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async105306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async105306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105306";

cljs.core.async.t_cljs$core$async105306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async105306");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async105306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async105306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta105307){
return (new cljs.core.async.t_cljs$core$async105306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta105307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async105306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51011__auto___105432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___105432,mults,ensure_mult,p){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___105432,mults,ensure_mult,p){
return (function (state_105380){
var state_val_105381 = (state_105380[(1)]);
if((state_val_105381 === (7))){
var inst_105376 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
var statearr_105382_105433 = state_105380__$1;
(statearr_105382_105433[(2)] = inst_105376);

(statearr_105382_105433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (20))){
var state_105380__$1 = state_105380;
var statearr_105383_105434 = state_105380__$1;
(statearr_105383_105434[(2)] = null);

(statearr_105383_105434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (1))){
var state_105380__$1 = state_105380;
var statearr_105384_105435 = state_105380__$1;
(statearr_105384_105435[(2)] = null);

(statearr_105384_105435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (24))){
var inst_105359 = (state_105380[(7)]);
var inst_105368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_105359);
var state_105380__$1 = state_105380;
var statearr_105385_105436 = state_105380__$1;
(statearr_105385_105436[(2)] = inst_105368);

(statearr_105385_105436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (4))){
var inst_105311 = (state_105380[(8)]);
var inst_105311__$1 = (state_105380[(2)]);
var inst_105312 = (inst_105311__$1 == null);
var state_105380__$1 = (function (){var statearr_105386 = state_105380;
(statearr_105386[(8)] = inst_105311__$1);

return statearr_105386;
})();
if(cljs.core.truth_(inst_105312)){
var statearr_105387_105437 = state_105380__$1;
(statearr_105387_105437[(1)] = (5));

} else {
var statearr_105388_105438 = state_105380__$1;
(statearr_105388_105438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (15))){
var inst_105353 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
var statearr_105389_105439 = state_105380__$1;
(statearr_105389_105439[(2)] = inst_105353);

(statearr_105389_105439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (21))){
var inst_105373 = (state_105380[(2)]);
var state_105380__$1 = (function (){var statearr_105390 = state_105380;
(statearr_105390[(9)] = inst_105373);

return statearr_105390;
})();
var statearr_105391_105440 = state_105380__$1;
(statearr_105391_105440[(2)] = null);

(statearr_105391_105440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (13))){
var inst_105335 = (state_105380[(10)]);
var inst_105337 = cljs.core.chunked_seq_QMARK_.call(null,inst_105335);
var state_105380__$1 = state_105380;
if(inst_105337){
var statearr_105392_105441 = state_105380__$1;
(statearr_105392_105441[(1)] = (16));

} else {
var statearr_105393_105442 = state_105380__$1;
(statearr_105393_105442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (22))){
var inst_105365 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
if(cljs.core.truth_(inst_105365)){
var statearr_105394_105443 = state_105380__$1;
(statearr_105394_105443[(1)] = (23));

} else {
var statearr_105395_105444 = state_105380__$1;
(statearr_105395_105444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (6))){
var inst_105311 = (state_105380[(8)]);
var inst_105359 = (state_105380[(7)]);
var inst_105361 = (state_105380[(11)]);
var inst_105359__$1 = topic_fn.call(null,inst_105311);
var inst_105360 = cljs.core.deref.call(null,mults);
var inst_105361__$1 = cljs.core.get.call(null,inst_105360,inst_105359__$1);
var state_105380__$1 = (function (){var statearr_105396 = state_105380;
(statearr_105396[(7)] = inst_105359__$1);

(statearr_105396[(11)] = inst_105361__$1);

return statearr_105396;
})();
if(cljs.core.truth_(inst_105361__$1)){
var statearr_105397_105445 = state_105380__$1;
(statearr_105397_105445[(1)] = (19));

} else {
var statearr_105398_105446 = state_105380__$1;
(statearr_105398_105446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (25))){
var inst_105370 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
var statearr_105399_105447 = state_105380__$1;
(statearr_105399_105447[(2)] = inst_105370);

(statearr_105399_105447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (17))){
var inst_105335 = (state_105380[(10)]);
var inst_105344 = cljs.core.first.call(null,inst_105335);
var inst_105345 = cljs.core.async.muxch_STAR_.call(null,inst_105344);
var inst_105346 = cljs.core.async.close_BANG_.call(null,inst_105345);
var inst_105347 = cljs.core.next.call(null,inst_105335);
var inst_105321 = inst_105347;
var inst_105322 = null;
var inst_105323 = (0);
var inst_105324 = (0);
var state_105380__$1 = (function (){var statearr_105400 = state_105380;
(statearr_105400[(12)] = inst_105322);

(statearr_105400[(13)] = inst_105323);

(statearr_105400[(14)] = inst_105346);

(statearr_105400[(15)] = inst_105324);

(statearr_105400[(16)] = inst_105321);

return statearr_105400;
})();
var statearr_105401_105448 = state_105380__$1;
(statearr_105401_105448[(2)] = null);

(statearr_105401_105448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (3))){
var inst_105378 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105380__$1,inst_105378);
} else {
if((state_val_105381 === (12))){
var inst_105355 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
var statearr_105402_105449 = state_105380__$1;
(statearr_105402_105449[(2)] = inst_105355);

(statearr_105402_105449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (2))){
var state_105380__$1 = state_105380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105380__$1,(4),ch);
} else {
if((state_val_105381 === (23))){
var state_105380__$1 = state_105380;
var statearr_105403_105450 = state_105380__$1;
(statearr_105403_105450[(2)] = null);

(statearr_105403_105450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (19))){
var inst_105311 = (state_105380[(8)]);
var inst_105361 = (state_105380[(11)]);
var inst_105363 = cljs.core.async.muxch_STAR_.call(null,inst_105361);
var state_105380__$1 = state_105380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105380__$1,(22),inst_105363,inst_105311);
} else {
if((state_val_105381 === (11))){
var inst_105321 = (state_105380[(16)]);
var inst_105335 = (state_105380[(10)]);
var inst_105335__$1 = cljs.core.seq.call(null,inst_105321);
var state_105380__$1 = (function (){var statearr_105404 = state_105380;
(statearr_105404[(10)] = inst_105335__$1);

return statearr_105404;
})();
if(inst_105335__$1){
var statearr_105405_105451 = state_105380__$1;
(statearr_105405_105451[(1)] = (13));

} else {
var statearr_105406_105452 = state_105380__$1;
(statearr_105406_105452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (9))){
var inst_105357 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
var statearr_105407_105453 = state_105380__$1;
(statearr_105407_105453[(2)] = inst_105357);

(statearr_105407_105453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (5))){
var inst_105318 = cljs.core.deref.call(null,mults);
var inst_105319 = cljs.core.vals.call(null,inst_105318);
var inst_105320 = cljs.core.seq.call(null,inst_105319);
var inst_105321 = inst_105320;
var inst_105322 = null;
var inst_105323 = (0);
var inst_105324 = (0);
var state_105380__$1 = (function (){var statearr_105408 = state_105380;
(statearr_105408[(12)] = inst_105322);

(statearr_105408[(13)] = inst_105323);

(statearr_105408[(15)] = inst_105324);

(statearr_105408[(16)] = inst_105321);

return statearr_105408;
})();
var statearr_105409_105454 = state_105380__$1;
(statearr_105409_105454[(2)] = null);

(statearr_105409_105454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (14))){
var state_105380__$1 = state_105380;
var statearr_105413_105455 = state_105380__$1;
(statearr_105413_105455[(2)] = null);

(statearr_105413_105455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (16))){
var inst_105335 = (state_105380[(10)]);
var inst_105339 = cljs.core.chunk_first.call(null,inst_105335);
var inst_105340 = cljs.core.chunk_rest.call(null,inst_105335);
var inst_105341 = cljs.core.count.call(null,inst_105339);
var inst_105321 = inst_105340;
var inst_105322 = inst_105339;
var inst_105323 = inst_105341;
var inst_105324 = (0);
var state_105380__$1 = (function (){var statearr_105414 = state_105380;
(statearr_105414[(12)] = inst_105322);

(statearr_105414[(13)] = inst_105323);

(statearr_105414[(15)] = inst_105324);

(statearr_105414[(16)] = inst_105321);

return statearr_105414;
})();
var statearr_105415_105456 = state_105380__$1;
(statearr_105415_105456[(2)] = null);

(statearr_105415_105456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (10))){
var inst_105322 = (state_105380[(12)]);
var inst_105323 = (state_105380[(13)]);
var inst_105324 = (state_105380[(15)]);
var inst_105321 = (state_105380[(16)]);
var inst_105329 = cljs.core._nth.call(null,inst_105322,inst_105324);
var inst_105330 = cljs.core.async.muxch_STAR_.call(null,inst_105329);
var inst_105331 = cljs.core.async.close_BANG_.call(null,inst_105330);
var inst_105332 = (inst_105324 + (1));
var tmp105410 = inst_105322;
var tmp105411 = inst_105323;
var tmp105412 = inst_105321;
var inst_105321__$1 = tmp105412;
var inst_105322__$1 = tmp105410;
var inst_105323__$1 = tmp105411;
var inst_105324__$1 = inst_105332;
var state_105380__$1 = (function (){var statearr_105416 = state_105380;
(statearr_105416[(12)] = inst_105322__$1);

(statearr_105416[(13)] = inst_105323__$1);

(statearr_105416[(17)] = inst_105331);

(statearr_105416[(15)] = inst_105324__$1);

(statearr_105416[(16)] = inst_105321__$1);

return statearr_105416;
})();
var statearr_105417_105457 = state_105380__$1;
(statearr_105417_105457[(2)] = null);

(statearr_105417_105457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (18))){
var inst_105350 = (state_105380[(2)]);
var state_105380__$1 = state_105380;
var statearr_105418_105458 = state_105380__$1;
(statearr_105418_105458[(2)] = inst_105350);

(statearr_105418_105458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105381 === (8))){
var inst_105323 = (state_105380[(13)]);
var inst_105324 = (state_105380[(15)]);
var inst_105326 = (inst_105324 < inst_105323);
var inst_105327 = inst_105326;
var state_105380__$1 = state_105380;
if(cljs.core.truth_(inst_105327)){
var statearr_105419_105459 = state_105380__$1;
(statearr_105419_105459[(1)] = (10));

} else {
var statearr_105420_105460 = state_105380__$1;
(statearr_105420_105460[(1)] = (11));

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
});})(c__51011__auto___105432,mults,ensure_mult,p))
;
return ((function (switch__50899__auto__,c__51011__auto___105432,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_105424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105424[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_105424[(1)] = (1));

return statearr_105424;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_105380){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e105425){if((e105425 instanceof Object)){
var ex__50903__auto__ = e105425;
var statearr_105426_105461 = state_105380;
(statearr_105426_105461[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105462 = state_105380;
state_105380 = G__105462;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_105380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_105380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___105432,mults,ensure_mult,p))
})();
var state__51013__auto__ = (function (){var statearr_105427 = f__51012__auto__.call(null);
(statearr_105427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___105432);

return statearr_105427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___105432,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args105463 = [];
var len__45809__auto___105466 = arguments.length;
var i__45810__auto___105467 = (0);
while(true){
if((i__45810__auto___105467 < len__45809__auto___105466)){
args105463.push((arguments[i__45810__auto___105467]));

var G__105468 = (i__45810__auto___105467 + (1));
i__45810__auto___105467 = G__105468;
continue;
} else {
}
break;
}

var G__105465 = args105463.length;
switch (G__105465) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105463.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args105470 = [];
var len__45809__auto___105473 = arguments.length;
var i__45810__auto___105474 = (0);
while(true){
if((i__45810__auto___105474 < len__45809__auto___105473)){
args105470.push((arguments[i__45810__auto___105474]));

var G__105475 = (i__45810__auto___105474 + (1));
i__45810__auto___105474 = G__105475;
continue;
} else {
}
break;
}

var G__105472 = args105470.length;
switch (G__105472) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105470.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args105477 = [];
var len__45809__auto___105548 = arguments.length;
var i__45810__auto___105549 = (0);
while(true){
if((i__45810__auto___105549 < len__45809__auto___105548)){
args105477.push((arguments[i__45810__auto___105549]));

var G__105550 = (i__45810__auto___105549 + (1));
i__45810__auto___105549 = G__105550;
continue;
} else {
}
break;
}

var G__105479 = args105477.length;
switch (G__105479) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105477.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__51011__auto___105552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___105552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___105552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_105518){
var state_val_105519 = (state_105518[(1)]);
if((state_val_105519 === (7))){
var state_105518__$1 = state_105518;
var statearr_105520_105553 = state_105518__$1;
(statearr_105520_105553[(2)] = null);

(statearr_105520_105553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (1))){
var state_105518__$1 = state_105518;
var statearr_105521_105554 = state_105518__$1;
(statearr_105521_105554[(2)] = null);

(statearr_105521_105554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (4))){
var inst_105482 = (state_105518[(7)]);
var inst_105484 = (inst_105482 < cnt);
var state_105518__$1 = state_105518;
if(cljs.core.truth_(inst_105484)){
var statearr_105522_105555 = state_105518__$1;
(statearr_105522_105555[(1)] = (6));

} else {
var statearr_105523_105556 = state_105518__$1;
(statearr_105523_105556[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (15))){
var inst_105514 = (state_105518[(2)]);
var state_105518__$1 = state_105518;
var statearr_105524_105557 = state_105518__$1;
(statearr_105524_105557[(2)] = inst_105514);

(statearr_105524_105557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (13))){
var inst_105507 = cljs.core.async.close_BANG_.call(null,out);
var state_105518__$1 = state_105518;
var statearr_105525_105558 = state_105518__$1;
(statearr_105525_105558[(2)] = inst_105507);

(statearr_105525_105558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (6))){
var state_105518__$1 = state_105518;
var statearr_105526_105559 = state_105518__$1;
(statearr_105526_105559[(2)] = null);

(statearr_105526_105559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (3))){
var inst_105516 = (state_105518[(2)]);
var state_105518__$1 = state_105518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105518__$1,inst_105516);
} else {
if((state_val_105519 === (12))){
var inst_105504 = (state_105518[(8)]);
var inst_105504__$1 = (state_105518[(2)]);
var inst_105505 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_105504__$1);
var state_105518__$1 = (function (){var statearr_105527 = state_105518;
(statearr_105527[(8)] = inst_105504__$1);

return statearr_105527;
})();
if(cljs.core.truth_(inst_105505)){
var statearr_105528_105560 = state_105518__$1;
(statearr_105528_105560[(1)] = (13));

} else {
var statearr_105529_105561 = state_105518__$1;
(statearr_105529_105561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (2))){
var inst_105481 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_105482 = (0);
var state_105518__$1 = (function (){var statearr_105530 = state_105518;
(statearr_105530[(9)] = inst_105481);

(statearr_105530[(7)] = inst_105482);

return statearr_105530;
})();
var statearr_105531_105562 = state_105518__$1;
(statearr_105531_105562[(2)] = null);

(statearr_105531_105562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (11))){
var inst_105482 = (state_105518[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_105518,(10),Object,null,(9));
var inst_105491 = chs__$1.call(null,inst_105482);
var inst_105492 = done.call(null,inst_105482);
var inst_105493 = cljs.core.async.take_BANG_.call(null,inst_105491,inst_105492);
var state_105518__$1 = state_105518;
var statearr_105532_105563 = state_105518__$1;
(statearr_105532_105563[(2)] = inst_105493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (9))){
var inst_105482 = (state_105518[(7)]);
var inst_105495 = (state_105518[(2)]);
var inst_105496 = (inst_105482 + (1));
var inst_105482__$1 = inst_105496;
var state_105518__$1 = (function (){var statearr_105533 = state_105518;
(statearr_105533[(10)] = inst_105495);

(statearr_105533[(7)] = inst_105482__$1);

return statearr_105533;
})();
var statearr_105534_105564 = state_105518__$1;
(statearr_105534_105564[(2)] = null);

(statearr_105534_105564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (5))){
var inst_105502 = (state_105518[(2)]);
var state_105518__$1 = (function (){var statearr_105535 = state_105518;
(statearr_105535[(11)] = inst_105502);

return statearr_105535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105518__$1,(12),dchan);
} else {
if((state_val_105519 === (14))){
var inst_105504 = (state_105518[(8)]);
var inst_105509 = cljs.core.apply.call(null,f,inst_105504);
var state_105518__$1 = state_105518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105518__$1,(16),out,inst_105509);
} else {
if((state_val_105519 === (16))){
var inst_105511 = (state_105518[(2)]);
var state_105518__$1 = (function (){var statearr_105536 = state_105518;
(statearr_105536[(12)] = inst_105511);

return statearr_105536;
})();
var statearr_105537_105565 = state_105518__$1;
(statearr_105537_105565[(2)] = null);

(statearr_105537_105565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (10))){
var inst_105486 = (state_105518[(2)]);
var inst_105487 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_105518__$1 = (function (){var statearr_105538 = state_105518;
(statearr_105538[(13)] = inst_105486);

return statearr_105538;
})();
var statearr_105539_105566 = state_105518__$1;
(statearr_105539_105566[(2)] = inst_105487);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105519 === (8))){
var inst_105500 = (state_105518[(2)]);
var state_105518__$1 = state_105518;
var statearr_105540_105567 = state_105518__$1;
(statearr_105540_105567[(2)] = inst_105500);

(statearr_105540_105567[(1)] = (5));


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
});})(c__51011__auto___105552,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50899__auto__,c__51011__auto___105552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_105544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105544[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_105544[(1)] = (1));

return statearr_105544;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_105518){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e105545){if((e105545 instanceof Object)){
var ex__50903__auto__ = e105545;
var statearr_105546_105568 = state_105518;
(statearr_105546_105568[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105569 = state_105518;
state_105518 = G__105569;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_105518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_105518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___105552,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51013__auto__ = (function (){var statearr_105547 = f__51012__auto__.call(null);
(statearr_105547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___105552);

return statearr_105547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___105552,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args105571 = [];
var len__45809__auto___105629 = arguments.length;
var i__45810__auto___105630 = (0);
while(true){
if((i__45810__auto___105630 < len__45809__auto___105629)){
args105571.push((arguments[i__45810__auto___105630]));

var G__105631 = (i__45810__auto___105630 + (1));
i__45810__auto___105630 = G__105631;
continue;
} else {
}
break;
}

var G__105573 = args105571.length;
switch (G__105573) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105571.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__51011__auto___105633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___105633,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___105633,out){
return (function (state_105605){
var state_val_105606 = (state_105605[(1)]);
if((state_val_105606 === (7))){
var inst_105584 = (state_105605[(7)]);
var inst_105585 = (state_105605[(8)]);
var inst_105584__$1 = (state_105605[(2)]);
var inst_105585__$1 = cljs.core.nth.call(null,inst_105584__$1,(0),null);
var inst_105586 = cljs.core.nth.call(null,inst_105584__$1,(1),null);
var inst_105587 = (inst_105585__$1 == null);
var state_105605__$1 = (function (){var statearr_105607 = state_105605;
(statearr_105607[(7)] = inst_105584__$1);

(statearr_105607[(9)] = inst_105586);

(statearr_105607[(8)] = inst_105585__$1);

return statearr_105607;
})();
if(cljs.core.truth_(inst_105587)){
var statearr_105608_105634 = state_105605__$1;
(statearr_105608_105634[(1)] = (8));

} else {
var statearr_105609_105635 = state_105605__$1;
(statearr_105609_105635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (1))){
var inst_105574 = cljs.core.vec.call(null,chs);
var inst_105575 = inst_105574;
var state_105605__$1 = (function (){var statearr_105610 = state_105605;
(statearr_105610[(10)] = inst_105575);

return statearr_105610;
})();
var statearr_105611_105636 = state_105605__$1;
(statearr_105611_105636[(2)] = null);

(statearr_105611_105636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (4))){
var inst_105575 = (state_105605[(10)]);
var state_105605__$1 = state_105605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_105605__$1,(7),inst_105575);
} else {
if((state_val_105606 === (6))){
var inst_105601 = (state_105605[(2)]);
var state_105605__$1 = state_105605;
var statearr_105612_105637 = state_105605__$1;
(statearr_105612_105637[(2)] = inst_105601);

(statearr_105612_105637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (3))){
var inst_105603 = (state_105605[(2)]);
var state_105605__$1 = state_105605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105605__$1,inst_105603);
} else {
if((state_val_105606 === (2))){
var inst_105575 = (state_105605[(10)]);
var inst_105577 = cljs.core.count.call(null,inst_105575);
var inst_105578 = (inst_105577 > (0));
var state_105605__$1 = state_105605;
if(cljs.core.truth_(inst_105578)){
var statearr_105614_105638 = state_105605__$1;
(statearr_105614_105638[(1)] = (4));

} else {
var statearr_105615_105639 = state_105605__$1;
(statearr_105615_105639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (11))){
var inst_105575 = (state_105605[(10)]);
var inst_105594 = (state_105605[(2)]);
var tmp105613 = inst_105575;
var inst_105575__$1 = tmp105613;
var state_105605__$1 = (function (){var statearr_105616 = state_105605;
(statearr_105616[(11)] = inst_105594);

(statearr_105616[(10)] = inst_105575__$1);

return statearr_105616;
})();
var statearr_105617_105640 = state_105605__$1;
(statearr_105617_105640[(2)] = null);

(statearr_105617_105640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (9))){
var inst_105585 = (state_105605[(8)]);
var state_105605__$1 = state_105605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105605__$1,(11),out,inst_105585);
} else {
if((state_val_105606 === (5))){
var inst_105599 = cljs.core.async.close_BANG_.call(null,out);
var state_105605__$1 = state_105605;
var statearr_105618_105641 = state_105605__$1;
(statearr_105618_105641[(2)] = inst_105599);

(statearr_105618_105641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (10))){
var inst_105597 = (state_105605[(2)]);
var state_105605__$1 = state_105605;
var statearr_105619_105642 = state_105605__$1;
(statearr_105619_105642[(2)] = inst_105597);

(statearr_105619_105642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105606 === (8))){
var inst_105584 = (state_105605[(7)]);
var inst_105575 = (state_105605[(10)]);
var inst_105586 = (state_105605[(9)]);
var inst_105585 = (state_105605[(8)]);
var inst_105589 = (function (){var cs = inst_105575;
var vec__105580 = inst_105584;
var v = inst_105585;
var c = inst_105586;
return ((function (cs,vec__105580,v,c,inst_105584,inst_105575,inst_105586,inst_105585,state_val_105606,c__51011__auto___105633,out){
return (function (p1__105570_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__105570_SHARP_);
});
;})(cs,vec__105580,v,c,inst_105584,inst_105575,inst_105586,inst_105585,state_val_105606,c__51011__auto___105633,out))
})();
var inst_105590 = cljs.core.filterv.call(null,inst_105589,inst_105575);
var inst_105575__$1 = inst_105590;
var state_105605__$1 = (function (){var statearr_105620 = state_105605;
(statearr_105620[(10)] = inst_105575__$1);

return statearr_105620;
})();
var statearr_105621_105643 = state_105605__$1;
(statearr_105621_105643[(2)] = null);

(statearr_105621_105643[(1)] = (2));


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
});})(c__51011__auto___105633,out))
;
return ((function (switch__50899__auto__,c__51011__auto___105633,out){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_105625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105625[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_105625[(1)] = (1));

return statearr_105625;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_105605){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e105626){if((e105626 instanceof Object)){
var ex__50903__auto__ = e105626;
var statearr_105627_105644 = state_105605;
(statearr_105627_105644[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105645 = state_105605;
state_105605 = G__105645;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_105605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_105605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___105633,out))
})();
var state__51013__auto__ = (function (){var statearr_105628 = f__51012__auto__.call(null);
(statearr_105628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___105633);

return statearr_105628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___105633,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args105646 = [];
var len__45809__auto___105695 = arguments.length;
var i__45810__auto___105696 = (0);
while(true){
if((i__45810__auto___105696 < len__45809__auto___105695)){
args105646.push((arguments[i__45810__auto___105696]));

var G__105697 = (i__45810__auto___105696 + (1));
i__45810__auto___105696 = G__105697;
continue;
} else {
}
break;
}

var G__105648 = args105646.length;
switch (G__105648) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105646.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__51011__auto___105699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___105699,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___105699,out){
return (function (state_105672){
var state_val_105673 = (state_105672[(1)]);
if((state_val_105673 === (7))){
var inst_105654 = (state_105672[(7)]);
var inst_105654__$1 = (state_105672[(2)]);
var inst_105655 = (inst_105654__$1 == null);
var inst_105656 = cljs.core.not.call(null,inst_105655);
var state_105672__$1 = (function (){var statearr_105674 = state_105672;
(statearr_105674[(7)] = inst_105654__$1);

return statearr_105674;
})();
if(inst_105656){
var statearr_105675_105700 = state_105672__$1;
(statearr_105675_105700[(1)] = (8));

} else {
var statearr_105676_105701 = state_105672__$1;
(statearr_105676_105701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (1))){
var inst_105649 = (0);
var state_105672__$1 = (function (){var statearr_105677 = state_105672;
(statearr_105677[(8)] = inst_105649);

return statearr_105677;
})();
var statearr_105678_105702 = state_105672__$1;
(statearr_105678_105702[(2)] = null);

(statearr_105678_105702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (4))){
var state_105672__$1 = state_105672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105672__$1,(7),ch);
} else {
if((state_val_105673 === (6))){
var inst_105667 = (state_105672[(2)]);
var state_105672__$1 = state_105672;
var statearr_105679_105703 = state_105672__$1;
(statearr_105679_105703[(2)] = inst_105667);

(statearr_105679_105703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (3))){
var inst_105669 = (state_105672[(2)]);
var inst_105670 = cljs.core.async.close_BANG_.call(null,out);
var state_105672__$1 = (function (){var statearr_105680 = state_105672;
(statearr_105680[(9)] = inst_105669);

return statearr_105680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105672__$1,inst_105670);
} else {
if((state_val_105673 === (2))){
var inst_105649 = (state_105672[(8)]);
var inst_105651 = (inst_105649 < n);
var state_105672__$1 = state_105672;
if(cljs.core.truth_(inst_105651)){
var statearr_105681_105704 = state_105672__$1;
(statearr_105681_105704[(1)] = (4));

} else {
var statearr_105682_105705 = state_105672__$1;
(statearr_105682_105705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (11))){
var inst_105649 = (state_105672[(8)]);
var inst_105659 = (state_105672[(2)]);
var inst_105660 = (inst_105649 + (1));
var inst_105649__$1 = inst_105660;
var state_105672__$1 = (function (){var statearr_105683 = state_105672;
(statearr_105683[(10)] = inst_105659);

(statearr_105683[(8)] = inst_105649__$1);

return statearr_105683;
})();
var statearr_105684_105706 = state_105672__$1;
(statearr_105684_105706[(2)] = null);

(statearr_105684_105706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (9))){
var state_105672__$1 = state_105672;
var statearr_105685_105707 = state_105672__$1;
(statearr_105685_105707[(2)] = null);

(statearr_105685_105707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (5))){
var state_105672__$1 = state_105672;
var statearr_105686_105708 = state_105672__$1;
(statearr_105686_105708[(2)] = null);

(statearr_105686_105708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (10))){
var inst_105664 = (state_105672[(2)]);
var state_105672__$1 = state_105672;
var statearr_105687_105709 = state_105672__$1;
(statearr_105687_105709[(2)] = inst_105664);

(statearr_105687_105709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105673 === (8))){
var inst_105654 = (state_105672[(7)]);
var state_105672__$1 = state_105672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105672__$1,(11),out,inst_105654);
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
});})(c__51011__auto___105699,out))
;
return ((function (switch__50899__auto__,c__51011__auto___105699,out){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_105691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_105691[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_105691[(1)] = (1));

return statearr_105691;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_105672){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e105692){if((e105692 instanceof Object)){
var ex__50903__auto__ = e105692;
var statearr_105693_105710 = state_105672;
(statearr_105693_105710[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105711 = state_105672;
state_105672 = G__105711;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_105672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_105672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___105699,out))
})();
var state__51013__auto__ = (function (){var statearr_105694 = f__51012__auto__.call(null);
(statearr_105694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___105699);

return statearr_105694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___105699,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async105719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105719 = (function (map_LT_,f,ch,meta105720){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta105720 = meta105720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105721,meta105720__$1){
var self__ = this;
var _105721__$1 = this;
return (new cljs.core.async.t_cljs$core$async105719(self__.map_LT_,self__.f,self__.ch,meta105720__$1));
});

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105721){
var self__ = this;
var _105721__$1 = this;
return self__.meta105720;
});

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async105722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105722 = (function (map_LT_,f,ch,meta105720,_,fn1,meta105723){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta105720 = meta105720;
this._ = _;
this.fn1 = fn1;
this.meta105723 = meta105723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async105722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_105724,meta105723__$1){
var self__ = this;
var _105724__$1 = this;
return (new cljs.core.async.t_cljs$core$async105722(self__.map_LT_,self__.f,self__.ch,self__.meta105720,self__._,self__.fn1,meta105723__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async105722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_105724){
var self__ = this;
var _105724__$1 = this;
return self__.meta105723;
});})(___$1))
;

cljs.core.async.t_cljs$core$async105722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async105722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async105722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async105722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__105712_SHARP_){
return f1.call(null,(((p1__105712_SHARP_ == null))?null:self__.f.call(null,p1__105712_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async105722.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105720","meta105720",813103401,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async105719","cljs.core.async/t_cljs$core$async105719",1104840232,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta105723","meta105723",1852511008,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async105722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async105722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105722";

cljs.core.async.t_cljs$core$async105722.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async105722");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async105722 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async105722(map_LT___$1,f__$1,ch__$1,meta105720__$1,___$2,fn1__$1,meta105723){
return (new cljs.core.async.t_cljs$core$async105722(map_LT___$1,f__$1,ch__$1,meta105720__$1,___$2,fn1__$1,meta105723));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async105722(self__.map_LT_,self__.f,self__.ch,self__.meta105720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44722__auto__ = ret;
if(cljs.core.truth_(and__44722__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44722__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async105719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async105719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105720","meta105720",813103401,null)], null);
});

cljs.core.async.t_cljs$core$async105719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async105719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105719";

cljs.core.async.t_cljs$core$async105719.cljs$lang$ctorPrWriter = (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async105719");
});

cljs.core.async.__GT_t_cljs$core$async105719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async105719(map_LT___$1,f__$1,ch__$1,meta105720){
return (new cljs.core.async.t_cljs$core$async105719(map_LT___$1,f__$1,ch__$1,meta105720));
});

}

return (new cljs.core.async.t_cljs$core$async105719(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async105728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105728 = (function (map_GT_,f,ch,meta105729){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta105729 = meta105729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105730,meta105729__$1){
var self__ = this;
var _105730__$1 = this;
return (new cljs.core.async.t_cljs$core$async105728(self__.map_GT_,self__.f,self__.ch,meta105729__$1));
});

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105730){
var self__ = this;
var _105730__$1 = this;
return self__.meta105729;
});

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async105728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async105728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105729","meta105729",-1627923517,null)], null);
});

cljs.core.async.t_cljs$core$async105728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async105728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105728";

cljs.core.async.t_cljs$core$async105728.cljs$lang$ctorPrWriter = (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async105728");
});

cljs.core.async.__GT_t_cljs$core$async105728 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async105728(map_GT___$1,f__$1,ch__$1,meta105729){
return (new cljs.core.async.t_cljs$core$async105728(map_GT___$1,f__$1,ch__$1,meta105729));
});

}

return (new cljs.core.async.t_cljs$core$async105728(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async105734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105734 = (function (filter_GT_,p,ch,meta105735){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta105735 = meta105735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105736,meta105735__$1){
var self__ = this;
var _105736__$1 = this;
return (new cljs.core.async.t_cljs$core$async105734(self__.filter_GT_,self__.p,self__.ch,meta105735__$1));
});

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105736){
var self__ = this;
var _105736__$1 = this;
return self__.meta105735;
});

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async105734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async105734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105735","meta105735",-1759993831,null)], null);
});

cljs.core.async.t_cljs$core$async105734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async105734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105734";

cljs.core.async.t_cljs$core$async105734.cljs$lang$ctorPrWriter = (function (this__45340__auto__,writer__45341__auto__,opt__45342__auto__){
return cljs.core._write.call(null,writer__45341__auto__,"cljs.core.async/t_cljs$core$async105734");
});

cljs.core.async.__GT_t_cljs$core$async105734 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async105734(filter_GT___$1,p__$1,ch__$1,meta105735){
return (new cljs.core.async.t_cljs$core$async105734(filter_GT___$1,p__$1,ch__$1,meta105735));
});

}

return (new cljs.core.async.t_cljs$core$async105734(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args105737 = [];
var len__45809__auto___105781 = arguments.length;
var i__45810__auto___105782 = (0);
while(true){
if((i__45810__auto___105782 < len__45809__auto___105781)){
args105737.push((arguments[i__45810__auto___105782]));

var G__105783 = (i__45810__auto___105782 + (1));
i__45810__auto___105782 = G__105783;
continue;
} else {
}
break;
}

var G__105739 = args105737.length;
switch (G__105739) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105737.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__51011__auto___105785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___105785,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___105785,out){
return (function (state_105760){
var state_val_105761 = (state_105760[(1)]);
if((state_val_105761 === (7))){
var inst_105756 = (state_105760[(2)]);
var state_105760__$1 = state_105760;
var statearr_105762_105786 = state_105760__$1;
(statearr_105762_105786[(2)] = inst_105756);

(statearr_105762_105786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (1))){
var state_105760__$1 = state_105760;
var statearr_105763_105787 = state_105760__$1;
(statearr_105763_105787[(2)] = null);

(statearr_105763_105787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (4))){
var inst_105742 = (state_105760[(7)]);
var inst_105742__$1 = (state_105760[(2)]);
var inst_105743 = (inst_105742__$1 == null);
var state_105760__$1 = (function (){var statearr_105764 = state_105760;
(statearr_105764[(7)] = inst_105742__$1);

return statearr_105764;
})();
if(cljs.core.truth_(inst_105743)){
var statearr_105765_105788 = state_105760__$1;
(statearr_105765_105788[(1)] = (5));

} else {
var statearr_105766_105789 = state_105760__$1;
(statearr_105766_105789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (6))){
var inst_105742 = (state_105760[(7)]);
var inst_105747 = p.call(null,inst_105742);
var state_105760__$1 = state_105760;
if(cljs.core.truth_(inst_105747)){
var statearr_105767_105790 = state_105760__$1;
(statearr_105767_105790[(1)] = (8));

} else {
var statearr_105768_105791 = state_105760__$1;
(statearr_105768_105791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (3))){
var inst_105758 = (state_105760[(2)]);
var state_105760__$1 = state_105760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105760__$1,inst_105758);
} else {
if((state_val_105761 === (2))){
var state_105760__$1 = state_105760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105760__$1,(4),ch);
} else {
if((state_val_105761 === (11))){
var inst_105750 = (state_105760[(2)]);
var state_105760__$1 = state_105760;
var statearr_105769_105792 = state_105760__$1;
(statearr_105769_105792[(2)] = inst_105750);

(statearr_105769_105792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (9))){
var state_105760__$1 = state_105760;
var statearr_105770_105793 = state_105760__$1;
(statearr_105770_105793[(2)] = null);

(statearr_105770_105793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (5))){
var inst_105745 = cljs.core.async.close_BANG_.call(null,out);
var state_105760__$1 = state_105760;
var statearr_105771_105794 = state_105760__$1;
(statearr_105771_105794[(2)] = inst_105745);

(statearr_105771_105794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (10))){
var inst_105753 = (state_105760[(2)]);
var state_105760__$1 = (function (){var statearr_105772 = state_105760;
(statearr_105772[(8)] = inst_105753);

return statearr_105772;
})();
var statearr_105773_105795 = state_105760__$1;
(statearr_105773_105795[(2)] = null);

(statearr_105773_105795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105761 === (8))){
var inst_105742 = (state_105760[(7)]);
var state_105760__$1 = state_105760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105760__$1,(11),out,inst_105742);
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
});})(c__51011__auto___105785,out))
;
return ((function (switch__50899__auto__,c__51011__auto___105785,out){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_105777 = [null,null,null,null,null,null,null,null,null];
(statearr_105777[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_105777[(1)] = (1));

return statearr_105777;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_105760){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e105778){if((e105778 instanceof Object)){
var ex__50903__auto__ = e105778;
var statearr_105779_105796 = state_105760;
(statearr_105779_105796[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105797 = state_105760;
state_105760 = G__105797;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_105760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_105760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___105785,out))
})();
var state__51013__auto__ = (function (){var statearr_105780 = f__51012__auto__.call(null);
(statearr_105780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___105785);

return statearr_105780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___105785,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args105798 = [];
var len__45809__auto___105801 = arguments.length;
var i__45810__auto___105802 = (0);
while(true){
if((i__45810__auto___105802 < len__45809__auto___105801)){
args105798.push((arguments[i__45810__auto___105802]));

var G__105803 = (i__45810__auto___105802 + (1));
i__45810__auto___105802 = G__105803;
continue;
} else {
}
break;
}

var G__105800 = args105798.length;
switch (G__105800) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args105798.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto__){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto__){
return (function (state_105970){
var state_val_105971 = (state_105970[(1)]);
if((state_val_105971 === (7))){
var inst_105966 = (state_105970[(2)]);
var state_105970__$1 = state_105970;
var statearr_105972_106013 = state_105970__$1;
(statearr_105972_106013[(2)] = inst_105966);

(statearr_105972_106013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (20))){
var inst_105936 = (state_105970[(7)]);
var inst_105947 = (state_105970[(2)]);
var inst_105948 = cljs.core.next.call(null,inst_105936);
var inst_105922 = inst_105948;
var inst_105923 = null;
var inst_105924 = (0);
var inst_105925 = (0);
var state_105970__$1 = (function (){var statearr_105973 = state_105970;
(statearr_105973[(8)] = inst_105947);

(statearr_105973[(9)] = inst_105925);

(statearr_105973[(10)] = inst_105922);

(statearr_105973[(11)] = inst_105924);

(statearr_105973[(12)] = inst_105923);

return statearr_105973;
})();
var statearr_105974_106014 = state_105970__$1;
(statearr_105974_106014[(2)] = null);

(statearr_105974_106014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (1))){
var state_105970__$1 = state_105970;
var statearr_105975_106015 = state_105970__$1;
(statearr_105975_106015[(2)] = null);

(statearr_105975_106015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (4))){
var inst_105911 = (state_105970[(13)]);
var inst_105911__$1 = (state_105970[(2)]);
var inst_105912 = (inst_105911__$1 == null);
var state_105970__$1 = (function (){var statearr_105976 = state_105970;
(statearr_105976[(13)] = inst_105911__$1);

return statearr_105976;
})();
if(cljs.core.truth_(inst_105912)){
var statearr_105977_106016 = state_105970__$1;
(statearr_105977_106016[(1)] = (5));

} else {
var statearr_105978_106017 = state_105970__$1;
(statearr_105978_106017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (15))){
var state_105970__$1 = state_105970;
var statearr_105982_106018 = state_105970__$1;
(statearr_105982_106018[(2)] = null);

(statearr_105982_106018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (21))){
var state_105970__$1 = state_105970;
var statearr_105983_106019 = state_105970__$1;
(statearr_105983_106019[(2)] = null);

(statearr_105983_106019[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (13))){
var inst_105925 = (state_105970[(9)]);
var inst_105922 = (state_105970[(10)]);
var inst_105924 = (state_105970[(11)]);
var inst_105923 = (state_105970[(12)]);
var inst_105932 = (state_105970[(2)]);
var inst_105933 = (inst_105925 + (1));
var tmp105979 = inst_105922;
var tmp105980 = inst_105924;
var tmp105981 = inst_105923;
var inst_105922__$1 = tmp105979;
var inst_105923__$1 = tmp105981;
var inst_105924__$1 = tmp105980;
var inst_105925__$1 = inst_105933;
var state_105970__$1 = (function (){var statearr_105984 = state_105970;
(statearr_105984[(9)] = inst_105925__$1);

(statearr_105984[(10)] = inst_105922__$1);

(statearr_105984[(14)] = inst_105932);

(statearr_105984[(11)] = inst_105924__$1);

(statearr_105984[(12)] = inst_105923__$1);

return statearr_105984;
})();
var statearr_105985_106020 = state_105970__$1;
(statearr_105985_106020[(2)] = null);

(statearr_105985_106020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (22))){
var state_105970__$1 = state_105970;
var statearr_105986_106021 = state_105970__$1;
(statearr_105986_106021[(2)] = null);

(statearr_105986_106021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (6))){
var inst_105911 = (state_105970[(13)]);
var inst_105920 = f.call(null,inst_105911);
var inst_105921 = cljs.core.seq.call(null,inst_105920);
var inst_105922 = inst_105921;
var inst_105923 = null;
var inst_105924 = (0);
var inst_105925 = (0);
var state_105970__$1 = (function (){var statearr_105987 = state_105970;
(statearr_105987[(9)] = inst_105925);

(statearr_105987[(10)] = inst_105922);

(statearr_105987[(11)] = inst_105924);

(statearr_105987[(12)] = inst_105923);

return statearr_105987;
})();
var statearr_105988_106022 = state_105970__$1;
(statearr_105988_106022[(2)] = null);

(statearr_105988_106022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (17))){
var inst_105936 = (state_105970[(7)]);
var inst_105940 = cljs.core.chunk_first.call(null,inst_105936);
var inst_105941 = cljs.core.chunk_rest.call(null,inst_105936);
var inst_105942 = cljs.core.count.call(null,inst_105940);
var inst_105922 = inst_105941;
var inst_105923 = inst_105940;
var inst_105924 = inst_105942;
var inst_105925 = (0);
var state_105970__$1 = (function (){var statearr_105989 = state_105970;
(statearr_105989[(9)] = inst_105925);

(statearr_105989[(10)] = inst_105922);

(statearr_105989[(11)] = inst_105924);

(statearr_105989[(12)] = inst_105923);

return statearr_105989;
})();
var statearr_105990_106023 = state_105970__$1;
(statearr_105990_106023[(2)] = null);

(statearr_105990_106023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (3))){
var inst_105968 = (state_105970[(2)]);
var state_105970__$1 = state_105970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105970__$1,inst_105968);
} else {
if((state_val_105971 === (12))){
var inst_105956 = (state_105970[(2)]);
var state_105970__$1 = state_105970;
var statearr_105991_106024 = state_105970__$1;
(statearr_105991_106024[(2)] = inst_105956);

(statearr_105991_106024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (2))){
var state_105970__$1 = state_105970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105970__$1,(4),in$);
} else {
if((state_val_105971 === (23))){
var inst_105964 = (state_105970[(2)]);
var state_105970__$1 = state_105970;
var statearr_105992_106025 = state_105970__$1;
(statearr_105992_106025[(2)] = inst_105964);

(statearr_105992_106025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (19))){
var inst_105951 = (state_105970[(2)]);
var state_105970__$1 = state_105970;
var statearr_105993_106026 = state_105970__$1;
(statearr_105993_106026[(2)] = inst_105951);

(statearr_105993_106026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (11))){
var inst_105922 = (state_105970[(10)]);
var inst_105936 = (state_105970[(7)]);
var inst_105936__$1 = cljs.core.seq.call(null,inst_105922);
var state_105970__$1 = (function (){var statearr_105994 = state_105970;
(statearr_105994[(7)] = inst_105936__$1);

return statearr_105994;
})();
if(inst_105936__$1){
var statearr_105995_106027 = state_105970__$1;
(statearr_105995_106027[(1)] = (14));

} else {
var statearr_105996_106028 = state_105970__$1;
(statearr_105996_106028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (9))){
var inst_105958 = (state_105970[(2)]);
var inst_105959 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_105970__$1 = (function (){var statearr_105997 = state_105970;
(statearr_105997[(15)] = inst_105958);

return statearr_105997;
})();
if(cljs.core.truth_(inst_105959)){
var statearr_105998_106029 = state_105970__$1;
(statearr_105998_106029[(1)] = (21));

} else {
var statearr_105999_106030 = state_105970__$1;
(statearr_105999_106030[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (5))){
var inst_105914 = cljs.core.async.close_BANG_.call(null,out);
var state_105970__$1 = state_105970;
var statearr_106000_106031 = state_105970__$1;
(statearr_106000_106031[(2)] = inst_105914);

(statearr_106000_106031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (14))){
var inst_105936 = (state_105970[(7)]);
var inst_105938 = cljs.core.chunked_seq_QMARK_.call(null,inst_105936);
var state_105970__$1 = state_105970;
if(inst_105938){
var statearr_106001_106032 = state_105970__$1;
(statearr_106001_106032[(1)] = (17));

} else {
var statearr_106002_106033 = state_105970__$1;
(statearr_106002_106033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (16))){
var inst_105954 = (state_105970[(2)]);
var state_105970__$1 = state_105970;
var statearr_106003_106034 = state_105970__$1;
(statearr_106003_106034[(2)] = inst_105954);

(statearr_106003_106034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105971 === (10))){
var inst_105925 = (state_105970[(9)]);
var inst_105923 = (state_105970[(12)]);
var inst_105930 = cljs.core._nth.call(null,inst_105923,inst_105925);
var state_105970__$1 = state_105970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105970__$1,(13),out,inst_105930);
} else {
if((state_val_105971 === (18))){
var inst_105936 = (state_105970[(7)]);
var inst_105945 = cljs.core.first.call(null,inst_105936);
var state_105970__$1 = state_105970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105970__$1,(20),out,inst_105945);
} else {
if((state_val_105971 === (8))){
var inst_105925 = (state_105970[(9)]);
var inst_105924 = (state_105970[(11)]);
var inst_105927 = (inst_105925 < inst_105924);
var inst_105928 = inst_105927;
var state_105970__$1 = state_105970;
if(cljs.core.truth_(inst_105928)){
var statearr_106004_106035 = state_105970__$1;
(statearr_106004_106035[(1)] = (10));

} else {
var statearr_106005_106036 = state_105970__$1;
(statearr_106005_106036[(1)] = (11));

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
});})(c__51011__auto__))
;
return ((function (switch__50899__auto__,c__51011__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50900__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50900__auto____0 = (function (){
var statearr_106009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106009[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50900__auto__);

(statearr_106009[(1)] = (1));

return statearr_106009;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50900__auto____1 = (function (state_105970){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_105970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e106010){if((e106010 instanceof Object)){
var ex__50903__auto__ = e106010;
var statearr_106011_106037 = state_105970;
(statearr_106011_106037[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106038 = state_105970;
state_105970 = G__106038;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50900__auto__ = function(state_105970){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50900__auto____1.call(this,state_105970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50900__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50900__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto__))
})();
var state__51013__auto__ = (function (){var statearr_106012 = f__51012__auto__.call(null);
(statearr_106012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto__);

return statearr_106012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto__))
);

return c__51011__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args106039 = [];
var len__45809__auto___106042 = arguments.length;
var i__45810__auto___106043 = (0);
while(true){
if((i__45810__auto___106043 < len__45809__auto___106042)){
args106039.push((arguments[i__45810__auto___106043]));

var G__106044 = (i__45810__auto___106043 + (1));
i__45810__auto___106043 = G__106044;
continue;
} else {
}
break;
}

var G__106041 = args106039.length;
switch (G__106041) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args106039.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args106046 = [];
var len__45809__auto___106049 = arguments.length;
var i__45810__auto___106050 = (0);
while(true){
if((i__45810__auto___106050 < len__45809__auto___106049)){
args106046.push((arguments[i__45810__auto___106050]));

var G__106051 = (i__45810__auto___106050 + (1));
i__45810__auto___106050 = G__106051;
continue;
} else {
}
break;
}

var G__106048 = args106046.length;
switch (G__106048) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args106046.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args106053 = [];
var len__45809__auto___106104 = arguments.length;
var i__45810__auto___106105 = (0);
while(true){
if((i__45810__auto___106105 < len__45809__auto___106104)){
args106053.push((arguments[i__45810__auto___106105]));

var G__106106 = (i__45810__auto___106105 + (1));
i__45810__auto___106105 = G__106106;
continue;
} else {
}
break;
}

var G__106055 = args106053.length;
switch (G__106055) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args106053.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__51011__auto___106108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___106108,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___106108,out){
return (function (state_106079){
var state_val_106080 = (state_106079[(1)]);
if((state_val_106080 === (7))){
var inst_106074 = (state_106079[(2)]);
var state_106079__$1 = state_106079;
var statearr_106081_106109 = state_106079__$1;
(statearr_106081_106109[(2)] = inst_106074);

(statearr_106081_106109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (1))){
var inst_106056 = null;
var state_106079__$1 = (function (){var statearr_106082 = state_106079;
(statearr_106082[(7)] = inst_106056);

return statearr_106082;
})();
var statearr_106083_106110 = state_106079__$1;
(statearr_106083_106110[(2)] = null);

(statearr_106083_106110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (4))){
var inst_106059 = (state_106079[(8)]);
var inst_106059__$1 = (state_106079[(2)]);
var inst_106060 = (inst_106059__$1 == null);
var inst_106061 = cljs.core.not.call(null,inst_106060);
var state_106079__$1 = (function (){var statearr_106084 = state_106079;
(statearr_106084[(8)] = inst_106059__$1);

return statearr_106084;
})();
if(inst_106061){
var statearr_106085_106111 = state_106079__$1;
(statearr_106085_106111[(1)] = (5));

} else {
var statearr_106086_106112 = state_106079__$1;
(statearr_106086_106112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (6))){
var state_106079__$1 = state_106079;
var statearr_106087_106113 = state_106079__$1;
(statearr_106087_106113[(2)] = null);

(statearr_106087_106113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (3))){
var inst_106076 = (state_106079[(2)]);
var inst_106077 = cljs.core.async.close_BANG_.call(null,out);
var state_106079__$1 = (function (){var statearr_106088 = state_106079;
(statearr_106088[(9)] = inst_106076);

return statearr_106088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106079__$1,inst_106077);
} else {
if((state_val_106080 === (2))){
var state_106079__$1 = state_106079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106079__$1,(4),ch);
} else {
if((state_val_106080 === (11))){
var inst_106059 = (state_106079[(8)]);
var inst_106068 = (state_106079[(2)]);
var inst_106056 = inst_106059;
var state_106079__$1 = (function (){var statearr_106089 = state_106079;
(statearr_106089[(10)] = inst_106068);

(statearr_106089[(7)] = inst_106056);

return statearr_106089;
})();
var statearr_106090_106114 = state_106079__$1;
(statearr_106090_106114[(2)] = null);

(statearr_106090_106114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (9))){
var inst_106059 = (state_106079[(8)]);
var state_106079__$1 = state_106079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106079__$1,(11),out,inst_106059);
} else {
if((state_val_106080 === (5))){
var inst_106056 = (state_106079[(7)]);
var inst_106059 = (state_106079[(8)]);
var inst_106063 = cljs.core._EQ_.call(null,inst_106059,inst_106056);
var state_106079__$1 = state_106079;
if(inst_106063){
var statearr_106092_106115 = state_106079__$1;
(statearr_106092_106115[(1)] = (8));

} else {
var statearr_106093_106116 = state_106079__$1;
(statearr_106093_106116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (10))){
var inst_106071 = (state_106079[(2)]);
var state_106079__$1 = state_106079;
var statearr_106094_106117 = state_106079__$1;
(statearr_106094_106117[(2)] = inst_106071);

(statearr_106094_106117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106080 === (8))){
var inst_106056 = (state_106079[(7)]);
var tmp106091 = inst_106056;
var inst_106056__$1 = tmp106091;
var state_106079__$1 = (function (){var statearr_106095 = state_106079;
(statearr_106095[(7)] = inst_106056__$1);

return statearr_106095;
})();
var statearr_106096_106118 = state_106079__$1;
(statearr_106096_106118[(2)] = null);

(statearr_106096_106118[(1)] = (2));


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
});})(c__51011__auto___106108,out))
;
return ((function (switch__50899__auto__,c__51011__auto___106108,out){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_106100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_106100[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_106100[(1)] = (1));

return statearr_106100;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_106079){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_106079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e106101){if((e106101 instanceof Object)){
var ex__50903__auto__ = e106101;
var statearr_106102_106119 = state_106079;
(statearr_106102_106119[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106120 = state_106079;
state_106079 = G__106120;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_106079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_106079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___106108,out))
})();
var state__51013__auto__ = (function (){var statearr_106103 = f__51012__auto__.call(null);
(statearr_106103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___106108);

return statearr_106103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___106108,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args106121 = [];
var len__45809__auto___106191 = arguments.length;
var i__45810__auto___106192 = (0);
while(true){
if((i__45810__auto___106192 < len__45809__auto___106191)){
args106121.push((arguments[i__45810__auto___106192]));

var G__106193 = (i__45810__auto___106192 + (1));
i__45810__auto___106192 = G__106193;
continue;
} else {
}
break;
}

var G__106123 = args106121.length;
switch (G__106123) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args106121.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__51011__auto___106195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___106195,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___106195,out){
return (function (state_106161){
var state_val_106162 = (state_106161[(1)]);
if((state_val_106162 === (7))){
var inst_106157 = (state_106161[(2)]);
var state_106161__$1 = state_106161;
var statearr_106163_106196 = state_106161__$1;
(statearr_106163_106196[(2)] = inst_106157);

(statearr_106163_106196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (1))){
var inst_106124 = (new Array(n));
var inst_106125 = inst_106124;
var inst_106126 = (0);
var state_106161__$1 = (function (){var statearr_106164 = state_106161;
(statearr_106164[(7)] = inst_106126);

(statearr_106164[(8)] = inst_106125);

return statearr_106164;
})();
var statearr_106165_106197 = state_106161__$1;
(statearr_106165_106197[(2)] = null);

(statearr_106165_106197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (4))){
var inst_106129 = (state_106161[(9)]);
var inst_106129__$1 = (state_106161[(2)]);
var inst_106130 = (inst_106129__$1 == null);
var inst_106131 = cljs.core.not.call(null,inst_106130);
var state_106161__$1 = (function (){var statearr_106166 = state_106161;
(statearr_106166[(9)] = inst_106129__$1);

return statearr_106166;
})();
if(inst_106131){
var statearr_106167_106198 = state_106161__$1;
(statearr_106167_106198[(1)] = (5));

} else {
var statearr_106168_106199 = state_106161__$1;
(statearr_106168_106199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (15))){
var inst_106151 = (state_106161[(2)]);
var state_106161__$1 = state_106161;
var statearr_106169_106200 = state_106161__$1;
(statearr_106169_106200[(2)] = inst_106151);

(statearr_106169_106200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (13))){
var state_106161__$1 = state_106161;
var statearr_106170_106201 = state_106161__$1;
(statearr_106170_106201[(2)] = null);

(statearr_106170_106201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (6))){
var inst_106126 = (state_106161[(7)]);
var inst_106147 = (inst_106126 > (0));
var state_106161__$1 = state_106161;
if(cljs.core.truth_(inst_106147)){
var statearr_106171_106202 = state_106161__$1;
(statearr_106171_106202[(1)] = (12));

} else {
var statearr_106172_106203 = state_106161__$1;
(statearr_106172_106203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (3))){
var inst_106159 = (state_106161[(2)]);
var state_106161__$1 = state_106161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106161__$1,inst_106159);
} else {
if((state_val_106162 === (12))){
var inst_106125 = (state_106161[(8)]);
var inst_106149 = cljs.core.vec.call(null,inst_106125);
var state_106161__$1 = state_106161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106161__$1,(15),out,inst_106149);
} else {
if((state_val_106162 === (2))){
var state_106161__$1 = state_106161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106161__$1,(4),ch);
} else {
if((state_val_106162 === (11))){
var inst_106141 = (state_106161[(2)]);
var inst_106142 = (new Array(n));
var inst_106125 = inst_106142;
var inst_106126 = (0);
var state_106161__$1 = (function (){var statearr_106173 = state_106161;
(statearr_106173[(7)] = inst_106126);

(statearr_106173[(8)] = inst_106125);

(statearr_106173[(10)] = inst_106141);

return statearr_106173;
})();
var statearr_106174_106204 = state_106161__$1;
(statearr_106174_106204[(2)] = null);

(statearr_106174_106204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (9))){
var inst_106125 = (state_106161[(8)]);
var inst_106139 = cljs.core.vec.call(null,inst_106125);
var state_106161__$1 = state_106161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106161__$1,(11),out,inst_106139);
} else {
if((state_val_106162 === (5))){
var inst_106129 = (state_106161[(9)]);
var inst_106126 = (state_106161[(7)]);
var inst_106125 = (state_106161[(8)]);
var inst_106134 = (state_106161[(11)]);
var inst_106133 = (inst_106125[inst_106126] = inst_106129);
var inst_106134__$1 = (inst_106126 + (1));
var inst_106135 = (inst_106134__$1 < n);
var state_106161__$1 = (function (){var statearr_106175 = state_106161;
(statearr_106175[(12)] = inst_106133);

(statearr_106175[(11)] = inst_106134__$1);

return statearr_106175;
})();
if(cljs.core.truth_(inst_106135)){
var statearr_106176_106205 = state_106161__$1;
(statearr_106176_106205[(1)] = (8));

} else {
var statearr_106177_106206 = state_106161__$1;
(statearr_106177_106206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (14))){
var inst_106154 = (state_106161[(2)]);
var inst_106155 = cljs.core.async.close_BANG_.call(null,out);
var state_106161__$1 = (function (){var statearr_106179 = state_106161;
(statearr_106179[(13)] = inst_106154);

return statearr_106179;
})();
var statearr_106180_106207 = state_106161__$1;
(statearr_106180_106207[(2)] = inst_106155);

(statearr_106180_106207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (10))){
var inst_106145 = (state_106161[(2)]);
var state_106161__$1 = state_106161;
var statearr_106181_106208 = state_106161__$1;
(statearr_106181_106208[(2)] = inst_106145);

(statearr_106181_106208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106162 === (8))){
var inst_106125 = (state_106161[(8)]);
var inst_106134 = (state_106161[(11)]);
var tmp106178 = inst_106125;
var inst_106125__$1 = tmp106178;
var inst_106126 = inst_106134;
var state_106161__$1 = (function (){var statearr_106182 = state_106161;
(statearr_106182[(7)] = inst_106126);

(statearr_106182[(8)] = inst_106125__$1);

return statearr_106182;
})();
var statearr_106183_106209 = state_106161__$1;
(statearr_106183_106209[(2)] = null);

(statearr_106183_106209[(1)] = (2));


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
});})(c__51011__auto___106195,out))
;
return ((function (switch__50899__auto__,c__51011__auto___106195,out){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_106187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106187[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_106187[(1)] = (1));

return statearr_106187;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_106161){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_106161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e106188){if((e106188 instanceof Object)){
var ex__50903__auto__ = e106188;
var statearr_106189_106210 = state_106161;
(statearr_106189_106210[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106211 = state_106161;
state_106161 = G__106211;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_106161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_106161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___106195,out))
})();
var state__51013__auto__ = (function (){var statearr_106190 = f__51012__auto__.call(null);
(statearr_106190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___106195);

return statearr_106190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___106195,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args106212 = [];
var len__45809__auto___106286 = arguments.length;
var i__45810__auto___106287 = (0);
while(true){
if((i__45810__auto___106287 < len__45809__auto___106286)){
args106212.push((arguments[i__45810__auto___106287]));

var G__106288 = (i__45810__auto___106287 + (1));
i__45810__auto___106287 = G__106288;
continue;
} else {
}
break;
}

var G__106214 = args106212.length;
switch (G__106214) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args106212.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__51011__auto___106290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51011__auto___106290,out){
return (function (){
var f__51012__auto__ = (function (){var switch__50899__auto__ = ((function (c__51011__auto___106290,out){
return (function (state_106256){
var state_val_106257 = (state_106256[(1)]);
if((state_val_106257 === (7))){
var inst_106252 = (state_106256[(2)]);
var state_106256__$1 = state_106256;
var statearr_106258_106291 = state_106256__$1;
(statearr_106258_106291[(2)] = inst_106252);

(statearr_106258_106291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (1))){
var inst_106215 = [];
var inst_106216 = inst_106215;
var inst_106217 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_106256__$1 = (function (){var statearr_106259 = state_106256;
(statearr_106259[(7)] = inst_106217);

(statearr_106259[(8)] = inst_106216);

return statearr_106259;
})();
var statearr_106260_106292 = state_106256__$1;
(statearr_106260_106292[(2)] = null);

(statearr_106260_106292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (4))){
var inst_106220 = (state_106256[(9)]);
var inst_106220__$1 = (state_106256[(2)]);
var inst_106221 = (inst_106220__$1 == null);
var inst_106222 = cljs.core.not.call(null,inst_106221);
var state_106256__$1 = (function (){var statearr_106261 = state_106256;
(statearr_106261[(9)] = inst_106220__$1);

return statearr_106261;
})();
if(inst_106222){
var statearr_106262_106293 = state_106256__$1;
(statearr_106262_106293[(1)] = (5));

} else {
var statearr_106263_106294 = state_106256__$1;
(statearr_106263_106294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (15))){
var inst_106246 = (state_106256[(2)]);
var state_106256__$1 = state_106256;
var statearr_106264_106295 = state_106256__$1;
(statearr_106264_106295[(2)] = inst_106246);

(statearr_106264_106295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (13))){
var state_106256__$1 = state_106256;
var statearr_106265_106296 = state_106256__$1;
(statearr_106265_106296[(2)] = null);

(statearr_106265_106296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (6))){
var inst_106216 = (state_106256[(8)]);
var inst_106241 = inst_106216.length;
var inst_106242 = (inst_106241 > (0));
var state_106256__$1 = state_106256;
if(cljs.core.truth_(inst_106242)){
var statearr_106266_106297 = state_106256__$1;
(statearr_106266_106297[(1)] = (12));

} else {
var statearr_106267_106298 = state_106256__$1;
(statearr_106267_106298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (3))){
var inst_106254 = (state_106256[(2)]);
var state_106256__$1 = state_106256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106256__$1,inst_106254);
} else {
if((state_val_106257 === (12))){
var inst_106216 = (state_106256[(8)]);
var inst_106244 = cljs.core.vec.call(null,inst_106216);
var state_106256__$1 = state_106256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106256__$1,(15),out,inst_106244);
} else {
if((state_val_106257 === (2))){
var state_106256__$1 = state_106256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106256__$1,(4),ch);
} else {
if((state_val_106257 === (11))){
var inst_106224 = (state_106256[(10)]);
var inst_106220 = (state_106256[(9)]);
var inst_106234 = (state_106256[(2)]);
var inst_106235 = [];
var inst_106236 = inst_106235.push(inst_106220);
var inst_106216 = inst_106235;
var inst_106217 = inst_106224;
var state_106256__$1 = (function (){var statearr_106268 = state_106256;
(statearr_106268[(7)] = inst_106217);

(statearr_106268[(11)] = inst_106234);

(statearr_106268[(8)] = inst_106216);

(statearr_106268[(12)] = inst_106236);

return statearr_106268;
})();
var statearr_106269_106299 = state_106256__$1;
(statearr_106269_106299[(2)] = null);

(statearr_106269_106299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (9))){
var inst_106216 = (state_106256[(8)]);
var inst_106232 = cljs.core.vec.call(null,inst_106216);
var state_106256__$1 = state_106256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106256__$1,(11),out,inst_106232);
} else {
if((state_val_106257 === (5))){
var inst_106217 = (state_106256[(7)]);
var inst_106224 = (state_106256[(10)]);
var inst_106220 = (state_106256[(9)]);
var inst_106224__$1 = f.call(null,inst_106220);
var inst_106225 = cljs.core._EQ_.call(null,inst_106224__$1,inst_106217);
var inst_106226 = cljs.core.keyword_identical_QMARK_.call(null,inst_106217,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_106227 = (inst_106225) || (inst_106226);
var state_106256__$1 = (function (){var statearr_106270 = state_106256;
(statearr_106270[(10)] = inst_106224__$1);

return statearr_106270;
})();
if(cljs.core.truth_(inst_106227)){
var statearr_106271_106300 = state_106256__$1;
(statearr_106271_106300[(1)] = (8));

} else {
var statearr_106272_106301 = state_106256__$1;
(statearr_106272_106301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (14))){
var inst_106249 = (state_106256[(2)]);
var inst_106250 = cljs.core.async.close_BANG_.call(null,out);
var state_106256__$1 = (function (){var statearr_106274 = state_106256;
(statearr_106274[(13)] = inst_106249);

return statearr_106274;
})();
var statearr_106275_106302 = state_106256__$1;
(statearr_106275_106302[(2)] = inst_106250);

(statearr_106275_106302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (10))){
var inst_106239 = (state_106256[(2)]);
var state_106256__$1 = state_106256;
var statearr_106276_106303 = state_106256__$1;
(statearr_106276_106303[(2)] = inst_106239);

(statearr_106276_106303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106257 === (8))){
var inst_106216 = (state_106256[(8)]);
var inst_106224 = (state_106256[(10)]);
var inst_106220 = (state_106256[(9)]);
var inst_106229 = inst_106216.push(inst_106220);
var tmp106273 = inst_106216;
var inst_106216__$1 = tmp106273;
var inst_106217 = inst_106224;
var state_106256__$1 = (function (){var statearr_106277 = state_106256;
(statearr_106277[(7)] = inst_106217);

(statearr_106277[(8)] = inst_106216__$1);

(statearr_106277[(14)] = inst_106229);

return statearr_106277;
})();
var statearr_106278_106304 = state_106256__$1;
(statearr_106278_106304[(2)] = null);

(statearr_106278_106304[(1)] = (2));


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
});})(c__51011__auto___106290,out))
;
return ((function (switch__50899__auto__,c__51011__auto___106290,out){
return (function() {
var cljs$core$async$state_machine__50900__auto__ = null;
var cljs$core$async$state_machine__50900__auto____0 = (function (){
var statearr_106282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106282[(0)] = cljs$core$async$state_machine__50900__auto__);

(statearr_106282[(1)] = (1));

return statearr_106282;
});
var cljs$core$async$state_machine__50900__auto____1 = (function (state_106256){
while(true){
var ret_value__50901__auto__ = (function (){try{while(true){
var result__50902__auto__ = switch__50899__auto__.call(null,state_106256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50902__auto__;
}
break;
}
}catch (e106283){if((e106283 instanceof Object)){
var ex__50903__auto__ = e106283;
var statearr_106284_106305 = state_106256;
(statearr_106284_106305[(5)] = ex__50903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106306 = state_106256;
state_106256 = G__106306;
continue;
} else {
return ret_value__50901__auto__;
}
break;
}
});
cljs$core$async$state_machine__50900__auto__ = function(state_106256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50900__auto____1.call(this,state_106256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50900__auto____0;
cljs$core$async$state_machine__50900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50900__auto____1;
return cljs$core$async$state_machine__50900__auto__;
})()
;})(switch__50899__auto__,c__51011__auto___106290,out))
})();
var state__51013__auto__ = (function (){var statearr_106285 = f__51012__auto__.call(null);
(statearr_106285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__51011__auto___106290);

return statearr_106285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51013__auto__);
});})(c__51011__auto___106290,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1494918373843