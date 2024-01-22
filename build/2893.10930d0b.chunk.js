"use strict";(self.webpackChunkmurmanit=self.webpackChunkmurmanit||[]).push([[2893],{72893:($,v,t)=>{t.r(v),t.d(v,{InformationBoxEE:()=>k});var s=t(74081),a=t(15530),r=t(24468),R=t(1821),l=t(10701),B=t(8295),u=t(61121),D=t(63738),U=t(32370),G=t(77970),Q=t(67588),V=t(55911),Y=t(61020),x=t(40464),e=t(42551),S=t(27279),z=t(74563),C=t(9991),K=t(47706),F=t(93836),b=t(15816),q=t(97442),tt=t(13576),st=t(87830),at=t(47184),nt=t(364),ot=t(59461),et=t(71563),_t=t(49204),lt=t(47853),it=t(74919),rt=t(29206),Et=t(98934),dt=t(43433),Mt=t(75719),gt=t(8175),mt=t(6078),Dt=t(51943),Ot=t(55783),Pt=t(92249),ct=t(41942),ht=t(22919),vt=t(53915),Ct=t(75041),At=t(30200),Wt=t(91379),It=t(33299),ut=t(33409),Lt=t(63645),ft=t(7988),Tt=t(7055),Rt=t(26757),Bt=t(58311),Ut=t(29510),Kt=t(16946),yt=t(10124),jt=t(69530),xt=t(86961),St=t(51527),pt=t(19764),wt=t(42982),Nt=t(26126);const H=()=>{const{initialData:_,layout:E,isSingleType:O,onChange:L}=(0,a.Wq)(),A=(0,r.f)(o=>o.admin_app.permissions),{formatMessage:n}=(0,Y.Z)(),{formatAPIError:f}=(0,a.So)(),M=(0,a.lm)(),{put:T}=(0,a.kY)(),{allowedActions:{canRead:d},isLoading:P}=(0,a.ss)(A.settings?.users),{users:W,isLoading:I,isError:y}=(0,r.g)({},{enabled:!P&&d}),c=_?.[e.A]??null,h=async o=>{i.mutate({entityId:_.id,assigneeId:o?parseInt(o,10):null,uid:E.uid})},i=(0,x.useMutation)(async({entityId:o,assigneeId:p,uid:w})=>{const g=O?"single-types":"collection-types",{data:{data:m}}=await T(`/admin/content-manager/${g}/${w}/${o}/assignee`,{data:{id:p}});return L?.({target:{type:"",name:e.A,value:m[e.A]}},!0),m},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return(0,s.jsx)(R.g,{name:e.A,id:e.A,children:(0,s.jsx)(l.k,{direction:"column",gap:2,alignItems:"stretch",children:(0,s.jsx)(B.hQ,{clearLabel:n({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:(y&&d&&n({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||i.error&&f(i.error))??void 0,disabled:!P&&!I&&W.length===0,name:e.A,id:e.A,value:c?c.id.toString():null,onChange:h,onClear:()=>h(null),placeholder:n({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:n({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:I||P||i.isLoading,children:W.map(o=>(0,s.jsx)(u.O,{value:o.id.toString(),textValue:(0,r.h)(o,n),children:(0,r.h)(o,n)},o.id))})})})};function J({id:_,layout:E},O={}){const{kind:L,uid:A}=E,n=L==="collectionType"?"collection-types":"single-types",{get:f}=(0,a.kY)(),{data:M,isLoading:T,refetch:d}=(0,x.useQuery)(["content-manager",n,A,_,"stages"],async()=>{const{data:I}=await f(`/admin/content-manager/${n}/${A}/${_}/stages`);return I},O),P=S.useMemo(()=>M?.meta??{workflowCount:0},[M?.meta]),W=S.useMemo(()=>M?.data??[],[M?.data]);return{meta:P,stages:W,isLoading:T,refetch:d}}const X=()=>{const{initialData:_,layout:E,isSingleType:O,onChange:L}=(0,a.Wq)(),{put:A}=(0,a.kY)(),{formatMessage:n}=(0,Y.Z)(),{formatAPIError:f}=(0,a.So)(),M=(0,a.lm)(),{meta:T,stages:d,isLoading:P,refetch:W}=J({id:_.id,layout:E},{enabled:!!_?.id}),{getFeature:I}=(0,z.u)(),[y,c]=S.useState(null),h=I("review-workflows")??{},i=_?.[e.S]??null,o=(0,x.useMutation)(async({entityId:g,stageId:m,uid:j})=>{const N=O?"single-types":"collection-types",{data:{data:Z}}=await A(`/admin/content-manager/${N}/${j}/${g}/stage`,{data:{id:m}});return L?.({target:{name:e.S,value:Z[e.S],type:""}},!0),await W(),Z},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),p=async g=>{try{h?.[K.C]&&parseInt(h[K.C],10)<T.workflowCount?c("workflow"):h?.[K.a]&&parseInt(h[K.a],10)<d.length?c("stage"):_.id&&E&&o.mutateAsync({entityId:_.id,stageId:g,uid:E.uid})}catch{}},{themeColorName:w}=(0,F.g)(i?.color)??{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.g,{hint:d.length===0&&n({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:e.S,id:e.S,children:(0,s.jsxs)(l.k,{direction:"column",gap:2,alignItems:"stretch",children:[(0,s.jsx)(D.q4,{disabled:d.length===0,error:o.error&&f(o.error)||void 0,name:e.S,id:e.S,value:i?.id,onChange:p,label:n({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:i&&(0,s.jsx)(l.k,{as:"span",height:2,background:i?.color,borderColor:w==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,s.jsxs)(l.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,s.jsx)(U.Z,{textColor:"neutral800",ellipsis:!0,children:i?.name??""}),P?(0,s.jsx)(G.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:d.map(({id:g,color:m,name:j})=>{const{themeColorName:N}=(0,F.g)(m)??{};return(0,s.jsx)(D.ag,{startIcon:(0,s.jsx)(l.k,{height:2,background:m,borderColor:N==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:g,textValue:j,children:j},g)})}),(0,s.jsx)(Q.J,{}),(0,s.jsx)(V.c,{})]})}),(0,s.jsxs)(C.L.Root,{isOpen:y==="workflow",onClose:()=>c(null),children:[(0,s.jsx)(C.L.Title,{children:n({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(C.L.Body,{children:n({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,s.jsxs)(C.L.Root,{isOpen:y==="stage",onClose:()=>c(null),children:[(0,s.jsx)(C.L.Title,{children:n({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,s.jsx)(C.L.Body,{children:n({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},k=()=>{const{isCreatingEntry:_,layout:E}=(0,a.Wq)(),O=E?.options?.reviewWorkflows??!1;return(0,s.jsxs)(r.I.Root,{children:[(0,s.jsx)(r.I.Title,{}),O&&!_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(X,{}),(0,s.jsx)(H,{})]}),(0,s.jsx)(r.I.Body,{})]})}},93836:($,v,t)=>{t.d(v,{a:()=>R,g:()=>r});var s=t(97003),a=t(47706);function r(l){if(!l)return null;const u=Object.entries(s.W.colors).filter(([,D])=>D.toUpperCase()===l.toUpperCase()).reduce((D,[U])=>(a.S?.[U]&&(D=U),D),null);return u?{themeColorName:u,name:a.S[u]}:null}function R(){return Object.entries(a.S).map(([l,B])=>({hex:s.W.colors[l].toUpperCase(),name:B}))}},42551:($,v,t)=>{t.d(v,{A:()=>a,S:()=>s});const s="strapi_stage",a="strapi_assignee"}}]);
