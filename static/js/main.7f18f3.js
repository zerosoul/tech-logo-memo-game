!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,c=[];s<i.length;s++)o=i[s],r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={main:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"static/js/"+({}[e]||e)+"."+{0:"5cc2fa",1:"85c4b7",2:"7168b1",3:"6692b9",4:"2bc599"}[e]+".chunk.js"}(e),a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/frontend-memo-game/",o.oe=function(e){throw e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=a;o(o.s=110)}([function(e,t,n){e.exports=n(13)(0)},function(e,t,n){e.exports=n(13)(12)},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var r=n(27)("wks"),o=n(55),i=n(2).Symbol,a=n(85);e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}},function(e,t,n){var r=n(9);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(12),a=n.n(i),s=o.a.createContext(null);var u=function(e){e()},c=function(){return u},f=null,l={notify:function(){}};var p=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=l,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=c(),t=[],n=[],{clear:function(){n=f,t=f},notify:function(){var r=t=n;e(function(){for(var e=0;e<r.length;e++)r[e]()})},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==f&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=l)},e}(),d=function(e){var t,n;function r(t){var n;n=e.call(this,t)||this;var r=t.store;n.notifySubscribers=n.notifySubscribers.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));var o=new p(r);return o.onStateChange=n.notifySubscribers,n.state={store:r,subscription:o},n.previousState=r.getState(),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){this._isMounted=!0,this.state.subscription.trySubscribe(),this.previousState!==this.props.store.getState()&&this.state.subscription.notifyNestedSubs()},i.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this.state.subscription.tryUnsubscribe(),this._isMounted=!1},i.componentDidUpdate=function(e){if(this.props.store!==e.store){this.state.subscription.tryUnsubscribe();var t=new p(this.props.store);t.onStateChange=this.notifySubscribers,this.setState({store:this.props.store,subscription:t})}},i.notifySubscribers=function(){this.state.subscription.notifyNestedSubs()},i.render=function(){var e=this.props.context||s;return o.a.createElement(e.Provider,{value:this.state},this.props.children)},r}(r.Component);d.propTypes={store:a.a.shape({subscribe:a.a.func.isRequired,dispatch:a.a.func.isRequired,getState:a.a.func.isRequired}),context:a.a.object,children:a.a.any};var h=d;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var b=n(47),g=n.n(b),y=n(23),w=n.n(y),x=n(46),S=[],E=[null,null];function O(e,t){var n=e[1];return[t.payload,n+1]}var j=function(){return[null,0]},k="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function P(e,t){void 0===t&&(t={});var n=t,i=n.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,u=n.methodName,c=void 0===u?"connectAdvanced":u,f=n.renderCountProp,l=void 0===f?void 0:f,d=n.shouldHandleStateChanges,h=void 0===d||d,b=n.storeKey,y=void 0===b?"store":b,P=n.withRef,T=void 0!==P&&P,R=n.forwardRef,L=void 0!==R&&R,A=n.context,C=void 0===A?s:A,M=v(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);w()(void 0===l,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),w()(!T,"withRef is removed. To access the wrapped instance, use a ref on the connected component");w()("store"===y,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var _=C;return function(t){var n=t.displayName||t.name||"Component",i=a(n),s=m({},M,{getDisplayName:a,methodName:c,renderCountProp:l,shouldHandleStateChanges:h,storeKey:y,displayName:i,wrappedComponentName:n,WrappedComponent:t}),u=M.pure;var f=u?r.useMemo:function(e){return e()};function d(n){var a=Object(r.useMemo)(function(){return[n.context,n.forwardedRef,v(n,["context","forwardedRef"])]},[n]),u=a[0],c=a[1],l=a[2],d=Object(r.useMemo)(function(){return u&&u.Consumer&&Object(x.isContextConsumer)(o.a.createElement(u.Consumer,null))?u:_},[u,_]),b=Object(r.useContext)(d),g=Boolean(n.store),y=Boolean(b)&&Boolean(b.store);w()(g||y,'Could not find "store" in the context of "'+i+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+i+" in connect options.");var P=n.store||b.store,T=Object(r.useMemo)(function(){return function(t){return e(t.dispatch,s)}(P)},[P]),R=Object(r.useMemo)(function(){if(!h)return E;var e=new p(P,g?null:b.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[P,g,b]),L=R[0],A=R[1],C=Object(r.useMemo)(function(){return g?b:m({},b,{subscription:L})},[g,b,L]),M=Object(r.useReducer)(O,S,j),I=M[0][0],N=M[1];if(I&&I.error)throw I.error;var U=Object(r.useRef)(),q=Object(r.useRef)(l),B=Object(r.useRef)(),F=Object(r.useRef)(!1),D=f(function(){return B.current&&l===q.current?B.current:T(P.getState(),l)},[P,I,l]);k(function(){q.current=l,U.current=D,F.current=!1,B.current&&(B.current=null,A())}),k(function(){if(h){var e=!1,t=null,n=function(){if(!e){var n,r,o=P.getState();try{n=T(o,q.current)}catch(e){r=e,t=e}r||(t=null),n===U.current?F.current||A():(U.current=n,B.current=n,F.current=!0,N({type:"STORE_UPDATED",payload:{latestStoreState:o,error:r}}))}};L.onStateChange=n,L.trySubscribe(),n();return function(){if(e=!0,L.tryUnsubscribe(),t)throw t}}},[P,L,T]);var z=Object(r.useMemo)(function(){return o.a.createElement(t,m({},D,{ref:c}))},[c,t,D]);return Object(r.useMemo)(function(){return h?o.a.createElement(d.Provider,{value:C},z):z},[d,z,C])}var b=u?o.a.memo(d):d;if(b.WrappedComponent=t,b.displayName=i,L){var P=o.a.forwardRef(function(e,t){return o.a.createElement(b,m({},e,{forwardedRef:t}))});return P.displayName=i,P.WrappedComponent=t,g()(P,t)}return g()(b,t)}}var T=Object.prototype.hasOwnProperty;function R(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function L(e,t){if(R(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!T.call(t,n[o])||!R(e[n[o]],t[n[o]]))return!1;return!0}var A=n(7);function C(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function M(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function _(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=M(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=M(o),o=r(t,n)),o},r}}var I=[function(e){return"function"==typeof e?_(e):void 0},function(e){return e?void 0:C(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?C(function(t){return Object(A.a)(e,t)}):void 0}];var N=[function(e){return"function"==typeof e?_(e):void 0},function(e){return e?void 0:C(function(){return{}})}];function U(e,t,n){return m({},n,e,t)}var q=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,a=!1;return function(t,n,s){var u=e(t,n,s);return a?o&&i(u,r)||(r=u):(a=!0,r=u),r}}}(e):void 0},function(e){return e?void 0:function(){return U}}];function B(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function F(e,t,n,r,o){var i,a,s,u,c,f=o.areStatesEqual,l=o.areOwnPropsEqual,p=o.areStatePropsEqual,d=!1;function h(o,d){var h,m,v=!l(d,a),b=!f(o,i);return i=o,a=d,v&&b?(s=e(i,a),t.dependsOnOwnProps&&(u=t(r,a)),c=n(s,u,a)):v?(e.dependsOnOwnProps&&(s=e(i,a)),t.dependsOnOwnProps&&(u=t(r,a)),c=n(s,u,a)):b?(h=e(i,a),m=!p(h,s),s=h,m&&(c=n(s,u,a)),c):c}return function(o,f){return d?h(o,f):(s=e(i=o,a=f),u=t(r,a),c=n(s,u,a),d=!0,c)}}function D(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=v(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),s=r(e,i),u=o(e,i);return(i.pure?F:B)(a,s,u,e,i)}function z(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function V(e,t){return e===t}var W,G,H,$,Y,K,J,X,Z,Q,ee,te,ne,re=(H=(G=void 0===W?{}:W).connectHOC,$=void 0===H?P:H,Y=G.mapStateToPropsFactories,K=void 0===Y?N:Y,J=G.mapDispatchToPropsFactories,X=void 0===J?I:J,Z=G.mergePropsFactories,Q=void 0===Z?q:Z,ee=G.selectorFactory,te=void 0===ee?D:ee,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,a=void 0===i||i,s=o.areStatesEqual,u=void 0===s?V:s,c=o.areOwnPropsEqual,f=void 0===c?L:c,l=o.areStatePropsEqual,p=void 0===l?L:l,d=o.areMergedPropsEqual,h=void 0===d?L:d,b=v(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=z(e,K,"mapStateToProps"),y=z(t,X,"mapDispatchToProps"),w=z(n,Q,"mergeProps");return $(te,m({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:y,initMergeProps:w,pure:a,areStatesEqual:u,areOwnPropsEqual:f,areStatePropsEqual:p,areMergedPropsEqual:h},b))}),oe=n(32);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return re}),ne=oe.unstable_batchedUpdates,u=ne},function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return c});var r=n(48),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var u=e,c=t,f=[],l=f,p=!1;function d(){l===f&&(l=f.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=l.indexOf(e);l.splice(n,1)}}}function v(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,c=u(c,e)}finally{p=!1}for(var t=f=l,n=0;n<t.length;n++){(0,t[n])()}return e}return v({type:i.INIT}),(o={dispatch:v,subscribe:m,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,v({type:i.REPLACE})}})[r.a]=function(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function u(e,t){return function(){return t(e.apply(this,arguments))}}function c(e,t){if("function"==typeof e)return u(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=u(a,t))}return r}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(14),o=n(25);e.exports=n(11)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){e.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=n(13)(15)},function(e,t){e.exports=react_c6740aed746dca4d39be},function(e,t,n){var r=n(11),o=n(53),i=n(4),a=n(36),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r,o,i,a=n(78),s=n(9),u=n(10),c=n(5),f=n(39),l=n(40),p=n(2).WeakMap;if(a){var d=new p,h=d.get,m=d.has,v=d.set;r=function(e,t){return v.call(d,e,t),t},o=function(e){return h.call(d,e)||{}},i=function(e){return m.call(d,e)}}else{var b=f("state");l[b]=!0,r=function(e,t){return u(e,b,t),t},o=function(e){return c(e,b)?e[b]:{}},i=function(e){return c(e,b)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u});const r=e=>({type:"SET_REVEAL",data:{id:e}}),o=()=>({type:"RESET_REVEAL"}),i=()=>({type:"SET_WIN",data:{}}),a=(e=!0)=>({type:"SET_ALERT",data:{alert:e}}),s=(e=!0)=>({type:"SET_FINISH_ALERT",data:{finishAlert:e}}),u=()=>({type:"SET_START"})},function(e,t,n){"use strict";var r=n(26),o=n(97),i=n(21),a=n(15),s=n(70),u=a.set,c=a.getterFor("Array Iterator");e.exports=s(Array,"Array",function(e,t){u(this,{type:"Array Iterator",target:r(e),index:0,kind:t})},function(){var e=c(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(e,t){e.exports=!1},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(2),o=n(10),i=n(5),a=n(38),s=n(54),u=n(15),c=u.get,f=u.enforce,l=String(s).split("toString");n(27)("inspectSource",function(e){return s.call(e)}),(e.exports=function(e,t,n,s){var u=!!s&&!!s.unsafe,c=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||o(n,"name",t),f(n).source=l.join("string"==typeof t?t:"")),e!==r?(u?!p&&e[t]&&(c=!0):delete e[t],c?e[t]=n:o(e,t,n)):c?e[t]=n:a(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&c(this).source||s.call(this)})},function(e,t){e.exports={}},function(e,t,n){var r=n(14).f,o=n(5),i=n(3)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],f=0;(u=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){var r=n(2),o=n(34).f,i=n(10),a=n(20),s=n(38),u=n(79),c=n(58);e.exports=function(e,t){var n,f,l,p,d,h=e.target,m=e.global,v=e.stat;if(n=m?r:v?r[h]||s(h,{}):(r[h]||{}).prototype)for(f in t){if(p=t[f],l=e.noTargetGet?(d=o(n,f))&&d.value:n[f],!c(m?f:h+(v?".":"#")+f,e.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(e.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,e)}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(52),o=n(35);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(2),o=n(38),i=r["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(18)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(28);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(86),o=n(3)("iterator"),i=n(21);e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return c});var r=n(1);r.keyframes`
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
`,s=r.keyframes`
    from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`,u=r.keyframes`
   from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`,c=r.keyframes`
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
`},function(e,t,n){e.exports=n(13)(7)},function(e,t,n){var r=n(101),o=n(17),i=n(2),a=n(10),s=n(3),u=s("iterator"),c=s("toStringTag"),f=o.values;for(var l in r){var p=i[l],d=p&&p.prototype;if(d){if(d[u]!==f)try{a(d,u,f)}catch(e){d[u]=f}if(d[c]||a(d,c,l),r[l])for(var h in o)if(d[h]!==o[h])try{a(d,h,o[h])}catch(e){d[h]=o[h]}}}},function(e,t,n){var r=n(11),o=n(51),i=n(25),a=n(26),s=n(36),u=n(5),c=n(53),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=s(t,!0),c)try{return f(e,t)}catch(e){}if(u(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(9);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(9),o=n(2).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(2),o=n(10);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(27)("keys"),o=n(55);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t){e.exports={}},function(e,t,n){var r=n(42),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},function(e,t,n){var r=n(35);e.exports=function(e){return Object(r(e))}},function(e,t,n){e.exports=n(13)(2)},function(e,t,n){"use strict";var r=n(46),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(e){return r.isMemo(e)?a:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var c=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var s=u(t),m=u(n),v=0;v<a.length;++v){var b=a[v];if(!(i[b]||r&&r[b]||m&&m[b]||s&&s[b])){var g=p(n,b);try{c(t,b,g)}catch(e){}}}return t}return t}},function(e,t,n){"use strict";(function(e,r){var o,i=n(76);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(95),n(96)(e))},function(e){e.exports=[{name:"webpack",title:"Webpack"},{name:"gulp",title:"Gulp"},{name:"npm",title:"NPM"},{name:"nodejs",title:"Node.js"},{name:"eslint",title:"ESLint"},{name:"babel",title:"Babel"},{name:"prettier",title:"Prettier"},{name:"react",title:"React"},{name:"redux",title:"Redux"},{name:"reactRouter",title:"react-router"},{name:"chrome",title:"Chrome"},{name:"firefox",title:"Firefox"},{name:"git",title:"Git"},{name:"vscode",title:"Visual Studio Code"},{name:"yarn",title:"yarn"},{name:"sass",title:"sass"},{name:"vue",title:"Vue.js"},{name:"less",title:"LESS"},{name:"typescript",title:"TypeScript"},{name:"angular",title:"Angular"}]},function(e,t,n){"use strict";var r,o,i,a="Promise",s=n(18),u=n(2),c=n(24),f=n(9),l=n(28),p=n(44),d=n(19),h=n(84),m=n(87),v=n(88),b=n(61).set,g=n(89),y=n(90),w=n(91),x=n(64),S=n(92),E=n(63),O=n(3)("species"),j=n(15),k=n(58),P=j.get,T=j.set,R=j.getterFor(a),L=u.Promise,A=u.TypeError,C=u.document,M=u.process,_=u.fetch,I=M&&M.versions,N=I&&I.v8||"",U=x.f,q=U,B="process"==d(M),F=!!(C&&C.createEvent&&u.dispatchEvent),D=k(a,function(){var e=L.resolve(1),t=function(){},n=(e.constructor={})[O]=function(e){e(t,t)};return!((B||"function"==typeof PromiseRejectionEvent)&&(!s||e.finally)&&e.then(t)instanceof n&&0!==N.indexOf("6.6")&&-1===E.indexOf("Chrome/66"))}),z=D||!m(function(e){L.all(e).catch(function(){})}),V=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},W=function(e,t,n){if(!t.notified){t.notified=!0;var r=t.reactions;g(function(){for(var o=t.value,i=1==t.state,a=0,s=function(n){var r,a,s,u=i?n.ok:n.fail,c=n.resolve,f=n.reject,l=n.domain;try{u?(i||(2===t.rejection&&Y(e,t),t.rejection=1),!0===u?r=o:(l&&l.enter(),r=u(o),l&&(l.exit(),s=!0)),r===n.promise?f(A("Promise-chain cycle")):(a=V(r))?a.call(r,c,f):c(r)):f(o)}catch(e){l&&!s&&l.exit(),f(e)}};r.length>a;)s(r[a++]);t.reactions=[],t.notified=!1,n&&!t.rejection&&H(e,t)})}},G=function(e,t,n){var r,o;F?((r=C.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},(o=u["on"+e])?o(r):"unhandledrejection"===e&&w("Unhandled promise rejection",n)},H=function(e,t){b.call(u,function(){var n,r=t.value;if($(t)&&(n=S(function(){B?M.emit("unhandledRejection",r,e):G("unhandledrejection",e,r)}),t.rejection=B||$(t)?2:1,n.error))throw n.value})},$=function(e){return 1!==e.rejection&&!e.parent},Y=function(e,t){b.call(u,function(){B?M.emit("rejectionHandled",e):G("rejectionhandled",e,t.value)})},K=function(e,t,n,r){return function(o){e(t,n,o,r)}},J=function(e,t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,W(e,t,!0))},X=function(e,t,n,r){if(!t.done){t.done=!0,r&&(t=r);try{if(e===n)throw A("Promise can't be resolved itself");var o=V(n);o?g(function(){var r={done:!1};try{o.call(n,K(X,e,r,t),K(J,e,r,t))}catch(n){J(e,r,n,t)}}):(t.value=n,t.state=1,W(e,t,!1))}catch(n){J(e,{done:!1},n,t)}}};D&&(L=function(e){p(this,L,a),l(e),r.call(this);var t=P(this);try{e(K(X,this,t),K(J,this,t))}catch(e){J(this,t,e)}},(r=function(e){T(this,{type:a,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=n(65)(L.prototype,{then:function(e,t){var n=R(this),r=U(v(this,L));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=B?M.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&W(this,n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=P(e);this.promise=e,this.resolve=K(X,e,t),this.reject=K(J,e,t)},x.f=U=function(e){return e===L||e===i?new o(e):q(e)},s||"function"!=typeof _||c({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return y(L,_.apply(u,arguments))}})),c({global:!0,wrap:!0,forced:D},{Promise:L}),n(22)(L,a,!1,!0),n(93)(a),i=n(66).Promise,c({target:a,stat:!0,forced:D},{reject:function(e){var t=U(this);return t.reject.call(void 0,e),t.promise}}),c({target:a,stat:!0,forced:s||D},{resolve:function(e){return y(s&&this===i?L:this,e)}}),c({target:a,stat:!0,forced:z},{all:function(e){var t=this,n=U(t),r=n.resolve,o=n.reject,i=S(function(){var n=[],i=0,a=1;h(e,function(e){var s=i++,u=!1;n.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,n[s]=e,--a||r(n))},o)}),--a||r(n)});return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=U(t),r=n.reject,o=S(function(){h(e,function(e){t.resolve(e).then(n.resolve,r)})});return o.error&&r(o.value),n.promise}})},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(8),o=n(19),i="".split;e.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t,n){e.exports=!n(11)&&!n(8)(function(){return 7!=Object.defineProperty(n(37)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=n(27)("native-function-to-string",Function.toString)},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(5),o=n(26),i=n(82)(!1),a=n(40);e.exports=function(e,t){var n,s=o(e),u=0,c=[];for(n in s)!r(a,n)&&r(s,n)&&c.push(n);for(;t.length>u;)r(s,n=t[u++])&&(~i(c,n)||c.push(n));return c}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(8),o=/#|\.prototype\./,i=function(e,t){var n=s[a(e)];return n==c||n!=u&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},function(e,t,n){var r=n(21),o=n(3)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[o]===e)}},function(e,t,n){var r=n(4);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&r(i.call(e)),t}}},function(e,t,n){var r,o,i,a=n(2),s=n(19),u=n(29),c=n(62),f=n(37),l=a.setImmediate,p=a.clearImmediate,d=a.process,h=a.MessageChannel,m=a.Dispatch,v=0,b={},g=function(){var e=+this;if(b.hasOwnProperty(e)){var t=b[e];delete b[e],t()}},y=function(e){g.call(e.data)};l&&p||(l=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return b[++v]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},r(v),v},p=function(e){delete b[e]},"process"==s(d)?r=function(e){d.nextTick(u(g,e,1))}:m&&m.now?r=function(e){m.now(u(g,e,1))}:h?(i=(o=new h).port2,o.port1.onmessage=y,r=u(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(r=function(e){a.postMessage(e+"","*")},a.addEventListener("message",y,!1)):r="onreadystatechange"in f("script")?function(e){c.appendChild(f("script")).onreadystatechange=function(){c.removeChild(this),g.call(e)}}:function(e){setTimeout(u(g,e,1),0)}),e.exports={set:l,clear:p}},function(e,t,n){var r=n(2).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(2).navigator;e.exports=r&&r.userAgent||""},function(e,t,n){"use strict";var r=n(28),o=function(e){var t,n;this.promise=new e(function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r}),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},function(e,t,n){var r=n(20);e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},function(e,t,n){e.exports=n(2)},function(e,t,n){var r=n(4),o=n(68),i=n(43),a=n(62),s=n(37),u=n(39)("IE_PROTO"),c=function(){},f=function(){var e,t=s("iframe"),n=i.length;for(t.style.display="none",a.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),f=e.F;n--;)delete f.prototype[i[n]];return f()};e.exports=Object.create||function(e,t){var n;return null!==e?(c.prototype=r(e),n=new c,c.prototype=null,n[u]=e):n=f(),void 0===t?n:o(n,t)},n(40)[u]=!0},function(e,t,n){var r=n(11),o=n(14),i=n(4),a=n(69);e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=a(t),s=r.length,u=0;s>u;)o.f(e,n=r[u++],t[n]);return e}},function(e,t,n){var r=n(56),o=n(43);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){"use strict";var r=n(24),o=n(71),i=n(73),a=n(99),s=n(22),u=n(10),c=n(20),f=n(18),l=n(3)("iterator"),p=n(21),d=n(72),h=d.IteratorPrototype,m=d.BUGGY_SAFARI_ITERATORS,v=function(){return this};e.exports=function(e,t,n,d,b,g,y){o(n,t,d);var w,x,S,E=function(e){if(e===b&&T)return T;if(!m&&e in k)return k[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},O=t+" Iterator",j=!1,k=e.prototype,P=k[l]||k["@@iterator"]||b&&k[b],T=!m&&P||E(b),R="Array"==t&&k.entries||P;if(R&&(w=i(R.call(new e)),h!==Object.prototype&&w.next&&(f||i(w)===h||(a?a(w,h):"function"!=typeof w[l]&&u(w,l,v)),s(w,O,!0,!0),f&&(p[O]=v))),"values"==b&&P&&"values"!==P.name&&(j=!0,T=function(){return P.call(this)}),f&&!y||k[l]===T||u(k,l,T),p[t]=T,b)if(x={values:E("values"),keys:g?T:E("keys"),entries:E("entries")},y)for(S in x)!m&&!j&&S in k||c(k,S,x[S]);else r({target:t,proto:!0,forced:m||j},x);return x}},function(e,t,n){"use strict";var r=n(72).IteratorPrototype,o=n(67),i=n(25),a=n(22),s=n(21),u=function(){return this};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=o(r,{next:i(1,n)}),a(e,c,!1,!0),s[c]=u,e}},function(e,t,n){"use strict";var r,o,i,a=n(73),s=n(10),u=n(5),c=n(18),f=n(3)("iterator"),l=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):l=!0),null==r&&(r={}),c||u(r,f)||s(r,f,function(){return this}),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:l}},function(e,t,n){var r=n(5),o=n(45),i=n(39)("IE_PROTO"),a=n(98),s=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){var r=n(42),o=n(35);e.exports=function(e,t,n){var i,a,s=String(o(e)),u=r(t),c=s.length;return u<0||u>=c?n?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?n?s.charAt(u):i:n?s.slice(u,u+2):a-56320+(i-55296<<10)+65536}},function(e,t,n){var r=n(18),o=n(3)("iterator");e.exports=!n(8)(function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",r&&!e.toJSON||!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash})},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Reset=t.reset=void 0;var r=n(1);function o(){var e=a(["",""]);return o=function(){return e},e}function i(){var e=a(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]);return i=function(){return e},e}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=(0,r.css)(i());t.reset=s;var u=(0,r.createGlobalStyle)(o(),s);t.Reset=u;var c=s;t.default=c},function(e,t,n){var r=n(54),o=n(2).WeakMap;e.exports="function"==typeof o&&/native code/.test(r.call(o))},function(e,t,n){var r=n(5),o=n(80),i=n(34),a=n(14);e.exports=function(e,t){for(var n=o(t),s=a.f,u=i.f,c=0;c<n.length;c++){var f=n[c];r(e,f)||s(e,f,u(t,f))}}},function(e,t,n){var r=n(81),o=n(57),i=n(4),a=n(2).Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(56),o=n(43).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(26),o=n(41),i=n(83);e.exports=function(e){return function(t,n,a){var s,u=r(t),c=o(u.length),f=i(a,c);if(e&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===n)return e||f||0;return!e&&-1}}},function(e,t,n){var r=n(42),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t,n){var r=n(4),o=n(59),i=n(41),a=n(29),s=n(30),u=n(60),c={};(e.exports=function(e,t,n,f,l){var p,d,h,m,v,b=a(t,n,f?2:1);if(l)p=e;else{if("function"!=typeof(d=s(e)))throw TypeError("Target is not iterable");if(o(d)){for(h=0,m=i(e.length);m>h;h++)if((f?b(r(v=e[h])[0],v[1]):b(e[h]))===c)return c;return}p=d.call(e)}for(;!(v=p.next()).done;)if(u(p,b,v.value,f)===c)return c}).BREAK=c},function(e,t,n){e.exports=!n(8)(function(){return!String(Symbol())})},function(e,t,n){var r=n(19),o=n(3)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(3)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[r]=function(){return this},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n}},function(e,t,n){var r=n(4),o=n(28),i=n(3)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[i])?t:o(n)}},function(e,t,n){var r,o,i,a,s,u,c,f=n(2),l=n(34).f,p=n(19),d=n(61).set,h=n(63),m=f.MutationObserver||f.WebKitMutationObserver,v=f.process,b=f.Promise,g="process"==p(v),y=l(f,"queueMicrotask"),w=y&&y.value;w||(r=function(){var e,t;for(g&&(e=v.domain)&&e.exit();o;){t=o.fn,o=o.next;try{t()}catch(e){throw o?a():i=void 0,e}}i=void 0,e&&e.enter()},g?a=function(){v.nextTick(r)}:m&&!/(iPhone|iPod|iPad).*AppleWebKit/i.test(h)?(s=!0,u=document.createTextNode(""),new m(r).observe(u,{characterData:!0}),a=function(){u.data=s=!s}):b&&b.resolve?(c=b.resolve(void 0),a=function(){c.then(r)}):a=function(){d.call(f,r)}),e.exports=w||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,a()),i=t}},function(e,t,n){var r=n(4),o=n(9),i=n(64);e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},function(e,t,n){var r=n(2);e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}},function(e,t,n){"use strict";var r=n(94),o=n(14),i=n(11),a=n(3)("species");e.exports=function(e){var t=r(e),n=o.f;i&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},function(e,t,n){var r=n(66),o=n(2),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},function(e,t,n){e.exports=n(13)(21)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){var r=n(3)("unscopables"),o=n(67),i=n(10),a=Array.prototype;null==a[r]&&i(a,r,o(null)),e.exports=function(e){a[r][e]=!0}},function(e,t,n){e.exports=!n(8)(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},function(e,t,n){var r=n(100);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,o){return r(n,o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},function(e,t,n){var r=n(9),o=n(4);e.exports=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){"use strict";n(103);var r,o=n(11),i=n(75),a=n(2).URL,s=n(68),u=n(20),c=n(44),f=n(5),l=n(104),p=n(105),d=n(74),h=n(107),m=n(108),v=m.URLSearchParams,b=m.getState,g=n(15),y=g.set,w=g.getterFor("URL"),x=Math.pow,S=/[a-zA-Z]/,E=/[a-zA-Z0-9+\-.]/,O=/\d/,j=/^(0x|0X)/,k=/^[0-7]+$/,P=/^\d+$/,T=/^[0-9A-Fa-f]+$/,R=/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/,L=/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/,A=/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g,C=/\u0009|\u000A|\u000D/g,M=function(e,t){var n,r,o;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(n=I(t.slice(1,-1))))return"Invalid host";e.host=n}else if(V(e)){if(t=h(t),R.test(t))return"Invalid host";if(null===(n=_(t)))return"Invalid host";e.host=n}else{if(L.test(t))return"Invalid host";for(n="",r=p(t),o=0;o<r.length;o++)n+=D(r[o],U);e.host=n}},_=function(e){var t,n,r,o,i,a,s,u=e.split(".");if(""==u[u.length-1]&&u.length&&u.pop(),(t=u.length)>4)return e;for(n=[],r=0;r<t;r++){if(""==(o=u[r]))return e;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=j.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?P:8==i?k:T).test(o))return e;a=parseInt(o,i)}n.push(a)}for(r=0;r<t;r++)if(a=n[r],r==t-1){if(a>=x(256,5-t))return null}else if(a>255)return null;for(s=n.pop(),r=0;r<n.length;r++)s+=n[r]*x(256,3-r);return s},I=function(e){var t,n,r,o,i,a,s,u=[0,0,0,0,0,0,0,0],c=0,f=null,l=0,p=function(){return e.charAt(l)};if(":"==p()){if(":"!=e.charAt(1))return;l+=2,f=++c}for(;p();){if(8==c)return;if(":"!=p()){for(t=n=0;n<4&&T.test(p());)t=16*t+parseInt(p(),16),l++,n++;if("."==p()){if(0==n)return;if(l-=n,c>6)return;for(r=0;p();){if(o=null,r>0){if(!("."==p()&&r<4))return;l++}if(!O.test(p()))return;for(;O.test(p());){if(i=parseInt(p(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}u[c]=256*u[c]+o,2!=++r&&4!=r||c++}if(4!=r)return;break}if(":"==p()){if(l++,!p())return}else if(p())return;u[c++]=t}else{if(null!==f)return;l++,f=++c}}if(null!==f)for(a=c-f,c=7;0!=c&&a>0;)s=u[c],u[c--]=u[f+a-1],u[f+--a]=s;else if(8!=c)return;return u},N=function(e){var t,n,r,o;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=Math.floor(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=function(e){for(var t=null,n=1,r=null,o=0,i=0;i<8;i++)0!==e[i]?(o>n&&(t=r,n=o),r=null,o=0):(null===r&&(r=i),++o);return o>n&&(t=r,n=o),t}(e),n=0;n<8;n++)o&&0===e[n]||(o&&(o=!1),r===n?(t+=n?":":"::",o=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},U={},q=l({},U,{" ":1,'"':1,"<":1,">":1,"`":1}),B=l({},q,{"#":1,"?":1,"{":1,"}":1}),F=l({},B,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),D=function(e,t){var n=d(e,0);return n>32&&n<127&&!f(t,e)?e:encodeURIComponent(e)},z={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},V=function(e){return f(z,e.scheme)},W=function(e){return""!=e.username||""!=e.password},G=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},H=function(e,t){var n;return 2==e.length&&S.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},$=function(e){var t;return e.length>1&&H(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Y=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&H(t[0],!0)||t.pop()},K=function(e){return"."===e||"%2e"===e.toLowerCase()},J={},X={},Z={},Q={},ee={},te={},ne={},re={},oe={},ie={},ae={},se={},ue={},ce={},fe={},le={},pe={},de={},he={},me={},ve={},be=function(e,t,n,o){var i,a,s,u,c,l=n||J,d=0,h="",m=!1,v=!1,b=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(A,"")),t=t.replace(C,""),i=p(t);d<=i.length;){switch(a=i[d],l){case J:if(!a||!S.test(a)){if(n)return"Invalid scheme";l=Z;continue}h+=a.toLowerCase(),l=X;break;case X:if(a&&(E.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return"Invalid scheme";h="",l=Z,d=0;continue}if(n&&(V(e)!=f(z,h)||"file"==h&&(W(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(V(e)&&z[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?l=ce:V(e)&&o&&o.scheme==e.scheme?l=Q:V(e)?l=re:"/"==i[d+1]?(l=ee,d++):(e.cannotBeABaseURL=!0,e.path.push(""),l=he)}break;case Z:if(!o||o.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(o.cannotBeABaseURL&&"#"==a){e.scheme=o.scheme,e.path=o.path.slice(),e.query=o.query,e.fragment="",e.cannotBeABaseURL=!0,l=ve;break}l="file"==o.scheme?ce:te;continue;case Q:if("/"!=a||"/"!=i[d+1]){l=te;continue}l=oe,d++;break;case ee:if("/"==a){l=ie;break}l=de;continue;case te:if(e.scheme=o.scheme,a==r)e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query=o.query;else if("/"==a||"\\"==a&&V(e))l=ne;else if("?"==a)e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query="",l=me;else{if("#"!=a){e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.path.pop(),l=de;continue}e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,e.path=o.path.slice(),e.query=o.query,e.fragment="",l=ve}break;case ne:if(!V(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=o.username,e.password=o.password,e.host=o.host,e.port=o.port,l=de;continue}l=ie}else l=oe;break;case re:if(l=oe,"/"!=a||"/"!=h.charAt(d+1))continue;d++;break;case oe:if("/"!=a&&"\\"!=a){l=ie;continue}break;case ie:if("@"==a){m&&(h="%40"+h),m=!0,s=p(h);for(var g=0;g<s.length;g++){var y=s[g];if(":"!=y||b){var w=D(y,F);b?e.password+=w:e.username+=w}else b=!0}h=""}else if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&V(e)){if(m&&""==h)return"Invalid authority";d-=p(h).length+1,h="",l=ae}else h+=a;break;case ae:case se:if(n&&"file"==e.scheme){l=le;continue}if(":"!=a||v){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&V(e)){if(V(e)&&""==h)return"Invalid host";if(n&&""==h&&(W(e)||null!==e.port))return;if(u=M(e,h))return u;if(h="",l=pe,n)return;continue}"["==a?v=!0:"]"==a&&(v=!1),h+=a}else{if(""==h)return"Invalid host";if(u=M(e,h))return u;if(h="",l=ue,n==se)return}break;case ue:if(!O.test(a)){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&V(e)||n){if(""!=h){var x=parseInt(h,10);if(x>65535)return"Invalid port";e.port=V(e)&&x===z[e.scheme]?null:x,h=""}if(n)return;l=pe;continue}return"Invalid port"}h+=a;break;case ce:if(e.scheme="file","/"==a||"\\"==a)l=fe;else{if(!o||"file"!=o.scheme){l=de;continue}if(a==r)e.host=o.host,e.path=o.path.slice(),e.query=o.query;else if("?"==a)e.host=o.host,e.path=o.path.slice(),e.query="",l=me;else{if("#"!=a){$(i.slice(d).join(""))||(e.host=o.host,e.path=o.path.slice(),Y(e)),l=de;continue}e.host=o.host,e.path=o.path.slice(),e.query=o.query,e.fragment="",l=ve}}break;case fe:if("/"==a||"\\"==a){l=le;break}o&&"file"==o.scheme&&!$(i.slice(d).join(""))&&(H(o.path[0],!0)?e.path.push(o.path[0]):e.host=o.host),l=de;continue;case le:if(a==r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&H(h))l=de;else if(""==h){if(e.host="",n)return;l=pe}else{if(u=M(e,h))return u;if("localhost"==e.host&&(e.host=""),n)return;h="",l=pe}continue}h+=a;break;case pe:if(V(e)){if(l=de,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=r&&(l=de,"/"!=a))continue}else e.fragment="",l=ve;else e.query="",l=me;break;case de:if(a==r||"/"==a||"\\"==a&&V(e)||!n&&("?"==a||"#"==a)){if(".."===(c=(c=h).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(Y(e),"/"==a||"\\"==a&&V(e)||e.path.push("")):K(h)?"/"==a||"\\"==a&&V(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&H(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==r||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",l=me):"#"==a&&(e.fragment="",l=ve)}else h+=D(a,B);break;case he:"?"==a?(e.query="",l=me):"#"==a?(e.fragment="",l=ve):a!=r&&(e.path[0]+=D(a,U));break;case me:n||"#"!=a?a!=r&&("'"==a&&V(e)?e.query+="%27":e.query+="#"==a?"%23":D(a,U)):(e.fragment="",l=ve);break;case ve:a!=r&&(e.fragment+=D(a,q))}d++}},ge=function(e){var t,n,r=c(this,ge,"URL"),i=arguments.length>1?arguments[1]:void 0,a=String(e),s=y(r,{type:"URL"});if(void 0!==i)if(i instanceof ge)t=w(i);else if(n=be(t={},String(i)))throw TypeError(n);if(n=be(s,a,null,t))throw TypeError(n);var u=s.searchParams=new v,f=b(u);f.updateSearchParams(s.query),f.updateURL=function(){s.query=String(u)||null},o||(r.href=we.call(r),r.origin=xe.call(r),r.protocol=Se.call(r),r.username=Ee.call(r),r.password=Oe.call(r),r.host=je.call(r),r.hostname=ke.call(r),r.port=Pe.call(r),r.pathname=Te.call(r),r.search=Re.call(r),r.searchParams=Le.call(r),r.hash=Ae.call(r))},ye=ge.prototype,we=function(){var e=w(this),t=e.scheme,n=e.username,r=e.password,o=e.host,i=e.port,a=e.path,s=e.query,u=e.fragment,c=t+":";return null!==o?(c+="//",W(e)&&(c+=n+(r?":"+r:"")+"@"),c+=N(o),null!==i&&(c+=":"+i)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},xe=function(){var e=w(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&V(e)?t+"://"+N(e.host)+(null!==n?":"+n:""):"null"},Se=function(){return w(this).scheme+":"},Ee=function(){return w(this).username},Oe=function(){return w(this).password},je=function(){var e=w(this),t=e.host,n=e.port;return null===t?"":null===n?N(t):N(t)+":"+n},ke=function(){var e=w(this).host;return null===e?"":N(e)},Pe=function(){var e=w(this).port;return null===e?"":String(e)},Te=function(){var e=w(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Re=function(){var e=w(this).query;return e?"?"+e:""},Le=function(){return w(this).searchParams},Ae=function(){var e=w(this).fragment;return e?"#"+e:""},Ce=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(o&&s(ye,{href:Ce(we,function(e){var t=w(this),n=String(e),r=be(t,n);if(r)throw TypeError(r);b(t.searchParams).updateSearchParams(t.query)}),origin:Ce(xe),protocol:Ce(Se,function(e){var t=w(this);be(t,String(e)+":",J)}),username:Ce(Ee,function(e){var t=w(this),n=p(String(e));if(!G(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=D(n[r],F)}}),password:Ce(Oe,function(e){var t=w(this),n=p(String(e));if(!G(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=D(n[r],F)}}),host:Ce(je,function(e){var t=w(this);t.cannotBeABaseURL||be(t,String(e),ae)}),hostname:Ce(ke,function(e){var t=w(this);t.cannotBeABaseURL||be(t,String(e),se)}),port:Ce(Pe,function(e){var t=w(this);G(t)||(""==(e=String(e))?t.port=null:be(t,e,ue))}),pathname:Ce(Te,function(e){var t=w(this);t.cannotBeABaseURL||(t.path=[],be(t,e+"",pe))}),search:Ce(Re,function(e){var t=w(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",be(t,e,me)),b(t.searchParams).updateSearchParams(t.query)}),searchParams:Ce(Le),hash:Ce(Ae,function(e){var t=w(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",be(t,e,ve)):t.fragment=null})}),u(ye,"toJSON",function(){return we.call(this)},{enumerable:!0}),u(ye,"toString",function(){return we.call(this)},{enumerable:!0}),a){var Me=a.createObjectURL,_e=a.revokeObjectURL;Me&&u(ge,"createObjectURL",function(e){return Me.apply(a,arguments)}),_e&&u(ge,"revokeObjectURL",function(e){return _e.apply(a,arguments)})}n(22)(ge,"URL"),n(24)({global:!0,forced:!i,sham:!o},{URL:ge})},function(e,t,n){"use strict";var r=n(74),o=n(15),i=n(70),a=o.set,s=o.getterFor("String Iterator");i(String,"String",function(e){a(this,{type:"String Iterator",string:String(e),index:0})},function(){var e,t=s(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o,!0),t.index+=e.length,{value:e,done:!1})})},function(e,t,n){"use strict";var r=n(69),o=n(57),i=n(51),a=n(45),s=n(52),u=Object.assign;e.exports=!u||n(8)(function(){var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||"abcdefghijklmnopqrst"!=r(u({},t)).join("")})?function(e,t){for(var n=a(e),u=arguments.length,c=1,f=o.f,l=i.f;u>c;)for(var p,d=s(arguments[c++]),h=f?r(d).concat(f(d)):r(d),m=h.length,v=0;m>v;)l.call(d,p=h[v++])&&(n[p]=d[p]);return n}:u},function(e,t,n){"use strict";var r=n(29),o=n(45),i=n(60),a=n(59),s=n(41),u=n(106),c=n(30);e.exports=function(e){var t,n,f,l,p=o(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,b=0,g=c(p);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),null==g||d==Array&&a(g))for(n=new d(t=s(p.length));t>b;b++)u(n,b,v?m(p[b],b):p[b]);else for(l=g.call(p),n=new d;!(f=l.next()).done;b++)u(n,b,v?i(l,m,[f.value,b],!0):f.value);return n.length=b,n}},function(e,t,n){"use strict";var r=n(36),o=n(14),i=n(25);e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},function(e,t,n){"use strict";var r=/[^\0-\u007E]/,o=/[\u002E\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",a=Math.floor,s=String.fromCharCode,u=function(e){return e+22+75*(e<26)},c=function(e,t,n){var r=0;for(e=n?a(e/700):e>>1,e+=a(e/t);e>455;r+=36)e=a(e/35);return a(r+36*e/(e+38))},f=function(e){var t,n,r=[],o=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);56320==(64512&i)?t.push(((1023&o)<<10)+(1023&i)+65536):(t.push(o),n--)}else t.push(o)}return t}(e)).length,f=128,l=0,p=72;for(t=0;t<e.length;t++)(n=e[t])<128&&r.push(s(n));var d=r.length,h=d;for(d&&r.push("-");h<o;){var m=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=f&&n<m&&(m=n);var v=h+1;if(m-f>a((2147483647-l)/v))throw RangeError(i);for(l+=(m-f)*v,f=m,t=0;t<e.length;t++){if((n=e[t])<f&&++l>2147483647)throw RangeError(i);if(n==f){for(var b=l,g=36;;g+=36){var y=g<=p?1:g>=p+26?26:g-p;if(b<y)break;var w=b-y,x=36-y;r.push(s(u(y+w%x))),b=a(w/x)}r.push(s(u(b))),p=c(l,v,h==d),l=0,++h}}++l,++f}return r.join("")};e.exports=function(e){var t,n,i=[],a=e.toLowerCase().replace(o,".").split(".");for(t=0;t<a.length;t++)n=a[t],i.push(r.test(n)?"xn--"+f(n):n);return i.join(".")}},function(e,t,n){"use strict";n(17);var r=n(75),o=n(20),i=n(65),a=n(71),s=n(15),u=n(44),c=n(5),f=n(29),l=n(4),p=n(9),d=n(109),h=n(30),m=n(3)("iterator"),v=s.set,b=s.getterFor("URLSearchParams"),g=s.getterFor("URLSearchParamsIterator"),y=/\+/g,w=Array(4),x=function(e){return w[e-1]||(w[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},S=function(e){try{return decodeURIComponent(e)}catch(t){return e}},E=function(e){for(var t=e.replace(y," "),n=4;n;)t=t.replace(x(n--),S);return t},O=/[!'()~]|%20/g,j={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},k=function(e){return j[e]},P=function(e){return encodeURIComponent(e).replace(O,k)},T=function(e,t){if(t)for(var n,r,o=t.split("&"),i=0;i<o.length;)(n=o[i++]).length&&(r=n.split("="),e.push({key:E(r.shift()),value:E(r.join("="))}));return e},R=function(e){this.entries.length=0,T(this.entries,e)},L=function(e,t){if(e<t)throw TypeError("Not enough arguments")},A=a(function(e,t){v(this,{type:"URLSearchParamsIterator",iterator:d(b(e).entries),kind:t})},"Iterator",function(){var e=g(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),C=function(){u(this,C,"URLSearchParams");var e,t,n,r,o,i,a,s=arguments.length>0?arguments[0]:void 0,f=[];if(v(this,{type:"URLSearchParams",entries:f,updateURL:null,updateSearchParams:R}),void 0!==s)if(p(s))if("function"==typeof(e=h(s)))for(t=e.call(s);!(n=t.next()).done;){if((o=(r=d(l(n.value))).next()).done||(i=r.next()).done||!r.next().done)throw TypeError("Expected sequence with length 2");f.push({key:o.value+"",value:i.value+""})}else for(a in s)c(s,a)&&f.push({key:a,value:s[a]+""});else T(f,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},M=C.prototype;i(M,{append:function(e,t){L(arguments.length,2);var n=b(this);n.entries.push({key:e+"",value:t+""}),n.updateURL&&n.updateURL()},delete:function(e){L(arguments.length,1);for(var t=b(this),n=t.entries,r=e+"",o=0;o<n.length;)n[o].key===r?n.splice(o,1):o++;t.updateURL&&t.updateURL()},get:function(e){L(arguments.length,1);for(var t=b(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){L(arguments.length,1);for(var t=b(this).entries,n=e+"",r=[],o=0;o<t.length;o++)t[o].key===n&&r.push(t[o].value);return r},has:function(e){L(arguments.length,1);for(var t=b(this).entries,n=e+"",r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){L(arguments.length,1);for(var n,r=b(this),o=r.entries,i=!1,a=e+"",s=t+"",u=0;u<o.length;u++)(n=o[u]).key===a&&(i?o.splice(u--,1):(i=!0,n.value=s));i||o.push({key:a,value:s}),r.updateURL&&r.updateURL()},sort:function(){var e,t,n,r=b(this),o=r.entries,i=o.slice();for(o.length=0,t=0;t<i.length;t++){for(e=i[t],n=0;n<t;n++)if(o[n].key>e.key){o.splice(n,0,e);break}n===t&&o.push(e)}r.updateURL&&r.updateURL()},forEach:function(e){for(var t,n=b(this).entries,r=f(e,arguments.length>1?arguments[1]:void 0,3),o=0;o<n.length;)r((t=n[o++]).value,t.key,this)},keys:function(){return new A(this,"keys")},values:function(){return new A(this,"values")},entries:function(){return new A(this,"entries")}},{enumerable:!0}),o(M,m,M.entries),o(M,"toString",function(){for(var e,t=b(this).entries,n=[],r=0;r<t.length;)e=t[r++],n.push(P(e.key)+"="+P(e.value));return n.join("&")},{enumerable:!0}),n(22)(C,"URLSearchParams"),n(24)({global:!0,forced:!r},{URLSearchParams:C}),e.exports={URLSearchParams:C,getState:b}},function(e,t,n){var r=n(4),o=n(30);e.exports=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(32),a=n.n(i),s=(n(50),n(6)),u=n(7),c=(n(17),n(33),n(49));function f(e){return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}const l=()=>{return function(e){let t=e.length;for(;t>0;){let n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e}([...c.map(e=>({name:e.name,title:e.title})),...c.map(e=>({name:e.name,path:`static/logos/${e.name}.png`}))]).map((e,t)=>({...e,id:t+1}))};let p={data:l(),reveals:[],hits:[],playing:!1,win:!1,alert:!1,finishAlert:!1};const d=(e,t)=>{const[n=null,r=null]=e;if(n&&r){return t.find(e=>e.id===n).name===t.find(e=>e.id===r).name}return!1};var h=(e=p,t={type:"",data:{}})=>{const{reveals:n,hits:r,data:o}=e;switch(t.type){case"SET_REVEAL":const{id:i}=t.data;return n.push(i),n.length>=2&&(n.length>2&&n.shift(),d(n,o)&&(r.push(...n),n.length=0)),{...e,reveals:[...n],hits:r};case"RESET_REVEAL":return{...e,reveals:[]};case"SET_WIN":return{...e,win:!0,playing:!1,finishAlert:!0};case"SET_ALERT":const{alert:a}=t.data;return{...e,alert:a};case"SET_FINISH_ALERT":const{finishAlert:s}=t.data;return{...e,finishAlert:s};case"SET_START":return{data:l(),reveals:[],hits:[],playing:!0,win:!1,finishAlert:!1};default:return{...e}}};var m=Object(u.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=n(16),b=n(1),g=n(31);const y=b.default.div`
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
    animation: ${g.e} 1s;
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
`;var w=Object(s.b)(({alert:e})=>({isVisible:e}),e=>({setAlert:Object(u.a)(v.b,e)}))(({isVisible:e,setAlert:t})=>{return Object(r.useEffect)(()=>{e&&window.scrollTo({top:100,left:100,behavior:"smooth"})},[e]),e?o.a.createElement(y,null,o.a.createElement("section",{className:"alert"},o.a.createElement("h1",{className:"header"},"☝️☝️☝️"),o.a.createElement("p",{className:"content"},"click ",o.a.createElement("span",{className:"start"},"START")," button first!"),o.a.createElement("div",{className:"close",onClick:()=>{t(!1)}},"x"))):null});const x=b.default.div`
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
    animation: ${g.d} 1s;
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
`;var S=Object(s.b)(({finishAlert:e})=>({isVisible:e}),e=>({setFinishAlert:Object(u.a)(v.c,e)}))(({isVisible:e,setFinishAlert:t})=>{return Object(r.useEffect)(()=>{e&&window.scrollTo({top:100,left:100,behavior:"smooth"})},[e]),e?o.a.createElement(x,null,o.a.createElement("section",{className:"alert"},o.a.createElement("h1",{className:"header"},"👍👍👍"),o.a.createElement("p",{className:"content"},o.a.createElement("span",null,"Greeeeeeeat Job!"),o.a.createElement("span",null,"You can click ",o.a.createElement("span",{className:"start"},"START")," to try again!")),o.a.createElement("div",{className:"close",onClick:()=>{t(!1)}},"x"))):null});const E=b.default.header`
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
`;var O=()=>o.a.createElement(E,null,o.a.createElement("h1",null,"🤔 FLMG 🤔"),o.a.createElement("h2",null,"Frontend Logo Memory Game"));const j=b.default.footer`
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
`;var k=()=>o.a.createElement(j,null,o.a.createElement("h1",null,"FLMG © Tristan"),o.a.createElement("h2",null,"Inspired By"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/davinci/pen/yVZapY"},"Brainymo")));const P=b.default.button`
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
`;var T=Object(s.b)(e=>{const{playing:t,win:n}=e;return{playing:t,win:n}},e=>({setStart:Object(u.a)(v.e,e)}))(({playing:e,win:t,setStart:n})=>{return o.a.createElement(P,{onClick:()=>{n()}},e||t?"restart":"start")});var R=b.default.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 1.4rem;
    font-weight: 800;
  }
`;const L=b.default.aside`
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
`,A=()=>Number(localStorage.getItem("BEST_TIME")||0);let C=null;var M=Object(s.b)(e=>{const{playing:t,win:n}=e;return{playing:t,win:n}})(({playing:e,win:t})=>{const n=A(),[i,a]=Object(r.useState)(0),[s,u]=Object(r.useState)(n);return Object(r.useEffect)(()=>{e?C=setInterval(()=>{a(e=>e+1)},1e3):clearInterval(C)},[e]),Object(r.useEffect)(()=>{if(t&&0!==i){clearInterval(C);let e=A();(0===e||e>i)&&(u(i),localStorage.setItem("BEST_TIME",i)),a(0)}},[t,i]),o.a.createElement(L,null,e?o.a.createElement("p",{className:"currTime"},f(i)):null,o.a.createElement("p",{className:"bestTime"},"Best Time: ",f(s)))});const _=o.a.lazy(()=>n.e(2).then(n.bind(null,114))),I=o.a.lazy(()=>Promise.all([n.e(4),n.e(1)]).then(n.bind(null,115))),N=o.a.lazy(()=>n.e(3).then(n.bind(null,116)));var U=()=>o.a.createElement(s.a,{store:m},o.a.createElement(r.Suspense,{fallback:o.a.createElement(R,null,o.a.createElement("div",{className:"tip"},"Loading..."))},o.a.createElement(_,null),o.a.createElement(S,null),o.a.createElement(w,null),o.a.createElement(I,null),o.a.createElement(M,null),o.a.createElement(O,null),o.a.createElement(T,null),o.a.createElement(N,null),o.a.createElement(k,null))),q=n(77),B=n.n(q);var F=b.createGlobalStyle`
  ${B.a}

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
`;n(102);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(F,null),o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}]);