(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[42],{119:function(e,r,n){"use strict";n.r(r),n.d(r,"deepNodes",(function(){return c}));var t=n(10);function a(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=n(433),d=function(e){var r=e.children,n=void 0===r?[]:r,d=a(e,["children"]);return Object(t.a)({id:Object(i.a)(),name:"".concat(n.length?"Group":"Child"),children:n},d)},c=(r.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}],[d({children:[d({children:[]}),d({children:[]}),d({children:[]})]}),d({children:[d({children:[d({children:[d({children:[]}),d({children:[]})]}),d({children:[d({children:[]})]})]}),d({children:[d({children:[d({children:[]}),d({children:[]}),d({children:[]})]}),d({children:[d({children:[]})]})]}),d({children:[]})]})])},433:function(e,r,n){"use strict";var t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function i(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(a)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&d.test(e)},o=[],f=0;f<256;++f)o.push((f+256).toString(16).substr(1));var l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(o[e[r+0]]+o[e[r+1]]+o[e[r+2]]+o[e[r+3]]+"-"+o[e[r+4]]+o[e[r+5]]+"-"+o[e[r+6]]+o[e[r+7]]+"-"+o[e[r+8]]+o[e[r+9]]+"-"+o[e[r+10]]+o[e[r+11]]+o[e[r+12]]+o[e[r+13]]+o[e[r+14]]+o[e[r+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};r.a=function(e,r,n){var t=(e=e||{}).random||(e.rng||i)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,r){n=n||0;for(var a=0;a<16;++a)r[n+a]=t[a];return r}return l(t)}}}]);
//# sourceMappingURL=42.05c20c2c.chunk.js.map