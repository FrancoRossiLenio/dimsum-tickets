(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[45,56],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"deepNodes",(function(){return l}));var c=t(8),r=t(508),a=t(223),i=function(e){var n=e.children,t=void 0===n?[]:n,i=Object(r.a)(e,["children"]);return Object(c.a)({id:Object(a.a)(),name:"".concat(t.length?"Group":"Child"),children:t},i)};n.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}];var l=[i({children:[i({children:[]}),i({children:[]}),i({children:[]})]}),i({children:[i({children:[i({children:[i({children:[]}),i({children:[]})]}),i({children:[i({children:[]})]})]}),i({children:[i({children:[i({children:[]}),i({children:[]}),i({children:[]})]}),i({children:[i({children:[]})]})]}),i({children:[]})]})]},166:function(e,n,t){"use strict";t.r(n);var c=t(81),r=t(0),a=t.n(r),i=t(214),l=t(215),d=t(82),o=t(83),u=t(120);n.default=function(){var e=Object(r.useState)(u.default),n=Object(c.a)(e,2),t=n[0],f=n[1],h=Object(r.useRef)(null),b=Object(r.useState)(""),s=Object(c.a)(b,2),p=s[0],O=s[1],m=Object(r.useState)(!1),j=Object(c.a)(m,2),g=j[0],y=j[1];return a.a.createElement(i.a,{key:g,data:t,fluid:!0,groupIcon:a.a.createElement(d.a,null),instanceRef:h,itemIcon:a.a.createElement(o.a,null),onOrderChange:f,onItemClick:function(e){var n;h.current.actions.select(e),p!==e.id?(n=!0,O(e.id)):h.current.state.selection[e.id]?(y(!g),console.log("Some clear selection logic here")):n=!0,n&&console.log("Some selection logic here")},plugins:[l.a],showChildrenAmount:!0,sortable:!0})}},508:function(e,n,t){"use strict";function c(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",(function(){return c}))}}]);
//# sourceMappingURL=45.ca42b859.chunk.js.map