(this.webpackJsonpmainsite=this.webpackJsonpmainsite||[]).push([[0],{18:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i,c,a,r,o,s,l,j,d,u,b=n(0),h=n.n(b),O=n(26),g=n.n(O),m=(n(18),n(3)),p=n(2),x=n(4),v=(n(35),n(1)),f=Object(b.createContext)(),w=function(e){var t=Object(b.useState)([{title:"What Is News?",date:"[2020]",brief:" Extracting the most shared articles on various social platforms to see how they compare at face value. ",description:"A poetic approach to web-design by visualizing data in a creative coding enviroment using p5 library. As well to combine the React declarative programming approach and imperative one for direct DOM manipulation. ",image:"/assets/images/whatisnews.gif",details:"https://michaelrodriguez23.github.io/WhatIsNews/",video:"https://www.youtube.com/watch?v=PqZC-vKCedg",isOver:!1}]),n=Object(p.a)(t,2),i=n[0],c=n[1];return Object(v.jsx)(f.Provider,{value:[i,c],children:e.children})},k=Object(b.createContext)(),y=function(e){var t=Object(b.useState)([{title:"",date:"",brief:"",description:"",details:"",image:"",video:""}]),n=Object(p.a)(t,2),i=n[0],c=n[1];return Object(v.jsxs)(k.Provider,{value:[i,c],children:[e.children," "]})},M=n(11),C=n(12),L=n(15),S=n(14),z=n(27),E=n.n(z),W=function(e){Object(L.a)(n,e);var t=Object(S.a)(n);function n(e){var i;return Object(M.a)(this,n),(i=t.call(this,e)).Sketch=function(e){var t,n;e.setup=function(){e.createCanvas(e.windowWidth/2.59,e.windowHeight/1.58),t=e.loadImage("https://i.ibb.co/qBSQGyR/selfie.jpg"),n=e.loadImage("https://i.ibb.co/Wxt1G5P/100.png")},e.draw=function(){e.resizeCanvas(e.windowWidth/2.59,e.windowHeight/1.58,e.WEBGL),e.background(0),e.noCursor(),e.imageMode(e.CORNERS),e.tint(e.mouseY,e.mouseY,e.MouseX),e.mouseX<e.windowWidth/6?e.image(n,e.mouseX,e.mouseY,300,300):e.image(t,e.mouseX,e.mouseY,300,300)}},i.myRef=h.a.createRef(),i}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new E.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return Object(v.jsx)("div",{id:"canvasWrapper",ref:this.myRef,children:Object(v.jsxs)("h1",{className:"App-title",children:[" ",this.props.title," "]})})}}]),n}(h.a.Component),F=function(){var e=Object(b.useContext)(f),t=Object(p.a)(e,2),n=(t[0],t[1],Object(b.useContext)(k)),i=Object(p.a)(n,2),c=i[0];i[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(A,{children:c.map((function(e,t){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsx)("h4",{children:e.date}),Object(v.jsx)(N,{children:Object(v.jsx)("p",{children:e.brief})}),e.image?Object(v.jsx)("img",{src:""+e.image}):null,Object(v.jsx)(P,{children:Object(v.jsxs)("a",{href:e.details,children:[e.details," "]})}),Object(v.jsx)(R,{children:Object(v.jsx)("p",{children:e.description})})]})}))})})},A=x.a.div(i||(i=Object(m.a)(["\ntext-align: center;\npadding:1em;\nbackground: black;\nfont-size:1em;\nheight:101vh;\nmargin:0;\ncolor:white;\n@media (max-width: 768px) { \n  text-align: center;\npadding:1em;\nbackground: black;\nfont-size:.4em;\npadding:1em;\nheight:50vh;\nwidth:90vw;\nmargin:0;\ncolor:white;\n }\n"]))),R=x.a.h1(c||(c=Object(m.a)(["\ntext-align: center;\nmargin:0;\nfont-size:1.5em;\npadding-top:1em;\nbackground-color:black;\ncolor:white;\n"]))),N=x.a.p(a||(a=Object(m.a)(["\n\npadding-top:.5em;\ntext-align: center;\nmargin:0;\nfont-size:1.3em !important;\nbackground-color:black;\ncolor:white;\n"]))),P=x.a.a(r||(r=Object(m.a)(["\ntext-align: right;\nfont-size:1em;\npadding:0em;\nbackground-color:black;\ncolor:white;\n"]))),I=n(61);n(25);function Y(e){e.target.style.background="#FAFAFA",e.target.style.color="black"}function B(e){e.target.style.background="black",e.target.style.color="white"}var D,X,G,Q,T,q,H="Tinkerer of many things  ",J=x.a.div(o||(o=Object(m.a)(["\nbackground-color:black;\nalign-items:center;\nheight:101vh;\n\nmargin:0;\n"]))),K=x.a.div(s||(s=Object(m.a)(["\nheight:100vh;\n\n"]))),Z=(x.a.div(l||(l=Object(m.a)(["\nbox-sizing: border-box;\nmargin:0;\n"]))),x.a.h1(j||(j=Object(m.a)(["\nmargin:0;\nfont-size:1em;\npadding-top:2%;\nbackground-color:black;\ntext-align: center;\ncolor:white;\n\n"])))),U=(x.a.div(d||(d=Object(m.a)(["\nmargin:0;\nfont-size:.5em;\nbackground-color:black;\ntext-align: center;\ncolor:white;\n"]))),x.a.p(u||(u=Object(m.a)(["\nfont-size:.5em;\npadding: .5em;\ntext-align:center;\ncolor:white;\n\n"])))),V=function(){var e=Object(b.useContext)(f),t=Object(p.a)(e,2),n=t[0],i=(t[1],Object(b.useContext)(k)),c=Object(p.a)(i,2),a=(c[0],c[1]),r=Object(b.useState)([{type:"email",hyperLink:"mailto:vejigante@protonmail.com",isOver:!1},{type:"github",hyperLink:"https://github.com/michaelrodriguez23",isOver:!1},{type:"blog",hyperLink:"https://galaxybrain.blot.im/",isOver:!1},{type:"instagram",hyperLink:"https://www.instagram.com/michael.elijah.cloud.content/",isOver:!1},{type:"are.na",hyperLink:"https://www.are.na/miguelito/high-tech-low-life-adda3vjovvi",isOver:!1}]),o=Object(p.a)(r,2),s=o[0],l=(o[1],h.a.useState(!0)),j=Object(p.a)(l,2),d=(j[0],j[1],h.a.useState(!0)),u=Object(p.a)(d,2),O=u[0],g=u[1],m=h.a.useState(!1),x=Object(p.a)(m,2),w=x[0],y=x[1],M=h.a.useState(!1),C=Object(p.a)(M,2),L=C[0],S=C[1],z=h.a.useState(!1),E=Object(p.a)(z,2);E[0],E[1];return Object(v.jsx)(I.a,{children:Object(v.jsx)(J,{children:Object(v.jsxs)(K,{children:[Object(v.jsx)(Z,{onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g(!0)},onMouseOver:B,children:Object(v.jsx)("h1",{children:"Michael Elijah"})}),Object(v.jsx)(U,{children:O?null:Object(v.jsx)("p",{children:H})}),Object(v.jsxs)(Z,{onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},children:[Object(v.jsx)("p",{children:"work \ud83d\udd28"}),w?Object(v.jsx)("ul",{children:n.map((function(e,t){return Object(v.jsxs)("li",{onMouseOver:Y,onMouseLeave:B,onClick:function(t){return function(e,t,n){a((function(e){return[{title:t.title,date:t.date,brief:t.brief,description:t.description,image:t.image,details:t.details,alt:t.alt,video:t.video}]}))}(0,e)},children:[e.title," ",e.date]})}))}):null]}),Object(v.jsxs)(Z,{onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:[Object(v.jsx)("p",{children:"network \ud83d\udce1"}),L?Object(v.jsx)("ul",{children:s.map((function(e){return Object(v.jsx)("a",{href:e.hyperLink,children:Object(v.jsx)("li",{onMouseOver:Y,onMouseLeave:B,children:e.type})})}))}):null]}),Object(v.jsx)(F,{}),Object(v.jsx)(Z,{})]})})})},$=n(62),_=n(63),ee=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(w,{children:Object(v.jsx)(y,{children:Object(v.jsx)(I.a,{fluid:!0,children:Object(v.jsxs)($.a,{children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(le,{})}),Object(v.jsx)(_.a,{children:Object(v.jsx)(F,{})})]})})})})})},te=function(e){Object(L.a)(n,e);var t=Object(S.a)(n);function n(){var e;return Object(M.a)(this,n),(e=t.call(this)).mediaQuery={desktop:1200,tablet:768,phone:576},e.state={windowWidth:document.body.clientWidth},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({windowWidth:document.body.clientWidth})}))}},{key:"render",value:function(){var e=this.state.windowWidth>this.mediaQuery.tablet?Object(v.jsx)(ee,{children:" "}):Object(v.jsx)(V,{children:" "});return Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:e})})}}]),n}(b.Component);function ne(e){e.target.style.background="#FAFAFA",e.target.style.color="black"}function ie(e){e.target.style.background="black",e.target.style.color="white"}var ce="NYC  [vejigante@protonmail.com]",ae=x.a.div(D||(D=Object(m.a)(["\nbackground-color:black;\nalign-items:center;\nheight:101vh;\nmargin:0;\n"]))),re=x.a.div(X||(X=Object(m.a)(["\nheight:100vh;\n\n"]))),oe=(x.a.div(G||(G=Object(m.a)(["\nbox-sizing: border-box;\nmargin:0;\n"]))),x.a.h2(Q||(Q=Object(m.a)(["\nmargin:0;\nfont-size:1.5em;\npadding-top:2%;\nbackground-color:black;\ntext-align: center;\ncolor:white;\n\n"])))),se=(x.a.div(T||(T=Object(m.a)(["\nmargin:0;\nfont-size:1em;\nbackground-color:black;\ntext-align: center;\ncolor:white;\n"]))),x.a.p(q||(q=Object(m.a)(["\nfont-size:1em;\npadding: .5em;\ntext-align:center;\ncolor:white;\n"])))),le=function(){var e=Object(b.useContext)(f),t=Object(p.a)(e,2),n=t[0],i=(t[1],Object(b.useContext)(k)),c=Object(p.a)(i,2),a=(c[0],c[1]),r=Object(b.useState)([{type:"email",hyperLink:"mailto:vejigante@protonmail.com",isOver:!1},{type:"github",hyperLink:"https://github.com/michaelrodriguez23",isOver:!1},{type:"blog",hyperLink:"https://galaxybrain.blot.im/",isOver:!1},{type:"instagram",hyperLink:"https://www.instagram.com/michael.elijah.cloud.content/",isOver:!1},{type:"are.na",hyperLink:"https://www.are.na/miguelito/high-tech-low-life-adda3vjovvi",isOver:!1}]),o=Object(p.a)(r,2),s=o[0],l=(o[1],h.a.useState(!0)),j=Object(p.a)(l,2),d=(j[0],j[1],h.a.useState(!1)),u=Object(p.a)(d,2),O=u[0],g=u[1],m=h.a.useState(!1),x=Object(p.a)(m,2),w=x[0],y=x[1],M=h.a.useState(!1),C=Object(p.a)(M,2),L=C[0],S=C[1],z=h.a.useState(!1),E=Object(p.a)(z,2);E[0],E[1];return Object(v.jsx)(I.a,{children:Object(v.jsx)(ae,{children:Object(v.jsxs)(re,{children:[Object(v.jsx)(oe,{onMouseEnter:function(){return g(!O)},onClick:function(){return g(!O)},onMouseOver:ie,children:Object(v.jsx)("h1",{children:"Michael Elijah"})}),Object(v.jsx)(se,{children:O?Object(v.jsxs)("p",{children:[" ",ce," "]}):null}),Object(v.jsxs)(oe,{onMouseEnter:function(){return y(!w)},onClick:function(){return y(w)},onMouseLeave:function(){return y(!1)},children:[Object(v.jsx)("p",{children:"work \ud83d\udd28"}),w?Object(v.jsx)("ul",{children:n.map((function(e,t){return Object(v.jsxs)("li",{onMouseOver:ne,onMouseLeave:ie,onClick:function(t){return function(e,t,n){a((function(e){return[{title:t.title,date:t.date,brief:t.brief,description:t.description,image:t.image,details:t.details,alt:t.alt,video:t.video}]}))}(0,e)},children:[e.title," ",e.date]})}))}):null]}),Object(v.jsxs)(oe,{onMouseEnter:function(){return S(!L)},onClick:function(){return S(!L)},onMouseLeave:function(){return S(!L)},children:[Object(v.jsx)("p",{children:"network \ud83d\udce1"}),L?Object(v.jsx)("ul",{children:s.map((function(e){return Object(v.jsx)("a",{href:e.hyperLink,children:Object(v.jsx)("li",{onMouseOver:ne,onMouseLeave:ie,children:e.type})})}))}):null]}),Object(v.jsx)(oe,{}),Object(v.jsx)(W,{})]})})})},je=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(w,{children:Object(v.jsx)(y,{children:Object(v.jsx)(te,{children:Object(v.jsx)(I.a,{fluid:!0,children:Object(v.jsxs)($.a,{children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(le,{})}),Object(v.jsx)(_.a,{children:Object(v.jsx)(F,{})})]})})})})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};g.a.render(Object(v.jsx)(h.a.StrictMode,{children:Object(v.jsx)(je,{})}),document.getElementById("root")),de()}},[[60,1,2]]]);
//# sourceMappingURL=main.f2219c24.chunk.js.map