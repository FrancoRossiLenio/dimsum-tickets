(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[61],{154:function(e,a,t){"use strict";t.r(a);var l=t(81),n=t(0),c=t.n(n),r=t(915),u=t(925),o=t(522);a.default=Object(n.memo)((function(){var e=Object(n.useState)({value:""}),a=Object(l.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)({label:"HIDE",show:!0}),b=Object(l.a)(s,2),x=b[0],h=b[1],m={allowDecimal:!0,allowNegative:!0,decimalLimit:2,includeThousandsSeparator:!0,integerLimit:9,prefix:""};return c.a.createElement("div",{style:{width:"200px"}},c.a.createElement("button",{onClick:function(e){e.preventDefault();var a=!x.show,t=x.show?"SHOW":"HIDE";h({label:t,show:a})}},x.label),x.show?c.a.createElement(r.a,{clearable:!0,feedbackMessage:"$xx,xxx,xxx.xx",floatingLabel:!0,inputComponent:u.a,labelText:"Number",mask:function(e){return o.a.NUMBER(m)(e)},maxLenght:9,onChange:function(e){return i({value:e.target.value})},placeholder:"$ 00.000",value:t.value}):null)}))}}]);
//# sourceMappingURL=61.81c2dbd9.chunk.js.map