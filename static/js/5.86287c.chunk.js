(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{226:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(2),s=a(9),o=a(10),c=a(40);const i=l.default.div`
  .triangle {
    margin-left: -1.4rem;
    color: #bd6565;
  }
  select {
    font-size: 1rem;
    text-transform: uppercase;
    color: #bd6565;
    border: none;
    font-weight: 600;
    background: #feeb70;
    appearance: none;
    -webkit-appearance: none;
    padding: 0.4rem 0.8rem;
    padding-right: 1.8rem;
    border-radius: 2rem;
    &[disabled] {
      color: #bba3a3;
    }
  }
`;var m=({children:e})=>n.a.createElement(i,null,e,n.a.createElement("i",{className:"triangle"},"▿"));var d=Object(s.b)(({level:e,playing:t})=>({level:e,playing:t}),e=>({setLevel:Object(o.a)(c.d,e)}))(({level:e,playing:t,setLevel:a})=>{return n.a.createElement(m,null,n.a.createElement("select",{disabled:t,onChange:e=>{const t=e.target.value;a(t)}},[1,2,3].map(t=>n.a.createElement("option",{key:t,value:t,selected:t==e},`Level ${t}`))))});var u=Object(s.b)(({sources:e,source:t,playing:a})=>({source:t,sources:e,playing:a}),e=>({setSource:Object(o.a)(c.f,e)}))(({sources:e,source:t,playing:a,setSource:r})=>{return n.a.createElement(m,null,n.a.createElement("select",{disabled:a,onChange:e=>{const t=e.target.value;r(t)}},e.map(e=>n.a.createElement("option",{key:e.key,value:e.key,selected:e.key==t},e.title))))});const p=l.default.button`
  user-select: none;
  display: block;
  /* margin: 1rem auto; */
  border: none;
  background: #ffed66;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: #ff5e5b;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 3px 0 #ff5e5b;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 0 #ff5e5b;
  }
`;var b=Object(s.b)(e=>{const{playing:t}=e;return{playing:t}},e=>({setStart:Object(o.a)(c.g,e)}))(({playing:e,setStart:t})=>{return n.a.createElement(p,{onClick:()=>{t()}},e?"reset":"start")});const g=l.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 24rem;

  margin: 2rem auto;
  margin-bottom: 1rem;
  .selects {
    display: flex;
    min-width: 16rem;
    justify-content: space-evenly;
  }
`;t.default=(()=>n.a.createElement(g,null,n.a.createElement("div",{className:"selects"},n.a.createElement(u,null),n.a.createElement(d,null)),n.a.createElement(b,null)))}}]);