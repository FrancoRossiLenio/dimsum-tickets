(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[19,21],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"StyledFormItemLayout",(function(){return l}));var r=n(26),a=n(13),o=n(688);function i(){var e=Object(r.a)(["\n  max-width: 200px;\n"]);return i=function(){return e},e}var l=Object(a.default)(o.a)(i())},123:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(760),i=n(601),l=n(106);t.default=function(){return a.a.createElement(o.b,{"data-testid":"task-details-form"},a.a.createElement(l.StyledFormItemLayout,{ariaLabel:"Task name",containerProps:{"data-testid":"task-name"},inputComponent:i.a,labelText:"Task Name",placeholder:"Task name",value:"A very long text that gets always visible in a tooltip"}))}},218:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},231:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function s(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return a}))},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(277),a=n(278),o={DATE:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],DATE_TIME:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/," ",/[0-2]/,/[0-9]/,":",/[0-5]/,/[0-9]/],PHONE:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],PHONE_INTENATIONAL:["+","1"," ","(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],SSN:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],US_ZIP_CODE:[/\d/,/\d/,/\d/,/\d/,/\d/],NUMBER:r.a,PERCENT:a.a},i=[o.DATE,o.DATE_TIME,o.PHONE,o.PHONE_INTENATIONAL,o.SSN,o.US_ZIP_CODE,o.NUMBER,o.PERCENT]},277:function(e,t,n){"use strict";var r=n(200),a=/-/,o=/\D+/g,i=/\d/,l=function(e){return e.split("").map((function(e){return i.test(e)?i:e}))},c=function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,n=void 0===t?"$":t,u=e.suffix,s=void 0===u?"":u,d=e.includeThousandsSeparator,f=void 0===d||d,p=e.thousandsSeparatorSymbol,v=void 0===p?",":p,b=e.allowDecimal,h=void 0!==b&&b,m=e.decimalSymbol,g=void 0===m?".":m,O=e.decimalLimit,y=void 0===O?2:O,j=e.requireDecimal,E=void 0!==j&&j,w=e.allowNegative,x=void 0!==w&&w,P=e.allowLeadingZeroes,R=void 0!==P&&P,T=e.integerLimit,C=void 0===T?null:T,$=n&&n.length||0,k=s&&s.length||0,S=v&&v.length||0;function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;if(1===t&&!Number.isInteger(parseInt(e[0],10))&&!1===x)return[""];if(""===e||e[0]===n[0]&&1===t)return n.split("").concat([i]).concat(s.split(""));if(e===g&&h)return n.split("").concat(["0",g,i]).concat(s.split(""));var u="-"===e[0]&&x;u&&(e=e.toString().substr(1));var d,p,b,m=e.lastIndexOf(g),O=-1!==m;if(e.slice(-1*k)===s&&(e=e.slice(0,-1*k)),O&&(h||E)?(d=e.slice(e.slice(0,$)===n?$:0,m),p=e.slice(m+1,t),p=l(p.replace(o,""))):d=e.slice(0,$)===n?e.slice($):e,C&&"number"===Object(r.a)(C)){var j="."===v?"[.]":"".concat(v),w=(d.match(new RegExp(j,"g"))||[]).length;d=d.slice(0,C+w*S)}return d=d.replace(o,""),R||(d=d.replace(/^0+(0$|[^0])/,"$1")),d=f?c(d,v):d,b=l(d),(O&&h||!0===E)&&(e[m-1]!==g&&b.push("[]"),b.push(g,"[]"),p&&("number"===Object(r.a)(y)&&(p=p.slice(0,y)),b=b.concat(p)),!0===E&&e[m-1]===g&&b.push(i)),$>0&&(b=n.split("").concat(b)),u&&(b.length===$&&b.push(i),b=[a].concat(b)),s.length>0&&(b=b.concat(s.split(""))),b}return N.instanceOf="createNumberMask",N}},278:function(e,t,n){"use strict";var r=n(200),a=/-/,o=/\D+/g,i=/\d/,l=function(e){return e.split("").map((function(e){return i.test(e)?i:e}))},c=function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,n=void 0===t?"":t,u=e.suffix,s=void 0===u?"%":u,d=e.includeThousandsSeparator,f=void 0===d||d,p=e.thousandsSeparatorSymbol,v=void 0===p?",":p,b=e.allowDecimal,h=void 0!==b&&b,m=e.decimalSymbol,g=void 0===m?".":m,O=e.decimalLimit,y=void 0===O?2:O,j=e.requireDecimal,E=void 0!==j&&j,w=e.allowNegative,x=void 0!==w&&w,P=e.allowLeadingZeroes,R=void 0!==P&&P,T=e.integerLimit,C=void 0===T?null:T,$=n&&n.length||0,k=s&&s.length||0,S=v&&v.length||0;function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;if(1===t&&!Number.isInteger(parseInt(e[0],10))&&!1===x)return[""];if(""===e||e[0]===n[0]&&1===t)return n.split("").concat([i]).concat(s.split(""));if(e===g&&h)return n.split("").concat(["0",g,i]).concat(s.split(""));var u="-"===e[0]&&x;u&&(e=e.toString().substr(1));var d,p,b,m=e.lastIndexOf(g),O=-1!==m;if(e.slice(-1*k)===s&&(e=e.slice(0,-1*k)),O&&(h||E)?(d=e.slice(e.slice(0,$)===n?$:0,m),p=e.slice(m+1,t),p=l(p.replace(o,""))):d=e.slice(0,$)===n?e.slice($):e,C&&"number"===Object(r.a)(C)){var j="."===v?"[.]":"".concat(v),w=(d.match(new RegExp(j,"g"))||[]).length;d=d.slice(0,C+w*S)}return d=d.replace(o,""),R||(d=d.replace(/^0+(0$|[^0])/,"$1")),d=f?c(d,v):d,b=l(d),(O&&h||!0===E)&&(e[m-1]!==g&&b.push("[]"),b.push(g,"[]"),p&&("number"===Object(r.a)(y)&&(p=p.slice(0,y)),b=b.concat(p)),!0===E&&e[m-1]===g&&b.push(i)),$>0&&(b=n.split("").concat(b)),u&&(b.length===$&&b.push(i),b=[a].concat(b)),s.length>0&&(b=b.concat(s.split(""))),b}return N.instanceOf="createPercentMask",N}},601:function(e,t,n){"use strict";var r=n(9),a=n(17),o=n(0),i=n.n(o),l=n(2),c=n.n(l),u=n(774),s=function(e){var t=e.containerProps,n=void 0===t?{}:t,o=e.autoFocus,l=void 0!==o&&o,c=e.disabled,s=void 0!==c&&c,d=e.maxLength,f=void 0===d?255:d,p=e.minLength,v=void 0===p?0:p,b=e.fluidWidth,h=void 0!==b&&b,m=e.placeholder,g=e.value,O=void 0===g?"":g,y=e.hasError,j=void 0!==y&&y,E=e.readOnly,w=void 0!==E&&E,x=e.innerRef,P=void 0===x?null:x,R=e.type,T=void 0===R?"text":R,C=e.min,$=void 0===C?void 0:C,k=e.max,S=void 0===k?void 0:k,N=e.clearable,F=void 0!==N&&N,A=e.leftComponent,L=void 0===A?null:A,D=e.rightComponent,I=void 0===D?null:D,_=e.required,z=void 0!==_&&_,q=e.variant,M=Object(a.a)(e,["containerProps","autoFocus","disabled","maxLength","minLength","fluidWidth","placeholder","value","hasError","readOnly","innerRef","type","min","max","clearable","leftComponent","rightComponent","required","variant"]);return i.a.createElement(u.a,Object(r.a)({},M,{"aria-label":M["aria-label"]||"Text Box",autoFocus:l,clearable:F,containerProps:n,disabled:s,fluidWidth:h,hasError:j,innerRef:P,leftComponent:L,max:S,maxLength:f,min:$,minLength:v,placeholder:m,readOnly:w,required:z,rightComponent:I,role:"textbox",type:T,value:O,variant:q}))};s.propTypes={containerProps:c.a.shape({}),autoFocus:c.a.bool,disabled:c.a.bool,maxLength:c.a.number,minLength:c.a.number,fluidWidth:c.a.bool,placeholder:c.a.string,value:c.a.string,hasError:c.a.bool,readOnly:c.a.bool,min:c.a.number,max:c.a.number,clearable:c.a.bool,leftComponent:c.a.element,rightComponent:c.a.element,required:c.a.bool,variant:c.a.string},t.a=s},611:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(31),i=Object(o.b)("form-required-mark").cssClassName;t.a=function(e){var t=e.required,n=void 0!==t&&t,r=e.optional;return n||void 0!==r&&r?n?a.a.createElement("span",{className:"".concat(i)},"\u25cf"):a.a.createElement("span",{className:"".concat(i," optional-mark")},"\u26ac"):null}},613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var n=window.getComputedStyle(e);return Object.freeze({height:parseFloat(n.height||"0"),left:parseFloat(n.paddingLeft||"0"),top:parseFloat(n.paddingTop||"0"),width:parseFloat(n.width||"0")})}},622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(635),a=n(636),o=[],i=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if("undefined"===typeof e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!==typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e,o.push(this)}return e.prototype.observe=function(e){var t=l("observe",e);if(t)throw TypeError(t);c(this.$$observationTargets,e)>0||(this.$$observationTargets.push(new r.ResizeObservation(e)),v())},e.prototype.unobserve=function(e){var t=l("unobserve",e);if(t)throw TypeError(t);var n=c(this.$$observationTargets,e);n<0||(this.$$observationTargets.splice(n,1),h())},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[]},e}();function l(e,t){return"undefined"===typeof t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t instanceof window.Element?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function c(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1}t.ResizeObserver=i;var u,s=function(e){o.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(n){n.isActive()&&(f(n.target)>e?t.$$activeTargets.push(n):t.$$skippedTargets.push(n))}))}))},d=function(){var e=1/0;return o.forEach((function(t){if(t.$$activeTargets.length){var n=[];t.$$activeTargets.forEach((function(t){var r=new a.ResizeObserverEntry(t.target);n.push(r),t.$$broadcastWidth=r.contentRect.width,t.$$broadcastHeight=r.contentRect.height;var o=f(t.target);o<e&&(e=o)})),t.$$callback(n,t),t.$$activeTargets=[]}})),e},f=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},p=function(){var e=0;for(s(e);o.some((function(e){return!!e.$$activeTargets.length}));)e=d(),s(e);o.some((function(e){return!!e.$$skippedTargets.length}))&&function(){var e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."});window.dispatchEvent(e)}()},v=function(){u||b()},b=function e(){u=window.requestAnimationFrame((function(){p(),e()}))},h=function(){u&&!o.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(u),u=void 0)};t.install=function(){return window.ResizeObserver=i}},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(613),a=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=r.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();t.ResizeObservation=a},636:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(613),a=function(e){this.target=e,this.contentRect=r.ContentRect(e)};t.ResizeObserverEntry=a},688:function(e,t,n){"use strict";var r=n(9),a=n(17),o=n(0),i=n.n(o),l=n(2),c=n.n(l),u=n(27),s=n(16),d=n(607),f=n(213);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.b)(e);if(t){var a=Object(f.b)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.c)(this,n)}}var v=Object(u.a)("div")("input-addon-group"),b=Object(u.a)("span")("input-addon-group","addon"),h=function(e){Object(f.a)(n,e);var t=p(n);function n(){var e;Object(f.d)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(s.a)(Object(f.e)(e),"state",{}),e}return Object(f.f)(n,[{key:"render",value:function(){var e=this.props,t=e.leftAddon,n=e.rightAddon,a=e.children,o=e.className,l=e.containerProps,c=a&&a.type&&a.type.name?a.type.name.toLowerCase():"default";return i.a.createElement(v,Object(r.a)({className:"".concat(o," ").concat("input-addon-group","--").concat(c)},l),t&&i.a.createElement(b,null,t),a,n&&i.a.createElement(b,null,n))}}]),n}(o.Component);Object(s.a)(h,"defaultProps",{});var m=h,g=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.innerRef,a=void 0===r?null:r,o=e.className,l=void 0===o?"":o,c=e.style,u=void 0===c?{}:c,s=e.leftAddon,d=void 0===s?null:s,f=e.rightAddon,p=void 0===f?null:f,v=e.children;return i.a.createElement(m,{ref:a,className:l,containerProps:n,leftAddon:d,rightAddon:p,style:u},v)};g.propTypes={containerProps:c.a.shape({}),innerRef:c.a.func,className:c.a.string,style:c.a.objectOf(c.a.string),leftAddon:c.a.element,rightAddon:c.a.element,children:c.a.element};var O=g,y=n(231),j=n(218);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(y.e)(e);if(t){var a=Object(y.e)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(y.f)(this,n)}}var w=function(e){var t=e.target,n=e.currentTarget;return t?t.value:n?n.value:e},x=i.a.createContext().Provider,P=function(e){Object(y.d)(n,e);var t=E(n);function n(e){var r;Object(y.c)(this,n),r=t.call(this,e);var a=e.activeValue,o=e.disabled;return r.state={activeValue:a,disabled:o,prevValue:null,onChange:r.handleChange.bind(Object(y.g)(r))},r}return Object(y.b)(n,[{key:"handleChange",value:function(e){var t,n=this.props,r=n.multiple,a=n.onChange,o=this.state.activeValue,i=w(e);r?t=function(e,t){var n=w(t),r=e,a=e.indexOf(n);return-1===a?r.push(n):r.splice(a,1),r}(o||[],i):o!==i&&(t=i),this.setState({activeValue:t}),a&&a(t)}},{key:"render",value:function(){var e=this.props.children;return i.a.createElement(x,{value:this.state},e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue;return e.activeValue===n?null:{activeValue:e.activeValue,prevValue:e.activeValue}}}]),n}(o.Component);Object(j.a)(P,"defaultProps",{multiple:!1});var R=n(611),T=n(770),C=Object(u.a)("span")("em-ds-label","text"),$=function(e){var t=e.children,n=e.label,r=e.htmlFor,a=e.required,o=e.optional,l=e.truncateText,c=void 0===l||l,u=e.isGroup,s=void 0!==u&&u;return i.a.createElement("label",{className:"".concat("em-ds-label").concat(s?" ".concat("em-ds-label","--group"):""),htmlFor:r},c?i.a.createElement(T.a,{value:t||n}):i.a.createElement(C,null,n),i.a.createElement(R.a,{optional:o,required:a}))};$.propTypes={children:c.a.string,label:c.a.string,htmlFor:c.a.string,required:c.a.bool,optional:c.a.bool,truncateText:c.a.bool,isGroup:c.a.bool};var k=$,S=n(601),N=n(622),F=n(31);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.containerProps,n=void 0===t?{}:t,a=e.className,o=void 0===a?"":a,l=e.style,c=void 0===l?{}:l,u=e.text,s=void 0===u?"":u,d=e.maxCharacters,f=void 0===d?0:d,p=e.maxWidth,v=void 0===p?"100%":p,b=e.textEllipsis,h=void 0!==b&&b,m=e.textAlignment,g=void 0===m?"left":m,O=e.wordBreak,y=void 0===O||O,j=Object(F.b)("text-wrapperRef",o,{textEllipsis:h,textAlignment:g,wordBreak:y}),E=j.cssClassName,w=j.classNameElement,x=s;return h?x=f>0?x.substring(0,f):x:f>0&&(x=s.split(" ").reduce((function(e,t){var n=e.length-1;return e[n].length+t.length>f&&(n+=1),e[n]="".concat(e[n]||""," ").concat(t),e}),[""]).map((function(e,t){return i.a.createElement("span",{key:t,className:w("line")},e)}))),i.a.createElement("span",Object(r.a)({},n,{className:E,style:L({maxWidth:f<1?v:null},c)}),h?i.a.createElement("span",{className:w("ellipsis-wrapperRef")},x):x)};var I=function(e){var t=e.labelWidth,n=void 0===t?50:t,r=e.width,a=void 0===r?200:r,o=e.height,i=void 0===o?35:o,l=e.radiusStyle,c=e.hasRightRadius,u=void 0===c||c,s=e.hasLeftRadius,d=void 0===s||s,f=n,p=parseFloat(l),v=p+1.3,b=f+8,h=0,m=0,g=0,O=p;return u||(h+=p,g=2*p),d||(h+=p,m=2*p),(!d&&u||u&&d)&&(O=0),"M"+(v+4+b)+",0.5h"+(a-2*v-b-4+O)+((u?"a"+p+","+p+" 0 0 1 "+p+","+p:"")+"v"+(i-(2*v-(g+1.5)))+(u?"a"+p+","+p+" 0 0 1 "+-p+","+p:"")+"h"+(2*v-a-h)+(d?"a"+p+","+p+" 0 0 1 "+-p+","+-p:"")+"v"+(2*v-(m+1.5)-i)+(d?"a"+p+","+p+" 0 0 1 "+p+","+-p:""))+"h4"};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.b)(e);if(t){var a=Object(f.b)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.c)(this,n)}}var q=Object(u.a)("div")("labeled-outline",null,(function(e){return{"has-value":e.isOpen}})),M=Object(u.a)("label")("labeled-outline","label"),B=Object(u.a)("div")("labeled-outline","idle"),W=Object(u.a)("div")("labeled-outline","outline"),V=Object(u.a)("path")("labeled-outline","outline__path"),H=function(e){Object(f.a)(n,e);var t=z(n);function n(e){var r;return Object(f.d)(this,n),r=t.call(this,e),Object(s.a)(Object(f.e)(r),"resizeObserver",new N.ResizeObserver((function(){return r.updatePath()}))),Object(s.a)(Object(f.e)(r),"prevSizes",{}),r.wrapperRef=i.a.createRef(),r.outlinePathRef=i.a.createRef(),r.outlineIdleRef=i.a.createRef(),r.labelRef=i.a.createRef(),r.updatePath=r.updatePath.bind(Object(f.e)(r)),r}return Object(f.f)(n,[{key:"componentDidMount",value:function(){this.resizeObserver.observe(this.wrapperRef.current)}},{key:"componentDidUpdate",value:function(){(function(e,t){var n=e.width,r=e.height,a=e.labelWidth;return n!==t.width||(r!==t.height||a!==t.labelWidth)})(this.sizes,this.prevSizes)&&this.updatePath()}},{key:"componentWillUnmount",value:function(){this.resizeObserver.unobserve(this.wrapperRef.current)}},{key:"getValue",value:function(e){var t=this.props.valueAccessor;return t?t(e):e&&e.target?e.target.value:e}},{key:"updatePath",value:function(){var e=I(this.sizes);this.prevSizes=this.sizes,this.outlinePathRef.current.setAttribute("d",e)}},{key:"render",value:function(){var e=this.props,t=e.ariaLabel,n=e.hasError,r=e.readOnly,a=e.disabled,o=e.inputComponent,l=e.labelText,c=e.onBlur,u=e.onFocus,f=e.innerRef,p=e.extraInputProps,v=e.required,b=e.value,h=e.onChange,m=e.mask,g=e.useSubfix,O=e.optional,y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ariaLabel:t,className:"floating-label-input-controller",disabled:a,hasError:n,onBlur:c,onChange:h,onFocus:u,readOnly:r,value:b,innerRef:f,mask:m,useSubfix:g},p),j=Object(d.a)(o,y),E=this.isOpened;return i.a.createElement(q,{classProps:{hasError:n,isOpen:E,readOnly:r,disabled:a},innerRef:this.wrapperRef,onBlur:function(){return null},onFocus:function(){return null},onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver},j,i.a.createElement(M,{classProps:{isOpen:E},innerRef:this.labelRef},i.a.createElement(D,{maxWidth:"100%",text:l}),i.a.createElement(R.a,{optional:O,required:v})),i.a.createElement(W,null,i.a.createElement("svg",null,i.a.createElement(V,{innerRef:this.outlinePathRef}))),i.a.createElement(B,{innerRef:this.outlineIdleRef}))}},{key:"sizes",get:function(){var e=this.labelRef.current,t=this.wrapperRef.current,n=this.outlineIdleRef.current,r=window.getComputedStyle(n),a=r.getPropertyValue("border-top-left-radius"),o=r.getPropertyValue("border-top-right-radius"),i=0!==parseFloat(a),l=0!==parseFloat(o);return{labelWidth:.9*e.offsetWidth,width:t.offsetWidth,height:t.offsetHeight,radiusStyle:a,hasLeftRadius:i,hasRightRadius:l}}},{key:"isOpened",get:function(){var e=this.props,t=e.focused,n=e.isOpen,r=e.value;return t||(Array.isArray(r)?!!r.length:!!r)||n}}]),n}(o.Component);Object(s.a)(H,"defaultProps",{onChange:function(){return null}});var U=H,Z=function(){},G=function(e){e.containerProps;var t=e.arialLabel,n=void 0===t?"":t,r=e.innerRef,a=void 0===r?Z:r,o=e.className,l=void 0===o?"":o,c=e.extraInputProps,u=void 0===c?{}:c,s=e.inputComponent,d=void 0===s?S.a:s,f=e.value,p=void 0===f?"":f,v=e.labelComponent,b=void 0===v?k:v,h=e.labelText,m=void 0===h?null:h,g=e.onChange,O=void 0===g?Z:g,y=e.onBlur,j=void 0===y?Z:y,E=e.onFocus,w=void 0===E?Z:E,x=e.isOpen,P=void 0!==x&&x,R=e.hasError,T=void 0!==R&&R,C=e.readOnly,$=void 0!==C&&C,N=e.disabled,F=void 0!==N&&N,A=e.required,L=void 0!==A&&A,D=e.optional,I=void 0!==D&&D,_=e.mask,z=void 0===_?null:_,q=e.useSubfix,M=void 0===q?"":q;return i.a.createElement(U,{arialLabel:n,className:l,disabled:F,extraInputProps:u,hasError:T,innerRef:a,inputComponent:d,isOpen:P,labelComponent:b,labelText:m,mask:z,onBlur:j,onChange:O,onFocus:w,optional:I,readOnly:$,required:L,useSubfix:M,value:p})},K=Object(u.a)("span")("form-item","feedback"),J=function(e){var t=e.text,n=e.hasError;return t?i.a.createElement(K,{classProps:n},t):null},Q=n(13),X=Q.default.div.withConfig({componentId:"sed5xr-0"})(["height:2.16rem;align-items:center;display:flex;",""],(function(e){return e.label&&!e.withFeedback?"\n      padding-top: 1.2rem;\n      ":e.label||e.withFeedback?void 0:"\n      padding-top: 1rem;\n      "})),Y=Q.default.div.withConfig({componentId:"sed5xr-1"})(["padding-right:0.32rem;flex:1;"]),ee=Q.default.div.withConfig({componentId:"sed5xr-2"})(["display:flex;align-items:center;"]),te=n(266);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=Object(u.a)("div")("form-item",null,(function(e){var t=e.leftLabel,n=e.variant;return Object(s.a)({"with-left-label":t},n,n)})),oe=Object(u.a)("div")("".concat("form-item","-content")),ie="variant-default",le="variant-focus",ce="variant-active",ue="variant-disabled",se="variant-read-only",de="variant-optional",fe=function(e){var t=e.leftLabel,n=void 0!==t&&t,o=e.floatingLabel,l=void 0!==o&&o,c=e.name,u=e.id,s=e.value,f=e.inputComponent,p=void 0===f?S.a:f,v=e.labelComponent,b=void 0===v?k:v,h=e.feedbackComponent,m=void 0===h?J:h,g=e.labelText,y=e.truncateText,j=e.hasError,E=void 0!==j&&j,w=e.validationState,x=e.validationMessage,R=void 0===x?"":x,T=e.feedbackMessage,C=void 0===T?"":T,$=e.readOnly,N=e.focused,F=void 0!==N&&N,A=e.type,L=e.autoFocus,D=void 0===L?function(){}:L,I=e.disabled,_=void 0!==I&&I,z=e.onChange,q=void 0===z?function(){}:z,M=e.onBlur,B=void 0===M?function(){}:M,W=e.onFocus,V=void 0===W?function(){}:W,H=e.onPaste,U=void 0===H?function(){}:H,Z=e.onKeyUp,K=void 0===Z?function(){}:Z,Q=e.extraInputProps,te=void 0===Q?{}:Q,ne=e.extraContent,le=e.leftAddon,ce=void 0===le?null:le,ue=e.rightAddon,se=void 0===ue?null:ue,de=e.required,fe=void 0!==de&&de,pe=e.optional,ve=void 0!==pe&&pe,be=e.mask,he=e.useSubfix,me=void 0===he?"":he,ge=e.suffix,Oe=void 0===ge?"":ge,ye=e.variant,je=void 0===ye?ie:ye,Ee=e.containerProps,we=void 0===Ee?{}:Ee,xe=Object(a.a)(e,["leftLabel","floatingLabel","name","id","value","inputComponent","labelComponent","feedbackComponent","labelText","truncateText","hasError","validationState","validationMessage","feedbackMessage","readOnly","focused","type","autoFocus","disabled","onChange","onBlur","onFocus","onPaste","onKeyUp","extraInputProps","extraContent","leftAddon","rightAddon","required","optional","mask","useSubfix","suffix","variant","containerProps"]),Pe=p.type===i.a.createElement(P,null).type,Re="UNSAFE"===l,Te=re(re({},te),{},{disabled:_,hasError:E||"error"===w,id:u,name:c,type:A,autofocus:D,onBlur:B,onChange:q,onFocus:V,onPaste:U,onKeyUp:K,readOnly:$,value:s,mask:be,useSubfix:me,variant:je,required:fe},xe),Ce=function(e){return ce||se?i.a.createElement(O,{leftAddon:ce,rightAddon:se,variant:je},e):e},$e=i.a.createElement(G,Object(r.a)({},Te,{extraInputProps:te,focused:F,inputComponent:p,labelComponent:b,labelText:g,optional:ve,required:fe,variant:je})),ke=Re?Ce($e):i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{htmlFor:u||c,label:g,optional:ve,required:fe,isGroup:Pe,truncateText:y}),Ce(Object(d.a)(p,Te)));return Oe?i.a.createElement(ae,Object(r.a)({classProps:{disabled:_,readOnly:$,hasError:E,leftLabel:n,variant:je}},we),i.a.createElement(ee,{className:"suffix-wrapper"},i.a.createElement(Y,{className:"suffix-input-wrapper"},i.a.createElement(oe,null,ke,ne),i.a.createElement(m,{hasError:E,text:w||E?R:C})),i.a.createElement(X,{className:"suffix-label",label:!!g,withFeedback:Boolean(R||C)},Oe))):i.a.createElement(ae,Object(r.a)({classProps:{disabled:_,readOnly:$,hasError:E,leftLabel:n,variant:je}},we),i.a.createElement(oe,null,ke,ne),i.a.createElement(m,{hasError:E,text:w||E?R:C}))};fe.propTypes={containerProps:c.a.shape({}),leftLabel:c.a.bool,floatingLabel:c.a.bool,name:c.a.string,value:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),inputComponent:c.a.element,labelComponent:c.a.element,feedbackComponent:c.a.node,labelText:c.a.oneOfType([c.a.string,c.a.element]),hasError:c.a.bool,validationState:c.a.oneOf(["success","error","warning"]),validationMessage:c.a.string,feedbackMessage:c.a.string,readOnly:c.a.bool,focused:c.a.bool,type:c.a.string,autoFocus:c.a.func,disabled:c.a.bool,onChange:c.a.func,onBlur:c.a.func,extraInputProps:c.a.element,extraContent:c.a.element,leftAddon:c.a.element,rightAddon:c.a.element,required:c.a.bool,optional:c.a.bool,mask:c.a.oneOfType([c.a.oneOf(te.b),c.a.string]),useSubfix:c.a.string,suffix:c.a.string,variant:c.a.oneOf([ie,le,ce,ue,se,de])};t.a=fe}}]);
//# sourceMappingURL=19.8d7fc838.chunk.js.map