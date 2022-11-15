import{o as a,d,e as t,f as D,u as ge,g as L,p as fe,h as ve,F as ye,i as xe,A as Y,j as P,a as c,w as E,k as N,v as q,l as e,m as J,n as F,q as V,t as o,s as ee,x as T,y as ke,r as te,z as B,c as X,I as se,B as Ee,C as G,D as Ce,E as U,G as k,H as $e,J as oe,K as ne,L as M,M as be,N as ce,O as Ae,P as Z,Q as Le,R as Ne,S as Ie,U as Se,V as Oe,W as Me,X as W,Y as x,Z as R,$ as we,a0 as Re,a1 as De,a2 as Te,a3 as Be,a4 as Pe,a5 as Fe,a6 as Ve}from"./index.da852b2b.js";import{_ as Xe}from"./Toggle.47b74309.js";import{I as Q}from"./check-circle.19388ed6.js";import{I as Ye}from"./rotate-ccw.49d7d5df.js";const Ge=()=>/Chrome/i.test(navigator.userAgent)&&/Google/i.test(navigator.vendor),Ue=()=>/Firefox/i.test(navigator.userAgent),ze={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},He=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"},null,-1),Ke=[He];function je(I,s){return a(),d("svg",ze,Ke)}const Ze={name:"lucide-languages",render:je},We={class:"inline-flex"},Qe={class:"select-wrapper"},qe={class:"flex flex-col space-y-2"},Je={class:"sticky top-0"},et=["placeholder"],tt=["onKeyup"],st={key:0,class:"flex flex-col items-center justify-center p-4 text-secondaryLight"},ot={class:"my-2 text-center"},nt=D({__name:"ChangeLanguage",setup(I){const s=ge(),u=s.t,_=L(()=>fe(Y,xe(({code:l})=>l===s.locale.value),ve(()=>ye))),m=l=>{Ee(l)},p=P(null),r=P(""),n=L(()=>Y.filter(l=>Object.values(l).some(g=>g.toLowerCase().includes(r.value.toLowerCase()))));return(l,g)=>{const b=T,f=G,$=Ce,v=ke,C=te("tippy"),S=B("tippy");return a(),d("span",We,[c(C,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>p.value.focus()},{content:E(({hide:w})=>[t("div",qe,[t("div",Je,[N(t("input",{"onUpdate:modelValue":g[0]||(g[0]=h=>r.value=h),type:"search",autocomplete:"off",class:"flex w-full p-4 py-2 input !bg-primaryContrast",placeholder:`${e(u)("action.search")}`},null,8,et),[[q,r.value]])]),t("div",{ref_key:"tippyActions",ref:p,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:J(h=>w(),["escape"])},[(a(!0),d(F,null,V(e(n),h=>(a(),X($,{key:`locale-${h.code}`,class:"flex flex-1",onClick:()=>{m(h.code),w()}},{default:E(()=>[c(f,{label:h.name,"active-info-icon":e(_).code===h.code,"info-icon":e(_).code===h.code?e(se):null},null,8,["label","active-info-icon","info-icon"])]),_:2},1032,["onClick"]))),128)),e(n).length!==0||e(Y).length===0?ee("",!0):(a(),d("div",st,[c(v,{class:"pb-2 opacity-75 svg-icons"}),t("span",ot,o(e(u)("state.nothing_found"))+' "'+o(r.value)+'" ',1)]))],40,tt)])]),default:E(()=>[t("span",Qe,[N(c(b,{title:e(u)("settings.choose_language"),class:"pr-8",icon:e(Ze),outline:"",label:e(_).name},null,8,["title","icon","label"]),[[S,{theme:"tooltip"}]])])]),_:1},8,["on-shown"])])}}}),ct={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},it=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 7V4h16v3M9 20h6M12 4v16"},null,-1),at=[it];function lt(I,s){return a(),d("svg",ct,at)}const rt={name:"lucide-type",render:lt},_t={class:"inline-flex"},dt={class:"select-wrapper"},pt=["onKeyup"],ut=D({__name:"FontSizePicker",setup(I){const s=U(),u=$e,_=k("FONT_SIZE"),m=n=>s(`settings.font_size_${n}`),p=n=>{M("FONT_SIZE",n)},r=P(null);return(n,l)=>{const g=T,b=G,f=te("tippy"),$=B("tippy");return a(),d("span",_t,[c(f,{interactive:"",trigger:"click",theme:"popover","on-shown":()=>r.value.focus()},{content:E(({hide:v})=>[t("div",{ref_key:"tippyActions",ref:r,class:"flex flex-col focus:outline-none",tabindex:"0",onKeyup:J(C=>v(),["escape"])},[(a(!0),d(F,null,V(e(u),(C,S)=>(a(),X(b,{key:`size-${S}`,label:`${m(C)}`,icon:C===e(_)?e(oe):e(ne),active:C===e(_),onClick:()=>{p(C),v()}},null,8,["label","icon","active","onClick"]))),128))],40,pt)]),default:E(()=>[t("span",dt,[N(c(g,{title:e(s)("settings.change_font_size"),class:"pr-8",icon:e(rt),outline:"",label:`${m(e(u).find(v=>v===e(_)))}`},null,8,["title","icon","label"]),[[$,{theme:"tooltip"}]])])]),_:1},8,["on-shown"])])}}}),mt={class:"flex"},ht=D({__name:"AccentModePicker",setup(I){const s=be,u=k("THEME_COLOR"),_=m=>{document.documentElement.setAttribute("data-accent",m),M("THEME_COLOR",m)};return(m,p)=>{const r=T,n=B("tippy");return a(),d("div",mt,[(a(!0),d(F,null,V(e(s),(l,g)=>N((a(),X(r,{key:`color-${g}`,title:`${l.charAt(0).toUpperCase()}${l.slice(1)}`,class:ce([[{"bg-primaryLight":l===e(u)}],"rounded"]),icon:l===e(u)?e(oe):e(ne),color:l,onClick:b=>_(l)},null,8,["title","class","icon","color","onClick"])),[[n,{theme:"tooltip"}]])),128))])}}}),gt={class:"flex"},ft=D({__name:"ColorModePicker",setup(I){const s=U(),u=Ae,_=k("BG_COLOR"),m=n=>{M("BG_COLOR",n)},p=n=>{switch(n){case"system":return Z;case"light":return Ie;case"dark":return Ne;case"black":return Le;default:return Z}},r=n=>{switch(n){case"system":return"settings.system_mode";case"light":return"settings.light_mode";case"dark":return"settings.dark_mode";case"black":return"settings.black_mode";default:return"settings.system_mode"}};return(n,l)=>{const g=T,b=B("tippy");return a(),d("div",gt,[(a(!0),d(F,null,V(e(u),(f,$)=>N((a(),X(g,{key:`color-${$}`,title:e(s)(r(f)),class:ce([{"bg-primaryLight !text-accent hover:text-accent":f===e(_)},"rounded"]),icon:p(f),onClick:v=>m(f)},null,8,["title","class","icon","onClick"])),[[b,{theme:"tooltip"}]])),128))])}}}),vt={class:"container space-y-8 divide-y divide-dividerLight"},yt={class:"md:grid md:gap-4 md:grid-cols-3"},xt={class:"p-8 md:col-span-1"},kt={class:"heading"},Et={class:"my-1 text-secondaryLight"},Ct={class:"p-8 space-y-8 md:col-span-2"},$t={class:"font-semibold text-secondaryDark"},bt={class:"my-1 text-secondaryLight"},At={key:0},Lt={class:"mt-4"},Nt={class:"font-semibold text-secondaryDark"},It={class:"my-1 text-secondaryLight"},St={class:"mt-4"},Ot={class:"font-semibold text-secondaryDark"},Mt={class:"mt-4"},wt={class:"font-semibold text-secondaryDark"},Rt={class:"mt-4"},Dt={class:"font-semibold text-secondaryDark"},Tt={class:"my-1 text-secondaryLight"},Bt=x(". "),Pt={class:"py-4 space-y-4"},Ft={class:"flex items-center"},Vt={class:"flex items-center"},Xt={class:"flex items-center"},Yt={class:"flex items-center"},Gt={class:"md:grid md:gap-4 md:grid-cols-3"},Ut={class:"p-8 md:col-span-1"},zt={class:"heading"},Ht={class:"my-1 text-secondaryLight"},Kt={class:"p-8 space-y-8 md:col-span-2"},jt={class:"font-semibold text-secondaryDark"},Zt={class:"my-1 text-secondaryLight"},Wt={key:0},Qt={key:1},qt={class:"flex flex-col py-4 space-y-2"},Jt={class:"py-4 space-y-4"},es={class:"flex items-center"},ts={class:"font-semibold text-secondaryDark"},ss={class:"my-1 text-secondaryLight"},os=x(". "),ns={class:"py-4 space-y-4"},cs={class:"flex items-center"},is={class:"flex items-center py-4 space-x-2"},as={class:"relative flex flex-col flex-1"},ls=["disabled"],rs={for:"url"},ms=D({__name:"settings",setup(I){const s=U(),u=Fe(),_=Te();Se({title:L(()=>s("navigation.settings"))});const m=k("THEME_COLOR"),p=k("PROXY_ENABLED"),r=k("PROXY_URL"),n=k("EXTENSIONS_ENABLED"),l=k("TELEMETRY_ENABLED"),g=k("EXPAND_NAVIGATION"),b=k("SIDEBAR_ON_LEFT"),f=k("ZEN_MODE"),$=Oe(Ve,null),v=L(()=>{var y,i;return $.value==="available"&&(i=(y=window.__POSTWOMAN_EXTENSION_HOOK__)==null?void 0:y.getVersion())!=null?i:null}),C=L(()=>Ge()&&$.value==="available"),S=L(()=>Ue()&&$.value==="available"),w=Me(Ye,1e3),h=P(!1),ie=L(()=>({url:r.value}));W(f,y=>{M("EXPAND_NAVIGATION",!y)}),W(ie,({url:y})=>{M("PROXY_URL",y)},{deep:!0});const z=y=>{y==="extension"?(n.value=!n.value,n.value&&(p.value=!1)):(p.value=!p.value,p.value&&(n.value=!1))},ae=()=>{l.value?h.value=!0:R("TELEMETRY_ENABLED")},le=()=>{M("PROXY_URL","https://proxy.hoppscotch.io/"),w.value=se,u.success(`${s("state.cleared")}`)},H=y=>{switch(y){case"system":return"settings.system_mode";case"light":return"settings.light_mode";case"dark":return"settings.dark_mode";case"black":return"settings.black_mode";default:return"settings.system_mode"}};return(y,i)=>{const re=ft,_e=ht,de=ut,pe=nt,K=Be,O=Xe,j=G,ue=T,me=Pe,he=B("tippy");return a(),d("div",null,[t("div",vt,[t("div",yt,[t("div",xt,[t("h3",kt,o(e(s)("settings.theme")),1),t("p",Et,o(e(s)("settings.theme_description")),1)]),t("div",Ct,[t("section",null,[t("h4",$t,o(e(s)("settings.background")),1),t("div",bt,[x(o(e(s)(H(e(_).preference)))+" ",1),e(_).preference==="system"?(a(),d("span",At," ("+o(e(s)(H(e(_).value)))+") ",1)):ee("",!0)]),t("div",Lt,[c(re)])]),t("section",null,[t("h4",Nt,o(e(s)("settings.accent_color")),1),t("div",It,o(e(m).charAt(0).toUpperCase()+e(m).slice(1)),1),t("div",St,[c(_e)])]),t("section",null,[t("h4",Ot,o(e(s)("settings.font_size")),1),t("div",Mt,[c(de)])]),t("section",null,[t("h4",wt,o(e(s)("settings.language")),1),t("div",Rt,[c(pe)])]),t("section",null,[t("h4",Dt,o(e(s)("settings.experiments")),1),t("div",Tt,[x(o(e(s)("settings.experiments_notice"))+" ",1),c(K,{class:"link",to:"https://github.com/hoppscotch/hoppscotch/issues/new/choose",blank:"",label:e(s)("app.contact_us")},null,8,["label"]),Bt]),t("div",Pt,[t("div",Ft,[c(O,{on:e(l),onChange:ae},{default:E(()=>[x(o(e(s)("settings.telemetry")),1)]),_:1},8,["on"])]),t("div",Vt,[c(O,{on:e(g),onChange:i[0]||(i[0]=A=>e(R)("EXPAND_NAVIGATION"))},{default:E(()=>[x(o(e(s)("settings.expand_navigation")),1)]),_:1},8,["on"])]),t("div",Xt,[c(O,{on:e(b),onChange:i[1]||(i[1]=A=>e(R)("SIDEBAR_ON_LEFT"))},{default:E(()=>[x(o(e(s)("settings.sidebar_on_left")),1)]),_:1},8,["on"])]),t("div",Yt,[c(O,{on:e(f),onChange:i[2]||(i[2]=A=>e(R)("ZEN_MODE"))},{default:E(()=>[x(o(e(s)("layout.zen_mode")),1)]),_:1},8,["on"])])])])])]),t("div",Gt,[t("div",Ut,[t("h3",zt,o(e(s)("settings.interceptor")),1),t("p",Ht,o(e(s)("settings.interceptor_description")),1)]),t("div",Kt,[t("section",null,[t("h4",jt,o(e(s)("settings.extensions")),1),t("div",Zt,[e(v)!=null?(a(),d("span",Wt,o(`${e(s)("settings.extension_version")}: v${e(v).major}.${e(v).minor}`),1)):(a(),d("span",Qt,o(e(s)("settings.extension_version"))+": "+o(e(s)("settings.extension_ver_not_reported")),1))]),t("div",qt,[t("span",null,[c(j,{to:"https://chrome.google.com/webstore/detail/hoppscotch-browser-extens/amknoiejhlmhancpahfcfcfhllgkpbld",blank:"",icon:e(we),label:"Chrome","info-icon":e(C)?e(Q):null,"active-info-icon":e(C),outline:""},null,8,["icon","info-icon","active-info-icon"])]),t("span",null,[c(j,{to:"https://addons.mozilla.org/en-US/firefox/addon/hoppscotch",blank:"",icon:e(Re),label:"Firefox","info-icon":e(S)?e(Q):null,"active-info-icon":e(S),outline:""},null,8,["icon","info-icon","active-info-icon"])])]),t("div",Jt,[t("div",es,[c(O,{on:e(n),onChange:i[3]||(i[3]=A=>z("extension"))},{default:E(()=>[x(o(e(s)("settings.extensions_use_toggle")),1)]),_:1},8,["on"])])])]),t("section",null,[t("h4",ts,o(e(s)("settings.proxy")),1),t("div",ss,[x(o(`${e(s)("settings.official_proxy_hosting")} ${e(s)("settings.read_the")}`)+" ",1),c(K,{class:"link",to:"https://docs.hoppscotch.io/privacy",blank:"",label:e(s)("app.proxy_privacy_policy")},null,8,["label"]),os]),t("div",ns,[t("div",cs,[c(O,{on:e(p),onChange:i[4]||(i[4]=A=>z("proxy"))},{default:E(()=>[x(o(e(s)("settings.proxy_use_toggle")),1)]),_:1},8,["on"])])]),t("div",is,[t("div",as,[N(t("input",{id:"url","onUpdate:modelValue":i[5]||(i[5]=A=>De(r)?r.value=A:null),class:"input floating-input",placeholder:" ",type:"url",autocomplete:"off",disabled:!e(p)},null,8,ls),[[q,e(r)]]),t("label",rs,o(e(s)("settings.proxy_url")),1)]),N(c(ue,{title:e(s)("settings.reset_default"),icon:e(w),outline:"",class:"rounded",onClick:le},null,8,["title","icon"]),[[he,{theme:"tooltip"}]])])])])])]),c(me,{show:h.value,title:`${e(s)("confirm.remove_telemetry")} ${e(s)("settings.telemetry_helps_us")}`,onHideModal:i[6]||(i[6]=A=>h.value=!1),onResolve:i[7]||(i[7]=()=>{e(R)("TELEMETRY_ENABLED"),h.value=!1})},null,8,["show","title"])])}}});export{ms as default};
//# sourceMappingURL=settings.0478319e.js.map
