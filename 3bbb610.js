(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7,10],{256:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return h}));n(72),n(73),n(14),n(257),n(32),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(33),n(40),n(47),n(28),n(187),n(299);function l(){return String(document.URL).includes("localhost")&&!r()}function r(){return document.getElementById("product-finder-wrapper")}function o(){if(l())return"2";var t=r();if(!t)return null;var e=t.getAttribute("data-anbieter-id");return"string"==typeof e&&e.length>0?e:null}function c(){if(l())return"57";var t=r();if(!t)return null;var e=t.getAttribute("data-host-id");return"string"==typeof e&&e.length>0?e:null}function d(t){var e=r();if(!e)return new Set([]);var n=e.getAttribute(t);if("string"==typeof n&&n.length>0){var l=n.split(",").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return new Set(l)}return new Set([])}function v(){return d("data-disabled-filters")}function f(){return d("data-disabled-destinations")}function h(){return function(){var t=r();if(!t)return null;var e=t.getAttribute("data-filter-background-img-src").trim();return"string"==typeof e&&e.length>0?e:null}()||"https://www.voucherwonderland.com/reisemagazin/wp-content/uploads/2018/02/Strand-von-Scharbeutz.jpg"}},278:function(t,e,n){t.exports={}},279:function(t,e,n){t.exports={}},280:function(t,e,n){t.exports={}},281:function(t,e,n){t.exports={}},283:function(t,e,n){"use strict";n.r(e);var l=n(25),r=(n(252),n(36),n(52),n(40),n(14),n(72),n(73),n(47),n(288)),o=n(256),c=n(296),d=n(297),v={components:{productListItemEvent:c.default,ProductReadMoreButton:d.default},props:{productData:{type:Object,required:!0},filters:{type:Object,default:function(){return{}}},freezeProductFiltering:{type:Boolean,default:!1}},emits:["availableFilterOptionsChanged"],data:function(){return{events:null,availableEvents:null}},computed:{productMinAge:function(){var t,e=null===(t=this.productData)||void 0===t?void 0:t.min_age;return e&&(e=Number(e)),isNaN(e)?null:e},productMaxAge:function(){var t,e=null===(t=this.productData)||void 0===t?void 0:t.max_age;return e&&(e=Number(e)),isNaN(e)?null:e},productPageUrl:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.product_page_url},ageSpanText:function(){return null===this.productMinAge&&null===this.productMaxAge?null:null===this.productMinAge?"bis "+this.productMaxAge+" Jahre":null===this.productMaxAge?"ab "+this.productMinAge+" Jahre":this.productMinAge===this.productMaxAge?this.productMinAge+" Jahre":this.productMinAge+" - "+this.productMaxAge+" Jahre"},productTitle:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.title},productImgUrl:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.img_url},productDescription:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.description},productId:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.id},productAgeGroup:function(){return{label:this.ageSpanText,minAge:this.productMinAge,maxAge:this.productMaxAge}},productRegion:function(){var t;return null===(t=this.productData)||void 0===t?void 0:t.location},locationText:function(){return this.productRegion},isDaycamp:function(){var t,e=null===(t=this.productData)||void 0===t?void 0:t.daycamp;return!0===e||!1===e?e:null},productEventType:function(){return null===this.isDaycamp?"":this.isDaycamp?"Ohne Übernachtung":"Mit Übernachtung"},eventCount:function(){var t,e=Number(null===(t=this.productData)||void 0===t?void 0:t.event_count);return isNaN(e)?0:e},numberOfAdditionalValues:function(){var t,e;return Array.isArray(null===(t=this.productData)||void 0===t?void 0:t.additional_values)?null===(e=this.productData)||void 0===e?void 0:e.additional_values.filter((function(t){return null!=t&&""!==t})).length:0},hasEventWithDiscount:function(){return!!Array.isArray(this.events)&&this.events.some((function(t){var e=String(null==t?void 0:t.discount),n=Number(e);return!isNaN(n)&&n>0}))}},watch:{filters:{deep:!0,handler:function(){this.filterProduct()}}},mounted:function(){this.loadEvents()},methods:{loadEvents:function(){var t=this,e=function(e){t.events=e,t.filterProduct()},n=function(){e([])},l=String(this.productId),r=Object(o.b)();l?this.$axios.get("https://dev.wirtschaftswunder.digital/api/open_v1/events/index?destination_id="+l+(r?"&host_id="+r:"")).then((function(t){200===(null==t?void 0:t.status)?e(t.data||[]):n()})).catch(n):n()},doesProductMatchesFilters:function(){var t,e,n,l,r,o,c=null===(t=this.filters)||void 0===t||!t.minAge||!this.productMinAge||this.filters.minAge.includes(this.productMinAge),d=null===(e=this.filters)||void 0===e||!e.maxAge||!this.productMaxAge||this.filters.maxAge.includes(this.productMaxAge),v=!(Array.isArray(null===(n=this.filters)||void 0===n?void 0:n.region)&&(null===(l=this.filters)||void 0===l?void 0:l.region.length)>0&&this.productRegion)||this.filters.region.includes(this.productRegion),f=!(Array.isArray(null===(r=this.filters)||void 0===r?void 0:r.eventType)&&(null===(o=this.filters)||void 0===o?void 0:o.eventType.length)>0&&this.productEventType)||this.filters.eventType.includes(this.productEventType);return c&&d&&v&&f},doesEventObjectMatchesFilters:function(t){var e=this;if(null===t)return!0;var n,l,o,c,d,v,f,h,m,_;return o=Object(r.a)(null==t?void 0:t.start),c=Object(r.a)(null==t?void 0:t.end),d=o?Object(r.c)(o):null,v=c?Object(r.c)(c):null,f=null===(n=e.filters)||void 0===n?void 0:n.firstPossibleDate,h=null===(l=e.filters)||void 0===l?void 0:l.lastPossibleDate,m=f?Object(r.c)(f):null,_=h?Object(r.c)(h):null,Object(r.b)(m,_,d,v)},filterProduct:function(){if(null===this.events)return null;var t=this.doesProductMatchesFilters()?(this.events||[]).filter(this.doesEventObjectMatchesFilters):[];this.freezeProductFiltering||(this.availableEvents=t),this.emitAvailableFilterOptionsForAvailableEvents(t)},emitAvailableFilterOptionsForAvailableEvents:function(t){var e={numberOfResults:(t||[]).filter((function(t){return null!==t})).length,availableAgeGroups:this.getAvailableAgeGroups(t),allAgeGroups:this.getAllAgeGroups(),availableDateRanges:this.getAvailableDateRanges(t),allDateRanges:this.getAllDateRanges(),allRegions:this.getAllRegions(),availableRegions:this.getAvailableRegions(t),allEventTypes:this.getAllEventTypes(),availableEventTypes:this.getAvailableEventTypes(t)};this.$emit("availableFilterOptionsChanged",this.productId,e)},getAvailableAgeGroups:function(t){return Array.isArray(t)&&t.length>0?[this.productAgeGroup]:[]},getAllAgeGroups:function(){return[this.productAgeGroup]},getAvailableDateRanges:function(t){return Array.isArray(t)?t.map((function(t){var e=function(s){var t=Object(r.a)(s);return Object(r.c)(t)};return null!=t&&t.start&&null!=t&&t.end?{start:e(t.start),end:e(t.end)}:null})).filter((function(t){return!!t})):[]},getAvailableRegions:function(t){return(t||[]).length>0?[{label:this.productRegion}]:[]},getAllRegions:function(){return[{label:this.productRegion}]},getAvailableEventTypes:function(t){return(t||[]).length>0?this.getAllEventTypes():[]},getAllEventTypes:function(){return[{label:this.productEventType}]},getAllDateRanges:function(){var t=this.events||[];return this.getAvailableDateRanges(t)},openProductPageInNewTab:function(t){var e="object"===Object(l.a)(t)&&"touch"===t.pointerType;this.productPageUrl&&!e&&window.open(this.productPageUrl,"_blank").focus()}}},f=(n(326),n(327),n(328),n(329),n(46)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"bounce"}},[null===t.events||(t.availableEvents||[]).length>0?n("div",{staticClass:"\n      bg-boxColor\n      max-w-full\n      md:pt-4\n      pb-2\n      base-card\n      border border-solid border-gray-300\n      overflow-hidden\n      md:overflow-visible\n    "},[n("div",{staticClass:"mb-5 md:flex md:gap-6 md:flex-nowrap block relative md:px-8"},[n("div",{staticClass:"\n          md:w-72\n          lg:w-80\n          flex-none\n          max-w-full\n          w-full\n          img-calc-height\n          md:rounded\n          relative\n        "},[n("div",{staticClass:"\n            absolute\n            top-0\n            left-0\n            bottom-0\n            right-0\n            md:-left-12 md:-top-8 md:rounded-md\n            overflow-hidden\n            md:shadow-md\n            hover:scale-105\n            md:transform\n            duration-100\n            md:hover:shadow-uplift\n            transition-all\n          ",class:{"cursor-pointer":t.productPageUrl},on:{click:t.openProductPageInNewTab}},[n("div",{staticClass:"relative w-full h-full"},[n("div",{staticClass:"absolute top-0 left-0 h-full w-full skeleton-loading"}),t._v(" "),n("img",{staticClass:"\n                absolute\n                top-0\n                left-0\n                object-cover\n                h-full\n                w-full\n                select-none\n                transform\n                duration-1000\n                hover:scale-110\n              ",attrs:{src:t.productImgUrl,loading:"lazy"}})])])]),t._v(" "),n("div",{staticClass:"\n          absolute\n          bottom-0\n          w-full\n          text-white\n          px-4\n          pt-2\n          pb-6\n          md:p-0\n          bg-black bg-opacity-60\n          backdrop-blur-sm backdrop-filter\n          md:block\n          md:bg-transparent\n          md:backdrop-filter-none\n          md:relative\n          md:text-mainTextColor\n        "},[n("h1",{staticClass:"text-white md:text-mainTextColor",staticStyle:{"word-spacing":"8px"}},[n("span",{staticClass:"text-lg",staticStyle:{"word-spacing":"normal"}},[n("span",{staticClass:"whitespace-nowrap text-base hidden sm:block"},[n("span",{staticClass:"text-sm font-semibold"},[t._v("ID ")]),n("span",{staticClass:"text-sm",staticStyle:{"font-weight":"400"}},[t._v(t._s(t.productId))]),t._v(":\n            ")]),t._v(" "),n("span",{staticClass:"font-semibold text-xl xs:text-2xl lg:text-3xl"},[t._v("\n              "+t._s(t.productTitle))])]),t._v(" "),n("product-read-more-button",{staticClass:"sm:hidden",attrs:{"product-page-url":t.productPageUrl}})],1),t._v(" "),n("div",{staticClass:"w-full mt-1 md:mt-1.5 text-sm hidden sm:block",staticStyle:{"word-spacing":"8px"}},[n("span",{staticStyle:{"word-spacing":"normal"}},[t._v(t._s(t.productDescription))]),t._v(" "),n("product-read-more-button",{attrs:{"product-page-url":t.productPageUrl}})],1),t._v(" "),n("div",{staticClass:"absolute -bottom-3.5 flex gap-3 md:bottom-0"},[n("div",{staticClass:"tag-bubble"},[n("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" "),n("span",[t._v(t._s(t.locationText))])],1),t._v(" "),n("div",{staticClass:"tag-bubble"},[t._v("\n            "+t._s(t.ageSpanText)+"\n          ")])])]),t._v(" "),t.hasEventWithDiscount?n("div",{staticClass:"md:hidden ribbon ribbon-top-right"},[n("span",{staticClass:"text-center text-lg bold"},[t._v("SALE")])]):t._e()]),t._v(" "),n("div",{staticClass:"product-event-table-wrapper relative"},[n("table",{staticClass:"date-table w-full max-w-full"},[null===t.events?n("tbody",t._l(t.eventCount,(function(e){return n("product-list-item-event",{key:String(e),attrs:{"input-event-data":null,"number-of-additional-values":t.numberOfAdditionalValues}})})),1):n("tbody",t._l(t.availableEvents,(function(e){return n("product-list-item-event",{key:"event"+e.id,attrs:{"input-event-data":e,"number-of-additional-values":t.numberOfAdditionalValues}})})),1)])])]):t._e()])}),[],!1,null,"0bd41dfa",null);e.default=component.exports;installComponents(component,{ProductReadMoreButton:n(297).default,ProductListItemEvent:n(296).default})},288:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(28),n(187);function l(s){var b=s.split(/\D/);return new Date(b[0],--b[1],b[2])}function r(s){if(!s)return null;var t=s.split(".");return t[2]+"-"+t[1]+"-"+t[0]}function o(t,e,n,l){return(!t||!n||n>=t)&&(!e||!l||l<=e)}},289:function(t,e,n){"use strict";n(278)},290:function(t,e,n){"use strict";n(279)},291:function(t,e,n){"use strict";n(280)},292:function(t,e,n){"use strict";n(281)},296:function(t,e,n){"use strict";n.r(e);n(252),n(190),n(50),n(47);var l={props:{inputEventData:{type:Object,default:null},numberOfAdditionalValues:{type:Number,default:0}},data:function(){return{availabilityOptions:["> 10","<= 10","0"],additionalValueColSpans:[4,1,5],additionalValueColSpansSm:[3,1,6]}},computed:{eventData:function(){return this.inputEventData||{}},eventId:function(){var t;return null===(t=this.inputEventData)||void 0===t?void 0:t.id},loading:function(){return null===this.inputEventData},productUsesAdditionalValues:function(){return!!this.numberOfAdditionalValues},computedSkeletonLoadingClass:function(){return{"skeleton-loading":this.loading}},title:function(){return this.eventId},nightsText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.nights)||"")},daysText:function(){var t;return String((null===(t=this.eventData)||void 0===t?void 0:t.days)||"")},startDateText:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.start},endDateText:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.end},dateText:function(){var t,e;return(null===(t=this.eventData)||void 0===t?void 0:t.start)+" - "+(null===(e=this.eventData)||void 0===e?void 0:e.end)},price:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.price},priceText:function(){if(null===this.price||isNaN(this.price))return"loading";var text=String(this.price);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"},availability:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.availability},availabilityClasses:function(){switch(this.availability){case"> 10":return"bg-traffic-green";case"<= 10":return"bg-traffic-yellow";case"0":return"bg-traffic-red";default:return"bg-transparent"}},isBookedOut:function(){return"0"===this.availability},computedBookedOutClass:function(){return!this.loading&&this.isBookedOut?"opacity-30":null},additionalValues:function(){var t,e=null===(t=this.eventData)||void 0===t?void 0:t.additional_values;return Array.isArray(e)&&e.length===this.numberOfAdditionalValues?e:Array(this.numberOfAdditionalValues).map((function(t){return null}))},additionalValuesWithGaps:function(){for(var t=[],e=0;e<this.additionalValues.length;e++){var element=this.additionalValues[e];t.push(element),e===this.additionalValues.length-1||t.push("##GAP##")}return t},isBookable:function(){return this.availability&&"0"!==this.availability&&this.bookingPageUrl},bookingPageUrl:function(){var t;return null===(t=this.eventData)||void 0===t?void 0:t.booking_url},availabilityText:function(){switch(this.availability){case"> 10":return"Mehr als 10 Plätze";case"<= 10":return"Weniger als 10 Plätze";case"0":return"Ausgebucht";default:return null}},hasDiscount:function(){return null!==this.discountNumber},discountNumber:function(){var t,text=null===(t=this.eventData)||void 0===t?void 0:t.discount;if("string"==typeof text&&text.length>0){var e=Number(text);return isNaN(e)?null:e}return null},priceAfterDiscount:function(){var t=Number(this.price);return isNaN(t)?null:t-this.discountNumber},priceAfterDiscountText:function(){if(null===this.priceAfterDiscount||isNaN(this.priceAfterDiscount))return"loading";var text=String(this.priceAfterDiscount);return text.endsWith(".0")&&(text=text.slice(0,-3)),text+" €"}}},r=(n(289),n(290),n(291),n(292),n(46)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents product-finder-event"},[n("tr",{ref:"tableRow",staticClass:"text-sm pt-2 border-solid border-t overflow-hidden max-w-full",class:t.productUsesAdditionalValues?"pb-0 no-pb-in-cell-div":"pb-2"},[n("td",{staticClass:"w-0 cell-sm whitespace-nowrap"},[n("div",{class:t.computedBookedOutClass},[n("span",{staticClass:"font-semibold",class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.title||"loading")+"\n        ")])])]),t._v(" "),t._m(0),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-between flex-wrap xs:flex-nowrap gap-x-1",class:t.computedBookedOutClass},[n("span",{class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.loading?"00.00.0000":t.startDateText)+"\n        ")]),t._v(" "),t.loading||!t.loading&&t.startDateText&&t.endDateText?n("span",{staticClass:"flex-grow text-center xs:flex-grow-0 leading-3 xs:leading-5",class:{"opacity-0":t.loading}},[t._v("-")]):t._e(),t._v(" "),n("span",{class:t.computedSkeletonLoadingClass},[t._v("\n          "+t._s(t.loading?"00.00.0000":t.endDateText)+"\n        ")])])]),t._v(" "),t._m(1),t._v(" "),n("td",{staticClass:"w-0 border-none"},[n("div",{staticClass:"contents",class:t.computedBookedOutClass},[n("div",{staticClass:"\n            flex flex-wrap\n            sm:flex-nowrap\n            flex-grow\n            items-baseline\n            justify-end\n            gap-x-1\n          ",class:t.computedSkeletonLoadingClass},[n("span",[t._v(t._s(t.daysText||"..."))]),t._v(" "),n("span",{staticClass:"hidden sm:block text-xs leading-3"},[t._v("Tage")]),t._v(" "),n("span",{staticClass:"sm:hidden"},[t._v(t._s(t.nightsText||"..."))])])])]),t._v(" "),n("td",{staticClass:"w-0 border-none"},[n("div",{staticClass:"contents",class:t.computedBookedOutClass},[n("div",{staticClass:"\n            ml-1\n            sm:ml-1.5\n            flex flex-wrap\n            sm:flex-nowrap\n            flex-grow\n            items-baseline\n            justify-start\n            sm:justify-end\n            gap-x-1\n          ",class:t.computedSkeletonLoadingClass},[t._m(2),t._v(" "),t._m(3),t._v(" "),n("span",{staticClass:"hidden sm:block"},[t._v(t._s(t.nightsText||"..."))]),t._v(" "),n("span",{staticClass:"hidden sm:block text-xs leading-3"},[t._v("Üb.")])])])]),t._v(" "),t._m(4),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-end flex-col",class:t.computedBookedOutClass},[n("span",{staticClass:"whitespace-nowrap",class:(t.computedSkeletonLoadingClass,{"strikethrough border-traffic-red text-gray-500":t.hasDiscount})},[t._v("\n          "+t._s(t.priceText)+"\n        ")]),t._v(" "),!t.loading&&t.hasDiscount?n("span",{staticClass:"whitespace-nowrap"},[t._v("\n          "+t._s(t.priceAfterDiscountText)+"\n        ")]):t._e()])]),t._v(" "),t._m(5),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-center"},[n("div",{staticClass:"pf-tooltip p-3"},[n("div",{staticClass:"w-2 h-2 rounded-full relative",class:[t.availabilityClasses,t.computedSkeletonLoadingClass]},[t.availabilityText?n("span",{staticClass:"pf-tooltiptext"},[t._v("\n              "+t._s(t.availabilityText)+"\n            ")]):t._e()])])])]),t._v(" "),t._m(6),t._v(" "),n("td",{staticClass:"w-0"},[n("div",{staticClass:"justify-end flex-col"},[t.isBookedOut?n("span",{staticClass:"text-traffic-red text-sm font-bold"},[t._v("\n          Ausgebucht\n        ")]):n("a",{staticClass:"\n            bg-gradient-to-r\n            from-accentColor\n            to-accentColor-light\n            transform\n            hover:from-accentColor-light hover:scale-110\n            duration-75\n            px-3\n            py-1.5\n            rounded\n            text-sm\n            xs:text-base\n            text-white\n          ",class:[t.computedSkeletonLoadingClass,{"booking-button-shadow hover:shadow-xl":!t.loading},{"disabled-button":!t.isBookable&&!t.loading}],attrs:{target:"_blank",href:t.bookingPageUrl}},[t._v("\n          Buchen\n        ")])])])]),t._v(" "),t.productUsesAdditionalValues?n("tr",{staticClass:"pb-2 table-row -mt-2"},[t._l([0,1],(function(e){return n("div",{key:"screen-size"+e,staticClass:"contents"},t._l(t.additionalValuesWithGaps,(function(l,r){return n("td",{key:"additionalValue"+r,staticClass:"text-sm",class:[{"first-cell-in-row":0===r},{"last-cell-in-row":2===r},0===e?"sm:hidden":"cell-sm"],staticStyle:{"vertical-align":"top"},attrs:{colspan:(0===e?t.additionalValueColSpans:t.additionalValueColSpansSm)[r]}},["##GAP##"!==l?n("div",{staticClass:"justify-start",class:t.computedBookedOutClass,staticStyle:{"padding-top":"0","align-items":"flex-start"}},[n("span",{class:[t.computedSkeletonLoadingClass,{"h-5 flex-grow":t.loading}]},[t._v("\n            "+t._s(l||"...")+"\n          ")])]):t._e()])})),0)})),t._v(" "),t._m(7)],2):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-large _empty-column cell-sm"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-large _empty-column"},[e("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-5 sm:hidden"},[n("span",{staticClass:"text-xs leading-3"},[t._v("Tage")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-5 sm:hidden"},[n("span",{staticClass:"text-xs leading-3"},[t._v("Üb.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-large _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-small _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"col-w-percentage-small _empty-column"},[e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"cell-sm",attrs:{colspan:"100%"}},[e("div")])}],!1,null,"26bf92d3",null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var l={props:{productPageUrl:{type:String,default:null}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.productPageUrl?n("a",{staticClass:"\n    text-accentColor-very-light\n    md:text-accentColor\n    hover:text-accentColor-light\n    cursor-pointer\n    font-bold\n    whitespace-nowrap\n  ",staticStyle:{"word-spacing":"normal"},attrs:{href:t.productPageUrl,target:"_blank"}},[n("font-awesome-icon",{staticClass:"mr-0.5",attrs:{icon:"arrow-right"}}),t._v("\n  Erfahre mehr\n")],1):t._e()}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){t.exports={}},304:function(t,e,n){t.exports={}},305:function(t,e,n){t.exports={}},306:function(t,e,n){t.exports={}},326:function(t,e,n){"use strict";n(303)},327:function(t,e,n){"use strict";n(304)},328:function(t,e,n){"use strict";n(305)},329:function(t,e,n){"use strict";n(306)}}]);