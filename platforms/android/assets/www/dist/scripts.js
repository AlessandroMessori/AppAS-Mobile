/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	__webpack_require__(3);

	__webpack_require__(24);

	__webpack_require__(26);

	var _Configs = __webpack_require__(172);

	var _Configs2 = _interopRequireDefault(_Configs);

	var _credentials = __webpack_require__(173);

	var _credentials2 = _interopRequireDefault(_credentials);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_firebase2.default.initializeApp(_credentials2.default);

	var appAS = angular.module("appAS", ["ionic", "appAS.components", "appAS.directives", "appAS.services"]);

	appAS.run(_Configs2.default.run);

	appAS.config(_Configs2.default.config);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Firebase libraries for browser - npm package.
	 *
	 * Usage:
	 *
	 *   firebase = require('firebase');
	 */
	__webpack_require__(2);
	module.exports = firebase;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.3.0
	    Build: 3.3.0-rc.7
	    Terms: https://developers.google.com/terms */
	(function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,l=function(){l=function(){};h.Symbol||(h.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},p=function(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));
	"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});p=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){p();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
	if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a){return"function"==t(a)},ea=function(a,
	b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return v.apply(null,arguments)},w=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},x=function(a,b){function c(){}c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fa=function(a,c,g){for(var f=Array(arguments.length-2),k=2;k<arguments.length;k++)f[k-2]=arguments[k];return b.prototype[c].apply(a,f)}};var y="undefined"!==typeof window?window:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
	function __decorate(a,b,c,d){var e=arguments.length,g=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,f;f=y.Reflect;if("object"===typeof f&&"function"===typeof f.decorate)g=f.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(f=a[k])g=(3>e?f(g):3<e?f(b,c,g):f(b,c))||g;return 3<e&&g&&Object.defineProperty(b,c,g),g}function __metadata(a,b){var c=y.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
	var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,g){function f(a){try{n(d.next(a))}catch(b){g(b)}}function k(a){try{n(d.throw(a))}catch(b){g(b)}}function n(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(f,k)}n((d=d.apply(a,b)).next())})};"undefined"!==typeof y.L&&y.L||"undefined"===typeof global||(global.ca=__extends,global.ba=__decorate,global.da=__metadata,global.ea=__param,global.aa=__awaiter);var z=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};x(z,Error);z.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var A=function(a,b){b.unshift(a);z.call(this,ga.apply(null,b));b.shift()};x(A,z);A.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),g=d;else a&&(e+=": "+a,g=b);throw new A(""+e,g||[]);},B=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},C=function(a,b,c){u(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var D=function(a,b,c){this.S=c;this.M=a;this.U=b;this.s=0;this.o=null};D.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.M();return a};D.prototype.put=function(a){this.U(a);this.s<this.S&&(this.s++,a.next=this.o,this.o=a)};var E;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){E=ja;break a}}E=""};var ka=function(a){q.setTimeout(function(){throw a;},0)},F,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
	"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==E.indexOf("Trident")&&-1==E.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.F;c.F=null;a()}};return function(a){d.next={F:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
	document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var G=function(){this.v=this.f=null},ma=new D(function(){return new H},function(a){a.reset()},100);G.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(B(!this.f),this.f=c);this.v=c};G.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var H=function(){this.next=this.scope=this.B=null};H.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
	H.prototype.reset=function(){this.next=this.scope=this.B=null};var L=function(a,b){I||na();K||(I(),K=!0);oa.add(a,b)},I,na=function(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);I=function(){a.then(pa)}}else I=function(){var a=pa;!u(q.setImmediate)||q.Window&&q.Window.prototype&&-1==E.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(F||(F=la()),F(a)):q.setImmediate(a)}},K=!1,oa=new G,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}K=!1};var N=function(a,b){this.b=0;this.K=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){M(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}M(c,3,a)})}catch(d){M(this,3,d)}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
	var ra=new D(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||L(w(b,a))};N.prototype.then=function(a,b,c){null!=a&&C(a,"opt_onFulfilled should be a function.");null!=b&&C(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,u(a)?a:null,u(b)?b:null,c)};N.prototype.then=N.prototype.then;N.prototype.$goog_Thenable=!0;
	N.prototype.X=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);B(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new N(function(a,f){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(J){f(J)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(J){f(J)}}:f});e.child.u=a;xa(a,e);return e.child};N.prototype.Y=function(a){B(1==this.b);this.b=0;M(this,2,a)};N.prototype.Z=function(a){B(1==this.b);this.b=0;M(this,3,a)};
	var M=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.K=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof N)return null!=b&&C(b,"opt_onFulfilled should be a function."),null!=c&&C(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(f){e=!1}else e=!1;if(e)return a.then(b,c,d),
	!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var g=a.then;if(u(g))return za(a,g,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},za=function(a,b,c,d,e){var g=!1,f=function(a){g||(g=!0,c.call(e,a))},k=function(a){g||(g=!0,d.call(e,a))};try{b.call(a,f,k)}catch(n){k(n)}},wa=function(a){a.A||(a.A=!0,L(a.O,a))},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&B(null!=b.c);return b};
	N.prototype.O=function(){for(var a;a=Aa(this);){var b=this.b,c=this.K;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},ya=function(a,b){a.m=!0;L(function(){a.m&&Ca.call(null,b)})},Ca=ka;function O(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=O(a[c],b[c]));return a};var Da=Error.captureStackTrace,Q=function(a,b){this.code=a;this.message=b;if(Da)Da(this,P.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};Q.prototype=Object.create(Error.prototype);Q.prototype.constructor=Q;Q.prototype.name="FirebaseError";var P=function(a,b,c){this.V=a;this.W=b;this.N=c;this.pattern=/\{\$([^}]+)}/g};
	P.prototype.create=function(a,b){void 0===b&&(b={});var c=this.N[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new Q(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};N.all=function(a){return new N(function(b,c){var d=a.length,e=[];if(d)for(var g=function(a,c){d--;e[a]=c;0==d&&b(e)},f=function(a){c(a)},k=0,n;k<a.length;k++)n=a[k],ua(n,w(g,k),f);else b(e)})};N.resolve=function(a){if(a instanceof N)return a;var b=new N(r);M(b,2,a);return b};N.reject=function(a){return new N(function(b,c){c(a)})};N.prototype["catch"]=N.prototype.X;var R=N;"undefined"!==typeof Promise&&(R=Promise);var Ea=R;function Fa(a,b){a=new S(a,b);return a.subscribe.bind(a)}var S=function(a,b){var c=this;this.a=[];this.J=0;this.task=Ea.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};S.prototype.next=function(a){T(this,function(b){b.next(a)})};S.prototype.error=function(a){T(this,function(b){b.error(a)});this.close(a)};S.prototype.complete=function(){T(this,function(a){a.complete()});this.close()};
	S.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Ga(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=U);void 0===e.error&&(e.error=U);void 0===e.complete&&(e.complete=U);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.G?e.error(d.G):e.complete()}catch(a){}});this.a.push(e);return a};
	S.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.J,0===this.J&&void 0!==this.D&&this.D(this))};var T=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ha(a,c,b)},Ha=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};S.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.G=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
	function Ga(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];p();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function U(){};var V=R,W=function(a,b,c){var d=this;this.H=c;this.I=!1;this.i={};this.C=b;this.T=O(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){var b=c.INTERNAL.useAsService(d,a);null!==b&&(d[a]=d.R.bind(d,b))})};W.prototype.delete=function(){var a=this;return(new V(function(b){X(a);b()})).then(function(){a.H.INTERNAL.removeApp(a.C);return V.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.I=!0;a.i={}})};
	W.prototype.R=function(a){X(this);void 0===this.i[a]&&(this.i[a]=this.H.INTERNAL.factories[a](this,this.P.bind(this)));return this.i[a]};W.prototype.P=function(a){O(this,a)};var X=function(a){a.I&&Y(Ia("deleted",{name:a.C}))};h.Object.defineProperties(W.prototype,{name:{configurable:!0,enumerable:!0,get:function(){X(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){X(this);return this.T}}});W.prototype.name&&W.prototype.options||W.prototype.delete||console.log("dc");
	function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Y("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&g[d])g[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth");return c}var d={},e={},g={},f={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Y("bad-app-name",{name:c+""});void 0!==d[c]&&Y("dupApp",
	{name:c});a=new W(a,c,f);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||O(a,{INTERNAL:{getToken:function(){return V.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:V,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,Z){e[b]&&Y("dupService",{name:b});e[b]=c;Z&&(g[b]=Z);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&O(c,d);return f[b]=c},createFirebaseNamespace:Ja,extendNamespace:function(a){O(f,
	a)},createSubscribe:Fa,ErrorFactory:P,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:N,deepExtend:O}};f["default"]=f;Object.defineProperty(f,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=W;return f}function Y(a,b){throw Error(Ia(a,b));}
	function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof window&&(window.firebase=Ja()); })();
	firebase.SDK_VERSION = "3.3.0";
	(function(){var h,aa=aa||{},l=this,ba=function(){},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
	!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){return null===a},da=function(a){return"array"==m(a)},ea=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},fa=function(a){return"number"==typeof a},p=function(a){return"function"==m(a)},ga=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ha=function(a,b,
	c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return r.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ka=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Pc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var la=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);u.call(this,la.apply(null,b));b.shift()};t(wa,u);wa.prototype.name="AssertionError";
	var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},w=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){fa(a)||xa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){n(a)||xa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
	2))},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=n(a)?
	a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
	Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){b=Ca(a,b);var c;(c=0<=b)&&Ja(a,b);return c},Ja=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply(Array.prototype,
	arguments)},Na=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};var Qa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ta=function(a){for(var b in a)return!1;return!0},Ua=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Va=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Xa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Wa.length;f++)c=Wa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ya;a:{var Za=l.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}var y=function(a){return v(Ya,a)};var ab=function(a){ab[" "](a);return a};ab[" "]=ba;var cb=function(a,b){var c=bb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var db=y("Opera"),z=y("Trident")||y("MSIE"),eb=y("Edge"),fb=eb||z,gb=y("Gecko")&&!(v(Ya.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),hb=v(Ya.toLowerCase(),"webkit")&&!y("Edge"),ib=function(){var a=l.document;return a?a.documentMode:void 0},jb;
	a:{var kb="",lb=function(){var a=Ya;if(gb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return/WebKit\/(\S+)/.exec(a);if(db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();lb&&(kb=lb?lb[1]:"");if(z){var mb=ib();if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a}}jb=kb}
	var nb=jb,bb={},A=function(a){return cb(a,function(){for(var b=0,c=ma(String(nb)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==g[2].length,0==k[2].length)||va(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},ob=l.document,
	pb=ob&&z?ib()||("CSS1Compat"==ob.compatMode?parseInt(nb,10):5):void 0;var qb=null,rb=null,tb=function(a){var b="";sb(a,function(a){b+=String.fromCharCode(a)});return b},sb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=rb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ub();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},ub=function(){if(!qb){qb={};rb={};for(var a=0;65>a;a++)qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
	rb[qb[a]]=a,62<=a&&(rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var wb=function(){this.ec="";this.Md=vb};wb.prototype.Nb=!0;wb.prototype.Ib=function(){return this.ec};wb.prototype.toString=function(){return"Const{"+this.ec+"}"};var xb=function(a){if(a instanceof wb&&a.constructor===wb&&a.Md===vb)return a.ec;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},vb={};var B=function(){this.ja="";this.Ld=yb};B.prototype.Nb=!0;B.prototype.Ib=function(){return this.ja};B.prototype.toString=function(){return"SafeUrl{"+this.ja+"}"};
	var zb=function(a){if(a instanceof B&&a.constructor===B&&a.Ld===yb)return a.ja;ya("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},Ab=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Cb=function(a){if(a instanceof B)return a;a=a.Nb?a.Ib():String(a);Ab.test(a)||(a="about:invalid#zClosurez");return Bb(a)},yb={},Bb=function(a){var b=new B;b.ja=a;return b};Bb("about:blank");var Eb=function(){this.Vb="";this.Nd=Db};Eb.prototype.Nb=!0;Eb.prototype.Ib=function(){return this.Vb};Eb.prototype.toString=function(){return"TrustedResourceUrl{"+this.Vb+"}"};var Db={};var Gb=function(){this.ja="";this.Kd=Fb};Gb.prototype.Nb=!0;Gb.prototype.Ib=function(){return this.ja};Gb.prototype.toString=function(){return"SafeHtml{"+this.ja+"}"};var Hb=function(a){if(a instanceof Gb&&a.constructor===Gb&&a.Kd===Fb)return a.ja;ya("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},Fb={};Gb.prototype.ne=function(a){this.ja=a;return this};var Ib=function(a,b){b=b instanceof B?b:Cb(b);a.href=zb(b)};var Jb=!z||9<=Number(pb),Kb=z&&!A("9");!hb||A("528");gb&&A("1.9b")||z&&A("8")||db&&A("9.5")||hb&&A("528");gb&&!A("8")||z&&A("9");var Lb=function(){this.ya=this.ya;this.Sb=this.Sb};Lb.prototype.ya=!1;Lb.prototype.isDisposed=function(){return this.ya};Lb.prototype.Oa=function(){if(this.Sb)for(;this.Sb.length;)this.Sb.shift()()};var Mb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Va=!1;this.ud=!0};Mb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ud=!1};var Nb=function(a,b){Mb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.kb=this.state=null;a&&this.init(a,b)};t(Nb,Mb);
	Nb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(gb){var e;a:{try{ab(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
	a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.kb=a;a.defaultPrevented&&
	this.preventDefault()};Nb.prototype.preventDefault=function(){Nb.Pc.preventDefault.call(this);var a=this.kb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Kb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Nb.prototype.ce=function(){return this.kb};var Ob="closure_listenable_"+(1E6*Math.random()|0),Pb=0;var Qb=function(a,b,c,d,e){this.listener=a;this.Wb=null;this.src=b;this.type=c;this.Bb=!!d;this.Kb=e;this.key=++Pb;this.$a=this.Ab=!1},Rb=function(a){a.$a=!0;a.listener=null;a.Wb=null;a.src=null;a.Kb=null};var Sb=function(a){this.src=a;this.w={};this.xb=0};Sb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.w[f];a||(a=this.w[f]=[],this.xb++);var g=Tb(a,b,d,e);-1<g?(b=a[g],c||(b.Ab=!1)):(b=new Qb(b,this.src,f,!!d,e),b.Ab=c,a.push(b));return b};Sb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.w))return!1;var e=this.w[a];b=Tb(e,b,c,d);return-1<b?(Rb(e[b]),Ja(e,b),0==e.length&&(delete this.w[a],this.xb--),!0):!1};
	var Ub=function(a,b){var c=b.type;c in a.w&&Ka(a.w[c],b)&&(Rb(b),0==a.w[c].length&&(delete a.w[c],a.xb--))};Sb.prototype.tc=function(a,b,c,d){a=this.w[a.toString()];var e=-1;a&&(e=Tb(a,b,c,d));return-1<e?a[e]:null};var Tb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.$a&&f.listener==b&&f.Bb==!!c&&f.Kb==d)return e}return-1};var Vb="closure_lm_"+(1E6*Math.random()|0),Wb={},Xb=0,Yb=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Yb(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.listen(b,c,d,e):$b(a,b,c,!1,d,e)},$b=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=ac(a);k||(a[Vb]=k=new Sb(a));c=k.add(b,c,d,e,f);if(c.Wb)return;d=bc();c.Wb=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(cc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
	Xb++},bc=function(){var a=dc,b=Jb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},ec=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)ec(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?fc(a,b,c,d,e):$b(a,b,c,!0,d,e)},gc=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)gc(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.Y.remove(String(b),c,d,e):a&&(a=ac(a))&&(b=a.tc(b,c,!!d,e))&&hc(b)},hc=function(a){if(!fa(a)&&a&&!a.$a){var b=a.src;if(b&&b[Ob])Ub(b.Y,
	a);else{var c=a.type,d=a.Wb;b.removeEventListener?b.removeEventListener(c,d,a.Bb):b.detachEvent&&b.detachEvent(cc(c),d);Xb--;(c=ac(b))?(Ub(c,a),0==c.xb&&(c.src=null,b[Vb]=null)):Rb(a)}}},cc=function(a){return a in Wb?Wb[a]:Wb[a]="on"+a},jc=function(a,b,c,d){var e=!0;if(a=ac(a))if(b=a.w[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Bb==c&&!f.$a&&(f=ic(f,d),e=e&&!1!==f)}return e},ic=function(a,b){var c=a.listener,d=a.Kb||a.src;a.Ab&&hc(a);return c.call(d,b)},dc=function(a,b){if(a.$a)return!0;
	if(!Jb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Nb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Va&&0<=e;e--){b.currentTarget=d[e];var f=jc(d[e],a,!0,b),c=c&&f}for(e=0;!b.Va&&e<d.length;e++)b.currentTarget=d[e],f=jc(d[e],a,!1,
	b),c=c&&f}return c}return ic(a,new Nb(b,this))},ac=function(a){a=a[Vb];return a instanceof Sb?a:null},kc="__closure_events_fn_"+(1E9*Math.random()>>>0),Zb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[kc]||(a[kc]=function(b){return a.handleEvent(b)});return a[kc]};var lc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var mc=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},pc=function(a){var b=[];nc(new oc,a,b);return b.join("")},oc=function(){this.$b=void 0},nc=function(a,b,c){if(null==
	b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],nc(a,a.$b?a.$b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),qc(d,c),c.push(":"),nc(a,a.$b?a.$b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":qc(b,
	c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},rc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,qc=function(a,b){b.push('"',a.replace(sc,function(a){var b=rc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
	rc[a]=b);return b}),'"')};var tc=function(){};tc.prototype.Tc=null;var uc=function(a){return a.Tc||(a.Tc=a.xc())};var vc,wc=function(){};t(wc,tc);wc.prototype.Cb=function(){var a=xc(this);return a?new ActiveXObject(a):new XMLHttpRequest};wc.prototype.xc=function(){var a={};xc(this)&&(a[0]=!0,a[1]=!0);return a};
	var xc=function(a){if(!a.gd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.gd=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.gd};vc=new wc;var yc=function(){};t(yc,tc);yc.prototype.Cb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new zc;throw Error("Unsupported browser");};yc.prototype.xc=function(){return{}};
	var zc=function(){this.na=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.na.onload=r(this.ee,this);this.na.onerror=r(this.ed,this);this.na.onprogress=r(this.fe,this);this.na.ontimeout=r(this.ge,this)};h=zc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.na.open(a,b)};
	h.send=function(a){if(a)if("string"==typeof a)this.na.send(a);else throw Error("Only string data is supported");else this.na.send()};h.abort=function(){this.na.abort()};h.setRequestHeader=function(){};h.ee=function(){this.status=200;this.responseText=this.na.responseText;Ac(this,4)};h.ed=function(){this.status=500;this.responseText="";Ac(this,4)};h.ge=function(){this.ed()};h.fe=function(){this.status=200;Ac(this,1)};var Ac=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var C=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1)}},Bc={},Cc=function(a){if(-128<=a&&128>a){var b=Bc[a];if(b)return b}b=new C([a|0],0>a?-1:0);-128<=a&&128>a&&(Bc[a]=b);return b},F=function(a){if(isNaN(a)||!isFinite(a))return D;if(0>a)return E(F(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new C(b,0)},Dc=function(a,b){if(0==a.length)throw Error("number format error: empty string");b=b||10;if(2>b||36<b)throw Error("radix out of range: "+
	b);if("-"==a.charAt(0))return E(Dc(a.substring(1),b));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=F(Math.pow(b,8)),d=D,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8>f?(f=F(Math.pow(b,f)),d=d.multiply(f).add(F(g))):(d=d.multiply(c),d=d.add(F(g)))}return d},D=Cc(0),Ec=Cc(1),Fc=Cc(16777216),Gc=function(a){if(-1==a.g)return-Gc(E(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Hc(a,d)*c,c*=4294967296;return b};
	C.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(G(this))return"0";if(-1==this.g)return"-"+E(this).toString(a);for(var b=F(Math.pow(a,6)),c=this,d="";;){var e=Ic(c,b),c=Jc(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(G(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
	var H=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g},Hc=function(a,b){a=H(a,b);return 0<=a?a:4294967296+a},G=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0};C.prototype.Eb=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(H(this,c)!=H(a,c))return!1;return!0};C.prototype.compare=function(a){a=Jc(this,a);return-1==a.g?-1:G(a)?0:1};
	var E=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return(new C(c,~a.g)).add(Ec)};C.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(H(this,e)&65535)+(H(a,e)&65535),g=(f>>>16)+(H(this,e)>>>16)+(H(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f}return new C(c,c[c.length-1]&-2147483648?-1:0)};var Jc=function(a,b){return a.add(E(b))};
	C.prototype.multiply=function(a){if(G(this)||G(a))return D;if(-1==this.g)return-1==a.g?E(this).multiply(E(a)):E(E(this).multiply(a));if(-1==a.g)return E(this.multiply(E(a)));if(0>this.compare(Fc)&&0>a.compare(Fc))return F(Gc(this)*Gc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=H(this,d)>>>16,g=H(this,d)&65535,k=H(a,e)>>>16,q=H(a,e)&65535;c[2*d+2*e]+=g*q;Kc(c,2*d+2*e);c[2*d+2*e+1]+=f*q;Kc(c,2*d+2*e+1);c[2*d+2*e+1]+=
	g*k;Kc(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Kc(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new C(c,0)};
	var Kc=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535},Ic=function(a,b){if(G(b))throw Error("division by zero");if(G(a))return D;if(-1==a.g)return-1==b.g?Ic(E(a),E(b)):E(Ic(E(a),b));if(-1==b.g)return E(Ic(a,E(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Ec;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Lc(c,1),e=Lc(b,1),f;b=Lc(b,2);for(c=Lc(c,2);!G(b);)f=e.add(b),0>=f.compare(a)&&(d=d.add(c),e=f),
	b=Lc(b,1),c=Lc(c,1);return d}for(c=D;0<=a.compare(b);){d=Math.max(1,Math.floor(Gc(a)/Gc(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=F(d);for(var g=f.multiply(b);-1==g.g||0<g.compare(a);)d-=e,f=F(d),g=f.multiply(b);G(f)&&(f=Ec);c=c.add(f);a=Jc(a,g)}return c},Mc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=H(a,e)|H(b,e);return new C(d,a.g|b.g)};
	C.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?H(this,e-b)<<a|H(this,e-b-1)>>>32-a:H(this,e-b);return new C(d,this.g)};var Lc=function(a,b){var c=b>>5;b%=32;for(var d=a.h.length-c,e=[],f=0;f<d;f++)e[f]=0<b?H(a,f+c)>>>b|H(a,f+c+1)<<32-b:H(a,f+c);return new C(e,a.g)};var Nc=function(a,b){this.ob=a;this.ma=b};Nc.prototype.Eb=function(a){return this.ma==a.ma&&this.ob.Eb(Va(a.ob))};
	var Qc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c}return b?new Oc(a.substring(1,a.length-1)):new Pc(a)}catch(d){return null}},Pc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Rc))throw Error("The address does not look like an IPv4.");b=Va(a)}else{if(!Sc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<
	c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=F(e);b=Mc(b.shiftLeft(8),e)}}Nc.call(this,b,4)};t(Pc,Nc);var Sc=/^[0-9.]*$/,Rc=Jc(Ec.shiftLeft(32),Ec);Pc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=Hc(this.ob,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.Ca=b.join(".")};
	var Oc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Tc))throw Error("The address does not look like a valid IPv6.");b=Va(a)}else{if(!Uc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Hc(Va((new Pc(c[c.length-1])).ob),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ja(c,c.length-1);Pa(c,d);a=c.join(":")}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+
	" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Na(c,f,d)}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=Dc(c[d],16);if(0>e.compare(D)||0<e.compare(Vc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Mc(b.shiftLeft(16),e)}}Nc.call(this,b,6)};t(Oc,Nc);
	var Uc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Vc=Cc(65535),Tc=Jc(Ec.shiftLeft(128),Ec);Oc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=[],b=3;0<=b;b--){var c=Hc(this.ob,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.Ca=a.join(":")};!gb&&!z||z&&9<=Number(pb)||gb&&A("1.9.1");z&&A("9");var Xc=function(a,b){Qa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Wc.hasOwnProperty(d)?a.setAttribute(Wc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Wc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Yc=function(a,b,c){this.pe=c;this.Td=a;this.ye=b;this.Rb=0;this.Lb=null};Yc.prototype.get=function(){var a;0<this.Rb?(this.Rb--,a=this.Lb,this.Lb=a.next,a.next=null):a=this.Td();return a};Yc.prototype.put=function(a){this.ye(a);this.Rb<this.pe&&(this.Rb++,a.next=this.Lb,this.Lb=a)};var Zc=function(a){l.setTimeout(function(){throw a;},0)},$c,ad=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Xc;c.Xc=null;a()}};return function(a){d.next={Xc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var bd=function(){this.jc=this.Ja=null},dd=new Yc(function(){return new cd},function(a){a.reset()},100);bd.prototype.add=function(a,b){var c=dd.get();c.set(a,b);this.jc?this.jc.next=c:(w(!this.Ja),this.Ja=c);this.jc=c};bd.prototype.remove=function(){var a=null;this.Ja&&(a=this.Ja,this.Ja=this.Ja.next,this.Ja||(this.jc=null),a.next=null);return a};var cd=function(){this.next=this.scope=this.sc=null};cd.prototype.set=function(a,b){this.sc=a;this.scope=b;this.next=null};
	cd.prototype.reset=function(){this.next=this.scope=this.sc=null};var id=function(a,b){ed||fd();gd||(ed(),gd=!0);hd.add(a,b)},ed,fd=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);ed=function(){a.then(jd)}}else ed=function(){var a=jd;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?($c||($c=ad()),$c(a)):l.setImmediate(a)}},gd=!1,hd=new bd,jd=function(){for(var a;a=hd.remove();){try{a.sc.call(a.scope)}catch(b){Zc(b)}dd.put(a)}gd=!1};var kd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},ld=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var I=function(a,b){this.F=0;this.ka=void 0;this.Ma=this.fa=this.o=null;this.Jb=this.rc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){md(c,2,a)},function(a){if(!(a instanceof nd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}md(c,3,a)})}catch(d){md(this,3,d)}},od=function(){this.next=this.context=this.Sa=this.Ea=this.child=null;this.ib=!1};od.prototype.reset=function(){this.context=this.Sa=this.Ea=this.child=null;this.ib=!1};
	var pd=new Yc(function(){return new od},function(a){a.reset()},100),qd=function(a,b,c){var d=pd.get();d.Ea=a;d.Sa=b;d.context=c;return d},J=function(a){if(a instanceof I)return a;var b=new I(ba);md(b,2,a);return b},K=function(a){return new I(function(b,c){c(a)})},sd=function(a,b,c){rd(a,b,c,null)||id(ja(b,a))},td=function(a){return new I(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{be:!0,value:f}:{be:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],sd(g,ja(e,f,!0),
	ja(e,f,!1));else b(d)})};I.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return ud(this,p(a)?a:null,p(b)?b:null,c)};kd(I);var wd=function(a,b){b=qd(b,b,void 0);b.ib=!0;vd(a,b);return a};I.prototype.l=function(a,b){return ud(this,null,a,b)};I.prototype.cancel=function(a){0==this.F&&id(function(){var b=new nd(a);xd(this,b)},this)};
	var xd=function(a,b){if(0==a.F)if(a.o){var c=a.o;if(c.fa){for(var d=0,e=null,f=null,g=c.fa;g&&(g.ib||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.F&&1==d?xd(c,b):(f?(d=f,w(c.fa),w(null!=d),d.next==c.Ma&&(c.Ma=d),d.next=d.next.next):yd(c),zd(c,e,3,b)))}a.o=null}else md(a,3,b)},vd=function(a,b){a.fa||2!=a.F&&3!=a.F||Ad(a);w(null!=b.Ea);a.Ma?a.Ma.next=b:a.fa=b;a.Ma=b},ud=function(a,b,c,d){var e=qd(null,null,null);e.child=new I(function(a,g){e.Ea=b?function(c){try{var e=b.call(d,c);a(e)}catch(ra){g(ra)}}:
	a;e.Sa=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nd?g(b):a(e)}catch(ra){g(ra)}}:g});e.child.o=a;vd(a,e);return e.child};I.prototype.He=function(a){w(1==this.F);this.F=0;md(this,2,a)};I.prototype.Ie=function(a){w(1==this.F);this.F=0;md(this,3,a)};
	var md=function(a,b,c){0==a.F&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.F=1,rd(c,a.He,a.Ie,a)||(a.ka=c,a.F=b,a.o=null,Ad(a),3!=b||c instanceof nd||Bd(a,c)))},rd=function(a,b,c,d){if(a instanceof I)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),vd(a,qd(b||ba,c||null,d)),!0;if(ld(a))return a.then(b,c,d),!0;if(ga(a))try{var e=a.then;if(p(e))return Cd(a,
	e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Cd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(q){k(q)}},Ad=function(a){a.rc||(a.rc=!0,id(a.Xd,a))},yd=function(a){var b=null;a.fa&&(b=a.fa,a.fa=b.next,b.next=null);a.fa||(a.Ma=null);null!=b&&w(null!=b.Ea);return b};I.prototype.Xd=function(){for(var a;a=yd(this);)zd(this,a,this.F,this.ka);this.rc=!1};
	var zd=function(a,b,c,d){if(3==c&&b.Sa&&!b.ib)for(;a&&a.Jb;a=a.o)a.Jb=!1;if(b.child)b.child.o=null,Dd(b,c,d);else try{b.ib?b.Ea.call(b.context):Dd(b,c,d)}catch(e){Ed.call(null,e)}pd.put(b)},Dd=function(a,b,c){2==b?a.Ea.call(a.context,c):a.Sa&&a.Sa.call(a.context,c)},Bd=function(a,b){a.Jb=!0;id(function(){a.Jb&&Ed.call(null,b)})},Ed=Zc,nd=function(a){u.call(this,a)};t(nd,u);nd.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var Fd=function(a,b){this.ac=[];this.nd=a;this.Zc=b||null;this.mb=this.Qa=!1;this.ka=void 0;this.Nc=this.Sc=this.mc=!1;this.hc=0;this.o=null;this.nc=0};Fd.prototype.cancel=function(a){if(this.Qa)this.ka instanceof Fd&&this.ka.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.nc--,0>=b.nc&&b.cancel())}this.nd?this.nd.call(this.Zc,this):this.Nc=!0;this.Qa||Gd(this,new Hd)}};Fd.prototype.Yc=function(a,b){this.mc=!1;Id(this,a,b)};
	var Id=function(a,b,c){a.Qa=!0;a.ka=c;a.mb=!b;Jd(a)},Ld=function(a){if(a.Qa){if(!a.Nc)throw new Kd;a.Nc=!1}};Fd.prototype.callback=function(a){Ld(this);Md(a);Id(this,!0,a)};
	var Gd=function(a,b){Ld(a);Md(b);Id(a,!1,b)},Md=function(a){w(!(a instanceof Fd),"An execution sequence may not be initiated with a blocking Deferred.")},Qd=function(a){var b=Nd("https://apis.google.com/js/client.js?onload="+Od);Pd(b,null,a,void 0)},Pd=function(a,b,c,d){w(!a.Sc,"Blocking Deferreds can not be re-used");a.ac.push([b,c,d]);a.Qa&&Jd(a)};Fd.prototype.then=function(a,b,c){var d,e,f=new I(function(a,b){d=a;e=b});Pd(this,d,function(a){a instanceof Hd?f.cancel():e(a)});return f.then(a,b,c)};
	kd(Fd);
	var Rd=function(a){return Fa(a.ac,function(a){return p(a[1])})},Jd=function(a){if(a.hc&&a.Qa&&Rd(a)){var b=a.hc,c=Sd[b];c&&(l.clearTimeout(c.nb),delete Sd[b]);a.hc=0}a.o&&(a.o.nc--,delete a.o);for(var b=a.ka,d=c=!1;a.ac.length&&!a.mc;){var e=a.ac.shift(),f=e[0],g=e[1],e=e[2];if(f=a.mb?g:f)try{var k=f.call(e||a.Zc,b);void 0!==k&&(a.mb=a.mb&&(k==b||k instanceof Error),a.ka=b=k);if(ld(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.mc=!0}catch(q){b=q,a.mb=!0,Rd(a)||(c=!0)}}a.ka=b;d&&
	(k=r(a.Yc,a,!0),d=r(a.Yc,a,!1),b instanceof Fd?(Pd(b,k,d),b.Sc=!0):b.then(k,d));c&&(b=new Td(b),Sd[b.nb]=b,a.hc=b.nb)},Kd=function(){u.call(this)};t(Kd,u);Kd.prototype.message="Deferred has already fired";Kd.prototype.name="AlreadyCalledError";var Hd=function(){u.call(this)};t(Hd,u);Hd.prototype.message="Deferred was canceled";Hd.prototype.name="CanceledError";var Td=function(a){this.nb=l.setTimeout(r(this.Ge,this),0);this.J=a};
	Td.prototype.Ge=function(){w(Sd[this.nb],"Cannot throw an error that is not scheduled.");delete Sd[this.nb];throw this.J;};var Sd={};var Nd=function(a){var b=new Eb;b.Vb=a;return Ud(b)},Ud=function(a){var b={},c=b.document||document,d;a instanceof Eb&&a.constructor===Eb&&a.Nd===Db?d=a.Vb:(ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={vd:e,wb:void 0};var f=new Fd(Vd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Wd(e,!0);Gd(f,new Xd(1,"Timeout reached for loading script "+d))},k),a.wb=g);e.onload=
	e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Wd(e,b.Oe||!1,g),f.callback(null))};e.onerror=function(){Wd(e,!0,g);Gd(f,new Xd(0,"Error while loading script "+d))};a=b.attributes||{};Xa(a,{type:"text/javascript",charset:"UTF-8",src:d});Xc(e,a);Yd(c).appendChild(e);return f},Yd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Vd=function(){if(this&&this.vd){var a=this.vd;a&&"SCRIPT"==a.tagName&&
	Wd(a,!0,this.wb)}},Wd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Xd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(Xd,u);var Zd=function(){Lb.call(this);this.Y=new Sb(this);this.Qd=this;this.Cc=null};t(Zd,Lb);Zd.prototype[Ob]=!0;h=Zd.prototype;h.addEventListener=function(a,b,c,d){Yb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){gc(this,a,b,c,d)};
	h.dispatchEvent=function(a){$d(this);var b,c=this.Cc;if(c){b=[];for(var d=1;c;c=c.Cc)b.push(c),w(1E3>++d,"infinite loop")}c=this.Qd;d=a.type||a;if(n(a))a=new Mb(a,c);else if(a instanceof Mb)a.target=a.target||c;else{var e=a;a=new Mb(d,c);Xa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Va&&0<=g;g--)f=a.currentTarget=b[g],e=ae(f,d,!0,a)&&e;a.Va||(f=a.currentTarget=c,e=ae(f,d,!0,a)&&e,a.Va||(e=ae(f,d,!1,a)&&e));if(b)for(g=0;!a.Va&&g<b.length;g++)f=a.currentTarget=b[g],e=ae(f,d,!1,a)&&e;return e};
	h.Oa=function(){Zd.Pc.Oa.call(this);if(this.Y){var a=this.Y,b=0,c;for(c in a.w){for(var d=a.w[c],e=0;e<d.length;e++)++b,Rb(d[e]);delete a.w[c];a.xb--}}this.Cc=null};h.listen=function(a,b,c,d){$d(this);return this.Y.add(String(a),b,!1,c,d)};
	var fc=function(a,b,c,d,e){a.Y.add(String(b),c,!0,d,e)},ae=function(a,b,c,d){b=a.Y.w[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.$a&&g.Bb==c){var k=g.listener,q=g.Kb||g.src;g.Ab&&Ub(a.Y,g);e=!1!==k.call(q,d)&&e}}return e&&0!=d.ud};Zd.prototype.tc=function(a,b,c,d){return this.Y.tc(String(a),b,c,d)};var $d=function(a){w(a.Y,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var be="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},ce=function(){};ce.prototype.next=function(){throw be;};ce.prototype.Pd=function(){return this};var de=function(a,b){this.Z={};this.s=[];this.ma=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=de.prototype;h.dd=function(){return this.i};h.T=function(){ee(this);for(var a=[],b=0;b<this.s.length;b++)a.push(this.Z[this.s[b]]);return a};h.ha=function(){ee(this);return this.s.concat()};h.jb=function(a){return fe(this.Z,a)};
	h.Eb=function(a,b){if(this===a)return!0;if(this.i!=a.dd())return!1;b=b||ge;ee(this);for(var c,d=0;c=this.s[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};var ge=function(a,b){return a===b};de.prototype.remove=function(a){return fe(this.Z,a)?(delete this.Z[a],this.i--,this.ma++,this.s.length>2*this.i&&ee(this),!0):!1};
	var ee=function(a){if(a.i!=a.s.length){for(var b=0,c=0;b<a.s.length;){var d=a.s[b];fe(a.Z,d)&&(a.s[c++]=d);b++}a.s.length=c}if(a.i!=a.s.length){for(var e={},c=b=0;b<a.s.length;)d=a.s[b],fe(e,d)||(a.s[c++]=d,e[d]=1),b++;a.s.length=c}};h=de.prototype;h.get=function(a,b){return fe(this.Z,a)?this.Z[a]:b};h.set=function(a,b){fe(this.Z,a)||(this.i++,this.s.push(a),this.ma++);this.Z[a]=b};
	h.addAll=function(a){var b;a instanceof de?(b=a.ha(),a=a.T()):(b=Sa(a),a=Ra(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ha(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new de(this)};h.Pd=function(a){ee(this);var b=0,c=this.ma,d=this,e=new ce;e.next=function(){if(c!=d.ma)throw Error("The map has changed since the iterator was created");if(b>=d.s.length)throw be;var e=d.s[b++];return a?e:d.Z[e]};return e};
	var fe=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var he=function(a){if(a.T&&"function"==typeof a.T)return a.T();if(n(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ra(a)},ie=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(!a.T||"function"!=typeof a.T){if(ea(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Sa(a)}},je=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ea(a)||n(a))x(a,b,void 0);else for(var c=ie(a),d=he(a),e=
	d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var ke=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ke.prototype.ad=null;var le=0;ke.prototype.reset=function(a,b,c,d,e){"number"==typeof e||le++;d||ka();this.qb=a;this.re=b;delete this.ad};ke.prototype.yd=function(a){this.qb=a};var me=function(a){this.se=a;this.fd=this.oc=this.qb=this.o=null},ne=function(a,b){this.name=a;this.value=b};ne.prototype.toString=function(){return this.name};var oe=new ne("SEVERE",1E3),pe=new ne("CONFIG",700),qe=new ne("FINE",500);me.prototype.getParent=function(){return this.o};me.prototype.yd=function(a){this.qb=a};var re=function(a){if(a.qb)return a.qb;if(a.o)return re(a.o);ya("Root logger has no level set.");return null};
	me.prototype.log=function(a,b,c){if(a.value>=re(this).value)for(p(b)&&(b=b()),a=new ke(a,String(b),this.se),c&&(a.ad=c),c="log:"+a.re,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.fd)for(var e=0,f;f=b.fd[e];e++)f(d);c=c.getParent()}};
	var se={},te=null,ue=function(a){te||(te=new me(""),se[""]=te,te.yd(pe));var b;if(!(b=se[a])){b=new me(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ue(a.substr(0,c));c.oc||(c.oc={});c.oc[d]=b;b.o=c;se[a]=b}return b};var L=function(a,b){a&&a.log(qe,b,void 0)};var ve=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},we=function(a){var b=null;return(new I(function(c,d){b=ve(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).l(function(a){l.clearTimeout(b);throw a;})};var xe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ye=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var M=function(a){Zd.call(this);this.headers=new de;this.lc=a||null;this.oa=!1;this.kc=this.a=null;this.pb=this.ld=this.Qb="";this.Ba=this.wc=this.Ob=this.qc=!1;this.fb=0;this.gc=null;this.td="";this.ic=this.xe=this.Gd=!1};t(M,Zd);var ze=M.prototype,Ae=ue("goog.net.XhrIo");ze.P=Ae;var Be=/^https?$/i,Ce=["POST","PUT"];
	M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Qb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Qb=a;this.pb="";this.ld=b;this.qc=!1;this.oa=!0;this.a=this.lc?this.lc.Cb():vc.Cb();this.kc=this.lc?uc(this.lc):uc(vc);this.a.onreadystatechange=r(this.qd,this);this.xe&&"onprogress"in this.a&&(this.a.onprogress=r(function(a){this.pd(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=r(this.pd,this)));try{L(this.P,De(this,"Opening Xhr")),
	this.wc=!0,this.a.open(b,String(a),!0),this.wc=!1}catch(f){L(this.P,De(this,"Error opening Xhr: "+f.message));this.J(5,f);return}a=c||"";var e=this.headers.clone();d&&je(d,function(a,b){e.set(b,a)});d=Ha(e.ha());c=l.FormData&&a instanceof l.FormData;!Ia(Ce,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.td&&(this.a.responseType=this.td);"withCredentials"in this.a&&this.a.withCredentials!==this.Gd&&(this.a.withCredentials=
	this.Gd);try{Ee(this),0<this.fb&&(this.ic=Fe(this.a),L(this.P,De(this,"Will abort after "+this.fb+"ms if incomplete, xhr2 "+this.ic)),this.ic?(this.a.timeout=this.fb,this.a.ontimeout=r(this.wb,this)):this.gc=ve(this.wb,this.fb,this)),L(this.P,De(this,"Sending request")),this.Ob=!0,this.a.send(a),this.Ob=!1}catch(f){L(this.P,De(this,"Send error: "+f.message)),this.J(5,f)}};var Fe=function(a){return z&&A(9)&&fa(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
	M.prototype.wb=function(){"undefined"!=typeof aa&&this.a&&(this.pb="Timed out after "+this.fb+"ms, aborting",L(this.P,De(this,this.pb)),this.dispatchEvent("timeout"),this.abort(8))};M.prototype.J=function(a,b){this.oa=!1;this.a&&(this.Ba=!0,this.a.abort(),this.Ba=!1);this.pb=b;Ge(this);He(this)};var Ge=function(a){a.qc||(a.qc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
	M.prototype.abort=function(){this.a&&this.oa&&(L(this.P,De(this,"Aborting")),this.oa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),He(this))};M.prototype.Oa=function(){this.a&&(this.oa&&(this.oa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1),He(this,!0));M.Pc.Oa.call(this)};M.prototype.qd=function(){this.isDisposed()||(this.wc||this.Ob||this.Ba?Ie(this):this.ve())};M.prototype.ve=function(){Ie(this)};
	var Ie=function(a){if(a.oa&&"undefined"!=typeof aa)if(a.kc[1]&&4==Je(a)&&2==Ke(a))L(a.P,De(a,"Local request error detected and ignored"));else if(a.Ob&&4==Je(a))ve(a.qd,0,a);else if(a.dispatchEvent("readystatechange"),4==Je(a)){L(a.P,De(a,"Request complete"));a.oa=!1;try{var b=Ke(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Qb).match(xe)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
	f=g.substr(0,g.length-1);e=!Be.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Je(a)?a.a.statusText:""}catch(q){L(a.P,"Can not get status: "+q.message),k=""}a.pb=k+" ["+Ke(a)+"]";Ge(a)}}finally{He(a)}}};M.prototype.pd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Le(a,"progress"));this.dispatchEvent(Le(a,b?"downloadprogress":"uploadprogress"))};
	var Le=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},He=function(a,b){if(a.a){Ee(a);var c=a.a,d=a.kc[0]?ba:null;a.a=null;a.kc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.P)&&a.log(oe,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Ee=function(a){a.a&&a.ic&&(a.a.ontimeout=null);fa(a.gc)&&(l.clearTimeout(a.gc),a.gc=null)},Je=function(a){return a.a?a.a.readyState:0},Ke=function(a){try{return 2<Je(a)?
	a.a.status:-1}catch(b){return-1}},Me=function(a){try{return a.a?a.a.responseText:""}catch(b){return L(a.P,"Can not get responseText: "+b.message),""}},De=function(a,b){return b+" ["+a.ld+" "+a.Qb+" "+Ke(a)+"]"};var Ne=function(a,b){this.ga=this.Ia=this.la="";this.Ua=null;this.Aa=this.qa="";this.M=this.oe=!1;var c;a instanceof Ne?(this.M=void 0!==b?b:a.M,Oe(this,a.la),c=a.Ia,N(this),this.Ia=c,Pe(this,a.ga),Qe(this,a.Ua),Re(this,a.qa),Se(this,a.aa.clone()),a=a.Aa,N(this),this.Aa=a):a&&(c=String(a).match(xe))?(this.M=!!b,Oe(this,c[1]||"",!0),a=c[2]||"",N(this),this.Ia=Te(a),Pe(this,c[3]||"",!0),Qe(this,c[4]),Re(this,c[5]||"",!0),Se(this,c[6]||"",!0),a=c[7]||"",N(this),this.Aa=Te(a)):(this.M=!!b,this.aa=new O(null,
	0,this.M))};Ne.prototype.toString=function(){var a=[],b=this.la;b&&a.push(Ue(b,Ve,!0),":");var c=this.ga;if(c||"file"==b)a.push("//"),(b=this.Ia)&&a.push(Ue(b,Ve,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ua,null!=c&&a.push(":",String(c));if(c=this.qa)this.ga&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ue(c,"/"==c.charAt(0)?We:Xe,!0));(c=this.aa.toString())&&a.push("?",c);(c=this.Aa)&&a.push("#",Ue(c,Ye));return a.join("")};
	Ne.prototype.resolve=function(a){var b=this.clone(),c=!!a.la;c?Oe(b,a.la):c=!!a.Ia;if(c){var d=a.Ia;N(b);b.Ia=d}else c=!!a.ga;c?Pe(b,a.ga):c=null!=a.Ua;d=a.qa;if(c)Qe(b,a.Ua);else if(c=!!a.qa){if("/"!=d.charAt(0))if(this.ga&&!this.qa)d="/"+d;else{var e=b.qa.lastIndexOf("/");-1!=e&&(d=b.qa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
	1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Re(b,d):c=""!==a.aa.toString();c?Se(b,Te(a.aa.toString())):c=!!a.Aa;c&&(a=a.Aa,N(b),b.Aa=a);return b};Ne.prototype.clone=function(){return new Ne(this)};
	var Oe=function(a,b,c){N(a);a.la=c?Te(b,!0):b;a.la&&(a.la=a.la.replace(/:$/,""))},Pe=function(a,b,c){N(a);a.ga=c?Te(b,!0):b},Qe=function(a,b){N(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ua=b}else a.Ua=null},Re=function(a,b,c){N(a);a.qa=c?Te(b,!0):b},Se=function(a,b,c){N(a);b instanceof O?(a.aa=b,a.aa.Mc(a.M)):(c||(b=Ue(b,Ze)),a.aa=new O(b,0,a.M))},P=function(a,b,c){N(a);a.aa.set(b,c)},N=function(a){if(a.oe)throw Error("Tried to modify a read-only Uri");};
	Ne.prototype.Mc=function(a){this.M=a;this.aa&&this.aa.Mc(a);return this};
	var $e=function(a){return a instanceof Ne?a.clone():new Ne(a,void 0)},af=function(a,b){var c=new Ne(null,void 0);Oe(c,"https");a&&Pe(c,a);b&&Re(c,b);return c},Te=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Ue=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,bf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},bf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ve=/[#\/\?@]/g,Xe=/[\#\?:]/g,We=/[\#\?]/g,Ze=/[\#\?@]/g,
	Ye=/#/g,O=function(a,b,c){this.i=this.j=null;this.I=a||null;this.M=!!c},cf=function(a){a.j||(a.j=new de,a.i=0,a.I&&ye(a.I,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},ef=function(a){var b=ie(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new O(null,0,void 0);a=he(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];da(f)?df(c,e,f):c.add(e,f)}return c};h=O.prototype;h.dd=function(){cf(this);return this.i};
	h.add=function(a,b){cf(this);this.I=null;a=this.K(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=za(this.i)+1;return this};h.remove=function(a){cf(this);a=this.K(a);return this.j.jb(a)?(this.I=null,this.i=za(this.i)-this.j.get(a).length,this.j.remove(a)):!1};h.jb=function(a){cf(this);a=this.K(a);return this.j.jb(a)};h.ha=function(){cf(this);for(var a=this.j.T(),b=this.j.ha(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	h.T=function(a){cf(this);var b=[];if(n(a))this.jb(a)&&(b=Ma(b,this.j.get(this.K(a))));else{a=this.j.T();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};h.set=function(a,b){cf(this);this.I=null;a=this.K(a);this.jb(a)&&(this.i=za(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=za(this.i)+1;return this};h.get=function(a,b){a=a?this.T(a):[];return 0<a.length?String(a[0]):b};var df=function(a,b,c){a.remove(b);0<c.length&&(a.I=null,a.j.set(a.K(b),Oa(c)),a.i=za(a.i)+c.length)};
	O.prototype.toString=function(){if(this.I)return this.I;if(!this.j)return"";for(var a=[],b=this.j.ha(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.T(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.I=a.join("&")};O.prototype.clone=function(){var a=new O;a.I=this.I;this.j&&(a.j=this.j.clone(),a.i=this.i);return a};O.prototype.K=function(a){a=String(a);this.M&&(a=a.toLowerCase());return a};
	O.prototype.Mc=function(a){a&&!this.M&&(cf(this),this.I=null,this.j.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),df(this,d,a))},this));this.M=a};var gf=function(){var a=ff();return z&&!!pb&&11==pb||/Edge\/\d+/.test(a)},hf=function(){return l.window&&l.window.location.href||""},jf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):da(a[d])?Ua(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<jf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},lf=function(){var a;a=ff();a="Chrome"!=kf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],
	10):null;return a&&30>a?!1:!z||!pb||9<pb},mf=function(a){(a||l.window).close()},nf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&&(b.target=d);"Firefox"==kf(ff())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:Cb("undefined"!=typeof c.href?
	c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),b=b instanceof B?b:Cb(b),g.href=zb(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),
	d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=zb(b),g&&(fb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=new wb,a.ec="b/12014412, meta tag with sanitized URL",ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(na,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(oa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(pa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(qa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,
	"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(xb(a),"must provide justification"),w(!/^[\s\xa0]*$/.test(xb(a)),"must provide non-empty justification"),g.document.write(Hb((new Gb).ne(d))),g.document.close())):g=a.open(zb(b),c,g);if(g)try{g.focus()}catch(k){}return g},of=function(a){return new I(function(b){var c=function(){we(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},pf=function(){var a=null;return(new I(function(b){"complete"==l.document.readyState?
	b():(a=function(){b()},ec(window,"load",a))})).l(function(b){gc(window,"load",a);throw b;})},qf=function(a){switch(a||l.navigator&&l.navigator.product||""){case "ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser"}},rf=function(){var a=qf();return"ReactNative"===a||"Node"===a},kf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,
	"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},sf=function(a){var b=qf(void 0);return("Browser"===b?kf(ff()):b)+
	"/JsCore/"+a},ff=function(){return l.navigator&&l.navigator.userAgent||""},tf=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},vf=function(){var a;if(!(a=!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||rf())){var b;a:{try{var c=l.localStorage,d=uf();if(c){c.setItem(d,"1");c.removeItem(d);b=gf()?!!l.indexedDB:!0;break a}}catch(e){}b=!1}a=!b}return!a},wf=function(a){a=a||
	ff();var b=(a||ff()).toLowerCase();return b.match(/android/)||b.match(/webos/)||b.match(/iphone|ipad|ipod/)||b.match(/blackberry/)||b.match(/windows phone/)||b.match(/iemobile/)||"Firefox"==kf(a)?!1:!0},xf=function(a){return"undefined"===typeof a?null:pc(a)},yf=function(a){if(null!==a){var b;try{b=mc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},uf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},zf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=
	a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null};var Af;try{var Bf={};Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Bf,"abcd",{configurable:!0,enumerable:!0,value:2});Af=2==Bf.abcd}catch(a){Af=!1}
	var Q=function(a,b,c){Af?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Cf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&Q(a,c,b[c])},Df=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Ef=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0};var Ff={Hd:{tb:985,sb:735,providerId:"facebook.com"},Id:{tb:500,sb:620,providerId:"github.com"},Jd:{tb:515,sb:680,providerId:"google.com"},Od:{tb:485,sb:705,providerId:"twitter.com"}},Gf=function(a){for(var b in Ff)if(Ff[b].providerId==a)return Ff[b];return null};var R=function(a,b){this.code="auth/"+a;this.message=b||Hf[a]||""};t(R,Error);R.prototype.G=function(){return{name:this.code,code:this.code,message:this.message}};
	var Hf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
	"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
	"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
	"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
	"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
	"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
	"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var If=function(a,b,c,d,e){this.ua=a;this.za=b||null;this.hb=c||null;this.bc=d||null;this.J=e||null;if(this.hb||this.J){if(this.hb&&this.J)throw new R("invalid-auth-event");if(this.hb&&!this.bc)throw new R("invalid-auth-event");}else throw new R("invalid-auth-event");};If.prototype.getError=function(){return this.J};If.prototype.G=function(){return{type:this.ua,eventId:this.za,urlResponse:this.hb,sessionId:this.bc,error:this.J&&this.J.G()}};var Jf=function(a){var b="unauthorized-domain",c=void 0,d=$e(a);a=d.ga;d=d.la;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=la("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);R.call(this,b,c)};t(Jf,R);var Kf=function(a){this.qe=a.sub;ka();this.Db=a.email||null};var Lf=function(a,b,c,d){var e={};ga(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)Q(this,"accessToken",e.oauthToken),Q(this,"secret",e.oauthTokenSecret);else{if(b)throw new R("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new R("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&Q(this,
	"idToken",e.idToken),e.accessToken&&Q(this,"accessToken",e.accessToken);Q(this,"provider",a)};Lf.prototype.Gb=function(a){var b=Mf(this);return S(a,Nf,b)};Lf.prototype.md=function(a,b){var c=Mf(this);c.idToken=b;return S(a,Of,c)};var Mf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:ef(b).toString(),requestUri:vf()?hf():"http://localhost"}};
	Lf.prototype.G=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
	var Pf=function(a,b){var c=!!b;b=function(){Cf(this,{providerId:a,isOAuthProvider:!0});this.Lc=[];"google.com"==a&&this.addScope("profile")};c||(b.prototype.addScope=function(a){Ia(this.Lc,a)||this.Lc.push(a)});b.prototype.Hb=function(){return Oa(this.Lc)};b.credential=function(b,e){return new Lf(a,c,b,e)};Cf(b,{PROVIDER_ID:a});return b},Qf=Pf("facebook.com");Qf.prototype.addScope=Qf.prototype.addScope||void 0;var Rf=Pf("github.com");Rf.prototype.addScope=Rf.prototype.addScope||void 0;var Sf=Pf("google.com");
	Sf.prototype.addScope=Sf.prototype.addScope||void 0;Sf.credential=function(a,b){if(!a&&!b)throw new R("argument-error","credential failed: must provide the ID token and/or the access token.");return new Lf("google.com",!1,ga(a)?a:{idToken:a||null,accessToken:b||null})};var Tf=Pf("twitter.com",!0),Uf=function(a,b){this.Db=a;this.Dc=b;Q(this,"provider","password")};Uf.prototype.Gb=function(a){return S(a,Vf,{email:this.Db,password:this.Dc})};
	Uf.prototype.md=function(a,b){return S(a,Wf,{idToken:b,email:this.Db,password:this.Dc})};Uf.prototype.G=function(){return{email:this.Db,password:this.Dc}};var Xf=function(){Cf(this,{providerId:"password",isOAuthProvider:!1})};Cf(Xf,{PROVIDER_ID:"password"});
	var Yf={Me:Xf,Hd:Qf,Jd:Sf,Id:Rf,Od:Tf},Zf=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Yf)if(Yf[e].PROVIDER_ID==b)try{return Yf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var $f=function(a,b,c){R.call(this,"account-exists-with-different-credential",c);Q(this,"email",a);Q(this,"credential",b)};t($f,R);$f.prototype.G=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.G();b&&(Xa(a,b),a.providerId=b.provider,delete a.provider);return a};var ag=function(a){this.Le=a};t(ag,tc);ag.prototype.Cb=function(){return new this.Le};ag.prototype.xc=function(){return{}};
	var T=function(a,b,c){var d;d="Node"==qf();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new R("internal-error","The XMLHttpRequest compatibility library was not found.");this.v=a;a=b||{};this.Ae=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Be=a.secureTokenTimeout||1E4;this.wd=Va(a.secureTokenHeaders||bg);this.$d=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.ae=a.firebaseTimeout||
	1E4;this.cd=Va(a.firebaseHeaders||cg);c&&(this.cd["X-Client-Version"]=c,this.wd["X-Client-Version"]=c);this.Sd=new yc;this.Ke=new ag(d)},dg,bg={"Content-Type":"application/x-www-form-urlencoded"},cg={"Content-Type":"application/json"},fg=function(a,b,c,d,e,f,g){lf()?a=r(a.De,a):(dg||(dg=new I(function(a,b){eg(a,b)})),a=r(a.Ce,a));a(b,c,d,e,f,g)};
	T.prototype.De=function(a,b,c,d,e,f){var g="Node"==qf(),k=rf()?g?new M(this.Ke):new M:new M(this.Sd),q;f&&(k.fb=Math.max(0,f),q=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){q&&clearTimeout(q);var a=null;try{var c;c=this.a?mc(this.a.responseText):void 0;a=c||null}catch(d){try{a=JSON.parse(Me(this))||null}catch(e){a=null}}b&&b(a)});fc(k,"ready",function(){q&&clearTimeout(q);this.ya||(this.ya=!0,this.Oa())});fc(k,"timeout",function(){q&&clearTimeout(q);this.ya||
	(this.ya=!0,this.Oa());b&&b(null)});k.send(a,c,d,e)};var Od="__fcb"+Math.floor(1E6*Math.random()).toString(),eg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Od]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Qd(function(){b(Error("CORS_UNSUPPORTED"))}))};
	T.prototype.Ce=function(a,b,c,d,e){var f=this;dg.then(function(){window.gapi.client.setApiKey(f.v);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).l(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	var hg=function(a,b){return new I(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?fg(a,a.Ae+"?key="+encodeURIComponent(a.v),function(a){a?a.error?d(gg(a)):a.access_token&&a.refresh_token?c(a):d(new R("internal-error")):d(new R("network-request-failed"))},"POST",ef(b).toString(),a.wd,a.Be):d(new R("internal-error"))})},ig=function(a){var b={},c;for(c in a)null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return pc(b)},jg=function(a,b,c,d,e){var f=a.$d+
	b+"?key="+encodeURIComponent(a.v);e&&(f+="&cb="+ka().toString());return new I(function(b,e){fg(a,f,function(a){a?a.error?e(gg(a)):b(a):e(new R("network-request-failed"))},c,ig(d),a.cd,a.ae)})},kg=function(a){if(!lc.test(a.email))throw new R("invalid-email");},lg=function(a){"email"in a&&kg(a)},ng=function(a,b){var c=vf()?hf():"http://localhost";return S(a,mg,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},pg=function(a){return S(a,og,{}).then(function(a){return a.authorizedDomains||
	[]})},qg=function(a){if(!a.idToken)throw new R("internal-error");};T.prototype.signInAnonymously=function(){return S(this,rg,{})};T.prototype.updateEmail=function(a,b){return S(this,sg,{idToken:a,email:b})};T.prototype.updatePassword=function(a,b){return S(this,Wf,{idToken:a,password:b})};var tg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
	T.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Qa(tg,function(a,f){var g=b[f];null===g?d.push(a):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return S(this,sg,c)};T.prototype.sendPasswordResetEmail=function(a){return S(this,ug,{requestType:"PASSWORD_RESET",email:a})};T.prototype.sendEmailVerification=function(a){return S(this,vg,{requestType:"VERIFY_EMAIL",idToken:a})};
	var xg=function(a,b,c){return S(a,wg,{idToken:b,deleteProvider:c})},yg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new R("internal-error");},zg=function(a){if(a.needConfirmation)throw(a&&a.email?new $f(a.email,Zf(a),a.message):null)||new R("account-exists-with-different-credential");if(!a.idToken)throw new R("internal-error");},Ag=function(a){if(!a.oobCode)throw new R("invalid-action-code");};T.prototype.confirmPasswordReset=function(a,b){return S(this,Bg,{oobCode:a,newPassword:b})};
	T.prototype.checkActionCode=function(a){return S(this,Cg,{oobCode:a})};T.prototype.applyActionCode=function(a){return S(this,Dg,{oobCode:a})};
	var Dg={endpoint:"setAccountInfo",D:Ag,cb:"email"},Cg={endpoint:"resetPassword",D:Ag,sa:function(a){if(!lc.test(a.email))throw new R("internal-error");}},Eg={endpoint:"signupNewUser",D:function(a){kg(a);if(!a.password)throw new R("weak-password");},sa:qg,ta:!0},mg={endpoint:"createAuthUri"},Fg={endpoint:"deleteAccount",ab:["idToken"]},wg={endpoint:"setAccountInfo",ab:["idToken","deleteProvider"],D:function(a){if(!da(a.deleteProvider))throw new R("internal-error");}},Gg={endpoint:"getAccountInfo"},
	vg={endpoint:"getOobConfirmationCode",ab:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new R("internal-error");},cb:"email"},ug={endpoint:"getOobConfirmationCode",ab:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new R("internal-error");kg(a)},cb:"email"},og={Rd:!0,endpoint:"getProjectConfig",je:"GET"},Bg={endpoint:"resetPassword",D:Ag,cb:"email"},sg={endpoint:"setAccountInfo",ab:["idToken"],D:lg,ta:!0},Wf={endpoint:"setAccountInfo",ab:["idToken"],
	D:function(a){lg(a);if(!a.password)throw new R("weak-password");},sa:qg,ta:!0},rg={endpoint:"signupNewUser",sa:qg,ta:!0},Nf={endpoint:"verifyAssertion",D:yg,sa:zg,ta:!0},Of={endpoint:"verifyAssertion",D:function(a){yg(a);if(!a.idToken)throw new R("internal-error");},sa:zg,ta:!0},Hg={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new R("invalid-custom-token");},sa:qg,ta:!0},Vf={endpoint:"verifyPassword",D:function(a){kg(a);if(!a.password)throw new R("wrong-password");},sa:qg,ta:!0},S=
	function(a,b,c){if(!Ef(c,b.ab))return K(new R("internal-error"));var d=b.je||"POST",e;return J(c).then(b.D).then(function(){b.ta&&(c.returnSecureToken=!0);return jg(a,b.endpoint,d,c,b.Rd||!1)}).then(function(a){return e=a}).then(b.sa).then(function(){if(!b.cb)return e;if(!(b.cb in e))throw new R("internal-error");return e[b.cb]})},gg=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
	new R(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
	FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed"};
	b=(b=c.match(/:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new R(d[e],b);!b&&a&&(b=xf(a));return new R("internal-error",b)};var Ig=function(a){this.R=a};Ig.prototype.value=function(){return this.R};Ig.prototype.zd=function(a){this.R.style=a;return this};var Jg=function(a){this.R=a||{}};Jg.prototype.value=function(){return this.R};Jg.prototype.zd=function(a){this.R.style=a;return this};var Lg=function(a){this.Je=a;this.vc=null;this.od=Kg(this)};Lg.prototype.Bc=function(){return this.od};
	var Mg=function(a){var b=new Jg;b.R.where=document.body;b.R.url=a.Je;b.R.messageHandlersFilter=tf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.R.attributes=b.R.attributes||{};(new Ig(b.R.attributes)).zd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.R.dontclear=!0;return b},Kg=function(a){return Ng().then(function(){return new I(function(b,c){tf("gapi.iframes.getContext")().open(Mg(a).value(),function(d){a.vc=d;a.vc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"))},
	5E3),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})},Og=function(a,b){a.od.then(function(){a.vc.register("authEvent",b,tf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Pg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Ng=function(){return new I(function(a,b){var c=function(){zf();tf("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){zf();b(Error("Network Error"))},timeout:3E3})};tf("gapi.iframes.Iframe")?a():tf("gapi.load")?c():
	(l[Pg]=function(){tf("gapi.load")?c():b(Error("Network Error"))},J(Nd("https://apis.google.com/js/api.js?onload="+Pg)).l(function(){b(Error("Network Error"))}))})};var Rg=function(a,b,c,d){this.X=a;this.v=b;this.ea=c;d=this.xa=d||null;a=af(a,"/__/auth/iframe");P(a,"apiKey",b);P(a,"appName",c);d&&P(a,"v",d);this.ke=a.toString();this.hd=new Lg(this.ke);this.yb=[];Qg(this)};Rg.prototype.Bc=function(){return this.hd.Bc()};
	var Sg=function(a,b,c,d,e,f,g,k,q){a=af(a,"/__/auth/handler");P(a,"apiKey",b);P(a,"appName",c);P(a,"authType",d);P(a,"providerId",e);f&&f.length&&P(a,"scopes",f.join(","));g&&P(a,"redirectUrl",g);k&&P(a,"eventId",k);q&&P(a,"v",q);return a.toString()},Qg=function(a){Og(a.hd,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new R(e.substring(5),c.message):null;b=new If(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=
	null;for(c=0;c<a.yb.length;c++)d=a.yb[c](b)||d;c={};c.status=d?"ACK":"ERROR";return J(c)}c.status="ERROR";return J(c)})},Tg=function(a,b){La(a.yb,function(a){return a==b})};var Ug=function(a){this.u=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.u)throw new R("internal-error","The React Native compatibility library was not found.");};h=Ug.prototype;h.get=function(a){return J(this.u.getItem(a)).then(function(a){return a&&yf(a)})};h.set=function(a,b){return J(this.u.setItem(a,xf(b)))};h.remove=function(a){return J(this.u.removeItem(a))};h.Ka=function(){};h.Za=function(){};var Vg=function(){this.u={}};h=Vg.prototype;h.get=function(a){return J(this.u[a])};h.set=function(a,b){this.u[a]=b;return J()};h.remove=function(a){delete this.u[a];return J()};h.Ka=function(){};h.Za=function(){};var Xg=function(){if(!Wg()){if("Node"==qf())throw new R("internal-error","The LocalStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.localStorage||firebase.INTERNAL.node.localStorage},Wg=function(){var a="Node"==qf(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Xg.prototype;
	h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return yf(c)})};h.set=function(a,b){var c=this;return J().then(function(){var d=xf(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a)})};h.Ka=function(a){l.window&&Yb(l.window,"storage",a)};h.Za=function(a){l.window&&gc(l.window,"storage",a)};var Yg=function(){this.u={}};h=Yg.prototype;h.get=function(){return J(null)};h.set=function(){return J()};h.remove=function(){return J()};h.Ka=function(){};h.Za=function(){};var $g=function(){if(!Zg()){if("Node"==qf())throw new R("internal-error","The SessionStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},Zg=function(){var a="Node"==qf(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=$g.prototype;
	h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return yf(c)})};h.set=function(a,b){var c=this;return J().then(function(){var d=xf(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a)})};h.Ka=function(){};h.Za=function(){};var ah=function(a,b,c,d,e,f){if(!window.indexedDB)throw new R("web-storage-unsupported");this.Ud=a;this.Ac=b;this.pc=c;this.Fd=d;this.ma=e;this.O={};this.ub=[];this.rb=0;this.le=f||l.indexedDB},bh,ch=function(a){return new I(function(b,c){var d=a.le.open(a.Ud,a.ma);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Ac,{keyPath:a.pc})}catch(d){c(d)}};d.onsuccess=function(a){b(a.target.result)}})},dh=function(a){a.jd||(a.jd=
	ch(a));return a.jd},eh=function(a,b){return b.objectStore(a.Ac)},fh=function(a,b,c){return b.transaction([a.Ac],c?"readwrite":"readonly")},gh=function(a){return new I(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=ah.prototype;
	h.set=function(a,b){var c=!1,d,e=this;return wd(dh(this).then(function(b){d=b;b=eh(e,fh(e,d,!0));return gh(b.get(a))}).then(function(f){var g=eh(e,fh(e,d,!0));if(f)return f.value=b,gh(g.put(f));e.rb++;c=!0;f={};f[e.pc]=a;f[e.Fd]=b;return gh(g.add(f))}).then(function(){e.O[a]=b}),function(){c&&e.rb--})};h.get=function(a){var b=this;return dh(this).then(function(c){return gh(eh(b,fh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
	h.remove=function(a){var b=!1,c=this;return wd(dh(this).then(function(d){b=!0;c.rb++;return gh(eh(c,fh(c,d,!0))["delete"](a))}).then(function(){delete c.O[a]}),function(){b&&c.rb--})};
	h.Fe=function(){var a=this;return dh(this).then(function(b){var c=eh(a,fh(a,b,!1));return c.getAll?gh(c.getAll()):new I(function(a,b){var f=[],g=c.openCursor();g.onsuccess=function(b){(b=b.target.result)?(f.push(b.value),b["continue"]()):a(f)};g.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.rb){for(d=0;d<b.length;d++)c[b[d][a.pc]]=b[d][a.Fd];d=jf(a.O,c);a.O=c}return d})};h.Ka=function(a){0==this.ub.length&&this.Oc();this.ub.push(a)};
	h.Za=function(a){La(this.ub,function(b){return b==a});0==this.ub.length&&this.dc()};h.Oc=function(){var a=this;this.dc();var b=function(){a.Fc=we(800).then(r(a.Fe,a)).then(function(b){0<b.length&&x(a.ub,function(a){a(b)})}).then(b).l(function(a){"STOP_EVENT"!=a.message&&b()});return a.Fc};b()};h.dc=function(){this.Fc&&this.Fc.cancel("STOP_EVENT")};var kh=function(){this.$c={Browser:hh,Node:ih,ReactNative:jh}[qf()]},lh,hh={V:Xg,Qc:$g},ih={V:Xg,Qc:$g},jh={V:Ug,Qc:Yg};var mh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),U=function(a,b){return{name:a||"",ca:"a valid string",optional:!!b,da:n}},nh=function(a){return{name:a||"",ca:"a valid object",optional:!1,da:ga}},oh=function(a,b){return{name:a||"",ca:"a function",optional:!!b,da:p}},ph=function(){return{name:"",ca:"null",optional:!1,da:ca}},qh=function(){return{name:"credential",ca:"a valid credential",optional:!1,da:function(a){return!(!a||!a.Gb)}}},rh=function(){return{name:"authProvider",
	ca:"a valid Auth provider",optional:!1,da:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},sh=function(a,b,c,d){return{name:c||"",ca:a.ca+" or "+b.ca,optional:!!d,da:function(c){return a.da(c)||b.da(c)}}};var uh=function(a,b){for(var c in b){var d=b[c].name;a[d]=th(d,a[c],b[c].b)}},V=function(a,b,c,d){a[b]=th(b,c,d)},th=function(a,b,c){if(!c)return b;var d=vh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var q=!1,ra=0;ra<c.length;ra++)if(c[ra].optional)q=!0;else{if(q)throw new R("internal-error","Argument validator encountered a required argument after an optional argument.");k++}q=c.length;if(e.length<k||q<e.length)e="Expected "+(k==
	q?1==k?"1 argument":k+" arguments":k+"-"+q+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(q=c[k].optional&&void 0===e[k],!c[k].da(e[k])&&!q){e=c[k];if(0>k||k>=mh.length)throw new R("internal-error","Argument validator received an unsupported number of arguments.");e=mh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ca+".";break a}e=null}}if(e)throw new R("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
	b.prototype[e];return a},vh=function(a){a=a.split(".");return a[a.length-1]};var wh=function(a,b,c,d){this.te=a;this.xd=b;this.ze=c;this.eb=d;this.N={};lh||(lh=new kh);a=lh;try{var e;gf()?(bh||(bh=new ah("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=bh):e=new a.$c.V;this.Ta=e}catch(f){this.Ta=new Vg,this.eb=!0}try{this.fc=new a.$c.Qc}catch(f){this.fc=new Vg}this.Ad=r(this.Bd,this);this.O={}},xh,yh=function(){xh||(xh=new wh("firebase",":","Safari"==kf(ff())&&l.window&&l.window!=l.window.top?!0:!1,wf()));return xh};h=wh.prototype;
	h.K=function(a,b){return this.te+this.xd+a.name+(b?this.xd+b:"")};h.get=function(a,b){return(a.V?this.Ta:this.fc).get(this.K(a,b))};h.remove=function(a,b){b=this.K(a,b);a.V&&!this.eb&&(this.O[b]=null);return(a.V?this.Ta:this.fc).remove(b)};h.set=function(a,b,c){var d=this.K(a,c),e=this,f=a.V?this.Ta:this.fc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.V&&!this.eb&&(e.O[d]=b)})};
	h.addListener=function(a,b,c){a=this.K(a,b);this.eb||(this.O[a]=l.localStorage.getItem(a));Ta(this.N)&&this.Oc();this.N[a]||(this.N[a]=[]);this.N[a].push(c)};h.removeListener=function(a,b,c){a=this.K(a,b);this.N[a]&&(La(this.N[a],function(a){return a==c}),0==this.N[a].length&&delete this.N[a]);Ta(this.N)&&this.dc()};h.Oc=function(){this.Ta.Ka(this.Ad);this.eb||zh(this)};
	var zh=function(a){Ah(a);a.zc=setInterval(function(){for(var b in a.N){var c=l.localStorage.getItem(b);c!=a.O[b]&&(a.O[b]=c,c=new Nb({type:"storage",key:b,target:window,oldValue:a.O[b],newValue:c}),a.Bd(c))}},1E3)},Ah=function(a){a.zc&&(clearInterval(a.zc),a.zc=null)};wh.prototype.dc=function(){this.Ta.Za(this.Ad);this.eb||Ah(this)};
	wh.prototype.Bd=function(a){if(a&&a.ce){var b=a.kb.key;if(this.ze){var c=l.localStorage.getItem(b);a=a.kb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.O[b]=l.localStorage.getItem(b);this.Vc(b)}else x(a,r(this.Vc,this))};wh.prototype.Vc=function(a){this.N[a]&&x(this.N[a],function(a){a()})};var Bh=function(a){this.B=a;this.A=yh()},Ch={name:"pendingRedirect",V:!1},Dh=function(a){return a.A.set(Ch,"pending",a.B)},Eh=function(a){return a.A.remove(Ch,a.B)},Fh=function(a){return a.A.get(Ch,a.B).then(function(a){return"pending"==a})};var Ih=function(a,b,c){var d=this,e=(this.xa=firebase.SDK_VERSION||null)?sf(this.xa):null;this.f=new T(b,null,e);this.pa=null;this.X=a;this.v=b;this.ea=c;this.vb=[];this.Pb=!1;this.Rc=r(this.de,this);this.Wa=new Gh(this);this.rd=new Hh(this);this.Ec=new Bh(this.v+":"+this.ea);this.gb={};this.gb.unknown=this.Wa;this.gb.signInViaRedirect=this.Wa;this.gb.linkViaRedirect=this.Wa;this.gb.signInViaPopup=this.rd;this.gb.linkViaPopup=this.rd;this.Zb=this.bb=null;this.Tb=new I(function(a,b){d.bb=a;d.Zb=b})};
	Ih.prototype.reset=function(){var a=this;this.pa=null;this.Tb.cancel();this.Pb=!1;this.Zb=this.bb=null;this.Mb&&Tg(this.Mb,this.Rc);this.Tb=new I(function(b,c){a.bb=b;a.Zb=c})};
	var Jh=function(a){var b=hf();return pg(a).then(function(a){a:{for(var d=$e(b).ga,e=0;e<a.length;e++){var f;var g=a[e];f=d;var k=Qc(g);k?f=(f=Qc(f))?k.Eb(f):!1:(k=g.split(".").join("\\."),f=(new RegExp("^(.+\\."+k+"|"+k+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Jf(hf());})},Kh=function(a){a.Pb||(a.Pb=!0,pf().then(function(){a.Mb=new Rg(a.X,a.v,a.ea,a.xa);a.Mb.Bc().l(function(){a.Zb(new R("network-request-failed"));a.reset()});a.Mb.yb.push(a.Rc)}));return a.Tb};
	Ih.prototype.subscribe=function(a){Ia(this.vb,a)||this.vb.push(a);if(!this.Pb){var b=this,c=function(){var a=ff(),c;(c=wf(a))||(a=a||ff(),c="Safari"==kf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0);c?Lh(b.Wa):Kh(b)};Fh(this.Ec).then(function(a){a?Eh(b.Ec).then(function(){Kh(b)}):c()}).l(function(){c()})}};Ih.prototype.unsubscribe=function(a){La(this.vb,function(b){return b==a})};
	Ih.prototype.de=function(a){if(!a)throw new R("invalid-auth-event");this.bb&&(this.bb(),this.bb=null);for(var b=!1,c=0;c<this.vb.length;c++){var d=this.vb[c];if(d.Wc(a.ua,a.za)){(b=this.gb[a.ua])&&b.sd(a,d);b=!0;break}}Lh(this.Wa);return b};Ih.prototype.getRedirectResult=function(){return this.Wa.getRedirectResult()};
	var Nh=function(a,b,c,d,e,f){if(!b)return K(new R("popup-blocked"));if(f)return Kh(a),J();a.pa||(a.pa=Jh(a.f));return a.pa.then(function(){return Kh(a)}).then(function(){Mh(d);var f=Sg(a.X,a.v,a.ea,c,d.providerId,d.Hb(),null,e,a.xa);Ib((b||l.window).location,f)}).l(function(b){"auth/network-request-failed"==b.code&&(a.pa=null);throw b;})},Oh=function(a,b,c,d){a.pa||(a.pa=Jh(a.f));return a.pa.then(function(){Mh(c);var e=Sg(a.X,a.v,a.ea,b,c.providerId,c.Hb(),hf(),d,a.xa);Dh(a.Ec).then(function(){Ib(l.window.location,
	e)})})},Ph=function(a,b,c,d,e){var f=new R("popup-closed-by-user");return a.Tb.l(function(){}).then(function(){return of(d)}).then(function(){return we(2E3).then(function(){b.Ha(c,null,f,e)})})},Mh=function(a){if(!a.isOAuthProvider)throw new R("invalid-oauth-provider");},Qh={},Rh=function(a,b,c){var d=b+":"+c;Qh[d]||(Qh[d]=new Ih(a,b,c));return Qh[d]},Gh=function(a){this.A=a;this.Jc=this.Yb=this.Xa=this.W=null;this.Ic=!1};
	Gh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));this.Ic=!0;var c=a.ua,d=a.za;"unknown"==c?(this.W||Sh(this,!1,null,null),a=J()):a=a.J?this.Gc(a,b):b.lb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"));return a};var Lh=function(a){a.Ic||(a.Ic=!0,Sh(a,!1,null,null))};Gh.prototype.Gc=function(a){this.W||Sh(this,!0,null,a.getError());return J()};
	Gh.prototype.Hc=function(a,b){var c=this,d=a.ua;b=b.lb(d,a.za);var e=a.hb;a=a.bc;var f="signInViaRedirect"==d||"linkViaRedirect"==d;return this.W?J():b(e,a).then(function(a){c.W||Sh(c,f,a,null)}).l(function(a){c.W||Sh(c,f,null,a)})};var Sh=function(a,b,c,d){b?d?(a.W=function(){return K(d)},a.Yb&&a.Yb(d)):(a.W=function(){return J(c)},a.Xa&&a.Xa(c)):(a.W=function(){return J({user:null})},a.Xa&&a.Xa({user:null}));a.Xa=null;a.Yb=null};
	Gh.prototype.getRedirectResult=function(){var a=this;this.Uc||(this.Uc=new I(function(b,c){a.W?a.W().then(b,c):(a.Xa=b,a.Yb=c,Th(a))}));return this.Uc};var Th=function(a){var b=new R("timeout");a.Jc&&a.Jc.cancel();a.Jc=we(1E4).then(function(){a.W||Sh(a,!0,null,b)})},Hh=function(a){this.A=a};Hh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));var c=a.ua,d=a.za;return a.J?this.Gc(a,b):b.lb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"))};
	Hh.prototype.Gc=function(a,b){b.Ha(a.ua,null,a.getError(),a.za);return J()};Hh.prototype.Hc=function(a,b){var c=a.za,d=a.ua;return b.lb(d,c)(a.hb,a.bc).then(function(a){b.Ha(d,a,null,c)}).l(function(a){b.Ha(d,null,a,c)})};var Uh=function(a){this.f=a;this.wa=this.S=null;this.Pa=0};Uh.prototype.G=function(){return{apiKey:this.f.v,refreshToken:this.S,accessToken:this.wa,expirationTime:this.Pa}};
	var Wh=function(a,b){var c=b.idToken,d=b.refreshToken;b=Vh(b.expiresIn);a.wa=c;a.Pa=b;a.S=d},Vh=function(a){return ka()+1E3*parseInt(a,10)},Xh=function(a,b){return hg(a.f,b).then(function(b){a.wa=b.access_token;a.Pa=Vh(b.expires_in);a.S=b.refresh_token;return{accessToken:a.wa,expirationTime:a.Pa,refreshToken:a.S}}).l(function(b){"auth/user-token-expired"==b.code&&(a.S=null);throw b;})},Yh=function(a){return!(!a.wa||a.S)};
	Uh.prototype.getToken=function(a){a=!!a;return Yh(this)?K(new R("user-token-expired")):a||!this.wa||ka()>this.Pa-3E4?this.S?Xh(this,{grant_type:"refresh_token",refresh_token:this.S}):J(null):J({accessToken:this.wa,expirationTime:this.Pa,refreshToken:this.S})};var Zh=function(a,b,c,d,e){Cf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},$h=function(a,b){Mb.call(this,a);for(var c in b)this[c]=b[c]};t($h,Mb);
	var W=function(a,b,c){this.U=[];this.v=a.apiKey;this.ea=a.appName;this.X=a.authDomain||null;a=firebase.SDK_VERSION?sf(firebase.SDK_VERSION):null;this.f=new T(this.v,null,a);this.ba=new Uh(this.f);ai(this,b.idToken);Wh(this.ba,b);Q(this,"refreshToken",this.ba.S);bi(this,c||{});Zd.call(this);this.Ub=!1;this.X&&vf()&&(this.m=Rh(this.X,this.v,this.ea));this.cc=[]};t(W,Zd);
	var ai=function(a,b){a.kd=b;Q(a,"_lat",b)},ci=function(a,b){La(a.cc,function(a){return a==b})},di=function(a){for(var b=[],c=0;c<a.cc.length;c++)b.push(a.cc[c](a));return td(b).then(function(){return a})},ei=function(a){a.m&&!a.Ub&&(a.Ub=!0,a.m.subscribe(a))},bi=function(a,b){Cf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};Q(W.prototype,"providerId","firebase");
	var fi=function(){},gi=function(a){return J().then(function(){if(a.Vd)throw new R("app-deleted");})},hi=function(a){return Ea(a.providerData,function(a){return a.providerId})},ji=function(a,b){b&&(ii(a,b.providerId),a.providerData.push(b))},ii=function(a,b){La(a.providerData,function(a){return a.providerId==b})},ki=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&Q(a,b,c)};
	W.prototype.copy=function(a){var b=this;b!=a&&(Cf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){ji(b,a)}),this.ba=a.ba,Q(this,"refreshToken",this.ba.S))};W.prototype.reload=function(){var a=this;return gi(this).then(function(){return li(a).then(function(){return di(a)}).then(fi)})};
	var li=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return mi(a,b).then(function(){c||ki(a,"isAnonymous",!1);return b}).l(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new $h("userDeleted")),ni(a));throw b;})})};
	W.prototype.getToken=function(a){var b=this,c=Yh(this.ba);return gi(this).then(function(){return b.ba.getToken(a)}).then(function(a){if(!a)throw new R("internal-error");a.accessToken!=b.kd&&(ai(b,a.accessToken),b.Da());ki(b,"refreshToken",a.refreshToken);return a.accessToken}).l(function(a){if("auth/user-token-expired"==a.code&&!c)return di(b).then(function(){ki(b,"refreshToken",null);throw a;});throw a;})};
	var oi=function(a,b){b.idToken&&a.kd!=b.idToken&&(Wh(a.ba,b),a.Da(),ai(a,b.idToken),ki(a,"refreshToken",a.ba.S))};W.prototype.Da=function(){this.dispatchEvent(new $h("tokenChanged"))};var mi=function(a,b){return S(a.f,Gg,{idToken:b}).then(r(a.we,a))};
	W.prototype.we=function(a){a=a.users;if(!a||!a.length)throw new R("internal-error");a=a[0];bi(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=pi(a),c=0;c<b.length;c++)ji(this,b[c]);ki(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	var pi=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new Zh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Gb(this.f).then(function(a){var d;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=mc(tb(e));if(k.sub&&k.iss&&k.aud&&k.exp){d=new Kf(k);break a}}catch(q){}}d=null}if(!d||b.uid!=d.qe)throw new R("user-mismatch");oi(b,a);return b.reload()}))};
	var qi=function(a,b){return li(a).then(function(){if(Ia(hi(a),b))return di(a).then(function(){throw new R("provider-already-linked");})})};h=W.prototype;h.link=function(a){var b=this;return this.c(qi(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.md(b.f,c)}).then(r(this.bd,this)))};h.bd=function(a){oi(this,a);var b=this;return this.reload().then(function(){return b})};
	h.updateEmail=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){oi(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){oi(b,a);return b.reload()}))};
	h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return gi(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){oi(b,a);ki(b,"displayName",a.displayName||null);ki(b,"photoURL",a.photoUrl||null);return di(b)}).then(fi))};
	h.unlink=function(a){var b=this;return this.c(li(this).then(function(c){return Ia(hi(b),a)?xg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(hi(b),function(a){c[a]||ii(b,a)});return di(b)}):di(b).then(function(){throw new R("no-such-provider");})}))};h.delete=function(){var a=this;return this.c(this.getToken().then(function(b){return S(a.f,Fg,{idToken:b})}).then(function(){a.dispatchEvent(new $h("userDeleted"))})).then(function(){ni(a)})};
	h.Wc=function(a,b){return"linkViaPopup"==a&&(this.ia||null)==b&&this.$||"linkViaRedirect"==a&&(this.Xb||null)==b?!0:!1};h.Ha=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ia||null)&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa)};h.lb=function(a,b){return"linkViaPopup"==a&&b==(this.ia||null)||"linkViaRedirect"==a&&(this.Xb||null)==b?r(this.Yd,this):null};h.Fb=function(){return uf(this.uid+":::")};
	h.linkWithPopup=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=this.Fb(),e=null;!wf()&&this.X&&a.isOAuthProvider&&(e=Sg(this.X,this.v,this.ea,"linkViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.tb,c&&c.sb),c=qi(this,a.providerId).then(function(){return di(b)}).then(function(){ri(b);return b.getToken()}).then(function(){return Nh(b.m,f,"linkViaPopup",a,d,!!e)}).then(function(){return new I(function(a,
	c){b.Ha("linkViaPopup",null,new R("cancelled-popup-request"),b.ia||null);b.$=a;b.Fa=c;b.ia=d;b.C=Ph(b.m,b,"linkViaPopup",f,d)})}).then(function(a){f&&mf(f);return a}).l(function(a){f&&mf(f);throw a;});return this.c(c)};
	h.linkWithRedirect=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Fb(),e=qi(this,a.providerId).then(function(){ri(b);return b.getToken()}).then(function(){b.Xb=d;return di(b)}).then(function(a){b.Ga&&(a=b.Ga,a=a.A.set(si,b.G(),a.B));return a}).then(function(){return Oh(b.m,"linkViaRedirect",a,d)}).l(function(a){c=a;if(b.Ga)return ti(b.Ga);throw c;}).then(function(){if(c)throw c;});return this.c(e)};
	var ri=function(a){if(a.m&&a.Ub)return;if(a.m&&!a.Ub)throw new R("internal-error");throw new R("auth-domain-config-required");};W.prototype.Yd=function(a,b){var c=this;this.C&&(this.C.cancel(),this.C=null);var d=null,e=this.getToken().then(function(d){return S(c.f,Of,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Zf(a);return c.bd(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};
	W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var ni=function(a){for(var b=0;b<a.U.length;b++)a.U[b].cancel("app-deleted");a.U=[];a.Vd=!0;Q(a,"refreshToken",null);a.m&&a.m.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.U.push(a);wd(a,function(){Ka(b.U,a)});return a};W.prototype.toJSON=function(){return this.G()};
	W.prototype.G=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.v,appName:this.ea,authDomain:this.X,stsTokenManager:this.ba.G(),redirectEventId:this.Xb||null};x(this.providerData,function(b){a.providerData.push(Df(b))});return a};
	var ui=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ka())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};Cf(b,a);ji(d,b)}});a.redirectEventId&&(d.Xb=a.redirectEventId);
	return d},vi=function(a,b,c){var d=new W(a,b);c&&(d.Ga=c);return d.reload().then(function(){return d})};var wi=function(a){this.B=a;this.A=yh()},si={name:"redirectUser",V:!1},ti=function(a){return a.A.remove(si,a.B)},xi=function(a,b){return a.A.get(si,a.B).then(function(a){a&&b&&(a.authDomain=b);return ui(a||{})})};var yi=function(a){this.B=a;this.A=yh()},zi={name:"authUser",V:!0},Ai=function(a){return a.A.remove(zi,a.B)},Bi=function(a,b){return a.A.get(zi,a.B).then(function(a){a&&b&&(a.authDomain=b);return ui(a||{})})};var Y=function(a){this.Na=!1;Q(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?sf(firebase.SDK_VERSION):null,this.f=new T(X(this).options&&X(this).options.apiKey,null,a);else throw new R("invalid-api-key");this.U=[];this.La=[];this.ue=firebase.INTERNAL.createSubscribe(r(this.me,this));Ci(this,null);this.va=new yi(X(this).options.apiKey+":"+X(this).name);this.Ya=new wi(X(this).options.apiKey+":"+X(this).name);this.zb=this.c(Di(this));this.ra=this.c(Ei(this));this.yc=
	!1;this.uc=r(this.Ee,this);this.Dd=r(this.Ra,this);this.Ed=r(this.ie,this);this.Cd=r(this.he,this);Fi(this);this.INTERNAL={};this.INTERNAL.delete=r(this.delete,this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).G()}};
	var Gi=function(a){return a.Wd||K(new R("auth-domain-config-required"))},Fi=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&vf()&&(a.Wd=a.zb.then(function(){if(!a.Na)return a.m=Rh(b,c,X(a).name),a.m.subscribe(a),Z(a)&&ei(Z(a)),a.Kc&&(ei(a.Kc),a.Kc=null),a.m}))};h=Y.prototype;h.Wc=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ia==b&&!!this.$;default:return!1}};
	h.Ha=function(a,b,c,d){"signInViaPopup"==a&&this.ia==d&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa)};h.lb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ia==b&&this.$?r(this.Zd,this):null};
	h.Zd=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.C&&(this.C.cancel(),this.C=null);var d=null,e=S(c.f,Nf,a).then(function(a){d=Zf(a);return a});a=c.zb.then(function(){return e}).then(function(a){return Hi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Fb=function(){return uf()};
	h.signInWithPopup=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=this.Fb(),e=null;!wf()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=Sg(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=nf(e,c&&c.tb,c&&c.sb),c=Gi(this).then(function(b){return Nh(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new I(function(a,c){b.Ha("signInViaPopup",
	null,new R("cancelled-popup-request"),b.ia);b.$=a;b.Fa=c;b.ia=d;b.C=Ph(b.m,b,"signInViaPopup",f,d)})}).then(function(a){f&&mf(f);return a}).l(function(a){f&&mf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Gi(this).then(function(){return Oh(b.m,"signInViaRedirect",a)});return this.c(c)};
	h.getRedirectResult=function(){if(!vf())return K(new R("operation-not-supported-in-this-environment"));var a=this,b=Gi(this).then(function(){return a.m.getRedirectResult()});return this.c(b)};
	var Hi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.zb.then(function(){return vi(c,b,a.Ya)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ra(b);Ci(a,b);ei(b);return a.Ra(b)}).then(function(){a.Da()})},Ci=function(a,b){Z(a)&&(ci(Z(a),a.Dd),gc(Z(a),"tokenChanged",a.Ed),gc(Z(a),"userDeleted",a.Cd));b&&(b.cc.push(a.Dd),Yb(b,"tokenChanged",a.Ed),Yb(b,"userDeleted",a.Cd));Q(a,"currentUser",b)};
	Y.prototype.signOut=function(){var a=this,b=this.ra.then(function(){if(!Z(a))return J();Ci(a,null);return Ai(a.va).then(function(){a.Da()})});return this.c(b)};
	var Ii=function(a){var b=xi(a.Ya,X(a).options.authDomain).then(function(b){if(a.Kc=b)b.Ga=a.Ya;return ti(a.Ya)});return a.c(b)},Di=function(a){var b=X(a).options.authDomain,c=Ii(a).then(function(){return Bi(a.va,b)}).then(function(b){return b?(b.Ga=a.Ya,b.reload().then(function(){return b}).l(function(c){return"auth/network-request-failed"==c.code?b:Ai(a.va)})):null}).then(function(b){Ci(a,b||null)});return a.c(c)},Ei=function(a){return a.zb.then(function(){return a.getRedirectResult()}).l(function(){}).then(function(){if(!a.Na)return a.uc()}).l(function(){}).then(function(){if(!a.Na){a.yc=
	!0;var b=a.va;b.A.addListener(zi,b.B,a.uc)}})};Y.prototype.Ee=function(){var a=this;return Bi(this.va,X(this).options.authDomain).then(function(b){if(!a.Na){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Ci(a,b),b&&(ei(b),b.Ga=a.Ya),a.m&&a.m.subscribe(a),a.Da()}})};Y.prototype.Ra=function(a){var b=this.va;return b.A.set(zi,a.G(),b.B)};Y.prototype.ie=function(){this.Da();this.Ra(Z(this))};
	Y.prototype.he=function(){this.signOut()};var Ji=function(a,b){return a.c(b.then(function(b){return Hi(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.me=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.yc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.ue(a,b,c)};
	h.getToken=function(a){var b=this,c=this.ra.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.ra.then(function(){return Ji(b,S(b.f,Hg,{token:a}))}).then(function(a){ki(a,"isAnonymous",!1);return b.Ra(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return Ji(c,S(c.f,Vf,{email:a,password:b}))})};
	h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ra.then(function(){return Ji(c,S(c.f,Eg,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.ra.then(function(){return Ji(b,a.Gb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?J(a):this.ra.then(function(){return Ji(b,b.f.signInAnonymously())}).then(function(a){ki(a,"isAnonymous",!0);return b.Ra(a)}).then(function(){return Z(b)})};
	var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Da=function(){if(this.yc)for(var a=0;a<this.La.length;a++)if(this.La[a])this.La[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.La.push(a);this.c(this.ra.then(function(){b.Na||Ia(b.La,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){La(this.La,function(b){return b==a})};
	h.delete=function(){this.Na=!0;for(var a=0;a<this.U.length;a++)this.U[a].cancel("app-deleted");this.U=[];this.va&&(a=this.va,a.A.removeListener(zi,a.B,this.uc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.U.push(a);wd(a,function(){Ka(b.U,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(ng(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
	h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};uh(Y.prototype,{applyActionCode:{name:"applyActionCode",b:[U("code")]},checkActionCode:{name:"checkActionCode",b:[U("code")]},confirmPasswordReset:{name:"confirmPasswordReset",b:[U("code"),U("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",b:[U("email"),U("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",b:[U("email")]},getRedirectResult:{name:"getRedirectResult",b:[]},onAuthStateChanged:{name:"onAuthStateChanged",b:[sh(nh(),oh(),"nextOrObserver"),
	oh("opt_error",!0),oh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",b:[U("email")]},signInAnonymously:{name:"signInAnonymously",b:[]},signInWithCredential:{name:"signInWithCredential",b:[qh()]},signInWithCustomToken:{name:"signInWithCustomToken",b:[U("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",b:[U("email"),U("password")]},signInWithPopup:{name:"signInWithPopup",b:[rh()]},signInWithRedirect:{name:"signInWithRedirect",b:[rh()]},signOut:{name:"signOut",
	b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",b:[U("code")]}});
	uh(W.prototype,{"delete":{name:"delete",b:[]},getToken:{name:"getToken",b:[{name:"opt_forceRefresh",ca:"a boolean",optional:!0,da:function(a){return"boolean"==typeof a}}]},link:{name:"link",b:[qh()]},linkWithPopup:{name:"linkWithPopup",b:[rh()]},linkWithRedirect:{name:"linkWithRedirect",b:[rh()]},reauthenticate:{name:"reauthenticate",b:[qh()]},reload:{name:"reload",b:[]},sendEmailVerification:{name:"sendEmailVerification",b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},unlink:{name:"unlink",b:[U("provider")]},
	updateEmail:{name:"updateEmail",b:[U("email")]},updatePassword:{name:"updatePassword",b:[U("password")]},updateProfile:{name:"updateProfile",b:[nh("profile")]}});uh(I.prototype,{l:{name:"catch"},then:{name:"then"}});V(Xf,"credential",function(a,b){return new Uf(a,b)},[U("email"),U("password")]);uh(Qf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Qf,"credential",Qf.credential,[sh(U(),nh(),"token")]);uh(Rf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});
	V(Rf,"credential",Rf.credential,[sh(U(),nh(),"token")]);uh(Sf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Sf,"credential",Sf.credential,[sh(U(),sh(nh(),ph()),"idToken"),sh(U(),ph(),"accessToken",!0)]);V(Tf,"credential",Tf.credential,[sh(U(),nh(),"token"),U("secret",!0)]);
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:R};V(a,"EmailAuthProvider",Xf,[]);V(a,"FacebookAuthProvider",Qf,[]);V(a,"GithubAuthProvider",Rf,[]);V(a,"GoogleAuthProvider",Sf,[]);V(a,"TwitterAuthProvider",Tf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:r(a.getToken,a),addAuthTokenListener:r(a.addAuthTokenListener,a),removeAuthTokenListener:r(a.removeAuthTokenListener,a)}});return a},
	a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
	(function() {var h,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.bf?a.bf:a.bf=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==ca(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
	function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)}
	function ka(a,b){function c(){}c.prototype=b.prototype;a.Ig=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eg=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function la(){this.Ya=-1};function ma(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Jf=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(ma,la);ma.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};
	function na(a,b,c){c||(c=0);var d=a.Jf;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var g=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+g&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295}
	ma.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)na(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){na(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){na(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function oa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function pa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function qa(a){var b=0,c;for(c in a)b++;return b}function ra(a){for(var b in a)return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ua(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function va(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function wa(a,b){var c=va(a,b,void 0);return c&&a[c]}function xa(a){for(var b in a)return!1;return!0}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Fd=void 0}
	function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
	c.push(":"),Ba(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};var v;a:{var Fa=n.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){v=Ga;break a}}v=""};function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Ha,Error);Ha.prototype.name="CustomError";var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?
	a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ma=w.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Na=w.every?function(a,b,
	c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
	function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Va=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Wa=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Xa=-1!=v.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Ua&&n.opera)return a=n.opera.version,ga(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Va&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,g||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
	function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a){n.setTimeout(function(){throw a;},0)}var db;
	function eb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a()}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
	document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);jb.push(new kb(a,b))}var gb;function hb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();gb=function(){a.then(lb)}}else gb=function(){var a=lb;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(db||(db=eb()),db(a)):n.setImmediate(a)}}var ib=!1,jb=[];[].push(function(){ib=!1;jb=[]});
	function lb(){for(;jb.length;){var a=jb;jb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Wf.call(c.scope)}catch(d){cb(d)}}}ib=!1}function kb(a,b){this.Wf=a;this.scope=b};function mb(a,b){this.L=nb;this.uf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==ob)pb(this,qb,b);else try{var c=this;a.call(b,function(a){pb(c,qb,a)},function(a){if(!(a instanceof rb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}pb(c,sb,a)})}catch(d){pb(this,sb,d)}}var nb=0,qb=2,sb=3;function ob(){}mb.prototype.then=function(a,b,c){return tb(this,ga(a)?a:null,ga(b)?b:null,c)};mb.prototype.then=mb.prototype.then;mb.prototype.$goog_Thenable=!0;h=mb.prototype;
	h.Ag=function(a,b){return tb(this,null,a,b)};h.cancel=function(a){this.L==nb&&fb(function(){var b=new rb(a);ub(this,b)},this)};function ub(a,b){if(a.L==nb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,g;g=c.Ca[f];f++)if(g=g.m)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==nb&&1==d?ub(c,b):(d=c.Ca.splice(e,1)[0],vb(c,d,sb,b)))}a.Ha=null}else pb(a,sb,b)}function wb(a,b){a.Ca&&a.Ca.length||a.L!=qb&&a.L!=sb||xb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}
	function tb(a,b,c,d){var e={m:null,hf:null,kf:null};e.m=new mb(function(a,g){e.hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.kf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof rb?g(b):a(e)}catch(l){g(l)}}:g});e.m.Ha=a;wb(a,e);return e.m}h.Cf=function(a){this.L=nb;pb(this,qb,a)};h.Df=function(a){this.L=nb;pb(this,sb,a)};
	function pb(a,b,c){if(a.L==nb){if(a==c)b=sb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Cf,a.Df,a);return}if(ha(c))try{var f=c.then;if(ga(f)){yb(a,c,f);return}}catch(g){b=sb,c=g}}a.uf=c;a.L=b;a.Ha=null;xb(a);b!=sb||c instanceof rb||zb(a,c)}}function yb(a,b,c){function d(b){f||(f=!0,a.Df(b))}function e(b){f||(f=!0,a.Cf(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
	function xb(a){a.be||(a.be=!0,fb(a.Uf,a))}h.Uf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)vb(this,a[b],this.L,this.uf)}this.be=!1};function vb(a,b,c,d){if(c==qb)b.hf(d);else{if(b.m)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.kf(d)}}function zb(a,b){a.jd=!0;fb(function(){a.jd&&Ab.call(null,b)})}var Ab=cb;function rb(a){Ha.call(this,a)}ka(rb,Ha);rb.prototype.name="cancel";function Bb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function x(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Cb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Db(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function A(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Db(a,b,d)+"must be a valid function.");}function Eb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Db(a,b,!0)+"must be a valid context object.");};function Fb(a){var b=[];Cb(a,function(a,d){da(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var Gb=n.Promise||mb;mb.prototype["catch"]=mb.prototype.Ag;function Hb(){var a=this;this.reject=this.resolve=null;this.ra=new Gb(function(b,c){a.resolve=b;a.reject=c})}function Ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Jb(a.ra),1===b.length?b(c):b(c,d))}}function Jb(a){a.then(void 0,aa)};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function Ob(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Pb(a,b){this.committed=a;this.snapshot=b};function Qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function Rb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Sb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null)}function Tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Ub(function(){f.te(d[e])})}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Vb(){this.qc={}}Vb.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Vb.prototype.get=function(a){return Bb(this.qc,a)?this.qc[a]:null};Vb.prototype.remove=function(a){delete this.qc[a]};Vb.prototype.cf=!0;function Wb(a){this.vc=a;this.Cd="firebase:"}h=Wb.prototype;h.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};h.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Ob(a)};h.remove=function(a){this.vc.removeItem(this.Cd+a)};h.cf=!1;h.toString=function(){return this.vc.toString()};function Xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Wb(b)}}catch(c){}return new Vb}var Yb=Xb("localStorage"),Zb=Xb("sessionStorage");function $b(a,b,c){this.type=ac;this.source=a;this.path=b;this.Ja=c}$b.prototype.Nc=function(a){return this.path.e()?new $b(this.source,C,this.Ja.R(a)):new $b(this.source,D(this.path),this.Ja)};$b.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function bc(a,b){this.type=cc;this.source=a;this.path=b}bc.prototype.Nc=function(){return this.path.e()?new bc(this.source,C):new bc(this.source,D(this.path))};bc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function dc(a){this.He=a}dc.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function ec(a,b){a.He.INTERNAL.addAuthTokenListener(b)};function fc(){this.Jd=F}fc.prototype.j=function(a){return this.Jd.Q(a)};fc.prototype.toString=function(){return this.Jd.toString()};function gc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.Cg=d;this.nf=e||"";this.bb=Yb.get("host:"+a)||this.host}function hc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Yb.set("host:"+a.host,a.bb))}
	function ic(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
	gc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.nf&&(a+="<"+this.nf+">");return a};function jc(a,b){this.zf={};this.Vc=new kc(a);this.va=b;var c=1E4+2E4*Math.random();setTimeout(r(this.rf,this),Math.floor(c))}jc.prototype.rf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Bb(this.zf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);setTimeout(r(this.rf,this),Math.floor(6E5*Math.random()))};function lc(){this.uc={}}function mc(a,b,c){p(c)||(c=1);Bb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}lc.prototype.get=function(){return ya(this.uc)};function kc(a){this.Nf=a;this.rd=null}kc.prototype.get=function(){var a=this.Nf.get(),b=ya(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var nc={},oc={};function pc(a){a=a.toString();nc[a]||(nc[a]=new lc);return nc[a]}function qc(a,b){var c=a.toString();oc[c]||(oc[c]=b());return oc[c]};function rc(){this.wb=[]}function sc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new tc(f));c.add(e)}c&&a.wb.push(c)}function uc(a,b,c){sc(a,c);vc(a,function(a){return a.ca(b)})}function wc(a,b,c){sc(a,c);vc(a,function(a){return a.contains(b)||b.contains(a)})}
	function vc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var g=e.hd[f];if(null!==g){e.hd[f]=null;var k=g.Ub();xc&&E("event: "+g.toString());Ub(k)}}a.wb[d]=null}else c=!1}c&&(a.wb=[])}function tc(a){this.qa=a;this.hd=[]}tc.prototype.add=function(a){this.hd.push(a)};tc.prototype.Zb=function(){return this.qa};function yc(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}yc.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path};yc.prototype.ge=function(){return this.gd};yc.prototype.Ub=function(){return this.ae.Ub(this)};yc.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Ue())};function zc(a,b,c){this.ae=a;this.error=b;this.path=c}zc.prototype.Zb=function(){return this.path};zc.prototype.ge=function(){return"cancel"};
	zc.prototype.Ub=function(){return this.ae.Ub(this)};zc.prototype.toString=function(){return this.path.toString()+":cancel"};function Ac(){}Ac.prototype.Xe=function(){return null};Ac.prototype.fe=function(){return null};var Bc=new Ac;function Cc(a,b,c){this.Gf=a;this.Na=b;this.yd=c}Cc.prototype.Xe=function(a){var b=this.Na.O;if(Dc(b,a))return b.j().R(a);b=null!=this.yd?new Ec(this.yd,!0,!1):this.Na.u();return this.Gf.rc(a,b)};Cc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:Fc(this.Na);a=this.Gf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0}function Gc(a){return new I(Hc,a)}var Hc="value";function Ec(a,b,c){this.A=a;this.ea=b;this.Tb=c}function Ic(a){return a.ea}function Jc(a){return a.Tb}function Kc(a,b){return b.e()?a.ea&&!a.Tb:Dc(a,J(b))}function Dc(a,b){return a.ea&&!a.Tb||a.A.Fa(b)}Ec.prototype.j=function(){return this.A};function Lc(a,b){return Mc(a.name,b.name)}function Nc(a,b){return Mc(a,b)};function K(a,b){this.name=a;this.S=b}function Oc(a,b){return new K(a,b)};function Pc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Qc(a,b){var c=new Rc;Sc(a,new L(""),function(a,e){Tc(c,a,Uc(e,b))});return c}function Uc(a,b){var c=a.C().H(),c=Pc(c,b),d;if(a.J()){var e=Pc(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Vc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.ga(new Vc(c)));a.P(N,function(a,c){var e=Uc(c,b);e!==c&&(d=d.U(a,e))});return d};var Wc=function(){var a=1;return function(){return a++}}(),H=Kb,Xc=Lb;
	function Yc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==m)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(l){E("base64Decode failed: ",
	l)}return null}function Zc(a){var b=Mb(a);a=new ma;a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;na(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return ab(b)}function $c(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+$c.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var xc=null,ad=!0;
	function bd(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?xc=r(console.log,console):"object"===typeof console.log&&(xc=function(a){console.log(a)})),b&&Zb.set("logging_enabled",!0)):ga(a)?xc=a:(xc=null,Zb.remove("logging_enabled"))}function E(a){!0===ad&&(ad=!1,null===xc&&!0===Zb.get("logging_enabled")&&bd(!0));if(xc){var b=$c.apply(null,arguments);xc(b)}}
	function cd(a){return function(){E(a,arguments)}}function dd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+$c.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function ed(a){var b=$c.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+$c.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function fd(a){var b,c,d,e,f,g=a;f=c=a=b="";d=!0;e="https";if(q(g)){var k=g.indexOf("//");0<=k&&(e=g.substring(0,k-1),g=g.substring(k+2));k=g.indexOf("/");-1===k&&(k=g.length);b=g.substring(0,k);f="";g=g.substring(k).split("/");for(k=0;k<g.length;k++)if(0<g[k].length){var m=g[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}g=b.split(".");3===g.length?(a=g[1],c=g[0].toLowerCase()):2===g.length&&(a=g[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&ed(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
	c&&"undefined"!=c||ed("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new gc(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function gd(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function hd(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function Mc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=id(a),d=id(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function jd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
	function kd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=kd(a[b[d]]);return c+"}"}function ld(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function md(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b)}
	function nd(a){H(!gd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var od=/^-?\d{1,10}$/;function id(a){return od.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Ub(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function pd(a,b,c){Object.defineProperty(a,b,{get:c})};function qd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Ob(Yc(f[0])||""),c=Ob(Yc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Fg:b,Me:c,data:d,xg:e}}function rd(a){a=qd(a);var b=a.Me;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function sd(a){a=qd(a).Me;return"object"===typeof a&&!0===x(a,"admin")};var ud=null;"undefined"!==typeof MozWebSocket?ud=MozWebSocket:"undefined"!==typeof WebSocket&&(ud=WebSocket);function vd(a,b,c,d){this.Zd=a;this.f=cd(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=pc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ne=ic(b,"websocket",a)}var wd;
	vd.prototype.open=function(a,b){this.kb=b;this.hg=a;this.f("Websocket connecting to "+this.Ne);this.xc=!1;Yb.set("previous_websocket_failure",!0);try{this.La=new ud(this.Ne)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=
	a.length,mc(e.Xa,"bytes_received",a.length),xd(e),null!==e.frames)yd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&yd(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb()}};vd.prototype.start=function(){};
	vd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ud&&!wd};vd.responsesRequiredToBeHealthy=2;vd.healthyTimeout=3E4;h=vd.prototype;h.sd=function(){Yb.remove("previous_websocket_failure")};function yd(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=Ob(c);a.hg(c)}}
	h.send=function(a){xd(this);a=B(a);this.rb+=a.length;mc(this.Xa,"bytes_sent",a.length);a=ld(a,16384);1<a.length&&zd(this,String(a.length));for(var b=0;b<a.length;b++)zd(this,a[b])};h.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null)};h.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null))};h.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc())};
	function xd(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&zd(a,"0");xd(a)},Math.floor(45E3))}function zd(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0)}};function Ad(a,b,c){this.f=cd("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.$={}}function Bd(a,b){if(p(b))return"tag$"+b;H(Cd(a.n),"should have a tag if it's not a default query.");return a.path.toString()}h=Ad.prototype;
	h.df=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ya());var f=Bd(a,c),g={};this.$[f]=g;a=Dd(a.n);var k=this;Ed(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);x(k.$,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.Ef=function(a,b){var c=Bd(a,b);delete this.$[c]};h.qf=function(){};h.re=function(){};h.gf=function(){};h.xd=function(){};h.put=function(){};h.ef=function(){};h.ye=function(){};
	function Ed(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Fb(c);a.f("Sending REST request for "+f);var g=new XMLHttpRequest;g.onreadystatechange=function(){if(d&&4===g.readyState){a.f("REST Response for "+f+" received. status:",g.status,"response:",g.responseText);var b=null;if(200<=g.status&&300>g.status){try{b=Ob(g.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+g.responseText)}d(null,
	b)}else 401!==g.status&&404!==g.status&&O("Got unsuccessful REST response for "+f+" Status: "+g.status),d(g.status);d=null}};g.open("GET",f,!0);g.send()})};function Fd(a,b,c){this.type=Gd;this.source=a;this.path=b;this.children=c}Fd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new $b(this.source,C,a.value):new Fd(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Fd(this.source,D(this.path),this.children)};Fd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Hd(){this.hb={}}
	function Id(a,b){var c=b.type,d=b.Za;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=x(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new I("child_removed",e.qe,d);else if("child_changed"==c&&
	"child_added"==f)a.hb[d]=new I("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.qe);else throw Xc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b};function Jd(a){this.W=a;this.g=a.n.g}function Kd(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.qe,b.Ma)&&f.push(new I("child_moved",b.Ma,b.Za))});Ld(a,e,"child_removed",b,d,c);Ld(a,e,"child_added",b,d,c);Ld(a,e,"child_moved",f,d,c);Ld(a,e,"child_changed",b,d,c);Ld(a,e,Hc,b,d,c);return e}function Ld(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,r(a.Of,a));Ja(d,function(c){var d=Md(a,c,f);Ja(e,function(e){e.tf(c.type)&&b.push(e.createEvent(d,a.W))})})}
	function Md(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ze(b.Za,b.Ma,a.g));return b}Jd.prototype.Of=function(a,b){if(null==a.Za||null==b.Za)throw Xc("Should only compare child_ events.");return this.g.compare(new K(a.Za,a.Ma),new K(b.Za,b.Ma))};function Nd(a,b){this.Sd=a;this.Mf=b}function Od(a){this.V=a}
	Od.prototype.gb=function(a,b,c,d){var e=new Hd,f;if(b.type===ac)b.source.ee?c=Pd(this,a,b.path,b.Ja,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Jc(a.u())&&!b.path.e(),c=Qd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===Gd)b.source.ee?c=Rd(this,a,b.path,b.children,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Jc(a.u()),c=Sd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Td)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new Cc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))Ic(a.u())?
	b=c.Ba(Fc(a)):(b=a.u().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var g=J(b),k=c.rc(g,a.u());null==k&&Dc(a.u(),g)&&(k=d.R(g));b=null!=k?this.V.F(d,g,k,D(b),f,e):a.O.j().Fa(g)?this.V.F(d,g,F,D(b),f,e):d;b.e()&&Ic(a.u())&&(d=c.Ba(Fc(a)),d.J()&&(b=this.V.za(b,d,e)))}d=Ic(a.u())||null!=c.mc(C);c=Ud(a,b,d,this.V.Qa())}else c=Vd(this,a,b.path,b.Pb,c,d,e);else if(b.type===cc)d=b.path,b=a.u(),f=b.j(),g=b.ea||d.e(),c=Wd(this,new Xd(a.O,new Ec(f,
	g,b.Tb)),d,c,Bc,e);else throw Xc("Unknown operation type: "+b.type);e=sa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),g=Yd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(g)||!b.j().C().ca(g.C()))&&e.push(Gc(Yd(d))));return new Nd(c,e)};
	function Wd(a,b,c,d,e,f){var g=b.O;if(null!=d.mc(c))return b;var k;if(c.e())H(Ic(b.u()),"If change path is empty, we must have complete server data"),Jc(b.u())?(e=Fc(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(Fc(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)H(1==Zd(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):g.j();else{var l=D(c);Dc(g,m)?(k=b.u().j(),d=d.$c(c,g.j(),k),d=null!=d?g.j().R(m).F(l,d):g.j().R(m)):d=d.rc(m,
	b.u());f=null!=d?a.V.F(g.j(),m,d,l,e,f):g.j()}}return Ud(b,f,g.ea||c.e(),a.V.Qa())}function Qd(a,b,c,d,e,f,g,k){var m=b.u();g=g?a.V:a.V.Vb();if(c.e())d=g.za(m.j(),d,null);else if(g.Qa()&&!m.Tb)d=m.j().F(c,d),d=g.za(m.j(),d,null);else{var l=J(c);if(!Kc(m,c)&&1<Zd(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?g.ga(m.j(),d):g.F(m.j(),l,d,u,Bc,null)}m=m.ea||c.e();b=new Xd(b.O,new Ec(d,m,g.Qa()));return Wd(a,b,c,e,new Cc(e,b,f),k)}
	function Pd(a,b,c,d,e,f,g){var k=b.O;e=new Cc(e,b,f);if(c.e())g=a.V.za(b.O.j(),d,g),a=Ud(b,g,!0,a.V.Qa());else if(f=J(c),".priority"===f)g=a.V.ga(b.O.j(),d),a=Ud(b,g,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Xe(f);d=null!=l?".priority"===$d(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F}m.ca(d)?a=b:(g=a.V.F(k.j(),f,d,c,e,g),a=Ud(b,g,k.ea,a.V.Qa()))}return a}
	function Rd(a,b,c,d,e,f,g){var k=b;ae(d,function(d,l){var u=c.m(d);Dc(b.O,J(u))&&(k=Pd(a,k,u,l,e,f,g))});ae(d,function(d,l){var u=c.m(d);Dc(b.O,J(u))||(k=Pd(a,k,u,l,e,f,g))});return k}function be(a,b){ae(b,function(b,d){a=a.F(b,d)});return a}
	function Sd(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Ic(b.u()))return b;var m=b;c=c.e()?d:ce(Q,c,d);var l=b.u().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.u().j().R(c),G=be(G,d);m=Qd(a,m,new L(c),G,e,f,g,k)}});c.children.ia(function(c,d){var G=!Dc(b.u(),c)&&null==d.value;l.Fa(c)||G||(G=b.u().j().R(c),G=be(G,d),m=Qd(a,m,new L(c),G,e,f,g,k))});return m}
	function Vd(a,b,c,d,e,f,g){if(null!=e.mc(c))return b;var k=Jc(b.u()),m=b.u();if(null!=d.value){if(c.e()&&m.ea||Kc(m,c))return Qd(a,b,c,m.j().Q(c),e,f,k,g);if(c.e()){var l=Q;m.j().P(de,function(a,b){l=l.set(new L(a),b)});return Sd(a,b,c,l,e,f,k,g)}return b}l=Q;ae(d,function(a){var b=c.m(a);Kc(m,b)&&(l=l.set(a,m.j().Q(b)))});return Sd(a,b,c,l,e,f,k,g)};function ee(a){this.g=a}h=ee.prototype;h.F=function(a,b,c,d,e,f){H(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Id(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Id(f,new I("child_added",c,b)):Id(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g)};
	h.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||Id(c,new I("child_removed",e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.ca(e)||Id(c,new I("child_changed",e,b,f))}else Id(c,new I("child_added",e,b))}));return b.ob(this.g)};h.ga=function(a,b){return a.e()?F:a.ga(b)};h.Qa=function(){return!1};h.Vb=function(){return this};function fe(a){this.he=new ee(a.g);this.g=a.g;var b;a.ka?(b=ge(a),b=a.g.Fc(he(a),b)):b=a.g.Ic();this.Uc=b;a.na?(b=ie(a),a=a.g.Fc(je(a),b)):a=a.g.Gc();this.wc=a}h=fe.prototype;h.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc)};h.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};
	h.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new K(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};h.ga=function(a){return a};h.Qa=function(){return!0};h.Vb=function(){return this.he};function ke(a){this.sa=new fe(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Jb=!le(a)}h=ke.prototype;h.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=F);return a.R(b).ca(c)?a:a.Fb()<this.oa?this.sa.Vb().F(a,b,c,d,e,f):me(this,a,b,c,e,f)};
	h.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.oa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.sa.wc,this.g):b.Yb(this.sa.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.oa;){var f=R(b),g;if(g=this.Jb?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.$e(this.g);k=this.sa.wc;m=this.sa.Uc;var u=ne(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.sa.Uc,
	m=this.sa.wc,l=ne(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=R(b),!z&&0>=l(k,f)&&(z=!0),(g=z&&e<this.oa&&0>=l(f,m))?e++:d=d.U(f.name,F)}return this.sa.Vb().za(a,d,c)};h.ga=function(a){return a};h.Qa=function(){return!0};h.Vb=function(){return this.sa.Vb()};
	function me(a,b,c,d,e,f){var g;if(a.Jb){var k=ne(a.g);g=function(a,b){return k(b,a)}}else g=ne(a.g);H(b.Fb()==a.oa,"");var m=new K(c,d),l=a.Jb?oe(b,a.g):pe(b,a.g),u=a.sa.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:g(l,m);if(u&&!d.e()&&0<=e)return null!=f&&Id(f,new I("child_changed",d,c,z)),b.U(c,d);null!=f&&Id(f,new I("child_removed",z,c));b=b.U(c,F);return null!=l&&a.sa.matches(l)?(null!=f&&Id(f,new I("child_added",
	l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&&0<=g(l,m)?(null!=f&&(Id(f,new I("child_removed",l.S,l.name)),Id(f,new I("child_added",d,c))),b.U(c,d).U(l.name,F)):b};function Vc(a,b){this.B=a;H(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||F;qe(this.aa);this.Eb=null}var re=["object","boolean","number","string"];h=Vc.prototype;h.J=function(){return!0};h.C=function(){return this.aa};h.ga=function(a){return new Vc(this.B,a)};h.R=function(a){return".priority"===a?this.aa:F};h.Q=function(a){return a.e()?this:".priority"===J(a)?this.aa:F};h.Fa=function(){return!1};h.Ze=function(){return null};
	h.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.aa)};h.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Zd(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b))};h.e=function(){return!1};h.Fb=function(){return 0};h.P=function(){return!1};h.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea()};
	h.hash=function(){if(null===this.Eb){var a="";this.aa.e()||(a+="priority:"+se(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+nd(this.B):a+this.B;this.Eb=Zc(a)}return this.Eb};h.Ea=function(){return this.B};h.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(re,b),e=Ia(re,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	h.ob=function(){return this};h.zc=function(){return!0};h.ca=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.ca(a.aa):!1};h.toString=function(){return B(this.H(!0))};function te(){}var ue={};function ne(a){return r(a.compare,a)}te.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};te.prototype.Ic=function(){return ve};function we(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ka(we,te);h=we.prototype;h.yc=function(a){return!a.Q(this.cc).e()};h.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?Mc(a.name,b.name):c};
	h.Fc=function(a,b){var c=M(a),c=F.F(this.cc,c);return new K(b,c)};h.Gc=function(){var a=F.F(this.cc,xe);return new K("[MAX_NAME]",a)};h.toString=function(){return this.cc.slice().join("/")};function ye(){}ka(ye,te);h=ye.prototype;h.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?Mc(a.name,b.name):c};h.yc=function(a){return!a.C().e()};h.nd=function(a,b){return!a.C().ca(b.C())};h.Ic=function(){return ve};h.Gc=function(){return new K("[MAX_NAME]",new Vc("[PRIORITY-POST]",xe))};
	h.Fc=function(a,b){var c=M(a);return new K(b,new Vc("[PRIORITY-POST]",c))};h.toString=function(){return".priority"};var N=new ye;function ze(){}ka(ze,te);h=ze.prototype;h.compare=function(a,b){return Mc(a.name,b.name)};h.yc=function(){throw Xc("KeyIndex.isDefinedOn not expected to be called.");};h.nd=function(){return!1};h.Ic=function(){return ve};h.Gc=function(){return new K("[MAX_NAME]",F)};h.Fc=function(a){H(q(a),"KeyIndex indexValue must always be a string.");return new K(a,F)};h.toString=function(){return".key"};
	var de=new ze;function Ae(){}ka(Ae,te);h=Ae.prototype;h.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?Mc(a.name,b.name):c};h.yc=function(){return!0};h.nd=function(a,b){return!a.ca(b)};h.Ic=function(){return ve};h.Gc=function(){return Be};h.Fc=function(a,b){var c=M(a);return new K(b,c)};h.toString=function(){return".value"};var Ce=new Ae;function De(){this.Sb=this.na=this.Lb=this.ka=this.xa=!1;this.oa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N}var Ee=new De;function le(a){return""===a.oc?a.ka:"l"===a.oc}function he(a){H(a.ka,"Only valid if start has been set");return a.ec}function ge(a){H(a.ka,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]"}function je(a){H(a.na,"Only valid if end has been set");return a.bc}
	function ie(a){H(a.na,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]"}function Fe(a){var b=new De;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.na=a.na;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}h=De.prototype;h.ne=function(a){var b=Fe(this);b.xa=!0;b.oa=a;b.oc="l";return b};h.oe=function(a){var b=Fe(this);b.xa=!0;b.oa=a;b.oc="r";return b};h.Nd=function(a,b){var c=Fe(this);c.ka=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c};
	h.fd=function(a,b){var c=Fe(this);c.na=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Hg=!1,c.yb="");return c};function Ge(a,b){var c=Fe(a);c.g=b;return c}function He(a){var b={};a.ka&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.na&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.xa){b.l=a.oa;var c=a.oc;""===c&&(c=le(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.ka||a.na||a.xa)}function Cd(a){return S(a)&&a.g==N}
	function Dd(a){var b={};if(Cd(a))return b;var c;a.g===N?c="$priority":a.g===Ce?c="$value":a.g===de?c="$key":(H(a.g instanceof we,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.na&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.xa&&(le(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}h.toString=function(){return B(He(this))};function Ie(a,b){this.od=a;this.dc=b}Ie.prototype.get=function(a){var b=x(this.od,a);if(!b)throw Error("No index defined for "+a);return b===ue?null:b};function Je(a,b,c){var d=oa(a.od,function(d,f){var g=x(a.dc,f);H(g,"Missing index implementation for "+f);if(d===ue){if(g.yc(b.S)){for(var k=[],m=c.Xb(Oc),l=R(m);l;)l.name!=b.name&&k.push(l),l=R(m);k.push(b);return Ke(k,ne(g))}return ue}g=c.get(b.name);k=d;g&&(k=k.remove(new K(b.name,g)));return k.Ra(b,b.S)});return new Ie(d,a.dc)}
	function Le(a,b,c){var d=oa(a.od,function(a){if(a===ue)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new Ie(d,a.dc)}var Me=new Ie({".priority":ue},{".priority":N});function Ne(){this.set={}}h=Ne.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return Bb(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return xa(this.set)};h.count=function(){return qa(this.set)};function Oe(a,b){t(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Pe(a,b,c,d){this.Zd=a;this.f=cd(a);this.kc=b;this.qb=this.rb=0;this.Xa=pc(b);this.Bf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ic(b,"long_polling",a)}}var Qe,Re;
	Pe.prototype.open=function(a,b){this.Qe=0;this.ja=b;this.ff=new Rb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null},Math.floor(3E4));hd(function(){if(!c.Bb){c.Wa=new Se(function(a,b,d,k,m){Te(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Wa.Kd=!1,Sb(c.ff,b,function(){c.fb()})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){Te(c,arguments);
	Tb(c.ff,a,b)},function(){c.fb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.Bf&&(a.s=c.Bf);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);Ue(c.Wa,a,function(){})}})};
	Pe.prototype.start=function(){var a=this.Wa,b=this.mf;a.fg=this.id;a.gg=b;for(a.Ud=!0;Ve(a););a=this.id;b=this.mf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
	Pe.isAvailable=function(){return Qe||!Re&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Dg)&&!0};h=Pe.prototype;h.sd=function(){};h.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null)};
	h.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null))};h.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc())};h.send=function(a){a=B(a);this.rb+=a.length;mc(this.Xa,"bytes_sent",a.length);a=Mb(a);a=ab(a,!0);a=ld(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({ug:this.Qe,Bg:a.length,Se:a[b]});c.Ud&&Ve(c);this.Qe++}};function Te(a,b){var c=B(b).length;a.qb+=c;mc(a.Xa,"bytes_received",c)}
	function Se(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Ne;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Wc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
	Se.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&&(this.kb=null,b())};
	function Ve(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.fg;b.pw=a.gg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Se.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.ug+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.Se;d++}else break;We(a,b+c,a.$d);return!0}return!1}function We(a,b,c){function d(){a.ve.remove(c);Ve(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));Ue(a,b,function(){clearTimeout(e);d()})}
	function Ue(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function Xe(a){Ye(this,a)}var Ze=[Pe,vd];function Ye(a,b){var c=vd&&vd.isAvailable(),d=c&&!(Yb.cf||!0===Yb.get("previous_websocket_failure"));b.Cg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[vd];else{var e=a.Wc=[];md(Ze,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function $e(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function af(a,b,c,d,e,f,g){this.id=a;this.f=cd("c:"+this.id+":");this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Oe=0;this.Af=new Xe(b);this.L=0;this.Db=g;this.f("Connection created");bf(this)}
	function bf(a){var b=$e(a.Af);a.I=new b("c:"+a.id+":"+a.Oe++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=cf(a,a.I),d=df(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=setTimeout(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+
	a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function df(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Yb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
	function cf(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=jd("t",c);c=jd("d",c);if("c"==d){if(d=jd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.yf=c.s;hc(a.M,f);0==a.L&&(a.I.start(),ef(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.Af,(c=1<c.Wc.length?c.Wc[1]:null)&&ff(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];gf(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.se&&(a.se(c),a.se=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),hc(a.M,c),1===a.L?a.close():(hf(a),bf(a))):"e"===d?dd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),jf(a),kf(a)):dd("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=jd("t",c),c=jd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?lf(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.xf--,lf(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}af.prototype.ua=function(a){mf(this,{t:"d",d:a})};function gf(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
	function lf(a){0>=a.xf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,gf(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}af.prototype.wd=function(a){jf(this);this.te(a)};function jf(a){a.Cb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()))}
	function ff(a,b){a.D=new b("c:"+a.id+":"+a.Oe++,a.M,a.yf);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(cf(a,a.D),df(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function ef(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.yf),a.Mc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Cb=!0):setTimeout(function(){kf(a)},Math.floor(5E3))}
	function kf(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),mf(a,{t:"c",d:{t:"p",d:{}}}))}function mf(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b)}af.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,hf(this),this.ja&&(this.ja(),this.ja=null))};function hf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function nf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Mc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Zd(a){return a.o.length-a.Z}function D(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b)}function $d(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}h=L.prototype;
	h.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};h.slice=function(a){return this.o.slice(this.Z+(a||0))};h.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
	h.m=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};h.e=function(){return this.Z>=this.o.length};h.ca=function(a){if(Zd(this)!==Zd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	h.contains=function(a){var b=this.Z,c=a.Z;if(Zd(this)>Zd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function of(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Te=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Nb(this.Ta[c]);pf(this)}of.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Nb(a);pf(this)};of.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Nb(a);0<this.Ta.length&&--this.Ka};
	function pf(a){if(768<a.Ka)throw Error(a.Te+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Te+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+qf(a));}function qf(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'"};function rf(a){a instanceof sf||ed("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new tf(this)}var uf={TIMESTAMP:{".sv":"timestamp"}};h=rf.prototype;h.app=null;h.pf=function(a){vf(this,"ref");y("database.ref",0,1,arguments.length);return p(a)?this.ba.m(a):this.ba};
	h.rg=function(a){vf(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=fd(a);wf("database.refFromURL",b);var c=b.kc;c.host!==this.ta.M.host&&ed("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.M.host+")");return this.pf(b.path.toString())};function vf(a,b){null===a.ta&&ed("Cannot call "+b+" on a deleted database.")}h.$f=function(){y("database.goOffline",0,0,arguments.length);vf(this,"goOffline");this.ta.eb()};
	h.ag=function(){y("database.goOnline",0,0,arguments.length);vf(this,"goOnline");this.ta.lc()};Object.defineProperty(rf.prototype,"app",{get:function(){return this.ta.app}});function tf(a){this.$a=a}tf.prototype.delete=function(){vf(this.$a,"delete");var a=xf.Wb(),b=this.$a.ta;x(a.nb,b.app.name)!==b&&ed("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ta=null;this.$a.ba=null;this.$a=this.$a.INTERNAL=null;return firebase.Promise.resolve()};
	rf.prototype.ref=rf.prototype.pf;rf.prototype.refFromURL=rf.prototype.rg;rf.prototype.goOnline=rf.prototype.ag;rf.prototype.goOffline=rf.prototype.$f;tf.prototype["delete"]=tf.prototype.delete;function Rc(){this.k=this.B=null}Rc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Tc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Ne);var d=J(b);a.k.contains(d)||a.k.add(d,new Rc);a=a.k.get(d);b=D(b);Tc(a,b,c)}}
	function yf(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Tc(a,new L(b),c)});return yf(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&yf(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Sc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);Sc(e,f,c)})}Rc.prototype.P=function(a){null!==this.k&&Oe(this.k,function(b,c){a(b,c)})};var zf=/[\[\].#$\/\u0000-\u001F\u007F]/,Af=/[\[\].#$\u0000-\u001F\u007F]/;function Bf(a){return q(a)&&0!==a.length&&!zf.test(a)}function Cf(a){return null===a||q(a)||fa(a)&&!gd(a)||ha(a)&&Bb(a,".sv")}function Df(a,b,c,d){d&&!p(b)||Ef(Db(a,1,d),b,c)}
	function Ef(a,b,c){c instanceof L&&(c=new of(c,a));if(!p(b))throw Error(a+"contains undefined "+qf(c));if(ga(b))throw Error(a+"contains a function "+qf(c)+" with contents: "+b.toString());if(gd(b))throw Error(a+"contains "+b.toString()+" "+qf(c));if(q(b)&&b.length>10485760/3&&10485760<Nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+qf(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Cb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Bf(b)))throw Error(a+" contains an invalid key ("+b+") "+qf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Ef(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+qf(c)+" in addition to actual children.");}}
	function Ff(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Bf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(nf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function Gf(a,b,c){var d=Db(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Cb(b,function(a,b){var k=new L(a);Ef(d,b,c.m(k));if(".priority"===$d(k)&&!Cf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Ff(d,e)}
	function Hf(a,b,c){if(gd(c))throw Error(Db(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Cf(c))throw Error(Db(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function If(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(Db(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Jf(a,b){if(p(b)&&!Bf(b))throw Error(Db(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function Kf(a,b){if(!q(b)||0===b.length||Af.test(b))throw Error(Db(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Lf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
	function wf(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Bf(b.kc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!Af.test(c)));if(d)throw Error(Db(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b}V.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new Hb;this.ta.xd(this.qa,Ib(b,a));return b.ra};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Lf("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new Hb;Mf(this.ta,this.qa,null,Ib(b,a));return b.ra};
	V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Lf("Firebase.onDisconnect().set",this.qa);Df("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new Hb;Mf(this.ta,this.qa,a,Ib(c,b));return c.ra};V.prototype.set=V.prototype.set;
	V.prototype.Kb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Lf("Firebase.onDisconnect().setWithPriority",this.qa);Df("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Hf("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Hb;Nf(this.ta,this.qa,a,b,Ib(d,c));return d.ra};V.prototype.setWithPriority=V.prototype.Kb;
	V.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Lf("Firebase.onDisconnect().update",this.qa);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Gf("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
	c=new Hb;Of(this.ta,this.qa,a,Ib(c,b));return c.ra};V.prototype.update=V.prototype.update;function Pf(a){H(da(a)&&0<a.length,"Requires a non-empty array");this.Kf=a;this.Ec={}}Pf.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};Pf.prototype.hc=function(a,b,c){Qf(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Ye(a))&&b.apply(c,a)};
	Pf.prototype.Jc=function(a,b,c){Qf(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ke===b&&(!c||c===a[d].Pa)){a.splice(d,1);break}};function Qf(a,b){H(Oa(a.Kf,function(a){return a===b}),"Unknown event: "+b)};function Rf(){Pf.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!Qb()){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Ge("online",!1))},!1)}}ka(Rf,Pf);Rf.prototype.Ye=function(a){H("online"===a,"Unknown event type: "+a);return[this.ic]};ba(Rf);function Sf(){Pf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Ge("visible",b))},!1)}}ka(Sf,Pf);Sf.prototype.Ye=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Nb]};ba(Sf);var Tf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function Uf(a,b){this.Oa=a;this.ba=b?b:Vf}h=Uf.prototype;h.Ra=function(a,b){return new Uf(this.Oa,this.ba.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};h.remove=function(a){return new Uf(this.Oa,this.ba.remove(a,this.Oa).Y(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.ba;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Wf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.ba.e()};h.count=function(){return this.ba.count()};h.Hc=function(){return this.ba.Hc()};h.fc=function(){return this.ba.fc()};h.ia=function(a){return this.ba.ia(a)};
	h.Xb=function(a){return new Xf(this.ba,null,this.Oa,!1,a)};h.Yb=function(a,b){return new Xf(this.ba,a,this.Oa,!1,b)};h.$b=function(a,b){return new Xf(this.ba,a,this.Oa,!0,b)};h.$e=function(a){return new Xf(this.ba,null,this.Oa,!0,a)};function Xf(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.le?a.right:a.left}
	function R(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Yf(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Zf(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Vf;this.right=null!=e?e:Vf}h=Zf.prototype;
	h.Y=function(a,b,c,d,e){return new Zf(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function $f(a){return a.left.e()?a:$f(a.left)}h.Hc=function(){return $f(this).key};h.fc=function(){return this.right.e()?this.key:this.right.fc()};
	h.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return ag(e)};function bg(a){if(a.left.e())return Vf;a.left.fa()||a.left.left.fa()||(a=cg(a));a=a.Y(null,null,null,bg(a.left),null);return ag(a)}
	h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=cg(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=dg(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=eg(c),c.left.left.fa()&&(c=dg(c),c=eg(c)));if(0===b(a,c.key)){if(c.right.e())return Vf;d=$f(c.right);c=c.Y(d.key,d.value,null,null,bg(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return ag(c)};h.fa=function(){return this.color};
	function ag(a){a.right.fa()&&!a.left.fa()&&(a=fg(a));a.left.fa()&&a.left.left.fa()&&(a=dg(a));a.left.fa()&&a.right.fa()&&(a=eg(a));return a}function cg(a){a=eg(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,dg(a.right)),a=fg(a),a=eg(a));return a}function fg(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function dg(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
	function eg(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function gg(){}h=gg.prototype;h.Y=function(){return this};h.Ra=function(a,b){return new Zf(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ia=function(){return!1};h.Hc=function(){return null};h.fc=function(){return null};h.fa=function(){return!1};var Vf=new gg;function P(a,b,c){this.k=a;(this.aa=b)&&qe(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null}h=P.prototype;h.J=function(){return!1};h.C=function(){return this.aa||F};h.ga=function(a){return this.k.e()?this:new P(this.k,a,this.zb)};h.R=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?F:a};h.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};h.Fa=function(a){return null!==this.k.get(a)};
	h.U=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=Le(this.zb,c,this.k)):(d=this.k.Ra(a,b),c=Je(this.zb,c,this.k));e=d.e()?F:this.aa;return new P(d,e,c)};h.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Zd(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d)};h.e=function(){return this.k.e()};h.Fb=function(){return this.k.count()};
	var hg=/^(0|[1-9]\d*)$/;h=P.prototype;h.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,g){b[f]=g.H(a);c++;e&&hg.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};h.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+se(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Eb=""===a?"":Zc(a)}return this.Eb};
	h.Ze=function(a,b,c){return(c=ig(this,c))?(a=Wf(c,new K(a,b)))?a.name:null:Wf(this.k,a)};function oe(a,b){var c;c=(c=ig(a,b))?(c=c.Hc())&&c.name:a.k.Hc();return c?new K(c,a.k.get(c)):null}function pe(a,b){var c;c=(c=ig(a,b))?(c=c.fc())&&c.name:a.k.fc();return c?new K(c,a.k.get(c)):null}h.P=function(a,b){var c=ig(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.k.ia(b)};h.Xb=function(a){return this.Yb(a.Ic(),a)};
	h.Yb=function(a,b){var c=ig(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.k.Yb(a.name,Oc),d=Yf(c);null!=d&&0>b.compare(d,a);)R(c),d=Yf(c);return c};h.$e=function(a){return this.$b(a.Gc(),a)};h.$b=function(a,b){var c=ig(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.k.$b(a.name,Oc),d=Yf(c);null!=d&&0<b.compare(d,a);)R(c),d=Yf(c);return c};h.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===xe?-1:0};
	h.ob=function(a){if(a===de||ua(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.k;H(a!==de,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Oc),f=R(c);f;)e=e||a.yc(f.S),d.push(f),f=R(c);d=e?Ke(d,ne(a)):ue;e=a.toString();c=ya(b.dc);c[e]=a;a=ya(b.od);a[e]=d;return new P(this.k,this.aa,new Ie(a,c))};h.zc=function(a){return a===de||ua(this.zb.dc,a.toString())};
	h.ca=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().ca(a.C())&&this.k.count()===a.k.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function ig(a,b){return b===de?null:a.zb.get(b.toString())}h.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Vc(a,M(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Bb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
	d.U(b,c)}});return d.ga(M(c))}var f=[],g=!1,k=a;Cb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(g=g||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return F;var m=Ke(f,Lc,function(a){return a.name},Nc);if(g){var l=Ke(f,ne(N));return new P(m,M(c),new Ie({".priority":l},{".priority":N}))}return new P(m,M(c),Me)}var jg=Math.log(2);
	function kg(a){this.count=parseInt(Math.log(a+1)/jg,10);this.Re=this.count-1;this.Lf=a+1&parseInt(Array(this.count+1).join("1"),2)}function lg(a){var b=!(a.Lf&1<<a.Re);a.Re--;return b}
	function Ke(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new Zf(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new Zf(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new Zf(G,k.S,g,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=lg(b),td=Math.pow(2,b.count-(z+1));G?d(td,!1):(d(td,!1),d(td,!0))}return l}(new kg(a.length));
	return null!==f?new Uf(d||b,f):new Uf(d||b)}function se(a){return"number"===typeof a?"number:"+nd(a):"string:"+a}function qe(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&Bb(b,".sv"),"Priority must be a string or number.")}else H(a===xe||a.e(),"priority of unexpected type.");H(a===xe||a.C().e(),"Priority nodes can't have a priority of their own.")}var F=new P(new Uf(Nc),null,Me);function mg(){P.call(this,new Uf(Nc),F,Me)}ka(mg,P);h=mg.prototype;
	h.tc=function(a){return a===this?0:1};h.ca=function(a){return a===this};h.C=function(){return this};h.R=function(){return F};h.e=function(){return!1};var xe=new mg,ve=new K("[MIN_NAME]",F),Be=new K("[MAX_NAME]",xe);function W(a,b,c){this.A=a;this.W=b;this.g=c}W.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Ue=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Ue;W.prototype.Vf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Vf;
	W.prototype.m=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Kf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.m(b);return new W(this.A.Q(b),c,N)};W.prototype.child=W.prototype.m;W.prototype.Fa=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Kf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e()};W.prototype.hasChild=W.prototype.Fa;
	W.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new W(d,b.W.m(c),N))})};W.prototype.forEach=W.prototype.forEach;
	W.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey()};pd(W.prototype,"key",W.prototype.getKey);W.prototype.Fb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb()};W.prototype.numChildren=W.prototype.Fb;
	W.prototype.xb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};pd(W.prototype,"ref",W.prototype.xb);function Xd(a,b){this.O=a;this.Ld=b}function Ud(a,b,c,d){return new Xd(new Ec(b,c,d),a.Ld)}function Yd(a){return a.O.ea?a.O.j():null}Xd.prototype.u=function(){return this.Ld};function Fc(a){return a.Ld.ea?a.Ld.j():null};function ng(a,b){this.W=a;var c=a.n,d=new ee(c.g),c=S(c)?new ee(c.g):c.xa?new ke(c):new fe(c);this.of=new Od(c);var e=b.u(),f=b.O,g=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Xd(new Ec(k,f.ea,c.Qa()),new Ec(g,e.ea,d.Qa()));this.ab=[];this.Sf=new Jd(a)}function og(a){return a.W}h=ng.prototype;h.u=function(){return this.Na.u().j()};h.jb=function(a){var b=Fc(this.Na);return b&&(S(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null};h.e=function(){return 0===this.ab.length};h.Ob=function(a){this.ab.push(a)};
	h.mb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ja(this.ab,function(a){(a=a.Pe(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ab.length;++f){var g=this.ab[f];if(!g.matches(a))e.push(g);else if(a.af()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};
	h.gb=function(a,b,c){a.type===Gd&&null!==a.source.Ib&&(H(Fc(this.Na),"We should always have a full cache before handling merges"),H(Yd(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.of.gb(d,a,b,c);b=this.of;c=a.Sd;H(c.O.j().zc(b.V.g),"Event snap not indexed");H(c.u().j().zc(b.V.g),"Server snap not indexed");H(Ic(a.Sd.u())||!Ic(d.u()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return pg(this,a.Mf,a.Sd.O.j(),null)};
	function qg(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new I("child_added",b,a))});c.ea&&d.push(Gc(c.j()));return pg(a,d,c.j(),b)}function pg(a,b,c,d){return Kd(a.Sf,b,c,d?[d]:a.ab)};function rg(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}h=rg.prototype;h.tf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new yc("value",this,new W(a.Ma,b.xb(),c))};h.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};h.Pe=function(a,b){return this.sb?new zc(this,a,b):null};
	h.matches=function(a){return a instanceof rg?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1};h.af=function(){return null!==this.Qb};function sg(a,b,c){this.ha=a;this.sb=b;this.ub=c}h=sg.prototype;h.tf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};h.Pe=function(a,b){return this.sb?new zc(this,a,b):null};
	h.createEvent=function(a,b){H(null!=a.Za,"Child events should have a childName.");var c=b.xb().m(a.Za);return new yc(a.type,this,new W(a.Ma,c,b.n.g),a.Dd)};h.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};
	h.matches=function(a){if(a instanceof sg){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=qa(a.ha);if(b===qa(this.ha)){if(1===b){var b=ra(a.ha),c=ra(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return pa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};h.af=function(){return null!==this.ha};function X(a,b,c,d){this.w=a;this.path=b;this.n=c;this.Oc=d}
	function tg(a){var b=null,c=null;a.ka&&(b=he(a));a.na&&(c=je(a));if(a.g===de){if(a.ka){if("[MIN_NAME]"!=ge(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=ie(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Cf(b)||null!=c&&!Cf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof we||a.g===Ce,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function ug(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function vg(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}h=X.prototype;h.xb=function(){y("Query.ref",0,0,arguments.length);return new U(this.w,this.path)};
	h.hc=function(a,b,c,d){y("Query.on",2,4,arguments.length);If("Query.on",a,!1);A("Query.on",2,b,!1);var e=wg("Query.on",c,d);if("value"===a)xg(this.w,this,new rg(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;xg(this.w,this,new sg(f,e.cancel,e.Pa))}return b};
	h.Jc=function(a,b,c){y("Query.off",0,3,arguments.length);If("Query.off",a,!0);A("Query.off",2,b,!0);Eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new rg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new sg(e,null,c||null));e=this.w;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);uc(e.da,this.path,d)};
	h.kg=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),g.resolve(k))}y("Query.once",1,4,arguments.length);If("Query.once",a,!1);A("Query.once",2,b,!0);var d=wg("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new Hb;Jb(g.ra);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);g.reject(b)});return g.ra};
	h.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.ne(a),this.Oc)};
	h.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.oe(a),this.Oc)};
	h.lg=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Kf("Query.orderByChild",a);vg(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new we(b);b=Ge(this.n,b);tg(b);return new X(this.w,this.path,b,!0)};h.mg=function(){y("Query.orderByKey",0,0,arguments.length);vg(this,"Query.orderByKey");var a=Ge(this.n,de);tg(a);return new X(this.w,this.path,a,!0)};h.ng=function(){y("Query.orderByPriority",0,0,arguments.length);vg(this,"Query.orderByPriority");var a=Ge(this.n,N);tg(a);return new X(this.w,this.path,a,!0)};
	h.og=function(){y("Query.orderByValue",0,0,arguments.length);vg(this,"Query.orderByValue");var a=Ge(this.n,Ce);tg(a);return new X(this.w,this.path,a,!0)};h.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Df("Query.startAt",a,this.path,!0);Jf("Query.startAt",b);var c=this.n.Nd(a,b);ug(c);tg(c);if(this.n.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.w,this.path,c,this.Oc)};
	h.fd=function(a,b){y("Query.endAt",0,2,arguments.length);Df("Query.endAt",a,this.path,!0);Jf("Query.endAt",b);var c=this.n.fd(a,b);ug(c);tg(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.w,this.path,c,this.Oc)};
	h.Rf=function(a,b){y("Query.equalTo",1,2,arguments.length);Df("Query.equalTo",a,this.path,!1);Jf("Query.equalTo",b);if(this.n.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b)};
	h.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.w.toString()+(b||"/")};h.ya=function(){var a=kd(He(this.n));return"{}"===a?"default":a};
	function wg(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Pa=c,Eb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Db(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.kg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.lg;
	X.prototype.orderByKey=X.prototype.mg;X.prototype.orderByPriority=X.prototype.ng;X.prototype.orderByValue=X.prototype.og;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Rf;X.prototype.toString=X.prototype.toString;pd(X.prototype,"ref",X.prototype.xb);function yg(a,b){this.value=a;this.children=b||zg}var zg=new Uf(function(a,b){return a===b?0:a<b?-1:1});function Ag(a){var b=Q;t(a,function(a,d){b=b.set(new L(d),a)});return b}h=yg.prototype;h.e=function(){return null===this.value&&this.children.e()};function Bg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=Bg(a,D(b),c),null!=b?{path:(new L(d)).m(b.path),value:b.value}:null):null}
	function Cg(a,b){return Bg(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};h.set=function(a,b){if(a.e())return new yg(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new yg(this.value,c)};
	h.remove=function(a){if(a.e())return this.children.e()?Q:new yg(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new yg(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
	function ce(a,b,c){if(b.e())return c;var d=J(b);b=ce(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new yg(a.value,d)}function Dg(a,b){return Eg(a,C,b)}function Eg(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Eg(f,b.m(a),c)});return c(b,a.value,d)}function Fg(a,b,c){return Gg(a,b,C,c)}function Gg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?Gg(a,D(b),c.m(e),d):null}
	function Hg(a,b,c){Ig(a,b,C,c)}function Ig(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?Ig(a,D(b),c.m(e),d):Q}function ae(a,b){Jg(a,C,b)}function Jg(a,b,c){a.children.ia(function(a,e){Jg(e,b.m(a),c)});a.value&&c(b,a.value)}function Kg(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Q=new yg(null);yg.prototype.toString=function(){var a={};ae(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Lg(a,b,c){this.type=Td;this.source=Mg;this.path=a;this.Pb=b;this.Id=c}Lg.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return H(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new L(a));return new Lg(C,a,this.Id)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new Lg(D(this.path),this.Pb,this.Id)};
	Lg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")"};var ac=0,Gd=1,Td=2,cc=3;function Ng(a,b,c,d){this.ee=a;this.We=b;this.Ib=c;this.Ee=d;H(!d||b,"Tagged queries must be from server.")}var Mg=new Ng(!0,!1,null,!1),Og=new Ng(!1,!0,null,!1);Ng.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Ib+")":"server"};function Pg(a){this.X=a}var Qg=new Pg(new yg(null));function Rg(a,b,c){if(b.e())return new Pg(new yg(c));var d=Cg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new Pg(a.X.set(e,d))}a=ce(a.X,b,new yg(c));return new Pg(a)}function Sg(a,b,c){var d=a;Cb(c,function(a,c){d=Rg(d,b.m(a),c)});return d}Pg.prototype.Ed=function(a){if(a.e())return Qg;a=ce(this.X,a,Q);return new Pg(a)};function Tg(a,b){var c=Cg(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}
	function Ug(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new K(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function Vg(a,b){if(b.e())return a;var c=Tg(a,b);return null!=c?new Pg(new yg(c)):new Pg(a.X.subtree(b))}Pg.prototype.e=function(){return this.X.e()};Pg.prototype.apply=function(a){return Wg(C,this.X,a)};
	function Wg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Wg(a.m(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.m(".priority"),d));return c};function Xg(){this.Aa={}}h=Xg.prototype;h.e=function(){return xa(this.Aa)};h.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=x(this.Aa,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};h.Ob=function(a,b,c,d,e){var f=a.ya(),g=x(this.Aa,f);if(!g){var g=c.Ba(e?d:null),k=!1;g?k=!0:(g=d instanceof P?c.sc(d):F,k=!1);g=new ng(a,new Xd(new Ec(g,k,!1),new Ec(d,e,!1)));this.Aa[f]=g}g.Ob(b);return qg(g,b)};
	h.mb=function(a,b,c){var d=a.ya(),e=[],f=[],g=null!=Yg(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],S(a.W.n)||e.push(a.W))})}else{var m=x(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],S(m.W.n)||e.push(m.W)))}g&&null==Yg(this)&&e.push(new U(a.w,a.path));return{sg:e,Tf:f}};function Zg(a){return Ka(sa(a.Aa),function(a){return!S(a.W.n)})}h.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};
	function $g(a,b){if(S(b.n))return Yg(a);var c=b.ya();return x(a.Aa,c)}function Yg(a){return wa(a.Aa,function(a){return S(a.W.n)})||null};function ah(){this.T=Qg;this.la=[];this.Cc=-1}function bh(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}h=ah.prototype;
	h.Ed=function(a){var b=Pa(this.la,function(b){return b.Zc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var g=this.la[f];g.visible&&(f>=b&&ch(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=dh(this.la,eh,C),this.Cc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.m(b))})}return!0}return!1};
	h.Ba=function(a,b,c,d){if(c||d){var e=Vg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Tg(e,C)?(e=dh(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Tg(this.T,a);if(null!=e)return e;e=Vg(this.T,a);return e.e()?b:null!=b||null!=Tg(e,C)?(b=b||F,e.apply(b)):null};
	h.sc=function(a,b){var c=F,d=Tg(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Vg(this.T,a);b.P(N,function(a,b){var d=Vg(e,new L(a)).apply(b);c=c.U(a,d)});Ja(Ug(e),function(a){c=c.U(a.name,a.S)})}else e=Vg(this.T,a),Ja(Ug(e),function(a){c=c.U(a.name,a.S)});return c};h.$c=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.m(b);if(null!=Tg(this.T,a))return null;a=Vg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
	h.rc=function(a,b,c){a=a.m(b);var d=Tg(this.T,a);return null!=d?d:Dc(c,b)?Vg(this.T,a).apply(c.j().R(b)):null};h.mc=function(a){return Tg(this.T,a)};h.Xd=function(a,b,c,d,e,f){var g;a=Vg(this.T,a);g=Tg(a,C);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.ob(f);if(g.e()||g.J())return[];b=[];a=ne(f);e=e?g.$b(c,f):g.Yb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
	function ch(a,b){return a.Ja?a.path.contains(b):!!va(a.children,function(c,d){return a.path.m(d).contains(b)})}function eh(a){return a.visible}
	function dh(a,b,c){for(var d=Qg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ja)c.contains(g)?(g=T(c,g),d=Rg(d,g,f.Ja)):g.contains(c)&&(g=T(g,c),d=Rg(d,C,f.Ja.Q(g)));else if(f.children)if(c.contains(g))g=T(c,g),d=Sg(d,g,f.children);else{if(g.contains(c))if(g=T(g,c),g.e())d=Sg(d,C,f.children);else if(f=x(f.children,J(g)))f=f.Q(D(g)),d=Rg(d,C,f)}else throw Xc("WriteRecord should have .snap or .children");}}return d}function fh(a,b){this.Mb=a;this.X=b}h=fh.prototype;
	h.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};h.sc=function(a){return this.X.sc(this.Mb,a)};h.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};h.mc=function(a){return this.X.mc(this.Mb.m(a))};h.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};h.rc=function(a,b){return this.X.rc(this.Mb,a,b)};h.m=function(a){return new fh(this.Mb.m(a),this.X)};function gh(){this.children={};this.ad=0;this.value=null}function hh(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new gh}function ih(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new hh(e,d,x(d.A.children,e)||new gh),c=D(c);return d}h=hh.prototype;h.Ea=function(){return this.A.value};function jh(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;kh(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;kh(this)};
	h.kd=function(){return 0<this.A.ad};h.e=function(){return null===this.Ea()&&!this.kd()};h.P=function(a){var b=this;t(this.A.children,function(c,d){a(new hh(d,b,c))})};function lh(a,b,c,d){c&&!d&&b(a);a.P(function(a){lh(a,b,!0,d)});c&&d&&b(a)}function mh(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new L(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud)};h.name=function(){return this.ud};h.parent=function(){return this.Ha};
	function kh(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Bb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,kh(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,kh(b))}};function nh(a,b,c,d,e,f){this.id=oh++;this.f=cd("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Pc=0;this.Lc=[];this.ma=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.tg=0;this.Ve=!0;this.Bc=this.me=null;ph(this,0);Sf.Wb().hc("visible",this.jg,this);-1===
	a.host.indexOf("fblocal")&&Rf.Wb().hc("online",this.ig,this)}var oh=0,qh=0;h=nh.prototype;h.ua=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Ia.ua(a);c&&(this.Gd[d]=c)};
	h.df=function(a,b,c,d){var e=a.ya(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(Cd(a.n)||!S(a.n),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,pg:a,tag:c};this.$[f][e]=a;this.ma&&rh(this,a)};
	function rh(a,b){var c=b.pg,d=c.path.toString(),e=c.ya();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=He(c.n),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Bb(k,"w")){var l=x(k,"w");da(l)&&0<=Ia(l,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&sh(a,d,e),b.G&&b.G(m,
	k))})}h.qf=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?th(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||sd(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function th(a){if(a.ma&&a.pb){var b=a.pb,c=rd(b)?"auth":"gauth",d={cred:b};a.Je&&(d.authvar=a.Je);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.pb===b&&("ok"===d?this.ke=0:uh(a,d,c))})}}
	h.Ef=function(a,b){var c=a.path.toString(),d=a.ya();this.f("Unlisten called for "+c+" "+d);H(Cd(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(sh(this,c,d)&&this.ma){var e=He(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};h.re=function(a,b,c){this.ma?vh(this,"o",a,b,c):this.Lc.push({we:a,action:"o",data:b,G:c})};h.gf=function(a,b,c){this.ma?vh(this,"om",a,b,c):this.Lc.push({we:a,action:"om",data:b,G:c})};
	h.xd=function(a,b){this.ma?vh(this,"oc",a,null,b):this.Lc.push({we:a,action:"oc",data:null,G:b})};function vh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){wh(this,"p",a,b,c,d)};h.ef=function(a,b,c,d){wh(this,"m",a,b,c,d)};function wh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.pa.push({action:b,sf:d,G:e});a.Pc++;b=a.pa.length-1;a.ma?xh(a,b):a.f("Buffering put: "+c)}
	function xh(a,b){var c=a.pa[b].action,d=a.pa[b].sf,e=a.pa[b].G;a.pa[b].qg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Pc--;0===a.Pc&&(a.pa=[]);e&&e(d.s,d.d)})}h.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	h.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?yh(this,a.p,a.q):"ac"===b?uh(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):dd("Unrecognized action received from server: "+
	B(b)+"\nAre you using the latest client?"))}};h.Mc=function(a,b){this.f("connection ready");this.ma=!0;this.Bc=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Ve){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;Qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}zh(this);this.Ve=!1;this.Kc(!0)};
	function ph(a,b){H(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Ah(a)},Math.floor(b))}h.jg=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||ph(this,0));this.Nb=a};h.ig=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||ph(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
	h.jf=function(){this.f("data client disconnected");this.ma=!1;this.Ia=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.sf&&b.qg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Pc--)}0===this.Pc&&(this.pa=[]);this.Gd={};Bh(this)&&(this.Nb?this.Bc&&(3E4<(new Date).getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),ph(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};
	function Ah(a){if(Bh(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.jf,a),e=a.id+":"+qh++,f=a.Db,g=!1,k=null,m=function(){k?k.close():(g=!0,d())};a.Ia={close:m,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){g?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new af(e,a.M,b,c,d,function(b){O(b+
	" ("+a.M.toString()+")");a.eb("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);g||m()})}}h.eb=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.ma&&this.jf())};h.lc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];xa(this.qd)&&(this.Va=1E3,this.Ia||ph(this,0))};
	function yh(a,b,c){c=c?La(c,function(a){return kd(a)}).join("$"):"default";(a=sh(a,b,c))&&a.G&&a.G("permission_denied")}function sh(a,b,c){b=(new L(b)).toString();var d;p(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===qa(a.$[b])&&delete a.$[b]):d=void 0;return d}
	function uh(a,b,c){E("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.ke++,3<=a.ke&&(a.Va=3E4,O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))}
	function zh(a){th(a);t(a.$,function(b){t(b,function(b){rh(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&xh(a,b);for(;a.Lc.length;)b=a.Lc.shift(),vh(a,b.action,b.we,b.data,b.G)}function Bh(a){var b;b=Rf.Wb().ic;return xa(a.qd)&&b};var Y={Xf:function(){Qe=wd=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){Re=!0};Y.forceWebSockets=Y.Yf;Y.dg=function(){return vd.isAvailable()};Y.isWebSocketsAvailable=Y.dg;Y.wg=function(a,b){a.w.Ua.ze=b};Y.setSecurityDebugCallback=Y.wg;Y.Be=function(a,b){a.w.Be(b)};Y.stats=Y.Be;Y.Ce=function(a,b){a.w.Ce(b)};Y.statsIncrementCounter=Y.Ce;Y.ed=function(a){return a.w.ed};Y.dataUpdateCount=Y.ed;Y.cg=function(a,b){a.w.je=b};Y.interceptServerData=Y.cg;function Ch(a){this.wa=Q;this.lb=new ah;this.De={};this.jc={};this.Dc=a}function Dh(a,b,c,d,e){var f=a.lb,g=e;H(d>f.Cc,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.la.push({path:b,Ja:c,Zc:d,visible:g});g&&(f.T=Rg(f.T,b,c));f.Cc=d;return e?Eh(a,new $b(Mg,b,c)):[]}function Fh(a,b,c,d){var e=a.lb;H(d>e.Cc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.T=Sg(e.T,b,c);e.Cc=d;c=Ag(c);return Eh(a,new Fd(Mg,b,c))}
	function Gh(a,b,c){c=c||!1;var d=bh(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Cb(d.children,function(a,b){e=e.set(new L(a),b)});return Eh(a,new Lg(d.path,e,c))}return[]}function Hh(a,b,c){c=Ag(c);return Eh(a,new Fd(Og,b,c))}function Ih(a,b,c,d){d=Jh(a,d);if(null!=d){var e=Kh(d);d=e.path;e=e.Ib;b=T(d,b);c=new $b(new Ng(!1,!0,e,!0),b,c);return Lh(a,d,c)}return[]}
	function Mh(a,b,c,d){if(d=Jh(a,d)){var e=Kh(d);d=e.path;e=e.Ib;b=T(d,b);c=Ag(c);c=new Fd(new Ng(!1,!0,e,!0),b,c);return Lh(a,d,c)}return[]}
	Ch.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Hg(this.wa,c,function(a,b){var f=T(a,c);d=d||b.jb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.jb(C)):(f=new Xg,this.wa=this.wa.set(c,f));var g;null!=d?g=!0:(g=!1,d=F,Kg(this.wa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c))}));var k=null!=$g(f,a);if(!k&&!S(a.n)){var m=Nh(a);H(!(m in this.jc),"View does not exist, but we have a tag");var l=Oh++;this.jc[m]=l;this.De["_"+l]=m}g=f.Ob(a,b,new fh(c,this.lb),d,g);k||
	e||(f=$g(f,a),g=g.concat(Ph(this,a,f)));return g};
	Ch.prototype.mb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ya()||null!=$g(e,a))){f=e.mb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.sg;f=f.Tf;b=-1!==Pa(e,function(a){return S(a.n)});var g=Fg(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!g&&(d=this.wa.subtree(d),!d.e()))for(var d=Qh(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Rh(this,m);this.Dc.Ae(Sh(l),Th(this,l),m.ld,m.G)}if(!g&&0<e.length&&!c)if(b)this.Dc.Od(Sh(a),null);else{var u=this;Ja(e,function(a){a.ya();
	var b=u.jc[Nh(a)];u.Dc.Od(Sh(a),b)})}Uh(this,e)}return f};Ch.prototype.Ba=function(a,b){var c=this.lb,d=Fg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Qh(a){return Dg(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));t(d,function(a){e=e.concat(a)});return e})}function Uh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Nh(d),e=a.jc[d];delete a.jc[d];delete a.De["_"+e]}}}
	function Sh(a){return S(a.n)&&!Cd(a.n)?a.xb():a}function Ph(a,b,c){var d=b.path,e=Th(a,b);c=Rh(a,c);b=a.Dc.Ae(Sh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)H(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Dg(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[og(Yg(b))];var d=[];b&&(d=d.concat(La(Zg(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Sh(c),Th(a,c));return b}
	function Rh(a,b){var c=b.W,d=Th(a,c);return{ld:function(){return(b.u()||F).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=Jh(a,d)){var g=Kh(b);b=g.path;g=g.Ib;f=T(b,f);f=new bc(new Ng(!1,!0,g,!0),f);b=Lh(a,b,f)}else b=[]}else b=Eh(a,new bc(Og,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function Nh(a){return a.path.toString()+"$"+a.ya()}function Kh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new L(a.substr(0,b))}}function Jh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function Th(a,b){var c=Nh(b);return x(a.jc,c)}var Oh=1;
	function Lh(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new fh(b,a.lb),null)}function Eh(a,b){return Vh(a,b,a.wa,null,new fh(C,a.lb))}function Vh(a,b,c,d,e){if(b.path.e())return Wh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var g=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.m(k),g=g.concat(Vh(a,m,c,l,k));f&&(g=g.concat(f.gb(b,e,d)));return g}
	function Wh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var g=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.m(c),z=b.Nc(c);z&&(g=g.concat(Wh(a,z,f,l,u)))});f&&(g=g.concat(f.gb(b,e,d)));return g};function sf(a,b,c){this.app=c;var d=new dc(c);this.M=a;this.Xa=pc(a);this.Vc=null;this.da=new rc;this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Ad(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
	try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ua=new nh(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b)}var f=this;ec(d,function(a){f.va.qf(a)});this.zg=qc(a,r(function(){return new jc(this.Xa,this.va)},this));this.nc=new hh;this.ie=new fc;this.pd=new Ch({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=Eh(f.pd,new $b(Og,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:aa});Xh(this,"connected",!1);this.ja=new Rc;this.$a=new rf(this);this.ed=
	0;this.je=null;this.K=new Ch({Ae:function(a,b,c,d){f.va.df(a,c,b,function(b,c){var e=d(b,c);wc(f.da,a.path,e)});return[]},Od:function(a,b){f.va.Ef(a,b)}})}h=sf.prototype;h.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host};h.name=function(){return this.M.pe};function Yh(a){a=a.ie.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Zh(a){a=a={timestamp:Yh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	h.Hb=function(a,b,c,d){this.ed++;var e=new L(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=oa(b,function(a){return M(a)}),a=Mh(this.K,e,b,d)):(b=M(b),a=Ih(this.K,e,b,d)):c?(d=oa(b,function(a){return M(a)}),a=Hh(this.K,e,d)):(d=M(b),a=Eh(this.K,new $b(Og,e,d)));d=e;0<a.length&&(d=$h(this,e));wc(this.da,d,a)};h.Kc=function(a){Xh(this,"connected",a);!1===a&&ai(this)};h.ue=function(a){var b=this;md(a,function(a,d){Xh(b,d,a)})};
	function Xh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=Eh(a.pd,new $b(Og,b,c));wc(a.da,b,c)}h.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Gg:c});var e=Zh(this);b=M(b,c);var e=Uc(b,e),f=this.vd++,e=Dh(this.K,a,e,f,!0);sc(this.da,e);var g=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=Gh(g.K,f,!e);wc(g.da,a,e);bi(d,b,c)});e=ci(this,a);$h(this,e);wc(this.da,e,[])};
	h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Zh(this),f={};t(b,function(a,b){d=!1;var c=M(a);f[b]=Uc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),bi(c,"ok");else{var g=this.vd++,k=Fh(this.K,a,f,g);sc(this.da,k);var m=this;this.va.ef(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=Gh(m.K,g,!e),f=a;0<e.length&&(f=$h(m,a));wc(m.da,f,e);bi(c,b,d)});b=ci(this,a);$h(this,b);wc(this.da,a,[])}};
	function ai(a){a.f("onDisconnectEvents");var b=Zh(a),c=[];Sc(Qc(a.ja,b),C,function(b,e){c=c.concat(Eh(a.K,new $b(Og,b,e)));var f=ci(a,b);$h(a,f)});a.ja=new Rc;wc(a.da,C,c)}h.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&yf(c.ja,a);bi(b,d,e)})};function Mf(a,b,c,d){var e=M(c);a.va.re(b.toString(),e.H(!0),function(c,g){"ok"===c&&Tc(a.ja,b,e);bi(d,c,g)})}function Nf(a,b,c,d,e){var f=M(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Tc(a.ja,b,f);bi(e,c,d)})}
	function Of(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),bi(d,"ok")):a.va.gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=M(c[m]);Tc(a.ja,b.m(m),l)}bi(d,e,f)})}function xg(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);uc(a.da,b.path,c)}h.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt")};h.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt")};
	h.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new kc(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ma(ta(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Ce=function(a){mc(this.Xa,a);this.zg.zf[a]=!0};h.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");E(b,arguments)};
	function bi(a,b,c){a&&Ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function di(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new U(a,b);g.hc("value",f);c={path:b,update:c,G:d,status:null,lf:Wc(),Ie:e,wf:0,Rd:function(){g.Jc("value",f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Ef("transaction failed: Data returned ",d,c.path);c.status=1;e=ih(a.nc,b);var k=e.Ea()||[];k.push(c);jh(e,k);"object"===typeof d&&null!==d&&Bb(d,".priority")?(k=x(d,".priority"),H(Cf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.K.Ba(b)||F).C().H();e=Zh(a);d=M(d,k);e=Uc(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=Dh(a.K,b,e,c.Da,c.Ie);wc(a.da,b,c);ei(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new W(c.bd,new U(a,c.path),N),c.G(null,!1,a))}function ei(a,b){var c=b||a.nc;b||fi(a,c);if(null!==c.Ea()){var d=gi(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&hi(a,c.path(),d)}else c.kd()&&c.P(function(b){ei(a,b)})}
	function hi(a,b,c){for(var d=La(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];H(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.wf++;var k=T(b,g.path),d=d.F(k,g.cd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(Gh(a.K,c[f].Da));if(c[f].G){var g=c[f].dd,k=new U(a,c[f].path);d.push(r(c[f].G,
	null,null,!0,new W(g,k,N)))}c[f].Rd()}fi(a,ih(a.nc,b));ei(a);wc(a.da,b,e);for(f=0;f<d.length;f++)Ub(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;$h(a,b)}},e)}function $h(a,b){var c=ii(a,b),d=c.path(),c=gi(a,c);ji(a,c,d);return d}
	function ji(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Da}),g=0;g<b.length;g++){var k=b[g],m=T(c,k.path),l=!1,u;H(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(Gh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.wf)l=!0,u="maxretry",e=e.concat(Gh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[g].update(z.H());p(G)?(Ef("transaction failed: Data returned ",G,
	k.path),m=M(G),"object"===typeof G&&null!=G&&Bb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=Zh(a),G=Uc(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Qa(f,z),e=e.concat(Dh(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(Gh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(Gh(a.K,k.Da,!0)))}wc(a.da,c,e);e=[];l&&(b[g].status=3,setTimeout(b[g].Rd,Math.floor(0)),b[g].G&&("nodata"===u?(k=new U(a,b[g].path),d.push(r(b[g].G,null,null,!1,new W(b[g].bd,k,N)))):d.push(r(b[g].G,null,Error(u),!1,null))))}fi(a,a.nc);for(g=0;g<d.length;g++)Ub(d[g]);ei(a)}}
	function ii(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=ih(d,c),b=D(b);return d}function gi(a,b){var c=[];ki(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function ki(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){ki(a,b,c)})}function fi(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;jh(b,0<c.length?c:null)}b.P(function(b){fi(a,b)})}
	function ci(a,b){var c=ii(a,b).path(),d=ih(a.nc,b);mh(d,function(b){li(a,b)});li(a,d);lh(d,function(b){li(a,b)});return c}
	function li(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(H(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].Td="set"):(H(1===c[g].status,"Unexpected transaction status in abort"),c[g].Rd(),e=e.concat(Gh(a.K,c[g].Da,!0)),c[g].G&&d.push(r(c[g].G,null,Error("set"),!1,null))));-1===f?jh(b,null):c.length=f+1;wc(a.da,b.path(),e);for(g=0;g<d.length;g++)Ub(d[g])}};function xf(){this.nb={};this.Ff=!1}xf.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};xf.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};xf.prototype.ce=function(a){this.Ff=a};ba(xf);xf.prototype.interrupt=xf.prototype.eb;xf.prototype.resume=xf.prototype.lc;var Z={};Z.pc=nh;Z.DataConnection=Z.pc;nh.prototype.yg=function(a,b){this.ua("q",{p:a},b)};Z.pc.prototype.simpleListen=Z.pc.prototype.yg;nh.prototype.Qf=function(a,b){this.ua("echo",{d:a},b)};Z.pc.prototype.echo=Z.pc.prototype.Qf;nh.prototype.interrupt=nh.prototype.eb;Z.If=af;Z.RealTimeConnection=Z.If;af.prototype.sendRequest=af.prototype.ua;af.prototype.close=af.prototype.close;
	Z.bg=function(a){var b=nh.prototype.put;nh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){nh.prototype.put=b}};Z.hijackHash=Z.bg;Z.Hf=gc;Z.ConnectionTarget=Z.Hf;Z.ya=function(a){return a.ya()};Z.queryIdentifier=Z.ya;Z.eg=function(a){return a.w.Ua.$};Z.listens=Z.eg;Z.ce=function(a){xf.Wb().ce(a)};Z.forceRestClient=Z.ce;Z.Context=xf;function U(a,b){if(!(a instanceof sf))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,Ee,!1);this.then=void 0;this["catch"]=void 0}ka(U,X);h=U.prototype;h.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:$d(this.path)};
	h.m=function(a){y("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Kf("Firebase.child",b)}else Kf("Firebase.child",a);return new U(this.w,this.path.m(a))};h.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.w,a)};
	h.Zf=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};h.Pf=function(){return this.w.$a};h.set=function(a,b){y("Firebase.set",1,2,arguments.length);Lf("Firebase.set",this.path);Df("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new Hb;this.w.Kb(this.path,a,null,Ib(c,b));return c.ra};
	h.update=function(a,b){y("Firebase.update",1,2,arguments.length);Lf("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Gf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new Hb;this.w.update(this.path,a,Ib(c,b));return c.ra};
	h.Kb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Lf("Firebase.setWithPriority",this.path);Df("Firebase.setWithPriority",a,this.path,!1);Hf("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Hb;this.w.Kb(this.path,a,b,Ib(d,c));return d.ra};
	h.remove=function(a){y("Firebase.remove",0,1,arguments.length);Lf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
	h.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Lf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Db("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Hb;ga(b)&&Jb(d.ra);di(this.w,this.path,a,function(a,c,
	g){a?d.reject(a):d.resolve(new Pb(c,g));ga(b)&&b(a,c,g)},c);return d.ra};h.vg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Lf("Firebase.setPriority",this.path);Hf("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new Hb;this.w.Kb(this.path.m(".priority"),a,null,Ib(c,b));return c.ra};
	h.push=function(a,b){y("Firebase.push",0,2,arguments.length);Lf("Firebase.push",this.path);Df("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Yh(this.w),d=Tf(c),c=this.m(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.m(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Jb(f)}return c};h.kb=function(){Lf("Firebase.onDisconnect",this.path);return new V(this.w,this.path)};U.prototype.child=U.prototype.m;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
	U.prototype.setWithPriority=U.prototype.Kb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.vg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.kb;pd(U.prototype,"database",U.prototype.Pf);pd(U.prototype,"key",U.prototype.getKey);pd(U.prototype,"parent",U.prototype.getParent);pd(U.prototype,"root",U.prototype.Zf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
	try{firebase.INTERNAL.registerService("database",function(a){var b=xf.Wb(),c=a.options.databaseURL;p(c)||ed("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=fd(c),c=d.kc;wf("Invalid Firebase Database URL",d);d.path.e()||ed("Database URL must point to the root of a Firebase Database (not including a child path).");(d=x(b.nb,a.name))&&ed("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new sf(c,b.Ff,a);b.nb[a.name]=
	d;return d.$a},{Reference:U,Query:X,Database:rf,enableLogging:bd,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:uf})}catch(mi){ed("Failed to register the Firebase Database Service ("+mi+")")};})();

	(function() {var k,aa=aa||{},m=this,n=function(a){return void 0!==a},ba=function(){},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
	typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"string"==typeof a},r=function(a){return"function"==p(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ga=function(a,b,c){return a.call.apply(a.bind,
	arguments)},ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return t.apply(null,arguments)},ia=Date.now||function(){return+new Date},u=function(a,b){function c(){}
	c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.La=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ja=function(a,b,c){function d(){ya||(ya=!0,b.apply(null,arguments))}function e(b){l=setTimeout(function(){l=null;a(f,2===N)},b)}function f(a,b){if(!ya)if(a)d.apply(null,arguments);else if(2===N||F)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===N?(N=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){cc||(cc=!0,ya||(null!==l?(a||(N=2),clearTimeout(l),e(0)):a||(N=1)))}var h=1,l=null,F=!1,N=0,ya=!1,cc=!1;e(0);setTimeout(function(){F=!0;g(!0)},c);return g};var ka="https://firebasestorage.googleapis.com";var v=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};u(v,Error);
	var la=function(){return new v("unknown","An unknown error occurred, please check the error payload for server response.")},ma=function(){return new v("canceled","User canceled the upload/download.")},na=function(){return new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},oa=function(a,b,c){return new v("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},pa=function(){return new v("app-deleted","The Firebase app was deleted.")},qa=function(a,b){return new v("invalid-format",
	"String does not match format '"+a+"': "+b)};var ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){var b={};ra(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.l=a;this.f={};this.i=b;this.b={};this.c="";this.M=c;this.g=this.a=null;this.h=[200];this.j=d};var ta={STATE_CHANGED:"state_changed"},ua={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},va=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var x=function(a){return n(a)&&null!==a},wa=function(a){return"string"===typeof a||a instanceof String},xa=function(){return"undefined"!==typeof Blob};var za=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};za.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var Aa=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var Ba=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(Ba,Error);Ba.prototype.name="CustomError";var Ca=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Ca.prototype.a=null;var Da=0;Ca.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Da++;d||ia();this.b=b;delete this.a};var Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Fa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ha=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ia=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ja=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ka=function(a){Ka[" "](a);return a};Ka[" "]=ba;var Ma=function(a,b){var c=La;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Na=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},Oa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Pa=function(a,b){return a<b?-1:a>b?1:0};var Qa=function(a,b){this.a=a;this.b=b};var y=function(a,b){this.bucket=a;this.path=b},Ra=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Sa=function(a){for(var b=null,c=[{ia:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,ba:{bucket:1,path:3},ha:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{ia:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,ba:{bucket:1,path:3},ha:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
	c[d],f=e.ia.exec(a);if(f){b=f[e.ba.bucket];(f=f[e.ba.path])||(f="");b=new y(b,f);e.ha(b);break}}if(null==b)throw new v("invalid-url","Invalid URL '"+a+"'.");return b};var Ta=function(a,b,c){r(a)||x(b)||x(c)?(this.next=a,this.a=b||null,this.b=c||null):(this.next=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var Ua={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Va=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},Wa=function(a,b){this.data=a;this.a=b||null},$a=function(a,b){switch(a){case "raw":return new Wa(Xa(b));case "base64":case "base64url":return new Wa(Ya(a,b));case "data_url":return a=new Za(b),a=a.a?Ya("base64",a.c):Xa(a.c),new Wa(a,(new Za(b)).b)}throw la();
	},Xa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},Ya=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),
	d=-1!==b.indexOf("_");if(c||d)throw qa(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw qa(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(f){throw qa(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);return a},Za=function(a){var b=a.match(/^data:([^,]+)?,/);
	if(null===b)throw qa("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var bb=function(a){var b=encodeURIComponent,c="?";ra(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var z=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=z.prototype;k.oa=function(){return this.b};k.Ka=function(){return this.h};k.Ha=function(){return this.f};k.Ca=function(){return this.a};k.qa=function(){if(x(this.a)){var a=this.a.downloadURLs;return x(a)&&x(a[0])?a[0]:null}return null};k.Ja=function(){return this.g};k.Fa=function(){return this.c};var cb=function(a,b){b.unshift(a);Ba.call(this,Na.apply(null,b));b.shift()};u(cb,Ba);cb.prototype.name="AssertionError";
	var db=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new cb(""+e,f||[]);},A=function(a,b,c){a||db("",null,b,Array.prototype.slice.call(arguments,2))},eb=function(a,b){throw new cb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},fb=function(a,b,c){r(a)||db("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2))};var B=function(){this.g=this.g;this.o=this.o};B.prototype.g=!1;B.prototype.ea=function(){this.g||(this.g=!0,this.C())};B.prototype.C=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var gb="closure_listenable_"+(1E6*Math.random()|0),hb=0;var ib;a:{var jb=m.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}var C=function(a){return-1!=ib.indexOf(a)};var lb=function(){};lb.prototype.a=null;var nb=function(a){var b;(b=a.a)||(b={},mb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var ob=Array.prototype.indexOf?function(a,b,c){A(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pb=Array.prototype.forEach?function(a,b,c){A(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},qb=Array.prototype.filter?function(a,
	b,c){A(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l)}return e},rb=Array.prototype.map?function(a,b,c){A(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},sb=Array.prototype.some?function(a,b,c){A(null!=a.length);return Array.prototype.some.call(a,
	b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},ub=function(a){var b;a:{b=tb;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]},vb=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},wb=function(a,b){b=ob(a,b);var c;if(c=0<=b)A(null!=a.length),Array.prototype.splice.call(a,b,1);return c},xb=function(a){var b=
	a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var zb=new za(function(){return new yb},function(a){a.reset()},100),Bb=function(){var a=Ab,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},yb=function(){this.next=this.b=this.a=null};yb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};yb.prototype.reset=function(){this.next=this.b=this.a=null};var Cb=function(a,b){this.type=a;this.a=this.target=b;this.ja=!0};Cb.prototype.b=function(){this.ja=!1};var Db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.V=!!d;this.M=e;++hb;this.N=this.U=!1},Eb=function(a){a.N=!0;a.listener=null;a.a=null;a.src=null;a.M=null};var Fb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Gb=function(a,b){b=qb(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Hb=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var Ib=function(a){this.src=a;this.a={};this.b=0},Kb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Jb(b,c,e,f);-1<h?(a=b[h],d||(a.U=!1)):(a=new Db(c,a.src,g,!!e,f),a.U=d,b.push(a));return a},Lb=function(a,b){var c=b.type;c in a.a&&wb(a.a[c],b)&&(Eb(b),0==a.a[c].length&&(delete a.a[c],a.b--))},Jb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.N&&f.listener==b&&f.V==!!c&&f.M==d)return e}return-1};var Mb,Nb=function(){};u(Nb,lb);var Ob=function(a){return(a=mb(a))?new ActiveXObject(a):new XMLHttpRequest},mb=function(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b};Mb=new Nb;var Pb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Pb){if(b=a.H(),a=a.A(),0>=this.b()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Qa(b[d],a[d]));break a}}else b=Fa(a),a=Ea(a);for(d=0;d<b.length;d++)Qb(this,b[d],a[d])}},Qb=function(a,b,c){var d=a.a;d.push(new Qa(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c};Pb.prototype.A=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
	Pb.prototype.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};Pb.prototype.b=function(){return this.a.length};var Rb=function(){this.c=[];this.a=[]},Sb=function(a){0==a.c.length&&(a.c=a.a,a.c.reverse(),a.a=[]);return a.c.pop()};Rb.prototype.b=function(){return this.c.length+this.a.length};Rb.prototype.A=function(){for(var a=[],b=this.c.length-1;0<=b;--b)a.push(this.c[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};var Tb=function(a){if(a.A&&"function"==typeof a.A)return a.A();if(q(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ea(a)},Ub=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||q(a))pb(a,b,void 0);else{var c;if(a.H&&"function"==typeof a.H)c=a.H();else if(a.A&&"function"==typeof a.A)c=void 0;else if(ca(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Fa(a);for(var d=Tb(a),e=d.length,f=0;f<e;f++)b.call(void 0,
	d[f],c&&c[f],a)}};var Vb=function(a){m.setTimeout(function(){throw a;},0)},Wb,Xb=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.da;c.da=null;a()}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}};var Yb="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},Zb=function(){};Zb.prototype.next=function(){throw Yb;};Zb.prototype.h=function(){return this};var $b=function(){Pb.call(this)};u($b,Pb);var ac=C("Opera"),D=C("Trident")||C("MSIE"),bc=C("Edge"),dc=C("Gecko")&&!(-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),ec=-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"),fc=function(){var a=m.document;return a?a.documentMode:void 0},gc;
	a:{var hc="",ic=function(){var a=ib;if(dc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ec)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ic&&(hc=ic?ic[1]:"");if(D){var jc=fc();if(null!=jc&&jc>parseFloat(hc)){gc=String(jc);break a}}gc=hc}
	var kc=gc,La={},E=function(a){return Ma(a,function(){for(var b=0,c=Oa(String(kc)).split("."),d=Oa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Pa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Pa(0==g[2].length,0==h[2].length)||Pa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},lc=m.document,
	mc=lc&&D?fc()||("CSS1Compat"==lc.compatMode?parseInt(kc,10):5):void 0;var qc=function(a,b){nc||oc();pc||(nc(),pc=!0);var c=Ab,d=zb.get();d.set(a,b);c.b?c.b.next=d:(A(!c.a),c.a=d);c.b=d},nc,oc=function(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);nc=function(){a.then(rc)}}else nc=function(){var a=rc;!r(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Wb||(Wb=Xb()),Wb(a)):m.setImmediate(a)}},pc=!1,Ab=new function(){this.b=this.a=null},rc=function(){for(var a;a=Bb();){try{a.a.call(a.b)}catch(b){Vb(b)}Aa(zb,
	a)}pc=!1};var sc;(sc=!D)||(sc=9<=Number(mc));var tc=sc,uc=D&&!E("9");!ec||E("528");dc&&E("1.9b")||D&&E("8")||ac&&E("9.5")||ec&&E("528");dc&&!E("8")||D&&E("9");var G=function(a,b){this.c={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof G?(c=a.H(),d=a.A()):(c=Fa(a),d=Ea(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};G.prototype.b=function(){return this.f};G.prototype.A=function(){vc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};G.prototype.H=function(){vc(this);return this.a.concat()};
	var wc=function(a,b){return Object.prototype.hasOwnProperty.call(a.c,b)?(delete a.c[b],a.f--,a.g++,a.a.length>2*a.f&&vc(a),!0):!1},vc=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};
	G.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b};G.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.a.push(a),this.g++);this.c[a]=b};G.prototype.forEach=function(a,b){for(var c=this.H(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
	G.prototype.h=function(a){vc(this);var b=0,c=this.g,d=this,e=new Zb;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Yb;var e=d.a[b++];return a?e:d.c[e]};return e};var xc=function(a,b){Cb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&dc)try{Ka(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&&this.b()}};u(xc,Cb);xc.prototype.b=function(){xc.I.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var H=function(a,b){this.a=0;this.i=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){yc(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}yc(c,3,a)})}catch(d){yc(this,3,d)}},zc=function(){this.next=this.f=this.c=this.a=this.b=null;this.g=!1};zc.prototype.reset=function(){this.f=this.c=this.a=this.b=null;this.g=!1};
	var Ac=new za(function(){return new zc},function(a){a.reset()},100),Bc=function(a,b,c){var d=Ac.get();d.a=a;d.c=b;d.f=c;return d},Cc=function(a){if(a instanceof H)return a;var b=new H(ba);yc(b,2,a);return b},Dc=function(a){return new H(function(b,c){c(a)})};
	H.prototype.then=function(a,b,c){null!=a&&fb(a,"opt_onFulfilled should be a function.");null!=b&&fb(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ec(this,r(a)?a:null,r(b)?b:null,c)};Ia(H);H.prototype.l=function(a,b){return Ec(this,null,a,b)};
	var Gc=function(a,b){a.b||2!=a.a&&3!=a.a||Fc(a);A(null!=b.a);a.c?a.c.next=b:a.b=b;a.c=b},Ec=function(a,b,c,d){var e=Bc(null,null,null);e.b=new H(function(a,g){e.a=b?function(c){try{var e=b.call(d,c);a(e)}catch(F){g(F)}}:a;e.c=c?function(b){try{var e=c.call(d,b);a(e)}catch(F){g(F)}}:g});e.b.f=a;Gc(a,e);return e.b};H.prototype.o=function(a){A(1==this.a);this.a=0;yc(this,2,a)};H.prototype.m=function(a){A(1==this.a);this.a=0;yc(this,3,a)};
	var yc=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.o,g=a.m;if(e instanceof H)null!=f&&fb(f,"opt_onFulfilled should be a function."),null!=g&&fb(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Gc(e,Bc(f||ba,g||null,a)),d=!0;else if(Ja(e))e.then(f,g,a),d=!0;else{if(da(e))try{var h=e.then;if(r(h)){Hc(e,h,f,g,a);d=!0;break a}}catch(l){g.call(a,l);d=!0;break a}d=!1}}d||
	(a.i=c,a.a=b,a.f=null,Fc(a),3!=b||Ic(a,c))}},Hc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(l){h(l)}},Fc=function(a){a.h||(a.h=!0,qc(a.j,a))},Jc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);null!=b&&A(null!=b.a);return b};
	H.prototype.j=function(){for(var a;a=Jc(this);){var b=this.a,c=this.i;if(3==b&&a.c&&!a.g){var d;for(d=this;d&&d.g;d=d.f)d.g=!1}if(a.b)a.b.f=null,Kc(a,b,c);else try{a.g?a.a.call(a.f):Kc(a,b,c)}catch(e){Lc.call(null,e)}Aa(Ac,a)}this.h=!1};var Kc=function(a,b,c){2==b?a.a.call(a.f,c):a.c&&a.c.call(a.f,c)},Ic=function(a,b){a.g=!0;qc(function(){a.g&&Lc.call(null,b)})},Lc=Vb;var Nc=function(a){this.a=new G;if(a){a=Tb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Mc(d),d)}}},Mc=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[ea]||(a[ea]=++fa)):b.substr(0,1)+a};Nc.prototype.b=function(){return this.a.b()};Nc.prototype.A=function(){return this.a.A()};Nc.prototype.h=function(){return this.a.h(!1)};var Oc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);Cc(!0).then(function(){a.apply(null,b)})}};var Pc="closure_lm_"+(1E6*Math.random()|0),Qc={},Rc=0,Sc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Sc(a,b[f],c,d,e);return null}c=Tc(c);a&&a[gb]?(Uc(a),a=Kb(a.b,String(b),c,!1,d,e)):a=Vc(a,b,c,!1,d,e);return a},Vc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Wc(a);h||(a[Pc]=h=new Ib(a));c=Kb(h,b,c,d,e,f);if(c.a)return c;d=Xc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Yc(b.toString()),
	d);else throw Error("addEventListener and attachEvent are unavailable.");Rc++;return c},Xc=function(){var a=Zc,b=tc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},$c=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)$c(a,b[f],c,d,e);else c=Tc(c),a&&a[gb]?Kb(a.b,String(b),c,!0,d,e):Vc(a,b,c,!0,d,e)},ad=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)ad(a,b[f],c,d,e);else(c=Tc(c),a&&a[gb])?(a=a.b,b=String(b).toString(),
	b in a.a&&(f=a.a[b],c=Jb(f,c,d,e),-1<c&&(Eb(f[c]),A(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Wc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Jb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&bd(c))},bd=function(a){if("number"!=typeof a&&a&&!a.N){var b=a.src;if(b&&b[gb])Lb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.V):b.detachEvent&&b.detachEvent(Yc(c),d);Rc--;(c=Wc(b))?(Lb(c,a),0==c.b&&(c.src=null,b[Pc]=null)):Eb(a)}}},Yc=function(a){return a in
	Qc?Qc[a]:Qc[a]="on"+a},dd=function(a,b,c,d){var e=!0;if(a=Wc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.V==c&&!f.N&&(f=cd(f,d),e=e&&!1!==f)}return e},cd=function(a,b){var c=a.listener,d=a.M||a.src;a.U&&bd(a);return c.call(d,b)},Zc=function(a,b){if(a.N)return!0;if(!tc){if(!b)a:{b=["window","event"];for(var c=m,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new xc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=
	-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=dd(d[e],a,!0,b),c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=dd(d[e],a,!1,b),c=c&&f}return c}return cd(a,new xc(b,this))},Wc=function(a){a=a[Pc];return a instanceof Ib?a:null},ed="__closure_events_fn_"+(1E9*Math.random()>>>0),Tc=function(a){A(a,"Listener can not be null.");if(r(a))return a;A(a.handleEvent,"An object listener must have handleEvent method.");
	a[ed]||(a[ed]=function(b){return a.handleEvent(b)});return a[ed]};var I=function(a,b){B.call(this);this.m=a||0;this.f=b||10;if(this.m>this.f)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Rb;this.c=new Nc;this.j=null;this.T()};u(I,B);I.prototype.X=function(){var a=ia();if(!(null!=this.j&&0>a-this.j)){for(var b;0<this.a.b()&&(b=Sb(this.a),!this.l(b));)this.T();!b&&this.b()<this.f&&(b=this.i());b&&(this.j=a,this.c.a.set(Mc(b),b));return b}};var gd=function(a){var b=fd;wc(b.c.a,Mc(a))&&b.$(a)};
	I.prototype.$=function(a){wc(this.c.a,Mc(a));this.l(a)&&this.b()<this.f?this.a.a.push(a):hd(a)};I.prototype.T=function(){for(var a=this.a;this.b()<this.m;){var b=this.i();a.a.push(b)}for(;this.b()>this.f&&0<this.a.b();)hd(Sb(a))};I.prototype.i=function(){return{}};var hd=function(a){if("function"==typeof a.ea)a.ea();else for(var b in a)a[b]=null};I.prototype.l=function(a){return"function"==typeof a.pa?a.pa():!0};I.prototype.b=function(){return this.a.b()+this.c.b()};
	I.prototype.C=function(){I.I.C.call(this);if(0<this.c.b())throw Error("[goog.structs.Pool] Objects not released");delete this.c;for(var a=this.a;0!=a.c.length||0!=a.a.length;)hd(Sb(a));delete this.a};/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var id=function(a,b){this.c=[];this.m=b||null;this.a=this.h=!1;this.b=void 0;this.j=this.g=!1;this.f=0;this.i=null;this.o=0};id.prototype.l=function(a,b){this.g=!1;this.h=!0;this.b=b;this.a=!a;jd(this)};var kd=function(a,b,c){A(!a.j,"Blocking Deferreds can not be re-used");a.c.push([b,c,void 0]);a.h&&jd(a)};id.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});kd(this,d,function(a){e(a)});return f.then(a,b,c)};Ia(id);
	var ld=function(a){return sb(a.c,function(a){return r(a[1])})},jd=function(a){if(a.f&&a.h&&ld(a)){var b=a.f,c=md[b];c&&(m.clearTimeout(c.a),delete md[b]);a.f=0}a.i&&(a.i.o--,delete a.i);for(var b=a.b,d=c=!1;a.c.length&&!a.g;){var e=a.c.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.m,b);n(h)&&(a.a=a.a&&(h==b||h instanceof Error),a.b=b=h);if(Ja(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.g=!0}catch(l){b=l,a.a=!0,ld(a)||(c=!0)}}a.b=b;d&&(h=t(a.l,a,!0),d=t(a.l,a,
	!1),b instanceof id?(kd(b,h,d),b.j=!0):b.then(h,d));c&&(b=new nd(b),md[b.a]=b,a.f=b.a)},nd=function(a){this.a=m.setTimeout(t(this.c,this),0);this.b=a};nd.prototype.c=function(){A(md[this.a],"Cannot throw an error that is not scheduled.");delete md[this.a];throw this.b;};var md={};var od=function(a){this.f=a;this.b=this.c=this.a=null},pd=function(a,b){this.name=a;this.value=b};pd.prototype.toString=function(){return this.name};var qd=new pd("SEVERE",1E3),rd=new pd("CONFIG",700),sd=new pd("FINE",500),td=function(a){if(a.c)return a.c;if(a.a)return td(a.a);eb("Root logger has no level set.");return null};
	od.prototype.log=function(a,b,c){if(a.value>=td(this).value)for(r(b)&&(b=b()),a=new Ca(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a};
	var ud={},vd=null,wd=function(a){vd||(vd=new od(""),ud[""]=vd,vd.c=rd);var b;if(!(b=ud[a])){b=new od(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=wd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;ud[a]=b}return b};var xd=function(){B.call(this);this.b=new Ib(this);this.Z=this;this.G=null};u(xd,B);xd.prototype[gb]=!0;xd.prototype.removeEventListener=function(a,b,c,d){ad(this,a,b,c,d)};
	var J=function(a,b){Uc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),A(1E3>++e,"infinite loop")}a=a.Z;d=b.type||b;q(b)?b=new Cb(b,a):b instanceof Cb?b.target=b.target||a:(e=b,b=new Cb(d,a),Ha(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=yd(f,d,!0,b)&&e;f=b.a=a;e=yd(f,d,!0,b)&&e;e=yd(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=yd(f,d,!1,b)&&e};
	xd.prototype.C=function(){xd.I.C.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.a[c];a.b--}}this.G=null};var yd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.N&&g.V==c){var h=g.listener,l=g.M||g.src;g.U&&Lb(a.b,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.ja},Uc=function(a){A(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var K=function(a,b){this.h=new $b;I.call(this,a,b)};u(K,I);k=K.prototype;k.X=function(a,b){if(!a)return K.I.X.call(this);Qb(this.h,n(b)?b:100,a);this.aa()};k.aa=function(){for(var a=this.h;0<a.b();){var b=this.X();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)vb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,l=2*e+2,h=l<f&&d[l].a<d[h].a?l:h;if(d[h].a>g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};
	k.$=function(a){K.I.$.call(this,a);this.aa()};k.T=function(){K.I.T.call(this);this.aa()};k.C=function(){K.I.C.call(this);m.clearTimeout(void 0);vb(this.h.a);this.h=null};var L=function(a,b){a&&a.log(sd,b,void 0)};var zd=function(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)};var M=function(a){xd.call(this);this.K=new G;this.B=a||null;this.c=!1;this.w=this.a=null;this.O=this.l="";this.J=0;this.h="";this.f=this.F=this.j=this.D=!1;this.i=0;this.m=null;this.S="";this.u=this.ca=this.Y=!1};u(M,xd);var Ad=M.prototype,Bd=wd("goog.net.XhrIo");Ad.v=Bd;var Cd=/^https?$/i,Dd=["POST","PUT"];
	M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.J=0;this.O=b;this.D=!1;this.c=!0;this.a=this.B?Ob(this.B):Ob(Mb);this.w=this.B?nb(this.B):nb(Mb);this.a.onreadystatechange=t(this.R,this);this.ca&&"onprogress"in this.a&&(this.a.onprogress=t(function(a){this.P(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=t(this.P,this)));try{L(this.v,O(this,"Opening Xhr")),
	this.F=!0,this.a.open(b,String(a),!0),this.F=!1}catch(f){L(this.v,O(this,"Error opening Xhr: "+f.message));Ed(this,f);return}a=c||"";var e=new G(this.K);d&&Ub(d,function(a,b){e.set(b,a)});d=ub(e.H());c=m.FormData&&a instanceof m.FormData;!(0<=ob(Dd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.S&&(this.a.responseType=this.S);"withCredentials"in this.a&&this.a.withCredentials!==this.Y&&(this.a.withCredentials=
	this.Y);try{Fd(this),0<this.i&&(this.u=Gd(this.a),L(this.v,O(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.u)),this.u?(this.a.timeout=this.i,this.a.ontimeout=t(this.L,this)):this.m=zd(this.L,this.i,this)),L(this.v,O(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1}catch(f){L(this.v,O(this,"Send error: "+f.message)),Ed(this,f)}};var Gd=function(a){return D&&E(9)&&"number"==typeof a.timeout&&n(a.ontimeout)},tb=function(a){return"content-type"==a.toLowerCase()};
	M.prototype.L=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.J=8,L(this.v,O(this,this.h)),J(this,"timeout"),Hd(this,8))};var Ed=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.J=5;Id(a);Kd(a)},Id=function(a){a.D||(a.D=!0,J(a,"complete"),J(a,"error"))},Hd=function(a,b){a.a&&a.c&&(L(a.v,O(a,"Aborting")),a.c=!1,a.f=!0,a.a.abort(),a.f=!1,a.J=b||7,J(a,"complete"),J(a,"abort"),Kd(a))};
	M.prototype.C=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Kd(this,!0));M.I.C.call(this)};M.prototype.R=function(){this.g||(this.F||this.j||this.f?Ld(this):this.la())};M.prototype.la=function(){Ld(this)};
	var Ld=function(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==Md(a)&&2==P(a))L(a.v,O(a,"Local request error detected and ignored"));else if(a.j&&4==Md(a))zd(a.R,0,a);else if(J(a,"readystatechange"),4==Md(a)){L(a.v,O(a,"Request complete"));a.c=!1;try{if(Nd(a))J(a,"complete"),J(a,"success");else{a.J=6;var b;try{b=2<Md(a)?a.a.statusText:""}catch(c){L(a.v,"Can not get status: "+c.message),b=""}a.h=b+" ["+P(a)+"]";Id(a)}}finally{Kd(a)}}};
	M.prototype.P=function(a,b){A("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");J(this,Od(a,"progress"));J(this,Od(a,b?"downloadprogress":"uploadprogress"))};
	var Od=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Kd=function(a,b){if(a.a){Fd(a);var c=a.a,d=a.w[0]?ba:null;a.a=null;a.w=null;b||J(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.v)&&a.log(qd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Fd=function(a){a.a&&a.u&&(a.a.ontimeout=null);"number"==typeof a.m&&(m.clearTimeout(a.m),a.m=null)},Nd=function(a){var b=P(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=
	!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(Fb)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!Cd.test(a?a.toLowerCase():"");c=b}return c},Md=function(a){return a.a?a.a.readyState:0},P=function(a){try{return 2<Md(a)?a.a.status:-1}catch(b){return-1}},Pd=function(a){try{return a.a?a.a.responseText:""}catch(b){return L(a.v,"Can not get responseText: "+b.message),""}},Qd=function(a,b){return a.a&&4==Md(a)?a.a.getResponseHeader(b):void 0},
	O=function(a,b){return b+" ["+a.O+" "+a.l+" "+P(a)+"]"};var Rd=function(a,b,c,d){this.u=a;this.w=!!d;K.call(this,b,c)};u(Rd,K);Rd.prototype.i=function(){var a=new M,b=this.u;b&&b.forEach(function(b,d){a.K.set(d,b)});this.w&&(a.Y=!0);return a};Rd.prototype.l=function(a){return!a.g&&!a.a};var fd=new Rd;var Td=function(a,b,c,d,e,f,g,h,l,F){this.K=a;this.F=b;this.w=c;this.m=d;this.G=e.slice();this.l=this.o=this.f=this.c=null;this.h=this.i=!1;this.u=f;this.j=g;this.g=l;this.L=F;this.D=h;var N=this;this.B=new H(function(a,b){N.o=a;N.l=b;Sd(N)})},Ud=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Sd=function(a){function b(a,b){b?a(!1,new Ud(!1,null,!0)):fd.X(function(b){b.Y=d.L;d.c=b;var c=null;null!==d.g&&(b.ca=!0,c=Sc(b,"uploadprogress",function(a){d.g(a.loaded,a.lengthComputable?a.total:-1)}),b.ca=
	null!==d.g);b.send(d.K,d.F,d.m,d.w);$c(b,"complete",function(b){null!==c&&bd(c);d.c=null;b=b.target;var f=6===b.J&&100<=P(b),f=Nd(b)||f,g=P(b);!f||500<=g&&600>g||429===g?(f=7===b.J,gd(b),a(!1,new Ud(!1,null,f))):(f=0<=ob(d.G,g),a(!0,new Ud(f,b)))})})}function c(a,b){var c=d.o;a=d.l;var h=b.c;if(b.b)try{var l=d.u(h,Pd(h));n(l)?c(l):c()}catch(F){a(F)}else null!==h?(b=la(),l=Pd(h),b.serverResponse=l,d.j?a(d.j(h,b)):a(b)):(b=b.a?d.h?pa():ma():new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),
	a(b));gd(h)}var d=a;a.i?c(0,new Ud(!1,null,!0)):a.f=ja(b,c,a.D)};Td.prototype.a=function(){return this.B};Td.prototype.b=function(a){this.i=!0;this.h=a||!1;null!==this.f&&(0,this.f)(!1);null!==this.c&&Hd(this.c)};var Vd=function(a,b,c){var d=bb(a.f),d=a.l+d,e=a.b?sa(a.b):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Td(d,a.i,e,a.c,a.h,a.M,a.a,a.j,a.g,c)};var Wd=function(a){var b=m.BlobBuilder||m.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=xb(arguments);c=m.BlobBuilder||m.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(m.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},Xd=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
	c):a.slice?dc&&!E("13.0")||ec&&!E("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var Q=function(a,b){xa()&&a instanceof Blob?(this.s=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.s=new Uint8Array(a):(this.s=new Uint8Array(a.byteLength),this.s.set(new Uint8Array(a))),b=this.s.length):(b?this.s=a:(this.s=new Uint8Array(a.length),this.s.set(a)),b=a.length),a="");this.a=b;this.b=a};Q.prototype.type=function(){return this.b};
	Q.prototype.slice=function(a,b){if(xa()&&this.s instanceof Blob)return a=Xd(this.s,a,b),null===a?null:new Q(a);a=new Uint8Array(this.s.buffer,a,b-a);return new Q(a,!0)};
	var Yd=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(xa())return b=rb(b,function(a){return a instanceof Q?a.s:a}),new Q(Wd.apply(null,b));var b=rb(b,function(a){return wa(a)?$a("raw",a).data.buffer:a.s.buffer}),c=0;pb(b,function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;pb(b,function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new Q(d,!0)};var Zd=function(a){this.c=Dc(a)};Zd.prototype.a=function(){return this.c};Zd.prototype.b=function(){};var $d=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},ae=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},be=function(a){ra(a.a,function(a,c){c&&c.b(!0)});a.a={}};var ce=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,x(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Sa(a)}catch(f){}if(null!==e){if(""!==e.path)throw new v("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=e.bucket}}this.g=a}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new $d;this.f=!1},de=function(a){return null!==a.a&&x(a.a.INTERNAL)&&x(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return x(a)?a.accessToken:
	null},function(){return null}):Cc(null)};ce.prototype.bucket=function(){if(this.f)throw pa();return this.g};var R=function(a,b,c){if(a.f)return new Zd(pa());b=a.j(b,c,null===a.a);ae(a.h,b);return b};var ee=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.f=!!c;this.a=d||ee},fe=null,ge=function(){if(fe)return fe;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!wa(b)||2>b.length?b:Hb(b)};a.push(b);b=new S("size");b.a=function(a,b){return x(b)?+b:b};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));a.push(new S("cacheControl",
	null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(wa(b)&&0<b.length))return[];var e=encodeURIComponent;return rb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+e(a.bucket)+"/o/"+e(d));b=bb({alt:"media",token:b});return d+
	b})}));return fe=a},he=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new y(a.bucket,a.fullPath))}})},ie=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.f&&(c[f.c]=a[f.b])}return JSON.stringify(c)},je=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new v("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw oa(f,a,g.message);throw oa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
	this.b=!!b},ke=function(a,b){return function(c){a(c);b(c)}},le=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=ke(c,a):d=c;return new U(d,b)},me=function(){return new U(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||xa()&&a instanceof Blob))throw"Expected Blob or File.";})},ne=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},oe=function(a,
	b){return new U(function(b){if(!(null===b||x(b)&&b instanceof Object))throw"Expected an Object.";x(a)&&a(b)},b)},pe=function(){return new U(function(a){if(null!==a&&!r(a))throw"Expected a Function.";},!0)};var qe=function(a){if(!a)throw la();},re=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=da(e)?e:null}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}he(d,a);c=d}qe(null!==c);return c}},se=function(a){return function(b,c){b=401===P(b)?new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===P(b)?new v("quota-exceeded","Quota for bucket '"+
	a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===P(b)?new v("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},te=function(a){var b=se(a);return function(c,d){var e=b(c,d);404===P(c)&&(e=new v("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},ue=function(a,b,c){var d=Ra(b);a=new w(ka+"/v0"+d,"GET",re(a,c),a.c);a.a=te(b);return a},ve=function(a,
	b){var c=Ra(b);a=new w(ka+"/v0"+c,"DELETE",function(){},a.c);a.h=[200,204];a.a=te(b);return a},we=function(a,b,c){c=c?sa(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},xe=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var l=0;2>l;l++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=we(b,d,e);l=ie(e,c);d=Yd("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+
	l+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw na();a=new w(ka+"/v0"+f,"POST",re(a,c),a.b);a.f={name:e.fullPath};a.b=g;a.c=d.s;a.a=se(b);return a},ye=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},ze=function(a,b){var c;try{c=Qd(a,"X-Goog-Upload-Status")}catch(d){qe(!1)}a=0<=ob(b||["active"],c);qe(a);return c},Ae=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=we(b,d,e);e={name:g.fullPath};f=ka+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable",
	"X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=ie(g,c);a=new w(f,"POST",function(a){ze(a);var b;try{b=Qd(a,"X-Goog-Upload-URL")}catch(c){qe(!1)}qe(wa(b));return b},a.b);a.f=e;a.b=d;a.c=c;a.a=se(b);return a},Be=function(a,b,c,d){a=new w(c,"POST",function(a){var b=ze(a,["active","final"]),c;try{c=Qd(a,"X-Goog-Upload-Size-Received")}catch(h){qe(!1)}a=c;isFinite(a)&&(a=String(a));
	a=q(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;qe(!isNaN(a));return new ye(a,d.a,"final"===b)},a.b);a.b={"X-Goog-Upload-Command":"query"};a.a=se(b);return a},Ce=function(a,b,c,d,e,f){var g=new ye(0,0);f?(g.a=f.a,g.total=f.total):(g.a=0,g.total=d.a);if(d.a!==g.total)throw new v("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var h=f=g.total-g.a,h=Math.min(h,262144),l=g.a;f={"X-Goog-Upload-Command":h===f?"upload, finalize":"upload","X-Goog-Upload-Offset":g.a};
	l=d.slice(l,l+h);if(null===l)throw na();c=new w(c,"POST",function(a,c){var f=ze(a,["active","final"]),l=g.a+h,Jd=d.a,ab;"final"===f?ab=re(b,e)(a,c):ab=null;return new ye(l,Jd,"final"===f,ab)},b.b);c.b=f;c.c=l.s;c.g=null;c.a=se(a);return c};var W=function(a,b,c,d,e,f){this.K=a;this.c=b;this.i=c;this.f=e;this.h=f||null;this.o=d;this.j=0;this.G=this.m=!1;this.B=[];this.Z=262144<this.f.a;this.b="running";this.a=this.u=this.g=null;var g=this;this.W=function(a){g.a=null;"storage/canceled"===a.code?(g.m=!0,De(g)):(g.g=a,V(g,"error"))};this.S=function(a){g.a=null;"storage/canceled"===a.code?De(g):(g.g=a,V(g,"error"))};this.w=this.l=null;this.F=new H(function(a,b){g.l=a;g.w=b;Ee(g)});this.F.then(null,function(){})},Ee=function(a){"running"===
	a.b&&null===a.a&&(a.Z?null===a.u?Fe(a):a.m?Ge(a):a.G?He(a):Ie(a):Je(a))},Ke=function(a,b){de(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":V(a,"canceled");break;case "pausing":V(a,"paused")}})},Fe=function(a){Ke(a,function(b){var c=Ae(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.m=!1;De(a)},this.W)})},Ge=function(a){var b=a.u;Ke(a,function(c){var d=Be(a.c,a.i,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Le(a,b.a);a.m=!1;b.b&&
	(a.G=!0);De(a)},a.W)})},Ie=function(a){var b=new ye(a.j,a.f.a),c=a.u;Ke(a,function(d){var e;try{e=Ce(a.i,a.c,c,a.f,a.o,b)}catch(f){a.g=f;V(a,"error");return}a.a=R(a.c,e,d);a.a.a().then(function(b){a.a=null;Le(a,b.a);b.b?(a.h=b.c,V(a,"success")):De(a)},a.W)})},He=function(a){Ke(a,function(b){var c=ue(a.c,a.i,a.o);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success")},a.S)})},Je=function(a){Ke(a,function(b){var c=xe(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;
	a.h=b;Le(a,a.f.a);V(a,"success")},a.W)})},Le=function(a,b){var c=a.j;a.j=b;a.j>c&&Me(a)},V=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.b();break;case "pausing":a.b=b;null!==a.a&&a.a.b();break;case "running":var c="paused"===a.b;a.b=b;c&&(Me(a),Ee(a));break;case "paused":a.b=b;Me(a);break;case "canceled":a.g=ma();a.b=b;Me(a);break;case "error":a.b=b;Me(a);break;case "success":a.b=b,Me(a)}},De=function(a){switch(a.b){case "pausing":V(a,"paused");break;case "canceling":V(a,
	"canceled");break;case "running":Ee(a)}};W.prototype.D=function(){return new z(this.j,this.f.a,va(this.b),this.h,this,this.K)};
	W.prototype.O=function(a,b,c,d){function e(a){try{g(a);return}catch(b){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(b){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Ta(b,c,d);Ne(l,e);return function(){wb(l.B,e)}}}var g=pe().a,h=oe(null,!0).a;T("on",[le(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),oe(e,!0),
	pe(),pe()],arguments);var l=this,F=[oe(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),pe(),pe()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(F)};W.prototype.then=function(a,b){return this.F.then(a,b)};
	var Ne=function(a,b){a.B.push(b);Oe(a,b)},Me=function(a){Pe(a);var b=xb(a.B);pb(b,function(b){Oe(a,b)})},Pe=function(a){if(null!==a.l){var b=!0;switch(va(a.b)){case "success":Oc(a.l.bind(null,a.D()))();break;case "canceled":case "error":Oc(a.w.bind(null,a.g))();break;default:b=!1}b&&(a.l=null,a.w=null)}},Oe=function(a,b){switch(va(a.b)){case "running":case "paused":null!==b.next&&Oc(b.next.bind(b,a.D()))();break;case "success":null!==b.b&&Oc(b.b.bind(b))();break;case "canceled":case "error":null!==
	b.a&&Oc(b.a.bind(b,a.g))();break;default:null!==b.a&&Oc(b.a.bind(b,a.g))()}};W.prototype.R=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a};W.prototype.P=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a};W.prototype.L=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof y?b:Sa(b);else if(a=a.bucket(),null!==a)this.a=new y(a,"");else throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Qe=function(a,b){return new X(a,b)};k=X.prototype;
	k.fa=function(a){T("child",[le()],arguments);var b=Gb(this.a.path,a);return Qe(this.b,new y(this.a.bucket,b))};k.Ea=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Qe(this.b,new y(this.a.bucket,a))};k.Ga=function(){return Qe(this.b,new y(this.a.bucket,""))};k.na=function(){return this.a.bucket};k.za=function(){return this.a.path};k.Da=function(){return Hb(this.a.path)};k.Ia=function(){return this.b.i};
	k.sa=function(a,b){T("put",[me(),new U(je,!0)],arguments);Re(this,"put");return new W(this,this.b,this.a,ge(),new Q(a),b)};k.ta=function(a,b,c){T("putString",[le(),le(Va,!0),new U(je,!0)],arguments);Re(this,"putString");var d=$a(x(b)?b:"raw",a),e=c?sa(c):{};e.contentType=d.a;return new W(this,this.b,this.a,ge(),new Q(d.data,!0),e)};k.delete=function(){T("delete",[],arguments);Re(this,"delete");var a=this;return de(this.b).then(function(b){var c=ve(a.b,a.a);return R(a.b,c,b).a()})};
	k.ga=function(){T("getMetadata",[],arguments);Re(this,"getMetadata");var a=this;return de(this.b).then(function(b){var c=ue(a.b,a.a,ge());return R(a.b,c,b).a()})};k.ua=function(a){T("updateMetadata",[new U(je,void 0)],arguments);Re(this,"updateMetadata");var b=this;return de(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=ge(),h=Ra(e),h=ka+"/v0"+h,f=ie(f,g),d=new w(h,"PATCH",re(d,g),d.c);d.b={"Content-Type":"application/json; charset=utf-8"};d.c=f;d.a=te(e);return R(b.b,d,c).a()})};
	k.ra=function(){T("getDownloadURL",[],arguments);Re(this,"getDownloadURL");return this.ga().then(function(a){a=a.downloadURLs[0];if(x(a))return a;throw new v("no-download-url","The given file does not have any download URLs.");})};var Re=function(a,b){if(""===a.a.path)throw new v("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new ce(a,function(a,c){return new X(a,c)},Vd,this);this.b=a;this.c=new Se(this)};k=Y.prototype;k.va=function(a){T("ref",[le(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.fa(a):b};
	k.wa=function(a){T("refFromURL",[le(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Sa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a)};k.Ba=function(){return this.a.b};k.ya=function(a){T("setMaxUploadRetryTime",[ne()],arguments);this.a.b=a};k.Aa=function(){return this.a.c};k.xa=function(a){T("setMaxOperationRetryTime",[ne()],arguments);this.a.c=a};k.ma=function(){return this.b};
	k.ka=function(){return this.c};var Se=function(a){this.a=a};Se.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;be(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.fa;X.prototype.put=X.prototype.sa;X.prototype.putString=X.prototype.ta;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ga;X.prototype.updateMetadata=X.prototype.ua;X.prototype.getDownloadURL=X.prototype.ra;Z(X.prototype,"parent",X.prototype.Ea);Z(X.prototype,"root",X.prototype.Ga);Z(X.prototype,"bucket",X.prototype.na);
	Z(X.prototype,"fullPath",X.prototype.za);Z(X.prototype,"name",X.prototype.Da);Z(X.prototype,"storage",X.prototype.Ia);Y.prototype.ref=Y.prototype.va;Y.prototype.refFromURL=Y.prototype.wa;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.Aa);Y.prototype.setMaxOperationRetryTime=Y.prototype.xa;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Ba);Y.prototype.setMaxUploadRetryTime=Y.prototype.ya;Z(Y.prototype,"app",Y.prototype.ma);Z(Y.prototype,"INTERNAL",Y.prototype.ka);Se.prototype["delete"]=Se.prototype.delete;
	Y.prototype.capi_=function(a){ka=a};W.prototype.on=W.prototype.O;W.prototype.resume=W.prototype.R;W.prototype.pause=W.prototype.P;W.prototype.cancel=W.prototype.L;Z(W.prototype,"snapshot",W.prototype.D);Z(z.prototype,"bytesTransferred",z.prototype.oa);Z(z.prototype,"totalBytes",z.prototype.Ka);Z(z.prototype,"state",z.prototype.Ha);Z(z.prototype,"metadata",z.prototype.Ca);Z(z.prototype,"downloadURL",z.prototype.qa);Z(z.prototype,"task",z.prototype.Ja);Z(z.prototype,"ref",z.prototype.Fa);
	ta.STATE_CHANGED="state_changed";ua.RUNNING="running";ua.PAUSED="paused";ua.SUCCESS="success";ua.CANCELED="canceled";ua.ERROR="error";Ua.RAW="raw";Ua.BASE64="base64";Ua.BASE64URL="base64url";Ua.DATA_URL="data_url";H.prototype["catch"]=H.prototype.l;H.prototype.then=H.prototype.then;
	(function(){function a(a){return new Y(a)}var b={TaskState:ua,TaskEvent:ta,StringFormat:Ua,Storage:Y,Reference:X};if(window.firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(4);

	__webpack_require__(11);

	__webpack_require__(15);

	var Components = angular.module("appAS.components", ["ionic", "appAS.components.bar", "appAS.components.free", "appAS.components.menu"]);

	exports.default = Components;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addArticle = __webpack_require__(5);

	var _addArticle2 = _interopRequireDefault(_addArticle);

	var _addNews = __webpack_require__(6);

	var _addNews2 = _interopRequireDefault(_addNews);

	var _comments = __webpack_require__(7);

	var _comments2 = _interopRequireDefault(_comments);

	var _likes = __webpack_require__(8);

	var _likes2 = _interopRequireDefault(_likes);

	var _moderation = __webpack_require__(9);

	var _moderation2 = _interopRequireDefault(_moderation);

	var _updateProfile = __webpack_require__(10);

	var _updateProfile2 = _interopRequireDefault(_updateProfile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var barComponents = angular.module("appAS.components.bar", ["ionic"]);

	barComponents.controller("addArticleCtrl", _addArticle2.default);
	barComponents.controller("addNewsCtrl", _addNews2.default);
	barComponents.controller("commentsCtrl", _comments2.default);
	barComponents.controller("likesCtrl", _likes2.default);
	barComponents.controller("moderationCtrl", _moderation2.default);
	barComponents.controller("updateProfileCtrl", _updateProfile2.default);

	exports.default = barComponents;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var addArticleCtrl = function addArticleCtrl($scope, $rootScope, $ionicLoading, Articles, InputFields, DateHandler, Modals, FileHandler, CameraHandler) {
	    _classCallCheck(this, addArticleCtrl);

	    $scope.$on("$ionicView.enter", function () {
	        return $scope.clearData();
	    });

	    $scope.clearData = function () {
	        $scope.formScope.title = "";
	        $scope.formScope.text = "";
	        $scope.pdf = "";
	        document.getElementById("img-preview").style.display = "none";
	        $scope.$apply();
	    };

	    $scope.setFormScope = function (scope) {
	        return $scope.formScope = scope;
	    };

	    $scope.loadFile = function (ele) {
	        return FileHandler.loadFile(ele, $scope, false);
	    };

	    $scope.removeFile = function (file) {
	        return FileHandler.removeFile(file, $scope.fileList);
	    };

	    $scope.GetPic = function () {
	        CameraHandler.getPic(function (imageUrl) {
	            $scope.imgData = imageUrl;
	            document.getElementById("img-preview").style.display = "inline";
	            document.getElementById("img_1").src = imageUrl;
	        });
	    };

	    $scope.UploadArticle = function (title, text, pdf) {
	        if (InputFields.filledFields([title, text, pdf, document.getElementById("img_1").src])) {

	            $ionicLoading.show({
	                template: "Pubblicazione in Corso..."
	            });

	            var newData = {
	                text: text,
	                title: title,
	                author: _firebase2.default.auth().currentUser.displayName,
	                date: DateHandler.GetCurrentDate(),
	                pdf: pdf,
	                userMail: _firebase2.default.auth().currentUser.email
	            };

	            Articles.sendArticle(newData, document.getElementById("img_1").src, $rootScope.contentType);
	        } else {
	            Modals.ResultTemplate("Compila tutti i campi");
	        }
	    };
	};

	exports.default = addArticleCtrl;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var addNewsCtrl = function addNewsCtrl($scope, $rootScope, $ionicLoading, Messages, DateHandler, Modals, FileHandler) {
	    _classCallCheck(this, addNewsCtrl);

	    $scope.fileList = [];
	    $scope.binaryList = [];

	    $scope.$on("$ionicView.enter", function () {
	        $scope.clearData();
	    });

	    $scope.clearData = function () {
	        $scope.formScope.news = "";
	        $scope.fileList = [];
	        $scope.binaryList = [];
	    };

	    $scope.setNewsScope = function (scope) {
	        return $scope.formScope = scope;
	    };

	    $scope.sendNews = function (news) {

	        if (news != "") {

	            $ionicLoading.show({
	                template: "Pubblicazione in Corso..."
	            });

	            var newData = {
	                text: news,
	                author: _firebase2.default.auth().currentUser.displayName,
	                date: DateHandler.GetCurrentDate(),
	                files: $scope.fileList,
	                userMail: _firebase2.default.auth().currentUser.email
	            };

	            Messages.sendPost(newData, $scope.binaryList, $rootScope.contentType);
	            $scope.clearData();
	        } else {
	            Modals.ResultTemplate("compila il testo del messaggio");
	        }
	    };

	    $scope.loadFile = function (ele) {
	        return FileHandler.loadFile(ele, $scope, true);
	    };

	    $scope.removeFile = function (file) {
	        return FileHandler.removeFile(file, $scope.fileList);
	    };
	};

	exports.default = addNewsCtrl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commentsCtrl = function commentsCtrl($scope, $rootScope, $state, Comments, DateHandler, Modals) {
	    _classCallCheck(this, commentsCtrl);

	    Comments.getComments($scope, $rootScope, $state, "commentsSpinner");

	    $scope.$on("$ionicView.enter", function () {
	        $scope.comment = "";
	        Comments.getComments($scope, $rootScope, $state, "commentsSpinner");
	    });

	    $scope.send = function (comment) {
	        if (comment != undefined) {
	            var newData = {
	                comment: comment,
	                author: _firebase2.default.auth().currentUser.displayName,
	                father: $rootScope.currentPost,
	                date: DateHandler.GetCurrentDate(),
	                userMail: _firebase2.default.auth().currentUser.email
	            };
	            Comments.sendComment($scope, newData, "commentList");
	            $scope.comment = "";
	            $scope.$apply();
	        } else {
	            Modals.ResultTemplate("non puoi pubblicare un commento vuoto");
	        }
	    };
	};

	exports.default = commentsCtrl;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var likesCtrl = function likesCtrl($scope, $rootScope, Likes) {
	    _classCallCheck(this, likesCtrl);

	    Likes.getLikers($rootScope.currentPosts, $scope, "likesSpinner");

	    $scope.$on("$ionicView.enter", function () {
	        Likes.getLikers($rootScope.currentPost, $scope, "likesSpinner");
	    });
	};

	exports.default = likesCtrl;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var moderationCtrl = function moderationCtrl($scope, $rootScope, $state, $ionicPopup, Comments, Modals) {
	    _classCallCheck(this, moderationCtrl);

	    Comments.getComments($scope, $rootScope, $state, "commentsSpinner", false);

	    $scope.removeComment = function (commentId) {
	        Comments.deleteComment($scope, commentId, "commentList", Modals);
	    };

	    $scope.showConfirm = function (commentId) {
	        var confirmPopup = $ionicPopup.confirm({
	            title: "Conferma Eliminazione",
	            template: "Vuoi davvero eliminare questo commento?"
	        });

	        confirmPopup.then(function (res) {
	            if (res) {
	                $scope.removeComment(commentId);
	            }
	        });
	    };
	};

	exports.default = moderationCtrl;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var updateProfileCtrl = function updateProfileCtrl($scope, Profile, CameraHandler) {
	    _classCallCheck(this, updateProfileCtrl);

	    var profileImage = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyBQcIrRUzpahFxeh3s3pzGNlP8QqyFsvn8:[DEFAULT]")).photoURL;
	    $scope.profileImage = profileImage;

	    $scope.getPic = function () {
	        CameraHandler.getPic(function (imgUrl) {
	            document.getElementById("profileImg").src = imgUrl;
	        });
	    };

	    $scope.updateProfile = function () {
	        Profile.updateProfile(document.getElementById("profileImg").src);
	    };
	};

	exports.default = updateProfileCtrl;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tabs = __webpack_require__(12);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _login = __webpack_require__(13);

	var _login2 = _interopRequireDefault(_login);

	var _signup = __webpack_require__(14);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var freeComponents = angular.module("appAS.components.free", ["ionic"]);

	freeComponents.controller("loginCtrl", _login2.default);
	freeComponents.controller("signupCtrl", _signup2.default);
	freeComponents.controller("tabsCtrl", _tabs2.default);

	exports.default = freeComponents;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var tabsCtrl = function tabsCtrl($scope, $state, $rootScope, $ionicScrollDelegate, Auth, PlatformHandler) {
	    _classCallCheck(this, tabsCtrl);

	    $scope.View = "tab-link";
	    $scope.showIcon = "ion-plus-round";

	    Auth.checkAdmins($scope, "adminPanel");

	    PlatformHandler.is("iOS", function () {
	        document.getElementById("tabBar").style.marginTop = "-5%";
	    });

	    $scope.$on("$ionicView.enter", function () {
	        //$scope.closeDrawer();
	        $scope.User = _firebase2.default.auth().currentUser.displayName;
	        $scope.UserMail = _firebase2.default.auth().currentUser.email;
	        Auth.checkAdmins($scope, "adminPanel");
	    });

	    $rootScope.$on("$stateChangeSuccess", function (ev, to, toParams, from) {

	        $rootScope.previousState = from.name;

	        if ($rootScope.previousState == "comments") {
	            $rootScope.previousState = "tab.forum";
	        } else {
	            $ionicScrollDelegate.scrollTop();
	        }

	        if (to.name == "tab.libera") {
	            document.getElementById("addIcon").style.display = "block";
	        } else {
	            document.getElementById("addIcon").style.display = "none";
	        }
	    });

	    $scope.backBtnClick = function () {
	        $state.go($rootScope.previousState);
	    };

	    $scope.ShowLinks = function () {
	        if (document.getElementById("linkList").style.display == "block") {
	            document.getElementById("linkList").style.display = "none";
	            $scope.showIcon = "ion-plus-round";
	        } else {
	            document.getElementById("linkList").style.display = "block";
	            $scope.showIcon = "ion-minus-round";
	        }
	    };

	    //convert to Service
	    $scope.navigate = function (destination, ind) {
	        $scope.View = "tab-" + destination;
	        for (var i = 1; i < 10; i++) {
	            document.getElementById("MainView" + i).style.display = "none";
	        }
	        document.getElementById("MainView" + ind).style.display = "block";
	    };

	    $scope.goToPublisher = function () {
	        $state.go("sendMessage");
	        $rootScope.contentType = "Post";
	    };
	};

	exports.default = tabsCtrl;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var loginCtrl = function loginCtrl($scope, $ionicLoading, $window, $state, $ionicHistory, Auth, InputFields, Modals) {
	    _classCallCheck(this, loginCtrl);

	    _firebase2.default.auth().signOut();
	    $scope.inputType = "password";

	    $scope.UserLogin = function (mail, password, RememberMe) {
	        if (InputFields.filledFields([mail, password])) {
	            $ionicLoading.show({
	                template: "Accesso in Corso..."
	            });
	            $ionicHistory.clearHistory();
	            $ionicHistory.clearCache();
	            Auth.Login(mail, password, $ionicLoading, $state, $ionicHistory, Modals);
	            $scope.SetRememberMe(RememberMe);
	        } else {
	            Modals.ResultTemplate("alcuni campi sono vuoti o mail non è valida");
	        }
	    };

	    $scope.SetRememberMe = function (RememberMe) {

	        if (RememberMe) {
	            $window.localStorage.setItem("RememberMe", "true");
	        }
	    };

	    $scope.hideShowPassword = function () {
	        if ($scope.inputType == "password") $scope.inputType = "text";else $scope.inputType = "password";
	    };
	};

	exports.default = loginCtrl;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var signupCtrl = function signupCtrl($scope, $ionicLoading, $state, $ionicHistory, Auth, InputFields, Modals) {
	    _classCallCheck(this, signupCtrl);

	    $scope.inputType = "password";

	    $scope.UserSignup = function (username, password, mail) {
	        if (InputFields.filledFields([username, password, mail])) {
	            $ionicLoading.show({
	                template: "Registrazione in corso..."
	            });
	            Auth.Signup(username, password, mail, $state, $ionicHistory);
	        } else {
	            Modals.ResultTemplate("compila tutti i campi");
	        }
	    };

	    $scope.go = function () {
	        return $state.go("login");
	    };

	    $scope.hideShowPassword = function () {
	        if ($scope.inputType == "password") $scope.inputType = "text";else $scope.inputType = "password";
	    };
	};

	exports.default = signupCtrl;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _admin = __webpack_require__(16);

	var _admin2 = _interopRequireDefault(_admin);

	var _articles = __webpack_require__(17);

	var _conventions = __webpack_require__(18);

	var _conventions2 = _interopRequireDefault(_conventions);

	var _library = __webpack_require__(20);

	var _library2 = _interopRequireDefault(_library);

	var _link = __webpack_require__(21);

	var _link2 = _interopRequireDefault(_link);

	var _newsCtrl = __webpack_require__(22);

	var _settings = __webpack_require__(23);

	var _settings2 = _interopRequireDefault(_settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menuComponents = angular.module("appAS.components.menu", ["ionic"]);

	menuComponents.controller("adminCtrl", _admin2.default);
	menuComponents.controller("attualitaCtrl", _articles.attualitaCtrl);
	menuComponents.controller("orientamentoCtrl", _articles.orientamentoCtrl);
	menuComponents.controller("conventionsCtrl", _conventions2.default);
	menuComponents.controller("freeZoneCtrl", _newsCtrl.freeZoneCtrl);
	menuComponents.controller("libraryCtrl", _library2.default);
	menuComponents.controller("linkCtrl", _link2.default);
	menuComponents.controller("newsCtrl", _newsCtrl.newsCtrl);
	menuComponents.controller("settingsCtrl", _settings2.default);

	exports.default = menuComponents;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var adminCtrl = function adminCtrl($scope, StaticData) {
	    _classCallCheck(this, adminCtrl);

	    $scope.title = "Sezione Amministratori ";
	    $scope.Links = StaticData.adminLinks;
	};

	exports.default = adminCtrl;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var articlesCtrl = function () {
	    function articlesCtrl() {
	        _classCallCheck(this, articlesCtrl);
	    }

	    _createClass(articlesCtrl, null, [{
	        key: "create",
	        value: function create($scope, $rootScope, $state, Articles, type) {

	            Articles.getArticles($scope, $rootScope, $state, type, "articlesSpinner");

	            $scope.doRefresh = function () {
	                Articles.getArticles($scope, $rootScope, $state, type, "articlesSpinner");
	                $scope.$broadcast("scroll.refreshComplete");
	                $scope.$apply();
	            };
	        }
	    }]);

	    return articlesCtrl;
	}();

	var attualitaCtrl = exports.attualitaCtrl = function attualitaCtrl($scope, $rootScope, $state, Articles) {
	    return articlesCtrl.create($scope, $rootScope, $state, Articles, "Giornalino");
	};

	var orientamentoCtrl = exports.orientamentoCtrl = function orientamentoCtrl($scope, $rootScope, $state, Articles) {
	    return articlesCtrl.create($scope, $rootScope, $state, Articles, "Orientamento");
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var conventionsCtrl = function conventionsCtrl($scope, StaticData) {
	    _classCallCheck(this, conventionsCtrl);

	    $scope.Conventions = StaticData.conventions;
	};

	exports.default = conventionsCtrl;

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var libraryCtrl = function libraryCtrl() {
	    _classCallCheck(this, libraryCtrl);
	};

	exports.default = libraryCtrl;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var linkCtrl = function linkCtrl($scope, StaticData) {
	    _classCallCheck(this, linkCtrl);

	    $scope.Links = StaticData.links;

	    $scope.OpenLink = function (url) {
	        return cordova.InAppBrowser.open(url, "_system", "location=yes");
	    };
	};

	exports.default = linkCtrl;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.freeZoneCtrl = exports.newsCtrl = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var forumCtrl = function () {
	    function forumCtrl() {
	        _classCallCheck(this, forumCtrl);
	    }

	    _createClass(forumCtrl, null, [{
	        key: "create",
	        value: function create($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler, type) {

	            $rootScope.userName = window.localStorage.getItem("Username");
	            Messages.getPosts($scope, $rootScope, $state, "newsSpinner", type);

	            $scope.doRefresh = function () {
	                Messages.getPosts($scope, $rootScope, $state, "newsSpinner", type);
	                $scope.$broadcast("scroll.refreshComplete");
	                $scope.$apply();
	            };

	            $scope.$on("$ionicView.enter", function () {
	                $scope.UserImage = _firebase2.default.auth().currentUser.photoURL;
	                $scope.$apply();
	                if ($rootScope.userName != window.localStorage.getItem("Username")) {
	                    Messages.getPosts($scope, $rootScope, $state, "newsSpinner", type);
	                    $rootScope.userName = window.localStorage.getItem("Username");
	                }
	            });

	            $scope.openFile = function (file) {
	                FileHandler.openFile(file, $ionicLoading);
	            };
	        }
	    }]);

	    return forumCtrl;
	}();

	var newsCtrl = exports.newsCtrl = function newsCtrl($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {
	    return forumCtrl.create($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler, "Comunicazioni");
	};

	var freeZoneCtrl = exports.freeZoneCtrl = function freeZoneCtrl($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler) {
	    return forumCtrl.create($scope, $rootScope, $state, $ionicLoading, Messages, FileHandler, "Post");
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var settingsCtrl = function settingsCtrl($scope, $rootScope, $state, Auth, Modals, SocialHandler) {
	    _classCallCheck(this, settingsCtrl);

	    if (window.localStorage.getItem("RememberMe") == "true") {
	        $scope.RememberMe = true;
	    } else {
	        $scope.RememberMe = false;
	    }

	    $scope.updateRememberMe = function (RememberMe) {
	        window.localStorage.setItem("RememberMe", RememberMe.toString());
	        $scope.RememberMe = RememberMe;
	    };

	    $scope.shareApp = function () {
	        return SocialHandler.shareApp();
	    };

	    $scope.rateUs = function () {
	        return SocialHandler.rareUs();
	    };

	    $scope.Disconnect = function () {
	        return Auth.Logout($state, $rootScope, Modals);
	    };
	};

	module.exports = settingsCtrl;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actionBar = __webpack_require__(25);

	var _actionBar2 = _interopRequireDefault(_actionBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Directives = angular.module("appAS.directives", ["ionic"]);

	Directives.directive("actionBar", _actionBar2.default);

	exports.default = Directives;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var actionBar = function actionBar() {
	    return {
	        scope: {
	            title: "=title"
	        },
	        restrict: "E",
	        templateUrl: "src/Directives/ActionBar/actionBar.html"
	    };
	};

	exports.default = actionBar;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(27);

	__webpack_require__(156);

	var Services = angular.module("appAS.services", ["appAS.services.data", "appAS.services.utils"]);

	exports.default = Services;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Articles = __webpack_require__(28);

	var _Articles2 = _interopRequireDefault(_Articles);

	var _Auth = __webpack_require__(29);

	var _Auth2 = _interopRequireDefault(_Auth);

	var _Comments = __webpack_require__(58);

	var _Comments2 = _interopRequireDefault(_Comments);

	var _Likes = __webpack_require__(59);

	var _Likes2 = _interopRequireDefault(_Likes);

	var _Messages = __webpack_require__(153);

	var _Messages2 = _interopRequireDefault(_Messages);

	var _Profile = __webpack_require__(154);

	var _Profile2 = _interopRequireDefault(_Profile);

	var _StaticData = __webpack_require__(155);

	var _StaticData2 = _interopRequireDefault(_StaticData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dataServices = angular.module("appAS.services.data", ["ionic"]);

	dataServices.service("Messages", _Messages2.default);
	dataServices.service("Articles", _Articles2.default);
	dataServices.service("Comments", _Comments2.default);
	dataServices.service("Likes", _Likes2.default);
	dataServices.service("Profile", _Profile2.default);
	dataServices.service("Auth", _Auth2.default);
	dataServices.service("StaticData", _StaticData2.default);

	exports.default = dataServices;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Articles = function Articles($ionicLoading, StringHandler, Modals, FileHandler) {
	    _classCallCheck(this, Articles);

	    this.sendArticle = function (newData, imgUrl, ArticleType) {
	        var newPostKey = _firebase2.default.database().ref().child(ArticleType).push().key;
	        var updates = {};

	        updates["/" + ArticleType + "/" + newPostKey] = newData;
	        _firebase2.default.database().ref().update(updates);

	        FileHandler.getFileBlob(imgUrl, function (blob) {
	            var storageRef = _firebase2.default.storage().ref(ArticleType).child(newPostKey);
	            storageRef.child("img").put(blob).then(function () {
	                storageRef.child("pdf").put(newData.pdf.binary).then(function () {
	                    return Modals.ResultTemplate("Articolo Pubblicato con Successo");
	                }).catch(function () {
	                    return Modals.ResultTemplate("Errore nella Pubblicazione dell' Articolo");
	                });
	            });
	        });
	    };

	    this.getArticles = function (scope, rootScope, state, type, spinner) {

	        document.getElementById(spinner).style.display = "block";
	        var ModelRef = _firebase2.default.database().ref(type);

	        ModelRef.on("value", function (snapshot) {

	            var results = snapshot.val();
	            var articles = [];

	            if (results != null) {
	                (function () {
	                    var keys = Object.keys(results);

	                    keys.map(function (item, i) {

	                        var strRef = _firebase2.default.storage().ref(type).child(item);
	                        strRef.child("img").getDownloadURL().then(function (imgUrl) {

	                            strRef.child("pdf").getDownloadURL().then(function (pdfUrl) {

	                                _firebase2.default.storage().ref("Profili").child(results[item].userMail).getDownloadURL().then(function (url) {

	                                    articles[i] = {
	                                        title: results[item].title,
	                                        author: results[item].author,
	                                        text: results[item].text,
	                                        avatar: url,
	                                        coverText: StringHandler.shorten(results[item].text, 100),
	                                        img: imgUrl,
	                                        date: results[item].date,
	                                        id: item,
	                                        pdf: pdfUrl,
	                                        link: function link(destination) {
	                                            rootScope.currentPost = item;
	                                            state.go(destination);
	                                        },
	                                        openPdf: function openPdf() {
	                                            FileHandler.openFile(pdfUrl, $ionicLoading);
	                                        }
	                                    };

	                                    if (i == keys.length - 1) {
	                                        scope.Articles = articles;
	                                        scope.$apply();
	                                        document.getElementById(spinner).style.display = "none";
	                                    }
	                                });
	                            });
	                        });
	                    });
	                })();
	            }
	        });
	    };
	};

	exports.default = Articles;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _includes = __webpack_require__(30);

	var _includes2 = _interopRequireDefault(_includes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Auth = function Auth($ionicLoading, Modals, StringHandler) {
	    _classCallCheck(this, Auth);

	    this.Signup = function (name, pass, mail, state, history) {

	        _firebase2.default.auth().createUserWithEmailAndPassword(mail, pass).catch(function (error) {
	            $ionicLoading.hide();
	            Modals.ResultTemplate(StringHandler.getErrorMessage(error.code));
	        });

	        _firebase2.default.auth().onAuthStateChanged(function (user) {

	            if (user != null && history.currentStateName() == "signup") {
	                user.updateProfile({ displayName: name });
	                $ionicLoading.hide();
	                _firebase2.default.auth().signOut();
	                Modals.ResultTemplate("Profilo creato correttamente");
	                state.go("login");
	            }
	        });
	    };

	    this.Login = function (email, pass, loadingTemplate, state, history, modals) {

	        _firebase2.default.auth().signInWithEmailAndPassword(email, pass).catch(function () {
	            loadingTemplate.hide();
	            modals.ResultTemplate("Mail o Password errati");
	        });

	        _firebase2.default.auth().onAuthStateChanged(function (user) {

	            if (user != null && history.currentStateName() == "login") {
	                loadingTemplate.hide();
	                state.go("tab.forum");
	            }
	        });
	    };

	    this.Logout = function (state, rootScope, modals) {
	        _firebase2.default.auth().signOut().then(function () {
	            state.go("login");
	            window.localStorage.setItem("RememberMe", "false");
	            window.localStorage.setItem("IsAdmin", "false");
	            window.localStorage.removeItem("Username");
	        }, function () {
	            modals.ResultTemplate("Impossibile disconnetersi dal profilo");
	        });
	    };

	    this.checkAdmins = function (scope, id) {

	        if (window.localStorage.getItem("Username")) {
	            scope.User = window.localStorage.getItem("Username");
	        }
	        var ModelRef = _firebase2.default.database().ref("Amministratori");
	        ModelRef.on("value", function (snapshot) {
	            var results = snapshot.val();

	            if (window.localStorage.getItem("IsAdmin") == "true") {
	                document.getElementById(id).style.display = "block";
	            } else if (!(0, _includes2.default)(results, scope.UserMail) || !scope.UserMail) {
	                document.getElementById(id).style.display = "none";
	                window.localStorage.setItem("IsAdmin", "false");
	            } else {
	                document.getElementById(id).style.display = "block";
	                if (window.localStorage.getItem("RememberMe") == "true") {
	                    window.localStorage.setItem("IsAdmin", "true");
	                }
	            }

	            if (window.localStorage.getItem("RememberMe") == "true") {
	                window.localStorage.setItem("Username", _firebase2.default.auth().currentUser.displayName);
	            }
	        });
	    };
	};

	exports.default = Auth;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(31),
	    isArrayLike = __webpack_require__(34),
	    isString = __webpack_require__(38),
	    toInteger = __webpack_require__(41),
	    values = __webpack_require__(45);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

	module.exports = includes;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(32),
	    baseIsNaN = __webpack_require__(33);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(35),
	    isLength = __webpack_require__(37);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(36);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(39),
	    isObjectLike = __webpack_require__(40);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(42);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(43);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(36),
	    isSymbol = __webpack_require__(44);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(40);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(46),
	    keys = __webpack_require__(48);

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}

	module.exports = values;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(47);

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	module.exports = baseValues;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(49),
	    baseKeys = __webpack_require__(54),
	    isArrayLike = __webpack_require__(34);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(50),
	    isArguments = __webpack_require__(51),
	    isArray = __webpack_require__(39),
	    isIndex = __webpack_require__(53);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(52);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(34),
	    isObjectLike = __webpack_require__(40);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(55),
	    nativeKeys = __webpack_require__(56);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(57);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Comments = function Comments(Likes) {
	    _classCallCheck(this, Comments);

	    this.sendComment = function (scope, newData, commentList) {
	        var newPostKey = _firebase2.default.database().ref().child("Commenti").push().key;
	        var updates = {};
	        document.getElementById(commentList).style.display = "none";
	        updates["/Commenti/" + newPostKey] = newData;
	        _firebase2.default.database().ref().update(updates).then(function () {
	            document.getElementById(commentList).style.display = "block";
	            scope.$apply();
	        });
	    };

	    this.getComments = function (scope, rootScope, state, spinner, filter) {

	        if (filter == undefined) {
	            filter = true;
	        }

	        document.getElementById(spinner).style.display = "block";
	        var comments = [];
	        scope.Comments = [];
	        var father = rootScope.currentPost;
	        var ModelRef = _firebase2.default.database().ref("Commenti");

	        ModelRef.on("value", function (snapshot) {
	            var results = snapshot.val();

	            if (results != null) {
	                Object.keys(results).map(function (item, i) {
	                    if (!filter) {
	                        comments.push({
	                            author: results[item].author,
	                            text: results[item].comment,
	                            father: results[item].father,
	                            date: results[item].date,
	                            id: item
	                        });
	                        Likes.getLikeCount(item, scope, comments, comments.length - 1, "Comments");
	                    } else if (results[item].father == father) {
	                        _firebase2.default.storage().ref("Profili").child(results[item].userMail).getDownloadURL().then(function (url) {
	                            comments.push({
	                                author: results[item].author,
	                                avatar: url,
	                                text: results[item].comment,
	                                father: results[item].father,
	                                date: results[item].date,
	                                id: item,
	                                like: function like() {
	                                    Likes.checkLike(_firebase2.default.auth().currentUser.displayName, item);
	                                },
	                                link: function link() {
	                                    rootScope.currentPost = item;
	                                    state.go("likes");
	                                }
	                            });

	                            if (i == Object.keys(results).length - 1) {
	                                window.setTimeout(function () {
	                                    return document.getElementById(spinner).style.display = "none";
	                                }, 1000);
	                            }

	                            Likes.getLikeCount(item, scope, comments, comments.length - 1, "Comments");
	                        });
	                    }
	                });
	            }
	        });
	    };

	    this.getCommentCount = function (father, scope, posts, index, maxLength) {
	        var ModelRef = _firebase2.default.database().ref("Commenti");
	        ModelRef.on("value", function (snapshot) {
	            var results = snapshot.val();
	            var count = 0;

	            if (results != null) {

	                Object.keys(results).map(function (item) {
	                    if (results[item].father == father) {
	                        count++;
	                    }
	                });
	            }
	            posts[index].commentCount = count;
	            Likes.getLikeCount(father, scope, posts, index, "Posts", maxLength);
	        });
	    };

	    this.deleteComment = function (scope, commentId, commentList, modals) {
	        var oldLenght = scope.Comments.length;
	        document.getElementById(commentList).style.display = "none";
	        _firebase2.default.database().ref("Commenti/" + commentId).remove().then(function () {
	            modals.ResultTemplate("commento eliminato con successo");
	            scope.Comments.splice(oldLenght - 1, oldLenght * 2);
	            document.getElementById(commentList).style.display = "block";
	            scope.$apply();
	        });
	    };
	};

	exports.default = Comments;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _uniqBy = __webpack_require__(60);

	var _uniqBy2 = _interopRequireDefault(_uniqBy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Likes = function Likes() {
	    var _this = this;

	    _classCallCheck(this, Likes);

	    this.checkLike = function (user, post) {
	        var self = _this;
	        var ModelRef = _firebase2.default.database().ref("Likes");
	        ModelRef.once("value", function (snapshot) {
	            var results = snapshot.val();
	            var likeId = void 0;
	            var check = true;

	            if (results != null) {
	                Object.keys(results).map(function (item) {
	                    if (results[item].user == user && results[item].post == post) {
	                        check = false;
	                        likeId = item;
	                    }
	                });
	            }

	            if (check) {
	                self.sendLike({ user: user, post: post }, post);
	            } else {
	                self.removeLike(likeId, post);
	            }
	        });
	    };

	    this.sendLike = function (newData, likebtn) {
	        var newPostKey = _firebase2.default.database().ref().child("Likes").push().key;
	        var updates = {};
	        document.getElementById(likebtn).style.color = "blue";
	        updates["/Likes/" + newPostKey] = newData;
	        _firebase2.default.database().ref().update(updates);
	    };

	    this.removeLike = function (target, likebtn) {
	        document.getElementById(likebtn).style.color = "grey";
	        _firebase2.default.database().ref("Likes/" + target).remove();
	    };

	    this.getLikeCount = function (father, scope, posts, index, target) {
	        var ModelRef = _firebase2.default.database().ref("Likes");
	        ModelRef.on("value", function (snapshot) {
	            var results = snapshot.val();
	            var cnt = 0;
	            var color = "#2F4F4F";
	            var users = [];

	            if (results != null) {
	                Object.keys(results).map(function (item) {
	                    if (results[item].post == father) {
	                        cnt++;
	                        users.push(results[item].user);
	                        if (_firebase2.default.auth().currentUser.displayName == results[item].user) {
	                            color = "blue";
	                        }
	                    }
	                });
	            }

	            posts[index].color = color;
	            posts[index].likeCount = cnt;
	            posts[index].likerList = users.reverse();
	            scope[target] = posts;
	            if (target == "Comments") {
	                scope[target] = (0, _uniqBy2.default)(posts, "text");
	            }
	            window.setTimeout(function () {
	                return scope.$apply();
	            }, 1000);
	        });
	    };

	    this.getLikers = function (father, scope, spinner) {
	        document.getElementById(spinner).style.display = "block";
	        var ModelRef = _firebase2.default.database().ref("Likes");
	        ModelRef.on("value", function (snapshot) {
	            var results = snapshot.val();
	            var users = [];

	            if (results != null) {
	                Object.keys(results).map(function (item) {
	                    if (results[item].post == father) {
	                        users.push(results[item].user);
	                    }
	                });
	                scope.Likers = users;
	            }
	            document.getElementById(spinner).style.display = "none";
	        });
	    };
	};

	exports.default = Likes;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(61),
	    baseUniq = __webpack_require__(147);

	/**
	 * This method is like `_.uniq` except that it accepts `iteratee` which is
	 * invoked for each element in `array` to generate the criterion by which
	 * uniqueness is computed. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee=_.identity]
	 *  The iteratee invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	 * // => [2.1, 1.2]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	 * // => [{ 'x': 1 }, { 'x': 2 }]
	 */
	function uniqBy(array, iteratee) {
	  return (array && array.length)
	    ? baseUniq(array, baseIteratee(iteratee, 2))
	    : [];
	}

	module.exports = uniqBy;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(62),
	    baseMatchesProperty = __webpack_require__(130),
	    identity = __webpack_require__(143),
	    isArray = __webpack_require__(39),
	    property = __webpack_require__(144);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(63),
	    getMatchData = __webpack_require__(127),
	    matchesStrictComparable = __webpack_require__(129);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(64),
	    baseIsEqual = __webpack_require__(103);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(65),
	    stackClear = __webpack_require__(73),
	    stackDelete = __webpack_require__(74),
	    stackGet = __webpack_require__(75),
	    stackHas = __webpack_require__(76),
	    stackSet = __webpack_require__(77);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(66),
	    listCacheDelete = __webpack_require__(67),
	    listCacheGet = __webpack_require__(70),
	    listCacheHas = __webpack_require__(71),
	    listCacheSet = __webpack_require__(72);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(69);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(68);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(65);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(65),
	    Map = __webpack_require__(78),
	    MapCache = __webpack_require__(88);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(84);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(80),
	    getValue = __webpack_require__(87);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(35),
	    isHostObject = __webpack_require__(81),
	    isMasked = __webpack_require__(82),
	    isObject = __webpack_require__(36),
	    toSource = __webpack_require__(86);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(83);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(84);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(85);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 86 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(89),
	    mapCacheDelete = __webpack_require__(97),
	    mapCacheGet = __webpack_require__(100),
	    mapCacheHas = __webpack_require__(101),
	    mapCacheSet = __webpack_require__(102);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(90),
	    ListCache = __webpack_require__(65),
	    Map = __webpack_require__(78);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(91),
	    hashDelete = __webpack_require__(93),
	    hashGet = __webpack_require__(94),
	    hashHas = __webpack_require__(95),
	    hashSet = __webpack_require__(96);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(92);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(92);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(92);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(92);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(98);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(99);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(98);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(98);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(98);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(104),
	    isObject = __webpack_require__(36),
	    isObjectLike = __webpack_require__(40);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(64),
	    equalArrays = __webpack_require__(105),
	    equalByTag = __webpack_require__(110),
	    equalObjects = __webpack_require__(115),
	    getTag = __webpack_require__(116),
	    isArray = __webpack_require__(39),
	    isHostObject = __webpack_require__(81),
	    isTypedArray = __webpack_require__(122);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(106),
	    arraySome = __webpack_require__(109);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(88),
	    setCacheAdd = __webpack_require__(107),
	    setCacheHas = __webpack_require__(108);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(111),
	    Uint8Array = __webpack_require__(112),
	    eq = __webpack_require__(69),
	    equalArrays = __webpack_require__(105),
	    mapToArray = __webpack_require__(113),
	    setToArray = __webpack_require__(114);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(84);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(84);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(48);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(117),
	    Map = __webpack_require__(78),
	    Promise = __webpack_require__(118),
	    Set = __webpack_require__(119),
	    WeakMap = __webpack_require__(120),
	    baseGetTag = __webpack_require__(121),
	    toSource = __webpack_require__(86);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(84);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(84);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(84);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(79),
	    root = __webpack_require__(84);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(123),
	    baseUnary = __webpack_require__(124),
	    nodeUtil = __webpack_require__(125);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(37),
	    isObjectLike = __webpack_require__(40);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(85);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)(module)))

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(128),
	    keys = __webpack_require__(48);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(36);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(103),
	    get = __webpack_require__(131),
	    hasIn = __webpack_require__(140),
	    isKey = __webpack_require__(138),
	    isStrictComparable = __webpack_require__(128),
	    matchesStrictComparable = __webpack_require__(129),
	    toKey = __webpack_require__(139);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(132);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(133),
	    isKey = __webpack_require__(138),
	    toKey = __webpack_require__(139);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(39),
	    stringToPath = __webpack_require__(134);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(135),
	    toString = __webpack_require__(136);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(88);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(137);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(111),
	    isSymbol = __webpack_require__(44);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(39),
	    isSymbol = __webpack_require__(44);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(44);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(141),
	    hasPath = __webpack_require__(142);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 141 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(133),
	    isArguments = __webpack_require__(51),
	    isArray = __webpack_require__(39),
	    isIndex = __webpack_require__(53),
	    isKey = __webpack_require__(138),
	    isLength = __webpack_require__(37),
	    toKey = __webpack_require__(139);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(145),
	    basePropertyDeep = __webpack_require__(146),
	    isKey = __webpack_require__(138),
	    toKey = __webpack_require__(139);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(132);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(106),
	    arrayIncludes = __webpack_require__(148),
	    arrayIncludesWith = __webpack_require__(149),
	    cacheHas = __webpack_require__(150),
	    createSet = __webpack_require__(151),
	    setToArray = __webpack_require__(114);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(31);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(119),
	    noop = __webpack_require__(152),
	    setToArray = __webpack_require__(114);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Messages = function Messages(Modals, Comments, Likes) {
	    var _this = this;

	    _classCallCheck(this, Messages);

	    this.sendPost = function (newData, binary, contentType) {

	        var newPostKey = _firebase2.default.database().ref().child(contentType).push().key;

	        if (binary.length > 0) {
	            (function () {
	                var storageRef = _firebase2.default.storage().ref(contentType + "/" + newPostKey);
	                binary.map(function (item) {
	                    var childRef = storageRef.child(item.name);
	                    childRef.put(item.binary);
	                });
	            })();
	        }

	        var updates = {};
	        updates["/" + contentType + "/" + newPostKey] = newData;
	        _firebase2.default.database().ref().update(updates).then(function () {
	            return Modals.ResultTemplate("Post Pubblicato con Successo");
	        }).catch(function () {
	            return Modals.ResultTemplate("Errore nella Pubblicazione del Post");
	        });
	    };

	    this.getPosts = function (scope, rootScope, state, spinner, type) {

	        var storage = _firebase2.default.storage();
	        var self = _this;
	        document.getElementById(spinner).style.display = "block";
	        scope.Posts = [];

	        var ModelRef = _firebase2.default.database().ref(type);
	        ModelRef.on("value", function (snapshot) {
	            var results = snapshot.val();
	            var posts = [];

	            if (results != null) {
	                Object.keys(results).map(function (item, i) {

	                    var maxLength = Object.keys(results).length;
	                    var files = [];

	                    if (results[item].files != undefined) {

	                        results[item].files.map(function (file, j) {
	                            var stRef = storage.ref(type + "/" + item);
	                            stRef.child(file).getDownloadURL().then(function (url) {
	                                files.push({
	                                    url: url,
	                                    name: file
	                                });

	                                if (j == results[item].files.length - 1) {
	                                    self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength);
	                                }
	                            });
	                        });
	                    } else {
	                        self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength);
	                    }
	                });
	            }
	        });
	    };

	    this.setPostProperties = function (results, files, state, posts, scope, rootScope, item, i, maxLength) {

	        _firebase2.default.storage().ref("Profili").child(results[item].userMail).getDownloadURL().then(function (url) {
	            posts[i] = {
	                author: results[item].author,
	                text: results[item].text,
	                date: results[item].date,
	                avatar: url,
	                files: files,
	                id: item,
	                likeCount: 0,
	                commentCount: 0,
	                link: function link(dest) {
	                    rootScope.currentPost = item;
	                    state.go(dest);
	                },
	                like: function like() {
	                    Likes.checkLike(_firebase2.default.auth().currentUser.displayName, item);
	                }
	            };

	            Comments.getCommentCount(item, scope, posts, i, results, maxLength);
	        });
	    };
	};

	exports.default = Messages;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _firebase = __webpack_require__(1);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Profile = function Profile($ionicLoading, FileHandler, Modals) {
	    _classCallCheck(this, Profile);

	    this.updateProfile = function (imgData) {
	        var User = _firebase2.default.auth().currentUser;
	        $ionicLoading.show({ template: "aggiornamento in corso" });
	        FileHandler.getFileBlob(imgData, function (blob) {
	            var imagesRef = _firebase2.default.storage().ref("Profili").child(User.email);
	            imagesRef.put(blob).then(function (snapshot) {
	                User.updateProfile({ photoURL: snapshot.downloadURL }).then(function () {
	                    return Modals.ResultTemplate("Profilo Aggiornato");
	                }, function () {
	                    return Modals.ResultTemplate("Errore nell' aggiornamento");
	                });
	            });
	        });
	    };
	};

	exports.default = Profile;

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StaticData = function StaticData($state, $rootScope) {
	    _classCallCheck(this, StaticData);

	    this.adminLinks = [{
	        "name": "Scrivi Avviso",
	        "icon": "icon ion-ios-bell",
	        "url": "sendMessage",
	        "direct": function direct() {
	            $state.go(this.url);
	            $rootScope.contentType = "Comunicazioni";
	        }
	    }, {
	        "name": "Scrivi Articolo del Giornalino",
	        "url": "addArticle",
	        "icon": "icon ion-ios-paper",
	        "direct": function direct() {
	            $state.go(this.url);
	            $rootScope.contentType = "Giornalino";
	        }
	    }, {
	        "name": "Scrivi Articolo d'orientamento",
	        "url": "addArticle",
	        "icon": "icon ion-ios-navigate",
	        "direct": function direct() {
	            $state.go(this.url);
	            $rootScope.contentType = "Orientamento";
	        }
	    }, {
	        "name": "Modera Commenti",
	        "url": "moderation",
	        "icon": "icon ion-ios-trash",
	        "direct": function direct() {
	            $state.go(this.url);
	        }
	    }];

	    this.links = [{
	        "name": "Registro Elettronico",
	        "url": "https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/",
	        "icon": "icon ion-ios-book-outline"
	    }, {
	        "name": "Quaderno Elettronico",
	        "url": "http://2.229.79.199/quaderno/index.php",
	        "icon": "icon ion-ios-book"
	    }, {
	        "name": "Sito Web Della Scuola",
	        "url": "http://www.liceoariostospallanzani-re.gov.it/",
	        "icon": "icon ion-ios-world"
	    }, {
	        "name": "Accesso Web Mail",
	        "url": "https://mail.google.com",
	        "icon": "icon ion-ios-email"
	    }];

	    this.conventions = [{
	        name: "Re Di Pane",
	        address: "via a caso 1",
	        description: "Sconto del 5% su tutti i prodotti",
	        img: "dist/Images/Conventions/con1.jpeg"
	    }, {
	        name: "Hamburgheria",
	        address: "via cicciona 10",
	        description: "Sconto del 10% su tutti i prodotti",
	        img: "dist/Images/Conventions/con2.jpeg"

	    }, {
	        name: "Pizzeria",
	        address: "via adjflkdfslkfd",
	        description: "Sconto del 5% sulle pizze",
	        img: "dist/Images/Conventions/con3.jpeg"
	    }, {
	        name: "Bar Mazzini",
	        address: "via  di fronte allo spalla",
	        description: "La seconda Pasta è gratis",
	        img: "dist/Images/Conventions/con4.jpeg"

	    }, {
	        name: "Ligabue",
	        address: "via rossi 5",
	        description: "Sconto del 5% sulle torte",
	        img: "dist/Images/Conventions/con5.jpeg"
	    }, {
	        name: "Da Malindo",
	        address: "via einstein 10",
	        description: "Sconto del 5%",
	        img: "dist/Images/Conventions/con6.jpeg"
	    }, {
	        name: "Forno Panciroli",
	        address: "via a caso 197",
	        description: "Sconto del 5% sul Gnocco",
	        img: "dist/Images/Conventions/con7.jpeg"
	    }, {
	        name: "Gelateria",
	        address: "via per Modena 6",
	        description: "Granite Gratis per tutti",
	        img: "dist/Images/Conventions/con8.jpeg"
	    }, {
	        name: "Negozio a Caso",
	        address: "via senza nome",
	        description: "Sconto a caso",
	        img: "dist/Images/Conventions/con9.jpeg"
	    }, {
	        name: "Armandos",
	        address: "via a caso 154",
	        description: "Sconto del 5% su tutto",
	        img: "dist/Images/Conventions/con10.jpeg"
	    }];
	};

	exports.default = StaticData;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DateHandler = __webpack_require__(157);

	var _DateHandler2 = _interopRequireDefault(_DateHandler);

	var _InputFields = __webpack_require__(158);

	var _InputFields2 = _interopRequireDefault(_InputFields);

	var _StringHandler = __webpack_require__(159);

	var _StringHandler2 = _interopRequireDefault(_StringHandler);

	var _Modals = __webpack_require__(160);

	var _Modals2 = _interopRequireDefault(_Modals);

	var _FileHandler = __webpack_require__(161);

	var _FileHandler2 = _interopRequireDefault(_FileHandler);

	var _PlatformHandler = __webpack_require__(169);

	var _PlatformHandler2 = _interopRequireDefault(_PlatformHandler);

	var _SocialHandler = __webpack_require__(170);

	var _SocialHandler2 = _interopRequireDefault(_SocialHandler);

	var _CameraHandler = __webpack_require__(171);

	var _CameraHandler2 = _interopRequireDefault(_CameraHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var utilsServices = angular.module("appAS.services.utils", ["ionic"]);

	utilsServices.service("DateHandler", _DateHandler2.default);
	utilsServices.service("InputFields", _InputFields2.default);
	utilsServices.service("StringHandler", _StringHandler2.default);
	utilsServices.service("Modals", _Modals2.default);
	utilsServices.service("FileHandler", _FileHandler2.default);
	utilsServices.service("PlatformHandler", _PlatformHandler2.default);
	utilsServices.service("SocialHandler", _SocialHandler2.default);
	utilsServices.service("CameraHandler", _CameraHandler2.default);

	exports.default = utilsServices;

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DateHandler = function () {
	    function DateHandler() {
	        _classCallCheck(this, DateHandler);
	    }

	    _createClass(DateHandler, [{
	        key: "GetCurrentDate",
	        value: function GetCurrentDate() {

	            var today = new Date();
	            var dd = today.getDate();
	            var mm = today.getMonth() + 1; //January is 0!

	            if (dd < 10) {
	                dd = "0" + dd;
	            }

	            switch (mm) {
	                case 1:
	                    mm = "Gennaio";
	                    break;
	                case 2:
	                    mm = "Febbraio";
	                    break;
	                case 3:
	                    mm = "Marzo";
	                    break;
	                case 4:
	                    mm = "Aprile";
	                    break;
	                case 5:
	                    mm = "Maggio";
	                    break;
	                case 6:
	                    mm = "Giugno";
	                    break;
	                case 7:
	                    mm = "Luglio";
	                    break;
	                case 8:
	                    mm = "Agosto";
	                    break;
	                case 9:
	                    mm = "Settembre";
	                    break;
	                case 10:
	                    mm = "Ottobre";
	                    break;
	                case 11:
	                    mm = "Novembre";
	                    break;
	                case 12:
	                    mm = "Dicembre";
	                    break;

	            }

	            today = dd + " " + mm;

	            return today;
	        }
	    }, {
	        key: "GetFullDate",
	        value: function GetFullDate() {

	            var now = new Date();
	            var Hour = now.getHours();
	            var Minutes = now.getMinutes();

	            if (Minutes < 10) {
	                Minutes = "0" + Minutes;
	            }

	            return DateHandler.GetCurrentDate() + " alle " + Hour + ":" + Minutes;
	        }
	    }]);

	    return DateHandler;
	}();

	exports.default = DateHandler;

/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InputFields = function () {
	    function InputFields() {
	        _classCallCheck(this, InputFields);
	    }

	    _createClass(InputFields, [{
	        key: "filledFields",
	        value: function filledFields(fields) {
	            var check = true;
	            fields.map(function (item) {
	                if (item == undefined || item == "") {
	                    check = false;
	                }
	            });
	            return check;
	        }
	    }]);

	    return InputFields;
	}();

	exports.default = InputFields;

/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StringHandler = function () {
	    function StringHandler() {
	        _classCallCheck(this, StringHandler);
	    }

	    _createClass(StringHandler, [{
	        key: "shorten",
	        value: function shorten(text, maxLength) {
	            var ret = text;
	            if (ret.length > maxLength) {
	                ret = ret.substr(0, maxLength) + "…";
	            }
	            return ret;
	        }
	    }, {
	        key: "getErrorMessage",
	        value: function getErrorMessage(error) {
	            var message = "errore nella creazione dell'account";
	            switch (error) {
	                case "auth/invalid-email":
	                    message = "la mail è formattata in modo scorretto";
	                    break;
	                case "auth/weak-password":
	                    message = "la password deve contenere almeno 6 caratteri";
	                    break;
	                case "auth/email-already-in-use":
	                    message = "questa mail è già in uso su un altro account";
	                    break;
	            }
	            return message;
	        }
	    }]);

	    return StringHandler;
	}();

	exports.default = StringHandler;

/***/ },
/* 160 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Modals = function Modals($ionicLoading) {
	    _classCallCheck(this, Modals);

	    this.ResultTemplate = function (text) {
	        $ionicLoading.hide();
	        $ionicLoading.show({ template: text });
	        window.setTimeout(function () {
	            return $ionicLoading.hide();
	        }, 1000);
	    };
	};

	exports.default = Modals;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _includes = __webpack_require__(30);

	var _includes2 = _interopRequireDefault(_includes);

	var _pull = __webpack_require__(162);

	var _pull2 = _interopRequireDefault(_pull);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FileHandler = function FileHandler(Modals, PlatformHandler) {
	    _classCallCheck(this, FileHandler);

	    this.getFileBlob = function (url, cb) {
	        var xhr = new XMLHttpRequest();
	        xhr.open("GET", url);
	        xhr.responseType = "blob";
	        xhr.addEventListener("load", function () {
	            return cb(xhr.response);
	        });
	        xhr.send();
	    };

	    this.openFile = function (file, loadingTemplate) {
	        PlatformHandler.is("iOS", function () {
	            return cordova.InAppBrowser.open(file, "_system", "location=yes");
	        }, function () {
	            var fileURL = cordova.file.externalApplicationStorageDirectory + "file.pdf";
	            var fileTransfer = new FileTransfer();
	            loadingTemplate.show({
	                template: "Apertura File in Corso..."
	            });

	            fileTransfer.download(file, fileURL, function (entry) {
	                cordova.plugins.fileOpener2.open(entry.toURL(), "application/pdf", {
	                    error: function error() {
	                        loadingTemplate.hide();
	                    },
	                    success: function success() {
	                        loadingTemplate.hide();
	                    }
	                });
	            }, function () {}, false);
	        });
	    };

	    this.loadFile = function (ele, scope, multiple) {
	        ele.disabled = true;
	        var filename = ele.files[ele.files.length - 1].name;
	        var fileType = ele.files[ele.files.length - 1].type;

	        if (fileType != "application/pdf") {
	            Modals.ResultTemplate("puoi aggiungere solo file pdf");
	            ele.disabled = false;
	        } else if (multiple) {

	            if ((0, _includes2.default)(scope.fileList, filename)) {
	                Modals.ResultTemplate("Hai già caricato questo File");
	                ele.disabled = false;
	            } else {
	                scope.fileList.push(filename.slice(0, -4));
	                scope.binaryList.push({
	                    binary: ele.files[ele.files.length - 1],
	                    name: filename.slice(0, -4)
	                });
	                scope.$apply();
	                ele.disabled = false;
	            }
	        } else {
	            scope.pdf = {
	                binary: ele.files[ele.files.length - 1],
	                name: filename.slice(0, -4)
	            };
	            ele.disabled = false;
	            scope.$apply();
	        }
	    };

	    this.removeFile = function (file, fileList) {
	        return (0, _pull2.default)(fileList, file);
	    };
	};

	exports.default = FileHandler;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(163),
	    pullAll = __webpack_require__(165);

	/**
	 * Removes all given values from `array` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	 * to remove elements from an array by predicate.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {...*} [values] The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pull(array, 'a', 'c');
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	var pull = baseRest(pullAll);

	module.exports = pull;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(164);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = baseRest;


/***/ },
/* 164 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var basePullAll = __webpack_require__(166);

	/**
	 * This method is like `_.pull` except that it accepts an array of values to remove.
	 *
	 * **Note:** Unlike `_.difference`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pullAll(array, ['a', 'c']);
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	function pullAll(array, values) {
	  return (array && array.length && values && values.length)
	    ? basePullAll(array, values)
	    : array;
	}

	module.exports = pullAll;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(47),
	    baseIndexOf = __webpack_require__(31),
	    baseIndexOfWith = __webpack_require__(167),
	    baseUnary = __webpack_require__(124),
	    copyArray = __webpack_require__(168);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * The base implementation of `_.pullAllBy` without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAll(array, values, iteratee, comparator) {
	  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	      index = -1,
	      length = values.length,
	      seen = array;

	  if (array === values) {
	    values = copyArray(values);
	  }
	  if (iteratee) {
	    seen = arrayMap(array, baseUnary(iteratee));
	  }
	  while (++index < length) {
	    var fromIndex = 0,
	        value = values[index],
	        computed = iteratee ? iteratee(value) : value;

	    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	      if (seen !== array) {
	        splice.call(seen, fromIndex, 1);
	      }
	      splice.call(array, fromIndex, 1);
	    }
	  }
	  return array;
	}

	module.exports = basePullAll;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/**
	 * This function is like `baseIndexOf` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOfWith(array, value, fromIndex, comparator) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (comparator(array[index], value)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOfWith;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PlatformHandler = function () {
	    function PlatformHandler() {
	        _classCallCheck(this, PlatformHandler);
	    }

	    _createClass(PlatformHandler, [{
	        key: "is",
	        value: function is(platform, callback1, callback2) {

	            if (callback1 == undefined) {
	                callback1 = function callback1() {};
	            }

	            if (callback2 == undefined) {
	                callback2 = function callback2() {};
	            }

	            document.addEventListener("deviceready", function () {
	                if (window.cordova) {
	                    if (device.platform == platform) {
	                        callback1();
	                    } else {
	                        callback2();
	                    }
	                }
	            }, false);
	        }
	    }]);

	    return PlatformHandler;
	}();

	exports.default = PlatformHandler;

/***/ },
/* 170 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SocialHandler = function SocialHandler($ionicPlatform) {
	    _classCallCheck(this, SocialHandler);

	    this.shareApp = function () {

	        var options = {
	            message: "Scarica l'applicazione del liceo Ariosto Spallanzani!",
	            subject: "Applicazione liceo Ariosto Spallanzani",
	            files: []
	        };

	        window.plugins.socialsharing.shareWithOptions(options, function () {}, function () {});
	    };

	    this.rateUs = function () {
	        if ($ionicPlatform.is("ios")) {
	            window.open("itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8"); // or itms://
	        } else if ($ionicPlatform.is("android")) {
	            window.open("market://details?id=<package_name>");
	        }
	    };
	};

	exports.default = SocialHandler;

/***/ },
/* 171 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CameraHandler = function () {
	    function CameraHandler() {
	        _classCallCheck(this, CameraHandler);
	    }

	    _createClass(CameraHandler, [{
	        key: "getPic",
	        value: function getPic(callback) {
	            navigator.camera.getPicture(function (imageUrl) {
	                callback(imageUrl);
	            }, function (message) {
	                Modals.ResultTemplate("Non sono riuscito a reperire la foto perchè " + message);
	            }, {
	                quality: 50,
	                destinationType: Camera.DestinationType.FILE_URI,
	                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	            });
	        }
	    }]);

	    return CameraHandler;
	}();

	exports.default = CameraHandler;

/***/ },
/* 172 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Config = function () {
	    function Config() {
	        _classCallCheck(this, Config);
	    }

	    _createClass(Config, null, [{
	        key: "run",
	        value: function run($ionicPlatform, $ionicPopup) {
	            $ionicPlatform.ready(function () {

	                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	                }

	                if (window.Connection) {
	                    if (navigator.connection.type == Connection.NONE) {
	                        $ionicPopup.confirm({
	                            title: "Connessione a Internet assente",
	                            content: "Non è stata trovata nessuna connessione a Internet,collegati ad una rete e riprova."
	                        }).then(function (result) {
	                            if (!result) {
	                                ionic.Platform.exitApp();
	                            }
	                        });
	                    }
	                }
	            });
	        }
	    }, {
	        key: "config",
	        value: function config($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

	            $ionicConfigProvider.scrolling.jsScrolling(false);

	            $stateProvider.state("login", {
	                url: "/login",
	                templateUrl: "src/Components/FreeComponents/Components/LoginPage/login.html",
	                controller: "loginCtrl"
	            }).state("signup", {
	                url: "/signup",
	                templateUrl: "src/Components/FreeComponents/Components/SignupPage/signup.html",
	                controller: "signupCtrl"
	            }).state("tab", {
	                url: "/tab",
	                abstract: true,
	                templateUrl: "src/Components/FreeComponents/Components/Tabs/tabs.html",
	                controller: "tabsCtrl"
	            }).state("tab.admin", {
	                url: "/admin",
	                views: {
	                    "tab-admin": {
	                        templateUrl: "src/Components/MenuComponents/Components/AdminPage/tab-home.html",
	                        controller: "adminCtrl"
	                    }
	                }
	            }).state("tab.giornalino", {
	                url: "/giornalino",
	                views: {
	                    "tab-giornalino": {
	                        templateUrl: "src/Components/MenuComponents/Components/ArticlesPage/tab-giornalino.html",
	                        controller: "attualitaCtrl"
	                    }
	                }
	            }).state("tab.orientamento", {
	                url: "/orientamento",
	                views: {
	                    "tab-orientamento": {
	                        templateUrl: "src/Components/MenuComponents/Components/ArticlesPage/tab-giornalino.html",
	                        controller: "orientamentoCtrl"
	                    }
	                }
	            }).state("tab.biblioteca", {
	                url: "/biblioteca",
	                views: {
	                    "tab-biblioteca": {
	                        templateUrl: "src/Components/MenuComponents/Components/LibraryPage/tab-library.html",
	                        controller: "libraryCtrl"
	                    }
	                }
	            }).state("tab.forum", {
	                url: "/forum",
	                views: {
	                    "tab-forum": {
	                        templateUrl: "src/Components/MenuComponents/Components/NewsPage/tabs-forum.html",
	                        controller: "newsCtrl"
	                    }
	                }
	            }).state("tab.libera", {
	                url: "/libera",
	                views: {
	                    "tab-libera": {
	                        templateUrl: "src/Components/MenuComponents/Components/NewsPage/tabs-forum.html",
	                        controller: "freeZoneCtrl"
	                    }
	                }
	            }).state("tab.convenzioni", {
	                url: "/convenzioni",
	                views: {
	                    "tab-convenzioni": {
	                        templateUrl: "src/Components/MenuComponents/Components/ConventionsPage/tab-conventions.html",
	                        controller: "conventionsCtrl"
	                    }
	                }
	            }).state("tab.link", {
	                url: "/link",
	                views: {
	                    "tab-link": {
	                        templateUrl: "src/Components/MenuComponents/Components/LinkPage/tab-link.html",
	                        controller: "linkCtrl"
	                    }
	                }
	            }).state("tab.settings", {
	                url: "/settings",
	                views: {
	                    "tab-settings": {
	                        templateUrl: "src/Components/MenuComponents/Components/SettingsPage/tab-settings.html",
	                        controller: "settingsCtrl"
	                    }
	                }
	            }).state("addArticle", {
	                url: "/addArticle",
	                templateUrl: "src/Components/BarComponents/Components/AddArticlePage/addArticle.html",
	                controller: "addArticleCtrl"
	            }).state("sendMessage", {
	                url: "/sendMessage",
	                templateUrl: "src/Components/BarComponents/Components/AddNewsPage/sendMessage.html",
	                controller: "addNewsCtrl"
	            }).state("comments", {
	                url: "/comments",
	                templateUrl: "src/Components/BarComponents/Components/CommentsPage/comments.html",
	                controller: "commentsCtrl"
	            }).state("likes", {
	                url: "/likes",
	                templateUrl: "src/Components/BarComponents/Components/LikesPage/likes.html",
	                controller: "likesCtrl"
	            }).state("moderation", {
	                url: "/moderation",
	                templateUrl: "src/Components/BarComponents/Components/ModerationPage/moderation.html",
	                controller: "moderationCtrl"
	            }).state("updateProfile", {
	                url: "/updateProfile",
	                templateUrl: "src/Components/BarComponents/Components/UpdateProfilePage/updateProfile.html",
	                controller: "updateProfileCtrl"
	            });

	            if (window.localStorage.getItem("RememberMe") == "true") {
	                $urlRouterProvider.otherwise("/tab/forum");
	            } else {
	                $urlRouterProvider.otherwise("/login");
	            }
	        }
	    }]);

	    return Config;
	}();

	exports.default = Config;

/***/ },
/* 173 */
/***/ function(module, exports) {

	"use strict";

	var config = {
	    apiKey: "AIzaSyBQcIrRUzpahFxeh3s3pzGNlP8QqyFsvn8",
	    authDomain: "app-liceoariostospallanz-d12b0.firebaseapp.com",
	    databaseURL: "https://app-liceoariostospallanz-d12b0.firebaseio.com",
	    storageBucket: "app-liceoariostospallanz-d12b0.appspot.com"
	};

	module.exports = config;

/***/ }
/******/ ]);