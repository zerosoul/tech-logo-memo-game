(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4],{222:function(e,t,a){"use strict";a.r(t);a(87);var n=a(0),r=a.n(n),i=a(10),l=a(2),o=a(42);const c=r.a.lazy(()=>a.e(0).then(a.bind(null,223))),m=l.default.section`
  z-index: 996;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60vh;
  &.compact {
    min-height: unset;
  }
  align-content: center;
  background-color: #0001;
  max-width: 50rem;
  padding: 0.8rem 0;
  margin: 0 0.2rem;
  margin: 0 auto;
  animation-fill-mode: both;
  animation: ${o.c} 1s;
  &.c12 {
    max-width: 26rem;
  }
  &.c20 {
    max-width: 32rem;
  }
`;t.default=Object(i.b)(e=>({logos:e.data}))(({logos:e,compact:t=!1})=>{const a=e.length;return r.a.createElement(m,{id:"card_container",className:`c${a} ${t&&"compact"}`},e.map(({id:e,title:a,path:n,name:i,reveal:l,hit:o})=>r.a.createElement(c,{mini:t,id:e,key:e,title:a||"",logoFilePath:n||"",name:i,revealed:l,hited:o})))})},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a(10),o=a(83),c=a(41),m=a(2),s=a(42),d=a(5),u=a(222),p=a(126);const f=m.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #0006;
  .alert {
    /* max-width: 12rem; */
    margin: 1rem;
    background: rgb(96, 108, 136);
    padding: 1.4rem 0.4rem;
    border-radius: 0.2rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${s.d} 1s;
    .header {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 1rem;
    }
    .content {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.2;
      margin: 0 1.2rem;
      em {
        padding: 0.2rem 0.6rem;
        margin: 0 0.2rem;
        border-radius: 1rem;
        color: #333;
        font-weight: 800;
        background: #ffed66;
        opacity: 0.8;
      }
      .box {
        margin: 1rem auto;
        max-height: 60vh;
        overflow: scroll;
        position: relative;
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          z-index: 1000;
        }
      }
    }
    .close {
      position: absolute;
      top: -0.6rem;
      right: -0.6rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid #fff;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1rem;
      background: #333;
      cursor: pointer;
    }
  }
`;t.default=Object(l.b)(({finishAlert:e,currTimeUsed:t,source:a,level:n})=>({isVisible:e,timeUsed:t,source:a,level:n}),e=>({setFinishAlert:Object(i.a)(c.c,e)}))(({isVisible:e,setFinishAlert:t,timeUsed:a,source:i,level:l})=>{const c=Object(n.useRef)(null);return Object(n.useEffect)(()=>{e&&Object(o.disableBodyScroll)(c.current)},[e]),e?r.a.createElement(f,{ref:c},r.a.createElement("section",{className:"alert"},r.a.createElement("h1",{className:"header"},"👍👍👍"),r.a.createElement("p",{className:"content"},r.a.createElement("span",null,r.a.createElement("em",null,Object(d.b)(i).toUpperCase()),"at",r.a.createElement("em",null,l.toUpperCase()),"level:",r.a.createElement("em",null,Object(d.c)(a))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"mask"}),r.a.createElement(u.default,{compact:window.screen.availWidth<640})),r.a.createElement(p.a,{toggle:!1})),r.a.createElement("div",{className:"close",onClick:()=>{Object(o.enableBodyScroll)(c.current),t(!1)}},"x"))):null})}}]);