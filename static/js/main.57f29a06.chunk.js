(this.webpackJsonprandom_character_creator=this.webpackJsonprandom_character_creator||[]).push([[0],[,,,,function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsAAAA7AAWrWiQkAAAFWSURBVEhLYxh5gBFK4wRqsqL/QTQXBxuYf+H2U7x68EqCDLu5ohzC4VMDU4ZBmXgNxSmBYhgyABqMz1AmKI0TMFqXoNAMn24xfPvxC8LGAgga+P9oDwpNCBA0EARAroO58Ob912AaFyA+UoAAZJhf5TyGW49f49WHF4AMBXr3/40l5f9hSQgfIMrLIKCuKApl4QcYBhqoSoNdAsNQYThAlgOphQrDAUpYgBScXzcdnDSIAljSJIoLwemLWMNAAKgWPU1iDUP1iE4oCzfApYboSCEWjGQDgenqF9biigAA6UFOr2ADQQKb2pNYQWxCmR8ZwNQC9cINBRsIyuygTA9SQGwWAwGQWvQCAyWnIDudkPeR0yFy6YMSKSAJUoombOppF8u4AMhryJgQIMqFpAQF/b1MKhg1EDW3IANc4ugAxUBoIQHOdsiFBC5xbABnXiYGYKZNBgYAJp2kX3h2y+IAAAAASUVORK5CYII="},,,,,,function(e,n,t){},,function(e,n,t){var a={"./Body/0.png":[14,4],"./Body/1.png":[15,5],"./Body/2.png":[16,6],"./Body/3.png":[17,7],"./Body/4.png":[18,8],"./Body/5.png":[19,9],"./Body/6.png":[20,10],"./Body/7.png":[21,11],"./Body/BaseSigmojiBody.png":[22,12],"./Feet/0.png":[23,13],"./Feet/1.png":[24,14],"./Feet/2.png":[25,15],"./Feet/3.png":[26,16],"./Feet/4.png":[27,17],"./Feet/5.png":[28,18],"./Feet/BaseSigmojiFeet.png":[29,19],"./Head/0.png":[30,20],"./Head/1.png":[31,21],"./Head/2.png":[32,22],"./Head/3.png":[33,23],"./Head/4.png":[34,24],"./Head/5.png":[35,25],"./Head/6.png":[36,26],"./Head/7.png":[37,27],"./Head/8.png":[38,28],"./Head/BaseSigmojiHead.png":[39,29],"./Legs/0.png":[40,30],"./Legs/1.png":[41,31],"./Legs/2.png":[42,32],"./Legs/3.png":[43,33],"./Legs/4.png":[44,34],"./Legs/5.png":[45,35],"./Legs/BaseSigmojiLegs.png":[46,36],"./basesigmoji.png":[4]};function o(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(a)},o.id=12,e.exports=o},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(5),g=t.n(r),c=t(2),A=(t(10),t(4)),i=t(1);var d=function(){var e=Object(a.useRef)(void 0),n=Object(a.useState)(0),o=Object(c.a)(n,2),r=o[0],g=o[1],d=Object(a.useState)(0),s=Object(c.a)(d,2),p=s[0],h=s[1],u=Object(a.useState)(!1),f=Object(c.a)(u,2),B=f[0],b=f[1],j=function(){var n=e.current,t=n.getContext("2d");t.clearRect(0,0,n.width,n.height);var a=new Image;a.src=A.default,a.onload=function(){var e=t.canvas.width/2-a.width/2;g(e);var n=t.canvas.height/2-a.height/2;h(n),t.drawImage(a,e,n)}};Object(a.useEffect)(j,[]);var l=function(n,a,o,g){var c,A,i=e.current.getContext("2d");t(12)("./".concat(n,"/").concat((c=0,A=a,c=Math.ceil(c),A=Math.floor(A),Math.floor(Math.random()*(A-c+1))+c),".png")).then((function(e){var n=new Image;n.src=e.default,n.onload=function(){return i.drawImage(n,r+o,p+g)}}))};return Object(i.jsxs)("div",{id:"App",children:[Object(i.jsx)("h1",{id:"header",children:"Random Character Generator!"}),Object(i.jsx)("h3",{id:"authors",children:"Made with \u2764\ufe0f by Johnny and Colin "}),Object(i.jsx)("canvas",{ref:e,id:"character",width:"64",height:"64 "}),Object(i.jsx)("button",{id:"generate_btn",onClick:function(){B||(b(!0),j(),l("Head",8,2,-3),l("Legs",5,3,21),l("Body",7,-6,11),l("Feet",5,0,31),b(!1))},disabled:!!B,children:"Generate!"})]})},s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,g=n.getTTFB;t(e),a(e),o(e),r(e),g(e)}))};g.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),s()}],[[13,1,2]]]);
//# sourceMappingURL=main.57f29a06.chunk.js.map