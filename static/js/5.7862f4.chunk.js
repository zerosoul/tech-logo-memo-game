(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{225:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),o=t(9),i=t(14),s=t(40);const c=l.default.div`
  /* background: #fff; */
  select {
    font-size: 1.2rem;
    color: rgb(255, 94, 91);
    border: none;
    font-weight: 600;
    background: #feeb70;
    appearance: none;
    -webkit-appearance: none;
    padding: 0.4rem 0.8rem;
    border-radius: 2rem;
    &[disabled] {
      color: #bba3a3;
    }
  }
`;var d=Object(o.b)(({level:e,playing:a})=>({level:e,playing:a}),e=>({setLevel:Object(i.a)(s.d,e)}))(({level:e,playing:a,setLevel:t})=>{return r.a.createElement(c,null,r.a.createElement("select",{disabled:a,onChange:e=>{const a=e.target.value;t(a)}},[1,2,3].map(a=>r.a.createElement("option",{key:a,value:a,selected:a==e},`Level ${a}`))))});const b=l.default.button`
  user-select: none;
  display: block;
  margin: 1rem auto;
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
`;var p=Object(o.b)(e=>{const{playing:a,win:t}=e;return{playing:a,win:t}},e=>({setStart:Object(i.a)(s.f,e)}))(({playing:e,win:a,setStart:t})=>{return r.a.createElement(b,{onClick:()=>{t()}},e||a?"reset":"start")});const u=l.default.div`
  display: flex;
  align-items: center;
  max-width: 14rem;
  margin: 0 auto;
`;a.default=(()=>r.a.createElement(u,null,r.a.createElement(d,null),r.a.createElement(p,null)))}}]);