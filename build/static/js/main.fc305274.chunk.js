(this.webpackJsonppart5=this.webpackJsonppart5||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),u=t(14),a=t.n(u),o=t(3),i=t(4),s=t.n(i),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},j=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(d,"/").concat(e))},f=function(e){return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:e.filter,onChange:e.handleFilter})]})},m=function(e){return Object(c.jsxs)("form",{onSubmit:e.addName,children:[Object(c.jsxs)("div",{children:[" name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameInput})," "]}),Object(c.jsxs)("div",{children:[" number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberInput})," "]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.person,t=e.delperson;return Object(c.jsxs)("div",{children:[n.name," ",n.number,Object(c.jsx)("button",{onClick:t,children:"delete"})]})},O=(t(37),function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})}),p=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),s=i[0],d=i[1],p=Object(r.useState)(""),v=Object(o.a)(p,2),x=v[0],w=v[1],N=Object(r.useState)(""),g=Object(o.a)(N,2),k=g[0],C=g[1],S=Object(r.useState)(null),I=Object(o.a)(S,2),y=I[0],T=I[1];Object(r.useEffect)((function(){l().then((function(e){u(e)}))}),[]);var L=t.filter((function(e){return e.name.toLowerCase().includes(k)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(O,{message:y}),Object(c.jsx)(f,{filter:k,handleFilter:function(e){C(e.target.value)}}),Object(c.jsx)("h2",{children:"Add new"}),Object(c.jsx)(m,{addName:function(e){e.preventDefault();var n={name:s,number:x};t.map((function(e){return e.name.toLowerCase()})).includes(s.toLowerCase())?(T("".concat(s," is already added to phonebook")),setTimeout((function(){T(null)}),3e3)):s&&x?j(n).then((function(e){u(t.concat(e)),d(""),w(""),T("".concat(e.name," added to phonebook")),setTimeout((function(){T(null)}),3e3)})):(T("name or number cannot be empty"),setTimeout((function(){T(null)}),3e3))},newName:s,handleNameInput:function(e){d(e.target.value)},newNumber:x,handleNumberInput:function(e){w(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),L.map((function(e){return Object(c.jsx)(h,{person:e,delperson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&(u(t.filter((function(n){return n.id!==e}))),T("".concat(n.name," removed from phonebook")),setTimeout((function(){T(null)}),3e3),b(e))}(e.id)}},e.id)}))]})};a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fc305274.chunk.js.map