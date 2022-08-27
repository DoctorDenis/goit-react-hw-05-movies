"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[886],{9956:function(n,e,t){t.d(e,{F:function(){return c},h:function(){return u}});var r,i,o=t(168),l=t(6031),a=t(501),u=l.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  & li:nth-child(2n) {\n    background-color: #b7b4b4;\n  }\n"]))),c=(0,l.ZP)(a.rU)(i||(i=(0,o.Z)(["\n  background-color: skyblue;\n"])))},7978:function(n,e,t){t.d(e,{u:function(){return u}});var r,i=t(6824),o=t(168),l=t(6031).ZP.div(r||(r=(0,o.Z)(["\n  margin: 1rem;\n  text-decoration: none;\n  word-wrap: break-word;\n  width: fit-content;\n\n  display: flex;\n  align-items: center;\n\n  & img {\n    display: inline;\n    width: 100px;\n    height: auto;\n    margin-right: 2rem;\n  }\n"]))),a=t(184);function u(n){var e=n.movie,t=e.poster_path,r=e.title,o=e.release_date;return(0,a.jsxs)(l,{children:[(0,a.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):i,alt:"Poster of ".concat(r," movie")}),(0,a.jsxs)("h3",{children:[r," (",null===o||void 0===o?void 0:o.split("-")[0],")"]})]})}},4886:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,o,l,a=t(5861),u=t(885),c=t(7757),s=t.n(c),d=t(2787),f=t(2791),p=t(501),h=t(7978),m=t(9956),g=t(6871),b=t(168),x=t(6031),v=x.ZP.form(r||(r=(0,b.Z)(["\n  background-color: white;\n  margin: 1rem auto;\n  display: flex;\n\n  border: 1px solid black;\n  width: fit-content;\n  font-size: 1rem;\n"]))),y=x.ZP.input(i||(i=(0,b.Z)(["\n  padding: 10px 20px;\n  font-size: 1rem;\n  outline: none;\n  border: none;\n"]))),w=x.ZP.button(o||(o=(0,b.Z)(["\n  border-radius: 50%;\n  border: none;\n  background-color: inherit;\n"]))),j={width:25,height:25,fill:"grey",cursor:"pointer"},Z=["title","titleId"];function k(){return k=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},k.apply(this,arguments)}function C(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function O(n,e){var t=n.title,r=n.titleId,i=C(n,Z);return f.createElement("svg",k({fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:e,"aria-labelledby":r},i),t?f.createElement("title",{id:r},t):null,l||(l=f.createElement("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})))}var P=f.forwardRef(O),_=(t.p,t(184));function q(){var n=(0,f.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,p.lr)(),o=(0,u.Z)(i,2),l=o[0],c=o[1],b=(0,g.TH)(),x=l.get("query");(0,f.useEffect)((function(){x&&(0,d.V)("/search/movie",{query:x}).then(function(){var n=(0,a.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,e.data.results;case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[x]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(v,{onSubmit:function(n){n.preventDefault(),c({query:n.target.elements.query.value})},children:[(0,_.jsx)(y,{type:"text",name:"query",id:"query"}),(0,_.jsx)(w,{type:"submit",children:(0,_.jsx)(P,{style:j})})]}),(0,_.jsx)(m.h,{children:t.map((function(n){return(0,_.jsx)("li",{children:(0,_.jsx)(p.rU,{to:"".concat(n.id),state:{from:b},children:(0,_.jsx)(h.u,{movie:n})})},n.id)}))})]})}}}]);
//# sourceMappingURL=886.99de8381.chunk.js.map