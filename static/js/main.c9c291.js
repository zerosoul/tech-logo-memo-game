!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)o=i[c],r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={main:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"static/js/"+({}[e]||e)+"."+{0:"3ff3e6",1:"75b321",2:"e639f4",3:"ee044f",4:"97581f",5:"a9b0a2"}[e]+".chunk.js"}(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.type=o,s.request=i,n[1](s)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/frontend-memo-game/",o.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=a;o(o.s=134)}([function(e,t,n){e.exports=n(8)(0)},function(e,t,n){e.exports=n(8)(15)},function(e,t,n){e.exports=n(8)(12)},function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l});var r=n(68),o=n(69),i=n(70),a=n(71);const c={en:{title:"English",data:i},zh:{title:"中文",data:a}},s={fe:{type:"fe",data:r},be:{type:"be",data:o}},u={title_vs_logo:{type:"title_vs_logo"},logo_vs_logo:{type:"logo_vs_logo"}},l={easy:3,medium:2,hard:1}},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c});var r=n(3);const o=(e=[],t="title_vs_logo")=>{let n=[];return a([...e.map(e=>{const{name:r}=e;return"title_vs_logo"===t?-1===n.indexOf(r)?(n.push(r),{...e,type:"title"}):{...e,type:"logo"}:"logo_vs_logo"===t?{...e,type:"logo"}:e})])},i=(e=r.d.be,t="easy")=>{const{type:n,data:o}=e;if(!o.length)return;let i=a([...o]),c=i.length/r.b[t],s=(i=i.slice(0,c)).map(e=>({name:e.name,title:e.title,path:`static/logos/${n}/${e.name}.png`,type:"title"})),u=i.map(e=>({name:e.name,path:`static/logos/${n}/${e.name}.png`,title:e.title,type:"logo"}));return a([...a(s),...u]).map((e,t)=>({...e,id:t+1}))};function a(e){let t=e.length;for(;t>0;){let n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e}function c(e,t=!1){return t?`${String(Math.floor(e/60))}分${String(e%60)}秒`:`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=o.a.createContext(null);var s=function(e){e()},u=function(){return s},l=null,f={notify:function(){}};var d=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=f,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=u(),t=[],n=[],{clear:function(){n=l,t=l},notify:function(){var r=t=n;e(function(){for(var e=0;e<r.length;e++)r[e]()})},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==l&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=f)},e}(),p=function(e){var t,n;function r(t){var n;n=e.call(this,t)||this;var r=t.store;n.notifySubscribers=n.notifySubscribers.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));var o=new d(r);return o.onStateChange=n.notifySubscribers,n.state={store:r,subscription:o},n.previousState=r.getState(),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){this._isMounted=!0,this.state.subscription.trySubscribe(),this.previousState!==this.props.store.getState()&&this.state.subscription.notifyNestedSubs()},i.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this.state.subscription.tryUnsubscribe(),this._isMounted=!1},i.componentDidUpdate=function(e){if(this.props.store!==e.store){this.state.subscription.tryUnsubscribe();var t=new d(this.props.store);t.onStateChange=this.notifySubscribers,this.setState({store:this.props.store,subscription:t})}},i.notifySubscribers=function(){this.state.subscription.notifyNestedSubs()},i.render=function(){var e=this.props.context||c;return o.a.createElement(e.Provider,{value:this.state},this.props.children)},r}(r.Component);p.propTypes={store:a.a.shape({subscribe:a.a.func.isRequired,dispatch:a.a.func.isRequired,getState:a.a.func.isRequired}),context:a.a.object,children:a.a.any};var m=p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var b=n(48),y=n.n(b),v=n(24),A=n.n(v),w=n(46),E=[],x=[null,null];function O(e,t){var n=e[1];return[t.payload,n+1]}var S=function(){return[null,0]},k="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function j(e,t){void 0===t&&(t={});var n=t,i=n.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=n.methodName,u=void 0===s?"connectAdvanced":s,l=n.renderCountProp,f=void 0===l?void 0:l,p=n.shouldHandleStateChanges,m=void 0===p||p,b=n.storeKey,v=void 0===b?"store":b,j=n.withRef,T=void 0!==j&&j,P=n.forwardRef,C=void 0!==P&&P,M=n.context,N=void 0===M?c:M,L=g(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);A()(void 0===f,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),A()(!T,"withRef is removed. To access the wrapped instance, use a ref on the connected component");A()("store"===v,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var I=N;return function(t){var n=t.displayName||t.name||"Component",i=a(n),c=h({},L,{getDisplayName:a,methodName:u,renderCountProp:f,shouldHandleStateChanges:m,storeKey:v,displayName:i,wrappedComponentName:n,WrappedComponent:t}),s=L.pure;var l=s?r.useMemo:function(e){return e()};function p(n){var a=Object(r.useMemo)(function(){return[n.context,n.forwardedRef,g(n,["context","forwardedRef"])]},[n]),s=a[0],u=a[1],f=a[2],p=Object(r.useMemo)(function(){return s&&s.Consumer&&Object(w.isContextConsumer)(o.a.createElement(s.Consumer,null))?s:I},[s,I]),b=Object(r.useContext)(p),y=Boolean(n.store),v=Boolean(b)&&Boolean(b.store);A()(y||v,'Could not find "store" in the context of "'+i+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+i+" in connect options.");var j=n.store||b.store,T=Object(r.useMemo)(function(){return function(t){return e(t.dispatch,c)}(j)},[j]),P=Object(r.useMemo)(function(){if(!m)return x;var e=new d(j,y?null:b.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[j,y,b]),C=P[0],M=P[1],N=Object(r.useMemo)(function(){return y?b:h({},b,{subscription:C})},[y,b,C]),L=Object(r.useReducer)(O,E,S),R=L[0][0],_=L[1];if(R&&R.error)throw R.error;var z=Object(r.useRef)(),D=Object(r.useRef)(f),F=Object(r.useRef)(),H=Object(r.useRef)(!1),G=l(function(){return F.current&&f===D.current?F.current:T(j.getState(),f)},[j,R,f]);k(function(){D.current=f,z.current=G,H.current=!1,F.current&&(F.current=null,M())}),k(function(){if(m){var e=!1,t=null,n=function(){if(!e){var n,r,o=j.getState();try{n=T(o,D.current)}catch(e){r=e,t=e}r||(t=null),n===z.current?H.current||M():(z.current=n,F.current=n,H.current=!0,_({type:"STORE_UPDATED",payload:{latestStoreState:o,error:r}}))}};C.onStateChange=n,C.trySubscribe(),n();return function(){if(e=!0,C.tryUnsubscribe(),t)throw t}}},[j,C,T]);var q=Object(r.useMemo)(function(){return o.a.createElement(t,h({},G,{ref:u}))},[u,t,G]);return Object(r.useMemo)(function(){return m?o.a.createElement(p.Provider,{value:N},q):q},[p,q,N])}var b=s?o.a.memo(p):p;if(b.WrappedComponent=t,b.displayName=i,C){var j=o.a.forwardRef(function(e,t){return o.a.createElement(b,h({},e,{forwardedRef:t}))});return j.displayName=i,j.WrappedComponent=t,y()(j,t)}return y()(b,t)}}var T=Object.prototype.hasOwnProperty;function P(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function C(e,t){if(P(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!T.call(t,n[o])||!P(e[n[o]],t[n[o]]))return!1;return!0}var M=n(7);function N(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function L(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function I(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=L(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=L(o),o=r(t,n)),o},r}}var R=[function(e){return"function"==typeof e?I(e):void 0},function(e){return e?void 0:N(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?N(function(t){return Object(M.a)(e,t)}):void 0}];var _=[function(e){return"function"==typeof e?I(e):void 0},function(e){return e?void 0:N(function(){return{}})}];function z(e,t,n){return h({},n,e,t)}var D=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,a=!1;return function(t,n,c){var s=e(t,n,c);return a?o&&i(s,r)||(r=s):(a=!0,r=s),r}}}(e):void 0},function(e){return e?void 0:function(){return z}}];function F(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function H(e,t,n,r,o){var i,a,c,s,u,l=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,p=!1;function m(o,p){var m,h,g=!f(p,a),b=!l(o,i);return i=o,a=p,g&&b?(c=e(i,a),t.dependsOnOwnProps&&(s=t(r,a)),u=n(c,s,a)):g?(e.dependsOnOwnProps&&(c=e(i,a)),t.dependsOnOwnProps&&(s=t(r,a)),u=n(c,s,a)):b?(m=e(i,a),h=!d(m,c),c=m,h&&(u=n(c,s,a)),u):u}return function(o,l){return p?m(o,l):(c=e(i=o,a=l),s=t(r,a),u=n(c,s,a),p=!0,u)}}function G(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=g(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),c=r(e,i),s=o(e,i);return(i.pure?H:F)(a,c,s,e,i)}function q(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function W(e,t){return e===t}var U,B,V,Y,Q,J,K,Z,X,$,ee,te,ne,re=(V=(B=void 0===U?{}:U).connectHOC,Y=void 0===V?j:V,Q=B.mapStateToPropsFactories,J=void 0===Q?_:Q,K=B.mapDispatchToPropsFactories,Z=void 0===K?R:K,X=B.mergePropsFactories,$=void 0===X?D:X,ee=B.selectorFactory,te=void 0===ee?G:ee,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,a=void 0===i||i,c=o.areStatesEqual,s=void 0===c?W:c,u=o.areOwnPropsEqual,l=void 0===u?C:u,f=o.areStatePropsEqual,d=void 0===f?C:f,p=o.areMergedPropsEqual,m=void 0===p?C:p,b=g(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),y=q(e,J,"mapStateToProps"),v=q(t,Z,"mapDispatchToProps"),A=q(n,$,"mergeProps");return Y(te,h({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:y,initMapDispatchToProps:v,initMergeProps:A,pure:a,areStatesEqual:s,areOwnPropsEqual:l,areStatePropsEqual:d,areMergedPropsEqual:m},b))}),oe=n(31);n.d(t,"a",function(){return m}),n.d(t,"b",function(){return re}),ne=oe.unstable_batchedUpdates,s=ne},function(e,t){var n=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var r=n(49),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,u=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function m(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1)}}}function g(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,u=s(u,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){(0,t[n])()}return e}return g({type:i.INIT}),(o={dispatch:g,subscribe:h,getState:m,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,g({type:i.REPLACE})}})[r.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(m())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function s(e,t){return function(){return t(e.apply(this,arguments))}}function u(e,t){if("function"==typeof e)return s(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=s(a,t))}return r}},function(e,t){e.exports=react_c6740aed746dca4d39be},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(9),o=n(6),i=n(57),a=n(17),c=n(10),s=function(e,t,n){var u,l,f,d=e&s.F,p=e&s.G,m=e&s.S,h=e&s.P,g=e&s.B,b=e&s.W,y=p?o:o[t]||(o[t]={}),v=y.prototype,A=p?r:m?r[t]:(r[t]||{}).prototype;for(u in p&&(n=t),n)(l=!d&&A&&void 0!==A[u])&&c(y,u)||(f=l?A[u]:n[u],y[u]=p&&"function"!=typeof A[u]?n[u]:g&&l?i(f,r):b&&A[u]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[u]=f,e&s.R&&v&&!v[u]&&a(v,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var r=n(23),o=n(58),i=n(39),a=Object.defineProperty;t.f=n(13)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){"use strict";(function(t){var r=n(86);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function o(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function i(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var a=n(87),c=Object.prototype.hasOwnProperty,s=Array.prototype.slice,u="foo"===function(){}.name;function l(e){return Object.prototype.toString.call(e)}function f(e){return!i(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var d=e.exports=y,p=/\s*function\s+([^\(\s]*)\s*/;function m(e){if(a.isFunction(e)){if(u)return e.name;var t=e.toString().match(p);return t&&t[1]}}function h(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(u||!a.isFunction(e))return a.inspect(e);var t=m(e);return"[Function"+(t?": "+t:"")+"]"}function b(e,t,n,r,o){throw new d.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function y(e,t){e||b(e,!0,t,"==",d.ok)}function v(e,t,n,r){if(e===t)return!0;if(i(e)&&i(t))return 0===o(e,t);if(a.isDate(e)&&a.isDate(t))return e.getTime()===t.getTime();if(a.isRegExp(e)&&a.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(f(e)&&f(t)&&l(e)===l(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var c=(r=r||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===r.expected.indexOf(t)||(r.actual.push(e),r.expected.push(t),function(e,t,n,r){if(null==e||null==t)return!1;if(a.isPrimitive(e)||a.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=A(e),i=A(t);if(o&&!i||!o&&i)return!1;if(o)return e=s.call(e),t=s.call(t),v(e,t,n);var c,u,l=x(e),f=x(t);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),u=l.length-1;u>=0;u--)if(l[u]!==f[u])return!1;for(u=l.length-1;u>=0;u--)if(c=l[u],!v(e[c],t[c],n,r))return!1;return!0}(e,t,n,r))}return n?e===t:e==t}function A(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function w(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function E(e,t,n,r){var o;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&b(o,n,"Missing expected exception"+r);var i="string"==typeof r,c=!e&&o&&!n;if((!e&&a.isError(o)&&i&&w(o,n)||c)&&b(o,n,"Got unwanted exception"+r),e&&o&&n&&!w(o,n)||!e&&o)throw o}d.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return h(g(e.actual),128)+" "+e.operator+" "+h(g(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||b;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,o=m(t),i=r.indexOf("\n"+o);if(i>=0){var a=r.indexOf("\n",i+1);r=r.substring(a+1)}this.stack=r}}},a.inherits(d.AssertionError,Error),d.fail=b,d.ok=y,d.equal=function(e,t,n){e!=t&&b(e,t,n,"==",d.equal)},d.notEqual=function(e,t,n){e==t&&b(e,t,n,"!=",d.notEqual)},d.deepEqual=function(e,t,n){v(e,t,!1)||b(e,t,n,"deepEqual",d.deepEqual)},d.deepStrictEqual=function(e,t,n){v(e,t,!0)||b(e,t,n,"deepStrictEqual",d.deepStrictEqual)},d.notDeepEqual=function(e,t,n){v(e,t,!1)&&b(e,t,n,"notDeepEqual",d.notDeepEqual)},d.notDeepStrictEqual=function e(t,n,r){v(t,n,!0)&&b(t,n,r,"notDeepStrictEqual",e)},d.strictEqual=function(e,t,n){e!==t&&b(e,t,n,"===",d.strictEqual)},d.notStrictEqual=function(e,t,n){e===t&&b(e,t,n,"!==",d.notStrictEqual)},d.throws=function(e,t,n){E(!0,e,t,n)},d.doesNotThrow=function(e,t,n){E(!1,e,t,n)},d.ifError=function(e){if(e)throw e},d.strict=r(function e(t,n){t||b(t,!0,n,"==",e)},d,{equal:d.strictEqual,deepEqual:d.deepStrictEqual,notEqual:d.notStrictEqual,notDeepEqual:d.notDeepStrictEqual}),d.strict.strict=d.strict;var x=Object.keys||function(e){var t=[];for(var n in e)c.call(e,n)&&t.push(n);return t}}).call(this,n(52))},function(e,t,n){"use strict";n.d(t,"h",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"l",function(){return i}),n.d(t,"k",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return s}),n.d(t,"i",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"j",function(){return p}),n.d(t,"g",function(){return m});const r=e=>({type:"SET_REVEAL",data:{id:e}}),o=()=>({type:"RESET_REVEAL"}),i=()=>({type:"SET_WIN",data:{}}),a=(e=0)=>({type:"SET_TIME_USED",data:{currTimeUsed:e}}),c=(e="en")=>({type:"SET_LANG",data:{locale:e}}),s=(e=1)=>({type:"SET_LEVEL",data:{level:e}}),u=(e="fe")=>({type:"SET_DATA_SRC",data:{src:e}}),l=(e="title_vs_logo")=>({type:"SET_PLAY_TYPE",data:{playType:e}}),f=(e=!0)=>({type:"SET_ALERT",data:{alert:e}}),d=(e=!0)=>({type:"SET_FINISH_ALERT",data:{finishAlert:e}}),p=()=>({type:"SET_START"}),m=()=>({type:"SET_RESET"})},function(e,t,n){var r=n(54),o=n(34);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(12),o=n(29);e.exports=n(13)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(37)("wks"),o=n(28),i=n(9).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(130),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){var r=n(53),o=n(38);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(18);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],l=0;(s=new Error(t.replace(/%s/g,function(){return u[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s});var r=n(2);r.keyframes`
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
`,r.keyframes`
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
`;const o=r.keyframes`
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
`,i=r.keyframes`
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
`,a=r.keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,c=r.keyframes`
   from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`,s=r.keyframes`
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
`},function(e,t,n){var r=n(34);e.exports=function(e){return Object(r(e))}},function(e,t){e.exports=!0},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){e.exports=n(8)(7)},function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(102)),o=a(n(113)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof o.default&&"symbol"===i(r.default)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":void 0===e?"undefined":i(e)}},function(e,t,n){e.exports={default:n(91),__esModule:!0}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(37)("keys"),o=n(28);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t,n){var r=n(6),o=n(9),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(27)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(18);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports={}},function(e,t,n){var r=n(23),o=n(107),i=n(38),a=n(36)("IE_PROTO"),c=function(){},s=function(){var e,t=n(59)("iframe"),r=i.length;for(t.style.display="none",n(108).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s.prototype[i[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(c.prototype=r(e),n=new c,c.prototype=null,n[a]=e):n=s(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(12).f,o=n(10),i=n(20)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){t.f=n(20)},function(e,t,n){var r=n(9),o=n(6),i=n(27),a=n(43),c=n(12).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){e.exports=n(8)(2)},function(e,t,n){var r,o,i;o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],a=!1,c=-1,s=void 0,u=void 0,l=function(e){return i.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},f=function(e){var t=e||window.event;return!!l(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},d=function(){setTimeout(function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)})};e.disableBodyScroll=function(e,r){if(o){if(!e)return;if(e&&!i.some(function(t){return t.targetElement===e})){var d={targetElement:e,options:r||{}};i=[].concat(t(i),[d]),e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,r,o,i;1===t.targetTouches.length&&(r=e,i=(n=t).targetTouches[0].clientY-c,!l(n.target)&&(r&&0===r.scrollTop&&0<i?f(n):(o=r)&&o.scrollHeight-o.scrollTop<=o.clientHeight&&i<0?f(n):n.stopPropagation()))},a||(document.addEventListener("touchmove",f,n?{passive:!1}:void 0),a=!0)}}else{m=r,setTimeout(function(){if(void 0===u){var e=!!m&&!0===m.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(u=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")});var p={targetElement:e,options:r||{}};i=[].concat(t(i),[p])}var m},e.clearAllBodyScrollLocks=function(){o?(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),a&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),a=!1),i=[],c=-1):(d(),i=[])},e.enableBodyScroll=function(e){if(o){if(!e)return;e.ontouchstart=null,e.ontouchmove=null,i=i.filter(function(t){return t.targetElement!==e}),a&&0===i.length&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),a=!1)}else 1===i.length&&i[0].targetElement===e?(d(),i=[]):i=i.filter(function(t){return t.targetElement!==e})}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";var r=n(46),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?a:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var o=p(n);o&&o!==m&&e(t,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=s(t),h=s(n),g=0;g<a.length;++g){var b=a[g];if(!(i[b]||r&&r[b]||h&&h[b]||c&&c[b])){var y=d(n,b);try{u(t,b,y)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";(function(e,r){var o,i=n(67);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(52),n(84)(e))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(32),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}},function(e,t,n){"use strict";var r=n(0),o=n.n(r);const i=n(2).default.div`
  display: flex;
  position: relative;
  .triangle {
    position: absolute;
    right: 0.4rem;
    top: 50%;
    margin-top: -0.4rem;
    font-size: 0.8rem;
    color: #bd6565;
  }
  select {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    padding-right: 1rem;
    /* text-transform: uppercase; */
    color: #bd6565;
    border: none;
    font-weight: 600;
    background: #feeb70;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 2rem;
    &[disabled] {
      color: #bba3a3;
    }
  }
`;t.a=({children:e})=>o.a.createElement(i,null,e,o.a.createElement("i",{className:"triangle"},"▿"))},function(e,t,n){e.exports=n(8)(21)},function(e,t,n){var r=n(10),o=n(16),i=n(93)(!1),a=n(36)("IE_PROTO");e.exports=function(e,t){var n,c=o(e),s=0,u=[];for(n in c)n!=a&&r(c,n)&&u.push(n);for(;t.length>s;)r(c,n=t[s++])&&(~i(u,n)||u.push(n));return u}},function(e,t,n){var r=n(55);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(11),o=n(6),i=n(19);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},function(e,t,n){var r=n(96);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){e.exports=!n(13)&&!n(19)(function(){return 7!=Object.defineProperty(n(59)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(18),o=n(9).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(10),o=n(26),i=n(36)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){"use strict";var r=n(27),o=n(11),i=n(62),a=n(17),c=n(40),s=n(106),u=n(42),l=n(60),f=n(20)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,m,h,g,b){s(n,t,m);var y,v,A,w=function(e){if(!d&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},E=t+" Iterator",x="values"==h,O=!1,S=e.prototype,k=S[f]||S["@@iterator"]||h&&S[h],j=k||w(h),T=h?x?w("entries"):j:void 0,P="Array"==t&&S.entries||k;if(P&&(A=l(P.call(new e)))!==Object.prototype&&A.next&&(u(A,E,!0),r||"function"==typeof A[f]||a(A,f,p)),x&&k&&"values"!==k.name&&(O=!0,j=function(){return k.call(this)}),r&&!b||!d&&!O&&S[f]||a(S,f,j),c[t]=j,c[E]=p,h)if(y={values:x?j:w("values"),keys:g?j:w("keys"),entries:T},b)for(v in y)v in S||i(S,v,y[v]);else o(o.P+o.F*(d||O),t,y);return y}},function(e,t,n){e.exports=n(17)},function(e,t,n){var r=n(53),o=n(38).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(30),o=n(29),i=n(16),a=n(39),c=n(10),s=n(58),u=Object.getOwnPropertyDescriptor;t.f=n(13)?u:function(e,t){if(e=i(e),t=a(t,!0),s)try{return u(e,t)}catch(e){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(2),a=n(5),c=n(4),s=n(73),u=n.n(s),l=n(74),f=n.n(l),d=n(1),p=n.n(d),m=n(14),h=n.n(m),g=n(33),b=n.n(g);function y(e){return"?"+b()(e).filter(function(t){return!!e[t]}).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}var v=n(75),A=n.n(v),w=n(76),E=n.n(w),x=n(77),O=n.n(x),S=n(50),k=n.n(S),j=n(78),T=n.n(j),P=n(21),C=n.n(P),M=n(79),N=n.n(M),L=n(32),I=n.n(L),R=n(80),_=n.n(R),z=function(e){return!!e&&("object"===(void 0===e?"undefined":I()(e))||"function"==typeof e)&&"function"==typeof e.then},D=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},F=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};var H=function(e){function t(){var e,n,r,o;E()(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return n=r=k()(this,(e=t.__proto__||A()(t)).call.apply(e,[this].concat(a))),r.onClick=function(e){var t=r.props,n=t.disabled,o=t.onClick,i=t.openWindow,a=t.beforeOnClick;if(!n){e.preventDefault();var c=r.link(),s=i?function(){return r.openWindow(c)}:function(){return o(c)};if(a){var u=a();z(u)?u.then(s):s()}else s()}},r.onKeyPress=function(e){"Enter"!==e.key&&13!==e.key&&" "!==e.key&&32!==e.key||r.onClick(e)},r.openWindow=function(e){var t=r.props,n=t.windowPosition,o=t.onShareWindowClose,i=t.windowWidth,a=t.windowHeight;!function(e,t,n){var r=t.height,o=void 0===r?400:r,i=t.width,a=void 0===i?550:i,c=N()(t,["height","width"]),s=C()({height:o,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},c),u=window.open(e,"",b()(s).map(function(e){return e+"="+s[e]}).join(", "));if(n)var l=window.setInterval(function(){try{(null===u||u.closed)&&(window.clearInterval(l),n(u))}catch(e){}},1e3)}(e,C()({height:a,width:i},"windowCenter"===n?D(i,a):F(i,a)),o)},o=n,k()(r,o)}return T()(t,e),O()(t,[{key:"link",value:function(){var e=this.props,t=e.url,n=e.opts;return(0,e.networkLink)(t,n)}},{key:"render",value:function(){var e=this.props,t=e.additionalProps,n=e.children,r=e.className,i=e.disabled,a=e.disabledStyle,c=e.network,s=e.role,u=e.style,l=e.tabIndex,f=_()("SocialMediaShareButton","SocialMediaShareButton--"+c,{"SocialMediaShareButton--disabled":!!i,disabled:!!i},r);return o.a.createElement("div",C()({"aria-label":c},t,{role:s,tabIndex:l,onClick:this.onClick,onKeyPress:this.onKeyPress,className:f,style:C()({},u,i?a:{})}),n)}}]),t}(r.PureComponent);H.propTypes={additionalProps:p.a.object,children:p.a.node,className:p.a.string,disabled:p.a.bool,disabledStyle:p.a.object,network:p.a.string.isRequired,networkLink:p.a.func.isRequired,onClick:p.a.func,opts:p.a.object,openWindow:p.a.bool,url:p.a.string.isRequired,role:p.a.string,style:p.a.object,windowWidth:p.a.number,windowHeight:p.a.number,windowPosition:p.a.oneOf(["windowCenter","screenCenter"]),beforeOnClick:p.a.func,onShareWindowClose:p.a.func,tabIndex:p.a.oneOfType([p.a.string,p.a.number])},H.defaultProps={disabledStyle:{opacity:.6},openWindow:!0,role:"button",windowPosition:"windowCenter",tabIndex:"0"};var G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return{}},r=arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=function(r){return o.a.createElement(H,C()({},r,{network:e,networkLink:t,opts:n(r)}))};return a.propTypes=r,a.defaultProps=i,a};var q=G("weibo",function(e,t){var n=t.title,r=t.image;return h()(e,"weibo.url"),"http://service.weibo.com/share/share.php"+y({url:e,title:n,pic:r})},function(e){return{title:e.title,image:e.image}},{title:p.a.string,image:p.a.string},{windowWidth:650,windowHeight:350,windowPosition:"screenCenter"});var W=G("facebook",function(e,t){var n=t.quote,r=t.hashtag;return h()(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+y({u:e,quote:n,hashtag:r})},function(e){return e.picture,e.title,e.description,{quote:e.quote,hashtag:e.hashtag}},{quote:p.a.string,hashtag:p.a.string},{windowWidth:550,windowHeight:400});function U(e,t){var n=function(n){var r=n.className,i=n.iconBgStyle,a=n.logoFillColor,c=n.borderRadius,s=n.round,u=n.size,l={width:u,height:u},f="social-icon social-icon--"+e+" "+r;return o.a.createElement("div",{style:l},o.a.createElement("svg",{viewBox:"0 0 64 64",width:u,height:u,className:f},o.a.createElement("g",null,s?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:i}):o.a.createElement("rect",{width:"64",height:"64",rx:c,ry:c,fill:t.color,style:i})),o.a.createElement("g",null,o.a.createElement("path",{d:t.icon,fill:a}))))};return n.propTypes={className:p.a.string,iconBgStyle:p.a.object,logoFillColor:p.a.string,round:p.a.bool,size:p.a.number,borderRadius:p.a.number},n.defaultProps={className:"",iconBgStyle:{},logoFillColor:"white",size:64,borderRadius:0},n}var B=U("facebook",{icon:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",mask:"M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",color:"#3b5998"});var V=G("twitter",function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o;return h()(e,"twitter.url"),h()(Array.isArray(i),"twitter.hashtags is not an array"),"https://twitter.com/share"+y({url:e,text:n,via:r,hashtags:i.join(",")})},function(e){return{hashtags:e.hashtags,title:e.title,via:e.via}},{hashtags:p.a.arrayOf(p.a.string),title:p.a.string,via:p.a.string},{windowWidth:550,windowHeight:400}),Y=U("twitter",{icon:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",mask:"M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",color:"#00aced"});const Q=i.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  background: none;
  transition: all 1s;
  &.toggle {
    position: fixed;
    z-index: 999;
    bottom: 1rem;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
  }
  &.hidden {
    transform: translateX(-78%);
  }
  .btn {
    width: 3.6rem;
    &.wb img {
      background: #624c44;
      border-radius: 50%;
      padding: 5px;
      box-sizing: content-box;
      vertical-align: middle;
    }
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
      text-align: left;
    }
    /* &.withCount {
      display: flex;
      flex-direction: column;
    } */
  }
  .sep {
    width: 2px;
    background: #ccc;
    height: 1.4rem;
    margin-right: 0.8rem;
  }
  .toggleBtn {
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 1.8;
    background: #ccc;
    color: #555;
    border: 1px solid #aaa;
    border-radius: 50%;
    cursor: pointer;
  }
`,J="https://zerosoul.github.io/frontend-memo-game/";let K=null;t.a=Object(a.b)(e=>{const{currTimeUsed:t}=e;return{currTimeUsed:t}})(({currTimeUsed:e,toggle:t=!0})=>{const[n,i]=Object(r.useState)(!1);Object(r.useEffect)(()=>(K=setTimeout(()=>{i(!0)},4e3),()=>{clearTimeout(K)}),[]),Object(r.useEffect)(()=>{t||clearTimeout(K)},[t]);return o.a.createElement(Q,{className:`${n&&"hidden"} ${t&&"toggle"}`},o.a.createElement(q,{className:"btn wb",url:J,title:`发现了一个好玩的游戏，用时${Object(c.c)(e,!0)}，完成了挑战！前端图标千千万，快来试试连连看！`,image:"https://zerosoul.github.io/frontend-memo-game/static/logos/yarn.png"},o.a.createElement("img",{width:"20",src:f.a,alt:"Weibo share button"})),o.a.createElement(W,{className:"btn",url:J,quote:`Find a funny game, complete the challenge with time used ${Object(c.c)(e)}!`},o.a.createElement(B,{size:32,round:!0})),o.a.createElement(V,{className:"btn",url:"https://zerosoul.github.io/frontend-memo-game/",title:`😂Find a funny game, complete the challenge with time used ${Object(c.c)(e)}!`,image:u.a},o.a.createElement(Y,{size:32,round:!0})),t?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"sep"}),o.a.createElement("div",{onClick:()=>{clearTimeout(K),i(e=>!e),K=setTimeout(()=>{i(!0)},4e3)},className:"toggleBtn btn"},n?">>":"<<")):null)})},function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&("visible"!==e&&"clip"!==e)}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return o(n.overflowY,t)||o(n.overflowX,t)}return!1}function a(e,t,n,r,o,i,a,c){return i<e&&a>t||i>e&&a<t?0:i<=e&&c<=n||a>=t&&c>=n?i-e-r:a>t&&c<n||i<e&&c>n?a-t+o:0}var c=function(e,t){var n=t.scrollMode,o=t.block,c=t.inline,s=t.boundary,u=t.skipOverflowHiddenElements,l="function"==typeof s?s:function(e){return e!==s};if(!r(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,d=[],p=e;r(p)&&l(p);){if((p=p.parentNode)===f){d.push(p);break}p===document.body&&i(p)&&!i(document.documentElement)||i(p,u)&&d.push(p)}for(var m=window.visualViewport?visualViewport.width:innerWidth,h=window.visualViewport?visualViewport.height:innerHeight,g=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),v=y.height,A=y.width,w=y.top,E=y.right,x=y.bottom,O=y.left,S="start"===o||"nearest"===o?w:"end"===o?x:w+v/2,k="center"===c?O+A/2:"end"===c?E:O,j=[],T=0;T<d.length;T++){var P=d[T],C=P.getBoundingClientRect(),M=C.height,N=C.width,L=C.top,I=C.right,R=C.bottom,_=C.left;if("if-needed"===n&&w>=0&&O>=0&&x<=h&&E<=m&&w>=L&&x<=R&&O>=_&&E<=I)return j;var z=getComputedStyle(P),D=parseInt(z.borderLeftWidth,10),F=parseInt(z.borderTopWidth,10),H=parseInt(z.borderRightWidth,10),G=parseInt(z.borderBottomWidth,10),q=0,W=0,U="offsetWidth"in P?P.offsetWidth-P.clientWidth-D-H:0,B="offsetHeight"in P?P.offsetHeight-P.clientHeight-F-G:0;if(f===P)q="start"===o?S:"end"===o?S-h:"nearest"===o?a(b,b+h,h,F,G,b+S,b+S+v,v):S-h/2,W="start"===c?k:"center"===c?k-m/2:"end"===c?k-m:a(g,g+m,m,D,H,g+k,g+k+A,A),q=Math.max(0,q+b),W=Math.max(0,W+g);else{q="start"===o?S-L-F:"end"===o?S-R+G+B:"nearest"===o?a(L,R,M,F,G+B,S,S+v,v):S-(L+M/2)+B/2,W="start"===c?k-_-D:"center"===c?k-(_+N/2)+U/2:"end"===c?k-I+H+U:a(_,I,N,D,H+U,k,k+A,A);var V=P.scrollLeft,Y=P.scrollTop;S+=Y-(q=Math.max(0,Math.min(Y+q,P.scrollHeight-M+B))),k+=V-(W=Math.max(0,Math.min(V+W,P.scrollWidth-N+U)))}j.push({el:P,top:q,left:W})}return j};function s(e){return e===Object(e)&&0!==Object.keys(e).length}var u,l=function(e,t){var n=!e.ownerDocument.documentElement.contains(e);if(s(t)&&"function"==typeof t.behavior)return t.behavior(n?[]:c(e,t));if(!n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:s(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(e){var r=e.el,o=e.top,i=e.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:t}):(r.scrollTop=o,r.scrollLeft=i)})}(c(e,r),r.behavior)}},f=function(){return u||(u="performance"in window?performance.now.bind(performance):Date.now),u()};function d(e,t,n,r,o,i){var a,c,s;void 0===r&&(r=600),void 0===o&&(o=function(e){return 1+--e*e*e*e*e}),a=e,c=e.scrollLeft,s=e.scrollTop,function e(t){var n=f(),r=Math.min((n-t.startTime)/t.duration,1),o=t.ease(r),i=t.startX+(t.x-t.startX)*o,a=t.startY+(t.y-t.startY)*o;t.method(i,a),i!==t.x||a!==t.y?requestAnimationFrame(function(){return e(t)}):t.cb()}({scrollable:a,method:function(t,n){e.scrollLeft=t,e.scrollTop=n},startTime:f(),startX:c,startY:s,x:t,y:n,duration:r,ease:o,cb:i})}var p=function(e){return e&&!e.behavior||"smooth"===e.behavior};var m=function(e,t){var n=t||{};return p(n)?l(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(e){return Promise.all(e.reduce(function(e,t){var r=t.el,o=t.left,i=t.top,a=r.scrollLeft,c=r.scrollTop;return a===o&&c===i?e:e.concat([new Promise(function(e){return d(r,o,i,n.duration,n.ease,function(){return e({el:r,left:[a,o],top:[c,i]})})})])},[]))}}):Promise.resolve(l(e,t))};t.a=m},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e){e.exports=[{name:"webpack",title:"Webpack"},{name:"gulp",title:"Gulp"},{name:"npm",title:"NPM"},{name:"nodejs",title:"Node.js"},{name:"eslint",title:"ESLint"},{name:"babel",title:"Babel"},{name:"prettier",title:"Prettier"},{name:"react",title:"React"},{name:"redux",title:"Redux"},{name:"reactRouter",title:"react router"},{name:"chrome",title:"Chrome"},{name:"firefox",title:"Firefox"},{name:"git",title:"Git"},{name:"vscode",title:"VS Code"},{name:"yarn",title:"yarn"},{name:"sass",title:"sass"},{name:"vue",title:"Vue.js"},{name:"less",title:"LESS"},{name:"typescript",title:"TypeScript"},{name:"angular",title:"Angular"}]},function(e){e.exports=[{name:"mysql",title:"MySQL"},{name:"java",title:"Java"},{name:"apache",title:"Apache"},{name:"docker",title:"Docker"},{name:"jenkins",title:"Jenkins"},{name:"linux",title:"Linux"},{name:"php",title:"PHP"},{name:"python",title:"Python"},{name:"redis",title:"Redis"},{name:"ubuntu",title:"ubuntu"},{name:"mongodb",title:"MongoDB"},{name:"laravel",title:"Laravel"},{name:"git",title:"Git"},{name:"k8s",title:"k8s"},{name:"postgresql",title:"PostgreSQL"},{name:"tomcat",title:"Tomcat"},{name:"hadoop",title:"Hadoop"},{name:"spring",title:"spring"},{name:"go",title:"Go"},{name:"hbase",title:"HBase"}]},function(e){e.exports={header:"LMG",intro:"Technology Logo Memory Game",start:"START",restart:"RESTART",inspired:"Inspired By ",levels:{easy:"EASY",medium:"MEDIUM",hard:"HARD"},playtypes:{title_vs_logo:"TITLE vs LOGO",logo_vs_logo:"LOGO vs LOGO"},srcs:{fe:"FRONTEND",be:"BACKEND"},alert:{before:"click ",after:" button first!"},best_time:"BEST TIME"}},function(e){e.exports={header:"连连看",intro:"技术图标连连看",start:"来一发",restart:"重置",inspired:"灵感来源于 ",levels:{easy:"简单模式",medium:"还好模式",hard:"抓狂模式"},playtypes:{title_vs_logo:"标题vs图标",logo_vs_logo:"图标vs图标"},srcs:{fe:"前端类",be:"后端类"},alert:{before:"请点击 ",after:" 按钮开始！"},best_time:"最佳时长"}},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n.p+"ee8f1c60e9148964941f184b0e739591.png"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports={default:n(97),__esModule:!0}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(99),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(123)),o=a(n(127)),i=a(n(32));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r.default?(0,r.default)(e,t):e.__proto__=t)}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAaVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnbPKNAAAAInRSTlMA+yKu4Aa49O8oDx8KwBys2hTo4spr6tjOnWZJPzMtooF6ZHMMYAAAAchJREFUSMfdltmWgjAMhimMXai0FFdkUfP+Dzm2oE0LTs+cufHMr1dJP3IaspB9sm4VRdIG+8q20MVTmt5nM4VA+9IT2yr00dmugWBZxhOhS8+OAgggETgbT4SeIkJYw7jVESoXp6TACHv8CWdvkKY3ubRSYkIG4TSqjq8jBGqVrUqdgKwh5PHb5dkmOv4w5DvnjBHGnfnLM574cq6GRQjvTphZEnXfRAhRaoeZmNgpE0dho3XGzAYZc44QbRGRYWZJZNIiGkcRwQGn8CESR2knBDNLYkKuM1La4hNBerauxGpPWITA3viCtVE8A4fJfgB0NXmM20L4C8Plab+AT4aCsyU8Q4dXkuqDtx/qV/pEZbJAZenx4Fn4xP/V769vKpFK8kC3QYwzqNSrFFAhptzDUaYKRjDEmD0QLlNlKQhx883pantfpopf2EZu8biQqRYTDDeyQ1KN7BCNo+SpcTEuJoxJDSVFIqTp659H36njcZQmNWA5+/sYd4bTu2VRry0LK96pUTgN00oSSlrlpm/eLT5OpkUHdEIqOHIr1rAVBIm8ys+cIw9++0iWQCW+vsQpYEVtsf6pcKfom6Nog4Y1miJVt+yD9Q3hikrZa+NOdQAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAY1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaHTeAAAAIHRSTlMA+AX81r0PEQe72fLqzrcVsigNCsePM4x5mIV7Rk5IMGX3o1UAAAG9SURBVEjH7ZbhYoIwDIQDBYUJoigIipr3f8oddQLX4sTf2ylVY74mtKWNSCJ1XKB9q0SK+I4W732m+VrCd0Qo60izfe+43+hGo9U7BsQXHMFInWmAF5jk16xAWMfsLjFQ1WCMQ+FGmyUUzrEUuQbMsJiAWyGyip4/MAY9dZuQ4dUhvtZIkpiDSJvLRHkrciAiQRfEyEm3UyTVsxARPsKWA1NU6iJ6dgkoGZmNGkZiGDLKymrMzagJXCSA2YlBuZmZKEzwAjJqoR0jD6tH2IHEffwgoYPg2tgJ4ChS4Y9XCHQWTyfcuYECRlJ9WI3PtDoonSLH0d5yWrd822sHbRsKfkxjqzTNrxIStEDhrLGX/OuPadmCoe9dnj6X3/H0all23HOlg44is4u/EkeX4RFLReYesYt4atTKaOxvF1DjAQcpMzUvEFxZSdsFbUqzCJqINiXeLn3E0PnjEfhgBAaPoSMmoyi0jY/nKR8wZaPuIGtTRnQ2ekfSxUUwH2tmkNXEgIGs+OCrMAHkkrhdQN10YLqZRAomfLlMMZYK5XypwAyc4+UFiWUwDfUHZQ8YuO6fxdVqeXGVfFjC1Wi/ARoePPac6TV4AAAAAElFTkSuQmCC"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Reset=t.reset=void 0;var r=n(2);function o(){var e=a(["",""]);return o=function(){return e},e}function i(){var e=a(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]);return i=function(){return e},e}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var c=(0,r.css)(i());t.reset=c;var s=(0,r.createGlobalStyle)(o(),c);t.Reset=s;var u=c;t.default=u},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return E});
/*!
 * github-buttons v2.2.9
 * (c) 2019 なつき
 * @license BSD-2-Clause
 */
var r=window.document,o=(r.location,window.encodeURIComponent),i=(window.decodeURIComponent,window.Math),a=window.HTMLElement,c=window.XMLHttpRequest,s=function(e){return function(t,n,r){var o=e.createElement(t);if(n)for(var i in n){var a=n[i];null!=a&&(null!=o[i]?o[i]=a:o.setAttribute(i,a))}if(r)for(var c=0,s=r.length;c<s;c++){var u=r[c];o.appendChild("string"==typeof u?e.createTextNode(u):u)}return o}},u=s(r),l=c&&c.prototype&&"withCredentials"in c.prototype,f=l&&a&&a.prototype.attachShadow&&!a.prototype.attachShadow.prototype,d=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)},p=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent("on"+t,n)},m="body{margin:0}a{color:#24292e;text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid #c5c9cc;border-radius:0.25em}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,0.2);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}.btn:active{background-color:#e9ecef;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15)}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}.social-count{position:relative;margin-left:5px;background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count b{border-right-color:#c5c9cc}.social-count i{margin-left:-3px;border-right-color:#fff}.lg .btn,.lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.lg .social-count{margin-left:6px}.lg .social-count b,.lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.lg .social-count i{margin-left:-4px}\n",h={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},g={},b=function(e,t){var n=g[e]||(g[e]=[]);if(!(n.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}(function(){for(delete g[e];t=n.shift();)t.apply(null,arguments)});if(l){var o=new c;d(o,"abort",r),d(o,"error",r),d(o,"load",function(){var e;try{e=JSON.parse(o.responseText)}catch(e){return void r(e)}r(200!==o.status,e)}),o.open("GET",e),o.send()}else{var i=this||window;i._=function(e){i._=null,r(200!==e.meta.status,e.data)};var a=s(i.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),u=function(){i._&&i._({meta:{}})};d(a,"load",u),d(a,"error",u),a.readyState&&function(e,t,n){var r=function(o){if(t.test(e.readyState))return p(e,"readystatechange",r),n(o)};d(e,"readystatechange",r)}(a,/de|m/,u),i.document.getElementsByTagName("head")[0].appendChild(a)}}},y=function(e,t,n){var r=s(e.ownerDocument),o=e.appendChild(r("style",{type:"text/css"}));o.styleSheet?o.styleSheet.cssText=m:o.appendChild(e.ownerDocument.createTextNode(m));var i,a,c=r("a",{className:"btn",href:t.href,target:"_blank",innerHTML:(i=t["data-icon"],a=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),h.hasOwnProperty(i)||(i="mark-github"),'<svg version="1.1" width="'+a*h[i].width/h[i].height+'" height="'+a+'" viewBox="0 0 '+h[i].width+" "+h[i].height+'" class="octicon octicon-'+i+'" aria-hidden="true">'+h[i].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",r("span",{},[t["data-text"]||""])]);/\.github\.com$/.test("."+c.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(c.href)&&(c.target="_top"):(c.href="#",c.target="_self");var u,l,f,d,p=e.appendChild(r("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" lg":"")},[c]));/^(true|1)$/i.test(t["data-show-count"])&&"github.com"===c.hostname&&(u=c.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!u[6]?(u[2]?(l="/repos/"+u[1]+"/"+u[2],u[3]?(d="subscribers_count",f="watchers"):u[4]?(d="forks_count",f="network"):u[5]?(d="open_issues_count",f="issues"):(d="stargazers_count",f="stargazers")):(l="/users/"+u[1],f=d="followers"),b.call(this,"https://api.github.com"+l,function(e,t){if(!e){var o=t[d];p.appendChild(r("a",{className:"social-count",href:t.html_url+"/"+f,target:"_blank","aria-label":o+" "+d.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[r("b"),r("i"),r("span",{},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")])]))}n&&n(p)})):n&&n(p)},v=window.devicePixelRatio||1,A=function(e){return(v>1?i.ceil(i.round(e*v)/v*2)/2:i.ceil(e))||0},w=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},E=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},n=["icon","text","size","show-count"],r=0,o=n.length;r<o;r++){var i="data-"+n[r];t[i]=e.getAttribute(i)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),f){var n=u("span",{title:e.title||void 0});y(n.attachShadow({mode:"closed"}),e,function(){t(n)})}else{var a=u("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});w(a,[0,0]),a.style.border="none";var c=function(){var n,s=a.contentWindow;try{n=s.document.body}catch(e){return void r.body.appendChild(a.parentNode.removeChild(a))}p(a,"load",c),y.call(s,n,e,function(n){var r=function(e){var t=e.offsetWidth,n=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=i.max(t,A(r.width)),n=i.max(n,A(r.height))}return[t,n]}(n);a.parentNode.removeChild(a),function(e,t,n){var r=function(o){return p(e,t,r),n(o)};d(e,t,r)}(a,"load",function(){w(a,r)}),a.src="https://unpkg.com/github-buttons@2.2.9/dist/buttons.html#"+(a.name=function(e){var t=[];for(var n in e){var r=e[n];null!=r&&t.push(o(n)+"="+o(r))}return t.join("&")}(e)),t(a)})};d(a,"load",c),r.body.appendChild(a)}}},function(e,t,n){e.exports=n(8)(4)},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),s=r[n];n<i;s=r[++n])h(s)||!A(s)?a+=" "+s:a+=" "+c(s);return a},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation,o=!0}return n.apply(this,arguments)}};var i,a={};function c(e,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),l(r,e,r.depth)}function s(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function u(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=l(e,o,r)),o}var i=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(m(t))return e.stylize(""+t,"boolean");if(h(t))return e.stylize("null","null")}(e,n);if(i)return i;var a=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),E(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n);if(0===a.length){if(x(n)){var s=n.name?": "+n.name:"";return e.stylize("[Function"+s+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return f(n)}var u,A="",O=!1,k=["{","}"];(p(n)&&(O=!0,k=["[","]"]),x(n))&&(A=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(A=" "+RegExp.prototype.toString.call(n)),w(n)&&(A=" "+Date.prototype.toUTCString.call(n)),E(n)&&(A=" "+f(n)),0!==a.length||O&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),u=O?function(e,t,n,r,o){for(var i=[],a=0,c=t.length;a<c;++a)S(t,String(a))?i.push(d(e,t,n,r,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(d(e,t,n,r,o,!0))}),i}(e,n,r,c,a):a.map(function(t){return d(e,n,r,c,t,O)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(u,A,k)):k[0]+A+k[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,i){var a,c,s;if((s=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=s.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):s.set&&(c=e.stylize("[Setter]","special")),S(r,o)||(a="["+o+"]"),c||(e.seen.indexOf(s.value)<0?(c=h(n)?l(e,s.value,null):l(e,s.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),y(a)){if(i&&o.match(/^\d+$/))return c;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function p(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function h(e){return null===e}function g(e){return"number"==typeof e}function b(e){return"string"==typeof e}function y(e){return void 0===e}function v(e){return A(e)&&"[object RegExp]"===O(e)}function A(e){return"object"==typeof e&&null!==e}function w(e){return A(e)&&"[object Date]"===O(e)}function E(e){return A(e)&&("[object Error]"===O(e)||e instanceof Error)}function x(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}t.debuglog=function(n){if(y(i)&&(i=Object({NODE_ENV:"production"}).NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){e.pid;a[n]=function(){t.format.apply(t,arguments)}}else a[n]=function(){};return a[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=m,t.isNull=h,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=v,t.isObject=A,t.isDate=w,t.isError=E,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(89);function S(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){},t.inherits=n(90),t._extend=function(e,t){if(!t||!A(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function j(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(k&&e[k]){var t;if("function"!=typeof(t=e[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,k,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,r){e?n(e):t(r)});try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),k&&Object.defineProperty(t,k,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=k,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};t.apply(this,n).then(function(t){e.nextTick(a,null,t)},function(t){e.nextTick(j,t,a)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(88))},function(e,t,n){e.exports=n(8)(13)},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){n(92),e.exports=n(6).Object.keys},function(e,t,n){var r=n(26),o=n(22);n(56)("keys",function(){return function(e){return o(r(e))}})},function(e,t,n){var r=n(16),o=n(94),i=n(95);e.exports=function(e){return function(t,n,a){var c,s=r(t),u=o(s.length),l=i(a,u);if(e&&n!=n){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(35),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(35),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){n(98),e.exports=n(6).Object.getPrototypeOf},function(e,t,n){var r=n(26),o=n(60);n(56)("getPrototypeOf",function(){return function(e){return o(r(e))}})},function(e,t,n){e.exports={default:n(100),__esModule:!0}},function(e,t,n){n(101);var r=n(6).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(11);r(r.S+r.F*!n(13),"Object",{defineProperty:n(12).f})},function(e,t,n){e.exports={default:n(103),__esModule:!0}},function(e,t,n){n(104),n(109),e.exports=n(43).f("iterator")},function(e,t,n){"use strict";var r=n(105)(!0);n(61)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(35),o=n(34);e.exports=function(e){return function(t,n){var i,a,c=String(o(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):i:e?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(e,t,n){"use strict";var r=n(41),o=n(29),i=n(42),a={};n(17)(a,n(20)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},function(e,t,n){var r=n(12),o=n(23),i=n(22);e.exports=n(13)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),c=a.length,s=0;c>s;)r.f(e,n=a[s++],t[n]);return e}},function(e,t,n){var r=n(9).document;e.exports=r&&r.documentElement},function(e,t,n){n(110);for(var r=n(9),o=n(17),i=n(40),a=n(20)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var u=c[s],l=r[u],f=l&&l.prototype;f&&!f[a]&&o(f,a,u),i[u]=i.Array}},function(e,t,n){"use strict";var r=n(111),o=n(112),i=n(40),a=n(16);e.exports=n(61)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(114),__esModule:!0}},function(e,t,n){n(115),n(120),n(121),n(122),e.exports=n(6).Symbol},function(e,t,n){"use strict";var r=n(9),o=n(10),i=n(13),a=n(11),c=n(62),s=n(116).KEY,u=n(19),l=n(37),f=n(42),d=n(28),p=n(20),m=n(43),h=n(44),g=n(117),b=n(118),y=n(23),v=n(18),A=n(16),w=n(39),E=n(29),x=n(41),O=n(119),S=n(64),k=n(12),j=n(22),T=S.f,P=k.f,C=O.f,M=r.Symbol,N=r.JSON,L=N&&N.stringify,I=p("_hidden"),R=p("toPrimitive"),_={}.propertyIsEnumerable,z=l("symbol-registry"),D=l("symbols"),F=l("op-symbols"),H=Object.prototype,G="function"==typeof M,q=r.QObject,W=!q||!q.prototype||!q.prototype.findChild,U=i&&u(function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=T(H,t);r&&delete H[t],P(e,t,n),r&&e!==H&&P(H,t,r)}:P,B=function(e){var t=D[e]=x(M.prototype);return t._k=e,t},V=G&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},Y=function(e,t,n){return e===H&&Y(F,t,n),y(e),t=w(t,!0),y(n),o(D,t)?(n.enumerable?(o(e,I)&&e[I][t]&&(e[I][t]=!1),n=x(n,{enumerable:E(0,!1)})):(o(e,I)||P(e,I,E(1,{})),e[I][t]=!0),U(e,t,n)):P(e,t,n)},Q=function(e,t){y(e);for(var n,r=g(t=A(t)),o=0,i=r.length;i>o;)Y(e,n=r[o++],t[n]);return e},J=function(e){var t=_.call(this,e=w(e,!0));return!(this===H&&o(D,e)&&!o(F,e))&&(!(t||!o(this,e)||!o(D,e)||o(this,I)&&this[I][e])||t)},K=function(e,t){if(e=A(e),t=w(t,!0),e!==H||!o(D,t)||o(F,t)){var n=T(e,t);return!n||!o(D,t)||o(e,I)&&e[I][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=C(A(e)),r=[],i=0;n.length>i;)o(D,t=n[i++])||t==I||t==s||r.push(t);return r},X=function(e){for(var t,n=e===H,r=C(n?F:A(e)),i=[],a=0;r.length>a;)!o(D,t=r[a++])||n&&!o(H,t)||i.push(D[t]);return i};G||(c((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===H&&t.call(F,n),o(this,I)&&o(this[I],e)&&(this[I][e]=!1),U(this,e,E(1,n))};return i&&W&&U(H,e,{configurable:!0,set:t}),B(e)}).prototype,"toString",function(){return this._k}),S.f=K,k.f=Y,n(63).f=O.f=Z,n(30).f=J,n(45).f=X,i&&!n(27)&&c(H,"propertyIsEnumerable",J,!0),m.f=function(e){return B(p(e))}),a(a.G+a.W+a.F*!G,{Symbol:M});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)p($[ee++]);for(var te=j(p.store),ne=0;te.length>ne;)h(te[ne++]);a(a.S+a.F*!G,"Symbol",{for:function(e){return o(z,e+="")?z[e]:z[e]=M(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in z)if(z[t]===e)return t},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!G,"Object",{create:function(e,t){return void 0===t?x(e):Q(x(e),t)},defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:K,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),N&&a(a.S+a.F*(!G||u(function(){var e=M();return"[null]"!=L([e])||"{}"!=L({a:e})||"{}"!=L(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(v(t)||void 0!==e)&&!V(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!V(t))return t}),r[1]=t,L.apply(N,r)}}),M.prototype[R]||n(17)(M.prototype,R,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(e,t,n){var r=n(28)("meta"),o=n(18),i=n(10),a=n(12).f,c=0,s=Object.isExtensible||function(){return!0},u=!n(19)(function(){return s(Object.preventExtensions({}))}),l=function(e){a(e,r,{value:{i:"O"+ ++c,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return u&&f.NEED&&s(e)&&!i(e,r)&&l(e),e}}},function(e,t,n){var r=n(22),o=n(45),i=n(30);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var a,c=n(e),s=i.f,u=0;c.length>u;)s.call(e,a=c[u++])&&t.push(a);return t}},function(e,t,n){var r=n(55);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(16),o=n(63).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return a.slice()}}(e):o(r(e))}},function(e,t){},function(e,t,n){n(44)("asyncIterator")},function(e,t,n){n(44)("observable")},function(e,t,n){e.exports={default:n(124),__esModule:!0}},function(e,t,n){n(125),e.exports=n(6).Object.setPrototypeOf},function(e,t,n){var r=n(11);r(r.S,"Object",{setPrototypeOf:n(126).set})},function(e,t,n){var r=n(18),o=n(23),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(57)(Function.call,n(64).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},function(e,t,n){e.exports={default:n(128),__esModule:!0}},function(e,t,n){n(129);var r=n(6).Object;e.exports=function(e,t){return r.create(e,t)}},function(e,t,n){var r=n(11);r(r.S,"Object",{create:n(41)})},function(e,t,n){e.exports={default:n(131),__esModule:!0}},function(e,t,n){n(132),e.exports=n(6).Object.assign},function(e,t,n){var r=n(11);r(r.S+r.F,"Object",{assign:n(133)})},function(e,t,n){"use strict";var r=n(22),o=n(45),i=n(30),a=n(26),c=n(54),s=Object.assign;e.exports=!s||n(19)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=r})?function(e,t){for(var n=a(e),s=arguments.length,u=1,l=o.f,f=i.f;s>u;)for(var d,p=c(arguments[u++]),m=l?r(p).concat(l(p)):r(p),h=m.length,g=0;h>g;)f.call(p,d=m[g++])&&(n[d]=p[d]);return n}:s},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(31),a=n.n(i),c=n(5),s=n(7),u=n(3),l=n(4);const f=Object.values(u.d).map(e=>({key:e.type})),d=Object.values(u.c).map(e=>({key:e.type})),p=localStorage.getItem("LOCALE")||navigator.language.slice(0,2),m=localStorage.getItem("LEVEL")||"easy",h=localStorage.getItem("SRC")||"fe",g=localStorage.getItem("PLAY_TYPE")||"title_vs_logo";let b={locale:p,lang:u.a[p].data,sources:f,playTypes:d,playType:g,source:h,data:Object(l.b)(u.d[h],m),level:m,reveals:[],hits:[],currTimeUsed:0,playing:!1,win:!1,alert:!1,finishAlert:!1};const y=(e,t)=>{const[n=null,r=null]=e;if(n&&r){return t.find(e=>e.id===n).name===t.find(e=>e.id===r).name}return!1};var v=(e=b,t={type:"",data:{}})=>{const{reveals:n,hits:r,source:o,data:i,playing:a,playType:c,level:s}=e;switch(t.type){case"SET_REVEAL":const{id:f}=t.data;return n.push(f),n.length>=2&&(n.length>2&&n.shift(),y(n,i)&&(r.push(...n),n.length=0)),{...e,reveals:[...n],hits:[...r]};case"RESET_REVEAL":return{...e,reveals:[]};case"SET_TIME_USED":const{currTimeUsed:d}=t.data;return{...e,currTimeUsed:d};case"SET_DATA_SRC":const{src:p="fe"}=t.data;return localStorage.setItem("SRC",p),localStorage.setItem("LEVEL","easy"),{...e,data:Object(l.a)(Object(l.b)(u.d[p]),c),source:p,level:"easy",hits:[],reveals:[]};case"SET_PLAY_TYPE":const{playType:m}=t.data,h=Object(l.a)(i,m);return localStorage.setItem("PLAY_TYPE",m),{...e,data:h,playType:m,hits:[],reveals:[]};case"SET_WIN":return{...e,win:!0,playing:!1,finishAlert:!0};case"SET_ALERT":const{alert:g}=t.data;return{...e,alert:g};case"SET_FINISH_ALERT":const{finishAlert:b}=t.data;return{...e,finishAlert:b};case"SET_LANG":const{locale:v}=t.data;return localStorage.setItem("LOCALE",v),{...e,locale:v,lang:u.a[v].data};case"SET_LEVEL":const{level:A}=t.data;return localStorage.setItem("LEVEL",A),{...e,hits:[],reveals:[],data:Object(l.a)(Object(l.b)(u.d[o],A),c),level:A};case"SET_START":return{...e,win:!1,hits:[],reveals:[],playing:!a};case"SET_RESET":return{...e,win:!1,hits:[],reveals:[],data:Object(l.a)(Object(l.b)(u.d[o],s),c),playing:!a};default:return{...e}}};var A=Object(s.b)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=n(47),E=n(66),x=n(15),O=n(2),S=n(25);const k=O.default.div`
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
  background-color: #0006;
  .alert {
    /* max-width: 12rem; */
    background: rgb(96, 108, 136);
    padding: 1.4rem 1.8rem;
    border-radius: 0.2rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${S.a} 1s;
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
        border-radius: 1rem;
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
`;var j=Object(c.b)(({alert:e,lang:t})=>({isVisible:e,lang:t}),e=>({setAlert:Object(s.a)(x.b,e)}))(({isVisible:e,setAlert:t,lang:n})=>{const i=Object(r.useRef)(null);return Object(r.useEffect)(()=>{e&&(Object(E.a)(document.getElementById("opt_container"),{behavior:"smooth"}),Object(w.disableBodyScroll)(i.current))},[e]),e?o.a.createElement(k,{ref:i},o.a.createElement("section",{className:"alert"},o.a.createElement("h1",{className:"header"},"☝️☝️☝️"),o.a.createElement("p",{className:"content"},n.alert.before," ",o.a.createElement("span",{className:"start"},n.start),n.alert.after),o.a.createElement("div",{className:"close",onClick:()=>{Object(w.enableBodyScroll)(i.current),t(!1)}},"x"))):null});const T=O.default.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0.8rem;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    .desc {
      margin-bottom: 0.8rem;
    }
  }
`;var P=Object(c.b)(({lang:e})=>({lang:e}))(({lang:e})=>o.a.createElement(T,null,o.a.createElement("h1",null,"🤔 ",e.header," 🤔"),o.a.createElement("h2",null,o.a.createElement("span",{className:"desc"},e.intro))));var C=class extends r.PureComponent{constructor(e){super(e),this.$=o.a.createRef(),this._=o.a.createRef()}render(){return o.a.createElement("span",{ref:this.$},o.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}componentWillUpdate(){this.reset()}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(n.bind(null,85)).then(({render:t})=>{t(e.appendChild(this._.current),function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}})})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}};var M=()=>[o.a.createElement(C,{key:"star",href:"https://github.com/zerosoul/frontend-memo-game","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star zerosoul/frontend-memo-game on GitHub"},"Star"),o.a.createElement(C,{key:"issue",href:"https://github.com/zerosoul/frontend-memo-game/issues","data-icon":"octicon-issue-opened","data-show-count":"true","aria-label":"Issue zerosoul/frontend-memo-game on GitHub"},"Issue")];function N(){return o.a.createElement("a",{href:"https://www.producthunt.com/posts/frontend-logo-memory-game?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-frontend-logo-memory-game",target:"_blank",style:{marginBottom:".6rem"}},o.a.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=155856&theme=light",alt:"Frontend Logo Memory Game - How many frameworks can you guess right? | Product Hunt Embed",style:{width:"10rem"}}))}const L=O.default.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  .icons {
    margin-bottom: 0.4rem;
    & > span:first-child {
      margin-right: 0.4rem;
    }
  }
  h1 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 0.6rem;
  }
`;var I=Object(c.b)(({lang:e})=>({lang:e}))(({lang:e})=>o.a.createElement(L,null,o.a.createElement(N,null),o.a.createElement("p",{className:"icons"},o.a.createElement(M,null)),o.a.createElement("h1",null,e.header," © Tristan"),o.a.createElement("h2",null,e.inspired,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/davinci/pen/yVZapY"},"Brainymo")))),R=n(72),_=n.n(R);const z=O.default.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border: 1px solid #666;
  border-radius: 0.8rem;
  background: #fff;
  color: #222;
  line-height: 1.4;
  animation: ${S.b} 1s;
  animation-fill-mode: both;
  animation-delay: 2s;
  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    margin-left: -0.9rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 1rem 0 1rem;
    border-color: #fff transparent transparent transparent;
  }
  .homeImage {
    width: 3rem;
    margin: 0.4rem auto;
    vertical-align: middle;
  }
  .close {
    cursor: pointer;
    color: #222;
    background: #ddd;
    position: absolute;
    top: -0.6rem;
    right: -0.6rem;
    width: 1.4rem;
    height: 1.4rem;
    font-size: 1rem;
    padding: 0.2rem;
    border: 1px solid #666;
    border-radius: 50%;
    text-align: center;
    line-height: 0.9;
  }
`;let D=window.navigator.userAgent,F=!!D.match(/iPad/i)||!!D.match(/iPhone/i),H=!!D.match(/WebKit/i);const G=F&&H&&!D.match(/CriOS/i)&&!navigator.standalone;var q=()=>{const[e,t]=Object(r.useState)(!0);Object(r.useEffect)(()=>{let e=!!Number(localStorage.getItem("IPHONE_ADD_HOME")||0);t(e)},[]);return G&&!e?o.a.createElement(z,null,"Install this web app on your iPhone.",o.a.createElement("i",{className:"close",onClick:()=>{t(!0),localStorage.setItem("IPHONE_ADD_HOME",1)}},"X"),o.a.createElement("img",{className:"homeImage",src:_.a,alt:"add home image"})):null},W=n(51);const U=O.default.aside`
  position: absolute;
  left: 1rem;
  top: 1rem;
  select {
    background: #615d87;
    color: #ddd;
  }
  .triangle {
    color: #ddd;
  }
`;var B=Object(c.b)(({playing:e,locale:t})=>({playing:e,locale:t}),e=>({setLang:Object(s.a)(x.d,e)}))(({playing:e,setLang:t,locale:n})=>{return e?null:o.a.createElement(U,null,o.a.createElement(W.a,null,o.a.createElement("select",{onChange:e=>{const n=e.target.value;t(n)}},Object.keys(u.a).map(e=>o.a.createElement("option",{key:e,value:e,selected:e==n},u.a[e].title)))))});var V=O.default.div`
  position: relative;
  margin: 30vh auto;
  width: 2em;
  height: 2em;
  border: 3px solid #3cefff;
  overflow: hidden;
  animation: spin 3s ease infinite;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 2em;
    height: 2em;
    background-color: hsla(185, 100%, 62%, 0.75);
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: fill 3s linear infinite;
  }

  @keyframes spin {
    50%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fill {
    25%,
    50% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`,Y=n(1),Q=n.n(Y),J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function K(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Z="undefined"!=typeof document,X=[{hidden:"hidden",event:"visibilitychange",state:"visibilityState"},{hidden:"webkitHidden",event:"webkitvisibilitychange",state:"webkitVisibilityState"},{hidden:"mozHidden",event:"mozvisibilitychange",state:"mozVisibilityState"},{hidden:"msHidden",event:"msvisibilitychange",state:"msVisibilityState"},{hidden:"oHidden",event:"ovisibilitychange",state:"oVisibilityState"}],$=Z&&Boolean(document.addEventListener),ee=function(){if(!$)return null;for(var e=0;e<X.length;e++){var t=X[e];if(t.hidden in document)return t}return null}(),te=function(){var e=ee.hidden,t=ee.state;return[!document[e],document[t]]},ne=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isSupported:$&&ee},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),J(t,[{key:"componentDidMount",value:function(){this.state.isSupported&&(this.handleVisibilityChange=this.handleVisibilityChange.bind(this),document.addEventListener(ee.event,this.handleVisibilityChange))}},{key:"componentWillUnmount",value:function(){this.state.isSupported&&document.removeEventListener(ee.event,this.handleVisibilityChange)}},{key:"handleVisibilityChange",value:function(){var e;"function"==typeof this.props.onChange&&(e=this.props).onChange.apply(e,K(te()));"function"==typeof this.props.children&&this.forceUpdate()}},{key:"render",value:function(){return this.props.children?"function"==typeof this.props.children?this.state.isSupported?(e=this.props).children.apply(e,K(te())):this.props.children():o.a.Children.only(this.props.children):null;var e}}]),t}();ne.displayName="PageVisibility",ne.propTypes={onChange:Q.a.func,children:Q.a.oneOfType([Q.a.node,Q.a.func])};var re=ne;const oe=O.default.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 0;
  font-size: 0.6rem;
  background: rgb(255, 237, 102, 0.8);
  padding: 0.6rem;
  transition: all 1s;
  font-weight: 800;
  &.playing {
    opacity: 0.3;
  }
  > p:not(:last-child) {
    margin-bottom: 0.4rem;
  }
  .time {
    color: rgb(255, 94, 91);
    &.curr {
      font-size: 0.8rem;
      background: rgba(255, 237, 102);
      padding: 0.4rem 0.8rem;
      border-radius: 0.8rem;
    }
    &.best {
      padding-top: 0.2rem;
      border-top: 1px solid rgb(255, 94, 91);
      display: flex;
      flex-direction: column;
      thead tr th {
        color: rgb(255, 94, 91);
        text-align: center;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #ccc4;
      }
      tbody tr td {
        color: rgb(255, 94, 91);
        border: 1px solid #b3989833;
        padding: 0.2rem;
      }
    }
  }
