(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xm={exports:{}},Ol={},qm={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),o_=Symbol.for("react.portal"),l_=Symbol.for("react.fragment"),c_=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),f_=Symbol.for("react.context"),h_=Symbol.for("react.forward_ref"),p_=Symbol.for("react.suspense"),m_=Symbol.for("react.memo"),x_=Symbol.for("react.lazy"),Nh=Symbol.iterator;function g_(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ym=Object.assign,Km={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Km,this.updater=n||$m}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zm(){}Zm.prototype=Ps.prototype;function of(t,e,n){this.props=t,this.context=e,this.refs=Km,this.updater=n||$m}var lf=of.prototype=new Zm;lf.constructor=of;Ym(lf,Ps.prototype);lf.isPureReactComponent=!0;var Rh=Array.isArray,Qm=Object.prototype.hasOwnProperty,cf={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function ex(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qm.call(e,i)&&!Jm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:cf.current}}function v_(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function __(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ph=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?__(""+t.key):e.toString(36)}function Bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case o_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gc(o,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Ph,"$&/")+"/"),Bo(r,e,n,"",function(d){return d})):r!=null&&(df(r)&&(r=v_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ph,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rh(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+gc(s,l);o+=Bo(s,e,n,c,r)}else if(c=g_(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+gc(s,l++),o+=Bo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return Bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function y_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ho={transition:null},b_={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:cf};function tx(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Ps;Be.Fragment=l_;Be.Profiler=d_;Be.PureComponent=of;Be.StrictMode=c_;Be.Suspense=p_;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_;Be.act=tx;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ym({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Qm.call(e,c)&&!Jm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:f_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:u_,_context:t},t.Consumer=t};Be.createElement=ex;Be.createFactory=function(t){var e=ex.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:h_,render:t}};Be.isValidElement=df;Be.lazy=function(t){return{$$typeof:x_,_payload:{_status:-1,_result:t},_init:y_}};Be.memo=function(t,e){return{$$typeof:m_,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};Be.unstable_act=tx;Be.useCallback=function(t,e){return qt.current.useCallback(t,e)};Be.useContext=function(t){return qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return qt.current.useEffect(t,e)};Be.useId=function(){return qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Be.useRef=function(t){return qt.current.useRef(t)};Be.useState=function(t){return qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return qt.current.useTransition()};Be.version="18.3.1";qm.exports=Be;var $=qm.exports;const S_=a_($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_=$,w_=Symbol.for("react.element"),E_=Symbol.for("react.fragment"),T_=Object.prototype.hasOwnProperty,C_=M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A_={key:!0,ref:!0,__self:!0,__source:!0};function nx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)T_.call(e,i)&&!A_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:w_,type:t,key:s,ref:o,props:r,_owner:C_.current}}Ol.Fragment=E_;Ol.jsx=nx;Ol.jsxs=nx;Xm.exports=Ol;var a=Xm.exports,wd={},ix={exports:{}},mn={},rx={exports:{}},sx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Q){var J=L.length;L.push(Q);e:for(;0<J;){var ae=J-1>>>1,Te=L[ae];if(0<r(Te,Q))L[ae]=Q,L[J]=Te,J=ae;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Q=L[0],J=L.pop();if(J!==Q){L[0]=J;e:for(var ae=0,Te=L.length,He=Te>>>1;ae<He;){var q=2*(ae+1)-1,ne=L[q],de=q+1,le=L[de];if(0>r(ne,J))de<Te&&0>r(le,ne)?(L[ae]=le,L[de]=J,ae=de):(L[ae]=ne,L[q]=J,ae=q);else if(de<Te&&0>r(le,J))L[ae]=le,L[de]=J,ae=de;else break e}}return Q}function r(L,Q){var J=L.sortIndex-Q.sortIndex;return J!==0?J:L.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,p=null,h=3,m=!1,g=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var Q=n(d);Q!==null;){if(Q.callback===null)i(d);else if(Q.startTime<=L)i(d),Q.sortIndex=Q.expirationTime,e(c,Q);else break;Q=n(d)}}function v(L){if(b=!1,y(L),!g)if(n(c)!==null)g=!0,V(N);else{var Q=n(d);Q!==null&&Z(v,Q.startTime-L)}}function N(L,Q){g=!1,b&&(b=!1,u(A),A=-1),m=!0;var J=h;try{for(y(Q),p=n(c);p!==null&&(!(p.expirationTime>Q)||L&&!E());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,h=p.priorityLevel;var Te=ae(p.expirationTime<=Q);Q=t.unstable_now(),typeof Te=="function"?p.callback=Te:p===n(c)&&i(c),y(Q)}else i(c);p=n(c)}if(p!==null)var He=!0;else{var q=n(d);q!==null&&Z(v,q.startTime-Q),He=!1}return He}finally{p=null,h=J,m=!1}}var C=!1,w=null,A=-1,F=5,S=-1;function E(){return!(t.unstable_now()-S<F)}function O(){if(w!==null){var L=t.unstable_now();S=L;var Q=!0;try{Q=w(!0,L)}finally{Q?z():(C=!1,w=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,G=X.port2;X.port1.onmessage=O,z=function(){G.postMessage(null)}}else z=function(){x(O,0)};function V(L){w=L,C||(C=!0,z())}function Z(L,Q){A=x(function(){L(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,V(N))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var J=h;h=Q;try{return L()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=h;h=L;try{return Q()}finally{h=J}},t.unstable_scheduleCallback=function(L,Q,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,L){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,L={id:f++,callback:Q,priorityLevel:L,startTime:J,expirationTime:Te,sortIndex:-1},J>ae?(L.sortIndex=J,e(d,L),n(c)===null&&L===n(d)&&(b?(u(A),A=-1):b=!0,Z(v,J-ae))):(L.sortIndex=Te,e(c,L),g||m||(g=!0,V(N))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var Q=h;return function(){var J=h;h=Q;try{return L.apply(this,arguments)}finally{h=J}}}})(sx);rx.exports=sx;var N_=rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=$,pn=N_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ax=new Set,ma={};function Rr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ma[t]=e,t=0;t<e.length;t++)ax.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,P_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Dh={};function L_(t){return Ed.call(Dh,t)?!0:Ed.call(Lh,t)?!1:P_.test(t)?Dh[t]=!0:(Lh[t]=!0,!1)}function D_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I_(t,e,n,i){if(e===null||typeof e>"u"||D_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,ff);kt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,ff);kt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,ff);kt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I_(e,n,r,i)&&(n=null),i||r===null?L_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),ox=Symbol.for("react.provider"),lx=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),cx=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,vc;function ta(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function yc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function U_(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case $r:return"Portal";case Td:return"Profiler";case pf:return"StrictMode";case Cd:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lx:return(t.displayName||"Context")+".Consumer";case ox:return(t._context.displayName||"Context")+".Provider";case mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:Nd(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return Nd(t(e))}catch{}}return null}function k_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nd(e);case 8:return e===pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F_(t){var e=dx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=F_(t))}function ux(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=dx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rd(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fx(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Pd(t,e){fx(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Dd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(na(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function hx(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function px(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?px(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,mx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j_=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){j_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function xx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function gx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var O_=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(O_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,ls=null,cs=null;function Oh(t){if(t=ja(t)){if(typeof jd!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Gl(e),jd(t.stateNode,t.type,e))}}function vx(t){ls?cs?cs.push(t):cs=[t]:ls=t}function _x(){if(ls){var t=ls,e=cs;if(cs=ls=null,Oh(t),e)for(t=0;t<e.length;t++)Oh(e[t])}}function yx(t,e){return t(e)}function bx(){}var bc=!1;function Sx(t,e,n){if(bc)return t(e,n);bc=!0;try{return yx(t,e,n)}finally{bc=!1,(ls!==null||cs!==null)&&(bx(),_x())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Od=!1;if(hi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Od=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Od=!1}function z_(t,e,n,i,r,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var oa=!1,ll=null,cl=!1,zd=null,B_={onError:function(t){oa=!0,ll=t}};function H_(t,e,n,i,r,s,o,l,c){oa=!1,ll=null,z_.apply(B_,arguments)}function V_(t,e,n,i,r,s,o,l,c){if(H_.apply(this,arguments),oa){if(oa){var d=ll;oa=!1,ll=null}else throw Error(ie(198));cl||(cl=!0,zd=d)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zh(t){if(Pr(t)!==t)throw Error(ie(188))}function G_(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zh(r),t;if(s===i)return zh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function wx(t){return t=G_(t),t!==null?Ex(t):null}function Ex(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ex(t);if(e!==null)return e;t=t.sibling}return null}var Tx=pn.unstable_scheduleCallback,Bh=pn.unstable_cancelCallback,W_=pn.unstable_shouldYield,X_=pn.unstable_requestPaint,_t=pn.unstable_now,q_=pn.unstable_getCurrentPriorityLevel,vf=pn.unstable_ImmediatePriority,Cx=pn.unstable_UserBlockingPriority,dl=pn.unstable_NormalPriority,$_=pn.unstable_LowPriority,Ax=pn.unstable_IdlePriority,zl=null,Kn=null;function Y_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Q_,K_=Math.log,Z_=Math.LN2;function Q_(t){return t>>>=0,t===0?32:31-(K_(t)/Z_|0)|0}var Qa=64,Ja=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=ia(l):(s&=o,s!==0&&(i=ia(s)))}else o=n&~r,o!==0?i=ia(o):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function J_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ey(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),l=1<<o,c=r[o];c===-1?(!(l&n)||l&i)&&(r[o]=J_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nx(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function _f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Rx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Px,yf,Lx,Dx,Ix,Hd=!1,eo=[],ki=null,Fi=null,ji=null,va=new Map,_a=new Map,Pi=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iy(t,e,n,i,r){switch(e){case"focusin":return ki=Hs(ki,t,e,n,i,r),!0;case"dragenter":return Fi=Hs(Fi,t,e,n,i,r),!0;case"mouseover":return ji=Hs(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Hs(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Hs(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function Ux(t){var e=mr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mx(n),e!==null){t.blockedOn=e,Ix(t.priority,function(){Lx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fd=i,n.target.dispatchEvent(i),Fd=null}else return e=ja(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Vh(t,e,n){Vo(t)&&n.delete(e)}function ry(){Hd=!1,ki!==null&&Vo(ki)&&(ki=null),Fi!==null&&Vo(Fi)&&(Fi=null),ji!==null&&Vo(ji)&&(ji=null),va.forEach(Vh),_a.forEach(Vh)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,ry)))}function ya(t){function e(r){return Vs(r,t)}if(0<eo.length){Vs(eo[0],t);for(var n=1;n<eo.length;n++){var i=eo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Vs(ki,t),Fi!==null&&Vs(Fi,t),ji!==null&&Vs(ji,t),va.forEach(e),_a.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Ux(n),n.blockedOn===null&&Pi.shift()}var ds=_i.ReactCurrentBatchConfig,fl=!0;function sy(t,e,n,i){var r=nt,s=ds.transition;ds.transition=null;try{nt=1,bf(t,e,n,i)}finally{nt=r,ds.transition=s}}function ay(t,e,n,i){var r=nt,s=ds.transition;ds.transition=null;try{nt=4,bf(t,e,n,i)}finally{nt=r,ds.transition=s}}function bf(t,e,n,i){if(fl){var r=Vd(t,e,n,i);if(r===null)Lc(t,e,i,hl,n),Hh(t,i);else if(iy(r,t,e,n,i))i.stopPropagation();else if(Hh(t,i),e&4&&-1<ny.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&Px(s),s=Vd(t,e,n,i),s===null&&Lc(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var hl=null;function Vd(t,e,n,i){if(hl=null,t=gf(i),t=mr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function kx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q_()){case vf:return 1;case Cx:return 4;case dl:case $_:return 16;case Ax:return 536870912;default:return 16}default:return 16}}var Ii=null,Sf=null,Go=null;function Fx(){if(Go)return Go;var t,e=Sf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Go=r.slice(t,1<i?1-i:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function Gh(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:Gh,this.isPropagationStopped=Gh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=xn(Ls),Fa=pt({},Ls,{view:0,detail:0}),oy=xn(Fa),Mc,wc,Gs,Bl=pt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(Mc=t.screenX-Gs.screenX,wc=t.screenY-Gs.screenY):wc=Mc=0,Gs=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),Wh=xn(Bl),ly=pt({},Bl,{dataTransfer:0}),cy=xn(ly),dy=pt({},Fa,{relatedTarget:0}),Ec=xn(dy),uy=pt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=xn(uy),hy=pt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=xn(hy),my=pt({},Ls,{data:0}),Xh=xn(my),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vy[t])?!!e[t]:!1}function wf(){return _y}var yy=pt({},Fa,{key:function(t){if(t.key){var e=xy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),by=xn(yy),Sy=pt({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=xn(Sy),My=pt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),wy=xn(My),Ey=pt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=xn(Ey),Cy=pt({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=xn(Cy),Ny=[9,13,27,32],Ef=hi&&"CompositionEvent"in window,la=null;hi&&"documentMode"in document&&(la=document.documentMode);var Ry=hi&&"TextEvent"in window&&!la,jx=hi&&(!Ef||la&&8<la&&11>=la),$h=" ",Yh=!1;function Ox(t,e){switch(t){case"keyup":return Ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Py(t,e){switch(t){case"compositionend":return zx(e);case"keypress":return e.which!==32?null:(Yh=!0,$h);case"textInput":return t=e.data,t===$h&&Yh?null:t;default:return null}}function Ly(t,e){if(Kr)return t==="compositionend"||!Ef&&Ox(t,e)?(t=Fx(),Go=Sf=Ii=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jx&&e.locale!=="ko"?null:e.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dy[t.type]:e==="textarea"}function Bx(t,e,n,i){vx(i),e=pl(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ca=null,ba=null;function Iy(t){Qx(t,0)}function Hl(t){var e=Jr(t);if(ux(e))return t}function Uy(t,e){if(t==="change")return e}var Hx=!1;if(hi){var Tc;if(hi){var Cc="oninput"in document;if(!Cc){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Cc=typeof Zh.oninput=="function"}Tc=Cc}else Tc=!1;Hx=Tc&&(!document.documentMode||9<document.documentMode)}function Qh(){ca&&(ca.detachEvent("onpropertychange",Vx),ba=ca=null)}function Vx(t){if(t.propertyName==="value"&&Hl(ba)){var e=[];Bx(e,ba,t,gf(t)),Sx(Iy,e)}}function ky(t,e,n){t==="focusin"?(Qh(),ca=e,ba=n,ca.attachEvent("onpropertychange",Vx)):t==="focusout"&&Qh()}function Fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(ba)}function jy(t,e){if(t==="click")return Hl(e)}function Oy(t,e){if(t==="input"||t==="change")return Hl(e)}function zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:zy;function Sa(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ed.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function Gx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wx(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function By(t){var e=Wx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gx(n.ownerDocument.documentElement,n)){if(i!==null&&Tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ep(n,s);var o=ep(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hy=hi&&"documentMode"in document&&11>=document.documentMode,Zr=null,Gd=null,da=null,Wd=!1;function tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wd||Zr==null||Zr!==ol(i)||(i=Zr,"selectionStart"in i&&Tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Sa(da,i)||(da=i,i=pl(Gd,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function no(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},Ac={},Xx={};hi&&(Xx=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Vl(t){if(Ac[t])return Ac[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xx)return Ac[t]=e[n];return t}var qx=Vl("animationend"),$x=Vl("animationiteration"),Yx=Vl("animationstart"),Kx=Vl("transitionend"),Zx=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Zx.set(t,e),Rr(e,[t])}for(var Nc=0;Nc<np.length;Nc++){var Rc=np[Nc],Vy=Rc.toLowerCase(),Gy=Rc[0].toUpperCase()+Rc.slice(1);Zi(Vy,"on"+Gy)}Zi(qx,"onAnimationEnd");Zi($x,"onAnimationIteration");Zi(Yx,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Kx,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,V_(i,e,void 0,t),t.currentTarget=null}function Qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;ip(r,l,d),s=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;ip(r,l,d),s=c}}}if(cl)throw t=zd,cl=!1,zd=null,t}function ot(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var i=t+"__bubble";n.has(i)||(Jx(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),Jx(n,t,i,e)}var io="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[io]){t[io]=!0,ax.forEach(function(n){n!=="selectionchange"&&(Wy.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[io]||(e[io]=!0,Pc("selectionchange",!1,e))}}function Jx(t,e,n,i){switch(kx(e)){case 1:var r=sy;break;case 4:r=ay;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=mr(l),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}l=l.parentNode}}i=i.return}Sx(function(){var d=s,f=gf(n),p=[];e:{var h=Zx.get(t);if(h!==void 0){var m=Mf,g=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":m=by;break;case"focusin":g="focus",m=Ec;break;case"focusout":g="blur",m=Ec;break;case"beforeblur":case"afterblur":m=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=wy;break;case qx:case $x:case Yx:m=fy;break;case Kx:m=Ty;break;case"scroll":m=oy;break;case"wheel":m=Ay;break;case"copy":case"cut":case"paste":m=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qh}var b=(e&4)!==0,x=!b&&t==="scroll",u=b?h!==null?h+"Capture":null:h;b=[];for(var _=d,y;_!==null;){y=_;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,u!==null&&(v=ga(_,u),v!=null&&b.push(wa(_,v,y)))),x)break;_=_.return}0<b.length&&(h=new m(h,g,null,n,f),p.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Fd&&(g=n.relatedTarget||n.fromElement)&&(mr(g)||g[pi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=d,g=g?mr(g):null,g!==null&&(x=Pr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=d),m!==g)){if(b=Wh,v="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=qh,v="onPointerLeave",u="onPointerEnter",_="pointer"),x=m==null?h:Jr(m),y=g==null?h:Jr(g),h=new b(v,_+"leave",m,n,f),h.target=x,h.relatedTarget=y,v=null,mr(f)===d&&(b=new b(u,_+"enter",g,n,f),b.target=y,b.relatedTarget=x,v=b),x=v,m&&g)t:{for(b=m,u=g,_=0,y=b;y;y=Dr(y))_++;for(y=0,v=u;v;v=Dr(v))y++;for(;0<_-y;)b=Dr(b),_--;for(;0<y-_;)u=Dr(u),y--;for(;_--;){if(b===u||u!==null&&b===u.alternate)break t;b=Dr(b),u=Dr(u)}b=null}else b=null;m!==null&&rp(p,h,m,b,!1),g!==null&&x!==null&&rp(p,x,g,b,!0)}}e:{if(h=d?Jr(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var N=Uy;else if(Kh(h))if(Hx)N=Oy;else{N=Fy;var C=ky}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=jy);if(N&&(N=N(t,d))){Bx(p,N,n,f);break e}C&&C(t,h,d),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Ld(h,"number",h.value)}switch(C=d?Jr(d):window,t){case"focusin":(Kh(C)||C.contentEditable==="true")&&(Zr=C,Gd=d,da=null);break;case"focusout":da=Gd=Zr=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,tp(p,n,f);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":tp(p,n,f)}var w;if(Ef)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Kr?Ox(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(jx&&n.locale!=="ko"&&(Kr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Kr&&(w=Fx()):(Ii=f,Sf="value"in Ii?Ii.value:Ii.textContent,Kr=!0)),C=pl(d,A),0<C.length&&(A=new Xh(A,t,null,n,f),p.push({event:A,listeners:C}),w?A.data=w:(w=zx(n),w!==null&&(A.data=w)))),(w=Ry?Py(t,n):Ly(t,n))&&(d=pl(d,"onBeforeInput"),0<d.length&&(f=new Xh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=w))}Qx(p,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ga(t,n),s!=null&&i.unshift(wa(t,s,r)),s=ga(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=ga(n,s),c!=null&&o.unshift(wa(n,c,l))):r||(c=ga(n,s),c!=null&&o.push(wa(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xy=/\r\n?/g,qy=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(Xy,`
`).replace(qy,"")}function ro(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(ie(425))}function ml(){}var Xd=null,qd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(t){return ap.resolve(null).then(t).catch(Ky)}:Yd;function Ky(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ds,Ea="__reactProps$"+Ds,pi="__reactContainer$"+Ds,Kd="__reactEvents$"+Ds,Zy="__reactListeners$"+Ds,Qy="__reactHandles$"+Ds;function mr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[$n])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[$n]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Gl(t){return t[Ea]||null}var Zd=[],es=-1;function Qi(t){return{current:t}}function ct(t){0>es||(t.current=Zd[es],Zd[es]=null,es--)}function st(t,e){es++,Zd[es]=t.current,t.current=e}var $i={},Ht=Qi($i),tn=Qi(!1),Mr=$i;function gs(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function xl(){ct(tn),ct(Ht)}function lp(t,e,n){if(Ht.current!==$i)throw Error(ie(168));st(Ht,e),st(tn,n)}function e0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,k_(t)||"Unknown",r));return pt({},n,i)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Mr=Ht.current,st(Ht,t),st(tn,tn.current),!0}function cp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=e0(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,ct(tn),ct(Ht),st(Ht,t)):ct(tn),st(tn,n)}var oi=null,Wl=!1,Ic=!1;function t0(t){oi===null?oi=[t]:oi.push(t)}function Jy(t){Wl=!0,t0(t)}function Ji(){if(!Ic&&oi!==null){Ic=!0;var t=0,e=nt;try{var n=oi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Wl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Tx(vf,Ji),r}finally{nt=e,Ic=!1}}return null}var ts=[],ns=0,vl=null,_l=0,_n=[],yn=0,wr=null,li=1,ci="";function dr(t,e){ts[ns++]=_l,ts[ns++]=vl,vl=t,_l=e}function n0(t,e,n){_n[yn++]=li,_n[yn++]=ci,_n[yn++]=wr,wr=t;var i=li;t=ci;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-Bn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Cf(t){t.return!==null&&(dr(t,1),n0(t,1,0))}function Af(t){for(;t===vl;)vl=ts[--ns],ts[ns]=null,_l=ts[--ns],ts[ns]=null;for(;t===wr;)wr=_n[--yn],_n[yn]=null,ci=_n[--yn],_n[yn]=null,li=_n[--yn],_n[yn]=null}var hn=null,fn=null,dt=!1,Fn=null;function i0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function Qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jd(t){if(dt){var e=fn;if(e){var n=e;if(!dp(t,e)){if(Qd(t))throw Error(ie(418));e=Oi(n.nextSibling);var i=hn;e&&dp(t,e)?i0(i,n):(t.flags=t.flags&-4097|2,dt=!1,hn=t)}}else{if(Qd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,dt=!1,hn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function so(t){if(t!==hn)return!1;if(!dt)return up(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=fn)){if(Qd(t))throw r0(),Error(ie(418));for(;e;)i0(t,e),e=Oi(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Oi(t.stateNode.nextSibling):null;return!0}function r0(){for(var t=fn;t;)t=Oi(t.nextSibling)}function vs(){fn=hn=null,dt=!1}function Nf(t){Fn===null?Fn=[t]:Fn.push(t)}var e1=_i.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function s0(t){function e(u,_){if(t){var y=u.deletions;y===null?(u.deletions=[_],u.flags|=16):y.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Vi(u,_),u.index=0,u.sibling=null,u}function s(u,_,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<_?(u.flags|=2,_):y):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function l(u,_,y,v){return _===null||_.tag!==6?(_=Bc(y,u.mode,v),_.return=u,_):(_=r(_,y),_.return=u,_)}function c(u,_,y,v){var N=y.type;return N===Yr?f(u,_,y.props.children,v,y.key):_!==null&&(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ai&&fp(N)===_.type)?(v=r(_,y.props),v.ref=Ws(u,_,y),v.return=u,v):(v=Qo(y.type,y.key,y.props,null,u.mode,v),v.ref=Ws(u,_,y),v.return=u,v)}function d(u,_,y,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Hc(y,u.mode,v),_.return=u,_):(_=r(_,y.children||[]),_.return=u,_)}function f(u,_,y,v,N){return _===null||_.tag!==7?(_=Sr(y,u.mode,v,N),_.return=u,_):(_=r(_,y),_.return=u,_)}function p(u,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bc(""+_,u.mode,y),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return y=Qo(_.type,_.key,_.props,null,u.mode,y),y.ref=Ws(u,null,_),y.return=u,y;case $r:return _=Hc(_,u.mode,y),_.return=u,_;case Ai:var v=_._init;return p(u,v(_._payload),y)}if(na(_)||zs(_))return _=Sr(_,u.mode,y,null),_.return=u,_;ao(u,_)}return null}function h(u,_,y,v){var N=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:l(u,_,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:return y.key===N?c(u,_,y,v):null;case $r:return y.key===N?d(u,_,y,v):null;case Ai:return N=y._init,h(u,_,N(y._payload),v)}if(na(y)||zs(y))return N!==null?null:f(u,_,y,v,null);ao(u,y)}return null}function m(u,_,y,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return u=u.get(y)||null,l(_,u,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ya:return u=u.get(v.key===null?y:v.key)||null,c(_,u,v,N);case $r:return u=u.get(v.key===null?y:v.key)||null,d(_,u,v,N);case Ai:var C=v._init;return m(u,_,y,C(v._payload),N)}if(na(v)||zs(v))return u=u.get(y)||null,f(_,u,v,N,null);ao(_,v)}return null}function g(u,_,y,v){for(var N=null,C=null,w=_,A=_=0,F=null;w!==null&&A<y.length;A++){w.index>A?(F=w,w=null):F=w.sibling;var S=h(u,w,y[A],v);if(S===null){w===null&&(w=F);break}t&&w&&S.alternate===null&&e(u,w),_=s(S,_,A),C===null?N=S:C.sibling=S,C=S,w=F}if(A===y.length)return n(u,w),dt&&dr(u,A),N;if(w===null){for(;A<y.length;A++)w=p(u,y[A],v),w!==null&&(_=s(w,_,A),C===null?N=w:C.sibling=w,C=w);return dt&&dr(u,A),N}for(w=i(u,w);A<y.length;A++)F=m(w,u,A,y[A],v),F!==null&&(t&&F.alternate!==null&&w.delete(F.key===null?A:F.key),_=s(F,_,A),C===null?N=F:C.sibling=F,C=F);return t&&w.forEach(function(E){return e(u,E)}),dt&&dr(u,A),N}function b(u,_,y,v){var N=zs(y);if(typeof N!="function")throw Error(ie(150));if(y=N.call(y),y==null)throw Error(ie(151));for(var C=N=null,w=_,A=_=0,F=null,S=y.next();w!==null&&!S.done;A++,S=y.next()){w.index>A?(F=w,w=null):F=w.sibling;var E=h(u,w,S.value,v);if(E===null){w===null&&(w=F);break}t&&w&&E.alternate===null&&e(u,w),_=s(E,_,A),C===null?N=E:C.sibling=E,C=E,w=F}if(S.done)return n(u,w),dt&&dr(u,A),N;if(w===null){for(;!S.done;A++,S=y.next())S=p(u,S.value,v),S!==null&&(_=s(S,_,A),C===null?N=S:C.sibling=S,C=S);return dt&&dr(u,A),N}for(w=i(u,w);!S.done;A++,S=y.next())S=m(w,u,A,S.value,v),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?A:S.key),_=s(S,_,A),C===null?N=S:C.sibling=S,C=S);return t&&w.forEach(function(O){return e(u,O)}),dt&&dr(u,A),N}function x(u,_,y,v){if(typeof y=="object"&&y!==null&&y.type===Yr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:e:{for(var N=y.key,C=_;C!==null;){if(C.key===N){if(N=y.type,N===Yr){if(C.tag===7){n(u,C.sibling),_=r(C,y.props.children),_.return=u,u=_;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ai&&fp(N)===C.type){n(u,C.sibling),_=r(C,y.props),_.ref=Ws(u,C,y),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}y.type===Yr?(_=Sr(y.props.children,u.mode,v,y.key),_.return=u,u=_):(v=Qo(y.type,y.key,y.props,null,u.mode,v),v.ref=Ws(u,_,y),v.return=u,u=v)}return o(u);case $r:e:{for(C=y.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(u,_.sibling),_=r(_,y.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Hc(y,u.mode,v),_.return=u,u=_}return o(u);case Ai:return C=y._init,x(u,_,C(y._payload),v)}if(na(y))return g(u,_,y,v);if(zs(y))return b(u,_,y,v);ao(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,y),_.return=u,u=_):(n(u,_),_=Bc(y,u.mode,v),_.return=u,u=_),o(u)):n(u,_)}return x}var _s=s0(!0),a0=s0(!1),yl=Qi(null),bl=null,is=null,Rf=null;function Pf(){Rf=is=bl=null}function Lf(t){var e=yl.current;ct(yl),t._currentValue=e}function eu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){bl=t,Rf=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(bl===null)throw Error(ie(308));is=t,bl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var xr=null;function Df(t){xr===null?xr=[t]:xr.push(t)}function o0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Df(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_f(t,n)}}function hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,f=d=c=null,l=s;do{var h=l.lane,m=l.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,b=l;switch(h=e,m=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){p=g.call(m,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,h=typeof g=="function"?g.call(m,p,h):g,h==null)break e;p=pt({},p,h);break e;case 2:Ni=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=m,c=p):f=f.next=m,o|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=p}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Oa={},Zn=Qi(Oa),Ta=Qi(Oa),Ca=Qi(Oa);function gr(t){if(t===Oa)throw Error(ie(174));return t}function Uf(t,e){switch(st(Ca,e),st(Ta,t),st(Zn,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Id(e,t)}ct(Zn),st(Zn,e)}function ys(){ct(Zn),ct(Ta),ct(Ca)}function c0(t){gr(Ca.current);var e=gr(Zn.current),n=Id(e,t.type);e!==n&&(st(Ta,t),st(Zn,n))}function kf(t){Ta.current===t&&(ct(Zn),ct(Ta))}var ut=Qi(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function Ff(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var qo=_i.ReactCurrentDispatcher,kc=_i.ReactCurrentBatchConfig,Er=0,ft=null,wt=null,Nt=null,wl=!1,ua=!1,Aa=0,t1=0;function Ft(){throw Error(ie(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Of(t,e,n,i,r,s){if(Er=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qo.current=t===null||t.memoizedState===null?s1:a1,t=n(i,r),ua){s=0;do{if(ua=!1,Aa=0,25<=s)throw Error(ie(301));s+=1,Nt=wt=null,e.updateQueue=null,qo.current=o1,t=n(i,r)}while(ua)}if(qo.current=El,e=wt!==null&&wt.next!==null,Er=0,Nt=wt=ft=null,wl=!1,e)throw Error(ie(300));return t}function zf(){var t=Aa!==0;return Aa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function An(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?ft.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Na(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=An(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,c=null,d=s;do{var f=d.lane;if((Er&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=i):c=c.next=p,ft.lanes|=f,Tr|=f}d=d.next}while(d!==null&&d!==s);c===null?o=i:c.next=l,Vn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=An(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d0(){}function u0(t,e){var n=ft,i=An(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Bf(p0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ra(9,h0.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ie(349));Er&30||f0(n,e,r)}return r}function f0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h0(t,e,n,i){e.value=n,e.getSnapshot=i,m0(e)&&x0(t)}function p0(t,e,n){return n(function(){m0(e)&&x0(t)})}function m0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function x0(t){var e=mi(t,1);e!==null&&Hn(e,t,1,-1)}function mp(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=r1.bind(null,ft,t),[e.memoizedState,t]}function Ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function g0(){return An().memoizedState}function $o(t,e,n,i){var r=Wn();ft.flags|=t,r.memoizedState=Ra(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&jf(i,o.deps)){r.memoizedState=Ra(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ra(1|e,n,s,i)}function xp(t,e){return $o(8390656,8,t,e)}function Bf(t,e){return Xl(2048,8,t,e)}function v0(t,e){return Xl(4,2,t,e)}function _0(t,e){return Xl(4,4,t,e)}function y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b0(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,y0.bind(null,e,t),n)}function Hf(){}function S0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function w0(t,e,n){return Er&21?(Vn(n,e)||(n=Nx(),ft.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function n1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{nt=n,kc.transition=i}}function E0(){return An().memoizedState}function i1(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},T0(t))C0(e,n);else if(n=o0(t,e,n,i),n!==null){var r=Wt();Hn(n,t,i,r),A0(n,e,i)}}function r1(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(T0(t))C0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,Vn(l,o)){var c=e.interleaved;c===null?(r.next=r,Df(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=o0(t,e,r,i),n!==null&&(r=Wt(),Hn(n,t,i,r),A0(n,e,i))}}function T0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function C0(t,e){ua=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_f(t,n)}}var El={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},s1={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$o(4194308,4,y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $o(4194308,4,t,e)},useInsertionEffect:function(t,e){return $o(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=i1.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:mp,useDebugValue:Hf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=mp(!1),e=t[0];return t=n1.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Wn();if(dt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Rt===null)throw Error(ie(349));Er&30||f0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,xp(p0.bind(null,i,s,t),[t]),i.flags|=2048,Ra(9,h0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Rt.identifierPrefix;if(dt){var n=ci,i=li;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=t1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},a1={readContext:Cn,useCallback:S0,useContext:Cn,useEffect:Bf,useImperativeHandle:b0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:M0,useReducer:Fc,useRef:g0,useState:function(){return Fc(Na)},useDebugValue:Hf,useDeferredValue:function(t){var e=An();return w0(e,wt.memoizedState,t)},useTransition:function(){var t=Fc(Na)[0],e=An().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:u0,useId:E0,unstable_isNewReconciler:!1},o1={readContext:Cn,useCallback:S0,useContext:Cn,useEffect:Bf,useImperativeHandle:b0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:M0,useReducer:jc,useRef:g0,useState:function(){return jc(Na)},useDebugValue:Hf,useDeferredValue:function(t){var e=An();return wt===null?e.memoizedState=t:w0(e,wt.memoizedState,t)},useTransition:function(){var t=jc(Na)[0],e=An().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:u0,useId:E0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function tu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Hi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Xo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Hi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Xo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Hi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Hn(e,t,i,n),Xo(e,t,i))}};function gp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,i)||!Sa(r,s):!0}function N0(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=nn(e)?Mr:Ht.current,i=e.contextTypes,s=(i=i!=null)?gs(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function nu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=nn(e)?Mr:Ht.current,r.context=gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),Sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=U_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function R0(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,hu=i),iu(t,e)},n}function P0(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){iu(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new l1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=S1.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var c1=_i.ReactCurrentOwner,en=!1;function Gt(t,e,n,i){e.child=t===null?a0(e,null,n,i):_s(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=Of(t,e,n,i,s,r),n=zf(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(dt&&n&&Cf(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L0(t,e,s,i,r)):(t=Qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(o,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function L0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Sa(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,xi(t,e,r)}return ru(t,e,n,i,r)}function D0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ss,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ss,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ss,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ss,un),un|=i;return Gt(t,e,r,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ru(t,e,n,i,r){var s=nn(n)?Mr:Ht.current;return s=gs(e,s),us(e,r),n=Of(t,e,n,i,s,r),i=zf(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(dt&&i&&Cf(e),e.flags|=1,Gt(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(nn(n)){var s=!0;gl(e)}else s=!1;if(us(e,r),e.stateNode===null)Yo(t,e),N0(e,n,i),nu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Cn(d):(d=nn(n)?Mr:Ht.current,d=gs(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&vp(e,o,i,d),Ni=!1;var h=e.memoizedState;o.state=h,Sl(e,i,o,r),c=e.memoizedState,l!==i||h!==c||tn.current||Ni?(typeof f=="function"&&(tu(e,n,f,i),c=e.memoizedState),(l=Ni||gp(e,n,l,i,h,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Un(e.type,l),o.props=d,p=e.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?Mr:Ht.current,c=gs(e,c));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==c)&&vp(e,o,i,c),Ni=!1,h=e.memoizedState,o.state=h,Sl(e,i,o,r);var g=e.memoizedState;l!==p||h!==g||tn.current||Ni?(typeof m=="function"&&(tu(e,n,m,i),g=e.memoizedState),(d=Ni||gp(e,n,d,i,h,g,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return su(t,e,n,i,s,r)}function su(t,e,n,i,r,s){I0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cp(e,n,!1),xi(t,e,s);i=e.stateNode,c1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,l,s)):Gt(t,e,l,s),e.memoizedState=i.state,r&&cp(e,n,!0),e.child}function U0(t){var e=t.stateNode;e.pendingContext?lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(t,e.context,!1),Uf(t,e.containerInfo)}function Ep(t,e,n,i,r){return vs(),Nf(r),e.flags|=256,Gt(t,e,n,i),e.child}var au={dehydrated:null,treeContext:null,retryLane:0};function ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ut,r&1),t===null)return Jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ou(n),e.memoizedState=au,t):Vf(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return d1(t,e,o,i,l,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Vi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=Vi(l,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ou(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=au,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vf(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,i){return i!==null&&Nf(i),_s(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function d1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Oc(Error(ie(422))),oo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=ou(o),e.memoizedState=au,s);if(!(e.mode&1))return oo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ie(419)),i=Oc(s,i,void 0),oo(t,e,o,i)}if(l=(o&t.childLanes)!==0,en||l){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Hn(i,t,r,-1))}return Yf(),i=Oc(Error(ie(421))),oo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=M1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Oi(r.nextSibling),hn=e,dt=!0,Fn=null,t!==null&&(_n[yn++]=li,_n[yn++]=ci,_n[yn++]=wr,li=t.id,ci=t.overflow,wr=e),e=Vf(e,i.children),e.flags|=4096,e)}function Tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),eu(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function F0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tp(t,n,e);else if(t.tag===19)Tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function u1(t,e,n){switch(e.tag){case 3:U0(e),vs();break;case 5:c0(e);break;case 1:nn(e.type)&&gl(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(st(ut,ut.current&1),t=xi(t,e,n),t!==null?t.sibling:null);st(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return F0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,D0(t,e,n)}return xi(t,e,n)}var j0,lu,O0,z0;j0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lu=function(){};O0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Zn.current);var s=null;switch(n){case"input":r=Rd(t,r),i=Rd(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Dd(t,r),i=Dd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Ud(n,i);var o;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ma.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ma.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ot("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};z0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function f1(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return nn(e.type)&&xl(),jt(e),null;case 3:return i=e.stateNode,ys(),ct(tn),ct(Ht),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(so(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(xu(Fn),Fn=null))),lu(t,e),jt(e),null;case 5:kf(e);var r=gr(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)O0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return jt(e),null}if(t=gr(Zn.current),so(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Ea]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)ot(ra[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Uh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Fh(i,s),ot("invalid",i)}Ud(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,l,t),r=["children",""+l]):ma.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Ka(i),kh(i,s,!0);break;case"textarea":Ka(i),jh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=px(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[Ea]=i,j0(t,e,!1,!1),e.stateNode=t;e:{switch(o=kd(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)ot(ra[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Uh(t,i),r=Rd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Fh(t,i),r=Dd(t,i),ot("invalid",t);break;default:r=i}Ud(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?gx(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mx(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xa(t,c):typeof c=="number"&&xa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ot("scroll",t):c!=null&&hf(t,s,c,o))}switch(n){case"input":Ka(t),kh(t,i,!1);break;case"textarea":Ka(t),jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=gr(Ca.current),gr(Zn.current),so(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return jt(e),null;case 13:if(ct(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&fn!==null&&e.mode&1&&!(e.flags&128))r0(),vs(),e.flags|=98560,s=!1;else if(s=so(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[$n]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Fn!==null&&(xu(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Et===0&&(Et=3):Yf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ys(),lu(t,e),t===null&&Ma(e.stateNode.containerInfo),jt(e),null;case 10:return Lf(e.type._context),jt(e),null;case 17:return nn(e.type)&&xl(),jt(e),null;case 19:if(ct(ut),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=128,Xs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ss&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ml(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return jt(e),null}else 2*_t()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ut.current,st(ut,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function h1(t,e){switch(Af(e),e.tag){case 1:return nn(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),ct(tn),ct(Ht),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(ct(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ut),null;case 4:return ys(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var lo=!1,Bt=!1,p1=typeof WeakSet=="function"?WeakSet:Set,me=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function cu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Cp=!1;function m1(t,e){if(Xd=fl,t=Wx(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(l=o+r),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++d===r&&(l=o),h===s&&++f===i&&(c=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},fl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,x=g.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?b:Un(e.type,b),x);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(v){xt(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=Cp,Cp=!1,g}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cu(e,n,s)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function du(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ea],delete e[Kd],delete e[Zy],delete e[Qy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H0(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(uu(t,e,n),t=t.sibling;t!==null;)uu(t,e,n),t=t.sibling}function fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fu(t,e,n),t=t.sibling;t!==null;)fu(t,e,n),t=t.sibling}var Dt=null,kn=!1;function bi(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Bt||rs(n,e);case 6:var i=Dt,r=kn;Dt=null,bi(t,e,n),Dt=i,kn=r,Dt!==null&&(kn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(kn?(t=Dt,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),ya(t)):Dc(Dt,n.stateNode));break;case 4:i=Dt,r=kn,Dt=n.stateNode.containerInfo,kn=!0,bi(t,e,n),Dt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cu(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Bt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){xt(n,e,l)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,bi(t,e,n),Bt=i):bi(t,e,n);break;default:bi(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p1),e.forEach(function(i){var r=w1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Dt=l.stateNode,kn=!1;break e;case 3:Dt=l.stateNode.containerInfo,kn=!0;break e;case 4:Dt=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(Dt===null)throw Error(ie(160));V0(s,o,r),Dt=null,kn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){xt(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G0(e,t),e=e.sibling}function G0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Gn(t),i&4){try{fa(3,t,t.return),$l(3,t)}catch(b){xt(t,t.return,b)}try{fa(5,t,t.return)}catch(b){xt(t,t.return,b)}}break;case 1:Pn(e,t),Gn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Pn(e,t),Gn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(b){xt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fx(r,s),kd(l,o);var d=kd(l,s);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?gx(r,p):f==="dangerouslySetInnerHTML"?mx(r,p):f==="children"?xa(r,p):hf(r,f,p,d)}switch(l){case"input":Pd(r,s);break;case"textarea":hx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?os(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ea]=s}catch(b){xt(t,t.return,b)}}break;case 6:if(Pn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){xt(t,t.return,b)}}break;case 3:if(Pn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(b){xt(t,t.return,b)}break;case 4:Pn(e,t),Gn(t);break;case 13:Pn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=_t())),i&4&&Np(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(d=Bt)||f,Pn(e,t),Bt=d):Pn(e,t),Gn(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(p=me=f;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:fa(4,h,h.return);break;case 1:rs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(b){xt(i,n,b)}}break;case 5:rs(h,h.return);break;case 22:if(h.memoizedState!==null){Pp(p);continue}}m!==null?(m.return=h,me=m):Pp(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xx("display",o))}catch(b){xt(t,t.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(b){xt(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pn(e,t),Gn(t),i&4&&Np(t);break;case 21:break;default:Pn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=Ap(t);fu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Ap(t);uu(t,l,o);break;default:throw Error(ie(161))}}catch(c){xt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function x1(t,e,n){me=t,W0(t)}function W0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||lo;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Bt;l=lo;var d=Bt;if(lo=o,(Bt=c)&&!d)for(me=r;me!==null;)o=me,c=o.child,o.tag===22&&o.memoizedState!==null?Lp(r):c!==null?(c.return=o,me=c):Lp(r);for(;s!==null;)me=s,W0(s),s=s.sibling;me=r,lo=l,Bt=d}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Rp(t)}}function Rp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ya(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Bt||e.flags&512&&du(e)}catch(h){xt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Pp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Lp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(c){xt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){xt(e,r,c)}}var s=e.return;try{du(e)}catch(c){xt(e,s,c)}break;case 5:var o=e.return;try{du(e)}catch(c){xt(e,o,c)}}}catch(c){xt(e,e.return,c)}if(e===t){me=null;break}var l=e.sibling;if(l!==null){l.return=e.return,me=l;break}me=e.return}}var g1=Math.ceil,Tl=_i.ReactCurrentDispatcher,Gf=_i.ReactCurrentOwner,En=_i.ReactCurrentBatchConfig,Ye=0,Rt=null,St=null,It=0,un=0,ss=Qi(0),Et=0,Pa=null,Tr=0,Yl=0,Wf=0,ha=null,Qt=null,Xf=0,Ss=1/0,ai=null,Cl=!1,hu=null,Bi=null,co=!1,Ui=null,Al=0,pa=0,pu=null,Ko=-1,Zo=0;function Wt(){return Ye&6?_t():Ko!==-1?Ko:Ko=_t()}function Hi(t){return t.mode&1?Ye&2&&It!==0?It&-It:e1.transition!==null?(Zo===0&&(Zo=Nx()),Zo):(t=nt,t!==0||(t=window.event,t=t===void 0?16:kx(t.type)),t):1}function Hn(t,e,n,i){if(50<pa)throw pa=0,pu=null,Error(ie(185));ka(t,n,i),(!(Ye&2)||t!==Rt)&&(t===Rt&&(!(Ye&2)&&(Yl|=n),Et===4&&Li(t,It)),rn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Ss=_t()+500,Wl&&Ji()))}function rn(t,e){var n=t.callbackNode;ey(t,e);var i=ul(t,t===Rt?It:0);if(i===0)n!==null&&Bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bh(n),e===1)t.tag===0?Jy(Dp.bind(null,t)):t0(Dp.bind(null,t)),Yy(function(){!(Ye&6)&&Ji()}),n=null;else{switch(Rx(i)){case 1:n=vf;break;case 4:n=Cx;break;case 16:n=dl;break;case 536870912:n=Ax;break;default:n=dl}n=J0(n,X0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X0(t,e){if(Ko=-1,Zo=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=ul(t,t===Rt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=Ye;Ye|=2;var s=$0();(Rt!==t||It!==e)&&(ai=null,Ss=_t()+500,br(t,e));do try{y1();break}catch(l){q0(t,l)}while(!0);Pf(),Tl.current=s,Ye=r,St!==null?e=0:(Rt=null,It=0,e=Et)}if(e!==0){if(e===2&&(r=Bd(t),r!==0&&(i=r,e=mu(t,r))),e===1)throw n=Pa,br(t,0),Li(t,i),rn(t,_t()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!v1(r)&&(e=Nl(t,i),e===2&&(s=Bd(t),s!==0&&(i=s,e=mu(t,s))),e===1))throw n=Pa,br(t,0),Li(t,i),rn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ur(t,Qt,ai);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=Xf+500-_t(),10<e)){if(ul(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yd(ur.bind(null,t,Qt,ai),e);break}ur(t,Qt,ai);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*g1(i/1960))-i,10<i){t.timeoutHandle=Yd(ur.bind(null,t,Qt,ai),i);break}ur(t,Qt,ai);break;case 5:ur(t,Qt,ai);break;default:throw Error(ie(329))}}}return rn(t,_t()),t.callbackNode===n?X0.bind(null,t):null}function mu(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&xu(e)),t}function xu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function v1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Wf,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Dp(t){if(Ye&6)throw Error(ie(327));fs();var e=ul(t,0);if(!(e&1))return rn(t,_t()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Bd(t);i!==0&&(e=i,n=mu(t,i))}if(n===1)throw n=Pa,br(t,0),Li(t,e),rn(t,_t()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Qt,ai),rn(t,_t()),null}function qf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Ss=_t()+500,Wl&&Ji())}}function Cr(t){Ui!==null&&Ui.tag===0&&!(Ye&6)&&fs();var e=Ye;Ye|=1;var n=En.transition,i=nt;try{if(En.transition=null,nt=1,t)return t()}finally{nt=i,En.transition=n,Ye=e,!(Ye&6)&&Ji()}}function $f(){un=ss.current,ct(ss)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$y(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:ys(),ct(tn),ct(Ht),Ff();break;case 5:kf(i);break;case 4:ys();break;case 13:ct(ut);break;case 19:ct(ut);break;case 10:Lf(i.type._context);break;case 22:case 23:$f()}n=n.return}if(Rt=t,St=t=Vi(t.current,null),It=un=e,Et=0,Pa=null,Wf=Yl=Tr=0,Qt=ha=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xr=null}return t}function q0(t,e){do{var n=St;try{if(Pf(),qo.current=El,wl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Er=0,Nt=wt=ft=null,ua=!1,Aa=0,Gf.current=null,n===null||n.return===null){Et=1,Pa=e,St=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=It,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=yp(o);if(m!==null){m.flags&=-257,bp(m,o,l,s,e),m.mode&1&&_p(s,d,e),e=m,c=d;var g=e.updateQueue;if(g===null){var b=new Set;b.add(c),e.updateQueue=b}else g.add(c);break e}else{if(!(e&1)){_p(s,d,e),Yf();break e}c=Error(ie(426))}}else if(dt&&l.mode&1){var x=yp(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),bp(x,o,l,s,e),Nf(bs(c,l));break e}}s=c=bs(c,l),Et!==4&&(Et=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=R0(s,c,e);hp(s,u);break e;case 1:l=c;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Bi===null||!Bi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=P0(s,l,e);hp(s,v);break e}}s=s.return}while(s!==null)}K0(n)}catch(N){e=N,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function $0(){var t=Tl.current;return Tl.current=El,t===null?El:t}function Yf(){(Et===0||Et===3||Et===2)&&(Et=4),Rt===null||!(Tr&268435455)&&!(Yl&268435455)||Li(Rt,It)}function Nl(t,e){var n=Ye;Ye|=2;var i=$0();(Rt!==t||It!==e)&&(ai=null,br(t,e));do try{_1();break}catch(r){q0(t,r)}while(!0);if(Pf(),Ye=n,Tl.current=i,St!==null)throw Error(ie(261));return Rt=null,It=0,Et}function _1(){for(;St!==null;)Y0(St)}function y1(){for(;St!==null&&!W_();)Y0(St)}function Y0(t){var e=Q0(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?K0(t):St=e,Gf.current=null}function K0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h1(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=f1(n,e,un),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function ur(t,e,n){var i=nt,r=En.transition;try{En.transition=null,nt=1,b1(t,e,n,i)}finally{En.transition=r,nt=i}return null}function b1(t,e,n,i){do fs();while(Ui!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ty(t,s),t===Rt&&(St=Rt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,J0(dl,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=nt;nt=1;var l=Ye;Ye|=4,Gf.current=null,m1(t,n),G0(n,t),By(qd),fl=!!Xd,qd=Xd=null,t.current=n,x1(n),X_(),Ye=l,nt=o,En.transition=s}else t.current=n;if(co&&(co=!1,Ui=t,Al=r),s=t.pendingLanes,s===0&&(Bi=null),Y_(n.stateNode),rn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=hu,hu=null,t;return Al&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===pu?pa++:(pa=0,pu=t):pa=0,Ji(),null}function fs(){if(Ui!==null){var t=Rx(Al),e=En.transition,n=nt;try{if(En.transition=null,nt=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Al=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(me=d;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:fa(8,f,s)}var p=f.child;if(p!==null)p.return=f,me=p;else for(;me!==null;){f=me;var h=f.sibling,m=f.return;if(B0(f),f===d){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var g=s.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var _=t.current;for(me=_;me!==null;){o=me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,me=y;else e:for(o=_;me!==null;){if(l=me,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$l(9,l)}}catch(N){xt(l,l.return,N)}if(l===o){me=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,me=v;break e}me=l.return}}if(Ye=r,Ji(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{nt=n,En.transition=e}}return!1}function Ip(t,e,n){e=bs(n,e),e=R0(t,e,1),t=zi(t,e,1),e=Wt(),t!==null&&(ka(t,1,e),rn(t,e))}function xt(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=bs(n,t),t=P0(e,t,1),e=zi(e,t,1),t=Wt(),e!==null&&(ka(e,1,t),rn(e,t));break}}e=e.return}}function S1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(It&n)===n&&(Et===4||Et===3&&(It&130023424)===It&&500>_t()-Xf?br(t,0):Wf|=n),rn(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=Wt();t=mi(t,e),t!==null&&(ka(t,e,n),rn(t,n))}function M1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function w1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Z0(t,n)}var Q0;Q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,u1(t,e,n);en=!!(t.flags&131072)}else en=!1,dt&&e.flags&1048576&&n0(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yo(t,e),t=e.pendingProps;var r=gs(e,Ht.current);us(e,n),r=Of(null,e,i,t,r,n);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,If(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,nu(e,i,t,n),e=su(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Cf(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=T1(i),t=Un(i,t),r){case 0:e=ru(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,Un(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),wp(t,e,i,r,n);case 3:e:{if(U0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,l0(t,e),Sl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(ie(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(ie(424)),e),e=Ep(t,e,i,n,r);break e}else for(fn=Oi(e.stateNode.containerInfo.firstChild),hn=e,dt=!0,Fn=null,n=a0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),i===r){e=xi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return c0(e),t===null&&Jd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$d(i,r)?o=null:s!==null&&$d(i,s)&&(e.flags|=32),I0(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&Jd(e),null;case 13:return k0(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Sp(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(yl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!tn.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=fi(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),eu(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Cn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Mp(t,e,i,r,n);case 15:return L0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Yo(t,e),e.tag=1,nn(i)?(t=!0,gl(e)):t=!1,us(e,n),N0(e,i,r),nu(e,i,r,n),su(null,e,i,!0,t,n);case 19:return F0(t,e,n);case 22:return D0(t,e,n)}throw Error(ie(156,e.tag))};function J0(t,e){return Tx(t,e)}function E1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new E1(t,e,n,i)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function T1(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mf)return 11;if(t===xf)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qo(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yr:return Sr(n.children,r,s,e);case pf:o=8,r|=8;break;case Td:return t=Mn(12,n,e,r|2),t.elementType=Td,t.lanes=s,t;case Cd:return t=Mn(13,n,e,r),t.elementType=Cd,t.lanes=s,t;case Ad:return t=Mn(19,n,e,r),t.elementType=Ad,t.lanes=s,t;case cx:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ox:o=10;break e;case lx:o=9;break e;case mf:o=11;break e;case xf:o=14;break e;case Ai:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=cx,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(t,e,n,i,r,s,o,l,c){return t=new C1(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function A1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function eg(t){if(!t)return $i;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(nn(n))return e0(t,n,e)}return e}function tg(t,e,n,i,r,s,o,l,c){return t=Zf(n,i,!0,t,r,s,o,l,c),t.context=eg(null),n=t.current,i=Wt(),r=Hi(n),s=fi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,ka(t,r,i),rn(t,i),t}function Zl(t,e,n,i){var r=e.current,s=Wt(),o=Hi(r);return n=eg(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,o),t!==null&&(Hn(t,r,o,s),Xo(t,r,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Up(t,e),(t=t.alternate)&&Up(t,e)}function N1(){return null}var ng=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}Ql.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Zl(t,e,null,null)};Ql.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Zl(null,t,null,null)}),e[pi]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Ux(t)}};function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function R1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=Rl(o);s.call(d)}}var o=tg(e,i,t,0,null,!1,!1,"",kp);return t._reactRootContainer=o,t[pi]=o.current,Ma(t.nodeType===8?t.parentNode:t),Cr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Rl(c);l.call(d)}}var c=Zf(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=c,t[pi]=c.current,Ma(t.nodeType===8?t.parentNode:t),Cr(function(){Zl(e,c,n,i)}),c}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var c=Rl(o);l.call(c)}}Zl(e,o,t,r)}else o=R1(n,e,t,r,i);return Rl(o)}Px=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(_f(e,n|1),rn(e,_t()),!(Ye&6)&&(Ss=_t()+500,Ji()))}break;case 13:Cr(function(){var i=mi(t,1);if(i!==null){var r=Wt();Hn(i,t,1,r)}}),Qf(t,1)}};yf=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Wt();Hn(e,t,134217728,n)}Qf(t,134217728)}};Lx=function(t){if(t.tag===13){var e=Hi(t),n=mi(t,e);if(n!==null){var i=Wt();Hn(n,t,e,i)}Qf(t,e)}};Dx=function(){return nt};Ix=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};jd=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(ie(90));ux(i),Pd(i,r)}}}break;case"textarea":hx(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};yx=qf;bx=Cr;var P1={usingClientEntryPoint:!1,Events:[ja,Jr,Gl,vx,_x,qf]},qs={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L1={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wx(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||N1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{zl=uo.inject(L1),Kn=uo}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(e))throw Error(ie(200));return A1(t,e,null,n)};mn.createRoot=function(t,e){if(!eh(t))throw Error(ie(299));var n=!1,i="",r=ng;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Ma(t.nodeType===8?t.parentNode:t),new Jf(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=wx(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Cr(t)};mn.hydrate=function(t,e,n){if(!Jl(e))throw Error(ie(200));return ec(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!eh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ng;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tg(e,null,t,1,n??null,r,!1,s,o),t[pi]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ql(e)};mn.render=function(t,e,n){if(!Jl(e))throw Error(ie(200));return ec(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(ie(40));return t._reactRootContainer?(Cr(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};mn.unstable_batchedUpdates=qf;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ec(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(t){console.error(t)}}ig(),ix.exports=mn;var D1=ix.exports,Fp=D1;wd.createRoot=Fp.createRoot,wd.hydrateRoot=Fp.hydrateRoot;const jp="/api",ze={getToken(){return localStorage.getItem("mq3d_token")},setToken(t){t?localStorage.setItem("mq3d_token",t):localStorage.removeItem("mq3d_token")},async request(t,e={}){const n=this.getToken(),i={...e.headers||{}};n&&!i.Authorization&&(i.Authorization=`Bearer ${n}`),!(e.body instanceof FormData)&&!i["Content-Type"]&&(i["Content-Type"]="application/json");const r=await fetch(`${jp}${t}`,{...e,headers:i});if(!r.ok){let s="Error en la petición al servidor";try{s=(await r.json()).error||s}catch{s=r.statusText||s}const o=new Error(s);throw o.status=r.status,o}return r.json()},async downloadModel(t,e="modelo.stl"){const n=this.getToken(),i={};n&&(i.Authorization=`Bearer ${n}`);const r=await fetch(`${jp}/products/${t}/download`,{method:"GET",headers:i});if(!r.ok){const c=await r.json();throw new Error(c.error||"No fue posible autorizar la descarga del modelo 3D.")}const s=await r.blob(),o=window.URL.createObjectURL(s),l=document.createElement("a");l.href=o,l.download=e,document.body.appendChild(l),l.click(),l.remove(),window.URL.revokeObjectURL(o)}},rg=$.createContext(),I1=({children:t})=>{const[e,n]=$.useState(()=>localStorage.getItem("mq3d_theme")||"dark"),[i,r]=$.useState(()=>localStorage.getItem("mq3d_palette")||"cyan"),[s,o]=$.useState(()=>localStorage.getItem("mq3d_fontsize")||"md"),[l,c]=$.useState(!1);$.useEffect(()=>{const p=document.documentElement;e==="dark"?(p.classList.add("dark"),p.classList.remove("light")):(p.classList.add("light"),p.classList.remove("dark")),p.setAttribute("data-palette",i),p.setAttribute("data-fontsize",s),localStorage.setItem("mq3d_theme",e),localStorage.setItem("mq3d_palette",i),localStorage.setItem("mq3d_fontsize",s)},[e,i,s]);const d=async p=>{if(p.theme&&n(p.theme),p.palette&&r(p.palette),p.fontSize&&o(p.fontSize),ze.getToken())try{await ze.request("/preferences",{method:"PUT",body:JSON.stringify(p)})}catch(m){console.warn("No se pudo sincronizar preferencias con el servidor:",m)}},f=async()=>{if(ze.getToken())try{const h=await ze.request("/preferences");h.theme&&n(h.theme),h.palette&&r(h.palette),h.fontSize&&o(h.fontSize)}catch{}};return a.jsx(rg.Provider,{value:{theme:e,palette:i,fontSize:s,setTheme:p=>d({theme:p}),setPalette:p=>d({palette:p}),setFontSize:p=>d({fontSize:p}),isThemeModalOpen:l,setIsThemeModalOpen:c,loadUserPreferences:f},children:t})},sg=()=>$.useContext(rg),ag=$.createContext(),U1=({children:t})=>{const[e,n]=$.useState(null),[i,r]=$.useState(!0),s=async()=>{if(!ze.getToken()){n(null),r(!1);return}try{const f=await ze.request("/auth/profile");n(f)}catch{console.warn("Sesión caducada o inválida"),ze.setToken(null),n(null)}finally{r(!1)}};$.useEffect(()=>{s()},[]);const o=async(d,f)=>{const p=await ze.request("/auth/login",{method:"POST",body:JSON.stringify({email:d,password:f})});return ze.setToken(p.token),n(p.user),p},l=async(d,f,p,h)=>{const m=await ze.request("/auth/register",{method:"POST",body:JSON.stringify({name:d,email:f,password:p,phone:h})});return ze.setToken(m.token),n(m.user),m},c=()=>{ze.setToken(null),n(null)};return a.jsx(ag.Provider,{value:{user:e,loading:i,login:o,register:l,logout:c,isAuthenticated:!!e,isAdmin:(e==null?void 0:e.role)==="admin"},children:t})},Is=()=>$.useContext(ag),og=$.createContext(),k1=({children:t})=>{const[e,n]=$.useState(()=>{try{const d=localStorage.getItem("mq3d_cart");return d?JSON.parse(d):[]}catch{return[]}});$.useEffect(()=>{localStorage.setItem("mq3d_cart",JSON.stringify(e))},[e]);const i=(d,f,p,h=1)=>{n(m=>{const g=`${d.id}-${f||"standard"}-${p||"standard"}`,b=m.findIndex(x=>x.itemKey===g);if(b>-1){const x=[...m];return x[b].quantity+=h,x}return[...m,{itemKey:g,productId:d.id,name:d.name,category:d.category,price:d.price,material:f,color:p,quantity:h,imageUrl:d.imageUrl,dimensions:d.dimensions}]})},r=(d,f)=>{if(f<=0){s(d);return}n(p=>p.map(h=>h.itemKey===d?{...h,quantity:f}:h))},s=d=>{n(f=>f.filter(p=>p.itemKey!==d))},o=()=>{n([])},l=e.reduce((d,f)=>d+f.price*f.quantity,0),c=e.reduce((d,f)=>d+f.quantity,0);return a.jsx(og.Provider,{value:{cartItems:e,addToCart:i,updateQuantity:r,removeFromCart:s,clearCart:o,cartSubtotal:l,cartCount:c},children:t})},za=()=>$.useContext(og);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function j1(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:F1(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=t=>{const e=O1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Vc(t){return t!=null}function B1(t,e={}){var h,m;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??ir.width,s=t.size??t.height??ir.height,o=((h=t.aliases)==null?void 0:h.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],d=e.includeDefaultClasses===!1?gu(...c):gu("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??ir["stroke-width"])*Number(t.size??t.width??ir.width)/Number(e.size??e.width??ir.width):e.strokeWidth??ir["stroke-width"];return["svg",{...Object.entries(ir).reduce((g,[b,x])=>(g[i(b)]=x,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Vc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Vc(e.width)&&{[i("width")]:e.width},..."height"in e&&Vc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...d&&{[i("class")]:d},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[b,x,u]=g,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return u?[b,_,u]:[b,_]})]}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function H1(t,e={}){return B1(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},G1=$.createContext({}),W1=()=>$.useContext(G1),X1=$.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:o,className:l="",children:c,iconNode:d=[],icon:f={node:d,aliases:[],size:24},...p},h)=>{const{size:m=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,nonScalingStroke:x=!1,color:u="currentColor",className:_=""}=W1()??{},y=!!c||V1(p),[v,N,C=[]]=H1(f,{color:t??u,width:n??e??m,height:i??e??m,strokeWidth:r??g,absoluteStrokeWidth:s??b,nonScalingStroke:o??x,className:gu(_,l),hasA11yProp:y,attributes:p});return $.createElement(v,{ref:h,...N},[...C.map(([w,A])=>$.createElement(w,A)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ee(t,e=[],n=[]){const i=typeof t=="string"?j1(t,e,n):t,r=$.forwardRef(({className:s,...o},l)=>$.createElement(X1,{ref:l,icon:i,className:s,...o}));return i.name&&(r.displayName=z1(i.name)),r}/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};lg.node;const th=Ee(lg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};cg.node;const Ms=Ee(cg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};dg.node;const ug=Ee(dg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};fg.node;const Nn=Ee(fg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};hg.node;const q1=Ee(hg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};pg.node;const mg=Ee(pg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};xg.node;const Op=Ee(xg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};gg.node;const $1=Ee(gg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};vg.node;const Pl=Ee(vg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};_g.node;const gi=Ee(_g);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};yg.node;const er=Ee(yg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};bg.node;const Us=Ee(bg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Sg.node;const Y1=Ee(Sg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"cog",size:24,node:[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]]};Mg.node;const K1=Ee(Mg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};wg.node;const La=Ee(wg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Eg.node;const nh=Ee(Eg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Tg.node;const zp=Ee(Tg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};Cg.node;const Ag=Ee(Cg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};Ng.node;const ks=Ee(Ng);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Rg.node;const Z1=Ee(Rg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Pg.node;const Q1=Ee(Pg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Lg.node;const tc=Ee(Lg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};Dg.node;const J1=Ee(Dg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Ig.node;const Ug=Ee(Ig);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};kg.node;const ih=Ee(kg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Fg.node;const eb=Ee(Fg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};jg.node;const tb=Ee(jg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"package-check",size:24,node:[["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m16 17 2 2 4-4",key:"uh5qu3"}],["path",{d:"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",key:"kpkbpo"}],["path",{d:"M3.29 7 12 12l8.71-5",key:"19ckod"}],["path",{d:"m7.5 4.27 8.997 5.148",key:"9yrvtv"}]]};Og.node;const nb=Ee(Og);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"package",size:24,node:[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]};zg.node;const Bp=Ee(zg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Bg.node;const Hg=Ee(Bg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"pen",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-2"]};Vg.node;const Gg=Ee(Vg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Wg.node;const nc=Ee(Wg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Xg.node;const qg=Ee(Xg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};$g.node;const ib=Ee($g);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};Yg.node;const Kg=Ee(Yg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Zg.node;const Qg=Ee(Zg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Jg.node;const rb=Ee(Jg);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};ev.node;const sb=Ee(ev);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};tv.node;const vu=Ee(tv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv={name:"shopping-bag",size:24,node:[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]};nv.node;const Ba=Ee(nv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]};iv.node;const rh=Ee(iv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};rv.node;const ab=Ee(rv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};sv.node;const ws=Ee(sv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};av.node;const ob=Ee(av);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};ov.node;const lb=Ee(ov);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};lv.node;const sh=Ee(lv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};cv.node;const dv=Ee(cv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv={name:"type",size:24,node:[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]};uv.node;const fv=Ee(uv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};hv.node;const cb=Ee(hv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};pv.node;const ic=Ee(pv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};mv.node;const db=Ee(mv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv={name:"weight",size:24,node:[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]};xv.node;const ah=Ee(xv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};gv.node;const rc=Ee(gv);/**
 * @license lucide-react v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};vv.node;const _v=Ee(vv),ub=({currentPath:t,onNavigate:e})=>{var g,b;const{user:n,isAuthenticated:i,isAdmin:r,logout:s}=Is(),{cartCount:o}=za(),{setIsThemeModalOpen:l}=sg(),[c,d]=$.useState(!1),[f,p]=$.useState(!1),h=[{id:"catalog",label:"Catálogo",icon:Nn},{id:"quote",label:"Cotizador 3D",icon:ks},{id:"ai-design",label:"Diseño IA",icon:ws,badge:"IA"},{id:"tracking",label:"Seguimiento",icon:La},{id:"special-services",label:"Servicios Especiales",icon:tc},{id:"sponsors",label:"Patrocinadores",icon:ic},{id:"institutional",label:"Institucional",icon:q1}],m=(x,u=null)=>{e(x,u),d(!1),p(!1)};return a.jsxs("header",{className:"sticky top-0 z-40 w-full surface-card border-b border-slate-800/80 backdrop-blur-md bg-slate-950/90",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-20",children:[a.jsxs("div",{onClick:()=>m("home"),className:"flex items-center space-x-3 cursor-pointer group",children:[a.jsx("div",{className:"w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-cyan-300 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform",children:a.jsx(Nn,{className:"w-6 h-6 text-slate-950 stroke-[2.5]"})}),a.jsxs("div",{children:[a.jsxs("span",{className:"text-lg sm:text-xl font-extrabold tracking-tight block leading-none",children:["MAQUINAMOS",a.jsx("span",{className:"text-brand-500 ml-1",children:"3D"})]}),a.jsx("span",{className:"text-[10px] font-mono tracking-widest text-muted uppercase",children:"Fabricación Digital · CNC · Metal"})]})]}),a.jsx("nav",{className:"hidden lg:flex items-center space-x-1",children:h.map(x=>{const u=x.icon,_=t===x.id;return a.jsxs("button",{onClick:()=>m(x.id),className:`px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${_?"bg-brand-500/15 text-brand-400 border border-brand-500/30":"text-slate-300 hover:text-white hover:bg-slate-900/60"}`,children:[a.jsx(u,{className:"w-4 h-4"}),a.jsx("span",{children:x.label}),x.badge&&a.jsx("span",{className:"bg-brand-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded font-extrabold",children:x.badge})]},x.id)})}),a.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[a.jsx("button",{onClick:()=>l(!0),title:"Personalizar colores y tipografía",className:"p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-brand-400 hover:bg-slate-900 border border-slate-800 transition-colors",children:a.jsx(Hg,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),a.jsxs("button",{onClick:()=>m("cart"),className:"relative p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors",children:[a.jsx(Ba,{className:"w-4 h-4 sm:w-5 sm:h-5"}),o>0&&a.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-brand-500 text-slate-950 text-[11px] font-extrabold rounded-full flex items-center justify-center ring-2 ring-slate-950 animate-pulse",children:o})]}),r&&a.jsxs("button",{onClick:()=>m("admin"),className:`hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${t.startsWith("admin")?"bg-amber-500 text-slate-950 border-amber-400":"bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20"}`,children:[a.jsx(vu,{className:"w-4 h-4"}),a.jsx("span",{children:"Panel Admin"})]}),i?a.jsx("div",{className:"relative group",children:a.jsxs("button",{onClick:()=>m("tracking"),className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-slate-800 hover:border-slate-700 surface-subtle text-xs",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-bold text-xs",children:((g=n==null?void 0:n.name)==null?void 0:g.charAt(0))||"U"}),a.jsx("span",{className:"hidden md:inline font-medium text-slate-200",children:(b=n==null?void 0:n.name)==null?void 0:b.split(" ")[0]})]})}):a.jsx("button",{onClick:()=>m("login"),className:"px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-brand-500/20",children:"Ingresar"}),a.jsx("button",{onClick:()=>d(!c),className:"lg:hidden p-2 text-slate-400 hover:text-white",children:c?a.jsx(rc,{className:"w-6 h-6"}):a.jsx(eb,{className:"w-6 h-6"})})]})]})}),c&&a.jsxs("div",{className:"lg:hidden surface-card border-b border-slate-800 p-4 space-y-2 animate-fadeIn",children:[h.map(x=>{const u=x.icon;return a.jsxs("button",{onClick:()=>m(x.id),className:"w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(u,{className:"w-5 h-5 text-brand-400"}),a.jsx("span",{children:x.label})]}),x.badge&&a.jsx("span",{className:"bg-brand-500 text-slate-950 text-[10px] px-2 py-0.5 rounded font-bold",children:x.badge})]},x.id)}),r&&a.jsxs("button",{onClick:()=>m("admin"),className:"w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30",children:[a.jsx(vu,{className:"w-5 h-5"}),a.jsx("span",{children:"Panel de Administración"})]}),i&&a.jsxs("button",{onClick:()=>{s(),d(!1)},className:"w-full text-left px-3 py-2 text-xs text-rose-400 hover:bg-rose-950/20 rounded-xl",children:["Cerrar Sesión (",n==null?void 0:n.email,")"]})]})]})},fb=({onNavigate:t})=>a.jsx("footer",{className:"surface-card border-t border-slate-800/80 mt-20 pt-16 pb-12",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-300 flex items-center justify-center text-slate-950",children:a.jsx(Nn,{className:"w-5 h-5 stroke-[2.5]"})}),a.jsxs("span",{className:"text-lg font-extrabold tracking-tight",children:["MAQUINAMOS",a.jsx("span",{className:"text-brand-500 ml-1",children:"3D"})]})]}),a.jsx("p",{className:"text-xs text-muted leading-relaxed",children:"Taller de ingeniería y manufactura digital avanzada. Especialistas en impresión 3D FDM de gran formato (36 × 36 × 36 cm), tallado CNC en madera, avisos luminosos en neón flex y corte de metales."}),a.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-brand-400",children:[a.jsx(ug,{className:"w-4 h-4"}),a.jsx("span",{children:"Precisión dimensional y calibración industrial"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-white mb-4",children:"Líneas de Producción"}),a.jsxs("ul",{className:"space-y-2.5 text-xs text-muted",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>t("catalog",{category:"Impresión 3D"}),className:"hover:text-brand-400 transition-colors text-left",children:"Impresión 3D (PETG, PLA, ABS, TPU hasta 36cm)"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("catalog",{category:"Router CNC"}),className:"hover:text-brand-400 transition-colors text-left",children:"Router CNC Madera (100 × 75 × 15 cm)"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("catalog",{category:"Avisos"}),className:"hover:text-brand-400 transition-colors text-left",children:"Avisos en Acrílico y Neón Flex (Cualquier tamaño)"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("catalog",{category:"Metal"}),className:"hover:text-brand-400 transition-colors text-left",children:"Corte Metal (Hierro al carbón 3cm / Acero Inox 2cm)"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("special-services"),className:"hover:text-brand-400 transition-colors text-left text-brand-400",children:"Maquetas Arquitectónicas y Servicios Especiales →"})})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-white mb-4",children:"Institucional y Alianzas"}),a.jsxs("ul",{className:"space-y-2.5 text-xs text-muted",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>t("institutional"),className:"hover:text-brand-400 transition-colors",children:"Misión y Visión"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("institutional"),className:"hover:text-brand-400 transition-colors",children:"Política de Calidad y Objetivos"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("sponsors"),className:"hover:text-brand-400 transition-colors",children:"Empresas Patrocinadoras y Aliados"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("ai-design"),className:"hover:text-brand-400 transition-colors",children:"Generador Paramétrico con IA"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("tracking"),className:"hover:text-brand-400 transition-colors",children:"Rastreo en Vivo de Pedidos"})})]})]}),a.jsxs("div",{className:"space-y-3.5",children:[a.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-white mb-4",children:"Contacto y Taller"}),a.jsxs("div",{className:"space-y-2.5 text-xs text-slate-300",children:[a.jsxs("a",{href:"tel:3005076700",className:"flex items-center space-x-2.5 hover:text-brand-400 transition-colors group",children:[a.jsx("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800 text-brand-400 group-hover:border-brand-500/40",children:a.jsx(nc,{className:"w-4 h-4"})}),a.jsxs("div",{children:[a.jsx("span",{className:"block text-[10px] text-muted",children:"Línea de Atención Directa"}),a.jsx("span",{className:"font-bold text-sm",children:"Tel. 3005076700"})]})]}),a.jsxs("a",{href:"mailto:mmontalvova@gmail.com",className:"flex items-center space-x-2.5 hover:text-brand-400 transition-colors group",children:[a.jsx("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800 text-brand-400 group-hover:border-brand-500/40",children:a.jsx(ih,{className:"w-4 h-4"})}),a.jsxs("div",{children:[a.jsx("span",{className:"block text-[10px] text-muted",children:"Correo Corporativo"}),a.jsx("span",{className:"font-mono text-xs",children:"mmontalvova@gmail.com"})]})]}),a.jsxs("div",{className:"flex items-center space-x-2.5 text-muted",children:[a.jsx("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800",children:a.jsx(Us,{className:"w-4 h-4 text-brand-400"})}),a.jsxs("div",{children:[a.jsx("span",{className:"block text-[10px] text-muted",children:"Horario de Producción"}),a.jsx("span",{children:"Lunes a Sábado: 8:00 AM - 6:30 PM"})]})]})]})]})]}),a.jsxs("div",{className:"pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4",children:[a.jsxs("p",{children:["© ",new Date().getFullYear()," Maquinamos 3D · Todos los derechos reservados."]}),a.jsxs("div",{className:"flex items-center space-x-6",children:[a.jsx("span",{children:"Fabricación Digital Confiable"}),a.jsx("span",{children:"·"}),a.jsx("span",{className:"font-mono text-brand-400",children:"Medellín, Colombia"})]})]})]})}),hb=[{id:"cyan",name:"Cian Industrial (Orca)",color:"#06b6d4",class:"bg-cyan-500"},{id:"emerald",name:"Verde Esmeralda",color:"#10b981",class:"bg-emerald-500"},{id:"orange",name:"Naranja Prototipo",color:"#f97316",class:"bg-orange-500"},{id:"purple",name:"Púrpura Neón",color:"#a855f7",class:"bg-purple-500"},{id:"amber",name:"Ámbar Láser",color:"#f59e0b",class:"bg-amber-500"}],pb=[{id:"sm",label:"Compacta",desc:"14px - Máxima densidad de datos"},{id:"md",label:"Estándar",desc:"16px - Balance equilibrado"},{id:"lg",label:"Amplia",desc:"18px - Mayor legibilidad técnica"}],mb=()=>{const{theme:t,setTheme:e,palette:n,setPalette:i,fontSize:r,setFontSize:s,isThemeModalOpen:o,setIsThemeModalOpen:l}=sg();return o?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn",children:a.jsxs("div",{className:"w-full max-w-md surface-card border border-slate-700/80 rounded-2xl p-6 shadow-2xl relative",children:[a.jsx("button",{onClick:()=>l(!1),className:"absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors",children:a.jsx(rc,{className:"w-5 h-5"})}),a.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[a.jsx("div",{className:"p-2.5 bg-brand-500/10 text-brand-500 rounded-xl border border-brand-500/20",children:a.jsx(Hg,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold",children:"Personalización de Interfaz"}),a.jsx("p",{className:"text-xs text-muted",children:"Ajusta paletas, contraste y tipografía a tu gusto."})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted mb-2.5 block",children:"Modo de Pantalla"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("button",{type:"button",onClick:()=>e("dark"),className:`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${t==="dark"?"border-brand-500 bg-brand-500/10 text-brand-400 shadow-md":"border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700"}`,children:[a.jsx(tb,{className:"w-4 h-4"}),a.jsx("span",{children:"Modo Oscuro"})]}),a.jsxs("button",{type:"button",onClick:()=>e("light"),className:`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${t==="light"?"border-brand-500 bg-brand-500/10 text-brand-600 shadow-md":"border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700"}`,children:[a.jsx(ob,{className:"w-4 h-4"}),a.jsx("span",{children:"Modo Claro"})]})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted mb-2.5 block",children:"Paleta de Acentos de Color"}),a.jsx("div",{className:"space-y-2",children:hb.map(c=>{const d=n===c.id;return a.jsxs("button",{type:"button",onClick:()=>i(c.id),className:`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-sm transition-all ${d?"border-brand-500 bg-brand-500/10 font-semibold":"border-slate-800/80 hover:border-slate-700 surface-subtle"}`,children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("span",{className:`w-4 h-4 rounded-full ${c.class} shadow-sm`}),a.jsx("span",{children:c.name})]}),d&&a.jsx($1,{className:"w-4 h-4 text-brand-500"})]},c.id)})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center space-x-2 mb-2.5",children:[a.jsx(fv,{className:"w-4 h-4 text-brand-500"}),a.jsx("label",{className:"text-xs font-semibold uppercase tracking-wider text-muted block",children:"Tamaño de Tipografía"})]}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:pb.map(c=>a.jsx("button",{type:"button",onClick:()=>s(c.id),className:`py-2 px-2 rounded-xl border text-center transition-all ${r===c.id?"border-brand-500 bg-brand-500/10 text-brand-400 font-bold":"border-slate-800 surface-subtle text-slate-400 hover:border-slate-700 text-xs"}`,children:a.jsx("div",{className:"text-xs font-semibold",children:c.label})},c.id))})]}),a.jsx("button",{type:"button",onClick:()=>l(!1),className:"w-full py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl transition-colors shadow-lg shadow-brand-500/25",children:"Aplicar y Cerrar"})]})}):null},xb=({children:t,requireAdminRole:e=!1,onRedirect:n})=>{const{user:i,isAuthenticated:r,loading:s}=Is();return s?a.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):r?e&&(i==null?void 0:i.role)!=="admin"?a.jsxs("div",{className:"max-w-md mx-auto my-16 p-8 surface-card rounded-2xl border border-rose-900/50 text-center space-y-4",children:[a.jsx("h3",{className:"text-lg font-bold text-rose-400",children:"Acceso No Autorizado"}),a.jsx("p",{className:"text-xs text-muted",children:"Esta vista está reservada exclusivamente para el equipo de administración de Maquinamos 3D."}),a.jsx("button",{onClick:()=>n("home"),className:"w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors",children:"Volver al Inicio"})]}):t:a.jsxs("div",{className:"max-w-md mx-auto my-16 p-8 surface-card rounded-2xl border border-slate-800 text-center space-y-4",children:[a.jsx("h3",{className:"text-lg font-bold text-white",children:"Inicio de Sesión Requerido"}),a.jsx("p",{className:"text-xs text-muted",children:"Debes estar registrado e iniciar sesión para acceder a esta sección o completar una compra."}),a.jsx("button",{onClick:()=>n("login"),className:"w-full py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-sm transition-colors",children:"Ir a Iniciar Sesión / Registro"})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="169",gb=0,Hp=1,vb=2,yv=1,bv=2,si=3,Yi=0,sn=1,Yn=2,Gi=0,hs=1,Vp=2,Gp=3,Wp=4,_b=5,hr=100,yb=101,bb=102,Sb=103,Mb=104,wb=200,Eb=201,Tb=202,Cb=203,_u=204,yu=205,Ab=206,Nb=207,Rb=208,Pb=209,Lb=210,Db=211,Ib=212,Ub=213,kb=214,bu=0,Su=1,Mu=2,Es=3,wu=4,Eu=5,Tu=6,Cu=7,Sv=0,Fb=1,jb=2,Wi=0,Ob=1,zb=2,Bb=3,Hb=4,Vb=5,Gb=6,Wb=7,Mv=300,Ts=301,Cs=302,Au=303,Nu=304,sc=306,Ru=1e3,vr=1001,Pu=1002,wn=1003,Xb=1004,fo=1005,jn=1006,Gc=1007,_r=1008,vi=1009,wv=1010,Ev=1011,Da=1012,lh=1013,Ar=1014,di=1015,Ha=1016,ch=1017,dh=1018,As=1020,Tv=35902,Cv=1021,Av=1022,On=1023,Nv=1024,Rv=1025,ps=1026,Ns=1027,Pv=1028,uh=1029,Lv=1030,fh=1031,hh=1033,Jo=33776,el=33777,tl=33778,nl=33779,Lu=35840,Du=35841,Iu=35842,Uu=35843,ku=36196,Fu=37492,ju=37496,Ou=37808,zu=37809,Bu=37810,Hu=37811,Vu=37812,Gu=37813,Wu=37814,Xu=37815,qu=37816,$u=37817,Yu=37818,Ku=37819,Zu=37820,Qu=37821,il=36492,Ju=36494,ef=36495,Dv=36283,tf=36284,nf=36285,rf=36286,qb=3200,$b=3201,Iv=0,Yb=1,Di="",Xn="srgb",tr="srgb-linear",ph="display-p3",ac="display-p3-linear",Ll="linear",lt="srgb",Dl="rec709",Il="p3",Ir=7680,Xp=519,Kb=512,Zb=513,Qb=514,Uv=515,Jb=516,eS=517,tS=518,nS=519,qp=35044,$p="300 es",ui=2e3,Ul=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,sf=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function iS(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,l,c,d){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,d)}set(e,n,i,r,s,o,l,c,d){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],c=i[6],d=i[1],f=i[4],p=i[7],h=i[2],m=i[5],g=i[8],b=r[0],x=r[3],u=r[6],_=r[1],y=r[4],v=r[7],N=r[2],C=r[5],w=r[8];return s[0]=o*b+l*_+c*N,s[3]=o*x+l*y+c*C,s[6]=o*u+l*v+c*w,s[1]=d*b+f*_+p*N,s[4]=d*x+f*y+p*C,s[7]=d*u+f*v+p*w,s[2]=h*b+m*_+g*N,s[5]=h*x+m*y+g*C,s[8]=h*u+m*v+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8];return n*o*f-n*l*d-i*s*f+i*l*c+r*s*d-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=f*o-l*d,h=l*c-f*s,m=d*s-o*c,g=n*p+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=p*b,e[1]=(r*d-f*i)*b,e[2]=(l*i-r*o)*b,e[3]=h*b,e[4]=(f*n-r*c)*b,e[5]=(r*s-l*n)*b,e[6]=m*b,e[7]=(i*c-d*n)*b,e[8]=(o*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,l){const c=Math.cos(s),d=Math.sin(s);return this.set(i*c,i*d,-i*(c*o+d*l)+o+e,-r*d,r*c,-r*(-d*o+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Fe;function kv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rS(){const t=Ia("canvas");return t.style.display="block",t}const Yp={};function sl(t){t in Yp||(Yp[t]=!0,console.warn(t))}function sS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function aS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[tr]:{transfer:Ll,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:lt,primaries:Dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Ll,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Zp),fromReference:t=>t.applyMatrix3(Kp)},[ph]:{transfer:lt,primaries:Il,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Zp),fromReference:t=>t.applyMatrix3(Kp).convertLinearToSRGB()}},lS=new Set([tr,ac]),et={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!lS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===Di?Ll:Ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ys[e].luminanceCoefficients)}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ur;class cS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Ia("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class Fv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push($c(r[o].image)):s.push($c(r[o]))}else s=$c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uS=0;class Xt extends Fs{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=vr,r=vr,s=jn,o=_r,l=On,c=vi,d=Xt.DEFAULT_ANISOTROPY,f=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Va(),this.name="",this.source=new Fv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Mv;Xt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,d=c[0],f=c[4],p=c[8],h=c[1],m=c[5],g=c[9],b=c[2],x=c[6],u=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+b)<.1&&Math.abs(g+x)<.1&&Math.abs(d+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(d+1)/2,v=(m+1)/2,N=(u+1)/2,C=(f+h)/4,w=(p+b)/4,A=(g+x)/4;return y>v&&y>N?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=w/i):v>N?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=A/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=w/s,r=A/s),this.set(i,r,s,n),this}let _=Math.sqrt((x-g)*(x-g)+(p-b)*(p-b)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(p-b)/_,this.z=(h-f)/_,this.w=Math.acos((d+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fS extends Fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends fS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jv extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hS extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,l){let c=i[r+0],d=i[r+1],f=i[r+2],p=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],b=s[o+3];if(l===0){e[n+0]=c,e[n+1]=d,e[n+2]=f,e[n+3]=p;return}if(l===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=b;return}if(p!==b||c!==h||d!==m||f!==g){let x=1-l;const u=c*h+d*m+f*g+p*b,_=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const N=Math.sqrt(y),C=Math.atan2(N,u*_);x=Math.sin(x*C)/N,l=Math.sin(l*C)/N}const v=l*_;if(c=c*x+h*v,d=d*x+m*v,f=f*x+g*v,p=p*x+b*v,x===1-l){const N=1/Math.sqrt(c*c+d*d+f*f+p*p);c*=N,d*=N,f*=N,p*=N}}e[n]=c,e[n+1]=d,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const l=i[r],c=i[r+1],d=i[r+2],f=i[r+3],p=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[n]=l*g+f*p+c*m-d*h,e[n+1]=c*g+f*h+d*p-l*m,e[n+2]=d*g+f*m+l*h-c*p,e[n+3]=f*g-l*p-c*h-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(i/2),f=l(r/2),p=l(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*f*p+d*m*g,this._y=d*m*p-h*f*g,this._z=d*f*g+h*m*p,this._w=d*f*p-h*m*g;break;case"YXZ":this._x=h*f*p+d*m*g,this._y=d*m*p-h*f*g,this._z=d*f*g-h*m*p,this._w=d*f*p+h*m*g;break;case"ZXY":this._x=h*f*p-d*m*g,this._y=d*m*p+h*f*g,this._z=d*f*g+h*m*p,this._w=d*f*p-h*m*g;break;case"ZYX":this._x=h*f*p-d*m*g,this._y=d*m*p+h*f*g,this._z=d*f*g-h*m*p,this._w=d*f*p+h*m*g;break;case"YZX":this._x=h*f*p+d*m*g,this._y=d*m*p+h*f*g,this._z=d*f*g-h*m*p,this._w=d*f*p-h*m*g;break;case"XZY":this._x=h*f*p-d*m*g,this._y=d*m*p-h*f*g,this._z=d*f*g+h*m*p,this._w=d*f*p+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],c=n[9],d=n[2],f=n[6],p=n[10],h=i+l+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-d)*m,this._z=(o-r)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(f-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+d)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(s-d)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(o-r)/m,this._x=(s+d)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,l=n._x,c=n._y,d=n._z,f=n._w;return this._x=i*f+o*l+r*d-s*c,this._y=r*f+o*c+s*l-i*d,this._z=s*f+o*d+i*c-r*l,this._w=o*f-i*l-r*c-s*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const d=Math.sqrt(c),f=Math.atan2(d,l),p=Math.sin((1-n)*f)/d,h=Math.sin(n*f)/d;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*r-l*i),f=2*(l*n-s*r),p=2*(s*i-o*n);return this.x=n+c*d+o*p-l*f,this.y=i+c*f+l*d-s*p,this.z=r+c*p+s*f-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new j,Qp=new Ga;class Wa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),po.subVectors(this.max,Ks),kr.subVectors(e.a,Ks),Fr.subVectors(e.b,Ks),jr.subVectors(e.c,Ks),Si.subVectors(Fr,kr),Mi.subVectors(jr,Fr),rr.subVectors(kr,jr);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-rr.z,rr.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,rr.z,0,-rr.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-rr.y,rr.x,0];return!Kc(n,kr,Fr,jr,po)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,kr,Fr,jr,po))?!1:(mo.crossVectors(Si,Mi),n=[mo.x,mo.y,mo.z],Kc(n,kr,Fr,jr,po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new j,new j,new j,new j,new j,new j,new j,new j],Ln=new j,ho=new Wa,kr=new j,Fr=new j,jr=new j,Si=new j,Mi=new j,rr=new j,Ks=new j,po=new j,mo=new j,sr=new j;function Kc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){sr.fromArray(t,s);const l=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=e.dot(sr),d=n.dot(sr),f=i.dot(sr);if(Math.max(-Math.max(c,d,f),Math.min(c,d,f))>l)return!1}return!0}const pS=new Wa,Zs=new j,Zc=new j;class oc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Zc)),this.expandByPoint(Zs.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new j,Qc=new j,xo=new j,wi=new j,Jc=new j,go=new j,ed=new j;class Ov{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qc.copy(e).add(n).multiplyScalar(.5),xo.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xo),l=wi.dot(this.direction),c=-wi.dot(xo),d=wi.lengthSq(),f=Math.abs(1-o*o);let p,h,m,g;if(f>0)if(p=o*c-l,h=o*l-c,g=s*f,p>=0)if(h>=-g)if(h<=g){const b=1/f;p*=b,h*=b,m=p*(p+o*h+2*l)+h*(o*p+h+2*c)+d}else h=s,p=Math.max(0,-(o*h+l)),m=-p*p+h*(h+2*c)+d;else h=-s,p=Math.max(0,-(o*h+l)),m=-p*p+h*(h+2*c)+d;else h<=-g?(p=Math.max(0,-(-o*s+l)),h=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+d):h<=g?(p=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+d):(p=Math.max(0,-(o*s+l)),h=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+d);else h=o>0?-s:s,p=Math.max(0,-(o*h+l)),m=-p*p+h*(h+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Qc).addScaledVector(xo,h),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,l,c;const d=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return d>=0?(i=(e.min.x-h.x)*d,r=(e.max.x-h.x)*d):(i=(e.max.x-h.x)*d,r=(e.min.x-h.x)*d),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(l=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(l=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Jc.subVectors(n,e),go.subVectors(i,e),ed.crossVectors(Jc,go);let o=this.direction.dot(ed),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;wi.subVectors(this.origin,e);const c=l*this.direction.dot(go.crossVectors(wi,go));if(c<0)return null;const d=l*this.direction.dot(Jc.cross(wi));if(d<0||c+d>o)return null;const f=-l*wi.dot(ed);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,l,c,d,f,p,h,m,g,b,x){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,d,f,p,h,m,g,b,x)}set(e,n,i,r,s,o,l,c,d,f,p,h,m,g,b,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=l,u[13]=c,u[2]=d,u[6]=f,u[10]=p,u[14]=h,u[3]=m,u[7]=g,u[11]=b,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),d=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*p,g=l*f,b=l*p;n[0]=c*f,n[4]=-c*p,n[8]=d,n[1]=m+g*d,n[5]=h-b*d,n[9]=-l*c,n[2]=b-h*d,n[6]=g+m*d,n[10]=o*c}else if(e.order==="YXZ"){const h=c*f,m=c*p,g=d*f,b=d*p;n[0]=h+b*l,n[4]=g*l-m,n[8]=o*d,n[1]=o*p,n[5]=o*f,n[9]=-l,n[2]=m*l-g,n[6]=b+h*l,n[10]=o*c}else if(e.order==="ZXY"){const h=c*f,m=c*p,g=d*f,b=d*p;n[0]=h-b*l,n[4]=-o*p,n[8]=g+m*l,n[1]=m+g*l,n[5]=o*f,n[9]=b-h*l,n[2]=-o*d,n[6]=l,n[10]=o*c}else if(e.order==="ZYX"){const h=o*f,m=o*p,g=l*f,b=l*p;n[0]=c*f,n[4]=g*d-m,n[8]=h*d+b,n[1]=c*p,n[5]=b*d+h,n[9]=m*d-g,n[2]=-d,n[6]=l*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*d,g=l*c,b=l*d;n[0]=c*f,n[4]=b-h*p,n[8]=g*p+m,n[1]=p,n[5]=o*f,n[9]=-l*f,n[2]=-d*f,n[6]=m*p+g,n[10]=h-b*p}else if(e.order==="XZY"){const h=o*c,m=o*d,g=l*c,b=l*d;n[0]=c*f,n[4]=-p,n[8]=d*f,n[1]=h*p+b,n[5]=o*f,n[9]=m*p-g,n[2]=g*p-m,n[6]=l*f,n[10]=b*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mS,e,xS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ei.crossVectors(i,cn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ei.crossVectors(i,cn)),Ei.normalize(),vo.crossVectors(cn,Ei),r[0]=Ei.x,r[4]=vo.x,r[8]=cn.x,r[1]=Ei.y,r[5]=vo.y,r[9]=cn.y,r[2]=Ei.z,r[6]=vo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],c=i[8],d=i[12],f=i[1],p=i[5],h=i[9],m=i[13],g=i[2],b=i[6],x=i[10],u=i[14],_=i[3],y=i[7],v=i[11],N=i[15],C=r[0],w=r[4],A=r[8],F=r[12],S=r[1],E=r[5],O=r[9],z=r[13],X=r[2],G=r[6],V=r[10],Z=r[14],L=r[3],Q=r[7],J=r[11],ae=r[15];return s[0]=o*C+l*S+c*X+d*L,s[4]=o*w+l*E+c*G+d*Q,s[8]=o*A+l*O+c*V+d*J,s[12]=o*F+l*z+c*Z+d*ae,s[1]=f*C+p*S+h*X+m*L,s[5]=f*w+p*E+h*G+m*Q,s[9]=f*A+p*O+h*V+m*J,s[13]=f*F+p*z+h*Z+m*ae,s[2]=g*C+b*S+x*X+u*L,s[6]=g*w+b*E+x*G+u*Q,s[10]=g*A+b*O+x*V+u*J,s[14]=g*F+b*z+x*Z+u*ae,s[3]=_*C+y*S+v*X+N*L,s[7]=_*w+y*E+v*G+N*Q,s[11]=_*A+y*O+v*V+N*J,s[15]=_*F+y*z+v*Z+N*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],d=e[13],f=e[2],p=e[6],h=e[10],m=e[14],g=e[3],b=e[7],x=e[11],u=e[15];return g*(+s*c*p-r*d*p-s*l*h+i*d*h+r*l*m-i*c*m)+b*(+n*c*m-n*d*h+s*o*h-r*o*m+r*d*f-s*c*f)+x*(+n*d*p-n*l*m-s*o*p+i*o*m+s*l*f-i*d*f)+u*(-r*l*f-n*c*p+n*l*h+r*o*p-i*o*h+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],d=e[7],f=e[8],p=e[9],h=e[10],m=e[11],g=e[12],b=e[13],x=e[14],u=e[15],_=p*x*d-b*h*d+b*c*m-l*x*m-p*c*u+l*h*u,y=g*h*d-f*x*d-g*c*m+o*x*m+f*c*u-o*h*u,v=f*b*d-g*p*d+g*l*m-o*b*m-f*l*u+o*p*u,N=g*p*c-f*b*c-g*l*h+o*b*h+f*l*x-o*p*x,C=n*_+i*y+r*v+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(b*h*s-p*x*s-b*r*m+i*x*m+p*r*u-i*h*u)*w,e[2]=(l*x*s-b*c*s+b*r*d-i*x*d-l*r*u+i*c*u)*w,e[3]=(p*c*s-l*h*s-p*r*d+i*h*d+l*r*m-i*c*m)*w,e[4]=y*w,e[5]=(f*x*s-g*h*s+g*r*m-n*x*m-f*r*u+n*h*u)*w,e[6]=(g*c*s-o*x*s-g*r*d+n*x*d+o*r*u-n*c*u)*w,e[7]=(o*h*s-f*c*s+f*r*d-n*h*d-o*r*m+n*c*m)*w,e[8]=v*w,e[9]=(g*p*s-f*b*s-g*i*m+n*b*m+f*i*u-n*p*u)*w,e[10]=(o*b*s-g*l*s+g*i*d-n*b*d-o*i*u+n*l*u)*w,e[11]=(f*l*s-o*p*s-f*i*d+n*p*d+o*i*m-n*l*m)*w,e[12]=N*w,e[13]=(f*b*r-g*p*r+g*i*h-n*b*h-f*i*x+n*p*x)*w,e[14]=(g*l*r-o*b*r-g*i*c+n*b*c+o*i*x-n*l*x)*w,e[15]=(o*p*r-f*l*r+f*i*c-n*p*c-o*i*h+n*l*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,l=e.y,c=e.z,d=s*o,f=s*l;return this.set(d*o+i,d*l-r*c,d*c+r*l,0,d*l+r*c,f*l+i,f*c-r*o,0,d*c-r*l,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,c=n._w,d=s+s,f=o+o,p=l+l,h=s*d,m=s*f,g=s*p,b=o*f,x=o*p,u=l*p,_=c*d,y=c*f,v=c*p,N=i.x,C=i.y,w=i.z;return r[0]=(1-(b+u))*N,r[1]=(m+v)*N,r[2]=(g-y)*N,r[3]=0,r[4]=(m-v)*C,r[5]=(1-(h+u))*C,r[6]=(x+_)*C,r[7]=0,r[8]=(g+y)*w,r[9]=(x-_)*w,r[10]=(1-(h+b))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),l=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const d=1/s,f=1/o,p=1/l;return Dn.elements[0]*=d,Dn.elements[1]*=d,Dn.elements[2]*=d,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=p,Dn.elements[9]*=p,Dn.elements[10]*=p,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,o,l=ui){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(l===ui)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(l===Ul)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,l=ui){const c=this.elements,d=1/(n-e),f=1/(i-r),p=1/(o-s),h=(n+e)*d,m=(i+r)*f;let g,b;if(l===ui)g=(o+s)*p,b=-2*p;else if(l===Ul)g=s*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new j,Dn=new ht,mS=new j(0,0,0),xS=new j(1,1,1),Ei=new j,vo=new j,cn=new j,Jp=new ht,em=new Ga;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],d=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gS=0;const tm=new j,zr=new Ga,ni=new ht,_o=new j,Qs=new j,vS=new j,_S=new Ga,nm=new j(1,0,0),im=new j(0,1,0),rm=new j(0,0,1),sm={type:"added"},yS={type:"removed"},Br={type:"childadded",child:null},td={type:"childremoved",child:null};class Ut extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new j,n=new Qn,i=new Ga,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Fe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Qs,_o,this.up):ni.lookAt(_o,Qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yS),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,vS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,_S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,f=c.length;d<f;d++){const p=c[d];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new j(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new j,ii=new j,nd=new j,ri=new j,Hr=new j,Vr=new j,am=new j,id=new j,rd=new j,sd=new j,ad=new gt,od=new gt,ld=new gt;class Sn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ii.subVectors(i,n),nd.subVectors(e,n);const o=In.dot(In),l=In.dot(ii),c=In.dot(nd),d=ii.dot(ii),f=ii.dot(nd),p=o*d-l*l;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(d*c-l*f)*h,g=(o*f-l*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,l,c){return this.getBarycoord(e,n,i,r,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(l,ri.z),c)}static getInterpolatedAttribute(e,n,i,r,s,o){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,n),od.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ad,s.x),o.addScaledVector(od,s.y),o.addScaledVector(ld,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ii.subVectors(e,n),In.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,l;Hr.subVectors(r,i),Vr.subVectors(s,i),id.subVectors(e,i);const c=Hr.dot(id),d=Vr.dot(id);if(c<=0&&d<=0)return n.copy(i);rd.subVectors(e,r);const f=Hr.dot(rd),p=Vr.dot(rd);if(f>=0&&p<=f)return n.copy(r);const h=c*p-f*d;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(Hr,o);sd.subVectors(e,s);const m=Hr.dot(sd),g=Vr.dot(sd);if(g>=0&&m<=g)return n.copy(s);const b=m*d-c*g;if(b<=0&&d>=0&&g<=0)return l=d/(d-g),n.copy(i).addScaledVector(Vr,l);const x=f*g-m*p;if(x<=0&&p-f>=0&&m-g>=0)return am.subVectors(s,r),l=(p-f)/(p-f+(m-g)),n.copy(r).addScaledVector(am,l);const u=1/(x+b+h);return o=b*u,l=h*u,n.copy(i).addScaledVector(Hr,o).addScaledVector(Vr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},yo={h:0,s:0,l:0};function cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=iS(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=cd(o,s,e+1/3),this.g=cd(o,s,e),this.b=cd(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=Bv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Jt(zt.r*255,0,255))*65536+Math.round(Jt(zt.g*255,0,255))*256+Math.round(Jt(zt.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,d;const f=(l+o)/2;if(l===o)c=0,d=0;else{const p=o-l;switch(d=f<=.5?p/(o+l):p/(2-o-l),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Xn){et.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(yo);const i=Wc(Ti.h,yo.h,n),r=Wc(Ti.s,yo.s,n),s=Wc(Ti.l,yo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ve;Ve.NAMES=Bv;let bS=0;class js extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=hs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=yu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_u&&(i.blendSrc=this.blendSrc),this.blendDst!==yu&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hv extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new j,bo=new Xe;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class Vv extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gv extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mt extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let SS=0;const vn=new ht,dd=new Ut,Gr=new j,dn=new Wa,Js=new Wa,At=new j;class an extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?Gv:Vv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];Js.setFromBufferAttribute(l),this.morphTargetsRelative?(At.addVectors(dn.min,Js.min),dn.expandByPoint(At),At.addVectors(dn.max,Js.max),dn.expandByPoint(At)):(dn.expandByPoint(Js.min),dn.expandByPoint(Js.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],c=this.morphTargetsRelative;for(let d=0,f=l.count;d<f;d++)At.fromBufferAttribute(l,d),c&&(Gr.fromBufferAttribute(e,d),At.add(Gr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let A=0;A<i.count;A++)l[A]=new j,c[A]=new j;const d=new j,f=new j,p=new j,h=new Xe,m=new Xe,g=new Xe,b=new j,x=new j;function u(A,F,S){d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,F),p.fromBufferAttribute(i,S),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,F),g.fromBufferAttribute(s,S),f.sub(d),p.sub(d),m.sub(h),g.sub(h);const E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(b.copy(f).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(E),x.copy(p).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(E),l[A].add(b),l[F].add(b),l[S].add(b),c[A].add(x),c[F].add(x),c[S].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,F=_.length;A<F;++A){const S=_[A],E=S.start,O=S.count;for(let z=E,X=E+O;z<X;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new j,v=new j,N=new j,C=new j;function w(A){N.fromBufferAttribute(r,A),C.copy(N);const F=l[A];y.copy(F),y.sub(N.multiplyScalar(N.dot(F))).normalize(),v.crossVectors(C,F);const E=v.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,E)}for(let A=0,F=_.length;A<F;++A){const S=_[A],E=S.start,O=S.count;for(let z=E,X=E+O;z<X;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,l=new j,c=new j,d=new j,f=new j,p=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),b=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,b),o.fromBufferAttribute(n,x),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),l.add(f),c.add(f),d.add(f),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(l,c){const d=l.array,f=l.itemSize,p=l.normalized,h=new d.constructor(c.length*f);let m=0,g=0;for(let b=0,x=c.length;b<x;b++){l.isInterleavedBufferAttribute?m=c[b]*l.data.stride+l.offset:m=c[b]*f;for(let u=0;u<f;u++)h[g++]=d[m++]}return new Tn(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new an,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],d=e(c,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const c=[],d=s[l];for(let f=0,p=d.length;f<p;f++){const h=d[f],m=e(h,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],f=[];for(let p=0,h=d.length;p<h;p++){const m=d[p];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const d in r){const f=r[d];this.setAttribute(d,f.clone(n))}const s=e.morphAttributes;for(const d in s){const f=[],p=s[d];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,f=o.length;d<f;d++){const p=o[d];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new ht,ar=new Ov,So=new oc,lm=new j,Mo=new j,wo=new j,Eo=new j,ud=new j,To=new j,cm=new j,Co=new j;class zn extends Ut{constructor(e=new an,n=new Hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){To.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const f=l[c],p=s[c];f!==0&&(ud.fromBufferAttribute(p,e),o?To.addScaledVector(ud,f):To.addScaledVector(ud.sub(n),f))}n.add(To)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(So.containsPoint(ar.origin)===!1&&(ar.intersectSphere(So,lm)===null||ar.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(s).invert(),ar.copy(e.ray).applyMatrix4(om),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,d=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){const x=h[g],u=o[x.materialIndex],_=Math.max(x.start,m.start),y=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let v=_,N=y;v<N;v+=3){const C=l.getX(v),w=l.getX(v+1),A=l.getX(v+2);r=Ao(this,u,e,i,d,f,p,C,w,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let x=g,u=b;x<u;x+=3){const _=l.getX(x),y=l.getX(x+1),v=l.getX(x+2);r=Ao(this,o,e,i,d,f,p,_,y,v),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){const x=h[g],u=o[x.materialIndex],_=Math.max(x.start,m.start),y=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let v=_,N=y;v<N;v+=3){const C=v,w=v+1,A=v+2;r=Ao(this,u,e,i,d,f,p,C,w,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let x=g,u=b;x<u;x+=3){const _=x,y=x+1,v=x+2;r=Ao(this,o,e,i,d,f,p,_,y,v),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function MS(t,e,n,i,r,s,o,l){let c;if(e.side===sn?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,e.side===Yi,l),c===null)return null;Co.copy(l),Co.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Co);return d<n.near||d>n.far?null:{distance:d,point:Co.clone(),object:t}}function Ao(t,e,n,i,r,s,o,l,c,d){t.getVertexPosition(l,Mo),t.getVertexPosition(c,wo),t.getVertexPosition(d,Eo);const f=MS(t,e,n,i,Mo,wo,Eo,cm);if(f){const p=new j;Sn.getBarycoord(cm,Mo,wo,Eo,p),r&&(f.uv=Sn.getInterpolatedAttribute(r,l,c,d,p,new Xe)),s&&(f.uv1=Sn.getInterpolatedAttribute(s,l,c,d,p,new Xe)),o&&(f.normal=Sn.getInterpolatedAttribute(o,l,c,d,p,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:l,b:c,c:d,normal:new j,materialIndex:0};Sn.getNormal(Mo,wo,Eo,h.normal),f.face=h,f.barycoord=p}return f}class Xi extends an{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],d=[],f=[],p=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function g(b,x,u,_,y,v,N,C,w,A,F){const S=v/w,E=N/A,O=v/2,z=N/2,X=C/2,G=w+1,V=A+1;let Z=0,L=0;const Q=new j;for(let J=0;J<V;J++){const ae=J*E-z;for(let Te=0;Te<G;Te++){const He=Te*S-O;Q[b]=He*_,Q[x]=ae*y,Q[u]=X,d.push(Q.x,Q.y,Q.z),Q[b]=0,Q[x]=0,Q[u]=C>0?1:-1,f.push(Q.x,Q.y,Q.z),p.push(Te/w),p.push(1-J/A),Z+=1}}for(let J=0;J<A;J++)for(let ae=0;ae<w;ae++){const Te=h+ae+G*J,He=h+ae+G*(J+1),q=h+(ae+1)+G*(J+1),ne=h+(ae+1)+G*J;c.push(Te,He,ne),c.push(He,q,ne),L+=6}l.addGroup(m,L,F),m+=L,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function wS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ES={clone:Rs,merge:Vt};var TS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=wS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xv extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new j,dm=new Xe,um=new Xe;class bn extends Xv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,dm,um),n.subVectors(um,dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/d,r*=o.width/c,i*=o.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class AS extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new bn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const o=new bn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new bn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new bn(Wr,Xr,e,n);c.layers=this.layers,this.add(c);const d=new bn(Wr,Xr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,c]=n;for(const d of n)this.remove(d);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,d,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qv extends Xt{constructor(e,n,i,r,s,o,l,c,d,f){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,o,l,c,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NS extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new zn(r,s),l=n.minFilter;return n.minFilter===_r&&(n.minFilter=jn),new AS(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fd=new j,RS=new j,PS=new Fe;class Ri{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fd.subVectors(i,n).cross(RS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PS.getNormalMatrix(e),r=this.coplanarPoint(fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new oc,No=new j;class mh{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],p=r[6],h=r[7],m=r[8],g=r[9],b=r[10],x=r[11],u=r[12],_=r[13],y=r[14],v=r[15];if(i[0].setComponents(c-s,h-d,x-m,v-u).normalize(),i[1].setComponents(c+s,h+d,x+m,v+u).normalize(),i[2].setComponents(c+o,h+f,x+g,v+_).normalize(),i[3].setComponents(c-o,h-f,x-g,v-_).normalize(),i[4].setComponents(c-l,h-p,x-b,v-y).normalize(),n===ui)i[5].setComponents(c+l,h+p,x+b,v+y).normalize();else if(n===Ul)i[5].setComponents(l,p,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LS(t){const e=new WeakMap;function n(l,c){const d=l.array,f=l.usage,p=d.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,d,f),l.onUploadCallback();let m;if(d instanceof Float32Array)m=t.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=t.SHORT;else if(d instanceof Uint32Array)m=t.UNSIGNED_INT;else if(d instanceof Int32Array)m=t.INT;else if(d instanceof Int8Array)m=t.BYTE;else if(d instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,d){const f=c.array,p=c.updateRanges;if(t.bindBuffer(d,l),p.length===0)t.bufferSubData(d,0,f);else{p.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<p.length;m++){const g=p[h],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,p[h]=b)}p.length=h+1;for(let m=0,g=p.length;m<g;m++){const b=p[m];t.bufferSubData(d,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,c),d.version=l.version}}return{get:r,remove:s,update:o}}class lc extends an{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,l=Math.floor(i),c=Math.floor(r),d=l+1,f=c+1,p=e/l,h=n/c,m=[],g=[],b=[],x=[];for(let u=0;u<f;u++){const _=u*h-o;for(let y=0;y<d;y++){const v=y*p-s;g.push(v,-_,0),b.push(0,0,1),x.push(y/l),x.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<l;_++){const y=_+d*u,v=_+d*(u+1),N=_+1+d*(u+1),C=_+1+d*u;m.push(y,v,C),m.push(v,N,C)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(b,3)),this.setAttribute("uv",new Mt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var DS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,US=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ow=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_w=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ew=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:DS,alphahash_pars_fragment:IS,alphamap_fragment:US,alphamap_pars_fragment:kS,alphatest_fragment:FS,alphatest_pars_fragment:jS,aomap_fragment:OS,aomap_pars_fragment:zS,batching_pars_vertex:BS,batching_vertex:HS,begin_vertex:VS,beginnormal_vertex:GS,bsdfs:WS,iridescence_fragment:XS,bumpmap_pars_fragment:qS,clipping_planes_fragment:$S,clipping_planes_pars_fragment:YS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:ZS,color_fragment:QS,color_pars_fragment:JS,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:aM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:dM,envmap_fragment:uM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:EM,envmap_vertex:mM,fog_vertex:xM,fog_pars_vertex:gM,fog_fragment:vM,fog_pars_fragment:_M,gradientmap_pars_fragment:yM,lightmap_pars_fragment:bM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:MM,lights_pars_begin:wM,lights_toon_fragment:TM,lights_toon_pars_fragment:CM,lights_phong_fragment:AM,lights_phong_pars_fragment:NM,lights_physical_fragment:RM,lights_physical_pars_fragment:PM,lights_fragment_begin:LM,lights_fragment_maps:DM,lights_fragment_end:IM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:jM,map_fragment:OM,map_pars_fragment:zM,map_particle_fragment:BM,map_particle_pars_fragment:HM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:GM,morphinstance_vertex:WM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:$M,morphtarget_vertex:YM,normal_fragment_begin:KM,normal_fragment_maps:ZM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:ew,normalmap_pars_fragment:tw,clearcoat_normal_fragment_begin:nw,clearcoat_normal_fragment_maps:iw,clearcoat_pars_fragment:rw,iridescence_pars_fragment:sw,opaque_fragment:aw,packing:ow,premultiplied_alpha_fragment:lw,project_vertex:cw,dithering_fragment:dw,dithering_pars_fragment:uw,roughnessmap_fragment:fw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:pw,shadowmap_pars_vertex:mw,shadowmap_vertex:xw,shadowmask_pars_fragment:gw,skinbase_vertex:vw,skinning_pars_vertex:_w,skinning_vertex:yw,skinnormal_vertex:bw,specularmap_fragment:Sw,specularmap_pars_fragment:Mw,tonemapping_fragment:ww,tonemapping_pars_fragment:Ew,transmission_fragment:Tw,transmission_pars_fragment:Cw,uv_pars_fragment:Aw,uv_pars_vertex:Nw,uv_vertex:Rw,worldpos_vertex:Pw,background_vert:Lw,background_frag:Dw,backgroundCube_vert:Iw,backgroundCube_frag:Uw,cube_vert:kw,cube_frag:Fw,depth_vert:jw,depth_frag:Ow,distanceRGBA_vert:zw,distanceRGBA_frag:Bw,equirect_vert:Hw,equirect_frag:Vw,linedashed_vert:Gw,linedashed_frag:Ww,meshbasic_vert:Xw,meshbasic_frag:qw,meshlambert_vert:$w,meshlambert_frag:Yw,meshmatcap_vert:Kw,meshmatcap_frag:Zw,meshnormal_vert:Qw,meshnormal_frag:Jw,meshphong_vert:eE,meshphong_frag:tE,meshphysical_vert:nE,meshphysical_frag:iE,meshtoon_vert:rE,meshtoon_frag:sE,points_vert:aE,points_frag:oE,shadow_vert:lE,shadow_frag:cE,sprite_vert:dE,sprite_frag:uE},oe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},qn={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qn.physical={uniforms:Vt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ro={r:0,b:0,g:0},lr=new Qn,fE=new ht;function hE(t,e,n,i,r,s,o){const l=new Ve(0);let c=s===!0?0:1,d,f,p=null,h=0,m=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function b(_){let y=!1;const v=g(_);v===null?u(l,c):v&&v.isColor&&(u(v,1),y=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===sc)?(f===void 0&&(f=new zn(new Xi(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Rs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),lr.copy(y.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(fE.makeRotationFromEuler(lr)),f.material.toneMapped=et.getTransfer(v.colorSpace)!==lt,(p!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(d===void 0&&(d=new zn(new lc(2,2),new Ki({name:"BackgroundMaterial",uniforms:Rs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=v,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.toneMapped=et.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),d.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||h!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=v,h=v.version,m=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null))}function u(_,y){_.getRGB(Ro,Wv(t)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,y,o)}return{getClearColor:function(){return l},setClearColor:function(_,y=1){l.set(_),c=y,u(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,u(l,c)},render:b,addToRenderList:x}}function pE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function l(S,E,O,z,X){let G=!1;const V=p(z,O,E);s!==V&&(s=V,d(s.object)),G=m(S,z,O,X),G&&g(S,z,O,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(S,E,O,z),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function d(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function p(S,E,O){const z=O.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let G=X[E.id];G===void 0&&(G={},X[E.id]=G);let V=G[z];return V===void 0&&(V=h(c()),G[z]=V),V}function h(S){const E=[],O=[],z=[];for(let X=0;X<n;X++)E[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function m(S,E,O,z){const X=s.attributes,G=E.attributes;let V=0;const Z=O.getAttributes();for(const L in Z)if(Z[L].location>=0){const J=X[L];let ae=G[L];if(ae===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function g(S,E,O,z){const X={},G=E.attributes;let V=0;const Z=O.getAttributes();for(const L in Z)if(Z[L].location>=0){let J=G[L];J===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),X[L]=ae,V++}s.attributes=X,s.attributesNum=V,s.index=z}function b(){const S=s.newAttributes;for(let E=0,O=S.length;E<O;E++)S[E]=0}function x(S){u(S,0)}function u(S,E){const O=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;O[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),X[S]!==E&&(t.vertexAttribDivisor(S,E),X[S]=E)}function _(){const S=s.newAttributes,E=s.enabledAttributes;for(let O=0,z=E.length;O<z;O++)E[O]!==S[O]&&(t.disableVertexAttribArray(O),E[O]=0)}function y(S,E,O,z,X,G,V){V===!0?t.vertexAttribIPointer(S,E,O,X,G):t.vertexAttribPointer(S,E,O,z,X,G)}function v(S,E,O,z){b();const X=z.attributes,G=O.getAttributes(),V=E.defaultAttributeValues;for(const Z in G){const L=G[Z];if(L.location>=0){let Q=X[Z];if(Q===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const J=Q.normalized,ae=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const He=Te.buffer,q=Te.type,ne=Te.bytesPerElement,de=q===t.INT||q===t.UNSIGNED_INT||Q.gpuType===lh;if(Q.isInterleavedBufferAttribute){const le=Q.data,Le=le.stride,Se=Q.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<L.locationSize;Ce++)u(L.location+Ce,le.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<L.locationSize;Ce++)x(L.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ce=0;Ce<L.locationSize;Ce++)y(L.location+Ce,ae/L.locationSize,q,J,Le*ne,(Se+ae/L.locationSize*Ce)*ne,de)}else{if(Q.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)u(L.location+le,Q.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<L.locationSize;le++)x(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,He);for(let le=0;le<L.locationSize;le++)y(L.location+le,ae/L.locationSize,q,J,ae*ne,ae/L.locationSize*le*ne,de)}}else if(V!==void 0){const J=V[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(L.location,J);break;case 3:t.vertexAttrib3fv(L.location,J);break;case 4:t.vertexAttrib4fv(L.location,J);break;default:t.vertexAttrib1fv(L.location,J)}}}}_()}function N(){A();for(const S in i){const E=i[S];for(const O in E){const z=E[O];for(const X in z)f(z[X].object),delete z[X];delete E[O]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const O in E){const z=E[O];for(const X in z)f(z[X].object),delete z[X];delete E[O]}delete i[S.id]}function w(S){for(const E in i){const O=i[E];if(O[S.id]===void 0)continue;const z=O[S.id];for(const X in z)f(z[X].object),delete z[X];delete O[S.id]}}function A(){F(),o=!0,s!==r&&(s=r,d(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:A,resetDefaultState:F,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:x,disableUnusedAttributes:_}}function mE(t,e,n){let i;function r(d){i=d}function s(d,f){t.drawArrays(i,d,f),n.update(f,i,1)}function o(d,f,p){p!==0&&(t.drawArraysInstanced(i,d,f,p),n.update(f,i,p))}function l(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,f,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];n.update(m,i,1)}function c(d,f,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)o(d[g],f[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,d,0,f,0,h,0,p);let g=0;for(let b=0;b<p;b++)g+=f[b];for(let b=0;b<h.length;b++)n.update(g,i,h[b])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function xE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==On&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const A=w===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==di&&!A)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const f=c(d);f!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",f,"instead."),d=f);const p=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:N,maxSamples:C}}function gE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ri,l=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const g=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,u=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?f(null):d();else{const _=s?0:i,y=_*4;let v=u.clippingState||null;c.value=v,v=f(g,h,y,m);for(let N=0;N!==y;++N)v[N]=n[N];u.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function d(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,g){const b=p!==null?p.length:0;let x=null;if(b!==0){if(x=c.value,g!==!0||x===null){const u=m+b*4,_=h.matrixWorldInverse;l.getNormalMatrix(_),(x===null||x.length<u)&&(x=new Float32Array(u));for(let y=0,v=m;y!==b;++y,v+=4)o.copy(p[y]).applyMatrix4(_,l),o.normal.toArray(x,v),x[v+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function vE(t){let e=new WeakMap;function n(o,l){return l===Au?o.mapping=Ts:l===Nu&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===Au||l===Nu)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new NS(c.height);return d.fromEquirectangularTexture(t,o),e.set(o,d),o.addEventListener("dispose",r),n(d.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yv extends Xv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,fm=[.125,.215,.35,.446,.526,.582],pr=20,hd=new Yv,hm=new Ve;let pd=null,md=0,xd=0,gd=!1;const fr=(1+Math.sqrt(5))/2,qr=1/fr,pm=[new j(-fr,qr,0),new j(fr,qr,0),new j(-qr,0,fr),new j(qr,0,fr),new j(0,fr,-qr),new j(0,fr,qr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,xd),this._renderer.xr.enabled=gd,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ha,format:On,colorSpace:tr,depthBuffer:!1},r=xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_E(s)),this._blurMaterial=yE(s,e,n)}return r}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,hd)}_sceneToCubeUV(e,n,i,r){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(hm),f.toneMapping=Wi,f.autoClear=!1;const m=new Hv({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new zn(new Xi,m);let b=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,b=!0):(m.color.copy(hm),b=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(l.up.set(0,c[u],0),l.lookAt(d[u],0,0)):_===1?(l.up.set(0,0,c[u]),l.lookAt(0,d[u],0)):(l.up.set(0,c[u],0),l.lookAt(0,0,d[u]));const y=this._cubeSize;Po(r,_*y,u>2?y:0,y,y),f.setRenderTarget(r),b&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Po(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,hd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=pm[(r-s-1)%pm.length];this._blur(e,s-1,s,o,l)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,l){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new zn(this._lodPlanes[r],d),h=d.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*pr-1),b=s/g,x=isFinite(s)?1+Math.floor(f*b):pr;x>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pr}`);const u=[];let _=0;for(let w=0;w<pr;++w){const A=w/b,F=Math.exp(-A*A/2);u.push(F),w===0?_+=F:w<x&&(_+=2*F)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=u,h.latitudinal.value=o==="latitudinal",l&&(h.poleAxis.value=l);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[r],N=3*v*(r>y-as?r-y+as:0),C=4*(this._cubeSize-v);Po(n,N,C,3*v,2*v),c.setRenderTarget(n),c.render(p,hd)}}function _E(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+fm.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);n.push(l);let c=1/l;o>t-as?c=fm[o-t+as-1]:o===0&&(c=0),i.push(c);const d=1/(l-2),f=-d,p=1+d,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,g=6,b=3,x=2,u=1,_=new Float32Array(b*g*m),y=new Float32Array(x*g*m),v=new Float32Array(u*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,A=C>2?0:-1,F=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];_.set(F,b*g*C),y.set(h,x*g*C);const S=[C,C,C,C,C,C];v.set(S,u*g*C)}const N=new an;N.setAttribute("position",new Tn(_,b)),N.setAttribute("uv",new Tn(y,x)),N.setAttribute("faceIndex",new Tn(v,u)),e.push(N),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yE(t,e,n){const i=new Float32Array(pr),r=new j(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gm(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function vm(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bE(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,d=c===Au||c===Nu,f=c===Ts||c===Cs;if(d||f){let p=e.get(l);const h=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==h)return n===null&&(n=new mm(t)),p=d?n.fromEquirectangular(l,p):n.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const m=l.image;return d&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new mm(t)),p=d?n.fromEquirectangular(l):n.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function r(l){let c=0;const d=6;for(let f=0;f<d;f++)l[f]!==void 0&&c++;return c===d}function s(l){const c=l.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function SE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&sl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ME(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const b=h.morphAttributes[g];for(let x=0,u=b.length;x<u;x++)e.remove(b[x])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function l(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const b=m[g];for(let x=0,u=b.length;x<u;x++)e.update(b[x],t.ARRAY_BUFFER)}}function d(p){const h=[],m=p.index,g=p.attributes.position;let b=0;if(m!==null){const _=m.array;b=m.version;for(let y=0,v=_.length;y<v;y+=3){const N=_[y+0],C=_[y+1],w=_[y+2];h.push(N,C,C,w,w,N)}}else if(g!==void 0){const _=g.array;b=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const N=y+0,C=y+1,w=y+2;h.push(N,C,C,w,w,N)}}else return;const x=new(kv(h)?Gv:Vv)(h,1);x.version=b;const u=s.get(p);u&&e.remove(u),s.set(p,x)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&d(p)}else d(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:f}}function wE(t,e,n){let i;function r(h){i=h}let s,o;function l(h){s=h.type,o=h.bytesPerElement}function c(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function d(h,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,h*o,g),n.update(m,i,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let x=0;for(let u=0;u<g;u++)x+=m[u];n.update(x,i,1)}function p(h,m,g,b){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<h.length;u++)d(h[u]/o,m[u],b[u]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,b,0,g);let u=0;for(let _=0;_<g;_++)u+=m[_];for(let _=0;_<b.length;_++)n.update(u,i,b[_])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function EE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TE(t,e,n){const i=new WeakMap,r=new gt;function s(o,l,c){const d=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(l);if(h===void 0||h.count!==p){let S=function(){A.dispose(),i.delete(l),l.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,u=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let v=0;g===!0&&(v=1),b===!0&&(v=2),x===!0&&(v=3);let N=l.attributes.position.count*v,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*C*4*p),A=new jv(w,N,C,p);A.type=di,A.needsUpdate=!0;const F=v*4;for(let E=0;E<p;E++){const O=u[E],z=_[E],X=y[E],G=N*C*4*E;for(let V=0;V<O.count;V++){const Z=V*F;g===!0&&(r.fromBufferAttribute(O,V),w[G+Z+0]=r.x,w[G+Z+1]=r.y,w[G+Z+2]=r.z,w[G+Z+3]=0),b===!0&&(r.fromBufferAttribute(z,V),w[G+Z+4]=r.x,w[G+Z+5]=r.y,w[G+Z+6]=r.z,w[G+Z+7]=0),x===!0&&(r.fromBufferAttribute(X,V),w[G+Z+8]=r.x,w[G+Z+9]=r.y,w[G+Z+10]=r.z,w[G+Z+11]=X.itemSize===4?r.w:1)}}h={count:p,texture:A,size:new Xe(N,C)},i.set(l,h),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let x=0;x<d.length;x++)g+=d[x];const b=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",d)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function CE(t,e,n,i){let r=new WeakMap;function s(c){const d=i.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return p}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}class Kv extends Xt{constructor(e,n,i,r,s,o,l,c,d,f=ps){if(f!==ps&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ps&&(i=Ar),i===void 0&&f===Ns&&(i=As),super(null,r,s,o,l,c,f,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Zv=new Xt,_m=new Kv(1,1),Qv=new jv,Jv=new hS,e_=new qv,ym=[],bm=[],Sm=new Float32Array(16),Mm=new Float32Array(9),wm=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;wm.set(i),t.uniformMatrix2fv(this.addr,!1,wm),Ct(n,i)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),Ct(n,i)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Sm.set(i),t.uniformMatrix4fv(this.addr,!1,Sm),Ct(n,i)}}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function OE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_m.compareFunction=Uv,s=_m):s=Zv,n.setTexture2D(e||s,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jv,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||e_,r)}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qv,r)}function qE(t){switch(t){case 5126:return AE;case 35664:return NE;case 35665:return RE;case 35666:return PE;case 35674:return LE;case 35675:return DE;case 35676:return IE;case 5124:case 35670:return UE;case 35667:case 35671:return kE;case 35668:case 35672:return FE;case 35669:case 35673:return jE;case 5125:return OE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}function $E(t,e){t.uniform1fv(this.addr,e)}function YE(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function KE(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function ZE(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function QE(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JE(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function e2(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function t2(t,e){t.uniform1iv(this.addr,e)}function n2(t,e){t.uniform2iv(this.addr,e)}function i2(t,e){t.uniform3iv(this.addr,e)}function r2(t,e){t.uniform4iv(this.addr,e)}function s2(t,e){t.uniform1uiv(this.addr,e)}function a2(t,e){t.uniform2uiv(this.addr,e)}function o2(t,e){t.uniform3uiv(this.addr,e)}function l2(t,e){t.uniform4uiv(this.addr,e)}function c2(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Zv,s[o])}function d2(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Jv,s[o])}function u2(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||e_,s[o])}function f2(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Qv,s[o])}function h2(t){switch(t){case 5126:return $E;case 35664:return YE;case 35665:return KE;case 35666:return ZE;case 35674:return QE;case 35675:return JE;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return a2;case 36295:return o2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return f2}}class p2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qE(n.type)}}class m2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=h2(n.type)}}class x2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Em(t,e){t.seq.push(e),t.map[e.id]=e}function g2(t,e,n){const i=t.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),o=vd.lastIndex;let l=s[1];const c=s[2]==="]",d=s[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===r){Em(n,d===void 0?new p2(l,t,e):new m2(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new x2(l),Em(n,p)),n=p}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);g2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const v2=37297;let _2=0;function y2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}function b2(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Il&&n===Dl?i="LinearDisplayP3ToLinearSRGB":e===Dl&&n===Il&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case ac:return[i,"LinearTransferOETF"];case Xn:case ph:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+y2(t.getShaderSource(e),o)}else return r}function S2(t,e){const n=b2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function M2(t,e){let n;switch(e){case Ob:n="Linear";break;case zb:n="Reinhard";break;case Bb:n="Cineon";break;case Hb:n="ACESFilmic";break;case Gb:n="AgX";break;case Wb:n="Neutral";break;case Vb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Lo=new j;function w2(){et.getLuminanceCoefficients(Lo);const t=Lo.x.toFixed(4),e=Lo.y.toFixed(4),n=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function T2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function C2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function sa(t){return t!==""}function Am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A2=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(t){return t.replace(A2,R2)}const N2=new Map;function R2(t,e){let n=ke[e];if(n===void 0){const i=N2.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return af(n)}const P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(t){return t.replace(P2,L2)}function L2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function I2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case Cs:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function k2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sv:e="ENVMAP_BLENDING_MULTIPLY";break;case Fb:e="ENVMAP_BLENDING_MIX";break;case jb:e="ENVMAP_BLENDING_ADD";break}return e}function F2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function j2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=D2(n),d=I2(n),f=U2(n),p=k2(n),h=F2(n),m=E2(n),g=T2(s),b=r.createProgram();let x,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(sa).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(sa).join(`
`),u.length>0&&(u+=`
`)):(x=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),u=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Wi?M2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,S2("linearToOutputTexel",n.outputColorSpace),w2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),o=af(o),o=Am(o,n),o=Nm(o,n),l=af(l),l=Am(l,n),l=Nm(l,n),o=Rm(o),l=Rm(l),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=_+x+o,v=_+u+l,N=Tm(r,r.VERTEX_SHADER,y),C=Tm(r,r.FRAGMENT_SHADER,v);r.attachShader(b,N),r.attachShader(b,C),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function w(E){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(b).trim(),z=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(C).trim();let G=!0,V=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,N,C);else{const Z=Cm(r,N,"vertex"),L=Cm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+Z+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||X==="")&&(V=!1);V&&(E.diagnostics={runnable:G,programLog:O,vertexShader:{log:z,prefix:x},fragmentShader:{log:X,prefix:u}})}r.deleteShader(N),r.deleteShader(C),A=new al(r,b),F=C2(r,b)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let F;this.getAttributes=function(){return F===void 0&&w(this),F};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,v2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=C,this}let O2=0;class z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new B2(e),n.set(e,i)),i}}class B2{constructor(e){this.id=O2++,this.code=e,this.usedTimes=0}}function H2(t,e,n,i,r,s,o){const l=new zv,c=new z2,d=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return d.add(S),S===0?"uv":`uv${S}`}function u(S,E,O,z,X){const G=z.fog,V=X.geometry,Z=S.isMeshStandardMaterial?z.environment:null,L=(S.isMeshStandardMaterial?n:e).get(S.envMap||Z),Q=L&&L.mapping===sc?L.image.height:null,J=b[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=ae!==void 0?ae.length:0;let He=0;V.morphAttributes.position!==void 0&&(He=1),V.morphAttributes.normal!==void 0&&(He=2),V.morphAttributes.color!==void 0&&(He=3);let q,ne,de,le;if(J){const Kt=qn[J];q=Kt.vertexShader,ne=Kt.fragmentShader}else q=S.vertexShader,ne=S.fragmentShader,c.update(S),de=c.getVertexShaderID(S),le=c.getFragmentShaderID(S);const Le=t.getRenderTarget(),Se=X.isInstancedMesh===!0,Ce=X.isBatchedMesh===!0,qe=!!S.map,je=!!S.matcap,P=!!L,Pt=!!S.aoMap,Oe=!!S.lightMap,Ge=!!S.bumpMap,Ae=!!S.normalMap,it=!!S.displacementMap,Ne=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,I=S.anisotropy>0,K=S.clearcoat>0,ee=S.dispersion>0,Y=S.iridescence>0,xe=S.sheen>0,ce=S.transmission>0,ge=I&&!!S.anisotropyMap,Ke=K&&!!S.clearcoatMap,re=K&&!!S.clearcoatNormalMap,ve=K&&!!S.clearcoatRoughnessMap,De=Y&&!!S.iridescenceMap,Ie=Y&&!!S.iridescenceThicknessMap,_e=xe&&!!S.sheenColorMap,We=xe&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,rt=!!S.specularColorMap,D=!!S.specularIntensityMap,he=ce&&!!S.transmissionMap,W=ce&&!!S.thicknessMap,te=!!S.gradientMap,ue=!!S.alphaMap,pe=S.alphaTest>0,$e=!!S.alphaHash,yt=!!S.extensions;let Yt=Wi;S.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Yt=t.toneMapping);const Ze={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:ne,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&X._colorsTexture!==null,instancing:Se,instancingColor:Se&&X.instanceColor!==null,instancingMorph:Se&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:je,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:Q,aoMap:Pt,lightMap:Oe,bumpMap:Ge,normalMap:Ae,displacementMap:m&&it,emissiveMap:Ne,normalMapObjectSpace:Ae&&S.normalMapType===Yb,normalMapTangentSpace:Ae&&S.normalMapType===Iv,metalnessMap:R,roughnessMap:M,anisotropy:I,anisotropyMap:ge,clearcoat:K,clearcoatMap:Ke,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:xe,sheenColorMap:_e,sheenRoughnessMap:We,specularMap:Ue,specularColorMap:rt,specularIntensityMap:D,transmission:ce,transmissionMap:he,thicknessMap:W,gradientMap:te,opaque:S.transparent===!1&&S.blending===hs&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:$e,combine:S.combine,mapUv:qe&&x(S.map.channel),aoMapUv:Pt&&x(S.aoMap.channel),lightMapUv:Oe&&x(S.lightMap.channel),bumpMapUv:Ge&&x(S.bumpMap.channel),normalMapUv:Ae&&x(S.normalMap.channel),displacementMapUv:it&&x(S.displacementMap.channel),emissiveMapUv:Ne&&x(S.emissiveMap.channel),metalnessMapUv:R&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:ge&&x(S.anisotropyMap.channel),clearcoatMapUv:Ke&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(S.sheenRoughnessMap.channel),specularMapUv:Ue&&x(S.specularMap.channel),specularColorMapUv:rt&&x(S.specularColorMap.channel),specularIntensityMapUv:D&&x(S.specularIntensityMap.channel),transmissionMapUv:he&&x(S.transmissionMap.channel),thicknessMapUv:W&&x(S.thicknessMap.channel),alphaMapUv:ue&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(qe||ue),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:Yt,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yn,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:yt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&S.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=d.has(1),Ze.vertexUv2s=d.has(2),Ze.vertexUv3s=d.has(3),d.clear(),Ze}function _(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)E.push(O),E.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(y(E,S),v(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),S.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.alphaToCoverage&&l.enable(20),S.push(l.mask)}function N(S){const E=b[S.type];let O;if(E){const z=qn[E];O=ES.clone(z.uniforms)}else O=S.uniforms;return O}function C(S,E){let O;for(let z=0,X=f.length;z<X;z++){const G=f[z];if(G.cacheKey===E){O=G,++O.usedTimes;break}}return O===void 0&&(O=new j2(t,E,S,s),f.push(O)),O}function w(S){if(--S.usedTimes===0){const E=f.indexOf(S);f[E]=f[f.length-1],f.pop(),S.destroy()}}function A(S){c.remove(S)}function F(){c.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:N,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:f,dispose:F}}function V2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function i(o){t.delete(o)}function r(o,l,c){t.get(o)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function G2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,m,g,b,x){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:g,renderOrder:p.renderOrder,z:b,group:x},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=b,u.group=x),e++,u}function l(p,h,m,g,b,x){const u=o(p,h,m,g,b,x);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function c(p,h,m,g,b,x){const u=o(p,h,m,g,b,x);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function d(p,h){n.length>1&&n.sort(p||G2),i.length>1&&i.sort(h||Lm),r.length>1&&r.sort(h||Lm)}function f(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function W2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Dm,t.set(i,[o])):r>=s.length?(o=new Dm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function X2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ve};break;case"SpotLight":n={position:new j,direction:new j,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function q2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $2=0;function Y2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function K2(t){const e=new X2,n=q2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new j);const r=new j,s=new ht,o=new ht;function l(d){let f=0,p=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,g=0,b=0,x=0,u=0,_=0,y=0,v=0,N=0,C=0,w=0;d.sort(Y2);for(let F=0,S=d.length;F<S;F++){const E=d[F],O=E.color,z=E.intensity,X=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=O.r*z,p+=O.g*z,h+=O.b*z;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],z);w++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,L=n.get(E);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=E.shadow.matrix,_++}i.directional[m]=V,m++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(O).multiplyScalar(z),V.distance=X,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[b]=V;const Z=E.shadow;if(E.map&&(i.spotLightMap[N]=E.map,N++,Z.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[b]=Z.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.spotShadow[b]=L,i.spotShadowMap[b]=G,v++}b++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[x]=V,x++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const Z=E.shadow,L=n.get(E);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=E.shadow.matrix,y++}i.point[g]=V,g++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(z),V.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[u]=V,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==x||A.hemiLength!==u||A.numDirectionalShadows!==_||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==N||A.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=x,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,A.directionalLength=m,A.pointLength=g,A.spotLength=b,A.rectAreaLength=x,A.hemiLength=u,A.numDirectionalShadows=_,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=N,A.numLightProbes=w,i.version=$2++)}function c(d,f){let p=0,h=0,m=0,g=0,b=0;const x=f.matrixWorldInverse;for(let u=0,_=d.length;u<_;u++){const y=d[u];if(y.isDirectionalLight){const v=i.directional[p];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),p++}else if(y.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),m++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(y.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(x),h++}else if(y.isHemisphereLight){const v=i.hemi[b];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(x),b++}}}return{setup:l,setupView:c,state:i}}function Im(t){const e=new K2(t),n=[],i=[];function r(f){d.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function l(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Z2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new Im(t),e.set(r,[l])):s>=o.length?(l=new Im(t),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Q2 extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J2 extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nT(t,e,n){let i=new mh;const r=new Xe,s=new Xe,o=new gt,l=new Q2({depthPacking:$b}),c=new J2,d={},f=n.maxTextureSize,p={[Yi]:sn,[sn]:Yi,[Yn]:Yn},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new zn(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let u=this.type;this.render=function(C,w,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;const F=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Gi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=u!==si&&this.type===si,X=u===si&&this.type!==si;for(let G=0,V=C.length;G<V;G++){const Z=C[G],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Q=L.getFrameExtents();if(r.multiply(Q),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Q.x),r.x=s.x*Q.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Q.y),r.y=s.y*Q.y,L.mapSize.y=s.y)),L.map===null||z===!0||X===!0){const ae=this.type!==si?{minFilter:wn,magFilter:wn}:{};L.map!==null&&L.map.dispose(),L.map=new Nr(r.x,r.y,ae),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const J=L.getViewportCount();for(let ae=0;ae<J;ae++){const Te=L.getViewport(ae);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),O.viewport(o),L.updateMatrices(Z,ae),i=L.getFrustum(),v(w,A,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===si&&_(L,A),L.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(F,S,E)};function _(C,w){const A=e.update(b);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,A,h,b,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,A,m,b,null)}function y(C,w,A,F){let S=null;const E=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=A.isPointLight===!0?c:l,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=S.uuid,z=w.uuid;let X=d[O];X===void 0&&(X={},d[O]=X);let G=X[z];G===void 0&&(G=S.clone(),X[z]=G,w.addEventListener("dispose",N)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,F===si?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:p[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=A}return S}function v(C,w,A,F,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const z=e.update(C),X=C.material;if(Array.isArray(X)){const G=z.groups;for(let V=0,Z=G.length;V<Z;V++){const L=G[V],Q=X[L.materialIndex];if(Q&&Q.visible){const J=y(C,Q,F,S);C.onBeforeShadow(t,C,w,A,z,J,L),t.renderBufferDirect(A,null,z,J,C,L),C.onAfterShadow(t,C,w,A,z,J,L)}}}else if(X.visible){const G=y(C,X,F,S);C.onBeforeShadow(t,C,w,A,z,G,null),t.renderBufferDirect(A,null,z,G,C,null),C.onAfterShadow(t,C,w,A,z,G,null)}}const O=C.children;for(let z=0,X=O.length;z<X;z++)v(O[z],w,A,F,S)}function N(C){C.target.removeEventListener("dispose",N);for(const A in d){const F=d[A],S=C.target.uuid;S in F&&(F[S].dispose(),delete F[S])}}}const iT={[bu]:Su,[Mu]:Tu,[wu]:Cu,[Es]:Eu,[Su]:bu,[Tu]:Mu,[Cu]:wu,[Eu]:Es};function rT(t){function e(){let D=!1;const he=new gt;let W=null;const te=new gt(0,0,0,0);return{setMask:function(ue){W!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){D=ue},setClear:function(ue,pe,$e,yt,Yt){Yt===!0&&(ue*=yt,pe*=yt,$e*=yt),he.set(ue,pe,$e,yt),te.equals(he)===!1&&(t.clearColor(ue,pe,$e,yt),te.copy(he))},reset:function(){D=!1,W=null,te.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,W=null,te=null,ue=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?de(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(pe){W!==pe&&!D&&(t.depthMask(pe),W=pe)},setFunc:function(pe){if(he&&(pe=iT[pe]),te!==pe){switch(pe){case bu:t.depthFunc(t.NEVER);break;case Su:t.depthFunc(t.ALWAYS);break;case Mu:t.depthFunc(t.LESS);break;case Es:t.depthFunc(t.LEQUAL);break;case wu:t.depthFunc(t.EQUAL);break;case Eu:t.depthFunc(t.GEQUAL);break;case Tu:t.depthFunc(t.GREATER);break;case Cu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){D=!1,W=null,te=null,ue=null}}}function i(){let D=!1,he=null,W=null,te=null,ue=null,pe=null,$e=null,yt=null,Yt=null;return{setTest:function(Ze){D||(Ze?de(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Ze){he!==Ze&&!D&&(t.stencilMask(Ze),he=Ze)},setFunc:function(Ze,Kt,Jn){(W!==Ze||te!==Kt||ue!==Jn)&&(t.stencilFunc(Ze,Kt,Jn),W=Ze,te=Kt,ue=Jn)},setOp:function(Ze,Kt,Jn){(pe!==Ze||$e!==Kt||yt!==Jn)&&(t.stencilOp(Ze,Kt,Jn),pe=Ze,$e=Kt,yt=Jn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Yt!==Ze&&(t.clearStencil(Ze),Yt=Ze)},reset:function(){D=!1,he=null,W=null,te=null,ue=null,pe=null,$e=null,yt=null,Yt=null}}}const r=new e,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},f={},p=new WeakMap,h=[],m=null,g=!1,b=null,x=null,u=null,_=null,y=null,v=null,N=null,C=new Ve(0,0,0),w=0,A=!1,F=null,S=null,E=null,O=null,z=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=V>=2);let L=null,Q={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Te=new gt().fromArray(J),He=new gt().fromArray(ae);function q(D,he,W,te){const ue=new Uint8Array(4),pe=t.createTexture();t.bindTexture(D,pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<W;$e++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return pe}const ne={};ne[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Es),Oe(!1),Ge(Hp),de(t.CULL_FACE),P(Gi);function de(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function le(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Le(D,he){return f[D]!==he?(t.bindFramebuffer(D,he),f[D]=he,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Se(D,he){let W=h,te=!1;if(D){W=p.get(he),W===void 0&&(W=[],p.set(he,W));const ue=D.textures;if(W.length!==ue.length||W[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,$e=ue.length;pe<$e;pe++)W[pe]=t.COLOR_ATTACHMENT0+pe;W.length=ue.length,te=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,te=!0);te&&t.drawBuffers(W)}function Ce(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const qe={[hr]:t.FUNC_ADD,[yb]:t.FUNC_SUBTRACT,[bb]:t.FUNC_REVERSE_SUBTRACT};qe[Sb]=t.MIN,qe[Mb]=t.MAX;const je={[wb]:t.ZERO,[Eb]:t.ONE,[Tb]:t.SRC_COLOR,[_u]:t.SRC_ALPHA,[Lb]:t.SRC_ALPHA_SATURATE,[Rb]:t.DST_COLOR,[Ab]:t.DST_ALPHA,[Cb]:t.ONE_MINUS_SRC_COLOR,[yu]:t.ONE_MINUS_SRC_ALPHA,[Pb]:t.ONE_MINUS_DST_COLOR,[Nb]:t.ONE_MINUS_DST_ALPHA,[Db]:t.CONSTANT_COLOR,[Ib]:t.ONE_MINUS_CONSTANT_COLOR,[Ub]:t.CONSTANT_ALPHA,[kb]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,he,W,te,ue,pe,$e,yt,Yt,Ze){if(D===Gi){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),D!==_b){if(D!==b||Ze!==A){if((x!==hr||y!==hr)&&(t.blendEquation(t.FUNC_ADD),x=hr,y=hr),Ze)switch(D){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vp:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,_=null,v=null,N=null,C.set(0,0,0),w=0,b=D,A=Ze}return}ue=ue||he,pe=pe||W,$e=$e||te,(he!==x||ue!==y)&&(t.blendEquationSeparate(qe[he],qe[ue]),x=he,y=ue),(W!==u||te!==_||pe!==v||$e!==N)&&(t.blendFuncSeparate(je[W],je[te],je[pe],je[$e]),u=W,_=te,v=pe,N=$e),(yt.equals(C)===!1||Yt!==w)&&(t.blendColor(yt.r,yt.g,yt.b,Yt),C.copy(yt),w=Yt),b=D,A=!1}function Pt(D,he){D.side===Yn?le(t.CULL_FACE):de(t.CULL_FACE);let W=D.side===sn;he&&(W=!W),Oe(W),D.blending===hs&&D.transparent===!1?P(Gi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const te=D.stencilWrite;o.setTest(te),te&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){F!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),F=D)}function Ge(D){D!==gb?(de(t.CULL_FACE),D!==S&&(D===Hp?t.cullFace(t.BACK):D===vb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),S=D}function Ae(D){D!==E&&(G&&t.lineWidth(D),E=D)}function it(D,he,W){D?(de(t.POLYGON_OFFSET_FILL),(O!==he||z!==W)&&(t.polygonOffset(he,W),O=he,z=W)):le(t.POLYGON_OFFSET_FILL)}function Ne(D){D?de(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+X-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,he,W){W===void 0&&(L===null?W=t.TEXTURE0+X-1:W=L);let te=Q[W];te===void 0&&(te={type:void 0,texture:void 0},Q[W]=te),(te.type!==D||te.texture!==he)&&(L!==W&&(t.activeTexture(W),L=W),t.bindTexture(D,he||ne[D]),te.type=D,te.texture=he)}function I(){const D=Q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){Te.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function _e(D){He.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function We(D,he){let W=c.get(he);W===void 0&&(W=new WeakMap,c.set(he,W));let te=W.get(D);te===void 0&&(te=t.getUniformBlockIndex(he,D.name),W.set(D,te))}function Ue(D,he){const te=c.get(he).get(D);l.get(he)!==te&&(t.uniformBlockBinding(he,te,D.__bindingPointIndex),l.set(he,te))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},L=null,Q={},f={},p=new WeakMap,h=[],m=null,g=!1,b=null,x=null,u=null,_=null,y=null,v=null,N=null,C=new Ve(0,0,0),w=0,A=!1,F=null,S=null,E=null,O=null,z=null,Te.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:le,bindFramebuffer:Le,drawBuffers:Se,useProgram:Ce,setBlending:P,setMaterial:Pt,setFlipSided:Oe,setCullFace:Ge,setLineWidth:Ae,setPolygonOffset:it,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:I,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:ve,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Ue,texStorage2D:Ke,texStorage3D:re,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Ie,viewport:_e,reset:rt}}function Um(t,e,n,i){const r=sT(i);switch(n){case Cv:return t*e;case Nv:return t*e;case Rv:return t*e*2;case Pv:return t*e/r.components*r.byteLength;case uh:return t*e/r.components*r.byteLength;case Lv:return t*e*2/r.components*r.byteLength;case fh:return t*e*2/r.components*r.byteLength;case Av:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case hh:return t*e*4/r.components*r.byteLength;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tl:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Du:case Uu:return Math.max(t,16)*Math.max(e,8)/4;case Lu:case Iu:return Math.max(t,8)*Math.max(e,8)/2;case ku:case Fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ju:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case il:case Ju:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dv:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sT(t){switch(t){case vi:case wv:return{byteLength:1,components:1};case Da:case Ev:case Ha:return{byteLength:2,components:1};case ch:case dh:return{byteLength:2,components:4};case Ar:case lh:case di:return{byteLength:4,components:1};case Tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function aT(t,e,n,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,f=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):Ia("canvas")}function b(R,M,I){let K=1;const ee=Ne(R);if((ee.width>I||ee.height>I)&&(K=I/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*ee.width),xe=Math.floor(K*ee.height);p===void 0&&(p=g(Y,xe));const ce=M?g(Y,xe):p;return ce.width=Y,ce.height=xe,ce.getContext("2d").drawImage(R,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+xe+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function x(R){return R.generateMipmaps&&R.minFilter!==wn&&R.minFilter!==jn}function u(R){t.generateMipmap(R)}function _(R,M,I,K,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=M;if(M===t.RED&&(I===t.FLOAT&&(Y=t.R32F),I===t.HALF_FLOAT&&(Y=t.R16F),I===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.R8UI),I===t.UNSIGNED_SHORT&&(Y=t.R16UI),I===t.UNSIGNED_INT&&(Y=t.R32UI),I===t.BYTE&&(Y=t.R8I),I===t.SHORT&&(Y=t.R16I),I===t.INT&&(Y=t.R32I)),M===t.RG&&(I===t.FLOAT&&(Y=t.RG32F),I===t.HALF_FLOAT&&(Y=t.RG16F),I===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RG8UI),I===t.UNSIGNED_SHORT&&(Y=t.RG16UI),I===t.UNSIGNED_INT&&(Y=t.RG32UI),I===t.BYTE&&(Y=t.RG8I),I===t.SHORT&&(Y=t.RG16I),I===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),I===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),I===t.UNSIGNED_INT&&(Y=t.RGB32UI),I===t.BYTE&&(Y=t.RGB8I),I===t.SHORT&&(Y=t.RGB16I),I===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),I===t.UNSIGNED_INT&&(Y=t.RGBA32UI),I===t.BYTE&&(Y=t.RGBA8I),I===t.SHORT&&(Y=t.RGBA16I),I===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const xe=ee?Ll:et.getTransfer(K);I===t.FLOAT&&(Y=t.RGBA32F),I===t.HALF_FLOAT&&(Y=t.RGBA16F),I===t.UNSIGNED_BYTE&&(Y=xe===lt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(R,M){let I;return R?M===null||M===Ar||M===As?I=t.DEPTH24_STENCIL8:M===di?I=t.DEPTH32F_STENCIL8:M===Da&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===As?I=t.DEPTH_COMPONENT24:M===di?I=t.DEPTH_COMPONENT32F:M===Da&&(I=t.DEPTH_COMPONENT16),I}function v(R,M){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function N(R){const M=R.target;M.removeEventListener("dispose",N),w(M),M.isVideoTexture&&f.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),F(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const I=R.source,K=h.get(I);if(K){const ee=K[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(R),Object.keys(K).length===0&&h.delete(I)}i.remove(R)}function A(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const I=R.source,K=h.get(I);delete K[M.__cacheKey],o.memory.textures--}function F(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ee=0;ee<M.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const I=R.textures;for(let K=0,ee=I.length;K<ee;K++){const Y=i.get(I[K]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[K])}i.remove(R)}let S=0;function E(){S=0}function O(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const I=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(I,R,M);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+M)}function G(R,M){const I=i.get(R);if(R.version>0&&I.__version!==R.version){He(I,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+M)}function V(R,M){const I=i.get(R);if(R.version>0&&I.__version!==R.version){He(I,R,M);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const I=i.get(R);if(R.version>0&&I.__version!==R.version){q(I,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+M)}const L={[Ru]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[Pu]:t.MIRRORED_REPEAT},Q={[wn]:t.NEAREST,[Xb]:t.NEAREST_MIPMAP_NEAREST,[fo]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[Gc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},J={[Kb]:t.NEVER,[nS]:t.ALWAYS,[Zb]:t.LESS,[Uv]:t.LEQUAL,[Qb]:t.EQUAL,[tS]:t.GEQUAL,[Jb]:t.GREATER,[eS]:t.NOTEQUAL};function ae(R,M){if(M.type===di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Gc||M.magFilter===fo||M.magFilter===_r||M.minFilter===jn||M.minFilter===Gc||M.minFilter===fo||M.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==fo&&M.minFilter!==_r||M.type===di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Te(R,M){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",N));const K=M.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const Y=z(M);if(Y!==R.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ee[Y].usedTimes++;const xe=ee[R.__cacheKey];xe!==void 0&&(ee[R.__cacheKey].usedTimes--,xe.usedTimes===0&&A(M)),R.__cacheKey=Y,R.__webglTexture=ee[Y].texture}return I}function He(R,M,I){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const ee=Te(R,M),Y=M.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+I);const xe=i.get(Y);if(Y.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+I);const ce=et.getPrimaries(et.workingColorSpace),ge=M.colorSpace===Di?null:et.getPrimaries(M.colorSpace),Ke=M.colorSpace===Di||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let re=b(M.image,!1,r.maxTextureSize);re=it(M,re);const ve=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let Ie=_(M.internalFormat,ve,De,M.colorSpace,M.isVideoTexture);ae(K,M);let _e;const We=M.mipmaps,Ue=M.isVideoTexture!==!0,rt=xe.__version===void 0||ee===!0,D=Y.dataReady,he=v(M,re);if(M.isDepthTexture)Ie=y(M.format===Ns,M.type),rt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Ie,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,ve,De,null));else if(M.isDataTexture)if(We.length>0){Ue&&rt&&n.texStorage2D(t.TEXTURE_2D,he,Ie,We[0].width,We[0].height);for(let W=0,te=We.length;W<te;W++)_e=We[W],Ue?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ve,De,_e.data);M.generateMipmaps=!1}else Ue?(rt&&n.texStorage2D(t.TEXTURE_2D,he,Ie,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,De,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,re.width,re.height,0,ve,De,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ie,We[0].width,We[0].height,re.depth);for(let W=0,te=We.length;W<te;W++)if(_e=We[W],M.format!==On)if(ve!==null)if(Ue){if(D)if(M.layerUpdates.size>0){const ue=Um(_e.width,_e.height,M.format,M.type);for(const pe of M.layerUpdates){const $e=_e.data.subarray(pe*ue/_e.data.BYTES_PER_ELEMENT,(pe+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,pe,_e.width,_e.height,1,ve,$e,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,re.depth,ve,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,re.depth,ve,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ie,_e.width,_e.height,re.depth,0,ve,De,_e.data)}else{Ue&&rt&&n.texStorage2D(t.TEXTURE_2D,he,Ie,We[0].width,We[0].height);for(let W=0,te=We.length;W<te;W++)_e=We[W],M.format!==On?ve!==null?Ue?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,W,Ie,_e.width,_e.height,0,ve,De,_e.data)}else if(M.isDataArrayTexture)if(Ue){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ie,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){const W=Um(re.width,re.height,M.format,M.type);for(const te of M.layerUpdates){const ue=re.data.subarray(te*W/re.data.BYTES_PER_ELEMENT,(te+1)*W/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ve,De,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,re.width,re.height,re.depth,0,ve,De,re.data);else if(M.isData3DTexture)Ue?(rt&&n.texStorage3D(t.TEXTURE_3D,he,Ie,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,re.width,re.height,re.depth,0,ve,De,re.data);else if(M.isFramebufferTexture){if(rt)if(Ue)n.texStorage2D(t.TEXTURE_2D,he,Ie,re.width,re.height);else{let W=re.width,te=re.height;for(let ue=0;ue<he;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ie,W,te,0,ve,De,null),W>>=1,te>>=1}}else if(We.length>0){if(Ue&&rt){const W=Ne(We[0]);n.texStorage2D(t.TEXTURE_2D,he,Ie,W.width,W.height)}for(let W=0,te=We.length;W<te;W++)_e=We[W],Ue?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve,De,_e):n.texImage2D(t.TEXTURE_2D,W,Ie,ve,De,_e);M.generateMipmaps=!1}else if(Ue){if(rt){const W=Ne(re);n.texStorage2D(t.TEXTURE_2D,he,Ie,W.width,W.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,De,re)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ve,De,re);x(M)&&u(K),xe.__version=Y.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function q(R,M,I){if(M.image.length!==6)return;const K=Te(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+I);const Y=i.get(ee);if(ee.version!==Y.__version||K===!0){n.activeTexture(t.TEXTURE0+I);const xe=et.getPrimaries(et.workingColorSpace),ce=M.colorSpace===Di?null:et.getPrimaries(M.colorSpace),ge=M.colorSpace===Di||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Ke&&!re?ve[te]=b(M.image[te],!0,r.maxCubemapSize):ve[te]=re?M.image[te].image:M.image[te],ve[te]=it(M,ve[te]);const De=ve[0],Ie=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),We=_(M.internalFormat,Ie,_e,M.colorSpace),Ue=M.isVideoTexture!==!0,rt=Y.__version===void 0||K===!0,D=ee.dataReady;let he=v(M,De);ae(t.TEXTURE_CUBE_MAP,M);let W;if(Ke){Ue&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,We,De.width,De.height);for(let te=0;te<6;te++){W=ve[te].mipmaps;for(let ue=0;ue<W.length;ue++){const pe=W[ue];M.format!==On?Ie!==null?Ue?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,pe.width,pe.height,Ie,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,We,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,pe.width,pe.height,Ie,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,We,pe.width,pe.height,0,Ie,_e,pe.data)}}}else{if(W=M.mipmaps,Ue&&rt){W.length>0&&he++;const te=Ne(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,We,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Ie,_e,ve[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,ve[te].width,ve[te].height,0,Ie,_e,ve[te].data);for(let ue=0;ue<W.length;ue++){const $e=W[ue].image[te].image;Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,$e.width,$e.height,Ie,_e,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,We,$e.width,$e.height,0,Ie,_e,$e.data)}}else{Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,_e,ve[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Ie,_e,ve[te]);for(let ue=0;ue<W.length;ue++){const pe=W[ue];Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Ie,_e,pe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,We,Ie,_e,pe.image[te])}}}x(M)&&u(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,I,K,ee,Y){const xe=s.convert(I.format,I.colorSpace),ce=s.convert(I.type),ge=_(I.internalFormat,xe,ce,I.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>Y),ve=Math.max(1,M.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,ge,re,ve,M.depth,0,xe,ce,null):n.texImage2D(ee,Y,ge,re,ve,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,i.get(I).__webglTexture,0,Oe(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,i.get(I).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,M,I){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Y=y(M.stencilBuffer,ee),xe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Oe(M);Ge(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Y,M.width,M.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,R)}else{const K=M.textures;for(let ee=0;ee<K.length;ee++){const Y=K[ee],xe=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),ge=_(Y.internalFormat,xe,ce,Y.colorSpace),Ke=Oe(M);I&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ge,M.width,M.height):Ge(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const K=i.get(M.depthTexture).__webglTexture,ee=Oe(M);if(M.depthTexture.format===ps)Ge(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ns)Ge(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Le(R){const M=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,R)}else if(I){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),de(M.__webglDepthbuffer[K],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(R,M,I){const K=i.get(R);M!==void 0&&ne(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Le(R)}function Ce(R){const M=R.texture,I=i.get(R),K=i.get(M);R.addEventListener("dispose",C);const ee=R.textures,Y=R.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let ge=0;ge<M.mipmaps.length;ge++)I.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else I.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)I.__webglFramebuffer[ce]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ce=0,ge=ee.length;ce<ge;ce++){const Ke=i.get(ee[ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const ge=ee[ce];I.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ce]);const Ke=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=_(ge.internalFormat,Ke,re,ge.colorSpace,R.isXRRenderTarget===!0),De=Oe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,I.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),de(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(I.__webglFramebuffer[ce][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else ne(I.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ce=0,ge=ee.length;ce<ge;ce++){const Ke=ee[ce],re=i.get(Ke);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ae(t.TEXTURE_2D,Ke),ne(I.__webglFramebuffer,R,Ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),x(Ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,K.__webglTexture),ae(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ne(I.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,ce,ge);else ne(I.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);x(M)&&u(ce),n.unbindTexture()}R.depthBuffer&&Le(R)}function qe(R){const M=R.textures;for(let I=0,K=M.length;I<K;I++){const ee=M[I];if(x(ee)){const Y=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(ee).__webglTexture;n.bindTexture(Y,xe),u(Y),n.unbindTexture()}}}const je=[],P=[];function Pt(R){if(R.samples>0){if(Ge(R)===!1){const M=R.textures,I=R.width,K=R.height;let ee=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),ce=M.length>1;if(ce)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Ke=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,I,K,0,0,I,K,ee,t.NEAREST),c===!0&&(je.length=0,P.length=0,je.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(je.push(Y),P.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Ke=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Oe(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function it(R,M){const I=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==tr&&I!==Di&&(et.getTransfer(I)===lt?(K!==On||ee!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ge}function oT(t,e){function n(i,r=Di){let s;const o=et.getTransfer(r);if(i===vi)return t.UNSIGNED_BYTE;if(i===ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===wv)return t.BYTE;if(i===Ev)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===lh)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Ha)return t.HALF_FLOAT;if(i===Cv)return t.ALPHA;if(i===Av)return t.RGB;if(i===On)return t.RGBA;if(i===Nv)return t.LUMINANCE;if(i===Rv)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===Pv)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===Lv)return t.RG;if(i===fh)return t.RG_INTEGER;if(i===hh)return t.RGBA_INTEGER;if(i===Jo||i===el||i===tl||i===nl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lu||i===Du||i===Iu||i===Uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ku||i===Fu||i===ju)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ku||i===Fu)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ju)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===zu||i===Bu||i===Hu||i===Vu||i===Gu||i===Wu||i===Xu||i===qu||i===$u||i===Yu||i===Ku||i===Zu||i===Qu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ou)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$u)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ku)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===Ju||i===ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===il)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ju)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dv||i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===il)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class lT extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Do extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cT={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),u=this._getHandJoint(d,b);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const f=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,g=.005;d.inputState.pinching&&h>m+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=m-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(cT)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:dT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hT extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,d=null,f=null,p=null,h=null,m=null,g=null;const b=new fT,x=n.getContextAttributes();let u=null,_=null;const y=[],v=[],N=new Xe;let C=null;const w=new bn;w.layers.enable(1),w.viewport=new gt;const A=new bn;A.layers.enable(2),A.viewport=new gt;const F=[w,A],S=new lT;S.layers.enable(1),S.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=y[q];return ne===void 0&&(ne=new _d,y[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=y[q];return ne===void 0&&(ne=new _d,y[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=y[q];return ne===void 0&&(ne=new _d,y[q]=ne),ne.getHandSpace()};function z(q){const ne=v.indexOf(q.inputSource);if(ne===-1)return;const de=y[ne];de!==void 0&&(de.update(q.inputSource,q.frame,d||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let q=0;q<y.length;q++){const ne=v[q];ne!==null&&(v[q]=null,y[q].disconnect(ne))}E=null,O=null,b.reset(),e.setRenderTarget(u),m=null,h=null,p=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ne={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Nr(m.framebufferWidth,m.framebufferHeight,{format:On,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ne=null,de=null,le=null;x.depth&&(le=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=x.stencil?Ns:ps,de=x.stencil?As:Ar);const Le={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Nr(h.textureWidth,h.textureHeight,{format:On,type:vi,depthTexture:new Kv(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await r.requestReferenceSpace(l),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(q){for(let ne=0;ne<q.removed.length;ne++){const de=q.removed[ne],le=v.indexOf(de);le>=0&&(v[le]=null,y[le].disconnect(de))}for(let ne=0;ne<q.added.length;ne++){const de=q.added[ne];let le=v.indexOf(de);if(le===-1){for(let Se=0;Se<y.length;Se++)if(Se>=v.length){v.push(de),le=Se;break}else if(v[Se]===null){v[Se]=de,le=Se;break}if(le===-1)break}const Le=y[le];Le&&Le.connect(de)}}const V=new j,Z=new j;function L(q,ne,de){V.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const le=V.distanceTo(Z),Le=ne.projectionMatrix.elements,Se=de.projectionMatrix.elements,Ce=Le[14]/(Le[10]-1),qe=Le[14]/(Le[10]+1),je=(Le[9]+1)/Le[5],P=(Le[9]-1)/Le[5],Pt=(Le[8]-1)/Le[0],Oe=(Se[8]+1)/Se[0],Ge=Ce*Pt,Ae=Ce*Oe,it=le/(-Pt+Oe),Ne=it*-Pt;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(it),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Le[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=Ce+it,M=qe+it,I=Ge-Ne,K=Ae+(le-Ne),ee=je*qe/M*R,Y=P*qe/M*R;q.projectionMatrix.makePerspective(I,K,ee,Y,R,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ne=q.near,de=q.far;b.texture!==null&&(b.depthNear>0&&(ne=b.depthNear),b.depthFar>0&&(de=b.depthFar)),S.near=A.near=w.near=ne,S.far=A.far=w.far=de,(E!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,O=S.far);const le=q.parent,Le=S.cameras;Q(S,le);for(let Se=0;Se<Le.length;Se++)Q(Le[Se],le);Le.length===2?L(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),J(q,S,le)};function J(q,ne,de){de===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(S)};let ae=null;function Te(q,ne){if(f=ne.getViewerPose(d||o),g=ne,f!==null){const de=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let le=!1;de.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Se=0;Se<de.length;Se++){const Ce=de[Se];let qe=null;if(m!==null)qe=m.getViewport(Ce);else{const P=p.getViewSubImage(h,Ce);qe=P.viewport,Se===0&&(e.setRenderTargetTextures(_,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let je=F[Se];je===void 0&&(je=new bn,je.layers.enable(Se),je.viewport=new gt,F[Se]=je),je.matrix.fromArray(Ce.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ce.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(qe.x,qe.y,qe.width,qe.height),Se===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(je)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Se=p.getDepthInformation(de[0]);Se&&Se.isValid&&Se.texture&&b.init(e,Se,r.renderState)}}for(let de=0;de<y.length;de++){const le=v[de],Le=y[de];le!==null&&Le!==void 0&&Le.update(le,ne,d||o)}ae&&ae(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const He=new $v;He.setAnimationLoop(Te),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const cr=new Qn,pT=new ht;function mT(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,Wv(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,_,y,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(x,u):u.isMeshToonMaterial?(s(x,u),p(x,u)):u.isMeshPhongMaterial?(s(x,u),f(x,u)):u.isMeshStandardMaterial?(s(x,u),h(x,u),u.isMeshPhysicalMaterial&&m(x,u,v)):u.isMeshMatcapMaterial?(s(x,u),g(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),b(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(o(x,u),u.isLineDashedMaterial&&l(x,u)):u.isPointsMaterial?c(x,u,_,y):u.isSpriteMaterial?d(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===sn&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===sn&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const _=e.get(u),y=_.envMap,v=_.envMapRotation;y&&(x.envMap.value=y,cr.copy(v),cr.x*=-1,cr.y*=-1,cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),x.envMapRotation.value.setFromMatrix4(pT.makeRotationFromEuler(cr)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function o(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function l(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function c(x,u,_,y){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*_,x.scale.value=y*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function d(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function f(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function p(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function h(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,_){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,u){u.matcap&&(x.matcap.value=u.matcap)}function b(x,u){const _=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xT(t,e,n,i){let r={},s={},o=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const v=y.program;i.uniformBlockBinding(_,v)}function d(_,y){let v=r[_.id];v===void 0&&(g(_),v=f(_),r[_.id]=v,_.addEventListener("dispose",x));const N=y.program;i.updateUBOMapping(_,N);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function f(_){const y=p();_.__bindingPointIndex=y;const v=t.createBuffer(),N=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,v),v}function p(){for(let _=0;_<l;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],v=_.uniforms,N=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,w=v.length;C<w;C++){const A=Array.isArray(v[C])?v[C]:[v[C]];for(let F=0,S=A.length;F<S;F++){const E=A[F];if(m(E,C,F,N)===!0){const O=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let G=0;G<z.length;G++){const V=z[G],Z=b(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,O+X,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,y,v,N){const C=_.value,w=y+"_"+v;if(N[w]===void 0)return typeof C=="number"||typeof C=="boolean"?N[w]=C:N[w]=C.clone(),!0;{const A=N[w];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return N[w]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(_){const y=_.uniforms;let v=0;const N=16;for(let w=0,A=y.length;w<A;w++){const F=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=F.length;S<E;S++){const O=F[S],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,G=z.length;X<G;X++){const V=z[X],Z=b(V),L=v%N,Q=L%Z.boundary,J=L+Q;v+=Q,J!==0&&N-J<Z.storage&&(v+=N-J),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Z.storage}}}const C=v%N;return C>0&&(v+=N-C),_.__size=v,_.__cache={},this}function b(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function x(_){const y=_.target;y.removeEventListener("dispose",x);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:d,dispose:u}}class gT{constructor(e={}){const{canvas:n=rS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let b=null,x=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Wi,this.toneMappingExposure=1;const y=this;let v=!1,N=0,C=0,w=null,A=-1,F=null;const S=new gt,E=new gt;let O=null;const z=new Ve(0);let X=0,G=n.width,V=n.height,Z=1,L=null,Q=null;const J=new gt(0,0,G,V),ae=new gt(0,0,G,V);let Te=!1;const He=new mh;let q=!1,ne=!1;const de=new ht,le=new ht,Le=new j,Se=new gt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function je(){return w===null?Z:1}let P=i;function Pt(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",pe,!1),P===null){const U="webgl2";if(P=Pt(U,T),P===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,Ge,Ae,it,Ne,R,M,I,K,ee,Y,xe,ce,ge,Ke,re,ve,De,Ie,_e,We,Ue,rt,D;function he(){Oe=new SE(P),Oe.init(),Ue=new oT(P,Oe),Ge=new xE(P,Oe,e,Ue),Ae=new rT(P),Ge.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),it=new EE(P),Ne=new V2,R=new aT(P,Oe,Ae,Ne,Ge,Ue,it),M=new vE(y),I=new bE(y),K=new LS(P),rt=new pE(P,K),ee=new ME(P,K,it,rt),Y=new CE(P,ee,K,it),Ie=new TE(P,Ge,R),re=new gE(Ne),xe=new H2(y,M,I,Oe,Ge,rt,re),ce=new mT(y,Ne),ge=new W2,Ke=new Z2(Oe),De=new hE(y,M,I,Ae,Y,h,c),ve=new nT(y,Y,Ge),D=new xT(P,it,Ge,Ae),_e=new mE(P,Oe,it),We=new wE(P,Oe,it),it.programs=xe.programs,y.capabilities=Ge,y.extensions=Oe,y.properties=Ne,y.renderLists=ge,y.shadowMap=ve,y.state=Ae,y.info=it}he();const W=new hT(y,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(G,V,!1))},this.getSize=function(T){return T.set(G,V)},this.setSize=function(T,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,V=U,n.width=Math.floor(T*Z),n.height=Math.floor(U*Z),B===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(G*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,U,B){G=T,V=U,Z=B,n.width=Math.floor(T*B),n.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,U,B,H){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,U,B,H),Ae.viewport(S.copy(J).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,U,B,H){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,U,B,H),Ae.scissor(E.copy(ae).multiplyScalar(Z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){Ae.setScissorTest(Te=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,U=!0,B=!0){let H=0;if(T){let k=!1;if(w!==null){const se=w.texture.format;k=se===hh||se===fh||se===uh}if(k){const se=w.texture.type,fe=se===vi||se===Ar||se===Da||se===As||se===ch||se===dh,ye=De.getClearColor(),be=De.getClearAlpha(),Re=ye.r,Pe=ye.g,Me=ye.b;fe?(m[0]=Re,m[1]=Pe,m[2]=Me,m[3]=be,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Re,g[1]=Pe,g[2]=Me,g[3]=be,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Ke.dispose(),Ne.dispose(),M.dispose(),I.dispose(),Y.dispose(),rt.dispose(),D.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",bh),W.removeEventListener("sessionend",Sh),nr.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=it.autoReset,U=ve.enabled,B=ve.autoUpdate,H=ve.needsUpdate,k=ve.type;he(),it.autoReset=T,ve.enabled=U,ve.autoUpdate=B,ve.needsUpdate=H,ve.type=k}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const U=T.target;U.removeEventListener("dispose",$e),yt(U)}function yt(T){Yt(T),Ne.remove(T)}function Yt(T){const U=Ne.get(T).programs;U!==void 0&&(U.forEach(function(B){xe.releaseProgram(B)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,H,k,se){U===null&&(U=Ce);const fe=k.isMesh&&k.matrixWorld.determinant()<0,ye=n_(T,U,B,H,k);Ae.setMaterial(H,fe);let be=B.index,Re=1;if(H.wireframe===!0){if(be=ee.getWireframeAttribute(B),be===void 0)return;Re=2}const Pe=B.drawRange,Me=B.attributes.position;let tt=Pe.start*Re,at=(Pe.start+Pe.count)*Re;se!==null&&(tt=Math.max(tt,se.start*Re),at=Math.min(at,(se.start+se.count)*Re)),be!==null?(tt=Math.max(tt,0),at=Math.min(at,be.count)):Me!=null&&(tt=Math.max(tt,0),at=Math.min(at,Me.count));const mt=at-tt;if(mt<0||mt===1/0)return;rt.setup(k,H,ye,B,be);let on,Qe=_e;if(be!==null&&(on=K.get(be),Qe=We,Qe.setIndex(on)),k.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*je()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(k.isLine){let we=H.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*je()),k.isLineSegments?Qe.setMode(P.LINES):k.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else k.isPoints?Qe.setMode(P.POINTS):k.isSprite&&Qe.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const we=k._multiDrawStarts,Lt=k._multiDrawCounts,Je=k._multiDrawCount,Rn=be?K.get(be).bytesPerElement:1,Lr=Ne.get(H).currentProgram.getUniforms();for(let ln=0;ln<Je;ln++)Lr.setValue(P,"_gl_DrawID",ln),Qe.render(we[ln]/Rn,Lt[ln])}else if(k.isInstancedMesh)Qe.renderInstances(tt,mt,k.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lt=Math.min(B.instanceCount,we);Qe.renderInstances(tt,mt,Lt)}else Qe.render(tt,mt)};function Ze(T,U,B){T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,qa(T,U,B),T.side=Yi,T.needsUpdate=!0,qa(T,U,B),T.side=Yn):qa(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),x=Ke.get(B),x.init(U),_.push(x),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),T!==B&&T.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),x.setupLights();const H=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ye=se[fe];Ze(ye,B,k),H.add(ye)}else Ze(se,B,k),H.add(se)}),_.pop(),x=null,H},this.compileAsync=function(T,U,B=null){const H=this.compile(T,U,B);return new Promise(k=>{function se(){if(H.forEach(function(fe){Ne.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){k(T);return}setTimeout(se,10)}Oe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Kt=null;function Jn(T){Kt&&Kt(T)}function bh(){nr.stop()}function Sh(){nr.start()}const nr=new $v;nr.setAnimationLoop(Jn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(T){Kt=T,W.setAnimationLoop(T),T===null?nr.stop():nr.start()},W.addEventListener("sessionstart",bh),W.addEventListener("sessionend",Sh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,w),x=Ke.get(T,_.length),x.init(U),_.push(x),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(le),ne=this.localClippingEnabled,q=re.init(this.clippingPlanes,ne),b=ge.get(T,u.length),b.init(),u.push(b),W.enabled===!0&&W.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&hc(se,U,-1/0,y.sortObjects)}hc(T,U,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(L,Q),qe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,qe&&De.addToRenderList(b,T),this.info.render.frame++,q===!0&&re.beginShadows();const B=x.state.shadowsArray;ve.render(B,T,U),q===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=b.opaque,k=b.transmissive;if(x.setupLights(),U.isArrayCamera){const se=U.cameras;if(k.length>0)for(let fe=0,ye=se.length;fe<ye;fe++){const be=se[fe];wh(H,k,T,be)}qe&&De.render(T);for(let fe=0,ye=se.length;fe<ye;fe++){const be=se[fe];Mh(b,T,be,be.viewport)}}else k.length>0&&wh(H,k,T,U),qe&&De.render(T),Mh(b,T,U);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(y,T,U),rt.resetDefaultState(),A=-1,F=null,_.pop(),_.length>0?(x=_[_.length-1],q===!0&&re.setGlobalState(y.clippingPlanes,x.state.camera)):x=null,u.pop(),u.length>0?b=u[u.length-1]:b=null};function hc(T,U,B,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){H&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const fe=Y.update(T),ye=T.material;ye.visible&&b.push(T,fe,ye,B,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){const fe=Y.update(T),ye=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Se.copy(fe.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(ye)){const be=fe.groups;for(let Re=0,Pe=be.length;Re<Pe;Re++){const Me=be[Re],tt=ye[Me.materialIndex];tt&&tt.visible&&b.push(T,fe,tt,B,Se.z,Me)}}else ye.visible&&b.push(T,fe,ye,B,Se.z,null)}}const se=T.children;for(let fe=0,ye=se.length;fe<ye;fe++)hc(se[fe],U,B,H)}function Mh(T,U,B,H){const k=T.opaque,se=T.transmissive,fe=T.transparent;x.setupLightsView(B),q===!0&&re.setGlobalState(y.clippingPlanes,B),H&&Ae.viewport(S.copy(H)),k.length>0&&Xa(k,U,B),se.length>0&&Xa(se,U,B),fe.length>0&&Xa(fe,U,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function wh(T,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[H.id]===void 0&&(x.state.transmissionRenderTarget[H.id]=new Nr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ha:vi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const se=x.state.transmissionRenderTarget[H.id],fe=H.viewport||S;se.setSize(fe.z,fe.w);const ye=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),qe&&De.render(B);const be=y.toneMapping;y.toneMapping=Wi;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),x.setupLightsView(H),q===!0&&re.setGlobalState(y.clippingPlanes,H),Xa(T,B,H),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Me=0,tt=U.length;Me<tt;Me++){const at=U[Me],mt=at.object,on=at.geometry,Qe=at.material,we=at.group;if(Qe.side===Yn&&mt.layers.test(H.layers)){const Lt=Qe.side;Qe.side=sn,Qe.needsUpdate=!0,Eh(mt,B,H,on,Qe,we),Qe.side=Lt,Qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}y.setRenderTarget(ye),y.setClearColor(z,X),Re!==void 0&&(H.viewport=Re),y.toneMapping=be}function Xa(T,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,se=T.length;k<se;k++){const fe=T[k],ye=fe.object,be=fe.geometry,Re=H===null?fe.material:H,Pe=fe.group;ye.layers.test(B.layers)&&Eh(ye,U,B,be,Re,Pe)}}function Eh(T,U,B,H,k,se){T.onBeforeRender(y,U,B,H,k,se),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,U,B,H,T,se),k.transparent===!0&&k.side===Yn&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,y.renderBufferDirect(B,U,H,k,T,se),k.side=Yi,k.needsUpdate=!0,y.renderBufferDirect(B,U,H,k,T,se),k.side=Yn):y.renderBufferDirect(B,U,H,k,T,se),T.onAfterRender(y,U,B,H,k,se)}function qa(T,U,B){U.isScene!==!0&&(U=Ce);const H=Ne.get(T),k=x.state.lights,se=x.state.shadowsArray,fe=k.state.version,ye=xe.getParameters(T,k.state,se,U,B),be=xe.getProgramCacheKey(ye);let Re=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?I:M).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",$e),Re=new Map,H.programs=Re);let Pe=Re.get(be);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===fe)return Ch(T,ye),Pe}else ye.uniforms=xe.getUniforms(T),T.onBeforeCompile(ye,y),Pe=xe.acquireProgram(ye,be),Re.set(be,Pe),H.uniforms=ye.uniforms;const Me=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=re.uniform),Ch(T,ye),H.needsLights=r_(T),H.lightsStateVersion=fe,H.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.directionalShadowMap.value=k.state.directionalShadowMap,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotShadowMap.value=k.state.spotShadowMap,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMap.value=k.state.pointShadowMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function Th(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=al.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ch(T,U){const B=Ne.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function n_(T,U,B,H,k){U.isScene!==!0&&(U=Ce),R.resetTextureUnits();const se=U.fog,fe=H.isMeshStandardMaterial?U.environment:null,ye=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tr,be=(H.isMeshStandardMaterial?I:M).get(H.envMap||fe),Re=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let mt=Wi;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=y.toneMapping);const on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=on!==void 0?on.length:0,we=Ne.get(H),Lt=x.state.lights;if(q===!0&&(ne===!0||T!==F)){const gn=T===F&&H.id===A;re.setState(H,T,gn)}let Je=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Lt.state.version||we.outputColorSpace!==ye||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==be||H.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Re||we.vertexTangents!==Pe||we.morphTargets!==Me||we.morphNormals!==tt||we.morphColors!==at||we.toneMapping!==mt||we.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,we.__version=H.version);let Rn=we.currentProgram;Je===!0&&(Rn=qa(H,U,k));let Lr=!1,ln=!1,pc=!1;const vt=Rn.getUniforms(),yi=we.uniforms;if(Ae.useProgram(Rn.program)&&(Lr=!0,ln=!0,pc=!0),H.id!==A&&(A=H.id,ln=!0),Lr||F!==T){Ge.reverseDepthBuffer?(de.copy(T.projectionMatrix),aS(de),oS(de),vt.setValue(P,"projectionMatrix",de)):vt.setValue(P,"projectionMatrix",T.projectionMatrix),vt.setValue(P,"viewMatrix",T.matrixWorldInverse);const gn=vt.map.cameraPosition;gn!==void 0&&gn.setValue(P,Le.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&vt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,ln=!0,pc=!0)}if(k.isSkinnedMesh){vt.setOptional(P,k,"bindMatrix"),vt.setOptional(P,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),vt.setValue(P,"boneTexture",gn.boneTexture,R))}k.isBatchedMesh&&(vt.setOptional(P,k,"batchingTexture"),vt.setValue(P,"batchingTexture",k._matricesTexture,R),vt.setOptional(P,k,"batchingIdTexture"),vt.setValue(P,"batchingIdTexture",k._indirectTexture,R),vt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(P,"batchingColorTexture",k._colorsTexture,R));const mc=B.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0)&&Ie.update(k,B,Rn),(ln||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,vt.setValue(P,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yi.envMap.value=be,yi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(yi.envMapIntensity.value=U.environmentIntensity),ln&&(vt.setValue(P,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&i_(yi,pc),se&&H.fog===!0&&ce.refreshFogUniforms(yi,se),ce.refreshMaterialUniforms(yi,H,Z,V,x.state.transmissionRenderTarget[T.id]),al.upload(P,Th(we),yi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(al.upload(P,Th(we),yi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(P,"center",k.center),vt.setValue(P,"modelViewMatrix",k.modelViewMatrix),vt.setValue(P,"normalMatrix",k.normalMatrix),vt.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const gn=H.uniformsGroups;for(let xc=0,s_=gn.length;xc<s_;xc++){const Ah=gn[xc];D.update(Ah,Rn),D.bind(Ah,Rn)}}return Rn}function i_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function r_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,B){Ne.get(T.texture).__webglTexture=U,Ne.get(T.depthTexture).__webglTexture=B;const H=Ne.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const B=Ne.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,B=0){w=T,N=U,C=B;let H=!0,k=null,se=!1,fe=!1;if(T){const be=Ne.get(T);if(be.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(be.__hasExternalTextures)R.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(be.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(fe=!0);const Pe=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?k=Pe[U][B]:k=Pe[U],se=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?k=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[B]:k=Pe,S.copy(T.viewport),E.copy(T.scissor),O=T.scissorTest}else S.copy(J).multiplyScalar(Z).floor(),E.copy(ae).multiplyScalar(Z).floor(),O=Te;if(Ae.bindFramebuffer(P.FRAMEBUFFER,k)&&H&&Ae.drawBuffers(T,k),Ae.viewport(S),Ae.scissor(E),Ae.setScissorTest(O),se){const be=Ne.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,B)}else if(fe){const be=Ne.get(T.texture),Re=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Re)}A=-1},this.readRenderTargetPixels=function(T,U,B,H,k,se,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Ae.bindFramebuffer(P.FRAMEBUFFER,ye);try{const be=T.texture,Re=be.format,Pe=be.type;if(!Ge.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&B>=0&&B<=T.height-k&&P.readPixels(U,B,H,k,Ue.convert(Re),Ue.convert(Pe),se)}finally{const be=w!==null?Ne.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,H,k,se,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){const be=T.texture,Re=be.format,Pe=be.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-H&&B>=0&&B<=T.height-k){Ae.bindFramebuffer(P.FRAMEBUFFER,ye);const Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(U,B,H,k,Ue.convert(Re),Ue.convert(Pe),0);const tt=w!==null?Ne.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,tt);const at=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await sS(P,at,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Me),P.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,B=0){T.isTexture!==!0&&(sl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-B),k=Math.floor(T.image.width*H),se=Math.floor(T.image.height*H),fe=U!==null?U.x:0,ye=U!==null?U.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,fe,ye,k,se),Ae.unbindTexture()},this.copyTextureToTexture=function(T,U,B=null,H=null,k=0){T.isTexture!==!0&&(sl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],U=arguments[2],k=arguments[3]||0,B=null);let se,fe,ye,be,Re,Pe;B!==null?(se=B.max.x-B.min.x,fe=B.max.y-B.min.y,ye=B.min.x,be=B.min.y):(se=T.image.width,fe=T.image.height,ye=0,be=0),H!==null?(Re=H.x,Pe=H.y):(Re=0,Pe=0);const Me=Ue.convert(U.format),tt=Ue.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const at=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),Qe=P.getParameter(P.UNPACK_SKIP_ROWS),we=P.getParameter(P.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[k]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,be),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,Re,Pe,se,fe,Me,tt,Lt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,Re,Pe,Lt.width,Lt.height,Me,Lt.data):P.texSubImage2D(P.TEXTURE_2D,k,Re,Pe,se,fe,Me,tt,Lt),P.pixelStorei(P.UNPACK_ROW_LENGTH,at),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we),k===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,U,B=null,H=null,k=0){T.isTexture!==!0&&(sl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,T=arguments[2],U=arguments[3],k=arguments[4]||0);let se,fe,ye,be,Re,Pe,Me,tt,at;const mt=T.isCompressedTexture?T.mipmaps[k]:T.image;B!==null?(se=B.max.x-B.min.x,fe=B.max.y-B.min.y,ye=B.max.z-B.min.z,be=B.min.x,Re=B.min.y,Pe=B.min.z):(se=mt.width,fe=mt.height,ye=mt.depth,be=0,Re=0,Pe=0),H!==null?(Me=H.x,tt=H.y,at=H.z):(Me=0,tt=0,at=0);const on=Ue.convert(U.format),Qe=Ue.convert(U.type);let we;if(U.isData3DTexture)R.setTexture3D(U,0),we=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),we=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Lt=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=P.getParameter(P.UNPACK_SKIP_PIXELS),Lr=P.getParameter(P.UNPACK_SKIP_ROWS),ln=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(we,k,Me,tt,at,se,fe,ye,on,Qe,mt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(we,k,Me,tt,at,se,fe,ye,on,mt.data):P.texSubImage3D(we,k,Me,tt,at,se,fe,ye,on,Qe,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Lt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ln),k===0&&U.generateMipmaps&&P.generateMipmap(we),Ae.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){N=0,C=0,w=null,Ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ph?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===ac?"display-p3":"srgb"}}class vT extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dc extends js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new j,Fl=new j,km=new ht,ea=new Ov,Io=new oc,yd=new j,Fm=new j;class _T extends Ut{constructor(e=new an,n=new dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)kl.fromBufferAttribute(n,r-1),Fl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=kl.distanceTo(Fl);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;km.copy(r).invert(),ea.copy(e.ray).applyMatrix4(km);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,d=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let b=m,x=g-1;b<x;b+=d){const u=f.getX(b),_=f.getX(b+1),y=Uo(this,e,ea,c,u,_);y&&n.push(y)}if(this.isLineLoop){const b=f.getX(g-1),x=f.getX(m),u=Uo(this,e,ea,c,b,x);u&&n.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=m,x=g-1;b<x;b+=d){const u=Uo(this,e,ea,c,b,b+1);u&&n.push(u)}if(this.isLineLoop){const b=Uo(this,e,ea,c,g-1,m);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Uo(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(kl.fromBufferAttribute(o,r),Fl.fromBufferAttribute(o,s),n.distanceSqToSegment(kl,Fl,yd,Fm)>i)return;yd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(yd);if(!(c<e.near||c>e.far))return{distance:c,point:Fm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const jm=new j,Om=new j;class gh extends _T{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)jm.fromBufferAttribute(n,r),Om.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jm.distanceTo(Om);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yr extends an{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c};const d=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],m=[];let g=0;const b=[],x=i/2;let u=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new Mt(p,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(m,2));function _(){const v=new j,N=new j;let C=0;const w=(n-e)/i;for(let A=0;A<=s;A++){const F=[],S=A/s,E=S*(n-e)+e;for(let O=0;O<=r;O++){const z=O/r,X=z*c+l,G=Math.sin(X),V=Math.cos(X);N.x=E*G,N.y=-S*i+x,N.z=E*V,p.push(N.x,N.y,N.z),v.set(G,w,V).normalize(),h.push(v.x,v.y,v.z),m.push(z,1-S),F.push(g++)}b.push(F)}for(let A=0;A<r;A++)for(let F=0;F<s;F++){const S=b[F][A],E=b[F+1][A],O=b[F+1][A+1],z=b[F][A+1];e>0&&(f.push(S,E,z),C+=3),n>0&&(f.push(E,O,z),C+=3)}d.addGroup(u,C,0),u+=C}function y(v){const N=g,C=new Xe,w=new j;let A=0;const F=v===!0?e:n,S=v===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,x*S,0),h.push(0,S,0),m.push(.5,.5),g++;const E=g;for(let O=0;O<=r;O++){const X=O/r*c+l,G=Math.cos(X),V=Math.sin(X);w.x=F*V,w.y=x*S,w.z=F*G,p.push(w.x,w.y,w.z),h.push(0,S,0),C.x=G*.5+.5,C.y=V*.5*S+.5,m.push(C.x,C.y),g++}for(let O=0;O<r;O++){const z=N+O,X=E+O;v===!0?f.push(X,X+1,z):f.push(X+1,X,z),A+=3}d.addGroup(u,A,v===!0?1:2),u+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends yr{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(0,e,n,i,r,s,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(e){return new jl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uc extends an{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];l(r),d(i),f(),this.setAttribute("position",new Mt(s,3)),this.setAttribute("normal",new Mt(s.slice(),3)),this.setAttribute("uv",new Mt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(_){const y=new j,v=new j,N=new j;for(let C=0;C<n.length;C+=3)m(n[C+0],y),m(n[C+1],v),m(n[C+2],N),c(y,v,N,_)}function c(_,y,v,N){const C=N+1,w=[];for(let A=0;A<=C;A++){w[A]=[];const F=_.clone().lerp(v,A/C),S=y.clone().lerp(v,A/C),E=C-A;for(let O=0;O<=E;O++)O===0&&A===C?w[A][O]=F:w[A][O]=F.clone().lerp(S,O/E)}for(let A=0;A<C;A++)for(let F=0;F<2*(C-A)-1;F++){const S=Math.floor(F/2);F%2===0?(h(w[A][S+1]),h(w[A+1][S]),h(w[A][S])):(h(w[A][S+1]),h(w[A+1][S+1]),h(w[A+1][S]))}}function d(_){const y=new j;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function f(){const _=new j;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const v=x(_)/2/Math.PI+.5,N=u(_)/Math.PI+.5;o.push(v,1-N)}g(),p()}function p(){for(let _=0;_<o.length;_+=6){const y=o[_+0],v=o[_+2],N=o[_+4],C=Math.max(y,v,N),w=Math.min(y,v,N);C>.9&&w<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),N<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function m(_,y){const v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const _=new j,y=new j,v=new j,N=new j,C=new Xe,w=new Xe,A=new Xe;for(let F=0,S=0;F<s.length;F+=9,S+=6){_.set(s[F+0],s[F+1],s[F+2]),y.set(s[F+3],s[F+4],s[F+5]),v.set(s[F+6],s[F+7],s[F+8]),C.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),N.copy(_).add(y).add(v).divideScalar(3);const E=x(N);b(C,S+0,_,E),b(w,S+2,y,E),b(A,S+4,v,E)}}function b(_,y,v,N){N<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=N/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.vertices,e.indices,e.radius,e.details)}}class vh extends uc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vh(e.radius,e.detail)}}const ko=new j,Fo=new j,bd=new j,jo=new Sn;class yT extends an{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(rl*n),o=e.getIndex(),l=e.getAttribute("position"),c=o?o.count:l.count,d=[0,0,0],f=["a","b","c"],p=new Array(3),h={},m=[];for(let g=0;g<c;g+=3){o?(d[0]=o.getX(g),d[1]=o.getX(g+1),d[2]=o.getX(g+2)):(d[0]=g,d[1]=g+1,d[2]=g+2);const{a:b,b:x,c:u}=jo;if(b.fromBufferAttribute(l,d[0]),x.fromBufferAttribute(l,d[1]),u.fromBufferAttribute(l,d[2]),jo.getNormal(bd),p[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,p[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,p[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let _=0;_<3;_++){const y=(_+1)%3,v=p[_],N=p[y],C=jo[f[_]],w=jo[f[y]],A=`${v}_${N}`,F=`${N}_${v}`;F in h&&h[F]?(bd.dot(h[F].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(w.x,w.y,w.z)),h[F]=null):A in h||(h[A]={index0:d[_],index1:d[y],normal:bd.clone()})}}for(const g in h)if(h[g]){const{index0:b,index1:x}=h[g];ko.fromBufferAttribute(l,b),Fo.fromBufferAttribute(l,x),m.push(ko.x,ko.y,ko.z),m.push(Fo.x,Fo.y,Fo.z)}this.setAttribute("position",new Mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _h extends uc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _h(e.radius,e.detail)}}class zm extends js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Bm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class bT{constructor(e,n,i){const r=this;let s=!1,o=0,l=0,c;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,l),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return d.push(f,p),this},this.removeHandler=function(f){const p=d.indexOf(f);return p!==-1&&d.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=d.length;p<h;p+=2){const m=d[p],g=d[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null}}}const ST=new bT;class yh{constructor(e){this.manager=e!==void 0?e:ST,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yh.DEFAULT_MATERIAL_NAME="__DEFAULT";class MT extends yh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const l=Ia("img");function c(){f(),Bm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function d(p){f(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){l.removeEventListener("load",c,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class wT extends yh{constructor(e){super(e)}load(e,n,i,r){const s=new Xt,o=new MT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class t_ extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Sd=new ht,Hm=new j,Vm=new j;class ET{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TT extends ET{constructor(){super(new Yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends t_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new TT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends t_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class AT extends gh{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,l=e/2,c=[],d=[];for(let h=0,m=0,g=-l;h<=n;h++,g+=o){c.push(-l,0,g,l,0,g),c.push(g,0,-l,g,0,l);const b=h===s?i:r;b.toArray(d,m),m+=3,b.toArray(d,m),m+=3,b.toArray(d,m),m+=3,b.toArray(d,m),m+=3}const f=new an;f.setAttribute("position",new Mt(c,3)),f.setAttribute("color",new Mt(d,3));const p=new dc({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NT extends gh{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new an;r.setAttribute("position",new Mt(n,3)),r.setAttribute("color",new Mt(i,3));const s=new dc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ve,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);const Wm={Blanco:16317180,Negro:1976635,"Rojo Ferrari":14427686,Rojo:14427686,"Rojo Translúcido":15680580,"Rojo Flúor":16007006,"Azul Eléctrico":2450411,"Azul Translúcido":3718648,Azul:2450411,"Azul Neón":61695,"Amarillo Oro":15381256,"Amarillo Cálido":16436245,"Verde Militar":5078031,"Gris Plata":9741240,"Gris Humo":4674921,Naranja:16347926,"Negro Mate":1579035,"Translúcido Natural":14870768,Roble:11817737,Cedro:10105874};function RT(t){const e=new DataView(t);if(t.byteLength>84&&!String.fromCharCode.apply(null,new Uint8Array(t,0,5)).startsWith("solid")){const i=e.getUint32(80,!0),r=new an,s=new Float32Array(i*9),o=new Float32Array(i*9);let l=84;for(let c=0;c<i;c++){const d=e.getFloat32(l,!0),f=e.getFloat32(l+4,!0),p=e.getFloat32(l+8,!0);l+=12;for(let h=0;h<3;h++){const m=(c*3+h)*3;s[m]=e.getFloat32(l,!0),s[m+1]=e.getFloat32(l+4,!0),s[m+2]=e.getFloat32(l+8,!0),o[m]=d,o[m+1]=f,o[m+2]=p,l+=12}l+=2}return r.setAttribute("position",new Tn(s,3)),r.setAttribute("normal",new Tn(o,3)),r.center(),r}return null}const fc=({geometryType:t="vase",selectedColor:e="Blanco",material:n="PLA",dimensions:i={x:12,y:12,z:22,unit:"cm"},customFile:r=null,height:s="440px",interactive:o=!0})=>{const l=$.useRef(null),[c,d]=$.useState(!1),[f,p]=$.useState(!0),[h,m]=$.useState(100),g=$.useRef(null),b=$.useRef(null),x=$.useRef(null),u=$.useRef(null),_=$.useRef(null),y=i.x<=36&&i.y<=36&&i.z<=36;$.useEffect(()=>{const C=l.current;if(!C)return;const w=C.clientWidth,A=C.clientHeight,F=new vT;g.current=F,F.background=new Ve(527898);const S=new bn(45,w/A,.1,1e3);S.position.set(28,22,28),S.lookAt(0,6,0);const E=new gT({antialias:!0,alpha:!0,powerPreference:"high-performance"});b.current=E,E.setSize(w,A),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=bv,E.localClippingEnabled=!0,C.innerHTML="",C.appendChild(E.domElement);const O=new CT(16777215,.9);F.add(O);const z=new Gm(16777215,1.3);z.position.set(25,45,25),z.castShadow=!0,z.shadow.mapSize.width=1024,z.shadow.mapSize.height=1024,F.add(z);const X=new Gm(440020,.5);X.position.set(-25,20,-25),F.add(X);const G=36,V=new Xi(G,.6,G),L=new wT().load("/Fondo_Laminador.png"),Q=new zm({map:L,color:1976635,metalness:.2,roughness:.8}),J=new zn(V,Q);J.position.y=-.3,J.receiveShadow=!0,F.add(J);const ae=new AT(G,36,440020,3359061);ae.position.y=.02,F.add(ae);const Te=new Xi(G,G,G),He=new yT(Te),q=new gh(He,new dc({color:440020,transparent:!0,opacity:.15}));q.position.y=G/2,F.add(q);const ne=new NT(6);ne.position.set(-G/2+1,.1,G/2-1),F.add(ne);const de=new Ri(new j(0,-1,0),30);_.current=de;const le=(I,K)=>{const ee=Wm[e]||440020,Y=new zm({color:ee,roughness:n==="TPU"?.9:.35,metalness:n==="PETG"?.2:.05,wireframe:c,side:Yn,clippingPlanes:[de],clipShadows:!0});u.current=Y;const xe=new zn(I,Y);xe.position.y=K/2+.05,xe.castShadow=!0,xe.receiveShadow=!0,x.current=xe,F.add(xe)},Le=Math.min(1.2,14/Math.max(i.x||10,i.y||10,i.z||10)),Se=(i.z||12)*Le,Ce=(i.x||10)/2*Le;if(r){const I=new FileReader;I.onload=K=>{try{const ee=RT(K.target.result);if(ee){ee.computeBoundingBox();const Y=ee.boundingBox,xe=Y.max.z-Y.min.z;le(ee,xe||Se)}else{const Y=new yr(Ce*.7,Ce*1.1,Se,32);le(Y,Se)}}catch{const Y=new yr(Ce*.7,Ce*1.1,Se,32);le(Y,Se)}},I.readAsArrayBuffer(r)}else{let I;switch(t){case"vase":I=new yr(Ce*.7,Ce*1.1,Se,32,24,!0);break;case"trophy":I=new jl(Ce*1.2,Se,28,16,!0);break;case"tree":I=new jl(Ce*1.3,Se,8,12);break;case"robot":I=new vh(Ce,1);break;case"bust":I=new _h(Ce,2);break;case"gear":I=new yr(Ce,Ce,Se*.4,16);break;default:I=new Xi(Ce*1.6,Se,Ce*1.6);break}le(I,Se)}let qe=!1,je={x:0,y:0},P={radius:36,theta:Math.PI/4,phi:Math.PI/3.2};const Pt=()=>{P.phi=Math.max(.1,Math.min(Math.PI/2.05,P.phi)),S.position.x=P.radius*Math.sin(P.phi)*Math.sin(P.theta),S.position.y=P.radius*Math.cos(P.phi),S.position.z=P.radius*Math.sin(P.phi)*Math.cos(P.theta),S.lookAt(0,5,0)};Pt();const Oe=I=>{qe=!0,je={x:I.clientX,y:I.clientY}},Ge=I=>{if(!qe)return;const K=I.clientX-je.x,ee=I.clientY-je.y;P.theta-=K*.01,P.phi-=ee*.01,Pt(),je={x:I.clientX,y:I.clientY}},Ae=()=>{qe=!1},it=I=>{I.preventDefault(),P.radius=Math.max(14,Math.min(65,P.radius+I.deltaY*.04)),Pt()};o&&(C.addEventListener("mousedown",Oe),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ae),C.addEventListener("wheel",it,{passive:!1}));let Ne;const R=()=>{Ne=requestAnimationFrame(R),f&&x.current&&!qe&&(x.current.rotation.y+=.008),E.render(F,S)};R();const M=()=>{if(!C)return;const I=C.clientWidth,K=C.clientHeight;S.aspect=I/K,S.updateProjectionMatrix(),E.setSize(I,K)};return window.addEventListener("resize",M),()=>{cancelAnimationFrame(Ne),window.removeEventListener("resize",M),o&&(C.removeEventListener("mousedown",Oe),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ae),C.removeEventListener("wheel",it)),E.dispose(),C&&E.domElement&&C.removeChild(E.domElement)}},[t,i.x,i.y,i.z,n,r]),$.useEffect(()=>{if(_.current){const C=i.z||15,w=h/100*(C*1.2);_.current.constant=w+.1}},[h,i.z]),$.useEffect(()=>{if(u.current){const C=Wm[e]||440020;u.current.color.setHex(C),u.current.wireframe=c,u.current.needsUpdate=!0}},[e,c]);const v=Math.max(1,Math.round(h/100*((i.z||15)*50))),N=Math.round((i.z||15)*50);return a.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex flex-col slicer-grid-bg group select-none",style:{height:s},children:[a.jsxs("div",{className:"absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none",children:[a.jsxs("div",{className:"flex items-center space-x-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 shadow-lg pointer-events-auto",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"}),a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-cyan-300",children:"ORCA-VIEW 36×36 cm"}),a.jsx("span",{className:"text-xs text-slate-400",children:"|"}),a.jsxs("span",{className:"text-xs font-semibold text-slate-300",children:[n," · ",e]})]}),a.jsx("div",{className:"pointer-events-auto",children:y?a.jsxs("div",{className:"flex items-center space-x-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 px-2.5 py-1 rounded-md text-xs font-medium",children:[a.jsx(gi,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Cama 360 mm OK"})]}):a.jsxs("div",{className:"flex items-center space-x-1.5 bg-rose-950/80 text-rose-400 border border-rose-700/50 px-2.5 py-1 rounded-md text-xs font-medium",children:[a.jsx(dv,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Excede 36×36×36 cm"})]})})]}),a.jsx("div",{className:"absolute right-3 top-16 bottom-16 z-20 flex flex-col items-center justify-center pointer-events-auto",children:a.jsxs("div",{className:"bg-slate-900/90 backdrop-blur-md px-2 py-3 rounded-2xl border border-slate-800 flex flex-col items-center space-y-2 shadow-2xl",children:[a.jsxs("div",{className:"text-[9px] font-mono font-bold text-cyan-400 flex items-center space-x-1",children:[a.jsx(ab,{className:"w-3 h-3"}),a.jsx("span",{className:"hidden sm:inline",children:"CAPA"})]}),a.jsx("div",{className:"h-40 sm:h-48 flex items-center",children:a.jsx("input",{type:"range",orient:"vertical",min:"2",max:"100",value:h,onChange:C=>m(Number(C.target.value)),className:"h-full w-2 accent-cyan-400 cursor-ns-resize",style:{appearance:"slider-vertical",WebkitAppearance:"slider-vertical"},title:"Simulador de laminado por capas"})}),a.jsxs("span",{className:"text-[9px] font-mono text-slate-400 text-center leading-none",children:[v,a.jsx("br",{}),a.jsxs("span",{className:"text-[8px] text-slate-600",children:["/",N]})]})]})}),a.jsx("div",{ref:l,className:"w-full flex-1 cursor-grab active:cursor-grabbing"}),a.jsxs("div",{className:"absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none",children:[a.jsxs("div",{className:"bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 space-x-2 pointer-events-auto",children:[a.jsxs("span",{children:["X: ",a.jsxs("strong",{className:"text-rose-400",children:[i.x," cm"]})]}),a.jsxs("span",{children:["Y: ",a.jsxs("strong",{className:"text-emerald-400",children:[i.y," cm"]})]}),a.jsxs("span",{children:["Z: ",a.jsxs("strong",{className:"text-cyan-400",children:[i.z," cm"]})]}),a.jsx("span",{className:"text-slate-500 hidden sm:inline",children:"|"}),a.jsxs("span",{className:"text-slate-400 hidden sm:inline",children:["Z-Cut: ",(h/100*(i.z||15)).toFixed(1)," cm"]})]}),a.jsxs("div",{className:"flex items-center space-x-1.5 bg-slate-900/90 backdrop-blur-md p-1 rounded-lg border border-slate-800 shadow-xl pointer-events-auto",children:[a.jsx("button",{type:"button",title:"Alternar Capas / Alambre",onClick:()=>d(!c),className:`p-1.5 rounded-md transition-colors ${c?"bg-cyan-500 text-black font-bold":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:a.jsx(tc,{className:"w-4 h-4"})}),a.jsx("button",{type:"button",title:"Auto-rotación 360°",onClick:()=>p(!f),className:`p-1.5 rounded-md transition-colors ${f?"bg-cyan-500/20 text-cyan-400":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:a.jsx(ib,{className:"w-4 h-4"})})]})]})]})},PT=({onNavigate:t})=>{const e=[{id:"Impresión 3D",title:"Impresión 3D Técnica",specs:"PETG · PLA · ABS · TPU (Hasta 36 × 36 × 36 cm)",desc:"Prototipos mecánicos y piezas decorativas con alta resistencia térmica y mecánica.",icon:Nn,accent:"border-cyan-500/30 text-cyan-400 bg-cyan-950/20"},{id:"Router CNC",title:"Router CNC Madera",specs:"Puertas · Biombos · Celosías (100 × 75 × 15 cm)",desc:"Tallado tridimensional en cedro, roble y tableros decorativos con acabado milimétrico.",icon:tc,accent:"border-amber-500/30 text-amber-400 bg-amber-950/20"},{id:"Avisos",title:"Avisos y Neón Flex",specs:"Acrílico cristal y LED Neón (Cualquier tamaño)",desc:"Diseño, fabricación y montaje de señalética luminosa y logotipos corporativos 3D.",icon:_v,accent:"border-purple-500/30 text-purple-400 bg-purple-950/20"},{id:"Metal",title:"Corte y Fabricación Metálica",specs:"Hierro carbón (hasta 3cm) · Inox (hasta 2cm)",desc:"Placas industriales y estructuras metálicas de alta resistencia hasta 150 × 250 cm.",icon:nh,accent:"border-rose-500/30 text-rose-400 bg-rose-950/20"}];return a.jsxs("div",{className:"space-y-24",children:[a.jsx("section",{className:"relative pt-12 pb-20 overflow-hidden",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[a.jsxs("div",{className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono font-semibold",children:[a.jsx(ws,{className:"w-3.5 h-3.5 animate-spin"}),a.jsx("span",{children:"Fabricación Digital y Prototipado 4.0"})]}),a.jsxs("h1",{className:"text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]",children:["Materializamos tus ideas con ",a.jsx("span",{className:"text-brand-500",children:"precisión 3D"})," y tecnología CNC."]}),a.jsxs("p",{className:"text-base sm:text-lg text-muted max-w-2xl leading-relaxed",children:["En ",a.jsx("strong",{children:"Maquinamos 3D"})," transformamos diseños digitales en piezas reales. Desde impresión FDM industrial de hasta ",a.jsx("strong",{children:"36 × 36 × 36 cm"})," en materiales de ingeniería, hasta tallado en router CNC, avisos publicitarios luminosos y corte de placas metálicas pesadas."]}),a.jsxs("div",{className:"flex flex-wrap gap-3 sm:gap-4 pt-2",children:[a.jsxs("button",{onClick:()=>t("quote"),className:"px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-sm flex items-center space-x-2 transition-all shadow-xl shadow-brand-500/25 hover:scale-105",children:[a.jsx(ks,{className:"w-4 h-4"}),a.jsx("span",{children:"Cotizar mi Archivo 3D"}),a.jsx(Ms,{className:"w-4 h-4"})]}),a.jsxs("button",{onClick:()=>t("catalog"),className:"px-6 py-3.5 rounded-xl surface-card hover:bg-slate-900 border border-slate-700 font-semibold text-sm flex items-center space-x-2 transition-colors",children:[a.jsx(Nn,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:"Explorar Catálogo"})]}),a.jsxs("button",{onClick:()=>t("ai-design"),className:"px-5 py-3.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold text-sm flex items-center space-x-2 transition-colors",children:[a.jsx(ws,{className:"w-4 h-4 text-purple-400"}),a.jsx("span",{children:"Diseño IA Paramétrico"})]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-6 border-t border-slate-800",children:[a.jsxs("div",{children:[a.jsx("div",{className:"text-2xl font-extrabold text-white",children:"36 cm³"}),a.jsx("div",{className:"text-[11px] text-muted font-medium",children:"Volumen Máx. 3D FDM"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-2xl font-extrabold text-white",children:"4 Filamentos"}),a.jsx("div",{className:"text-[11px] text-muted font-medium",children:"PETG · PLA · ABS · TPU"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-2xl font-extrabold text-brand-400",children:"100% Real"}),a.jsx("div",{className:"text-[11px] text-muted font-medium",children:"Trazabilidad por Slicer"})]})]})]}),a.jsxs("div",{className:"lg:col-span-5 relative",children:[a.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10"}),a.jsx(fc,{geometryType:"vase",selectedColor:"Azul Translúcido",material:"PETG",dimensions:{x:12,y:12,z:22,unit:"cm"},height:"440px"}),a.jsx("div",{className:"mt-3 text-center",children:a.jsx("span",{className:"text-[11px] text-muted font-mono",children:"* Visor 3D interactivo con cama de impresión calibrada (36 × 36 cm). Rota con el cursor."})})]})]})})}),a.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14 space-y-3",children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-widest text-brand-400 uppercase",children:"Capacidades Industriales"}),a.jsx("h2",{className:"text-3xl font-extrabold text-white tracking-tight",children:"Nuestras 4 Divisiones de Fabricación Digital"}),a.jsx("p",{className:"text-sm text-muted",children:"Soluciones para empresas, ingenieros, diseñadores y particulares con especificaciones técnicas rigurosas."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map(n=>{const i=n.icon;return a.jsxs("div",{onClick:()=>t("catalog",{category:n.id}),className:"surface-card p-6 rounded-2xl border hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:`w-12 h-12 rounded-xl border flex items-center justify-center ${n.accent}`,children:a.jsx(i,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-brand-400 transition-colors",children:n.title}),a.jsx("span",{className:"text-[11px] font-mono text-brand-500/90 font-medium block mt-1",children:n.specs})]}),a.jsx("p",{className:"text-xs text-muted leading-relaxed",children:n.desc})]}),a.jsxs("div",{className:"pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400",children:[a.jsx("span",{children:"Ver Catálogo"}),a.jsx(Ms,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]},n.id)})})]}),a.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"surface-card p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden",children:[a.jsxs("div",{className:"max-w-3xl mb-8 space-y-2",children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Trazabilidad en Tiempo Real"}),a.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:"Seguimiento Transparente de tu Fabricación"}),a.jsx("p",{className:"text-xs sm:text-sm text-muted",children:"Conoce en qué etapa exacta de máquina se encuentra tu producto desde que ordenas hasta que lo tienes en tus manos:"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[a.jsxs("div",{className:"p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs",children:"1"}),a.jsx("h4",{className:"text-sm font-bold text-white",children:"1. Pedido"}),a.jsx("p",{className:"text-xs text-muted",children:"Registro de orden, comprobante y verificación de geometría de malla 3D o plano CAD."})]}),a.jsxs("div",{className:"p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold text-xs",children:"2"}),a.jsx("h4",{className:"text-sm font-bold text-white",children:"2. Preparado"}),a.jsx("p",{className:"text-xs text-muted",children:"Laminación (Slicer), calibración térmica, nivelación de cama y puesta en máquina."})]}),a.jsxs("div",{className:"p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs",children:"3"}),a.jsx("h4",{className:"text-sm font-bold text-white",children:"3. Terminado"}),a.jsx("p",{className:"text-xs text-muted",children:"Impresión concluida, retiro de soportes, pulido, curado o ensamble electrónico."})]}),a.jsxs("div",{className:"p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs",children:"4"}),a.jsx("h4",{className:"text-sm font-bold text-white",children:"4. Entregado"}),a.jsx("p",{className:"text-xs text-muted",children:"Despachado a transportadora con número de guía o retirado en taller por el cliente."})]})]}),a.jsx("div",{className:"mt-8 flex justify-end",children:a.jsxs("button",{onClick:()=>t("tracking"),className:"px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center space-x-2 transition-colors",children:[a.jsx(La,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:"Consultar mi Pedido con Código de Guía →"})]})})]})}),a.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-950 via-slate-900 to-slate-950 border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-2xl font-extrabold text-white",children:"¿Tienes un proyecto especial o maqueta arquitectónica?"}),a.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"Contáctanos de inmediato para asesoría técnica, planos a medida y visitas a taller."}),a.jsxs("div",{className:"flex items-center space-x-4 pt-2 text-xs font-mono text-brand-400",children:[a.jsx("span",{children:"Tel. 3005076700"}),a.jsx("span",{children:"·"}),a.jsx("span",{children:"mmontalvova@gmail.com"})]})]}),a.jsxs("div",{className:"flex items-center space-x-3 w-full md:w-auto",children:[a.jsxs("a",{href:"tel:3005076700",className:"flex-1 md:flex-initial px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20",children:[a.jsx(nc,{className:"w-4 h-4"}),a.jsx("span",{children:"Llamar al Taller"})]}),a.jsx("button",{onClick:()=>t("special-services"),className:"flex-1 md:flex-initial px-5 py-3 rounded-xl surface-card hover:bg-slate-800 border border-slate-700 font-semibold text-xs transition-colors",children:"Ver Servicios Especiales"})]})]})})]})},LT=[{id:"Todos",label:"Todos los Productos",icon:Nn},{id:"Impresión 3D",label:"Impresión 3D",icon:Nn},{id:"Router CNC",label:"Router CNC",icon:tc},{id:"Avisos",label:"Avisos y Neón",icon:_v},{id:"Metal",label:"Metal y Placas",icon:nh}],DT=["Todas","Artesanales","Fútbol","Navidad","Electrónica","Juguetes","Esculturas"],IT=({initialCategory:t="Todos",onNavigate:e})=>{const[n,i]=$.useState([]),[r,s]=$.useState(!0),[o,l]=$.useState(t),[c,d]=$.useState("Todas"),[f,p]=$.useState("");$.useEffect(()=>{h()},[o,c]);const h=async()=>{s(!0);try{let g="";const b=[];o&&o!=="Todos"&&b.push(`category=${encodeURIComponent(o)}`),c&&c!=="Todas"&&o==="Impresión 3D"&&b.push(`subcategory=${encodeURIComponent(c)}`),b.length>0&&(g=`?${b.join("&")}`);const x=await ze.request(`/products${g}`);i(x)}catch(g){console.error("Error cargando catálogo:",g)}finally{s(!1)}},m=n.filter(g=>{if(!f)return!0;const b=f.toLowerCase();return g.name.toLowerCase().includes(b)||g.description&&g.description.toLowerCase().includes(b)||g.subcategory&&g.subcategory.toLowerCase().includes(b)});return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[a.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Catálogo Oficial de Fabricación"}),a.jsx("h1",{className:"text-3xl font-extrabold text-white tracking-tight mt-1",children:"Catálogo y Prototipos 3D"}),a.jsx("p",{className:"text-xs sm:text-sm text-muted mt-1 max-w-xl",children:"Piezas listas para producción en PETG, PLA, ABS y TPU (hasta 36cm), maderas talladas en CNC y corte de metales."})]}),a.jsxs("div",{className:"relative w-full md:w-72",children:[a.jsx(Qg,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",placeholder:"Buscar por nombre o material...",value:f,onChange:g=>p(g.target.value),className:"w-full pl-10 pr-4 py-2 surface-subtle border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]})]}),a.jsx("div",{className:"flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none",children:LT.map(g=>{const b=g.icon,x=o===g.id;return a.jsxs("button",{onClick:()=>{l(g.id),d("Todas")},className:`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all shrink-0 ${x?"bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20":"surface-card border border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[a.jsx(b,{className:"w-4 h-4"}),a.jsx("span",{children:g.label})]},g.id)})}),(o==="Impresión 3D"||o==="Todos")&&a.jsxs("div",{className:"surface-card p-4 rounded-2xl border border-slate-800 space-y-2",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-brand-400 font-semibold",children:[a.jsx(Z1,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Subcategorías de Impresión 3D:"})]}),a.jsx("div",{className:"flex flex-wrap gap-1.5",children:DT.map(g=>{const b=c===g;return a.jsx("button",{onClick:()=>d(g),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${b?"bg-brand-500/20 text-brand-400 border border-brand-500/40 font-bold":"bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"}`,children:g},g)})})]}),r?a.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):m.length===0?a.jsxs("div",{className:"text-center py-16 surface-card rounded-2xl border border-slate-800 space-y-3",children:[a.jsx(Nn,{className:"w-10 h-10 text-slate-500 mx-auto"}),a.jsx("h3",{className:"text-base font-bold text-white",children:"No se encontraron productos"}),a.jsx("p",{className:"text-xs text-muted max-w-sm mx-auto",children:"No hay productos registrados que coincidan con la categoría o término de búsqueda seleccionado."})]}):a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:m.map(g=>a.jsxs("div",{onClick:()=>e("product-detail",{id:g.id}),className:"surface-card rounded-2xl border border-slate-800/80 overflow-hidden hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"relative aspect-video overflow-hidden bg-slate-900",children:[a.jsx("img",{src:g.imageUrl,alt:g.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",onError:b=>{b.target.src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=60"}}),a.jsxs("div",{className:"absolute top-2.5 left-2.5 flex flex-wrap gap-1",children:[a.jsx("span",{className:"bg-slate-950/85 backdrop-blur-md text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-700/60 text-slate-200",children:g.category}),g.subcategory&&a.jsx("span",{className:"bg-brand-500/90 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-md",children:g.subcategory})]}),g.isFree&&a.jsx("div",{className:"absolute top-2.5 right-2.5 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-md",children:"GRATIS (STL Libre)"})]}),a.jsxs("div",{className:"p-5 space-y-3",children:[a.jsx("h3",{className:"text-base font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-1",children:g.name}),a.jsx("p",{className:"text-xs text-muted line-clamp-2 leading-relaxed",children:g.description}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/70 text-[11px] font-mono text-slate-300",children:[a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsx(Us,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:g.printTime||"3h 15m"})]}),a.jsxs("div",{className:"flex items-center space-x-1.5",children:[a.jsx(ah,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:g.filamentWeight||"65g"})]})]})]})]}),a.jsxs("div",{className:"px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/50",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-muted block uppercase",children:"Precio"}),a.jsx("span",{className:"text-lg font-extrabold text-brand-400",children:g.isFree?"Descarga Libre":`$${Number(g.price).toLocaleString("es-CO")} COP`})]}),a.jsx("div",{className:"p-2 rounded-xl bg-slate-900 border border-slate-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors",children:a.jsx(Ms,{className:"w-4 h-4"})})]})]},g.id))})]})},UT=({productId:t,onNavigate:e})=>{var S,E,O,z,X;const[n,i]=$.useState(null),[r,s]=$.useState(!0),[o,l]=$.useState("PLA"),[c,d]=$.useState("Blanco"),[f,p]=$.useState(1),[h,m]=$.useState(null),[g,b]=$.useState(!1),[x,u]=$.useState("3d"),{addToCart:_}=za(),{isAuthenticated:y,user:v}=Is();$.useEffect(()=>{N()},[t]);const N=async()=>{var G,V;s(!0);try{const Z=await ze.request(`/products/${t}`);i(Z);const L=((G=Z.availableMaterials)==null?void 0:G[0])||"PLA";l(L);const Q=((V=Z.colorOptionsPerMaterial)==null?void 0:V[L])||["Blanco"];d(Q[0]||"Blanco")}catch(Z){console.error("Error cargando producto:",Z)}finally{s(!1)}},C=G=>{var Z;l(G);const V=((Z=n==null?void 0:n.colorOptionsPerMaterial)==null?void 0:Z[G])||[];V.length>0&&d(V[0])},w=()=>{n&&(_(n,o,c,f),e("cart"))},A=async()=>{m(null),b(!1);try{await ze.downloadModel(n.id,`${n.name.replace(/\s+/g,"_")}.stl`),b(!0)}catch(G){m(G.message||"No se pudo descargar el modelo 3D.")}};if(r)return a.jsx("div",{className:"min-h-[50vh] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})});if(!n)return a.jsxs("div",{className:"max-w-md mx-auto my-16 p-8 surface-card rounded-2xl border border-slate-800 text-center space-y-4",children:[a.jsx("h3",{className:"text-lg font-bold text-white",children:"Producto no encontrado"}),a.jsx("button",{onClick:()=>e("catalog"),className:"px-4 py-2 bg-brand-500 text-slate-950 rounded-xl text-xs font-bold",children:"Volver al Catálogo"})]});const F=((S=n.colorOptionsPerMaterial)==null?void 0:S[o])||["Blanco","Negro"];return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[a.jsxs("button",{onClick:()=>e("catalog"),className:"inline-flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-white transition-colors",children:[a.jsx(th,{className:"w-4 h-4"}),a.jsx("span",{children:"Volver al Catálogo"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-2 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 w-fit",children:[a.jsxs("button",{onClick:()=>u("3d"),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${x==="3d"?"bg-brand-500 text-slate-950 font-bold":"text-slate-400 hover:text-white"}`,children:[a.jsx(Nn,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Visor 3D Orca (Cama 36cm)"})]}),n.videoUrl&&a.jsxs("button",{onClick:()=>u("video"),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${x==="video"?"bg-brand-500 text-slate-950 font-bold":"text-slate-400 hover:text-white"}`,children:[a.jsx(db,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Video de Proceso"})]}),a.jsx("button",{onClick:()=>u("gallery"),className:`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors ${x==="gallery"?"bg-brand-500 text-slate-950 font-bold":"text-slate-400 hover:text-white"}`,children:a.jsx("span",{children:"Foto Real"})})]}),a.jsxs("div",{className:"min-h-[460px]",children:[x==="3d"&&a.jsx(fc,{geometryType:n.meshGeometry||"vase",selectedColor:c,material:o,dimensions:n.dimensions||{x:12,y:12,z:22,unit:"cm"},height:"480px"}),x==="video"&&n.videoUrl&&a.jsx("div",{className:"relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video flex items-center justify-center",children:a.jsx("video",{src:n.videoUrl,controls:!0,autoPlay:!0,loop:!0,muted:!0,className:"w-full h-full object-cover"})}),x==="gallery"&&a.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-[480px]",children:a.jsx("img",{src:n.imageUrl,alt:n.name,className:"w-full h-full object-cover"})})]}),a.jsxs("div",{className:"p-3.5 rounded-xl surface-card border border-slate-800/80 text-xs text-muted flex items-start space-x-3",children:[a.jsx(sb,{className:"w-4 h-4 text-brand-400 shrink-0 mt-0.5"}),a.jsxs("p",{children:["La visualización 3D utiliza la cuadrícula estándar de ",a.jsx("strong",{children:"36 × 36 cm"})," de nuestras impresoras de producción. El color del modelo en el visor cambia al instante según el material y filamento que selecciones."]})]})]}),a.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[a.jsxs("span",{className:"text-xs font-mono font-bold text-brand-400 uppercase tracking-wider",children:[n.category," ",n.subcategory?`· ${n.subcategory}`:""]}),n.isFree&&a.jsx("span",{className:"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded",children:"Modelo 3D Gratuito"})]}),a.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:n.name}),a.jsxs("div",{className:"mt-3 flex items-baseline space-x-3",children:[a.jsx("span",{className:"text-3xl font-extrabold text-brand-400",children:n.isFree?"Descarga Gratuita":`$${Number(n.price).toLocaleString("es-CO")} COP`}),!n.isFree&&a.jsx("span",{className:"text-xs text-muted",children:"IVA incluido · Fabricación a pedido"})]})]}),a.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:n.description}),a.jsxs("div",{className:"surface-card p-4 rounded-2xl border border-slate-800/80 space-y-3",children:[a.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted",children:"Especificaciones de Taller"}),a.jsxs("div",{className:"grid grid-cols-3 gap-3 text-xs",children:[a.jsxs("div",{className:"p-2.5 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Tiempo Impresión"}),a.jsxs("span",{className:"font-bold font-mono text-white flex items-center space-x-1 mt-0.5",children:[a.jsx(Us,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:n.printTime})]})]}),a.jsxs("div",{className:"p-2.5 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Peso Filamento"}),a.jsxs("span",{className:"font-bold font-mono text-white flex items-center space-x-1 mt-0.5",children:[a.jsx(ah,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:n.filamentWeight})]})]}),a.jsxs("div",{className:"p-2.5 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Dimensiones (XYZ)"}),a.jsxs("span",{className:"font-bold font-mono text-white text-[11px] block mt-0.5",children:[(E=n.dimensions)==null?void 0:E.x,"×",(O=n.dimensions)==null?void 0:O.y,"×",(z=n.dimensions)==null?void 0:z.z," cm"]})]})]})]}),a.jsxs("div",{className:"space-y-4 surface-card p-5 rounded-2xl border border-brand-500/20",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-white block mb-2",children:"1. Selecciona el Material Técnico:"}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:(X=n.availableMaterials)==null?void 0:X.map(G=>a.jsx("button",{type:"button",onClick:()=>C(G),className:`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${o===G?"border-brand-500 bg-brand-500/15 text-brand-400 shadow-md ring-1 ring-brand-500/40":"border-slate-800 surface-subtle text-slate-400 hover:border-slate-700"}`,children:G},G))})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-white block mb-2",children:["2. Color Disponible para ",o,":"]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:F.map(G=>{const V=c===G;return a.jsxs("button",{type:"button",onClick:()=>d(G),className:`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all flex items-center space-x-2 ${V?"border-brand-500 bg-brand-500/20 text-white font-bold ring-1 ring-brand-500/40":"border-slate-800 surface-subtle text-slate-300 hover:border-slate-700"}`,children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-brand-400"}),a.jsx("span",{children:G})]},G)})})]}),a.jsxs("div",{className:"pt-2 flex items-center space-x-3",children:[a.jsxs("div",{className:"flex items-center border border-slate-800 rounded-xl overflow-hidden surface-subtle",children:[a.jsx("button",{type:"button",onClick:()=>p(Math.max(1,f-1)),className:"px-3 py-2 text-slate-400 hover:text-white",children:"-"}),a.jsx("span",{className:"px-3 py-2 text-xs font-bold font-mono text-white",children:f}),a.jsx("button",{type:"button",onClick:()=>p(f+1),className:"px-3 py-2 text-slate-400 hover:text-white",children:"+"})]}),a.jsxs("button",{type:"button",onClick:w,className:"flex-1 py-3 px-4 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-brand-500/20",children:[a.jsx(Ba,{className:"w-4 h-4"}),a.jsxs("span",{children:["Agregar al Carrito (",o," - ",c,")"]})]})]})]}),a.jsxs("div",{className:"p-4 rounded-2xl surface-card border border-slate-800 space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsxs("h4",{className:"text-xs font-bold text-white flex items-center space-x-1.5",children:[a.jsx(zp,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:"Descarga de Archivo 3D (.STL)"})]}),a.jsx("p",{className:"text-[11px] text-muted mt-0.5",children:n.isFree?"Este modelo es de libre acceso. Puedes descargarlo sin costo.":"Acceso restringido: requiere haber comprado la pieza o ser administrador."})]}),a.jsxs("button",{type:"button",onClick:A,className:"px-4 py-2 rounded-xl border border-slate-700 hover:border-brand-500 surface-subtle hover:text-brand-400 font-bold text-xs flex items-center space-x-1.5 transition-colors",children:[a.jsx(zp,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Descargar STL"})]})]}),h&&a.jsxs("div",{className:"p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-start space-x-2",children:[a.jsx(er,{className:"w-4 h-4 text-rose-400 shrink-0 mt-0.5"}),a.jsxs("div",{children:[a.jsx("strong",{className:"block font-semibold",children:"Validación del Servidor:"}),a.jsx("span",{children:h})]})]}),g&&a.jsxs("div",{className:"p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2",children:[a.jsx(gi,{className:"w-4 h-4 text-emerald-400 shrink-0"}),a.jsx("span",{children:"¡Descarga iniciada exitosamente! Guardando archivo STL."})]})]})]})]})]})},kT=({onNavigate:t})=>{const{cartItems:e,updateQuantity:n,removeFromCart:i,clearCart:r,cartSubtotal:s}=za(),{isAuthenticated:o,user:l}=Is(),[c,d]=$.useState({city:"Medellín",street:"",phone:(l==null?void 0:l.phone)||"3005076700",notes:""}),[f,p]=$.useState(!1),[h,m]=$.useState(null),g=s>15e4||s===0?0:12e3,b=s+g,x=async u=>{if(u.preventDefault(),m(null),!o){t("login",{redirect:"cart"});return}if(!c.street){m("Por favor indica la dirección de entrega.");return}p(!0);try{const _={items:e.map(v=>({productId:v.productId,name:v.name,category:v.category,material:v.material,color:v.color,price:v.price,quantity:v.quantity,imageUrl:v.imageUrl})),shippingAddress:{city:c.city,address:c.street,phone:c.phone},notes:c.notes,paymentMethod:"Transferencia Bancolombia / Nequi / Contra Entrega"},y=await ze.request("/orders",{method:"POST",body:JSON.stringify(_)});r(),t("tracking",{orderNumber:y.order.orderNumber})}catch(_){m(_.message||"Error al procesar el pedido. Intente nuevamente.")}finally{p(!1)}};return e.length===0?a.jsxs("div",{className:"max-w-2xl mx-auto my-16 p-8 surface-card rounded-3xl border border-slate-800 text-center space-y-4",children:[a.jsx("div",{className:"w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-400 flex items-center justify-center mx-auto",children:a.jsx(Ba,{className:"w-8 h-8"})}),a.jsx("h2",{className:"text-xl font-bold text-white",children:"Tu carrito está vacío"}),a.jsx("p",{className:"text-xs text-muted max-w-sm mx-auto",children:"Explora nuestro catálogo de impresión 3D, router CNC, avisos y piezas metálicas para agregar tus primeros productos."}),a.jsx("button",{onClick:()=>t("catalog"),className:"px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-xs transition-colors",children:"Ir al Catálogo"})]}):a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Finalización de Compra"}),a.jsx("h1",{className:"text-3xl font-extrabold text-white tracking-tight mt-1",children:"Carrito de Compras y Pedido"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[a.jsx("div",{className:"surface-card rounded-2xl border border-slate-800/80 overflow-hidden divide-y divide-slate-800",children:e.map(u=>a.jsxs("div",{className:"p-4 sm:p-5 flex items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("div",{className:"w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0",children:a.jsx("img",{src:u.imageUrl,alt:u.name,className:"w-full h-full object-cover"})}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-bold text-white leading-snug",children:u.name}),a.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-1.5",children:[a.jsxs("span",{className:"px-2 py-0.5 rounded bg-brand-500/15 border border-brand-500/30 text-[11px] font-mono text-brand-400 font-semibold",children:["Mat: ",u.material]}),a.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300",children:["Color: ",u.color]})]}),a.jsxs("span",{className:"text-xs font-extrabold text-brand-400 block mt-2",children:["$",Number(u.price).toLocaleString("es-CO")," COP"]})]})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsxs("div",{className:"flex items-center border border-slate-800 rounded-lg overflow-hidden surface-subtle text-xs",children:[a.jsx("button",{onClick:()=>n(u.itemKey,u.quantity-1),className:"px-2.5 py-1 text-slate-400 hover:text-white",children:"-"}),a.jsx("span",{className:"px-2.5 py-1 font-mono font-bold text-white",children:u.quantity}),a.jsx("button",{onClick:()=>n(u.itemKey,u.quantity+1),className:"px-2.5 py-1 text-slate-400 hover:text-white",children:"+"})]}),a.jsx("button",{onClick:()=>i(u.itemKey),className:"p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition-colors",children:a.jsx(sh,{className:"w-4 h-4"})})]})]},u.itemKey))}),a.jsxs("button",{onClick:()=>t("catalog"),className:"inline-flex items-center space-x-2 text-xs font-semibold text-brand-400 hover:underline",children:[a.jsx(th,{className:"w-4 h-4"}),a.jsx("span",{children:"Continuar explorando el catálogo"})]})]}),a.jsx("div",{className:"lg:col-span-5 space-y-6",children:a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-slate-800/80 space-y-6",children:[a.jsx("h3",{className:"text-base font-bold text-white",children:"Resumen del Pedido"}),a.jsxs("div",{className:"space-y-2 text-xs border-b border-slate-800 pb-4",children:[a.jsxs("div",{className:"flex justify-between text-muted",children:[a.jsx("span",{children:"Subtotal de productos:"}),a.jsxs("span",{className:"font-mono text-white",children:["$",s.toLocaleString("es-CO")," COP"]})]}),a.jsxs("div",{className:"flex justify-between text-muted",children:[a.jsx("span",{children:"Envío nacional / local:"}),a.jsx("span",{className:"font-mono text-white",children:g===0?"¡GRATIS!":`$${g.toLocaleString("es-CO")} COP`})]}),g>0&&a.jsx("p",{className:"text-[10px] text-brand-400",children:"* Envío gratis para compras superiores a $150.000 COP"})]}),a.jsxs("div",{className:"flex justify-between items-baseline text-base font-bold text-white",children:[a.jsx("span",{children:"Total a Pagar:"}),a.jsxs("span",{className:"text-2xl font-extrabold text-brand-400 font-mono",children:["$",b.toLocaleString("es-CO")," COP"]})]}),o?a.jsxs("form",{onSubmit:x,className:"space-y-4",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-muted block",children:"Datos de Entrega (Taller o Domicilio)"}),a.jsx("div",{children:a.jsx("input",{type:"text",placeholder:"Ciudad (Ej. Medellín, Envigado, Bogotá)",value:c.city,onChange:u=>d({...c,city:u.target.value}),required:!0,className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})}),a.jsx("div",{children:a.jsx("input",{type:"text",placeholder:"Dirección exacta o 'Retiro en Taller Maquinamos 3D'",value:c.street,onChange:u=>d({...c,street:u.target.value}),required:!0,className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})}),a.jsx("div",{children:a.jsx("input",{type:"tel",placeholder:"Teléfono de contacto / WhatsApp",value:c.phone,onChange:u=>d({...c,phone:u.target.value}),required:!0,className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})}),a.jsx("div",{children:a.jsx("textarea",{placeholder:"Notas adicionales para el operador de impresión (opcional)",value:c.notes,onChange:u=>d({...c,notes:u.target.value}),rows:"2",className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})})]}),h&&a.jsxs("div",{className:"p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2",children:[a.jsx(er,{className:"w-4 h-4 text-rose-400 shrink-0"}),a.jsx("span",{children:h})]}),a.jsx("button",{type:"submit",disabled:f,className:"w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2",children:f?a.jsx("div",{className:"w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"}):a.jsxs(a.Fragment,{children:[a.jsx(gi,{className:"w-4 h-4"}),a.jsx("span",{children:'Confirmar Compra (Iniciar en "Pedido")'})]})}),a.jsxs("p",{className:"text-[11px] text-muted text-center leading-relaxed",children:["Al confirmar, se genera el registro con estado inicial ",a.jsx("strong",{children:"Pedido"})," y podrás seguir el progreso en vivo en el taller."]})]}):a.jsxs("div",{className:"p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs space-y-3",children:[a.jsxs("div",{className:"flex items-center space-x-2 font-bold",children:[a.jsx(Ug,{className:"w-4 h-4 text-amber-400"}),a.jsx("span",{children:"Registro Obligatorio para Comprar"})]}),a.jsx("p",{children:"Por políticas de trazabilidad y asignación de cola de impresión, debes registrarte o iniciar sesión para completar la compra."}),a.jsx("button",{type:"button",onClick:()=>t("login",{redirect:"cart"}),className:"w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors",children:"Iniciar Sesión o Crear Cuenta"})]})]})})]})]})},Md=[{key:"Pedido",title:"Pedido",description:"Comprado y registrado",icon:rh},{key:"Preparado",title:"Preparado",description:"En preparación para impresión / corte",icon:K1},{key:"Terminado",title:"Terminado",description:"Impreso y post-procesado",icon:Pl},{key:"Entregado",title:"Entregado",description:"Entregado a conformidad al cliente",icon:nb}],FT=({currentStatus:t,statusHistory:e=[]})=>{const n=Md.findIndex(i=>i.key===t);return a.jsxs("div",{className:"py-6",children:[a.jsxs("div",{className:"relative flex items-center justify-between mb-8",children:[a.jsx("div",{className:"absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-slate-800 -z-0",children:a.jsx("div",{className:"h-full bg-brand-500 transition-all duration-700 rounded-full",style:{width:n>=0?`${n/(Md.length-1)*100}%`:"0%"}})}),Md.map((i,r)=>{const s=r<=n,o=r===n,l=i.icon;return a.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[a.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all shadow-xl ${o?"border-brand-500 bg-brand-500 text-slate-950 ring-4 ring-brand-500/30 scale-110 font-bold":s?"border-brand-500 bg-slate-900 text-brand-400":"border-slate-800 bg-slate-900 text-slate-600"}`,children:a.jsx(l,{className:`w-5 h-5 ${o?"animate-bounce":""}`})}),a.jsxs("div",{className:"text-center mt-3 max-w-[110px]",children:[a.jsx("span",{className:`text-xs block font-bold ${s?"text-white":"text-slate-500"}`,children:i.title}),a.jsx("span",{className:"text-[10px] text-muted hidden sm:block mt-0.5 leading-tight",children:i.description})]})]},i.key)})]}),e.length>0&&a.jsxs("div",{className:"surface-card p-4 rounded-xl border border-slate-800/80 space-y-3",children:[a.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted flex items-center space-x-1.5",children:[a.jsx(Us,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:"Bitácora de Taller y Fabricación"})]}),a.jsx("div",{className:"space-y-2.5",children:e.map((i,r)=>a.jsx("div",{className:"flex items-start space-x-3 text-xs border-l-2 border-brand-500/50 pl-3 py-1",children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"font-bold text-white",children:i.status}),a.jsxs("span",{className:"text-[11px] text-muted flex items-center space-x-1",children:[a.jsx(mg,{className:"w-3 h-3"}),a.jsx("span",{children:new Date(i.timestamp).toLocaleString("es-CO")})]})]}),a.jsx("p",{className:"text-slate-300 mt-1",children:i.note})]})},r))})]})]})},jT=({initialOrderNumber:t="",onNavigate:e})=>{const{isAuthenticated:n,user:i}=Is(),[r,s]=$.useState(t),[o,l]=$.useState(null),[c,d]=$.useState([]),[f,p]=$.useState(!1),[h,m]=$.useState(null);$.useEffect(()=>{t&&b(t)},[t]),$.useEffect(()=>{n&&g()},[n]);const g=async()=>{try{const u=await ze.request("/orders/my-orders");d(u),u.length>0&&!t&&!o&&l(u[0])}catch(u){console.warn("Error cargando historial de pedidos:",u)}},b=async u=>{const _=u||r;if(_){p(!0),m(null);try{const y=await ze.request(`/orders/track/${encodeURIComponent(_.trim())}`);l(y)}catch(y){m(y.message||"No se encontró ningún pedido con ese número de guía."),l(null)}finally{p(!1)}}},x=u=>{u.preventDefault(),b(r)};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Trazabilidad y Control de Calidad"}),a.jsx("h1",{className:"text-3xl font-extrabold text-white tracking-tight mt-1",children:"Seguimiento de Pedidos en Taller"}),a.jsxs("p",{className:"text-xs sm:text-sm text-muted mt-1 max-w-2xl",children:["Visualiza el avance de tu pieza en el orden obligatorio de producción:",a.jsx("strong",{className:"text-white ml-1",children:"Pedido → Preparado → Terminado → Entregado"}),"."]})]}),a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-slate-800/80 shadow-xl",children:[a.jsxs("form",{onSubmit:x,className:"flex flex-col sm:flex-row gap-3",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(Qg,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",placeholder:"Ingresa tu número de guía (Ej: MQ3D-882319)",value:r,onChange:u=>s(u.target.value),className:"w-full pl-10 pr-4 py-3 surface-subtle border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"})]}),a.jsxs("button",{type:"submit",disabled:f,className:"px-6 py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20",children:[a.jsx(La,{className:"w-4 h-4"}),a.jsx("span",{children:"Consultar Estado"})]})]}),h&&a.jsxs("div",{className:"mt-4 p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2",children:[a.jsx(er,{className:"w-4 h-4 text-rose-400 shrink-0"}),a.jsx("span",{children:h})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[a.jsx("div",{className:"lg:col-span-8 space-y-6",children:f?a.jsx("div",{className:"min-h-[300px] flex items-center justify-center surface-card rounded-3xl border border-slate-800",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):o?a.jsxs("div",{className:"surface-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6 shadow-2xl",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-muted block",children:"Orden de Trabajo en Taller"}),a.jsxs("div",{className:"flex items-center space-x-3 mt-1",children:[a.jsx("h2",{className:"text-2xl font-extrabold text-white font-mono",children:o.orderNumber}),a.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-bold border border-brand-500/40 bg-brand-500/15 text-brand-400",children:["Estado: ",o.status]})]})]}),a.jsxs("div",{className:"text-xs text-muted font-mono flex items-center space-x-1.5",children:[a.jsx(mg,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:new Date(o.createdAt).toLocaleDateString("es-CO")})]})]}),a.jsx(FT,{currentStatus:o.status,statusHistory:o.statusHistory||[]}),a.jsxs("div",{className:"space-y-3 pt-4 border-t border-slate-800",children:[a.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-muted",children:"Detalle de Piezas en Fabricación"}),a.jsx("div",{className:"space-y-2",children:(o.items||o.itemsSummary||[]).map((u,_)=>a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 flex items-center justify-between text-xs",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx(Bp,{className:"w-4 h-4 text-brand-400 shrink-0"}),a.jsxs("div",{children:[a.jsx("span",{className:"font-bold text-white block",children:u.name}),a.jsxs("span",{className:"text-muted text-[11px] font-mono",children:["Cant: ",u.quantity," · Mat: ",u.material||"PLA"," · Color: ",u.color||"Blanco"]})]})]}),u.itemTotal&&a.jsxs("span",{className:"font-mono font-bold text-brand-400",children:["$",Number(u.itemTotal).toLocaleString("es-CO")," COP"]})]},_))})]}),o.total&&a.jsxs("div",{className:"pt-4 border-t border-slate-800 flex justify-between items-baseline text-xs",children:[a.jsx("span",{className:"text-muted",children:"Valor total cancelado:"}),a.jsxs("span",{className:"text-lg font-extrabold text-white font-mono",children:["$",Number(o.total).toLocaleString("es-CO")," COP"]})]})]}):a.jsxs("div",{className:"text-center py-16 surface-card rounded-3xl border border-slate-800 space-y-3",children:[a.jsx(La,{className:"w-10 h-10 text-slate-500 mx-auto"}),a.jsx("h3",{className:"text-base font-bold text-white",children:"Ingresa un número de pedido"}),a.jsx("p",{className:"text-xs text-muted max-w-sm mx-auto",children:"Puedes buscar por tu código de guía (Ej: MQ3D-882319) para ver la máquina asignada y el estado actual."})]})}),a.jsx("div",{className:"lg:col-span-4 space-y-4",children:a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-slate-800/80 space-y-4",children:[a.jsxs("h3",{className:"text-sm font-bold text-white flex items-center space-x-2",children:[a.jsx(Bp,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:"Mis Pedidos Registrados"})]}),n?c.length===0?a.jsx("p",{className:"text-xs text-muted",children:"Aún no tienes pedidos registrados en tu cuenta."}):a.jsx("div",{className:"space-y-2",children:c.map(u=>{var _;return a.jsxs("button",{onClick:()=>{l(u),s(u.orderNumber)},className:`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${(o==null?void 0:o.orderNumber)===u.orderNumber?"border-brand-500 bg-brand-500/15 text-white font-bold":"border-slate-800 surface-subtle text-slate-300 hover:border-slate-700"}`,children:[a.jsxs("div",{children:[a.jsx("div",{className:"font-mono font-bold text-brand-400",children:u.orderNumber}),a.jsxs("div",{className:"text-[11px] text-muted",children:[new Date(u.createdAt).toLocaleDateString("es-CO")," · ",((_=u.items)==null?void 0:_.length)||1," pieza(s)"]})]}),a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 border border-slate-800",children:u.status})]},u.id)})}):a.jsxs("div",{className:"p-4 rounded-xl surface-subtle text-xs text-muted space-y-2",children:[a.jsx("p",{children:"Inicia sesión para ver tu historial de compras de forma automática."}),a.jsx("button",{onClick:()=>e("login"),className:"text-xs font-bold text-brand-400 hover:underline block",children:"Iniciar Sesión →"})]})]})})]})]})},Oo=[{id:"PLA",name:"PLA Estándar",desc:"Decorativo y prototipos visuales (120 COP/g)",colors:["Blanco","Negro","Rojo Ferrari","Azul Eléctrico","Amarillo Oro"]},{id:"PETG",name:"PETG Técnico",desc:"Resistente a calor, impactos y rayos UV (150 COP/g)",colors:["Negro","Blanco","Azul Translúcido","Rojo Translúcido"]},{id:"ABS",name:"ABS Industrial",desc:"Torsión mecánica y piezas funcionales (140 COP/g)",colors:["Negro","Blanco","Rojo"]},{id:"TPU",name:"TPU Flexible",desc:"Goma elástica anti-impacto (190 COP/g)",colors:["Negro Mate","Rojo Flúor","Azul Neón"]}],OT=({onNavigate:t})=>{const{addToCart:e}=za(),[n,i]=$.useState(null),[r,s]=$.useState("PLA"),[o,l]=$.useState("Blanco"),[c,d]=$.useState(20),[f,p]=$.useState({x:10,y:10,z:12}),[h,m]=$.useState(!1),[g,b]=$.useState(null),[x,u]=$.useState(null),_=Oo.find(w=>w.id===r)||Oo[0],y=w=>{s(w);const A=Oo.find(F=>F.id===w);A&&A.colors.length>0&&l(A.colors[0])},v=w=>{w.target.files&&w.target.files[0]&&(i(w.target.files[0]),b(null),u(null))},N=async w=>{w.preventDefault(),m(!0),u(null);try{const A=new FormData;n&&A.append("customerFile",n),A.append("material",r),A.append("color",o),A.append("infillPercent",c),A.append("dimensionX",f.x),A.append("dimensionY",f.y),A.append("dimensionZ",f.z);const F=await ze.request("/quotes/estimate",{method:"POST",body:A});b(F.quote)}catch(A){u(A.message||"Error al cotizar el modelo 3D.")}finally{m(!1)}},C=()=>{if(!g)return;const w={id:g.id,name:`Prototipo a Medida: ${n?n.name:"Modelo 3D Personalizado"}`,category:"Impresión 3D",price:g.estimation.breakdown.totalPrice,dimensions:g.dimensions,imageUrl:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60"};e(w,r,o,1),t("cart")};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Laminador Online y Cotizador FDM"}),a.jsx("h1",{className:"text-3xl font-extrabold text-white tracking-tight mt-1",children:"Cotiza tu Propio Archivo 3D al Instante"}),a.jsxs("p",{className:"text-xs sm:text-sm text-muted mt-1 max-w-2xl leading-relaxed",children:["Sube tu modelo tridimensional (.STL, .OBJ, .STEP o .3MF), elige material y color. Nuestro motor calcula el peso de filamento, tiempo de impresión en máquina y costo exacto con volumen máximo de ",a.jsx("strong",{children:"36 × 36 × 36 cm"}),"."]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[a.jsx("div",{className:"lg:col-span-7 space-y-6",children:a.jsxs("form",{onSubmit:N,className:"surface-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6 shadow-xl",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-white block mb-2",children:"1. Sube tu Archivo 3D (.STL, .OBJ, .STEP, .3MF)"}),a.jsxs("div",{className:"relative border-2 border-dashed border-slate-700 hover:border-brand-500 rounded-2xl p-6 text-center surface-subtle transition-colors group cursor-pointer",children:[a.jsx("input",{type:"file",accept:".stl,.obj,.step,.stp,.3mf",onChange:v,className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),a.jsxs("div",{className:"flex flex-col items-center space-y-2 pointer-events-none",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform",children:a.jsx(Y1,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-bold text-white block",children:n?n.name:"Haz clic para seleccionar o arrastra tu archivo 3D aquí"}),a.jsx("span",{className:"text-[11px] text-muted font-mono block mt-0.5",children:n?`${(n.size/1024/1024).toFixed(2)} MB`:"Formatos: STL, OBJ, STEP, 3MF (Máx. 50MB)"})]})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-white block mb-2",children:"2. Selecciona el Filamento de Impresión:"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Oo.map(w=>{const A=r===w.id;return a.jsxs("button",{type:"button",onClick:()=>y(w.id),className:`p-3 rounded-xl border text-left transition-all ${A?"border-brand-500 bg-brand-500/15 text-white ring-1 ring-brand-500/30":"border-slate-800 surface-subtle text-slate-300 hover:border-slate-700"}`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-bold text-xs",children:w.name}),A&&a.jsx("span",{className:"text-brand-400 text-xs font-bold",children:"✓"})]}),a.jsx("p",{className:"text-[11px] text-muted mt-1 leading-tight",children:w.desc})]},w.id)})})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-white block mb-2",children:["3. Color Disponible para ",r,":"]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:_.colors.map(w=>{const A=o===w;return a.jsx("button",{type:"button",onClick:()=>l(w),className:`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${A?"border-brand-500 bg-brand-500/20 text-white font-bold ring-1 ring-brand-500/30":"border-slate-800 surface-subtle text-slate-300 hover:border-slate-700"}`,children:w},w)})})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between items-center mb-1",children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-muted",children:"Porcentaje de Relleno (Infill)"}),a.jsxs("span",{className:"text-xs font-mono font-bold text-brand-400",children:[c,"%"]})]}),a.jsx("input",{type:"range",min:"10",max:"100",step:"5",value:c,onChange:w=>d(Number(w.target.value)),className:"w-full accent-brand-500 cursor-pointer"}),a.jsx("span",{className:"text-[10px] text-muted block mt-1",children:"Recomendado: 20% para decorativo, 40-60% para mecánico."})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-muted block mb-1",children:"Dimensiones Bounding Box (cm)"}),a.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[a.jsx("input",{type:"number",min:"1",max:"36",value:f.x,onChange:w=>p({...f,x:Number(w.target.value)}),placeholder:"X",title:"Ancho X (máx 36cm)",className:"px-2 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white text-center font-mono"}),a.jsx("input",{type:"number",min:"1",max:"36",value:f.y,onChange:w=>p({...f,y:Number(w.target.value)}),placeholder:"Y",title:"Profundidad Y (máx 36cm)",className:"px-2 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white text-center font-mono"}),a.jsx("input",{type:"number",min:"1",max:"36",value:f.z,onChange:w=>p({...f,z:Number(w.target.value)}),placeholder:"Z",title:"Altura Z (máx 36cm)",className:"px-2 py-1.5 rounded-lg surface-subtle border border-slate-800 text-xs text-white text-center font-mono"})]}),a.jsx("span",{className:"text-[10px] text-muted block mt-1 font-mono",children:"Límite FDM: 36 × 36 × 36 cm"})]})]}),x&&a.jsxs("div",{className:"p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2",children:[a.jsx(dv,{className:"w-4 h-4 text-rose-400 shrink-0"}),a.jsx("span",{children:x})]}),a.jsx("button",{type:"submit",disabled:h,className:"w-full py-3.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center space-x-2",children:h?a.jsx("div",{className:"w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"}):a.jsxs(a.Fragment,{children:[a.jsx(ws,{className:"w-4 h-4"}),a.jsx("span",{children:"Calcular Estimación y Precio Slicer"})]})})]})}),a.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[a.jsx(fc,{geometryType:"vase",selectedColor:o,material:r,dimensions:{x:f.x,y:f.y,z:f.z,unit:"cm"},customFile:n,height:"340px"}),g?a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-brand-500/40 space-y-4 shadow-2xl animate-fadeIn",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-brand-400 text-xs font-bold uppercase tracking-wider",children:[a.jsx(gi,{className:"w-4 h-4"}),a.jsx("span",{children:"Estimación Calculada por el Servidor"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Filamento Requerido"}),a.jsxs("span",{className:"text-base font-bold font-mono text-white flex items-center space-x-1 mt-0.5",children:[a.jsx(ah,{className:"w-4 h-4 text-brand-400"}),a.jsxs("span",{children:[g.estimation.filamentGrams," g"]})]})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Tiempo de Máquina"}),a.jsxs("span",{className:"text-base font-bold font-mono text-white flex items-center space-x-1 mt-0.5",children:[a.jsx(Us,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:g.estimation.printTimeFormatted})]})]})]}),a.jsxs("div",{className:"p-4 rounded-xl surface-subtle border border-slate-800 space-y-1 text-xs",children:[a.jsxs("div",{className:"flex justify-between text-muted",children:[a.jsxs("span",{children:["Costo materia prima (",g.material,"):"]}),a.jsxs("span",{className:"font-mono text-white",children:["$",g.estimation.breakdown.materialCost.toLocaleString("es-CO")," COP"]})]}),a.jsxs("div",{className:"flex justify-between text-muted",children:[a.jsx("span",{children:"Operación de máquina y energía:"}),a.jsxs("span",{className:"font-mono text-white",children:["$",g.estimation.breakdown.machineCost.toLocaleString("es-CO")," COP"]})]}),a.jsxs("div",{className:"flex justify-between text-muted",children:[a.jsx("span",{children:"Preparación y laminado Slicer:"}),a.jsxs("span",{className:"font-mono text-white",children:["$",g.estimation.breakdown.preparationCost.toLocaleString("es-CO")," COP"]})]})]}),a.jsxs("div",{className:"flex items-baseline justify-between pt-2 border-t border-slate-800",children:[a.jsx("span",{className:"text-xs font-bold text-white uppercase",children:"Cotización Total:"}),a.jsxs("span",{className:"text-2xl font-extrabold text-brand-400 font-mono",children:["$",g.estimation.breakdown.totalPrice.toLocaleString("es-CO")," COP"]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[a.jsxs("button",{type:"button",onClick:()=>{const w=`====================================================
MAQUINAMOS 3D - FICHA TÉCNICA DE PRODUCCIÓN SLICER
Tel. 3005076700 | mmontalvova@gmail.com
====================================================
Cotización ID: ${g.id}
Archivo: ${n?n.name:g.originalName}
Material Técnico: ${g.material} (${o})
Dimensiones: ${g.dimensions.x} x ${g.dimensions.y} x ${g.dimensions.z} cm
Cama de Fabricación: Compatible 36x36x36 cm (360x360 mm)

PARÁMETROS TÉCNICOS DE LAMINADO:
- Altura de Capa: 0.20 mm
- Porcentaje de Relleno: ${g.infillPercent}%
- Patrón de Relleno: Giroide / Cúbico adaptativo
- Peso de Filamento: ${g.estimation.filamentGrams} g
- Tiempo Estimado de Máquina: ${g.estimation.printTimeFormatted}

TEMPERATURAS RECOMENDADAS:
${g.material==="PETG"?"- Boquilla: 240°C | Cama Caliente: 75°C":g.material==="PLA"?"- Boquilla: 210°C | Cama Caliente: 60°C":g.material==="ABS"?"- Boquilla: 250°C | Cama Caliente: 100°C (Cámara Cerrada)":"- Boquilla: 225°C | Cama Caliente: 50°C (Extrusión Directa)"}

DESGLOSE ECONÓMICO:
- Costo Materia Prima: $${g.estimation.breakdown.materialCost} COP
- Costo Operación Máquina: $${g.estimation.breakdown.machineCost} COP
- Preparación y Calibración: $${g.estimation.breakdown.preparationCost} COP
TOTAL COTIZADO: $${g.estimation.breakdown.totalPrice} COP
====================================================`,A=new Blob([w],{type:"text/plain;charset=utf-8"}),F=URL.createObjectURL(A),S=document.createElement("a");S.href=F,S.download=`Ficha_Tecnica_${g.id}.txt`,S.click(),URL.revokeObjectURL(F)},className:"py-2.5 px-3 rounded-xl surface-subtle border border-slate-700 hover:border-brand-500 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center space-x-1.5",children:[a.jsx(ks,{className:"w-3.5 h-3.5 text-brand-400"}),a.jsx("span",{children:"Ficha Técnica"})]}),a.jsxs("button",{type:"button",onClick:C,className:"py-2.5 px-3 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-lg shadow-brand-500/20",children:[a.jsx(Ba,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Ordenar"})]})]})]}):a.jsxs("div",{className:"p-5 surface-card rounded-2xl border border-slate-800 text-xs text-muted space-y-2",children:[a.jsxs("div",{className:"flex items-center space-x-2 text-white font-bold",children:[a.jsx(Q1,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:"Parámetros de Fabricación Garantizados"})]}),a.jsx("p",{children:'Al presionar "Calcular Estimación", la plataforma analiza la densidad volumétrica y genera la orden de trabajo para que nuestro taller inicie la impresión de inmediato al ordenar.'})]})]})]})]})},zT=({onNavigate:t})=>{const[e,n]=$.useState(!1),[i,r]=$.useState({name:"",email:"",phone:"",serviceType:"Maquetas Arquitectónicas",description:""}),s=[{id:"maquetas",title:"Maquetas y Modelos Arquitectónicos",highlight:"Alta Fidelidad de Escala (1:50, 1:100, 1:200)",description:"Combinamos impresión 3D multimaterial, corte láser en acrílico e iluminación interior LED para proyectos de ingeniería civil, diseño urbano y facultades de arquitectura.",image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60",specs:["Topografías en capas y volumetrías de predios","Modelado de fachadas caladas y estructuras traslúcidas","Acabados en blanco arquitectónico o texturizado realista"]},{id:"router-cnc-madera",title:"Tallado Tridimensional en Router CNC",highlight:"Límite Máximo: 100 cm (ancho) × 75 cm (alto) × 15 cm (profundidad)",description:"Mecanizado y tallado de objetos en cedro, roble, pino y tableros MDF hidrófugos. Ideal para puertas con relieves artísticos, celosías árabes y biombos acústicos divisores.",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60",specs:["Puertas decorativas con bajo y altorrelieve","Biombos y celosías caladas para separación de espacios","Tableros de diseño tridimensional a medida"]},{id:"avisos-neon",title:"Avisos Publicitarios y Neón Flex",highlight:"Fabricación y Montaje en Cualquier Tamaño",description:"Desarrollo integral de identidad visual corporativa. Cajas de luz, letras volumétricas 3D en acrílico termoformado y tiras de Neón Flex de bajo consumo energético.",image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=60",specs:["Acrílico cristal de 3mm a 10mm de espesor","Neón flex de 12V con dimerizador y control remoto","Montaje profesional garantizado en interiores y fachadas"]},{id:"corte-metal",title:"Corte y Fabricación de Piezas Metálicas",highlight:"Hierro Carbón (hasta 3 cm) · Acero Inox (hasta 2 cm)",description:"Transformación de metales en banco de corte de alta potencia. Dimensiones de mesa de hasta 150 cm × 250 cm para placas estructurales, anclajes y herrajes de ingeniería pesada.",image:"https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60",specs:["Hierro al carbón de hasta 150 cm × 250 cm × 3 cm de grosor","Acero inoxidable 304/316 de hasta 2 cm de espesor","Tolerancia milimétrica en perforaciones y biseles"]}],o=l=>{l.preventDefault(),n(!0)};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Taller de Ingeniería Especializada"}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Servicios Especiales y Proyectos a Medida"}),a.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed",children:"Diseños de alta complejidad cotizados directamente con el cliente. Contamos con capacidad industrial para maquetas arquitectónicas, mecanizado en madera maciza, avisos luminosos y placas metálicas."})]}),a.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:s.map(l=>a.jsxs("div",{className:"surface-card rounded-3xl border border-slate-800/80 overflow-hidden shadow-xl flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"relative aspect-video overflow-hidden bg-slate-900",children:[a.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-500"}),a.jsx("div",{className:"absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700/60 text-[11px] font-mono text-brand-400 font-semibold",children:l.highlight})]}),a.jsxs("div",{className:"p-6 sm:p-8 space-y-4",children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:l.title}),a.jsx("p",{className:"text-xs text-muted leading-relaxed",children:l.description}),a.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-muted block",children:"Especificaciones y Entregables:"}),l.specs.map((c,d)=>a.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-300",children:[a.jsx(gi,{className:"w-3.5 h-3.5 text-brand-400 shrink-0"}),a.jsx("span",{children:c})]},d))]})]})]}),a.jsx("div",{className:"p-6 pt-0",children:a.jsxs("a",{href:"https://wa.me/573005076700?text=Hola%20Maquinamos%203D,%20deseo%20cotizar%20un%20servicio%20especial",target:"_blank",rel:"noreferrer",className:"w-full py-2.5 rounded-xl bg-slate-900 hover:bg-brand-500 hover:text-slate-950 border border-slate-800 text-brand-400 font-bold text-xs flex items-center justify-center space-x-2 transition-colors",children:[a.jsxs("span",{children:["Cotizar ",l.title," por WhatsApp"]}),a.jsx(Ms,{className:"w-4 h-4"})]})})]},l.id))}),a.jsxs("div",{className:"surface-card p-8 sm:p-12 rounded-3xl border border-brand-500/30 grid grid-cols-1 lg:grid-cols-12 gap-10",children:[a.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Atención Personalizada"}),a.jsx("h2",{className:"text-2xl font-extrabold text-white mt-1",children:"Cotiza Directamente con Nuestro Equipo de Ingeniería"}),a.jsx("p",{className:"text-xs text-muted mt-2 leading-relaxed",children:"Analizamos tus planos técnicos, archivos DWG, DXF, STL o bosquejos conceptuales para entregarte una propuesta técnica formal con tiempos de entrega garantizados."})]}),a.jsxs("div",{className:"space-y-3 text-xs",children:[a.jsxs("div",{className:"p-4 rounded-2xl surface-subtle border border-slate-800 flex items-center space-x-3",children:[a.jsx("div",{className:"p-2.5 rounded-xl bg-brand-500/10 text-brand-400",children:a.jsx(nc,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Teléfono / WhatsApp"}),a.jsx("a",{href:"tel:3005076700",className:"text-sm font-bold text-white hover:text-brand-400 font-mono",children:"Tel. 3005076700"})]})]}),a.jsxs("div",{className:"p-4 rounded-2xl surface-subtle border border-slate-800 flex items-center space-x-3",children:[a.jsx("div",{className:"p-2.5 rounded-xl bg-brand-500/10 text-brand-400",children:a.jsx(ih,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Correo Electrónico Directo"}),a.jsx("a",{href:"mailto:mmontalvova@gmail.com",className:"text-xs font-bold text-white hover:text-brand-400 font-mono",children:"mmontalvova@gmail.com"})]})]})]})]}),a.jsx("div",{className:"lg:col-span-7",children:e?a.jsxs("div",{className:"p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3",children:[a.jsx(gi,{className:"w-10 h-10 text-emerald-400 mx-auto"}),a.jsx("h3",{className:"text-lg font-bold text-white",children:"Solicitud Recibida"}),a.jsx("p",{className:"text-xs text-slate-300",children:"Nos comunicaremos al número o correo indicado en menos de 2 horas hábiles con la evaluación técnica preliminar."})]}):a.jsxs("form",{onSubmit:o,className:"space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Nombre o Empresa"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej. Arq. Daniel Morales",value:i.name,onChange:l=>r({...i,name:l.target.value}),className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Teléfono / WhatsApp"}),a.jsx("input",{type:"tel",required:!0,placeholder:"Ej. 3005076700",value:i.phone,onChange:l=>r({...i,phone:l.target.value}),className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Correo Electrónico"}),a.jsx("input",{type:"email",required:!0,placeholder:"correo@ejemplo.com",value:i.email,onChange:l=>r({...i,email:l.target.value}),className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Servicio a Cotizar"}),a.jsxs("select",{value:i.serviceType,onChange:l=>r({...i,serviceType:l.target.value}),className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-500",children:[a.jsx("option",{children:"Maquetas Arquitectónicas"}),a.jsx("option",{children:"Router CNC Madera (Puertas, Biombos, Celosías)"}),a.jsx("option",{children:"Avisos en Acrílico y Neón Flex"}),a.jsx("option",{children:"Corte Metal (Hierro al carbón / Inoxidable)"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Descripción del Proyecto y Medidas Estimadas"}),a.jsx("textarea",{required:!0,rows:"3",placeholder:"Detalla dimensiones aproximadas, tipo de material deseado y fecha estimada de entrega...",value:i.description,onChange:l=>r({...i,description:l.target.value}),className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]}),a.jsxs("button",{type:"submit",className:"w-full py-3 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20",children:[a.jsx(rb,{className:"w-4 h-4"}),a.jsx("span",{children:"Enviar Solicitud de Cotización Directa"})]})]})})]})]})},BT=({onNavigate:t})=>{const[e,n]=$.useState([]),[i,r]=$.useState(!0);$.useEffect(()=>{s()},[]);const s=async()=>{r(!0);try{const o=await ze.request("/sponsors");n(o)}catch(o){console.error("Error cargando patrocinadores:",o)}finally{r(!1)}};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Alianzas Estratégicas y Cadena de Suministro"}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Nuestros Patrocinadores y Aliados Comerciales"}),a.jsxs("p",{className:"text-xs sm:text-sm text-muted leading-relaxed",children:["Empresas líderes del sector industrial, importadores de filamentos técnicos, insumos para router CNC y componentes ópticos que respaldan la calidad operativa de ",a.jsx("strong",{children:"Maquinamos 3D"}),"."]})]}),i?a.jsx("div",{className:"min-h-[300px] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):e.length===0?a.jsxs("div",{className:"text-center py-16 surface-card rounded-2xl border border-slate-800",children:[a.jsx(ic,{className:"w-10 h-10 text-slate-500 mx-auto mb-2"}),a.jsx("h3",{className:"text-base font-bold text-white",children:"No hay patrocinadores registrados"}),a.jsx("p",{className:"text-xs text-muted",children:"Los patrocinadores son administrados desde el módulo de gestión."})]}):a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map(o=>a.jsxs("div",{className:"surface-card p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl group",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-2 group-hover:border-brand-500/40 transition-colors",children:a.jsx("img",{src:o.logoUrl,alt:o.commercialName,className:"w-full h-full object-cover rounded-lg",onError:l=>{l.target.src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60"}})}),a.jsx("span",{className:"text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 font-bold",children:"Aliado Activo"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-brand-400 transition-colors",children:o.commercialName}),o.contactPerson&&a.jsxs("span",{className:"text-[11px] text-muted block mt-0.5",children:["Contacto: ",o.contactPerson]})]}),a.jsxs("div",{className:"p-3.5 rounded-xl surface-subtle border border-slate-800/70",children:[a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Descripción de Actividades:"}),a.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:o.activityDescription})]})]}),o.websiteUrl&&a.jsx("div",{className:"pt-4 mt-4 border-t border-slate-800/60",children:a.jsxs("a",{href:o.websiteUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors",children:[a.jsx("span",{children:"Visitar Sitio Web"}),a.jsx(Ag,{className:"w-3.5 h-3.5"})]})})]},o.id))}),a.jsxs("div",{className:"p-8 rounded-3xl surface-card border border-slate-800 text-center space-y-3",children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:"¿Tu empresa desea unirse a nuestra red de aliados?"}),a.jsx("p",{className:"text-xs text-muted max-w-xl mx-auto",children:"Ofrecemos convenios institucionales para proveedores de polímeros, herramientas de mecanizado y distribuidores de insumos de manufactura."}),a.jsx("div",{className:"pt-2",children:a.jsx("a",{href:"mailto:mmontalvova@gmail.com?subject=Propuesta%20de%20Patrocinio%20Maquinamos%203D",className:"px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs inline-flex items-center space-x-2 transition-colors",children:a.jsx("span",{children:"Presentar Propuesta Comercial"})})})]})]})},HT=({onNavigate:t})=>{const e=[{title:"Tolerancia Dimensional Milimétrica",desc:"Mantener un margen de desviación menor a ±0.15 mm en piezas de ingeniería FDM y ±0.5 mm en tallado CNC y corte metálico."},{title:"Sostenibilidad y Optimización de Material",desc:"Maximizar el aprovechamiento de filamentos biodegradables (PLA) y reciclaje de mermas y soportes de producción limpia."},{title:"Capacitación y Transformación Digital",desc:"Democratizar el acceso a la fabricación aditiva 4.0 mediante herramientas de laminado online y diseño asistido por IA."},{title:"Cumplimiento Estricto de Tiempos de Entrega",desc:"Monitoreo en tiempo real del ciclo completo de pedido (Pedido → Preparado → Terminado → Entregado) sin demoras injustificadas."}];return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-brand-400 uppercase",children:"Marco Filosófico y Corporativo"}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Sobre Maquinamos 3D"}),a.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed",children:"Somos un centro de fabricación digital integral comprometido con la excelencia técnica, la precisión geométrica y la satisfacción de nuestros clientes en todo el territorio nacional."})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"surface-card p-8 rounded-3xl border border-slate-800/80 space-y-4 shadow-xl",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-400 flex items-center justify-center border border-brand-500/20",children:a.jsx(lb,{className:"w-6 h-6"})}),a.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"Nuestra Misión"}),a.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Brindar soluciones avanzadas de fabricación digital —abarcando impresión 3D multimaterial, router CNC de madera, avisos luminosos y corte de placas metálicas— combinando tecnología de punta, asesoría técnica experta y materiales certificados para convertir las ideas, prototipos y necesidades industriales de nuestros clientes en realidades tangibles y de máxima calidad."})]}),a.jsxs("div",{className:"surface-card p-8 rounded-3xl border border-slate-800/80 space-y-4 shadow-xl",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20",children:a.jsx(La,{className:"w-6 h-6"})}),a.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"Nuestra Visión"}),a.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Consolidarnos para el año 2030 como el taller de fabricación digital y prototipado rápido de mayor referencia, reconocido por la integración pionera de algoritmos paramétricos, inteligencia artificial aplicada al modelado tridimensional y un sistema de control de trazabilidad riguroso que garantice fiabilidad operativa y sostenibilidad en cada pieza producida."})]})]}),a.jsxs("div",{className:"surface-card p-8 sm:p-10 rounded-3xl border border-brand-500/30 space-y-4 shadow-xl",children:[a.jsxs("div",{className:"flex items-center space-x-3 text-brand-400",children:[a.jsx(ug,{className:"w-6 h-6"}),a.jsx("h2",{className:"text-xl sm:text-2xl font-extrabold text-white",children:"Política de Calidad Integral"})]}),a.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["En ",a.jsx("strong",{children:"Maquinamos 3D"})," orientamos todos nuestros procesos productivos hacia la precisión milimétrica y la mejora continua. Seleccionamos rigurosamente materias primas (filamentos técnicos PETG, PLA, ABS y TPU con control constante de diámetro e hidratación, maderas selectas curadas y metales de grado estructural), calibrando nuestras máquinas previo a cada ciclo de trabajo. Aseguramos la confidencialidad de los archivos CAD de nuestros usuarios y validamos cada pieza antes de su entrega definitiva."]})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"text-center max-w-xl mx-auto",children:[a.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"Objetivos de Calidad y Fabricación"}),a.jsx("p",{className:"text-xs text-muted mt-1",children:"Metas claras que orientan nuestra labor diaria de taller."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:e.map((n,i)=>a.jsxs("div",{className:"p-5 surface-card rounded-2xl border border-slate-800 flex items-start space-x-3.5",children:[a.jsx("div",{className:"p-2 rounded-xl bg-brand-500/15 text-brand-400 shrink-0 mt-0.5",children:a.jsx(Pl,{className:"w-4 h-4"})}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("h4",{className:"text-sm font-bold text-white",children:n.title}),a.jsx("p",{className:"text-xs text-muted leading-relaxed",children:n.desc})]})]},i))})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-300",children:[a.jsxs("div",{children:[a.jsx("span",{className:"font-bold text-white block text-sm",children:"Maquinamos 3D · Taller Central"}),a.jsx("span",{className:"text-muted",children:"Línea directa y correo para alianzas institucionales y convenios educativos."})]}),a.jsxs("div",{className:"flex flex-wrap gap-4 font-mono",children:[a.jsx("a",{href:"tel:3005076700",className:"hover:text-brand-400 font-bold",children:"Tel. 3005076700"}),a.jsx("span",{children:"·"}),a.jsx("a",{href:"mailto:mmontalvova@gmail.com",className:"hover:text-brand-400",children:"mmontalvova@gmail.com"})]})]})]})},VT=({onNavigate:t})=>{const{addToCart:e}=za(),[n,i]=$.useState("prompt"),[r,s]=$.useState(""),[o,l]=$.useState(null),[c,d]=$.useState(null),[f,p]=$.useState(!1),[h,m]=$.useState(null),[g,b]=$.useState(null),x=y=>{if(y.target.files&&y.target.files[0]){const v=y.target.files[0];l(v),d(URL.createObjectURL(v)),m(null)}},u=async y=>{y.preventDefault(),p(!0),b(null);try{let v;if(n==="prompt"){if(!r.trim())throw new Error("Por favor escribe el nombre o descripción del producto a generar.");v=await ze.request("/ai-parametric/generate-prompt",{method:"POST",body:JSON.stringify({prompt:r})})}else{if(!o)throw new Error("Por favor sube o toma una fotografía para reconstruir el modelo 3D.");const N=new FormData;N.append("image",o),N.append("prompt",r||"Reconstrucción 3D"),v=await ze.request("/ai-parametric/generate-image",{method:"POST",body:N})}m(v.result)}catch(v){b(v.message||"Error en la generación del modelo paramétrico con IA.")}finally{p(!1)}},_=()=>{if(!h)return;const y={id:h.modelId,name:h.name,category:"Impresión 3D",subcategory:h.category,price:h.specifications.estimatedPrice,dimensions:h.dimensions,imageUrl:c||"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60"};e(y,h.recommendedMaterial,h.suggestedColor,1),t("cart")};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[a.jsxs("div",{className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono font-semibold",children:[a.jsx(ws,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Motor Paramétrico Neuronal · Arquitectura Aislada"})]}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Diseño Paramétrico 3D Asistido por IA"}),a.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed",children:"A partir de una fotografía real o una descripción en texto, nuestro generador sintetiza la geometría tridimensional, calcula parámetros técnicos de laminación e infill, y entrega un prototipo 100% imprimible."})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[a.jsx("div",{className:"lg:col-span-6 space-y-6",children:a.jsxs("div",{className:"surface-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-6 shadow-xl",children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800",children:[a.jsxs("button",{type:"button",onClick:()=>{i("prompt"),m(null)},className:`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${n==="prompt"?"bg-purple-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[a.jsx(fv,{className:"w-4 h-4"}),a.jsx("span",{children:"Generar por Nombre / Texto"})]}),a.jsxs("button",{type:"button",onClick:()=>{i("image"),m(null)},className:`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${n==="image"?"bg-purple-600 text-white shadow-md":"text-slate-400 hover:text-white"}`,children:[a.jsx(Op,{className:"w-4 h-4"}),a.jsx("span",{children:"Generar a partir de Foto"})]})]}),a.jsxs("form",{onSubmit:u,className:"space-y-4",children:[n==="prompt"?a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-muted block mb-2",children:"Describe la Pieza o Escribe su Nombre:"}),a.jsx("textarea",{rows:"4",required:!0,placeholder:"Ej: 'Jarrón espiral orgánico con cuello estrecho para flores secas' o 'Soporte de pared con engranaje para motor paso a paso Nema 17'...",value:r,onChange:y=>s(y.target.value),className:"w-full px-4 py-3 rounded-2xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 leading-relaxed"}),a.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-2",children:[a.jsx("span",{className:"text-[10px] text-muted",children:"Ejemplos rápidos:"}),["Engranaje mecánico reductor","Trofeo balón de fútbol","Escultura busto polígono","Árbol navideño geométrico"].map(y=>a.jsx("button",{type:"button",onClick:()=>s(y),className:"text-[10px] px-2 py-0.5 rounded bg-slate-900 hover:bg-purple-950/40 text-purple-300 border border-slate-800",children:y},y))]})]}):a.jsxs("div",{className:"space-y-3",children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-muted block mb-1",children:"Carga o Captura una Fotografía:"}),a.jsxs("div",{className:"relative border-2 border-dashed border-slate-700 hover:border-purple-500 rounded-2xl p-6 text-center surface-subtle transition-colors cursor-pointer",children:[a.jsx("input",{type:"file",accept:"image/*",onChange:x,className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),c?a.jsxs("div",{className:"flex flex-col items-center space-y-2 pointer-events-none",children:[a.jsx("img",{src:c,alt:"Preview",className:"w-32 h-32 object-cover rounded-xl border border-purple-500/50 shadow-md"}),a.jsx("span",{className:"text-xs text-purple-300 font-bold",children:"Foto cargada exitosamente"})]}):a.jsxs("div",{className:"flex flex-col items-center space-y-2 pointer-events-none",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center",children:a.jsx(Op,{className:"w-6 h-6"})}),a.jsx("span",{className:"text-xs font-bold text-white",children:"Haz clic para subir foto del objeto"}),a.jsx("span",{className:"text-[11px] text-muted",children:"Formatos JPG, PNG, WEBP"})]})]}),a.jsx("div",{children:a.jsx("input",{type:"text",placeholder:"Nota opcional o escala estimada...",value:r,onChange:y=>s(y.target.value),className:"w-full px-3.5 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500"})})]}),g&&a.jsxs("div",{className:"p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2",children:[a.jsx(er,{className:"w-4 h-4 text-rose-400 shrink-0"}),a.jsx("span",{children:g})]}),a.jsx("button",{type:"submit",disabled:f,className:"w-full py-3.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all shadow-xl shadow-purple-600/25 flex items-center justify-center space-x-2",children:f?a.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):a.jsxs(a.Fragment,{children:[a.jsx(ws,{className:"w-4 h-4"}),a.jsx("span",{children:"Sintetizar Prototipo 3D con IA"})]})})]})]})}),a.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[a.jsx(fc,{geometryType:(h==null?void 0:h.shapeType)||"vase",selectedColor:(h==null?void 0:h.suggestedColor)||"Blanco",material:(h==null?void 0:h.recommendedMaterial)||"PLA",dimensions:(h==null?void 0:h.dimensions)||{x:12,y:12,z:15,unit:"cm"},height:"340px"}),h?a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-purple-500/40 space-y-4 shadow-2xl animate-fadeIn",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center space-x-1.5",children:[a.jsx(gi,{className:"w-4 h-4 text-purple-400"}),a.jsxs("span",{children:["Generado por ",h.provider]})]}),a.jsxs("span",{className:"px-2.5 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30",children:["Subcategoría: ",h.category]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:h.name}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:["Material sugerido: ",a.jsx("strong",{className:"text-white",children:h.recommendedMaterial})," · Relleno: ",a.jsx("strong",{className:"text-white",children:h.specifications.infill})]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-2.5 text-xs",children:[a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Tiempo Máquina"}),a.jsx("span",{className:"font-bold font-mono text-white mt-0.5 block",children:h.specifications.printTimeEstimate})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Peso Estimado"}),a.jsx("span",{className:"font-bold font-mono text-white mt-0.5 block",children:h.specifications.estimatedWeight})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Precio Fabricación"}),a.jsxs("span",{className:"font-bold font-mono text-brand-400 mt-0.5 block",children:["$",h.specifications.estimatedPrice.toLocaleString("es-CO")]})]})]}),a.jsxs("button",{type:"button",onClick:_,className:"w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-purple-600/20",children:[a.jsx(Ba,{className:"w-4 h-4"}),a.jsx("span",{children:"Ordenar Prototipo Generado por IA"})]})]}):a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-slate-800 text-xs text-muted space-y-2",children:[a.jsxs("h4",{className:"text-sm font-bold text-white flex items-center space-x-2",children:[a.jsx(nh,{className:"w-4 h-4 text-purple-400"}),a.jsx("span",{children:"Arquitectura Desacoplada e Intercambiable"})]}),a.jsxs("p",{className:"leading-relaxed",children:["El módulo de IA está diseñado siguiendo el patrón ",a.jsx("em",{children:"Adapter/Factory"}),". Puede operar de forma autónoma con el motor procedural interno o conectarse sin fricción a modelos cloud como OpenAI Shap-E, Meshy 3D o Tripo3D mediante variables de entorno en el backend."]})]})]})]})]})},GT=({initialMode:t="login",redirectPath:e="home",onNavigate:n})=>{const{login:i,register:r}=Is(),[s,o]=$.useState(t==="register"),[l,c]=$.useState({name:"",email:"",password:"",phone:""}),[d,f]=$.useState(!1),[p,h]=$.useState(null),m=async b=>{b.preventDefault(),f(!0),h(null);try{s?await r(l.name,l.email,l.password,l.phone):await i(l.email,l.password),n(e)}catch(x){h(x.message||"Error en la autenticación.")}finally{f(!1)}},g=b=>{b==="admin"?(c({name:"Mauricio Montalvo (Admin)",email:"mmontalvova@gmail.com",password:"Admin123*",phone:"3005076700"}),o(!1)):(c({name:"Carlos Mendoza",email:"cliente@maquinamos3d.com",password:"Cliente123*",phone:"3109876543"}),o(!1))};return a.jsx("div",{className:"min-h-[75vh] flex items-center justify-center px-4 py-12",children:a.jsxs("div",{className:"w-full max-w-md surface-card border border-slate-800/80 rounded-3xl p-8 shadow-2xl space-y-6",children:[a.jsxs("div",{className:"text-center space-y-2",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-300 flex items-center justify-center text-slate-950 mx-auto shadow-lg shadow-brand-500/20",children:a.jsx(Nn,{className:"w-6 h-6 stroke-[2.5]"})}),a.jsx("h2",{className:"text-2xl font-extrabold text-white tracking-tight",children:s?"Crear Cuenta de Cliente":"Iniciar Sesión"}),a.jsx("p",{className:"text-xs text-muted",children:s?"Regístrate para comprar piezas, descargar STL y rastrear tus órdenes.":"Accede a tu panel y gestión de fabricación digital en Maquinamos 3D."})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 text-[11px] space-y-2",children:[a.jsx("span",{className:"text-muted block text-center font-bold uppercase tracking-wider",children:"Accesos de Prueba Disponibles:"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{type:"button",onClick:()=>g("admin"),className:"py-1.5 px-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold hover:bg-amber-500/25 transition-colors",children:"Cargar Admin"}),a.jsx("button",{type:"button",onClick:()=>g("client"),className:"py-1.5 px-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-bold hover:bg-cyan-500/25 transition-colors",children:"Cargar Cliente"})]})]}),a.jsxs("form",{onSubmit:m,className:"space-y-4",children:[s&&a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Nombre Completo"}),a.jsxs("div",{className:"relative",children:[a.jsx(cb,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej. Juan Pérez",value:l.name,onChange:b=>c({...l,name:b.target.value}),className:"w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Correo Electrónico"}),a.jsxs("div",{className:"relative",children:[a.jsx(ih,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"email",required:!0,placeholder:"correo@ejemplo.com",value:l.email,onChange:b=>c({...l,email:b.target.value}),className:"w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Contraseña"}),a.jsxs("div",{className:"relative",children:[a.jsx(Ug,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:l.password,onChange:b=>c({...l,password:b.target.value}),className:"w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"})]})]}),s&&a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Teléfono de Contacto (WhatsApp)"}),a.jsxs("div",{className:"relative",children:[a.jsx(nc,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"tel",placeholder:"3005076700",value:l.phone,onChange:b=>c({...l,phone:b.target.value}),className:"w-full pl-10 pr-4 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono"})]})]}),p&&a.jsxs("div",{className:"p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center space-x-2",children:[a.jsx(er,{className:"w-4 h-4 text-rose-400 shrink-0"}),a.jsx("span",{children:p})]}),a.jsx("button",{type:"submit",disabled:d,className:"w-full py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-brand-500/25",children:d?a.jsx("div",{className:"w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:s?"Registrarme y Continuar":"Entrar a mi Cuenta"}),a.jsx(Ms,{className:"w-4 h-4"})]})})]}),a.jsx("div",{className:"text-center pt-2 border-t border-slate-800",children:a.jsx("button",{type:"button",onClick:()=>{o(!s),h(null)},className:"text-xs text-brand-400 hover:text-brand-300 font-semibold",children:s?"¿Ya tienes una cuenta? Inicia sesión aquí":"¿No tienes cuenta aún? Regístrate aquí para comprar"})})]})})},WT=({onNavigate:t,onSelectAdminTab:e})=>{const[n,i]=$.useState({productsCount:0,ordersCount:0,pendingOrdersCount:0,sponsorsCount:0,quotesCount:0}),[r,s]=$.useState(!0);$.useEffect(()=>{o()},[]);const o=async()=>{try{const[c,d,f,p]=await Promise.all([ze.request("/products"),ze.request("/orders/admin/all"),ze.request("/sponsors"),ze.request("/quotes/admin/all")]),h=d.filter(m=>m.status!=="Entregado").length;i({productsCount:c.length,ordersCount:d.length,pendingOrdersCount:h,sponsorsCount:f.length,quotesCount:p.length})}catch(c){console.error("Error cargando estadísticas admin:",c)}finally{s(!1)}},l=[{title:"Órdenes en Taller",value:n.ordersCount,sub:`${n.pendingOrdersCount} activas en máquina`,icon:rh,color:"text-brand-400 bg-brand-500/10 border-brand-500/30",tab:"orders"},{title:"Catálogo de Productos",value:n.productsCount,sub:"Impresión 3D, CNC, Avisos, Metal",icon:Nn,color:"text-cyan-400 bg-cyan-500/10 border-cyan-500/30",tab:"products"},{title:"Cotizaciones 3D",value:n.quotesCount,sub:"Archivos subidos por clientes",icon:ks,color:"text-purple-400 bg-purple-500/10 border-purple-500/30",tab:"quotes"},{title:"Patrocinadores Activos",value:n.sponsorsCount,sub:"Empresas y aliados de insumos",icon:ic,color:"text-amber-400 bg-amber-500/10 border-amber-500/30",tab:"sponsors"}];return a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-amber-400 uppercase",children:"Centro de Control de Manufactura"}),a.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1",children:"Panel de Administración Maquinamos 3D"}),a.jsx("p",{className:"text-xs text-muted mt-1",children:"Gestión técnica de inventario, cambio de estados en orden estricto de pedidos y aliados."})]}),a.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-xl border border-amber-500/30 w-fit",children:[a.jsx(vu,{className:"w-4 h-4"}),a.jsx("span",{children:"Sesión de Administrador Autorizada"})]})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:l.map(c=>{const d=c.icon;return a.jsxs("div",{onClick:()=>e(c.tab),className:"surface-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group hover:-translate-y-1",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("div",{className:`p-3 rounded-xl border ${c.color}`,children:a.jsx(d,{className:"w-5 h-5"})}),a.jsx(Ms,{className:"w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all"})]}),a.jsx("div",{className:"text-2xl font-extrabold text-white font-mono",children:c.value}),a.jsx("h4",{className:"text-xs font-bold text-slate-300 mt-1",children:c.title}),a.jsx("span",{className:"text-[11px] text-muted block mt-0.5",children:c.sub})]},c.title)})}),a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-brand-500/30 space-y-3",children:[a.jsxs("h3",{className:"text-sm font-bold text-white flex items-center space-x-2",children:[a.jsx(Us,{className:"w-4 h-4 text-brand-400"}),a.jsx("span",{children:"Flujo Secuencial Obligatorio de Pedidos en Taller"})]}),a.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Para garantizar la trazabilidad del cliente, el taller actualiza los pedidos respetando la secuencia obligatoria:"}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2",children:[a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 text-xs",children:[a.jsx("strong",{className:"text-cyan-400 block font-mono",children:"1. Pedido"}),a.jsx("span",{className:"text-muted text-[11px]",children:"Recepción de compra y verificación de malla."})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 text-xs",children:[a.jsx("strong",{className:"text-brand-400 block font-mono",children:"2. Preparado"}),a.jsx("span",{className:"text-muted text-[11px]",children:"Laminación Slicer y calentamiento de extrusor."})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 text-xs",children:[a.jsx("strong",{className:"text-emerald-400 block font-mono",children:"3. Terminado"}),a.jsx("span",{className:"text-muted text-[11px]",children:"Impresión completa, despegado y curado."})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 text-xs",children:[a.jsx("strong",{className:"text-purple-400 block font-mono",children:"4. Entregado"}),a.jsx("span",{className:"text-muted text-[11px]",children:"Retiro en mostrador o remitido con guía."})]})]})]})]})},XT=()=>{const[t,e]=$.useState([]),[n,i]=$.useState(!0),[r,s]=$.useState(!1),[o,l]=$.useState(null),c={name:"",category:"Impresión 3D",subcategory:"Artesanales",price:35e3,printTime:"3h 30m",filamentWeight:"70g",dimensions:{x:10,y:10,z:12,unit:"cm"},description:"",isFree:!1,availableMaterials:["PLA","PETG"],imageUrl:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=60",videoUrl:"",meshGeometry:"vase"},[d,f]=$.useState(c),[p,h]=$.useState(!1),[m,g]=$.useState(null);$.useEffect(()=>{b()},[]);const b=async()=>{i(!0);try{const v=await ze.request("/products");e(v)}catch(v){console.error("Error cargando productos:",v)}finally{i(!1)}},x=()=>{l(null),f(c),s(!0)},u=v=>{l(v.id),f({name:v.name,category:v.category,subcategory:v.subcategory||"General",price:v.price,printTime:v.printTime||"3h",filamentWeight:v.filamentWeight||"60g",dimensions:v.dimensions||{x:10,y:10,z:10,unit:"cm"},description:v.description||"",isFree:v.isFree||!1,availableMaterials:v.availableMaterials||["PLA","PETG"],imageUrl:v.imageUrl||"",videoUrl:v.videoUrl||"",meshGeometry:v.meshGeometry||"vase"}),s(!0)},_=async v=>{v.preventDefault(),h(!0),g(null);try{o?(await ze.request(`/products/${o}`,{method:"PUT",body:JSON.stringify(d)}),g({type:"success",text:"Producto actualizado exitosamente."})):(await ze.request("/products",{method:"POST",body:JSON.stringify(d)}),g({type:"success",text:"Producto creado exitosamente."})),s(!1),b()}catch(N){g({type:"error",text:N.message||"Error al guardar producto."})}finally{h(!1)}},y=async v=>{if(window.confirm("¿Estás seguro de eliminar este producto del catálogo?"))try{await ze.request(`/products/${v}`,{method:"DELETE"}),b()}catch(N){alert("Error eliminando producto: "+N.message)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"Inventario y Catálogo Técnico"}),a.jsx("p",{className:"text-xs text-muted",children:"Gestiona productos, tiempos de impresión, pesos de filamento y modelos 3D asociados."})]}),a.jsxs("button",{onClick:x,className:"px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors shadow-lg shadow-brand-500/20 w-fit",children:[a.jsx(qg,{className:"w-4 h-4"}),a.jsx("span",{children:"Nuevo Producto / Modelo"})]})]}),m&&a.jsxs("div",{className:`p-3 rounded-xl text-xs flex items-center space-x-2 ${m.type==="success"?"bg-emerald-950/60 border border-emerald-800 text-emerald-300":"bg-rose-950/60 border border-rose-800 text-rose-300"}`,children:[m.type==="success"?a.jsx(gi,{className:"w-4 h-4"}):a.jsx(er,{className:"w-4 h-4"}),a.jsx("span",{children:m.text})]}),n?a.jsx("div",{className:"min-h-[250px] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):a.jsx("div",{className:"surface-card rounded-2xl border border-slate-800 overflow-hidden shadow-xl",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left text-xs",children:[a.jsx("thead",{className:"surface-subtle border-b border-slate-800 text-[11px] font-mono text-muted uppercase",children:a.jsxs("tr",{children:[a.jsx("th",{className:"py-3.5 px-4",children:"Producto"}),a.jsx("th",{className:"py-3.5 px-4",children:"Categoría / Subcat."}),a.jsx("th",{className:"py-3.5 px-4",children:"Precio"}),a.jsx("th",{className:"py-3.5 px-4",children:"Tiempo / Peso"}),a.jsx("th",{className:"py-3.5 px-4",children:"Materiales"}),a.jsx("th",{className:"py-3.5 px-4",children:"Descarga"}),a.jsx("th",{className:"py-3.5 px-4 text-right",children:"Acciones"})]})}),a.jsx("tbody",{className:"divide-y divide-slate-800",children:t.map(v=>{var N;return a.jsxs("tr",{className:"hover:bg-slate-900/40 transition-colors",children:[a.jsx("td",{className:"py-3 px-4",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("img",{src:v.imageUrl,alt:v.name,className:"w-10 h-10 rounded-lg object-cover bg-slate-900 border border-slate-800 shrink-0",onError:C=>{C.target.src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=60"}}),a.jsxs("div",{children:[a.jsx("strong",{className:"text-white block font-semibold",children:v.name}),a.jsx("span",{className:"text-[10px] text-muted font-mono",children:v.id})]})]})}),a.jsxs("td",{className:"py-3 px-4",children:[a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300",children:v.category}),v.subcategory&&a.jsx("span",{className:"block text-[10px] text-brand-400 mt-0.5",children:v.subcategory})]}),a.jsxs("td",{className:"py-3 px-4 font-mono font-bold text-white",children:["$",Number(v.price).toLocaleString("es-CO")]}),a.jsxs("td",{className:"py-3 px-4 text-muted font-mono",children:[a.jsx("div",{children:v.printTime||"N/A"}),a.jsx("div",{className:"text-[10px] text-brand-400",children:v.filamentWeight||"N/A"})]}),a.jsx("td",{className:"py-3 px-4",children:a.jsx("div",{className:"flex flex-wrap gap-1 max-w-[130px]",children:(N=v.availableMaterials)==null?void 0:N.map(C=>a.jsx("span",{className:"px-1.5 py-0.2 rounded text-[9px] bg-brand-500/15 text-brand-300",children:C},C))})}),a.jsx("td",{className:"py-3 px-4",children:v.isFree?a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold",children:"Gratis (Libre)"}):a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-slate-900 text-muted",children:"Requiere Compra"})}),a.jsx("td",{className:"py-3 px-4 text-right",children:a.jsxs("div",{className:"flex items-center justify-end space-x-1.5",children:[a.jsx("button",{onClick:()=>u(v),className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800",children:a.jsx(Gg,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>y(v.id),className:"p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20",children:a.jsx(sh,{className:"w-4 h-4"})})]})})]},v.id)})})]})})}),r&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto",children:a.jsxs("div",{className:"w-full max-w-2xl surface-card border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 space-y-6",children:[a.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[a.jsx("h3",{className:"text-lg font-bold text-white",children:o?"Editar Parámetros de Producto":"Crear Nuevo Producto en Catálogo"}),a.jsx("button",{onClick:()=>s(!1),className:"p-1 rounded-lg text-slate-400 hover:text-white",children:a.jsx(rc,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:_,className:"space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Nombre del Modelo"}),a.jsx("input",{type:"text",required:!0,value:d.name,onChange:v=>f({...d,name:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Categoría"}),a.jsxs("select",{value:d.category,onChange:v=>f({...d,category:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white",children:[a.jsx("option",{children:"Impresión 3D"}),a.jsx("option",{children:"Router CNC"}),a.jsx("option",{children:"Avisos"}),a.jsx("option",{children:"Metal"})]})]})]}),d.category==="Impresión 3D"&&a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Subcategoría de Impresión 3D"}),a.jsxs("select",{value:d.subcategory,onChange:v=>f({...d,subcategory:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white",children:[a.jsx("option",{children:"Artesanales"}),a.jsx("option",{children:"Fútbol"}),a.jsx("option",{children:"Navidad"}),a.jsx("option",{children:"Electrónica"}),a.jsx("option",{children:"Juguetes"}),a.jsx("option",{children:"Esculturas"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Geometría 3D Previsualizada"}),a.jsxs("select",{value:d.meshGeometry,onChange:v=>f({...d,meshGeometry:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white",children:[a.jsx("option",{value:"vase",children:"Jarrón / Ornamento"}),a.jsx("option",{value:"trophy",children:"Trofeo / Cáliz"}),a.jsx("option",{value:"tree",children:"Árbol Geométrico"}),a.jsx("option",{value:"robot",children:"Robot Articulado"}),a.jsx("option",{value:"bust",children:"Busto Escultura"}),a.jsx("option",{value:"box",children:"Gabinete / Caja Técnica"})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Precio (COP)"}),a.jsx("input",{type:"number",required:!0,value:d.price,onChange:v=>f({...d,price:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Tiempo de Impresión"}),a.jsx("input",{type:"text",placeholder:"Ej. 4h 15m",value:d.printTime,onChange:v=>f({...d,printTime:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Peso Filamento"}),a.jsx("input",{type:"text",placeholder:"Ej. 85g",value:d.filamentWeight,onChange:v=>f({...d,filamentWeight:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Descripción Técnica"}),a.jsx("textarea",{rows:"3",value:d.description,onChange:v=>f({...d,description:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"URL de Imagen"}),a.jsx("input",{type:"url",value:d.imageUrl,onChange:v=>f({...d,imageUrl:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"URL Video de Proceso (MP4)"}),a.jsx("input",{type:"url",placeholder:"https://...",value:d.videoUrl,onChange:v=>f({...d,videoUrl:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]})]}),a.jsxs("div",{className:"p-3.5 rounded-xl surface-subtle border border-slate-800 flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-xs font-bold text-white block",children:"Habilitar como Modelo Gratuito (Libre Descarga)"}),a.jsx("span",{className:"text-[11px] text-muted",children:"Si está activo, cualquier usuario podrá descargar el archivo STL sin necesidad de comprarlo."})]}),a.jsx("input",{type:"checkbox",checked:d.isFree,onChange:v=>f({...d,isFree:v.target.checked}),className:"w-5 h-5 accent-brand-500 rounded cursor-pointer"})]}),a.jsxs("div",{className:"flex justify-end space-x-3 pt-4 border-t border-slate-800",children:[a.jsx("button",{type:"button",onClick:()=>s(!1),className:"px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white",children:"Cancelar"}),a.jsxs("button",{type:"submit",disabled:p,className:"px-6 py-2.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors",children:[a.jsx(Kg,{className:"w-4 h-4"}),a.jsx("span",{children:p?"Guardando...":"Guardar Producto"})]})]})]})]})})]})},zo=["Pedido","Preparado","Terminado","Entregado"],qT=()=>{var u,_,y;const[t,e]=$.useState([]),[n,i]=$.useState(!0),[r,s]=$.useState(null),[o,l]=$.useState(""),[c,d]=$.useState(""),[f,p]=$.useState(!1),[h,m]=$.useState(null);$.useEffect(()=>{g()},[]);const g=async()=>{i(!0);try{const v=await ze.request("/orders/admin/all");e(v)}catch(v){console.error("Error cargando pedidos admin:",v)}finally{i(!1)}},b=v=>{s(v);const N=zo.indexOf(v.status),C=N<zo.length-1?zo[N+1]:v.status;l(C),d(""),m(null)},x=async v=>{if(v.preventDefault(),!!r){p(!0),m(null);try{const N=await ze.request(`/orders/admin/${r.id}/status`,{method:"PATCH",body:JSON.stringify({status:o,note:c||`Avance de producción a estado: ${o}`})});m({type:"success",text:`Estado actualizado a "${o}" correctamente.`}),s(N.order),g()}catch(N){m({type:"error",text:N.message||"Error al actualizar estado del pedido."})}finally{p(!1)}}};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"Gestión y Trazabilidad de Pedidos"}),a.jsxs("p",{className:"text-xs text-muted",children:["Control de máquinas en taller respetando el orden obligatorio:",a.jsx("strong",{className:"text-brand-400 ml-1",children:"Pedido → Preparado → Terminado → Entregado"}),"."]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[a.jsx("div",{className:"lg:col-span-7 space-y-3",children:n?a.jsx("div",{className:"min-h-[250px] flex items-center justify-center surface-card rounded-2xl border border-slate-800",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):t.length===0?a.jsx("div",{className:"surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted",children:"No hay pedidos registrados en el sistema."}):t.map(v=>{var C,w;const N=(r==null?void 0:r.id)===v.id;return a.jsxs("div",{onClick:()=>b(v),className:`p-4 rounded-2xl border transition-all cursor-pointer ${N?"border-brand-500 bg-brand-500/10 shadow-lg":"border-slate-800 surface-card hover:border-slate-700"}`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"font-mono font-bold text-white text-sm",children:v.orderNumber}),a.jsxs("span",{className:"text-[11px] text-muted font-sans",children:["· ",v.customerName]})]}),a.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${v.status==="Pedido"?"bg-cyan-500/20 text-cyan-400 border border-cyan-500/30":v.status==="Preparado"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":v.status==="Terminado"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-purple-500/20 text-purple-400 border border-purple-500/30"}`,children:v.status})]}),a.jsx("div",{className:"text-xs text-slate-300 space-y-1",children:(C=v.items)==null?void 0:C.map((A,F)=>{var S;return a.jsxs("div",{className:"flex justify-between text-[11px] text-muted",children:[a.jsxs("span",{children:[A.quantity,"x ",A.name," (",A.material," - ",A.color,")"]}),a.jsxs("span",{className:"font-mono text-white",children:["$",(S=A.itemTotal)==null?void 0:S.toLocaleString("es-CO")]})]},F)})}),a.jsxs("div",{className:"flex justify-between items-center pt-2.5 mt-2 border-t border-slate-800/80 text-[11px]",children:[a.jsx("span",{className:"text-muted font-mono",children:new Date(v.createdAt).toLocaleString("es-CO")}),a.jsxs("span",{className:"font-mono font-bold text-brand-400",children:["Total: $",(w=v.total)==null?void 0:w.toLocaleString("es-CO")," COP"]})]})]},v.id)})}),a.jsx("div",{className:"lg:col-span-5 space-y-4",children:r?a.jsxs("div",{className:"surface-card p-6 rounded-3xl border border-slate-800 space-y-5 shadow-2xl sticky top-24",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-muted block",children:"Orden Seleccionada"}),a.jsx("h3",{className:"text-xl font-bold text-white font-mono",children:r.orderNumber}),a.jsxs("span",{className:"text-xs text-muted block mt-0.5",children:["Cliente: ",a.jsx("strong",{className:"text-white",children:r.customerName})," (",r.customerEmail,")"]}),a.jsxs("span",{className:"text-xs text-muted block",children:["Dirección: ",(u=r.shippingAddress)==null?void 0:u.address,", ",(_=r.shippingAddress)==null?void 0:_.city]})]}),a.jsxs("form",{onSubmit:x,className:"space-y-4 pt-4 border-t border-slate-800",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-white block mb-1.5",children:"Avanzar Estado Secuencial:"}),a.jsx("select",{value:o,onChange:v=>l(v.target.value),className:"w-full px-3.5 py-2.5 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-bold focus:outline-none focus:border-brand-500",children:zo.map(v=>a.jsx("option",{value:v,children:v},v))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-muted block mb-1.5",children:"Nota Técnica de Taller para el Cliente:"}),a.jsx("textarea",{rows:"3",placeholder:"Ej. Laminación completada en OrcaSlicer. Cama a 60°C y extrusor a 240°C. Entra a impresión en máquina 02.",value:c,onChange:v=>d(v.target.value),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white placeholder-slate-500"})]}),h&&a.jsxs("div",{className:`p-3 rounded-xl text-xs flex items-center space-x-2 ${h.type==="success"?"bg-emerald-950/60 border border-emerald-800 text-emerald-300":"bg-rose-950/60 border border-rose-800 text-rose-300"}`,children:[h.type==="success"?a.jsx(Pl,{className:"w-4 h-4"}):a.jsx(er,{className:"w-4 h-4"}),a.jsx("span",{children:h.text})]}),a.jsxs("button",{type:"submit",disabled:f,className:"w-full py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-brand-500/20",children:[a.jsx(Pl,{className:"w-4 h-4"}),a.jsx("span",{children:f?"Actualizando...":`Actualizar a "${o}"`})]})]}),a.jsxs("div",{className:"pt-4 border-t border-slate-800 space-y-2",children:[a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-muted block",children:"Historial de Cambios:"}),a.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto pr-1",children:(y=r.statusHistory)==null?void 0:y.map((v,N)=>a.jsxs("div",{className:"text-xs p-2 rounded-lg surface-subtle border border-slate-800",children:[a.jsxs("div",{className:"flex justify-between font-bold text-white",children:[a.jsx("span",{children:v.status}),a.jsx("span",{className:"text-[10px] text-muted font-mono",children:new Date(v.timestamp).toLocaleTimeString("es-CO")})]}),a.jsx("p",{className:"text-[11px] text-slate-300 mt-1",children:v.note})]},N))})]})]}):a.jsx("div",{className:"surface-card p-8 rounded-3xl border border-slate-800 text-center text-xs text-muted",children:"Selecciona un pedido de la lista para actualizar su fase de producción."})})]})]})},$T=()=>{const[t,e]=$.useState([]),[n,i]=$.useState(!0),[r,s]=$.useState(!1),[o,l]=$.useState(null),c={commercialName:"",activityDescription:"",websiteUrl:"",logoUrl:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60",contactPerson:"",status:"active"},[d,f]=$.useState(c),[p,h]=$.useState(!1),[m,g]=$.useState(null);$.useEffect(()=>{b()},[]);const b=async()=>{i(!0);try{const v=await ze.request("/sponsors");e(v)}catch(v){console.error("Error cargando patrocinadores:",v)}finally{i(!1)}},x=()=>{l(null),f(c),s(!0)},u=v=>{l(v.id),f({commercialName:v.commercialName,activityDescription:v.activityDescription,websiteUrl:v.websiteUrl||"",logoUrl:v.logoUrl||"",contactPerson:v.contactPerson||"",status:v.status||"active"}),s(!0)},_=async v=>{v.preventDefault(),h(!0),g(null);try{o?(await ze.request(`/sponsors/${o}`,{method:"PUT",body:JSON.stringify(d)}),g({type:"success",text:"Patrocinador actualizado exitosamente."})):(await ze.request("/sponsors",{method:"POST",body:JSON.stringify(d)}),g({type:"success",text:"Patrocinador registrado exitosamente."})),s(!1),b()}catch(N){g({type:"error",text:N.message||"Error guardando patrocinador."})}finally{h(!1)}},y=async v=>{if(window.confirm("¿Deseas eliminar este patrocinador?"))try{await ze.request(`/sponsors/${v}`,{method:"DELETE"}),b()}catch(N){alert("Error eliminando: "+N.message)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"Gestión de Patrocinadores y Aliados"}),a.jsx("p",{className:"text-xs text-muted",children:"Administra nombres comerciales y descripción de actividades mostradas en el módulo público."})]}),a.jsxs("button",{onClick:x,className:"px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors shadow-lg shadow-brand-500/20 w-fit",children:[a.jsx(qg,{className:"w-4 h-4"}),a.jsx("span",{children:"Nuevo Patrocinador"})]})]}),m&&a.jsxs("div",{className:`p-3 rounded-xl text-xs flex items-center space-x-2 ${m.type==="success"?"bg-emerald-950/60 border border-emerald-800 text-emerald-300":"bg-rose-950/60 border border-rose-800 text-rose-300"}`,children:[m.type==="success"?a.jsx(gi,{className:"w-4 h-4"}):a.jsx(er,{className:"w-4 h-4"}),a.jsx("span",{children:m.text})]}),n?a.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(v=>a.jsxs("div",{className:"surface-card p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("img",{src:v.logoUrl,alt:v.commercialName,className:"w-12 h-12 rounded-xl object-cover border border-slate-800 bg-slate-900",onError:N=>{N.target.src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&auto=format&fit=crop&q=60"}}),a.jsxs("div",{className:"flex items-center space-x-1",children:[a.jsx("button",{onClick:()=>u(v),className:"p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800",children:a.jsx(Gg,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>y(v.id),className:"p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-950/20",children:a.jsx(sh,{className:"w-4 h-4"})})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-white text-sm",children:v.commercialName}),v.contactPerson&&a.jsxs("span",{className:"text-[11px] text-muted block",children:["Contacto: ",v.contactPerson]})]}),a.jsxs("div",{className:"p-3 rounded-xl surface-subtle border border-slate-800 text-xs text-slate-300",children:[a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Descripción de Actividades:"}),a.jsx("p",{children:v.activityDescription})]})]}),v.websiteUrl&&a.jsxs("a",{href:v.websiteUrl,target:"_blank",rel:"noreferrer",className:"text-xs font-semibold text-brand-400 hover:underline flex items-center space-x-1",children:[a.jsx("span",{children:v.websiteUrl}),a.jsx(Ag,{className:"w-3 h-3"})]})]},v.id))}),r&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm",children:a.jsxs("div",{className:"w-full max-w-lg surface-card border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5",children:[a.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[a.jsx("h3",{className:"text-base font-bold text-white",children:o?"Editar Patrocinador":"Registrar Nuevo Patrocinador"}),a.jsx("button",{onClick:()=>s(!1),className:"p-1 text-slate-400 hover:text-white",children:a.jsx(rc,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:_,className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Nombre Comercial"}),a.jsx("input",{type:"text",required:!0,placeholder:"Ej. Polímeros Industriales del Valle",value:d.commercialName,onChange:v=>f({...d,commercialName:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Descripción de Actividades Comerciales"}),a.jsx("textarea",{rows:"3",required:!0,placeholder:"Distribución de filamentos técnicos grado ingeniería...",value:d.activityDescription,onChange:v=>f({...d,activityDescription:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Persona de Contacto"}),a.jsx("input",{type:"text",value:d.contactPerson,onChange:v=>f({...d,contactPerson:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"Sitio Web"}),a.jsx("input",{type:"url",placeholder:"https://...",value:d.websiteUrl,onChange:v=>f({...d,websiteUrl:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-muted block mb-1",children:"URL del Logo"}),a.jsx("input",{type:"url",value:d.logoUrl,onChange:v=>f({...d,logoUrl:v.target.value}),className:"w-full px-3 py-2 rounded-xl surface-subtle border border-slate-800 text-xs text-white font-mono"})]}),a.jsxs("div",{className:"flex justify-end space-x-3 pt-4 border-t border-slate-800",children:[a.jsx("button",{type:"button",onClick:()=>s(!1),className:"px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white",children:"Cancelar"}),a.jsxs("button",{type:"submit",disabled:p,className:"px-6 py-2.5 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-colors",children:[a.jsx(Kg,{className:"w-4 h-4"}),a.jsx("span",{children:p?"Guardando...":"Guardar Patrocinador"})]})]})]})]})})]})},YT=()=>{const[t,e]=$.useState([]),[n,i]=$.useState(!0);$.useEffect(()=>{r()},[]);const r=async()=>{i(!0);try{const s=await ze.request("/quotes/admin/all");e(s)}catch(s){console.error("Error cargando cotizaciones:",s)}finally{i(!1)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-white",children:"Bandeja de Cotizaciones de Clientes"}),a.jsx("p",{className:"text-xs text-muted",children:"Archivos 3D subidos y procesados por el motor de Slicer para revisión técnica y cotización."})]}),n?a.jsx("div",{className:"min-h-[200px] flex items-center justify-center",children:a.jsx("div",{className:"w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"})}):t.length===0?a.jsx("div",{className:"surface-card p-8 rounded-2xl border border-slate-800 text-center text-xs text-muted",children:"No hay cotizaciones registradas actualmente."}):a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:t.map(s=>{var o,l,c,d,f,p,h,m;return a.jsxs("div",{className:"surface-card p-5 rounded-2xl border border-slate-800 space-y-4 shadow-lg",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-2.5",children:[a.jsx("div",{className:"p-2.5 rounded-xl bg-purple-500/10 text-purple-400",children:a.jsx(ks,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-white text-xs sm:text-sm",children:s.originalName}),a.jsx("span",{className:"text-[10px] text-muted font-mono",children:s.id})]})]}),a.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-800 text-brand-400",children:[s.material," · ",s.color]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[a.jsxs("div",{className:"p-2.5 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Filamento"}),a.jsxs("span",{className:"font-bold font-mono text-white mt-0.5 block",children:[(o=s.estimation)==null?void 0:o.filamentGrams," g"]})]}),a.jsxs("div",{className:"p-2.5 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Tiempo Máquina"}),a.jsx("span",{className:"font-bold font-mono text-white mt-0.5 block",children:(l=s.estimation)==null?void 0:l.printTimeFormatted})]}),a.jsxs("div",{className:"p-2.5 rounded-xl surface-subtle border border-slate-800",children:[a.jsx("span",{className:"text-[10px] text-muted block",children:"Precio Calculado"}),a.jsxs("span",{className:"font-bold font-mono text-brand-400 mt-0.5 block",children:["$",(f=(d=(c=s.estimation)==null?void 0:c.breakdown)==null?void 0:d.totalPrice)==null?void 0:f.toLocaleString("es-CO")]})]})]}),a.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-muted font-mono",children:[a.jsxs("span",{children:["Relleno: ",s.infillPercent,"%"]}),a.jsxs("span",{children:["Dim: ",(p=s.dimensions)==null?void 0:p.x,"×",(h=s.dimensions)==null?void 0:h.y,"×",(m=s.dimensions)==null?void 0:m.z," cm"]}),a.jsx("span",{children:new Date(s.createdAt).toLocaleDateString("es-CO")})]})]},s.id)})})]})},KT=({onNavigate:t})=>{const[e,n]=$.useState("dashboard"),i=[{id:"dashboard",label:"Dashboard",icon:J1},{id:"products",label:"Productos y Modelos",icon:Nn},{id:"orders",label:"Control de Pedidos",icon:rh},{id:"sponsors",label:"Patrocinadores",icon:ic},{id:"quotes",label:"Cotizaciones 3D",icon:ks}];return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("button",{onClick:()=>t("home"),className:"p-2 rounded-xl surface-subtle border border-slate-800 text-slate-400 hover:text-white transition-colors",title:"Volver a la vista pública",children:a.jsx(th,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-xl font-extrabold text-white",children:"Panel de Administración Taller"}),a.jsx("span",{className:"text-xs text-amber-400 font-mono font-medium",children:"Maquinamos 3D · Módulo de Operaciones Industriales"})]})]}),a.jsx("div",{className:"flex items-center space-x-1.5 overflow-x-auto p-1 rounded-2xl surface-card border border-slate-800",children:i.map(r=>{const s=r.icon,o=e===r.id;return a.jsxs("button",{onClick:()=>n(r.id),className:`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all shrink-0 ${o?"bg-amber-500 text-slate-950 shadow-md":"text-slate-400 hover:text-white hover:bg-slate-900"}`,children:[a.jsx(s,{className:"w-4 h-4"}),a.jsx("span",{children:r.label})]},r.id)})})]}),a.jsxs("div",{children:[e==="dashboard"&&a.jsx(WT,{onNavigate:t,onSelectAdminTab:r=>n(r)}),e==="products"&&a.jsx(XT,{}),e==="orders"&&a.jsx(qT,{}),e==="sponsors"&&a.jsx($T,{}),e==="quotes"&&a.jsx(YT,{})]})]})};function ZT(){const[t,e]=$.useState("home"),[n,i]=$.useState({}),r=(s,o={})=>{e(s),i(o||{}),window.scrollTo({top:0,behavior:"smooth"})};return a.jsx(I1,{children:a.jsx(U1,{children:a.jsx(k1,{children:a.jsxs("div",{className:"min-h-screen flex flex-col justify-between selection:bg-brand-500 selection:text-slate-950",children:[a.jsxs("div",{children:[a.jsx(ub,{currentPath:t,onNavigate:r}),a.jsxs("main",{className:"animate-fadeIn",children:[t==="home"&&a.jsx(PT,{onNavigate:r}),t==="catalog"&&a.jsx(IT,{initialCategory:n.category||"Todos",onNavigate:r}),t==="product-detail"&&a.jsx(UT,{productId:n.id||"prod-3d-jarron",onNavigate:r}),t==="cart"&&a.jsx(kT,{onNavigate:r}),t==="tracking"&&a.jsx(jT,{initialOrderNumber:n.orderNumber||"",onNavigate:r}),t==="quote"&&a.jsx(OT,{onNavigate:r}),t==="special-services"&&a.jsx(zT,{onNavigate:r}),t==="sponsors"&&a.jsx(BT,{onNavigate:r}),t==="institutional"&&a.jsx(HT,{onNavigate:r}),t==="ai-design"&&a.jsx(VT,{onNavigate:r}),t==="login"&&a.jsx(GT,{initialMode:n.mode||"login",redirectPath:n.redirect||"home",onNavigate:r}),t==="admin"&&a.jsx(xb,{requireAdminRole:!0,onRedirect:r,children:a.jsx(KT,{onNavigate:r})})]})]}),a.jsx(fb,{onNavigate:r}),a.jsx(mb,{})]})})})})}wd.createRoot(document.getElementById("root")).render(a.jsx(S_.StrictMode,{children:a.jsx(ZT,{})}));
