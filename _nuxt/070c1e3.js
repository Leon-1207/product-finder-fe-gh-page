(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{296:function(e){e.exports=JSON.parse('[{"id":"test-product-1","title":"Abenteuer in den Pyrenäen","minAge":14,"maxAge":17,"location":"Pyrenaen","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/008/021/gallery/pyrenaen-gipfelausblick-spanien-jugendreise.jpg","description":"Die Zeiten, in denen die Berge dieser Welt nur Oma und Opa angezogen haben, sind lange vorbei.","productPageUrl":"https://www.go-jugendreisen.de/deutschland/groemitz/kids-beach-camp/zelt-lodge/9-11.html","eventCount":7},{"id":"test-product-2","title":"Beachcamp KIDS & BEACH Grömitz Ostsee Lodge","minAge":9,"maxAge":11,"location":"Ostsee","imgUrl":"https://images.jugendreisen.com/reisebilder/bilds/000/002/183/gallery/groemitz-moewe-strand-deutschland.jpg","description":"Weitläufiger langer Sandstrand, zahlreiche Wassersportangebote und endlose Strandpromenaden zwischen den Dünen.","productPageUrl":null,"eventCount":5},{"id":"test-product-3","title":"Forschercamps in Oberursel","minAge":7,"maxAge":14,"location":"Oberursel","imgUrl":"https://forscherfreunde.de/wp-content/uploads/2021/07/Beitrag-5.jpg","description":"LEGO Modelle bauen und durch Programmierung zum Leben erwecken – Mechanik untersuchen – in Minecraft Stromkreise erforschen – konstruieren, tüfteln, programmieren, forschen und ganz viel Spaß haben!","productPageUrl":"https://forscherfreunde.de/feriencamps-in-oberursel/","eventCount":4,"additionalValues":["Thema","Alter"]}]')},303:function(e,t,n){"use strict";n.r(t);n(14),n(33),n(271),n(190),n(259),n(272),n(34),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(35);var r=n(269),l=n.n(r),o=n(296),d={components:{ProductListItem:n(270).default},emits:["availableFilterOptionsChanged","numberOfResultsChanged"],data:function(){return{products:[],filters:{},productsAvailableFilterOptions:{},freezeProductFiltering:!1,numberOfResults:null}},created:function(){var e=this;this.debouncedUpdateAvailableFilterOptionsChanged=l.a.debounce((function(){var t=0,n={};Object.values(e.productsAvailableFilterOptions).forEach((function(e){Object.entries(e).forEach((function(e){var r=e[0];if("numberOfResults"===r){var l=Number(e[1]);t+=isNaN(l)?0:l}else{var o=e[1]||[];n[r]?o.forEach((function(e){n[r].add(e)})):n[r]=new Set(o)}}))})),this.numberOfResults=t,e.$emit("availableFilterOptionsChanged",n),this.freezeProductFiltering||this.$emit("numberOfResultsChanged",this.numberOfResults)}),100)},mounted:function(){this.loadProducts()},methods:{loadProducts:function(){this.products=o||[]},applyFilters:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freezeProductFiltering=t,this.filters=e},updateListOfAllAvailableFilterOptions:function(e,t){this.productsAvailableFilterOptions[e]=t,this.debouncedUpdateAvailableFilterOptionsChanged()}}},c=d,f=n(46),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col gap-5 md:gap-12"},e._l(e.products,(function(t){return n("product-list-item",{key:t.id,ref:String(t.id),refInFor:!0,attrs:{"product-data":t,filters:e.filters,"freeze-product-filtering":e.freezeProductFiltering},on:{availableFilterOptionsChanged:e.updateListOfAllAvailableFilterOptions}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProductListItem:n(270).default})}}]);