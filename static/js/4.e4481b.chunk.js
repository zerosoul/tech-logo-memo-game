(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(e,t,n){"use strict";n.r(t);n(12),n(87),n(24);var a=n(0),c=n.n(a),i=n(6),o=n(2),r=n(42);const l=c.a.lazy(()=>n.e(0).then(n.bind(null,227))),m=o.default.section`
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
  animation: ${r.c} 1s;
  &.c12 {
    max-width: 26rem;
  }
  &.c20 {
    max-width: 32rem;
  }
`;t.default=Object(i.b)(e=>({logos:e.data}))(({logos:e,compact:t=!1})=>{const n=Object(a.useRef)(null);Object(a.useEffect)(()=>{n.current&&e.length&&document.getElementById("card_container").querySelectorAll(".card")},[e]);const i=e.length;return c.a.createElement(m,{ref:n,id:"card_container",className:`c${i} ${t&&"compact"}`},e.map(({id:e,title:n,path:a,type:i,name:o,reveal:r,hit:m})=>c.a.createElement(l,{mini:t,id:e,key:`${e}-${o}`,title:n||"",logoFilePath:a||"",type:i,name:o,revealed:r,hited:m})))})}}]);