!function(t){function e(e){for(var r,s,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],i[s]&&f.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={1:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([173,0]),n()}({129:function(t,e,n){"use strict";var r=n(10),i=r(n(128)),a=r(n(61)),s=r(n(119)),o=r(n(117)),u=r(n(113)),c=n(98),l=new u.default;function d(t,e){var n=(0,o.default)({caseSensitive:!1},e),r=t+(0,s.default)(n);if(l.has(r))return l.get(r);var i="!"===t[0];i&&(t=t.slice(1)),t=c(t).replace(/\\\*/g,".*");var a=new RegExp("^".concat(t,"$"),n.caseSensitive?"":"i");return a.negated=i,l.set(r,a),a}t.exports=function(t,e,n){if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError("Expected two arrays, got ".concat((0,a.default)(t)," ").concat((0,a.default)(e)));if(0===e.length)return t;var r="!"===e[0][0];e=e.map(function(t){return d(t,n)});var s=[],o=!0,u=!1,c=void 0;try{for(var l,f=(0,i.default)(t);!(o=(l=f.next()).done);o=!0){var v=l.value,p=r,g=!0,w=!1,h=void 0;try{for(var m,_=(0,i.default)(e);!(g=(m=_.next()).done);g=!0){var b=m.value;b.test(v)&&(p=!b.negated)}}catch(t){w=!0,h=t}finally{try{g||null==_.return||_.return()}finally{if(w)throw h}}p&&s.push(v)}}catch(t){u=!0,c=t}finally{try{o||null==f.return||f.return()}finally{if(u)throw c}}return s},t.exports.isMatch=function(t,e,n){var r=d(e,n),i=r.test(t);return r.negated?!i:i}},172:function(t,e,n){"use strict";var r=n(10),i=r(n(86)),a=r(n(156)),s=r(n(72)),o=r(n(71)),u=r(n(89));a.default.use(o.default),a.default.use(s.default);var c=new s.default.Store({state:{counter:1},getters:{count:function(t){return t.counter}},actions:{incrementAsync:function(t){var e=t.commit;return new i.default(function(t){setTimeout(function(){e("increment"),t()},3e3)})}},mutations:{increment:function(t){t.counter+=1}}}),l=new o.default({useVuex:!0,vuexModuleName:"vuex-example-module",accessorName:"$l"});new a.default({el:"#app",store:c,wait:l,render:function(t){return t(u.default)}})},173:function(t,e,n){t.exports=n(172)},29:function(t,e,n){},30:function(t,e,n){"use strict";var r=n(10);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(41)),a=n(72),s=n(71),o={name:"vuex-app",data:function(){return{loaders:["a","c","b","a","b","a","c","a","c","a","b"]}},watch:{isWritingCode:function(){this.isWritingCode||clearInterval(this.timer)}},computed:(0,i.default)({},(0,a.mapGetters)(["count"]),(0,s.mapWaitingGetters)({isIncrementing:"incrementing count",isWritingCode:"writing code"})),methods:(0,i.default)({},(0,s.mapWaitingActions)({incrementAsync:"incrementing count"}),{writeCode:function(){var t=this;this.$l.start("writing code");var e=this.$l.percent("writing code");this.timer=setInterval(function(){t.$l.progress("writing code",e++)},100)},end:function(){this.$l.end("writing code"),clearInterval(this.timer)},toggleLoader:function(t){this.$l.is(t)?this.$l.end(t):this.$l.start(t)}})};e.default=o},31:function(t,e,n){"use strict";n.r(e);var r=n(30),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=i.a},32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{visible:Boolean,for:String,message:String},computed:{waitsFor:function(){return this.visible?this.visible:this.for?this.__$waitInstance.is(this.for):this.__$waitInstance.any}}};e.default=r},33:function(t,e,n){"use strict";n.r(e);var r=n(32),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=i.a},58:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.waitsFor?n("span",[t._t("waiting"),t._v(" "),t.message?n("span",[t._v(t._s(t.message))]):t._e()],2):t._t("default")],2)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},59:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("v-wait",{attrs:{message:"Something loading! Lovely..."}},[n("template",{slot:"waiting"},[n("span",{staticClass:"animated"},[t._v("❤️")])]),t._v("\n      This will be shown after load.\n    ")],2)],1),t._v(" "),n("button",{attrs:{disable:t.$l.is("writing code")},on:{click:function(e){t.writeCode()}}},[n("v-wait",{attrs:{for:"writing code",message:"Writing Code..."}},[n("template",{slot:"waiting"},[n("span",{staticClass:"animated"},[t._v("️️♻️")])]),t._v("\n      Write Code\n    ")],2)],1),t._v(" "),n("button",{attrs:{disabled:!t.$l.is("writing code")},on:{click:function(e){t.end()}}},[t.$l.is("writing code")?n("span",[t._v("Stop Coding")]):n("span",[t._v("Coding Stopped")])]),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{disabled:t.$l.is("c")},on:{click:function(e){t.$l.start("c")}}},[t._v("\n    Start "),n("b",[t._v('"c"')]),t._v(" Loader\n  ")]),t._v(" "),n("button",{attrs:{disabled:!t.$l.is("c")},on:{click:function(e){t.$l.end("c")}}},[t._v("\n    Stop "),n("b",[t._v('"c"')]),t._v(" Loader\n  ")]),t._v(" "),n("p",[t._v("\n    Toggle on any letter to load/unload together.\n  ")]),t._v(" "),n("ul",{staticClass:"list"},t._l(t.loaders,function(e){return n("li",{key:e+Math.random(),on:{click:function(n){t.toggleLoader(e)}}},[n("v-wait",{attrs:{for:e}},[n("template",{slot:"waiting"},"c"==e?[n("span",{staticClass:"animated"},[t._v("🎉")])]:[n("span",{staticClass:"animated"},[t._v("👋🏻")])]),t._v("\n        "+t._s(e)+"\n      ")],2)],1)})),t._v(" "),n("hr"),t._v(" "),n("button",{on:{click:t.incrementAsync}},[n("v-wait",{attrs:{for:"incrementing",message:"incrementing..."}},[n("template",{slot:"waiting"},[n("span",{staticClass:"animated"},[t._v("+")])]),t._v(" "),n("code",[t._v("mapWaitingActions")]),t._v(" "+t._s(t.count)+"\n    ")],2)],1),t._v(" "),t.isIncrementing?n("span",[t._v("is incrementing...")]):t._e(),t._v(" "),n("hr"),t._v("\n  Percentage of "),n("code",[t._v("writing code")]),t._v(": "),n("span",[t._v(t._s(t.$l.percent("writing code")))]),t._v(" "),n("p",[n("label",[t._v("Native Progress")]),n("br"),t._v(" "),n("progress",{attrs:{min:"0",max:"100"},domProps:{value:t.$l.percent("writing code")}})]),t._v(" "),n("p",[n("label",[t._v("Custom Progress")]),n("br"),t._v(" "),n("span",{staticClass:"progress"},[n("span",{staticClass:"percent",style:"width: "+t.$l.percent("writing code")+"%"})])]),t._v(" "),n("button",{on:{click:function(e){t.writeCode()}}},[t._v("\n    Start "),n("code",[t._v("writing code")])]),t._v(" "),n("button",{directives:[{name:"wait",rawName:"v-wait:click.progress",value:["writing code",10],expression:"['writing code', 10]",arg:"click",modifiers:{progress:!0}}]},[t._v("Set progress to 10")]),t._v(" "),n("button",{directives:[{name:"wait",rawName:"v-wait:click.progress",value:["writing code",50],expression:"['writing code', 50]",arg:"click",modifiers:{progress:!0}}]},[t._v("Set progress to 50")]),t._v(" "),n("button",{directives:[{name:"wait",rawName:"v-wait:click.progress",value:["writing code",100,100],expression:"['writing code', 100, 100]",arg:"click",modifiers:{progress:!0}}]},[t._v("Set progress to 100 of 100")]),t._v(" "),n("button",{directives:[{name:"wait",rawName:"v-wait:click.progress",value:["writing code",101],expression:"['writing code', 101]",arg:"click",modifiers:{progress:!0}}]},[t._v("Set progress to 101 (complete)")]),t._v(" "),n("button",{directives:[{name:"wait",rawName:"v-wait:click.progress",value:["writing code",50,200],expression:"['writing code', 50, 200]",arg:"click",modifiers:{progress:!0}}]},[t._v("Set progress to 50 of 200 (25%)")])])},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},63:function(t,e,n){"use strict";var r=n(10);Object.defineProperty(e,"__esModule",{value:!0}),e.is=function t(e,n){if("string"==typeof n&&n.match(/[\*\!]/))return e.filter(function(t){return(0,u.isMatch)(t,n)}).length>0;return Array.isArray(n)?e.some(function(e){return t(n,e)}):e.includes(n)},e.any=function(t){return t.length>0},e.start=function(t,e){return c((0,o.default)(t).concat([e]))},e.end=function(t,e){return c(t).filter(function(t){return t!==e})},e.progress=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;if(n>r)return l(t,e);return(0,s.default)({},t,(0,a.default)({},e,{current:n,total:r,percent:100*n/r}))},e.endProgress=l,e.percent=function(t,e){var n=t[e];return n?n.percent:0},e.nodeIsDebug=function(){return!1};var i=r(n(140)),a=r(n(35)),s=r(n(41)),o=r(n(62)),u=n(129);function c(t){return t.filter(function(t,e,n){return e==n.indexOf(t)})}function l(t,e){t[e];return(0,i.default)(t,[e])}},71:function(t,e,n){"use strict";var r=n(10);Object.defineProperty(e,"__esModule",{value:!0}),e.install=v,Object.defineProperty(e,"mapWaitingActions",{enumerable:!0,get:function(){return u.mapWaitingActions}}),Object.defineProperty(e,"mapWaitingGetters",{enumerable:!0,get:function(){return u.mapWaitingGetters}}),Object.defineProperty(e,"waitFor",{enumerable:!0,get:function(){return u.waitFor}}),e.default=void 0;var i=r(n(41)),a=r(n(142)),s=r(n(141)),o=n(63),u=n(97),c=r(n(92)),l=r(n(91)),d=r(n(90)),f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(this,t);this.options=(0,i.default)({},{accessorName:"$wait",useVuex:!1,vuexModuleName:"wait",registerComponent:!0,componentName:"v-wait",registerDirective:!0,directiveName:"wait"},e),this.initialized=!1}return(0,s.default)(t,[{key:"init",value:function(t,e){if((0,o.nodeIsDebug)()&&!v.installed&&console.warn("[vue-wait] not installed. Make sure to call `Vue.use(VueWait)` before init root instance."),!this.initialized){if(this.options.registerComponent&&t.component(this.options.componentName,l.default),this.options.registerDirective&&t.directive(this.options.directiveName,d.default),this.options.useVuex){var n=this.options.vuexModuleName;if(!e)throw new Error("[vue-wait] Vuex not initialized.");this.store=e,e._modules.get([n])||e.registerModule(n,c.default),this.stateHandler=new t({computed:{is:function(){return function(t){return e.getters["".concat(n,"/is")](t)}},any:function(){return e.getters["".concat(n,"/any")]},percent:function(){return function(t){return e.getters["".concat(n,"/percent")](t)}}}})}else this.stateHandler=new t({data:function(){return{waitingFor:[],progresses:{}}},computed:{is:function(){var t=this;return function(e){return(0,o.is)(t.waitingFor,e)}},any:function(){return(0,o.any)(this.waitingFor)},percent:function(){var t=this;return function(e){return(0,o.percent)(t.progresses,e)}}},methods:{start:function(t){this.waitingFor=(0,o.start)(this.waitingFor,t)},end:function(t){this.waitingFor=(0,o.end)(this.waitingFor,t),this.progresses=(0,o.endProgress)(this.progresses,t)},progress:function(t){var e=t.waiter,n=t.current,r=t.total;this.progresses=(0,o.progress)(this.progresses,e,n,r)}}});this.initialized=!0}}},{key:"is",value:function(t){return this.stateHandler.is(t)}},{key:"waiting",value:function(t){return this.is(t)}},{key:"percent",value:function(t){return this.stateHandler.percent(t)}},{key:"dispatchWaitingAction",value:function(t,e){var n=this.options.vuexModuleName;this.store.dispatch("".concat(n,"/").concat(t),e,{root:!0})}},{key:"start",value:function(t){this.options.useVuex?this.dispatchWaitingAction("start",t):this.stateHandler.start(t)}},{key:"end",value:function(t){this.options.useVuex?this.dispatchWaitingAction("end",t):this.stateHandler.end(t)}},{key:"progress",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;this.is(t)||this.start(t),e>n?this.end(t):this.options.useVuex?this.dispatchWaitingAction("progress",{waiter:t,current:e,total:n}):this.stateHandler.progress({waiter:t,current:e,total:n})}},{key:"any",get:function(){return this.stateHandler.any}}]),t}();function v(t){v.installed&&t?(0,o.nodeIsDebug)()&&console.warn("[vue-wait] already installed. Vue.use(VueWait) should be called only once."):(t.mixin({beforeCreate:function(){var e=this.$options,n=e.wait,r=e.store,i=e.parent,a=null;n?(a="function"==typeof n?new n:n).init(t,r):i&&i.__$waitInstance&&(a=i.__$waitInstance).init(t,i.$store),a&&(this.__$waitInstance=a,this[a.options.accessorName]=a)}}),v.installed=!0)}e.default=f,f.install=v},88:function(t,e,n){"use strict";var r=n(29);n.n(r).a},89:function(t,e,n){"use strict";n.r(e);var r=n(59),i=n(31);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n(88);var s=n(34),o=Object(s.a)(i.default,r.a,r.b,!1,null,null,null);e.default=o.exports},90:function(t,e,n){"use strict";var r=n(10);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(62));function a(t,e,n,r){var i=e.arg,a=e.modifiers,s=e.value,o=n.context.__$waitInstance.is(s);(a.not||["hidden","enabled"].includes(i))&&(o=!o);var u="none"===t.style.display?"":t.style.display;switch(i){case"visible":case"hidden":t.style.display=o?u:"none";break;case"enabled":case"disabled":o?t.setAttribute("disabled",!0):t.removeAttribute("disabled")}}var s={bind:function(t,e,n,r){var s=e.arg,o=e.modifiers,u=e.value,c=n.context.__$waitInstance;switch(s){case"click":if(o.start){t.addEventListener("click",function(){return c.start(u)},!1);break}if(o.end){t.addEventListener("click",function(){return c.end(u)},!1);break}if(o.progress){t.addEventListener("click",function(){return c.progress.apply(c,(0,i.default)(u))},!1);break}break;case"toggle":t.addEventListener("click",function(){c.is(u)?c.end(u):c.start(u)},!1)}a(t,e,n)},update:a};e.default=s},91:function(t,e,n){"use strict";n.r(e);var r=n(58),i=n(33);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n(34),o=Object(s.a)(i.default,r.a,r.b,!1,null,null,null);e.default=o.exports},92:function(t,e,n){"use strict";var r=n(10);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=r(n(35)),s=n(63),o="START",u="END",c="PROGRESS",l={namespaced:!0,state:{waitingFor:[],progresses:{}},getters:{is:function(t){return function(e){return(0,s.is)(t.waitingFor,e)}},any:function(t){return(0,s.any)(t.waitingFor)},percent:function(t){return function(e){return(0,s.percent)(t.progresses,e)}}},actions:{start:function(t,e){return(0,t.commit)(o,e)},end:function(t,e){return(0,t.commit)(u,e)},progress:function(t,e){return(0,t.commit)(c,e)}},mutations:(i={},(0,a.default)(i,o,function(t,e){t.waitingFor=(0,s.start)(t.waitingFor,e)}),(0,a.default)(i,u,function(t,e){t.waitingFor=(0,s.end)(t.waitingFor,e),t.progresses=(0,s.endProgress)(t.progresses,e)}),(0,a.default)(i,c,function(t,e){var n=e.waiter,r=e.current,i=e.total;t.progresses=(0,s.progress)(t.progresses,n,r,i)}),i)};e.default=l},97:function(t,e,n){"use strict";var r=n(10);Object.defineProperty(e,"__esModule",{value:!0}),e.mapWaitingActions=function(t,e){var n={};"object"===(0,o.default)(t)&&(e=t,t=null);return(0,s.default)(e).forEach(function(r){var s=e[r];n[r]=(0,a.default)(i.default.mark(function e(){var n,a,o,u,c=arguments;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,this.__$waitInstance.start(s),a=c.length,o=new Array(a),u=0;u<a;u++)o[u]=c[u];return e.next=5,(n=this.$store).dispatch.apply(n,[t?"".concat(t,"/").concat(r):r].concat(o));case 5:return e.abrupt("return",e.sent);case 6:return e.prev=6,this.__$waitInstance.end(s),e.finish(6);case 9:case"end":return e.stop()}},e,this,[[0,,6,9]])}))}),n},e.mapWaitingGetters=function(t){var e={};return(0,s.default)(t).forEach(function(n){var r=t[n];e[n]=function(){return this.__$waitInstance.is(r)}}),e},e.waitFor=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof e)return console.warn("[vue-wait] waitFor second argument must be a function"),e;if(!0===n)return function(){try{this.__$waitInstance.start(t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.apply(this,r)}finally{this.__$waitInstance.end(t)}};return(0,a.default)(i.default.mark(function n(){var r,a,s,o=arguments;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,this.__$waitInstance.start(t),r=o.length,a=new Array(r),s=0;s<r;s++)a[s]=o[s];return n.next=5,e.apply(this,a);case 5:return n.abrupt("return",n.sent);case 6:return n.prev=6,this.__$waitInstance.end(t),n.finish(6);case 9:case"end":return n.stop()}},n,this,[[0,,6,9]])}))};var i=r(n(96)),a=r(n(93)),s=r(n(36)),o=r(n(61))}});
//# sourceMappingURL=main.9ce1e562.js.map