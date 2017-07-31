// Compiled by ClojureScript 1.9.229 {}
goog.provide('metagator.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('metagator.views');
goog.require('metagator.config');
goog.require('metagator.subs');
goog.require('metagator.events');
goog.require('re_frame.core');
metagator.core.dev_setup = (function metagator$core$dev_setup(){
if(cljs.core.truth_(metagator.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
metagator.core.mount_root = (function metagator$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metagator.views.main_panel], null),document.getElementById("app"));
});
metagator.core.init = (function metagator$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

cljs.core.enable_console_print_BANG_.call(null);

metagator.core.dev_setup.call(null);

return metagator.core.mount_root.call(null);
});
goog.exportSymbol('metagator.core.init', metagator.core.init);

//# sourceMappingURL=core.js.map?rel=1501400720118