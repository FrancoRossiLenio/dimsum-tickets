(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[19,32],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(506),o=n(213);t.default=Object(a.memo)((function(){return r.a.createElement(c.a,{withDepth:!1},r.a.createElement(o.a,{"data-testid":"workflow-rules-toggle-rules",labelText:"Activate/Deactivate"}),r.a.createElement(o.a,{"data-testid":"workflow-rules-delete-rules",labelText:"Delete"}),r.a.createElement(o.a,{"data-testid":"workflow-rules-add-rule",labelText:"New Rule"}))}))},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(647),o=n(505),l=n(126);t.default=Object(a.memo)((function(){return r.a.createElement(c.a,{pageTitle:r.a.createElement(o.a,null,"Automation Rules"),toolbar:r.a.createElement(l.default,null)})}))},473:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s}));var a=n(28),r=n(823),c="page-header-v2",o=Object(a.b)("div")("".concat(c,"-title"),"title"),l=(Object(a.b)(r.a)("".concat(c,"-title"),"editable-title"),Object(a.b)("div")("".concat(c,"-back"))),i=Object(a.b)("div")("".concat(c,"-summary")),u=Object(a.b)("div")("".concat(c,"-menu")),s=Object(a.b)("div")("".concat(c,"-toolbar"))},475:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.a.Children.map(e,(function(e){return e?Object(a.cloneElement)(e,l(l(l({},t),e.props),{},{className:"".concat(e.props.className," toolbar-item")})):e}),null)}},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(6),r=n(0),c=n.n(r),o=n(511),l=n(810),i=n(473),u=function(e){var t=e.children,n=e.showMarker,r=void 0!==n&&n,u=Object(a.a)(e,["children","showMarker"]);return c.a.createElement(i.d,u,c.a.createElement(l.a,{value:t}),r&&c.a.createElement(o.a,{required:!0}))}},506:function(e,t,n){"use strict";var a=n(2),r=n(6),c=n(0),o=n.n(c),l=n(3),i=n.n(l),u=n(28),s=n(4),d=n(475),b=n(56),m=n(20),p=Object(u.b)("div")("toolbar",null,(function(e){var t,n=e.withDepth,a=e.alignment,r=e.size;return t={"without-depth":!n},Object(s.a)(t,a,!!a),Object(s.a)(t,r,r),t})),f=function(e){var t=e.containerProps,n=void 0===t?{}:t,l=e.innerRef,i=e.withDepth,u=void 0===i||i,s=e.alignment,f=void 0===s?"right":s,v=e.autoFocusOnMount,O=void 0===v||v,h=e.children,j=void 0===h?[]:h,E=e.size,w=void 0===E?"normal":E,g=Object(r.a)(e,["containerProps","innerRef","withDepth","alignment","autoFocusOnMount","children","size"]),y=Object(c.useRef)(null);return o.a.createElement(b.a,{autoFocusOnMount:O,getContainer:function(){return y.current},keyBindings:{Tab:"next"},orientation:"horizontal"},o.a.createElement(p,Object(a.a)({},n,g,{classProps:{withDepth:u,alignment:f,size:w},innerRef:Object(m.a)(l,y)}),Object(d.a)(j)))};f.propTypes={containerProps:i.a.shape({}),withDepth:i.a.bool,alignment:i.a.oneOf(["right","left"]),size:i.a.oneOf(["normal","compact"])},t.a=f},511:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(32),o=Object(c.b)("form-required-mark").cssClassName;t.a=function(e){var t=e.required,n=void 0!==t&&t,a=e.optional;return n||void 0!==a&&a?n?r.a.createElement("span",{className:"".concat(o)},"\u25cf"):r.a.createElement("span",{className:"".concat(o," optional-mark")},"\u26ac"):null}},647:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));n(2);var a=n(9),r=n(6),c=n(0),o=n.n(c),l=n(3),i=n.n(l),u=n(16),s=n(1),d=n(818),b=n(8),m=n(28),p=n(473),f=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(p.b,n,t)},v=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(p.e,n,t)},O=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(p.a,n,t)},h=(b.c.colors.brand[800],u.default.div.withConfig({componentId:"zsjccn-1"})(["width:100%;margin-bottom:4px;"])),j=u.default.div.withConfig({componentId:"zsjccn-2"})(["width:100%;padding-bottom:4px;border-bottom:solid 1px ",";"],b.c.colors.neutral[400]),E=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.breadcrumbs,l=void 0===r?null:r,i=e.pageTitle,u=void 0===i?null:i,b=e.backarrow,p=void 0===b?null:b,E=e.summary,w=void 0===E?null:E,g=e.toolbar,y=void 0===g?null:g,P=e.menu,k=void 0===P?null:P,D=Object(s.compact)([1,"268px"]),x=Object(s.compact)(["auto",k&&"30px",w&&"auto",1]),z=Object(c.useState)(!1),T=Object(a.a)(z,2),N=T[0],F=T[1],R=N?{opacity:.5,pointerEvents:"none"}:{};return o.a.createElement(h,n,o.a.createElement(j,null,o.a.createElement(d.a,{cols:["auto",1]},o.a.createElement(d.a,null,o.a.createElement(O,{style:R},p)),o.a.createElement(d.a,{rows:["auto","auto"]},o.a.createElement(d.a,{className:"".concat(m.a,"-page-header-v2-breadcrumb"),style:R},l),o.a.createElement(d.a,{cols:D},o.a.createElement(d.a,{cols:x},o.a.cloneElement(u,{onBlur:function(e){F(!1),u.props.onBlur&&u.props.onBlur(e)},onFocus:function(e){F(!0),u.props.onFocus&&u.props.onFocus(e)}}),k&&o.a.createElement(f,null,k),w,o.a.createElement("div",null)),o.a.createElement(d.a,null,o.a.createElement(v,null,y)))))))};E.propTypes={containerProps:i.a.shape({})}}}]);
//# sourceMappingURL=19.92561c2e.chunk.js.map