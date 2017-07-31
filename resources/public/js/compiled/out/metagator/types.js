// Compiled by ClojureScript 1.9.229 {}
goog.provide('metagator.types');
goog.require('cljs.core');
metagator.types.detect_type = (function metagator$types$detect_type(v){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,v),String)){
return "String";
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,v),Number)){
return "Number";
} else {
return null;
}
}
});

//# sourceMappingURL=types.js.map?rel=1501400719655