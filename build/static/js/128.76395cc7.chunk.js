"use strict";(self.webpackChunksalam=self.webpackChunksalam||[]).push([[128],{7128:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(4165),o=n(5861),i=n(9439),d=n(2791),r=n(1938),a=n(2143),s=n(9286),c=n(6864);var u=n.p+"static/media/save.24d4905b214062acc30328f1ae59fc23.svg";n(1625);var x=n.p+"static/media/check.1056685040991177bf96b2c0e18ac460.svg";var v=n.p+"static/media/basketwhite.e7ab8c15f7b1488b8f8b74d54f27f7eb.svg",m=n(1689),p=n(8931),f=n(4100),h=n(2666),w=n(7027),k=n(184),j=function(e){var t,n=(0,d.useState)({}),r=(0,i.Z)(n,2),c=r[0],u=r[1],x=(0,d.useContext)(h._),v=x.dil,m=x.addPro,p=x.countPro,j=x.incPro,g=x.decPro,b=JSON.parse(localStorage.getItem("market")),y=(0,d.useState)(0),N=(0,i.Z)(y,2),P=N[0],Z=N[1];(0,d.useEffect)((function(){_()}),[e]);var _=function(){f.b.get("/api/compare/allByPro",{params:{ProductId:null===e||void 0===e?void 0:e.ProductId}}).then((function(e){u(e.data.length>0&&e.data[0]),console.log("compare",e.data)})).catch((function(e){console.log(e)}))},C=function(){var t=(0,o.Z)((0,l.Z)().mark((function t(n){return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(null===e||void 0===e?void 0:e.ProductId);case 2:if(t.t0=t.sent,!(t.t0>0)){t.next=22;break}return t.t1=null===n||void 0===n?void 0:n.stock,t.next=7,p(null===e||void 0===e?void 0:e.ProductId);case 7:if(t.t2=t.sent,!(t.t1>t.t2)){t.next=19;break}return t.next=11,m(n);case 11:return w.ZP.success("Sebede gosyldy"),t.t3=Z,t.next=15,p(null===e||void 0===e?void 0:e.ProductId);case 15:t.t4=t.sent,(0,t.t3)(t.t4),t.next=20;break;case 19:w.ZP.warning("Stockda \xfdok!");case 20:t.next=34;break;case 22:if(!((null===n||void 0===n?void 0:n.stock)>0)){t.next=33;break}return t.next=25,m(n);case 25:return w.ZP.success("Sebede gosyldy"),t.t5=Z,t.next=29,p(null===e||void 0===e?void 0:e.ProductId);case 29:t.t6=t.sent,(0,t.t5)(t.t6),t.next=34;break;case 33:w.ZP.warning("Stockda \xfdok!");case 34:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)("h1",{className:"w-full md:my-[70px] my-[35px] text-[20px] md:text-[40px] font-[700] text-black text-center",children:"TM"==v?null===c||void 0===c?void 0:c.name_tm:"RU"==v?null===c||void 0===c?void 0:c.name_ru:null===c||void 0===c?void 0:c.name_en}),(0,k.jsx)("div",{className:"w-full flex justify-center md:gap-5 gap-3",children:null===c||void 0===c||null===(t=c.ComparePros)||void 0===t?void 0:t.map((function(e,t){var n,i,d,r,c,u,x,m,h,y,N,_,S,M;return(0,k.jsxs)("div",{className:"w-[300px] ".concat(2==t?"md:block hidden":""),children:[(0,k.jsx)("div",{className:"w-[150px] md:w-[300px] rounded-[6px] h-[150px] flex justify-center items-center md:h-[300px] bg-[#F9F9F9]",children:(0,k.jsx)("img",{className:"h-[80%] object-contain",src:f._+"/"+((null===e||void 0===e||null===(n=e.Product)||void 0===n?void 0:n.ProductImgs.length)>0&&(null===e||void 0===e||null===(i=e.Product)||void 0===i?void 0:i.ProductImgs[0].src)),alt:""})}),(0,k.jsx)("h1",{className:"w-full mt-2 md:mt-4 line-clamp-2 text-left text-[12px] md:text-[18px] font-[600] text-black",children:"TM"==v?null===e||void 0===e||null===(d=e.Product)||void 0===d?void 0:d.name_tm:"RU"==v?null===e||void 0===e||null===(r=e.Product)||void 0===r?void 0:r.name_ru:null===e||void 0===e||null===(c=e.Product)||void 0===c?void 0:c.name_en}),(0,k.jsxs)("h1",{className:"w-full my-2 md:my-6 text-left md:text-center text-[12px] md:text-[16px] font-[700] text-black",children:[null!==e&&void 0!==e&&null!==(u=e.Product)&&void 0!==u&&u.is_discount?null!==e&&void 0!==e&&null!==(x=e.Product)&&void 0!==x&&x.is_valyuta?((null===b||void 0===b?void 0:b.valyuta)*(null===e||void 0===e||null===(m=e.Product)||void 0===m?void 0:m.usd_price_discount)).toFixed(0):null===e||void 0===e||null===(h=e.Product)||void 0===h?void 0:h.discount_price:null!==e&&void 0!==e&&null!==(y=e.Product)&&void 0!==y&&y.is_valyuta?((null===b||void 0===b?void 0:b.valyuta)*(null===e||void 0===e||null===(N=e.Product)||void 0===N?void 0:N.usd_price)).toFixed(0):null===e||void 0===e||null===(_=e.Product)||void 0===_?void 0:_.price," ","TMT"]}),0==P?(0,k.jsxs)("button",{onClick:function(){C(e.Product)},className:"flex md:mx-auto px-3 md:px-6 h-[30px] md:h-[50px] bg-black text-white  text-[10px] md:text-[16px] font-[500] gap-2 md:gap-3 justify-center items-center rounded-[45px]",children:[(0,k.jsxs)("svg",{className:"md:w-[24px] w-[15px] md:h-[24px] h-[15px]",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,k.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5 17.9927C9.672 17.9927 9 18.6647 9 19.4927C9 20.3207 9.672 20.9927 10.5 20.9927C11.328 20.9927 12 20.3207 12 19.4927C12 18.6647 11.328 17.9927 10.5 17.9927Z",fill:"white"}),(0,k.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.5 17.9927C16.672 17.9927 16 18.6647 16 19.4927C16 20.3207 16.672 20.9927 17.5 20.9927C18.328 20.9927 19 20.3207 19 19.4927C19 18.6647 18.328 17.9927 17.5 17.9927Z",fill:"white"}),(0,k.jsx)("path",{d:"M3 5H5.331C6.297 5 7.126 5.691 7.299 6.642L8.701 14.358C8.874 15.309 9.703 16 10.669 16H17.438C18.356 16 19.156 15.375 19.379 14.485L21 8",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,k.jsx)("path",{d:"M17 7.99268L14 10.9927L11 7.99268",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,k.jsx)("path",{d:"M14 10.9927V4.99268",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),"Sebede go\u015f"]}):(0,k.jsxs)("div",{className:"flex md:mx-auto w-fit md:gap-6 gap-3 h-[50px] text-[14px] md:text-[22px] justify-center items-center",children:[(0,k.jsx)("div",{onClick:(0,o.Z)((0,l.Z)().mark((function t(){var n,o,i;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(null===e||void 0===e||null===(n=e.Product)||void 0===n?void 0:n.id);case 2:if(t.t0=t.sent,!(t.t0>1)){t.next=12;break}return g(null===e||void 0===e||null===(o=e.Product)||void 0===o?void 0:o.id),t.t1=Z,t.next=8,p(null===e||void 0===e||null===(i=e.Product)||void 0===i?void 0:i.id);case 8:t.t2=t.sent,(0,t.t1)(t.t2),t.next=13;break;case 12:w.ZP.warning("Sebetden A\xfdyr!");case 13:case"end":return t.stop()}}),t)}))),className:"bg-black cursor-pointer text-white h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-[100%] flex justify-center items-center text-[14px] md:text-[22px]",children:(0,k.jsx)(a.Z,{})}),P,(0,k.jsx)("div",{onClick:(0,o.Z)((0,l.Z)().mark((function t(){var n,o,i,d;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=null===e||void 0===e||null===(n=e.Product)||void 0===n?void 0:n.stock,t.next=3,p(null===e||void 0===e||null===(o=e.Product)||void 0===o?void 0:o.id);case 3:if(t.t1=t.sent,!(t.t0>t.t1)){t.next=13;break}return j(null===e||void 0===e||null===(i=e.Product)||void 0===i?void 0:i.id),t.t2=Z,t.next=9,p(null===e||void 0===e||null===(d=e.Product)||void 0===d?void 0:d.id);case 9:t.t3=t.sent,(0,t.t2)(t.t3),t.next=14;break;case 13:w.ZP.warning("Stockda \xfdok!");case 14:case"end":return t.stop()}}),t)}))),className:"bg-black cursor-pointer text-white h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-[100%] flex justify-center items-center text-[14px] md:text-[22px]",children:(0,k.jsx)(s.Z,{})})]}),(0,k.jsx)("div",{className:'w-full"',children:null===e||void 0===e||null===(S=e.Product)||void 0===S||null===(M=S.ProductParametrs)||void 0===M?void 0:M.map((function(e,t){var n;return console.log("element",e),(0,k.jsxs)("div",{className:"w-full",children:[(0,k.jsx)("div",{className:"w-full flex flex-wrap py-8",children:null===e||void 0===e||null===(n=e.ProductParametrItems)||void 0===n?void 0:n.map((function(e,t){return console.log("itm",e),(0,k.jsxs)("div",{className:"w-full my-3",children:[(0,k.jsx)("h1",{className:"text-[12px] w-full md:text-center md:text-[18px] font-[600] text-black",children:null===e||void 0===e?void 0:e.name_}),(0,k.jsx)("p",{className:"text-[12px] w-full md:text-center md:text-[18px] font-[500] text-[#868686]",children:null===e||void 0===e?void 0:e.value})]},"paramItem"+t)}))}),(0,k.jsx)("hr",{className:"bg-footerBackground text-footerBackground text-[1px]"})]},"parametrs"+t)}))})]},"comproid"+t)}))})]})},g=function(){var e,t,n,g,b,y,N,P,Z=(0,p.k6)(),_=(0,p.UO)().id,C=(0,d.useContext)(h._),S=C.dil,M=C.addPro,I=C.countPro,B=C.incPro,T=C.decPro,F=(0,d.useState)(0),U=(0,i.Z)(F,2),R=U[0],D=U[1],O=(0,d.useState)({}),H=(0,i.Z)(O,2),L=H[0],A=H[1],E=(0,d.useState)([]),J=(0,i.Z)(E,2),V=J[0],z=J[1],G=(0,d.useState)(),q=(0,i.Z)(G,2),K=q[0],Q=q[1],W=(0,d.useRef)(null),X=JSON.parse(localStorage.getItem("market"));(0,d.useEffect)((function(){Y()}),[_]);var Y=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.b.get("/api/product/"+_).then((function(e){var t,n,l;console.log(e.data),(null===(t=e.data)||void 0===t?void 0:t.ProductImgs.length)>0&&Q(null===(n=e.data)||void 0===n?void 0:n.ProductImgs[0]),$(null===(l=e.data)||void 0===l?void 0:l.CategoryId),A(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.b.get("/api/product/all",{params:{CategoryId:t}}).then((function(e){console.log(e.data),z(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==(t=JSON.parse(localStorage.getItem("userData")))&&void 0!==t&&t.id?f.b.post("/api/favorite/create",{UserId:null===t||void 0===t?void 0:t.id,ProductId:_}).then((function(e){console.log(e.data),w.ZP.success("Halanlaryma go\u015fuldy!")})).catch((function(e){console.log(e)})):w.ZP.warning("Ulgama girmeli!");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(_);case 2:if(e.t0=e.sent,!(e.t0>0)){e.next=22;break}return e.t1=null===L||void 0===L?void 0:L.stock,e.next=7,I(_);case 7:if(e.t2=e.sent,!(e.t1>e.t2)){e.next=19;break}return e.next=11,M(t);case 11:return w.ZP.success("Sebede gosyldy"),e.t3=D,e.next=15,I(_);case 15:e.t4=e.sent,(0,e.t3)(e.t4),e.next=20;break;case 19:w.ZP.warning("Stockda \xfdok!");case 20:e.next=34;break;case 22:if(!((null===L||void 0===L?void 0:L.stock)>0)){e.next=33;break}return e.next=25,M(t);case 25:return w.ZP.success("Sebede gosyldy"),e.t5=D,e.next=29,I(_);case 29:e.t6=e.sent,(0,e.t5)(e.t6),e.next=34;break;case 33:w.ZP.warning("Stockda \xfdok!");case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:"w-full pb-6",children:[(0,k.jsxs)("div",{className:"w-full flex justify-start gap-[2px] md:gap-2 items-center md:my-4 my-2 md:py-4 py-2",children:[(0,k.jsx)("div",{onClick:function(){return Z.push({pathname:"/"})},className:"text-[12px] md:text-[14px] whitespace-nowrap cursor-pointer font-[500] text-[#888888]",children:"Ba\u015f sahapa"}),(0,k.jsx)(r.Z,{className:"text-[12px] md:text-[14px] font-[500] text-[#888888]"}),(0,k.jsx)("div",{onClick:function(){return Z.push({pathname:"/category/id"})},className:"text-[12px] md:text-[14px] whitespace-nowrap cursor-pointer font-[500] text-[#888888]",children:"TM"==S?null===L||void 0===L||null===(e=L.Category)||void 0===e?void 0:e.name_tm:"RU"==S?null===L||void 0===L||null===(t=L.Category)||void 0===t?void 0:t.name_ru:null===L||void 0===L||null===(n=L.Category)||void 0===n?void 0:n.name_en}),(0,k.jsx)(r.Z,{className:"text-[12px] md:text-[14px] font-[500] text-[#888888]"}),(0,k.jsx)("div",{className:"text-[12px] md:text-[14px] whitespace-nowrap cursor-pointer font-[500] text-[#888888]",children:"TM"==S?null===L||void 0===L||null===(g=L.Brand)||void 0===g?void 0:g.name_tm:"RU"==S?null===L||void 0===L||null===(b=L.Brand)||void 0===b?void 0:b.name_ru:null===L||void 0===L||null===(y=L.Brand)||void 0===y?void 0:y.name_en}),(0,k.jsx)(r.Z,{className:"text-[12px] md:text-[14px] font-[500] text-[#888888]"}),(0,k.jsx)("div",{className:"text-[12px] whitespace-nowrap md:text-[14px] cursor-pointer font-[500] text-[#888888]",children:null===L||void 0===L?void 0:L.bar_code})]}),(0,k.jsxs)("div",{className:"w-full my-4 flex justify-between flex-wrap ",children:[(0,k.jsxs)("div",{className:"w-full md:w-[49%] min-w-[350px]",children:[(0,k.jsx)("div",{className:"w-full rounded-[6px] flex items-center justify-center bg-footerBackground h-[250px] md:h-[370px]",children:(0,k.jsx)("img",{src:f._+"/"+(null===K||void 0===K?void 0:K.src),className:"h-[90%] object-contain",alt:"product"})}),(0,k.jsx)("div",{className:"w-full flex items-center gap-4 my-6",children:null===L||void 0===L||null===(N=L.ProductImgs)||void 0===N?void 0:N.map((function(e){return(0,k.jsx)("div",{onClick:function(){return Q(e)},className:"w-[65px] md:w-[90px] flex items-center overflow-x-auto scrollbar-hide justify-center cursor-pointer h-[65px] md:h-[90px] bg-footerBackground rounded-[6px] border-[1px] ".concat(e.id==K.id&&"border-black"),children:(0,k.jsx)("img",{src:f._+"/"+e.src,className:"h-[90%] object-contain",alt:"product"})})}))})]}),(0,k.jsxs)("div",{className:"w-full  md:w-[47%] min-w-[350px] md:mt-0 mt-9",children:[(0,k.jsxs)("div",{className:"w-full flex justify-between items-start",children:[(0,k.jsx)("h1",{className:"w-[80%] mb-4 text-[18px] md:text-[30px] font-[600] text-black",children:"TM"==S?null===L||void 0===L?void 0:L.name_tm:"RU"==S?null===L||void 0===L?void 0:L.name_ru:null===L||void 0===L?void 0:L.name_en}),(0,k.jsx)("img",{onClick:function(){return ee()},src:u,className:"w-[30px] cursor-pointer mt-[10px] object-contain",alt:""})]}),(0,k.jsxs)("div",{className:"w-full ",children:[(0,k.jsxs)("p",{className:"w-full my-1 md:my-4 text-[14px] md:text-[16px] text-black font-[500]",children:["Bar kod: ",null===L||void 0===L?void 0:L.bar_code]}),(0,k.jsxs)("p",{className:"w-full my-1 md:my-4 flex gap-2 items-center text-[14px] md:text-[16px] text-black font-[500]",children:["Stock: ",(null===L||void 0===L?void 0:L.stock)>0?"Bar":"Gutordy",(null===L||void 0===L?void 0:L.stock)>0?(0,k.jsx)("img",{src:x,alt:""}):(0,k.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,k.jsx)("path",{d:"M9 9V5.625M9 11.5016V11.5312M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z",stroke:"#FF4D4D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})]}),null!==L&&void 0!==L&&L.is_discount?(0,k.jsxs)("div",{className:" flex justify-start items-end gap-3",children:[(0,k.jsx)("p",{className:" md:my-8 my-6 text-[18px] md:text-[20px] text-black font-[700]",children:null!==L&&void 0!==L&&L.is_valyuta?((null===L||void 0===L?void 0:L.usd_price_discount)*(null===X||void 0===X?void 0:X.valyuta)).toFixed(0)+" TMT":(null===L||void 0===L?void 0:L.discount_price)+" TMT"}),(0,k.jsx)("p",{className:" my-8 text-[14px] md:text-[16px] line-through text-[#9F9F9F] font-[600]",children:null!==L&&void 0!==L&&L.is_valyuta?((null===L||void 0===L?void 0:L.usd_price)*(null===X||void 0===X?void 0:X.valyuta)).toFixed(0)+" TMT":(null===L||void 0===L?void 0:L.price)+" TMT"}),(0,k.jsx)("p",{className:" my-8 text-[14px] md:text-[16px] text-[#FF4D4D] font-[600]",children:null!==L&&void 0!==L&&L.is_valyuta?100-(100*(null===L||void 0===L?void 0:L.usd_price_discount)/(null===L||void 0===L?void 0:L.usd_price)).toFixed(0)+"%":100-(100*(null===L||void 0===L?void 0:L.discount_price)/(null===L||void 0===L?void 0:L.price)).toFixed(0)+"%"})]}):(0,k.jsx)("p",{className:"w-full my-8 text-[18px] md:text-[20px] text-black font-[700]",children:null!==L&&void 0!==L&&L.is_valyuta?((null===L||void 0===L?void 0:L.usd_price)*(null===X||void 0===X?void 0:X.valyuta)).toFixed(0)+" TMT":(null===L||void 0===L?void 0:L.price)+" TMT"}),0==R?(0,k.jsxs)("button",{onClick:function(){return te(L)},className:"h-[40px] md:h-[50px] flex gap-3 items-center text-white px-6 pr-8 tex-[12px] md:text-[16px] font-[500] bg-black rounded-[45px]",children:[(0,k.jsx)("img",{className:"w-[20px] md:w-[24px] object-contain",src:v,alt:""}),"Sebede go\u015f"]}):(0,k.jsxs)("div",{className:"flex w-fit gap-6 h-[50px] justify-center items-center",children:[(0,k.jsx)("div",{onClick:(0,o.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(_);case 2:if(e.t0=e.sent,!(e.t0>1)){e.next=12;break}return T(_),e.t1=D,e.next=8,I(_);case 8:e.t2=e.sent,(0,e.t1)(e.t2),e.next=13;break;case 12:w.ZP.warning("Sebetden A\xfdyr!");case 13:case"end":return e.stop()}}),e)}))),className:"bg-black cursor-pointer text-white h-[50px] w-[50px] rounded-[100%] flex justify-center items-center text-[22px]",children:(0,k.jsx)(a.Z,{})}),R,(0,k.jsx)("div",{onClick:(0,o.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=null===L||void 0===L?void 0:L.stock,e.next=3,I(_);case 3:if(e.t1=e.sent,!(e.t0>e.t1)){e.next=13;break}return B(_),e.t2=D,e.next=9,I(_);case 9:e.t3=e.sent,(0,e.t2)(e.t3),e.next=14;break;case 13:w.ZP.warning("Stockda \xfdok!");case 14:case"end":return e.stop()}}),e)}))),className:"bg-black cursor-pointer text-white h-[50px] w-[50px] rounded-[100%] flex justify-center items-center text-[22px]",children:(0,k.jsx)(s.Z,{})})]})]})]})]}),(0,k.jsxs)("div",{className:"w-full my-8",children:[(0,k.jsxs)("div",{className:"w-full flex justify-between items-center mb-8",children:[(0,k.jsx)("h1",{className:"text-[20px] md:text-[40px] font-[700] text-black",children:"A\xfdratynlyklary"}),(0,k.jsxs)("div",{className:"text-[14px] md:text-[20px] cursor-pointer font-[500] text-black flex items-center gap-3",children:[(0,k.jsx)(s.Z,{className:"text-[14px] md:text-[18px] font-[900]"}),"De\u0148e\u015fdir"]})]}),(0,k.jsx)("hr",{className:"bg-footerBackground text-footerBackground text-[1px]"}),null===L||void 0===L||null===(P=L.ProductParametrs)||void 0===P?void 0:P.map((function(e,t){var n,l,o,i;return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:"w-full flex justify-between py-8",children:[(0,k.jsx)("div",{className:"w-[38%] text-[16px] md:text-[26px] font-[700] text-black",children:"TM"==S?null===e||void 0===e||null===(n=e.Parametr)||void 0===n?void 0:n.name_tm:"RU"==S?null===e||void 0===e||null===(l=e.Parametr)||void 0===l?void 0:l.name_ru:null===e||void 0===e||null===(o=e.Parametr)||void 0===o?void 0:o.name_en}),(0,k.jsx)("div",{className:"w-[60%] flex flex-wrap justify-between",children:null===e||void 0===e||null===(i=e.ProductParametrItems)||void 0===i?void 0:i.map((function(e,t){return(0,k.jsxs)("div",{className:"w-1/2 my-3",children:[(0,k.jsx)("h1",{className:"text-[12px] md:text-[18px] font-[600] text-black",children:"TM"==S?null===e||void 0===e?void 0:e.name_tm:"RU"==S?null===e||void 0===e?void 0:e.name_ru:null===e||void 0===e?void 0:e.name_en}),(0,k.jsx)("p",{className:"text-[12px] md:text-[18px] font-[500] text-[#868686]",children:"TM"==S?null===e||void 0===e?void 0:e.value_tm:"RU"==S?null===e||void 0===e?void 0:e.value_ru:null===e||void 0===e?void 0:e.value_en})]},"paramItem"+t)}))})]}),(0,k.jsx)("hr",{className:"bg-footerBackground text-footerBackground text-[1px]"})]},"parametrs"+t)}))]}),(0,k.jsx)("div",{className:"w-full my-8",children:(0,k.jsx)(j,{ProductId:_})}),(0,k.jsxs)("div",{className:"w-full py-4 pb-8",children:[V.length>1&&(0,k.jsxs)("div",{className:"w-full flex mt-8 my-6 justify-between items-center",children:[(0,k.jsx)("h1",{className:"text-[18px] md:text-[40px] font-[600] text-black",children:"Me\u0148ze\u015f harytlar"}),(0,k.jsxs)("div",{className:"flex gap-4",children:[(0,k.jsx)("div",{className:"bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center",children:(0,k.jsx)(c.Z,{onClick:function(){W.current.scrollBy(-200,0)},className:"text-black text-[12px] md:text-[16px] font-[900]"})}),(0,k.jsx)("div",{className:"bg-footerBackground cursor-pointer rounded-[10px] w-[30px] md:w-[44px] h-[30px] md:h-[44px] flex justify-center items-center",children:(0,k.jsx)(r.Z,{onClick:function(){W.current.scrollBy(200,0)},className:"text-black text-[12px] md:text-[16px] font-[900]"})})]})]}),(0,k.jsx)("div",{ref:W,className:"flex gap-4 overflow-x-auto md:mb-8 mb-4 md:pb-8 pb-0 scrollbar-hide",children:null===V||void 0===V?void 0:V.map((function(e){return _!=e.id&&(0,k.jsx)(m.Z,{data:e})}))})]})]})}},2143:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(1413),o=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},d=n(4291),r=function(e,t){return o.createElement(d.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:i}))};r.displayName="MinusOutlined";var a=o.forwardRef(r)}}]);
//# sourceMappingURL=128.76395cc7.chunk.js.map