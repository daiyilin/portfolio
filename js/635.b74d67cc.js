"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[635],{2635:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"hero"},[e("img",{staticClass:"person",attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/person.png","data-depth":"0.10"}}),e("img",{staticClass:"bg",attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/background.png","data-depth":"0.34"}}),e("img",{staticClass:"snow",attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/snow.png","data-depth":"0.24"}}),t._m(1),e("svg",{attrs:{version:"1.1",id:"mouse-icon","data-depth":"0.5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 75","xml:space":"preserve"}},[e("path",{attrs:{id:"outline",fill:"none",stroke:"#FFFFFF","stroke-width":"3","stroke-miterlimit":"10",d:"M20.434 61.208h0c-9.665 0-17.5-7.835-17.5-17.5v-25c0-9.665 7.835-17.5 17.5-17.5h0c9.665 0 17.5 7.835 17.5 17.5v25c0 9.665-7.835 17.5-17.5 17.5z"}}),e("circle",{attrs:{id:"scroll",fill:"#FFFFFF",cx:"20.434",cy:"14.626",r:"4"}})])]),t._m(2)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("p",[t._v("ScrollTrigger Demo")]),e("ul",[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Explore")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Contact")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero-text"},[e("h1",{staticClass:"hero-title",attrs:{"data-depth":"0.64"}},[t._v("DISCOVER NATURE")]),e("h3",{staticClass:"hero-sub",attrs:{"data-depth":"0.6"}},[t._v("Take it all in")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"panel"},[e("div",{staticClass:"container"},[e("div",{staticClass:"grid-item"},[e("img",{staticClass:"panel-image",attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/590856/512.jpg"}})]),e("div",{staticClass:"grid-item"},[e("p",{staticClass:"panel-text"},[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam facilis beatae molestias qui impedit, accusamus eius pariatur inventore expedita minima necessitatibus iste labore quibusdam neque adipisci sequi voluptatem iusto dignissimos! Commodi mollitia doloribus reprehenderit rem sunt? Ea quis numquam consectetur esse nostrum eveniet totam laborum? Deserunt fugiat aliquam assumenda qui sit vero vitae id laudantium nostrum quae sapiente temporibus quaerat dolorem culpa quos, aspernatur quo maiores voluptatem incidunt autem, repudiandae iste aperiam. Culpa sunt nulla accusamus, maxime voluptatum molestias?")]),e("button",{staticClass:"btn"},[t._v("Read more")])])])])}],r=e(137),o=e(7359);r.p8.registerPlugin(o.i);var n={name:"gsapPage",data(){return{}},mounted(){const t=document.querySelector(".panel-image"),a=document.querySelector(".btn"),e=document.querySelector(".panel-text"),s=r.p8.timeline({repeat:-1,paused:!0});s.to("#scroll",{y:20,autoAlpha:0,transformOrigin:"50% 100%",duration:.7},"icon").to("#outline",{y:8,duration:.7},"icon").to("#outline",{y:0,duration:.7},"icon+=0.7");const i=r.p8.timeline({defaults:{ease:"none",transformOrigin:"50% 50%"},scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});r.p8.utils.toArray("img").forEach((t=>{const a=t.dataset.depth,e=-t.offsetHeight*a;i.to(t,{y:-e},0)}));const n=r.p8.timeline({paused:!0,defaults:{ease:"power1.out"}});n.from(t,{autoAlpha:0,scale:0,y:20,duration:.5},0).from(e,{autoAlpha:0,x:50,duration:.4},.04).from(a,{autoAlpha:0,x:50,duration:.36,onComplete:()=>{r.p8.set(a,{clearProps:"transform"})}},.08),o.i.create({trigger:".panel",start:"-25% top",end:"300px bottom",onEnter:()=>{n.play(),s.pause()},onEnterBack:()=>{n.reverse(),s.restart()}})},methods:{}},l=n,u=e(1001),c=(0,u.Z)(l,s,i,!1,null,"c8d179a2",null),m=c.exports}}]);
//# sourceMappingURL=635.b74d67cc.js.map