function v(){}const Et=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function J(){return Object.create(null)}function E(t){t.forEach(Q)}function F(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Nt(t){let e;return R(t,n=>e=n)(),e}function St(t,e,n){t.$$.on_destroy.push(R(e,n))}function At(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function Mt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function jt(t,e,n,i,r,u){if(r){const s=U(e,n,i,u);t.p(s,r)}}function Ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Dt(t){const e={};for(const n in t)e[n]=!0;return e}function Pt(t){return t??""}function Ot(t){return t&&F(t.destroy)?t.destroy:v}const V=typeof window<"u";let zt=V?()=>window.performance.now():()=>Date.now(),X=V?t=>requestAnimationFrame(t):v;const x=new Set;function Y(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&X(Y)}function Bt(t){let e;return x.size===0&&X(Y),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let j=!1;function lt(){j=!0}function ot(){j=!1}function ut(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:ut(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(s[c],f)}}function ft(t,e){if(j){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){j&&!n?ft(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function dt(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function qt(){return H(" ")}function Ft(){return H("")}function Ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function It(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){pt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Gt(t,e,n){return tt(t,e,n,_t)}function Jt(t,e,n){return tt(t,e,n,ht)}function yt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Kt(t){return yt(t," ")}function Qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Rt(t,e){t.value=e??""}function Ut(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Vt(t,e){return new t(e)}let N;function k(t){N=t}function C(){if(!N)throw new Error("Function called outside component initialization");return N}function Xt(t){C().$$.on_mount.push(t)}function Yt(t){C().$$.after_update.push(t)}function Zt(t){C().$$.on_destroy.push(t)}function te(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=gt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}function ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],K=[];let $=[];const L=[],et=Promise.resolve();let T=!1;function nt(){T||(T=!0,et.then(it))}function ne(){return nt(),et}function q(t){$.push(t)}function ie(t){L.push(t)}const B=new Set;let b=0;function it(){if(b!==0)return;const t=N;do{try{for(;b<w.length;){const e=w[b];b++,k(e),bt(e.$$)}}catch(e){throw w.length=0,b=0,e}for(k(null),w.length=0,b=0;K.length;)K.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];B.has(n)||(B.add(n),n())}$.length=0}while(w.length);for(;L.length;)L.pop()();T=!1,B.clear(),k(t)}function bt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function wt(t){const e=[],n=[];$.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$=e}const M=new Set;let g;function re(){g={r:0,c:[],p:g}}function se(){g.r||E(g.c),g=g.p}function rt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ce(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function le(t,e){t.d(1),e.delete(t.key)}function oe(t,e,n,i,r,u,s,o,c,l,f,_){let d=t.length,m=u.length,h=d;const D={};for(;h--;)D[t[h].key]=h;const S=[],P=new Map,O=new Map,I=[];for(h=m;h--;){const a=_(r,u,h),p=n(a);let y=s.get(p);y?i&&I.push(()=>y.p(a,e)):(y=l(p,a),y.c()),P.set(p,S[h]=y),p in D&&O.set(p,Math.abs(h-D[p]))}const W=new Set,G=new Set;function z(a){rt(a,1),a.m(o,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=S[m-1],p=t[d-1],y=a.key,A=p.key;a===p?(f=a.first,d--,m--):P.has(A)?!s.has(y)||W.has(y)?z(a):G.has(A)?d--:O.get(y)>O.get(A)?(G.add(y),z(a)):(W.add(A),d--):(c(p,s),d--)}for(;d--;){const a=t[d];P.has(a.key)||c(a,s)}for(;m;)z(S[m-1]);return E(I),S}function ue(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(Q).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),u.forEach(q)}function $t(t,e){const n=t.$$;n.fragment!==null&&(wt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,r,u,s,o=[-1]){const c=N;k(t);const l=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&vt(t,_)),d}):[],l.update(),f=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){lt();const _=mt(e.target);l.fragment&&l.fragment.l(_),_.forEach(dt)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),ot(),it()}k(c)}class _e{$destroy(){$t(this,1),this.$destroy=v}$on(e,n){if(!F(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ee as $,ie as A,Qt as B,re as C,v as D,Tt as E,At as F,jt as G,Ct as H,Mt as I,Nt as J,Rt as K,Ot as L,E as M,Ft as N,Yt as O,Ut as P,Vt as Q,st as R,_e as S,zt as T,Bt as U,Et as V,Dt as W,F as X,Zt as Y,ne as Z,te as _,qt as a,Pt as a0,ht as a1,Jt as a2,oe as a3,le as a4,Gt as b,ae as c,mt as d,_t as e,yt as f,dt as g,Kt as h,de as i,fe as j,Wt as k,Lt as l,ft as m,xt as n,Xt as o,Ht as p,It as q,rt as r,kt as s,H as t,ce as u,se as v,$t as w,St as x,K as y,ue as z};