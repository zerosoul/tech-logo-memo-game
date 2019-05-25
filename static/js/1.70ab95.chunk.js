(window.webpackJsonp=window.webpackJsonp||[]).push([[1,3],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),l=a(2),c=a(25);const o=r.a.lazy(()=>a.e(0).then(a.bind(null,137))),m=l.default.section`
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
  animation: ${c.c} 1s;
  &.c12 {
    max-width: 26rem;
  }
  &.c20 {
    max-width: 32rem;
  }
`;t.default=Object(i.b)(e=>({logos:e.data}))(({logos:e,compact:t=!1})=>{const a=Object(n.useRef)(null);Object(n.useEffect)(()=>{a.current&&e.length&&document.getElementById("card_container").querySelectorAll(".card")},[e]);const i=e.length;return r.a.createElement(m,{ref:a,id:"card_container",className:`c${i} ${t&&"compact"}`},e.map(({id:e,title:a,path:n,type:i,name:l,reveal:c,hit:m})=>r.a.createElement(o,{mini:t,id:e,key:`${e}-${l}`,title:a||"",logoFilePath:n||"",type:i,name:l,revealed:c,hited:m})))})},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a(5),c=a(47),o=a(15),m=a(2),s=a(25),d=a(3),u=a(136),f=a(65);const g=m.default.div`
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
`;t.default=Object(l.b)(({finishAlert:e,currTimeUsed:t,source:a,level:n,lang:r})=>({isVisible:e,timeUsed:t,source:a,level:n,lang:r}),e=>({setFinishAlert:Object(i.a)(o.c,e)}))(({isVisible:e,setFinishAlert:t,timeUsed:a,source:i,level:l,lang:o})=>{const m=Object(n.useRef)(null);return Object(n.useEffect)(()=>{e&&Object(c.disableBodyScroll)(m.current)},[e]),e?r.a.createElement(g,{ref:m},r.a.createElement("section",{className:"alert"},r.a.createElement("h1",{className:"header"},"👍👍👍"),r.a.createElement("p",{className:"content"},r.a.createElement("span",null,r.a.createElement("em",null,o.srcs[i]),"+",r.a.createElement("em",null,o.levels[l]),":",r.a.createElement("em",null,Object(d.c)(a))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"mask"}),r.a.createElement(u.default,{compact:window.screen.availWidth<640})),r.a.createElement(f.a,{toggle:!1})),r.a.createElement("div",{className:"close",onClick:()=>{Object(c.enableBodyScroll)(m.current),t(!1)}},"x"))):null})}}]);