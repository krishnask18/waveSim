import{f as y,_ as i,F as T,G as B,n as C,k as W,l as _,q as f,r as M,m as $,j,h as R,o as U}from"./index-cPZe7BR8.js";const A=["sx"],E=a=>{var t,r;const n={systemProps:{},otherProps:{}},e=(t=a==null||(r=a.theme)==null?void 0:r.unstable_sxConfig)!=null?t:T;return Object.keys(a).forEach(o=>{e[o]?n.systemProps[o]=a[o]:n.otherProps[o]=a[o]}),n};function N(a){const{sx:t}=a,r=y(a,A),{systemProps:n,otherProps:e}=E(r);let o;return Array.isArray(t)?o=[n,...t]:typeof t=="function"?o=(...p)=>{const s=t(...p);return B(s)?i({},n,s):n}:o=i({},n,t),i({},e,{sx:o})}function O(a){return C("MuiTypography",a)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const k=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=a,s={root:["root",o,a.align!=="inherit"&&`align${f(t)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return U(s,O,p)},q=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${f(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>i({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},D=a=>z[a]||a,F=M.forwardRef(function(t,r){const n=$({props:t,name:"MuiTypography"}),e=D(n.color),o=N(i({},n,{color:e})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:x=!1,paragraph:c=!1,variant:l="body1",variantMapping:g=m}=o,v=y(o,k),u=i({},o,{align:p,color:e,className:s,component:h,gutterBottom:d,noWrap:x,paragraph:c,variant:l,variantMapping:g}),b=h||(c?"p":g[l]||m[l])||"span",P=L(u);return j.jsx(q,i({as:b,ref:r,ownerState:u,className:R(P.root,s)},v))}),J=F;export{J as T};
