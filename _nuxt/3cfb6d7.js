(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{296:function(e){e.exports=JSON.parse('[{"id":"test-product-1","title":"Abenteuer in den Pyrenäen","minAge":14,"maxAge":17,"location":"Pyrenaen","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/008/021/gallery/pyrenaen-gipfelausblick-spanien-jugendreise.jpg","description":"Die Zeiten, in denen die Berge dieser Welt nur Oma und Opa angezogen haben, sind lange vorbei.","productPageUrl":"https://www.go-jugendreisen.de/deutschland/groemitz/kids-beach-camp/zelt-lodge/9-11.html","eventCount":7},{"id":"test-product-2","title":"Beachcamp KIDS & BEACH Grömitz Ostsee Lodge","minAge":9,"maxAge":11,"location":"Ostsee","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/002/183/gallery/groemitz-moewe-strand-deutschland.jpg","description":"Weitläufiger langer Sandstrand, zahlreiche Wassersportangebote und endlose Strandpromenaden zwischen den Dünen.","productPageUrl":null,"eventCount":5},{"id":"test-product-3","title":"Forschercamps in Oberursel","minAge":7,"maxAge":14,"location":"Oberursel","imgUrl":"https://forscherfreunde.de/wp-content/uploads/2021/07/Beitrag-5.jpg","description":"LEGO Modelle bauen und durch Programmierung zum Leben erwecken – Mechanik untersuchen – in Minecraft Stromkreise erforschen – konstruieren, tüfteln, programmieren, forschen und ganz viel Spaß haben!","productPageUrl":"https://forscherfreunde.de/feriencamps-in-oberursel/","eventCount":4,"additionalValues":["Thema","Alter"]}]')},304:function(e,n,t){"use strict";t.r(n);t(14),t(33),t(271),t(190),t(259),t(272),t(34),t(273),t(274),t(275),t(276),t(277),t(278),t(279),t(280),t(281),t(282),t(283),t(284),t(285),t(286),t(287),t(288),t(35);var r=t(269),o=t.n(r),l=t(296),d={components:{ProductListItem:t(270).default},emits:["availableFilterOptionsChanged","numberOfResultsChanged"],data:function(){return{products:[],filters:{},productsAvailableFilterOptions:{},freezeProductFiltering:!1,numberOfResults:null}},created:function(){var e=this;this.debouncedUpdateAvailableFilterOptionsChanged=o.a.debounce((function(){var n=0,t={};Object.values(e.productsAvailableFilterOptions).forEach((function(e){Object.entries(e).forEach((function(e){var r=e[0];if("numberOfResults"===r){var o=Number(e[1]);n+=isNaN(o)?0:o}else{var l=e[1]||[];t[r]?l.forEach((function(e){t[r].add(e)})):t[r]=new Set(l)}}))})),this.numberOfResults=n,e.$emit("availableFilterOptionsChanged",t),this.freezeProductFiltering||this.$emit("numberOfResultsChanged",this.numberOfResults)}),100)},mounted:function(){this.loadProducts()},methods:{loadProducts:function(){this.products=l||[]},applyFilters:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freezeProductFiltering=n,this.filters=e},updateListOfAllAvailableFilterOptions:function(e,n){this.productsAvailableFilterOptions[e]=n,this.debouncedUpdateAvailableFilterOptionsChanged()}}},c=d,f=t(46),component=Object(f.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col gap-5 md:gap-12"},e._l(e.products,(function(n){return t("product-list-item",{key:n.id,ref:String(n.id),refInFor:!0,attrs:{"product-data":n,filters:e.filters,"freeze-product-filtering":e.freezeProductFiltering},on:{availableFilterOptionsChanged:e.updateListOfAllAvailableFilterOptions}})})),1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ProductListItem:t(270).default})},313:function(e,n,t){var content=t(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(60).default)("10a6d55c",content,!0,{sourceMap:!1})},314:function(e,n,t){var content=t(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(60).default)("0802d579",content,!0,{sourceMap:!1})},315:function(e,n,t){var content=t(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(60).default)("c379f08c",content,!0,{sourceMap:!1})},316:function(e,n,t){var content=t(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(60).default)("3eca7842",content,!0,{sourceMap:!1})},317:function(e,n,t){var content=t(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(60).default)("cc1b0088",content,!0,{sourceMap:!1})},319:function(e,n,t){e.exports=t.p+"img/filterBackground.21fb465.jpg"},340:function(e,n,t){"use strict";t(313)},341:function(e,n,t){var r=t(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n._px[data-v-35df4eca]{\n  padding-left:1rem;\n  padding-right:1rem\n}\n@media (min-width: 640px){\n._px[data-v-35df4eca]{\n    padding-left:1.25rem;\n    padding-right:1.25rem\n}\n}\n@media (min-width: 768px){\n._px[data-v-35df4eca]{\n    padding-left:2rem;\n    padding-right:2rem\n}\n}\n@media (min-width: 1024px){\n._px[data-v-35df4eca]{\n    padding-left:2.5rem;\n    padding-right:2.5rem\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},342:function(e,n,t){"use strict";t(314)},343:function(e,n,t){var r=t(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.base-card{\n  border-radius:0.375rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.skeleton-loading.skeleton-loading{\n  pointer-events:none;\n  -webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(224, 224, 224, var(--tw-bg-opacity));\n  color:transparent\n}\n.tag-bubble{\n  border-radius:9999px;\n  background-color:var(--secondary-color-light);\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.disabled-button{\n  pointer-events:none;\n  opacity:0.4\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},344:function(e,n,t){"use strict";t(315)},345:function(e,n,t){var r=t(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n@media (max-width:350px){\n.text-sm{\n    font-size:.8rem;\n    line-height:1.2rem;\n    font-weight:400\n}\n}\n.text-sm.text-sm{\n  font-size:.875rem;\n  line-height:1.25rem;\n  font-weight:500\n}\n.bounce-enter-active{\n  -webkit-animation:bounce-in .5s;\n          animation:bounce-in .5s\n}\n.bounce-leave-active{\n  animation:bounce-in .5s reverse\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0)\n}\n50%{\n    transform:scale(1.05)\n}\nto{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0)\n}\n50%{\n    transform:scale(1.05)\n}\nto{\n    opacity:1;\n    transform:scale(1)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},346:function(e,n,t){"use strict";t(316)},347:function(e,n,t){var r=t(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.rotate[data-v-35df4eca]{\n  -webkit-animation:rotateY-data-v-35df4eca 1s;\n          animation:rotateY-data-v-35df4eca 1s\n}\n@-webkit-keyframes rotateY-data-v-35df4eca{\nto{\n    transform:rotateY(-2turn)\n}\n}\n@keyframes rotateY-data-v-35df4eca{\nto{\n    transform:rotateY(-2turn)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},348:function(e,n,t){"use strict";t(317)},349:function(e,n,t){var r=t(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n#product-finder{\n  --main-bg:#e6edf4;\n  --accent-color:#2563eb;\n  --accent-color-light:#3b82f6;\n  --secondary-color:#424242;\n  --secondary-color-light:#616161;\n  --box-bg:#fff;\n  --text-main-color:#424242;\n  --selection-hover-bg-color:#e8f1ff;\n  --selection-hover-text-color:#000;\n  --even-row-bg:#fafafa;\n  --event-hover-color:#f1f5f8;\n  color:var(--text-main-color)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},350:function(e,n,t){"use strict";t.r(n);t(74);var r=t(269),o=t.n(r),l=t(318),d={name:"IndexPage",components:{productList:t(304).default,FilterMenu:l.default},data:function(){return{filters:{},freezeProductFiltering:!1,numberOfResults:null,loadingNewNumberOfResults:!1}},watch:{numberOfResults:function(e,n){var t=this;e!==n&&(this.loadingNewNumberOfResults=!0,setTimeout((function(){t.loadingNewNumberOfResults=!1}),1e3))}},created:function(){var e=this;this.debouncedUpdateProductList=o.a.debounce((function(){e.$refs.productList.applyFilters(e.filters,e.freezeProductFiltering)}),100)},methods:{updateFilters:function(e,n){this.filters=e,this.freezeProductFiltering=!!n,n||(this.numberOfResults=null),this.debouncedUpdateProductList()},setNumberOfResults:function(e){this.numberOfResults=e}}},c=(t(340),t(342),t(344),t(346),t(348),t(46)),component=Object(c.a)(d,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"app lg:container lg:px-2 lg:mx-auto overflow-hidden lg:pb-10",attrs:{id:"product-finder"}},[r("div",{staticClass:"\n      bg-booking-light\n      mx-auto\n      lg:mt-10 lg:rounded-lg\n      shadow-lg\n      max-w-5xl\n      overflow-hidden\n      relative\n      pb-8\n    "},[r("div",{staticClass:"w-full mb-2"},[r("div",{staticClass:"w-full sm:h-72 relative pt-24 sm:pt-0"},[r("div",{staticClass:"\n            hidden\n            sm:block\n            skeleton-loading\n            absolute\n            left-0\n            top-0\n            w-full\n            h-full\n          "}),e._v(" "),r("img",{staticClass:"\n            hidden\n            sm:block\n            object-cover\n            absolute\n            top-0\n            left-0\n            w-full\n            h-full\n            min-h-full\n          ",attrs:{src:t(319)}}),e._v(" "),r("div",{staticClass:"\n            hidden\n            sm:block\n            absolute\n            top-1/3\n            left-0\n            w-full\n            bottom-0\n            bg-gradient-to-b\n            from-transparent\n            to-booking-light\n          "}),e._v(" "),r("div",{staticClass:"sm:py-5 sm:absolute left-0 w-full bottom-0 py-4 _px"},[r("filter-menu",{ref:"filterMenu",on:{filtersChanged:e.updateFilters},model:{value:e.filters,callback:function(n){e.filters=n},expression:"filters"}})],1),e._v(" "),r("div",{staticClass:"absolute w-full top-0 left-0 _px"},[r("div",{staticClass:"\n              rounded-full\n              bg-boxColor\n              relative\n              top-5\n              w-20\n              h-20\n              flex flex-col\n              items-center\n              justify-center\n              pb-1.5\n              shadow-lg\n              border border-solid border-gray-300\n              text-accentColor-light\n            ",class:{rotate:e.loadingNewNumberOfResults}},[r("div",{staticClass:"contents"},[r("span",{staticClass:"text-4xl font-bold"},[e._v(e._s(e.numberOfResults))])])])])])]),e._v(" "),r("div",{staticClass:"py-2 sm:py-5 _px"},[r("product-list",{ref:"productList",on:{availableFilterOptionsChanged:function(n){return e.$refs.filterMenu.updateAvailableFilterOptions(n)},numberOfResultsChanged:e.setNumberOfResults}})],1)])])}),[],!1,null,"35df4eca",null);n.default=component.exports;installComponents(component,{FilterMenu:t(318).default,ProductList:t(304).default})}}]);