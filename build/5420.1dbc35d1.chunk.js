"use strict";(self.webpackChunkmurmanit=self.webpackChunkmurmanit||[]).push([[5420],{93836:(d,o,_)=>{_.d(o,{a:()=>P,g:()=>a});var s=_(97003),t=_(47706);function a(O){if(!O)return null;const e=Object.entries(s.W.colors).filter(([,l])=>l.toUpperCase()===O.toUpperCase()).reduce((l,[i])=>(t.S?.[i]&&(l=i),l),null);return e?{themeColorName:e,name:t.S[e]}:null}function P(){return Object.entries(t.S).map(([O,r])=>({hex:s.W.colors[O].toUpperCase(),name:r}))}},47706:(d,o,_)=>{_.d(o,{A:()=>e,C:()=>K,D:()=>S,R:()=>t,S:()=>n,a:()=>U,b:()=>g,c:()=>l,d:()=>E,e:()=>a,f:()=>P,g:()=>r,h:()=>O,i:()=>L,j:()=>M,k:()=>i,l:()=>T,m:()=>W,n:()=>A});var s=_(97003);const t="settings_review-workflows",a="Settings/Review_Workflows/RESET_WORKFLOW",P="Settings/Review_Workflows/SET_CONTENT_TYPES",O="Settings/Review_Workflows/SET_IS_LOADING",r="Settings/Review_Workflows/SET_ROLES",e="Settings/Review_Workflows/SET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOWS",i="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",E="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",M="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",T="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",W="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",A="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",L="Settings/Review_Workflows/WORKFLOW_UPDATE",n={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},g=s.W.colors.primary600,S={STAGE:"stage"},K="numberOfWorkflows",U="stagesPerWorkflow"},5420:(d,o,_)=>{_.r(o),_.d(o,{REVIEW_WORKFLOW_COLUMNS_EE:()=>y,REVIEW_WORKFLOW_FILTERS:()=>u});var s=_(24468),t=_(42551),a=_(74081),P=_(8295),O=_(61121),r=_(63738),e=_(10701),l=_(32370),i=_(77970),E=_(61020),M=_(60625),T=_(93836),W=_(15530),A=_(15816),L=_(97442),n=_(13576),g=_(87830),S=_(47184),K=_(364),U=_(27279),w=_(59461),G=_(40464),j=_(71563),p=_(49204),x=_(47853),Y=_(74919),$=_(29206),k=_(98934),V=_(43433),H=_(75719),Q=_(8175),Z=_(6078),z=_(51943),X=_(55783),J=_(92249),b=_(41942),q=_(22919),__=_(53915),s_=_(75041),t_=_(30200),a_=_(91379),E_=_(33299),e_=_(33409),n_=_(63645),o_=_(7988),O_=_(7055),l_=_(26757),r_=_(58311),i_=_(29510),P_=_(16946),D_=_(10124),M_=_(69530),T_=_(86961),d_=_(51527),W_=_(19764),A_=_(42982),R_=_(26126),m_=_(47706);const h=({value:R,onChange:C})=>{const{formatMessage:m}=(0,E.Z)(),{users:I,isLoading:v}=(0,s.g)();return(0,a.jsx)(P.hQ,{value:R,"aria-label":m({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:C,loading:v,children:I.map(D=>(0,a.jsx)(O.O,{value:D.id.toString(),children:(0,s.h)(D,m)},D.id))})},c=({value:R,onChange:C,uid:m})=>{const{formatMessage:I}=(0,E.Z)(),{workflows:[v],isLoading:D}=(0,M.u)({filters:{contentTypes:m}});return(0,a.jsx)(r.q4,{"aria-label":I({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:R,onChange:C,loading:D,customizeContent:()=>(0,a.jsxs)(e.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,a.jsx)(l.Z,{textColor:"neutral800",ellipsis:!0,children:R}),D?(0,a.jsx)(i.a,{small:!0,style:{display:"flex"}}):null]}),children:(v?.stages??[]).map(({id:N,color:f,name:B})=>{const{themeColorName:F}=(0,T.g)(f)??{};return(0,a.jsx)(r.ag,{startIcon:(0,a.jsx)(e.k,{height:2,background:f,borderColor:F==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:B,children:B},N)})})},y=[{key:`__${t.S}_temp_key__`,name:t.S,fieldSchema:{type:"relation",relation:"oneToMany",target:"admin::review-workflow-stage"},metadatas:{label:{id:(0,s.i)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"},searchable:!1,sortable:!0,mainField:{name:"name",type:"string"}}},{key:`__${t.A}_temp_key__`,name:t.A,fieldSchema:{type:"relation",target:"admin::user",relation:"oneToMany"},metadatas:{label:{id:(0,s.i)("containers.ListPage.table-headers.reviewWorkflows.assignee"),defaultMessage:"Assignee"},searchable:!1,sortable:!0,mainField:{name:"firstname",type:"string"}}}],u=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:c,label:{id:(0,s.i)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"integer"}}},metadatas:{customInput:h,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,s.i)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},42551:(d,o,_)=>{_.d(o,{A:()=>t,S:()=>s});const s="strapi_stage",t="strapi_assignee"},60625:(d,o,_)=>{_.d(o,{u:()=>P});var s=_(27279),t=_(15530),a=_(40464);function P(O={}){const{get:r}=(0,t.kY)(),{id:e="",...l}=O,i={populate:"stages"},{data:E,isLoading:M,status:T,refetch:W}=(0,a.useQuery)(["review-workflows","workflows",e],async()=>{const{data:n}=await r(`/admin/review-workflows/workflows/${e}`,{params:{...i,...l}});return n}),A=s.useMemo(()=>{let n=[];return E?.data&&(Array.isArray(E.data)?n=E.data:n=[E.data]),n},[E]);return{meta:s.useMemo(()=>{let n;return E&&"meta"in E&&(n=E.meta),n},[E]),workflows:A,isLoading:M,status:T,refetch:W}}}}]);
