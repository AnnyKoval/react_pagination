(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),r=c(2),i=c(1),o=(c(10),c(3)),s=c.n(o);function l(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}var j,u=c(0);!function(e){e.Prev="prev",e.Next="next"}(j||(j={}));var b,g=function(e){var t=e.direction,c=e.currentPage,a=e.pages,n=e.onPageChange,o=Object(i.useState)(c-1),l=Object(r.a)(o,2),j=l[0],b=l[1],g=Object(i.useState)(c+1),d=Object(r.a)(g,2),h=d[0],p=d[1];Object(i.useEffect)((function(){p(c+1),b(c-1)}),[c]);var O={prev:1,next:a.length},f=c===O[t],m={prev:j,next:h}[t],x={prev:"\xab",next:"\xbb"}[t];return Object(u.jsx)("li",{className:s()("page-item",{disabled:f}),children:Object(u.jsx)("a",{"data-cy":"".concat(t,"Link"),className:"page-link",href:"#".concat(t),"aria-disabled":f,onClick:function(){f||n(m)},children:x})})};!function(e){e.Prev="prev",e.Next="next"}(b||(b={}));var d=function(e){var t=e.total,c=e.itemsPerPage,a=e.currentPage,n=void 0===a?1:a,r=e.onPageChange,i=l(1,Math.ceil(t/c));return Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)(g,{direction:b.Prev,currentPage:n,pages:i,onPageChange:function(e){r(e)}}),i.map((function(e){return Object(u.jsx)("li",{className:s()("page-item",{active:e===n}),children:Object(u.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){r(e)},children:e})},e)})),Object(u.jsx)(g,{direction:b.Next,currentPage:n,pages:i,onPageChange:function(e){r(e)}})]})},h=l(1,42).map((function(e){return"Item ".concat(e)})),p=function(){var e=Object(i.useState)(5),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(1),o=Object(r.a)(n,2),s=o[0],l=o[1],j=h.slice(0,c),b=Object(i.useState)(j),g=Object(r.a)(b,2),p=g[0],O=g[1],f=h.length,m=s*c-c+1,x=Math.min(f,s*c);return Object(i.useEffect)((function(){var e=h.slice((s-1)*c,s*c);O(e)}),[s,c]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ".concat(s)," (items ".concat(m," - ").concat(x," "),"of ".concat(f,")")]}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){a(+e.target.value),l(1)},children:[Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"20",children:"20"})]})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(d,{total:f,itemsPerPage:c,currentPage:s,onPageChange:function(e){l(e)}}),Object(u.jsx)("ul",{children:p.map((function(e){return Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.502d13df.chunk.js.map