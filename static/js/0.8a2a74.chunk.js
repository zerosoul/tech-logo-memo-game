(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,i,a){"use strict";a.r(i);a(11),a(24);var n=a(0),t=a.n(n),l=a(9),o=a(10),r=a(41),D=a(2),s=a(42),A=a(224),w=a.n(A);const h=D.default.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  &.mini {
    width: 4rem;
    height: 4rem;
    .title {
      font-size: 0.6rem;
    }
  }
  border: 1px solid #0001;
  border-radius: 0.2rem;
  background: ${({revealed:e})=>e?"none":"#fff1"};
  margin: 0.4rem;
  position: relative;
  &.inReveal {
    border-color: rgb(255, 94, 91, 0.2);
    border-width: 4px;
  }
  .title,
  .cover,
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.2rem;
    &.bounceIn {
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      animation: ${s.a} 1s;
    }
    &.fadeIn {
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      animation: ${s.b} 1s;
    }
    &.tada {
      animation-fill-mode: both;
      animation: ${s.f} 1s;
    }
  }
  .cover {
    margin: 0 auto;
    background: url(${w.a});
    width: 60%;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0008;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    user-select: none;
  }
  .logo {
    opacity: 0;
    &.visible {
      opacity: 1;
    }
    background: url(${({logoFilePath:e})=>`${e}`});
    background-color: #eee8;

    background-origin: content-box;
    padding: 1rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;let I=null;i.default=Object(l.b)(e=>{const{reveals:i,hits:a,data:n,playing:t,win:l}=e;return{win:l,reveals:i,hits:a,playing:t,total:n.length}},e=>({setReveal:Object(o.a)(r.e,e),resetReveal:Object(o.a)(r.a,e),setWin:Object(o.a)(r.i,e),setAlert:Object(o.a)(r.b,e)}))(({mini:e=!1,id:i=0,title:a="",logoFilePath:l="",reveals:o=[],hits:r=[],total:D,playing:s,setReveal:A,resetReveal:w,setAlert:g,setWin:y})=>{const[c,Q]=Object(n.useState)(!1),[b,k]=Object(n.useState)(!1);Object(n.useEffect)(()=>{k(r.includes(i)),Q(o.includes(i))},[o,r,i]);const m=c||b;return t.a.createElement(h,{revealed:c,className:`${c&&"inReveal"} ${e&&"mini"} `,onClick:()=>{if(!s||c||b)return s||g(),void clearTimeout(I);clearTimeout(I),A(i),r.length!==D?I=setTimeout(()=>{w()},6e3):y()},logoFilePath:l},!m&&t.a.createElement("p",{className:"cover fadeIn"}),m&&a?t.a.createElement("p",{className:`title ${b?"tada":"bounceIn"}`},t.a.createElement("span",null,a)):null,l?t.a.createElement("p",{className:`logo ${m&&"bounceIn visible"} ${b&&"tada"}`}):null)})},224:function(e,i){e.exports="data:image/png;base64,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"}}]);