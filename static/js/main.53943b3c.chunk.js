(this["webpackJsonprobofriend-app"]=this["webpackJsonprobofriend-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(9),a(1));a(10),a(11);var i=function(e){var t=e.searchRobo;return r.a.createElement("div",{className:" center tc w-50 ml-auto mr-auto mb3"},r.a.createElement("h2",null,"Robo Friends"),r.a.createElement("input",{type:"search",onChange:t,placeholder:"search robots",className:"t3 tc p2 br3 h2"}))};var s=function(e){var t=e.roboName;return e.search,r.a.createElement("div",{className:"center pa2"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"tc bg-light-green dib br4 ma2 pl3 pr3 grow bw2 shadow-5"},r.a.createElement("img",{style:{width:"200",height:"200px"},src:"https://robohash.org/".concat(e.id,"/size=100x100"),alt:"roborts"}),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.email))})))};var u=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"640px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",margin:"0 30px",background:"#16a085"}},e.children)};var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),m=Object(l.a)(c,2),h=m[0],p=m[1];Object(n.useEffect)((function(){fetch("https://api.mockaroo.com/api/4705b0c0?count=200&key=c1210f40").then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){return console.log("Error>>",e)}))}),[]);var d=a.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return a.length?r.a.createElement("div",{className:"App"},r.a.createElement(i,{searchRobo:function(e){p(e.target.value)}}),r.a.createElement(u,null,r.a.createElement(s,{roboName:d}))):r.a.createElement("h1",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.53943b3c.chunk.js.map