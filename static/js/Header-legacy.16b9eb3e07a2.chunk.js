System.register(["./vendor-legacy.39ec95964c16.chunk.js","./index-legacy.163a29dc5392.js","./AnimateButton-legacy.f0d8873209e4.chunk.js","./hey-listen.es-legacy.2cf185e905fe.chunk.js"],(function(e,n){"use strict";var t,r,o,a,i,l,c,s,d,h,p,m,y,g,u,x,b,k,v,w,f,D,C,P,_,T,I;return{setters:[e=>{t=e.h,r=e.a3,o=e.r,a=e.j,i=e.a4,l=e.aN,c=e.i,s=e.aD,d=e.ah,h=e.T,p=e.C,m=e.aG,y=e.m,g=e.B,u=e.bh,x=e.cY,b=e.a2,k=e.H,v=e.p,w=e.t,f=e.cZ,D=e.v,C=e.c_},e=>{P=e.L,_=e.g,T=e.I},e=>{I=e.A},null],execute:function(){function n({layout:e,children:n,window:r}){const a=t(),i=C({disableHysteresis:!0,threshold:10,target:r?r():void 0}),l="dark"===a.palette.mode?a.palette.grey[50]:a.palette.grey[800],c="landing"!==e?l:"transparent";return o.cloneElement(n,{style:{backgroundColor:i?l:c}})}e("default",(({handleDrawerOpen:e,layout:C="landing",...S})=>{const A=t(),N=r(A.breakpoints.down("md")),[j,z]=o.useState(!1),E=e=>n=>{("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&z(e)};return a(n,{layout:C,...S,children:a(i,{sx:{bgcolor:"transparent",color:A.palette.text.primary,boxShadow:"none"},children:a(l,{disableGutters:N,children:c(s,{sx:{px:{xs:1.5,md:0,lg:0},py:2},children:[c(d,{direction:"row",sx:{flexGrow:1,display:{xs:"none",md:"block"}},alignItems:"center",children:[a(h,{component:"div",sx:{textAlign:"left",display:"inline-block"},children:a(P,{reverse:!0,to:"/"})}),a(p,{label:{}.VITE_APP_VERSION,variant:"outlined",size:"small",color:"secondary",sx:{mt:.5,ml:1,fontSize:"0.725rem",height:20,"& .MuiChip-label":{px:.5}}})]}),c(d,{direction:"row",sx:{"& .header-link":{px:1,"&:hover":{color:A.palette.primary.main}},display:{xs:"none",md:"block"}},spacing:2,children:[a(m,{className:"header-link",color:"white",component:y,to:"/login",target:"_blank",underline:"none",children:"Dashboard"}),a(m,{className:"header-link",color:e?"primary":"white",component:y,to:"/components-overview/buttons",underline:"none",children:"Components"}),a(m,{className:"header-link",color:"white",href:"https://codedthemes.gitbook.io/mantis/",target:"_blank",underline:"none",children:"Documentation"}),a(g,{sx:{display:"inline-block"},children:a(I,{children:a(u,{component:m,href:"https://mui.com/store/items/mantis-react-admin-dashboard-template/",disableElevation:!0,color:"primary",variant:"contained",children:"Purchase Now"})})})]}),c(g,{sx:{width:"100%",alignItems:"center",justifyContent:"space-between",display:{xs:"flex",md:"none"}},children:[a(h,{component:"div",sx:{textAlign:"left",display:"inline-block"},children:a(P,{reverse:!0,to:"/"})}),c(d,{direction:"row",spacing:2,children:["component"===C&&a(u,{variant:"outlined",size:"small",color:"warning",component:y,to:_.defaultPath,sx:{mt:.5,height:28},children:"Dashboard"}),"component"!==C&&a(u,{variant:"outlined",size:"small",color:"warning",component:y,to:"/components-overview/buttons",sx:{mt:.5,height:28},children:"All Components"}),a(T,{color:"secondary",..."component"===C?{onClick:e}:{onClick:E(!0)},sx:{"&:hover":{bgcolor:"dark"===A.palette.mode?"secondary.lighter":"secondary.dark"}},children:a(x,{style:{color:"dark"===A.palette.mode?"inherit":A.palette.grey[100]}})})]}),a(b,{anchor:"top",open:j,onClose:E(!1),sx:{"& .MuiDrawer-paper":{backgroundImage:"none"}},children:a(g,{sx:{width:"auto","& .MuiListItemIcon-root":{fontSize:"1rem",minWidth:28}},role:"presentation",onClick:E(!1),onKeyDown:E(!1),children:c(k,{children:[a(m,{style:{textDecoration:"none"},href:"/login",target:"_blank",children:c(v,{component:"span",children:[a(w,{children:a(f,{})}),a(D,{primary:"Dashboard",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),a(m,{style:{textDecoration:"none"},href:"/components-overview/buttons",target:"_blank",children:c(v,{component:"span",children:[a(w,{children:a(f,{})}),a(D,{primary:"All Components",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),a(m,{style:{textDecoration:"none"},href:"https://github.com/codedthemes/mantis-free-react-admin-template",target:"_blank",children:c(v,{component:"span",children:[a(w,{children:a(f,{})}),a(D,{primary:"Free Version",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),a(m,{style:{textDecoration:"none"},href:"https://codedthemes.gitbook.io/mantis/",target:"_blank",children:c(v,{component:"span",children:[a(w,{children:a(f,{})}),a(D,{primary:"Documentation",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),a(m,{style:{textDecoration:"none"},href:"https://codedthemes.support-hub.io/",target:"_blank",children:c(v,{component:"span",children:[a(w,{children:a(f,{})}),a(D,{primary:"Support",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),a(m,{style:{textDecoration:"none"},href:"https://mui.com/store/items/mantis-react-admin-dashboard-template/",target:"_blank",children:c(v,{component:"span",children:[a(w,{children:a(f,{})}),a(D,{primary:"Purchase Now",primaryTypographyProps:{variant:"h6",color:"text.primary"}}),a(p,{color:"primary",label:"v1.0",size:"small"})]})})]})})})]})]})})})})}))}}}));
