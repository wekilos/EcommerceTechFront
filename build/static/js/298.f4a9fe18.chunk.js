"use strict";(self.webpackChunksalam=self.webpackChunksalam||[]).push([[298],{7643:function(e,t,n){n(2791);t.Z=n.p+"static/media/checkbox.16b8eec1d706aa02fde93d09da8a3587.svg"},7594:function(e,t,n){n(2791);t.Z=n.p+"static/media/checkboxborder.590de7a6ca465f2318502f1f6b0c6dfd.svg"},9436:function(e,t,n){var l=n(2791),r=n(7087),i=n(4100),a=n(8931),s=n(2666),d=(n(1625),n(184));t.Z=function(e){var t,n,c,o,x,u,m,f,p,v,h,b=(0,a.k6)(),j=(0,l.useContext)(s._).dil,w=JSON.parse(localStorage.getItem("market"));return(0,d.jsxs)("div",{onClick:function(){var t;return b.push({pathname:"/product/"+(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id)})},className:"cursor-pointer mb-8 min-w-[165px] md:min-w-[210px] w-[165px] md:w-[210px]",children:[(0,d.jsx)("div",{className:"w-full flex items-center justify-center h-[164px] md:h-[210px] rounded-[16px] bg-footerBackground",children:(0,d.jsx)(r.LazyLoadImage,{className:"h-[85%] object-contain",src:i._+"/"+(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.ProductImgs[0])||void 0===n?void 0:n.src),alt:"product img"})}),(0,d.jsx)("p",{className:"text-[12px] md:text-[14px] text-black font-[500] my-3 md:my-4 line-clamp-2",children:"TM"==j?null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.name_tm:"RU"==j?null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.name_ru:null===e||void 0===e||null===(x=e.data)||void 0===x?void 0:x.name_en}),(0,d.jsxs)("div",{className:"w-full flex md:gap-4 gap-2 items-end",children:[(0,d.jsx)("div",{className:"text-black text-[14px] md:text-[16px] font-[700]",children:null!==e&&void 0!==e&&null!==(u=e.data)&&void 0!==u&&u.is_valyuta?((null===e||void 0===e||null===(m=e.data)||void 0===m?void 0:m.usd_price_discount)*w.valyuta).toFixed(0)+" TMT":(null===e||void 0===e||null===(f=e.data)||void 0===f?void 0:f.discount_price)+" TMT"}),(0,d.jsx)("div",{className:"text-[#9F9F9F] text-[10px] md:text-[12px] font-[700] line-through",children:null!==e&&void 0!==e&&null!==(p=e.data)&&void 0!==p&&p.is_valyuta?((null===e||void 0===e||null===(v=e.data)||void 0===v?void 0:v.usd_price)*w.valyuta).toFixed(0)+" TMT":(null===e||void 0===e||null===(h=e.data)||void 0===h?void 0:h.price)+" TMT"})]})]})}},9298:function(e,t,n){n.r(t);var l=n(1413),r=n(9439),i=n(2791),a=n(447),s=n(7295),d=n(2143),c=n(1938),o=n(7828),x=(n(1625),n(9436)),u=n(8931),m=n(7643),f=n(7594),p=n(2666),v=n(4100),h=n(184);t.default=function(e){var t=(0,u.k6)(),n=(0,i.useContext)(p._).dil,b=(0,u.UO)().id,j=(0,i.useState)([]),w=(0,r.Z)(j,2),g=w[0],N=w[1],k=(0,i.useState)([]),Z=(0,r.Z)(k,2),y=Z[0],C=Z[1],E=(0,i.useState)({}),_=(0,r.Z)(E,2),I=_[0],P=_[1],B=(0,i.useState)(!1),T=(0,r.Z)(B,2),S=T[0],M=T[1],A=(0,i.useState)(!1),z=(0,r.Z)(A,2),R=z[0],F=z[1],U=(0,i.useState)(!1),L=(0,r.Z)(U,2),G=L[0],H=L[1],O=(0,i.useRef)(null),J=(0,i.useRef)(null),q=(0,i.useState)({category:!1,brand:!0,price:!0,start:0,end:1e4}),D=(0,r.Z)(q,2),K=D[0],Q=D[1],V=(0,i.useState)({CategoryIds:[],BrandIds:[b],order:5,startPrice:0,endPrice:1e4,limit:10,page:0}),W=(0,r.Z)(V,2),X=W[0],Y=W[1],$=(0,i.useState)([]),ee=(0,r.Z)($,2),te=ee[0],ne=ee[1];(0,i.useEffect)((function(){ie(),ae()}),[]),(0,i.useEffect)((function(){re(),console.log("filter",X)}),[X]);var le,re=function(){v.b.get("/api/product/all",{params:X}).then((function(e){console.log(e.data),ne(e.data)})).catch((function(e){console.log(e)}))},ie=function(){v.b.get("/api/brand/all").then((function(e){console.log(e.data),N(e.data)})).catch((function(e){return[console.log(e)]}))},ae=function(){v.b.get("/api/category/all").then((function(e){console.log(e.data);var t=e.data.filter((function(e){return e.id==b}));t.length>0&&P(t[0]),C(e.data)})).catch((function(e){return[console.log(e)]}))},se=function(e){if((null===X||void 0===X?void 0:X.BrandIds.filter((function(t){return t==e}))).length>0){var t=null===X||void 0===X?void 0:X.BrandIds.filter((function(t){return t!=e}));Y((0,l.Z)((0,l.Z)({},X),{},{BrandIds:t}))}else{var n=null===X||void 0===X?void 0:X.BrandIds;n.push(e),Y((0,l.Z)((0,l.Z)({},X),{},{BrandIds:n}))}},de=function(e){return(null===X||void 0===X?void 0:X.BrandIds.filter((function(t){return t==e}))).length>0},ce=function(e){if((null===X||void 0===X?void 0:X.CategoryIds.filter((function(t){return t==e}))).length>0){var t=null===X||void 0===X?void 0:X.CategoryIds.filter((function(t){return t!=e}));Y((0,l.Z)((0,l.Z)({},X),{},{CategoryIds:t}))}else{var n=null===X||void 0===X?void 0:X.CategoryIds;n.push(e),Y((0,l.Z)((0,l.Z)({},X),{},{CategoryIds:n}))}},oe=function(e){return(null===X||void 0===X?void 0:X.CategoryIds.filter((function(t){return t==e}))).length>0},xe=function(){Y({CategoryIds:[b],BrandIds:[],order:5,startPrice:0,endPrice:1e4,limit:10,page:0})};return le=O,(0,i.useEffect)((function(){function e(e){le.current&&!le.current.contains(e.target)&&M(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[le]),function(e){(0,i.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&F(!1)}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e])}(J),(0,h.jsxs)("div",{className:"w-full pb-6",children:[(0,h.jsx)(o.Z,{closable:!1,onClose:function(){return H(!1)},width:350,placement:"left",open:G,children:(0,h.jsxs)("div",{className:"md2:hidden block w-[290px] min-w-[290px]",children:[(0,h.jsxs)("div",{className:"w-full  pb-4 flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[18px] font-[600] text-black ",children:"Filter:"}),(0,h.jsx)("p",{onClick:function(){return xe()},className:"text-[16px] cursor-pointer font-[400] text-black underline",children:"A\xfdyr"})]}),(0,h.jsxs)("div",{className:"w-full border-t-[1px] py-5 border-[#E2E2E2]",children:[(0,h.jsxs)("div",{onClick:function(){return Q((0,l.Z)((0,l.Z)({},K),{},{category:!K.category}))},className:"w-full cursor-pointer flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[20px] font-[600] text-black",children:"\xc4hli kategori\xfdalar"}),K.category?(0,h.jsx)(a.Z,{className:"mr-1 text-[#868686]"}):(0,h.jsx)(s.Z,{className:"mr-1 text-[#868686]"})]}),K.category&&(0,h.jsx)("div",{className:"w-full py-2",children:null===y||void 0===y?void 0:y.map((function(e,t){var l;return(0,h.jsxs)("div",{onClick:function(){return ce(e.id)},className:"w-full my-2 flex justify-between items-center",children:[(0,h.jsxs)("div",{className:"flex cursor-pointer justify-start gap-4 items-center",children:[(0,h.jsx)("img",{src:oe(e.id)?m.Z:f.Z,className:"text-black rounded-[8px]"}),(0,h.jsx)("h1",{className:"text-[16px] font-[400] text-black",children:"TM"==n?e.name_tm:"RU"==n?e.name_ru:e.name_en})]}),(0,h.jsx)("div",{className:"font-[400] text-[16px] text-[#868686]",children:null===e||void 0===e||null===(l=e.Products)||void 0===l?void 0:l.length})]},"Cats"+t)}))})]}),(0,h.jsxs)("div",{className:"w-full border-t-[1px] py-5 border-[#E2E2E2]",children:[(0,h.jsxs)("div",{onClick:function(){return Q((0,l.Z)((0,l.Z)({},K),{},{brand:!K.brand}))},className:"w-full cursor-pointer flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[20px] font-[600] text-black",children:"Brand"}),K.brand?(0,h.jsx)(a.Z,{className:"mr-1 text-[#868686]"}):(0,h.jsx)(s.Z,{className:"mr-1 text-[#868686]"})]}),K.brand&&(0,h.jsx)("div",{className:"w-full py-2",children:null===g||void 0===g?void 0:g.map((function(e,t){var l;return(0,h.jsxs)("div",{onClick:function(){return se(e.id)},className:"w-full my-2 flex justify-between items-center",children:[(0,h.jsxs)("div",{className:"flex cursor-pointer justify-start gap-4 items-center",children:[(0,h.jsx)("img",{src:de(e.id)?m.Z:f.Z,className:"text-black rounded-[8px]"}),(0,h.jsx)("h1",{className:"text-[16px] font-[400] text-black",children:"TM"==n?e.name_tm:"RU"==n?e.name_ru:e.name_en})]}),(0,h.jsx)("div",{className:"font-[400] text-[16px] text-[#868686]",children:null===e||void 0===e||null===(l=e.Products)||void 0===l?void 0:l.length})]},"Brands"+t)}))})]}),(0,h.jsxs)("div",{className:"w-full border-t-[1px] py-5 border-[#E2E2E2]",children:[(0,h.jsxs)("div",{onClick:function(){return Q((0,l.Z)((0,l.Z)({},K),{},{price:!K.price}))},className:"w-full cursor-pointer flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[20px] font-[600] text-black",children:"Baha"}),K.price?(0,h.jsx)(a.Z,{className:"mr-1 text-[#868686]"}):(0,h.jsx)(s.Z,{className:"mr-1 text-[#868686]"})]}),K.price&&(0,h.jsx)("div",{className:"w-full py-2",children:(0,h.jsxs)("div",{className:"w-full my-2 flex justify-between items-center",children:[(0,h.jsx)("input",{value:X.startPrice,onChange:function(e){Y((0,l.Z)((0,l.Z)({},X),{},{startPrice:e.target.value}))},className:"w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",type:"number"}),(0,h.jsx)(d.Z,{className:"text-[#868686]"}),(0,h.jsx)("input",{value:X.endPrice,onChange:function(e){Y((0,l.Z)((0,l.Z)({},X),{},{endPrice:e.target.value}))},className:"w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",type:"number"})]})})]}),(0,h.jsx)("button",{className:"w-full rounded-[29px] border-[1px] hover:bg-black hover:text-white  border-black h-[40px] text-center text-[16px] font-[500] text-black",children:"Sakla"})]})}),(0,h.jsxs)("div",{className:"w-full flex justify-start gap-1 md:gap-2 items-center md:my-4 my-2 md:py-4 py-2",children:[(0,h.jsx)("div",{onClick:function(){return t.push({pathname:"/"})},className:"text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]",children:"Ba\u015f sahapa"}),(0,h.jsx)(c.Z,{className:"text-[12px] md:text-[14px] font-[500] text-[#888888]"}),(0,h.jsx)("div",{onClick:function(){return t.push({pathname:"/category/id"})},className:"text-[12px] md:text-[14px] cursor-pointer font-[500] text-[#888888]",children:"TM"==n?null===I||void 0===I?void 0:I.name_tm:"RU"==n?null===I||void 0===I?void 0:I.name_ru:null===I||void 0===I?void 0:I.name_en})]}),(0,h.jsxs)("div",{className:"w-full flex flex-wrap md2:flex-nowrap justify-between md:gap-12 gap-4",children:[(0,h.jsxs)("div",{className:"md2:block hidden w-[290px] min-w-[290px]",children:[(0,h.jsxs)("div",{className:"w-full  pb-4 flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[18px] font-[600] text-black ",children:"Filter:"}),(0,h.jsx)("p",{onClick:function(){return xe()},className:"text-[16px] cursor-pointer font-[400] text-black underline",children:"A\xfdyr"})]}),(0,h.jsxs)("div",{className:"w-full border-t-[1px] py-5 border-[#E2E2E2]",children:[(0,h.jsxs)("div",{onClick:function(){return Q((0,l.Z)((0,l.Z)({},K),{},{category:!K.category}))},className:"w-full cursor-pointer flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[20px] font-[600] text-black",children:"\xc4hli kategori\xfdalar"}),K.category?(0,h.jsx)(a.Z,{className:"mr-1 text-[#868686]"}):(0,h.jsx)(s.Z,{className:"mr-1 text-[#868686]"})]}),K.category&&(0,h.jsx)("div",{className:"w-full py-2",children:null===y||void 0===y?void 0:y.map((function(e,t){var l;return(0,h.jsxs)("div",{onClick:function(){return ce(e.id)},className:"w-full my-2 flex justify-between items-center",children:[(0,h.jsxs)("div",{className:"flex cursor-pointer justify-start gap-4 items-center",children:[(0,h.jsx)("img",{src:oe(e.id)?m.Z:f.Z,className:"text-black rounded-[8px]"}),(0,h.jsx)("h1",{className:"text-[16px] font-[400] text-black",children:"TM"==n?e.name_tm:"RU"==n?e.name_ru:e.name_en})]}),(0,h.jsx)("div",{className:"font-[400] text-[16px] text-[#868686]",children:null===e||void 0===e||null===(l=e.Products)||void 0===l?void 0:l.length})]},"Cats"+t)}))})]}),(0,h.jsxs)("div",{className:"w-full border-t-[1px] py-5 border-[#E2E2E2]",children:[(0,h.jsxs)("div",{onClick:function(){return Q((0,l.Z)((0,l.Z)({},K),{},{brand:!K.brand}))},className:"w-full cursor-pointer flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[20px] font-[600] text-black",children:"Brand"}),K.brand?(0,h.jsx)(a.Z,{className:"mr-1 text-[#868686]"}):(0,h.jsx)(s.Z,{className:"mr-1 text-[#868686]"})]}),K.brand&&(0,h.jsx)("div",{className:"w-full py-2",children:null===g||void 0===g?void 0:g.map((function(e,t){var l;return(0,h.jsxs)("div",{onClick:function(){return se(e.id)},className:"w-full my-2 flex justify-between items-center",children:[(0,h.jsxs)("div",{className:"flex cursor-pointer justify-start gap-4 items-center",children:[(0,h.jsx)("img",{src:de(e.id)?m.Z:f.Z,className:"text-black rounded-[8px]"}),(0,h.jsx)("h1",{className:"text-[16px] font-[400] text-black",children:"TM"==n?e.name_tm:"RU"==n?e.name_ru:e.name_en})]}),(0,h.jsx)("div",{className:"font-[400] text-[16px] text-[#868686]",children:null===e||void 0===e||null===(l=e.Products)||void 0===l?void 0:l.length})]},"Brands"+t)}))})]}),(0,h.jsxs)("div",{className:"w-full border-t-[1px] py-5 border-[#E2E2E2]",children:[(0,h.jsxs)("div",{onClick:function(){return Q((0,l.Z)((0,l.Z)({},K),{},{price:!K.price}))},className:"w-full cursor-pointer flex justify-between items-center",children:[(0,h.jsx)("h1",{className:"text-[20px] font-[600] text-black",children:"Baha"}),K.price?(0,h.jsx)(a.Z,{className:"mr-1 text-[#868686]"}):(0,h.jsx)(s.Z,{className:"mr-1 text-[#868686]"})]}),K.price&&(0,h.jsx)("div",{className:"w-full py-2",children:(0,h.jsxs)("div",{className:"w-full my-2 flex justify-between items-center",children:[(0,h.jsx)("input",{value:X.startPrice,onChange:function(e){Y((0,l.Z)((0,l.Z)({},X),{},{startPrice:e.target.value}))},className:"w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",type:"number"}),(0,h.jsx)(d.Z,{className:"text-[#868686]"}),(0,h.jsx)("input",{value:X.endPrice,onChange:function(e){Y((0,l.Z)((0,l.Z)({},X),{},{endPrice:e.target.value}))},className:"w-[131px] text-center text-[16px] font-[500] outline-none h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",type:"number"})]})})]}),(0,h.jsx)("button",{className:"w-full rounded-[29px] border-[1px] hover:bg-black hover:text-white  border-black h-[40px] text-center text-[16px] font-[500] text-black",children:"Sakla"})]}),(0,h.jsxs)("div",{className:"flex md2:hidden my-2 w-full justify-between",children:[(0,h.jsx)("div",{onClick:function(){return H(!0)},className:"flex gap-3 cursor-pointer justify-center items-center text-[12px] md:text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",children:"Filter"}),(0,h.jsxs)("div",{onClick:function(){return F(!R)},ref:J,className:"md2:hidden flex relative  gap-3 cursor-pointer justify-center items-center text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",children:["Hemmesini g\xf6rkez",(0,h.jsx)(s.Z,{}),R&&(0,h.jsxs)("div",{className:"absolute rounded-[14px] shadow-lg top-[40px] left-0 w-[230px] bg-white p-2 z-10",children:[(0,h.jsx)("div",{id:"mobile3",onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:3}))},className:"w-full px-4 text-left  ".concat(3==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"A-Z"}),(0,h.jsx)("div",{id:"mobile4",onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:4}))},className:"w-full px-4 text-left  ".concat(4==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"Z-A"}),(0,h.jsx)("div",{id:"mobile2",onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:2}))},className:"w-full px-4 text-left  ".concat(2==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"Gymmatdan-Arzana"}),(0,h.jsx)("div",{id:"mobile1",onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:1}))},className:"w-full px-4 text-left  ".concat(1==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"Arzandan-Gymmada"}),(0,h.jsx)("div",{id:"mobile5",onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:5}))},className:"w-full px-4 text-left  ".concat(5==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"H\xf6d\xfcrlen\xfd\xe4n tertipde"})]})]})]}),(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsxs)("div",{className:"w-full flex justify-between",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"text-[20px] md:text-[25px] font-[700] text-black",children:"TM"==n?null===I||void 0===I?void 0:I.name_tm:"RU"==n?null===I||void 0===I?void 0:I.name_ru:null===I||void 0===I?void 0:I.name_en}),(0,h.jsxs)("p",{className:"text-[14px] md:text-[16px] font-[400]",children:[null===te||void 0===te?void 0:te.length," haryt"]})]}),(0,h.jsxs)("div",{onClick:function(){return M(!S)},ref:O,className:"md2:flex relative hidden gap-3 cursor-pointer justify-center items-center text-[14px] font-[400] text-black w-[200px] h-[40px] rounded-[29px] border-[1px] border-[#E2E2E2]",children:["Hemmesini g\xf6rkez",(0,h.jsx)(s.Z,{}),S&&(0,h.jsxs)("div",{className:"absolute rounded-[14px] shadow-lg top-[40px] left-0 w-[230px] bg-white p-2 z-10",children:[(0,h.jsx)("div",{onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:3}))},className:"w-full px-4 text-left  ".concat(3==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"A-Z"}),(0,h.jsx)("div",{onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:4}))},className:"w-full px-4 text-left  ".concat(4==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"Z-A"}),(0,h.jsx)("div",{onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:2}))},className:"w-full px-4 text-left  ".concat(2==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"Gymmatdan-Arzana"}),(0,h.jsx)("div",{onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:1}))},className:"w-full px-4 text-left  ".concat(1==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"Arzandan-Gymmada"}),(0,h.jsx)("div",{onClick:function(){return Y((0,l.Z)((0,l.Z)({},X),{},{order:5}))},className:"w-full px-4 text-left  ".concat(5==(null===X||void 0===X?void 0:X.order)?"bg-black text-white ":"bg-white text-black "," hover:bg-black  hover:text-white font-[600] p-2 text-[14px] rounded-[16px]"),children:"H\xf6d\xfcrlen\xfd\xe4n tertipde"})]})]})]}),(0,h.jsx)("div",{className:"w-full md:py-8 py-4 flex flex-wrap justify-start gap-10",children:null===te||void 0===te?void 0:te.map((function(e){return(0,h.jsx)(x.Z,{data:e})}))})]})]})]})}}}]);
//# sourceMappingURL=298.f4a9fe18.chunk.js.map