System.register(["./vendor-legacy.39ec95964c16.chunk.js","./index-legacy.1ec4e27de5d0.js","./DataGrid-legacy.54229fbfc464.chunk.js"],(function(e,t){"use strict";var i,n,o,a,r,s,m,c,d;return{setters:[e=>{i=e.n,n=e.r,o=e.ar,a=e.j},e=>{r=e.m,s=e.H,m=e.M,c=e.b},e=>{d=e.D}],execute:function(){const t=r()((e=>({root:{flexGrow:1,height:"100%",display:"flex",flexDirection:"column"}}))),u=()=>{const{t:e}=i(),{classes:r}=t(),[c,u]=n.useState({current:1,page_size:10}),{data:l}=s(c),g=n.useMemo((()=>[{field:"id",headerName:e("invite.commissions.id",{context:"header"}).toString(),maxWidth:120,type:"number",valueFormatter:({value:e})=>e?.toString().padStart(4,"0")??e},{field:"order_amount",headerName:e("invite.commissions.order-amount",{context:"header"}).toString(),description:e("invite.commissions.order-amount",{context:"description"}).toString(),minWidth:120,maxWidth:160,type:"number",valueGetter:({value:t})=>e("invite.commissions.amount-value",{value:(t/100).toFixed(2)}).toString()},{field:"get_amount",headerName:e("invite.commissions.get-amount",{context:"header"}).toString(),description:e("invite.commissions.get-amount",{context:"description"}).toString(),minWidth:120,maxWidth:160,type:"number",valueGetter:({value:t})=>e("invite.commissions.amount-value",{value:(t/100).toFixed(2)}).toString()},{field:"created_at",headerName:e("invite.commissions.created-at",{context:"header"}).toString(),description:e("invite.commissions.created-at",{context:"description"}).toString(),minWidth:240,type:"dateTime",valueGetter:({value:e})=>o.unix(e).toDate(),valueFormatter:({value:e})=>o(e).format("YYYY-MM-DD HH:mm:ss")}]),[l,e]);return a(m,{content:!1,className:r.root,children:a(d,{columns:g,rows:l?.data??[],paginationMode:"server",pageSize:c.page_size,page:c.current,rowCount:l?.total??0,onPageChange:e=>u((t=>({...t,current:e+1}))),onPageSizeChange:e=>u((t=>({...t,page_size:e})))})})};e("default",(()=>(c("invite-commissions"),a(u,{}))))}}}));
