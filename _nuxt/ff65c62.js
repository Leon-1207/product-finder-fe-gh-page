(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(t,n,e){var content=e(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("4421e921",content,!0,{sourceMap:!1})},292:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAL5JREFUOE+t0zFuAjEQheFva0pKbpCefmlDTRNS5QJIuQCnocoNaIAqUjooIuUAkAIpF0gRZOSVVpaQl6yf5Gpmfr8ZeyqFVBXiKApa4hNvfdwFR3/YYhJBU/xifQ84BX1gHAErPCM4vqUv7PDdBi2wTypGOGacnTBvgx5xxiAW/mAYW891+Z629oTXWPWCQ0fQ9fnTYae3h3hWDSibmEsoDgr/KJz/qEbdZUY5+KYB9V2RGR6KLm3Oeqd4MUcXbx0qkncJJTQAAAAASUVORK5CYII="},293:function(t,n,e){"use strict";e(263)},294:function(t,n,e){var l=e(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\ntd>div[data-v-aba87090]{\n  display:flex;\n  min-height:100%;\n  align-items:center;\n  justify-content:flex-start;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n@media (min-width: 768px){\ntable td[data-v-aba87090]{\n    padding-right:4vw\n}\n}\ntd[data-v-aba87090]{\n  padding-right:0.75rem\n}\n@media (min-width: 440px){\ntd[data-v-aba87090]{\n    padding-right:1rem\n}\n}\ntd._empty-column[data-v-aba87090], td[data-v-aba87090]:last-child{\n  padding-right:0px\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},297:function(t,n,e){"use strict";e.r(n);e(192),e(48),e(14),e(32);var l={props:{inputDateData:{type:Object,default:null}},data:function(){return{availabilityOptions:["> 10","<= 10","0"]}},computed:{dateData:function(){return this.inputDateData||{}},dateId:function(){var t;return null===(t=this.inputDateData)||void 0===t?void 0:t.id},loading:function(){return null===this.inputDateData},computedSkeletonLoadingClass:function(){return{"skeleton-loading":this.loading}},title:function(){return this.dateId},nightsText:function(){var t;return String((null===(t=this.dateData)||void 0===t?void 0:t.nights)||"")},dateText:function(){var t,n;return(null===(t=this.dateData)||void 0===t?void 0:t.start)+" - "+(null===(n=this.dateData)||void 0===n?void 0:n.end)},price:function(){var t;return null===(t=this.dateData)||void 0===t?void 0:t.price},priceText:function(){if(null===this.price||isNaN(this.price))return"loading";var text=String(this.price);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"},availability:function(){var t;return null===(t=this.dateData)||void 0===t?void 0:t.availability},availabilityText:function(){return this.getAvailabilityTextForKey(this.availability)},availabilityClasses:function(){switch(this.availability){case"> 10":return"bg-green-500 text-green-600";case"<= 10":return"bg-yellow-500 text-yellow-600";case"0":return"bg-red-500 text-red-600";default:return"bg-transparent"}},longestAvailabilityText:function(){var t=this,n="";return this.availabilityOptions.forEach((function(e){var text=t.getAvailabilityTextForKey(e);text.length>n.length&&(n=text)})),n}},methods:{getAvailabilityTextForKey:function(t){switch(t){case"> 10":return"verfügbar";case"<= 10":return"wenige";case"0":return"ausgebucht";default:return"-"}}}},o=(e(293),e(47)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("tr",{staticClass:"text-sm py-2 border-solid border-t overflow-hidden max-w-full"},[l("td",{staticClass:"cell-sm w-0 whitespace-nowrap"},[l("div",[l("span",{staticClass:"font-semibold",class:t.computedSkeletonLoadingClass},[t._v("\n        "+t._s(t.title||"loading")+"\n      ")])])]),t._v(" "),l("td",{staticClass:"w-0 xs:whitespace-nowrap"},[l("div",{staticClass:"text-center"},[l("span",{class:t.computedSkeletonLoadingClass},[t._v(t._s(t.dateText))])])]),t._v(" "),l("td",{staticClass:"whitespace-nowrap w-0 border-none"},[l("div",{staticClass:"contents min-w-max w-full border-none"},[l("div",{staticClass:"\n          flex flex-nowrap\n          gap-1.5\n          items-end\n          justify-between\n          border-none\n          flex-grow\n        ",class:t.computedSkeletonLoadingClass},[l("span",{staticClass:"font-semibold"},[t._v(t._s(t.nightsText||"..."))]),t._v(" "),l("img",{staticClass:"h-4",class:{"opacity-0":t.loading},attrs:{src:e(292),alt:"ÜB"}})])])]),t._v(" "),t._m(0),t._v(" "),l("td",[l("div",[l("span",{staticClass:"whitespace-nowrap",class:t.computedSkeletonLoadingClass},[t._v("\n        "+t._s(t.priceText)+"\n      ")])])]),t._v(" "),l("td",[l("div",[l("span",{staticClass:"\n          sm:py-0.5 sm:px-2\n          w-2\n          h-2\n          rounded-full\n          sm:h-auto sm:rounded-md sm:w-max sm:bg-transparent\n          font-semibold\n        ",class:[t.availabilityClasses,t.computedSkeletonLoadingClass]},[l("div",{staticClass:"hidden sm:block relative"},[l("span",{staticClass:"pointer-events-none opacity-0"},[t._v("\n            "+t._s(t.longestAvailabilityText)+"\n          ")]),t._v(" "),l("span",{staticClass:"absolute top-0 left-0 h-full w-full"},[t._v(t._s(t.availabilityText))])])])])]),t._v(" "),l("td",[l("div",[l("button",{staticClass:"bg-blue-500 px-3 py-1 rounded text-sm xs:text-base text-white",class:[t.computedSkeletonLoadingClass,{"shadow-md":!t.loading}]},[t._v("\n        Buchen\n      ")])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("td",{staticClass:"w-full _empty-column"},[n("div")])}],!1,null,"aba87090",null);n.default=component.exports}}]);