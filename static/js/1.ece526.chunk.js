(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4],{220:function(e,t,a){"use strict";a.r(t);a(86);var n=a(0),i=a.n(n),r=a(9),l=a(2),o=a(41);const c=i.a.lazy(()=>a.e(0).then(a.bind(null,221))),s=l.default.section`
  z-index: 996;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60vh;
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
`;t.default=Object(r.b)(e=>({logos:e.data}))(({logos:e})=>{const t=e.length;return i.a.createElement(s,{id:"card_container",className:`c${t}`},e.map(({id:e,title:t,path:a,name:n,reveal:r,hit:l})=>i.a.createElement(c,{id:e,key:e,title:t||"",logoFilePath:a||"",name:n,revealed:r,hited:l})))})},224:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a(9),o=a(82),c=a(40),s=a(2),m=a(41),d=a(8),u=a(220),f=a(125);const b=s.default.div`
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
    animation: ${m.d} 1s;
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
`;t.default=Object(l.b)(({finishAlert:e,currTimeUsed:t})=>({isVisible:e,timeUsed:t}),e=>({setFinishAlert:Object(r.a)(c.c,e)}))(({isVisible:e,setFinishAlert:t,timeUsed:a})=>{const r=Object(n.useRef)(null);return Object(n.useEffect)(()=>{e&&Object(o.disableBodyScroll)(r.current)},[e]),e?i.a.createElement(b,{ref:r},i.a.createElement("section",{className:"alert"},i.a.createElement("h1",{className:"header"},"👍👍👍"),i.a.createElement("p",{className:"content"},i.a.createElement("span",null,i.a.createElement("span",{className:"time"}," ",Object(d.a)(a)),"Greeeeeeeat Job!"),i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"mask"}),i.a.createElement(u.default,null)),i.a.createElement(f.a,{toggle:!1})),i.a.createElement("div",{className:"close",onClick:()=>{Object(o.enableBodyScroll)(r.current),t(!1)}},"x"))):null})}}]);