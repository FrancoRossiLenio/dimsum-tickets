(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[29,44,52],{118:function(t,n,e){"use strict";e.r(n),e.d(n,"randomEntity",(function(){return a})),e.d(n,"randomEntities",(function(){return i})),e.d(n,"randomEntityNoChildren",(function(){return c})),e.d(n,"randomEntitiesNoChildren",(function(){return u}));var r=e(1),o=e(433),a=function(t){var n=Object(o.a)(),e=Object(r.random)(0,4)<1,a=e?i(Object(r.random)(0,5),n):void 0;return{id:n,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(n),type:e?"group":"single",parent:t,children:a}},i=function(t,n){return new Array(t).fill(0).map((function(){return a(n)}))},c=function(){var t=Object(o.a)(),n=Object(r.random)(0,4)<2,e=n?i(Object(r.random)(0,2),t):void 0;return Object(r.random)(0,4)<2&&(e=[]),{id:t,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(t),type:n?"group":"single",children:e,isGroup:n}},u=function(t){return new Array(t).fill(0).map((function(){return c()}))}},122:function(t,n,e){"use strict";e.r(n),e.d(n,"useTreeInitialSelectionState",(function(){return c}));var r=e(10),o=e(81),a=e(0),i=e(40),c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=Object(a.useState)({}),c=Object(o.a)(e,2),u=c[0],s=c[1];return Object(a.useEffect)((function(){var e={},o=Array.isArray(n)?n:[n];o.length&&(e=o.reduce((function(n,e){return n.items=Object(r.a)(Object(r.a)({},n.items),{},{[e.id]:!0}),e.parent&&!n.items[e.parent]?Object(i.evalParent)({hash:t,selectedItems:o,acc:n,parentId:e.parent}):n}),{items:[],parents:[]})),s(e.items)}),[t,n]),u}},152:function(t,n,e){"use strict";e.r(n);var r=e(81),o=e(0),a=e.n(o),i=e(205),c=e(206),u=e(83),s=e(84),d=e(122),f=e(118),l=Object(f.randomEntities)(100),p=function(t){console.log(111,t)};n.default=function(){var t=Object(o.useState)(l),n=Object(r.a)(t,1)[0],e=Object(d.useTreeInitialSelectionState)(l,[l[85]]),f=Object(o.useRef)(null);return Object(o.useEffect)((function(){!function(){var t=f.current.actions.toggleExpandAll;console.log("REF",f.current),t&&t()}()}),[]),a.a.createElement(i.a,{data:n,fluid:!0,instanceRef:f,groupIcon:a.a.createElement(u.a,null),isSingleSelect:!0,itemIcon:a.a.createElement(s.a,null),selection:e,onItemClick:p,plugins:[c.a]})}},433:function(t,n,e){"use strict";var r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&i.test(t)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(u[t[n+0]]+u[t[n+1]]+u[t[n+2]]+u[t[n+3]]+"-"+u[t[n+4]]+u[t[n+5]]+"-"+u[t[n+6]]+u[t[n+7]]+"-"+u[t[n+8]]+u[t[n+9]]+"-"+u[t[n+10]]+u[t[n+11]]+u[t[n+12]]+u[t[n+13]]+u[t[n+14]]+u[t[n+15]]).toLowerCase();if(!c(e))throw TypeError("Stringified UUID is invalid");return e};n.a=function(t,n,e){var r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){e=e||0;for(var o=0;o<16;++o)n[e+o]=r[o];return n}return d(r)}}}]);
//# sourceMappingURL=29.1517f446.chunk.js.map