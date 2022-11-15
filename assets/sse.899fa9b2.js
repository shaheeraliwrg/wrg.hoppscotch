import{_ as h}from"./utils.5b7de8f5.js";import{d as A,W as P,_ as N}from"./regex.77dda101.js";import{f as C,E as G,at as I,au as m,de as V,df as O,V as B,j as M,X as U,ap as K,dg as f,ay as W,o as j,c as z,w as y,e as l,k as b,v as _,l as e,a1 as E,N as H,m as g,t as X,a as T,a5 as q,aG as F,dh as J,di as Q,dj as Y,dk as Z,dl as ee,dm as se,dn as te}from"./index.da852b2b.js";import"./Tab.vue_vue_type_script_setup_true_lang.102aabf3.js";import"./lens-actions.ab74dd36.js";import"./json.52e7e427.js";import"./newOutline.411c7af1.js";import"./date.bdfa601e.js";const oe={class:"sticky top-0 z-10 flex flex-shrink-0 p-4 overflow-x-auto space-x-2 bg-primary"},ae={class:"inline-flex flex-1 space-x-2"},re={class:"flex flex-1"},ne=["placeholder","disabled"],le={for:"event-type",class:"px-4 py-2 font-semibold truncate border-t border-b bg-primaryLight border-divider text-secondaryLight"},ie=["disabled"],be=C({__name:"sse",setup(de){const t=G(),v=q(),{subscribeToStream:x}=I(),d=m(O,new V,J),r=B(d.value.connectionState$,"STOPPED"),o=m(Y,"",Q),c=m(ee,"",Z),u=m(te,[],se),i=M(!0);let p;const k=A(function(){p.postMessage({type:"sse",url:o.value})},1e3);U(o,s=>{s&&k()});const w=({data:s})=>{s.url===o.value&&(i.value=s.result)};K(()=>{p=new P,p.addEventListener("message",w),x(d.value.event$,s=>{switch(s==null?void 0:s.type){case"STARTING":u.value=[{payload:`${t("state.connecting_to",{name:o.value})}`,source:"info",color:"var(--accent-color)",ts:void 0}];break;case"STARTED":u.value=[{payload:`${t("state.connected_to",{name:o.value})}`,source:"info",color:"var(--accent-color)",ts:Date.now()}],v.success(`${t("state.connected")}`);break;case"MESSAGE_RECEIVED":f({payload:s.message,source:"server",ts:s.time});break;case"ERROR":f({payload:t("error.browser_support_sse").toString(),source:"info",color:"#ff5555",ts:s.time});break;case"STOPPED":f({payload:t("state.disconnected_from",{name:o.value}).toString(),source:"info",color:"#ff5555",ts:s.time}),v.error(`${t("state.disconnected")}`);break}})});const S=()=>{if(r.value==="STOPPED")return d.value.start(o.value,c.value);d.value.stop()};W(()=>{p.terminate()});const R=()=>{u.value=[]};return(s,a)=>{const $=F,D=N,L=h;return j(),z(L,{"layout-id":"sse"},{primary:y(()=>[l("div",oe,[l("div",ae,[l("div",re,[b(l("input",{id:"server","onUpdate:modelValue":a[0]||(a[0]=n=>E(o)?o.value=n:null),type:"url",autocomplete:"off",class:H([{error:!i.value},"flex flex-1 w-full px-4 py-2 border rounded-l bg-primaryLight border-divider text-secondaryDark"]),placeholder:e(t)("sse.url"),disabled:e(r)==="STARTED"||e(r)==="STARTING",onKeyup:a[1]||(a[1]=g(n=>i.value?S():null,["enter"]))},null,42,ne),[[_,e(o)]]),l("label",le,X(e(t)("sse.event_type")),1),b(l("input",{id:"event-type","onUpdate:modelValue":a[2]||(a[2]=n=>E(c)?c.value=n:null),class:"flex flex-1 w-full px-4 py-2 border rounded-r bg-primaryLight border-divider text-secondaryDark",spellcheck:"false",disabled:e(r)==="STARTED"||e(r)==="STARTING",onKeyup:a[3]||(a[3]=g(n=>i.value?S():null,["enter"]))},null,40,ie),[[_,e(c)]])]),T($,{id:"start",disabled:!i.value,name:"start",class:"w-32",label:e(r)==="STARTING"?e(t)("action.starting"):e(r)==="STOPPED"?e(t)("action.start"):e(t)("action.stop"),loading:e(r)==="STARTING",onClick:S},null,8,["disabled","label","loading"])])])]),secondary:y(()=>[T(D,{title:e(t)("sse.log"),log:e(u),onDelete:a[4]||(a[4]=n=>R())},null,8,["title","log"])]),_:1})}}});export{be as default};
//# sourceMappingURL=sse.899fa9b2.js.map
