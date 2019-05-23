(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{233:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),s=t(6),c=t(10),o=t(5),p=t(25),i=t(88);var y=Object(s.b)(({level:e,playing:a,lang:t})=>({level:e,playing:a,lang:t}),e=>({setLevel:Object(c.a)(p.e,e)}))(({level:e,playing:a,setLevel:t,lang:l})=>{return n.a.createElement(i.a,null,n.a.createElement("select",{disabled:a,onChange:e=>{const a=e.target.value;t(a)}},Object.keys(o.b).map(a=>n.a.createElement("option",{key:a,value:a,selected:a==e},l.levels[a]))))});var u=Object(s.b)(({sources:e,source:a,playing:t,lang:l})=>({source:a,sources:e,playing:t,lang:l}),e=>({setSource:Object(c.a)(p.h,e)}))(({sources:e,source:a,playing:t,setSource:l,lang:r})=>{return n.a.createElement(i.a,null,n.a.createElement("select",{disabled:t,onChange:e=>{const a=e.target.value;l(a)}},e.map(e=>n.a.createElement("option",{key:e.key,value:e.key,selected:e.key==a},r.srcs[e.key]))))});var m=Object(s.b)(({playTypes:e,playType:a,playing:t,lang:l})=>({playType:a,playTypes:e,playing:t,lang:l}),e=>({setPlayType:Object(c.a)(p.f,e)}))(({playTypes:e,playType:a,playing:t,setPlayType:l,lang:r})=>{return n.a.createElement(i.a,null,n.a.createElement("select",{disabled:t,onChange:e=>{const a=e.target.value;l(a)}},e.map(e=>n.a.createElement("option",{key:e.key,value:e.key,selected:e.key==a},r.playtypes[e.key]))))}),g=t(128);const d=r.default.button`
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
`;var b=Object(s.b)(e=>{const{playing:a,lang:t}=e;return{playing:a,lang:t}},e=>({setStart:Object(c.a)(p.i,e)}))(({playing:e,setStart:a,lang:t})=>{return n.a.createElement(d,{onClick:()=>{a(),e||Object(g.a)(document.getElementById("card_container"),{behavior:"smooth"})}},e?t.restart:t.start)});const v=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 26rem;

  margin: 2rem auto;
  margin-bottom: 1rem;
  .selects {
    display: flex;
    width: 18rem;
    justify-content: space-evenly;
  }
`;a.default=(()=>n.a.createElement(v,{id:"opt_container"},n.a.createElement("div",{className:"selects"},n.a.createElement(m,null),n.a.createElement(u,null),n.a.createElement(y,null)),n.a.createElement(b,null)))}}]);