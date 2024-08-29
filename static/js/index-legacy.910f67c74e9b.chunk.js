System.register(["./vendor-legacy.39ec95964c16.chunk.js","./index-legacy.163a29dc5392.js","./DataGrid-legacy.54229fbfc464.chunk.js","./order-legacy.246da77bf9e0.chunk.js"],(function(t,e){"use strict";var r,a,o,n,i,l,d,s,c,u,g,p,h,m,b,x,v,S,w;return{setters:[t=>{r=t.j,a=t.n,o=t.a9,n=t.b9,i=t.r,l=t.aG,d=t.m,s=t.ar,c=t.av,u=t.ai,g=t.bf,p=t.bP},t=>{h=t.M,m=t.t,b=t.v,x=t.m,v=t.b},t=>{S=t.D},t=>{w=t.O}],execute:function(){const e=({children:t,className:e})=>r(h,{className:e,content:!1,children:t}),f=()=>{const{t:t}=a(),{data:e,isLoading:h}=m(void 0,{pollingInterval:6e4}),[x,{isLoading:v}]=b(),{enqueueSnackbar:f}=o(),[N,_]=n.useState(10),y=i.useMemo((()=>[{field:"trade_no",headerName:t("order.list.table.trade_no",{context:"header"}).toString(),description:t("order.list.table.trade_no",{context:"description"}).toString(),width:240,type:"string",renderCell:t=>r(l,{component:d,to:`/order/${t.value}`,underline:"none",children:t.value}),sortComparator:(t,e)=>parseInt(t)-parseInt(e)},{field:"plan.name",headerName:t("order.list.table.plan_name",{context:"header"}).toString(),description:t("order.list.table.plan_name",{context:"description"}).toString(),width:120,type:"string",valueGetter:t=>t.row.plan.name},{field:"total_amount",headerName:t("order.list.table.total_amount",{context:"header"}).toString(),description:t("order.list.table.total_amount",{context:"description"}).toString(),width:120,type:"number",valueGetter:t=>t.row.total_amount/100,valueFormatter:t=>`${t.value.toFixed(2)} CNY`},{field:"period",sortable:!1,headerName:t("order.list.table.period",{context:"header"}).toString(),description:t("order.list.table.period",{context:"description"}).toString(),width:120,type:"string",valueFormatter:e=>t("order.list.table.period-value",{context:e.value}).toString()},{field:"status",headerName:t("order.list.table.status",{context:"header"}).toString(),description:t("order.list.table.status",{context:"description"}).toString(),width:120,type:"string",sortable:!1,valueFormatter:e=>{switch(e.value){case w.PENDING:return t("order.list.table.status-value",{context:"pending"}).toString();case w.PAID:return t("order.list.table.status-value",{context:"paid"}).toString();case w.CANCELLED:return t("order.list.table.status-value",{context:"cancelled"}).toString();case w.FINISHED:return t("order.list.table.status-value",{context:"finished"}).toString();default:return e.value}}},{field:"created_at",headerName:t("order.list.table.created_at",{context:"header"}).toString(),description:t("order.list.table.created_at",{context:"description"}).toString(),width:180,type:"dateTime",valueGetter:t=>s.unix(t.row.created_at).toDate(),valueFormatter:t=>s(t.value).format("YYYY-MM-DD HH:mm:ss")},{field:"actions",headerName:t("order.list.table.action",{context:"header"}).toString(),width:120,sortable:!1,type:"actions",getActions:e=>[r(c,{title:t("order.list.table.action-view",{context:"tooltip"}).toString(),children:r(u,{size:"small",component:d,to:`/order/${e.row.trade_no}`,children:r(g,{})})},e.id),...e.row.status===w.PENDING?[r(c,{title:t("order.list.table.action-cancel",{context:"tooltip"}).toString(),children:r(u,{size:"small",onClick:()=>{x(e.row.trade_no).unwrap().then((()=>{f(t("notice::order-cancel",{context:"success"}).toString(),{variant:"success"})})).catch((e=>{console.error("error cancelling order",e),f(t("notice::order-cancel",{context:"fail"}).toString(),{variant:"error"})}))},disabled:v,children:r(p,{})})},e.id)]:[]]}]),[e,t]);return r(S,{columns:y,rows:e??[],loading:h,getRowId:t=>t.trade_no,rowsPerPageOptions:[5,10,25,50],pageSize:N,onPageSizeChange:t=>_(t)})},N=x()((t=>({root:{flexGrow:1,height:"100%",display:"flex",flexDirection:"column"}}))),_=()=>{const{classes:t}=N();return r(e,{className:t.root,children:r(f,{})})};t("default",(()=>(v("order-list"),r(_,{}))))}}}));
