"use strict";(self.webpackChunknextcabs_booking=self.webpackChunknextcabs_booking||[]).push([[105],{425:(e,s,a)=>{a.d(s,{Z:()=>v});var l=a(313),n=a(467),d=a(135),i=a(539),c=a(258),t=a(417);function r(e){let{name:s,value:a,updateSearchData:n}=e;const[d,i]=(0,l.useState)([]);return(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("input",{type:"text",className:"border-0 p-0 w-100",value:a,onChange:e=>(e=>{const a={[s]:e};(null===e||void 0===e?void 0:e.length)>0?c.ZP.searchLocation(e).then((e=>{let{data:s}=e;i((null===s||void 0===s?void 0:s.predictions)||[])})):(i([]),a["".concat(s,"Id")]=""),n(a)})(e.currentTarget.value)}),d.length>0&&(0,t.jsx)("ul",{className:"dropdown-menu show w-100 mt-1 start-0",children:d.map((e=>(0,t.jsx)("li",{onClick:()=>{return n({[s]:(a=e).description,["".concat(s,"Id")]:a.place_id}),void i([]);var a},children:(0,t.jsx)("span",{className:"dropdown-item d-inline-block  text-truncate",children:e.description})},null===e||void 0===e?void 0:e.place_id)))})]})}var o=a(804);function m(e){let{type:s,value:a,onChange:l}=e;const n="time"===s?o.Z.getTime(a):o.Z.getDate(a),d="time"===s?o.Z.getTime(o.Z.date()):o.Z.getDate(o.Z.date());return(0,t.jsx)("input",{type:s,className:"border-0 p-0 w-100",value:n,min:d,onChange:e=>{l("time"===s?o.Z.setDateTime(a,null,e.currentTarget.value):o.Z.setDateTime(a,e.currentTarget.value,null))}})}function x(e){let{searchData:s,updateSearchData:a,isSearchEnabled:l,onSearchClick:n}=e;return(0,t.jsxs)("div",{className:"bookingContainer",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("h5",{className:"bookingContainer__tab text-center p-3 mb-0 bg-white rounded-top",children:[(0,t.jsx)(i.vc9,{})," ",(0,t.jsx)("span",{className:"d-none d-lg-inline",children:"Airport"})," Transfers"]})}),(0,t.jsx)("div",{className:"col",children:"\xa0"})]}),(0,t.jsxs)("div",{className:"bookingContainer__box px-2 py-4 bg-white rounded-bottom rounded-end",children:[(0,t.jsx)("div",{className:"container py-2",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12 col-lg-6",children:(0,t.jsxs)("fieldset",{className:"dropdown border rounded-3 px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Pick-up"})}),(0,t.jsx)(r,{name:"from",value:null===s||void 0===s?void 0:s.from,updateSearchData:a})]})}),(0,t.jsx)("div",{className:"col-12  col-lg-6",children:(0,t.jsxs)("fieldset",{className:"dropdown border rounded-3 px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Drop-off"})}),(0,t.jsx)(r,{name:"to",value:null===s||void 0===s?void 0:s.to,updateSearchData:a})]})})]})}),(0,t.jsx)("div",{className:"container py-2",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12  col-lg-6",children:(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsxs)("fieldset",{className:" w-100 border rounded-start px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Date"})}),(0,t.jsx)(m,{type:"date",value:null===s||void 0===s?void 0:s.fromDate,onChange:e=>a({fromDate:e})})]}),(0,t.jsxs)("fieldset",{className:"w-100 border rounded-end  px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Time"})}),(0,t.jsx)(m,{type:"time",value:null===s||void 0===s?void 0:s.fromDate,onChange:e=>a({fromDate:e})})]})]})}),null!==s&&void 0!==s&&s.isReturn?(0,t.jsx)("div",{className:"col-12  col-lg-6",children:(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsxs)("fieldset",{className:" w-100 border rounded-start px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsxs)("h6",{className:"mb-0",children:["Date ",(0,t.jsx)(i.G1X,{})]})}),(0,t.jsx)(m,{type:"date",value:null===s||void 0===s?void 0:s.toDate,onChange:e=>a({toDate:e})})]}),(0,t.jsxs)("fieldset",{className:"w-100 border rounded-end  px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsxs)("h6",{className:"mb-0",children:["Time ",(0,t.jsx)(i.G1X,{})]})}),(0,t.jsx)(m,{type:"time",value:null===s||void 0===s?void 0:s.toDate,onChange:e=>a({toDate:e})})]}),(0,t.jsx)("button",{type:"button",className:"btn-close mt-4 ms-2",onClick:()=>a({isReturn:!(null!==s&&void 0!==s&&s.isReturn)})})]})}):(0,t.jsx)("div",{className:"col-12  col-lg-6 pt-2 mb-4",children:(0,t.jsx)("button",{className:"border btn btn-outline-secondary w-100 p-2",onClick:()=>a({isReturn:!(null!==s&&void 0!==s&&s.isReturn)}),children:(0,t.jsx)("span",{className:"p-1 d-inline-block",children:"Add Return"})})})]})}),(0,t.jsx)("div",{className:"d-flex justify-content-end pe-3 me-2 mb-2",children:(0,t.jsxs)("button",{className:"btn btn-primary btn-lg py-3 px-5",onClick:n,disabled:l,children:[(0,t.jsx)(i.vU7,{})," Search"]})})]})]})}function h(e){let{searchData:s,isEdit:a,setCanEdit:n}=e;const{from:d,fromDate:c,to:r,toDate:m,isReturn:x}=s;return(0,t.jsxs)("div",{className:"card shadow-sm",children:[(0,t.jsxs)("div",{className:"card-header d-flex py-3 justify-content-between align-items-center",children:[(0,t.jsx)("h5",{className:" mb-0",children:"Summary"}),a&&(0,t.jsxs)("button",{className:"btn btn-secondary btn-sm",onClick:()=>n((e=>!e)),children:[(0,t.jsx)(i.zmo,{})," Edit Quote"]})]}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("div",{className:"d-flex pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"Form"}),(0,t.jsx)("span",{className:"w-50 fw-bold",children:d})]}),(0,t.jsxs)("div",{className:"d-flex  pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"To"}),(0,t.jsx)("strong",{className:"w-50  fw-bold",children:r})]}),(0,t.jsxs)("div",{className:"d-flex  pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"Date"}),(0,t.jsx)("strong",{className:"w-50",children:o.Z.dateToYMD(c)})]}),(0,t.jsxs)("div",{className:"d-flex  pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"Pick-Up Time"}),(0,t.jsx)("strong",{className:"w-50 ",children:o.Z.getTime(c)})]})]}),x&&(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("div",{className:"card-header border-top",children:(0,t.jsx)("h5",{className:" mb-0",children:"Return"})}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("div",{className:"d-flex pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"Form"}),(0,t.jsx)("strong",{className:"w-50  fw-bold",children:r})]}),(0,t.jsxs)("div",{className:"d-flex  pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"To"}),(0,t.jsx)("strong",{className:"w-50  fw-bold",children:d})]}),(0,t.jsxs)("div",{className:"d-flex  pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"Date"}),(0,t.jsx)("strong",{className:"w-50",children:o.Z.dateToYMD(m)})]}),(0,t.jsxs)("div",{className:"d-flex  pb-2",children:[(0,t.jsx)("span",{className:"w-50",children:"Pick-Up Time"}),(0,t.jsx)("strong",{className:"w-50",children:o.Z.getTime(m)})]})]})]})]})}function p(e){const[s,a]=(0,l.useState)(!1),n=s?j:h;return(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(n,{...e,setCanEdit:a})})}function j(e){let{searchData:s,updateSearchData:a,isSearchEnabled:l,onSearchClick:n,setCanEdit:d}=e;return(0,t.jsxs)("div",{className:"card shadow-sm",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsx)("h5",{className:"py-2 mb-0",children:"Change Search"})}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("fieldset",{className:"dropdown border rounded-3 px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Pick-up"})}),(0,t.jsx)(r,{name:"from",value:null===s||void 0===s?void 0:s.from,updateSearchData:a})]}),(0,t.jsxs)("fieldset",{className:"dropdown border rounded-3 px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Drop-off"})}),(0,t.jsx)(r,{name:"to",value:null===s||void 0===s?void 0:s.to,updateSearchData:a})]}),(0,t.jsxs)("div",{className:"d-flex mb-2",children:[(0,t.jsxs)("fieldset",{className:" w-100 border rounded-start px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Date"})}),(0,t.jsx)(m,{type:"date",value:null===s||void 0===s?void 0:s.fromDate,onChange:e=>a({fromDate:e})})]}),(0,t.jsxs)("fieldset",{className:"w-100 border rounded-end  px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsx)("h6",{className:"mb-0",children:"Time"})}),(0,t.jsx)(m,{type:"time",value:null===s||void 0===s?void 0:s.fromDate,onChange:e=>a({fromDate:e})})]})]}),null!==s&&void 0!==s&&s.isReturn?(0,t.jsxs)("div",{className:"d-flex mb-2",children:[(0,t.jsxs)("fieldset",{className:" w-100 border rounded-start px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsxs)("h6",{className:"mb-0",children:["Date ",(0,t.jsx)(i.G1X,{})]})}),(0,t.jsx)(m,{type:"date",value:null===s||void 0===s?void 0:s.toDate,onChange:e=>a({toDate:e})})]}),(0,t.jsxs)("fieldset",{className:"w-100 border rounded-end  px-3 py-2 mb-4",children:[(0,t.jsx)("legend",{className:"float-none w-auto px-2 mb-0",children:(0,t.jsxs)("h6",{className:"mb-0",children:["Time ",(0,t.jsx)(i.G1X,{})]})}),(0,t.jsx)(m,{type:"time",value:null===s||void 0===s?void 0:s.toDate,onChange:e=>a({toDate:e})})]}),(0,t.jsx)("button",{type:"button",className:"btn-close mt-4 ms-2",onClick:()=>a({isReturn:!(null!==s&&void 0!==s&&s.isReturn)})})]}):(0,t.jsx)("button",{onClick:()=>a({isReturn:!(null!==s&&void 0!==s&&s.isReturn)}),className:"border btn btn-outline-secondary w-100 p-2 mb-4",children:(0,t.jsx)("span",{className:"p-1 d-inline-block",children:"Add Return"})}),(0,t.jsx)("button",{disabled:l,onClick:()=>{n(),d((e=>!e))},className:"btn btn-primary  w-100 py-2",children:"New Quote"})]})]})}p.defaultProps={isEdit:!1};var u=a(967);function b(e){let{isMain:s,isEdit:a}=e;const i=(0,n.s0)(),c=(0,n.TH)(),[r]=(0,d.lr)(),{searchData:m,updateSearchData:h,getTripList:j}=(0,l.useContext)(u.I),b=s?x:p,v=!o.Z.canSearch(m);return(0,l.useEffect)((()=>{"/listing"===(null===c||void 0===c?void 0:c.pathname)&&h(o.Z.getSearchParms(r,m,i))}),[c]),(0,t.jsx)(b,{searchData:m,updateSearchData:h,isEdit:a,isSearchEnabled:v,onSearchClick:()=>{const{fromDate:e,fromId:s,from:a,toDate:l,toId:n,to:d,isReturn:c}=m;j(),i({pathname:"/listing",search:"?from=".concat(a,"*").concat(s,"*").concat(e,"&to=").concat(d,"*").concat(n).concat(c?"*".concat(l):"")})}})}b.defaultProps={isMain:!0};const v=b},204:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var l=a(313),n=a(467),d=a(539),i=a(425),c=a(930),t=a(804),r=a(967);const o={SALOON:{title:"Saloon Car",imageUrl:a.p+"static/media/saloon.ae91d642a717f1893eb1.png",isSelected:!1,passengers:4,mediumLuggage:2,small:2,id:"saloon"},ESTATE:{id:"estate",title:"Estate",imageUrl:a.p+"static/media/estate.c94f448f632cd5df4292.png",isSelected:!1,passengers:4,mediumLuggage:2,small:3},EXECUTIVE:{id:"executive",title:"Executive",imageUrl:a.p+"static/media/executive1.4db09d904890fb5ff721.png",isSelected:!1,passengers:4,mediumLuggage:2,small:3},MPV:{id:"mpv",title:"MPV",imageUrl:a.p+"static/media/mvp.a5215ab131b28c8c77ad.png",isSelected:!1,passengers:6,mediumLuggage:3,small:3},EIGHTSEATER:{id:"eightSeater",title:"Eight Seater",imageUrl:a.p+"static/media/8seater.f5e5d1ad30b615260e54.png",isSelected:!1,passengers:8,mediumLuggage:8,small:8}};var m=a(417);const x=function(){const e=(0,n.s0)(),{tripInfo:s,getTripList:a,searchData:x,setCabInfo:h}=(0,l.useContext)(r.I),p=t.Z.canSearch(x),j=t.Z.getTripListing(o,s,null===x||void 0===x?void 0:x.isReturn);return(0,l.useEffect)((()=>{p&&a()}),[x]),(0,m.jsx)(c.Z,{children:(0,m.jsx)("div",{className:"py-2 py-lg-4",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row justify-content-lg-center",children:(0,m.jsx)("div",{className:"col-xl-10 col-12 mt-lg-3 py-5",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-12 col-xl-4",children:[(0,m.jsx)(i.Z,{isMain:!1,isEdit:!0}),(0,m.jsxs)("div",{className:"card shadow-sm rounded-1 mb-4",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h5",{className:"mb-0 py-2",children:"Reviews"})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsx)("div",{className:"elfsight-app-a78a4d97-ab23-437c-814d-cddec42da778","data-elfsight-app-lazy":!0})})]}),(0,m.jsxs)("div",{className:"card shadow-sm rounded-1 mb-4",children:[(0,m.jsx)("div",{className:"card-header",children:(0,m.jsx)("h5",{className:"mb-0 py-2",children:"Prices Include"})}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,m.jsx)(d.ZSR,{}),(0,m.jsx)("span",{className:"ps-2",children:"Taxes and Tolls"})]}),(0,m.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,m.jsx)(d.ZSR,{}),(0,m.jsx)("span",{className:"ps-2",children:" Flight Monitoring"})]}),(0,m.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,m.jsx)(d.ZSR,{}),(0,m.jsx)("span",{className:"ps-2",children:"Waiting Time and Parking"})]}),(0,m.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,m.jsx)(d.ZSR,{}),(0,m.jsx)("span",{className:"ps-2",children:" Free Amendments"})]}),(0,m.jsxs)("div",{className:"d-flex align-items-center",children:[(0,m.jsx)(d.ZSR,{}),(0,m.jsx)("span",{className:"ps-2",children:"Free Cancellations"})]})]})]})]}),(0,m.jsx)("div",{className:"col-12 col-xl-8",children:j.map((s=>(0,m.jsxs)("div",{className:"card shadow-sm mb-4",children:[(0,m.jsxs)("div",{id:"".concat(null===s||void 0===s?void 0:s.id),className:"collapse p-2 border-bottom bg-light",style:{fontSize:".6rem"},children:["- Private, door-to-door transfer service.",(0,m.jsx)("br",{}),"- Exact meeting point information and Emergency contact details will be provided in the confirmation email.",(0,m.jsx)("br",{}),"- Vehicle may be upgraded to one with higher capacity.",(0,m.jsx)("br",{}),"- Flight monitoring and up to 1 hour of waiting time included."]}),(0,m.jsxs)("div",{className:"d-flex flex-lg-row",children:[(0,m.jsxs)("div",{className:"flex-fill",children:[(0,m.jsxs)("div",{className:"border-bottom px-3 pt-3 pb-2",children:[(0,m.jsx)("h6",{className:"mb-1 d-inline-block",children:null===s||void 0===s?void 0:s.title}),(0,m.jsx)("span",{className:"badge rounded-pill bg-light text-dark mx-3 mb-1",children:"Standard Servie"}),(0,m.jsx)("span",{className:"badge rounded-pill bg-light text-dark mb-1",children:"Free Cancellation 24h"})]}),(0,m.jsxs)("div",{className:" px-3 px-lg-0 row pb-lg-0 pb-3",children:[(0,m.jsx)("div",{className:"col-12 col-lg-7",children:(0,m.jsx)("img",{src:null===s||void 0===s?void 0:s.imageUrl,className:"w-100"})}),(0,m.jsx)("div",{className:"col-12 col-lg-5 d-lg-flex align-items-center",children:(0,m.jsxs)("ul",{className:"list-group",children:[(0,m.jsxs)("li",{className:"list-group-item",children:[(0,m.jsx)(d.J8I,{}),(0,m.jsx)("span",{className:"ps-2",children:"Passengers"})," - ",null===s||void 0===s?void 0:s.passengers," "]}),(0,m.jsxs)("li",{className:"list-group-item",children:[(0,m.jsx)(d.CvH,{}),(0,m.jsx)("span",{className:"ps-2",children:"Medium"})," - ",null===s||void 0===s?void 0:s.mediumLuggage]}),(0,m.jsxs)("li",{className:"list-group-item",children:[(0,m.jsx)(d.T7H,{}),(0,m.jsx)("span",{className:"ps-2",children:"Small"})," - ",null===s||void 0===s?void 0:s.small]})]})})]})]}),(0,m.jsxs)("div",{className:"bg-light border-start d-flex flex-column",children:[(0,m.jsxs)("div",{className:"mx-4 py-2 text-center bg-white border border-top-0 shadow-sm rounded-bottom","data-bs-toggle":"collapse","data-bs-target":"#".concat(null===s||void 0===s?void 0:s.id),role:"button",children:[(0,m.jsx)(d.I5p,{})," ",(0,m.jsx)("span",{style:{fontSize:".6rem"},children:"Transfer Information"})]}),(0,m.jsx)("div",{className:"flex-fill p-5 text-center",children:(0,m.jsxs)("div",{className:"btn-group-vertical",role:"group",children:[(0,m.jsxs)("button",{className:"btn btn-outline-primary pe-none",children:[(0,m.jsxs)("strong",{className:" fs-4",children:["EUR ",null===s||void 0===s?void 0:s.price]}),(0,m.jsx)("small",{className:"d-block text-muted",children:null!==x&&void 0!==x&&x.isReturn?"Round":"One Way"})]}),(0,m.jsx)("button",{onClick:()=>(h(s),void e("/checkout")),type:"button",className:"btn btn-primary",children:"Book Now"})]})}),(0,m.jsxs)("div",{className:"px-3 py-2 text-center bg-white border-top lh-sm",children:[(0,m.jsx)("small",{className:"d-block",children:"Supplier Rating"}),(0,m.jsxs)("div",{className:"text-warning",children:[(0,m.jsx)(d.QZE,{}),(0,m.jsx)(d.QZE,{}),(0,m.jsx)(d.QZE,{}),(0,m.jsx)(d.QZE,{}),(0,m.jsx)(d.hrB,{})]})]})]})]})]},null===s||void 0===s?void 0:s.id)))})]})})})})})})}}}]);