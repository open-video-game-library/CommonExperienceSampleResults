import{p as ne,i as Z,c as r,r as A,a as z,g as ae,o as D,b as R,d as se,f as le,e as ue,h as F,j as b,k as ie,l as K,m as X,w as U,n as re,q as ce,u as ve}from"./index.7e6e9181.js";import{u as pe,m as de,a as W}from"./tag.ba67aba5.js";const O=Symbol.for("vuetify:layout"),fe=Symbol.for("vuetify:layout-item"),N=1e3,me=ne({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function ye(){const t=Z(O);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}const ge=(t,c,a,s)=>{let l={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...l}}];for(const i of t){const f=c.get(i),y=a.get(i),_=s.get(i);if(!f||!y||!_)continue;const g={...l,[f.value]:parseInt(l[f.value],10)+(_.value?parseInt(y.value,10):0)};u.push({id:i,layer:g}),l=g}return u};function he(t){const c=Z(O,null),a=r(()=>c?c.rootZIndex.value-100:N),s=A([]),l=z(new Map),u=z(new Map),i=z(new Map),f=z(new Map),y=z(new Map),{resizeRef:_,contentRect:g}=pe(),Y=r(()=>{var e;const o=new Map,v=(e=t.overlaps)!=null?e:[];for(const m of v.filter(n=>n.includes(":"))){const[n,p]=m.split(":");if(!s.value.includes(n)||!s.value.includes(p))continue;const h=l.get(n),$=l.get(p),S=u.get(n),L=u.get(p);!h||!$||!S||!L||(o.set(p,{position:h.value,amount:parseInt(S.value,10)}),o.set(n,{position:$.value,amount:-parseInt(L.value,10)}))}return o}),x=r(()=>{const o=[...new Set([...i.values()].map(e=>e.value))].sort((e,m)=>e-m),v=[];for(const e of o){const m=s.value.filter(n=>{var p;return((p=i.get(n))==null?void 0:p.value)===e});v.push(...m)}return ge(v,l,u,f)}),P=r(()=>!Array.from(y.values()).some(o=>o.value)),I=r(()=>x.value[x.value.length-1].layer),G=r(()=>({"--v-layout-left":R(I.value.left),"--v-layout-right":R(I.value.right),"--v-layout-top":R(I.value.top),"--v-layout-bottom":R(I.value.bottom),...P.value?void 0:{transition:"none"}})),w=r(()=>x.value.slice(1).map((o,v)=>{let{id:e}=o;const{layer:m}=x.value[v],n=u.get(e),p=l.get(e);return{id:e,...m,size:Number(n.value),position:p.value}})),T=o=>w.value.find(v=>v.id===o),k=ae("createLayout"),H=A(!1);D(()=>{H.value=!0}),se(O,{register:(o,v)=>{let{id:e,order:m,position:n,layoutSize:p,elementSize:h,active:$,disableTransitions:S,absolute:L}=v;i.set(e,m),l.set(e,n),u.set(e,p),f.set(e,$),S&&y.set(e,S);const E=le(fe,k==null?void 0:k.vnode).indexOf(o);E>-1?s.value.splice(E,0,e):s.value.push(e);const j=r(()=>w.value.findIndex(V=>V.id===e)),C=r(()=>a.value+x.value.length*2-j.value*2),ee=r(()=>{const V=n.value==="left"||n.value==="right",M=n.value==="right",oe=n.value==="bottom",q={[n.value]:0,zIndex:C.value,transform:`translate${V?"X":"Y"}(${($.value?0:-110)*(M||oe?-1:1)}%)`,position:L.value||a.value!==N?"absolute":"fixed",...P.value?void 0:{transition:"none"}};if(!H.value)return q;const d=w.value[j.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const B=Y.value.get(e);return B&&(d[B.position]+=B.amount),{...q,height:V?`calc(100% - ${d.top}px - ${d.bottom}px)`:h.value?`${h.value}px`:void 0,left:M?void 0:`${d.left}px`,right:M?`${d.right}px`:void 0,top:n.value!=="bottom"?`${d.top}px`:void 0,bottom:n.value!=="top"?`${d.bottom}px`:void 0,width:V?h.value?`${h.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),te=r(()=>({zIndex:C.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:te,zIndex:C}},unregister:o=>{i.delete(o),l.delete(o),u.delete(o),f.delete(o),y.delete(o),s.value=s.value.filter(v=>v!==o)},mainRect:I,mainStyles:G,getLayoutItem:T,items:w,layoutRect:g,rootZIndex:a});const J=r(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),Q=r(()=>({zIndex:a.value,position:c?"relative":void 0,overflow:c?"hidden":void 0}));return{layoutClasses:J,layoutStyles:Q,getLayoutItem:T,items:w,layoutRect:g,layoutRef:_}}function _e(){const t=A(!1);return D(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:r(()=>t.value?void 0:{transition:"none !important"}),isBooted:ue(t)}}const be=F({name:"VMain",props:{scrollable:Boolean,...de({tag:"main"})},setup(t,c){let{slots:a}=c;const{mainStyles:s}=ye(),{ssrBootStyles:l}=_e();return W(()=>{var u,i;return b(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[s.value,l.value]},{default:()=>[t.scrollable?b("div",{class:"v-main__scroller"},[(u=a.default)==null?void 0:u.call(a)]):(i=a.default)==null?void 0:i.call(a)]})}),{}}}),xe={__name:"View",setup(t){return(c,a)=>{const s=ie("router-view");return K(),X(be,null,{default:U(()=>[b(s)]),_:1})}}};const Ie=F({name:"VApp",props:{...me({fullHeight:!0}),...re()},setup(t,c){let{slots:a}=c;const s=ce(t),{layoutClasses:l,layoutStyles:u,getLayoutItem:i,items:f,layoutRef:y}=he(t),{rtlClasses:_}=ve();return W(()=>{var g;return b("div",{ref:y,class:["v-application",s.themeClasses.value,l.value,_.value],style:u.value},[b("div",{class:"v-application__wrap"},[(g=a.default)==null?void 0:g.call(a)])])}),{getLayoutItem:i,items:f,theme:s}}}),Ve={__name:"Default",setup(t){return(c,a)=>(K(),X(Ie,null,{default:U(()=>[b(xe)]),_:1}))}};export{Ve as default};