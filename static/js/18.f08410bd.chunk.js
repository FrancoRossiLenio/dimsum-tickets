(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[18],{222:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(743);t.default=Object(a.memo)((function(){return o.a.createElement(r.a,{pageTitle:o.a.createElement(r.c,null,"Automation Rules"),summary:o.a.createElement(r.b,{label:"Rules",value:0,"data-testid":"workflow-rules-header-summary"})})}))},732:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n.n(a),r=n(10),i=Object(r.b)("form-required-mark").cssClassName,c=function(e){var t=e.required,n=void 0!==t&&t,a=e.optional;return n||void 0!==a&&a?n?o.a.createElement("span",{className:"".concat(i)},"\u25cf"):o.a.createElement("span",{className:"".concat(i," optional-mark")},"\u26ac"):null}},737:function(e,t,n){"use strict";n(0),n(10);var a=n(732);n.d(t,"a",(function(){return a.a}))},738:function(e,t,n){"use strict";var a=n(1),o=n(0),r=n.n(o),i=n(2),c=n.n(i),l=n(10);function u(e){var t=e.containerComponent,n=void 0===t?"li":t,o=e.as,i=void 0===o?"a":o,c=e.active,u=void 0!==c&&c,s=e.href,d=void 0===s?void 0:s,p=e.onClick,b=void 0===p?function(){return null}:p,v=e.label,m=void 0===v?"":v,h=Object(a.a)(e,["containerComponent","as","active","href","onClick","label"]),O=Object(l.a)(n)("breadcrumb","crumb",(function(e){return{active:e.active}})),f=Object(l.a)(i)("breadcrumb","label");return r.a.createElement(O,Object(a.d)({"aria-current":u?"page":void 0,"data-testid":"breadcrumb-item-container",classProps:{active:u}},h),r.a.createElement(f,{href:d,onClick:b},m))}u.propTypes={containerComponent:c.a.string,as:c.a.string,active:c.a.bool,href:c.a.string,onClick:c.a.func,label:c.a.string};var s=function(e){var t=e.containerProps,n=void 0===t?{}:t,i=e.as,c=void 0===i?"nav":i,u=e.label,s=void 0===u?"Breadcrumb":u,d=e.children,p=Object(a.a)(e,["containerProps","as","label","children"]),b=["nav","div","header","footer","main"].indexOf(c)>-1?c:"nav",v=Object(l.a)(b)("breadcrumb");return r.a.createElement(v,Object(a.d)({"aria-label":s,"data-testid":"breadcrumb-nav-container"},p,n),r.a.createElement("ol",{"data-testid":"list-container"},r.a.Children.map(d,(function(e,t){return t<d.length-1?e:Object(o.cloneElement)(e,{active:!0})}))))};s.Item=u,s.propTypes={containerProps:c.a.shape({}),as:c.a.string,label:c.a.string,children:c.a.arrayOf(u).isRequired},t.a=s},743:function(e,t,n){"use strict";n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return W})),n.d(t,"c",(function(){return z}));var a=n(1),o=n(0),r=n.n(o),i=n(2),c=n.n(i),l=n(10),u=n(491),s=n(61),d=n(90),p=n(6),b=n(12),v=n(609),m=n(730),h=n(190),O=n.n(h),f=n(185),g=(n(50),n(366)),E=n(737),j=n(140),P=n(92),w=n.n(P),S=n(738),I=n(395),y=n(488),k="page-header-v2",T=Object(l.a)("div")("".concat(k,"-title"),"title"),x=(Object(l.a)(g.b)("".concat(k,"-title"),"editable-title"),Object(l.a)("div")("".concat(k,"-back"))),C=Object(l.a)("div")("".concat(k,"-summary")),M=Object(l.a)("div")("".concat(k,"-menu")),B=Object(l.a)("div")("".concat(k,"-toolbar")),z=function(e){var t=e.children,n=e.showMarker,o=void 0!==n&&n,i=Object(a.a)(e,["children","showMarker"]);return r.a.createElement(T,i,r.a.createElement(f.c,{value:t}),o&&r.a.createElement(E.a,{required:!0}))};function N(){var e=Object(a.f)(["\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n"]);return N=function(){return e},e}s.a.div(N());c.a.string,c.a.bool,c.a.bool;var W=function(e){var t=e.value,n=void 0===t?null:t,o=e.label,i=void 0===o?"":o,c=Object(a.a)(e,["value","label"]);return r.a.createElement(C,c,n&&r.a.createElement("div",{className:"ph-summary-value"},n),i&&r.a.createElement("div",{className:"ph-summary-label"},i),(n||i)&&r.a.createElement("div",{className:"ph-summary-space"}))},F=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return r.a.createElement(M,n,t)},A=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return r.a.createElement(B,n,t)},G=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return r.a.createElement(x,n,t)};function q(){var e=Object(a.f)(["\n  width: 100%;\n  padding-bottom: ",";\n  border-bottom: solid 1px ",";\n"]);return q=function(){return e},e}function R(){var e=Object(a.f)(["  \n  width: 100%;\n  margin-bottom: ",";\n"]);return R=function(){return e},e}function J(){var e=Object(a.f)(["\n  width: auto;\n  color: ",";\n  font-style: italic;\n  font-size: 0.8rem;\n"]);return J=function(){return e},e}s.a.div(J(),O.a.colors.brand[800]);var D=s.a.div(R(),O.a.space[1]),H=s.a.div(q(),O.a.space[1],O.a.colors.neutral[400]),K=function(e){var t=e.containerProps,n=void 0===t?{}:t,i=e.breadcrumbs,c=void 0===i?null:i,l=e.pageTitle,u=void 0===l?null:l,s=e.backarrow,d=void 0===s?null:s,p=e.summary,v=void 0===p?null:p,h=e.toolbar,O=void 0===h?null:h,f=e.menu,g=void 0===f?null:f,E=Object(b.compact)([1,"268px"]),P=Object(b.compact)(["auto",g&&"30px",v&&"auto",1]),w=Object(o.useState)(!1),S=Object(a.b)(w,2),I=S[0],y=S[1],k=I?{opacity:.5,pointerEvents:"none"}:{};return r.a.createElement(D,n,r.a.createElement(H,null,r.a.createElement(m.a,{cols:["auto",1]},r.a.createElement(m.a,null,r.a.createElement(G,{style:k},d)),r.a.createElement(m.a,{rows:["auto","auto"]},r.a.createElement(m.a,{className:"".concat(j.a,"-page-header-v2-breadcrumb"),style:k},c),r.a.createElement(m.a,{cols:E},r.a.createElement(m.a,{cols:P},r.a.cloneElement(u,{onBlur:function(e){y(!1),u.props.onBlur&&u.props.onBlur(e)},onFocus:function(e){y(!0),u.props.onFocus&&u.props.onFocus(e)}}),g&&r.a.createElement(F,null,g),v,r.a.createElement("div",null)),r.a.createElement(m.a,null,r.a.createElement(A,null,O)))))))};K.propTypes={containerProps:c.a.shape({})};var L=Object(l.a)("span")("".concat("page-header","-title"),"title"),Q=Object(l.a)(g.b)("".concat("page-header","-title"),"editable-title");function U(e){var t=e.children,n=e.editing,i=e.titleInputProps,c=Object(o.useState)(t),l=Object(a.b)(c,2),u=l[0],s=l[1],d=Object(o.useState)(!1),b=Object(a.b)(d,2),v=b[0],m=b[1],h=w()(n||!1),O=Object(a.b)(h,2),f=O[0],g=O[1],E=Object(o.useRef)(null);return r.a.createElement(r.a.Fragment,null,v||f?r.a.createElement(Q,Object(a.d)({},i,{onBlur:Object(p.runAll)((function(){return g(!1)}),i.onBlur),onChange:Object(p.runAll)((function(e){return s(e.target.value)}),i.onChange),onFocus:Object(p.runAll)((function(){return g(!0)}),i.onFocus),onMouseOut:Object(p.runAll)((function(){return m(!1)}),i.onMouseOut),value:u})):r.a.createElement(L,{ref:E,onMouseEnter:function(){return m(!0)}},u))}U.propTypes={children:c.a.string,editing:c.a.bool};var V=Object(l.a)("span")("".concat("page-header","-title-wrapper"));function X(e){var t=e.titleComponent,n=e.onSelectOption,a=e.options,o=e.optionsMinWidth,i=e.selection,c=e.zIndex;return r.a.createElement(V,null,t,r.a.createElement(u.a,{minWidth:o,onSelectMenuItem:n,options:a,selection:i,triggerComponent:r.a.createElement(d.d,{buttonType:"text","data-testid":"page-header-dropdown-trigger-component",icon:r.a.createElement(v.a,null)}),zIndex:c}))}X.propTypes={};var Y=Object(l.a)("div")("page-header",null,(function(e){return{"with-bottom-separator":e.withBottomSeparator,"with-subtitle":e.subtitle}})),Z=Object(l.a)("div")("".concat("page-header","-main-section")),$=Object(l.a)("div")("".concat("page-header","-title-section")),_=Object(l.a)("div")("".concat("page-header","-toolbar"),null,(function(){return{"ie-flex-basis-auto":!0}})),ee=Object(l.a)(S.a)("".concat("page-header","-breadcrumb")),te=Object(l.a)("div")("".concat("page-header","-title")),ne=Object(l.a)("div")("".concat("page-header","-title"),"subtitle"),ae=Object(l.a)(I.a)("".concat("page-header","-backarrow"));function oe(e){var t=e.title,n=void 0===t?"":t,a=e.options,o=void 0===a?[]:a,i=e.optionsMinWidth,c=e.onSelectOption,l=void 0===c?function(){return null}:c,u=e.selection,s=e.subtitle,d=void 0===s?"":s,p=e.editable,b=void 0!==p&&p,v=e.editing,m=void 0!==v&&v,h=e.titleInputProps,O=e.zIndex,f=b?r.a.createElement(U,{editing:m,titleInputProps:h},n):r.a.createElement(L,null,n);return r.a.createElement(te,null,o.length?r.a.createElement(X,{onSelectOption:l,options:o,optionsMinWidth:i,selection:u,titleComponent:f,zIndex:O}):f,d&&r.a.createElement(ne,null,d))}function re(e){var t=e.containerProps,n=e.className,o=e.title,i=e.titleOptions,c=e.renderToolbar,l=e.breadcrumbs,u=void 0===l?[]:l,s=e.previousPage,d=e.onGoToPreviousPage,b=void 0===d?function(){return null}:d,v=e.subtitle,m=void 0===v?"":v,h=e.withBottomSeparator,O=e.onSelectOption,f=e.optionsSelection,g=e.optionsMinWidth,E=e.editable,j=void 0!==E&&E,P=e.titleInputProps,w=e.editing,I=void 0===w?void 0:w,k=e.zIndex,T=!!u.length;return r.a.createElement(Y,Object(a.d)({},t,{className:n,classProps:{withBottomSeparator:h,subtitle:m}}),s&&r.a.createElement(ae,{"data-testid":"back-arrow",onClick:b,size:y.b.M}),r.a.createElement(Z,null,T&&r.a.createElement(ee,null,u.map((function(e){return r.a.createElement(S.a.Item,Object(a.d)({key:e.label},e))}))),s&&r.a.createElement(S.a.Item,Object(a.d)({key:s.id,label:s.title,onClick:s.onClick},s)),r.a.createElement($,null,r.a.createElement(oe,{editable:j,editing:I,onSelectOption:O,options:i,optionsMinWidth:g,selection:f,subtitle:m,title:o,titleInputProps:P,zIndex:k}),Object(p.isFunction)(c)&&r.a.createElement(_,null,c()))))}var ie=function(e){var t=e.containerProps,n=void 0===t?{}:t,o=e.renderToolbar,i=void 0===o?void 0:o,c=e.withBottomSeparator,l=void 0===c||c,u=e.title,s=void 0===u?"":u,d=e.titleOptions,p=void 0===d?void 0:d,b=e.onSelectOption,v=void 0===b?function(){return null}:b,m=e.subtitle,h=void 0===m?"":m,O=e.optionsSelection,g=void 0===O?{}:O,E=e.onGoToPreviousPage,j=void 0===E?function(){return null}:E,P=e.previousPage,w=e.editable,S=void 0!==w&&w,I=e.editing,y=void 0===I?void 0:I,k=e.titleInputProps,T=void 0===k?{}:k,x=e.zIndex,C=void 0===x?2:x,M=e.optionsMinWidth,B=void 0===M?void 0:M,z=Object(a.a)(e,["containerProps","renderToolbar","withBottomSeparator","title","titleOptions","onSelectOption","subtitle","optionsSelection","onGoToPreviousPage","previousPage","editable","editing","titleInputProps","zIndex","optionsMinWidth"]);return r.a.createElement(f.a,null,r.a.createElement(re,Object(a.d)({containerProps:n,editable:S,editing:y,onGoToPreviousPage:j,onSelectOption:v,optionsMinWidth:B,optionsSelection:g,previousPage:P,renderToolbar:i,subtitle:h,title:s,titleInputProps:T,titleOptions:p,withBottomSeparator:l,zIndex:C},z)))};ie.propTypes={version:c.a.oneOf([1,2]),containerProps:c.a.shape({}),renderToolbar:c.a.func,withBottomSeparator:c.a.bool,title:c.a.string,titleOptions:c.a.arrayOf(c.a.object),onSelectOption:c.a.func,subtitle:c.a.string,optionsSelection:c.a.shape({}),editable:c.a.bool,editing:c.a.bool,titleInputProps:c.a.shape({}),previousPage:c.a.shape({}),onGoToPreviousPage:c.a.func,zIndex:c.a.number}}}]);
//# sourceMappingURL=18.f08410bd.chunk.js.map