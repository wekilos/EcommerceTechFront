"use strict";(self.webpackChunksalam=self.webpackChunksalam||[]).push([[31],{5936:function(e,t,n){n(2791);t.Z=n.p+"static/media/favarite.53b7d5f838162664acf3bee751c31c54.svg"},8586:function(e,t,n){n(2791);t.Z=n.p+"static/media/user.316f9e237d6cc21bc1aa327f99070d8f.svg"},3031:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(4165),c=n(5861),i=n(1413),r=n(9439),s=n(2791),o=n(2666),l=n(8931);var d=n.p+"static/media/phone.e0b0a720c61c7e85a888118f09c7a10a.svg";var u=n.p+"static/media/arrowdown.95ded1d90d97dbb4847a9bd64986ecf6.svg";var x=n.p+"static/media/arrowdownblack.37904f03bde883fa74fa130dafe0f74e.svg",p=n(8586);var m=n.p+"static/media/compare.549d2d42472f1497b3b378afd22bb203.svg",h=n(5936);var f=n.p+"static/media/search.d8542c75fc2acc2378b830c3a3a3da88.svg";var v=n.p+"static/media/basket.8024fc56e0cc8a4a317e1b150ced60d1.svg",g=n(4100),b=(n(1625),n(184)),w=function(){var e,t,n,w,j,k,y,N,Z,E=(0,l.k6)(),C=(0,s.useState)(!1),_=(0,r.Z)(C,2),F=_[0],R=_[1],T=(0,s.useState)(!1),S=(0,r.Z)(T,2),z=S[0],M=S[1],U=(0,s.useState)(!1),L=(0,r.Z)(U,2),q=L[0],K=L[1],H=(0,s.useState)([]),D=(0,r.Z)(H,2),P=(D[0],D[1]),B=(0,l.TH)(),I=(0,s.useState)({category:null,search:B.pathname.match("/search")?null===(e=B.pathname.split("/")[B.pathname.split("/")-1])||void 0===e?void 0:e.slice(2):""}),J=(0,r.Z)(I,2),O=J[0],A=J[1],G=(0,s.useState)([]),Q=(0,r.Z)(G,2),V=Q[0],W=Q[1],X=(0,s.useContext)(o._),Y=X.dil,$=X.ChangeDil;var ee,te=(0,s.useRef)(null),ne=(0,s.useRef)(null),ae=(0,s.useRef)(null);ee=te,(0,s.useEffect)((function(){function e(e){ee.current&&!ee.current.contains(e.target)&&R(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[ee]),function(e){(0,s.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&M(!1)}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e])}(ne),function(e){(0,s.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&K(!1)}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e])}(ae),(0,s.useEffect)((function(){if(B.pathname.match("/search")){var e=B.pathname.split("/");console.log("removed array:",e);var t=e[e.length-1];console.log("removed:",t.slice(2)),A((0,i.Z)((0,i.Z)({},O),{},{search:t.slice(2)}))}else A((0,i.Z)((0,i.Z)({},O),{},{category:null,search:""}))}),[B]),(0,s.useEffect)((function(){ie(),ce()}),[]);var ce=function(){g.b.get("/api/market/all").then((function(e){var t;console.log(e.data),P(e.data),(null===(t=e.data)||void 0===t?void 0:t.length)>0&&localStorage.setItem("market",JSON.stringify(e.data[0]))})).catch((function(e){console.log(e)}))},ie=function(){g.b.get("/api/category/all").then(function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,c,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.data),e.next=3,W(t.data);case 3:if(!B.pathname.match("/search")){e.next=16;break}return e.next=6,B.pathname.split("/");case 6:return n=e.sent,e.next=9,n[n.length-2];case 9:return c=e.sent,console.log("header id",c.slice(3)),e.next=13,t.data.filter((function(e){return e.id==c.slice(3)}));case 13:return r=e.sent,e.next=16,A((0,i.Z)((0,i.Z)({},O),{},{category:B.pathname.match("/search")?r[0]:null}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))};return(0,b.jsxs)("div",{className:"w-full z-10 -top-[30px] bg-white sticky pb-2 md:pb-0  border-b-[2px] border-footerBackground",children:[(0,b.jsx)("div",{className:"bg-black w-full",children:(0,b.jsxs)("div",{className:"w-[90%] mx-auto h-[30px] flex justify-between",children:[(0,b.jsxs)("div",{className:"flex gap-2 justify-start items-center",children:[(0,b.jsx)("img",{src:d,className:"w-[16px] object-contain text-whitetext",alt:"phone"}),(0,b.jsx)("p",{className:"text-whitetext md:text-[12px] text-[10px] font-[500]",children:"+993 62 123456"})]}),(0,b.jsx)("div",{className:"hidden md:flex gap-2 justify-start items-center",children:(0,b.jsx)("p",{className:"text-whitetext text-[12px] font-[500]",children:"\xc4hli harytlartda 10% arzalady\u015f !!!"})}),(0,b.jsxs)("div",{onClick:function(){return R(!F)},ref:te,className:"flex cursor-pointer gap-[4px] justify-start items-center relative",children:[(0,b.jsx)("p",{className:"text-whitetext md:text-[12px] text-[10px] font-[500]",children:"TM"==Y?"T\xfcrkmen":"RU"==Y?"Rusiion":"English"}),(0,b.jsx)("img",{src:u,className:"md:w-[9px] w-[6px] object-contain text-whitetext",alt:"arrowdown"}),F&&(0,b.jsxs)("div",{className:"absolute rounded-[4px] shadow-lg top-[30px] -right-[60px] w-[200px] bg-white p-2 z-10",children:[(0,b.jsx)("div",{onClick:function(){return $("TM")},className:"w-full text-center ".concat("TM"==Y?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] mb-1 p-2 text-[14px] rounded-[6px]"),children:"Turkmen"}),(0,b.jsx)("div",{onClick:function(){return $("EN")},className:"w-full text-center ".concat("EN"==Y?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] mb-1 p-2 text-[14px] rounded-[6px]"),children:"English"}),(0,b.jsx)("div",{onClick:function(){return $("RU")},className:"w-full text-center ".concat("RU"==Y?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[6px]"),children:"Russion"})]})]})]})}),(0,b.jsxs)("div",{className:"w-[90%] gap-2 bg-white  mx-auto md:h-[90px] h-[60px] justify-between flex items-center",children:[(0,b.jsx)("div",{onClick:function(){return E.push({pathname:"/"})},className:"text-[25px] whitespace-nowrap cursor-pointer font-[600] text-black",children:"E-commerce"}),(0,b.jsxs)("div",{className:"w-[600px] md2:flex hidden justify-between items-center bg-[#F9F9F9] h-[40px] rounded-[6px] p-[3px]",children:[(0,b.jsxs)("div",{onClick:function(){return M(!z)},ref:ne,className:"relative whitespace-nowrap cursor-pointer text-[14px] gap-4 text-black justify-between h-[34px] rounded-[4px] px-4  bg-[#E9E9E9] flex items-center",children:[null!==O&&void 0!==O&&null!==(t=O.category)&&void 0!==t&&t.name_tm?(0,b.jsx)("div",{children:"TM"==Y?null===O||void 0===O||null===(n=O.category)||void 0===n?void 0:n.name_tm:"RU"==Y?null===O||void 0===O||null===(w=O.category)||void 0===w?void 0:w.name_ru:null===O||void 0===O||null===(j=O.category)||void 0===j?void 0:j.name_en}):(0,b.jsx)("div",{children:"Kategoriya"}),(0,b.jsx)("img",{src:x,className:"w-[10px] mr-2 z-10 text-black object-contain",alt:"arrow"}),z&&(0,b.jsx)("div",{className:"absolute rounded-[4px] shadow-md top-[45px] left-0 w-[230px] bg-white p-2 z-10",children:null===V||void 0===V?void 0:V.map((function(e,t){return(0,b.jsx)("div",{onClick:function(){return A((0,i.Z)((0,i.Z)({},O),{},{category:e}))},className:"w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]",children:"TM"==Y?null===e||void 0===e?void 0:e.name_tm:"RU"==Y?null===e||void 0===e?void 0:e.name_ru:null===e||void 0===e?void 0:e.name_en},"catfilter"+t)}))})]}),(0,b.jsx)("input",{value:O.search,onChange:function(e){return A((0,i.Z)((0,i.Z)({},O),{},{search:e.target.value}))},onKeyPress:function(e){var t,n;"Enter"==e.key&&E.push({pathname:"/search/id="+(null!==(t=O.category)&&void 0!==t&&t.id?null===(n=O.category)||void 0===n?void 0:n.id:0)+"/q="+O.search})},type:"text",className:"h-[39px] outline-none px-2 w-full bg-[#F9F9F9]"}),(0,b.jsx)("img",{onClick:function(){var e,t;return E.push({pathname:"/search/id="+(null!==(e=O.category)&&void 0!==e&&e.id?null===(t=O.category)||void 0===t?void 0:t.id:0)+"/q="+O.search})},src:f,className:"w-[24px] cursor-pointer object-contain mr-2",alt:"search"})]}),(0,b.jsxs)("div",{className:"flex md:gap-5 gap-3 itemc-center justify-between",children:[(0,b.jsxs)("div",{onClick:function(){return E.push({pathname:"/compare"})},className:"flex gap-2 cursor-pointer items-center",children:[(0,b.jsx)("img",{className:"w-[24px] object-contain",src:m,alt:"compare"}),(0,b.jsx)("h1",{className:"text-[14px] md:flex hidden font-[400] text-black",children:"De\u0148e\u015fdir"})]}),(0,b.jsxs)("div",{onClick:function(){return E.push({pathname:"/favorites"})},className:"flex gap-2 cursor-pointer items-center",children:[(0,b.jsx)("img",{className:"w-[24px] object-contain",src:h.Z,alt:"compare"}),(0,b.jsx)("h1",{className:"text-[14px] md:flex hidden font-[400] text-black",children:"Halanlarym"})]}),(0,b.jsx)("div",{onClick:function(){return E.push({pathname:"/basket"})},className:"flex gap-2 cursor-pointer items-center",children:(0,b.jsx)("img",{className:"w-[24px] object-contain",src:v,alt:"compare"})}),(0,b.jsxs)("div",{onClick:function(){return E.push({pathname:"/profile"})},className:"flex gap-2 cursor-pointer items-center",children:[(0,b.jsx)("img",{className:"w-[24px] object-contain",src:p.Z,alt:"compare"}),(0,b.jsx)("h1",{className:"text-[14px] md:flex hidden font-[400] text-black",children:"Hasap"})]})]})]}),(0,b.jsxs)("div",{className:"w-[90%] mx-auto md2:hidden flex  justify-between items-center bg-[#F9F9F9] h-[40px] rounded-[6px] p-[3px]",children:[(0,b.jsxs)("div",{onClick:function(){return K(!q)},ref:ae,className:"relative whitespace-nowrap cursor-pointer md:text-[14px] text-[10px] md:gap-4 gap-2 text-black justify-between h-[34px] rounded-[4px] md:px-4 px-2  bg-[#E9E9E9] flex items-center",children:[null!==O&&void 0!==O&&null!==(k=O.category)&&void 0!==k&&k.name_tm?(0,b.jsx)("div",{children:"TM"==Y?null===O||void 0===O||null===(y=O.category)||void 0===y?void 0:y.name_tm:"RU"==Y?null===O||void 0===O||null===(N=O.category)||void 0===N?void 0:N.name_ru:null===O||void 0===O||null===(Z=O.category)||void 0===Z?void 0:Z.name_en}):(0,b.jsx)("div",{children:"Kategoriya"}),(0,b.jsx)("img",{src:x,className:"md:w-[10px] w-[6px] mr-2 z-10 text-black object-contain",alt:"arrow"}),q&&(0,b.jsx)("div",{className:"absolute rounded-[4px] shadow-md top-[45px] left-0 w-[230px] bg-white p-2 z-10",children:null===V||void 0===V?void 0:V.map((function(e,t){return(0,b.jsx)("div",{onClick:function(){return A((0,i.Z)((0,i.Z)({},O),{},{category:e}))},className:"w-full px-4 text-left bg-white hover:bg-black text-black hover:text-white font-[600] p-2 text-[14px] rounded-[6px]",children:"TM"==Y?null===e||void 0===e?void 0:e.name_tm:"RU"==Y?null===e||void 0===e?void 0:e.name_ru:null===e||void 0===e?void 0:e.name_en},"catfilter"+t)}))})]}),(0,b.jsx)("input",{value:O.search,onChange:function(e){return A((0,i.Z)((0,i.Z)({},O),{},{search:e.target.value}))},onKeyPress:function(e){var t,n;"Enter"==e.key&&E.push({pathname:"/search/id="+(null!==(t=O.category)&&void 0!==t&&t.id?null===(n=O.category)||void 0===n?void 0:n.id:0)+"/q="+O.search})},type:"text",className:"h-[39px] outline-none px-2 w-full bg-[#F9F9F9]"}),(0,b.jsx)("img",{onClick:function(){var e,t;return E.push({pathname:"/search/id="+(null!==(e=O.category)&&void 0!==e&&e.id?null===(t=O.category)||void 0===t?void 0:t.id:0)+"/q="+O.search})},src:f,className:"w-[24px] cursor-pointer object-contain mr-2",alt:"search"})]})]})}}}]);
//# sourceMappingURL=31.d7c485ba.chunk.js.map