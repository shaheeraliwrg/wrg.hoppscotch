import{f as g,E as L,g as R,j as x,b4 as B,eN as v,z as $,o as n,d as S,e as l,t as T,l as e,k as c,c as d,N as D,b9 as E,s as p,f9 as w,x as H}from"./index.da852b2b.js";import{u as I,a as M}from"./utils.5b7de8f5.js";import{b as N,a as z,u as j}from"./lens-actions.ab74dd36.js";import"./json.52e7e427.js";const V={class:"flex flex-col flex-1"},W={class:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},A={class:"font-semibold text-secondaryLight"},F={class:"flex"},q=g({__name:"XMLLensRenderer",props:{response:null},setup(o){const u=o,s=L(),{responseBodyText:i}=N(u.response),_=R(()=>(u.response.headers.find(k=>k.key.toLowerCase()==="content-type").value||"").split(";")[0].toLowerCase()),{downloadIcon:h,downloadResponse:m}=z(_.value,i),{copyIcon:C,copyResponse:f}=j(i),y=x(null),t=x(!0);return I(y,i,B({extendedEditorConfig:{mode:"application/xml",readOnly:!0,lineWrapping:t},linter:null,completer:null,environmentHighlights:!0})),v("response.file.download",()=>m()),v("response.copy",()=>f()),(k,b)=>{const a=H,r=$("tippy");return n(),S("div",V,[l("div",W,[l("label",A,T(e(s)("response.body")),1),l("div",F,[o.response.body?c((n(),d(a,{key:0,title:e(s)("state.linewrap"),class:D({"!text-accent":t.value}),icon:e(M),onClick:b[0]||(b[0]=E(J=>t.value=!t.value,["prevent"]))},null,8,["title","class","icon"])),[[r,{theme:"tooltip"}]]):p("",!0),o.response.body?c((n(),d(a,{key:1,title:`${e(s)("action.download_file")} <kbd>${e(w)()}</kbd><kbd>J</kbd>`,icon:e(h),onClick:e(m)},null,8,["title","icon","onClick"])),[[r,{theme:"tooltip",allowHTML:!0}]]):p("",!0),o.response.body?c((n(),d(a,{key:2,title:`${e(s)("action.copy")} <kbd>${e(w)()}</kbd><kbd>.</kbd>`,icon:e(C),onClick:e(f)},null,8,["title","icon","onClick"])),[[r,{theme:"tooltip",allowHTML:!0}]]):p("",!0)])]),l("div",{ref_key:"xmlResponse",ref:y,class:"flex flex-col flex-1"},null,512)])}}});export{q as default};
//# sourceMappingURL=XMLLensRenderer.5a78f9c0.js.map
