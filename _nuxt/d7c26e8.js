(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{266:function(t,n,e){var content=e(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("703624be",content,!0,{sourceMap:!1})},293:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAL5JREFUOE+t0zFuAjEQheFva0pKbpCefmlDTRNS5QJIuQCnocoNaIAqUjooIuUAkAIpF0gRZOSVVpaQl6yf5Gpmfr8ZeyqFVBXiKApa4hNvfdwFR3/YYhJBU/xifQ84BX1gHAErPCM4vqUv7PDdBi2wTypGOGacnTBvgx5xxiAW/mAYW891+Z629oTXWPWCQ0fQ9fnTYae3h3hWDSibmEsoDgr/KJz/qEbdZUY5+KYB9V2RGR6KLm3Oeqd4MUcXbx0qkncJJTQAAAAASUVORK5CYII="},294:function(t,n,e){"use strict";e(266)},295:function(t,n,e){var l=e(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\ntd>div[data-v-2338b4cc]{\n  display:flex;\n  min-height:100%;\n  align-items:center;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\ntd[data-v-2338b4cc]{\n  padding-right:0.75rem\n}\n@media (min-width: 640px){\ntd[data-v-2338b4cc]{\n    padding-right:1.25rem\n}\n}\n@media (min-width: 768px){\ntd[data-v-2338b4cc]{\n    padding-right:2rem\n}\n}\n@media (min-width: 1024px){\ntd[data-v-2338b4cc]{\n    padding-right:2.5rem\n}\n}\n@media (min-width: 1280px){\ntd[data-v-2338b4cc]{\n    padding-right:3rem\n}\n}\ntd._empty-column[data-v-2338b4cc], td[data-v-2338b4cc]:last-child{\n  padding-right:0px\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},298:function(t,n,e){"use strict";e.r(n);e(192),e(48);var l={props:{inputEventData:{type:Object,default:null}},data:function(){return{availabilityOptions:["> 10","<= 10","0"]}},computed:{eventData:function(){return this.inputEventData||{}},eventId:function(){var t;return null===(t=this.inputEventData)||void 0===t?void 0:t.id},loading:function(){return null===this.inputEventData},computedSkeletonLoadingClass:function(){return{"skeleton-loading":this.loading}},title:function(){return this.eventId},nightsText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.nights)||"")},dateText:function(){var t,n;return(null===(t=this.eventData)||void 0===t?void 0:t.start)+" - "+(null===(n=this.eventData)||void 0===n?void 0:n.end)},price:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.price},priceText:function(){if(null===this.price||isNaN(this.price))return"loading";var text=String(this.price);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"},availability:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.availability},availabilityClasses:function(){switch(this.availability){case"> 10":return"bg-green-500 text-green-600";case"<= 10":return"bg-yellow-500 text-yellow-600";case"0":return"bg-red-500 text-red-600";default:return"bg-transparent"}},isBookable:function(){return this.availability&&"0"!==this.availability&&this.bookingPageUrl},bookingPageUrl:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.bookingUrl}}},o=(e(294),e(46)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("tr",{staticClass:"text-sm py-2 border-solid border-t overflow-hidden max-w-full"},[l("td",{staticClass:"cell-sm w-0 whitespace-nowrap"},[l("div",[l("span",{staticClass:"font-semibold",class:t.computedSkeletonLoadingClass},[t._v("\n        "+t._s(t.title||"loading")+"\n      ")])])]),t._v(" "),l("td",{staticClass:"w-0 xs:whitespace-nowrap"},[l("div",{staticClass:"text-center"},[l("span",{class:t.computedSkeletonLoadingClass},[t._v(t._s(t.dateText))])])]),t._v(" "),l("td",{staticClass:"whitespace-nowrap w-0 border-none"},[l("div",{staticClass:"contents min-w-max w-full border-none"},[l("div",{staticClass:"\n          flex flex-nowrap\n          gap-1.5\n          items-end\n          justify-between\n          border-none\n          flex-grow\n        ",class:t.computedSkeletonLoadingClass},[l("span",{staticClass:"font-semibold"},[t._v(t._s(t.nightsText||"..."))]),t._v(" "),l("img",{staticClass:"h-4",class:{"opacity-0":t.loading},attrs:{src:e(293),alt:"ÜB"}})])])]),t._v(" "),t._m(0),t._v(" "),l("td",[l("div",{staticClass:"justify-end"},[l("span",{staticClass:"whitespace-nowrap",class:t.computedSkeletonLoadingClass},[t._v("\n        "+t._s(t.priceText)+"\n      ")])])]),t._v(" "),l("td",[l("div",[l("span",{staticClass:"w-2 h-2 rounded-full",class:[t.availabilityClasses,t.computedSkeletonLoadingClass]})])]),t._v(" "),l("td",[l("div",[l("a",{staticClass:"\n          bg-accentColor\n          hover:bg-accentColor-light\n          px-2.5\n          sm:px-3\n          py-1\n          sm:py-1.5\n          rounded\n          text-sm\n          xs:text-base\n          text-white\n        ",class:[t.computedSkeletonLoadingClass,{"shadow-md":!t.loading},{"disabled-button":!t.isBookable&&!t.loading}],attrs:{target:"_blank",href:t.bookingPageUrl}},[t._v("\n        Buchen\n      ")])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"w-full _empty-column"},[n("div")])}],!1,null,"2338b4cc",null);n.default=component.exports}}]);