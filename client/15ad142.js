(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{268:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("73574eb9",content,!0,{sourceMap:!1})},269:function(e,t,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("b9324abc",content,!0,{sourceMap:!1})},270:function(e,t,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("4320cb62",content,!0,{sourceMap:!1})},294:function(e,t,n){"use strict";n(268)},295:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.label[data-v-01c44dce]{\n  position:absolute;\n  top:20px;\n  left:12px;\n  font-weight:400;\n  transform-origin:0 0;\n  transform:translate3d(0,-10px,0);\n  transition:all .2s ease;\n  pointer-events:none\n}\ninput[data-v-01c44dce]{\n  -webkit-appearance:none;\n  -moz-appearance:none;\n       appearance:none;\n  width:100%;\n  padding:16px 12px 0;\n  transition:all .15s ease\n}\ninput:not(:-moz-placeholder-shown)+.label[data-v-01c44dce]{\n  transform:translate3d(2px,-15px,0) scale(.7);\n  font-weight:500\n}\ninput:not(:-ms-input-placeholder)+.label[data-v-01c44dce]{\n  transform:translate3d(2px,-15px,0) scale(.7);\n  font-weight:500\n}\ninput:focus+.label[data-v-01c44dce],input:not(:placeholder-shown)+.label[data-v-01c44dce]{\n  transform:translate3d(2px,-15px,0) scale(.7);\n  font-weight:500\n}\ninput[type=date][data-v-01c44dce]::-webkit-calendar-picker-indicator{\n  position:absolute;\n  right:10px;\n  top:12px\n}\ninput[data-v-01c44dce]::-webkit-datetime-edit,input[data-v-01c44dce]::-webkit-datetime-edit-fields-wrapper{\n  position:relative;\n  left:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},296:function(e,t,n){"use strict";n(269)},297:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\ninput:focus+.label[data-v-01c44dce]{\n  color:var(--accent-color-light)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},298:function(e,t,n){"use strict";n(270)},299:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.custom-multiselect-checkbox--selected{\n  display:none\n}\n.custom-multiselect-checkbox--not-selected,.multiselect .multiselect__option.multiselect__option--selected .custom-multiselect-checkbox--selected{\n  display:block\n}\n.multiselect .multiselect__option.multiselect__option--selected .custom-multiselect-checkbox--not-selected{\n  display:none\n}\n.custom-multiselect-check-box-option-wrapper{\n  display:flex;\n  flex-wrap:nowrap\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},308:function(e,t,n){"use strict";n.r(t);n(263);var r={props:{labelText:{type:String,default:null},modelValue:{type:[String,Number],default:null},showOptional:{type:Boolean,default:!1},wrapperClass:{type:String,default:""}},data:function(){return{value:null}},watch:{modelValue:function(e){this.value=e}},created:function(){var e=this.$attrs||{};this.required="required"in e,this.value=this.modelValue},methods:{handleInput:function(){this.$emit("input",this.value)}}},l=(n(294),n(296),n(46)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"relative",class:e.wrapperClass},["checkbox"===e.$attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"h-12 filter-input",attrs:{placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{input:e.handleInput,change:function(t){var n=e.value,r=t.target,l=!!r.checked;if(Array.isArray(n)){var o=e._i(n,null);r.checked?o<0&&(e.value=n.concat([null])):o>-1&&(e.value=n.slice(0,o).concat(n.slice(o+1)))}else e.value=l}}},"input",e.$attrs,!1)):"radio"===e.$attrs.type?n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"h-12 filter-input",attrs:{placeholder:" ",type:"radio"},domProps:{checked:e._q(e.value,null)},on:{input:e.handleInput,change:function(t){e.value=null}}},"input",e.$attrs,!1)):n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"h-12 filter-input",attrs:{placeholder:" ",type:e.$attrs.type},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.handleInput]}},"input",e.$attrs,!1)),e._v(" "),n("div",{staticClass:"label text-base text-secondaryColor inline-flex gap-2 items-center"},[n("span",[e._v(e._s(e.labelText))]),e._v(" "),e.showOptional?n("span",{directives:[{name:"show",rawName:"v-show",value:!e.required,expression:"!required"}],staticClass:"optional py-0.5",staticStyle:{"font-size":"0.7em"}},[e._v("Optional")]):e._e()])])}),[],!1,null,"01c44dce",null);t.default=component.exports},309:function(e,t,n){"use strict";n.r(t);var r={},l=(n(298),n(46)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mr-2"},[n("font-awesome-icon",{staticClass:"custom-multiselect-checkbox--selected",attrs:{icon:"check-square"}}),e._v(" "),n("font-awesome-icon",{staticClass:"custom-multiselect-checkbox--not-selected",attrs:{icon:["far","square"]}})],1)}),[],!1,null,null,null);t.default=component.exports},314:function(e,t,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("243cc17c",content,!0,{sourceMap:!1})},315:function(e,t,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("3c9481c3",content,!0,{sourceMap:!1})},316:function(e,t,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("9be2aff8",content,!0,{sourceMap:!1})},324:function(e,t,n){"use strict";n.r(t);n(36),n(63),n(64);var r=n(25),l=n(26),o=(n(14),n(50),n(34),n(41),n(48),n(276),n(33),n(43),n(194),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(35),n(274)),c=n.n(o),d=n(172),m=n.n(d),f=n(334),h=n(308),v=n(309),w=n(300);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{TextInput:h.default,Multiselect:m.a,CustomMultiselectCheckBox:v.default},emits:["filtersChanged"],data:function(){return{filters:{firstPossibleDate:null,lastPossibleDate:null,minAge:null,maxAge:null,region:null},filtersSetToNullBecauseActive:[],selectedHolidayOption:null,holidayOptions:[],allEventRanges:null,selectedRegionOptions:[],regionOptions:[],selectedAgeGroupOptions:null,ageGroupOptions:[]}},computed:{regionOptionsOrdered:function(){return c.a.sortBy(this.regionOptions,["label"],["asc"])},ageGroupOptionsOrdered:function(){return c.a.sortBy(this.ageGroupOptions,["minAge","maxAge"],["asc","asc"])},holidayOptionsWithEvents:function(){var e=this;if(!this.allEventRanges||!this.holidayOptions)return[];var t=function(t){return Array.from(e.allEventRanges).some((function(e){return Object(w.b)(Object(w.c)(t.start),Object(w.c)(t.end),e.start,e.end)}))};return this.holidayOptions.map((function(e){var n=x({},e);return n.holidays=(e.holidays||[]).filter(t),n})).filter((function(e){return((null==e?void 0:e.holidays)||[]).length>0}))},hasActiveFilters:function(){return!!this.filters&&Object.values(this.filters).some((function(e){return!(null==e||Array.isArray(e)&&0===e.length)}))}},watch:{filters:{handler:function(){this.emitFiltersChanged()},deep:!0},filtersSetToNullBecauseActive:function(){this.emitFiltersChanged()},selectedHolidayOption:function(e){"object"===Object(r.a)(e)&&null!=e&&e.start&&null!=e&&e.end?(this.filters.firstPossibleDate=e.start,this.filters.lastPossibleDate=e.end):(this.filters.firstPossibleDate=null,this.filters.lastPossibleDate=null)},selectedAgeGroupOptions:function(){var e=null,t=null;Array.isArray(this.selectedAgeGroupOptions)&&this.selectedAgeGroupOptions.length>0&&(e=this.selectedAgeGroupOptions.map((function(option){return option.minAge})),t=this.selectedAgeGroupOptions.map((function(option){return option.maxAge}))),this.filters.minAge=e,this.filters.maxAge=t},selectedRegionOptions:{handler:function(){Array.isArray(this.selectedRegionOptions)?this.filters.region=this.selectedRegionOptions.map((function(e){return e.label})):this.filters.region=null},deep:!0}},created:function(){this.loadHolidayOptions()},mounted:function(){this.emitFiltersChanged()},methods:{emitFiltersChanged:function(){var e=x({},this.filters);this.filtersSetToNullBecauseActive.forEach((function(t){e[t]=null}));var t=this.filtersSetToNullBecauseActive.length>0;this.$emit("filtersChanged",e,t)},resetFilters:function(){var e=this;this.selectedHolidayOption=null,this.selectedRegionOptions=[],this.selectedAgeGroupOptions=[],Object.keys(this.filters).forEach((function(t){e.filters[t]=null}))},loadHolidayOptions:function(){if("object"!==Object(r.a)(f))throw new Error("invalid holidays JSON file");var e=function(e){return Object(w.a)(e)},t=[];Object.entries(f).forEach((function(n){var r=n[0],l=n[1];t.push({state:r,holidays:(l||[]).map((function(t){return{name:t.Zusammenfassung,state:r,fullName:r+" "+(t.Zusammenfassung||""),start:e(t.Start),end:e(t.Ende)}}))})})),this.holidayOptions=t},updateAgeGroupOptions:function(e){var t=Array.from(e.allAgeGroups||[]),n=e.availableAgeGroups||new Set([]),r=new Set([]);n.forEach((function(option){null!=option&&option.label&&r.add(option.label)})),this.ageGroupOptions=t.map((function(e){return x(x({},e),{},{disabled:!r.has(null==e?void 0:e.label)})}))},updateHolidayOptions:function(e){this.allEventRanges=null==e?void 0:e.allDateRanges;this.holidayOptions&&(this.holidayOptions=this.holidayOptions.map((function(t){var n=x({},t);return n.holidays=(n.holidays||[]).map((function(option){var t,n=x({},option);return n.disabled=(t=option,!(null==e||!e.availableDateRanges||(e.availableDateRanges||[]).some((function(e){return Object(w.b)(Object(w.c)(t.start),Object(w.c)(t.end),e.start,e.end)})))),n})),n})))},updateRegionOptions:function(e){var t=(null==e?void 0:e.allRegions)||new Set([]),n=(null==e?void 0:e.availableRegions)||new Set([]),r=new Set([]);n.forEach((function(e){var label=null==e?void 0:e.label;label&&r.add(label)})),this.regionOptions=Array.from(t).map((function(option){var e=x({},option);return e.disabled=!r.has(null==option?void 0:option.label),e}))},updateAvailableFilterOptions:function(e){this.updateAgeGroupOptions(e),this.updateHolidayOptions(e),this.updateRegionOptions(e)},updateDropDownOptionsOnOpen:function(e){this.filtersSetToNullBecauseActive=e},updateFiltersAfterDropDownCloses:function(){this.filtersSetToNullBecauseActive=[]}}},_=(n(335),n(337),n(339),n(46)),component=Object(_.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex filter-menu-flex-gap flex-wrap justify-start gap-x-8 gap-y-4"},[n("div",{staticClass:"\n      flex\n      date-filter-gap\n      flex-wrap\n      justify-items-stretch\n      items-stretch\n      flex-grow\n    "},[n("div",{staticClass:"multiselect-wrapper"},[n("multiselect",{attrs:{options:e.holidayOptionsWithEvents,"show-labels":!1,"group-values":"holidays","group-label":"state",label:"fullName","track-by":"fullName",placeholder:"Welche Ferien?"},on:{open:function(t){return e.updateDropDownOptionsOnOpen(["firstPossibleDate","lastPossibleDate"])},close:e.updateFiltersAfterDropDownCloses},scopedSlots:e._u([{key:"option",fn:function(t){var option=t.option;return[option.disabled?n("div",{staticClass:"_multiselect-option",class:option.name?"text-sm":"text-mainTextColor text-base font-semibold",on:{click:function(e){e.stopPropagation()}}},[option.name?n("font-awesome-icon",{staticClass:"ml-2.5 mr-1",attrs:{icon:"arrow-right"}}):e._e(),e._v("\n            "+e._s(option.name||option.$groupLabel)+"\n          ")],1):n("span",{class:option.name?"text-sm":"text-mainTextColor text-base font-semibold"},[option.name?n("font-awesome-icon",{staticClass:"ml-2.5 mr-1",attrs:{icon:"arrow-right"}}):e._e(),e._v("\n            "+e._s(option.name||option.$groupLabel))],1)]}},{key:"singleLabel",fn:function(t){var option=t.option;return[n("span",{staticClass:"whitespace-nowrap"},[n("span",[e._v(e._s(option.name)+" ")]),e._v(" "),n("span",{staticClass:"text-xs"},[e._v("("+e._s(option.state)+")")])])]}}]),model:{value:e.selectedHolidayOption,callback:function(t){e.selectedHolidayOption=t},expression:"selectedHolidayOption"}}),e._v(" "),n("span",{staticClass:"multiselect-label",class:{"multiselect-label-small":null!==e.selectedHolidayOption}},[e._v("\n        Welche Ferien?\n      ")])],1),e._v(" "),n("div",{staticClass:"flex date-filter-gap flex-wrap flex-grow"},[n("text-input",{attrs:{"model-value":e.filters.firstPossibleDate,"label-text":"Frühste Anreise",type:"date","wrapper-class":"flex-grow"},model:{value:e.filters.firstPossibleDate,callback:function(t){e.$set(e.filters,"firstPossibleDate",t)},expression:"filters.firstPossibleDate"}}),e._v(" "),n("text-input",{attrs:{"model-value":e.filters.lastPossibleDate,"label-text":"Späteste Abreise",min:e.filters.firstPossibleDate,type:"date","wrapper-class":"flex-grow"},model:{value:e.filters.lastPossibleDate,callback:function(t){e.$set(e.filters,"lastPossibleDate",t)},expression:"filters.lastPossibleDate"}})],1)]),e._v(" "),n("div",{staticClass:"multiselect-wrapper"},[n("multiselect",{attrs:{options:e.regionOptionsOrdered,"show-labels":!1,multiple:!0,placeholder:"Welche Region?",label:"label","track-by":"label","close-on-select":!1},on:{open:function(t){return e.updateDropDownOptionsOnOpen(["region"])},close:e.updateFiltersAfterDropDownCloses},scopedSlots:e._u([{key:"option",fn:function(t){var option=t.option;return[option.disabled?n("div",{staticClass:"_multiselect-option",on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"custom-multiselect-check-box-option-wrapper"},[n("custom-multiselect-check-box"),e._v(e._s(option.label)+"\n          ")],1)]):n("span",{staticClass:"custom-multiselect-check-box-option-wrapper"},[n("custom-multiselect-check-box"),e._v(e._s(option.label)+"\n        ")],1)]}}]),model:{value:e.selectedRegionOptions,callback:function(t){e.selectedRegionOptions=t},expression:"selectedRegionOptions"}}),e._v(" "),n("span",{staticClass:"multiselect-label",class:{"multiselect-label-small":Array.isArray(e.selectedRegionOptions)&&e.selectedRegionOptions.length>0}},[e._v("Welche Region?")])],1),e._v(" "),n("div",{staticClass:"multiselect-wrapper"},[n("multiselect",{attrs:{options:e.ageGroupOptionsOrdered,"show-labels":!1,"track-by":"label",multiple:!0,label:"label",placeholder:"Welche Altersgruppe?","close-on-select":!1},on:{open:function(t){return e.updateDropDownOptionsOnOpen(["minAge","maxAge"])},close:e.updateFiltersAfterDropDownCloses},scopedSlots:e._u([{key:"option",fn:function(t){var option=t.option;return[option.disabled?n("div",{staticClass:"_multiselect-option",on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"custom-multiselect-check-box-option-wrapper"},[n("custom-multiselect-check-box"),e._v(e._s(option.label)+"\n          ")],1)]):n("div",{staticClass:"custom-multiselect-check-box-option-wrapper"},[n("custom-multiselect-check-box"),e._v(e._s(option.label)+"\n        ")],1)]}}]),model:{value:e.selectedAgeGroupOptions,callback:function(t){e.selectedAgeGroupOptions=t},expression:"selectedAgeGroupOptions"}}),e._v(" "),n("span",{staticClass:"multiselect-label",class:{"multiselect-label-small":Array.isArray(e.selectedAgeGroupOptions)&&e.selectedAgeGroupOptions.length>0}},[e._v("\n      Welche Altersgruppe?\n    ")])],1),e._v(" "),n("button",{staticClass:"reset-filters-button filter-input-min-height",class:e.hasActiveFilters?"opacity-100":"pointer-events-none opacity-10",on:{click:e.resetFilters}},[e._v("\n    Zurücksetzen\n  ")])])}),[],!1,null,"3e93c88f",null);t.default=component.exports;installComponents(component,{TextInput:n(308).default,CustomMultiselectCheckBox:n(309).default})},334:function(e){e.exports=JSON.parse('{"Baden-Wuerttemberg":[{"Ort":"Baden-Wuerttemberg","Zusammenfassung":"Osterferien","Start":"15.04.2022","Ende":"24.04.2022"},{"Ort":"Baden-Wuerttemberg","Zusammenfassung":"Sommerferien","Start":"28.07.2022","Ende":"11.09.2022"},{"Ort":"Baden-Wuerttemberg","Zusammenfassung":"Herbstferien","Start":"29.10.2021","Ende":"07.11.2021"},{"Ort":"Baden-Wuerttemberg","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"09.01.2022"}],"Bayern":[{"Ort":"Bayern","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"23.04.2022"},{"Ort":"Bayern","Zusammenfassung":"Sommerferien","Start":"29.07.2022","Ende":"12.09.2022"},{"Ort":"Bayern","Zusammenfassung":"Herbstferien","Start":"29.10.2021","Ende":"07.11.2021"},{"Ort":"Bayern","Zusammenfassung":"Winterferien","Start":"23.12.2021","Ende":"09.01.2022"}],"Berlin":[{"Ort":"Berlin","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"24.04.2022"},{"Ort":"Berlin","Zusammenfassung":"Sommerferien","Start":"06.07.2022","Ende":"21.08.2022"},{"Ort":"Berlin","Zusammenfassung":"Herbstferien","Start":"08.10.2021","Ende":"24.10.2021"},{"Ort":"Berlin","Zusammenfassung":"Winterferien","Start":"23.12.2021","Ende":"02.01.2022"}],"Brandenburg":[{"Ort":"Brandenburg","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"23.04.2022"},{"Ort":"Brandenburg","Zusammenfassung":"Sommerferien","Start":"06.07.2022","Ende":"21.08.2022"},{"Ort":"Brandenburg","Zusammenfassung":"Herbstferien","Start":"08.10.2021","Ende":"24.10.2021"},{"Ort":"Brandenburg","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"02.01.2022"}],"Bremen":[{"Ort":"Bremen","Zusammenfassung":"Osterferien","Start":"01.04.2022","Ende":"19.04.2022"},{"Ort":"Bremen","Zusammenfassung":"Sommerferien","Start":"13.07.2022","Ende":"24.08.2022"},{"Ort":"Bremen","Zusammenfassung":"Herbstferien","Start":"15.10.2021","Ende":"31.10.2021"},{"Ort":"Bremen","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"09.01.2022"}],"Hamburg":[{"Ort":"Hamburg","Zusammenfassung":"Osterferien","Start":"04.03.2022","Ende":"20.03.2022"},{"Ort":"Hamburg","Zusammenfassung":"Sommerferien","Start":"06.07.2022","Ende":"17.08.2022"},{"Ort":"Hamburg","Zusammenfassung":"Herbstferien","Start":"01.10.2021","Ende":"17.10.2021"},{"Ort":"Hamburg","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"04.01.2022"}],"Hessen":[{"Ort":"Hessen","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"24.04.2022"},{"Ort":"Hessen","Zusammenfassung":"Sommerferien","Start":"22.07.2022","Ende":"04.09.2022"},{"Ort":"Hessen","Zusammenfassung":"Herbstferien","Start":"08.10.2021","Ende":"24.10.2021"},{"Ort":"Hessen","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"09.01.2022"}],"Mecklenburg-Vorpommern":[{"Ort":"Mecklenburg-Vorpommern","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"20.04.2022"},{"Ort":"Mecklenburg-Vorpommern","Zusammenfassung":"Sommerferien","Start":"01.07.2022","Ende":"14.08.2022"},{"Ort":"Mecklenburg-Vorpommern","Zusammenfassung":"Herbstferien","Start":"01.10.2021","Ende":"10.10.2021"},{"Ort":"Mecklenburg-Vorpommern","Zusammenfassung":"Winterferien","Start":"21.12.2021","Ende":"02.01.2022"}],"Niedersachsen":[{"Ort":"Niedersachsen","Zusammenfassung":"Osterferien","Start":"01.04.2022","Ende":"19.04.2022"},{"Ort":"Niedersachsen","Zusammenfassung":"Sommerferien","Start":"13.07.2022","Ende":"24.08.2022"},{"Ort":"Niedersachsen","Zusammenfassung":"Herbstferien","Start":"15.10.2021","Ende":"31.10.2021"},{"Ort":"Niedersachsen","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"09.01.2022"}],"Nordrhein-Westfalen":[{"Ort":"Nordrhein-Westfalen","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"24.04.2022"},{"Ort":"Nordrhein-Westfalen","Zusammenfassung":"Sommerferien","Start":"24.06.2022","Ende":"10.08.2022"},{"Ort":"Nordrhein-Westfalen","Zusammenfassung":"Herbstferien","Start":"08.10.2021","Ende":"24.10.2021"},{"Ort":"Nordrhein-Westfalen","Zusammenfassung":"Winterferien","Start":"23.12.2021","Ende":"09.01.2022"}],"Rheinland-Pfalz":[{"Ort":"Rheinland-Pfalz","Zusammenfassung":"Osterferien","Start":"12.04.2022","Ende":"24.04.2022"},{"Ort":"Rheinland-Pfalz","Zusammenfassung":"Sommerferien","Start":"22.07.2022","Ende":"04.09.2022"},{"Ort":"Rheinland-Pfalz","Zusammenfassung":"Herbstferien","Start":"08.10.2021","Ende":"24.10.2021"},{"Ort":"Rheinland-Pfalz","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"02.01.2022"}],"Saarland":[{"Ort":"Saarland","Zusammenfassung":"Osterferien","Start":"13.04.2022","Ende":"24.04.2022"},{"Ort":"Saarland","Zusammenfassung":"Sommerferien","Start":"22.07.2022","Ende":"04.09.2022"},{"Ort":"Saarland","Zusammenfassung":"Herbstferien","Start":"15.10.2021","Ende":"31.10.2021"},{"Ort":"Saarland","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"03.01.2022"}],"Sachsen":[{"Ort":"Sachsen","Zusammenfassung":"Osterferien","Start":"14.04.2022","Ende":"24.04.2022"},{"Ort":"Sachsen","Zusammenfassung":"Sommerferien","Start":"15.07.2022","Ende":"28.08.2022"},{"Ort":"Sachsen","Zusammenfassung":"Herbstferien","Start":"15.10.2021","Ende":"31.10.2021"},{"Ort":"Sachsen","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"02.01.2022"}],"Sachsen-Anhalt":[{"Ort":"Sachsen-Anhalt","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"18.04.2022"},{"Ort":"Sachsen-Anhalt","Zusammenfassung":"Sommerferien","Start":"14.07.2022","Ende":"24.08.2022"},{"Ort":"Sachsen-Anhalt","Zusammenfassung":"Herbstferien","Start":"22.10.2021","Ende":"31.10.2021"},{"Ort":"Sachsen-Anhalt","Zusammenfassung":"Winterferien","Start":"21.12.2021","Ende":"09.01.2022"}],"Schleswig-Holstein":[{"Ort":"Schleswig-Holstein","Zusammenfassung":"Osterferien","Start":"01.04.2022","Ende":"17.04.2022"},{"Ort":"Schleswig-Holstein","Zusammenfassung":"Sommerferien","Start":"01.07.2022","Ende":"13.08.2022"},{"Ort":"Schleswig-Holstein","Zusammenfassung":"Herbstferien","Start":"01.10.2021","Ende":"17.10.2021"},{"Ort":"Schleswig-Holstein","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"09.01.2022"}],"Thueringen":[{"Ort":"Thueringen","Zusammenfassung":"Osterferien","Start":"08.04.2022","Ende":"24.04.2022"},{"Ort":"Thueringen","Zusammenfassung":"Sommerferien","Start":"15.07.2022","Ende":"28.08.2022"},{"Ort":"Thueringen","Zusammenfassung":"Herbstferien","Start":"22.10.2021","Ende":"07.11.2021"},{"Ort":"Thueringen","Zusammenfassung":"Winterferien","Start":"22.12.2021","Ende":"02.01.2022"}]}')},335:function(e,t,n){"use strict";n(314)},336:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.filter-input-min-height[data-v-3e93c88f]{\n  min-height:48px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},337:function(e,t,n){"use strict";n(315)},338:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.filter-label{\n  display:grid;\n  gap:0.125rem;\n  color:var(--secondary-color-light)\n}\n.date-filter-gap{\n  gap:0.75rem\n}\n.filter-input, .multiselect, .reset-filters-button{\n  max-width:100%;\n  border-collapse:collapse;\n  cursor:pointer;\n  border-radius:0.5rem;\n  border-width:1px;\n  border-color:transparent\n}\n.filter-input:focus-within, .multiselect:focus-within, .reset-filters-button:focus-within{\n  border-color:var(--accent-color-light)\n}\n.filter-input, .multiselect, .reset-filters-button{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity))\n}\n.filter-input:hover, .multiselect:hover, .reset-filters-button:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity))\n}\n.filter-input, .multiselect, .reset-filters-button{\n  --tw-shadow:0 0 #0000;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline:2px solid transparent;\n  outline-offset:2px\n}\nbutton.reset-filters-button{\n  border-style:none;\n  background-color:var(--secondary-color)\n}\nbutton.reset-filters-button:hover{\n  background-color:var(--secondary-color-light)\n}\nbutton.reset-filters-button{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},339:function(e,t,n){"use strict";n(316)},340:function(e,t,n){var r=n(59)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.multiselect-wrapper{\n  position:relative;\n  display:flex;\n  max-width:100%;\n  flex-grow:1\n}\n@media (min-width: 640px){\n.multiselect-wrapper{\n    max-width:24rem\n}\n}\n.multiselect .multiselect__single,.multiselect>.multiselect__tags,.multiselect input{\n  background:transparent\n}\n.multiselect .multiselect__single{\n  right:0px;\n  left:0.375rem;\n  overflow:hidden\n}\n.multiselect .multiselect__single:before{\n  content:"";\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  display:block;\n  height:100%;\n  width:1rem;\n  background-image:linear-gradient(to right, var(--tw-gradient-stops));\n  --tw-gradient-from:transparent;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));\n  --tw-gradient-to:#fff\n}\n.multiselect .multiselect__single:before:hover{\n  --tw-gradient-to:#f9fafb\n}\n._multiselect-option{\n  position:absolute;\n  top:0px;\n  left:0px;\n  display:flex;\n  height:100%;\n  width:100%;\n  cursor:default;\n  align-items:center;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding-left:0.75rem;\n  --tw-text-opacity:1;\n  color:rgba(189, 189, 189, var(--tw-text-opacity))\n}\n.multiselect>.multiselect__tags{\n  min-height:30px;\n  max-height:30px\n}\n.multiselect>*{\n  border-style:none\n}\n.multiselect{\n  z-index:58;\n  min-width:200px!important;\n  box-sizing:border-box;\n  height:3rem;\n  max-width:100%\n}\n.multiselect__single,.multiselect input{\n  padding:16px 12px 0 6px!important;\n  bottom:4px;\n  width:auto!important;\n  position:absolute!important;\n  display:block!important\n}\n.multiselect__single, .multiselect input{\n  margin-bottom:0px\n}\n.multiselect__single::-moz-placeholder, .multiselect input::-moz-placeholder{\n  color:transparent\n}\n.multiselect__single:-ms-input-placeholder, .multiselect input:-ms-input-placeholder{\n  color:transparent\n}\n.multiselect__single::placeholder, .multiselect input::placeholder{\n  color:transparent\n}\n.multiselect.multiselect--active{\n  z-index:59;\n  max-width:100%\n}\n.multiselect.multiselect--active+.multiselect-label,.multiselect:focus-within+.multiselect-label{\n  z-index:59\n}\n.multiselect.multiselect--active .multiselect__tags-wrap{\n  opacity:0.2\n}\n.multiselect__tag-icon{\n  z-index:60\n}\n.multiselect--active .multiselect__content-wrapper{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.multiselect__content-wrapper{\n  z-index:61!important;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-translate-y:0.375rem;\n  border-radius:0.375rem\n}\n.multiselect__tags{\n  margin-top:1rem;\n  padding-top:0.125rem\n}\n.multiselect__tag{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-translate-y:0.125rem;\n  background-color:var(--secondary-color)\n}\n.multiselect__tag .multiselect__tag-icon, .multiselect__tag .multiselect__tag-icon:after{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.multiselect__tag .multiselect__tag-icon:hover{\n  background-color:var(--secondary-color-light)\n}\n.multiselect .multiselect__placeholder{\n  margin-right:0.5rem;\n  opacity:0\n}\n.multiselect:focus-within+.multiselect-label{\n  color:var(--accent-color-light)\n}\n.multiselect-label{\n  position:absolute;\n  top:20px;\n  left:12px;\n  font-weight:400;\n  transform-origin:0 0;\n  transform:translate3d(0,-10px,0);\n  transition:all .2s ease;\n  pointer-events:none;\n  z-index:58\n}\n.multiselect-label-small,.multiselect:focus-within+.multiselect-label{\n  transform:translate3d(2px,-15px,0) scale(.7);\n  font-weight:500\n}\n.multiselect .multiselect__option.multiselect__option--highlight{\n  background:var(--selection-hover-bg-color);\n  color:var(--selection-hover-text-color)\n}\n.multiselect__tags-wrap{\n  z-index:2;\n  position:absolute;\n  right:2.5rem;\n  left:0.75rem;\n  max-width:100%;\n  overflow:hidden;\n  white-space:nowrap\n}\n.multiselect__tags-wrap:after{\n  content:"";\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0.25rem;\n  display:block;\n  width:0.5rem;\n  background-image:linear-gradient(to right, var(--tw-gradient-stops));\n  --tw-gradient-from:transparent;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));\n  --tw-gradient-to:#fff\n}\n.multiselect__tags-wrap:after:hover{\n  --tw-gradient-to:#f9fafb\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r}}]);