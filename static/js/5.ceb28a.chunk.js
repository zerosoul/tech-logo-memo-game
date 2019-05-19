(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a(9),c=a(10),s=a(40);const i=l.default.div`
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
    padding: 0.4rem 1rem;
    padding-right: 1.8rem;
    border-radius: 2rem;
    &[disabled] {
      color: #bba3a3;
    }
  }
`;var m=({children:e})=>r.a.createElement(i,null,e,r.a.createElement("i",{className:"triangle"},"▿"));var d=Object(o.b)(({level:e,playing:t})=>({level:e,playing:t}),e=>({setLevel:Object(c.a)(s.d,e)}))(({level:e,playing:t,setLevel:a})=>{return r.a.createElement(m,null,r.a.createElement("select",{disabled:t,onChange:e=>{const t=e.target.value;a(t)}},[1,2,3].map(t=>r.a.createElement("option",{key:t,value:t,selected:t==e},`Level${t}`))))});var u=Object(o.b)(({sources:e,source:t,playing:a})=>({source:t,sources:e,playing:a}),e=>({setSource:Object(c.a)(s.f,e)}))(({sources:e,source:t,playing:a,setSource:n})=>{return r.a.createElement(m,null,r.a.createElement("select",{disabled:a,onChange:e=>{const t=e.target.value;n(t)}},e.map(e=>r.a.createElement("option",{key:e.key,value:e.key,selected:e.key==t},e.title))))}),p=a(126);const b=l.default.button`
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
`;var g=Object(o.b)(e=>{const{playing:t}=e;return{playing:t}},e=>({setStart:Object(c.a)(s.g,e)}))(({playing:e,setStart:t})=>{return r.a.createElement(b,{onClick:()=>{t(),e||Object(p.a)(document.getElementById("card_container"),{behavior:"smooth"})}},e?"reset":"start")});const f=l.default.div`
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
`;t.default=(()=>r.a.createElement(f,{id:"opt_container"},r.a.createElement("div",{className:"selects"},r.a.createElement(u,null),r.a.createElement(d,null)),r.a.createElement(g,null)))}}]);