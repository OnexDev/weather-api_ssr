(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{210:function(t,e,n){"use strict";n.r(e);n(33);var l={data:function(){return{inputValue:""}},created:function(){},methods:{saveChanges:function(){this.$nuxt.$emit("changedItem",{id:this.$route.params.id,message:this.inputValue})}},mounted:function(){console.log(this.$route.params.id),this.inputValue=this.$route.params.name}},o=n(36),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrapper"}),t._v(" "),n("div",{staticClass:"flex"},[n("b-field",{attrs:{label:"Название города (eng)"}},[n("b-input",{model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),t._v(" "),n("b-button",{attrs:{type:"is-primary"},on:{click:t.saveChanges}},[t._v("Сохранить")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);