import{n as S,j as t,i as r,ah as p,T as b,B as k,h as Z,aj as $,F as L,bh as x,bo as P,bp as O,l as Y,bq as z,bD as E,bY as D,bV as A,r as F,aa as K,bi as X,bb as tt,bZ as it,b_ as et,bd as nt,bx as at,a9 as rt,b9 as ot,ar as B,av as G,ai as q,bz as ct,b$ as st,aJ as T}from"./vendor.dee56adfed90.chunk.js";import{m as H,C,M as N,D as dt,g as R,E as lt,F as vt,G as mt,b as ht}from"./index.3e6dcd07f14e.js";import{F as V,c as Q,d as ut,e as J,a as j}from"./formik.esm.653f75db69cb.chunk.js";import{D as wt}from"./DataGrid.8698bfbc420e.chunk.js";const U=H()(i=>({root:{},form:{backgroundColor:"transparent"}})),yt=()=>{var o,h;const{t:i}=S(),{data:e}=C(),[l]=dt(),{classes:m}=U();Z();const[y,{setLeft:n,setRight:c}]=$(!1);return r(L,{children:[t(x,{variant:"contained",onClick:c,children:i("invite.my-invite.invitation-card.transfer-button")}),r(P,{open:y,onClose:n,fullWidth:!0,children:[t(O,{children:i("invite.my-invite.invitation-card.transfer-dialog.title")}),t(V,{initialValues:{transfer_amount:0},validationSchema:Q().shape({transfer_amount:ut().min(.01,i("invite.my-invite.invitation-card.transfer-dialog.validation_min",{count:.1}).toString()).max(((o=e==null?void 0:e.stat[4])!=null?o:0)/100,i("invite.my-invite.invitation-card.transfer-dialog.validation_max",{count:((h=e==null?void 0:e.stat[4])!=null?h:0)/100}).toString()).required(i("invite.my-invite.invitation-card.transfer-dialog.validation_required").toString())}),onSubmit:async(f,{setSubmitting:u,setErrors:a,setStatus:s})=>{try{u(!0),await l(f.transfer_amount*100).unwrap(),s({success:!0}),n()}catch(d){a(Y.isEmpty(d.errors)?{transfer_amount:d.message}:d.errors),s({success:!1})}finally{u(!1)}},children:({values:f,handleChange:u,handleBlur:a,handleSubmit:s,isSubmitting:d,errors:w,touched:g})=>{var v;return r(k,{component:J,onSubmit:s,className:m.form,children:[t(z,{children:r(p,{spacing:3,children:[t(E,{severity:"info",children:i("invite.my-invite.invitation-card.transfer-dialog.info",{siteName:R.title})}),t(D,{id:"total-amount",type:"number",disabled:!0,fullWidth:!0,value:((v=e==null?void 0:e.stat[4])!=null?v:0)/100,label:i("invite.my-invite.invitation-card.transfer-dialog.total-amount",{context:"label"}),variant:"standard"}),t(D,{id:"transfer-amount",name:"transfer_amount",type:"number",value:f.transfer_amount,onChange:u,onBlur:a,label:i("invite.my-invite.invitation-card.transfer-dialog.transfer-amount",{context:"label"}),fullWidth:!0,disabled:d,helperText:w.transfer_amount&&g.transfer_amount?w.transfer_amount:void 0,error:!!(g.transfer_amount&&w.transfer_amount),variant:"standard"})]})}),r(A,{children:[t(x,{onClick:n,children:i("invite.my-invite.invitation-card.transfer-dialog.cancel-button")}),t(x,{type:"submit",variant:"contained",disabled:d,children:i("invite.my-invite.invitation-card.transfer-dialog.confirm-button")})]})]})}})]})]})},ft=()=>{var a;const[i,e]=F.useState(!0),[l,{setLeft:m,setRight:y}]=$(!1),{t:n}=S(),{data:c}=C(),{data:o}=lt(void 0,{skip:i}),[h]=vt(),f=K(),{classes:u}=U();return r(L,{children:[t(x,{variant:"outlined",onClick:()=>{y(),e(!1)},children:n("invite.my-invite.invitation-card.withdraw-button")}),r(P,{open:l,onClose:m,fullWidth:!0,children:[t(O,{children:n("invite.my-invite.invitation-card.withdraw-dialog.title")}),t(V,{initialValues:{withdraw_method:(a=o==null?void 0:o.withdraw_methods[0])!=null?a:"",withdraw_account:""},validationSchema:Q().shape({withdraw_method:j().required(n("invite.my-invite.invitation-card.withdraw-dialog.validation_required",{name:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-method",{context:"label"})}).toString()),withdraw_account:j().required(n("invite.my-invite.invitation-card.withdraw-dialog.validation_required",{name:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-account",{context:"label"})}).toString())}),onSubmit:async(s,{setSubmitting:d,setErrors:w,setStatus:g})=>{try{await h(s).unwrap(),g({success:!0}),f("/ticket"),m()}catch(v){w(Y.isEmpty(v.errors)?{withdraw_account:v.message}:v.errors),g({success:!1})}finally{d(!1)}},children:({values:s,handleChange:d,handleBlur:w,handleSubmit:g,isSubmitting:v,errors:_,touched:M})=>{var W;return r(k,{component:J,onSubmit:g,className:u.form,children:[t(z,{children:r(p,{spacing:3,children:[t(E,{severity:"info",color:"info",children:n("invite.my-invite.invitation-card.withdraw-dialog.info",{siteName:R.title,amount:((W=c==null?void 0:c.stat[4])!=null?W:0)/100})}),r(X,{fullWidth:!0,variant:"standard",children:[t(tt,{id:"select-payment-label",children:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-method",{context:"label"})}),t(it,{labelId:"select-payment-label",id:"select-payment",name:"withdraw_method",value:s.withdraw_method,label:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-method",{context:"label"}),onChange:d,onBlur:w,disabled:v,children:o==null?void 0:o.withdraw_methods.map(I=>t(et,{value:I,children:I},I))}),_.withdraw_method&&M.withdraw_method&&t(nt,{error:!0,children:_.withdraw_method})]}),t(D,{id:"withdraw-account",name:"withdraw_account",type:"text",value:s.withdraw_account,onChange:d,onBlur:w,label:n("invite.my-invite.invitation-card.withdraw-dialog.withdraw-account",{context:"label"}),fullWidth:!0,disabled:v,helperText:_.withdraw_account&&M.withdraw_account?_.withdraw_account:void 0,error:!!(M.withdraw_account&&_.withdraw_account),variant:"standard"})]})}),r(A,{children:[t(x,{onClick:m,children:n("invite.my-invite.invitation-card.withdraw-dialog.cancel-button")}),t(x,{type:"submit",variant:"contained",disabled:v,children:n("invite.my-invite.invitation-card.withdraw-dialog.confirm-button")})]})]})}})]})]})},gt=()=>{var l;const{t:i}=S(),{data:e}=C();return t(N,{title:i("invite.my-invite.invitation-card.title"),sx:{height:240},children:r(p,{spacing:2,children:[r(p,{direction:"row",spacing:2,alignItems:"flex-end",children:[t(b,{variant:"h2",component:"span",children:Number(((l=e==null?void 0:e.stat[4])!=null?l:0)/100).toFixed(2)}),t(b,{variant:"h6",component:"span",color:"textSecondary",children:i("invite.my-invite.invitation-card.currency")})]}),r(k,{children:[t(b,{variant:"subtitle1",children:i("invite.my-invite.invitation-card.description")}),t(b,{variant:"body2",color:"textSecondary",noWrap:!0,children:i("invite.my-invite.invitation-card.helperText")})]}),r(p,{direction:"row",spacing:2,children:[t(yt,{}),t(ft,{})]})]})})},pt=H()(i=>({root:{height:i.spacing(30),display:"flex",flexDirection:"column","& .MuiCardContent-root":{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center"}}})),bt=()=>{const{t:i}=S(),{data:e,isLoading:l}=C(),m=F.useMemo(()=>{var n,c,o,h;return[{label:i("invite.my-invite.info-card.user-register-count"),value:i("invite.my-invite.info-card.user-register-count-value",{count:(n=e==null?void 0:e.stat[0])!=null?n:0})},{label:i("invite.my-invite.info-card.commission-rate"),value:i("invite.my-invite.info-card.commission-rate-value",{rate:(c=e==null?void 0:e.stat[3])!=null?c:0})},{label:i("invite.my-invite.info-card.commission-confirming"),value:i("invite.my-invite.info-card.commission-confirming-value",{count:((o=e==null?void 0:e.stat[2])!=null?o:0)/100})},{label:i("invite.my-invite.info-card.commission-total"),value:i("invite.my-invite.info-card.commission-total-value",{count:((h=e==null?void 0:e.stat[1])!=null?h:0)/100})}]},[e,i]),{classes:y}=pt();return t(N,{title:i("invite.my-invite.info-card.title"),className:y.root,children:t(p,{spacing:2,children:m.map((n,c)=>l?t(at,{variant:"text",width:"100%"},c):r(p,{direction:"row",justifyContent:"space-between",children:[t(b,{variant:"body1",children:n.label}),t(b,{variant:"body1",children:n.value})]},c))})})},xt=()=>{var u;const{t:i}=S(),{data:e,isLoading:l}=C(),[m,{isLoading:y}]=mt(),{enqueueSnackbar:n}=rt(),[c,o]=ot.useState(10),h=()=>{m().unwrap().then(()=>{n(i("notice::generate-invite-codes_success"),{variant:"success"})}).catch(a=>{console.error(a),n(i("notice::generate-invite-codes_failed"),{variant:"error"})})},f=F.useMemo(()=>[{field:"id",headerName:i("invite.my-invite.invite-codes-table.id",{context:"header"}).toString(),maxWidth:120,type:"number",valueFormatter:({value:a})=>{var s;return(s=a==null?void 0:a.toString().padStart(4,"0"))!=null?s:a}},{field:"code",headerName:i("invite.my-invite.invite-codes-table.code",{context:"header"}).toString(),description:i("invite.my-invite.invite-codes-table.code",{context:"description"}).toString(),maxWidth:160,type:"string"},{field:"created_at",headerName:i("invite.my-invite.invite-codes-table.created_at",{context:"header"}).toString(),description:i("invite.my-invite.invite-codes-table.created_at",{context:"description"}).toString(),width:200,type:"dateTime",valueGetter:({value:a})=>B.unix(a).toDate(),valueFormatter:({value:a})=>B(a).format("YYYY-MM-DD HH:mm:ss")},{field:"actions",headerName:i("invite.my-invite.invite-codes-table.actions",{context:"header"}).toString(),type:"actions",getActions:a=>[t(G,{title:i("invite.my-invite.invite-codes-table.action-copy",{context:"tooltip"}).toString(),children:t(q,{onClick:()=>{window.navigator.clipboard.writeText("".concat(window.location.protocol,"//").concat(window.location.host,"/register?code=").concat(a.row.code)).then(()=>{n(i("notice::copy_success"),{variant:"success"})})},children:t(ct,{})})},"copy")]}],[e,i]);return t(N,{content:!1,title:i("invite.my-invite.invite-codes-table.title"),secondary:t(G,{title:i("invite.my-invite.invite-codes-table.generate_tooltip"),placement:"left",children:t(q,{onClick:h,disabled:y,children:t(st,{})})}),children:t(k,{height:{xs:400,md:500},children:t(wt,{columns:f,rows:(u=e==null?void 0:e.codes)!=null?u:[],rowsPerPageOptions:[10,20,50],pageSize:c,onPageSizeChange:a=>o(a),loading:l})})})},_t=()=>r(T,{container:!0,spacing:2,children:[t(T,{item:!0,xs:12,md:6,children:t(gt,{})}),t(T,{item:!0,xs:12,md:6,children:t(bt,{})}),t(T,{item:!0,xs:12,children:t(xt,{})})]}),Mt=()=>(ht("invite"),t(_t,{}));export{Mt as default};
