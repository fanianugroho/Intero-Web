(this["webpackJsonpfrontend-iai"]=this["webpackJsonpfrontend-iai"]||[]).push([[0],{182:function(e,t,a){e.exports=a(379)},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},246:function(e,t,a){},270:function(e,t,a){e.exports=a.p+"static/media/tbm.11f10599.jpg"},271:function(e,t,a){e.exports=a.p+"static/media/ttm.bcee0364.jpg"},272:function(e,t,a){e.exports=a.p+"static/media/tim.76005ac8.jpg"},284:function(e,t,a){},285:function(e,t,a){e.exports=a.p+"static/media/myspy.14988261.jpg"},286:function(e,t,a){e.exports=a.p+"static/media/still2.3d1da1c0.jpg"},287:function(e,t,a){e.exports=a.p+"static/media/teen2.f046e355.jpg"},288:function(e,t,a){},366:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){e.exports=a.p+"static/media/rifal.bc6db139.jpg"},377:function(e,t,a){e.exports=a.p+"static/media/fania.5a5695dc.jpeg"},378:function(e,t,a){e.exports=a.p+"static/media/nisa.0a3f869f.jpeg"},379:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(187),a(188),a(94)),i=a(95),m=a(103),s=a(102),u=a(380),p=a(385),d=a(15),E=(a(189),a(388)),g=a(389),f=a(390),h=a(391),b=a(392),y=a(393),v=u.a.Header,k=p.a.SubMenu,w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={current:"nowshowing"},e.handleClick=function(t){console.log("click ",t),e.setState({current:t.key})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(v,{style:{background:"#fff"}},r.a.createElement("div",null,r.a.createElement(p.a,{mode:"horizontal"},r.a.createElement(p.a.Item,{key:"nowshowing"},r.a.createElement(E.a,{twoToneColor:"#eb2f96"}),r.a.createElement(d.b,{to:"/"},"Now Showing")),r.a.createElement(p.a.Item,{key:"upcoming"},r.a.createElement(g.a,{twoToneColor:"#eb2f96"}),r.a.createElement(d.b,{to:"/upcoming"},"Upcoming")),r.a.createElement(k,{title:r.a.createElement("span",{className:"ticket"},r.a.createElement(f.a,{twoToneColor:"#eb2f96"}),"Ticket")},r.a.createElement(p.a.ItemGroup,null,r.a.createElement(p.a.Item,{key:"ticket"},r.a.createElement(h.a,{twoToneColor:"#eb2f96"}),r.a.createElement(d.b,{to:"/buyNow"},"Buy Now")),r.a.createElement(p.a.Item,{key:""},r.a.createElement(b.a,{twoToneColor:"#eb2f96"}),r.a.createElement(d.b,{to:"/history"},"History")))),r.a.createElement(p.a.Item,{key:"about"},r.a.createElement(y.a,{twoToneColor:"#eb2f96"}),r.a.createElement(d.b,{to:"/aboutUs"},"About Us"))))))}}]),a}(n.Component),x=a(42),C=a(34),j=a.n(C),O=a(39),T=a(63),S=a(12),I=a(384),F=a(132),H=a(69),N=a(27),W=a(381),U=(a(246),a(129)),A=a.n(U);A.a.initializeApp({apiKey:"AIzaSyDRFj-LvZ-0zhd52NJwS6wmxUqIDtPq0pI",authDomain:"intero-web-uts.firebaseapp.com",databaseURL:"https://intero-web-uts.firebaseio.com",projectId:"intero-web-uts",storageBucket:"intero-web-uts.appspot.com",messagingSenderId:"378794661725",appId:"1:378794661725:web:c5f15475774b2997ecbab4",measurementId:"G-WWE5F91XGH"});var K=A.a,D=u.a.Content,_=u.a.Header,B=u.a.Footer,J=I.a.Meta;var R=function(){var e=r.a.useState([]),t=Object(S.a)(e,2),n=t[0],l=t[1];r.a.useEffect((function(){(function(){var e=Object(T.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.firestore(),e.next=3,t.collection("nowshowing").get();case 3:a=e.sent,l(a.docs.map((function(e){return Object(O.a)({},e.data(),{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=a(270),o=a(271),i=a(272);return r.a.createElement("div",null,r.a.createElement(u.a,{style:{padding:"16px auto"}},r.a.createElement(_,{style:{background:"#fff"}},r.a.createElement(D,{style:{padding:"16px auto"}},r.a.createElement(W.a,{autoplay:!0},r.a.createElement("div",{class:"posisi"},r.a.createElement("img",{src:c,style:{maxWidth:"100%"}})),r.a.createElement("div",{class:"posisi"},r.a.createElement("img",{src:i,style:{maxWidth:"100%"}})),r.a.createElement("div",{class:"posisi"},r.a.createElement("img",{src:o,style:{maxWidth:"100%"}}))),r.a.createElement(F.a,{shape:"round",style:{backgroundColor:"white"}},r.a.createElement("h4",null,"Now Showing")),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(H.a,{gutter:[16,8]},n.map((function(e){return r.a.createElement(N.a,{span:6},r.a.createElement(I.a,{hoverable:!0,title:"",bordered:!0},r.a.createElement("img",{src:e.poster,alt:"NowShowing",style:{maxWidth:"100%",maxHeight:"300px"}}),r.a.createElement(J,{title:e.title,style:{paddingTop:"20px"}}),r.a.createElement(J,{title:e.genre,style:{paddingTop:"20px"}})))}))))),r.a.createElement(B,{style:{backgroundColor:"white",textAlign:"center"}},"Kelompok Film \xa92020 "))))},z=(a(284),u.a.Content),L=u.a.Header,P=u.a.Footer,q=I.a.Meta;var M=function(){var e=r.a.useState([]),t=Object(S.a)(e,2),n=t[0],l=t[1];r.a.useEffect((function(){(function(){var e=Object(T.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.firestore(),e.next=3,t.collection("upcoming").get();case 3:a=e.sent,l(a.docs.map((function(e){return Object(O.a)({},e.data(),{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=a(285),o=a(286),i=a(287);return r.a.createElement("div",null,r.a.createElement(u.a,{style:{padding:"16px auto"}},r.a.createElement(L,{style:{background:"#fff"}},r.a.createElement(z,{style:{padding:"16px auto"}},r.a.createElement(W.a,{autoplay:!0},r.a.createElement("div",{class:"posisi2"},r.a.createElement("img",{src:c,style:{maxWidth:"100%"}})),r.a.createElement("div",{class:"posisi2"},r.a.createElement("img",{src:i,style:{maxWidth:"100%"}})),r.a.createElement("div",{class:"posisi2"},r.a.createElement("img",{src:o,style:{maxWidth:"100%"}}))),r.a.createElement(F.a,{shape:"round",style:{backgroundColor:"white"}},r.a.createElement("h4",null,"Upcoming")),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(H.a,{gutter:[16,8]},n.map((function(e){return r.a.createElement(N.a,{span:6},r.a.createElement(I.a,{hoverable:!0,title:"",bordered:!0},r.a.createElement("img",{src:e.poster,alt:"Upcoming",style:{maxWidth:"100%",maxHeight:"300px"}}),r.a.createElement(q,{title:e.title,style:{paddingTop:"20px"}}),r.a.createElement(q,{title:e.releasedate,style:{paddingTop:"20px"}}),r.a.createElement(q,{title:e.genre,style:{paddingTop:"20px"}})))}))))),r.a.createElement(P,{style:{backgroundColor:"white",textAlign:"center"}},"Kelompok Film \xa92020 "))))},G=a(383),V=a(386),X=(a(288),u.a.Content),Z=u.a.Header,$=u.a.Footer;var Q=function(){var e=r.a.useState(),t=Object(S.a)(e,2),a=t[0],n=t[1],l=r.a.useState(),c=Object(S.a)(l,2),o=c[0],i=c[1],m=r.a.useState(),s=Object(S.a)(m,2),p=s[0],E=s[1],g=r.a.useState(),f=Object(S.a)(g,2),h=f[0],b=f[1];return r.a.createElement(u.a,{style:{padding:"16px auto",background:"#fff"}},r.a.createElement(Z,{style:{background:"#fff"}},r.a.createElement(X,{style:{padding:"16px auto"}},r.a.createElement(F.a,{shape:"round",style:{backgroundColor:"white"}},r.a.createElement("h4",null,"Buy Ticket")),r.a.createElement(G.a,{style:{padding:"16px auto"},labelCol:{span:8},wrapperCol:{span:10}},r.a.createElement(G.a.Item,{label:"Email",name:"email",style:{margin:"16px auto"}},r.a.createElement(V.a,{value:a,onChange:function(e){return n(e.target.value)}})),r.a.createElement(G.a.Item,{label:"Nama",name:"name",style:{margin:"16px auto"}},r.a.createElement(V.a,{value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement(G.a.Item,{label:"Judul Film",name:"choosenmovie",style:{margin:"16px auto"}},r.a.createElement(V.a,{value:h,onChange:function(e){return b(e.target.value)}})),r.a.createElement(G.a.Item,{label:"Jumlah Tiket",name:"jmltiket"},r.a.createElement(V.a,{value:p,onChange:function(e){return E(e.target.value)}}))),r.a.createElement(d.b,{to:"/History"},r.a.createElement(F.a,{onClick:function(){K.firestore().collection("ticket").add({email:a,name:o,totalticket:p,choosenmovie:h})},type:"primary",ghost:!0,style:{padding:"16px auto"}},"Finish"))),r.a.createElement($,{style:{backgroundColor:"white",textAlign:"center"}},"Kelompok Film \xa92020 ")))},Y=(a(366),function(e){var t=e.ticket;return r.a.createElement(d.b,{to:"/buyNow"},r.a.createElement(F.a,{danger:!0,onClick:function(){K.firestore().collection("ticket").doc(t.id).delete()}},"Delete"))}),ee=a(387),te=function(e){var t=e.ticket,a=r.a.useState(),n=Object(S.a)(a,2),l=n[0],c=n[1],o=r.a.useState(),i=Object(S.a)(o,2),m=i[0],s=i[1],u=r.a.useState(),p=Object(S.a)(u,2),d=p[0],E=p[1],g=r.a.useState(),f=Object(S.a)(g,2),h=f[0],b=f[1];return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("hr",null),r.a.createElement("h4",{style:{marginTop:"15px"}},"Edit Ticket"),r.a.createElement(G.a,{style:{padding:"5px auto"},labelCol:{span:9},wrapperCol:{span:15}},r.a.createElement(G.a.Item,{label:"Nama",name:"name",style:{margin:"16px auto"}},r.a.createElement(V.a,{value:m,onChange:function(e){return s(e.target.value)}})),r.a.createElement(G.a.Item,{label:"Email",name:"email",style:{margin:"16px auto"}},r.a.createElement(V.a,{value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement(G.a.Item,{label:"Judul Film",name:"choosenmovie",style:{margin:"16px auto"}},r.a.createElement(V.a,{value:h,onChange:function(e){return b(e.target.value)}})),r.a.createElement(G.a.Item,{label:"Jumlah Tiket",name:"jmltiket"},r.a.createElement(V.a,{value:d,onChange:function(e){return E(e.target.value)}}))),r.a.createElement(F.a,{onClick:function(){K.firestore().collection("ticket").doc(t.id).set(Object(O.a)({},t,{email:l,name:m,totalticket:d,choosenmovie:h})),ee.a.open({message:"Hai!",description:"Data telah berhasil di Update, Silahkan Reload Halaman ini!"})},type:"primary",ghost:!0,style:{padding:"16px auto"}},"Update"))},ae=u.a.Content,ne=u.a.Header,re=u.a.Footer;var le=function(){var e=r.a.useState([]),t=Object(S.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){(function(){var e=Object(T.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.firestore(),e.next=3,t.collection("ticket").get();case 3:a=e.sent,n(a.docs.map((function(e){return Object(O.a)({},e.data(),{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement(u.a,{style:{padding:"16px auto"}},r.a.createElement(ne,{style:{background:"#fff"}},r.a.createElement(ae,{style:{padding:"16px auto"}},r.a.createElement(F.a,{shape:"round",style:{backgroundColor:"white",margin:"16px auto"}},r.a.createElement("h4",null,"History Order")),r.a.createElement(H.a,{justify:"center"},a.map((function(e){return r.a.createElement(I.a,{title:"Ticket",style:{width:300}},r.a.createElement("p",null,"Atas nama ",r.a.createElement("b",null,e.name)),r.a.createElement("p",null,"Email : ",r.a.createElement("b",null,e.email)),r.a.createElement("p",null,"Film yang dipilih : ",r.a.createElement("b",null,e.choosenmovie)),r.a.createElement("p",null,"Total Tiket : ",r.a.createElement("b",null,e.totalticket)),r.a.createElement(Y,{ticket:e}),r.a.createElement(te,{ticket:e}," "))})))),r.a.createElement(re,{style:{backgroundColor:"white",textAlign:"center"}},"Kelompok Film \xa92020 "))))},ce=a(382),oe=(a(375),a(394)),ie=a(395),me=a(396),se=u.a.Content,ue=u.a.Header,pe=u.a.Footer,de=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=[{nama:"Ahmad Rifal",image:a(376),instagram:"https://instagram.com/rifalahmd2",twitter:"https://twitter.com/kalepalew",github:"https://github.com/regalforlyfe"},{nama:"Hani Fania N",image:a(377),instagram:"https://instagram.com/fnngrh",twitter:"https://twitter.com/lohkoqq",github:"https://github.com/fanianugroho"},{nama:"Khairunnisa",image:a(378),instagram:"https://instagram.com/khrnisaa24",twitter:"https://twitter.com/khairunnisa",github:"https://github.com/khairunnisa24"}];return r.a.createElement(u.a,{style:{padding:"16px auto"}},r.a.createElement(ue,{style:{background:"#fff"}},r.a.createElement(F.a,{shape:"round",style:{backgroundColor:"white"}},r.a.createElement("h4",null,"About Us")),r.a.createElement("h4",{class:"font"},"The Team"),r.a.createElement(se,{style:{}},r.a.createElement("div",{class:"profil"},r.a.createElement(H.a,{gutter:[32,16]},e.map((function(e){return r.a.createElement(N.a,{span:8},r.a.createElement(ce.a,{size:250,src:e.image}),r.a.createElement("h4",{class:"fontidentitas"}," ",e.nama),r.a.createElement("h3",{class:"fontcontact"}," Contact Me! ",r.a.createElement("br",null),r.a.createElement(F.a,{shape:"circle",style:{backgroundColor:"white"}},r.a.createElement("a",{href:e.instagram},r.a.createElement(oe.a,null))),r.a.createElement(F.a,{shape:"circle",style:{backgroundColor:"white"}},r.a.createElement("a",{href:e.twitter},r.a.createElement(ie.a,null))),r.a.createElement(F.a,{shape:"circle",style:{backgroundColor:"white"}},r.a.createElement("a",{href:e.github},r.a.createElement(me.a,null)))))})),r.a.createElement(N.a,{span:8})))),r.a.createElement(pe,{style:{backgroundColor:"white",textAlign:"center"}},"Kelompok Film \xa92020 ")))}}]),n}(n.Component),Ee=function(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:R}),r.a.createElement(x.a,{path:"/upcoming",component:M}),r.a.createElement(x.a,{path:"/buyNow",component:Q}),r.a.createElement(x.a,{path:"/history",component:le}),r.a.createElement(x.a,{path:"/aboutUs",component:de}))};var ge=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/Intero-Web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PUBLIC_URI},r.a.createElement(ge,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[182,1,2]]]);
//# sourceMappingURL=main.6ca25328.chunk.js.map