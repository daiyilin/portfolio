"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[557],{557:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moviePage"},[a("b-col",[a("h3",{staticStyle:{"font-family":"'Bebas Neue', cursive"}},[t._v("Search Movie")])]),a("b-col",[a("b-input-group",{staticClass:"mt-3"},[a("b-form-input",{attrs:{placeholder:"Search Movie"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"info"},on:{click:function(e){return t.submitBtn()}}},[t._v("確認")])],1)],1),a("div",{},[t._v(" 共 "+t._s(t.movieData.Search.length)+" 筆 ")])],1),a("b-col",[a("div",{staticClass:"movieContent"},t._l(t.movieData.Search,(function(e,i){return a("div",{key:i,staticClass:"movieIndex"},[a("img",{attrs:{src:e.Poster,width:"200px",height:"300px",alt:e.Title}}),a("div",{staticClass:"movieTitle"},[t._v(t._s(e.Title)),a("br"),t._v(t._s(e.Year))])])})),0)]),a("div",{staticClass:"popcorn"})],1)},s=[],o={name:"moviePage",data(){return{searchText:null,movieData:{Search:[],totalResults:0,Response:!0}}},created(){this.searchText="Godzilla",this.submitBtn()},methods:{submitBtn(){}}},r=o,n=a(1001),c=(0,n.Z)(r,i,s,!1,null,"3f7b97c2",null),l=c.exports}}]);
//# sourceMappingURL=557.3138bbc8.js.map