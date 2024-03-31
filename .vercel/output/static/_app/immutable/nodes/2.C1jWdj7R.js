import{r as ee,s as B,n as P}from"../chunks/scheduler.BvLojk_z.js";import{a as D,t as N,S as R,i as U,e as S,b as q,s as T,c as M,d as L,f as A,g as x,h as I,o as F,j as H,k as p,y as te,l as O,z as j,u as W,v as X,w as Y,n as ne,x as Z,m as G,q as se}from"../chunks/index.DXL13Q8W.js";import{g as le}from"../chunks/entry.Deq-35w1.js";function J(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function ae(s,e){D(s,1,1,()=>{e.delete(s.key)})}function oe(s,e,i,l,c,a,h,v,m,g,k,w){let o=s.length,_=a.length,u=o;const $={};for(;u--;)$[s[u].key]=u;const d=[],t=new Map,n=new Map,r=[];for(u=_;u--;){const f=w(c,a,u),b=i(f);let y=h.get(b);y?l&&r.push(()=>y.p(f,e)):(y=g(b,f),y.c()),t.set(b,d[u]=y),b in $&&n.set(b,Math.abs(u-$[b]))}const C=new Set,E=new Set;function z(f){N(f,1),f.m(v,k),h.set(f.key,f),k=f.first,_--}for(;o&&_;){const f=d[_-1],b=s[o-1],y=f.key,V=b.key;f===b?(k=f.first,o--,_--):t.has(V)?!h.has(y)||C.has(y)?z(f):E.has(V)?o--:n.get(y)>n.get(V)?(E.add(y),z(f)):(C.add(V),o--):(m(b,h),o--)}for(;o--;){const f=s[o];t.has(f.key)||m(f,h)}for(;_;)z(d[_-1]);return ee(r),d}function ie(s){let e,i,l,c=s[0].users.name+"",a,h,v,m=s[0].text+"",g,k,w,o=s[0].create_time.toLocaleString()+"",_,u,$;return{c(){e=S("div"),i=S("small"),l=q("@"),a=q(c),h=T(),v=S("p"),g=q(m),k=T(),w=S("small"),_=q(o),this.h()},l(d){e=M(d,"DIV",{class:!0});var t=L(e);i=M(t,"SMALL",{});var n=L(i);l=A(n,"@"),a=A(n,c),n.forEach(x),h=I(t),v=M(t,"P",{});var r=L(v);g=A(r,m),r.forEach(x),k=I(t),w=M(t,"SMALL",{});var C=L(w);_=A(C,o),C.forEach(x),t.forEach(x),this.h()},h(){F(e,"class","post svelte-he7upq")},m(d,t){H(d,e,t),p(e,i),p(i,l),p(i,a),p(e,h),p(e,v),p(v,g),p(e,k),p(e,w),p(w,_),u||($=te(e,"click",s[1]),u=!0)},p(d,[t]){t&1&&c!==(c=d[0].users.name+"")&&O(a,c),t&1&&m!==(m=d[0].text+"")&&O(g,m),t&1&&o!==(o=d[0].create_time.toLocaleString()+"")&&O(_,o)},i:P,o:P,d(d){d&&x(e),u=!1,$()}}}function ce(s,e,i){let{post:l}=e;const c=()=>le(`/p/${l.id}`);return s.$$set=a=>{"post"in a&&i(0,l=a.post)},[l,c]}class re extends R{constructor(e){super(),U(this,e,ce,ie,B,{post:0})}}function fe(s){let e,i=`<form method="POST" action="/?/new_post"><label>New Post
      <input name="text" placeholder="blah blah"/></label> <button>Submit</button></form>`;return{c(){e=S("div"),e.innerHTML=i,this.h()},l(l){e=M(l,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1lsplv0"&&(e.innerHTML=i),this.h()},h(){F(e,"class","svelte-he7upq")},m(l,c){H(l,e,c)},p:P,i:P,o:P,d(l){l&&x(e)}}}class he extends R{constructor(e){super(),U(this,e,null,fe,B,{})}}function K(s,e,i){const l=s.slice();return l[1]=e[i],l}function Q(s,e){let i,l,c;return l=new re({props:{post:e[1]}}),{key:s,first:null,c(){i=G(),W(l.$$.fragment),this.h()},l(a){i=G(),X(l.$$.fragment,a),this.h()},h(){this.first=i},m(a,h){H(a,i,h),Y(l,a,h),c=!0},p(a,h){e=a;const v={};h&1&&(v.post=e[1]),l.$set(v)},i(a){c||(N(l.$$.fragment,a),c=!0)},o(a){D(l.$$.fragment,a),c=!1},d(a){a&&x(i),Z(l,a)}}}function ue(s){let e,i,l="The Void",c,a,h="Refresh Page",v,m,g,k,w,o=[],_=new Map,u;g=new he({});let $=J(s[0].feed);const d=t=>t[1].id;for(let t=0;t<$.length;t+=1){let n=K(s,$,t),r=d(n);_.set(r,o[t]=Q(r,n))}return{c(){e=S("div"),i=S("h1"),i.textContent=l,c=T(),a=S("button"),a.textContent=h,v=T(),m=S("main"),W(g.$$.fragment),k=T(),w=S("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=M(t,"DIV",{});var n=L(e);i=M(n,"H1",{"data-svelte-h":!0}),j(i)!=="svelte-1673gmf"&&(i.textContent=l),c=I(n),a=M(n,"BUTTON",{onclick:!0,"data-svelte-h":!0}),j(a)!=="svelte-u4u4zh"&&(a.textContent=h),v=I(n),m=M(n,"MAIN",{});var r=L(m);X(g.$$.fragment,r),k=I(r),w=M(r,"DIV",{});var C=L(w);for(let E=0;E<o.length;E+=1)o[E].l(C);C.forEach(x),r.forEach(x),n.forEach(x),this.h()},h(){F(a,"onclick","window.location.href=window.location.href")},m(t,n){H(t,e,n),p(e,i),p(e,c),p(e,a),p(e,v),p(e,m),Y(g,m,null),p(m,k),p(m,w);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(w,null);u=!0},p(t,[n]){n&1&&($=J(t[0].feed),se(),o=oe(o,n,d,1,t,$,_,w,ae,Q,null,K),ne())},i(t){if(!u){N(g.$$.fragment,t);for(let n=0;n<$.length;n+=1)N(o[n]);u=!0}},o(t){D(g.$$.fragment,t);for(let n=0;n<o.length;n+=1)D(o[n]);u=!1},d(t){t&&x(e),Z(g);for(let n=0;n<o.length;n+=1)o[n].d()}}}function de(s,e,i){let{data:l}=e;return s.$$set=c=>{"data"in c&&i(0,l=c.data)},[l]}class ve extends R{constructor(e){super(),U(this,e,de,ue,B,{data:0})}}export{ve as component};
