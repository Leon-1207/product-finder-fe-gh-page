(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{291:function(e){e.exports=JSON.parse('[{"id":"test-product-1","title":"Abenteuer in den Pyrenäen","minAge":14,"maxAge":17,"location":"Pyrenaen","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/008/021/gallery/pyrenaen-gipfelausblick-spanien-jugendreise.jpg","description":"Die Zeiten, in denen die Berge dieser Welt nur Oma und Opa angezogen haben, sind lange vorbei.","productPageUrl":"https://www.go-jugendreisen.de/deutschland/groemitz/kids-beach-camp/zelt-lodge/9-11.html","eventCount":7},{"id":"test-product-2","title":"Beachcamp KIDS & BEACH Grömitz Ostsee Lodge","minAge":9,"maxAge":11,"location":"Ostsee","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/002/183/gallery/groemitz-moewe-strand-deutschland.jpg","description":"Weitläufiger langer Sandstrand, zahlreiche Wassersportangebote und endlose Strandpromenaden zwischen den Dünen.","productPageUrl":null,"eventCount":5}]')},296:function(e,t,n){"use strict";n.r(t);n(14),n(33),n(302),n(190),n(260),n(269),n(34),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(35);var r=n(268),o=n.n(r),l=n(291),d={components:{ProductListItem:n(267).default},emits:["availableFilterOptionsChanged","numberOfResultsChanged"],data:function(){return{products:[],filters:{},productsAvailableFilterOptions:{},freezeProductFiltering:!1,numberOfResults:null}},created:function(){var e=this;this.debouncedUpdateAvailableFilterOptionsChanged=o.a.debounce((function(){var t=0,n={};Object.values(e.productsAvailableFilterOptions).forEach((function(e){Object.entries(e).forEach((function(e){var r=e[0];if("numberOfResults"===r){var o=Number(e[1]);t+=isNaN(o)?0:o}else{var l=e[1]||[];n[r]?l.forEach((function(e){n[r].add(e)})):n[r]=new Set(l)}}))})),this.numberOfResults=t,e.$emit("availableFilterOptionsChanged",n),this.freezeProductFiltering||this.$emit("numberOfResultsChanged",this.numberOfResults)}),100)},mounted:function(){this.loadProducts()},methods:{loadProducts:function(){this.products=l||[]},applyFilters:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freezeProductFiltering=t,this.filters=e},updateListOfAllAvailableFilterOptions:function(e,t){this.productsAvailableFilterOptions[e]=t,this.debouncedUpdateAvailableFilterOptionsChanged()}}},c=d,f=n(47),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col gap-5 md:gap-12"},e._l(e.products,(function(t){return n("product-list-item",{key:t.id,ref:String(t.id),refInFor:!0,attrs:{"product-data":t,filters:e.filters,"freeze-product-filtering":e.freezeProductFiltering},on:{availableFilterOptionsChanged:e.updateListOfAllAvailableFilterOptions}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProductListItem:n(267).default})},305:function(e,t,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("45d99c67",content,!0,{sourceMap:!1})},306:function(e,t,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("0802d579",content,!0,{sourceMap:!1})},307:function(e,t,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("c379f08c",content,!0,{sourceMap:!1})},308:function(e,t,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("43289d74",content,!0,{sourceMap:!1})},310:function(e,t,n){e.exports=n.p+"img/filterBackground.21fb465.jpg"},331:function(e,t,n){"use strict";n(305)},332:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n._px[data-v-20042228]{\n  padding-left:1rem;\n  padding-right:1rem\n}\n@media (min-width: 640px){\n._px[data-v-20042228]{\n    padding-left:1.25rem;\n    padding-right:1.25rem\n}\n}\n@media (min-width: 768px){\n._px[data-v-20042228]{\n    padding-left:2rem;\n    padding-right:2rem\n}\n}\n@media (min-width: 1024px){\n._px[data-v-20042228]{\n    padding-left:2.5rem;\n    padding-right:2.5rem\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},333:function(e,t,n){"use strict";n(306)},334:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.base-card{\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.skeleton-loading{\n  pointer-events:none;\n  -webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(224, 224, 224, var(--tw-bg-opacity));\n  color:transparent\n}\n.tag-bubble{\n  border-radius:9999px;\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},335:function(e,t,n){"use strict";n(307)},336:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n@media (max-width:350px){\n.text-sm{\n    font-size:.8rem;\n    line-height:1.2rem;\n    font-weight:400\n}\n}\n.text-sm.text-sm{\n  font-size:.875rem;\n  line-height:1.25rem;\n  font-weight:500\n}\n.bounce-enter-active{\n  -webkit-animation:bounce-in .5s;\n          animation:bounce-in .5s\n}\n.bounce-leave-active{\n  animation:bounce-in .5s reverse\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0)\n}\n50%{\n    transform:scale(1.05)\n}\nto{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0)\n}\n50%{\n    transform:scale(1.05)\n}\nto{\n    opacity:1;\n    transform:scale(1)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},337:function(e,t,n){"use strict";n(308)},338:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.rotate[data-v-20042228]{\n  -webkit-animation:rotateY-data-v-20042228 1s;\n          animation:rotateY-data-v-20042228 1s\n}\n@-webkit-keyframes rotateY-data-v-20042228{\nto{\n    transform:rotateY(-1turn)\n}\n}\n@keyframes rotateY-data-v-20042228{\nto{\n    transform:rotateY(-1turn)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},339:function(e,t,n){"use strict";n.r(t);n(74);var r=n(268),o=n.n(r),l=n(309),d={name:"IndexPage",components:{productList:n(296).default,FilterMenu:l.default},data:function(){return{filters:{},freezeProductFiltering:!1,numberOfResults:null,loadingNewNumberOfResults:!1}},watch:{numberOfResults:function(e,t){var n=this;e!==t&&(this.loadingNewNumberOfResults=!0,setTimeout((function(){n.loadingNewNumberOfResults=!1}),2e3))}},created:function(){var e=this;this.debouncedUpdateProductList=o.a.debounce((function(){e.$refs.productList.applyFilters(e.filters,e.freezeProductFiltering)}),100)},methods:{updateFilters:function(e,t){this.filters=e,this.freezeProductFiltering=!!t,t||(this.numberOfResults=null),this.debouncedUpdateProductList()},setNumberOfResults:function(e){this.numberOfResults=e}}},c=(n(331),n(333),n(335),n(337),n(47)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app lg:container lg:px-2 lg:mx-auto overflow-hidden lg:pb-10"},[r("div",{staticClass:"\n      bg-booking-light\n      mx-auto\n      lg:mt-10 lg:rounded-lg\n      shadow-lg\n      max-w-5xl\n      overflow-hidden\n      relative\n      pb-8\n    "},[r("div",{staticClass:"w-full mb-2"},[r("div",{staticClass:"w-full sm:h-72 relative pt-24 sm:pt-0"},[r("div",{staticClass:"\n            hidden\n            sm:block\n            skeleton-loading\n            absolute\n            left-0\n            top-0\n            w-full\n            h-full\n          "}),e._v(" "),r("img",{staticClass:"\n            hidden\n            sm:block\n            object-cover\n            absolute\n            top-0\n            left-0\n            w-full\n            h-full\n            min-h-full\n          ",attrs:{src:n(310)}}),e._v(" "),r("div",{staticClass:"\n            hidden\n            sm:block\n            absolute\n            top-1/3\n            left-0\n            w-full\n            bottom-0\n            bg-gradient-to-b\n            from-transparent\n            to-booking-light\n          "}),e._v(" "),r("div",{staticClass:"sm:py-5 sm:absolute left-0 w-full bottom-0 py-4 _px"},[r("filter-menu",{ref:"filterMenu",on:{filtersChanged:e.updateFilters},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})],1),e._v(" "),r("div",{staticClass:"absolute w-full top-0 left-0 _px"},[r("div",{staticClass:"\n              rounded-full\n              bg-white\n              relative\n              top-5\n              w-20\n              h-20\n              flex flex-col\n              items-center\n              justify-center\n              pb-1.5\n              shadow-lg\n              border border-solid border-gray-300\n              text-blue-500\n            ",class:{rotate:e.loadingNewNumberOfResults}},[e.loadingNewNumberOfResults?r("span",{staticClass:"text-lg"},[e._v("Loading")]):r("div",{staticClass:"contents"},[r("span",{staticClass:"text-4xl font-bold"},[e._v(e._s(e.numberOfResults))]),e._v(" "),r("span",{staticClass:"text-sm"},[e._v("CAMPS")])])])])])]),e._v(" "),r("div",{staticClass:"py-2 sm:py-5 _px"},[r("product-list",{ref:"productList",on:{availableFilterOptionsChanged:function(t){return e.$refs.filterMenu.updateAvailableFilterOptions(t)},numberOfResultsChanged:e.setNumberOfResults}})],1)])])}),[],!1,null,"20042228",null);t.default=component.exports;installComponents(component,{FilterMenu:n(309).default,ProductList:n(296).default})}}]);