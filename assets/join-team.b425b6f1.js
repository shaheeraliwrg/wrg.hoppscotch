import{f as y,ej as k,ek as b,dS as D,V as f,g as j,el as I,a5 as w,E as L,em as $,en as S,p as T,eo as C,ep as E,ab as q,e0 as U,d$ as B,_ as H,o as i,d as s,e as t,t as n,a as o,c as M,s as l,dW as N,aG as R,dY as V,x as F,d_ as G}from"./index.ffc3bc83.js";const P=y({layout:"empty",setup(){const e=q(),a=k({query:b,variables:{inviteID:e.query.id},defer:!0});D(()=>{typeof e.query.id=="string"&&a.execute({inviteID:e.query.id})});const d=f(U,null),r=f(B,null),m=j(()=>d.value?!r.value:!1);return{E:I,inviteDetails:a,loadingCurrentUser:m,currentUser:r,toast:w(),t:L(),IconHome:$}},data(){return{invalidLink:!1,showLogin:!1,loading:!1,revokedLink:!1,inviteID:"",joinTeamSuccess:!1}},beforeMount(){S()},mounted(){typeof this.$route.query.id=="string"&&(this.inviteID=this.$route.query.id),this.invalidLink=!this.inviteID},methods:{joinTeam(){this.loading=!0,T(E(this.inviteID),C(()=>{this.loading=!1,this.toast.error(`${this.t("error.something_went_wrong")}`)},()=>{this.joinTeamSuccess=!0,this.loading=!1}))()},getErrorMessage(e){if(e.type==="network_error")return this.t("error.network_error");switch(e.error){case"team_invite/not_valid_viewer":return this.t("team.not_valid_viewer");case"team_invite/not_found":return this.t("team.not_found");case"team_invite/no_invite_found":return this.t("team.no_invite_found");case"team_invite/already_member":return this.t("team.already_member");case"team_invite/email_do_not_match":return this.t("team.email_do_not_match");default:return this.t("error.something_went_wrong")}}}}),O={class:"flex flex-col items-center justify-between min-h-screen"},Q={key:0,class:"flex flex-col items-center justify-center flex-1"},W=t("i",{class:"pb-2 opacity-75 material-icons"},"error_outline",-1),z={class:"text-center heading"},Y={class:"mt-2 text-center"},A={key:1,class:"flex flex-col items-center justify-center flex-1 p-4"},J={key:2,class:"flex flex-col items-center justify-center flex-1 p-4"},K={class:"heading"},X={class:"mt-2"},Z={key:3,class:"flex flex-col items-center justify-center flex-1 p-4"},x={key:0,class:"flex flex-col items-center justify-center flex-1 p-4"},ee={key:1},te={key:0,class:"flex flex-col items-center p-4"},ie=t("i",{class:"mb-4 material-icons"},"error_outline",-1),se={class:"flex flex-col items-center p-4 mt-8 border rounded border-dividerLight"},ne={class:"mb-4"},ae={class:"flex"},oe={key:1,class:"flex flex-col items-center justify-center flex-1 p-4"},le={class:"heading"},re={class:"mt-2 text-secondaryLight"},de={class:"mt-8"},me={key:2,class:"flex flex-col items-center justify-center flex-1 p-4"},ce={class:"heading"},ue={class:"mt-2 text-secondaryLight"},_e={class:"mt-8"},he={class:"p-4"};function fe(e,a,d,r,m,ve){var h;const c=N,u=R,v=V,_=F,p=G;return i(),s("div",O,[e.invalidLink?(i(),s("div",Q,[W,t("h1",z,n(e.t("team.invalid_invite_link")),1),t("p",Y,n(e.t("team.invalid_invite_link_description")),1)])):e.loadingCurrentUser?(i(),s("div",A,[o(c)])):e.currentUser===null?(i(),s("div",J,[t("h1",K,n(e.t("team.login_to_continue")),1),t("p",X,n(e.t("team.login_to_continue_description")),1),o(u,{label:e.t("auth.login_to_hoppscotch"),class:"mt-8",onClick:a[0]||(a[0]=g=>e.showLogin=!0)},null,8,["label"])])):(i(),s("div",Z,[e.inviteDetails.loading?(i(),s("div",x,[o(c)])):(i(),s("div",ee,[!e.inviteDetails.loading&&e.E.isLeft(e.inviteDetails.data)?(i(),s("div",te,[ie,t("p",null,n(e.getErrorMessage(e.inviteDetails.data.left)),1),t("p",se,[t("span",ne,n(e.t("team.logout_and_try_again")),1),t("span",ae,[e.inviteDetails.data.left.type==="gql_error"?(i(),M(v,{key:0,outline:""})):l("",!0)])])])):l("",!0),!e.inviteDetails.loading&&e.E.isRight(e.inviteDetails.data)&&!e.joinTeamSuccess?(i(),s("div",oe,[t("h1",le,n(e.t("team.join_team",{team:e.inviteDetails.data.right.teamInvitation.team.name})),1),t("p",re,n(e.t("team.invited_to_team",{owner:(h=e.inviteDetails.data.right.teamInvitation.creator.displayName)!=null?h:e.inviteDetails.data.right.teamInvitation.creator.email,team:e.inviteDetails.data.right.teamInvitation.team.name})),1),t("div",de,[o(u,{label:e.t("team.join_team",{team:e.inviteDetails.data.right.teamInvitation.team.name}),loading:e.loading,disabled:e.revokedLink,onClick:e.joinTeam},null,8,["label","loading","disabled","onClick"])])])):l("",!0),!e.inviteDetails.loading&&e.E.isRight(e.inviteDetails.data)&&e.joinTeamSuccess?(i(),s("div",me,[t("h1",ce,n(e.t("team.joined_team",{team:e.inviteDetails.data.right.teamInvitation.team.name})),1),t("p",ue,n(e.t("team.joined_team_description",{team:e.inviteDetails.data.right.teamInvitation.team.name})),1),t("div",_e,[o(_,{to:"/",icon:e.IconHome,filled:"",label:e.t("app.home")},null,8,["icon","label"])])])):l("",!0)]))])),t("div",he,[o(_,{class:"tracking-wide !font-bold !text-secondaryDark",label:"HOPPSCOTCH",to:"/"})]),o(p,{show:e.showLogin,onHideModal:a[1]||(a[1]=g=>e.showLogin=!1)},null,8,["show"])])}const ge=H(P,[["render",fe]]);export{ge as default};
//# sourceMappingURL=join-team.b425b6f1.js.map
