(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[30],{366:function(e,t,n){"use strict";n(3),n(0),n(6);var a=n(23),o=Object(a.a)({paths:["M15 10.5c0 3.038-2.462 5.5-5.5 5.5S4 13.538 4 10.5 6.462 5 9.5 5 15 7.462 15 10.5zm-2.672-2.121l-.707-.707L9.5 9.793 7.379 7.672l-.707.707L8.793 10.5l-2.121 2.121.707.707L9.5 11.207l2.121 2.121.707-.707-2.121-2.121 2.121-2.121z"],height:20,width:20});t.a=o},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u}));var a=n(28),o=n(619),r="page-header-v2",i=Object(a.b)("div")("".concat(r,"-title"),"title"),c=(Object(a.b)(o.a)("".concat(r,"-title"),"editable-title"),Object(a.b)("div")("".concat(r,"-back"))),l=Object(a.b)("div")("".concat(r,"-summary")),s=Object(a.b)("div")("".concat(r,"-menu")),u=Object(a.b)("div")("".concat(r,"-toolbar"))},502:function(e,t,n){"use strict";var a=n(3),o=n(5),r=n(0),i=n.n(r),c=n(28),l=n(4),s=n(33),u=n(34),p=n(73),d=n(74),m=n(30);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var h=Object(c.b)("div")("input-addon-wrapper"),O=Object(c.b)("span")("input-addon-wrapper","addon",(function(e){var t=e.left,n=e.right,a=e.variant;return Object(l.a)({left:t,right:n},a,a)})),y=function(e){Object(p.a)(n,e);var t=v(n);function n(){return Object(s.a)(this,n),t.call(this)}return Object(u.a)(n,[{key:"getLeftAddon",value:function(e){return this.renderAddonComponent(!0,e)}},{key:"getRightAddon",value:function(e){return this.renderAddonComponent(!1,e)}},{key:"renderAddonComponent",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;if(!t)return null;if(Array.isArray(t)&&!t.filter((function(e){return e})).length)return null;var n=this.props.containerProps,o=e?{left:!0}:{right:!0};return i.a.createElement(O,Object(a.a)({classProps:o},n),t.map((function(e,t){return e&&i.a.cloneElement(e,f(f({},e.props),{},{key:t}))})))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.innerRef,r=e.rightComponents,c=e.leftComponents,l=e.children,s=e.variant,u=e.containerProps,p=i.a.Children.only(l),d=p.props,m=d.hasError,b=d.readOnly,f=d.disabled,v=this.getRightAddon(Object(o.a)(r)),O=this.getLeftAddon(Object(o.a)(c));return i.a.createElement(h,Object(a.a)({className:t,classProps:{hasError:m,readOnly:b,disabled:f,variant:s},innerRef:n},u),O,p,v)}}]),n}(r.Component);Object(l.a)(y,"defaultProps",{rightComponents:[],leftComponents:[],containerProps:{}}),t.a=y},533:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(6),o=n(0),r=n.n(o),i=n(542),c=n(917),l=n(496),s=function(e){var t=e.children,n=e.showMarker,o=void 0!==n&&n,s=Object(a.a)(e,["children","showMarker"]);return r.a.createElement(l.d,s,r.a.createElement(c.a,{value:t}),o&&r.a.createElement(i.a,{required:!0}))}},542:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(32),i=Object(r.b)("form-required-mark").cssClassName;t.a=function(e){var t=e.required,n=void 0!==t&&t,a=e.optional;return n||void 0!==a&&a?n?o.a.createElement("span",{className:"".concat(i)},"\u25cf"):o.a.createElement("span",{className:"".concat(i," optional-mark")},"\u26ac"):null}},550:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(6),o=n(0),r=n.n(o),i=n(2),c=n.n(i),l=n(496),s=function(e){var t=e.value,n=void 0===t?null:t,o=e.label,i=void 0===o?"":o,c=Object(a.a)(e,["value","label"]);return r.a.createElement(l.c,c,(0===n||n)&&r.a.createElement("div",{className:"ph-summary-value"},n),i&&r.a.createElement("div",{className:"ph-summary-label"},i),(0===n||n||i)&&r.a.createElement("div",{className:"ph-summary-space"}))};s.propTypes={value:c.a.number,label:c.a.string}},619:function(e,t,n){"use strict";var a=n(3),o=(n(5),n(6)),r=n(0),i=n.n(r),c=n(2),l=n.n(c),s=n(4),u=n(33),p=n(34),d=n(8),m=n(73),b=n(74),f=n(30),v=n(76),h=n(28),O=n(227),y=n(620),g=n(366),j=n(502);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(b.a)(this,n)}}var P=Object(h.b)("input")("input",null,(function(e){return{clearable:e.clearable,value:e.value}})),T=Object(h.b)("div")("input","tooltip-ref"),x=Object(h.b)("div")("input",null,(function(e){return{clearable:e.clearable,value:e.value}})),R=Object(h.b)(O.a)("input","clearable"),k=function(e){return e},A=function(){return null},L=function(e){Object(m.a)(n,e);var t=C(n);function n(e){var a;return Object(u.a)(this,n),a=t.call(this,e),Object(s.a)(Object(d.a)(a),"state",{width:-1,active:!1,showTooltip:!1}),Object(s.a)(Object(d.a)(a),"handleBlur",(function(e){(0,a.props.onBlur)(e),a.setState({active:!1})})),Object(s.a)(Object(d.a)(a),"handleFocus",(function(e){(0,a.props.onFocus)(e),a.setState({active:!0})})),Object(s.a)(Object(d.a)(a),"handleMouseEnter",(function(){a.setState({showTooltip:!0})})),Object(s.a)(Object(d.a)(a),"handleMouseLeave",(function(){a.setState({showTooltip:!1})})),Object(s.a)(Object(d.a)(a),"setWidth",(function(){var e=a.refTooltip.current.getBoundingClientRect();a.setState({width:e.width})})),a.ref=i.a.createRef(),a.refTooltip=i.a.createRef(),a.handleClear=a.handleClear.bind(Object(d.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setWidth(),window.addEventListener("resize",this.setWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setWidth)}},{key:"handleClear",value:function(){var e=this.props,t=e.onClear,n=e.onChange;e.clearable&&t?t():n({target:{value:""}}),(this.ref||{}).current&&this.ref.current.focus()}},{key:"renderClearableComponent",value:function(){var e=this.props,t=e.clearable,n=e.value,a=e.disabled;return a?null:t&&n?i.a.createElement(R,{buttonType:"text","data-testid":"ds-input_clearable-btn",disabled:a,icon:i.a.createElement(g.a,null),onClick:this.handleClear}):null}},{key:"render",value:function(){var e=this.props,t=e.role,n=e.id,r=e.isShowElipsisActive,c=e.autoFocus,l=e.className,s=e.name,u=e.innerRef,p=e.maxLength,d=e.minLength,m=e.placeholder,b=e.leftComponent,f=e.rightComponent,v=e.disableTooltip,h=e.readOnly,O=e.disabled,g=e.value,E=e.onClick,C=e.onChange,R=e.onKeyDown,A=e.onKeyUp,L=e.onFocus,S=e.onBlur,N=e.onPaste,F=e.required,M=e.type,D=e.customInputType,I=e.min,B=e.max,q=e.clearable,z=e.onMouseLeave,K=e.onMouseOut,W=e.style,U=e.containerProps,J=e.tabIndex,_=Object(o.a)(e,["role","id","isShowElipsisActive","autoFocus","className","name","innerRef","maxLength","minLength","placeholder","leftComponent","rightComponent","disableTooltip","readOnly","disabled","value","onClick","onChange","onKeyDown","onKeyUp","onFocus","onBlur","onPaste","required","type","customInputType","min","max","clearable","onMouseLeave","onMouseOut","style","containerProps","tabIndex"]),H=this.state,V=H.width,G=H.active,Q=H.showTooltip,X=[this.renderClearableComponent(),f].filter(k),Y=[b].filter(k),Z=w({"aria-label":_["aria-label"],"aria-placeholder":m,"aria-required":F,"aria-multiline":!1,"aria-autocomplete":"none","data-testid":_["data-testid"],role:t,id:n,ref:this.ref,className:l,autoFocus:c,disabled:O||h,innerRef:u,maxLength:p,minLength:d,name:s,onBlur:S,onChange:C,onClick:E,onFocus:L,onKeyDown:R,onKeyUp:A,onPaste:N,onMouseLeave:z,disableTooltip:v,onMouseOut:K,placeholder:m,required:F,type:M,value:g,min:I,max:B,style:W,tabIndex:J},U),$=i.a.createElement(T,{ref:this.refTooltip,style:{width:"100%"}},D?i.a.createElement(x,Object(a.a)({},U,{clearable:q,value:g}),D(w({},Z))):i.a.createElement(P,Object(a.a)({},Z,{autocomplete:"off",clearable:q,onBlur:this.handleBlur,onFocus:this.handleFocus,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,value:g})));return function(e,t){return 8*String(t).length>e}(V,g)&&!G&&Q&&V&&r&&($=i.a.createElement(y.a,{isOpen:v,title:String(g),zIndex:11,triggerComponent:i.a.createElement(T,{style:{width:"100%"}},$)})),X.length||Y.length||q?i.a.createElement(j.a,Object(a.a)({className:l,leftComponents:Y,rightComponents:X},U),$):$}}]),n}(r.Component);Object(s.a)(L,"defaultProps",{onBlur:A,onFocus:A}),L.propTypes={className:l.a.string,customInputType:l.a.func,id:l.a.oneOfType([l.a.string,l.a.number]),isShowElipsisActive:l.a.bool,max:l.a.oneOfType([l.a.string,l.a.number]),min:l.a.oneOfType([l.a.string,l.a.number]),name:l.a.string,onBlur:l.a.func,onChange:l.a.func,onClick:l.a.func,onFocus:l.a.func,onKeyDown:l.a.func,onKeyUp:l.a.func,onMouseLeave:l.a.func,onMouseOut:l.a.func,onPaste:l.a.func,placeholder:l.a.string,required:l.a.bool,role:l.a.string,style:l.a.object,tabIndex:l.a.oneOfType([l.a.string,l.a.number]),value:function(e,t,n){if(e.isShowElipsisActive&&"string"!==typeof e[t])return new Error("Invalid prop `".concat(t,"` of type `").concat(Object(v.a)(e[t]),"` supplied to")+" `".concat(n,"`. Prop `value` should be of type `string` if prop `isShowElipsisActive` is set to `true`.")+" Either set `isShowElipsisActive` to `false`, or properly format your `value` prop to `string`.")}};var S=L;t.a=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.id,c=e.autoFocus,l=void 0!==c&&c,s=e.disabled,u=void 0!==s&&s,p=e.className,d=void 0===p?"":p,m=e.clearable,b=void 0!==m&&m,f=e.name,v=void 0===f?"":f,h=e.maxLength,O=void 0===h?255:h,y=e.minLength,g=void 0===y?0:y,j=e.fluidWidth,E=void 0!==j&&j,w=e.disableTooltip,C=void 0===w||w,P=e.placeholder,T=e.value,x=void 0===T?"":T,R=e.hasError,k=void 0!==R&&R,A=e.readOnly,L=void 0!==A&&A,N=e.innerRef,F=void 0===N?null:N,M=e.type,D=void 0===M?"text":M,I=e.min,B=void 0===I?void 0:I,q=e.max,z=void 0===q?void 0:q,K=e.leftComponent,W=void 0===K?null:K,U=e.rightComponent,J=void 0===U?null:U,_=e.required,H=void 0!==_&&_,V=e.customInputType,G=void 0===V?null:V,Q=e.variant,X=e.isShowElipsisActive,Y=void 0===X||X,Z=Object(o.a)(e,["containerProps","id","autoFocus","disabled","className","clearable","name","maxLength","minLength","fluidWidth","disableTooltip","placeholder","value","hasError","readOnly","innerRef","type","min","max","leftComponent","rightComponent","required","customInputType","variant","isShowElipsisActive"]);return i.a.createElement(S,Object(a.a)({},Z,{"aria-label":Z["aria-label"],autoFocus:l,className:d,clearable:b,containerProps:n,customInputType:G,"data-testid":Z["data-testid"]||"ds-input_main-component",disabled:u,disableTooltip:C,fluidWidth:E,hasError:k,id:r,innerRef:F,isShowElipsisActive:Y,leftComponent:W,max:z,maxLength:O,min:B,minLength:g,name:v,placeholder:P,readOnly:L,required:H,rightComponent:J,type:D,value:x,variant:Q}))}},620:function(e,t,n){"use strict";var a=n(3),o=n(6),r=n(0),i=n.n(r),c=n(2),l=n.n(c),s=n(28),u=n(32),p=n(365),d=n(532),m=n(925),b="tooltip",f=n(299),v=Object(s.b)("div")("tooltip"),h=Object(s.b)("span")("tooltip","text"),O=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.innerRef,c=e.placement,l=void 0===c?p.a.TOP:c,s=e.title,O=void 0===s?"":s,y=e.delayClose,g=void 0===y?300:y,j=e.delayOpen,E=void 0===j?200:j,w=e.interactionType,C=void 0===w?d.a.HOVER:w,P=e.triggerComponent,T=void 0===P?null:P,x=e.className,R=void 0===x?"":x,k=e.isOpen,A=void 0===k?void 0:k,L=e.onOpen,S=void 0===L?function(){return null}:L,N=e.springAnimationComponent,F=void 0===N?void 0:N,M=e.tooltipType,D=void 0===M?b:M,I=e.showArrow,B=void 0===I||I,q=e.zIndex,z=Object(o.a)(e,["containerProps","innerRef","placement","title","delayClose","delayOpen","interactionType","triggerComponent","className","isOpen","onOpen","springAnimationComponent","tooltipType","showArrow","zIndex"]),K=Object(u.b)("tooltip").cssClassName,W=O;return"string"===typeof O&&(W=i.a.createElement(h,null,O)),i.a.createElement(m.a,{blockName:K,contentComponent:i.a.createElement(v,Object(a.a)({},n,z,{className:"tooltip-container--".concat(D," ").concat(R),innerRef:r}),W),delayClose:g,delayOpen:E,interactionType:C,isOpen:A,onOpen:S,placement:l,showArrow:D===b&&B,springAnimationComponent:F,triggerComponent:Object(f.a)(T),zIndex:q})};O.propTypes={containerProps:l.a.shape({}),placement:l.a.oneOf(p.b),title:l.a.string,delayClose:l.a.string,delayOpen:l.a.string,interactionType:l.a.oneOf(d.b),triggerComponent:l.a.element,isOpen:l.a.bool,onOpen:l.a.func,springAnimationComponent:l.a.element,showArrow:l.a.bool};t.a=O},711:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n(3);var a=n(10),o=n(6),r=n(0),i=n.n(r),c=n(2),l=n.n(c),s=n(16),u=n(1),p=n(522),d=n(9),m=n(28),b=n(496),f=function(e){var t=e.children,n=Object(o.a)(e,["children"]);return i.a.createElement(b.b,n,t)},v=function(e){var t=e.children,n=Object(o.a)(e,["children"]);return i.a.createElement(b.e,n,t)},h=function(e){var t=e.children,n=Object(o.a)(e,["children"]);return i.a.createElement(b.a,n,t)},O=(d.c.colors.brand[800],s.default.div.withConfig({componentId:"zsjccn-1"})(["width:100%;margin-bottom:4px;"])),y=s.default.div.withConfig({componentId:"zsjccn-2"})(["width:100%;padding-bottom:4px;border-bottom:solid 1px ",";"],d.c.colors.neutral[400]),g=function(e){var t=e.containerProps,n=void 0===t?{}:t,o=e.breadcrumbs,c=void 0===o?null:o,l=e.pageTitle,s=void 0===l?null:l,d=e.backarrow,b=void 0===d?null:d,g=e.summary,j=void 0===g?null:g,E=e.toolbar,w=void 0===E?null:E,C=e.menu,P=void 0===C?null:C,T=Object(u.compact)([1,"268px"]),x=Object(u.compact)(["auto",P&&"30px",j&&"auto",1]),R=Object(r.useState)(!1),k=Object(a.a)(R,2),A=k[0],L=k[1],S=A?{opacity:.5,pointerEvents:"none"}:{};return i.a.createElement(O,n,i.a.createElement(y,null,i.a.createElement(p.a,{cols:["auto",1]},i.a.createElement(p.a,null,i.a.createElement(h,{style:S},b)),i.a.createElement(p.a,{rows:["auto","auto"]},i.a.createElement(p.a,{className:"".concat(m.a,"-page-header-v2-breadcrumb"),style:S},c),i.a.createElement(p.a,{cols:T},i.a.createElement(p.a,{cols:x},i.a.cloneElement(s,{onBlur:function(e){L(!1),s.props.onBlur&&s.props.onBlur(e)},onFocus:function(e){L(!0),s.props.onFocus&&s.props.onFocus(e)}}),P&&i.a.createElement(f,null,P),j,i.a.createElement("div",null)),i.a.createElement(p.a,null,i.a.createElement(v,null,w)))))))};g.propTypes={containerProps:l.a.shape({})}}}]);
//# sourceMappingURL=30.1f9c67bc.chunk.js.map