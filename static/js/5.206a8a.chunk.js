(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{229:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(2),o=a(10),c=a(11),s=a(9),i=a(41);const m=l.default.div`
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
`;var d=({children:e})=>n.a.createElement(m,null,e,n.a.createElement("i",{className:"triangle"},"▿"));var u=Object(o.b)(({level:e,playing:t})=>({level:e,playing:t}),e=>({setLevel:Object(c.a)(i.d,e)}))(({level:e,playing:t,setLevel:a})=>{return n.a.createElement(d,null,n.a.createElement("select",{disabled:t,onChange:e=>{const t=e.target.value;a(t)}},Object.keys(s.a).map(t=>n.a.createElement("option",{key:t,value:t,selected:t==e},t.toUpperCase()))))});var p=Object(o.b)(({sources:e,source:t,playing:a})=>({source:t,sources:e,playing:a}),e=>({setSource:Object(c.a)(i.f,e)}))(({sources:e,source:t,playing:a,setSource:r})=>{return n.a.createElement(d,null,n.a.createElement("select",{disabled:a,onChange:e=>{const t=e.target.value;r(t)}},e.map(e=>n.a.createElement("option",{key:e.key,value:e.key,selected:e.key==t},e.title.toUpperCase()))))}),b=a(127);const g=l.default.button`
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
  transition: all 300ms ease;
  cursor: pointer;
  &:active {
    transform: translateY(4px);
    box-shadow: 0 0 0 #ff5e5b;
  }
`;var f=Object(o.b)(e=>{const{playing:t}=e;return{playing:t}},e=>({setStart:Object(c.a)(i.g,e)}))(({playing:e,setStart:t})=>{return n.a.createElement(g,{onClick:()=>{t(),e||Object(b.a)(document.getElementById("card_container"),{behavior:"smooth"})}},e?"reset":"start")});const y=l.default.div`
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
`;t.default=(()=>n.a.createElement(y,{id:"opt_container"},n.a.createElement("div",{className:"selects"},n.a.createElement(p,null),n.a.createElement(u,null)),n.a.createElement(f,null)))}}]);