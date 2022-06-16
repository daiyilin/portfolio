"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[359],{7359:function(e,t,n){n.d(t,{i:function(){return un}});var r=n(9726);n(2707),n(7042),n(1539),n(4747),n(4916),n(3123),n(1249),n(2222),n(5306),n(7601),n(561),n(7327);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}
/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var a,s,l,c,u,f,d,p,h,g,v,m,y=function(){return a||"undefined"!==typeof window&&(a=window.gsap)&&a.registerPlugin&&a},b=1,x=[],w=[],k=[],_=Date.now,S=function(e,t){return t},T=function(){var e=h.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,w),r.push.apply(r,k),w=n,k=r,S=function(e,n){return t[e](n)}},M=function(e,t){return~k.indexOf(e)&&k[k.indexOf(e)+1][t]},C=function(e){return!!~g.indexOf(e)},E=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},P=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},O="scrollLeft",A="scrollTop",D=function(){return v&&v.isPressed||w.cache++},Y=function(e,t){var n=function n(r){if(r||0===r){b&&(l.history.scrollRestoration="manual");var i=v&&v.isPressed;r=n.v=Math.round(r)||(v&&v.iOS?1:0),e(r),n.cacheID=w.cache,i&&S("ss",r)}else(t||w.cache!==n.cacheID||S("ref"))&&(n.cacheID=w.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},R={s:O,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Y((function(e){return arguments.length?l.scrollTo(e,X.sc()):l.pageXOffset||c[O]||u[O]||f[O]||0}))},X={s:A,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:R,sc:Y((function(e){return arguments.length?l.scrollTo(R.sc(),e):l.pageYOffset||c[A]||u[A]||f[A]||0}))},z=function(e){return a.utils.toArray(e)[0]||("string"===typeof e&&!1!==a.config().nullTargetWarn?console.warn("Element not found:",e):null)},I=function(e,t){var n=t.s,r=t.sc,i=w.indexOf(e),o=r===X.sc?1:2;return!~i&&(i=w.push(e)-1),w[i+o]||(w[i+o]=Y(M(e,n),!0)||(C(e)?r:Y((function(t){return arguments.length?e[n]=t:e[n]}))))},B=function(e,t,n){var r=e,i=e,o=_(),a=o,s=t||50,l=Math.max(500,3*s),c=function(e,t){var l=_();t||l-o>s?(i=r,r=e,a=o,o=l):n?r+=e:r=i+(e-i)/(l-a)*(o-a)},u=function(){i=r=n?0:r,a=o=0},f=function(e){var t=a,s=i,u=_();return(e||0===e)&&e!==r&&c(e),o===a||u-a>l?0:(r+(n?s:-s))/((n?u:o)-t)*1e3};return{update:c,reset:u,getVelocity:f}},L=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},N=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},H=function(){h=a.core.globals().ScrollTrigger,h&&h.core&&T()},W=function(e){return a=e||y(),a&&"undefined"!==typeof document&&document.body&&(l=window,c=document,u=c.documentElement,f=c.body,g=[l,c,u,f],a.utils.clamp,p="onpointerenter"in f?"pointer":"mouse",d=F.isTouch=l.matchMedia&&l.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in l||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,m=F.eventTypes=("ontouchstart"in u?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in u?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout((function(){return b=0}),500),H(),s=1),s};R.op=X,w.cache=0;var F=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){s||W(a)||console.warn("Please gsap.registerPlugin(Observer)"),h||H();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,o=e.lineHeight,g=e.debounce,y=e.preventDefault,b=e.onStop,w=e.onStopDelay,k=e.ignore,S=e.wheelSpeed,T=e.event,M=e.onDragStart,O=e.onDragEnd,A=e.onDrag,Y=e.onPress,F=e.onRelease,V=e.onRight,q=e.onLeft,G=e.onUp,U=e.onDown,j=e.onChangeX,K=e.onChangeY,Z=e.onChange,$=e.onToggleX,J=e.onToggleY,Q=e.onHover,ee=e.onHoverEnd,te=e.onMove,ne=e.ignoreCheck,re=e.isNormalizer,ie=e.onGestureStart,oe=e.onGestureEnd,ae=e.onWheel,se=e.onEnable,le=e.onDisable,ce=e.onClick,ue=e.scrollSpeed,fe=e.capture,de=e.allowClicks,pe=e.lockAxis,he=e.onLockAxis;this.target=i=z(i)||u,this.vars=e,k&&(k=a.utils.toArray(k)),t=t||0,n=n||0,S=S||1,ue=ue||1,r=r||"wheel,touch,pointer",g=!1!==g,o||(o=parseFloat(l.getComputedStyle(f).lineHeight)||22);var ge,ve,me,ye,be,xe,we,ke=this,_e=0,Se=0,Te=I(i,R),Me=I(i,X),Ce=Te(),Ee=Me(),Pe=~r.indexOf("touch")&&!~r.indexOf("pointer")&&"pointerdown"===m[0],Oe=C(i),Ae=i.ownerDocument||c,De=[0,0,0],Ye=[0,0,0],Re=0,Xe=function(){return Re=_()},ze=function(e,t){return(ke.event=e)&&k&&~k.indexOf(e.target)||t&&Pe&&"touch"!==e.pointerType||ne&&ne(e,t)},Ie=function(){ke._vx.reset(),ke._vy.reset(),ve.pause(),b&&b(ke)},Be=function(){var e=ke.deltaX=N(De),n=ke.deltaY=N(Ye),r=Math.abs(e)>=t,i=Math.abs(n)>=t;Z&&(r||i)&&Z(ke,e,n,De,Ye),r&&(V&&ke.deltaX>0&&V(ke),q&&ke.deltaX<0&&q(ke),j&&j(ke),$&&ke.deltaX<0!==_e<0&&$(ke),_e=ke.deltaX,De[0]=De[1]=De[2]=0),i&&(U&&ke.deltaY>0&&U(ke),G&&ke.deltaY<0&&G(ke),K&&K(ke),J&&ke.deltaY<0!==Se<0&&J(ke),Se=ke.deltaY,Ye[0]=Ye[1]=Ye[2]=0),(ye||me)&&(te&&te(ke),he&&xe&&he(ke),me&&(A(ke),me=!1),ye=xe=!1),be&&(ae(ke),be=!1),ge=0},Le=function(e,t,n){De[n]+=e,Ye[n]+=t,ke._vx.update(e),ke._vy.update(t),g?ge||(ge=requestAnimationFrame(Be)):Be()},Ne=function(e,t){"y"!==we&&(De[2]+=e,ke._vx.update(e,!0)),"x"!==we&&(Ye[2]+=t,ke._vy.update(t,!0)),pe&&!we&&(ke.axis=we=Math.abs(e)>Math.abs(t)?"x":"y",xe=!0),g?ge||(ge=requestAnimationFrame(Be)):Be()},He=function(e){if(!ze(e,1)){e=L(e,y);var t=e.clientX,r=e.clientY,i=t-ke.x,o=r-ke.y,a=ke.isDragging;ke.x=t,ke.y=r,(a||Math.abs(ke.startX-t)>=n||Math.abs(ke.startY-r)>=n)&&(A&&(me=!0),a||(ke.isDragging=!0),Ne(i,o),a||M&&M(ke))}},We=ke.onPress=function(e){ze(e,1)||(ke.axis=we=null,ve.pause(),ke.isPressed=!0,e=L(e),_e=Se=0,ke.startX=ke.x=e.clientX,ke.startY=ke.y=e.clientY,ke._vx.reset(),ke._vy.reset(),E(re?i:Ae,m[1],He,y,!0),ke.deltaX=ke.deltaY=0,Y&&Y(ke))},Fe=function(e){if(!ze(e,1)){P(re?i:Ae,m[1],He,!0);var t=ke.isDragging&&(Math.abs(ke.x-ke.startX)>3||Math.abs(ke.y-ke.startY)>3),n=L(e);t||(ke._vx.reset(),ke._vy.reset(),y&&de&&a.delayedCall(.08,(function(){if(_()-Re>300&&!e.defaultPrevented)if(e.target.click)e.target.click();else if(Ae.createEvent){var t=Ae.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,l,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}))),ke.isDragging=ke.isGesturing=ke.isPressed=!1,b&&!re&&ve.restart(!0),O&&t&&O(ke),F&&F(ke,t)}},Ve=function(e){return e.touches&&e.touches.length>1&&(ke.isGesturing=!0)&&ie(e,ke.isDragging)},qe=function(){return(ke.isGesturing=!1)||oe(ke)},Ge=function(e){if(!ze(e)){var t=Te(),n=Me();Le((t-Ce)*ue,(n-Ee)*ue,1),Ce=t,Ee=n,b&&ve.restart(!0)}},Ue=function(e){if(!ze(e)){e=L(e,y),ae&&(be=!0);var t=(1===e.deltaMode?o:2===e.deltaMode?l.innerHeight:1)*S;Le(e.deltaX*t,e.deltaY*t,0),b&&!re&&ve.restart(!0)}},je=function(e){if(!ze(e)){var t=e.clientX,n=e.clientY,r=t-ke.x,i=n-ke.y;ke.x=t,ke.y=n,ye=!0,(r||i)&&Ne(r,i)}},Ke=function(e){ke.event=e,Q(ke)},Ze=function(e){ke.event=e,ee(ke)},$e=function(e){return ze(e)||L(e,y)&&ce(ke)};ve=ke._dc=a.delayedCall(w||.25,Ie).pause(),ke.deltaX=ke.deltaY=0,ke._vx=B(0,50,!0),ke._vy=B(0,50,!0),ke.scrollX=Te,ke.scrollY=Me,ke.isDragging=ke.isGesturing=ke.isPressed=!1,ke.enable=function(e){return ke.isEnabled||(E(Oe?Ae:i,"scroll",D),r.indexOf("scroll")>=0&&E(Oe?Ae:i,"scroll",Ge,y,fe),r.indexOf("wheel")>=0&&E(i,"wheel",Ue,y,fe),(r.indexOf("touch")>=0&&d||r.indexOf("pointer")>=0)&&(E(i,m[0],We,y,fe),E(Ae,m[2],Fe),E(Ae,m[3],Fe),de&&E(i,"click",Xe,!1,!0),ce&&E(i,"click",$e),ie&&E(Ae,"gesturestart",Ve),oe&&E(Ae,"gestureend",qe),Q&&E(i,p+"enter",Ke),ee&&E(i,p+"leave",Ze),te&&E(i,p+"move",je)),ke.isEnabled=!0,e&&e.type&&We(e),se&&se(ke)),ke},ke.disable=function(){ke.isEnabled&&(x.filter((function(e){return e!==ke&&C(e.target)})).length||P(Oe?Ae:i,"scroll",D),ke.isPressed&&(ke._vx.reset(),ke._vy.reset(),P(re?i:Ae,m[1],He,!0)),P(Oe?Ae:i,"scroll",Ge,fe),P(i,"wheel",Ue,fe),P(i,m[0],We,fe),P(Ae,m[2],Fe),P(Ae,m[3],Fe),P(i,"click",Xe,!0),P(i,"click",$e),P(Ae,"gesturestart",Ve),P(Ae,"gestureend",qe),P(i,p+"enter",Ke),P(i,p+"leave",Ze),P(i,p+"move",je),ke.isEnabled=ke.isPressed=ke.isDragging=!1,le&&le(ke))},ke.kill=function(){ke.disable();var e=x.indexOf(ke);e>=0&&x.splice(e,1),v===ke&&(v=0)},x.push(ke),re&&C(i)&&(v=ke),ke.enable(T)},o(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e}();F.version="3.10.4",F.create=function(e){return new F(e)},F.register=W,F.getAll=function(){return x.slice()},F.getById=function(e){return x.filter((function(t){return t.vars.id===e}))[0]},y()&&a.registerPlugin(F);
/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var V,q,G,U,j,K,Z,$,J,Q,ee,te,ne,re,ie,oe,ae,se,le,ce,ue,fe,de,pe,he,ge,ve,me,ye,be,xe,we,ke,_e=1,Se=Date.now,Te=Se(),Me=0,Ce=0,Ee=function(){return re=1},Pe=function(){return re=0},Oe=function(e){return e},Ae=function(e){return Math.round(1e5*e)/1e5||0},De=function(){return"undefined"!==typeof window},Ye=function(){return V||De()&&(V=window.gsap)&&V.registerPlugin&&V},Re=function(e){return!!~Z.indexOf(e)},Xe=function(e){return M(e,"getBoundingClientRect")||(Re(e)?function(){return on.width=G.innerWidth,on.height=G.innerHeight,on}:function(){return pt(e)})},ze=function(e,t,n){var r=n.d,i=n.d2,o=n.a;return(o=M(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?G["inner"+i]:e["client"+i])||0}},Ie=function(e,t){return!t||~k.indexOf(e)?Xe(e):function(){return on}},Be=function(e,t){var n=t.s,r=t.d2,i=t.d,o=t.a;return(n="scroll"+r)&&(o=M(e,n))?o()-Xe(e)()[i]:Re(e)?(j[n]||K[n])-(G["inner"+r]||j["client"+r]||K["client"+r]):e[n]-e["offset"+r]},Le=function(e,t){for(var n=0;n<le.length;n+=3)(!t||~t.indexOf(le[n+1]))&&e(le[n],le[n+1],le[n+2])},Ne=function(e){return"string"===typeof e},He=function(e){return"function"===typeof e},We=function(e){return"number"===typeof e},Fe=function(e){return"object"===(0,r.Z)(e)},Ve=function(e){return He(e)&&e()},qe=function(e,t){return function(){var n=Ve(e),r=Ve(t);return function(){Ve(n),Ve(r)}}},Ge=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ue=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},je=Math.abs,Ke="left",Ze="top",$e="right",Je="bottom",Qe="width",et="height",tt="Right",nt="Left",rt="Top",it="Bottom",ot="padding",at="margin",st="Width",lt="Height",ct="px",ut=function(e){return G.getComputedStyle(e)},ft=function(e){var t=ut(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"},dt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pt=function(e,t){var n=t&&"matrix(1, 0, 0, 1, 0, 0)"!==ut(e)[ie]&&V.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},ht=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},gt=function(e){var t,n=[],r=e.labels,i=e.duration();for(t in r)n.push(r[t]/i);return n},vt=function(e){return function(t){return V.utils.snap(gt(e),t)}},mt=function(e){var t=V.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort((function(e,t){return e-t}));return n?function(e,r,i){var o;if(void 0===i&&(i=.001),!r)return t(e);if(r>0){for(e-=i,o=0;o<n.length;o++)if(n[o]>=e)return n[o];return n[o-1]}o=n.length,e+=i;while(o--)if(n[o]<=e)return n[o];return n[0]}:function(n,r,i){void 0===i&&(i=.001);var o=t(n);return!r||Math.abs(o-n)<i||o-n<0===r<0?o:t(r<0?n-e:n+e)}},yt=function(e){return function(t,n){return mt(gt(e))(t,n.direction)}},bt=function(e,t,n,r){return n.split(",").forEach((function(n){return e(t,n,r)}))},xt=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},wt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},kt=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},_t={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},St={toggleActions:"play",anticipatePin:0},Tt={top:0,left:0,center:.5,bottom:1,right:1},Mt=function(e,t){if(Ne(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Tt?Tt[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ct=function(e,t,n,r,i,o,a,s){var l=i.startColor,c=i.endColor,u=i.fontSize,f=i.indent,d=i.fontWeight,p=U.createElement("div"),h=Re(n)||"fixed"===M(n,"pinType"),g=-1!==e.indexOf("scroller"),v=h?K:n,m=-1!==e.indexOf("start"),y=m?l:c,b="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((g||s)&&h?"fixed;":"absolute;"),(g||s||!h)&&(b+=(r===X?$e:Je)+":"+(o+parseFloat(f))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=m,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+r.op.d2],Et(p,0,r,m),p},Et=function(e,t,n,r){var i={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,i[n.a+"Percent"]=r?-100:0,i[n.a]=r?"1px":0,i["border"+o+st]=1,i["border"+a+st]=0,i[n.p]=t+"px",V.set(e,i)},Pt=[],Ot={},At=function(){return Se()-Me>34&&Kt()},Dt=function(){(!de||!de.isPressed||de.startX>K.clientWidth)&&(w.cache++,ye||(ye=requestAnimationFrame(Kt)),Me||Nt("scrollStart"),Me=Se())},Yt=function(){ge=G.innerWidth,he=G.innerHeight},Rt=function(){w.cache++,!ne&&!fe&&!U.fullscreenElement&&!U.webkitFullscreenElement&&(!pe||ge!==G.innerWidth||Math.abs(G.innerHeight-he)>.25*G.innerHeight)&&$.restart(!0)},Xt={},zt=[],It=[],Bt=function(e){var t,n=V.ticker.frame,r=[],i=0;if(xe!==n||_e){for(Ft();i<It.length;i+=4)t=G.matchMedia(It[i]).matches,t!==It[i+3]&&(It[i+3]=t,t?r.push(i):Ft(1,It[i])||He(It[i+2])&&It[i+2]());for(Wt(),i=0;i<r.length;i++)t=r[i],be=It[t],It[t+2]=It[t+1](e);be=0,q&&Gt(0,1),xe=n,Nt("matchMedia")}},Lt=function e(){return wt(un,"scrollEnd",e)||Gt(!0)},Nt=function(e){return Xt[e]&&Xt[e].map((function(e){return e()}))||zt},Ht=[],Wt=function(e){for(var t=0;t<Ht.length;t+=5)e&&Ht[t+4]!==e||(Ht[t].style.cssText=Ht[t+1],Ht[t].getBBox&&Ht[t].setAttribute("transform",Ht[t+2]||""),Ht[t+3].uncache=1)},Ft=function(e,t){var n;for(oe=0;oe<Pt.length;oe++)n=Pt[oe],t&&n.media!==t||(e?n.kill(1):n.revert());t&&Wt(t),t||Nt("revert")},Vt=function(){return w.cache++&&w.forEach((function(e){return"function"===typeof e&&(e.rec=0)}))},qt=0,Gt=function(e,t){if(!Me||e){we=!0;var n=Nt("refreshInit");ce&&un.sort(),t||Ft(),Pt.slice(0).forEach((function(e){return e.refresh()})),Pt.forEach((function(e){return"max"===e.vars.end&&e.setPositions(e.start,Be(e.scroller,e._dir))})),n.forEach((function(e){return e&&e.render&&e.render(-1)})),Vt(),$.pause(),qt++,we=!1,Nt("refresh")}else xt(un,"scrollEnd",Lt)},Ut=0,jt=1,Kt=function(){if(!we){un.isUpdating=!0,ke&&ke.update(0);var e=Pt.length,t=Se(),n=t-Te>=50,r=e&&Pt[0].scroll();if(jt=Ut>r?-1:1,Ut=r,n&&(Me&&!re&&t-Me>200&&(Me=0,Nt("scrollEnd")),ee=Te,Te=t),jt<0){oe=e;while(oe-- >0)Pt[oe]&&Pt[oe].update(0,n);jt=1}else for(oe=0;oe<e;oe++)Pt[oe]&&Pt[oe].update(0,n);un.isUpdating=!1}ye=0},Zt=[Ke,Ze,Je,$e,at+it,at+tt,at+rt,at+nt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$t=Zt.concat([Qe,et,"boxSizing","max"+st,"max"+lt,"position",at,ot,ot+rt,ot+tt,ot+it,ot+nt]),Jt=function(e,t,n){tn(n);var r=e._gsap;if(r.spacerIsNative)tn(r.spacerState);else if(e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}},Qt=function(e,t,n,r){if(e.parentNode!==t){var i,o=Zt.length,a=t.style,s=e.style;while(o--)i=Zt[o],a[i]=n[i];a.position="absolute"===n.position?"absolute":"relative","inline"===n.display&&(a.display="inline-block"),s[Je]=s[$e]=a.flexBasis="auto",a.overflow="visible",a.boxSizing="border-box",a[Qe]=ht(e,R)+ct,a[et]=ht(e,X)+ct,a[ot]=s[at]=s[Ze]=s[Ke]="0",tn(r),s[Qe]=s["max"+st]=n[Qe],s[et]=s["max"+lt]=n[et],s[ot]=n[ot],e.parentNode.insertBefore(t,e),t.appendChild(e)}},en=/([A-Z])/g,tn=function(e){if(e){var t,n,r=e.t.style,i=e.length,o=0;for((e.t._gsap||V.core.getCache(e.t)).uncache=1;o<i;o+=2)n=e[o+1],t=e[o],n?r[t]=n:r[t]&&r.removeProperty(t.replace(en,"-$1").toLowerCase())}},nn=function(e){for(var t=$t.length,n=e.style,r=[],i=0;i<t;i++)r.push($t[i],n[$t[i]]);return r.t=e,r},rn=function(e,t,n){for(var r,i=[],o=e.length,a=n?8:0;a<o;a+=2)r=e[a],i.push(r,r in t?t[r]:e[a+1]);return i.t=e.t,i},on={left:0,top:0},an=function(e,t,n,r,i,o,a,s,l,c,u,f,d){He(e)&&(e=e(s)),Ne(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Mt("0"+e.substr(3),n):0));var p,h,g,v=d?d.time():0;if(d&&d.seek(0),We(e))a&&Et(a,n,r,!0);else{He(t)&&(t=t(s));var m,y,b,x,w=e.split(" ");g=z(t)||K,m=pt(g)||{},m&&(m.left||m.top)||"none"!==ut(g).display||(x=g.style.display,g.style.display="block",m=pt(g),x?g.style.display=x:g.style.removeProperty("display")),y=Mt(w[0],m[r.d]),b=Mt(w[1]||"0",n),e=m[r.p]-l[r.p]-c+y+i-b,a&&Et(a,b,r,n-b<20||a._isStart&&b>20),n-=n-b}if(o){var k=e+n,_=o._isStart;p="scroll"+r.d2,Et(o,k,r,_&&k>20||!_&&(u?Math.max(K[p],j[p]):o.parentNode[p])<=k+1),u&&(l=pt(a),u&&(o.style[r.op.p]=l[r.op.p]-r.op.m-o._offset+ct))}return d&&g&&(p=pt(g),d.seek(f),h=pt(g),d._caScrollDist=p[r.p]-h[r.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)},sn=/(webkit|moz|length|cssText|inset)/i,ln=function(e,t,n,r){if(e.parentNode!==t){var i,o,a=e.style;if(t===K){for(i in e._stOrig=a.cssText,o=ut(e),o)+i||sn.test(i)||!o[i]||"string"!==typeof a[i]||"0"===i||(a[i]=o[i]);a.top=n,a.left=r}else a.cssText=e._stOrig;V.core.getCache(e).uncache=1,t.appendChild(e)}},cn=function(e,t){var n,r,i=I(e,t),o="_scroll"+t.p2,a=function t(a,s,l,c,u){var f=t.tween,d=s.onComplete,p={};return l=l||i(),u=c&&u||0,c=c||a-l,f&&f.kill(),n=Math.round(l),s[o]=a,s.modifiers=p,p[o]=function(e){return e=Ae(i()),e!==n&&e!==r&&Math.abs(e-n)>2&&Math.abs(e-r)>2?(f.kill(),t.tween=0):e=l+c*f.ratio+u*f.ratio*f.ratio,r=n,n=Ae(e)},s.onComplete=function(){t.tween=0,d&&d.call(f)},f=t.tween=V.to(e,s),f};return e[o]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},xt(e,"wheel",i.wheelHandler),a},un=function(){function e(t,n){q||e.register(V)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),Ce){t=dt(Ne(t)||We(t)||t.nodeType?{trigger:t}:t,St);var r,i,o,a,s,l,c,u,f,d,p,h,g,v,m,y,b,x,w,_,S,T,C,E,P,O,A,D,Y,B,L,N,H,W,F,q,Z,$,te=t,ie=te.onUpdate,ae=te.toggleClass,se=te.id,le=te.onToggle,fe=te.onRefresh,de=te.scrub,pe=te.trigger,he=te.pin,ge=te.pinSpacing,ve=te.invalidateOnRefresh,ye=te.anticipatePin,xe=te.onScrubComplete,Te=te.onSnapComplete,Ee=te.once,Pe=te.snap,De=te.pinReparent,Ye=te.pinSpacer,Xe=te.containerAnimation,Le=te.fastScrollEnd,Ve=te.preventOverlaps,qe=t.horizontal||t.containerAnimation&&!1!==t.horizontal?R:X,Ke=!de&&0!==de,Ze=z(t.scroller||G),$e=V.core.getCache(Ze),Je=Re(Ze),gt="fixed"===("pinType"in t?t.pinType:M(Ze,"pinType")||Je&&"fixed"),bt=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],kt=Ke&&t.toggleActions.split(" "),Tt="markers"in t?t.markers:St.markers,Et=Je?0:parseFloat(ut(Ze)["border"+qe.p2+st])||0,At=this,Yt=t.onRefreshInit&&function(){return t.onRefreshInit(At)},Xt=ze(Ze,Je,qe),zt=Ie(Ze,Je),It=0,Bt=0,Nt=I(Ze,qe);if(At.media=be,At._dir=qe,ye*=45,At.scroller=Ze,At.scroll=Xe?Xe.time.bind(Xe):Nt,a=Nt(),At.vars=t,n=n||t.animation,"refreshPriority"in t&&(ce=1,-9999===t.refreshPriority&&(ke=At)),$e.tweenScroll=$e.tweenScroll||{top:cn(Ze,X),left:cn(Ze,R)},At.tweenTo=r=$e.tweenScroll[qe.p],At.scrubDuration=function(e){L=We(e)&&e,L?B?B.duration(e):B=V.to(n,{ease:"expo",totalProgress:"+=0.001",duration:L,paused:!0,onComplete:function(){return xe&&xe(At)}}):(B&&B.progress(1).kill(),B=0)},n&&(n.vars.lazy=!1,n._initted||!1!==n.vars.immediateRender&&!1!==t.immediateRender&&n.render(0,!0,!0),At.animation=n.pause(),n.scrollTrigger=At,At.scrubDuration(de),D=0,se||(se=n.vars.id)),Pt.push(At),Pe&&(Fe(Pe)&&!Pe.push||(Pe={snapTo:Pe}),"scrollBehavior"in K.style&&V.set(Je?[K,j]:Ze,{scrollBehavior:"auto"}),o=He(Pe.snapTo)?Pe.snapTo:"labels"===Pe.snapTo?vt(n):"labelsDirectional"===Pe.snapTo?yt(n):!1!==Pe.directional?function(e,t){return mt(Pe.snapTo)(e,Se()-Bt<500?0:t.direction)}:V.utils.snap(Pe.snapTo),N=Pe.duration||{min:.1,max:2},N=Fe(N)?Q(N.min,N.max):Q(N,N),H=V.delayedCall(Pe.delay||L/2||.1,(function(){var e=Nt(),t=Se()-Bt<500,i=r.tween;if(!(t||Math.abs(At.getVelocity())<10)||i||re||It===e)At.isActive&&It!==e&&H.restart(!0);else{var a=(e-l)/g,s=n&&!Ke?n.totalProgress():a,u=t?0:(s-Y)/(Se()-ee)*1e3||0,f=V.utils.clamp(-a,1-a,je(u/2)*u/.185),d=a+(!1===Pe.inertia?0:f),p=Q(0,1,o(d,At)),h=Math.round(l+p*g),v=Pe,m=v.onStart,y=v.onInterrupt,b=v.onComplete;if(e<=c&&e>=l&&h!==e){if(i&&!i._initted&&i.data<=je(h-e))return;!1===Pe.inertia&&(f=p-a),r(h,{duration:N(je(.185*Math.max(je(d-s),je(p-s))/u/.05||0)),ease:Pe.ease||"power3",data:je(h-e),onInterrupt:function(){return H.restart(!0)&&y&&y(At)},onComplete:function(){At.update(),It=Nt(),D=Y=n&&!Ke?n.totalProgress():At.progress,Te&&Te(At),b&&b(At)}},e,f*g,h-e-f*g),m&&m(At,r.tween)}}})).pause()),se&&(Ot[se]=At),pe=At.trigger=z(pe||he),$=pe&&pe._gsap&&pe._gsap.stRevert,$&&($=$(At)),he=!0===he?pe:z(he),Ne(ae)&&(ae={targets:pe,className:ae}),he&&(!1===ge||ge===at||(ge=!(!ge&&"flex"===ut(he.parentNode).display)&&ot),At.pin=he,!1!==t.force3D&&V.set(he,{force3D:!0}),i=V.core.getCache(he),i.spacer?v=i.pinState:(Ye&&(Ye=z(Ye),Ye&&!Ye.nodeType&&(Ye=Ye.current||Ye.nativeElement),i.spacerIsNative=!!Ye,Ye&&(i.spacerState=nn(Ye))),i.spacer=b=Ye||U.createElement("div"),b.classList.add("pin-spacer"),se&&b.classList.add("pin-spacer-"+se),i.pinState=v=nn(he)),At.spacer=b=i.spacer,A=ut(he),C=A[ge+qe.os2],w=V.getProperty(he),_=V.quickSetter(he,qe.a,ct),Qt(he,b,A),y=nn(he)),Tt){h=Fe(Tt)?dt(Tt,_t):_t,d=Ct("scroller-start",se,Ze,qe,h,0),p=Ct("scroller-end",se,Ze,qe,h,0,d),x=d["offset"+qe.op.d2];var Ht=z(M(Ze,"content")||Ze);u=this.markerStart=Ct("start",se,Ht,qe,h,x,0,Xe),f=this.markerEnd=Ct("end",se,Ht,qe,h,x,0,Xe),Xe&&(Z=V.quickSetter([u,f],qe.a,ct)),gt||k.length&&!0===M(Ze,"fixedMarkers")||(ft(Je?K:Ze),V.set([d,p],{force3D:!0}),P=V.quickSetter(d,qe.a,ct),O=V.quickSetter(p,qe.a,ct))}if(Xe){var Wt=Xe.vars.onUpdate,Ft=Xe.vars.onUpdateParams;Xe.eventCallback("onUpdate",(function(){At.update(0,0,1),Wt&&Wt.apply(Ft||[])}))}At.previous=function(){return Pt[Pt.indexOf(At)-1]},At.next=function(){return Pt[Pt.indexOf(At)+1]},At.revert=function(e){var t=!1!==e||!At.enabled,r=ne;t!==At.isReverted&&(t&&(At.scroll.rec||!ne||!we||(At.scroll.rec=Nt()),F=Math.max(Nt(),At.scroll.rec||0),W=At.progress,q=n&&n.progress()),u&&[u,f,d,p].forEach((function(e){return e.style.display=t?"none":"block"})),t&&(ne=1),At.update(t),ne=r,he&&(t?Jt(he,b,v):(!De||!At.isActive)&&Qt(he,b,ut(he),E)),At.isReverted=t)},At.refresh=function(i,o){if(!ne&&At.enabled||o)if(he&&i&&Me)xt(e,"scrollEnd",Lt);else{!we&&Yt&&Yt(At),ne=1,Bt=Se(),r.tween&&(r.tween.kill(),r.tween=0),B&&B.pause(),ve&&n&&n.time(-.01,!0).invalidate(),At.isReverted||At.revert();var h,x,k,_,M,C,P,O,A,D,Y=Xt(),L=zt(),N=Xe?Xe.duration():Be(Ze,qe),G=0,U=0,j=t.end,Z=t.endTrigger||pe,$=t.start||(0!==t.start&&pe?he?"0 0":"0 100%":0),J=At.pinnedContainer=t.pinnedContainer&&z(t.pinnedContainer),Q=pe&&Math.max(0,Pt.indexOf(At))||0,ee=Q;while(ee--)C=Pt[ee],C.end||C.refresh(0,1)||(ne=1),P=C.pin,!P||P!==pe&&P!==he||C.isReverted||(D||(D=[]),D.unshift(C),C.revert()),C!==Pt[ee]&&(Q--,ee--);He($)&&($=$(At)),l=an($,pe,Y,qe,Nt(),u,d,At,L,Et,gt,N,Xe)||(he?-.001:0),He(j)&&(j=j(At)),Ne(j)&&!j.indexOf("+=")&&(~j.indexOf(" ")?j=(Ne($)?$.split(" ")[0]:"")+j:(G=Mt(j.substr(2),Y),j=Ne($)?$:l+G,Z=pe)),c=Math.max(l,an(j||(Z?"100% 0":N),Z,Y,qe,Nt()+G,f,p,At,L,Et,gt,N,Xe))||-.001,g=c-l||(l-=.01)&&.001,G=0,ee=Q;while(ee--)C=Pt[ee],P=C.pin,P&&C.start-C._pinPush<l&&!Xe&&C.end>0&&(h=C.end-C.start,P!==pe&&P!==J||We($)||(G+=h*(1-C.progress)),P===he&&(U+=h));if(l+=G,c+=G,At._pinPush=U,u&&G&&(h={},h[qe.a]="+="+G,J&&(h[qe.p]="-="+Nt()),V.set([u,f],h)),he)h=ut(he),_=qe===X,k=Nt(),S=parseFloat(w(qe.a))+U,!N&&c>1&&((Je?K:Ze).style["overflow-"+qe.a]="scroll"),Qt(he,b,h),y=nn(he),x=pt(he,!0),O=gt&&I(Ze,_?R:X)(),ge&&(E=[ge+qe.os2,g+U+ct],E.t=b,ee=ge===ot?ht(he,qe)+g+U:0,ee&&E.push(qe.d,ee+ct),tn(E),gt&&Nt(F)),gt&&(M={top:x.top+(_?k-l:O)+ct,left:x.left+(_?O:k-l)+ct,boxSizing:"border-box",position:"fixed"},M[Qe]=M["max"+st]=Math.ceil(x.width)+ct,M[et]=M["max"+lt]=Math.ceil(x.height)+ct,M[at]=M[at+rt]=M[at+tt]=M[at+it]=M[at+nt]="0",M[ot]=h[ot],M[ot+rt]=h[ot+rt],M[ot+tt]=h[ot+tt],M[ot+it]=h[ot+it],M[ot+nt]=h[ot+nt],m=rn(v,M,De)),n?(A=n._initted,ue(1),n.render(n.duration(),!0,!0),T=w(qe.a)-S+g+U,g!==T&&gt&&m.splice(m.length-2,2),n.render(0,!0,!0),A||n.invalidate(),ue(0)):T=g;else if(pe&&Nt()&&!Xe){x=pe.parentNode;while(x&&x!==K)x._pinOffset&&(l-=x._pinOffset,c-=x._pinOffset),x=x.parentNode}D&&D.forEach((function(e){return e.revert(!1)})),At.start=l,At.end=c,a=s=Nt(),Xe||(a<F&&Nt(F),At.scroll.rec=0),At.revert(!1),H&&(It=-1,At.isActive&&Nt(l+g*W),H.restart(!0)),ne=0,n&&Ke&&(n._initted||q)&&n.progress()!==q&&n.progress(q,!0).render(n.time(),!0,!0),(W!==At.progress||Xe)&&(n&&!Ke&&n.totalProgress(W,!0),At.progress=W,At.update(0,0,1)),he&&ge&&(b._pinOffset=Math.round(At.progress*T)),fe&&fe(At)}},At.getVelocity=function(){return(Nt()-s)/(Se()-ee)*1e3||0},At.endAnimation=function(){Ge(At.callbackAnimation),n&&(B?B.progress(1):n.paused()?Ke||Ge(n,At.direction<0,1):Ge(n,n.reversed()))},At.labelToScroll=function(e){return n&&n.labels&&(l||At.refresh()||l)+n.labels[e]/n.duration()*g||0},At.getTrailing=function(e){var t=Pt.indexOf(At),n=At.direction>0?Pt.slice(0,t).reverse():Pt.slice(t+1);return(Ne(e)?n.filter((function(t){return t.vars.preventOverlaps===e})):n).filter((function(e){return At.direction>0?e.end<=l:e.start>=c}))},At.update=function(e,t,i){if(!Xe||i||e){var o,u,f,p,h,v,x,w,k=At.scroll(),M=e?0:(k-l)/g,E=M<0?0:M>1?1:M||0,A=At.progress;if(t&&(s=a,a=Xe?Nt():k,Pe&&(Y=D,D=n&&!Ke?n.totalProgress():E)),ye&&!E&&he&&!ne&&!_e&&Me&&l<k+(k-s)/(Se()-ee)*ye&&(E=1e-4),E!==A&&At.enabled){if(o=At.isActive=!!E&&E<1,u=!!A&&A<1,v=o!==u,h=v||!!E!==!!A,At.direction=E>A?1:-1,At.progress=E,h&&!ne&&(f=E&&!A?0:1===E?1:1===A?2:3,Ke&&(p=!v&&"none"!==kt[f+1]&&kt[f+1]||kt[f],w=n&&("complete"===p||"reset"===p||p in n))),Ve&&(v||w)&&(w||de||!n)&&(He(Ve)?Ve(At):At.getTrailing(Ve).forEach((function(e){return e.endAnimation()}))),Ke||(!B||ne||_e?n&&n.totalProgress(E,!!ne):((Xe||ke&&ke!==At)&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",E,n._tTime/n._tDur):(B.vars.totalProgress=E,B.invalidate().restart()))),he)if(e&&ge&&(b.style[ge+qe.os2]=C),gt){if(h){if(x=!e&&E>A&&c+1>k&&k+1>=Be(Ze,qe),De)if(e||!o&&!x)ln(he,b);else{var R=pt(he,!0),z=k-l;ln(he,K,R.top+(qe===X?z:0)+ct,R.left+(qe===X?0:z)+ct)}tn(o||x?m:y),T!==g&&E<1&&o||_(S+(1!==E||x?0:T))}}else _(Ae(S+T*E));Pe&&!r.tween&&!ne&&!_e&&H.restart(!0),ae&&(v||Ee&&E&&(E<1||!me))&&J(ae.targets).forEach((function(e){return e.classList[o||Ee?"add":"remove"](ae.className)})),ie&&!Ke&&!e&&ie(At),h&&!ne?(Ke&&(w&&("complete"===p?n.pause().totalProgress(1):"reset"===p?n.restart(!0).pause():"restart"===p?n.restart(!0):n[p]()),ie&&ie(At)),!v&&me||(le&&v&&Ue(At,le),bt[f]&&Ue(At,bt[f]),Ee&&(1===E?At.kill(!1,1):bt[f]=0),v||(f=1===E?1:3,bt[f]&&Ue(At,bt[f]))),Le&&!o&&Math.abs(At.getVelocity())>(We(Le)?Le:2500)&&(Ge(At.callbackAnimation),B?B.progress(1):Ge(n,!E,1))):Ke&&ie&&!ne&&ie(At)}if(O){var I=Xe?k/Xe.duration()*(Xe._caScrollDist||0):k;P(I+(d._isFlipped?1:0)),O(I)}Z&&Z(-k/Xe.duration()*(Xe._caScrollDist||0))}},At.enable=function(t,n){At.enabled||(At.enabled=!0,xt(Ze,"resize",Rt),xt(Je?U:Ze,"scroll",Dt),Yt&&xt(e,"refreshInit",Yt),!1!==t&&(At.progress=W=0,a=s=It=Nt()),!1!==n&&At.refresh())},At.getTween=function(e){return e&&r?r.tween:B},At.setPositions=function(e,t){he&&(S+=e-l,T+=t-e-g),At.start=l=e,At.end=c=t,g=t-e,At.update()},At.disable=function(t,n){if(At.enabled&&(!1!==t&&At.revert(),At.enabled=At.isActive=!1,n||B&&B.pause(),F=0,i&&(i.uncache=1),Yt&&wt(e,"refreshInit",Yt),H&&(H.pause(),r.tween&&r.tween.kill()&&(r.tween=0)),!Je)){var o=Pt.length;while(o--)if(Pt[o].scroller===Ze&&Pt[o]!==At)return;wt(Ze,"resize",Rt),wt(Ze,"scroll",Dt)}},At.kill=function(e,r){At.disable(e,r),B&&!r&&B.kill(),se&&delete Ot[se];var o=Pt.indexOf(At);o>=0&&Pt.splice(o,1),o===oe&&jt>0&&oe--,o=0,Pt.forEach((function(e){return e.scroller===At.scroller&&(o=1)})),o||(At.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.render(-1),r||n.kill()),u&&[u,f,d,p].forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),ke===At&&(ke=0),he&&(i&&(i.uncache=1),o=0,Pt.forEach((function(e){return e.pin===he&&o++})),o||(i.spacer=0)),t.onKill&&t.onKill(At)},At.enable(!1,!1),$&&$(At),n&&n.add&&!g?V.delayedCall(.01,(function(){return l||c||At.refresh()}))&&(g=.01)&&(l=c=0):At.refresh()}else this.update=this.refresh=this.kill=Oe},e.register=function(t){return q||(V=t||Ye(),De()&&window.document&&e.enable(),q=Ce),q},e.defaults=function(e){if(e)for(var t in e)St[t]=e[t];return St},e.disable=function(e,t){Ce=0,Pt.forEach((function(n){return n[t?"kill":"disable"](e)})),wt(G,"wheel",Dt),wt(U,"scroll",Dt),clearInterval(te),wt(U,"touchcancel",Oe),wt(K,"touchstart",Oe),bt(wt,U,"pointerdown,touchstart,mousedown",Ee),bt(wt,U,"pointerup,touchend,mouseup",Pe),$.kill(),Le(wt);for(var n=0;n<w.length;n+=3)kt(wt,w[n],w[n+1]),kt(wt,w[n],w[n+2])},e.enable=function(){if(G=window,U=document,j=U.documentElement,K=U.body,V&&(J=V.utils.toArray,Q=V.utils.clamp,ue=V.core.suppressOverwrites||Oe,V.core.globals("ScrollTrigger",e),K)){Ce=1,F.register(V),e.isTouch=F.isTouch,ve=F.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xt(G,"wheel",Dt),Z=[G,U,j,K],e.matchMedia({"(orientation: portrait)":function(){return Yt(),Yt}}),xt(U,"scroll",Dt);var t,n,r=K.style,i=r.borderTopStyle;for(r.borderTopStyle="solid",t=pt(K),X.m=Math.round(t.top+X.sc())||0,R.m=Math.round(t.left+R.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),te=setInterval(At,250),V.delayedCall(.5,(function(){return _e=0})),xt(U,"touchcancel",Oe),xt(K,"touchstart",Oe),bt(xt,U,"pointerdown,touchstart,mousedown",Ee),bt(xt,U,"pointerup,touchend,mouseup",Pe),ie=V.utils.checkPrefix("transform"),$t.push(ie),q=Se(),$=V.delayedCall(.2,Gt).pause(),le=[U,"visibilitychange",function(){var e=G.innerWidth,t=G.innerHeight;U.hidden?(ae=e,se=t):ae===e&&se===t||Rt()},U,"DOMContentLoaded",Gt,G,"load",Gt,G,"resize",Rt],Le(xt),Pt.forEach((function(e){return e.enable(0,1)})),n=0;n<w.length;n+=3)kt(wt,w[n],w[n+1]),kt(wt,w[n],w[n+2])}},e.config=function(t){"limitCallbacks"in t&&(me=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(te)||(te=n)&&setInterval(At,n),"ignoreMobileResize"in t&&(pe=1===e.isTouch&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(Le(wt)||Le(xt,t.autoRefreshEvents||"none"),fe=-1===(t.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var n=z(e),r=w.indexOf(n),i=Re(n);~r&&w.splice(r,i?6:2),t&&(i?k.unshift(G,t,K,t,j,t):k.unshift(n,t))},e.matchMedia=function(e){var t,n,r,i,o;for(n in e)r=It.indexOf(n),i=e[n],be=n,"all"===n?i():(t=G.matchMedia(n),t&&(t.matches&&(o=i()),~r?(It[r+1]=qe(It[r+1],i),It[r+2]=qe(It[r+2],o)):(r=It.length,It.push(n,i,o),t.addListener?t.addListener(Bt):t.addEventListener("change",Bt)),It[r+3]=t.matches)),be=0;return It},e.clearMatchMedia=function(e){e||(It.length=0),e=It.indexOf(e),e>=0&&It.splice(e,4)},e.isInViewport=function(e,t,n){var r=(Ne(e)?z(e):e).getBoundingClientRect(),i=r[n?Qe:et]*t||0;return n?r.right-i>0&&r.left+i<G.innerWidth:r.bottom-i>0&&r.top+i<G.innerHeight},e.positionInViewport=function(e,t,n){Ne(e)&&(e=z(e));var r=e.getBoundingClientRect(),i=r[n?Qe:et],o=null==t?i/2:t in Tt?Tt[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+o)/G.innerWidth:(r.top+o)/G.innerHeight},e}();un.version="3.10.4",un.saveStyles=function(e){return e?J(e).forEach((function(e){if(e&&e.style){var t=Ht.indexOf(e);t>=0&&Ht.splice(t,5),Ht.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),V.core.getCache(e),be)}})):Ht},un.revert=function(e,t){return Ft(!e,t)},un.create=function(e,t){return new un(e,t)},un.refresh=function(e){return e?Rt():(q||un.register())&&Gt(!0)},un.update=Kt,un.clearScrollMemory=Vt,un.maxScroll=function(e,t){return Be(e,t?R:X)},un.getScrollFunc=function(e,t){return I(z(e),t?R:X)},un.getById=function(e){return Ot[e]},un.getAll=function(){return Pt.filter((function(e){return"ScrollSmoother"!==e.vars.id}))},un.isScrolling=function(){return!!Me},un.snapDirectional=mt,un.addEventListener=function(e,t){var n=Xt[e]||(Xt[e]=[]);~n.indexOf(t)||n.push(t)},un.removeEventListener=function(e,t){var n=Xt[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},un.batch=function(e,t){var n,r=[],i={},o=t.interval||.016,a=t.batchMax||1e9,s=function(e,t){var n=[],r=[],i=V.delayedCall(o,(function(){t(n,r),n=[],r=[]})).pause();return function(e){n.length||i.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&i.progress(1)}};for(n in t)i[n]="on"===n.substr(0,2)&&He(t[n])&&"onRefreshInit"!==n?s(n,t[n]):t[n];return He(a)&&(a=a(),xt(un,"refresh",(function(){return a=t.batchMax()}))),J(e).forEach((function(e){var t={};for(n in i)t[n]=i[n];t.trigger=e,r.push(un.create(t))})),r};var fn,dn=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},pn=function e(t,n){!0===n?t.style.removeProperty("touch-action"):t.style.touchAction=!0===n?"auto":n?"pan-"+n+(F.isTouch?" pinch-zoom":""):"none",t===j&&e(K,n)},hn={auto:1,scroll:1},gn=function(e){var t,n=e.event,r=e.target,i=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,a=o._gsap||V.core.getCache(o),s=Se();if(!a._isScrollT||s-a._isScrollT>2e3){while(o&&o.scrollHeight<=o.clientHeight)o=o.parentNode;a._isScroll=o&&!Re(o)&&o!==r&&(hn[(t=ut(o)).overflowY]||hn[t.overflowX]),a._isScrollT=s}(a._isScroll||"x"===i)&&(n._gsapAllow=!0)},vn=function(e,t,n,r){return F.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&gn,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&xt(U,F.eventTypes[0],yn,!1,!0)},onDisable:function(){return wt(U,F.eventTypes[0],yn,!0)}})},mn=/(input|label|select|textarea)/i,yn=function(e){var t=mn.test(e.target.tagName);(t||fn)&&(e._gsapAllow=!0,fn=t)},bn=function(e){Fe(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t,n,r,i,o,a,s,l,c=e,u=c.normalizeScrollX,f=c.momentum,d=c.allowNestedScroll,p=z(e.target)||j,h=V.core.globals().ScrollSmoother,g=ve&&(e.content&&z(e.content)||h&&h.get()&&h.get().content()),v=I(p,X),m=I(p,R),y=1,b=(F.isTouch&&G.visualViewport?G.visualViewport.scale*G.visualViewport.width:G.outerWidth)/G.innerWidth,x=0,k=He(f)?function(){return f(t)}:function(){return f||2.8},_=vn(p,e.type,!0,d),S=function(){return r=!1},T=Oe,M=Oe,C=function(){n=Be(p,X),M=Q(ve?1:0,n),u&&(T=Q(0,Be(p,R))),i=qt},E=function(){if(r){requestAnimationFrame(S);var e=Ae(t.deltaY/2),n=M(v.v-e);return g&&n!==v.v+v.offset&&(v.offset=n-v.v,g.style.transform="translateY("+-v.offset+"px)",g._gsap&&(g._gsap.y=-v.offset+"px"),v.cacheID=w.cache,Kt()),!0}g&&(g.style.transform="translateY(0px)",v.offset=v.cacheID=0,g._gsap&&(g._gsap.y="0px")),r=!0},P=function(){C(),o.isActive()&&o.vars.scrollY>n&&(v()>n?o.progress(1)&&v(n):o.resetTo("scrollY",n))};return e.ignoreCheck=function(e){return ve&&"touchmove"===e.type&&E(e)||y>1.05&&"touchstart"!==e.type||t.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){var e=y;y=Ae((G.visualViewport&&G.visualViewport.scale||1)/b),o.pause(),e!==y&&pn(p,y>1.01||!u&&"x"),r=!1,a=m(),s=v(),C(),i=qt},e.onRelease=e.onGestureStart=function(e,t){if(g&&(g.style.transform="translateY(0px)",v.offset=v.cacheID=0,g._gsap&&(g._gsap.y="0px")),t){w.cache++;var r,i,a=k();u&&(r=m(),i=r+.05*a*-e.velocityX/.227,a*=dn(m,r,i,Be(p,R)),o.vars.scrollX=T(i)),r=v(),i=r+.05*a*-e.velocityY/.227,a*=dn(v,r,i,Be(p,X)),o.vars.scrollY=M(i),o.invalidate().duration(a).play(.01),(ve&&o.vars.scrollY>=n||r>=n-1)&&V.to({},{onUpdate:P,duration:a})}else l.restart(!0)},e.onWheel=function(){o._ts&&o.pause(),Se()-x>1e3&&(i=0,x=Se())},e.onChange=function(e,t,n,r,o){qt!==i&&C(),t&&u&&m(T(r[2]===t?a+(e.startX-e.x):m()+t-r[1])),n&&v(M(o[2]===n?s+(e.startY-e.y):v()+n-o[1])),Kt()},e.onEnable=function(){pn(p,!u&&"x"),xt(G,"resize",P),_.enable()},e.onDisable=function(){pn(p,!0),wt(G,"resize",P),_.kill()},t=new F(e),t.iOS=ve,ve&&!v()&&v(1),l=t._dc,o=V.to(t,{ease:"power4",paused:!0,scrollX:u?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:l.vars.onComplete}),t};un.sort=function(e){return Pt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},un.observe=function(e){return new F(e)},un.normalizeScroll=function(e){if("undefined"===typeof e)return de;if(!0===e&&de)return de.enable();if(!1===e)return de&&de.kill();var t=e instanceof F?e:bn(e);return de&&de.target===t.target&&de.kill(),Re(t.target)&&(de=t),t},un.core={_getVelocityProp:B,_inputObserver:vn,_scrollers:w,_proxies:k,bridge:{ss:function(){Me||Nt("scrollStart"),Me=Se()},ref:function(){return ne}}},Ye()&&V.registerPlugin(un)}}]);
//# sourceMappingURL=359-legacy.cdc6dc0f.js.map