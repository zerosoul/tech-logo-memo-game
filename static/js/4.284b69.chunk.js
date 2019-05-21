(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{223:function(e,t,a){"use strict";a.r(t);a(87);var n=a(0),i=a.n(n),c=a(10),o=a(2),m=a(42);const l=i.a.lazy(()=>a.e(0).then(a.bind(null,224))),r=o.default.section`
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
  animation: ${m.c} 1s;
  &.c12 {
    max-width: 26rem;
  }
  &.c20 {
    max-width: 32rem;
  }
`;t.default=Object(c.b)(e=>({logos:e.data}))(({logos:e,compact:t=!1})=>{const a=e.length;return i.a.createElement(r,{id:"card_container",className:`c${a} ${t&&"compact"}`},e.map(({id:e,title:a,path:n,name:c,reveal:o,hit:m})=>i.a.createElement(l,{mini:t,id:e,key:e,title:a||"",logoFilePath:n||"",name:c,revealed:o,hited:m})))})}}]);