(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[24,44,54],{118:function(e,n,r){"use strict";r.r(n),r.d(n,"randomEntity",(function(){return o})),r.d(n,"randomEntities",(function(){return c})),r.d(n,"randomEntityNoChildren",(function(){return i})),r.d(n,"randomEntitiesNoChildren",(function(){return l}));var t=r(1),a=r(433),o=function(e){var n=Object(a.a)(),r=Object(t.random)(0,4)<1,o=r?c(Object(t.random)(0,5),n):void 0;return{id:n,name:"".concat(Object(t.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(n),type:r?"group":"single",parent:e,children:o}},c=function(e,n){return new Array(e).fill(0).map((function(){return o(n)}))},i=function(){var e=Object(a.a)(),n=Object(t.random)(0,4)<2,r=n?c(Object(t.random)(0,2),e):void 0;return Object(t.random)(0,4)<2&&(r=[]),{id:e,name:"".concat(Object(t.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:r,isGroup:n}},l=function(e){return new Array(e).fill(0).map((function(){return i()}))}},123:function(e,n,r){"use strict";r.r(n),r.d(n,"TreeToolbar",(function(){return l}));var t=r(0),a=r.n(t),o=r(486),c=r(506),i=r(204),l=function(e){var n=e.searchQuery,r=e.setSearchQuery;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{withDepth:!1},a.a.createElement(o.a,{clearable:!0,containerProps:{"data-testid":"tree-searchbox"},onSearch:function(e){var n=e.value;return r(n)},placeholder:"Search all",searchOnEnter:!1,value:n})),a.a.createElement(i.a,{margin:"none",orientation:"horizontal",type:"non-form"}))}},124:function(e,n,r){"use strict";r.r(n),r.d(n,"TreeContainer",(function(){return o}));var t=r(26);function a(){var e=Object(t.a)(["\n  height: calc(100% - ","px);\n"]);return a=function(){return e},e}var o=r(16).default.div(a(),(function(e){return e.offsetHeight||80}))},154:function(e,n,r){"use strict";r.r(n);var t=r(81),a=r(0),o=r.n(a),c=r(205),i=r(206),l=r(816),u=r(83),s=r(84),d=r(123),f=r(118),p=r(124),h=Object(f.randomEntities)(2500);n.default=function(){var e=Object(a.useRef)(null),n=Object(a.useState)(""),r=Object(t.a)(n,2),f=r[0],v=r[1];return o.a.createElement(p.TreeContainer,{offsetHeight:48},o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(d.TreeToolbar,{searchQuery:f,setSearchQuery:v}),o.a.createElement(c.a,{data:h,fluid:!0,groupIcon:o.a.createElement(u.a,null),instanceRef:e,isMultiSelect:!0,itemIcon:o.a.createElement(s.a,null),plugins:[i.a,l.a],searchQuery:f,showChildrenAmount:!0,sortable:!0})))}},433:function(e,n,r){"use strict";var t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(a)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&c.test(e)},l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));var s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(l[e[n+0]]+l[e[n+1]]+l[e[n+2]]+l[e[n+3]]+"-"+l[e[n+4]]+l[e[n+5]]+"-"+l[e[n+6]]+l[e[n+7]]+"-"+l[e[n+8]]+l[e[n+9]]+"-"+l[e[n+10]]+l[e[n+11]]+l[e[n+12]]+l[e[n+13]]+l[e[n+14]]+l[e[n+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r};n.a=function(e,n,r){var t=(e=e||{}).random||(e.rng||o)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){r=r||0;for(var a=0;a<16;++a)n[r+a]=t[a];return n}return s(t)}},486:function(e,n,r){"use strict";r(2),r(6);var t=r(0),a=r.n(t),o=r(3),c=r.n(o),i=(r(4),r(33),r(34),r(7),r(73),r(74),r(30),r(213)),l=r(480),u=r(256),s=r(262);var d=Object(s.a)((function(e){var n=e.containerProps,r=e.placeholder,t=e.className,o=e.disabled,c=e.disableButton,s=e.innerRef,d=e.showIcon,f=e.style,p=e.onChange,h=e.onKeyUp,v=e.onSearch,m=e.readOnly,y=e.value,b=e.clearable;return a.a.createElement(l.a,{className:t,clearable:b,containerProps:n,disabled:o,innerRef:s,onChange:p,onKeyUp:h,placeholder:r,readOnly:m,rightComponent:d&&a.a.createElement(i.a,{disabled:o||c,buttonType:"text",icon:a.a.createElement(u.a,null),iconSize:"s",onClick:v}),style:f,value:y})})),f=function(e){var n=e.containerProps,r=void 0===n?{}:n,t=e.innerRef,o=void 0===t?void 0:t,c=e.className,i=void 0===c?"":c,l=e.disabled,u=void 0!==l&&l,s=e.disableButton,f=void 0!==s&&s,p=e.searchIcon,h=void 0===p?"search":p,v=e.style,m=void 0===v?{}:v,y=e.property,b=void 0===y?"all":y,g=e.placeholder,O=void 0===g?"Search all":g,E=e.searchOnEnter,S=void 0===E||E,j=e.clearOnSearch,w=void 0!==j&&j,C=e.onKeyUp,R=void 0===C?function(){return null}:C,I=e.onSearch,T=void 0===I?function(){return null}:I,U=e.onChange,N=void 0===U?function(){return null}:U,J=e.readOnly,P=void 0!==J&&J,K=e.value,Q=void 0===K?void 0:K,V=e.showIcon,A=void 0===V||V;return a.a.createElement(d,{className:i,clearOnSearch:w,containerProps:r,disabled:u,disableButton:f,innerRef:o,onKeyUp:R,onSearch:T,onChange:N,placeholder:O,property:b,readOnly:P,searchIcon:h,searchOnEnter:S,showIcon:A,style:m,value:Q})};f.propTypes={containerProps:c.a.shape({}),className:c.a.string,innerRef:c.a.any,searchIcon:c.a.string,style:c.a.objectOf(c.a.string),property:c.a.string,placeholder:c.a.string,searchOnEnter:c.a.bool,clearOnSearch:c.a.bool,onKeyUp:c.a.func,onSearch:c.a.func,onChange:c.a.func,value:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),showIcon:c.a.bool,disabled:c.a.bool,disableButton:c.a.bool,readOnly:c.a.bool};n.a=f}}]);
//# sourceMappingURL=24.7a709377.chunk.js.map