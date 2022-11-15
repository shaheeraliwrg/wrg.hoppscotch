import{o as m,d as _,e as n,f as R,E as V,j as c,W,g as S,b4 as H,k as r,v as K,l as e,s as N,t as q,a as p,w as B,m as P,n as U,q as Y,bf as G,az as Q,N as X,b9 as Z,c as I,p as ee,bg as te,I as j,bb as oe,x as ne,r as se,z as le,a5 as ae,C as ie}from"./index.da852b2b.js";import{i as ce,u as re,a as pe}from"./utils.5b7de8f5.js";import{l as ue,I as de,a as me}from"./json.2f974b1a.js";import{c as fe,f as ve}from"./TaskOption.83c233cd.js";import{r as _e}from"./files.f8dc88b5.js";const ye={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},he=n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M22 2L11 13M22 2l-7 20l-4-9l-9-4l20-7z"},null,-1),ke=[he];function be(y,x){return m(),_("svg",ye,ke)}const xe={name:"lucide-send",render:be},Ce={class:"flex flex-col flex-1"},ge={key:0,class:"flex items-center justify-between p-4"},we=["placeholder"],$e={class:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperSecondaryStickyFold"},Se={class:"flex items-center"},Ne={class:"font-semibold text-secondaryLight"},Be={class:"select-wrapper"},Ie=["onKeyup"],je={class:"flex"},Le={for:"payload"},Je=R({__name:"Communication",props:{showEventField:{type:Boolean,default:!1},isConnected:{type:Boolean,default:!1}},emits:["send-message"],setup(y,{emit:x}){const t=V(),h=ae(),C=c(null),v=c(!0),g=c(),w=c(),k=W(me,1e3),$={JSON:"application/ld+json",Raw:"text/plain"},L=Object.keys($),a=c("JSON"),b=c(""),l=c(""),M=S(()=>$[a.value]),O=S(()=>ce(a.value)?ue:null);re(g,l,H({extendedEditorConfig:{lineWrapping:v,mode:M,placeholder:t("websocket.message").toString()},linter:O,completer:null,environmentHighlights:!0}));const T=()=>{l.value=""},E=()=>{!l.value||(x("send-message",{eventName:b.value,message:l.value}),l.value="")},F=async u=>{var s;const o=await ee((s=u.target.files)==null?void 0:s[0],ve,fe(_e))();te(o)?(l.value=o.value,h.success(`${t("state.file_imported")}`)):h.error(`${t("action.choose_file")}`)},J=()=>{try{const u=JSON.parse(l.value);l.value=JSON.stringify(u,null,2),k.value=j}catch(u){console.error(u),k.value=oe,h.error(`${t("error.json_prettify_invalid_body")}`)}};return(u,o)=>{const s=ne,z=ie,A=se("tippy"),d=le("tippy");return m(),_("div",Ce,[y.showEventField?(m(),_("div",ge,[r(n("input",{id:"event_name","onUpdate:modelValue":o[0]||(o[0]=i=>b.value=i),class:"input",name:"event_name",placeholder:`${e(t)("socketio.event_name")}`,type:"text",autocomplete:"off"},null,8,we),[[K,b.value]])])):N("",!0),n("div",$e,[n("span",Se,[n("label",Ne,q(e(t)("websocket.message")),1),p(A,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>C.value.focus()},{content:B(({hide:i})=>[n("div",{ref_key:"tippyActions",ref:C,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:P(f=>i(),["escape"])},[(m(!0),_(U,null,Y(e(L),(f,D)=>(m(),I(z,{key:`contentTypeItem-${D}`,label:f,"info-icon":f===a.value?e(j):null,"active-info-icon":f===a.value,onClick:()=>{a.value=f,i()}},null,8,["label","info-icon","active-info-icon","onClick"]))),128))],40,Ie)]),default:B(()=>[n("span",Be,[p(s,{label:a.value||e(t)("state.none").toLowerCase(),class:"pr-8 ml-2 rounded-none"},null,8,["label"])])]),_:1},8,["on-shown"])]),n("div",je,[r(p(s,{title:`${e(t)("action.send")}`,label:`${e(t)("action.send")}`,disabled:!l.value||!y.isConnected,icon:e(xe),class:"rounded-none !text-accent !hover:text-accentDark",onClick:o[1]||(o[1]=i=>E())},null,8,["title","label","disabled","icon"]),[[d,{theme:"tooltip",delay:[500,20],allowHTML:!0}]]),r(p(s,{to:"https://docs.hoppscotch.io/realtime",blank:"",title:e(t)("app.wiki"),icon:e(G)},null,8,["title","icon"]),[[d,{theme:"tooltip"}]]),r(p(s,{title:e(t)("action.clear"),icon:e(Q),onClick:T},null,8,["title","icon"]),[[d,{theme:"tooltip"}]]),r(p(s,{title:e(t)("state.linewrap"),class:X({"!text-accent":v.value}),icon:e(pe),onClick:o[2]||(o[2]=Z(i=>v.value=!v.value,["prevent"]))},null,8,["title","class","icon"]),[[d,{theme:"tooltip"}]]),a.value&&a.value=="JSON"?r((m(),I(s,{key:0,title:e(t)("action.prettify"),icon:e(k),onClick:J},null,8,["title","icon"])),[[d,{theme:"tooltip"}]]):N("",!0),n("label",Le,[r(p(s,{title:e(t)("import.title"),icon:e(de),onClick:o[3]||(o[3]=i=>w.value.click())},null,8,["title","icon"]),[[d,{theme:"tooltip"}]])]),n("input",{ref_key:"payload",ref:w,class:"input",name:"payload",type:"file",onChange:F},null,544)])]),n("div",{ref_key:"wsCommunicationBody",ref:g,class:"flex flex-col flex-1"},null,512)])}}});export{Je as _};
//# sourceMappingURL=Communication.vue_vue_type_script_setup_true_lang.8cc53e66.js.map
