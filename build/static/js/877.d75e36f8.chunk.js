"use strict";(self.webpackChunksalam=self.webpackChunksalam||[]).push([[877],{2877:function(t,e,a){a.r(e);var s=a(9439),n=a(2791),l=a(1938),r=(a(1625),a(9436),a(8931)),c=(a(7643),a(7594),a(4735),a(1689)),i=a(4100),x=a(2666),o=a(184);e.default=function(t){var e=(0,r.k6)(),a=((0,n.useContext)(x._).dil,(0,n.useState)([])),d=(0,s.Z)(a,2),u=d[0],p=d[1],f=(0,n.useState)({category:!0,brand:!1,price:!0,start:0,end:1e4}),m=(0,s.Z)(f,2),h=(m[0],m[1],JSON.parse(localStorage.getItem("userData")));(0,n.useEffect)((function(){v()}),[]);var v=function(){i.b.get("/api/favorite/all",{params:{UserId:h.id}}).then((function(t){console.log("favpro:",t.data),p(t.data)})).catch((function(t){console.log(t)}))};return(0,o.jsxs)("div",{className:"w-full pb-8",children:[(0,o.jsxs)("div",{className:"w-full flex justify-start gap-2 items-center md:my-4 my-2 md:py-4 py-2",children:[(0,o.jsx)("div",{onClick:function(){return e.push({pathname:"/"})},className:"text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]",children:"Ba\u015f sahapa"}),(0,o.jsx)(l.Z,{className:"text-[12px] md:text-[14px] font-[500] text-[#888888]"}),(0,o.jsx)("div",{onClick:function(){return e.push({pathname:"/favorites"})},className:"text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]",children:"Halanlarym"})]}),(0,o.jsx)("div",{className:"w-full mb-4 pb-4 flex justify-between",children:(0,o.jsxs)("div",{className:"flex flex-start items-end gap-2",children:[(0,o.jsx)("h1",{className:"text-[20px] md:text-[25px] font-[700] text-black",children:"Halanlarym"}),(0,o.jsx)("p",{className:"text-[14px] font-[400]",children:"(2)"})]})}),(0,o.jsx)("div",{className:"flex flex-wrap gap-8 justify-start mb-8 pb-8 ",children:null===u||void 0===u?void 0:u.map((function(t){return(0,o.jsx)(c.Z,{data:null===t||void 0===t?void 0:t.Product})}))})]})}}}]);
//# sourceMappingURL=877.d75e36f8.chunk.js.map