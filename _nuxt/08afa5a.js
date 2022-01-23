(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7,11],{267:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("2a13ad62",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n.r(e);n(259),n(36),n(52),n(74),n(76),n(77),n(41),n(14),n(48);var l=n(332),r=n(294),o=n(302),d=n(303),c={components:{productListItemEvent:o.default,ProductReadMoreButton:d.default},props:{productData:{type:Object,required:!0},filters:{type:Object,default:function(){return{}}},freezeProductFiltering:{type:Boolean,default:!1}},emits:["availableFilterOptionsChanged"],data:function(){return{events:null,availableEvents:null}},computed:{productMinAge:function(){var t,e=null===(t=this.productData)||void 0===t?void 0:t.minAge;return e&&(e=Number(e)),isNaN(e)?null:e},productMaxAge:function(){var t,e=null===(t=this.productData)||void 0===t?void 0:t.maxAge;return e&&(e=Number(e)),isNaN(e)?null:e},productPageUrl:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.productPageUrl},ageSpanText:function(){return null===this.productMinAge&&null===this.productMaxAge?null:null===this.productMinAge?"bis "+this.productMaxAge+" Jahre":null===this.productMaxAge?"ab "+this.productMinAge+" Jahre":this.productMinAge===this.productMaxAge?this.productMinAge+" Jahre":this.productMinAge+"-"+this.productMaxAge+" Jahre"},productTitle:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.title},productImgUrl:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.imgUrl},productDescription:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.description},productId:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.id},productAgeGroup:function(){return{label:this.ageSpanText,minAge:this.productMinAge,maxAge:this.productMaxAge}},productRegion:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.location},locationText:function(){return this.productRegion},eventCount:function(){var t,e=Number(null===(t=this.productData)||void 0===t?void 0:t.eventCount);return isNaN(e)?0:e},numberOfAdditionalValues:function(){var t,e;return Array.isArray(null===(t=this.productData)||void 0===t?void 0:t.additionalValues)?null===(e=this.productData)||void 0===e?void 0:e.additionalValues.length:0}},watch:{filters:{deep:!0,handler:function(){this.filterProduct()}}},mounted:function(){var t=this;setTimeout((function(){t.events=l[t.productId]||[],t.filterProduct()}),2e3)},methods:{doesProductMatchesFilters:function(){var t,e,n,l,r=null===(t=this.filters)||void 0===t||!t.minAge||!this.productMinAge||this.filters.minAge.includes(this.productMinAge),o=null===(e=this.filters)||void 0===e||!e.maxAge||!this.productMaxAge||this.filters.maxAge.includes(this.productMaxAge),d=!(Array.isArray(null===(n=this.filters)||void 0===n?void 0:n.region)&&(null===(l=this.filters)||void 0===l?void 0:l.region.length)>0&&this.productRegion)||this.filters.region.includes(this.productRegion);return r&&o&&d},doesEventObjectMatchesFilters:function(t){var e=this;if(null===t)return!0;var n,l,o,d,c,v,h,f,m,A;return o=Object(r.a)(null==t?void 0:t.start),d=Object(r.a)(null==t?void 0:t.end),c=o?Object(r.c)(o):null,v=d?Object(r.c)(d):null,h=null===(n=e.filters)||void 0===n?void 0:n.firstPossibleDate,f=null===(l=e.filters)||void 0===l?void 0:l.lastPossibleDate,m=h?Object(r.c)(h):null,A=f?Object(r.c)(f):null,Object(r.b)(m,A,c,v)},filterProduct:function(){if(null===this.events)return null;var t=this.doesProductMatchesFilters()?(this.events||[]).filter(this.doesEventObjectMatchesFilters):[];this.freezeProductFiltering||(this.availableEvents=t),this.emitAvailableFilterOptionsForAvailableEvents(t)},emitAvailableFilterOptionsForAvailableEvents:function(t){var e={numberOfResults:(t||[]).filter((function(t){return null!==t})).length,availableAgeGroups:this.getAvailableAgeGroups(t),allAgeGroups:this.getAllAgeGroups(),availableDateRanges:this.getAvailableDateRanges(t),allDateRanges:this.getAllDateRanges(),allRegions:this.getAllRegions(),availableRegions:this.getAvailableRegions(t)};this.$emit("availableFilterOptionsChanged",this.productId,e)},getAvailableAgeGroups:function(t){return Array.isArray(t)&&t.length>0?[this.productAgeGroup]:[]},getAllAgeGroups:function(){return[this.productAgeGroup]},getAvailableDateRanges:function(t){return Array.isArray(t)?t.map((function(t){var e=function(s){var t=Object(r.a)(s);return Object(r.c)(t)};return null!=t&&t.start&&null!=t&&t.end?{start:e(t.start),end:e(t.end)}:null})).filter((function(t){return!!t})):[]},getAvailableRegions:function(t){return(t||[]).length>0?[{label:this.productRegion}]:[]},getAllRegions:function(){return[{label:this.productRegion}]},getAllDateRanges:function(){var t=this.events||[];return this.getAvailableDateRanges(t)}}},v=(n(333),n(335),n(46)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"bounce"}},[null===t.events||(t.availableEvents||[]).length>0?n("div",{staticClass:"\n      bg-boxColor\n      max-w-full\n      md:pt-4\n      pb-2\n      base-card\n      border border-solid border-gray-300\n      overflow-hidden\n      md:overflow-visible\n    "},[n("div",{staticClass:"mb-5 md:flex md:gap-4 md:flex-nowrap block relative md:px-8"},[n("div",{staticClass:"\n          md:w-72\n          lg:w-80\n          flex-none\n          max-w-full\n          w-full\n          img-calc-height\n          md:rounded\n          relative\n        "},[n("div",{staticClass:"\n            absolute\n            top-0\n            left-0\n            bottom-0\n            right-0\n            md:-left-12 md:-top-8 md:rounded-md\n            overflow-hidden\n            md:shadow-md\n          "},[n("div",{staticClass:"relative w-full h-full"},[n("div",{staticClass:"absolute top-0 left-0 h-full w-full skeleton-loading"}),t._v(" "),n("img",{staticClass:"\n                absolute\n                top-0\n                left-0\n                object-cover\n                h-full\n                w-full\n                select-none\n                pointer-events-none\n              ",attrs:{src:t.productImgUrl,loading:"lazy"}})])])]),t._v(" "),n("div",{staticClass:"\n          absolute\n          bottom-0\n          w-full\n          text-white\n          px-4\n          pt-2\n          pb-6\n          md:p-0\n          bg-black bg-opacity-60\n          backdrop-blur-sm backdrop-filter\n          md:block\n          md:bg-transparent\n          md:backdrop-filter-none\n          md:relative\n          md:text-mainTextColor\n        "},[n("h1",{staticStyle:{"word-spacing":"8px"}},[n("span",{staticClass:"text-lg",staticStyle:{"word-spacing":"normal"}},[n("span",{staticClass:"whitespace-nowrap text-base"},[n("span",{staticClass:"text-sm font-semibold"},[t._v("CAMP ")]),n("span",{staticClass:"text-sm",staticStyle:{"font-weight":"400"}},[t._v(t._s(t.productId))]),t._v(":\n            ")]),t._v(" "),n("br",{staticClass:"hidden xs:block"}),t._v(" "),n("span",{staticClass:"font-semibold text-2xl lg:text-3xl ml-2 xs:ml-0"},[t._v("\n              "+t._s(t.productTitle))])]),t._v(" "),n("product-read-more-button",{staticClass:"sm:hidden",attrs:{"product-page-url":t.productPageUrl}})],1),t._v(" "),n("div",{staticClass:"w-full mt-1 md:mt-2.5 text-sm hidden sm:block",staticStyle:{"word-spacing":"8px"}},[n("span",{staticStyle:{"word-spacing":"normal"}},[t._v(t._s(t.productDescription))]),t._v(" "),n("product-read-more-button",{attrs:{"product-page-url":t.productPageUrl}})],1),t._v(" "),n("div",{staticClass:"absolute -bottom-3.5 flex gap-3 md:bottom-0"},[n("div",{staticClass:"tag-bubble"},[n("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" "),n("span",[t._v(t._s(t.locationText))])],1),t._v(" "),n("div",{staticClass:"tag-bubble"},[t._v("\n            "+t._s(t.ageSpanText)+"\n          ")])])])]),t._v(" "),n("div",{staticClass:"px-4 sm:px-8"},[n("table",{staticClass:"date-table w-full max-w-full"},[null===t.events?n("tbody",t._l(t.eventCount,(function(e){return n("product-list-item-event",{key:String(e),attrs:{"input-event-data":null,"number-of-additional-values":t.numberOfAdditionalValues}})})),1):n("tbody",t._l(t.availableEvents,(function(e,l){return n("product-list-item-event",{key:String(l),attrs:{"input-event-data":e,"number-of-additional-values":t.numberOfAdditionalValues}})})),1)])])]):t._e()])}),[],!1,null,"4102bbba",null);e.default=component.exports;installComponents(component,{ProductReadMoreButton:n(303).default,ProductListItemEvent:n(302).default})},294:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(28),n(191);function l(s){var b=s.split(/\D/);return new Date(b[0],--b[1],b[2])}function r(s){if(!s)return null;var t=s.split(".");return t[2]+"-"+t[1]+"-"+t[0]}function o(t,e,n,l){return(!t||!n||n>=t)&&(!e||!l||l<=e)}},296:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAL5JREFUOE+t0zFuAjEQheFva0pKbpCefmlDTRNS5QJIuQCnocoNaIAqUjooIuUAkAIpF0gRZOSVVpaQl6yf5Gpmfr8ZeyqFVBXiKApa4hNvfdwFR3/YYhJBU/xifQ84BX1gHAErPCM4vqUv7PDdBi2wTypGOGacnTBvgx5xxiAW/mAYW891+Z629oTXWPWCQ0fQ9fnTYae3h3hWDSibmEsoDgr/KJz/qEbdZUY5+KYB9V2RGR6KLm3Oeqd4MUcXbx0qkncJJTQAAAAASUVORK5CYII="},297:function(t,e,n){"use strict";n(267)},298:function(t,e,n){var l=n(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\ntd>div[data-v-22e48e41]{\n  display:flex;\n  min-height:100%;\n  align-items:center;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\ntd[data-v-22e48e41]{\n  padding-right:0.75rem\n}\n@media (min-width: 640px){\ntd[data-v-22e48e41]{\n    padding-right:1.25rem\n}\n}\n@media (min-width: 768px){\ntd[data-v-22e48e41]{\n    padding-right:2rem\n}\n}\n@media (min-width: 1024px){\ntd[data-v-22e48e41]{\n    padding-right:2.5rem\n}\n}\n@media (min-width: 1280px){\ntd[data-v-22e48e41]{\n    padding-right:3rem\n}\n}\ntd._empty-column[data-v-22e48e41], td[data-v-22e48e41]:last-child{\n  padding-right:0px\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},302:function(t,e,n){"use strict";n.r(e);n(259),n(192),n(49),n(48);var l={props:{inputEventData:{type:Object,default:null},numberOfAdditionalValues:{type:Number,default:0}},data:function(){return{availabilityOptions:["> 10","<= 10","0"]}},computed:{eventData:function(){return this.inputEventData||{}},eventId:function(){var t;return null===(t=this.inputEventData)||void 0===t?void 0:t.id},loading:function(){return null===this.inputEventData},productUsesAdditionalValues:function(){return!!this.numberOfAdditionalValues},computedSkeletonLoadingClass:function(){return{"skeleton-loading":this.loading}},title:function(){return this.eventId},nightsText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.nights)||"")},dateText:function(){var t,e;return(null===(t=this.eventData)||void 0===t?void 0:t.start)+" - "+(null===(e=this.eventData)||void 0===e?void 0:e.end)},price:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.price},priceText:function(){if(null===this.price||isNaN(this.price))return"loading";var text=String(this.price);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"},availability:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.availability},availabilityClasses:function(){switch(this.availability){case"> 10":return"bg-green-500 text-green-600";case"<= 10":return"bg-yellow-500 text-yellow-600";case"0":return"bg-red-500 text-red-600";default:return"bg-transparent"}},additionalValues:function(){var t,e=null===(t=this.eventData)||void 0===t?void 0:t.additionalValues;return Array.isArray(e)&&e.length===this.numberOfAdditionalValues?e:Array(this.numberOfAdditionalValues).map((function(t){return null}))},isBookable:function(){return this.availability&&"0"!==this.availability&&this.bookingPageUrl},bookingPageUrl:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.bookingUrl},additionalValueColSpan:function(){return this.numberOfAdditionalValues<2?3:this.numberOfAdditionalValues<3?2:1}}},r=(n(297),n(46)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"contents"},[l("tr",{staticClass:"text-sm pt-2 border-solid border-t overflow-hidden max-w-full",class:t.productUsesAdditionalValues?"pb-0 lg:pb-2":"pb-2"},[l("td",{staticClass:"cell-sm w-0 whitespace-nowrap"},[l("div",[l("span",{staticClass:"font-semibold",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.title||"loading")+"\n        ")])])]),t._v(" "),l("td",{staticClass:"w-0 xs:whitespace-nowrap"},[l("div",{staticClass:"text-center"},[l("span",{class:t.computedSkeletonLoadingClass},[t._v(t._s(t.dateText))])])]),t._v(" "),l("td",{staticClass:"whitespace-nowrap w-0 border-none"},[l("div",{staticClass:"contents min-w-max w-full border-none"},[l("div",{staticClass:"\n            flex flex-nowrap\n            gap-1.5\n            items-end\n            justify-between\n            border-none\n            flex-grow\n          ",class:t.computedSkeletonLoadingClass},[l("span",{staticClass:"font-semibold"},[t._v(t._s(t.nightsText||"..."))]),t._v(" "),l("img",{staticClass:"h-4",class:{"opacity-0":t.loading},attrs:{src:n(296),alt:"ÜB"}})])])]),t._v(" "),t._l(t.additionalValues,(function(e){return l("td",{key:e,staticClass:"hidden lg:table-cell",attrs:{colspan:t.additionalValueColSpan}},[l("div",{staticStyle:{"min-width":"50px"}},[l("div",{staticClass:"text-sm",class:t.computedSkeletonLoadingClass},[l("span",[t._v("\n            "+t._s(e||"             ")+"\n          ")])])])])})),t._v(" "),t._m(0),t._v(" "),l("td",[l("div",{staticClass:"justify-end"},[l("span",{staticClass:"whitespace-nowrap",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.priceText)+"\n        ")])])]),t._v(" "),l("td",[l("div",[l("span",{staticClass:"w-2 h-2 rounded-full",class:[t.availabilityClasses,t.computedSkeletonLoadingClass]})])]),t._v(" "),l("td",[l("div",[l("a",{staticClass:"\n            bg-accentColor\n            hover:bg-accentColor-light\n            px-2.5\n            sm:px-3\n            py-1\n            sm:py-1.5\n            rounded\n            text-sm\n            xs:text-base\n            text-white\n          ",class:[t.computedSkeletonLoadingClass,{"shadow-md":!t.loading},{"disabled-button":!t.isBookable&&!t.loading}],attrs:{target:"_blank",href:t.bookingPageUrl}},[t._v("\n          Buchen\n        ")])])])],2),t._v(" "),t.productUsesAdditionalValues?l("tr",{staticClass:"pb-2 table-row lg:hidden"},t._l(t.additionalValues,(function(e){return l("td",{key:e,attrs:{colspan:t.additionalValueColSpan}},[l("div",[l("div",{staticClass:"tag-bubble text-xs",class:t.computedSkeletonLoadingClass},[l("span",{staticClass:"p-0.5 text-center flex"},[t._v("\n            "+t._s(e||"             ")+"\n          ")])])])])})),0):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"w-full _empty-column"},[e("div")])}],!1,null,"22e48e41",null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var l={props:{productPageUrl:{type:String,default:null}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.productPageUrl?n("a",{staticClass:"\n    underline\n    text-blue-500\n    hover:text-blue-400\n    cursor-pointer\n    whitespace-nowrap\n  ",staticStyle:{"word-spacing":"normal"},attrs:{href:t.productPageUrl,target:"_blank"}},[t._v("\n  Erfahre mehr\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("e8abd4d8",content,!0,{sourceMap:!1})},309:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("fc838c24",content,!0,{sourceMap:!1})},332:function(t){t.exports=JSON.parse('{"test-product-1":[{"id":"test-event-1","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.04.2022","end":"08.04.2022","nights":6,"price":"536","availability":"0"},{"id":"test-event-2","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.06.2022","end":"10.06.2022","nights":8,"price":"900","availability":"> 10"},{"id":"test-event-3","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"21.07.2022","end":"30.07.2022","nights":9,"price":"1250","availability":"> 10"},{"id":"test-event-4","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"21.09.2022","end":"30.09.2022","nights":9,"price":"1250","availability":"<= 10"},{"id":"test-event-5","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.10.2022","end":"08.10.2022","nights":6,"price":"800","availability":"> 10"},{"id":"test-event-6","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.11.2022","end":"10.11.2022","nights":8,"price":"1050","availability":"0"},{"id":"test-event-7","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"27.12.2022","end":"30.12.2022","nights":3,"price":"450","availability":"<= 10"}],"test-product-2":[{"id":"test-event-8","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.04.2022","end":"08.04.2022","nights":6,"price":"536","availability":"> 10"},{"id":"test-event-9","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.06.2022","end":"10.06.2022","nights":8,"price":"900","availability":"> 10"},{"id":"test-event-10","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"21.07.2022","end":"30.07.2022","nights":9,"price":"1250","availability":"0"},{"id":"test-event-11","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"02.08.2022","end":"08.08.2022","nights":6,"price":"800","availability":"> 10"},{"id":"test-event-12","bookingUrl":"https://www.go-jugendreisen.de/buchung-513-61772.html","start":"21.08.2022","end":"30.08.2022","nights":9,"price":"1250","availability":"<= 10"}],"test-product-3":[{"id":"22-15-S1","bookingUrl":"https://forscherfreunde.de/anmeldung?termin_id=75&vendor=ForscherFreunde&host=&extern=true&locale=de","start":"25.07.2022","end":"29.07.2022","nights":4,"price":"295","availability":"> 10","additionalValues":["Clever Coding mit Lego® Spike Essential","7 - 10 Jahre"]},{"id":"22-15-S2","bookingUrl":"https://forscherfreunde.de/anmeldung?termin_id=76&vendor=ForscherFreunde&host=&extern=true&locale=de","start":"01.08.2022","end":"05.08.2022","nights":4,"price":"295","availability":"> 10","additionalValues":["Daddeln und Denken mit Minecraft","10 - 14 Jahre"]},{"id":"22-15-S3","bookingUrl":"https://forscherfreunde.de/anmeldung?termin_id=77&vendor=ForscherFreunde&host=&extern=true&locale=de","start":"29.08.2022","end":"02.09.2022","nights":4,"price":"295","availability":"> 10","additionalValues":["Maschinen und Mechanik mit LEGO®","9 - 12 Jahre"]},{"id":"22-15-ZH1","bookingUrl":"https://forscherfreunde.de/anmeldung?termin_id=94&vendor=ForscherFreunde&host=&extern=true&locale=de","start":"24.10.2022","end":"28.10.2022","nights":4,"price":"295","availability":"> 10","additionalValues":["Programmieren und Entdecken mit LEGO® WeDo 2.0","7 - 10 Jahre"]}]}')},333:function(t,e,n){"use strict";n(308)},334:function(t,e,n){var l=n(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.date-table th{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  font-weight:600\n}\n.date-table .cell-sm{\n  display:none\n}\n@media (min-width: 640px){\n.date-table .cell-sm{\n    display:table-cell\n}\n}\n.date-table tbody>:first-of-type tr{\n  border-top-width:0px\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},335:function(t,e,n){"use strict";n(309)},336:function(t,e,n){var l=n(59)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n@media (min-width: 640px){\n.img-calc-height[data-v-4102bbba]{\n    height:18rem!important\n}\n}\n@media (min-width: 768px){\n.img-calc-height[data-v-4102bbba]{\n    height:12rem!important\n}\n}\n.img-calc-height[data-v-4102bbba]{\n  height:55vw\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l}}]);