`,ie=()=>{let e=localStorage.getItem("BEST_LEVEL_TIME")||"{}";try{return JSON.parse(e),JSON.parse(e)}catch(e){return{}}};let ae=null;var ce=Object(c.b)(e=>{const{playing:t,win:n,currTimeUsed:r,level:o,lang:i}=e;return{playing:t,win:n,currTimeUsed:r,level:o,lang:i}},e=>({setTimeUsed:Object(s.a)(x.k,e)}))(({playing:e,win:t,level:n,setTimeUsed:i,currTimeUsed:a,lang:c})=>{const s=ie(),[u,f]=Object(r.useState)(!1),[d,p]=Object(r.useState)(0),[m,h]=Object(r.useState)(s);Object(r.useEffect)(()=>{e&&!u?ae=setInterval(()=>{p(e=>e+1)},1e3):(clearInterval(ae),u||p(0))},[e,u]),Object(r.useEffect)(()=>{if(t&&0!==d){clearInterval(ae),i(d);let e=ie();(!e[n]||e[n]>d)&&(e[n]=d,h(e),localStorage.setItem("BEST_LEVEL_TIME",JSON.stringify(e))),p(0)}},[t,d,i,n]);return o.a.createElement(re,{onChange:e=>{f(!e)}},o.a.createElement(oe,{className:e&&"playing"},o.a.createElement("p",{className:"time curr"},Object(l.c)(d||a)),!!Object.keys(m).length&&o.a.createElement("table",{className:"time best"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,c.best_time))),o.a.createElement("tbody",null,Object.keys(m).map(e=>o.a.createElement("tr",{key:e},o.a.createElement("td",null,c.levels[e]),o.a.createElement("td",null,Object(l.c)(m[e]))))))))}),se=n(65),ue=n(81),le=n.n(ue),fe=n(82),de=n.n(fe);const pe=O.default.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${({fullscreen:e})=>e?de.a:le.a});
  background-size: cover;
  opacity: 0.5;
  background-color: rgb(97, 93, 135);
  padding: 0.3rem;
  background-origin: content-box;
  background-repeat: no-repeat;
  border-radius: 0.4rem;
`;var me=()=>{const[e,t]=Object(r.useState)(!1);Object(r.useEffect)(()=>{document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?t(!0):t(!1)})},[e]);return o.a.createElement(pe,{fullscreen:e,onClick:()=>{e?document.exitFullscreen():document.body.requestFullscreen()}})};const he=o.a.lazy(()=>n.e(1).then(n.bind(null,140))),ge=o.a.lazy(()=>Promise.all([n.e(5),n.e(2)]).then(n.bind(null,141))),be=o.a.lazy(()=>n.e(4).then(n.bind(null,142))),ye=o.a.lazy(()=>{const e=n.e(3).then(n.bind(null,136));return new Promise(t=>{setTimeout(()=>t(e),1e3)})}),ve=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var Ae=()=>o.a.createElement(c.a,{store:A},o.a.createElement(se.a,null),o.a.createElement(j,null),o.a.createElement(ce,null),o.a.createElement(P,null),o.a.createElement(B,null),!ve&&o.a.createElement(me,null),o.a.createElement(r.Suspense,{fallback:o.a.createElement(V,null)},o.a.createElement(be,null),o.a.createElement(he,null),o.a.createElement(ge,null),o.a.createElement(ye,null)),o.a.createElement(q,null),o.a.createElement(I,null)),we=n(83),Ee=n.n(we);var xe=O.createGlobalStyle`
  ${Ee.a}
  *{
    box-sizing:border-box;
    user-select:none;
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
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    min-height:100vh;
    position: relative;
  }
  #root{
    background-image:linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%);
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
          font-size: 24px;
      }
  }
`;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(xe,null),o.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}]);