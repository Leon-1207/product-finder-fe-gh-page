(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{259:function(t,n,e){"use strict";var l=e(11),r=e(0),o=e(3),c=e(106),d=e(18),v=e(13),f=e(188),h=e(40),m=e(107),_=e(189),x=e(4),w=e(73).f,y=e(32).f,C=e(16).f,E=e(261),k=e(262).trim,T="Number",N=r.Number,S=N.prototype,D=r.TypeError,V=o("".slice),A=o("".charCodeAt),I=function(t){var n=_(t,"number");return"bigint"==typeof n?n:L(n)},L=function(t){var n,e,l,r,o,c,d,code,v=_(t,"number");if(m(v))throw D("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=k(v),43===(n=A(v,0))||45===n){if(88===(e=A(v,2))||120===e)return NaN}else if(48===n){switch(A(v,1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+v}for(c=(o=V(v,2)).length,d=0;d<c;d++)if((code=A(o,d))<48||code>r)return NaN;return parseInt(o,l)}return+v};if(c(T,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var O,M=function(t){var n=arguments.length<1?0:N(I(t)),e=this;return h(S,e)&&x((function(){E(e)}))?f(Object(n),e,M):n},j=l?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;j.length>P;P++)v(N,O=j[P])&&!v(M,O)&&C(M,O,y(N,O));M.prototype=S,S.constructor=M,d(r,T,M)}},261:function(t,n,e){var l=e(3);t.exports=l(1..valueOf)},262:function(t,n,e){var l=e(3),r=e(21),o=e(12),c=e(263),d=l("".replace),v="["+c+"]",f=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),m=function(t){return function(n){var e=o(r(n));return 1&t&&(e=d(e,f,"")),2&t&&(e=d(e,h,"")),e}};t.exports={start:m(1),end:m(2),trim:m(3)}},263:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},267:function(t,n,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("0c5363b2",content,!0,{sourceMap:!1})},268:function(t,n,e){var content=e(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("a6a8daba",content,!0,{sourceMap:!1})},269:function(t,n,e){var content=e(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("656c7d1a",content,!0,{sourceMap:!1})},298:function(t,n,e){"use strict";e(267)},299:function(t,n,e){var l=e(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\ntd>div[data-v-699c6b16]{\n  display:flex;\n  min-height:100%;\n  align-items:center;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\ntd[data-v-699c6b16]{\n  vertical-align:middle\n}\n.product-finder-event:hover tr[data-v-699c6b16]{\n  background:var(--event-hover-color)\n}\n.col-w-percentage-large[data-v-699c6b16]{\n  width:37.5%\n}\n@media (min-width: 640px){\n.col-w-percentage-large[data-v-699c6b16]{\n    width:25%\n}\n}\n.col-w-percentage-small[data-v-699c6b16]{\n  width:12.5%\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},300:function(t,n,e){"use strict";e(268)},301:function(t,n,e){var l=e(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.product-finder-event:nth-of-type(2n) tr{\n  background:var(--even-row-bg)\n}\n.no-pb-in-cell-div td>div{\n  padding-bottom:0px\n}\n.tooltiptext{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},302:function(t,n,e){"use strict";e(269)},303:function(t,n,e){var l=e(59)((function(i){return i[1]}));l.push([t.i,'/*purgecss start ignore*/\n.tooltip[data-v-699c6b16]{\n  position:relative\n}\n.tooltip .tooltiptext[data-v-699c6b16]{\n  visibility:hidden;\n  width:120px;\n  background-color:#000;\n  color:#fff;\n  text-align:center;\n  border-radius:6px;\n  padding:5px;\n  position:absolute;\n  z-index:1;\n  bottom:150%;\n  left:50%;\n  margin-left:-60px;\n  opacity:0;\n  transition:opacity .3s;\n  pointer-events:none\n}\n.tooltip .tooltiptext[data-v-699c6b16]:after{\n  content:"";\n  position:absolute;\n  top:100%;\n  left:50%;\n  margin-left:-5px;\n  border:5px solid transparent;\n  border-top-color:#000;\n  pointer-events:none\n}\n.tooltip:hover .tooltiptext[data-v-699c6b16]{\n  transition-delay:.25s;\n  visibility:visible;\n  opacity:.8\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},307:function(t,n,e){"use strict";e.r(n);e(259),e(192),e(49),e(48);var l={props:{inputEventData:{type:Object,default:null},numberOfAdditionalValues:{type:Number,default:0}},data:function(){return{availabilityOptions:["> 10","<= 10","0"],additionalValueColSpans:[3,1,5]}},computed:{eventData:function(){return this.inputEventData||{}},eventId:function(){var t;return null===(t=this.inputEventData)||void 0===t?void 0:t.id},loading:function(){return null===this.inputEventData},productUsesAdditionalValues:function(){return!!this.numberOfAdditionalValues},computedSkeletonLoadingClass:function(){return{"skeleton-loading":this.loading}},title:function(){return this.eventId},nightsText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.nights)||"")},daysText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.days)||"")},startDateText:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.start},endDateText:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.end},dateText:function(){var t,n;return(null===(t=this.eventData)||void 0===t?void 0:t.start)+" - "+(null===(n=this.eventData)||void 0===n?void 0:n.end)},price:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.price},priceText:function(){if(null===this.price||isNaN(this.price))return"loading";var text=String(this.price);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"},availability:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.availability},availabilityClasses:function(){switch(this.availability){case"> 10":return"bg-green-500 text-green-600";case"<= 10":return"bg-yellow-500 text-yellow-600";case"0":return"bg-red-500 text-red-600";default:return"bg-transparent"}},additionalValues:function(){var t,n=null===(t=this.eventData)||void 0===t?void 0:t.additionalValues;return Array.isArray(n)&&n.length===this.numberOfAdditionalValues?n:Array(this.numberOfAdditionalValues).map((function(t){return null}))},additionalValuesWithGaps:function(){for(var t=[],n=0;n<this.additionalValues.length;n++){var element=this.additionalValues[n];t.push(element),n===this.additionalValues.length-1||t.push("##GAP##")}return t},isBookable:function(){return this.availability&&"0"!==this.availability&&this.bookingPageUrl},bookingPageUrl:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.bookingUrl},availabilityText:function(){switch(this.availability){case"> 10":return"mehr als 10 Plätze";case"<= 10":return"weniger als 10 Plätze";case"0":return"ausgebucht";default:return null}}}},r=(e(298),e(300),e(302),e(46)),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contents product-finder-event"},[e("tr",{ref:"tableRow",staticClass:"text-sm pt-2 border-solid border-t overflow-hidden max-w-full",class:t.productUsesAdditionalValues?"pb-0 no-pb-in-cell-div":"pb-2"},[e("td",{staticClass:"w-0 cell-sm whitespace-nowrap"},[e("div",[e("span",{staticClass:"font-semibold",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.title||"loading")+"\n        ")])])]),t._v(" "),t._m(0),t._v(" "),e("td",{staticClass:"w-0"},[e("div",{staticClass:"justify-between flex-wrap xs:flex-nowrap gap-x-1"},[e("span",{class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.loading?"00.00.0000":t.startDateText)+"\n        ")]),t._v(" "),t.loading||!t.loading&&t.startDateText&&t.endDateText?e("span",{staticClass:"flex-grow text-center xs:flex-grow-0 leading-3 xs:leading-5",class:{"opacity-0":t.loading}},[t._v("-")]):t._e(),t._v(" "),e("span",{class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.loading?"00.00.0000":t.endDateText)+"\n        ")])])]),t._v(" "),t._m(1),t._v(" "),e("td",{staticClass:"w-0 border-none"},[e("div",{staticClass:"contents"},[e("div",{staticClass:"\n            flex flex-wrap\n            sm:flex-nowrap\n            flex-grow\n            items-center\n            justify-between\n            gap-x-1.5\n            sm:gap-x-2.5\n          ",class:t.computedSkeletonLoadingClass},[e("span",{staticClass:"whitespace-nowrap"},[e("span",[t._v(t._s(t.daysText||"..."))]),t._v(" "),e("span",{staticClass:"text-xs"},[t._v("Tage")])]),t._v(" "),e("span",{staticClass:"whitespace-nowrap"},[e("span",[t._v(t._s(t.nightsText||"..."))]),t._v(" "),e("span",{staticClass:"text-xs"},[t._v("Üb.")])])])])]),t._v(" "),t._m(2),t._v(" "),e("td",{staticClass:"w-0"},[e("div",{staticClass:"justify-end"},[e("span",{staticClass:"whitespace-nowrap",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.priceText)+"\n        ")])])]),t._v(" "),t._m(3),t._v(" "),e("td",{staticClass:"w-0"},[e("div",{staticClass:"justify-center"},[e("div",{staticClass:"tooltip p-3"},[e("div",{staticClass:"w-2 h-2 rounded-full relative",class:[t.availabilityClasses,t.computedSkeletonLoadingClass]},[t.availabilityText?e("span",{staticClass:"tooltiptext"},[t._v("\n              "+t._s(t.availabilityText)+"\n            ")]):t._e()])])])]),t._v(" "),t._m(4),t._v(" "),e("td",{staticClass:"w-0"},[e("div",{staticClass:"justify-end"},[e("a",{staticClass:"\n            bg-accentColor\n            hover:bg-accentColor-light\n            px-2.5\n            sm:px-3\n            py-1\n            sm:py-1.5\n            rounded\n            text-sm\n            xs:text-base\n            text-white\n          ",class:[t.computedSkeletonLoadingClass,{"shadow-md":!t.loading},{"disabled-button":!t.isBookable&&!t.loading}],attrs:{target:"_blank",href:t.bookingPageUrl}},[t._v("\n          Buchen\n        ")])])])]),t._v(" "),t.productUsesAdditionalValues?e("tr",{staticClass:"pb-2 table-row -mt-2"},[t._l(t.additionalValuesWithGaps,(function(n,l){return e("td",{key:"additionalValue"+l,staticClass:"text-sm",class:{"last-cell-in-row":2===l},staticStyle:{"vertical-align":"top"},attrs:{colspan:t.additionalValueColSpans[l]}},["##GAP##"!==n?e("div",{staticClass:"justify-start",staticStyle:{"padding-top":"0","align-items":"flex-start"}},[e("span",{class:[t.computedSkeletonLoadingClass,{"h-5 flex-grow":t.loading}]},[t._v("\n          "+t._s(n||"...")+"\n        ")])]):t._e()])})),t._v(" "),t._m(5)],2):t._e()])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"col-w-percentage-large _empty-column cell-sm"},[n("div")])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"col-w-percentage-large _empty-column"},[n("div")])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"col-w-percentage-large _empty-column"},[n("div")])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"col-w-percentage-small _empty-column"},[n("div")])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"col-w-percentage-small _empty-column"},[n("div")])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"cell-sm",attrs:{colspan:"100%"}},[n("div")])}],!1,null,"699c6b16",null);n.default=component.exports}}]);