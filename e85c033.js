(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{297:function(e){e.exports=JSON.parse('[{"id":"test-product-1","title":"Abenteuer in den Pyrenäen","minAge":14,"maxAge":17,"location":"Pyrenaen","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/008/021/gallery/pyrenaen-gipfelausblick-spanien-jugendreise.jpg","description":"Die Zeiten, in denen die Berge dieser Welt nur Oma und Opa angezogen haben, sind lange vorbei.","productPageUrl":"https://www.go-jugendreisen.de/deutschland/groemitz/kids-beach-camp/zelt-lodge/9-11.html","eventCount":7},{"id":"test-product-2","title":"Beachcamp KIDS & BEACH Grömitz Ostsee Lodge","minAge":9,"maxAge":11,"location":"Ostsee","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/002/183/gallery/groemitz-moewe-strand-deutschland.jpg","description":"Weitläufiger langer Sandstrand, zahlreiche Wassersportangebote und endlose Strandpromenaden zwischen den Dünen.","productPageUrl":null,"eventCount":5},{"id":"test-product-3","title":"Forschercamps in Oberursel","minAge":7,"maxAge":14,"location":"Oberursel","imgUrl":"https://forscherfreunde.de/wp-content/uploads/2021/07/Beitrag-5.jpg","description":"LEGO Modelle bauen und durch Programmierung zum Leben erwecken – Mechanik untersuchen – in Minecraft Stromkreise erforschen – konstruieren, tüfteln, programmieren, forschen und ganz viel Spaß haben!","productPageUrl":"https://forscherfreunde.de/feriencamps-in-oberursel/","eventCount":4,"additionalValues":["Thema","Alter"]}]')},306:function(e,t,n){"use strict";n.r(t);n(14),n(33),n(272),n(190),n(259),n(273),n(34),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(35);var r=n(270),o=n.n(r),l=n(297),d={components:{ProductListItem:n(271).default},emits:["availableFilterOptionsChanged","numberOfResultsChanged"],data:function(){return{products:[],filters:{},productsAvailableFilterOptions:{},freezeProductFiltering:!1,numberOfResults:null}},created:function(){var e=this;this.debouncedUpdateAvailableFilterOptionsChanged=o.a.debounce((function(){var t=0,n={};Object.values(e.productsAvailableFilterOptions).forEach((function(e){Object.entries(e).forEach((function(e){var r=e[0];if("numberOfResults"===r){var o=Number(e[1]);t+=isNaN(o)?0:o}else{var l=e[1]||[];n[r]?l.forEach((function(e){n[r].add(e)})):n[r]=new Set(l)}}))})),this.numberOfResults=t,e.$emit("availableFilterOptionsChanged",n),this.freezeProductFiltering||this.$emit("numberOfResultsChanged",this.numberOfResults)}),100)},mounted:function(){this.loadProducts()},methods:{loadProducts:function(){this.products=l||[]},applyFilters:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freezeProductFiltering=t,this.filters=e},updateListOfAllAvailableFilterOptions:function(e,t){this.productsAvailableFilterOptions[e]=t,this.debouncedUpdateAvailableFilterOptionsChanged()}}},c=d,f=n(46),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col gap-5 md:gap-12"},e._l(e.products,(function(t){return n("product-list-item",{key:t.id,ref:String(t.id),refInFor:!0,attrs:{"product-data":t,filters:e.filters,"freeze-product-filtering":e.freezeProductFiltering},on:{availableFilterOptionsChanged:e.updateListOfAllAvailableFilterOptions}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProductListItem:n(271).default})},315:function(e,t,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("1474030b",content,!0,{sourceMap:!1})},316:function(e,t,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("0802d579",content,!0,{sourceMap:!1})},317:function(e,t,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("c379f08c",content,!0,{sourceMap:!1})},318:function(e,t,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("6fb013d0",content,!0,{sourceMap:!1})},319:function(e,t,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("cc1b0088",content,!0,{sourceMap:!1})},321:function(e,t,n){e.exports=n.p+"img/filterBackground.21fb465.jpg"},342:function(e,t,n){"use strict";n(315)},343:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n#product-finder ._px[data-v-6954825e]{\n  padding-left:1rem;\n  padding-right:1rem\n}\n@media (min-width: 640px){\n#product-finder ._px[data-v-6954825e]{\n    padding-left:1.25rem;\n    padding-right:1.25rem\n}\n}\n@media (min-width: 768px){\n#product-finder ._px[data-v-6954825e]{\n    padding-left:2rem;\n    padding-right:2rem\n}\n}\n@media (min-width: 1024px){\n#product-finder ._px[data-v-6954825e]{\n    padding-left:2.5rem;\n    padding-right:2.5rem\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},344:function(e,t,n){"use strict";n(316)},345:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n#product-finder .base-card{\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n#product-finder .skeleton-loading.skeleton-loading{\n  pointer-events:none;\n  -webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(224, 224, 224, var(--tw-bg-opacity));\n  color:transparent\n}\n#product-finder .tag-bubble{\n  border-radius:9999px;\n  background-color:var(--secondary-color-light);\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n#product-finder .disabled-button{\n  pointer-events:none;\n  opacity:0.4\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},346:function(e,t,n){"use strict";n(317)},347:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n@media (max-width:350px){\n#product-finder .text-sm{\n    font-size:.8rem;\n    line-height:1.2rem;\n    font-weight:400\n}\n}\n#product-finder .text-sm.text-sm{\n  font-size:.875rem;\n  line-height:1.25rem;\n  font-weight:500\n}\n#product-finder .bounce-enter-active{\n  -webkit-animation:bounce-in .5s;\n          animation:bounce-in .5s\n}\n#product-finder .bounce-leave-active{\n  animation:bounce-in .5s reverse\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0)\n}\n50%{\n    transform:scale(1.05)\n}\nto{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0)\n}\n50%{\n    transform:scale(1.05)\n}\nto{\n    opacity:1;\n    transform:scale(1)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},348:function(e,t,n){"use strict";n(318)},349:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n#product-finder .rotate[data-v-6954825e]{\n  -webkit-animation:rotateY-data-v-6954825e 1s;\n          animation:rotateY-data-v-6954825e 1s\n}\n@-webkit-keyframes rotateY-data-v-6954825e{\nto{\n    transform:rotateY(-2turn)\n}\n}\n@keyframes rotateY-data-v-6954825e{\nto{\n    transform:rotateY(-2turn)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},350:function(e,t,n){"use strict";n(319)},351:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n#product-finder{\n  --main-bg:#e6edf4;\n  --accent-color:#246dec;\n  --accent-color-light:#4381ee;\n  --secondary-color:#424242;\n  --secondary-color-light:#616161;\n  --box-bg:#fff;\n  --text-main-color:#424242;\n  --selection-hover-bg-color:#e8f1ff;\n  --selection-hover-text-color:#000;\n  --even-row-bg:#fafafa;\n  --event-hover-color:#f1f5f8;\n  --traffic-light-green:#10b981;\n  --traffic-light-yellow:#f59e0b;\n  --traffic-light-red:#ef4444;\n  color:var(--text-main-color)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},352:function(e,t,n){"use strict";n.r(t);n(74);var r=n(270),o=n.n(r),l=n(320),d={name:"IndexPage",components:{productList:n(306).default,FilterMenu:l.default},data:function(){return{filters:{},freezeProductFiltering:!1,numberOfResults:null,loadingNewNumberOfResults:!1}},watch:{numberOfResults:function(e,t){var n=this;e!==t&&(this.loadingNewNumberOfResults=!0,setTimeout((function(){n.loadingNewNumberOfResults=!1}),1e3))}},created:function(){var e=this;this.debouncedUpdateProductList=o.a.debounce((function(){e.$refs.productList.applyFilters(e.filters,e.freezeProductFiltering)}),100)},methods:{updateFilters:function(e,t){this.filters=e,this.freezeProductFiltering=!!t,t||(this.numberOfResults=null),this.debouncedUpdateProductList()},setNumberOfResults:function(e){this.numberOfResults=e}}},c=(n(342),n(344),n(346),n(348),n(350),n(46)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app lg:container lg:px-2 lg:mx-auto overflow-hidden lg:pb-10",attrs:{id:"product-finder"}},[r("div",{staticClass:"\n      bg-booking-light\n      mx-auto\n      lg:mt-10 lg:rounded-lg\n      shadow-lg\n      max-w-5xl\n      overflow-hidden\n      relative\n      pb-8\n    "},[r("div",{staticClass:"w-full mb-2"},[r("div",{staticClass:"w-full sm:h-72 relative pt-24 sm:pt-0"},[r("div",{staticClass:"skeleton-loading absolute left-0 top-0 w-full h-full"}),e._v(" "),r("img",{staticClass:"object-cover absolute top-0 left-0 w-full h-full min-h-full",attrs:{src:n(321)}}),e._v(" "),r("div",{staticClass:"\n            absolute\n            top-1/3\n            left-0\n            w-full\n            bottom-0\n            bg-gradient-to-b\n            from-transparent\n            to-booking-light\n          "}),e._v(" "),r("div",{staticClass:"sm:py-5 relative sm:absolute left-0 w-full bottom-0 py-4 _px"},[r("filter-menu",{ref:"filterMenu",on:{filtersChanged:e.updateFilters},model:{value:e.filters,callback:function(t){e.filters=t},expression:"filters"}})],1),e._v(" "),r("div",{staticClass:"absolute w-full top-0 left-0 _px"},[r("div",{staticClass:"\n              rounded-full\n              bg-boxColor\n              relative\n              top-5\n              w-20\n              h-20\n              flex flex-col\n              items-center\n              justify-center\n              shadow-lg\n              border border-solid border-gray-300\n              text-accentColor-light\n            ",class:{rotate:e.loadingNewNumberOfResults}},[r("div",{staticClass:"contents"},[r("span",{staticClass:"text-4xl font-bold"},[e._v(e._s(e.numberOfResults))])])])])])]),e._v(" "),r("div",{staticClass:"py-2 sm:py-5 _px"},[r("product-list",{ref:"productList",on:{availableFilterOptionsChanged:function(t){return e.$refs.filterMenu.updateAvailableFilterOptions(t)},numberOfResultsChanged:e.setNumberOfResults}})],1)])])}),[],!1,null,"6954825e",null);t.default=component.exports;installComponents(component,{FilterMenu:n(320).default,ProductList:n(306).default})}}]);