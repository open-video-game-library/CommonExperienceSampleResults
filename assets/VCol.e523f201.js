import"./VRow.3554a992.js";import{m as S}from"./tag.77ad8109.js";import{ab as f,h as N,c as h,D as k}from"./index.3fc05815.js";const a=["sm","md","lg","xl","xxl"],i=(()=>a.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),d=(()=>a.reduce((e,t)=>(e["offset"+f(t)]={type:[String,Number],default:null},e),{}))(),m=(()=>a.reduce((e,t)=>(e["order"+f(t)]={type:[String,Number],default:null},e),{}))(),c={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function y(e,t,r){let s=e;if(!(r==null||r===!1)){if(t){const l=t.replace(e,"");s+=`-${l}`}return e==="col"&&(s="v-"+s),e==="col"&&(r===""||r===!0)||(s+=`-${r}`),s.toLowerCase()}}const C=["auto","start","end","center","baseline","stretch"],x=N({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>C.includes(e)},...S()},setup(e,t){let{slots:r}=t;const s=h(()=>{const l=[];let o;for(o in c)c[o].forEach(n=>{const g=e[n],u=y(o,n,g);u&&l.push(u)});const b=l.some(n=>n.startsWith("v-col-"));return l.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return k(e.tag,{class:s.value},(l=r.default)==null?void 0:l.call(r))}}});export{x as V};
