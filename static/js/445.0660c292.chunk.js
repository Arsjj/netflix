"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[445],{5:function(e,i,a){a.d(i,{Z:function(){return t}});var n=a(184);var t=function(e){for(var i=e.page,a=e.toPage,t=e.pages,s=[],c=1;c<t&&(s.push(c),!(c>9));c++);return(0,n.jsx)("div",{className:"buttons",children:s.map((function(e){return(0,n.jsx)("button",{id:e,className:"btn"+(e===i?"current":""),onClick:function(){a(e)},children:e},e)}))})}},445:function(e,i,a){a.r(i),a.d(i,{default:function(){return h}});var n=a(152),t=a(791),s=a(689),c=a(674),o=a(5),l=a(915),d=a(914),r=a(372),u=a(183),v=a(184);var h=function(){var e,i=(0,s.UO)(),a=i.genre,h=i.id,m=i.page,f=(0,s.s0)(),p=(0,r.Z)("movie"),g=p?"/discover/movie?".concat(u.$h,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(m,"&with_genres=").concat(h,"&with_watch_monetization_types=flatrate"):"/discover/tv?".concat(u.$h,"&language=en-US&sort_by=popularity.desc&page=").concat(m,"&timezone=America%2FNew_York&with_genres=").concat(h,"&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0"),x=(0,d.Z)(g),_=(0,n.Z)(x,4),j=_[0],N=_[3];return(0,t.useEffect)((function(){N()}),[m]),(0,v.jsxs)("div",{className:"mediaByGenre",children:[(0,v.jsx)("div",{className:"mediaGenre",children:(0,v.jsx)("h3",{children:(e=a,e[0].toUpperCase()+e.slice(1))})}),j?(0,v.jsxs)("div",{className:"movieList",children:[(0,v.jsx)(c.Z,{data:j}),(0,v.jsx)(o.Z,{page:null===j||void 0===j?void 0:j.page,toPage:function(e){f(p?"/movies/".concat(a,"/").concat(h,"/").concat(e):"/series/".concat(a,"/").concat(h,"/").concat(e))},pages:null===j||void 0===j?void 0:j.total_pages})]}):(0,v.jsx)(l.Z,{})]})}},674:function(e,i,a){a.d(i,{Z:function(){return l}});var n=a(689),t=a(372),s=a(183),c=a(184),o=function(e){var i=e.data,a=(0,n.s0)(),o=(0,t.Z)("movie");return(0,c.jsxs)("li",{className:"mediaLi",id:i.id,children:[(0,c.jsx)("div",{className:"imgDiv",children:(0,c.jsx)("img",{className:"img",width:"245",height:"140",src:null!==i&&void 0!==i&&i.backdrop_path?s.Xo+(null===i||void 0===i?void 0:i.backdrop_path):s.wg,alt:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name),id:i.id,onClick:function(){a(o?"/movies/info/".concat(i.id):"/series/info/".concat(i.id))}})}),(0,c.jsx)("div",{className:"hovered",children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("span",{children:null!==i&&void 0!==i&&i.title?null===i||void 0===i?void 0:i.title.slice(0,15):i.name.slice(0,15)}),(0,c.jsx)("span",{className:"vote",children:i.vote_average})]}),(0,c.jsx)("i",{className:"bx bx-add-to-queue"})]})})]})};var l=function(e){var i,a=e.data;return(0,c.jsx)("ul",{className:"mediaUl",children:null===a||void 0===a||null===(i=a.results)||void 0===i?void 0:i.map((function(e){return(0,c.jsx)(o,{data:e,id:e.id},e.id)}))})}}}]);
//# sourceMappingURL=445.0660c292.chunk.js.map