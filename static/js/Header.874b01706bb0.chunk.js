import{h as T,a3 as I,r as D,j as e,a4 as S,aN as P,i as r,aD as _,ah as x,T as f,C as v,aG as o,m,B as b,bh as k,cY as L,a2 as A,H as B,p as a,t as i,cZ as l,v as s,c_ as N}from"./vendor.dee56adfed90.chunk.js";import{L as w,g as z,I as E}from"./index.23055111bb7c.js";import{A as M}from"./AnimateButton.3d32280d3b29.chunk.js";import"./hey-listen.es.3d38fef0dd76.chunk.js";function j({layout:c,children:n,window:p}){const t=T(),y=N({disableHysteresis:!0,threshold:10,target:p?p():void 0}),d=t.palette.mode==="dark"?t.palette.grey[50]:t.palette.grey[800],g=c!=="landing"?d:"transparent";return D.cloneElement(n,{style:{backgroundColor:y?d:g}})}const F=({handleDrawerOpen:c,layout:n="landing",...p})=>{const t=T(),y=I(t.breakpoints.down("md")),[d,g]=D.useState(!1),h=C=>u=>{u.type==="keydown"&&(u.key==="Tab"||u.key==="Shift")||g(C)};return e(j,{layout:n,...p,children:e(S,{sx:{bgcolor:"transparent",color:t.palette.text.primary,boxShadow:"none"},children:e(P,{disableGutters:y,children:r(_,{sx:{px:{xs:1.5,md:0,lg:0},py:2},children:[r(x,{direction:"row",sx:{flexGrow:1,display:{xs:"none",md:"block"}},alignItems:"center",children:[e(f,{component:"div",sx:{textAlign:"left",display:"inline-block"},children:e(w,{reverse:!0,to:"/"})}),e(v,{label:{}.VITE_APP_VERSION,variant:"outlined",size:"small",color:"secondary",sx:{mt:.5,ml:1,fontSize:"0.725rem",height:20,"& .MuiChip-label":{px:.5}}})]}),r(x,{direction:"row",sx:{"& .header-link":{px:1,"&:hover":{color:t.palette.primary.main}},display:{xs:"none",md:"block"}},spacing:2,children:[e(o,{className:"header-link",color:"white",component:m,to:"/login",target:"_blank",underline:"none",children:"Dashboard"}),e(o,{className:"header-link",color:c?"primary":"white",component:m,to:"/components-overview/buttons",underline:"none",children:"Components"}),e(o,{className:"header-link",color:"white",href:"https://codedthemes.gitbook.io/mantis/",target:"_blank",underline:"none",children:"Documentation"}),e(b,{sx:{display:"inline-block"},children:e(M,{children:e(k,{component:o,href:"https://mui.com/store/items/mantis-react-admin-dashboard-template/",disableElevation:!0,color:"primary",variant:"contained",children:"Purchase Now"})})})]}),r(b,{sx:{width:"100%",alignItems:"center",justifyContent:"space-between",display:{xs:"flex",md:"none"}},children:[e(f,{component:"div",sx:{textAlign:"left",display:"inline-block"},children:e(w,{reverse:!0,to:"/"})}),r(x,{direction:"row",spacing:2,children:[n==="component"&&e(k,{variant:"outlined",size:"small",color:"warning",component:m,to:z.defaultPath,sx:{mt:.5,height:28},children:"Dashboard"}),n!=="component"&&e(k,{variant:"outlined",size:"small",color:"warning",component:m,to:"/components-overview/buttons",sx:{mt:.5,height:28},children:"All Components"}),e(E,{color:"secondary",...n==="component"?{onClick:c}:{onClick:h(!0)},sx:{"&:hover":{bgcolor:t.palette.mode==="dark"?"secondary.lighter":"secondary.dark"}},children:e(L,{style:{color:t.palette.mode==="dark"?"inherit":t.palette.grey[100]}})})]}),e(A,{anchor:"top",open:d,onClose:h(!1),sx:{"& .MuiDrawer-paper":{backgroundImage:"none"}},children:e(b,{sx:{width:"auto","& .MuiListItemIcon-root":{fontSize:"1rem",minWidth:28}},role:"presentation",onClick:h(!1),onKeyDown:h(!1),children:r(B,{children:[e(o,{style:{textDecoration:"none"},href:"/login",target:"_blank",children:r(a,{component:"span",children:[e(i,{children:e(l,{})}),e(s,{primary:"Dashboard",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e(o,{style:{textDecoration:"none"},href:"/components-overview/buttons",target:"_blank",children:r(a,{component:"span",children:[e(i,{children:e(l,{})}),e(s,{primary:"All Components",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e(o,{style:{textDecoration:"none"},href:"https://github.com/codedthemes/mantis-free-react-admin-template",target:"_blank",children:r(a,{component:"span",children:[e(i,{children:e(l,{})}),e(s,{primary:"Free Version",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e(o,{style:{textDecoration:"none"},href:"https://codedthemes.gitbook.io/mantis/",target:"_blank",children:r(a,{component:"span",children:[e(i,{children:e(l,{})}),e(s,{primary:"Documentation",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e(o,{style:{textDecoration:"none"},href:"https://codedthemes.support-hub.io/",target:"_blank",children:r(a,{component:"span",children:[e(i,{children:e(l,{})}),e(s,{primary:"Support",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e(o,{style:{textDecoration:"none"},href:"https://mui.com/store/items/mantis-react-admin-dashboard-template/",target:"_blank",children:r(a,{component:"span",children:[e(i,{children:e(l,{})}),e(s,{primary:"Purchase Now",primaryTypographyProps:{variant:"h6",color:"text.primary"}}),e(v,{color:"primary",label:"v1.0",size:"small"})]})})]})})})]})]})})})})};export{F as default};
