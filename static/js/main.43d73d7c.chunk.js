(this.webpackJsonpmultiaplication=this.webpackJsonpmultiaplication||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(19),a=c.n(s),i=(c(26),c(27),c(9)),r=c(2),o=c(0),j=function(t){var e=t.handleHamburger,c=t.hamburgerActive;return Object(o.jsx)("button",{className:c?"hamburger hamburger__active":"hamburger",onClick:e,children:Object(o.jsx)("span",{className:"hamburger__box",children:Object(o.jsx)("span",{className:"hamburger__inner"})})})},l=c.p+"static/media/logo.aeba2408.svg",u=[{name:"Clock",path:"/"},{name:"To do list",path:"/toDoList"},{name:"Stopwatch",path:"/stopwatch"},{name:"Timer",path:"/timer"},{name:"Weather",path:"/weather"}],b=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),c=e[0],s=e[1],a=function(){s(!c)},b=u.map((function(t){return Object(o.jsx)(i.b,{className:"navigation__link",exact:!0,to:t.path,onClick:a,children:Object(o.jsx)("li",{className:"navigation__list--item",children:t.name})},t.name)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{handleHamburger:a,hamburgerActive:c}),Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:l})}),Object(o.jsx)("nav",{className:c?"navigation navigation__active":"navigation",children:Object(o.jsx)("ul",{className:"navigation__list",children:b})})]})},d=c(3),m=function(){var t=Object(n.useState)(new Date),e=Object(r.a)(t,2),c=e[0],s=e[1];Object(n.useEffect)((function(){var t=setInterval((function(){return a()}),1e3);return function(){return clearInterval(t)}}),[]);var a=function(){s(new Date)},i=c.getDate(),j=c.getMonth()+1,l=c.getFullYear();return Object(o.jsxs)("div",{className:"clockSection",children:[Object(o.jsxs)("h2",{className:"clock",children:[c.getHours()<10?"0".concat(c.getHours()):c.getHours()," :"," ",c.getMinutes()<10?"0".concat(c.getMinutes()):c.getMinutes()," "]}),Object(o.jsxs)("p",{className:"date",children:[i<10?"0".concat(i):i,".",j<10?"0".concat(j):j,".",l]})]})},O=c(21),h=function(t){var e=t.input,c=t.setInput,n=t.todoList,s=t.setTodoList;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{action:"javascript:void(0);",onSubmit:function(){s([].concat(Object(O.a)(n),[{text:e,key:1e4*Math.random(),status:!1}])),c("")},children:[Object(o.jsx)("input",{className:"form__input",type:"text",required:!0,placeholder:"new task",value:e,onChange:function(t){c(t.target.value)}}),Object(o.jsx)("button",{className:"form__button",children:"Add a task"})]})})},x=c(17),f=function(t){var e=t.task,c=t.todoList,n=t.setTodoList,s=t.status;return Object(o.jsxs)("li",{className:s?"list__item--active list__item":"list__item",children:[Object(o.jsx)("span",{className:"list__item--text",children:e.text}),Object(o.jsxs)("div",{className:"buttons__box",children:[Object(o.jsx)("button",{className:"button__confirm",onClick:function(){n(c.map((function(t){return t.key===e.key?Object(x.a)(Object(x.a)({},t),{},{status:!t.status}):t})))},children:"\u2714"}),Object(o.jsx)("button",{className:"button__delete",onClick:function(){n(c.filter((function(t){return t.key!==e.key})))},children:"\u2a09"})]})]})},_=function(t){var e=t.todoList,c=t.setTodoList;return Object(o.jsx)("ul",{className:"list",children:e.map((function(t){return Object(o.jsx)(f,{status:t.status,task:t,setTodoList:c,todoList:e},t.key)}))})},p=function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)((function(){var t=localStorage.getItem("todoList");return t?JSON.parse(t):[]})),i=Object(r.a)(a,2),j=i[0],l=i[1];return Object(n.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(j))}),[j]),Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("h1",{className:"list__header",children:"To Do List"}),Object(o.jsx)(h,{input:c,setInput:s,todoList:j,setTodoList:l}),Object(o.jsx)(_,{todoList:j,setTodoList:l,input:c})]})},v=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(!1),i=Object(r.a)(a,2),j=i[0],l=i[1],u=Object(n.useState)(0),b=Object(r.a)(u,2),d=b[0],m=b[1],O=Object(n.useState)(0),h=Object(r.a)(O,2),x=h[0],f=h[1],_=Object(n.useState)(0),p=Object(r.a)(_,2),v=p[0],N=p[1],g=Object(n.useState)(0),k=Object(r.a)(g,2),w=k[0],S=k[1];Object(n.useEffect)((function(){var t=null;return c?t=setInterval(C,10):clearInterval(t),function(){return clearInterval(t)}}),[c]);var C=function(){S((function(t){return t+1}))};return Object(n.useEffect)((function(){100===w&&(S(0),N((function(t){return t+1}))),60===v&&(N(0),f((function(t){return t+1}))),60===x&&(f(0),m((function(t){return t+1})))}),[C]),Object(o.jsxs)("div",{className:"stopwatch",children:[Object(o.jsx)("h1",{className:"stopwatch__header",children:"Stopwatch"}),Object(o.jsxs)("div",{className:"timeBox",children:[Object(o.jsxs)("p",{children:[d<10?"0".concat(d):d,":",x<10?"0".concat(x):x,":",v<10?"0".concat(v):v,","]}),Object(o.jsx)("p",{className:"miliseconds",children:w<10?"0".concat(w):w})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:c?"none":"button",onClick:function(){s(!0)},children:j?"Resume":"Start"}),Object(o.jsx)("button",{className:c?"button":"none",onClick:function(){s(!1),l(!0)},children:"Stop"}),Object(o.jsx)("button",{className:j?"button":"none",onClick:function(){s(!1),l(!1),m(0),f(0),N(0),S(0)},children:"Reset"})]})]})},N=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(0),i=Object(r.a)(a,2),j=i[0],l=i[1],u=Object(n.useState)(0),b=Object(r.a)(u,2),d=b[0],m=b[1],O=Object(n.useState)(0),h=Object(r.a)(O,2),x=h[0],f=h[1],_=Object(n.useState)(!1),p=Object(r.a)(_,2),v=p[0],N=p[1];Object(n.useEffect)((function(){var t=null;return c?t=setInterval(g,1e3):clearInterval(t),function(){return clearInterval(t)}}),[c]);var g=function(){f((function(t){return t-1}))};Object(n.useEffect)((function(){c&&(N(!0),0===x&&d>0&&(m((function(t){return t-1})),f(60)),0===d&&j>0&&(l((function(t){return t-1})),m(60)),0===x&&0===d&&0===j&&s(!1))}),[g]);return Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsx)("h1",{className:"timer__header",children:"Timer"}),Object(o.jsxs)("div",{className:"timer__box",children:[Object(o.jsxs)("div",{className:"timer__hours",children:[Object(o.jsx)("button",{disabled:v,className:"timer__button",onClick:function(){return l(j+1)},children:"+1"}),Object(o.jsx)("p",{className:"timer__time",children:j<10?"0".concat(j):j}),Object(o.jsx)("button",{className:"timer__button",disabled:v||j<=0&&"disabled",onClick:function(){return l(j-1)},children:"-1"})]}),Object(o.jsxs)("div",{className:"timer__minutes",children:[Object(o.jsx)("button",{disabled:v,className:"timer__button",onClick:function(){return m(d+1)},children:"+1"}),Object(o.jsx)("p",{className:"timer__time",children:d<10?"0".concat(d):d}),Object(o.jsx)("button",{className:"timer__button",disabled:v||d<=0&&"disabled",onClick:function(){return m(d-1)},children:"-1"})]}),Object(o.jsxs)("div",{className:"timer__seconds",children:[Object(o.jsx)("button",{disabled:v,className:"timer__button",onClick:function(){return f(x+1)},children:"+1"}),Object(o.jsx)("p",{className:"timer__time",children:x<10?"0".concat(x):x}),Object(o.jsx)("button",{className:"timer__button",disabled:v||x<=0&&"disabled",onClick:function(){return f(x-1)},children:"-1"})]})]}),Object(o.jsxs)("div",{className:"timer__buttons",children:[Object(o.jsx)("button",{disabled:0===x&&0===d&&0===j&&"true",className:"button",onClick:function(){s(!c),N(!v)},children:c?"Stop":"Start"}),Object(o.jsx)("button",{className:"button",onClick:function(){s(!1),l(0),m(0),f(0),N(!1)},children:"Reset"})]})]})},g=c.p+"static/media/cloud.dda61cbf.svg",k=c.p+"static/media/wind.cdbdea74.svg",w="2faf5362af8831e653fa8cc1ca8dd326",S="https://api.openweathermap.org/data/2.5/weather?q=",C=function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),j=i[0],l=i[1],u=Object(n.useState)([]),b=Object(r.a)(u,2),d=b[0],m=b[1],O="".concat(S).concat(j,"&units=metric&appid=").concat(w);return Object(n.useEffect)((function(){j&&fetch(O).then((function(t){return t.json()})).then((function(t){console.log(t),m({name:t.name,temp:"".concat(t.main.temp.toFixed(),"\xb0C"),country:t.sys.country,clouds:"".concat(t.clouds.all," %"),wind:"".concat(t.wind.speed.toFixed(1)," m/s"),description:"".concat(t.weather[0].description)})}))}),[j]),Object(o.jsxs)("div",{className:"weather",children:[Object(o.jsx)("h1",{className:"weather__header",children:"Weather"}),Object(o.jsxs)("form",{action:"",children:[Object(o.jsx)("input",{className:"form__input",type:"text",placeholder:"enter your place",name:"",id:"",value:c,onChange:function(t){s(t.target.value)}}),Object(o.jsx)("button",{className:"form__button",onClick:function(){l(c),s("")},children:"Search"})]}),Object(o.jsxs)("div",{className:"weather__content",children:[Object(o.jsx)("p",{className:"weather__content--name",children:d.name}),Object(o.jsx)("p",{children:d.country}),Object(o.jsx)("p",{className:"weather__content--temp",children:d.temp}),Object(o.jsxs)("div",{className:j?"weather__other-content":"none",children:[Object(o.jsxs)("div",{className:"weather__box",children:[Object(o.jsx)("img",{className:"weather__img",src:g}),Object(o.jsx)("span",{className:"clouds",children:d.clouds})]}),Object(o.jsxs)("div",{className:"weather__box",children:[Object(o.jsx)("img",{className:"weather__img",src:k}),Object(o.jsx)("span",{className:"wind",children:d.wind})]})]}),Object(o.jsx)("span",{children:d.description})]})]})},L=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(o.jsx)(m,{})}}),Object(o.jsx)(d.a,{path:"/toDoList",render:function(){return Object(o.jsx)(p,{})}}),Object(o.jsx)(d.a,{path:"/stopwatch",render:function(){return Object(o.jsx)(v,{})}}),Object(o.jsx)(d.a,{path:"/timer",render:function(){return Object(o.jsx)(N,{})}}),Object(o.jsx)(d.a,{path:"/weather",render:function(){return Object(o.jsx)(C,{})}})]})})};var y=function(){return Object(o.jsx)(i.a,{basename:"/",children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("header",{children:Object(o.jsx)(b,{})}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})})};a.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.43d73d7c.chunk.js.map