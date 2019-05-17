!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/frontend-memo-game/",r(r.s=103)}([function(e,t,r){e.exports=r(12)(0)},function(e,t,r){e.exports=r(12)(20)},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,r){var n=r(23)("wks"),o=r(48),i=r(2).Symbol,a=r(73);e.exports=function(e){return n[e]||(n[e]=a&&i[e]||(a?i:o)("Symbol."+e))}},function(e,t,r){var n=r(9);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){e.exports=r(12)(18)},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){var n=r(13),o=r(24);e.exports=r(10)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){e.exports=!r(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){e.exports=r(12)(23)},function(e,t){e.exports=react_7ecbaf448e9585d46403},function(e,t,r){var n=r(10),o=r(47),i=r(4),a=r(33),s=Object.defineProperty;t.f=n?s:function(e,t,r){if(i(e),t=a(t,!0),i(r),o)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n,o,i,a=r(76),s=r(9),c=r(8),u=r(5),f=r(38),l=r(36),p=r(2).WeakMap;if(a){var d=new p,h=d.get,m=d.has,v=d.set;n=function(e,t){return v.call(d,e,t),t},o=function(e){return h.call(d,e)||{}},i=function(e){return m.call(d,e)}}else{var g=f("state");l[g]=!0,n=function(e,t){return c(e,g,t),t},o=function(e){return u(e,g)?e[g]:{}},i=function(e){return u(e,g)}}e.exports={set:n,get:o,has:i,enforce:function(e){return i(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!s(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},function(e,t,r){"use strict";var n=r(22),o=r(72),i=r(18),a=r(14),s=r(55),c=a.set,u=a.getterFor("Array Iterator");e.exports=s(Array,"Array",function(e,t){c(this,{type:"Array Iterator",target:n(e),index:0,kind:t})},function(){var e=u(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=!1},function(e,t){e.exports={}},function(e,t,r){var n=r(2),o=r(8),i=r(5),a=r(31),s=r(54),c=r(14),u=c.get,f=c.enforce,l=String(s).split("toString");r(23)("inspectSource",function(e){return s.call(e)}),(e.exports=function(e,t,r,s){var c=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof t||i(r,"name")||o(r,"name",t),f(r).source=l.join("string"==typeof t?t:"")),e!==n?(c?!p&&e[t]&&(u=!0):delete e[t],u?e[t]=r:o(e,t,r)):u?e[t]=r:a(t,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&u(this).source||s.call(this)})},function(e,t,r){var n=r(13).f,o=r(5),i=r(3)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,i,a,s],f=0;(c=new Error(t.replace(/%s/g,function(){return u[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,r){var n=r(46),o=r(30);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(2),o=r(31),i=n["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:r(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(2),o=r(39).f,i=r(8),a=r(19),s=r(31),c=r(77),u=r(58);e.exports=function(e,t){var r,f,l,p,d,h=e.target,m=e.global,v=e.stat;if(r=m?n:v?n[h]||s(h,{}):(n[h]||{}).prototype)for(f in t){if(p=t[f],l=e.noTargetGet?(d=o(r,f))&&d.value:r[f],!u(m?f:h+(v?".":"#")+f,e.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(e.sham||l&&l.sham)&&i(p,"sham",!0),a(r,f,p,e)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,r){var n=r(26);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(86),o=r(3)("iterator"),i=r(18);e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[n(e)]}},function(e,t,r){e.exports=r(12)(1)},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,r){var n=r(2),o=r(8);e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(9),o=r(2).document,i=n(o)&&n(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,r){var n=r(9);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){var n=r(35),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports={}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,r){var n=r(23)("keys"),o=r(48);e.exports=function(e){return n[e]||(n[e]=o(e))}},function(e,t,r){var n=r(10),o=r(56),i=r(24),a=r(22),s=r(33),c=r(5),u=r(47),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=a(e),t=s(t,!0),u)try{return f(e,t)}catch(e){}if(c(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t,r){var n=r(30);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(83),o=r(15),i=r(2),a=r(8),s=r(3),c=s("iterator"),u=s("toStringTag"),f=o.values;for(var l in n){var p=i[l],d=p&&p.prototype;if(d){if(d[c]!==f)try{a(d,c,f)}catch(e){d[c]=f}if(d[u]||a(d,u,l),n[l])for(var h in o)if(d[h]!==o[h])try{a(d,h,o[h])}catch(e){d[h]=o[h]}}}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},function(e,t,r){e.exports=r(12)(4)},function(e,t,r){"use strict";var n=r(43),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=d(r);o&&o!==h&&e(t,o,n)}var a=f(r);l&&(a=a.concat(l(r)));for(var s=c(t),m=c(r),v=0;v<a.length;++v){var g=a[v];if(!(i[g]||n&&n[g]||m&&m[g]||s&&s[g])){var b=p(r,g);try{u(t,g,b)}catch(e){}}}return t}return t}},function(e){e.exports=[{name:"webpack",title:"Webpack"},{name:"gulp",title:"Gulp"},{name:"npm",title:"NPM"},{name:"nodejs",title:"Node.js"},{name:"eslint",title:"ESLint"},{name:"babel",title:"Babel"},{name:"prettier",title:"Prettier"},{name:"react",title:"React"},{name:"redux",title:"Redux"},{name:"reactRouter",title:"react-router"},{name:"chrome",title:"Chrome"},{name:"firefox",title:"Firefox"},{name:"git",title:"Git"},{name:"vscode",title:"Visual Studio Code"},{name:"yarn",title:"yarn"},{name:"sass",title:"sass"},{name:"vue",title:"Vue.js"},{name:"less",title:"LESS"},{name:"typescript",title:"TypeScript"},{name:"angular",title:"Angular"}]},function(e,t,r){var n=r(7),o=r(16),i="".split;e.exports=n(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t,r){e.exports=!r(10)&&!r(7)(function(){return 7!=Object.defineProperty(r(32)("div"),"a",{get:function(){return 7}}).a})},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(4),o=r(50),i=r(37),a=r(53),s=r(32),c=r(38)("IE_PROTO"),u=function(){},f=function(){var e,t=s("iframe"),r=i.length;for(t.style.display="none",a.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),f=e.F;r--;)delete f.prototype[i[r]];return f()};e.exports=Object.create||function(e,t){var r;return null!==e?(u.prototype=n(e),r=new u,u.prototype=null,r[c]=e):r=f(),void 0===t?r:o(r,t)},r(36)[c]=!0},function(e,t,r){var n=r(10),o=r(13),i=r(4),a=r(51);e.exports=n?Object.defineProperties:function(e,t){i(e);for(var r,n=a(t),s=n.length,c=0;s>c;)o.f(e,r=n[c++],t[r]);return e}},function(e,t,r){var n=r(52),o=r(37);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,r){var n=r(5),o=r(22),i=r(74)(!1),a=r(36);e.exports=function(e,t){var r,s=o(e),c=0,u=[];for(r in s)!n(a,r)&&n(s,r)&&u.push(r);for(;t.length>c;)n(s,r=t[c++])&&(~i(u,r)||u.push(r));return u}},function(e,t,r){var n=r(2).document;e.exports=n&&n.documentElement},function(e,t,r){e.exports=r(23)("native-function-to-string",Function.toString)},function(e,t,r){"use strict";var n=r(25),o=r(59),i=r(61),a=r(81),s=r(20),c=r(8),u=r(19),f=r(17),l=r(3)("iterator"),p=r(18),d=r(60),h=d.IteratorPrototype,m=d.BUGGY_SAFARI_ITERATORS,v=function(){return this};e.exports=function(e,t,r,d,g,b,y){o(r,t,d);var x,w,S,E=function(e){if(e===g&&R)return R;if(!m&&e in P)return P[e];switch(e){case"keys":case"values":case"entries":return function(){return new r(this,e)}}return function(){return new r(this)}},O=t+" Iterator",k=!1,P=e.prototype,j=P[l]||P["@@iterator"]||g&&P[g],R=!m&&j||E(g),T="Array"==t&&P.entries||j;if(T&&(x=i(T.call(new e)),h!==Object.prototype&&x.next&&(f||i(x)===h||(a?a(x,h):"function"!=typeof x[l]&&c(x,l,v)),s(x,O,!0,!0),f&&(p[O]=v))),"values"==g&&j&&"values"!==j.name&&(k=!0,R=function(){return j.call(this)}),f&&!y||P[l]===R||c(P,l,R),p[t]=R,g)if(w={values:E("values"),keys:b?R:E("keys"),entries:E("entries")},y)for(S in w)!m&&!k&&S in P||u(P,S,w[S]);else n({target:t,proto:!0,forced:m||k},w);return w}},function(e,t,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(7),o=/#|\.prototype\./,i=function(e,t){var r=s[a(e)];return r==u||r!=c&&("function"==typeof t?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},function(e,t,r){"use strict";var n=r(60).IteratorPrototype,o=r(49),i=r(24),a=r(20),s=r(18),c=function(){return this};e.exports=function(e,t,r){var u=t+" Iterator";return e.prototype=o(n,{next:i(1,r)}),a(e,u,!1,!0),s[u]=c,e}},function(e,t,r){"use strict";var n,o,i,a=r(61),s=r(8),c=r(5),u=r(17),f=r(3)("iterator"),l=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(n=o):l=!0),null==n&&(n={}),u||c(n,f)||s(n,f,function(){return this}),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:l}},function(e,t,r){var n=r(5),o=r(40),i=r(38)("IE_PROTO"),a=r(80),s=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,r){var n=r(18),o=r(3)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},function(e,t,r){var n=r(4);e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(t){var i=e.return;throw void 0!==i&&n(i.call(e)),t}}},function(e,t,r){var n,o,i,a=r(2),s=r(16),c=r(27),u=r(53),f=r(32),l=a.setImmediate,p=a.clearImmediate,d=a.process,h=a.MessageChannel,m=a.Dispatch,v=0,g={},b=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},y=function(e){b.call(e.data)};l&&p||(l=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},n(v),v},p=function(e){delete g[e]},"process"==s(d)?n=function(e){d.nextTick(c(b,e,1))}:m&&m.now?n=function(e){m.now(c(b,e,1))}:h?(i=(o=new h).port2,o.port1.onmessage=y,n=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(n=function(e){a.postMessage(e+"","*")},a.addEventListener("message",y,!1)):n="onreadystatechange"in f("script")?function(e){u.appendChild(f("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(c(b,e,1),0)}),e.exports={set:l,clear:p}},function(e,t,r){var n=r(2).navigator;e.exports=n&&n.userAgent||""},function(e,t,r){"use strict";var n=r(26),o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)};e.exports.f=function(e){return new o(e)}},function(e,t,r){var n=r(19);e.exports=function(e,t,r){for(var o in t)n(e,o,t[o],r);return e}},function(e,t,r){e.exports=r(2)},function(e,t,r){var n=r(35),o=r(30);e.exports=function(e,t,r){var i,a,s=String(o(e)),c=n(t),u=s.length;return c<0||c>=u?r?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?r?s.charAt(c):i:r?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}},function(e,t,r){var n=r(17),o=r(3)("iterator");e.exports=!r(7)(function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",n&&!e.toJSON||!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Reset=t.reset=void 0;var n=r(1);function o(){var e=a(["",""]);return o=function(){return e},e}function i(){var e=a(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]);return i=function(){return e},e}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=(0,n.css)(i());t.reset=s;var c=(0,n.createGlobalStyle)(o(),s);t.Reset=c;var u=s;t.default=u},function(e,t,r){var n=r(3)("unscopables"),o=r(49),i=r(8),a=Array.prototype;null==a[n]&&i(a,n,o(null)),e.exports=function(e){a[n][e]=!0}},function(e,t,r){e.exports=!r(7)(function(){return!String(Symbol())})},function(e,t,r){var n=r(22),o=r(34),i=r(75);e.exports=function(e){return function(t,r,a){var s,c=n(t),u=o(c.length),f=i(a,u);if(e&&r!=r){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((e||f in c)&&c[f]===r)return e||f||0;return!e&&-1}}},function(e,t,r){var n=r(35),o=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):i(r,t)}},function(e,t,r){var n=r(54),o=r(2).WeakMap;e.exports="function"==typeof o&&/native code/.test(n.call(o))},function(e,t,r){var n=r(5),o=r(78),i=r(39),a=r(13);e.exports=function(e,t){for(var r=o(t),s=a.f,c=i.f,u=0;u<r.length;u++){var f=r[u];n(e,f)||s(e,f,c(t,f))}}},function(e,t,r){var n=r(79),o=r(57),i=r(4),a=r(2).Reflect;e.exports=a&&a.ownKeys||function(e){var t=n.f(i(e)),r=o.f;return r?t.concat(r(e)):t}},function(e,t,r){var n=r(52),o=r(37).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t,r){e.exports=!r(7)(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},function(e,t,r){var n=r(82);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,o){return n(r,o),t?e.call(r,o):r.__proto__=o,r}}():void 0)},function(e,t,r){var n=r(9),o=r(4);e.exports=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict";var n,o,i,a="Promise",s=r(17),c=r(2),u=r(25),f=r(9),l=r(26),p=r(42),d=r(16),h=r(85),m=r(87),v=r(88),g=r(64).set,b=r(89),y=r(90),x=r(91),w=r(66),S=r(92),E=r(65),O=r(3)("species"),k=r(14),P=r(58),j=k.get,R=k.set,T=k.getterFor(a),L=c.Promise,C=c.TypeError,A=c.document,M=c.process,_=c.fetch,I=M&&M.versions,N=I&&I.v8||"",U=w.f,q=U,B="process"==d(M),F=!!(A&&A.createEvent&&c.dispatchEvent),D=P(a,function(){var e=L.resolve(1),t=function(){},r=(e.constructor={})[O]=function(e){e(t,t)};return!((B||"function"==typeof PromiseRejectionEvent)&&(!s||e.finally)&&e.then(t)instanceof r&&0!==N.indexOf("6.6")&&-1===E.indexOf("Chrome/66"))}),z=D||!m(function(e){L.all(e).catch(function(){})}),G=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},V=function(e,t,r){if(!t.notified){t.notified=!0;var n=t.reactions;b(function(){for(var o=t.value,i=1==t.state,a=0,s=function(r){var n,a,s,c=i?r.ok:r.fail,u=r.resolve,f=r.reject,l=r.domain;try{c?(i||(2===t.rejection&&Y(e,t),t.rejection=1),!0===c?n=o:(l&&l.enter(),n=c(o),l&&(l.exit(),s=!0)),n===r.promise?f(C("Promise-chain cycle")):(a=G(n))?a.call(n,u,f):u(n)):f(o)}catch(e){l&&!s&&l.exit(),f(e)}};n.length>a;)s(n[a++]);t.reactions=[],t.notified=!1,r&&!t.rejection&&W(e,t)})}},H=function(e,t,r){var n,o;F?((n=A.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),c.dispatchEvent(n)):n={promise:t,reason:r},(o=c["on"+e])?o(n):"unhandledrejection"===e&&x("Unhandled promise rejection",r)},W=function(e,t){g.call(c,function(){var r,n=t.value;if($(t)&&(r=S(function(){B?M.emit("unhandledRejection",n,e):H("unhandledrejection",e,n)}),t.rejection=B||$(t)?2:1,r.error))throw r.value})},$=function(e){return 1!==e.rejection&&!e.parent},Y=function(e,t){g.call(c,function(){B?M.emit("rejectionHandled",e):H("rejectionhandled",e,t.value)})},K=function(e,t,r,n){return function(o){e(t,r,o,n)}},Z=function(e,t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=2,V(e,t,!0))},X=function(e,t,r,n){if(!t.done){t.done=!0,n&&(t=n);try{if(e===r)throw C("Promise can't be resolved itself");var o=G(r);o?b(function(){var n={done:!1};try{o.call(r,K(X,e,n,t),K(Z,e,n,t))}catch(r){Z(e,n,r,t)}}):(t.value=r,t.state=1,V(e,t,!1))}catch(r){Z(e,{done:!1},r,t)}}};D&&(L=function(e){p(this,L,a),l(e),n.call(this);var t=j(this);try{e(K(X,this,t),K(Z,this,t))}catch(e){Z(this,t,e)}},(n=function(e){R(this,{type:a,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=r(67)(L.prototype,{then:function(e,t){var r=T(this),n=U(v(this,L));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=B?M.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&V(this,r,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n,t=j(e);this.promise=e,this.resolve=K(X,e,t),this.reject=K(Z,e,t)},w.f=U=function(e){return e===L||e===i?new o(e):q(e)},s||"function"!=typeof _||u({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return y(L,_.apply(c,arguments))}})),u({global:!0,wrap:!0,forced:D},{Promise:L}),r(20)(L,a,!1,!0),r(93)(a),i=r(68).Promise,u({target:a,stat:!0,forced:D},{reject:function(e){var t=U(this);return t.reject.call(void 0,e),t.promise}}),u({target:a,stat:!0,forced:s||D},{resolve:function(e){return y(s&&this===i?L:this,e)}}),u({target:a,stat:!0,forced:z},{all:function(e){var t=this,r=U(t),n=r.resolve,o=r.reject,i=S(function(){var r=[],i=0,a=1;h(e,function(e){var s=i++,c=!1;r.push(void 0),a++,t.resolve(e).then(function(e){c||(c=!0,r[s]=e,--a||n(r))},o)}),--a||n(r)});return i.error&&o(i.value),r.promise},race:function(e){var t=this,r=U(t),n=r.reject,o=S(function(){h(e,function(e){t.resolve(e).then(r.resolve,n)})});return o.error&&n(o.value),r.promise}})},function(e,t,r){var n=r(4),o=r(62),i=r(34),a=r(27),s=r(28),c=r(63),u={};(e.exports=function(e,t,r,f,l){var p,d,h,m,v,g=a(t,r,f?2:1);if(l)p=e;else{if("function"!=typeof(d=s(e)))throw TypeError("Target is not iterable");if(o(d)){for(h=0,m=i(e.length);m>h;h++)if((f?g(n(v=e[h])[0],v[1]):g(e[h]))===u)return u;return}p=d.call(e)}for(;!(v=p.next()).done;)if(c(p,g,v.value,f)===u)return u}).BREAK=u},function(e,t,r){var n=r(16),o=r(3)("toStringTag"),i="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?r:i?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,r){var n=r(3)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},e(i)}catch(e){}return r}},function(e,t,r){var n=r(4),o=r(26),i=r(3)("species");e.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||null==(r=n(a)[i])?t:o(r)}},function(e,t,r){var n,o,i,a,s,c,u,f=r(2),l=r(39).f,p=r(16),d=r(64).set,h=r(65),m=f.MutationObserver||f.WebKitMutationObserver,v=f.process,g=f.Promise,b="process"==p(v),y=l(f,"queueMicrotask"),x=y&&y.value;x||(n=function(){var e,t;for(b&&(e=v.domain)&&e.exit();o;){t=o.fn,o=o.next;try{t()}catch(e){throw o?a():i=void 0,e}}i=void 0,e&&e.enter()},b?a=function(){v.nextTick(n)}:m&&!/(iPhone|iPod|iPad).*AppleWebKit/i.test(h)?(s=!0,c=document.createTextNode(""),new m(n).observe(c,{characterData:!0}),a=function(){c.data=s=!s}):g&&g.resolve?(u=g.resolve(void 0),a=function(){u.then(n)}):a=function(){d.call(f,n)}),e.exports=x||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,a()),i=t}},function(e,t,r){var n=r(4),o=r(9),i=r(66);e.exports=function(e,t){if(n(e),o(t)&&t.constructor===e)return t;var r=i.f(e);return(0,r.resolve)(t),r.promise}},function(e,t,r){var n=r(2);e.exports=function(e,t){var r=n.console;r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}},function(e,t,r){"use strict";var n=r(94),o=r(13),i=r(10),a=r(3)("species");e.exports=function(e){var t=n(e),r=o.f;i&&t&&!t[a]&&r(t,a,{configurable:!0,get:function(){return this}})}},function(e,t,r){var n=r(68),o=r(2),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e])||i(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},function(e,t,r){"use strict";r(96);var n,o=r(10),i=r(70),a=r(2).URL,s=r(50),c=r(19),u=r(42),f=r(5),l=r(97),p=r(98),d=r(69),h=r(100),m=r(101),v=m.URLSearchParams,g=m.getState,b=r(14),y=b.set,x=b.getterFor("URL"),w=Math.pow,S=/[a-zA-Z]/,E=/[a-zA-Z0-9+\-.]/,O=/\d/,k=/^(0x|0X)/,P=/^[0-7]+$/,j=/^\d+$/,R=/^[0-9A-Fa-f]+$/,T=/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/,L=/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/,C=/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g,A=/\u0009|\u000A|\u000D/g,M=function(e,t){var r,n,o;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(r=I(t.slice(1,-1))))return"Invalid host";e.host=r}else if(G(e)){if(t=h(t),T.test(t))return"Invalid host";if(null===(r=_(t)))return"Invalid host";e.host=r}else{if(L.test(t))return"Invalid host";for(r="",n=p(t),o=0;o<n.length;o++)r+=D(n[o],U);e.host=r}},_=function(e){var t,r,n,o,i,a,s,c=e.split(".");if(""==c[c.length-1]&&c.length&&c.pop(),(t=c.length)>4)return e;for(r=[],n=0;n<t;n++){if(""==(o=c[n]))return e;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=k.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?j:8==i?P:R).test(o))return e;a=parseInt(o,i)}r.push(a)}for(n=0;n<t;n++)if(a=r[n],n==t-1){if(a>=w(256,5-t))return null}else if(a>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*w(256,3-n);return s},I=function(e){var t,r,n,o,i,a,s,c=[0,0,0,0,0,0,0,0],u=0,f=null,l=0,p=function(){return e.charAt(l)};if(":"==p()){if(":"!=e.charAt(1))return;l+=2,f=++u}for(;p();){if(8==u)return;if(":"!=p()){for(t=r=0;r<4&&R.test(p());)t=16*t+parseInt(p(),16),l++,r++;if("."==p()){if(0==r)return;if(l-=r,u>6)return;for(n=0;p();){if(o=null,n>0){if(!("."==p()&&n<4))return;l++}if(!O.test(p()))return;for(;O.test(p());){if(i=parseInt(p(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}c[u]=256*c[u]+o,2!=++n&&4!=n||u++}if(4!=n)return;break}if(":"==p()){if(l++,!p())return}else if(p())return;c[u++]=t}else{if(null!==f)return;l++,f=++u}}if(null!==f)for(a=u-f,u=7;0!=u&&a>0;)s=c[u],c[u--]=c[f+a-1],c[f+--a]=s;else if(8!=u)return;return c},N=function(e){var t,r,n,o;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=Math.floor(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,o=0,i=0;i<8;i++)0!==e[i]?(o>r&&(t=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(t=n,r=o),t}(e),r=0;r<8;r++)o&&0===e[r]||(o&&(o=!1),n===r?(t+=r?":":"::",o=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},U={},q=l({},U,{" ":1,'"':1,"<":1,">":1,"`":1}),B=l({},q,{"#":1,"?":1,"{":1,"}":1}),F=l({},B,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),D=function(e,t){var r=d(e,0);return r>32&&r<127&&!f(t,e)?e:encodeURIComponent(e)},z={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},G=function(e){return f(z,e.scheme)},V=function(e){return""!=e.username||""!=e.password},H=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},W=function(e,t){var r;return 2==e.length&&S.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},$=function(e){var t;return e.length>1&&W(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Y=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&W(t[0],!0)||t.pop()},K=function(e){return"."===e||"%2e"===e.toLowerCase()},Z={},X={},J={},Q={},ee={},te={},re={},ne={},oe={},ie={},ae={},se={},ce={},ue={},fe={},le={},pe={},de={},he={},me={},ve={},ge=function(e,t,r,o){var i,a,s,c,u,l=r||Z,d=0,h="",m=!1,v=!1,g=!1;for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(C,"")),t=t.replace(A,""),i=p(t);d<=i.length;){switch(a=i[d],l){case Z:if(!a||!S.test(a)){if(r)return"Invalid scheme";l=J;continue}h+=a.toLowerCase(),l=X;break;case X:if(a&&(E.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(r)return"Invalid scheme";h="",l=J,d=0;continue}if(r&&(G(e)!=f(z,h)||"file"==h&&(V(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,r)return void(G(e)&&z[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?l=ue:G(e)&&o&&o.scheme==e.scheme?l=Q:G(e)?l=ne:"/"==i[d+1]?(l=ee,d++):(e.cannotBeABaseURL=!0,e.path.push(""),l=he)}break;case J:if(!o||o.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(o.cannotBeABaseURL&&"#"==a){e.scheme=o.scheme,e.path=o.path.slice(),e.query=o.query,e.fragment="",e.cannotBeABaseURL=!0,l=ve;break}l="file"==o.scheme?ue:te;continue;case Q:if("/"!=a||"/"!=i[d+1]){l=te;continue}l=oe,d++;break;case ee:if("/"==a){l=ie;break}l=de;continue;case te:if(e.scheme=o.scheme,a==n)e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query=o.query;else if("/"==a||"\\"==a&&G(e))l=re;else if("?"==a)e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query="",l=me;else{if("#"!=a){e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.path.pop(),l=de;continue}e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query=o.query,e.fragment="",l=ve}break;case re:if(!G(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,l=de;continue}l=ie}else l=oe;break;case ne:if(l=oe,"/"!=a||"/"!=h.charAt(d+1))continue;d++;break;case oe:if("/"!=a&&"\\"!=a){l=ie;continue}break;case ie:if("@"==a){m&&(h="%40"+h),m=!0,s=p(h);for(var b=0;b<s.length;b++){var y=s[b];if(":"!=y||g){var x=D(y,F);g?e.password+=x:e.username+=x}else g=!0}h=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&G(e)){if(m&&""==h)return"Invalid authority";d-=p(h).length+1,h="",l=ae}else h+=a;break;case ae:case se:if(r&&"file"==e.scheme){l=le;continue}if(":"!=a||v){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&G(e)){if(G(e)&&""==h)return"Invalid host";if(r&&""==h&&(V(e)||null!==e.port))return;if(c=M(e,h))return c;if(h="",l=pe,r)return;continue}"["==a?v=!0:"]"==a&&(v=!1),h+=a}else{if(""==h)return"Invalid host";if(c=M(e,h))return c;if(h="",l=ce,r==se)return}break;case ce:if(!O.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\"==a&&G(e)||r){if(""!=h){var w=parseInt(h,10);if(w>65535)return"Invalid port";e.port=G(e)&&w===z[e.scheme]?null:w,h=""}if(r)return;l=pe;continue}return"Invalid port"}h+=a;break;case ue:if(e.scheme="file","/"==a||"\\"==a)l=fe;else{if(!o||"file"!=o.scheme){l=de;continue}if(a==n)e.host=o.host,e.path=o.path.slice(),e.query=o.query;else if("?"==a)e.host=o.host,e.path=o.path.slice(),e.query="",l=me;else{if("#"!=a){$(i.slice(d).join(""))||(e.host=o.host,e.path=o.path.slice(),Y(e)),l=de;continue}e.host=o.host,e.path=o.path.slice(),e.query=o.query,e.fragment="",l=ve}}break;case fe:if("/"==a||"\\"==a){l=le;break}o&&"file"==o.scheme&&!$(i.slice(d).join(""))&&(W(o.path[0],!0)?e.path.push(o.path[0]):e.host=o.host),l=de;continue;case le:if(a==n||"/"==a||"\\"==a||"?"==a||"#"==a){if(!r&&W(h))l=de;else if(""==h){if(e.host="",r)return;l=pe}else{if(c=M(e,h))return c;if("localhost"==e.host&&(e.host=""),r)return;h="",l=pe}continue}h+=a;break;case pe:if(G(e)){if(l=de,"/"!=a&&"\\"!=a)continue}else if(r||"?"!=a)if(r||"#"!=a){if(a!=n&&(l=de,"/"!=a))continue}else e.fragment="",l=ve;else e.query="",l=me;break;case de:if(a==n||"/"==a||"\\"==a&&G(e)||!r&&("?"==a||"#"==a)){if(".."===(u=(u=h).toLowerCase())||"%2e."===u||".%2e"===u||"%2e%2e"===u?(Y(e),"/"==a||"\\"==a&&G(e)||e.path.push("")):K(h)?"/"==a||"\\"==a&&G(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&W(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==n||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",l=me):"#"==a&&(e.fragment="",l=ve)}else h+=D(a,B);break;case he:"?"==a?(e.query="",l=me):"#"==a?(e.fragment="",l=ve):a!=n&&(e.path[0]+=D(a,U));break;case me:r||"#"!=a?a!=n&&("'"==a&&G(e)?e.query+="%27":e.query+="#"==a?"%23":D(a,U)):(e.fragment="",l=ve);break;case ve:a!=n&&(e.fragment+=D(a,q))}d++}},be=function(e){var t,r,n=u(this,be,"URL"),i=arguments.length>1?arguments[1]:void 0,a=String(e),s=y(n,{type:"URL"});if(void 0!==i)if(i instanceof be)t=x(i);else if(r=ge(t={},String(i)))throw TypeError(r);if(r=ge(s,a,null,t))throw TypeError(r);var c=s.searchParams=new v,f=g(c);f.updateSearchParams(s.query),f.updateURL=function(){s.query=String(c)||null},o||(n.href=xe.call(n),n.origin=we.call(n),n.protocol=Se.call(n),n.username=Ee.call(n),n.password=Oe.call(n),n.host=ke.call(n),n.hostname=Pe.call(n),n.port=je.call(n),n.pathname=Re.call(n),n.search=Te.call(n),n.searchParams=Le.call(n),n.hash=Ce.call(n))},ye=be.prototype,xe=function(){var e=x(this),t=e.scheme,r=e.username,n=e.password,o=e.host,i=e.port,a=e.path,s=e.query,c=e.fragment,u=t+":";return null!==o?(u+="//",V(e)&&(u+=r+(n?":"+n:"")+"@"),u+=N(o),null!==i&&(u+=":"+i)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==s&&(u+="?"+s),null!==c&&(u+="#"+c),u},we=function(){var e=x(this),t=e.scheme,r=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&G(e)?t+"://"+N(e.host)+(null!==r?":"+r:""):"null"},Se=function(){return x(this).scheme+":"},Ee=function(){return x(this).username},Oe=function(){return x(this).password},ke=function(){var e=x(this),t=e.host,r=e.port;return null===t?"":null===r?N(t):N(t)+":"+r},Pe=function(){var e=x(this).host;return null===e?"":N(e)},je=function(){var e=x(this).port;return null===e?"":String(e)},Re=function(){var e=x(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Te=function(){var e=x(this).query;return e?"?"+e:""},Le=function(){return x(this).searchParams},Ce=function(){var e=x(this).fragment;return e?"#"+e:""},Ae=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(o&&s(ye,{href:Ae(xe,function(e){var t=x(this),r=String(e),n=ge(t,r);if(n)throw TypeError(n);g(t.searchParams).updateSearchParams(t.query)}),origin:Ae(we),protocol:Ae(Se,function(e){var t=x(this);ge(t,String(e)+":",Z)}),username:Ae(Ee,function(e){var t=x(this),r=p(String(e));if(!H(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=D(r[n],F)}}),password:Ae(Oe,function(e){var t=x(this),r=p(String(e));if(!H(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=D(r[n],F)}}),host:Ae(ke,function(e){var t=x(this);t.cannotBeABaseURL||ge(t,String(e),ae)}),hostname:Ae(Pe,function(e){var t=x(this);t.cannotBeABaseURL||ge(t,String(e),se)}),port:Ae(je,function(e){var t=x(this);H(t)||(""==(e=String(e))?t.port=null:ge(t,e,ce))}),pathname:Ae(Re,function(e){var t=x(this);t.cannotBeABaseURL||(t.path=[],ge(t,e+"",pe))}),search:Ae(Te,function(e){var t=x(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",ge(t,e,me)),g(t.searchParams).updateSearchParams(t.query)}),searchParams:Ae(Le),hash:Ae(Ce,function(e){var t=x(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",ge(t,e,ve)):t.fragment=null})}),c(ye,"toJSON",function(){return xe.call(this)},{enumerable:!0}),c(ye,"toString",function(){return xe.call(this)},{enumerable:!0}),a){var Me=a.createObjectURL,_e=a.revokeObjectURL;Me&&c(be,"createObjectURL",function(e){return Me.apply(a,arguments)}),_e&&c(be,"revokeObjectURL",function(e){return _e.apply(a,arguments)})}r(20)(be,"URL"),r(25)({global:!0,forced:!i,sham:!o},{URL:be})},function(e,t,r){"use strict";var n=r(69),o=r(14),i=r(55),a=o.set,s=o.getterFor("String Iterator");i(String,"String",function(e){a(this,{type:"String Iterator",string:String(e),index:0})},function(){var e,t=s(this),r=t.string,o=t.index;return o>=r.length?{value:void 0,done:!0}:(e=n(r,o,!0),t.index+=e.length,{value:e,done:!1})})},function(e,t,r){"use strict";var n=r(51),o=r(57),i=r(56),a=r(40),s=r(46),c=Object.assign;e.exports=!c||r(7)(function(){var e={},t={},r=Symbol();return e[r]=7,"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),7!=c({},e)[r]||"abcdefghijklmnopqrst"!=n(c({},t)).join("")})?function(e,t){for(var r=a(e),c=arguments.length,u=1,f=o.f,l=i.f;c>u;)for(var p,d=s(arguments[u++]),h=f?n(d).concat(f(d)):n(d),m=h.length,v=0;m>v;)l.call(d,p=h[v++])&&(r[p]=d[p]);return r}:c},function(e,t,r){"use strict";var n=r(27),o=r(40),i=r(63),a=r(62),s=r(34),c=r(99),u=r(28);e.exports=function(e){var t,r,f,l,p=o(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,g=0,b=u(p);if(v&&(m=n(m,h>2?arguments[2]:void 0,2)),null==b||d==Array&&a(b))for(r=new d(t=s(p.length));t>g;g++)c(r,g,v?m(p[g],g):p[g]);else for(l=b.call(p),r=new d;!(f=l.next()).done;g++)c(r,g,v?i(l,m,[f.value,g],!0):f.value);return r.length=g,r}},function(e,t,r){"use strict";var n=r(33),o=r(13),i=r(24);e.exports=function(e,t,r){var a=n(t);a in e?o.f(e,a,i(0,r)):e[a]=r}},function(e,t,r){"use strict";var n=/[^\0-\u007E]/,o=/[\u002E\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",a=Math.floor,s=String.fromCharCode,c=function(e){return e+22+75*(e<26)},u=function(e,t,r){var n=0;for(e=r?a(e/700):e>>1,e+=a(e/t);e>455;n+=36)e=a(e/35);return a(n+36*e/(e+38))},f=function(e){var t,r,n=[],o=(e=function(e){for(var t=[],r=0,n=e.length;r<n;){var o=e.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=e.charCodeAt(r++);56320==(64512&i)?t.push(((1023&o)<<10)+(1023&i)+65536):(t.push(o),r--)}else t.push(o)}return t}(e)).length,f=128,l=0,p=72;for(t=0;t<e.length;t++)(r=e[t])<128&&n.push(s(r));var d=n.length,h=d;for(d&&n.push("-");h<o;){var m=2147483647;for(t=0;t<e.length;t++)(r=e[t])>=f&&r<m&&(m=r);var v=h+1;if(m-f>a((2147483647-l)/v))throw RangeError(i);for(l+=(m-f)*v,f=m,t=0;t<e.length;t++){if((r=e[t])<f&&++l>2147483647)throw RangeError(i);if(r==f){for(var g=l,b=36;;b+=36){var y=b<=p?1:b>=p+26?26:b-p;if(g<y)break;var x=g-y,w=36-y;n.push(s(c(y+x%w))),g=a(x/w)}n.push(s(c(g))),p=u(l,v,h==d),l=0,++h}}++l,++f}return n.join("")};e.exports=function(e){var t,r,i=[],a=e.toLowerCase().replace(o,".").split(".");for(t=0;t<a.length;t++)r=a[t],i.push(n.test(r)?"xn--"+f(r):r);return i.join(".")}},function(e,t,r){"use strict";r(15);var n=r(70),o=r(19),i=r(67),a=r(59),s=r(14),c=r(42),u=r(5),f=r(27),l=r(4),p=r(9),d=r(102),h=r(28),m=r(3)("iterator"),v=s.set,g=s.getterFor("URLSearchParams"),b=s.getterFor("URLSearchParamsIterator"),y=/\+/g,x=Array(4),w=function(e){return x[e-1]||(x[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},S=function(e){try{return decodeURIComponent(e)}catch(t){return e}},E=function(e){for(var t=e.replace(y," "),r=4;r;)t=t.replace(w(r--),S);return t},O=/[!'()~]|%20/g,k={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},P=function(e){return k[e]},j=function(e){return encodeURIComponent(e).replace(O,P)},R=function(e,t){if(t)for(var r,n,o=t.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),e.push({key:E(n.shift()),value:E(n.join("="))}));return e},T=function(e){this.entries.length=0,R(this.entries,e)},L=function(e,t){if(e<t)throw TypeError("Not enough arguments")},C=a(function(e,t){v(this,{type:"URLSearchParamsIterator",iterator:d(g(e).entries),kind:t})},"Iterator",function(){var e=b(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r}),A=function(){c(this,A,"URLSearchParams");var e,t,r,n,o,i,a,s=arguments.length>0?arguments[0]:void 0,f=[];if(v(this,{type:"URLSearchParams",entries:f,updateURL:null,updateSearchParams:T}),void 0!==s)if(p(s))if("function"==typeof(e=h(s)))for(t=e.call(s);!(r=t.next()).done;){if((o=(n=d(l(r.value))).next()).done||(i=n.next()).done||!n.next().done)throw TypeError("Expected sequence with length 2");f.push({key:o.value+"",value:i.value+""})}else for(a in s)u(s,a)&&f.push({key:a,value:s[a]+""});else R(f,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},M=A.prototype;i(M,{append:function(e,t){L(arguments.length,2);var r=g(this);r.entries.push({key:e+"",value:t+""}),r.updateURL&&r.updateURL()},delete:function(e){L(arguments.length,1);for(var t=g(this),r=t.entries,n=e+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;t.updateURL&&t.updateURL()},get:function(e){L(arguments.length,1);for(var t=g(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){L(arguments.length,1);for(var t=g(this).entries,r=e+"",n=[],o=0;o<t.length;o++)t[o].key===r&&n.push(t[o].value);return n},has:function(e){L(arguments.length,1);for(var t=g(this).entries,r=e+"",n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){L(arguments.length,1);for(var r,n=g(this),o=n.entries,i=!1,a=e+"",s=t+"",c=0;c<o.length;c++)(r=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,r.value=s));i||o.push({key:a,value:s}),n.updateURL&&n.updateURL()},sort:function(){var e,t,r,n=g(this),o=n.entries,i=o.slice();for(o.length=0,t=0;t<i.length;t++){for(e=i[t],r=0;r<t;r++)if(o[r].key>e.key){o.splice(r,0,e);break}r===t&&o.push(e)}n.updateURL&&n.updateURL()},forEach:function(e){for(var t,r=g(this).entries,n=f(e,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((t=r[o++]).value,t.key,this)},keys:function(){return new C(this,"keys")},values:function(){return new C(this,"values")},entries:function(){return new C(this,"entries")}},{enumerable:!0}),o(M,m,M.entries),o(M,"toString",function(){for(var e,t=g(this).entries,r=[],n=0;n<t.length;)e=t[n++],r.push(j(e.key)+"="+j(e.value));return r.join("&")},{enumerable:!0}),r(20)(A,"URLSearchParams"),r(25)({global:!0,forced:!n},{URLSearchParams:A}),e.exports={URLSearchParams:A,getState:g}},function(e,t,r){var n=r(4),o=r(28);e.exports=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(29),a=r.n(i);var s=r(11),c=r.n(s),u=o.a.createContext(null);var f=function(e){e()},l=function(){return f},p=null,d={notify:function(){}};var h=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=d,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t,r;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=l(),t=[],r=[],{clear:function(){r=p,t=p},notify:function(){var n=t=r;e(function(){for(var e=0;e<n.length;e++)n[e]()})},get:function(){return r},subscribe:function(e){var n=!0;return r===t&&(r=t.slice()),r.push(e),function(){n&&t!==p&&(n=!1,r===t&&(r=t.slice()),r.splice(r.indexOf(e),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=d)},e}(),m=function(e){var t,r;function n(t){var r;r=e.call(this,t)||this;var n=t.store;r.notifySubscribers=r.notifySubscribers.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));var o=new h(n);return o.onStateChange=r.notifySubscribers,r.state={store:n,subscription:o},r.previousState=n.getState(),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.componentDidMount=function(){this._isMounted=!0,this.state.subscription.trySubscribe(),this.previousState!==this.props.store.getState()&&this.state.subscription.notifyNestedSubs()},i.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this.state.subscription.tryUnsubscribe(),this._isMounted=!1},i.componentDidUpdate=function(e){if(this.props.store!==e.store){this.state.subscription.tryUnsubscribe();var t=new h(this.props.store);t.onStateChange=this.notifySubscribers,this.setState({store:this.props.store,subscription:t})}},i.notifySubscribers=function(){this.state.subscription.notifyNestedSubs()},i.render=function(){var e=this.props.context||u;return o.a.createElement(e.Provider,{value:this.state},this.props.children)},n}(n.Component);m.propTypes={store:c.a.shape({subscribe:c.a.func.isRequired,dispatch:c.a.func.isRequired,getState:c.a.func.isRequired}),context:c.a.object,children:c.a.any};var v=m;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var y=r(44),x=r.n(y),w=r(21),S=r.n(w),E=r(43),O=[],k=[null,null];function P(e,t){var r=e[1];return[t.payload,r+1]}var j=function(){return[null,0]},R="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function T(e,t){void 0===t&&(t={});var r=t,i=r.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=r.methodName,c=void 0===s?"connectAdvanced":s,f=r.renderCountProp,l=void 0===f?void 0:f,p=r.shouldHandleStateChanges,d=void 0===p||p,m=r.storeKey,v=void 0===m?"store":m,y=r.withRef,w=void 0!==y&&y,T=r.forwardRef,L=void 0!==T&&T,C=r.context,A=void 0===C?u:C,M=b(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);S()(void 0===l,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),S()(!w,"withRef is removed. To access the wrapped instance, use a ref on the connected component");S()("store"===v,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var _=A;return function(t){var r=t.displayName||t.name||"Component",i=a(r),s=g({},M,{getDisplayName:a,methodName:c,renderCountProp:l,shouldHandleStateChanges:d,storeKey:v,displayName:i,wrappedComponentName:r,WrappedComponent:t}),u=M.pure;var f=u?n.useMemo:function(e){return e()};function p(r){var a=Object(n.useMemo)(function(){return[r.context,r.forwardedRef,b(r,["context","forwardedRef"])]},[r]),c=a[0],u=a[1],l=a[2],p=Object(n.useMemo)(function(){return c&&c.Consumer&&Object(E.isContextConsumer)(o.a.createElement(c.Consumer,null))?c:_},[c,_]),m=Object(n.useContext)(p),v=Boolean(r.store),y=Boolean(m)&&Boolean(m.store);S()(v||y,'Could not find "store" in the context of "'+i+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+i+" in connect options.");var x=r.store||m.store,w=Object(n.useMemo)(function(){return function(t){return e(t.dispatch,s)}(x)},[x]),T=Object(n.useMemo)(function(){if(!d)return k;var e=new h(x,v?null:m.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[x,v,m]),L=T[0],C=T[1],A=Object(n.useMemo)(function(){return v?m:g({},m,{subscription:L})},[v,m,L]),M=Object(n.useReducer)(P,O,j),I=M[0][0],N=M[1];if(I&&I.error)throw I.error;var U=Object(n.useRef)(),q=Object(n.useRef)(l),B=Object(n.useRef)(),F=Object(n.useRef)(!1),D=f(function(){return B.current&&l===q.current?B.current:w(x.getState(),l)},[x,I,l]);R(function(){q.current=l,U.current=D,F.current=!1,B.current&&(B.current=null,C())}),R(function(){if(d){var e=!1,t=null,r=function(){if(!e){var r,n,o=x.getState();try{r=w(o,q.current)}catch(e){n=e,t=e}n||(t=null),r===U.current?F.current||C():(U.current=r,B.current=r,F.current=!0,N({type:"STORE_UPDATED",payload:{latestStoreState:o,error:n}}))}};L.onStateChange=r,L.trySubscribe(),r();return function(){if(e=!0,L.tryUnsubscribe(),t)throw t}}},[x,L,w]);var z=Object(n.useMemo)(function(){return o.a.createElement(t,g({},D,{ref:u}))},[u,t,D]);return Object(n.useMemo)(function(){return d?o.a.createElement(p.Provider,{value:A},z):z},[p,z,A])}var m=u?o.a.memo(p):p;if(m.WrappedComponent=t,m.displayName=i,L){var y=o.a.forwardRef(function(e,t){return o.a.createElement(m,g({},e,{forwardedRef:t}))});return y.displayName=i,y.WrappedComponent=t,x()(y,t)}return x()(m,t)}}var L=Object.prototype.hasOwnProperty;function C(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function A(e,t){if(C(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!L.call(t,r[o])||!C(e[r[o]],t[r[o]]))return!1;return!0}var M=r(6);function _(e){return function(t,r){var n=e(t,r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function I(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function N(e,t){return function(t,r){r.displayName;var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=I(e);var o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=I(o),o=n(t,r)),o},n}}var U=[function(e){return"function"==typeof e?N(e):void 0},function(e){return e?void 0:_(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?_(function(t){return Object(M.bindActionCreators)(e,t)}):void 0}];var q=[function(e){return"function"==typeof e?N(e):void 0},function(e){return e?void 0:_(function(){return{}})}];function B(e,t,r){return g({},r,e,t)}var F=[function(e){return"function"==typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,i=r.areMergedPropsEqual,a=!1;return function(t,r,s){var c=e(t,r,s);return a?o&&i(c,n)||(n=c):(a=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return B}}];function D(e,t,r,n){return function(o,i){return r(e(o,i),t(n,i),i)}}function z(e,t,r,n,o){var i,a,s,c,u,f=o.areStatesEqual,l=o.areOwnPropsEqual,p=o.areStatePropsEqual,d=!1;function h(o,d){var h,m,v=!l(d,a),g=!f(o,i);return i=o,a=d,v&&g?(s=e(i,a),t.dependsOnOwnProps&&(c=t(n,a)),u=r(s,c,a)):v?(e.dependsOnOwnProps&&(s=e(i,a)),t.dependsOnOwnProps&&(c=t(n,a)),u=r(s,c,a)):g?(h=e(i,a),m=!p(h,s),s=h,m&&(u=r(s,c,a)),u):u}return function(o,f){return d?h(o,f):(s=e(i=o,a=f),c=t(n,a),u=r(s,c,a),d=!0,u)}}function G(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,i=b(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=r(e,i),s=n(e,i),c=o(e,i);return(i.pure?z:D)(a,s,c,e,i)}function V(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function H(e,t){return e===t}var W,$,Y,K,Z,X,J,Q,ee,te,re,ne,oe,ie=(Y=($=void 0===W?{}:W).connectHOC,K=void 0===Y?T:Y,Z=$.mapStateToPropsFactories,X=void 0===Z?q:Z,J=$.mapDispatchToPropsFactories,Q=void 0===J?U:J,ee=$.mergePropsFactories,te=void 0===ee?F:ee,re=$.selectorFactory,ne=void 0===re?G:re,function(e,t,r,n){void 0===n&&(n={});var o=n,i=o.pure,a=void 0===i||i,s=o.areStatesEqual,c=void 0===s?H:s,u=o.areOwnPropsEqual,f=void 0===u?A:u,l=o.areStatePropsEqual,p=void 0===l?A:l,d=o.areMergedPropsEqual,h=void 0===d?A:d,m=b(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),v=V(e,X,"mapStateToProps"),y=V(t,Q,"mapDispatchToProps"),x=V(r,te,"mergeProps");return K(ne,g({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:v,initMapDispatchToProps:y,initMergeProps:x,pure:a,areStatesEqual:c,areOwnPropsEqual:f,areStatePropsEqual:p,areMergedPropsEqual:h},m))});oe=i.unstable_batchedUpdates,f=oe;r(15),r(41);var ae=r(45);function se(e){return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}const ce=()=>{return function(e){let t=e.length;for(;t>0;){let r=Math.floor(Math.random()*t),n=e[--t];e[t]=e[r],e[r]=n}return e}([...ae.map(e=>({name:e.name,title:e.title})),...ae.map(e=>({name:e.name,path:`static/logos/${e.name}.png`}))]).map((e,t)=>({...e,id:t+1}))};let ue={data:ce(),reveals:[],hits:[],playing:!1,win:!1,alert:!1,finishAlert:!1};const fe=(e,t)=>{const[r=null,n=null]=e;if(r&&n){return t.find(e=>e.id===r).name===t.find(e=>e.id===n).name}return!1};var le=(e=ue,t={type:"",data:{}})=>{const{reveals:r,hits:n,data:o}=e;switch(t.type){case"SET_REVEAL":const{id:i}=t.data;return r.push(i),r.length>=2&&(r.length>2&&r.shift(),fe(r,o)&&(n.push(...r),r.length=0)),{...e,reveals:[...r],hits:n};case"RESET_REVEAL":return{...e,reveals:[]};case"SET_WIN":return{...e,win:!0,playing:!1,finishAlert:!0};case"SET_ALERT":const{alert:a}=t.data;return{...e,alert:a};case"SET_FINISH_ALERT":const{finishAlert:s}=t.data;return{...e,finishAlert:s};case"SET_START":return{data:ce(),reveals:[],hits:[],playing:!0,win:!1,finishAlert:!1};default:return{...e}}};var pe=Object(M.createStore)(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());const de=(e=!0)=>({type:"SET_ALERT",data:{alert:e}}),he=(e=!0)=>({type:"SET_FINISH_ALERT",data:{finishAlert:e}}),me=()=>({type:"SET_START"});var ve=r(1);ve.keyframes`
 from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
`,ve.keyframes`
from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
`,ve.keyframes`
from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`,ve.keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`,ve.keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;const ge=ve.keyframes`
    from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`,be=ve.keyframes`
   from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`,ye=(ve.keyframes`
    from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`,ve.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #0005;
  .alert {
    /* max-width: 12rem; */
    background: rgb(100, 206, 170);
    padding: 1.4rem 1.8rem;
    border-radius: 0.4rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${ge} 1s;
    .header {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 1.5rem;
    }
    .content {
      font-size: 1rem;
      padding-bottom: 1rem;
      .start {
        border: 1px solid #ddd5;
        border-radius: 0.6rem;
        padding: 0.4rem 0.8rem;
        background: #ffed66;
        color: #ff5e5b;
        font-weight: 800;
      }
    }
    .close {
      position: absolute;
      top: -0.6rem;
      right: -0.6rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid #fff;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1rem;
      background: #333;
      cursor: pointer;
    }
  }
`);var xe=ie(({alert:e})=>({isVisible:e}),e=>({setAlert:Object(M.bindActionCreators)(de,e)}))(({isVisible:e,setAlert:t})=>{return Object(n.useEffect)(()=>{e&&window.scrollTo({top:100,left:100,behavior:"smooth"})},[e]),e?o.a.createElement(ye,null,o.a.createElement("section",{className:"alert"},o.a.createElement("h1",{className:"header"},"☝️☝️☝️"),o.a.createElement("p",{className:"content"},"click ",o.a.createElement("span",{className:"start"},"START")," button first!"),o.a.createElement("div",{className:"close",onClick:()=>{t(!1)}},"x"))):null});const we=ve.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #0005;
  .alert {
    /* max-width: 12rem; */
    background: rgb(100, 206, 170);
    padding: 1.4rem 1.8rem;
    border-radius: 0.4rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${be} 1s;
    /* animation-delay: 1s; */
    .header {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 1.5rem;
    }
    .content {
      font-size: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      line-height: 2.4;
      .start {
        border: 1px solid #ddd5;
        border-radius: 0.6rem;
        padding: 0.4rem 0.8rem;
        background: #ffed66;
        color: #ff5e5b;
        font-weight: 800;
      }
    }
    .close {
      position: absolute;
      top: -0.6rem;
      right: -0.6rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid #fff;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1rem;
      background: #333;
      cursor: pointer;
    }
  }
`;var Se=ie(({finishAlert:e})=>({isVisible:e}),e=>({setFinishAlert:Object(M.bindActionCreators)(he,e)}))(({isVisible:e,setFinishAlert:t})=>{return Object(n.useEffect)(()=>{e&&window.scrollTo({top:100,left:100,behavior:"smooth"})},[e]),e?o.a.createElement(we,null,o.a.createElement("section",{className:"alert"},o.a.createElement("h1",{className:"header"},"👍👍👍"),o.a.createElement("p",{className:"content"},o.a.createElement("span",null,"Greeeeeeeat Job!"),o.a.createElement("span",null,"You can click ",o.a.createElement("span",{className:"start"},"START")," to try again!")),o.a.createElement("div",{className:"close",onClick:()=>{t(!1)}},"x"))):null});const Ee=ve.default.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 0;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.8rem;
  }
`;var Oe=()=>o.a.createElement(Ee,null,o.a.createElement("h1",null,"🤔 FLMG 🤔"),o.a.createElement("h2",null,"Frontend Logo Memory Game"));const ke=ve.default.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0;
  h1 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.6rem;
  }
`;var Pe=()=>o.a.createElement(ke,null,o.a.createElement("h1",null,"FLMG © Tristan"),o.a.createElement("h2",null,"Inspired By"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/davinci/pen/yVZapY"},"Brainymo")));const je=ve.default.button`
  user-select: none;
  display: block;
  margin: 1rem auto;
  border: none;
  background: #ffed66;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: #ff5e5b;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 3px 0 #ff5e5b;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 0 #ff5e5b;
  }
`;var Re=ie(e=>{const{playing:t,win:r}=e;return{playing:t,win:r}},e=>({setStart:Object(M.bindActionCreators)(me,e)}))(({playing:e,win:t,setStart:r})=>{return o.a.createElement(je,{onClick:()=>{r()}},e||t?"restart":"start")});const Te=ve.default.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1rem;
  left: 0.2rem;
  font-size: 0.8rem;
  background: #fff4;
  padding: 0.6rem;
  > p {
    margin-bottom: 0.5rem;
  }
`,Le=()=>Number(localStorage.getItem("BEST_TIME")||0);let Ce=null;var Ae=ie(e=>{const{playing:t,win:r}=e;return{playing:t,win:r}})(({playing:e,win:t})=>{const r=Le(),[i,a]=Object(n.useState)(0),[s,c]=Object(n.useState)(r);return Object(n.useEffect)(()=>{e?Ce=setInterval(()=>{a(e=>e+1)},1e3):clearInterval(Ce)},[e]),Object(n.useEffect)(()=>{if(t&&0!==i){clearInterval(Ce);let e=Le();(0===e||e>i)&&(c(i),localStorage.setItem("BEST_TIME",i)),a(0)}},[t,i]),o.a.createElement(Te,null,e?o.a.createElement("p",{className:"currTime"},se(i)):null,o.a.createElement("p",{className:"bestTime"},"Best Time: ",se(s)))});const Me=ve.default.a`
  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  .octo-arm {
    transform-origin: 130px 106px;
  }
  .svg {
    fill: #64ceaa;
    color: #fff;
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover .octo-arm {
      animation: none;
    }
    .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;var _e=()=>o.a.createElement(Me,{href:"https://github.com/zerosoul/frontend-memo-game","aria-label":"View source on GitHub"},o.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",className:"svg","aria-hidden":"true"},o.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),o.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),o.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})));const Ie=o.a.lazy(()=>"./containers/Cards"),Ne=o.a.lazy(()=>"./components/ParticlesBackground");var Ue=()=>o.a.createElement(v,{store:pe},o.a.createElement(_e,null),o.a.createElement(Se,null),o.a.createElement(xe,null),o.a.createElement(Ne,null),o.a.createElement(Ae,null),o.a.createElement(Oe,null),o.a.createElement(Re,null),o.a.createElement(Ie,null),o.a.createElement(Pe,null)),qe=r(71),Be=r.n(qe);var Fe=ve.createGlobalStyle`
  ${Be.a}

  *{
    box-sizing:border-box;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    margin:0 auto;
    min-height:100vh;
    position: relative;
    background:linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%);

  }

  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 22px;
      }
  }
`;r(84),r(95);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe,null),o.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}]);