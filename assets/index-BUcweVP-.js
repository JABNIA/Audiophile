(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();function Im(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Fs={exports:{}},bi={},zs={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Lm(){if(ip)return we;ip=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function F(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,I={};function O(S,D,pe){this.props=S,this.context=D,this.refs=I,this.updater=pe||A}O.prototype.isReactComponent={},O.prototype.setState=function(S,D){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,D,"setState")},O.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function L(){}L.prototype=O.prototype;function b(S,D,pe){this.props=S,this.context=D,this.refs=I,this.updater=pe||A}var q=b.prototype=new L;q.constructor=b,T(q,O.prototype),q.isPureReactComponent=!0;var K=Array.isArray,G=Object.prototype.hasOwnProperty,oe={current:null},J={key:!0,ref:!0,__self:!0,__source:!0};function Se(S,D,pe){var fe,ye={},he=null,je=null;if(D!=null)for(fe in D.ref!==void 0&&(je=D.ref),D.key!==void 0&&(he=""+D.key),D)G.call(D,fe)&&!J.hasOwnProperty(fe)&&(ye[fe]=D[fe]);var ve=arguments.length-2;if(ve===1)ye.children=pe;else if(1<ve){for(var Ce=Array(ve),Ze=0;Ze<ve;Ze++)Ce[Ze]=arguments[Ze+2];ye.children=Ce}if(S&&S.defaultProps)for(fe in ve=S.defaultProps,ve)ye[fe]===void 0&&(ye[fe]=ve[fe]);return{$$typeof:r,type:S,key:he,ref:je,props:ye,_owner:oe.current}}function Ee(S,D){return{$$typeof:r,type:S.type,key:D,ref:S.ref,props:S.props,_owner:S._owner}}function _e(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function lt(S){var D={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(pe){return D[pe]})}var ue=/\/+/g;function de(S,D){return typeof S=="object"&&S!==null&&S.key!=null?lt(""+S.key):D.toString(36)}function Pe(S,D,pe,fe,ye){var he=typeof S;(he==="undefined"||he==="boolean")&&(S=null);var je=!1;if(S===null)je=!0;else switch(he){case"string":case"number":je=!0;break;case"object":switch(S.$$typeof){case r:case l:je=!0}}if(je)return je=S,ye=ye(je),S=fe===""?"."+de(je,0):fe,K(ye)?(pe="",S!=null&&(pe=S.replace(ue,"$&/")+"/"),Pe(ye,D,pe,"",function(Ze){return Ze})):ye!=null&&(_e(ye)&&(ye=Ee(ye,pe+(!ye.key||je&&je.key===ye.key?"":(""+ye.key).replace(ue,"$&/")+"/")+S)),D.push(ye)),1;if(je=0,fe=fe===""?".":fe+":",K(S))for(var ve=0;ve<S.length;ve++){he=S[ve];var Ce=fe+de(he,ve);je+=Pe(he,D,pe,Ce,ye)}else if(Ce=F(S),typeof Ce=="function")for(S=Ce.call(S),ve=0;!(he=S.next()).done;)he=he.value,Ce=fe+de(he,ve++),je+=Pe(he,D,pe,Ce,ye);else if(he==="object")throw D=String(S),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return je}function Re(S,D,pe){if(S==null)return S;var fe=[],ye=0;return Pe(S,fe,"","",function(he){return D.call(pe,he,ye++)}),fe}function Te(S){if(S._status===-1){var D=S._result;D=D(),D.then(function(pe){(S._status===0||S._status===-1)&&(S._status=1,S._result=pe)},function(pe){(S._status===0||S._status===-1)&&(S._status=2,S._result=pe)}),S._status===-1&&(S._status=0,S._result=D)}if(S._status===1)return S._result.default;throw S._result}var xe={current:null},H={transition:null},ee={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:H,ReactCurrentOwner:oe};function Q(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Re,forEach:function(S,D,pe){Re(S,function(){D.apply(this,arguments)},pe)},count:function(S){var D=0;return Re(S,function(){D++}),D},toArray:function(S){return Re(S,function(D){return D})||[]},only:function(S){if(!_e(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},we.Component=O,we.Fragment=o,we.Profiler=c,we.PureComponent=b,we.StrictMode=u,we.Suspense=x,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,we.act=Q,we.cloneElement=function(S,D,pe){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var fe=T({},S.props),ye=S.key,he=S.ref,je=S._owner;if(D!=null){if(D.ref!==void 0&&(he=D.ref,je=oe.current),D.key!==void 0&&(ye=""+D.key),S.type&&S.type.defaultProps)var ve=S.type.defaultProps;for(Ce in D)G.call(D,Ce)&&!J.hasOwnProperty(Ce)&&(fe[Ce]=D[Ce]===void 0&&ve!==void 0?ve[Ce]:D[Ce])}var Ce=arguments.length-2;if(Ce===1)fe.children=pe;else if(1<Ce){ve=Array(Ce);for(var Ze=0;Ze<Ce;Ze++)ve[Ze]=arguments[Ze+2];fe.children=ve}return{$$typeof:r,type:S.type,key:ye,ref:he,props:fe,_owner:je}},we.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:d,_context:S},S.Consumer=S},we.createElement=Se,we.createFactory=function(S){var D=Se.bind(null,S);return D.type=S,D},we.createRef=function(){return{current:null}},we.forwardRef=function(S){return{$$typeof:m,render:S}},we.isValidElement=_e,we.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:Te}},we.memo=function(S,D){return{$$typeof:k,type:S,compare:D===void 0?null:D}},we.startTransition=function(S){var D=H.transition;H.transition={};try{S()}finally{H.transition=D}},we.unstable_act=Q,we.useCallback=function(S,D){return xe.current.useCallback(S,D)},we.useContext=function(S){return xe.current.useContext(S)},we.useDebugValue=function(){},we.useDeferredValue=function(S){return xe.current.useDeferredValue(S)},we.useEffect=function(S,D){return xe.current.useEffect(S,D)},we.useId=function(){return xe.current.useId()},we.useImperativeHandle=function(S,D,pe){return xe.current.useImperativeHandle(S,D,pe)},we.useInsertionEffect=function(S,D){return xe.current.useInsertionEffect(S,D)},we.useLayoutEffect=function(S,D){return xe.current.useLayoutEffect(S,D)},we.useMemo=function(S,D){return xe.current.useMemo(S,D)},we.useReducer=function(S,D,pe){return xe.current.useReducer(S,D,pe)},we.useRef=function(S){return xe.current.useRef(S)},we.useState=function(S){return xe.current.useState(S)},we.useSyncExternalStore=function(S,D,pe){return xe.current.useSyncExternalStore(S,D,pe)},we.useTransition=function(){return xe.current.useTransition()},we.version="18.3.1",we}var op;function iu(){return op||(op=1,zs.exports=Lm()),zs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function Am(){if(lp)return bi;lp=1;var r=iu(),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(m,x,k){var _,E={},F=null,A=null;k!==void 0&&(F=""+k),x.key!==void 0&&(F=""+x.key),x.ref!==void 0&&(A=x.ref);for(_ in x)u.call(x,_)&&!d.hasOwnProperty(_)&&(E[_]=x[_]);if(m&&m.defaultProps)for(_ in x=m.defaultProps,x)E[_]===void 0&&(E[_]=x[_]);return{$$typeof:l,type:m,key:F,ref:A,props:E,_owner:c.current}}return bi.Fragment=o,bi.jsx=h,bi.jsxs=h,bi}var ap;function Om(){return ap||(ap=1,Fs.exports=Am()),Fs.exports}var f=Om(),z=iu();const ut=Im(z);var ll={},Rs={exports:{}},Ct={},bs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function Mm(){return sp||(sp=1,function(r){function l(H,ee){var Q=H.length;H.push(ee);e:for(;0<Q;){var S=Q-1>>>1,D=H[S];if(0<c(D,ee))H[S]=ee,H[Q]=D,Q=S;else break e}}function o(H){return H.length===0?null:H[0]}function u(H){if(H.length===0)return null;var ee=H[0],Q=H.pop();if(Q!==ee){H[0]=Q;e:for(var S=0,D=H.length,pe=D>>>1;S<pe;){var fe=2*(S+1)-1,ye=H[fe],he=fe+1,je=H[he];if(0>c(ye,Q))he<D&&0>c(je,ye)?(H[S]=je,H[he]=Q,S=he):(H[S]=ye,H[fe]=Q,S=fe);else if(he<D&&0>c(je,Q))H[S]=je,H[he]=Q,S=he;else break e}}return ee}function c(H,ee){var Q=H.sortIndex-ee.sortIndex;return Q!==0?Q:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var x=[],k=[],_=1,E=null,F=3,A=!1,T=!1,I=!1,O=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(H){for(var ee=o(k);ee!==null;){if(ee.callback===null)u(k);else if(ee.startTime<=H)u(k),ee.sortIndex=ee.expirationTime,l(x,ee);else break;ee=o(k)}}function K(H){if(I=!1,q(H),!T)if(o(x)!==null)T=!0,Te(G);else{var ee=o(k);ee!==null&&xe(K,ee.startTime-H)}}function G(H,ee){T=!1,I&&(I=!1,L(Se),Se=-1),A=!0;var Q=F;try{for(q(ee),E=o(x);E!==null&&(!(E.expirationTime>ee)||H&&!lt());){var S=E.callback;if(typeof S=="function"){E.callback=null,F=E.priorityLevel;var D=S(E.expirationTime<=ee);ee=r.unstable_now(),typeof D=="function"?E.callback=D:E===o(x)&&u(x),q(ee)}else u(x);E=o(x)}if(E!==null)var pe=!0;else{var fe=o(k);fe!==null&&xe(K,fe.startTime-ee),pe=!1}return pe}finally{E=null,F=Q,A=!1}}var oe=!1,J=null,Se=-1,Ee=5,_e=-1;function lt(){return!(r.unstable_now()-_e<Ee)}function ue(){if(J!==null){var H=r.unstable_now();_e=H;var ee=!0;try{ee=J(!0,H)}finally{ee?de():(oe=!1,J=null)}}else oe=!1}var de;if(typeof b=="function")de=function(){b(ue)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Re=Pe.port2;Pe.port1.onmessage=ue,de=function(){Re.postMessage(null)}}else de=function(){O(ue,0)};function Te(H){J=H,oe||(oe=!0,de())}function xe(H,ee){Se=O(function(){H(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){T||A||(T=!0,Te(G))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return F},r.unstable_getFirstCallbackNode=function(){return o(x)},r.unstable_next=function(H){switch(F){case 1:case 2:case 3:var ee=3;break;default:ee=F}var Q=F;F=ee;try{return H()}finally{F=Q}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Q=F;F=H;try{return ee()}finally{F=Q}},r.unstable_scheduleCallback=function(H,ee,Q){var S=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?S+Q:S):Q=S,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Q+D,H={id:_++,callback:ee,priorityLevel:H,startTime:Q,expirationTime:D,sortIndex:-1},Q>S?(H.sortIndex=Q,l(k,H),o(x)===null&&H===o(k)&&(I?(L(Se),Se=-1):I=!0,xe(K,Q-S))):(H.sortIndex=D,l(x,H),T||A||(T=!0,Te(G))),H},r.unstable_shouldYield=lt,r.unstable_wrapCallback=function(H){var ee=F;return function(){var Q=F;F=ee;try{return H.apply(this,arguments)}finally{F=Q}}}}(Ts)),Ts}var up;function $m(){return up||(up=1,bs.exports=Mm()),bs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function Um(){if(cp)return Ct;cp=1;var r=iu(),l=$m();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(c[e]=t,e=0;e<t.length;e++)u.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function F(e){return x.call(E,e)?!0:x.call(_,e)?!1:k.test(e)?E[e]=!0:(_[e]=!0,!1)}function A(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,n,i){if(t===null||typeof t>"u"||A(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,n,i,a,s,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=p}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(L,b);O[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(L,b);O[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(L,b);O[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,n,i){var a=O.hasOwnProperty(t)?O[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,n,a,i)&&(n=null),i||a===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,i=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var K=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),oe=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),lt=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,S;function D(e){if(S===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var pe=!1;function fe(e,t){if(!e||pe)return"";pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var i=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){i=N}e.call(t.prototype)}else{try{throw Error()}catch(N){i=N}e()}}catch(N){if(N&&i&&typeof N.stack=="string"){for(var a=N.stack.split(`
`),s=i.stack.split(`
`),p=a.length-1,g=s.length-1;1<=p&&0<=g&&a[p]!==s[g];)g--;for(;1<=p&&0<=g;p--,g--)if(a[p]!==s[g]){if(p!==1||g!==1)do if(p--,g--,0>g||a[p]!==s[g]){var y=`
`+a[p].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=p&&0<=g);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function ye(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case oe:return"Portal";case Ee:return"Profiler";case Se:return"StrictMode";case de:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lt:return(e.displayName||"Context")+".Consumer";case _e:return(e._context.displayName||"Context")+".Provider";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=Ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){i=""+p,s.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tt(e){e._valueTracker||(e._valueTracker=Ze(e))}function _t(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ce(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hr(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ol(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=ve(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ml(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function Qi(e,t){Ml(e,t);var n=ve(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?P(e,t.type,n):t.hasOwnProperty("defaultValue")&&P(e,t.type,ve(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function v(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function P(e,t,n){(t!=="number"||qn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var R=Array.isArray;function X(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ve(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function W(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function B(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(R(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ve(n)}}function le(e,t){var n=ve(t.value),i=ve(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function me(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function We(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?We(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pt,Yi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pt=Pt||document.createElement("div"),Pt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$l=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(e){$l.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pn[t]=pn[e]})});function Yr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pn.hasOwnProperty(e)&&pn[e]?(""+t).trim():t+"px"}function Ki(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,a=Yr(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,a):e[n]=a}}var Gi=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(e,t){if(t){if(Gi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,mr=null,gr=null;function ku(e){if(e=xi(e)){if(typeof Wl!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ko(t),Wl(e.stateNode,e.type,t))}}function Su(e){mr?gr?gr.push(e):gr=[e]:mr=e}function Cu(){if(mr){var e=mr,t=gr;if(gr=mr=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function Eu(e,t){return e(t)}function ju(){}var Xl=!1;function _u(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Eu(e,t,n)}finally{Xl=!1,(mr!==null||gr!==null)&&(ju(),Cu())}}function Kr(e,t){var n=e.stateNode;if(n===null)return null;var i=ko(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var ql=!1;if(m)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{ql=!1}function Vf(e,t,n,i,a,s,p,g,y){var N=Array.prototype.slice.call(arguments,3);try{t.apply(n,N)}catch($){this.onError($)}}var Zr=!1,Zi=null,Ji=!1,Ql=null,Bf={onError:function(e){Zr=!0,Zi=e}};function Hf(e,t,n,i,a,s,p,g,y){Zr=!1,Zi=null,Vf.apply(Bf,arguments)}function Wf(e,t,n,i,a,s,p,g,y){if(Hf.apply(this,arguments),Zr){if(Zr){var N=Zi;Zr=!1,Zi=null}else throw Error(o(198));Ji||(Ji=!0,Ql=N)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(Qn(e)!==e)throw Error(o(188))}function Xf(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Nu(a),e;if(s===i)return Nu(a),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=a,i=s;else{for(var p=!1,g=a.child;g;){if(g===n){p=!0,n=a,i=s;break}if(g===i){p=!0,i=a,n=s;break}g=g.sibling}if(!p){for(g=s.child;g;){if(g===n){p=!0,n=s,i=a;break}if(g===i){p=!0,i=s,n=a;break}g=g.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function Fu(e){return e=Xf(e),e!==null?zu(e):null}function zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zu(e);if(t!==null)return t;e=e.sibling}return null}var Ru=l.unstable_scheduleCallback,bu=l.unstable_cancelCallback,qf=l.unstable_shouldYield,Qf=l.unstable_requestPaint,Xe=l.unstable_now,Yf=l.unstable_getCurrentPriorityLevel,Yl=l.unstable_ImmediatePriority,Tu=l.unstable_UserBlockingPriority,eo=l.unstable_NormalPriority,Kf=l.unstable_LowPriority,Du=l.unstable_IdlePriority,to=null,Zt=null;function Gf(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:eh,Zf=Math.log,Jf=Math.LN2;function eh(e){return e>>>=0,e===0?32:31-(Zf(e)/Jf|0)|0}var no=64,ro=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function io(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,a=e.suspendedLanes,s=e.pingedLanes,p=n&268435455;if(p!==0){var g=p&~a;g!==0?i=Jr(g):(s&=p,s!==0&&(i=Jr(s)))}else p=n&~a,p!==0?i=Jr(p):s!==0&&(i=Jr(s));if(i===0)return 0;if(t!==0&&t!==i&&!(t&a)&&(a=i&-i,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Vt(t),a=1<<n,i|=e[n],t&=~a;return i}function th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nh(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var p=31-Vt(s),g=1<<p,y=a[p];y===-1?(!(g&n)||g&i)&&(a[p]=th(g,t)):y<=t&&(e.expiredLanes|=g),s&=~g}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function rh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Vt(n),s=1<<a;t[a]=0,i[a]=-1,e[a]=-1,n&=~s}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Vt(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}var be=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,Jl,Ou,Mu,$u,ea=!1,oo=[],En=null,jn=null,_n=null,ti=new Map,ni=new Map,Pn=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function ri(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=xi(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function oh(e,t,n,i,a){switch(t){case"focusin":return En=ri(En,e,t,n,i,a),!0;case"dragenter":return jn=ri(jn,e,t,n,i,a),!0;case"mouseover":return _n=ri(_n,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return ti.set(s,ri(ti.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,ni.set(s,ri(ni.get(s)||null,e,t,n,i,a)),!0}return!1}function Vu(e){var t=Yn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pu(n),t!==null){e.blockedOn=t,$u(e.priority,function(){Ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Bl=i,n.target.dispatchEvent(i),Bl=null}else return t=xi(n),t!==null&&Jl(t),e.blockedOn=n,!1;t.shift()}return!0}function Bu(e,t,n){lo(e)&&n.delete(t)}function lh(){ea=!1,En!==null&&lo(En)&&(En=null),jn!==null&&lo(jn)&&(jn=null),_n!==null&&lo(_n)&&(_n=null),ti.forEach(Bu),ni.forEach(Bu)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,lh)))}function oi(e){function t(a){return ii(a,e)}if(0<oo.length){ii(oo[0],e);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===e&&(i.blockedOn=null)}}for(En!==null&&ii(En,e),jn!==null&&ii(jn,e),_n!==null&&ii(_n,e),ti.forEach(t),ni.forEach(t),n=0;n<Pn.length;n++)i=Pn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)Vu(n),n.blockedOn===null&&Pn.shift()}var xr=K.ReactCurrentBatchConfig,ao=!0;function ah(e,t,n,i){var a=be,s=xr.transition;xr.transition=null;try{be=1,ta(e,t,n,i)}finally{be=a,xr.transition=s}}function sh(e,t,n,i){var a=be,s=xr.transition;xr.transition=null;try{be=4,ta(e,t,n,i)}finally{be=a,xr.transition=s}}function ta(e,t,n,i){if(ao){var a=na(e,t,n,i);if(a===null)va(e,t,i,so,n),Uu(e,i);else if(oh(a,e,t,n,i))i.stopPropagation();else if(Uu(e,i),t&4&&-1<ih.indexOf(e)){for(;a!==null;){var s=xi(a);if(s!==null&&Au(s),s=na(e,t,n,i),s===null&&va(e,t,i,so,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else va(e,t,i,null,n)}}var so=null;function na(e,t,n,i){if(so=null,e=Hl(i),e=Yn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yf()){case Yl:return 1;case Tu:return 4;case eo:case Kf:return 16;case Du:return 536870912;default:return 16}default:return 16}}var Nn=null,ra=null,uo=null;function Wu(){if(uo)return uo;var e,t=ra,n=t.length,i,a="value"in Nn?Nn.value:Nn.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===a[s-i];i++);return uo=a.slice(e,1<i?1-i:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Xu(){return!1}function Nt(e){function t(n,i,a,s,p){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Xu,this.isPropagationStopped=Xu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Nt(yr),li=Q({},yr,{view:0,detail:0}),uh=Nt(li),oa,la,ai,fo=Q({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(oa=e.screenX-ai.screenX,la=e.screenY-ai.screenY):la=oa=0,ai=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),qu=Nt(fo),ch=Q({},fo,{dataTransfer:0}),dh=Nt(ch),ph=Q({},li,{relatedTarget:0}),aa=Nt(ph),fh=Q({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=Nt(fh),mh=Q({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gh=Nt(mh),xh=Q({},yr,{data:0}),Qu=Nt(xh),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wh[e])?!!t[e]:!1}function sa(){return kh}var Sh=Q({},li,{key:function(e){if(e.key){var t=yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ch=Nt(Sh),Eh=Q({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yu=Nt(Eh),jh=Q({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),_h=Nt(jh),Ph=Q({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nh=Nt(Ph),Fh=Q({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zh=Nt(Fh),Rh=[9,13,27,32],ua=m&&"CompositionEvent"in window,si=null;m&&"documentMode"in document&&(si=document.documentMode);var bh=m&&"TextEvent"in window&&!si,Ku=m&&(!ua||si&&8<si&&11>=si),Gu=" ",Zu=!1;function Ju(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function Th(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(Zu=!0,Gu);case"textInput":return e=t.data,e===Gu&&Zu?null:e;default:return null}}function Dh(e,t){if(vr)return e==="compositionend"||!ua&&Ju(e,t)?(e=Wu(),uo=ra=Nn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ku&&t.locale!=="ko"?null:t.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ih[e.type]:t==="textarea"}function nc(e,t,n,i){Su(i),t=yo(t,"onChange"),0<t.length&&(n=new ia("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ui=null,ci=null;function Lh(e){wc(e,0)}function ho(e){var t=Er(e);if(_t(t))return e}function Ah(e,t){if(e==="change")return t}var rc=!1;if(m){var ca;if(m){var da="oninput"in document;if(!da){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),da=typeof ic.oninput=="function"}ca=da}else ca=!1;rc=ca&&(!document.documentMode||9<document.documentMode)}function oc(){ui&&(ui.detachEvent("onpropertychange",lc),ci=ui=null)}function lc(e){if(e.propertyName==="value"&&ho(ci)){var t=[];nc(t,ci,e,Hl(e)),_u(Lh,t)}}function Oh(e,t,n){e==="focusin"?(oc(),ui=t,ci=n,ui.attachEvent("onpropertychange",lc)):e==="focusout"&&oc()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(ci)}function $h(e,t){if(e==="click")return ho(t)}function Uh(e,t){if(e==="input"||e==="change")return ho(t)}function Vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:Vh;function di(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!x.call(t,a)||!Bt(e[a],t[a]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sc(e,t){var n=ac(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ac(n)}}function uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cc(){for(var e=window,t=qn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qn(e.document)}return t}function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bh(e){var t=cc(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uc(n.ownerDocument.documentElement,n)){if(i!==null&&pa(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(i.start,a);i=i.end===void 0?s:Math.min(i.end,a),!e.extend&&s>i&&(a=i,i=s,s=a),a=sc(n,s);var p=sc(n,i);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hh=m&&"documentMode"in document&&11>=document.documentMode,wr=null,fa=null,pi=null,ha=!1;function dc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||wr==null||wr!==qn(i)||(i=wr,"selectionStart"in i&&pa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pi&&di(pi,i)||(pi=i,i=yo(fa,"onSelect"),0<i.length&&(t=new ia("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=wr)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},ma={},pc={};m&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function go(e){if(ma[e])return ma[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pc)return ma[e]=t[n];return e}var fc=go("animationend"),hc=go("animationiteration"),mc=go("animationstart"),gc=go("transitionend"),xc=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){xc.set(e,t),d(t,[e])}for(var ga=0;ga<yc.length;ga++){var xa=yc[ga],Wh=xa.toLowerCase(),Xh=xa[0].toUpperCase()+xa.slice(1);Fn(Wh,"on"+Xh)}Fn(fc,"onAnimationEnd"),Fn(hc,"onAnimationIteration"),Fn(mc,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(gc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qh=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function vc(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Wf(i,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var p=i.length-1;0<=p;p--){var g=i[p],y=g.instance,N=g.currentTarget;if(g=g.listener,y!==s&&a.isPropagationStopped())break e;vc(a,g,N),s=y}else for(p=0;p<i.length;p++){if(g=i[p],y=g.instance,N=g.currentTarget,g=g.listener,y!==s&&a.isPropagationStopped())break e;vc(a,g,N),s=y}}}if(Ji)throw e=Ql,Ji=!1,Ql=null,e}function Ie(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var i=e+"__bubble";n.has(i)||(kc(t,e,2,!1),n.add(i))}function ya(e,t,n){var i=0;t&&(i|=4),kc(n,e,i,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[xo]){e[xo]=!0,u.forEach(function(n){n!=="selectionchange"&&(qh.has(n)||ya(n,!1,e),ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,ya("selectionchange",!1,t))}}function kc(e,t,n,i){switch(Hu(t)){case 1:var a=ah;break;case 4:a=sh;break;default:a=ta}n=a.bind(null,t,n,e),a=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function va(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var g=i.stateNode.containerInfo;if(g===a||g.nodeType===8&&g.parentNode===a)break;if(p===4)for(p=i.return;p!==null;){var y=p.tag;if((y===3||y===4)&&(y=p.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;p=p.return}for(;g!==null;){if(p=Yn(g),p===null)return;if(y=p.tag,y===5||y===6){i=s=p;continue e}g=g.parentNode}}i=i.return}_u(function(){var N=s,$=Hl(n),U=[];e:{var M=xc.get(e);if(M!==void 0){var Y=ia,te=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":Y=Ch;break;case"focusin":te="focus",Y=aa;break;case"focusout":te="blur",Y=aa;break;case"beforeblur":case"afterblur":Y=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=_h;break;case fc:case hc:case mc:Y=hh;break;case gc:Y=Nh;break;case"scroll":Y=uh;break;case"wheel":Y=zh;break;case"copy":case"cut":case"paste":Y=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Yu}var re=(t&4)!==0,qe=!re&&e==="scroll",C=re?M!==null?M+"Capture":null:M;re=[];for(var w=N,j;w!==null;){j=w;var V=j.stateNode;if(j.tag===5&&V!==null&&(j=V,C!==null&&(V=Kr(w,C),V!=null&&re.push(mi(w,V,j)))),qe)break;w=w.return}0<re.length&&(M=new Y(M,te,null,n,$),U.push({event:M,listeners:re}))}}if(!(t&7)){e:{if(M=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",M&&n!==Bl&&(te=n.relatedTarget||n.fromElement)&&(Yn(te)||te[fn]))break e;if((Y||M)&&(M=$.window===$?$:(M=$.ownerDocument)?M.defaultView||M.parentWindow:window,Y?(te=n.relatedTarget||n.toElement,Y=N,te=te?Yn(te):null,te!==null&&(qe=Qn(te),te!==qe||te.tag!==5&&te.tag!==6)&&(te=null)):(Y=null,te=N),Y!==te)){if(re=qu,V="onMouseLeave",C="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(re=Yu,V="onPointerLeave",C="onPointerEnter",w="pointer"),qe=Y==null?M:Er(Y),j=te==null?M:Er(te),M=new re(V,w+"leave",Y,n,$),M.target=qe,M.relatedTarget=j,V=null,Yn($)===N&&(re=new re(C,w+"enter",te,n,$),re.target=j,re.relatedTarget=qe,V=re),qe=V,Y&&te)t:{for(re=Y,C=te,w=0,j=re;j;j=Sr(j))w++;for(j=0,V=C;V;V=Sr(V))j++;for(;0<w-j;)re=Sr(re),w--;for(;0<j-w;)C=Sr(C),j--;for(;w--;){if(re===C||C!==null&&re===C.alternate)break t;re=Sr(re),C=Sr(C)}re=null}else re=null;Y!==null&&Sc(U,M,Y,re,!1),te!==null&&qe!==null&&Sc(U,qe,te,re,!0)}}e:{if(M=N?Er(N):window,Y=M.nodeName&&M.nodeName.toLowerCase(),Y==="select"||Y==="input"&&M.type==="file")var ie=Ah;else if(tc(M))if(rc)ie=Uh;else{ie=Mh;var ae=Oh}else(Y=M.nodeName)&&Y.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(ie=$h);if(ie&&(ie=ie(e,N))){nc(U,ie,n,$);break e}ae&&ae(e,M,N),e==="focusout"&&(ae=M._wrapperState)&&ae.controlled&&M.type==="number"&&P(M,"number",M.value)}switch(ae=N?Er(N):window,e){case"focusin":(tc(ae)||ae.contentEditable==="true")&&(wr=ae,fa=N,pi=null);break;case"focusout":pi=fa=wr=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,dc(U,n,$);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":dc(U,n,$)}var se;if(ua)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else vr?Ju(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(Ku&&n.locale!=="ko"&&(vr||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&vr&&(se=Wu()):(Nn=$,ra="value"in Nn?Nn.value:Nn.textContent,vr=!0)),ae=yo(N,ce),0<ae.length&&(ce=new Qu(ce,e,null,n,$),U.push({event:ce,listeners:ae}),se?ce.data=se:(se=ec(n),se!==null&&(ce.data=se)))),(se=bh?Th(e,n):Dh(e,n))&&(N=yo(N,"onBeforeInput"),0<N.length&&($=new Qu("onBeforeInput","beforeinput",null,n,$),U.push({event:$,listeners:N}),$.data=se))}wc(U,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Kr(e,n),s!=null&&i.unshift(mi(e,s,a)),s=Kr(e,t),s!=null&&i.push(mi(e,s,a))),e=e.return}return i}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sc(e,t,n,i,a){for(var s=t._reactName,p=[];n!==null&&n!==i;){var g=n,y=g.alternate,N=g.stateNode;if(y!==null&&y===i)break;g.tag===5&&N!==null&&(g=N,a?(y=Kr(n,s),y!=null&&p.unshift(mi(n,y,g))):a||(y=Kr(n,s),y!=null&&p.push(mi(n,y,g)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Qh=/\r\n?/g,Yh=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(Qh,`
`).replace(Yh,"")}function vo(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(o(425))}function wo(){}var wa=null,ka=null;function Sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(e){return Ec.resolve(null).then(e).catch(Zh)}:Ca;function Zh(e){setTimeout(function(){throw e})}function Ea(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){e.removeChild(a),oi(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);oi(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Cr,gi="__reactProps$"+Cr,fn="__reactContainer$"+Cr,ja="__reactEvents$"+Cr,Jh="__reactListeners$"+Cr,em="__reactHandles$"+Cr;function Yn(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jc(e);e!==null;){if(n=e[Jt])return n;e=jc(e)}return t}e=n,n=e.parentNode}return null}function xi(e){return e=e[Jt]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ko(e){return e[gi]||null}var _a=[],jr=-1;function Rn(e){return{current:e}}function Le(e){0>jr||(e.current=_a[jr],_a[jr]=null,jr--)}function De(e,t){jr++,_a[jr]=e.current,e.current=t}var bn={},ct=Rn(bn),yt=Rn(!1),Kn=bn;function _r(e,t){var n=e.type.contextTypes;if(!n)return bn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function vt(e){return e=e.childContextTypes,e!=null}function So(){Le(yt),Le(ct)}function _c(e,t,n){if(ct.current!==bn)throw Error(o(168));De(ct,t),De(yt,n)}function Pc(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(o(108,je(e)||"Unknown",a));return Q({},n,i)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Kn=ct.current,De(ct,e),De(yt,yt.current),!0}function Nc(e,t,n){var i=e.stateNode;if(!i)throw Error(o(169));n?(e=Pc(e,t,Kn),i.__reactInternalMemoizedMergedChildContext=e,Le(yt),Le(ct),De(ct,e)):Le(yt),De(yt,n)}var hn=null,Eo=!1,Pa=!1;function Fc(e){hn===null?hn=[e]:hn.push(e)}function tm(e){Eo=!0,Fc(e)}function Tn(){if(!Pa&&hn!==null){Pa=!0;var e=0,t=be;try{var n=hn;for(be=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}hn=null,Eo=!1}catch(a){throw hn!==null&&(hn=hn.slice(e+1)),Ru(Yl,Tn),a}finally{be=t,Pa=!1}}return null}var Pr=[],Nr=0,jo=null,_o=0,Dt=[],It=0,Gn=null,mn=1,gn="";function Zn(e,t){Pr[Nr++]=_o,Pr[Nr++]=jo,jo=e,_o=t}function zc(e,t,n){Dt[It++]=mn,Dt[It++]=gn,Dt[It++]=Gn,Gn=e;var i=mn;e=gn;var a=32-Vt(i)-1;i&=~(1<<a),n+=1;var s=32-Vt(t)+a;if(30<s){var p=a-a%5;s=(i&(1<<p)-1).toString(32),i>>=p,a-=p,mn=1<<32-Vt(t)+a|n<<a|i,gn=s+e}else mn=1<<s|n<<a|i,gn=e}function Na(e){e.return!==null&&(Zn(e,1),zc(e,1,0))}function Fa(e){for(;e===jo;)jo=Pr[--Nr],Pr[Nr]=null,_o=Pr[--Nr],Pr[Nr]=null;for(;e===Gn;)Gn=Dt[--It],Dt[It]=null,gn=Dt[--It],Dt[It]=null,mn=Dt[--It],Dt[It]=null}var Ft=null,zt=null,Me=!1,Ht=null;function Rc(e,t){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,zt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,zt=null,!0):!1;default:return!1}}function za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(Me){var t=zt;if(t){var n=t;if(!bc(e,t)){if(za(e))throw Error(o(418));t=zn(n.nextSibling);var i=Ft;t&&bc(e,t)?Rc(i,n):(e.flags=e.flags&-4097|2,Me=!1,Ft=e)}}else{if(za(e))throw Error(o(418));e.flags=e.flags&-4097|2,Me=!1,Ft=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function Po(e){if(e!==Ft)return!1;if(!Me)return Tc(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sa(e.type,e.memoizedProps)),t&&(t=zt)){if(za(e))throw Dc(),Error(o(418));for(;t;)Rc(e,t),t=zn(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){zt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}zt=null}}else zt=Ft?zn(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=zt;e;)e=zn(e.nextSibling)}function Fr(){zt=Ft=null,Me=!1}function ba(e){Ht===null?Ht=[e]:Ht.push(e)}var nm=K.ReactCurrentBatchConfig;function yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var i=n.stateNode}if(!i)throw Error(o(147,e));var a=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(p){var g=a.refs;p===null?delete g[s]:g[s]=p},t._stringRef=s,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function No(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function Lc(e){function t(C,w){if(e){var j=C.deletions;j===null?(C.deletions=[w],C.flags|=16):j.push(w)}}function n(C,w){if(!e)return null;for(;w!==null;)t(C,w),w=w.sibling;return null}function i(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function a(C,w){return C=Un(C,w),C.index=0,C.sibling=null,C}function s(C,w,j){return C.index=j,e?(j=C.alternate,j!==null?(j=j.index,j<w?(C.flags|=2,w):j):(C.flags|=2,w)):(C.flags|=1048576,w)}function p(C){return e&&C.alternate===null&&(C.flags|=2),C}function g(C,w,j,V){return w===null||w.tag!==6?(w=Cs(j,C.mode,V),w.return=C,w):(w=a(w,j),w.return=C,w)}function y(C,w,j,V){var ie=j.type;return ie===J?$(C,w,j.props.children,V,j.key):w!==null&&(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Te&&Ic(ie)===w.type)?(V=a(w,j.props),V.ref=yi(C,w,j),V.return=C,V):(V=Zo(j.type,j.key,j.props,null,C.mode,V),V.ref=yi(C,w,j),V.return=C,V)}function N(C,w,j,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==j.containerInfo||w.stateNode.implementation!==j.implementation?(w=Es(j,C.mode,V),w.return=C,w):(w=a(w,j.children||[]),w.return=C,w)}function $(C,w,j,V,ie){return w===null||w.tag!==7?(w=lr(j,C.mode,V,ie),w.return=C,w):(w=a(w,j),w.return=C,w)}function U(C,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Cs(""+w,C.mode,j),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case G:return j=Zo(w.type,w.key,w.props,null,C.mode,j),j.ref=yi(C,null,w),j.return=C,j;case oe:return w=Es(w,C.mode,j),w.return=C,w;case Te:var V=w._init;return U(C,V(w._payload),j)}if(R(w)||ee(w))return w=lr(w,C.mode,j,null),w.return=C,w;No(C,w)}return null}function M(C,w,j,V){var ie=w!==null?w.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ie!==null?null:g(C,w,""+j,V);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return j.key===ie?y(C,w,j,V):null;case oe:return j.key===ie?N(C,w,j,V):null;case Te:return ie=j._init,M(C,w,ie(j._payload),V)}if(R(j)||ee(j))return ie!==null?null:$(C,w,j,V,null);No(C,j)}return null}function Y(C,w,j,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number")return C=C.get(j)||null,g(w,C,""+V,ie);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return C=C.get(V.key===null?j:V.key)||null,y(w,C,V,ie);case oe:return C=C.get(V.key===null?j:V.key)||null,N(w,C,V,ie);case Te:var ae=V._init;return Y(C,w,j,ae(V._payload),ie)}if(R(V)||ee(V))return C=C.get(j)||null,$(w,C,V,ie,null);No(w,V)}return null}function te(C,w,j,V){for(var ie=null,ae=null,se=w,ce=w=0,it=null;se!==null&&ce<j.length;ce++){se.index>ce?(it=se,se=null):it=se.sibling;var Fe=M(C,se,j[ce],V);if(Fe===null){se===null&&(se=it);break}e&&se&&Fe.alternate===null&&t(C,se),w=s(Fe,w,ce),ae===null?ie=Fe:ae.sibling=Fe,ae=Fe,se=it}if(ce===j.length)return n(C,se),Me&&Zn(C,ce),ie;if(se===null){for(;ce<j.length;ce++)se=U(C,j[ce],V),se!==null&&(w=s(se,w,ce),ae===null?ie=se:ae.sibling=se,ae=se);return Me&&Zn(C,ce),ie}for(se=i(C,se);ce<j.length;ce++)it=Y(se,C,ce,j[ce],V),it!==null&&(e&&it.alternate!==null&&se.delete(it.key===null?ce:it.key),w=s(it,w,ce),ae===null?ie=it:ae.sibling=it,ae=it);return e&&se.forEach(function(Vn){return t(C,Vn)}),Me&&Zn(C,ce),ie}function re(C,w,j,V){var ie=ee(j);if(typeof ie!="function")throw Error(o(150));if(j=ie.call(j),j==null)throw Error(o(151));for(var ae=ie=null,se=w,ce=w=0,it=null,Fe=j.next();se!==null&&!Fe.done;ce++,Fe=j.next()){se.index>ce?(it=se,se=null):it=se.sibling;var Vn=M(C,se,Fe.value,V);if(Vn===null){se===null&&(se=it);break}e&&se&&Vn.alternate===null&&t(C,se),w=s(Vn,w,ce),ae===null?ie=Vn:ae.sibling=Vn,ae=Vn,se=it}if(Fe.done)return n(C,se),Me&&Zn(C,ce),ie;if(se===null){for(;!Fe.done;ce++,Fe=j.next())Fe=U(C,Fe.value,V),Fe!==null&&(w=s(Fe,w,ce),ae===null?ie=Fe:ae.sibling=Fe,ae=Fe);return Me&&Zn(C,ce),ie}for(se=i(C,se);!Fe.done;ce++,Fe=j.next())Fe=Y(se,C,ce,Fe.value,V),Fe!==null&&(e&&Fe.alternate!==null&&se.delete(Fe.key===null?ce:Fe.key),w=s(Fe,w,ce),ae===null?ie=Fe:ae.sibling=Fe,ae=Fe);return e&&se.forEach(function(Dm){return t(C,Dm)}),Me&&Zn(C,ce),ie}function qe(C,w,j,V){if(typeof j=="object"&&j!==null&&j.type===J&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case G:e:{for(var ie=j.key,ae=w;ae!==null;){if(ae.key===ie){if(ie=j.type,ie===J){if(ae.tag===7){n(C,ae.sibling),w=a(ae,j.props.children),w.return=C,C=w;break e}}else if(ae.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Te&&Ic(ie)===ae.type){n(C,ae.sibling),w=a(ae,j.props),w.ref=yi(C,ae,j),w.return=C,C=w;break e}n(C,ae);break}else t(C,ae);ae=ae.sibling}j.type===J?(w=lr(j.props.children,C.mode,V,j.key),w.return=C,C=w):(V=Zo(j.type,j.key,j.props,null,C.mode,V),V.ref=yi(C,w,j),V.return=C,C=V)}return p(C);case oe:e:{for(ae=j.key;w!==null;){if(w.key===ae)if(w.tag===4&&w.stateNode.containerInfo===j.containerInfo&&w.stateNode.implementation===j.implementation){n(C,w.sibling),w=a(w,j.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else t(C,w);w=w.sibling}w=Es(j,C.mode,V),w.return=C,C=w}return p(C);case Te:return ae=j._init,qe(C,w,ae(j._payload),V)}if(R(j))return te(C,w,j,V);if(ee(j))return re(C,w,j,V);No(C,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,w!==null&&w.tag===6?(n(C,w.sibling),w=a(w,j),w.return=C,C=w):(n(C,w),w=Cs(j,C.mode,V),w.return=C,C=w),p(C)):n(C,w)}return qe}var zr=Lc(!0),Ac=Lc(!1),Fo=Rn(null),zo=null,Rr=null,Ta=null;function Da(){Ta=Rr=zo=null}function Ia(e){var t=Fo.current;Le(Fo),e._currentValue=t}function La(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function br(e,t){zo=e,Ta=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(zo===null)throw Error(o(308));Rr=e,zo.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var Jn=null;function Aa(e){Jn===null?Jn=[e]:Jn.push(e)}function Oc(e,t,n,i){var a=t.interleaved;return a===null?(n.next=n,Aa(t)):(n.next=a.next,a.next=n),t.interleaved=n,xn(e,i)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Ne&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,xn(e,n)}return a=i.interleaved,a===null?(t.next=t,Aa(i)):(t.next=a.next,a.next=t),i.interleaved=t,xn(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zl(e,n)}}function $c(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=p:s=s.next=p,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,i){var a=e.updateQueue;Dn=!1;var s=a.firstBaseUpdate,p=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var y=g,N=y.next;y.next=null,p===null?s=N:p.next=N,p=y;var $=e.alternate;$!==null&&($=$.updateQueue,g=$.lastBaseUpdate,g!==p&&(g===null?$.firstBaseUpdate=N:g.next=N,$.lastBaseUpdate=y))}if(s!==null){var U=a.baseState;p=0,$=N=y=null,g=s;do{var M=g.lane,Y=g.eventTime;if((i&M)===M){$!==null&&($=$.next={eventTime:Y,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var te=e,re=g;switch(M=t,Y=n,re.tag){case 1:if(te=re.payload,typeof te=="function"){U=te.call(Y,U,M);break e}U=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,M=typeof te=="function"?te.call(Y,U,M):te,M==null)break e;U=Q({},U,M);break e;case 2:Dn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,M=a.effects,M===null?a.effects=[g]:M.push(g))}else Y={eventTime:Y,lane:M,tag:g.tag,payload:g.payload,callback:g.callback,next:null},$===null?(N=$=Y,y=U):$=$.next=Y,p|=M;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;M=g,g=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);if($===null&&(y=U),a.baseState=y,a.firstBaseUpdate=N,a.lastBaseUpdate=$,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);nr|=p,e.lanes=p,e.memoizedState=U}}function Uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!="function")throw Error(o(191,a));a.call(i)}}}var vi={},en=Rn(vi),wi=Rn(vi),ki=Rn(vi);function er(e){if(e===vi)throw Error(o(174));return e}function Ma(e,t){switch(De(ki,t),De(wi,e),De(en,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Be(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Be(t,e)}Le(en),De(en,t)}function Tr(){Le(en),Le(wi),Le(ki)}function Vc(e){er(ki.current);var t=er(en.current),n=Be(t,e.type);t!==n&&(De(wi,e),De(en,n))}function $a(e){wi.current===e&&(Le(en),Le(wi))}var $e=Rn(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=[];function Va(){for(var e=0;e<Ua.length;e++)Ua[e]._workInProgressVersionPrimary=null;Ua.length=0}var Do=K.ReactCurrentDispatcher,Ba=K.ReactCurrentBatchConfig,tr=0,Ue=null,Je=null,nt=null,Io=!1,Si=!1,Ci=0,rm=0;function dt(){throw Error(o(321))}function Ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function Wa(e,t,n,i,a,s){if(tr=s,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?am:sm,e=n(i,a),Si){s=0;do{if(Si=!1,Ci=0,25<=s)throw Error(o(301));s+=1,nt=Je=null,t.updateQueue=null,Do.current=um,e=n(i,a)}while(Si)}if(Do.current=Oo,t=Je!==null&&Je.next!==null,tr=0,nt=Je=Ue=null,Io=!1,t)throw Error(o(300));return e}function Xa(){var e=Ci!==0;return Ci=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ue.memoizedState=nt=e:nt=nt.next=e,nt}function At(){if(Je===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=nt===null?Ue.memoizedState:nt.next;if(t!==null)nt=t,Je=e;else{if(e===null)throw Error(o(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},nt===null?Ue.memoizedState=nt=e:nt=nt.next=e}return nt}function Ei(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=At(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=Je,a=i.baseQueue,s=n.pending;if(s!==null){if(a!==null){var p=a.next;a.next=s.next,s.next=p}i.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,i=i.baseState;var g=p=null,y=null,N=s;do{var $=N.lane;if((tr&$)===$)y!==null&&(y=y.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),i=N.hasEagerState?N.eagerState:e(i,N.action);else{var U={lane:$,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};y===null?(g=y=U,p=i):y=y.next=U,Ue.lanes|=$,nr|=$}N=N.next}while(N!==null&&N!==s);y===null?p=i:y.next=g,Bt(i,t.memoizedState)||(wt=!0),t.memoizedState=i,t.baseState=p,t.baseQueue=y,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Ue.lanes|=s,nr|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qa(e){var t=At(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var p=a=a.next;do s=e(s,p.action),p=p.next;while(p!==a);Bt(s,t.memoizedState)||(wt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Bc(){}function Hc(e,t){var n=Ue,i=At(),a=t(),s=!Bt(i.memoizedState,a);if(s&&(i.memoizedState=a,wt=!0),i=i.queue,Ya(qc.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,ji(9,Xc.bind(null,n,i,a,t),void 0,null),rt===null)throw Error(o(349));tr&30||Wc(n,t,a)}return a}function Wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xc(e,t,n,i){t.value=n,t.getSnapshot=i,Qc(t)&&Yc(e)}function qc(e,t,n){return n(function(){Qc(t)&&Yc(e)})}function Qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Yc(e){var t=xn(e,1);t!==null&&Qt(t,e,1,-1)}function Kc(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:e},t.queue=e,e=e.dispatch=lm.bind(null,Ue,e),[t.memoizedState,e]}function ji(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Gc(){return At().memoizedState}function Lo(e,t,n,i){var a=tn();Ue.flags|=e,a.memoizedState=ji(1|t,n,void 0,i===void 0?null:i)}function Ao(e,t,n,i){var a=At();i=i===void 0?null:i;var s=void 0;if(Je!==null){var p=Je.memoizedState;if(s=p.destroy,i!==null&&Ha(i,p.deps)){a.memoizedState=ji(t,n,s,i);return}}Ue.flags|=e,a.memoizedState=ji(1|t,n,s,i)}function Zc(e,t){return Lo(8390656,8,e,t)}function Ya(e,t){return Ao(2048,8,e,t)}function Jc(e,t){return Ao(4,2,e,t)}function ed(e,t){return Ao(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,td.bind(null,t,e),n)}function Ka(){}function rd(e,t){var n=At();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ha(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function id(e,t){var n=At();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ha(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function od(e,t,n){return tr&21?(Bt(n,t)||(n=Iu(),Ue.lanes|=n,nr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function im(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var i=Ba.transition;Ba.transition={};try{e(!1),t()}finally{be=n,Ba.transition=i}}function ld(){return At().memoizedState}function om(e,t,n){var i=Mn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ad(e))sd(t,n);else if(n=Oc(e,t,n,i),n!==null){var a=mt();Qt(n,e,i,a),ud(n,t,i)}}function lm(e,t,n){var i=Mn(e),a={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ad(e))sd(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var p=t.lastRenderedState,g=s(p,n);if(a.hasEagerState=!0,a.eagerState=g,Bt(g,p)){var y=t.interleaved;y===null?(a.next=a,Aa(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}finally{}n=Oc(e,t,a,i),n!==null&&(a=mt(),Qt(n,e,i,a),ud(n,t,i))}}function ad(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function sd(e,t){Si=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ud(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zl(e,n)}}var Oo={readContext:Lt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},am={readContext:Lt,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Zc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=tn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=om.bind(null,Ue,e),[i.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:Ka,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=im.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Ue,a=tn();if(Me){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),rt===null)throw Error(o(349));tr&30||Wc(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Zc(qc.bind(null,i,s,e),[e]),i.flags|=2048,ji(9,Xc.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=tn(),t=rt.identifierPrefix;if(Me){var n=gn,i=mn;n=(i&~(1<<32-Vt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sm={readContext:Lt,useCallback:rd,useContext:Lt,useEffect:Ya,useImperativeHandle:nd,useInsertionEffect:Jc,useLayoutEffect:ed,useMemo:id,useReducer:qa,useRef:Gc,useState:function(){return qa(Ei)},useDebugValue:Ka,useDeferredValue:function(e){var t=At();return od(t,Je.memoizedState,e)},useTransition:function(){var e=qa(Ei)[0],t=At().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:Hc,useId:ld,unstable_isNewReconciler:!1},um={readContext:Lt,useCallback:rd,useContext:Lt,useEffect:Ya,useImperativeHandle:nd,useInsertionEffect:Jc,useLayoutEffect:ed,useMemo:id,useReducer:Qa,useRef:Gc,useState:function(){return Qa(Ei)},useDebugValue:Ka,useDeferredValue:function(e){var t=At();return Je===null?t.memoizedState=e:od(t,Je.memoizedState,e)},useTransition:function(){var e=Qa(Ei)[0],t=At().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:Hc,useId:ld,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ga(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=mt(),a=Mn(e),s=yn(i,a);s.payload=t,n!=null&&(s.callback=n),t=In(e,s,a),t!==null&&(Qt(t,e,a,i),Ro(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=mt(),a=Mn(e),s=yn(i,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=In(e,s,a),t!==null&&(Qt(t,e,a,i),Ro(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),i=Mn(e),a=yn(n,i);a.tag=2,t!=null&&(a.callback=t),t=In(e,a,i),t!==null&&(Qt(t,e,i,n),Ro(t,e,i))}};function cd(e,t,n,i,a,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,p):t.prototype&&t.prototype.isPureReactComponent?!di(n,i)||!di(a,s):!0}function dd(e,t,n){var i=!1,a=bn,s=t.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(a=vt(t)?Kn:ct.current,i=t.contextTypes,s=(i=i!=null)?_r(e,a):bn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function pd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,i){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Oa(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Lt(s):(s=vt(t)?Kn:ct.current,a.context=_r(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ga(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Mo.enqueueReplaceState(a,a.state,null),bo(e,n,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",i=t;do n+=ye(i),i=i.return;while(i);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function fd(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Xo||(Xo=!0,ms=i),es(e,t)},n}function hd(e,t,n){n=yn(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;n.payload=function(){return i(a)},n.callback=function(){es(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){es(e,t),typeof i!="function"&&(An===null?An=new Set([this]):An.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),n}function md(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cm;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(a.add(n),e=Em.bind(null,e,t,n),t.then(e,e))}function gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xd(e,t,n,i,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var dm=K.ReactCurrentOwner,wt=!1;function ht(e,t,n,i){t.child=e===null?Ac(t,null,n,i):zr(t,e.child,n,i)}function yd(e,t,n,i,a){n=n.render;var s=t.ref;return br(t,a),i=Wa(e,t,n,i,s,a),n=Xa(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,vn(e,t,a)):(Me&&n&&Na(t),t.flags|=1,ht(e,t,i,a),t.child)}function vd(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Ss(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,wd(e,t,s,i,a)):(e=Zo(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var p=s.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(p,i)&&e.ref===t.ref)return vn(e,t,a)}return t.flags|=1,e=Un(s,i),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(di(s,i)&&e.ref===t.ref)if(wt=!1,t.pendingProps=i=s,(e.lanes&a)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,vn(e,t,a)}return ts(e,t,n,i,a)}function kd(e,t,n){var i=t.pendingProps,a=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Lr,Rt),Rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Lr,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,De(Lr,Rt),Rt|=i}else s!==null?(i=s.baseLanes|n,t.memoizedState=null):i=n,De(Lr,Rt),Rt|=i;return ht(e,t,a,n),t.child}function Sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ts(e,t,n,i,a){var s=vt(n)?Kn:ct.current;return s=_r(t,s),br(t,a),n=Wa(e,t,n,i,s,a),i=Xa(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,vn(e,t,a)):(Me&&i&&Na(t),t.flags|=1,ht(e,t,n,a),t.child)}function Cd(e,t,n,i,a){if(vt(n)){var s=!0;Co(t)}else s=!1;if(br(t,a),t.stateNode===null)Uo(e,t),dd(t,n,i),Za(t,n,i,a),i=!0;else if(e===null){var p=t.stateNode,g=t.memoizedProps;p.props=g;var y=p.context,N=n.contextType;typeof N=="object"&&N!==null?N=Lt(N):(N=vt(n)?Kn:ct.current,N=_r(t,N));var $=n.getDerivedStateFromProps,U=typeof $=="function"||typeof p.getSnapshotBeforeUpdate=="function";U||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==i||y!==N)&&pd(t,p,i,N),Dn=!1;var M=t.memoizedState;p.state=M,bo(t,i,p,a),y=t.memoizedState,g!==i||M!==y||yt.current||Dn?(typeof $=="function"&&(Ga(t,n,$,i),y=t.memoizedState),(g=Dn||cd(t,n,g,i,M,y,N))?(U||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=y),p.props=i,p.state=y,p.context=N,i=g):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{p=t.stateNode,Mc(e,t),g=t.memoizedProps,N=t.type===t.elementType?g:Wt(t.type,g),p.props=N,U=t.pendingProps,M=p.context,y=n.contextType,typeof y=="object"&&y!==null?y=Lt(y):(y=vt(n)?Kn:ct.current,y=_r(t,y));var Y=n.getDerivedStateFromProps;($=typeof Y=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==U||M!==y)&&pd(t,p,i,y),Dn=!1,M=t.memoizedState,p.state=M,bo(t,i,p,a);var te=t.memoizedState;g!==U||M!==te||yt.current||Dn?(typeof Y=="function"&&(Ga(t,n,Y,i),te=t.memoizedState),(N=Dn||cd(t,n,N,i,M,te,y)||!1)?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(i,te,y),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(i,te,y)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=te),p.props=i,p.state=te,p.context=y,i=N):(typeof p.componentDidUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),i=!1)}return ns(e,t,n,i,s,a)}function ns(e,t,n,i,a,s){Sd(e,t);var p=(t.flags&128)!==0;if(!i&&!p)return a&&Nc(t,n,!1),vn(e,t,s);i=t.stateNode,dm.current=t;var g=p&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&p?(t.child=zr(t,e.child,null,s),t.child=zr(t,null,g,s)):ht(e,t,g,s),t.memoizedState=i.state,a&&Nc(t,n,!0),t.child}function Ed(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),Ma(e,t.containerInfo)}function jd(e,t,n,i,a){return Fr(),ba(a),t.flags|=256,ht(e,t,n,i),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0};function is(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,t,n){var i=t.pendingProps,a=$e.current,s=!1,p=(t.flags&128)!==0,g;if((g=p)||(g=e!==null&&e.memoizedState===null?!1:(a&2)!==0),g?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),De($e,a&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(p=i.children,e=i.fallback,s?(i=t.mode,s=t.child,p={mode:"hidden",children:p},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=p):s=Jo(p,i,0,null),e=lr(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=is(n),t.memoizedState=rs,e):os(t,p));if(a=e.memoizedState,a!==null&&(g=a.dehydrated,g!==null))return pm(e,t,p,i,g,a,n);if(s){s=i.fallback,p=t.mode,a=e.child,g=a.sibling;var y={mode:"hidden",children:i.children};return!(p&1)&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=y,t.deletions=null):(i=Un(a,y),i.subtreeFlags=a.subtreeFlags&14680064),g!==null?s=Un(g,s):(s=lr(s,p,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,p=e.child.memoizedState,p=p===null?is(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},s.memoizedState=p,s.childLanes=e.childLanes&~n,t.memoizedState=rs,i}return s=e.child,e=s.sibling,i=Un(s,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function os(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $o(e,t,n,i){return i!==null&&ba(i),zr(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n,i,a,s,p){if(n)return t.flags&256?(t.flags&=-257,i=Ja(Error(o(422))),$o(e,t,p,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,a=t.mode,i=Jo({mode:"visible",children:i.children},a,0,null),s=lr(s,a,p,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,t.mode&1&&zr(t,e.child,null,p),t.child.memoizedState=is(p),t.memoizedState=rs,s);if(!(t.mode&1))return $o(e,t,p,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var g=i.dgst;return i=g,s=Error(o(419)),i=Ja(s,i,void 0),$o(e,t,p,i)}if(g=(p&e.childLanes)!==0,wt||g){if(i=rt,i!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|p)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,xn(e,a),Qt(i,e,a,-1))}return ks(),i=Ja(Error(o(421))),$o(e,t,p,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=jm.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,zt=zn(a.nextSibling),Ft=t,Me=!0,Ht=null,e!==null&&(Dt[It++]=mn,Dt[It++]=gn,Dt[It++]=Gn,mn=e.id,gn=e.overflow,Gn=t),t=os(t,i.children),t.flags|=4096,t)}function Pd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),La(e.return,t,n)}function ls(e,t,n,i,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a)}function Nd(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;if(ht(e,t,i.children,n),i=$e.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(De($e,i),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ls(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&To(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ls(t,!0,n,null,s);break;case"together":ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fm(e,t,n){switch(t.tag){case 3:Ed(t),Fr();break;case 5:Vc(t);break;case 1:vt(t.type)&&Co(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;De(Fo,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(De($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?_d(e,t,n):(De($e,$e.current&1),e=vn(e,t,n),e!==null?e.sibling:null);De($e,$e.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Nd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),De($e,$e.current),i)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,n)}return vn(e,t,n)}var Fd,as,zd,Rd;Fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},as=function(){},zd=function(e,t,n,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,er(en.current);var s=null;switch(n){case"input":a=hr(e,a),i=hr(e,i),s=[];break;case"select":a=Q({},a,{value:void 0}),i=Q({},i,{value:void 0}),s=[];break;case"textarea":a=W(e,a),i=W(e,i),s=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=wo)}Ul(n,i);var p;n=null;for(N in a)if(!i.hasOwnProperty(N)&&a.hasOwnProperty(N)&&a[N]!=null)if(N==="style"){var g=a[N];for(p in g)g.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(c.hasOwnProperty(N)?s||(s=[]):(s=s||[]).push(N,null));for(N in i){var y=i[N];if(g=a!=null?a[N]:void 0,i.hasOwnProperty(N)&&y!==g&&(y!=null||g!=null))if(N==="style")if(g){for(p in g)!g.hasOwnProperty(p)||y&&y.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in y)y.hasOwnProperty(p)&&g[p]!==y[p]&&(n||(n={}),n[p]=y[p])}else n||(s||(s=[]),s.push(N,n)),n=y;else N==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(s=s||[]).push(N,y)):N==="children"?typeof y!="string"&&typeof y!="number"||(s=s||[]).push(N,""+y):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(c.hasOwnProperty(N)?(y!=null&&N==="onScroll"&&Ie("scroll",e),s||g===y||(s=[])):(s=s||[]).push(N,y))}n&&(s=s||[]).push("style",n);var N=s;(t.updateQueue=N)&&(t.flags|=4)}},Rd=function(e,t,n,i){n!==i&&(t.flags|=4)};function _i(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function hm(e,t,n){var i=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return vt(t.type)&&So(),pt(t),null;case 3:return i=t.stateNode,Tr(),Le(yt),Le(ct),Va(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(ys(Ht),Ht=null))),as(e,t),pt(t),null;case 5:$a(t);var a=er(ki.current);if(n=t.type,e!==null&&t.stateNode!=null)zd(e,t,n,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return pt(t),null}if(e=er(en.current),Po(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Jt]=t,i[gi]=s,e=(t.mode&1)!==0,n){case"dialog":Ie("cancel",i),Ie("close",i);break;case"iframe":case"object":case"embed":Ie("load",i);break;case"video":case"audio":for(a=0;a<fi.length;a++)Ie(fi[a],i);break;case"source":Ie("error",i);break;case"img":case"image":case"link":Ie("error",i),Ie("load",i);break;case"details":Ie("toggle",i);break;case"input":Ol(i,s),Ie("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",i);break;case"textarea":B(i,s),Ie("invalid",i)}Ul(n,s),a=null;for(var p in s)if(s.hasOwnProperty(p)){var g=s[p];p==="children"?typeof g=="string"?i.textContent!==g&&(s.suppressHydrationWarning!==!0&&vo(i.textContent,g,e),a=["children",g]):typeof g=="number"&&i.textContent!==""+g&&(s.suppressHydrationWarning!==!0&&vo(i.textContent,g,e),a=["children",""+g]):c.hasOwnProperty(p)&&g!=null&&p==="onScroll"&&Ie("scroll",i)}switch(n){case"input":Tt(i),v(i,s,!0);break;case"textarea":Tt(i),me(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wo)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=We(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=p.createElement(n,{is:i.is}):(e=p.createElement(n),n==="select"&&(p=e,i.multiple?p.multiple=!0:i.size&&(p.size=i.size))):e=p.createElementNS(e,n),e[Jt]=t,e[gi]=i,Fd(e,t,!1,!1),t.stateNode=e;e:{switch(p=Vl(n,i),n){case"dialog":Ie("cancel",e),Ie("close",e),a=i;break;case"iframe":case"object":case"embed":Ie("load",e),a=i;break;case"video":case"audio":for(a=0;a<fi.length;a++)Ie(fi[a],e);a=i;break;case"source":Ie("error",e),a=i;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),a=i;break;case"details":Ie("toggle",e),a=i;break;case"input":Ol(e,i),a=hr(e,i),Ie("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=Q({},i,{value:void 0}),Ie("invalid",e);break;case"textarea":B(e,i),a=W(e,i),Ie("invalid",e);break;default:a=i}Ul(n,a),g=a;for(s in g)if(g.hasOwnProperty(s)){var y=g[s];s==="style"?Ki(e,y):s==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Yi(e,y)):s==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&dn(e,y):typeof y=="number"&&dn(e,""+y):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(c.hasOwnProperty(s)?y!=null&&s==="onScroll"&&Ie("scroll",e):y!=null&&q(e,s,y,p))}switch(n){case"input":Tt(e),v(e,i,!1);break;case"textarea":Tt(e),me(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ve(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?X(e,!!i.multiple,s,!1):i.defaultValue!=null&&X(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(n=er(ki.current),er(en.current),Po(t)){if(i=t.stateNode,n=t.memoizedProps,i[Jt]=t,(s=i.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:vo(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(i.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jt]=t,t.stateNode=i}return pt(t),null;case 13:if(Le($e),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&zt!==null&&t.mode&1&&!(t.flags&128))Dc(),Fr(),t.flags|=98560,s=!1;else if(s=Po(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Jt]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),s=!1}else Ht!==null&&(ys(Ht),Ht=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?et===0&&(et=3):ks())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Tr(),as(e,t),e===null&&hi(t.stateNode.containerInfo),pt(t),null;case 10:return Ia(t.type._context),pt(t),null;case 17:return vt(t.type)&&So(),pt(t),null;case 19:if(Le($e),s=t.memoizedState,s===null)return pt(t),null;if(i=(t.flags&128)!==0,p=s.rendering,p===null)if(i)_i(s,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(p=To(e),p!==null){for(t.flags|=128,_i(s,!1),i=p.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,p=s.alternate,p===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=p.childLanes,s.lanes=p.lanes,s.child=p.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=p.memoizedProps,s.memoizedState=p.memoizedState,s.updateQueue=p.updateQueue,s.type=p.type,e=p.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return De($e,$e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Xe()>Ar&&(t.flags|=128,i=!0,_i(s,!1),t.lanes=4194304)}else{if(!i)if(e=To(p),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!p.alternate&&!Me)return pt(t),null}else 2*Xe()-s.renderingStartTime>Ar&&n!==1073741824&&(t.flags|=128,i=!0,_i(s,!1),t.lanes=4194304);s.isBackwards?(p.sibling=t.child,t.child=p):(n=s.last,n!==null?n.sibling=p:t.child=p,s.last=p)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xe(),t.sibling=null,n=$e.current,De($e,i?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return ws(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Rt&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function mm(e,t){switch(Fa(t),t.tag){case 1:return vt(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Le(yt),Le(ct),Va(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $a(t),null;case 13:if(Le($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le($e),null;case 4:return Tr(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var Vo=!1,ft=!1,gm=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){He(e,t,i)}else n.current=null}function ss(e,t,n){try{n()}catch(i){He(e,t,i)}}var bd=!1;function xm(e,t){if(wa=ao,e=cc(),pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var p=0,g=-1,y=-1,N=0,$=0,U=e,M=null;t:for(;;){for(var Y;U!==n||a!==0&&U.nodeType!==3||(g=p+a),U!==s||i!==0&&U.nodeType!==3||(y=p+i),U.nodeType===3&&(p+=U.nodeValue.length),(Y=U.firstChild)!==null;)M=U,U=Y;for(;;){if(U===e)break t;if(M===n&&++N===a&&(g=p),M===s&&++$===i&&(y=p),(Y=U.nextSibling)!==null)break;U=M,M=U.parentNode}U=Y}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(ka={focusedElem:e,selectionRange:n},ao=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var te=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var re=te.memoizedProps,qe=te.memoizedState,C=t.stateNode,w=C.getSnapshotBeforeUpdate(t.elementType===t.type?re:Wt(t.type,re),qe);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(V){He(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return te=bd,bd=!1,te}function Pi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&ss(t,n,s)}a=a.next}while(a!==i)}}function Bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[gi],delete t[ja],delete t[Jh],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(i!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var at=null,Xt=!1;function Ln(e,t,n){for(n=n.child;n!==null;)Ld(e,t,n),n=n.sibling}function Ld(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:ft||Ir(n,t);case 6:var i=at,a=Xt;at=null,Ln(e,t,n),at=i,Xt=a,at!==null&&(Xt?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(Xt?(e=at,n=n.stateNode,e.nodeType===8?Ea(e.parentNode,n):e.nodeType===1&&Ea(e,n),oi(e)):Ea(at,n.stateNode));break;case 4:i=at,a=Xt,at=n.stateNode.containerInfo,Xt=!0,Ln(e,t,n),at=i,Xt=a;break;case 0:case 11:case 14:case 15:if(!ft&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var s=a,p=s.destroy;s=s.tag,p!==void 0&&(s&2||s&4)&&ss(n,t,p),a=a.next}while(a!==i)}Ln(e,t,n);break;case 1:if(!ft&&(Ir(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(g){He(n,t,g)}Ln(e,t,n);break;case 21:Ln(e,t,n);break;case 22:n.mode&1?(ft=(i=ft)||n.memoizedState!==null,Ln(e,t,n),ft=i):Ln(e,t,n);break;default:Ln(e,t,n)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(i){var a=_m.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var s=e,p=t,g=p;e:for(;g!==null;){switch(g.tag){case 5:at=g.stateNode,Xt=!1;break e;case 3:at=g.stateNode.containerInfo,Xt=!0;break e;case 4:at=g.stateNode.containerInfo,Xt=!0;break e}g=g.return}if(at===null)throw Error(o(160));Ld(s,p,a),at=null,Xt=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(N){He(a,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}function Od(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),nn(e),i&4){try{Pi(3,e,e.return),Bo(3,e)}catch(re){He(e,e.return,re)}try{Pi(5,e,e.return)}catch(re){He(e,e.return,re)}}break;case 1:qt(t,e),nn(e),i&512&&n!==null&&Ir(n,n.return);break;case 5:if(qt(t,e),nn(e),i&512&&n!==null&&Ir(n,n.return),e.flags&32){var a=e.stateNode;try{dn(a,"")}catch(re){He(e,e.return,re)}}if(i&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,p=n!==null?n.memoizedProps:s,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&s.type==="radio"&&s.name!=null&&Ml(a,s),Vl(g,p);var N=Vl(g,s);for(p=0;p<y.length;p+=2){var $=y[p],U=y[p+1];$==="style"?Ki(a,U):$==="dangerouslySetInnerHTML"?Yi(a,U):$==="children"?dn(a,U):q(a,$,U,N)}switch(g){case"input":Qi(a,s);break;case"textarea":le(a,s);break;case"select":var M=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var Y=s.value;Y!=null?X(a,!!s.multiple,Y,!1):M!==!!s.multiple&&(s.defaultValue!=null?X(a,!!s.multiple,s.defaultValue,!0):X(a,!!s.multiple,s.multiple?[]:"",!1))}a[gi]=s}catch(re){He(e,e.return,re)}}break;case 6:if(qt(t,e),nn(e),i&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(re){He(e,e.return,re)}}break;case 3:if(qt(t,e),nn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(re){He(e,e.return,re)}break;case 4:qt(t,e),nn(e);break;case 13:qt(t,e),nn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(hs=Xe())),i&4&&Ad(e);break;case 22:if($=n!==null&&n.memoizedState!==null,e.mode&1?(ft=(N=ft)||$,qt(t,e),ft=N):qt(t,e),nn(e),i&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!$&&e.mode&1)for(Z=e,$=e.child;$!==null;){for(U=Z=$;Z!==null;){switch(M=Z,Y=M.child,M.tag){case 0:case 11:case 14:case 15:Pi(4,M,M.return);break;case 1:Ir(M,M.return);var te=M.stateNode;if(typeof te.componentWillUnmount=="function"){i=M,n=M.return;try{t=i,te.props=t.memoizedProps,te.state=t.memoizedState,te.componentWillUnmount()}catch(re){He(i,n,re)}}break;case 5:Ir(M,M.return);break;case 22:if(M.memoizedState!==null){Ud(U);continue}}Y!==null?(Y.return=M,Z=Y):Ud(U)}$=$.sibling}e:for($=null,U=e;;){if(U.tag===5){if($===null){$=U;try{a=U.stateNode,N?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(g=U.stateNode,y=U.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Yr("display",p))}catch(re){He(e,e.return,re)}}}else if(U.tag===6){if($===null)try{U.stateNode.nodeValue=N?"":U.memoizedProps}catch(re){He(e,e.return,re)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;$===U&&($=null),U=U.return}$===U&&($=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:qt(t,e),nn(e),i&4&&Ad(e);break;case 21:break;default:qt(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dd(n)){var i=n;break e}n=n.return}throw Error(o(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(dn(a,""),i.flags&=-33);var s=Id(e);ds(e,s,a);break;case 3:case 4:var p=i.stateNode.containerInfo,g=Id(e);cs(e,g,p);break;default:throw Error(o(161))}}catch(y){He(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e,t,n){Z=e,Md(e)}function Md(e,t,n){for(var i=(e.mode&1)!==0;Z!==null;){var a=Z,s=a.child;if(a.tag===22&&i){var p=a.memoizedState!==null||Vo;if(!p){var g=a.alternate,y=g!==null&&g.memoizedState!==null||ft;g=Vo;var N=ft;if(Vo=p,(ft=y)&&!N)for(Z=a;Z!==null;)p=Z,y=p.child,p.tag===22&&p.memoizedState!==null?Vd(a):y!==null?(y.return=p,Z=y):Vd(a);for(;s!==null;)Z=s,Md(s),s=s.sibling;Z=a,Vo=g,ft=N}$d(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,Z=s):$d(e)}}function $d(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||Bo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ft)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Wt(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uc(t,s,i);break;case 3:var p=t.updateQueue;if(p!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uc(t,p,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var $=N.memoizedState;if($!==null){var U=$.dehydrated;U!==null&&oi(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}ft||t.flags&512&&us(t)}catch(M){He(t,t.return,M)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Ud(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Vd(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bo(4,t)}catch(y){He(t,n,y)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(y){He(t,a,y)}}var s=t.return;try{us(t)}catch(y){He(t,s,y)}break;case 5:var p=t.return;try{us(t)}catch(y){He(t,p,y)}}}catch(y){He(t,t.return,y)}if(t===e){Z=null;break}var g=t.sibling;if(g!==null){g.return=t.return,Z=g;break}Z=t.return}}var vm=Math.ceil,Ho=K.ReactCurrentDispatcher,ps=K.ReactCurrentOwner,Ot=K.ReactCurrentBatchConfig,Ne=0,rt=null,Ye=null,st=0,Rt=0,Lr=Rn(0),et=0,Ni=null,nr=0,Wo=0,fs=0,Fi=null,kt=null,hs=0,Ar=1/0,wn=null,Xo=!1,ms=null,An=null,qo=!1,On=null,Qo=0,zi=0,gs=null,Yo=-1,Ko=0;function mt(){return Ne&6?Xe():Yo!==-1?Yo:Yo=Xe()}function Mn(e){return e.mode&1?Ne&2&&st!==0?st&-st:nm.transition!==null?(Ko===0&&(Ko=Iu()),Ko):(e=be,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function Qt(e,t,n,i){if(50<zi)throw zi=0,gs=null,Error(o(185));ei(e,n,i),(!(Ne&2)||e!==rt)&&(e===rt&&(!(Ne&2)&&(Wo|=n),et===4&&$n(e,st)),St(e,i),n===1&&Ne===0&&!(t.mode&1)&&(Ar=Xe()+500,Eo&&Tn()))}function St(e,t){var n=e.callbackNode;nh(e,t);var i=io(e,e===rt?st:0);if(i===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?tm(Hd.bind(null,e)):Fc(Hd.bind(null,e)),Gh(function(){!(Ne&6)&&Tn()}),n=null;else{switch(Lu(i)){case 1:n=Yl;break;case 4:n=Tu;break;case 16:n=eo;break;case 536870912:n=Du;break;default:n=eo}n=Zd(n,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bd(e,t){if(Yo=-1,Ko=0,Ne&6)throw Error(o(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var i=io(e,e===rt?st:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Go(e,i);else{t=i;var a=Ne;Ne|=2;var s=Xd();(rt!==e||st!==t)&&(wn=null,Ar=Xe()+500,ir(e,t));do try{Sm();break}catch(g){Wd(e,g)}while(!0);Da(),Ho.current=s,Ne=a,Ye!==null?t=0:(rt=null,st=0,t=et)}if(t!==0){if(t===2&&(a=Kl(e),a!==0&&(i=a,t=xs(e,a))),t===1)throw n=Ni,ir(e,0),$n(e,i),St(e,Xe()),n;if(t===6)$n(e,i);else{if(a=e.current.alternate,!(i&30)&&!wm(a)&&(t=Go(e,i),t===2&&(s=Kl(e),s!==0&&(i=s,t=xs(e,s))),t===1))throw n=Ni,ir(e,0),$n(e,i),St(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:or(e,kt,wn);break;case 3:if($n(e,i),(i&130023424)===i&&(t=hs+500-Xe(),10<t)){if(io(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){mt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ca(or.bind(null,e,kt,wn),t);break}or(e,kt,wn);break;case 4:if($n(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var p=31-Vt(i);s=1<<p,p=t[p],p>a&&(a=p),i&=~s}if(i=a,i=Xe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vm(i/1960))-i,10<i){e.timeoutHandle=Ca(or.bind(null,e,kt,wn),i);break}or(e,kt,wn);break;case 5:or(e,kt,wn);break;default:throw Error(o(329))}}}return St(e,Xe()),e.callbackNode===n?Bd.bind(null,e):null}function xs(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=Go(e,t),e!==2&&(t=kt,kt=n,t!==null&&ys(t)),e}function ys(e){kt===null?kt=e:kt.push.apply(kt,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Bt(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~fs,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),i=1<<n;e[n]=-1,t&=~i}}function Hd(e){if(Ne&6)throw Error(o(327));Or();var t=io(e,0);if(!(t&1))return St(e,Xe()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var i=Kl(e);i!==0&&(t=i,n=xs(e,i))}if(n===1)throw n=Ni,ir(e,0),$n(e,t),St(e,Xe()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,kt,wn),St(e,Xe()),null}function vs(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Ar=Xe()+500,Eo&&Tn())}}function rr(e){On!==null&&On.tag===0&&!(Ne&6)&&Or();var t=Ne;Ne|=1;var n=Ot.transition,i=be;try{if(Ot.transition=null,be=1,e)return e()}finally{be=i,Ot.transition=n,Ne=t,!(Ne&6)&&Tn()}}function ws(){Rt=Lr.current,Le(Lr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kh(n)),Ye!==null)for(n=Ye.return;n!==null;){var i=n;switch(Fa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&So();break;case 3:Tr(),Le(yt),Le(ct),Va();break;case 5:$a(i);break;case 4:Tr();break;case 13:Le($e);break;case 19:Le($e);break;case 10:Ia(i.type._context);break;case 22:case 23:ws()}n=n.return}if(rt=e,Ye=e=Un(e.current,null),st=Rt=t,et=0,Ni=null,fs=Wo=nr=0,kt=Fi=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],i=n.interleaved,i!==null){n.interleaved=null;var a=i.next,s=n.pending;if(s!==null){var p=s.next;s.next=a,i.next=p}n.pending=i}Jn=null}return e}function Wd(e,t){do{var n=Ye;try{if(Da(),Do.current=Oo,Io){for(var i=Ue.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Io=!1}if(tr=0,nt=Je=Ue=null,Si=!1,Ci=0,ps.current=null,n===null||n.return===null){et=1,Ni=t,Ye=null;break}e:{var s=e,p=n.return,g=n,y=t;if(t=st,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var N=y,$=g,U=$.tag;if(!($.mode&1)&&(U===0||U===11||U===15)){var M=$.alternate;M?($.updateQueue=M.updateQueue,$.memoizedState=M.memoizedState,$.lanes=M.lanes):($.updateQueue=null,$.memoizedState=null)}var Y=gd(p);if(Y!==null){Y.flags&=-257,xd(Y,p,g,s,t),Y.mode&1&&md(s,N,t),t=Y,y=N;var te=t.updateQueue;if(te===null){var re=new Set;re.add(y),t.updateQueue=re}else te.add(y);break e}else{if(!(t&1)){md(s,N,t),ks();break e}y=Error(o(426))}}else if(Me&&g.mode&1){var qe=gd(p);if(qe!==null){!(qe.flags&65536)&&(qe.flags|=256),xd(qe,p,g,s,t),ba(Dr(y,g));break e}}s=y=Dr(y,g),et!==4&&(et=2),Fi===null?Fi=[s]:Fi.push(s),s=p;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var C=fd(s,y,t);$c(s,C);break e;case 1:g=y;var w=s.type,j=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(An===null||!An.has(j)))){s.flags|=65536,t&=-t,s.lanes|=t;var V=hd(s,g,t);$c(s,V);break e}}s=s.return}while(s!==null)}Qd(n)}catch(ie){t=ie,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function Xd(){var e=Ho.current;return Ho.current=Oo,e===null?Oo:e}function ks(){(et===0||et===3||et===2)&&(et=4),rt===null||!(nr&268435455)&&!(Wo&268435455)||$n(rt,st)}function Go(e,t){var n=Ne;Ne|=2;var i=Xd();(rt!==e||st!==t)&&(wn=null,ir(e,t));do try{km();break}catch(a){Wd(e,a)}while(!0);if(Da(),Ne=n,Ho.current=i,Ye!==null)throw Error(o(261));return rt=null,st=0,et}function km(){for(;Ye!==null;)qd(Ye)}function Sm(){for(;Ye!==null&&!qf();)qd(Ye)}function qd(e){var t=Gd(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?Qd(e):Ye=t,ps.current=null}function Qd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mm(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Ye=null;return}}else if(n=hm(n,t,Rt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);et===0&&(et=5)}function or(e,t,n){var i=be,a=Ot.transition;try{Ot.transition=null,be=1,Cm(e,t,n,i)}finally{Ot.transition=a,be=i}return null}function Cm(e,t,n,i){do Or();while(On!==null);if(Ne&6)throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(rh(e,s),e===rt&&(Ye=rt=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Zd(eo,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var p=be;be=1;var g=Ne;Ne|=4,ps.current=null,xm(e,n),Od(n,e),Bh(ka),ao=!!wa,ka=wa=null,e.current=n,ym(n),Qf(),Ne=g,be=p,Ot.transition=s}else e.current=n;if(qo&&(qo=!1,On=e,Qo=a),s=e.pendingLanes,s===0&&(An=null),Gf(n.stateNode),St(e,Xe()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(Xo)throw Xo=!1,e=ms,ms=null,e;return Qo&1&&e.tag!==0&&Or(),s=e.pendingLanes,s&1?e===gs?zi++:(zi=0,gs=e):zi=0,Tn(),null}function Or(){if(On!==null){var e=Lu(Qo),t=Ot.transition,n=be;try{if(Ot.transition=null,be=16>e?16:e,On===null)var i=!1;else{if(e=On,On=null,Qo=0,Ne&6)throw Error(o(331));var a=Ne;for(Ne|=4,Z=e.current;Z!==null;){var s=Z,p=s.child;if(Z.flags&16){var g=s.deletions;if(g!==null){for(var y=0;y<g.length;y++){var N=g[y];for(Z=N;Z!==null;){var $=Z;switch($.tag){case 0:case 11:case 15:Pi(8,$,s)}var U=$.child;if(U!==null)U.return=$,Z=U;else for(;Z!==null;){$=Z;var M=$.sibling,Y=$.return;if(Td($),$===N){Z=null;break}if(M!==null){M.return=Y,Z=M;break}Z=Y}}}var te=s.alternate;if(te!==null){var re=te.child;if(re!==null){te.child=null;do{var qe=re.sibling;re.sibling=null,re=qe}while(re!==null)}}Z=s}}if(s.subtreeFlags&2064&&p!==null)p.return=s,Z=p;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pi(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,Z=C;break e}Z=s.return}}var w=e.current;for(Z=w;Z!==null;){p=Z;var j=p.child;if(p.subtreeFlags&2064&&j!==null)j.return=p,Z=j;else e:for(p=w;Z!==null;){if(g=Z,g.flags&2048)try{switch(g.tag){case 0:case 11:case 15:Bo(9,g)}}catch(ie){He(g,g.return,ie)}if(g===p){Z=null;break e}var V=g.sibling;if(V!==null){V.return=g.return,Z=V;break e}Z=g.return}}if(Ne=a,Tn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(to,e)}catch{}i=!0}return i}finally{be=n,Ot.transition=t}}return!1}function Yd(e,t,n){t=Dr(n,t),t=fd(e,t,1),e=In(e,t,1),t=mt(),e!==null&&(ei(e,1,t),St(e,t))}function He(e,t,n){if(e.tag===3)Yd(e,e,n);else for(;t!==null;){if(t.tag===3){Yd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(An===null||!An.has(i))){e=Dr(n,e),e=hd(t,e,1),t=In(t,e,1),e=mt(),t!==null&&(ei(t,1,e),St(t,e));break}}t=t.return}}function Em(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,rt===e&&(st&n)===n&&(et===4||et===3&&(st&130023424)===st&&500>Xe()-hs?ir(e,0):fs|=n),St(e,t)}function Kd(e,t){t===0&&(e.mode&1?(t=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):t=1);var n=mt();e=xn(e,t),e!==null&&(ei(e,t,n),St(e,n))}function jm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kd(e,n)}function _m(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),Kd(e,n)}var Gd;Gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,fm(e,t,n);wt=!!(e.flags&131072)}else wt=!1,Me&&t.flags&1048576&&zc(t,_o,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Uo(e,t),e=t.pendingProps;var a=_r(t,ct.current);br(t,n),a=Wa(null,t,i,e,a,n);var s=Xa();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(i)?(s=!0,Co(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Oa(t),a.updater=Mo,t.stateNode=a,a._reactInternals=t,Za(t,i,e,n),t=ns(null,t,i,!0,s,n)):(t.tag=0,Me&&s&&Na(t),ht(null,t,a,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Nm(i),e=Wt(i,e),a){case 0:t=ts(null,t,i,e,n);break e;case 1:t=Cd(null,t,i,e,n);break e;case 11:t=yd(null,t,i,e,n);break e;case 14:t=vd(null,t,i,Wt(i.type,e),n);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Wt(i,a),ts(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Wt(i,a),Cd(e,t,i,a,n);case 3:e:{if(Ed(t),e===null)throw Error(o(387));i=t.pendingProps,s=t.memoizedState,a=s.element,Mc(e,t),bo(t,i,null,n);var p=t.memoizedState;if(i=p.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Dr(Error(o(423)),t),t=jd(e,t,i,n,a);break e}else if(i!==a){a=Dr(Error(o(424)),t),t=jd(e,t,i,n,a);break e}else for(zt=zn(t.stateNode.containerInfo.firstChild),Ft=t,Me=!0,Ht=null,n=Ac(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),i===a){t=vn(e,t,n);break e}ht(e,t,i,n)}t=t.child}return t;case 5:return Vc(t),e===null&&Ra(t),i=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,p=a.children,Sa(i,a)?p=null:s!==null&&Sa(i,s)&&(t.flags|=32),Sd(e,t),ht(e,t,p,n),t.child;case 6:return e===null&&Ra(t),null;case 13:return _d(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zr(t,null,i,n):ht(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Wt(i,a),yd(e,t,i,a,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,s=t.memoizedProps,p=a.value,De(Fo,i._currentValue),i._currentValue=p,s!==null)if(Bt(s.value,p)){if(s.children===a.children&&!yt.current){t=vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var g=s.dependencies;if(g!==null){p=s.child;for(var y=g.firstContext;y!==null;){if(y.context===i){if(s.tag===1){y=yn(-1,n&-n),y.tag=2;var N=s.updateQueue;if(N!==null){N=N.shared;var $=N.pending;$===null?y.next=y:(y.next=$.next,$.next=y),N.pending=y}}s.lanes|=n,y=s.alternate,y!==null&&(y.lanes|=n),La(s.return,n,t),g.lanes|=n;break}y=y.next}}else if(s.tag===10)p=s.type===t.type?null:s.child;else if(s.tag===18){if(p=s.return,p===null)throw Error(o(341));p.lanes|=n,g=p.alternate,g!==null&&(g.lanes|=n),La(p,n,t),p=s.sibling}else p=s.child;if(p!==null)p.return=s;else for(p=s;p!==null;){if(p===t){p=null;break}if(s=p.sibling,s!==null){s.return=p.return,p=s;break}p=p.return}s=p}ht(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,br(t,n),a=Lt(a),i=i(a),t.flags|=1,ht(e,t,i,n),t.child;case 14:return i=t.type,a=Wt(i,t.pendingProps),a=Wt(i.type,a),vd(e,t,i,a,n);case 15:return wd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Wt(i,a),Uo(e,t),t.tag=1,vt(i)?(e=!0,Co(t)):e=!1,br(t,n),dd(t,i,a),Za(t,i,a,n),ns(null,t,i,!0,e,n);case 19:return Nd(e,t,n);case 22:return kd(e,t,n)}throw Error(o(156,t.tag))};function Zd(e,t){return Ru(e,t)}function Pm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,i){return new Pm(e,t,n,i)}function Ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nm(e){if(typeof e=="function")return Ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ue)return 11;if(e===Re)return 14}return 2}function Un(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,i,a,s){var p=2;if(i=e,typeof e=="function")Ss(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case J:return lr(n.children,a,s,t);case Se:p=8,a|=8;break;case Ee:return e=Mt(12,n,t,a|2),e.elementType=Ee,e.lanes=s,e;case de:return e=Mt(13,n,t,a),e.elementType=de,e.lanes=s,e;case Pe:return e=Mt(19,n,t,a),e.elementType=Pe,e.lanes=s,e;case xe:return Jo(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _e:p=10;break e;case lt:p=9;break e;case ue:p=11;break e;case Re:p=14;break e;case Te:p=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Mt(p,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function lr(e,t,n,i){return e=Mt(7,e,i,t),e.lanes=n,e}function Jo(e,t,n,i){return e=Mt(22,e,i,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function Cs(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Es(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fm(e,t,n,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function js(e,t,n,i,a,s,p,g,y){return e=new Fm(e,t,n,g,y),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(s),e}function zm(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Jd(e){if(!e)return bn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(vt(n))return Pc(e,n,t)}return t}function ep(e,t,n,i,a,s,p,g,y){return e=js(n,i,!0,e,a,s,p,g,y),e.context=Jd(null),n=e.current,i=mt(),a=Mn(n),s=yn(i,a),s.callback=t??null,In(n,s,a),e.current.lanes=a,ei(e,a,i),St(e,i),e}function el(e,t,n,i){var a=t.current,s=mt(),p=Mn(a);return n=Jd(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(s,p),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=In(a,t,p),e!==null&&(Qt(e,a,p,s),Ro(e,a,p)),p}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _s(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ps(e){this._internalRoot=e}nl.prototype.render=Ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));el(e,t,null,null)},nl.prototype.unmount=Ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){el(null,e,null,null)}),t[fn]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&Vu(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function Rm(e,t,n,i,a){if(a){if(typeof i=="function"){var s=i;i=function(){var N=tl(p);s.call(N)}}var p=ep(t,i,e,0,null,!1,!1,"",rp);return e._reactRootContainer=p,e[fn]=p.current,hi(e.nodeType===8?e.parentNode:e),rr(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var g=i;i=function(){var N=tl(y);g.call(N)}}var y=js(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=y,e[fn]=y.current,hi(e.nodeType===8?e.parentNode:e),rr(function(){el(t,y,n,i)}),y}function il(e,t,n,i,a){var s=n._reactRootContainer;if(s){var p=s;if(typeof a=="function"){var g=a;a=function(){var y=tl(p);g.call(y)}}el(t,p,e,a)}else p=Rm(n,t,e,a,i);return tl(p)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Zl(t,n|1),St(t,Xe()),!(Ne&6)&&(Ar=Xe()+500,Tn()))}break;case 13:rr(function(){var i=xn(e,1);if(i!==null){var a=mt();Qt(i,e,1,a)}}),_s(e,1)}},Jl=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=mt();Qt(t,e,134217728,n)}_s(e,134217728)}},Ou=function(e){if(e.tag===13){var t=Mn(e),n=xn(e,t);if(n!==null){var i=mt();Qt(n,e,t,i)}_s(e,t)}},Mu=function(){return be},$u=function(e,t){var n=be;try{return be=e,t()}finally{be=n}},Wl=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=ko(i);if(!a)throw Error(o(90));_t(i),Qi(i,a)}}}break;case"textarea":le(e,n);break;case"select":t=n.value,t!=null&&X(e,!!n.multiple,t,!1)}},Eu=vs,ju=rr;var bm={usingClientEntryPoint:!1,Events:[xi,Er,ko,Su,Cu,vs]},Ri={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tm={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{to=ol.inject(Tm),Zt=ol}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm,Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(o(200));return zm(e,t,null,n)},Ct.createRoot=function(e,t){if(!Ns(e))throw Error(o(299));var n=!1,i="",a=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=js(e,1,!1,null,null,n,!1,i,a),e[fn]=t.current,hi(e.nodeType===8?e.parentNode:e),new Ps(t)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Fu(t),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return rr(e)},Ct.hydrate=function(e,t,n){if(!rl(t))throw Error(o(200));return il(null,e,t,!0,n)},Ct.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(o(405));var i=n!=null&&n.hydratedSources||null,a=!1,s="",p=np;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),t=ep(t,null,e,1,n??null,a,!1,s,p),e[fn]=t.current,hi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new nl(t)},Ct.render=function(e,t,n){if(!rl(t))throw Error(o(200));return il(null,e,t,!1,n)},Ct.unmountComponentAtNode=function(e){if(!rl(e))throw Error(o(40));return e._reactRootContainer?(rr(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1},Ct.unstable_batchedUpdates=vs,Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!rl(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return il(e,t,n,!1,i)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var dp;function Vm(){if(dp)return Rs.exports;dp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),Rs.exports=Um(),Rs.exports}var pp;function Bm(){if(pp)return ll;pp=1;var r=Vm();return ll.createRoot=r.createRoot,ll.hydrateRoot=r.hydrateRoot,ll}var Hm=Bm(),Ti={},fp;function Wm(){if(fp)return Ti;fp=1,Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.parse=h,Ti.serialize=k;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,l=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,d=(()=>{const F=function(){};return F.prototype=Object.create(null),F})();function h(F,A){const T=new d,I=F.length;if(I<2)return T;const O=(A==null?void 0:A.decode)||_;let L=0;do{const b=F.indexOf("=",L);if(b===-1)break;const q=F.indexOf(";",L),K=q===-1?I:q;if(b>K){L=F.lastIndexOf(";",b-1)+1;continue}const G=m(F,L,b),oe=x(F,b,G),J=F.slice(G,oe);if(T[J]===void 0){let Se=m(F,b+1,K),Ee=x(F,K,Se);const _e=O(F.slice(Se,Ee));T[J]=_e}L=K+1}while(L<I);return T}function m(F,A,T){do{const I=F.charCodeAt(A);if(I!==32&&I!==9)return A}while(++A<T);return T}function x(F,A,T){for(;A>T;){const I=F.charCodeAt(--A);if(I!==32&&I!==9)return A+1}return T}function k(F,A,T){const I=(T==null?void 0:T.encode)||encodeURIComponent;if(!r.test(F))throw new TypeError(`argument name is invalid: ${F}`);const O=I(A);if(!l.test(O))throw new TypeError(`argument val is invalid: ${A}`);let L=F+"="+O;if(!T)return L;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);L+="; Max-Age="+T.maxAge}if(T.domain){if(!o.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);L+="; Domain="+T.domain}if(T.path){if(!u.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);L+="; Path="+T.path}if(T.expires){if(!E(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);L+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(L+="; HttpOnly"),T.secure&&(L+="; Secure"),T.partitioned&&(L+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return L}function _(F){if(F.indexOf("%")===-1)return F;try{return decodeURIComponent(F)}catch{return F}}function E(F){return c.call(F)==="[object Date]"}return Ti}Wm();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hp="popstate";function Xm(r={}){function l(c,d){let{pathname:h="/",search:m="",hash:x=""}=fr(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Qs("",{pathname:h,search:m,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){let h=c.document.querySelector("base"),m="";if(h&&h.getAttribute("href")){let x=c.location.href,k=x.indexOf("#");m=k===-1?x:x.slice(0,k)}return m+"#"+(typeof d=="string"?d:$i(d))}function u(c,d){Gt(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return Qm(l,o,u,r)}function Ve(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function Gt(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function qm(){return Math.random().toString(36).substring(2,10)}function mp(r,l){return{usr:r.state,key:r.key,idx:l}}function Qs(r,l,o=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof l=="string"?fr(l):l,state:o,key:l&&l.key||u||qm()}}function $i({pathname:r="/",search:l="",hash:o=""}){return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function fr(r){let l={};if(r){let o=r.indexOf("#");o>=0&&(l.hash=r.substring(o),r=r.substring(0,o));let u=r.indexOf("?");u>=0&&(l.search=r.substring(u),r=r.substring(0,u)),r&&(l.pathname=r)}return l}function Qm(r,l,o,u={}){let{window:c=document.defaultView,v5Compat:d=!1}=u,h=c.history,m="POP",x=null,k=_();k==null&&(k=0,h.replaceState({...h.state,idx:k},""));function _(){return(h.state||{idx:null}).idx}function E(){m="POP";let O=_(),L=O==null?null:O-k;k=O,x&&x({action:m,location:I.location,delta:L})}function F(O,L){m="PUSH";let b=Qs(I.location,O,L);o(b,O),k=_()+1;let q=mp(b,k),K=I.createHref(b);try{h.pushState(q,"",K)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;c.location.assign(K)}d&&x&&x({action:m,location:I.location,delta:1})}function A(O,L){m="REPLACE";let b=Qs(I.location,O,L);o(b,O),k=_();let q=mp(b,k),K=I.createHref(b);h.replaceState(q,"",K),d&&x&&x({action:m,location:I.location,delta:0})}function T(O){let L=c.location.origin!=="null"?c.location.origin:c.location.href,b=typeof O=="string"?O:$i(O);return b=b.replace(/ $/,"%20"),Ve(L,`No window.location.(origin|href) available to create URL for href: ${b}`),new URL(b,L)}let I={get action(){return m},get location(){return r(c,h)},listen(O){if(x)throw new Error("A history only accepts one active listener");return c.addEventListener(hp,E),x=O,()=>{c.removeEventListener(hp,E),x=null}},createHref(O){return l(c,O)},createURL:T,encodeLocation(O){let L=T(O);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:F,replace:A,go(O){return h.go(O)}};return I}function Hp(r,l,o="/"){return Ym(r,l,o,!1)}function Ym(r,l,o,u){let c=typeof l=="string"?fr(l):l,d=Wn(c.pathname||"/",o);if(d==null)return null;let h=Wp(r);Km(h);let m=null;for(let x=0;m==null&&x<h.length;++x){let k=ag(d);m=og(h[x],k,u)}return m}function Wp(r,l=[],o=[],u=""){let c=(d,h,m)=>{let x={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};x.relativePath.startsWith("/")&&(Ve(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length));let k=Cn([u,x.relativePath]),_=o.concat(x);d.children&&d.children.length>0&&(Ve(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),Wp(d.children,l,_,k)),!(d.path==null&&!d.index)&&l.push({path:k,score:rg(k,d.index),routesMeta:_})};return r.forEach((d,h)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))c(d,h);else for(let x of Xp(d.path))c(d,h,x)}),l}function Xp(r){let l=r.split("/");if(l.length===0)return[];let[o,...u]=l,c=o.endsWith("?"),d=o.replace(/\?$/,"");if(u.length===0)return c?[d,""]:[d];let h=Xp(u.join("/")),m=[];return m.push(...h.map(x=>x===""?d:[d,x].join("/"))),c&&m.push(...h),m.map(x=>r.startsWith("/")&&x===""?"/":x)}function Km(r){r.sort((l,o)=>l.score!==o.score?o.score-l.score:ig(l.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var Gm=/^:[\w-]+$/,Zm=3,Jm=2,eg=1,tg=10,ng=-2,gp=r=>r==="*";function rg(r,l){let o=r.split("/"),u=o.length;return o.some(gp)&&(u+=ng),l&&(u+=Jm),o.filter(c=>!gp(c)).reduce((c,d)=>c+(Gm.test(d)?Zm:d===""?eg:tg),u)}function ig(r,l){return r.length===l.length&&r.slice(0,-1).every((u,c)=>u===l[c])?r[r.length-1]-l[l.length-1]:0}function og(r,l,o=!1){let{routesMeta:u}=r,c={},d="/",h=[];for(let m=0;m<u.length;++m){let x=u[m],k=m===u.length-1,_=d==="/"?l:l.slice(d.length)||"/",E=wl({path:x.relativePath,caseSensitive:x.caseSensitive,end:k},_),F=x.route;if(!E&&k&&o&&!u[u.length-1].route.index&&(E=wl({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},_)),!E)return null;Object.assign(c,E.params),h.push({params:c,pathname:Cn([d,E.pathname]),pathnameBase:dg(Cn([d,E.pathnameBase])),route:F}),E.pathnameBase!=="/"&&(d=Cn([d,E.pathnameBase]))}return h}function wl(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,u]=lg(r.path,r.caseSensitive,r.end),c=l.match(o);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:u.reduce((k,{paramName:_,isOptional:E},F)=>{if(_==="*"){let T=m[F]||"";h=d.slice(0,d.length-T.length).replace(/(.)\/+$/,"$1")}const A=m[F];return E&&!A?k[_]=void 0:k[_]=(A||"").replace(/%2F/g,"/"),k},{}),pathname:d,pathnameBase:h,pattern:r}}function lg(r,l=!1,o=!0){Gt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,x)=>(u.push({paramName:m,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(u.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function ag(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Gt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),r}}function Wn(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,u=r.charAt(o);return u&&u!=="/"?null:r.slice(o)||"/"}function sg(r,l="/"){let{pathname:o,search:u="",hash:c=""}=typeof r=="string"?fr(r):r;return{pathname:o?o.startsWith("/")?o:ug(o,l):l,search:pg(u),hash:fg(c)}}function ug(r,l){let o=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function Ds(r,l,o,u){return`Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cg(r){return r.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function qp(r){let l=cg(r);return l.map((o,u)=>u===l.length-1?o.pathname:o.pathnameBase)}function Qp(r,l,o,u=!1){let c;typeof r=="string"?c=fr(r):(c={...r},Ve(!c.pathname||!c.pathname.includes("?"),Ds("?","pathname","search",c)),Ve(!c.pathname||!c.pathname.includes("#"),Ds("#","pathname","hash",c)),Ve(!c.search||!c.search.includes("#"),Ds("#","search","hash",c)));let d=r===""||c.pathname==="",h=d?"/":c.pathname,m;if(h==null)m=o;else{let E=l.length-1;if(!u&&h.startsWith("..")){let F=h.split("/");for(;F[0]==="..";)F.shift(),E-=1;c.pathname=F.join("/")}m=E>=0?l[E]:"/"}let x=sg(c,m),k=h&&h!=="/"&&h.endsWith("/"),_=(d||h===".")&&o.endsWith("/");return!x.pathname.endsWith("/")&&(k||_)&&(x.pathname+="/"),x}var Cn=r=>r.join("/").replace(/\/\/+/g,"/"),dg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),pg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,fg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function hg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Yp=["POST","PUT","PATCH","DELETE"];new Set(Yp);var mg=["GET",...Yp];new Set(mg);var qr=z.createContext(null);qr.displayName="DataRouter";var Fl=z.createContext(null);Fl.displayName="DataRouterState";var Kp=z.createContext({isTransitioning:!1});Kp.displayName="ViewTransition";var gg=z.createContext(new Map);gg.displayName="Fetchers";var xg=z.createContext(null);xg.displayName="Await";var un=z.createContext(null);un.displayName="Navigation";var Vi=z.createContext(null);Vi.displayName="Location";var cn=z.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var ou=z.createContext(null);ou.displayName="RouteError";function yg(r,{relative:l}={}){Ve(Bi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=z.useContext(un),{hash:c,pathname:d,search:h}=Hi(r,{relative:l}),m=d;return o!=="/"&&(m=d==="/"?o:Cn([o,d])),u.createHref({pathname:m,search:h,hash:c})}function Bi(){return z.useContext(Vi)!=null}function Xn(){return Ve(Bi(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Vi).location}var Gp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zp(r){z.useContext(un).static||z.useLayoutEffect(r)}function vg(){let{isDataRoute:r}=z.useContext(cn);return r?Dg():wg()}function wg(){Ve(Bi(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(qr),{basename:l,navigator:o}=z.useContext(un),{matches:u}=z.useContext(cn),{pathname:c}=Xn(),d=JSON.stringify(qp(u)),h=z.useRef(!1);return Zp(()=>{h.current=!0}),z.useCallback((x,k={})=>{if(Gt(h.current,Gp),!h.current)return;if(typeof x=="number"){o.go(x);return}let _=Qp(x,JSON.parse(d),c,k.relative==="path");r==null&&l!=="/"&&(_.pathname=_.pathname==="/"?l:Cn([l,_.pathname])),(k.replace?o.replace:o.push)(_,k.state,k)},[l,o,d,c,r])}var kg=z.createContext(null);function Sg(r){let l=z.useContext(cn).outlet;return l&&z.createElement(kg.Provider,{value:r},l)}function Hi(r,{relative:l}={}){let{matches:o}=z.useContext(cn),{pathname:u}=Xn(),c=JSON.stringify(qp(o));return z.useMemo(()=>Qp(r,JSON.parse(c),u,l==="path"),[r,c,u,l])}function Cg(r,l){return Jp(r,l)}function Jp(r,l,o,u){var L;Ve(Bi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=z.useContext(un),{matches:d}=z.useContext(cn),h=d[d.length-1],m=h?h.params:{},x=h?h.pathname:"/",k=h?h.pathnameBase:"/",_=h&&h.route;{let b=_&&_.path||"";ef(x,!_||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let E=Xn(),F;if(l){let b=typeof l=="string"?fr(l):l;Ve(k==="/"||((L=b.pathname)==null?void 0:L.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${b.pathname}" was given in the \`location\` prop.`),F=b}else F=E;let A=F.pathname||"/",T=A;if(k!=="/"){let b=k.replace(/^\//,"").split("/");T="/"+A.replace(/^\//,"").split("/").slice(b.length).join("/")}let I=Hp(r,{pathname:T});Gt(_||I!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Gt(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Ng(I&&I.map(b=>Object.assign({},b,{params:Object.assign({},m,b.params),pathname:Cn([k,c.encodeLocation?c.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?k:Cn([k,c.encodeLocation?c.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),d,o,u);return l&&O?z.createElement(Vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},O):O}function Eg(){let r=Tg(),l=hg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},d={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:d},"ErrorBoundary")," or"," ",z.createElement("code",{style:d},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},l),o?z.createElement("pre",{style:c},o):null,h)}var jg=z.createElement(Eg,null),_g=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error!==void 0?z.createElement(cn.Provider,{value:this.props.routeContext},z.createElement(ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pg({routeContext:r,match:l,children:o}){let u=z.useContext(qr);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),z.createElement(cn.Provider,{value:r},o)}function Ng(r,l=[],o=null,u=null){if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let c=r,d=o==null?void 0:o.errors;if(d!=null){let x=c.findIndex(k=>k.route.id&&(d==null?void 0:d[k.route.id])!==void 0);Ve(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,m=-1;if(o)for(let x=0;x<c.length;x++){let k=c[x];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(m=x),k.route.id){let{loaderData:_,errors:E}=o,F=k.route.loader&&!_.hasOwnProperty(k.route.id)&&(!E||E[k.route.id]===void 0);if(k.route.lazy||F){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((x,k,_)=>{let E,F=!1,A=null,T=null;o&&(E=d&&k.route.id?d[k.route.id]:void 0,A=k.route.errorElement||jg,h&&(m<0&&_===0?(ef("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,T=null):m===_&&(F=!0,T=k.route.hydrateFallbackElement||null)));let I=l.concat(c.slice(0,_+1)),O=()=>{let L;return E?L=A:F?L=T:k.route.Component?L=z.createElement(k.route.Component,null):k.route.element?L=k.route.element:L=x,z.createElement(Pg,{match:k,routeContext:{outlet:x,matches:I,isDataRoute:o!=null},children:L})};return o&&(k.route.ErrorBoundary||k.route.errorElement||_===0)?z.createElement(_g,{location:o.location,revalidation:o.revalidation,component:A,error:E,children:O(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):O()},null)}function lu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fg(r){let l=z.useContext(qr);return Ve(l,lu(r)),l}function zg(r){let l=z.useContext(Fl);return Ve(l,lu(r)),l}function Rg(r){let l=z.useContext(cn);return Ve(l,lu(r)),l}function au(r){let l=Rg(r),o=l.matches[l.matches.length-1];return Ve(o.route.id,`${r} can only be used on routes that contain a unique "id"`),o.route.id}function bg(){return au("useRouteId")}function Tg(){var u;let r=z.useContext(ou),l=zg("useRouteError"),o=au("useRouteError");return r!==void 0?r:(u=l.errors)==null?void 0:u[o]}function Dg(){let{router:r}=Fg("useNavigate"),l=au("useNavigate"),o=z.useRef(!1);return Zp(()=>{o.current=!0}),z.useCallback(async(c,d={})=>{Gt(o.current,Gp),o.current&&(typeof c=="number"?r.navigate(c):await r.navigate(c,{fromRouteId:l,...d}))},[r,l])}var xp={};function ef(r,l,o){!l&&!xp[r]&&(xp[r]=!0,Gt(!1,o))}z.memo(Ig);function Ig({routes:r,future:l,state:o}){return Jp(r,void 0,o,l)}function Lg(r){return Sg(r.context)}function ar(r){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ag({basename:r="/",children:l=null,location:o,navigationType:u="POP",navigator:c,static:d=!1}){Ve(!Bi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof o=="string"&&(o=fr(o));let{pathname:x="/",search:k="",hash:_="",state:E=null,key:F="default"}=o,A=z.useMemo(()=>{let T=Wn(x,h);return T==null?null:{location:{pathname:T,search:k,hash:_,state:E,key:F},navigationType:u}},[h,x,k,_,E,F,u]);return Gt(A!=null,`<Router basename="${h}"> is not able to match the URL "${x}${k}${_}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:z.createElement(un.Provider,{value:m},z.createElement(Vi.Provider,{children:l,value:A}))}function Og({children:r,location:l}){return Cg(Ys(r),l)}function Ys(r,l=[]){let o=[];return z.Children.forEach(r,(u,c)=>{if(!z.isValidElement(u))return;let d=[...l,c];if(u.type===z.Fragment){o.push.apply(o,Ys(u.props.children,d));return}Ve(u.type===ar,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||d.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Ys(u.props.children,d)),o.push(h)}),o}var dl="get",pl="application/x-www-form-urlencoded";function zl(r){return r!=null&&typeof r.tagName=="string"}function Mg(r){return zl(r)&&r.tagName.toLowerCase()==="button"}function $g(r){return zl(r)&&r.tagName.toLowerCase()==="form"}function Ug(r){return zl(r)&&r.tagName.toLowerCase()==="input"}function Vg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Bg(r,l){return r.button===0&&(!l||l==="_self")&&!Vg(r)}var al=null;function Hg(){if(al===null)try{new FormData(document.createElement("form"),0),al=!1}catch{al=!0}return al}var Wg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Is(r){return r!=null&&!Wg.has(r)?(Gt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pl}"`),null):r}function Xg(r,l){let o,u,c,d,h;if($g(r)){let m=r.getAttribute("action");u=m?Wn(m,l):null,o=r.getAttribute("method")||dl,c=Is(r.getAttribute("enctype"))||pl,d=new FormData(r)}else if(Mg(r)||Ug(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||m.getAttribute("action");if(u=x?Wn(x,l):null,o=r.getAttribute("formmethod")||m.getAttribute("method")||dl,c=Is(r.getAttribute("formenctype"))||Is(m.getAttribute("enctype"))||pl,d=new FormData(m,r),!Hg()){let{name:k,type:_,value:E}=r;if(_==="image"){let F=k?`${k}.`:"";d.append(`${F}x`,"0"),d.append(`${F}y`,"0")}else k&&d.append(k,E)}}else{if(zl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=dl,u=null,c=pl,h=r}return d&&c==="text/plain"&&(h=d,d=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:d,body:h}}function su(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}async function qg(r,l){if(r.id in l)return l[r.id];try{let o=await import(r.module);return l[r.id]=o,o}catch(o){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Yg(r,l,o){let u=await Promise.all(r.map(async c=>{let d=l.routes[c.route.id];if(d){let h=await qg(d,o);return h.links?h.links():[]}return[]}));return Jg(u.flat(1).filter(Qg).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function yp(r,l,o,u,c,d){let h=(x,k)=>o[k]?x.route.id!==o[k].route.id:!0,m=(x,k)=>{var _;return o[k].pathname!==x.pathname||((_=o[k].route.path)==null?void 0:_.endsWith("*"))&&o[k].params["*"]!==x.params["*"]};return d==="assets"?l.filter((x,k)=>h(x,k)||m(x,k)):d==="data"?l.filter((x,k)=>{var E;let _=u.routes[x.route.id];if(!_||!_.hasLoader)return!1;if(h(x,k)||m(x,k))return!0;if(x.route.shouldRevalidate){let F=x.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((E=o[0])==null?void 0:E.params)||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof F=="boolean")return F}return!0}):[]}function Kg(r,l){return Gg(r.map(o=>{let u=l.routes[o.route.id];if(!u)return[];let c=[u.module];return u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function Gg(r){return[...new Set(r)]}function Zg(r){let l={},o=Object.keys(r).sort();for(let u of o)l[u]=r[u];return l}function Jg(r,l){let o=new Set;return new Set(l),r.reduce((u,c)=>{let d=JSON.stringify(Zg(c));return o.has(d)||(o.add(d),u.push({key:d,link:c})),u},[])}function ex(r){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return l.pathname==="/"?l.pathname="_root.data":l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function tx(){let r=z.useContext(qr);return su(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function nx(){let r=z.useContext(Fl);return su(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var uu=z.createContext(void 0);uu.displayName="FrameworkContext";function tf(){let r=z.useContext(uu);return su(r,"You must render this element inside a <HydratedRouter> element"),r}function rx(r,l){let o=z.useContext(uu),[u,c]=z.useState(!1),[d,h]=z.useState(!1),{onFocus:m,onBlur:x,onMouseEnter:k,onMouseLeave:_,onTouchStart:E}=l,F=z.useRef(null);z.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let I=L=>{L.forEach(b=>{h(b.isIntersecting)})},O=new IntersectionObserver(I,{threshold:.5});return F.current&&O.observe(F.current),()=>{O.disconnect()}}},[r]),z.useEffect(()=>{if(u){let I=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(I)}}},[u]);let A=()=>{c(!0)},T=()=>{c(!1),h(!1)};return o?r!=="intent"?[d,F,{}]:[d,F,{onFocus:Di(m,A),onBlur:Di(x,T),onMouseEnter:Di(k,A),onMouseLeave:Di(_,T),onTouchStart:Di(E,A)}]:[!1,F,{}]}function Di(r,l){return o=>{r&&r(o),o.defaultPrevented||l(o)}}function ix({page:r,...l}){let{router:o}=tx(),u=z.useMemo(()=>Hp(o.routes,r,o.basename),[o.routes,r,o.basename]);return u?z.createElement(lx,{page:r,matches:u,...l}):null}function ox(r){let{manifest:l,routeModules:o}=tf(),[u,c]=z.useState([]);return z.useEffect(()=>{let d=!1;return Yg(r,l,o).then(h=>{d||c(h)}),()=>{d=!0}},[r,l,o]),u}function lx({page:r,matches:l,...o}){let u=Xn(),{manifest:c,routeModules:d}=tf(),{loaderData:h,matches:m}=nx(),x=z.useMemo(()=>yp(r,l,m,c,u,"data"),[r,l,m,c,u]),k=z.useMemo(()=>yp(r,l,m,c,u,"assets"),[r,l,m,c,u]),_=z.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let A=new Set,T=!1;if(l.forEach(O=>{var b;let L=c.routes[O.route.id];!L||!L.hasLoader||(!x.some(q=>q.route.id===O.route.id)&&O.route.id in h&&((b=d[O.route.id])!=null&&b.shouldRevalidate)||L.hasClientLoader?T=!0:A.add(O.route.id))}),A.size===0)return[];let I=ex(r);return T&&A.size>0&&I.searchParams.set("_routes",l.filter(O=>A.has(O.route.id)).map(O=>O.route.id).join(",")),[I.pathname+I.search]},[h,u,c,x,l,r,d]),E=z.useMemo(()=>Kg(k,c),[k,c]),F=ox(k);return z.createElement(z.Fragment,null,_.map(A=>z.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),E.map(A=>z.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),F.map(({key:A,link:T})=>z.createElement("link",{key:A,...T})))}function ax(...r){return l=>{r.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var nf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nf&&(window.__reactRouterVersion="7.1.3")}catch{}function sx({basename:r,children:l,window:o}){let u=z.useRef();u.current==null&&(u.current=Xm({window:o,v5Compat:!0}));let c=u.current,[d,h]=z.useState({action:c.action,location:c.location}),m=z.useCallback(x=>{z.startTransition(()=>h(x))},[h]);return z.useLayoutEffect(()=>c.listen(m),[c,m]),z.createElement(Ag,{basename:r,children:l,location:d.location,navigationType:d.action,navigator:c})}var rf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,an=z.forwardRef(function({onClick:l,discover:o="render",prefetch:u="none",relative:c,reloadDocument:d,replace:h,state:m,target:x,to:k,preventScrollReset:_,viewTransition:E,...F},A){let{basename:T}=z.useContext(un),I=typeof k=="string"&&rf.test(k),O,L=!1;if(typeof k=="string"&&I&&(O=k,nf))try{let Ee=new URL(window.location.href),_e=k.startsWith("//")?new URL(Ee.protocol+k):new URL(k),lt=Wn(_e.pathname,T);_e.origin===Ee.origin&&lt!=null?k=lt+_e.search+_e.hash:L=!0}catch{Gt(!1,`<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=yg(k,{relative:c}),[q,K,G]=rx(u,F),oe=px(k,{replace:h,state:m,target:x,preventScrollReset:_,relative:c,viewTransition:E});function J(Ee){l&&l(Ee),Ee.defaultPrevented||oe(Ee)}let Se=z.createElement("a",{...F,...G,href:O||b,onClick:L||d?l:J,ref:ax(A,K),target:x,"data-discover":!I&&o==="render"?"true":void 0});return q&&!I?z.createElement(z.Fragment,null,Se,z.createElement(ix,{page:b})):Se});an.displayName="Link";var ux=z.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:u="",end:c=!1,style:d,to:h,viewTransition:m,children:x,...k},_){let E=Hi(h,{relative:k.relative}),F=Xn(),A=z.useContext(Fl),{navigator:T,basename:I}=z.useContext(un),O=A!=null&&xx(E)&&m===!0,L=T.encodeLocation?T.encodeLocation(E).pathname:E.pathname,b=F.pathname,q=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;o||(b=b.toLowerCase(),q=q?q.toLowerCase():null,L=L.toLowerCase()),q&&I&&(q=Wn(q,I)||q);const K=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let G=b===L||!c&&b.startsWith(L)&&b.charAt(K)==="/",oe=q!=null&&(q===L||!c&&q.startsWith(L)&&q.charAt(L.length)==="/"),J={isActive:G,isPending:oe,isTransitioning:O},Se=G?l:void 0,Ee;typeof u=="function"?Ee=u(J):Ee=[u,G?"active":null,oe?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let _e=typeof d=="function"?d(J):d;return z.createElement(an,{...k,"aria-current":Se,className:Ee,ref:_,style:_e,to:h,viewTransition:m},typeof x=="function"?x(J):x)});ux.displayName="NavLink";var cx=z.forwardRef(({discover:r="render",fetcherKey:l,navigate:o,reloadDocument:u,replace:c,state:d,method:h=dl,action:m,onSubmit:x,relative:k,preventScrollReset:_,viewTransition:E,...F},A)=>{let T=mx(),I=gx(m,{relative:k}),O=h.toLowerCase()==="get"?"get":"post",L=typeof m=="string"&&rf.test(m),b=q=>{if(x&&x(q),q.defaultPrevented)return;q.preventDefault();let K=q.nativeEvent.submitter,G=(K==null?void 0:K.getAttribute("formmethod"))||h;T(K||q.currentTarget,{fetcherKey:l,method:G,navigate:o,replace:c,state:d,relative:k,preventScrollReset:_,viewTransition:E})};return z.createElement("form",{ref:A,method:O,action:I,onSubmit:u?x:b,...F,"data-discover":!L&&r==="render"?"true":void 0})});cx.displayName="Form";function dx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function of(r){let l=z.useContext(qr);return Ve(l,dx(r)),l}function px(r,{target:l,replace:o,state:u,preventScrollReset:c,relative:d,viewTransition:h}={}){let m=vg(),x=Xn(),k=Hi(r,{relative:d});return z.useCallback(_=>{if(Bg(_,l)){_.preventDefault();let E=o!==void 0?o:$i(x)===$i(k);m(r,{replace:E,state:u,preventScrollReset:c,relative:d,viewTransition:h})}},[x,m,k,o,u,l,r,c,d,h])}var fx=0,hx=()=>`__${String(++fx)}__`;function mx(){let{router:r}=of("useSubmit"),{basename:l}=z.useContext(un),o=bg();return z.useCallback(async(u,c={})=>{let{action:d,method:h,encType:m,formData:x,body:k}=Xg(u,l);if(c.navigate===!1){let _=c.fetcherKey||hx();await r.fetch(_,o,c.action||d,{preventScrollReset:c.preventScrollReset,formData:x,body:k,formMethod:c.method||h,formEncType:c.encType||m,flushSync:c.flushSync})}else await r.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:x,body:k,formMethod:c.method||h,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,l,o])}function gx(r,{relative:l}={}){let{basename:o}=z.useContext(un),u=z.useContext(cn);Ve(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),d={...Hi(r||".",{relative:l})},h=Xn();if(r==null){d.search=h.search;let m=new URLSearchParams(d.search),x=m.getAll("index");if(x.some(_=>_==="")){m.delete("index"),x.filter(E=>E).forEach(E=>m.append("index",E));let _=m.toString();d.search=_?`?${_}`:""}}return(!r||r===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:Cn([o,d.pathname])),$i(d)}function xx(r,l={}){let o=z.useContext(Kp);Ve(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=of("useViewTransitionState"),c=Hi(r,{relative:l.relative});if(!o.isTransitioning)return!1;let d=Wn(o.currentLocation.pathname,u)||o.currentLocation.pathname,h=Wn(o.nextLocation.pathname,u)||o.nextLocation.pathname;return wl(c.pathname,h)!=null||wl(c.pathname,d)!=null}new TextEncoder;var jt=function(){return jt=Object.assign||function(l){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(l[d]=o[d])}return l},jt.apply(this,arguments)};function kl(r,l,o){if(o||arguments.length===2)for(var u=0,c=l.length,d;u<c;u++)(d||!(u in l))&&(d||(d=Array.prototype.slice.call(l,0,u)),d[u]=l[u]);return r.concat(d||Array.prototype.slice.call(l))}var Ae="-ms-",Oi="-moz-",ze="-webkit-",lf="comm",Rl="rule",cu="decl",yx="@import",af="@keyframes",vx="@layer",sf=Math.abs,du=String.fromCharCode,Ks=Object.assign;function wx(r,l){return ot(r,0)^45?(((l<<2^ot(r,0))<<2^ot(r,1))<<2^ot(r,2))<<2^ot(r,3):0}function uf(r){return r.trim()}function Sn(r,l){return(r=l.exec(r))?r[0]:r}function ge(r,l,o){return r.replace(l,o)}function fl(r,l,o){return r.indexOf(l,o)}function ot(r,l){return r.charCodeAt(l)|0}function Vr(r,l,o){return r.slice(l,o)}function on(r){return r.length}function cf(r){return r.length}function Ai(r,l){return l.push(r),r}function kx(r,l){return r.map(l).join("")}function vp(r,l){return r.filter(function(o){return!Sn(o,l)})}var bl=1,Br=1,df=0,Ut=0,Ge=0,Qr="";function Tl(r,l,o,u,c,d,h,m){return{value:r,root:l,parent:o,type:u,props:c,children:d,line:bl,column:Br,length:h,return:"",siblings:m}}function Bn(r,l){return Ks(Tl("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},l)}function Mr(r){for(;r.root;)r=Bn(r.root,{children:[r]});Ai(r,r.siblings)}function Sx(){return Ge}function Cx(){return Ge=Ut>0?ot(Qr,--Ut):0,Br--,Ge===10&&(Br=1,bl--),Ge}function Kt(){return Ge=Ut<df?ot(Qr,Ut++):0,Br++,Ge===10&&(Br=1,bl++),Ge}function cr(){return ot(Qr,Ut)}function hl(){return Ut}function Dl(r,l){return Vr(Qr,r,l)}function Gs(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ex(r){return bl=Br=1,df=on(Qr=r),Ut=0,[]}function jx(r){return Qr="",r}function Ls(r){return uf(Dl(Ut-1,Zs(r===91?r+2:r===40?r+1:r)))}function _x(r){for(;(Ge=cr())&&Ge<33;)Kt();return Gs(r)>2||Gs(Ge)>3?"":" "}function Px(r,l){for(;--l&&Kt()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return Dl(r,hl()+(l<6&&cr()==32&&Kt()==32))}function Zs(r){for(;Kt();)switch(Ge){case r:return Ut;case 34:case 39:r!==34&&r!==39&&Zs(Ge);break;case 40:r===41&&Zs(r);break;case 92:Kt();break}return Ut}function Nx(r,l){for(;Kt()&&r+Ge!==57;)if(r+Ge===84&&cr()===47)break;return"/*"+Dl(l,Ut-1)+"*"+du(r===47?r:Kt())}function Fx(r){for(;!Gs(cr());)Kt();return Dl(r,Ut)}function zx(r){return jx(ml("",null,null,null,[""],r=Ex(r),0,[0],r))}function ml(r,l,o,u,c,d,h,m,x){for(var k=0,_=0,E=h,F=0,A=0,T=0,I=1,O=1,L=1,b=0,q="",K=c,G=d,oe=u,J=q;O;)switch(T=b,b=Kt()){case 40:if(T!=108&&ot(J,E-1)==58){fl(J+=ge(Ls(b),"&","&\f"),"&\f",sf(k?m[k-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:J+=Ls(b);break;case 9:case 10:case 13:case 32:J+=_x(T);break;case 92:J+=Px(hl()-1,7);continue;case 47:switch(cr()){case 42:case 47:Ai(Rx(Nx(Kt(),hl()),l,o,x),x);break;default:J+="/"}break;case 123*I:m[k++]=on(J)*L;case 125*I:case 59:case 0:switch(b){case 0:case 125:O=0;case 59+_:L==-1&&(J=ge(J,/\f/g,"")),A>0&&on(J)-E&&Ai(A>32?kp(J+";",u,o,E-1,x):kp(ge(J," ","")+";",u,o,E-2,x),x);break;case 59:J+=";";default:if(Ai(oe=wp(J,l,o,k,_,c,m,q,K=[],G=[],E,d),d),b===123)if(_===0)ml(J,l,oe,oe,K,d,E,m,G);else switch(F===99&&ot(J,3)===110?100:F){case 100:case 108:case 109:case 115:ml(r,oe,oe,u&&Ai(wp(r,oe,oe,0,0,c,m,q,c,K=[],E,G),G),c,G,E,m,u?K:G);break;default:ml(J,oe,oe,oe,[""],G,0,m,G)}}k=_=A=0,I=L=1,q=J="",E=h;break;case 58:E=1+on(J),A=T;default:if(I<1){if(b==123)--I;else if(b==125&&I++==0&&Cx()==125)continue}switch(J+=du(b),b*I){case 38:L=_>0?1:(J+="\f",-1);break;case 44:m[k++]=(on(J)-1)*L,L=1;break;case 64:cr()===45&&(J+=Ls(Kt())),F=cr(),_=E=on(q=J+=Fx(hl())),b++;break;case 45:T===45&&on(J)==2&&(I=0)}}return d}function wp(r,l,o,u,c,d,h,m,x,k,_,E){for(var F=c-1,A=c===0?d:[""],T=cf(A),I=0,O=0,L=0;I<u;++I)for(var b=0,q=Vr(r,F+1,F=sf(O=h[I])),K=r;b<T;++b)(K=uf(O>0?A[b]+" "+q:ge(q,/&\f/g,A[b])))&&(x[L++]=K);return Tl(r,l,o,c===0?Rl:m,x,k,_,E)}function Rx(r,l,o,u){return Tl(r,l,o,lf,du(Sx()),Vr(r,2,-2),0,u)}function kp(r,l,o,u,c){return Tl(r,l,o,cu,Vr(r,0,u),Vr(r,u+1,-1),u,c)}function pf(r,l,o){switch(wx(r,l)){case 5103:return ze+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+r+r;case 4789:return Oi+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+r+Oi+r+Ae+r+r;case 5936:switch(ot(r,l+11)){case 114:return ze+r+Ae+ge(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return ze+r+Ae+ge(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return ze+r+Ae+ge(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return ze+r+Ae+r+r;case 6165:return ze+r+Ae+"flex-"+r+r;case 5187:return ze+r+ge(r,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ae+"flex-$1$2")+r;case 5443:return ze+r+Ae+"flex-item-"+ge(r,/flex-|-self/g,"")+(Sn(r,/flex-|baseline/)?"":Ae+"grid-row-"+ge(r,/flex-|-self/g,""))+r;case 4675:return ze+r+Ae+"flex-line-pack"+ge(r,/align-content|flex-|-self/g,"")+r;case 5548:return ze+r+Ae+ge(r,"shrink","negative")+r;case 5292:return ze+r+Ae+ge(r,"basis","preferred-size")+r;case 6060:return ze+"box-"+ge(r,"-grow","")+ze+r+Ae+ge(r,"grow","positive")+r;case 4554:return ze+ge(r,/([^-])(transform)/g,"$1"+ze+"$2")+r;case 6187:return ge(ge(ge(r,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),r,"")+r;case 5495:case 3959:return ge(r,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return ge(ge(r,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+r+r;case 4200:if(!Sn(r,/flex-|baseline/))return Ae+"grid-column-align"+Vr(r,l)+r;break;case 2592:case 3360:return Ae+ge(r,"template-","")+r;case 4384:case 3616:return o&&o.some(function(u,c){return l=c,Sn(u.props,/grid-\w+-end/)})?~fl(r+(o=o[l].value),"span",0)?r:Ae+ge(r,"-start","")+r+Ae+"grid-row-span:"+(~fl(o,"span",0)?Sn(o,/\d+/):+Sn(o,/\d+/)-+Sn(r,/\d+/))+";":Ae+ge(r,"-start","")+r;case 4896:case 4128:return o&&o.some(function(u){return Sn(u.props,/grid-\w+-start/)})?r:Ae+ge(ge(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ge(r,/(.+)-inline(.+)/,ze+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(r)-1-l>6)switch(ot(r,l+1)){case 109:if(ot(r,l+4)!==45)break;case 102:return ge(r,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Oi+(ot(r,l+3)==108?"$3":"$2-$3"))+r;case 115:return~fl(r,"stretch",0)?pf(ge(r,"stretch","fill-available"),l,o)+r:r}break;case 5152:case 5920:return ge(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,d,h,m,x,k){return Ae+c+":"+d+k+(h?Ae+c+"-span:"+(m?x:+x-+d)+k:"")+r});case 4949:if(ot(r,l+6)===121)return ge(r,":",":"+ze)+r;break;case 6444:switch(ot(r,ot(r,14)===45?18:11)){case 120:return ge(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(ot(r,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ae+"$2box$3")+r;case 100:return ge(r,":",":"+Ae)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(r,"scroll-","scroll-snap-")+r}return r}function Sl(r,l){for(var o="",u=0;u<r.length;u++)o+=l(r[u],u,r,l)||"";return o}function bx(r,l,o,u){switch(r.type){case vx:if(r.children.length)break;case yx:case cu:return r.return=r.return||r.value;case lf:return"";case af:return r.return=r.value+"{"+Sl(r.children,u)+"}";case Rl:if(!on(r.value=r.props.join(",")))return""}return on(o=Sl(r.children,u))?r.return=r.value+"{"+o+"}":""}function Tx(r){var l=cf(r);return function(o,u,c,d){for(var h="",m=0;m<l;m++)h+=r[m](o,u,c,d)||"";return h}}function Dx(r){return function(l){l.root||(l=l.return)&&r(l)}}function Ix(r,l,o,u){if(r.length>-1&&!r.return)switch(r.type){case cu:r.return=pf(r.value,r.length,o);return;case af:return Sl([Bn(r,{value:ge(r.value,"@","@"+ze)})],u);case Rl:if(r.length)return kx(o=r.props,function(c){switch(Sn(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(Bn(r,{props:[ge(c,/:(read-\w+)/,":"+Oi+"$1")]})),Mr(Bn(r,{props:[c]})),Ks(r,{props:vp(o,u)});break;case"::placeholder":Mr(Bn(r,{props:[ge(c,/:(plac\w+)/,":"+ze+"input-$1")]})),Mr(Bn(r,{props:[ge(c,/:(plac\w+)/,":"+Oi+"$1")]})),Mr(Bn(r,{props:[ge(c,/:(plac\w+)/,Ae+"input-$1")]})),Mr(Bn(r,{props:[c]})),Ks(r,{props:vp(o,u)});break}return""})}}var Lx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bt={},Hr=typeof process<"u"&&bt!==void 0&&(bt.REACT_APP_SC_ATTR||bt.SC_ATTR)||"data-styled",ff="active",hf="data-styled-version",Il="6.1.14",pu=`/*!sc*/
`,Cl=typeof window<"u"&&"HTMLElement"in window,Ax=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&bt.REACT_APP_SC_DISABLE_SPEEDY!==""?bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&bt!==void 0&&bt.SC_DISABLE_SPEEDY!==void 0&&bt.SC_DISABLE_SPEEDY!==""&&bt.SC_DISABLE_SPEEDY!=="false"&&bt.SC_DISABLE_SPEEDY),Ll=Object.freeze([]),Wr=Object.freeze({});function Ox(r,l,o){return o===void 0&&(o=Wr),r.theme!==o.theme&&r.theme||l||o.theme}var mf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$x=/(^-|-$)/g;function Sp(r){return r.replace(Mx,"-").replace($x,"")}var Ux=/(a)(d)/gi,sl=52,Cp=function(r){return String.fromCharCode(r+(r>25?39:97))};function Js(r){var l,o="";for(l=Math.abs(r);l>sl;l=l/sl|0)o=Cp(l%sl)+o;return(Cp(l%sl)+o).replace(Ux,"$1-$2")}var As,gf=5381,Ur=function(r,l){for(var o=l.length;o;)r=33*r^l.charCodeAt(--o);return r},xf=function(r){return Ur(gf,r)};function Vx(r){return Js(xf(r)>>>0)}function Bx(r){return r.displayName||r.name||"Component"}function Os(r){return typeof r=="string"&&!0}var yf=typeof Symbol=="function"&&Symbol.for,vf=yf?Symbol.for("react.memo"):60115,Hx=yf?Symbol.for("react.forward_ref"):60112,Wx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qx=((As={})[Hx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},As[vf]=wf,As);function Ep(r){return("type"in(l=r)&&l.type.$$typeof)===vf?wf:"$$typeof"in r?qx[r.$$typeof]:Wx;var l}var Qx=Object.defineProperty,Yx=Object.getOwnPropertyNames,jp=Object.getOwnPropertySymbols,Kx=Object.getOwnPropertyDescriptor,Gx=Object.getPrototypeOf,_p=Object.prototype;function kf(r,l,o){if(typeof l!="string"){if(_p){var u=Gx(l);u&&u!==_p&&kf(r,u,o)}var c=Yx(l);jp&&(c=c.concat(jp(l)));for(var d=Ep(r),h=Ep(l),m=0;m<c.length;++m){var x=c[m];if(!(x in Xx||o&&o[x]||h&&x in h||d&&x in d)){var k=Kx(l,x);try{Qx(r,x,k)}catch{}}}}return r}function Xr(r){return typeof r=="function"}function fu(r){return typeof r=="object"&&"styledComponentId"in r}function sr(r,l){return r&&l?"".concat(r," ").concat(l):r||l||""}function Pp(r,l){if(r.length===0)return"";for(var o=r[0],u=1;u<r.length;u++)o+=r[u];return o}function Ui(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function eu(r,l,o){if(o===void 0&&(o=!1),!o&&!Ui(r)&&!Array.isArray(r))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)r[u]=eu(r[u],l[u]);else if(Ui(l))for(var u in l)r[u]=eu(r[u],l[u]);return r}function hu(r,l){Object.defineProperty(r,"toString",{value:l})}function Wi(r){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Zx=function(){function r(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return r.prototype.indexOfGroup=function(l){for(var o=0,u=0;u<l;u++)o+=this.groupSizes[u];return o},r.prototype.insertRules=function(l,o){if(l>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,d=c;l>=d;)if((d<<=1)<0)throw Wi(16,"".concat(l));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var h=c;h<d;h++)this.groupSizes[h]=0}for(var m=this.indexOfGroup(l+1),x=(h=0,o.length);h<x;h++)this.tag.insertRule(m,o[h])&&(this.groupSizes[l]++,m++)},r.prototype.clearGroup=function(l){if(l<this.length){var o=this.groupSizes[l],u=this.indexOfGroup(l),c=u+o;this.groupSizes[l]=0;for(var d=u;d<c;d++)this.tag.deleteRule(u)}},r.prototype.getGroup=function(l){var o="";if(l>=this.length||this.groupSizes[l]===0)return o;for(var u=this.groupSizes[l],c=this.indexOfGroup(l),d=c+u,h=c;h<d;h++)o+="".concat(this.tag.getRule(h)).concat(pu);return o},r}(),gl=new Map,El=new Map,xl=1,ul=function(r){if(gl.has(r))return gl.get(r);for(;El.has(xl);)xl++;var l=xl++;return gl.set(r,l),El.set(l,r),l},Jx=function(r,l){xl=l+1,gl.set(r,l),El.set(l,r)},ey="style[".concat(Hr,"][").concat(hf,'="').concat(Il,'"]'),ty=new RegExp("^".concat(Hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ny=function(r,l,o){for(var u,c=o.split(","),d=0,h=c.length;d<h;d++)(u=c[d])&&r.registerName(l,u)},ry=function(r,l){for(var o,u=((o=l.textContent)!==null&&o!==void 0?o:"").split(pu),c=[],d=0,h=u.length;d<h;d++){var m=u[d].trim();if(m){var x=m.match(ty);if(x){var k=0|parseInt(x[1],10),_=x[2];k!==0&&(Jx(_,k),ny(r,_,x[3]),r.getTag().insertRules(k,c)),c.length=0}else c.push(m)}}},Np=function(r){for(var l=document.querySelectorAll(ey),o=0,u=l.length;o<u;o++){var c=l[o];c&&c.getAttribute(Hr)!==ff&&(ry(r,c),c.parentNode&&c.parentNode.removeChild(c))}};function iy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sf=function(r){var l=document.head,o=r||l,u=document.createElement("style"),c=function(m){var x=Array.from(m.querySelectorAll("style[".concat(Hr,"]")));return x[x.length-1]}(o),d=c!==void 0?c.nextSibling:null;u.setAttribute(Hr,ff),u.setAttribute(hf,Il);var h=iy();return h&&u.setAttribute("nonce",h),o.insertBefore(u,d),u},oy=function(){function r(l){this.element=Sf(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,d=u.length;c<d;c++){var h=u[c];if(h.ownerNode===o)return h}throw Wi(17)}(this.element),this.length=0}return r.prototype.insertRule=function(l,o){try{return this.sheet.insertRule(o,l),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},r.prototype.getRule=function(l){var o=this.sheet.cssRules[l];return o&&o.cssText?o.cssText:""},r}(),ly=function(){function r(l){this.element=Sf(l),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(l,o){if(l<=this.length&&l>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},r.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},r}(),ay=function(){function r(l){this.rules=[],this.length=0}return r.prototype.insertRule=function(l,o){return l<=this.length&&(this.rules.splice(l,0,o),this.length++,!0)},r.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},r.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},r}(),Fp=Cl,sy={isServer:!Cl,useCSSOMInjection:!Ax},Cf=function(){function r(l,o,u){l===void 0&&(l=Wr),o===void 0&&(o={});var c=this;this.options=jt(jt({},sy),l),this.gs=o,this.names=new Map(u),this.server=!!l.isServer,!this.server&&Cl&&Fp&&(Fp=!1,Np(this)),hu(this,function(){return function(d){for(var h=d.getTag(),m=h.length,x="",k=function(E){var F=function(L){return El.get(L)}(E);if(F===void 0)return"continue";var A=d.names.get(F),T=h.getGroup(E);if(A===void 0||!A.size||T.length===0)return"continue";var I="".concat(Hr,".g").concat(E,'[id="').concat(F,'"]'),O="";A!==void 0&&A.forEach(function(L){L.length>0&&(O+="".concat(L,","))}),x+="".concat(T).concat(I,'{content:"').concat(O,'"}').concat(pu)},_=0;_<m;_++)k(_);return x}(c)})}return r.registerId=function(l){return ul(l)},r.prototype.rehydrate=function(){!this.server&&Cl&&Np(this)},r.prototype.reconstructWithOptions=function(l,o){return o===void 0&&(o=!0),new r(jt(jt({},this.options),l),this.gs,o&&this.names||void 0)},r.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(l=function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new ay(c):u?new oy(c):new ly(c)}(this.options),new Zx(l)));var l},r.prototype.hasNameForId=function(l,o){return this.names.has(l)&&this.names.get(l).has(o)},r.prototype.registerName=function(l,o){if(ul(l),this.names.has(l))this.names.get(l).add(o);else{var u=new Set;u.add(o),this.names.set(l,u)}},r.prototype.insertRules=function(l,o,u){this.registerName(l,o),this.getTag().insertRules(ul(l),u)},r.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},r.prototype.clearRules=function(l){this.getTag().clearGroup(ul(l)),this.clearNames(l)},r.prototype.clearTag=function(){this.tag=void 0},r}(),uy=/&/g,cy=/^\s*\/\/.*$/gm;function Ef(r,l){return r.map(function(o){return o.type==="rule"&&(o.value="".concat(l," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(l," ")),o.props=o.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Ef(o.children,l)),o})}function dy(r){var l,o,u,c=Wr,d=c.options,h=d===void 0?Wr:d,m=c.plugins,x=m===void 0?Ll:m,k=function(F,A,T){return T.startsWith(o)&&T.endsWith(o)&&T.replaceAll(o,"").length>0?".".concat(l):F},_=x.slice();_.push(function(F){F.type===Rl&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(uy,o).replace(u,k))}),h.prefix&&_.push(Ix),_.push(bx);var E=function(F,A,T,I){A===void 0&&(A=""),T===void 0&&(T=""),I===void 0&&(I="&"),l=I,o=A,u=new RegExp("\\".concat(o,"\\b"),"g");var O=F.replace(cy,""),L=zx(T||A?"".concat(T," ").concat(A," { ").concat(O," }"):O);h.namespace&&(L=Ef(L,h.namespace));var b=[];return Sl(L,Tx(_.concat(Dx(function(q){return b.push(q)})))),b};return E.hash=x.length?x.reduce(function(F,A){return A.name||Wi(15),Ur(F,A.name)},gf).toString():"",E}var py=new Cf,tu=dy(),jf=ut.createContext({shouldForwardProp:void 0,styleSheet:py,stylis:tu});jf.Consumer;ut.createContext(void 0);function zp(){return z.useContext(jf)}var fy=function(){function r(l,o){var u=this;this.inject=function(c,d){d===void 0&&(d=tu);var h=u.name+d.hash;c.hasNameForId(u.id,h)||c.insertRules(u.id,h,d(u.rules,h,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=o,hu(this,function(){throw Wi(12,String(u.name))})}return r.prototype.getName=function(l){return l===void 0&&(l=tu),this.name+l.hash},r}(),hy=function(r){return r>="A"&&r<="Z"};function Rp(r){for(var l="",o=0;o<r.length;o++){var u=r[o];if(o===1&&u==="-"&&r[0]==="-")return r;hy(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var _f=function(r){return r==null||r===!1||r===""},Pf=function(r){var l,o,u=[];for(var c in r){var d=r[c];r.hasOwnProperty(c)&&!_f(d)&&(Array.isArray(d)&&d.isCss||Xr(d)?u.push("".concat(Rp(c),":"),d,";"):Ui(d)?u.push.apply(u,kl(kl(["".concat(c," {")],Pf(d),!1),["}"],!1)):u.push("".concat(Rp(c),": ").concat((l=c,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||l in Lx||l.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function dr(r,l,o,u){if(_f(r))return[];if(fu(r))return[".".concat(r.styledComponentId)];if(Xr(r)){if(!Xr(d=r)||d.prototype&&d.prototype.isReactComponent||!l)return[r];var c=r(l);return dr(c,l,o,u)}var d;return r instanceof fy?o?(r.inject(o,u),[r.getName(u)]):[r]:Ui(r)?Pf(r):Array.isArray(r)?Array.prototype.concat.apply(Ll,r.map(function(h){return dr(h,l,o,u)})):[r.toString()]}function my(r){for(var l=0;l<r.length;l+=1){var o=r[l];if(Xr(o)&&!fu(o))return!1}return!0}var gy=xf(Il),xy=function(){function r(l,o,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&my(l),this.componentId=o,this.baseHash=Ur(gy,o),this.baseStyle=u,Cf.registerId(o)}return r.prototype.generateAndInjectStyles=function(l,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=sr(c,this.staticRulesId);else{var d=Pp(dr(this.rules,l,o,u)),h=Js(Ur(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,h)){var m=u(d,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,m)}c=sr(c,h),this.staticRulesId=h}else{for(var x=Ur(this.baseHash,u.hash),k="",_=0;_<this.rules.length;_++){var E=this.rules[_];if(typeof E=="string")k+=E;else if(E){var F=Pp(dr(E,l,o,u));x=Ur(x,F+_),k+=F}}if(k){var A=Js(x>>>0);o.hasNameForId(this.componentId,A)||o.insertRules(this.componentId,A,u(k,".".concat(A),void 0,this.componentId)),c=sr(c,A)}}return c},r}(),Nf=ut.createContext(void 0);Nf.Consumer;var Ms={};function yy(r,l,o){var u=fu(r),c=r,d=!Os(r),h=l.attrs,m=h===void 0?Ll:h,x=l.componentId,k=x===void 0?function(K,G){var oe=typeof K!="string"?"sc":Sp(K);Ms[oe]=(Ms[oe]||0)+1;var J="".concat(oe,"-").concat(Vx(Il+oe+Ms[oe]));return G?"".concat(G,"-").concat(J):J}(l.displayName,l.parentComponentId):x,_=l.displayName,E=_===void 0?function(K){return Os(K)?"styled.".concat(K):"Styled(".concat(Bx(K),")")}(r):_,F=l.displayName&&l.componentId?"".concat(Sp(l.displayName),"-").concat(l.componentId):l.componentId||k,A=u&&c.attrs?c.attrs.concat(m).filter(Boolean):m,T=l.shouldForwardProp;if(u&&c.shouldForwardProp){var I=c.shouldForwardProp;if(l.shouldForwardProp){var O=l.shouldForwardProp;T=function(K,G){return I(K,G)&&O(K,G)}}else T=I}var L=new xy(o,F,u?c.componentStyle:void 0);function b(K,G){return function(oe,J,Se){var Ee=oe.attrs,_e=oe.componentStyle,lt=oe.defaultProps,ue=oe.foldedComponentIds,de=oe.styledComponentId,Pe=oe.target,Re=ut.useContext(Nf),Te=zp(),xe=oe.shouldForwardProp||Te.shouldForwardProp,H=Ox(J,Re,lt)||Wr,ee=function(ye,he,je){for(var ve,Ce=jt(jt({},he),{className:void 0,theme:je}),Ze=0;Ze<ye.length;Ze+=1){var Tt=Xr(ve=ye[Ze])?ve(Ce):ve;for(var _t in Tt)Ce[_t]=_t==="className"?sr(Ce[_t],Tt[_t]):_t==="style"?jt(jt({},Ce[_t]),Tt[_t]):Tt[_t]}return he.className&&(Ce.className=sr(Ce.className,he.className)),Ce}(Ee,J,H),Q=ee.as||Pe,S={};for(var D in ee)ee[D]===void 0||D[0]==="$"||D==="as"||D==="theme"&&ee.theme===H||(D==="forwardedAs"?S.as=ee.forwardedAs:xe&&!xe(D,Q)||(S[D]=ee[D]));var pe=function(ye,he){var je=zp(),ve=ye.generateAndInjectStyles(he,je.styleSheet,je.stylis);return ve}(_e,ee),fe=sr(ue,de);return pe&&(fe+=" "+pe),ee.className&&(fe+=" "+ee.className),S[Os(Q)&&!mf.has(Q)?"class":"className"]=fe,Se&&(S.ref=Se),z.createElement(Q,S)}(q,K,G)}b.displayName=E;var q=ut.forwardRef(b);return q.attrs=A,q.componentStyle=L,q.displayName=E,q.shouldForwardProp=T,q.foldedComponentIds=u?sr(c.foldedComponentIds,c.styledComponentId):"",q.styledComponentId=F,q.target=u?c.target:r,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=u?function(G){for(var oe=[],J=1;J<arguments.length;J++)oe[J-1]=arguments[J];for(var Se=0,Ee=oe;Se<Ee.length;Se++)eu(G,Ee[Se],!0);return G}({},c.defaultProps,K):K}}),hu(q,function(){return".".concat(q.styledComponentId)}),d&&kf(q,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function bp(r,l){for(var o=[r[0]],u=0,c=l.length;u<c;u+=1)o.push(l[u],r[u+1]);return o}var Tp=function(r){return Object.assign(r,{isCss:!0})};function vy(r){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];if(Xr(r)||Ui(r))return Tp(dr(bp(Ll,kl([r],l,!0))));var u=r;return l.length===0&&u.length===1&&typeof u[0]=="string"?dr(u):Tp(dr(bp(u,l)))}function nu(r,l,o){if(o===void 0&&(o=Wr),!l)throw Wi(1,l);var u=function(c){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return r(l,o,vy.apply(void 0,kl([c],d,!1)))};return u.attrs=function(c){return nu(r,l,jt(jt({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return nu(r,l,jt(jt({},o),c))},u}var Ff=function(r){return nu(yy,r)},ke=Ff;mf.forEach(function(r){ke[r]=Ff(r)});function wy(){return f.jsx(f.Fragment,{children:f.jsxs(ky,{children:[f.jsxs(zf,{children:[f.jsx(Cy,{src:"./assets/home/desktop/image-speaker-zx9.png"}),f.jsxs(Sy,{children:[f.jsx("p",{className:"product-name",children:"ZX9 SPEAKER"}),f.jsx("p",{children:"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}),f.jsx($s,{className:"prodBtn",children:"SEE PRODUCT"})]})]}),f.jsxs(Ey,{children:[f.jsx("p",{className:"product-name",children:"ZX7 SPEAKER"}),f.jsx($s,{className:"prodBtn",children:"SEE PRODUCT"})]}),f.jsxs(jy,{children:[f.jsx("div",{className:"prod-img"}),f.jsxs("div",{className:"prod-des",children:[f.jsx("p",{children:"YX1 EARPHONES"}),f.jsx($s,{className:"prodBtn",children:"SEE PRODUCT"})]})]})]})})}const ky=ke.div`
    width: 1110px;
    height: auto;
    margin: auto;
    margin-top: 120px;
    display: flex;
    flex-direction: column;

@media (max-width: 1440px){
    width:689px;
    margin-top: 96px;
}

@media (max-width: 768px){
    width:327px;
}
`,zf=ke.div`
    width: 100%;
    height: 560px;
    background-color: #D87D4A;
    background-image: url("./assets/home/desktop/pattern-circles.svg");
    background-repeat: no-repeat;
    background-position-x: -130px;
    display: flex;
    overflow: hidden;
    gap: 150px;
    padding-left: 175px;
    border-radius: 8px;
    color: #FFFFFF;

    .prodBtn{
       background-color: #000;
       border: 2px solid #000;
    }

    .prodBtn:hover{
        background-color: #4c4c4c;
        border: 2px solid #4c4c4c;
    }
    
    button{
        color: #FFF;
    }

    @media (max-width: 1440px){
        height: 720px;
        background-position-y: -290px;  
        display: flex;
        flex-direction: column;
        gap: 0px;
        text-align: center;
        color: #FFFFFF;
        padding: 0px;
    }

    @media (max-width: 768px){
        background-position-x: center;
        background-position-y: -116px;
        background-size: 173% 85%;
    }
`,Sy=ke.div`
    width: 349px;
    height: 303px;
    margin-top: 140px;

    p{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;   
        line-height: 25px;
        text-align: left;
        margin: 20px auto;
    }

    .product-name{
        font-family: Manrope;
        font-size: 56px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 2px;
        text-align: left;
    }

    @media (max-width: 1440px){
        width: 349px;
        height: 303px;
        margin: auto;
        margin-top: 64px;
    }
    
    p{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        margin: 0px;
    }

    .product-name{
        font-family: Manrope;
        font-size: 56px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 2px;
        text-align: center;
        margin: 0px 0px 24px;
    }

    @media (max-width: 768px){
        

        .product-name{
            width: 280px;
            padding: 0px 24px;
            margin: 32px auto 24px;
            font-family: Manrope;
            font-size: 36px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 1.2857142686843872px;
            text-align: center;
        }
    }
`,Cy=ke.img`
    width: 350px;
    height: 417px;
    display: block;
    margin: 160px 0px 0px 0px;

    @media (max-width: 1440px){
        width: 197.21px;
        height: 237px;
        margin: 52px auto 0px;
    }

    @media (max-width: 768px){
        width: 172.25px;
        height: 207px;
        margin: 55px auto 0px;

    }
`,$s=ke.button`
    width: 160px;
    height: 48px;
    background-color: #000;
    font-size: 13px;
    font-weight: 700;
    line-height: 17.76px;
    letter-spacing: 1px;
    margin-top: 40px;
    border-radius: 0px;

    @media (max-width: 1440px){
        text-align: center;
        margin-top: 40px;
    }
`,Ey=ke(zf)`
    width: 1110px;
    height: 320px;
    background-color: #FFF;
    background-image: url("./assets/home/desktop/image-speaker-zx7.jpg");
    background-size: cover;
    background-position-x: 0px;
    margin-top: 40px;
    flex-direction: row;
    position: relative;
    
    
    .product-name{
        margin-top: 120px;
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 38.25px;
        letter-spacing: 2px;
        text-align: left;
        color: #000;
        margin-left: -40px;
    }

    button{
        position: absolute;
        top:160px;
        left: 135px;
        text-align: center;
    }

    button:hover{
        background-color: #000;
    }

    .prodBtn{
       background-color: transparent;
       color: #000;
    }

    .prodBtn:hover{
        background-color: #000;
        color: #FFF;
    }

    @media (max-width: 1440px){
        width: 689px;
        height: 320px;
        background-image: url("./assets/home/tablet/image-speaker-zx7.jpg");
        background-position-y: 0px;
    
        .product-name{
            margin: 101px 0px 0px 62px;
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }

        button{
            margin: 0px;
            top:171px;
            left: 62.5px;
        }

        @media (max-width: 768px){
            width: 327px;
            height: 320px;
            background-image: url("./assets/home/mobile/image-speaker-zx7.jpg");
            
            
            .product-name{
            margin: 101px 0px 0px 24px;
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }

        button{
            margin: 0px;
            top:171px;
            left: 24px;
        }

        } 
    }
`,jy=ke.div`
    width: 1110px;
    height: 320px;
    display: flex;
    gap: 40px;
    color: #000;
    margin-top: 40px;


    .prod-img{
        width: 540px;
        height: 320px;
        background-image: url("./assets/home/desktop/image-earphones-yx1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
    }

    .prod-des{
        width: 540px;
        height: 320px;
        background-color: #F1F1F1;
        border-radius: 8px;
        padding: 100px 90px;
    }

    .prod-des > p{
        font-family: Manrope;
        font-size: 28px;
        font-weight: 700;
        line-height: 38.25px;
        letter-spacing: 2px;
    }

    button {
        color: #000;
    }

    button:hover{
        background-color: #000;
        color: #FFFFFF;
    }

    .prodBtn{
       background-color: transparent;
       border: 2px solid #000;
    }

    .prodBtn:hover{
        background-color: #000;
        color: #FFF;
    }
    @media (max-width: 1440px){
        width: 689px;
        height: 320px;
        gap: 11px;

        .prod-img{
            width: 339px;
            height: 320px;
            background-image: url("./assets/home/tablet/image-earphones-yx1.jpg");
            background-size: contain;
        }

        .prod-des{
            width: 339px;
            height: 320px;
            background-color: #F1F1F1;
            border-radius: 8px;
            padding: 101px 41px;
        }

        .prod-des > p{
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }  
    } 

    @media (max-width: 768px){
        width: 327px;
        height: 424px;
        flex-direction: column;
        gap: 24px;

        .prod-img{
            width: 327px;
            height: 200px;
            background-image: url("./assets/home/mobile/image-earphones-yx1.jpg");
            background-size: cover;
        }

        .prod-des{
            width: 327px;
            height: 200px;
            background-color: #F1F1F1;
            border-radius: 8px;
            padding: 41px 24px;
        }

        .prod-des > p{
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }   
}
`,Rf=z.createContext(void 0);function xt(){const r=z.useContext(Rf);if(r===void 0)throw new Error("WTF data is undefined");return r}function _y(){const r=xt(),[l,o]=z.useState(!1);return l?document.body.style.overflow="hidden":document.body.style.overflow="auto",f.jsx(f.Fragment,{children:f.jsxs(Py,{selected:r.selected,children:[f.jsxs("div",{children:[f.jsx("svg",{width:"16",height:"15",xmlns:"http://www.w3.org/2000/svg",className:"burger",onClick:()=>o(u=>!u),children:f.jsx("g",{fill:"#FFF","fill-rule":"evenodd",children:f.jsx("path",{d:"M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"})})}),f.jsx("svg",{width:"143",height:"25",xmlns:"http://www.w3.org/2000/svg",className:"logo",children:f.jsx("path",{d:"M7.363 20.385c1.63 0 3.087-.537 4.237-1.47l.414.994h3.739V5.853h-3.605l-.495 1.087c-1.16-.958-2.637-1.51-4.29-1.51C3.069 5.43 0 8.527 0 12.88c0 4.37 3.07 7.505 7.363 7.505zm.646-4.287c-1.811 0-3.143-1.37-3.143-3.206 0-1.824 1.32-3.195 3.143-3.195 1.812 0 3.144 1.37 3.144 3.195 0 1.836-1.332 3.206-3.144 3.206zm17.535 4.287c4.148 0 6.91-2.562 6.91-6.495V5.868h-4.836v7.811c0 1.47-.782 2.357-2.074 2.357-1.292 0-2.09-.873-2.09-2.357V5.868h-4.836v8.022c0 3.933 2.778 6.495 6.926 6.495zm16.328.015c1.636 0 3.093-.557 4.235-1.52l.456 1.044h3.58V.792H45.36v5.591a6.551 6.551 0 00-3.489-.976c-4.309 0-7.378 3.12-7.378 7.489 0 4.368 3.07 7.504 7.378 7.504zm.647-4.287c-1.812 0-3.143-1.381-3.143-3.217 0-1.835 1.331-3.216 3.143-3.216 1.812 0 3.143 1.38 3.143 3.216 0 1.836-1.331 3.217-3.143 3.217zM57.976 4.109V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm10.097.46c4.563 0 7.872-3.146 7.872-7.488 0-4.357-3.31-7.489-7.872-7.489-4.579 0-7.873 3.132-7.873 7.489 0 4.342 3.294 7.489 7.873 7.489zm0-4.348c-1.764 0-3.029-1.281-3.029-3.14 0-1.858 1.265-3.139 3.029-3.139 1.763 0 3.028 1.292 3.028 3.14 0 1.858-1.265 3.139-3.028 3.139zM82.998 25v-5.534a6.56 6.56 0 003.423.934c4.293 0 7.362-3.125 7.362-7.504 0-4.38-3.069-7.489-7.362-7.489-1.669 0-3.155.578-4.31 1.578l-.605-1.117h-3.29V25h4.782zm2.776-8.887c-1.812 0-3.143-1.37-3.143-3.217s1.331-3.217 3.143-3.217c1.811 0 3.143 1.37 3.143 3.217 0 1.846-1.343 3.217-3.143 3.217zm15.065 3.811v-7.506c0-1.804.912-2.843 2.376-2.843 1.262 0 1.83.826 1.83 2.447v7.902h4.837V11.46c0-3.644-2.071-6.008-5.295-6.008-1.4 0-2.714.507-3.748 1.34v-6h-4.837v19.132h4.837zM117.574 4.11V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm7.878 0V.792h-4.836v19.132h4.836zm9.851.461c3.523 0 6.364-2.004 7.352-5.212h-4.813c-.465.823-1.409 1.318-2.539 1.318-1.527 0-2.55-.834-2.866-2.446H142.9c.063-.435.1-.858.1-1.282 0-4.123-3.134-7.356-7.66-7.356-4.407 0-7.626 3.17-7.626 7.478 0 4.295 3.245 7.5 7.626 7.5zm2.896-9.021h-5.677c.391-1.396 1.372-2.163 2.781-2.163 1.46 0 2.471.758 2.896 2.163z",fill:"#FFF","fill-rule":"nonzero"})})]}),f.jsxs("ul",{children:[f.jsx("li",{onClick:()=>{r.setProductSelected(!1),r.setCart(!1),r.setCheckOut(!1)},children:f.jsx(an,{to:"/",children:"HOME"})}),f.jsx("li",{onClick:()=>{r.setProductSelected(!1),r.setCart(!1),r.setCheckOut(!1)},children:f.jsx(an,{to:"/headphones",children:"HEADPHONES"})}),f.jsx("li",{onClick:()=>{r.setProductSelected(!1),r.setCart(!1),r.setCheckOut(!1)},children:f.jsx(an,{to:"/speakers",children:"SPEAKERS"})}),f.jsx("li",{onClick:()=>{r.setProductSelected(!1),r.setCart(!1),r.setCheckOut(!1)},children:f.jsx(an,{to:"/earphones",children:"EARPHONES"})})]}),f.jsx("div",{onClick:()=>r.checkOut?null:r.setCart(u=>!u),style:{cursor:"pointer"},children:f.jsx("svg",{width:"23",height:"20",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z",fill:"#FFF","fill-rule":"nonzero"})})})]})})}const Py=ke.div`
    width: 1110px;
    height: 90px;
    border-bottom: ${r=>r.selected?"0px":"1px solid rgba(255,255,255,0.5)"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
    
    div {
        display: flex;
        align-items: center;
        gap: 42px;
    }
    ul{
        width: 45%;
        list-style: none;
        color: #FFF;
        display: flex;
        justify-content: space-around;
        font-size: 13px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 2px;
        text-align: left;

    }

    ul  a {
        cursor: pointer;
        color: #FFF;
    }   

    ul  a:hover {
        color: #D87D4A;
    }

    .burger{
        display: none;
    }
    @media (max-width: 1440px){
        width: 689px;
       
        ul{
            display: none;
        }

        .burger {
            display: inline-block;
        }
    }

    @media (max-width: 768px){
        width: 375px;
        border: 0px;
        padding: 0px 24px;
        

        .logo{
            margin-left: 34px;
        }
    }
`;function Xi(){const[r,l]=z.useState({width:window.innerWidth,height:window.innerHeight});return z.useEffect(()=>{const o=()=>{l({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),r}function Ny(){const r=xt(),l=Xi(),{pathname:o}=Xn();return f.jsxs(Fy,{pathname:o,selected:r.selected,checkout:r.checkOut,screen:l.width,id:"header",children:[f.jsx(_y,{}),o==="/"?f.jsxs(zy,{children:[f.jsx("h4",{children:"NEW PRODUCT"}),f.jsx("p",{className:"productName",children:"XX99 MARK ll HEADPHONES"}),f.jsx("p",{children:"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."}),f.jsx(pr,{className:"newProductButton",children:"SEE PRODUCT"})]}):null,o==="/headphones"?f.jsx("h1",{children:"HEADPHONES"}):null,o==="/speakers"?f.jsx("h1",{children:"SPEAKERS"}):null,o==="/earphones"?f.jsx("h1",{children:"EARPHONES"}):null]})}const Fy=ke.header`
  width: 1440px;
  height: ${r=>r.pathname==="/"?"729px":"336px"};
  border-radius: 5px;
  margin: auto;
  background: ${r=>r.pathname==="/"?"url('./assets/home/desktop/image-header.jpg') no-repeat center / cover":"#101010"};

  h1{
    text-align: center;
    margin-top: 120px;
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.4285714626312256px;
    text-align: center;
    color: #FFFFFF;
  }

  @media (max-width: 1440px){
    width: 729px;
    background: ${r=>r.pathname==="/"?"url('./assets/home/tablet/image-header.jpg') no-repeat center / cover":"#101010"};
  }


  @media (max-width: 768px){
    width: 375px;
    background: ${r=>r.pathname==="/"?"url('./assets/home/mobile/image-header.jpg') no-repeat center / cover":"#101010"};
  }
`,zy=ke.div`
  width: 398px;
  height: 346px;
  margin-left: 165px;
  padding-top: 20px;
  
  h4{
    font-weight: 100;
    margin: 30px 0px;
    letter-spacing: 10px;
    color: rgba(255,255,255,0.5);
  }

  p{
    font-size: 17px;
    font-weight: 100;
    line-height: 25px;
    text-align: left;
    margin: 30px 0px;
    color: #ffffff;
  }

  .productName{
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-align: left;
    color: #ffffff
  }
  
  .newProductButton {
    margin-left: 0px;
    border : none;
  }

  @media (max-width: 1440px){
    width: 398px;
    height: 346px;
    margin: 126px auto;
    padding-top: 0px;
    
    .productName {
      width: 100%;
      font-family: Manrope;
      font-size: 56px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
      text-align: left;
    }
    
    h4{
      font-family: Manrope;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.12px;
      letter-spacing: 10px;
      text-align: center;
    }
    
    p {
      width: 349px;
      margin: auto;
      margin-top: 24px;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
  
    .newProductButton {
      margin-left: 109px;
    }

    @media (max-width: 768px){
      width: 375px;
      height: 290px;
      margin-top: 108px;
      .productName {
      width: 100%;
      font-family: Manrope;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 1.2857142686843872px;
      text-align: center;

    }
    
    h4{
      font-family: Manrope;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.12px;
      letter-spacing: 10px;
      text-align: center;

    }
    
    p {
      width: 300px;
      margin: auto;
      margin-top: 24px;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;

    }
  
    .newProductButton {
      margin-left: 107px;
    }
    }
  }
    `,pr=ke.button`
  width: 160px;
  height: 48px;
  background-color: #D87D4A;
  color: #FFF;
  cursor: pointer;
  border: none;
  font-size: 13px;
  margin-left: 109px;

  &:hover{
    background-color: #FBAF85;
  }

  @media (max-width: 1440px){
    margin-top: 40px;
  }
`;function Ry(){var d;const r=xt(),l=r.cartContent===null?null:r.cartContent.map(h=>h.device.price*h.quantity).reduce((h,m)=>h+m),[o,u]=z.useState(!1),c=()=>{r.setProductSelected(!1),r.setCart(!1),r.setCheckOut(!0)};return f.jsx(f.Fragment,{children:f.jsx(Ty,{onClick:()=>o?null:r.setCart(!1),productSelected:r.selected,children:f.jsxs(Dy,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[f.jsxs("p",{className:"cart",children:[f.jsxs("span",{children:["CART (",r.cartContent===null?0:(d=r.cartContent)==null?void 0:d.length,")"]})," ",f.jsx("span",{className:"removeBtn",onClick:()=>r.setCartContent(()=>null),children:"Remove All"})]}),f.jsx(Ly,{children:r.cartContent!==null?r.cartContent.map(h=>f.jsxs(Iy,{className:"wrapper",children:[f.jsx("img",{src:h.device.image.desktop,alt:"",className:"product-icon"}),f.jsxs("div",{className:"container",children:[f.jsxs("p",{className:"name-container",children:[h.device.name," "]}),f.jsxs("p",{children:["$ ",h.device.price," "]})]}),f.jsx(by,{value:h})]})):null}),f.jsxs("p",{className:"total",children:[f.jsx("span",{children:"TOTAL"})," ",f.jsxs("span",{className:"amount",children:["$ ",l]})]}),f.jsx(an,{to:"/checkout",onClick:c,children:f.jsx(pr,{className:"toCheckout",children:"CHECKOUT"})})]})})})}function by({value:r}){const l=xt();return l.cart?(document.body.style.overflow="hidden",document.body.style.width="auto"):document.body.style.overflow="auto",l.checkOut?document.body.style.backgroundColor="#F1F1F1":document.body.style.backgroundColor="#FFFFFF",f.jsxs("div",{style:{position:"relative"},children:[f.jsx(jl,{style:{position:"absolute",left:"-10px",top:"-7px"},onClick:()=>r.quantity>0&&l.setCartContent(o=>o===null?null:o.map(u=>u.device.id===r.device.id?{...u,quantity:u.quantity-1}:u)),children:"-"}),f.jsx(bf,{type:"text",value:r.quantity}),f.jsx(jl,{style:{position:"absolute",right:"0px",top:"-7px"},onClick:()=>r.quantity<100&&l.setCartContent(o=>o===null?null:o.map(u=>u.device.id===r.device.id?{...u,quantity:u.quantity+1}:u)),children:"+"})]})}const Ty=ke.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    height: 100%;
    width: 1440px;
    position: absolute;
    left: calc((100vw - 1440px)/2);
    z-index: 20;

    @media (max-width: 1440px){
        width: 729px;
        left: calc((100vw - 729px)/2);
    }

    @media (max-width: 768px){
        width: 375px;
        height: 1414px;
        left: calc((100vw - 375px)/2);
}
`,Dy=ke.div`
    width: 377px;
    height: 488px;
    background-color: #FFF;
    border-radius: 5px;
    position: absolute;
    top: 32px;
    right: 165px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.59px;
    letter-spacing: 1.2857142686843872px;
    text-align: left;
    padding: 20px;
    z-index: 30;


    span{
        display: block;
    }

    .cart {
        display: flex;
        justify-content: space-between;
    }

    .total{
        width:80%; 
        position: absolute;
        bottom: 103px;
        left: 30px;    
        font-weight: 400;
        display: flex;
        justify-content: space-between;
    }

    .total > span {
        display: block;
    }
    .amount{
        font-weight: 800;
        color: #000;
    }

    .toCheckout{
        width: 85%;
        position: absolute;
        bottom: 11px;
        left: 7.5%;
        margin: 0px;
    }

    .removeBtn:hover{
        color: #D87D4A;
        cursor: pointer;
    }

    @media (max-width: 1440px){
        top: 24px;
        right: 40px;
    }

    @media (max-width: 768px){
        width: 327px;
        height: 488px;
        left: 24px;
        font-family: Manrope;
        font-size: 15px;
        font-weight: 700;
        line-height: 25px;
        text-align: left;

    }
`,Iy=ke.div`
    width: 313px;
    height: 64px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    padding: 0px 30px 0px 0px;

    .name-container{
        width: 150px;
    }

    .product-icon{
        width: 64px;
        height: 64px;
    }

    @media (max-width: 768px){
        width: 271px;
        
        .name-container{
            width: 107px;
        }
    }
`,jl=ke.button`
    width: 16px;
    height: 18px;
    text-align: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color:#000;
`,bf=ke.input`
    width: 96px;
    height: 32px;
    text-align: center;
    border: none;
    background-color: #f1f1f1;
    color: #000;
`,Ly=ke.div`
    width: 350px;
    height: 70%;
    overflow-y: scroll;
    scrollbar-width: thin;
    

    &::-webkit-scrollbar{
        width: 5px;
        background-color: #f1f1f1;
    }
    &::-webkit-scrollbar-track{
        width: 5px;
        background-color: #f1f1f1;
        border-radius: 3px;
        
    }
    
    &::-webkit-scrollbar-thumb{
        /* background-color: #8b8a8a; */
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-button{
        display: none;
    }

    @media (max-width: 768px){
        width: 271px;
        overflow: visible;
    }
`;function mu({id:r}){const l=xt(),o=l.devices.find(m=>m.id===r),[u,c]=z.useState(1),d=Xi();function h(m,x){var k;(k=l.cartContent)!=null&&k.some(_=>_.device===m)?l.setCartContent(_=>_!==null?_.map(E=>E.device===m?{...E,quantity:E.quantity+x}:E):null):l.setCartContent(_=>_===null?null:[..._,{device:m,quantity:x}])}if(o!==void 0)return f.jsxs(f.Fragment,{children:[f.jsx(Ay,{children:f.jsx("span",{onClick:()=>l.setProductSelected(!1),children:"Go back"})}),f.jsxs(Oy,{bgImage:o.image.desktop,children:[f.jsx("div",{className:"productimage"}),f.jsxs("div",{className:"desc-container",children:[f.jsx("p",{className:"name",children:o.name}),f.jsx("p",{className:"desc",children:o.description}),f.jsxs("p",{className:"price",children:["$ ",o.price]}),f.jsxs("div",{className:"addProduct",children:[f.jsx(jl,{onClick:()=>c(m=>Number(m)>1?Number(m)-1:Number(m)),children:"-"}),f.jsx(bf,{type:"text",value:u}),f.jsx(jl,{onClick:()=>c(m=>Number(m)<100?Number(m)+1:Number(m)),children:"+"}),f.jsx(pr,{className:"addBtn",onClick:()=>h(o,u),children:"ADD TO CART"})]})]})]}),f.jsxs(Vy,{children:[f.jsxs("div",{children:[f.jsx("p",{className:"features",children:"FEATURES"}),f.jsx("p",{className:"feature-desc",children:o.features})]}),f.jsx("div",{}),f.jsxs("div",{className:"inTheBox",children:[f.jsx("p",{className:"inbox",children:"IN THE BOX"}),f.jsx("div",{children:o.includes.map(m=>f.jsxs("p",{className:"included",children:[f.jsxs("span",{style:{color:"#D87D4A",fontWeight:"600"},children:[`${m.quantity}`,"x"]})," ",f.jsx("span",{children:m.item})]}))})]})]}),f.jsxs(Uy,{children:[f.jsxs("div",{className:"small-container",children:[f.jsx("img",{src:o.gallery.first.desktop,alt:"",className:"small"}),f.jsx("img",{src:o.gallery.second.desktop,alt:"",className:"small"})]}),f.jsx("div",{className:"big-container",children:f.jsx("img",{src:o.gallery.third.desktop,alt:"",className:"big"})})]}),f.jsx(My,{children:o.others.map(m=>f.jsxs($y,{children:[f.jsx("img",{src:d.width>1440?m.image.desktop:d.width>768?m.image.tablet:m.image.mobile,alt:m.name}),f.jsx("h3",{children:m.name.toUpperCase()}),f.jsx(pr,{className:"otherBtn",children:"SEE PRODUCT"})]}))})]})}const Ay=ke.div`
    width: 768px;
    color: rgba(0,0,0,0.5);
    margin: auto;
    margin-top:79px;
    cursor: pointer;
    padding-left: 40px;

    @media (max-width: 1440px){
        margin-top:33px;
    }
`,Oy=ke.div`
    width: 1110px;
    height: 560px;
    display: flex;
    color: #000;
    margin: auto;
    margin-top: 40px;
    gap: 120px;

    .productimage{
        width: 540px;
        height:560px;
        background-image: url(${r=>r.bgImage});
        background-size: cover;
    }

    .desc-container{
        width: 445.5px;
        height: 372px;
        margin-top: 120px;
        
        .name{
            font-size: 40px;
            font-weight: 700;
            line-height: 44px;
            letter-spacing: 1.4285714626312256px;
            text-align: left;
            margin-bottom: 50px;
        }

        .desc{
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            margin-bottom: 30px;
            color: #00000075;
        }
        .price{
            font-size: 18px;
            font-weight: 700;
            line-height: 24.59px;
            letter-spacing: 1.2857142686843872px;
            text-align: left;

        }

        .addProduct{
            position: absolute;
        }
        .addBtn{
            margin: 47px 49px 0px 0px;
    }
    }


    @media (max-width: 1440px){
        width: 689.5px;
        height: 480px;
        gap: 69px;

        .productimage{
            width: 281px;
            height: 480px;
            background-position-x: 50%;
        }

        .desc-container{
            width: 339.5px;
            height: 390px;
            margin-top: 78px;

            .name{
                font-size: 28px;
                font-weight: 700;
                line-height: 32px;
                letter-spacing: 1px;
                text-align: left;
                margin-bottom: 32px;
            }

            .desc{
                font-size: 15px;
                font-weight: 500;
                line-height: 25px;
                text-align: left;
                margin-bottom: 32px;
            }
            .price{
                font-size: 18px;
                font-weight: 700;
                line-height: 24.59px;
                letter-spacing: 1.2857142686843872px;
                text-align: left;
            }
            .addBtn{
            margin: 31px 43px 0px 0px;
            }
        }
    }
    @media (max-width: 768px){
        width: 375px;
        height: auto;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }

    .productimage{
        width: 327px;
        height: 327px;
        }

        .desc-container{
            width: 339.5px;
            height: 390px;
            margin-top: 78px;

            .name{
                font-size: 28px;
                font-weight: 700;
                line-height: 38.25px;
                letter-spacing: 1px;
                text-align: left;
            }

            .desc{
                font-size: 15px;
                font-weight: 400;
                line-height: 25px;
                text-align: left;

            }
            .price{
                font-size: 18px;
                font-weight: 700;
                line-height: 24.59px;
                letter-spacing: 1.2857142686843872px;
                text-align: left;
            }
            .addBtn{
                margin: 31px 43px 0px 0px;
            }
        }
`,My=ke.div`
    width: 1110px;
    height: auto;
    display: flex;
    gap: 30px;
    margin: 40px auto;

    .otherBtn{
        margin:12px 95px;
    }
    @media (max-width: 1440px){
        width: 691px;
        gap: 11px;

        .otherBtn{
            margin:12px 31p; 
        }
    }
    @media (max-width: 768px){
        width: 327px;
        flex-direction: column;
        gap: 56px;

        .otherBtn{
            width: 160px;
            height: 48px;
            margin: 0 31px; 
        }
    }

`,$y=ke.div`
    width: 350px;
    height: 471px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color:#000;
    
    & > *{
        display: block;
    }

    img{
        width: 350px;
        height: 318px;
    }

    @media (max-width: 1440px){
        width: 223px;
        height: 471px;
        gap: 40px;
        
        img{
            width: 223px;
            height: 318px;
        }
    }
    @media (max-width: 768px){
        width: 327px;
        height: 265px;
        
    
        img{
            width: 327px;
            height: 120px;
        }
    }
`,Uy=ke.div`
    width: 1110px;
    height: 592px;
    display: flex;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 150px;
    gap: 30px; 

    .small-container{
        width: 445px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .small-container > * {
        display: block;
        border-radius: 7px;
    }


    .big-container{
        width: 635px;
        height: 100%;
    }

    .big-container > *{ 
        border-radius: 7px;
    }

    @media (max-width:1440px) {
        width: 690px;
        height: 368px;

        .small-container{
            width: 277px;
            gap: 20px;
        }
        .big-container{
            width: 395px;
            height: 100%;
        }
        
        .big{
            width: 100%;
            height: 100%;
        }
    }
    @media (max-width:768px) {
        width: 327px;
        height: auto;
        flex-direction: column;

        .small-container{
            width: 327px;
            height: auto;
        }
        .big-container{
            width: 327px;
            height: 368px;
        }
    }
`,Vy=ke.div`
    width: 1110px;
    height: 318px;
    display: grid;
    margin: 40px auto;
    grid-template-columns: 60% 10% 20%;
    color: #000;

    .features{
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.1428571939468384px;
        text-align: left;

    }

    .feature-desc{
        color: rgba(0,0,0,0.5);
        white-space: pre-line;
        margin-top: 30px;
    }

    .inbox{
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.1428571939468384px;
        text-align: left;
        margin-bottom: 30px;
    }

    .included{
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(0,0,0,0.5);
        margin-top: 12px;
        width: 100%;
        display: flex;
        gap:20px;
    }

    @media (max-width: 1440px){
        width: 689px;
        height: auto;
        grid-template-columns: 100%;
        grid-template-rows: 318px 120px 157px ;

        .inbox{
            width: 339px;
        }
        
        .inTheBox{
            display: flex;
            align-items: flex-start;
        }

        .included{
            margin-top: 0px;
            margin-bottom: 8px;
        }
    }

    @media (max-width: 768px){
        width: 327px;
        height: auto;
        display: block;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;

        .inTheBox{
            flex-direction: column;
        }
        
        .inbox{
            width: 327px;
            margin-top: 88px;

        }

        .included{
            margin-top: 0px;
            margin-bottom: 8px;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
        }
    }
`;function gu({id:r,image:l,name:o,description:u,newProduct:c}){const d=xt();return f.jsxs(By,{bgImage:l,children:[f.jsx("div",{className:"product-image"}),f.jsxs("div",{className:"info",children:[f.jsx("p",{className:"anonce",children:c?"NEW PRODUCT":""}),f.jsx("p",{className:"product-name",children:o}),f.jsx("p",{className:"prod-desc",children:u}),f.jsx(pr,{className:"seeButton",onClick:()=>{d.setProductId(r),d.setProductSelected(!0)},children:"SEE PRODUCT"})]})]})}const By=ke.div`
    width: 1110px;
    height: 560px;
    display: flex;
    flex-direction: row;
    gap: 120px;
    color: #000;
    margin: auto;
    margin-top: 140px;

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    .product-image{
        width: 540px;
        height: 560px;
        background-image: url(${r=>r.bgImage});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 7px;
    }
    
    .info{
        width: 445px;
        height: 343px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 126px;
    }

    .anonce{
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.12px;
        letter-spacing: 10px;
        text-align: left;
        color:#D87D4A;
    }

    .product-name{
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.4285714626312256px;
        text-align: left;
        margin: 20px 0px 40px 0px;
    }

    .prod-desc{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(0,0,0, 0.5);
    }

    .seeButton{
        margin: 60px 0px 0px;
    }

    @media (max-width: 1440px){
        width: 689px;
        height: 706px;
        flex-direction: column;
        gap: 0px;
        
        &:nth-child(even){
            flex-direction: column;
        }

        .product-image{
            width: 689px;
            height: 352px;
            background-size: contain;
            background-position: 50%;
            background-color: #f1f1f1;
        }

        .info {
            padding: 0px;
            align-items: center;
            width: 572px;
            height: 302px;
            padding-top: 0px;
            margin: 52px auto 0px;
        }

        .anonce{
            font-family: Manrope;
            font-size: 14px;
            font-weight: 400;
            line-height: 19.12px;
            letter-spacing: 10px;
            text-align: center;
            color:#D87D4A;
            margin-bottom: 16px;
        }

        .product-name{
            font-family: Manrope;
            font-size: 40px;
            font-weight: 700;
            line-height: 44px;
            letter-spacing: 1.4285714626312256px;
            text-align: center;
            margin: 0px 0px 32px;
        }

        .prod-desc{
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
            color: rgba(0,0,0, 0.5);
        }

        .seeButton{
            margin: 24px 0px 0px;
        }
    }

    @media (max-width: 768px){
        width: 327px;
        height: 724px;

        .product-image{
            width: 327px;
            height: 352px;
            background-size: contain;
            background-position: 50%;
            background-color: #f1f1f1;
        }

        .info {
            width: 327px;   
            height: 340px;
        }
    }
`;function Hy(){const r=xt(),l=Xi(),o=r.devices.filter(u=>u.category==="headphones");return r.selected?f.jsx(mu,{id:r.productId}):f.jsx(f.Fragment,{children:o.map(u=>f.jsx(gu,{id:u.id,image:u.image[`${l.width>=1440?"desktop":l.width>=768?"tablet":"mobile"}`],name:u.name,description:u.description,newProduct:u.new}))})}function Wy(){const r=xt(),l=Xi(),o=r.devices.filter(u=>u.category==="speakers");return r.selected?f.jsx(mu,{id:r.productId}):f.jsx(f.Fragment,{children:o.map(u=>f.jsx(gu,{id:u.id,image:u.image[`${l.width>=1440?"desktop":l.width<=768?"tablet":"mobile"}`],name:u.name,description:u.description,newProduct:u.new},u.id))})}function Xy(){const r=xt(),l=Xi(),o=r.devices.filter(u=>u.category==="earphones");return r.selected?f.jsx(mu,{id:r.productId}):f.jsx(f.Fragment,{children:o.map(u=>f.jsx(gu,{id:u.id,image:u.image[`${l.width>=1440?"desktop":l.width<=768?"tablet":"mobile"}`],name:u.name,description:u.description,newProduct:u.new},u.id))})}const qy=JSON.parse('[{"id":1,"slug":"yx1-earphones","name":"YX1 Wireless Earphones","image":{"mobile":"./assets/product-yx1-earphones/mobile/image-product.jpg","tablet":"./assets/product-yx1-earphones/tablet/image-product.jpg","desktop":"./assets/product-yx1-earphones/desktop/image-product.jpg"},"category":"earphones","categoryImage":{"mobile":"./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg","tablet":"./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg","desktop":"./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"},"new":true,"price":599,"description":"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.","features":"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\\n\\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.","includes":[{"quantity":2,"item":"Earphone unit"},{"quantity":6,"item":"Multi-size earplugs"},{"quantity":1,"item":"User manual"},{"quantity":1,"item":"USB-C charging cable"},{"quantity":1,"item":"Travel pouch"}],"gallery":{"first":{"mobile":"./assets/product-yx1-earphones/mobile/image-gallery-1.jpg","tablet":"./assets/product-yx1-earphones/tablet/image-gallery-1.jpg","desktop":"./assets/product-yx1-earphones/desktop/image-gallery-1.jpg"},"second":{"mobile":"./assets/product-yx1-earphones/mobile/image-gallery-2.jpg","tablet":"./assets/product-yx1-earphones/tablet/image-gallery-2.jpg","desktop":"./assets/product-yx1-earphones/desktop/image-gallery-2.jpg"},"third":{"mobile":"./assets/product-yx1-earphones/mobile/image-gallery-3.jpg","tablet":"./assets/product-yx1-earphones/tablet/image-gallery-3.jpg","desktop":"./assets/product-yx1-earphones/desktop/image-gallery-3.jpg"}},"others":[{"slug":"xx99-mark-one-headphones","name":"XX99 Mark I","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-one-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-one-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"}},{"slug":"xx59-headphones","name":"XX59","image":{"mobile":"./assets/shared/mobile/image-xx59-headphones.jpg","tablet":"./assets/shared/tablet/image-xx59-headphones.jpg","desktop":"./assets/shared/desktop/image-xx59-headphones.jpg"}},{"slug":"zx9-speaker","name":"ZX9 Speaker","image":{"mobile":"./assets/shared/mobile/image-zx9-speaker.jpg","tablet":"./assets/shared/tablet/image-zx9-speaker.jpg","desktop":"./assets/shared/desktop/image-zx9-speaker.jpg"}}]},{"id":2,"slug":"xx59-headphones","name":"XX59 Headphones","image":{"mobile":"./assets/product-xx59-headphones/mobile/image-product.jpg","tablet":"./assets/product-xx59-headphones/tablet/image-product.jpg","desktop":"./assets/product-xx59-headphones/desktop/image-product.jpg"},"category":"headphones","categoryImage":{"mobile":"./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg","tablet":"./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg","desktop":"./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"},"new":false,"price":899,"description":"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.","features":"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\\n\\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.","includes":[{"quantity":1,"item":"Headphone unit"},{"quantity":2,"item":"Replacement earcups"},{"quantity":1,"item":"User manual"},{"quantity":1,"item":"3.5mm 5m audio cable"}],"gallery":{"first":{"mobile":"./assets/product-xx59-headphones/mobile/image-gallery-1.jpg","tablet":"./assets/product-xx59-headphones/tablet/image-gallery-1.jpg","desktop":"./assets/product-xx59-headphones/desktop/image-gallery-1.jpg"},"second":{"mobile":"./assets/product-xx59-headphones/mobile/image-gallery-2.jpg","tablet":"./assets/product-xx59-headphones/tablet/image-gallery-2.jpg","desktop":"./assets/product-xx59-headphones/desktop/image-gallery-2.jpg"},"third":{"mobile":"./assets/product-xx59-headphones/mobile/image-gallery-3.jpg","tablet":"./assets/product-xx59-headphones/tablet/image-gallery-3.jpg","desktop":"./assets/product-xx59-headphones/desktop/image-gallery-3.jpg"}},"others":[{"slug":"xx99-mark-two-headphones","name":"XX99 Mark II","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-two-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-two-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-two-headphones.jpg"}},{"slug":"xx99-mark-one-headphones","name":"XX99 Mark I","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-one-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-one-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"}},{"slug":"zx9-speaker","name":"ZX9 Speaker","image":{"mobile":"./assets/shared/mobile/image-zx9-speaker.jpg","tablet":"./assets/shared/tablet/image-zx9-speaker.jpg","desktop":"./assets/shared/desktop/image-zx9-speaker.jpg"}}]},{"id":3,"slug":"xx99-mark-one-headphones","name":"XX99 Mark I Headphones","image":{"mobile":"./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg","tablet":"./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg","desktop":"./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"},"category":"headphones","categoryImage":{"mobile":"./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg","tablet":"./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg","desktop":"./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"},"new":false,"price":1750,"description":"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.","features":"As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\\n\\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.","includes":[{"quantity":1,"item":"Headphone unit"},{"quantity":2,"item":"Replacement earcups"},{"quantity":1,"item":"User manual"},{"quantity":1,"item":"3.5mm 5m audio cable"}],"gallery":{"first":{"mobile":"./assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg","tablet":"./assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg","desktop":"./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"},"second":{"mobile":"./assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg","tablet":"./assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg","desktop":"./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"},"third":{"mobile":"./assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg","tablet":"./assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg","desktop":"./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"}},"others":[{"slug":"xx99-mark-two-headphones","name":"XX99 Mark II","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-two-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-two-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-two-headphones.jpg"}},{"slug":"xx59-headphones","name":"XX59","image":{"mobile":"./assets/shared/mobile/image-xx59-headphones.jpg","tablet":"./assets/shared/tablet/image-xx59-headphones.jpg","desktop":"./assets/shared/desktop/image-xx59-headphones.jpg"}},{"slug":"zx9-speaker","name":"ZX9 Speaker","image":{"mobile":"./assets/shared/mobile/image-zx9-speaker.jpg","tablet":"./assets/shared/tablet/image-zx9-speaker.jpg","desktop":"./assets/shared/desktop/image-zx9-speaker.jpg"}}]},{"id":4,"slug":"xx99-mark-two-headphones","name":"XX99 Mark II Headphones","image":{"mobile":"./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg","tablet":"./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg","desktop":"./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"},"category":"headphones","categoryImage":{"mobile":"./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg","tablet":"./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg","desktop":"./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"},"new":true,"price":2999,"description":"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.","features":"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\\n\\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.","includes":[{"quantity":1,"item":"Headphone unit"},{"quantity":2,"item":"Replacement earcups"},{"quantity":1,"item":"User manual"},{"quantity":1,"item":"3.5mm 5m audio cable"},{"quantity":1,"item":"Travel bag"}],"gallery":{"first":{"mobile":"./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg","tablet":"./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg","desktop":"./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"},"second":{"mobile":"./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg","tablet":"./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg","desktop":"./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"},"third":{"mobile":"./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg","tablet":"./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg","desktop":"./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"}},"others":[{"slug":"xx99-mark-one-headphones","name":"XX99 Mark I","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-one-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-one-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"}},{"slug":"xx59-headphones","name":"XX59","image":{"mobile":"./assets/shared/mobile/image-xx59-headphones.jpg","tablet":"./assets/shared/tablet/image-xx59-headphones.jpg","desktop":"./assets/shared/desktop/image-xx59-headphones.jpg"}},{"slug":"zx9-speaker","name":"ZX9 Speaker","image":{"mobile":"./assets/shared/mobile/image-zx9-speaker.jpg","tablet":"./assets/shared/tablet/image-zx9-speaker.jpg","desktop":"./assets/shared/desktop/image-zx9-speaker.jpg"}}]},{"id":5,"slug":"zx7-speaker","name":"ZX7 Speaker","image":{"mobile":"./assets/product-zx7-speaker/mobile/image-product.jpg","tablet":"./assets/product-zx7-speaker/tablet/image-product.jpg","desktop":"./assets/product-zx7-speaker/desktop/image-product.jpg"},"category":"speakers","categoryImage":{"mobile":"./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg","tablet":"./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg","desktop":"./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"},"new":false,"price":3500,"description":"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.","features":"Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\\n\\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.","includes":[{"quantity":2,"item":"Speaker unit"},{"quantity":2,"item":"Speaker cloth panel"},{"quantity":1,"item":"User manual"},{"quantity":1,"item":"3.5mm 7.5m audio cable"},{"quantity":1,"item":"7.5m optical cable"}],"gallery":{"first":{"mobile":"./assets/product-zx7-speaker/mobile/image-gallery-1.jpg","tablet":"./assets/product-zx7-speaker/tablet/image-gallery-1.jpg","desktop":"./assets/product-zx7-speaker/desktop/image-gallery-1.jpg"},"second":{"mobile":"./assets/product-zx7-speaker/mobile/image-gallery-2.jpg","tablet":"./assets/product-zx7-speaker/tablet/image-gallery-2.jpg","desktop":"./assets/product-zx7-speaker/desktop/image-gallery-2.jpg"},"third":{"mobile":"./assets/product-zx7-speaker/mobile/image-gallery-3.jpg","tablet":"./assets/product-zx7-speaker/tablet/image-gallery-3.jpg","desktop":"./assets/product-zx7-speaker/desktop/image-gallery-3.jpg"}},"others":[{"slug":"zx9-speaker","name":"ZX9 Speaker","image":{"mobile":"./assets/shared/mobile/image-zx9-speaker.jpg","tablet":"./assets/shared/tablet/image-zx9-speaker.jpg","desktop":"./assets/shared/desktop/image-zx9-speaker.jpg"}},{"slug":"xx99-mark-one-headphones","name":"XX99 Mark I","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-one-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-one-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"}},{"slug":"xx59-headphones","name":"XX59","image":{"mobile":"./assets/shared/mobile/image-xx59-headphones.jpg","tablet":"./assets/shared/tablet/image-xx59-headphones.jpg","desktop":"./assets/shared/desktop/image-xx59-headphones.jpg"}}]},{"id":6,"slug":"zx9-speaker","name":"ZX9 Speaker","image":{"mobile":"./assets/product-zx9-speaker/mobile/image-product.jpg","tablet":"./assets/product-zx9-speaker/tablet/image-product.jpg","desktop":"./assets/product-zx9-speaker/desktop/image-product.jpg"},"category":"speakers","categoryImage":{"mobile":"./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg","tablet":"./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg","desktop":"./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"},"new":true,"price":4500,"description":"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.","features":"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\\n\\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.","includes":[{"quantity":2,"item":"Speaker unit"},{"quantity":2,"item":"Speaker cloth panel"},{"quantity":1,"item":"User manual"},{"quantity":1,"item":"3.5mm 10m audio cable"},{"quantity":1,"item":"10m optical cable"}],"gallery":{"first":{"mobile":"./assets/product-zx9-speaker/mobile/image-gallery-1.jpg","tablet":"./assets/product-zx9-speaker/tablet/image-gallery-1.jpg","desktop":"./assets/product-zx9-speaker/desktop/image-gallery-1.jpg"},"second":{"mobile":"./assets/product-zx9-speaker/mobile/image-gallery-2.jpg","tablet":"./assets/product-zx9-speaker/tablet/image-gallery-2.jpg","desktop":"./assets/product-zx9-speaker/desktop/image-gallery-2.jpg"},"third":{"mobile":"./assets/product-zx9-speaker/mobile/image-gallery-3.jpg","tablet":"./assets/product-zx9-speaker/tablet/image-gallery-3.jpg","desktop":"./assets/product-zx9-speaker/desktop/image-gallery-3.jpg"}},"others":[{"slug":"zx7-speaker","name":"ZX7 Speaker","image":{"mobile":"./assets/shared/mobile/image-zx7-speaker.jpg","tablet":"./assets/shared/tablet/image-zx7-speaker.jpg","desktop":"./assets/shared/desktop/image-zx7-speaker.jpg"}},{"slug":"xx99-mark-one-headphones","name":"XX99 Mark I","image":{"mobile":"./assets/shared/mobile/image-xx99-mark-one-headphones.jpg","tablet":"./assets/shared/tablet/image-xx99-mark-one-headphones.jpg","desktop":"./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"}},{"slug":"xx59-headphones","name":"XX59","image":{"mobile":"./assets/shared/mobile/image-xx59-headphones.jpg","tablet":"./assets/shared/tablet/image-xx59-headphones.jpg","desktop":"./assets/shared/desktop/image-xx59-headphones.jpg"}}]}]');function Qy(){const r=xt();return f.jsxs(Yy,{children:[f.jsx("div",{className:"logo",children:f.jsx("img",{src:"./public/assets/shared/desktop/logo.svg",alt:""})}),f.jsx("div",{className:"nav",children:f.jsxs("ul",{children:[f.jsx("li",{onClick:()=>{r.setCheckOut(!1)},children:"HOME"}),f.jsx("li",{onClick:()=>{r.setCheckOut(!1)},children:"HEAPHONES"}),f.jsx("li",{onClick:()=>{r.setCheckOut(!1)},children:"SPEAKERS"}),f.jsx("li",{onClick:()=>{r.setCheckOut(!1)},children:"EARPHONES"})]})}),f.jsxs("div",{children:[f.jsx("p",{className:"description",children:"Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."}),f.jsx("p",{className:"copy",children:"Copyright 2024. All Rights Reserved"})]}),f.jsxs("div",{className:"socials",children:[f.jsx("img",{src:"./public/assets/shared/desktop/icon-facebook.svg",alt:""}),f.jsx("img",{src:"./public/assets/shared/desktop/icon-twitter.svg",alt:""}),f.jsx("img",{src:"./public/assets/shared/desktop/icon-instagram.svg",alt:""})]})]})}const Yy=ke.footer`
    width: 1440px;
    height: 365px;
    margin: 0px auto;
    background-color: #000;
    padding: 60px 120px;
    gap: 80px;
    color: rgba(255,255,255, .5);
    position: relative;

    .logo{
        position: absolute;
        top: 75px;
        left: 165px;
    }

    .description {
        width: 540px;
        height: auto;
        position: absolute;
        top: 136px;
        left: 165px;
    }
    .copy{
        position: absolute;
        top: 292px;
        left: 165px;
    }

    .nav > ul {
        width: 429px;
        position: absolute;
        top: 75px;
        right: 165px;
        display: flex;
        justify-content: space-around;
        list-style: none;
        color: #FFF;
    }

    .nav > ul > li {
        cursor: pointer;
    }

    .socials{
        width: 13.5%;
        display: flex;
        gap: 16px;
        position: absolute;
        top: 205px;
        right: 165px;

    }


    @media (max-width: 1440px){
        width: 768px;
        height: 400px;
        
        .logo{
            position: absolute;
            top: 60px;
            left: 39px;
        }

        .nav > ul{
            justify-content: space-between;
            right: 0px;
            top: 117px;
            left: 39px;
        }

        .description {
            top: 174px;
            left: 39px;
        }
        .copy{
            top: 329px;
            left: 39px;
        }
        .socials{
            top: 329px;
            right: 40px;
    }

}
@media (max-width: 768px){
    width: 375px;
    height: 654px;

    .logo { 
        top: 52px;
        left: 105px;
    }

    .nav > ul{
            width: 108px;
            height: 148px;
            top: 125px;
            left: 134px;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

    .description {
        width: 327px;
        height: 150px;
        top: 321px;
        left: 24px;
        text-align: center;
    }

    .copy{
        top: 519px;
        left: 58px;
    }   
    
    .socials{
        top: 592px;
        right: 0px;
        left: 136px;
    }

}
`;function Ky(){const r=xt();return f.jsx(Gy,{children:f.jsxs("ul",{children:[f.jsxs(Us,{children:[f.jsx(Vs,{src:"./assets/shared/desktop/image-category-thumbnail-headphones.png"}),f.jsxs(Bs,{children:[f.jsx("h4",{children:"HEADPHONES"}),f.jsx("p",{onClick:()=>{r.setProductSelected(!1)},children:f.jsxs(an,{to:"/headphones",children:["SHOP ",f.jsx("svg",{width:"8",height:"12",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M1.322 1l5 5-5 5",stroke:"#D87D4A","stroke-width":"2",fill:"none","fill-rule":"evenodd"})})]})})]})]}),f.jsxs(Us,{children:[f.jsx(Vs,{src:"./assets/shared/desktop/image-category-thumbnail-speakers.png"}),f.jsxs(Bs,{children:[f.jsx("h4",{children:"SPEAKERS"}),f.jsx("p",{onClick:()=>{r.setProductSelected(!1)},children:f.jsxs(an,{to:"/speakers",children:["SHOP ",f.jsx("svg",{width:"8",height:"12",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M1.322 1l5 5-5 5",stroke:"#D87D4A","stroke-width":"2",fill:"none","fill-rule":"evenodd"})})]})})]})]}),f.jsxs(Us,{children:[f.jsx(Vs,{src:"./assets/shared/desktop/image-category-thumbnail-earphones.png"}),f.jsxs(Bs,{children:[f.jsx("h4",{children:"EARPHONES"}),f.jsx("p",{onClick:()=>{r.setProductSelected(!1)},children:f.jsxs(an,{to:"/earphones",children:["SHOP ",f.jsx("svg",{width:"8",height:"12",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M1.322 1l5 5-5 5",stroke:"#D87D4A","stroke-width":"2",fill:"none","fill-rule":"evenodd"})})]})})]})]})]})})}const Gy=ke.div`
  width: 1110px;
  height: 284px;
  margin: 160px auto 0px;
  display: flex;
  background-color: #FFF;
  
  ul{
    display:flex;
    justify-content: space-between;
    list-style: none;
    margin: 0px auto;
    margin-top: 80px;
  }

  ul a {
    font-size: 13px;
    font-weight: 700;
    line-height: 17.76px;
    letter-spacing: 1px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000;
  }

  ul a:hover {
    color: #D87D4A;
  }

  @media (max-width: 1440px){
    width: 689px;
    height: 217px;
    margin: 120px auto;
  }

  @media (max-width: 768px){
    width: 375px;
    height: 683px;
    ul {
      flex-direction: column;
      gap: 50px
    }
  }
`,Us=ke.li`
  width: 250px;
  height: 284px;
  color: #000;
  margin: 20px 20px;
  text-align: center;
  position: relative;

  @media (max-width: 1440px){
    width: 223px;
    height: 165px;
    margin: 0px;
    margin-right: 10px;
  }

  @media (max-width: 768px){
    width: 327px;
    height: 200px;
  }
`,Vs=ke.img`
  width: 160px;
  height:auto;
  display: inline-block;
  margin: auto;
  position: absolute;
  top:-70px;
  left:45px;
  
  @media (max-width: 1440px){
    width: 103px;
    height: 104px;
    top:-30px;
    left:60px;
  }
  @media (max-width: 768px){
    left: 121px;
  }
`,Bs=ke.div`
  background-color: #F1F1F1;
  border-radius: 7px;
  padding: 50px;

  h4{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.59px;
    letter-spacing: 1.2857142686843872px;
    text-align: center;

  }
  p{
    margin-top: 10px;
    font-size: 13px;
    font-weight: 600;
    line-height: 17.76px;
    letter-spacing: 1px;
    color: rgba(0,0,0, 0.5);
    cursor: pointer;
  }

  p:hover{
    color: #D87D4A;
  }
`;function Zy(){return f.jsxs(Jy,{children:[f.jsxs("div",{className:"about",children:[f.jsxs("p",{className:"about-title",children:["BRINGING YOU THE ",f.jsx("span",{style:{color:"#D87D4A"},children:"BEST"})," AUDIO GEAR"]}),f.jsx("p",{children:"Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."})]}),f.jsx("div",{className:"about-img"})]})}const Jy=ke.div`
    width: 1110px;
    height: 588px;
    display: flex;
    gap: 10%;
    margin:  200px auto;
    .about{
        width: 40%;
        color: rgba(0,0,0,0.5);
        padding: 150px 10px;
    }
    .about-title{
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.4285714626312256px;
        text-align: left;
        margin-bottom: 40px;
        color: #000;
    }

    .about-img{
        width: 50%;
        height: 100%;
        border-radius: 5px;
        background-image: url("./assets/shared/desktop/image-best-gear.jpg");     
    }


    @media (max-width: 1440px){
        width: 689px;
        height: 633px;
        flex-direction: column-reverse;
        text-align: center;
        margin: 96px auto;
        
        .about{
            width: 573px;
            height: 270px;
            margin: auto;
            padding: 0px;
        }
        .about-img{
            width: 689px;
            height: 300px;
            background-image: url("./dist/assets/shared/tablet/image-best-gear.jpg");     
            /* background-repeat: no-repeat; */
            /* border: 1px solid black; */
            background-size: cover;
   
        }
        .about-title{
            text-align: center;
        }
    }

    @media (max-width: 768px){
        width: 327px;
        height: 698px;
        gap: 0px;

        .about-img{
            width: 327px;
            height: 300px;
            background-image: url("./dist/assets/shared/mobile/image-best-gear.jpg");
            background-size: cover;
            
        }

        .about{
            width: 327px;
            height: 270px;
            margin: 32px 0px 120px;
            padding: 0px;
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
        }

        .about-title{
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 1px;
            text-align: center;

    }
}
`;function e0(){const r=xt();return f.jsxs("div",{children:[f.jsx(Ny,{}),f.jsx(Lg,{}),r.checkOut?null:f.jsxs("div",{style:{position:"relative"},children:[f.jsx(Ky,{}),f.jsx(Zy,{})]}),r.cart?f.jsx(Ry,{}):null,f.jsx(Qy,{})]})}var qi=r=>r.type==="checkbox",ur=r=>r instanceof Date,gt=r=>r==null;const Tf=r=>typeof r=="object";var Qe=r=>!gt(r)&&!Array.isArray(r)&&Tf(r)&&!ur(r),t0=r=>Qe(r)&&r.target?qi(r.target)?r.target.checked:r.target.value:r,n0=r=>r.substring(0,r.search(/\.\d+(\.|$)/))||r,r0=(r,l)=>r.has(n0(l)),i0=r=>{const l=r.constructor&&r.constructor.prototype;return Qe(l)&&l.hasOwnProperty("isPrototypeOf")},xu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $t(r){let l;const o=Array.isArray(r),u=typeof FileList<"u"?r instanceof FileList:!1;if(r instanceof Date)l=new Date(r);else if(r instanceof Set)l=new Set(r);else if(!(xu&&(r instanceof Blob||u))&&(o||Qe(r)))if(l=o?[]:{},!o&&!i0(r))l=r;else for(const c in r)r.hasOwnProperty(c)&&(l[c]=$t(r[c]));else return r;return l}var Al=r=>Array.isArray(r)?r.filter(Boolean):[],Ke=r=>r===void 0,ne=(r,l,o)=>{if(!l||!Qe(r))return o;const u=Al(l.split(/[,[\].]+?/)).reduce((c,d)=>gt(c)?c:c[d],r);return Ke(u)||u===r?Ke(r[l])?o:r[l]:u},rn=r=>typeof r=="boolean",yu=r=>/^\w*$/.test(r),Df=r=>Al(r.replace(/["|']|\]/g,"").split(/\.|\[/)),Oe=(r,l,o)=>{let u=-1;const c=yu(l)?[l]:Df(l),d=c.length,h=d-1;for(;++u<d;){const m=c[u];let x=o;if(u!==h){const k=r[m];x=Qe(k)||Array.isArray(k)?k:isNaN(+c[u+1])?{}:[]}if(m==="__proto__"||m==="constructor"||m==="prototype")return;r[m]=x,r=r[m]}return r};const Dp={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Yt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},kn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ut.createContext(null);var o0=(r,l,o,u=!0)=>{const c={defaultValues:l._defaultValues};for(const d in r)Object.defineProperty(c,d,{get:()=>{const h=d;return l._proxyFormState[h]!==Yt.all&&(l._proxyFormState[h]=!u||Yt.all),r[h]}});return c},Et=r=>Qe(r)&&!Object.keys(r).length,l0=(r,l,o,u)=>{o(r);const{name:c,...d}=r;return Et(d)||Object.keys(d).length>=Object.keys(l).length||Object.keys(d).find(h=>l[h]===Yt.all)},yl=r=>Array.isArray(r)?r:[r];function a0(r){const l=ut.useRef(r);l.current=r,ut.useEffect(()=>{const o=!r.disabled&&l.current.subject&&l.current.subject.subscribe({next:l.current.next});return()=>{o&&o.unsubscribe()}},[r.disabled])}var sn=r=>typeof r=="string",s0=(r,l,o,u,c)=>sn(r)?(u&&l.watch.add(r),ne(o,r,c)):Array.isArray(r)?r.map(d=>(u&&l.watch.add(d),ne(o,d))):(u&&(l.watchAll=!0),o),u0=(r,l,o,u,c)=>l?{...o[r],types:{...o[r]&&o[r].types?o[r].types:{},[u]:c||!0}}:{},Ip=r=>({isOnSubmit:!r||r===Yt.onSubmit,isOnBlur:r===Yt.onBlur,isOnChange:r===Yt.onChange,isOnAll:r===Yt.all,isOnTouch:r===Yt.onTouched}),Lp=(r,l,o)=>!o&&(l.watchAll||l.watch.has(r)||[...l.watch].some(u=>r.startsWith(u)&&/^\.\w+/.test(r.slice(u.length))));const Mi=(r,l,o,u)=>{for(const c of o||Object.keys(r)){const d=ne(r,c);if(d){const{_f:h,...m}=d;if(h){if(h.refs&&h.refs[0]&&l(h.refs[0],c)&&!u)return!0;if(h.ref&&l(h.ref,h.name)&&!u)return!0;if(Mi(m,l))break}else if(Qe(m)&&Mi(m,l))break}}};var c0=(r,l,o)=>{const u=yl(ne(r,o));return Oe(u,"root",l[o]),Oe(r,o,u),r},vu=r=>r.type==="file",ln=r=>typeof r=="function",_l=r=>{if(!xu)return!1;const l=r?r.ownerDocument:0;return r instanceof(l&&l.defaultView?l.defaultView.HTMLElement:HTMLElement)},vl=r=>sn(r),wu=r=>r.type==="radio",Pl=r=>r instanceof RegExp;const Ap={value:!1,isValid:!1},Op={value:!0,isValid:!0};var If=r=>{if(Array.isArray(r)){if(r.length>1){const l=r.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:l,isValid:!!l.length}}return r[0].checked&&!r[0].disabled?r[0].attributes&&!Ke(r[0].attributes.value)?Ke(r[0].value)||r[0].value===""?Op:{value:r[0].value,isValid:!0}:Op:Ap}return Ap};const Mp={isValid:!1,value:null};var Lf=r=>Array.isArray(r)?r.reduce((l,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:l,Mp):Mp;function $p(r,l,o="validate"){if(vl(r)||Array.isArray(r)&&r.every(vl)||rn(r)&&!r)return{type:o,message:vl(r)?r:"",ref:l}}var $r=r=>Qe(r)&&!Pl(r)?r:{value:r,message:""},Up=async(r,l,o,u,c,d)=>{const{ref:h,refs:m,required:x,maxLength:k,minLength:_,min:E,max:F,pattern:A,validate:T,name:I,valueAsNumber:O,mount:L}=r._f,b=ne(o,I);if(!L||l.has(I))return{};const q=m?m[0]:h,K=ue=>{c&&q.reportValidity&&(q.setCustomValidity(rn(ue)?"":ue||""),q.reportValidity())},G={},oe=wu(h),J=qi(h),Se=oe||J,Ee=(O||vu(h))&&Ke(h.value)&&Ke(b)||_l(h)&&h.value===""||b===""||Array.isArray(b)&&!b.length,_e=u0.bind(null,I,u,G),lt=(ue,de,Pe,Re=kn.maxLength,Te=kn.minLength)=>{const xe=ue?de:Pe;G[I]={type:ue?Re:Te,message:xe,ref:h,..._e(ue?Re:Te,xe)}};if(d?!Array.isArray(b)||!b.length:x&&(!Se&&(Ee||gt(b))||rn(b)&&!b||J&&!If(m).isValid||oe&&!Lf(m).isValid)){const{value:ue,message:de}=vl(x)?{value:!!x,message:x}:$r(x);if(ue&&(G[I]={type:kn.required,message:de,ref:q,..._e(kn.required,de)},!u))return K(de),G}if(!Ee&&(!gt(E)||!gt(F))){let ue,de;const Pe=$r(F),Re=$r(E);if(!gt(b)&&!isNaN(b)){const Te=h.valueAsNumber||b&&+b;gt(Pe.value)||(ue=Te>Pe.value),gt(Re.value)||(de=Te<Re.value)}else{const Te=h.valueAsDate||new Date(b),xe=Q=>new Date(new Date().toDateString()+" "+Q),H=h.type=="time",ee=h.type=="week";sn(Pe.value)&&b&&(ue=H?xe(b)>xe(Pe.value):ee?b>Pe.value:Te>new Date(Pe.value)),sn(Re.value)&&b&&(de=H?xe(b)<xe(Re.value):ee?b<Re.value:Te<new Date(Re.value))}if((ue||de)&&(lt(!!ue,Pe.message,Re.message,kn.max,kn.min),!u))return K(G[I].message),G}if((k||_)&&!Ee&&(sn(b)||d&&Array.isArray(b))){const ue=$r(k),de=$r(_),Pe=!gt(ue.value)&&b.length>+ue.value,Re=!gt(de.value)&&b.length<+de.value;if((Pe||Re)&&(lt(Pe,ue.message,de.message),!u))return K(G[I].message),G}if(A&&!Ee&&sn(b)){const{value:ue,message:de}=$r(A);if(Pl(ue)&&!b.match(ue)&&(G[I]={type:kn.pattern,message:de,ref:h,..._e(kn.pattern,de)},!u))return K(de),G}if(T){if(ln(T)){const ue=await T(b,o),de=$p(ue,q);if(de&&(G[I]={...de,..._e(kn.validate,de.message)},!u))return K(de.message),G}else if(Qe(T)){let ue={};for(const de in T){if(!Et(ue)&&!u)break;const Pe=$p(await T[de](b,o),q,de);Pe&&(ue={...Pe,..._e(de,Pe.message)},K(Pe.message),u&&(G[I]=ue))}if(!Et(ue)&&(G[I]={ref:q,...ue},!u))return G}}return K(!0),G};function d0(r,l){const o=l.slice(0,-1).length;let u=0;for(;u<o;)r=Ke(r)?u++:r[l[u++]];return r}function p0(r){for(const l in r)if(r.hasOwnProperty(l)&&!Ke(r[l]))return!1;return!0}function tt(r,l){const o=Array.isArray(l)?l:yu(l)?[l]:Df(l),u=o.length===1?r:d0(r,o),c=o.length-1,d=o[c];return u&&delete u[d],c!==0&&(Qe(u)&&Et(u)||Array.isArray(u)&&p0(u))&&tt(r,o.slice(0,-1)),r}var Hs=()=>{let r=[];return{get observers(){return r},next:c=>{for(const d of r)d.next&&d.next(c)},subscribe:c=>(r.push(c),{unsubscribe:()=>{r=r.filter(d=>d!==c)}}),unsubscribe:()=>{r=[]}}},ru=r=>gt(r)||!Tf(r);function Hn(r,l){if(ru(r)||ru(l))return r===l;if(ur(r)&&ur(l))return r.getTime()===l.getTime();const o=Object.keys(r),u=Object.keys(l);if(o.length!==u.length)return!1;for(const c of o){const d=r[c];if(!u.includes(c))return!1;if(c!=="ref"){const h=l[c];if(ur(d)&&ur(h)||Qe(d)&&Qe(h)||Array.isArray(d)&&Array.isArray(h)?!Hn(d,h):d!==h)return!1}}return!0}var Af=r=>r.type==="select-multiple",f0=r=>wu(r)||qi(r),Ws=r=>_l(r)&&r.isConnected,Of=r=>{for(const l in r)if(ln(r[l]))return!0;return!1};function Nl(r,l={}){const o=Array.isArray(r);if(Qe(r)||o)for(const u in r)Array.isArray(r[u])||Qe(r[u])&&!Of(r[u])?(l[u]=Array.isArray(r[u])?[]:{},Nl(r[u],l[u])):gt(r[u])||(l[u]=!0);return l}function Mf(r,l,o){const u=Array.isArray(r);if(Qe(r)||u)for(const c in r)Array.isArray(r[c])||Qe(r[c])&&!Of(r[c])?Ke(l)||ru(o[c])?o[c]=Array.isArray(r[c])?Nl(r[c],[]):{...Nl(r[c])}:Mf(r[c],gt(l)?{}:l[c],o[c]):o[c]=!Hn(r[c],l[c]);return o}var Ii=(r,l)=>Mf(r,l,Nl(l)),$f=(r,{valueAsNumber:l,valueAsDate:o,setValueAs:u})=>Ke(r)?r:l?r===""?NaN:r&&+r:o&&sn(r)?new Date(r):u?u(r):r;function Xs(r){const l=r.ref;return vu(l)?l.files:wu(l)?Lf(r.refs).value:Af(l)?[...l.selectedOptions].map(({value:o})=>o):qi(l)?If(r.refs).value:$f(Ke(l.value)?r.ref.value:l.value,r)}var h0=(r,l,o,u)=>{const c={};for(const d of r){const h=ne(l,d);h&&Oe(c,d,h._f)}return{criteriaMode:o,names:[...r],fields:c,shouldUseNativeValidation:u}},Li=r=>Ke(r)?r:Pl(r)?r.source:Qe(r)?Pl(r.value)?r.value.source:r.value:r;const Vp="AsyncFunction";var m0=r=>!!r&&!!r.validate&&!!(ln(r.validate)&&r.validate.constructor.name===Vp||Qe(r.validate)&&Object.values(r.validate).find(l=>l.constructor.name===Vp)),g0=r=>r.mount&&(r.required||r.min||r.max||r.maxLength||r.minLength||r.pattern||r.validate);function Bp(r,l,o){const u=ne(r,o);if(u||yu(o))return{error:u,name:o};const c=o.split(".");for(;c.length;){const d=c.join("."),h=ne(l,d),m=ne(r,d);if(h&&!Array.isArray(h)&&o!==d)return{name:o};if(m&&m.type)return{name:d,error:m};c.pop()}return{name:o}}var x0=(r,l,o,u,c)=>c.isOnAll?!1:!o&&c.isOnTouch?!(l||r):(o?u.isOnBlur:c.isOnBlur)?!r:(o?u.isOnChange:c.isOnChange)?r:!0,y0=(r,l)=>!Al(ne(r,l)).length&&tt(r,l);const v0={mode:Yt.onSubmit,reValidateMode:Yt.onChange,shouldFocusError:!0};function w0(r={}){let l={...v0,...r},o={submitCount:0,isDirty:!1,isLoading:ln(l.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:l.errors||{},disabled:l.disabled||!1},u={},c=Qe(l.defaultValues)||Qe(l.values)?$t(l.defaultValues||l.values)||{}:{},d=l.shouldUnregister?{}:$t(c),h={action:!1,mount:!1,watch:!1},m={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},x,k=0;const _={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},E={values:Hs(),array:Hs(),state:Hs()},F=Ip(l.mode),A=Ip(l.reValidateMode),T=l.criteriaMode===Yt.all,I=v=>P=>{clearTimeout(k),k=setTimeout(v,P)},O=async v=>{if(!l.disabled&&(_.isValid||v)){const P=l.resolver?Et((await Se()).errors):await _e(u,!0);P!==o.isValid&&E.state.next({isValid:P})}},L=(v,P)=>{!l.disabled&&(_.isValidating||_.validatingFields)&&((v||Array.from(m.mount)).forEach(R=>{R&&(P?Oe(o.validatingFields,R,P):tt(o.validatingFields,R))}),E.state.next({validatingFields:o.validatingFields,isValidating:!Et(o.validatingFields)}))},b=(v,P=[],R,X,W=!0,B=!0)=>{if(X&&R&&!l.disabled){if(h.action=!0,B&&Array.isArray(ne(u,v))){const le=R(ne(u,v),X.argA,X.argB);W&&Oe(u,v,le)}if(B&&Array.isArray(ne(o.errors,v))){const le=R(ne(o.errors,v),X.argA,X.argB);W&&Oe(o.errors,v,le),y0(o.errors,v)}if(_.touchedFields&&B&&Array.isArray(ne(o.touchedFields,v))){const le=R(ne(o.touchedFields,v),X.argA,X.argB);W&&Oe(o.touchedFields,v,le)}_.dirtyFields&&(o.dirtyFields=Ii(c,d)),E.state.next({name:v,isDirty:ue(v,P),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else Oe(d,v,P)},q=(v,P)=>{Oe(o.errors,v,P),E.state.next({errors:o.errors})},K=v=>{o.errors=v,E.state.next({errors:o.errors,isValid:!1})},G=(v,P,R,X)=>{const W=ne(u,v);if(W){const B=ne(d,v,Ke(R)?ne(c,v):R);Ke(B)||X&&X.defaultChecked||P?Oe(d,v,P?B:Xs(W._f)):Re(v,B),h.mount&&O()}},oe=(v,P,R,X,W)=>{let B=!1,le=!1;const me={name:v};if(!l.disabled){const We=!!(ne(u,v)&&ne(u,v)._f&&ne(u,v)._f.disabled);if(!R||X){_.isDirty&&(le=o.isDirty,o.isDirty=me.isDirty=ue(),B=le!==me.isDirty);const Be=We||Hn(ne(c,v),P);le=!!(!We&&ne(o.dirtyFields,v)),Be||We?tt(o.dirtyFields,v):Oe(o.dirtyFields,v,!0),me.dirtyFields=o.dirtyFields,B=B||_.dirtyFields&&le!==!Be}if(R){const Be=ne(o.touchedFields,v);Be||(Oe(o.touchedFields,v,R),me.touchedFields=o.touchedFields,B=B||_.touchedFields&&Be!==R)}B&&W&&E.state.next(me)}return B?me:{}},J=(v,P,R,X)=>{const W=ne(o.errors,v),B=_.isValid&&rn(P)&&o.isValid!==P;if(l.delayError&&R?(x=I(()=>q(v,R)),x(l.delayError)):(clearTimeout(k),x=null,R?Oe(o.errors,v,R):tt(o.errors,v)),(R?!Hn(W,R):W)||!Et(X)||B){const le={...X,...B&&rn(P)?{isValid:P}:{},errors:o.errors,name:v};o={...o,...le},E.state.next(le)}},Se=async v=>{L(v,!0);const P=await l.resolver(d,l.context,h0(v||m.mount,u,l.criteriaMode,l.shouldUseNativeValidation));return L(v),P},Ee=async v=>{const{errors:P}=await Se(v);if(v)for(const R of v){const X=ne(P,R);X?Oe(o.errors,R,X):tt(o.errors,R)}else o.errors=P;return P},_e=async(v,P,R={valid:!0})=>{for(const X in v){const W=v[X];if(W){const{_f:B,...le}=W;if(B){const me=m.array.has(B.name),We=W._f&&m0(W._f);We&&_.validatingFields&&L([X],!0);const Be=await Up(W,m.disabled,d,T,l.shouldUseNativeValidation&&!P,me);if(We&&_.validatingFields&&L([X]),Be[B.name]&&(R.valid=!1,P))break;!P&&(ne(Be,B.name)?me?c0(o.errors,Be,B.name):Oe(o.errors,B.name,Be[B.name]):tt(o.errors,B.name))}!Et(le)&&await _e(le,P,R)}}return R.valid},lt=()=>{for(const v of m.unMount){const P=ne(u,v);P&&(P._f.refs?P._f.refs.every(R=>!Ws(R)):!Ws(P._f.ref))&&he(v)}m.unMount=new Set},ue=(v,P)=>!l.disabled&&(v&&P&&Oe(d,v,P),!Hn(S(),c)),de=(v,P,R)=>s0(v,m,{...h.mount?d:Ke(P)?c:sn(v)?{[v]:P}:P},R,P),Pe=v=>Al(ne(h.mount?d:c,v,l.shouldUnregister?ne(c,v,[]):[])),Re=(v,P,R={})=>{const X=ne(u,v);let W=P;if(X){const B=X._f;B&&(!B.disabled&&Oe(d,v,$f(P,B)),W=_l(B.ref)&&gt(P)?"":P,Af(B.ref)?[...B.ref.options].forEach(le=>le.selected=W.includes(le.value)):B.refs?qi(B.ref)?B.refs.length>1?B.refs.forEach(le=>(!le.defaultChecked||!le.disabled)&&(le.checked=Array.isArray(W)?!!W.find(me=>me===le.value):W===le.value)):B.refs[0]&&(B.refs[0].checked=!!W):B.refs.forEach(le=>le.checked=le.value===W):vu(B.ref)?B.ref.value="":(B.ref.value=W,B.ref.type||E.values.next({name:v,values:{...d}})))}(R.shouldDirty||R.shouldTouch)&&oe(v,W,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&Q(v)},Te=(v,P,R)=>{for(const X in P){const W=P[X],B=`${v}.${X}`,le=ne(u,B);(m.array.has(v)||Qe(W)||le&&!le._f)&&!ur(W)?Te(B,W,R):Re(B,W,R)}},xe=(v,P,R={})=>{const X=ne(u,v),W=m.array.has(v),B=$t(P);Oe(d,v,B),W?(E.array.next({name:v,values:{...d}}),(_.isDirty||_.dirtyFields)&&R.shouldDirty&&E.state.next({name:v,dirtyFields:Ii(c,d),isDirty:ue(v,B)})):X&&!X._f&&!gt(B)?Te(v,B,R):Re(v,B,R),Lp(v,m)&&E.state.next({...o}),E.values.next({name:h.mount?v:void 0,values:{...d}})},H=async v=>{h.mount=!0;const P=v.target;let R=P.name,X=!0;const W=ne(u,R),B=()=>P.type?Xs(W._f):t0(v),le=me=>{X=Number.isNaN(me)||ur(me)&&isNaN(me.getTime())||Hn(me,ne(d,R,me))};if(W){let me,We;const Be=B(),Pt=v.type===Dp.BLUR||v.type===Dp.FOCUS_OUT,Yi=!g0(W._f)&&!l.resolver&&!ne(o.errors,R)&&!W._f.deps||x0(Pt,ne(o.touchedFields,R),o.isSubmitted,A,F),dn=Lp(R,m,Pt);Oe(d,R,Be),Pt?(W._f.onBlur&&W._f.onBlur(v),x&&x(0)):W._f.onChange&&W._f.onChange(v);const pn=oe(R,Be,Pt,!1),$l=!Et(pn)||dn;if(!Pt&&E.values.next({name:R,type:v.type,values:{...d}}),Yi)return _.isValid&&(l.mode==="onBlur"&&Pt?O():Pt||O()),$l&&E.state.next({name:R,...dn?{}:pn});if(!Pt&&dn&&E.state.next({...o}),l.resolver){const{errors:Yr}=await Se([R]);if(le(Be),X){const Ki=Bp(o.errors,u,R),Gi=Bp(Yr,u,Ki.name||R);me=Gi.error,R=Gi.name,We=Et(Yr)}}else L([R],!0),me=(await Up(W,m.disabled,d,T,l.shouldUseNativeValidation))[R],L([R]),le(Be),X&&(me?We=!1:_.isValid&&(We=await _e(u,!0)));X&&(W._f.deps&&Q(W._f.deps),J(R,We,me,pn))}},ee=(v,P)=>{if(ne(o.errors,P)&&v.focus)return v.focus(),1},Q=async(v,P={})=>{let R,X;const W=yl(v);if(l.resolver){const B=await Ee(Ke(v)?v:W);R=Et(B),X=v?!W.some(le=>ne(B,le)):R}else v?(X=(await Promise.all(W.map(async B=>{const le=ne(u,B);return await _e(le&&le._f?{[B]:le}:le)}))).every(Boolean),!(!X&&!o.isValid)&&O()):X=R=await _e(u);return E.state.next({...!sn(v)||_.isValid&&R!==o.isValid?{}:{name:v},...l.resolver||!v?{isValid:R}:{},errors:o.errors}),P.shouldFocus&&!X&&Mi(u,ee,v?W:m.mount),X},S=v=>{const P={...h.mount?d:c};return Ke(v)?P:sn(v)?ne(P,v):v.map(R=>ne(P,R))},D=(v,P)=>({invalid:!!ne((P||o).errors,v),isDirty:!!ne((P||o).dirtyFields,v),error:ne((P||o).errors,v),isValidating:!!ne(o.validatingFields,v),isTouched:!!ne((P||o).touchedFields,v)}),pe=v=>{v&&yl(v).forEach(P=>tt(o.errors,P)),E.state.next({errors:v?o.errors:{}})},fe=(v,P,R)=>{const X=(ne(u,v,{_f:{}})._f||{}).ref,W=ne(o.errors,v)||{},{ref:B,message:le,type:me,...We}=W;Oe(o.errors,v,{...We,...P,ref:X}),E.state.next({name:v,errors:o.errors,isValid:!1}),R&&R.shouldFocus&&X&&X.focus&&X.focus()},ye=(v,P)=>ln(v)?E.values.subscribe({next:R=>v(de(void 0,P),R)}):de(v,P,!0),he=(v,P={})=>{for(const R of v?yl(v):m.mount)m.mount.delete(R),m.array.delete(R),P.keepValue||(tt(u,R),tt(d,R)),!P.keepError&&tt(o.errors,R),!P.keepDirty&&tt(o.dirtyFields,R),!P.keepTouched&&tt(o.touchedFields,R),!P.keepIsValidating&&tt(o.validatingFields,R),!l.shouldUnregister&&!P.keepDefaultValue&&tt(c,R);E.values.next({values:{...d}}),E.state.next({...o,...P.keepDirty?{isDirty:ue()}:{}}),!P.keepIsValid&&O()},je=({disabled:v,name:P,field:R,fields:X})=>{(rn(v)&&h.mount||v||m.disabled.has(P))&&(v?m.disabled.add(P):m.disabled.delete(P),oe(P,Xs(R?R._f:ne(X,P)._f),!1,!1,!0))},ve=(v,P={})=>{let R=ne(u,v);const X=rn(P.disabled)||rn(l.disabled);return Oe(u,v,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:v}},name:v,mount:!0,...P}}),m.mount.add(v),R?je({field:R,disabled:rn(P.disabled)?P.disabled:l.disabled,name:v}):G(v,!0,P.value),{...X?{disabled:P.disabled||l.disabled}:{},...l.progressive?{required:!!P.required,min:Li(P.min),max:Li(P.max),minLength:Li(P.minLength),maxLength:Li(P.maxLength),pattern:Li(P.pattern)}:{},name:v,onChange:H,onBlur:H,ref:W=>{if(W){ve(v,P),R=ne(u,v);const B=Ke(W.value)&&W.querySelectorAll&&W.querySelectorAll("input,select,textarea")[0]||W,le=f0(B),me=R._f.refs||[];if(le?me.find(We=>We===B):B===R._f.ref)return;Oe(u,v,{_f:{...R._f,...le?{refs:[...me.filter(Ws),B,...Array.isArray(ne(c,v))?[{}]:[]],ref:{type:B.type,name:v}}:{ref:B}}}),G(v,!1,void 0,B)}else R=ne(u,v,{}),R._f&&(R._f.mount=!1),(l.shouldUnregister||P.shouldUnregister)&&!(r0(m.array,v)&&h.action)&&m.unMount.add(v)}}},Ce=()=>l.shouldFocusError&&Mi(u,ee,m.mount),Ze=v=>{rn(v)&&(E.state.next({disabled:v}),Mi(u,(P,R)=>{const X=ne(u,R);X&&(P.disabled=X._f.disabled||v,Array.isArray(X._f.refs)&&X._f.refs.forEach(W=>{W.disabled=X._f.disabled||v}))},0,!1))},Tt=(v,P)=>async R=>{let X;R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let W=$t(d);if(m.disabled.size)for(const B of m.disabled)Oe(W,B,void 0);if(E.state.next({isSubmitting:!0}),l.resolver){const{errors:B,values:le}=await Se();o.errors=B,W=le}else await _e(u);if(tt(o.errors,"root"),Et(o.errors)){E.state.next({errors:{}});try{await v(W,R)}catch(B){X=B}}else P&&await P({...o.errors},R),Ce(),setTimeout(Ce);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Et(o.errors)&&!X,submitCount:o.submitCount+1,errors:o.errors}),X)throw X},_t=(v,P={})=>{ne(u,v)&&(Ke(P.defaultValue)?xe(v,$t(ne(c,v))):(xe(v,P.defaultValue),Oe(c,v,$t(P.defaultValue))),P.keepTouched||tt(o.touchedFields,v),P.keepDirty||(tt(o.dirtyFields,v),o.isDirty=P.defaultValue?ue(v,$t(ne(c,v))):ue()),P.keepError||(tt(o.errors,v),_.isValid&&O()),E.state.next({...o}))},qn=(v,P={})=>{const R=v?$t(v):c,X=$t(R),W=Et(v),B=W?c:X;if(P.keepDefaultValues||(c=R),!P.keepValues){if(P.keepDirtyValues){const le=new Set([...m.mount,...Object.keys(Ii(c,d))]);for(const me of Array.from(le))ne(o.dirtyFields,me)?Oe(B,me,ne(d,me)):xe(me,ne(B,me))}else{if(xu&&Ke(v))for(const le of m.mount){const me=ne(u,le);if(me&&me._f){const We=Array.isArray(me._f.refs)?me._f.refs[0]:me._f.ref;if(_l(We)){const Be=We.closest("form");if(Be){Be.reset();break}}}}u={}}d=l.shouldUnregister?P.keepDefaultValues?$t(c):{}:$t(B),E.array.next({values:{...B}}),E.values.next({values:{...B}})}m={mount:P.keepDirtyValues?m.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!_.isValid||!!P.keepIsValid||!!P.keepDirtyValues,h.watch=!!l.shouldUnregister,E.state.next({submitCount:P.keepSubmitCount?o.submitCount:0,isDirty:W?!1:P.keepDirty?o.isDirty:!!(P.keepDefaultValues&&!Hn(v,c)),isSubmitted:P.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:W?{}:P.keepDirtyValues?P.keepDefaultValues&&d?Ii(c,d):o.dirtyFields:P.keepDefaultValues&&v?Ii(c,v):P.keepDirty?o.dirtyFields:{},touchedFields:P.keepTouched?o.touchedFields:{},errors:P.keepErrors?o.errors:{},isSubmitSuccessful:P.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1})},hr=(v,P)=>qn(ln(v)?v(d):v,P);return{control:{register:ve,unregister:he,getFieldState:D,handleSubmit:Tt,setError:fe,_executeSchema:Se,_getWatch:de,_getDirty:ue,_updateValid:O,_removeUnmounted:lt,_updateFieldArray:b,_updateDisabledField:je,_getFieldArray:Pe,_reset:qn,_resetDefaultValues:()=>ln(l.defaultValues)&&l.defaultValues().then(v=>{hr(v,l.resetOptions),E.state.next({isLoading:!1})}),_updateFormState:v=>{o={...o,...v}},_disableForm:Ze,_subjects:E,_proxyFormState:_,_setErrors:K,get _fields(){return u},get _formValues(){return d},get _state(){return h},set _state(v){h=v},get _defaultValues(){return c},get _names(){return m},set _names(v){m=v},get _formState(){return o},set _formState(v){o=v},get _options(){return l},set _options(v){l={...l,...v}}},trigger:Q,register:ve,handleSubmit:Tt,watch:ye,setValue:xe,getValues:S,reset:hr,resetField:_t,clearErrors:pe,unregister:he,setError:fe,setFocus:(v,P={})=>{const R=ne(u,v),X=R&&R._f;if(X){const W=X.refs?X.refs[0]:X.ref;W.focus&&(W.focus(),P.shouldSelect&&ln(W.select)&&W.select())}},getFieldState:D}}function k0(r={}){const l=ut.useRef(void 0),o=ut.useRef(void 0),[u,c]=ut.useState({isDirty:!1,isValidating:!1,isLoading:ln(r.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1,defaultValues:ln(r.defaultValues)?void 0:r.defaultValues});l.current||(l.current={...w0(r),formState:u});const d=l.current.control;return d._options=r,a0({subject:d._subjects.state,next:h=>{l0(h,d._proxyFormState,d._updateFormState)&&c({...d._formState})}}),ut.useEffect(()=>d._disableForm(r.disabled),[d,r.disabled]),ut.useEffect(()=>{if(d._proxyFormState.isDirty){const h=d._getDirty();h!==u.isDirty&&d._subjects.state.next({isDirty:h})}},[d,u.isDirty]),ut.useEffect(()=>{r.values&&!Hn(r.values,o.current)?(d._reset(r.values,d._options.resetOptions),o.current=r.values,c(h=>({...h}))):d._resetDefaultValues()},[r.values,d]),ut.useEffect(()=>{r.errors&&d._setErrors(r.errors)},[r.errors,d]),ut.useEffect(()=>{d._state.mount||(d._updateValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),ut.useEffect(()=>{r.shouldUnregister&&d._subjects.values.next({values:d._getWatch()})},[r.shouldUnregister,d]),l.current.formState=o0(u,d),l.current}function S0(){const{register:r,handleSubmit:l,formState:{errors:o},setValue:u}=k0({defaultValues:{payment:"e-money"},mode:"onChange"}),c=E=>console.log(E),[d,h]=z.useState("e-Money"),m=xt(),[x,k]=z.useState(!1);x?document.body.style.overflow="hidden":document.body.style.overflow="auto",z.useEffect(()=>{u("payment",d)},[u,d]);const _=E=>{E.target===null||h(E.target.value)};return f.jsxs(f.Fragment,{children:[x?f.jsx(j0,{}):null,f.jsxs(_0,{children:[f.jsxs(P0,{children:[f.jsx("p",{onClick:()=>{m.setCheckOut(!1)},className:"backButton",children:"Go back"}),f.jsxs("form",{action:"",onSubmit:l(c),children:[f.jsx("h3",{children:"BILLING DETAILS"}),f.jsxs("div",{className:"formContainer",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",children:"Name"}),f.jsx("input",{...r("name",{required:!0}),type:"text",placeholder:"Name"})]}),f.jsxs("div",{children:[f.jsxs("label",{htmlFor:"email",children:[f.jsx("span",{children:"Email"})," ",f.jsx("span",{style:{color:"red",display:o.email?"inline":"none"},children:"Invalid Pattern"})]}),f.jsx("input",{...r("email",{required:!0,pattern:{value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"invalid Format of Email"}}),type:"text",placeholder:"Email"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"number",children:"Mobile number"}),f.jsx("input",{...r("number",{required:!0}),type:"text",placeholder:"Number"})]})]}),f.jsx("h3",{children:"SHIPPING INFO"}),f.jsxs("div",{className:"formContainer",children:[f.jsxs("div",{style:{gridColumn:"1/3",width:"97%"},children:[f.jsx("label",{htmlFor:"address",children:"ADDRESS"}),f.jsx("input",{...r("address",{required:!0}),type:"text",placeholder:"address",style:{width:"100%",display:"block"}})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"ZipCode",children:"ZIP CODE"}),f.jsx("input",{...r("ZipCode",{required:!0}),type:"text",placeholder:"10001"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"city",children:"CITY"}),f.jsx("input",{...r("city",{required:!0}),type:"text",placeholder:"New York"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"country",children:"COUNTRY"}),f.jsx("input",{...r("country",{required:!0}),type:"text",placeholder:"United states"})]})]}),f.jsx("h3",{children:"PAYMENT DETAILS"}),f.jsxs("div",{className:"payments",children:[f.jsx("div",{children:f.jsx("p",{children:"Payment method"})}),f.jsxs("div",{children:[f.jsx("input",{...r("payment",{required:!0}),type:"radio",id:"emoney",value:"e-Money",checked:d==="e-Money",onChange:E=>_(E)}),f.jsx("label",{htmlFor:"emoney",className:"payment",children:"e-Money"}),f.jsx("br",{}),f.jsx("input",{...r("payment",{required:!0}),type:"radio",id:"cash",value:"Cash on delivery",checked:d==="Cash on delivery",onChange:E=>_(E)}),f.jsx("label",{htmlFor:"cash",className:"payment",children:"Cash on delivery"})]})]}),d==="e-Money"?f.jsxs("div",{className:"emoneyNumbers",children:[f.jsxs("div",{children:[f.jsx("p",{children:"e-Money Number"}),f.jsx("input",{...r("moneyNumber",{pattern:{value:/^[0-9]+$/,message:"Enter only numbers"}}),type:"text",maxLength:9,style:{borderColor:o.moneyNumber?"red":"#CFCFCF"}})]}),f.jsxs("div",{children:[f.jsx("p",{children:"e-Money PIN"}),f.jsx("input",{...r("moneyPIN",{pattern:{value:/^[0-9]+$/,message:"Enter only numbers"}}),type:"text",maxLength:4,style:{borderColor:o.moneyPIN?"red":"#CFCFCF"}})]})]}):null]})]}),f.jsx(C0,{setModal:k})]})]})}function C0({setModal:r}){var d,h;const l=xt(),o=(d=l.cartContent)==null?void 0:d.map(m=>m.device.price*m.quantity).reduce((m,x)=>m+x),u=50,c=()=>{r(!0)};return f.jsxs(N0,{children:[f.jsx("h3",{children:"SUMMARY"}),f.jsx("div",{children:(h=l.cartContent)==null?void 0:h.map(m=>f.jsx(E0,{item:m}))}),f.jsxs("div",{style:{width:"100%",marginTop:"80px"},children:[f.jsxs(cl,{children:[f.jsx("span",{children:"TOTAL"}),f.jsxs("span",{className:"paiments",children:["$ ",o]})]}),f.jsxs(cl,{children:[f.jsx("span",{children:"SHIPPING"}),f.jsxs("span",{className:"paiments",children:["$ ",u]})]}),f.jsxs(cl,{children:[f.jsx("span",{children:"VAT(INCLUDED)"}),f.jsxs("span",{className:"paiments",children:["$ ",o!==void 0?Math.round(o*15/100):null]})]}),f.jsxs(cl,{style:{marginTop:"40px"},children:[f.jsx("span",{children:"GRAND TOTAL"}),f.jsxs("span",{className:"paiments grand-total",children:["$ ",o!==void 0?o+u:null," "]})]})]}),f.jsx(pr,{className:"checkOutButton",onClick:()=>c(),children:f.jsx("a",{href:"#header",children:"CONTINUE & PAY"})})]})}function E0({item:r}){return f.jsxs("div",{className:"summary",children:[f.jsx("div",{children:f.jsx("img",{src:r.device.image.desktop,alt:"",style:{width:"64px",height:"64px"}})}),f.jsxs("div",{children:[f.jsx("p",{style:{fontWeight:600},children:Uf(r.device.name)}),f.jsxs("p",{style:{color:"rgba(0,0,0, 0.5)"},children:["$ ",r.device.price]})]}),f.jsx("div",{className:"quantity",children:f.jsxs("p",{style:{color:"rgba(0,0,0, 0.5)"},children:["x",r.quantity]})})]})}function Uf(r){return r.includes("Headphones")?r.replace(" Headphones",""):r.includes("Speakers")?r.replace(" Speaker",""):r.replace(" Wireless Earphones","")}function j0(){var l,o,u,c;const r=xt();return f.jsx(F0,{children:f.jsxs("div",{className:"order",children:[f.jsx("svg",{width:"64",height:"64",xmlns:"http://www.w3.org/2000/svg",children:f.jsxs("g",{fill:"none","fill-rule":"evenodd",children:[f.jsx("circle",{fill:"#D87D4A",cx:"32",cy:"32",r:"32"}),f.jsx("path",{stroke:"#FFF","stroke-width":"4",d:"m20.754 33.333 6.751 6.751 15.804-15.803"})]})}),f.jsx("p",{className:"thanx",children:"THANK YOU FOR YOUR ORDER"}),f.jsx("p",{className:"message",children:"You will receive an email confirmation shortly."}),f.jsxs("div",{className:"totalWrapper",children:[f.jsxs("div",{className:"products",children:[f.jsxs("div",{children:[f.jsx("img",{className:"checkoutImg",src:r.cartContent!==null?r.cartContent[0].device.image.desktop:void 0,alt:""}),f.jsxs("div",{children:[f.jsx("p",{className:"name",children:r.cartContent!==null?Uf(r.cartContent[0].device.name):""}),f.jsxs("p",{children:["$ ",r.cartContent!==null?r.cartContent[0].device.price:""]})]}),f.jsx("div",{className:"itemQuantity",children:f.jsxs("span",{children:["x",r.cartContent!==null?r.cartContent[0].quantity:""]})})]}),f.jsxs("p",{className:"other",children:["and ",((l=r.cartContent)==null?void 0:l.length)!==void 0?((o=r.cartContent)==null?void 0:o.length)-1:""," more item(s)"]})]}),f.jsxs("div",{className:"total",children:[f.jsx("p",{className:"grandtotal",children:"GRAND TOTAL"}),f.jsxs("p",{className:"amount",children:["$ ",((u=r.cartContent)==null?void 0:u.map(d=>d.device.price*d.quantity).reduce((d,h)=>d+h))!==void 0?((c=r.cartContent)==null?void 0:c.map(d=>d.device.price*d.quantity).reduce((d,h)=>d+h))+50:0]})]})]}),f.jsx(pr,{className:"homeButton",onClick:()=>{r.setProductSelected(!1),r.setCart(!1),r.setCheckOut(!1)},children:"BACK TO HOME"})]})})}const _0=ke.div`
  width: 1440px;
  height: auto;
  margin: auto;
  padding: 50px 165px;
  display: flex;
  color: #000;
  align-items: start;
  gap: 60px;
  position: relative;
  padding-top: 142px;

  @media (max-width: 1440px){
    width: 768px;
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
  }

  @media (max-width: 768px){
    width: 327px;
    height: auto;
    padding: 50px 0px;
  }
  `,P0=ke.div`
  width: 730px;
  color: #000;
  background-color: #fff;
  padding: 60px;
  border-radius: 15px;

  .backButton{
    position: absolute;
    top: 79px;
    left: 165px;  
    color: #00000080;
  }

  h3{
    margin: 40px 0px 20px;
  }


  .formContainer{
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px 40px; 
  }

  .formContainer > div{
    height: 90px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .formContainer > div > label{
    font-weight: 600;
  }
  
  .formContainer > div input {
    width: 285px;
  }

  h3{
    color: #D87D4A;
  }


  input[type="text"]{
    width: 309px;
    height: 56px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    background-color: #fff;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    line-height: 19.12px;
    letter-spacing: -0.25px;
    text-align: left;
    padding-left: 25px;
    color: #000;
  }

  input[type="text"]::placeholder{
    color: rgba(0,0,0, 0.5);
  }
  
  input:focus{
    outline: 2px solid #D87D4A;
  }
  
  input[type="text"]:focus::placeholder{
    color: transparent
  }

  input[type='radio']{
    display: none;
  }
.payments {
  width: 637px;
  display: flex;
  justify-content: space-between;
}

.payments p{
  font-size: 16px;
  font-weight: 700;
}

.payments label{
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  display: inline-flex;
  width: 309px;
  height: 56px;
  padding: 15px;
  margin-bottom: 15px;  
}

.payments label::before{
  content: "";
  width: 20px;
  height: 20px;
  border:  2px solid #cfcfcf;
  border-radius: 50%;
  margin-right: 15px;
}

.payments input[type="radio"]:checked + label:before{
  height: 13px;
  width: 13px;
  background-color: #D87D4A;
  border: 4px solid #fFf;
  border-radius: 50%;
  box-shadow: 2px 0px #CFCFCF, -2px 0px #CFCFCF, 0px -2px #CFCFCF, 0px 2px #CFCFCF;
}

label:hover{
  border: 2px solid #D87D4A;
}

input[type="radio"]:checked + label{
  border: 2px solid #D87D4A;
}

.emoneyNumbers {
  display: flex;
  gap: 20px;
}

.emoneyNumbers p {
  font-size: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 16.39px;
  letter-spacing: -0.2142857164144516px;
}

.emoneyNumbers input[type="text"]{
  width: 309px;
  height: 56px;
  border-radius: 10px;
  margin-top: 10px;
}

@media (max-width: 768px){
  width: 327px;
  height: 1378px;
  padding: 0 23px;
  
  input[type="text"]{
    width: 280px;
    height: 56px;
  }

  .formContainer{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: space-between;
  }

  .formContainer > div > label {
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: -0.2142857164144516px;
    text-align: left;
  }

  .payments{
    width: 285px;
    flex-direction: column;
  }

  .payments label{
    width: 280px;
  }

  .emoneyNumbers {
    flex-direction: column;
  }

  .emoneyNumbers input[type="text"] {  
    width: 280px;
  }
}
`,N0=ke.div`
  width: 350px;
  height: auto;
  background-color: #fff;
  color: #000;
  padding: 40px 30px 32px;
  border-radius: 5px;

.checkOutButton{
  width: 100%; 
  margin: 32px 0px 0px ;
  padding: 0px;
}

.summary{
    width: 90%;
    display: flex; 
    gap: 20px;
    margin-top:20px
  }

@media (max-width: 1440px){
    width: 730px;

    .summary{
      position: relative;
      width:100%;
      display: flex; 
      gap: 20px;
      margin-top:20px
    }
    
    .summary > .quantity {
      position: absolute;
      right: 33px;
    }
  }

@media (max-width: 768px){
    width: 327px;
    height: 612px;
    
    .summary > .quantity{
      right: 0;
    }

    .summary > p{
      font-family: Manrope;
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
      text-align: left;
    }
  }
`,cl=ke.p`
  display: flex;
  justify-content: space-between;

  span{
  font-family: Manrope;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: rgba(0,0,0, 0.5);
  margin-top: 10px;
  }

  .paiments{
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 24.59px;
  text-align: right;
  color: #000;

  }
  .grand{
  margin-top: 40px;
  }

  .grand-total {
  color: #D87D4A;
  }
`,F0=ke.div`
  position: absolute;
  top:97px;
  width: 1440px;
  left: calc((100% - 1440px) /2);
  height: 100vh;
  background-color: #00000050;
  z-index: 10;
  
  .order{
    width: 540px;
    min-height: 581px;  
    background-color: #FFFFFF;
    border-radius: 7px;
    position: absolute;
    left: calc((100% - 540px) /2);
    top: 125px;
    padding: 48px;
  }

  .thanx{
    font-family: Manrope;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.1428571939468384px;
    text-align: left;
    color: #000000;
    margin-top: 33px;
  }

  .message{
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-top: 24px;
  }

  .totalWrapper{
    width: 444px;
    min-height: 140px;
    display: flex;
    background-color: #F1F1F1;
    border-radius: 7px;
    margin-top: 33px;
    margin-bottom: 46px;
  }

  .products{
    width: 246px;
    height: 100%;
    padding: 24px;
  }

  .products > div {
    display: flex;
    gap: 10px;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
  }

  .total{
    border-radius:0px 7px 7px 0px;
    width: 198px;
    min-height: 140px;
    background-color: #000000;
    color: #FFFFFF;
  }

  .checkoutImg{
    width: 46px;
    height: 50px;
    display: block;
  }

  .other {
    width: 100%;
    padding-top: 12px;
    margin-top: 12px;
    border-top: 1px solid #00000025;
    text-align: center;
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: -0.2142857164144516px;
  }

  .grandtotal {
    width: 100px;
    margin: auto;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-top: 41px;
    color: #FFFFFF75;
  }
  
  .amount {
    width: 100px;
    margin: auto;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.59px;
    text-align: left;
    margin-top: 8px;
  }

  .homeButton{
    margin: 0px;
    width:444px;
  }

  @media (max-width: 1440px){
    width: 730px;
    left: calc((100% - 730px)/2 )
  }

  @media (max-width: 768px){
  width: 375px;
  left: 764px;
  
  .order{
    width: 327px;
    height: 600px;
    left: 24px;
    padding: 32px;

  }

  .thanx{
    margin-top: 23px;
    font-family: Manrope;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.8571428656578064px;
    text-align: left;
  }

  .message{
    margin-top: 16px;
  }

  .totalWrapper {
    width: 263px;
    height: 232px;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 0;
    overflow: hidden;
    gap: px;
  }

  .products{
    width: 100%;
    height: 140px;
  }

  .products > p {
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
  }

  .products > .other{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: -0.2142857164144516px;
    text-align: center;

  }

  .total {
    width: 263px;
    min-height: 92px;
    border-radius: 0px 0px 8px 8px;
    opacity: 0px;
  }

  .grandtotal{
    margin: 15px 0 0 24px
  }

  .amount{
    margin: 8px 0 0 24px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
  }

  .homeButton{
    margin: 30px 0; 
    width: 263px;
  }

  .itemQuantity{
    margin-left: auto;
  }

  .name{
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
    color: #000000;
  }
  }
`,qs=qy;function z0(){const[r,l]=z.useState(!1),[o,u]=z.useState(0),[c,d]=z.useState(!1),[h,m]=z.useState([{device:qs[0],quantity:3},{device:qs[1],quantity:1}]),[x,k]=z.useState(!1),_={devices:qs,selected:r,productId:o,cart:c,cartContent:h,checkOut:x,setProductSelected:l,setProductId:u,setCart:d,setCartContent:m,setCheckOut:k};return f.jsx(f.Fragment,{children:f.jsx(Rf.Provider,{value:_,children:f.jsx(sx,{children:f.jsx(Og,{children:f.jsxs(ar,{path:"/",element:f.jsx(e0,{}),children:[f.jsx(ar,{index:!0,element:f.jsx(wy,{})}),f.jsx(ar,{path:"headphones",element:f.jsx(Hy,{})}),f.jsx(ar,{path:"earphones",element:f.jsx(Xy,{})}),f.jsx(ar,{path:"speakers",element:f.jsx(Wy,{})}),f.jsx(ar,{path:"checkout",element:f.jsx(S0,{})})]})})})})})}Hm.createRoot(document.getElementById("root")).render(f.jsx(z.StrictMode,{children:f.jsx(z0,{})}));
