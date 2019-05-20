(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4],{222:function(e,t,a){"use strict";a.r(t);a(87);var i=a(0),n=a.n(i),r=a(9),o=a(2),l=a(42);const c=n.a.lazy(()=>a.e(0).then(a.bind(null,223))),m=o.default.section`
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
  animation: ${l.c} 1s;
  &.c12 {
    max-width: 26rem;
  }
  &.c20 {
    max-width: 32rem;
  }
`;t.default=Object(r.b)(e=>({logos:e.data}))(({logos:e,compact:t=!1})=>{const a=e.length;return n.a.createElement(m,{id:"card_container",className:`c${a} ${t&&"compact"}`},e.map(({id:e,title:a,path:i,name:r,reveal:o,hit:l})=>n.a.createElement(c,{mini:t,id:e,key:e,title:a||"",logoFilePath:i||"",name:r,revealed:o,hited:l})))})},226:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(10),o=a(9),l=a(83),c=a(41),m=a(2),s=a(42),d=a(5),u=a(222),f=a(126);const p=m.default.div`
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
      .time {
        padding: 0 0.4rem;
        font-weight: 800;
        font-size: 1.2rem;
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
`;t.default=Object(o.b)(({finishAlert:e,currTimeUsed:t})=>({isVisible:e,timeUsed:t}),e=>({setFinishAlert:Object(r.a)(c.c,e)}))(({isVisible:e,setFinishAlert:t,timeUsed:a})=>{const r=Object(i.useRef)(null);return Object(i.useEffect)(()=>{e&&Object(l.disableBodyScroll)(r.current)},[e]),e?n.a.createElement(p,{ref:r},n.a.createElement("section",{className:"alert"},n.a.createElement("h1",{className:"header"},"👍👍👍"),n.a.createElement("p",{className:"content"},n.a.createElement("span",null,n.a.createElement("span",{className:"time"}," ",Object(d.b)(a)),"Greeeeeeeat Job!"),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"mask"}),n.a.createElement(u.default,{compact:window.screen.availWidth<640})),n.a.createElement(f.a,{toggle:!1})),n.a.createElement("div",{className:"close",onClick:()=>{Object(l.enableBodyScroll)(r.current),t(!1)}},"x"))):null})}}]);