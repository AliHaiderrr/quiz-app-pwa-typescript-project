(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(18),o=n.n(a),s=(n(24),n(3)),i=n.n(s),u=n(5),l=n(4),p=n(19),h=n(8),d=n.n(h),j=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,c,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://opentdb.com/api.php?amount=".concat(t,"&difficulty=").concat(n,"&type=multiple"));case 2:return r=e.sent,c=r.data,e.next=6,c.results;case 6:return a=e.sent,o=a.map((function(e){return{question:e.question,answer:e.correct_answer,correct_answer:e.correct_answer,option:(t=e.incorrect_answers.concat(e.correct_answer),Object(p.a)(t).sort((function(){return Math.random()-.5})))};var t})),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=n(0),f=function(e){var t=e.question,n=e.option,c=e.callback,a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],u=function(e){i(e.target.value)};return Object(b.jsxs)("div",{className:"question_container",children:[Object(b.jsx)("div",{className:"question",children:Object(b.jsx)("h4",{children:t})}),Object(b.jsxs)("form",{onSubmit:function(e){return c(e,s)},className:"form_container",children:[n.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{name:"opt",type:"radio",required:!0,value:e,checked:s===e,onChange:u}),e]})},t)})),Object(b.jsx)("input",{type:"submit",className:"submit"})]})]})};function g(){var e="BI__ik-fD5l0QUr4XNmGqdPhMeFppBORhMRiVYd3tRurCQddSaU3qZQlEPT9NOgZzhxm7hY380dNV1YaXauNeS0";function t(){return(t=Object(u.a)(i.a.mark((function t(){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Registering service worker..."),t.next=3,navigator.serviceWorker.register("/worker.js",{scope:"/"});case 3:return r=t.sent,console.log("Service Worker Registered..."),console.log("Registering Push..."),t.next=8,r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n(e)});case 8:return c=t.sent,console.log("Push Registered..."),console.log("Sending Push..."),t.next=13,d.a.post("/subscribe",{method:"POST",body:JSON.stringify(c),headers:{"content-type":"application/json"}});case 13:console.log("Push Sent...");case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),c=0;c<n.length;++c)r[c]=n.charCodeAt(c);return r}"serviceWorker"in navigator&&function(){return t.apply(this,arguments)}().catch((function(e){console.error(e)}))}n(45);var O=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),o=Object(l.a)(a,2),s=o[0],p=o[1],h=Object(r.useState)(0),d=Object(l.a)(h,2),O=d[0],v=d[1],m=Object(r.useState)(!1),w=Object(l.a)(m,2),x=w[0],y=w[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(10,"easy");case 2:t=e.sent,c(t),g();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n.length?x?Object(b.jsxs)("div",{className:"question_container  reasult_container",children:[Object(b.jsx)("h1",{children:"Result"}),Object(b.jsxs)("p",{children:["your final score",Object(b.jsxs)("b",{children:[" ",O," out of ",n.length," "]})]})]}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Quiz App"}),Object(b.jsx)(f,{option:n[s].option,question:n[s].question,callback:function(e,t){e.preventDefault();var r=n[s];console.log(" correct answer :  "+r.correct_answer+"  --user selected Answer:  "+t),t===r.correct_answer&&v(++O),s!==n.length-1?p(++s):y(!0)}})]}):Object(b.jsx)("h2",{children:"Loading..."})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.488372e7.chunk.js.map