(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{259:function(t,e,n){"use strict";var r=n(11),l=n(0),o=n(3),c=n(106),d=n(18),v=n(13),f=n(188),m=n(40),h=n(107),_=n(189),w=n(4),x=n(73).f,C=n(32).f,y=n(16).f,E=n(261),k=n(262).trim,N="Number",S=l.Number,A=S.prototype,I=l.TypeError,V=o("".slice),T=o("".charCodeAt),D=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,l,o,c,d,code,v=_(t,"number");if(h(v))throw I("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=k(v),43===(e=T(v,0))||45===e){if(88===(n=T(v,2))||120===n)return NaN}else if(48===e){switch(T(v,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+v}for(c=(o=V(v,2)).length,d=0;d<c;d++)if((code=T(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+v};if(c(N,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var L,U=function(t){var e=arguments.length<1?0:S(D(t)),n=this;return m(A,n)&&w((function(){E(n)}))?f(Object(e),n,U):e},j=r?x(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;j.length>M;M++)v(S,L=j[M])&&!v(U,L)&&y(U,L,C(S,L));U.prototype=A,A.constructor=U,d(l,N,U)}},261:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},262:function(t,e,n){var r=n(3),l=n(21),o=n(12),c=n(263),d=r("".replace),v="["+c+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),h=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,f,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},263:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},267:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("f7d44c38",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("a6a8daba",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(267)},298:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\ntd>div[data-v-3a10159c]{\n  display:flex;\n  min-height:100%;\n  align-items:center;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\ntd[data-v-3a10159c]{\n  vertical-align:middle\n}\n.product-finder-event:hover tr[data-v-3a10159c]{\n  background:var(--event-hover-color)\n}\n.col-w-percentage-large[data-v-3a10159c]{\n  width:37.5%\n}\n@media (min-width: 640px){\n.col-w-percentage-large[data-v-3a10159c]{\n    width:25%\n}\n}\n.col-w-percentage-small[data-v-3a10159c]{\n  width:12.5%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},299:function(t,e,n){"use strict";n(268)},300:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.product-finder-event:nth-of-type(2n) tr{\n  background:var(--even-row-bg)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},304:function(t,e,n){"use strict";n.r(e);n(259),n(192),n(49),n(48);var r={props:{inputEventData:{type:Object,default:null},numberOfAdditionalValues:{type:Number,default:0}},data:function(){return{availabilityOptions:["> 10","<= 10","0"],calculatedColumnGap:"30px"}},computed:{eventData:function(){return this.inputEventData||{}},eventId:function(){var t;return null===(t=this.inputEventData)||void 0===t?void 0:t.id},loading:function(){return null===this.inputEventData},productUsesAdditionalValues:function(){return!!this.numberOfAdditionalValues},computedSkeletonLoadingClass:function(){return{"skeleton-loading":this.loading}},title:function(){return this.eventId},nightsText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.nights)||"")},daysText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.days)||"")},dateText:function(){var t,e;return(null===(t=this.eventData)||void 0===t?void 0:t.start)+" - "+(null===(e=this.eventData)||void 0===e?void 0:e.end)},price:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.price},priceText:function(){if(null===this.price||isNaN(this.price))return"loading";var text=String(this.price);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"},availability:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.availability},availabilityClasses:function(){switch(this.availability){case"> 10":return"bg-green-500 text-green-600";case"<= 10":return"bg-yellow-500 text-yellow-600";case"0":return"bg-red-500 text-red-600";default:return"bg-transparent"}},additionalValues:function(){var t,e=null===(t=this.eventData)||void 0===t?void 0:t.additionalValues;return Array.isArray(e)&&e.length===this.numberOfAdditionalValues?e:Array(this.numberOfAdditionalValues).map((function(t){return null}))},isBookable:function(){return this.availability&&"0"!==this.availability&&this.bookingPageUrl},bookingPageUrl:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.bookingUrl},additionalValueColSpan:function(){return this.numberOfAdditionalValues<2?3:this.numberOfAdditionalValues<3?2:1}}},l=(n(297),n(299),n(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents product-finder-event"},[n("tr",{ref:"tableRow",staticClass:"text-sm pt-2 border-solid border-t overflow-hidden max-w-full",class:t.productUsesAdditionalValues?"pb-0":"pb-2"},[n("td",{staticClass:"w-0 cell-sm whitespace-nowrap"},[n("div",[n("span",{staticClass:"font-semibold",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.title||"loading")+"\n        ")])])]),t._v(" "),t._m(0),t._v(" "),n("td",{staticClass:"w-0 xs:whitespace-nowrap"},[n("div",{staticClass:"text-center"},[n("span",{class:t.computedSkeletonLoadingClass},[t._v(t._s(t.dateText))])])]),t._v(" "),t._m(1),t._v(" "),n("td",{staticClass:"whitespace-nowrap w-0 border-none"},[n("div",{staticClass:"contents min-w-max border-none"},[n("div",{staticClass:"flex flex-col flex-grow",class:t.computedSkeletonLoadingClass},[n("div",{staticClass:"\n              flex flex-nowrap\n              gap-1.5\n              items-end\n              justify-between\n              flex-grow\n            "},[n("span",[t._v(t._s(t.daysText||"..."))]),t._v(" "),n("font-awesome-icon",{staticClass:"h-4",attrs:{icon:"cloud-sun"}})],1),t._v(" "),n("div",{staticClass:"\n              flex flex-nowrap\n              gap-1.5\n              items-end\n              justify-between\n              flex-grow\n            "},[n("span",[t._v(t._s(t.nightsText||"..."))]),t._v(" "),n("font-awesome-icon",{staticClass:"h-4",attrs:{icon:"bed"}})],1)])])]),t._v(" "),t._m(2),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-end"},[n("span",{staticClass:"whitespace-nowrap",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.priceText)+"\n        ")])])]),t._v(" "),t._m(3),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-center"},[n("span",{staticClass:"w-2 h-2 rounded-full",class:[t.availabilityClasses,t.computedSkeletonLoadingClass]})])]),t._v(" "),t._m(4),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-end"},[n("a",{staticClass:"\n            bg-accentColor\n            hover:bg-accentColor-light\n            px-2.5\n            sm:px-3\n            py-1\n            sm:py-1.5\n            rounded\n            text-sm\n            xs:text-base\n            text-white\n          ",class:[t.computedSkeletonLoadingClass,{"shadow-md":!t.loading},{"disabled-button":!t.isBookable&&!t.loading}],attrs:{target:"_blank",href:t.bookingPageUrl}},[t._v("\n          Buchen\n        ")])])])]),t._v(" "),t.productUsesAdditionalValues?n("tr",{staticClass:"pb-2 table-row"},[t._m(5),t._v(" "),n("td",{staticStyle:{"vertical-align":"top"}},[n("div",{staticClass:"flex-col gap-1.5",staticStyle:{"padding-top":"0px","align-items":"center"}},t._l(t.additionalValues,(function(e){return n("div",{key:e,staticClass:"text-sm text-center",class:[t.computedSkeletonLoadingClass,{"w-full":t.loading}]},[n("span",[t._v("\n            "+t._s(e||"...")+"\n          ")])])})),0)]),t._v(" "),n("td",{attrs:{colspan:"100%"}})]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-large _empty-column cell-sm"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-large _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-large _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-small _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-small _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"cell-sm",attrs:{colspan:"2"}},[e("div")])}],!1,null,"3a10159c",null);e.default=component.exports}}]);