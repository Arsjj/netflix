"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[230],{230:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var s=t(165),o=t(861),i=t(942),r=t(413),a=t(152),c=t(791),d=t(394),u=t(689),l=t(914),h=t(184),p={"Content-Type":"application/json"};var f=function(){var e=(0,c.useState)({username:"Arsen7",password:"1234567"}),n=(0,a.Z)(e,2),t=n[0],f=n[1],b=function(e){f((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,i.Z)({},e.target.name,e.target.value))})),console.log(t)},m=(0,c.useContext)(d.V).setLoggedIn,g=localStorage.getItem("session-id"),v=(0,u.s0)(),x=(0,l.Z)("\n  https://api.themoviedb.org/3/account?api_key=210df5155329bef70be1615bd2091852&session_id=".concat(g,"\n  ")),j=(0,a.Z)(x,4)[3];function k(){return(k=(0,o.Z)((0,s.Z)().mark((function e(n){var o,i,a,c,d,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=210df5155329bef70be1615bd2091852");case 4:return o=e.sent,e.next=7,o.json();case 7:return i=e.sent,e.next=10,fetch("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=210df5155329bef70be1615bd2091852",{method:"POST",headers:p,body:JSON.stringify((0,r.Z)((0,r.Z)({},t),{},{request_token:null===i||void 0===i?void 0:i.request_token}))});case 10:return a=e.sent,e.next=13,a.json();case 13:return c=e.sent,e.next=16,fetch("https://api.themoviedb.org/3/authentication/session/new?api_key=210df5155329bef70be1615bd2091852",{method:"POST",headers:p,body:JSON.stringify({request_token:null===c||void 0===c?void 0:c.request_token})});case 16:return d=e.sent,e.next=19,d.json();case 19:u=e.sent,localStorage.setItem("session-id",null===u||void 0===u?void 0:u.session_id),v("/home"),m(!0),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(1),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[1,25]])})))).apply(this,arguments)}return(0,c.useEffect)((function(){g&&j()}),[g]),(0,h.jsx)("div",{className:"section",children:(0,h.jsxs)("div",{className:"cover",children:[(0,h.jsx)("div",{className:"logo"}),(0,h.jsx)("div",{className:"form",children:(0,h.jsxs)("form",{action:"",children:[(0,h.jsx)("h1",{children:"Sign In"}),(0,h.jsx)("input",{type:"emial",name:"username",placeholder:"Email or phone number",onChange:b}),(0,h.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:b}),(0,h.jsx)("button",{onClick:function(e){!function(e){k.apply(this,arguments)}(e)},children:"Sign In"}),(0,h.jsxs)("span",{children:["New to Netflix?"," ",(0,h.jsx)("a",{href:"https://www.themoviedb.org/signup",children:"Sign up now"})]}),(0,h.jsxs)("small",{children:["This page is protected by Google reCAPCHA to ensure you're not a bot.",(0,h.jsx)("b",{children:" Learn more"})]})]})})]})})}}}]);
//# sourceMappingURL=230.f065a73a.chunk.js.map