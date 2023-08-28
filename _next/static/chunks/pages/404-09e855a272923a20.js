(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return D}});var i=t(3366),a=t(7462),s=t(7294),n=t(6010),o=t(4780),l=t(917),c=t(8216),u=t(7623),d=t(1496),f=t(1588),h=t(4867);function v(e){return(0,h.Z)("MuiCircularProgress",e)}(0,f.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=t(5893);let k=["className","color","disableShrink","size","style","thickness","value","variant"],p=e=>e,x,g,Z,y,w=(0,l.F4)(x||(x=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),P=(0,l.F4)(g||(g=p`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),_=e=>{let{classes:r,variant:t,color:i,disableShrink:a}=e,s={root:["root",t,`color${(0,c.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,a&&"circleDisableShrink"]};return(0,o.Z)(s,v,r)},b=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(Z||(Z=p`
      animation: ${0} 1.4s linear infinite;
    `),w)),C=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),S=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(y||(y=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),P)),N=s.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:l=!1,size:c=40,style:d,thickness:f=3.6,value:h=0,variant:v="indeterminate"}=t,p=(0,i.Z)(t,k),x=(0,a.Z)({},t,{color:o,disableShrink:l,size:c,thickness:f,value:h,variant:v}),g=_(x),Z={},y={},w={};if("determinate"===v){let e=2*Math.PI*((44-f)/2);Z.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(h),Z.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,m.jsx)(b,(0,a.Z)({className:(0,n.Z)(g.root,s),style:(0,a.Z)({width:c,height:c},y,d),ownerState:x,ref:r,role:"progressbar"},w,p,{children:(0,m.jsx)(C,{className:g.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,m.jsx)(S,{className:g.circle,style:Z,ownerState:x,cx:44,cy:44,r:(44-f)/2,fill:"none",strokeWidth:f})})}))});var D=N},6141:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(7789)}])},7789:function(e,r,t){"use strict";t.r(r);var i=t(5893),a=t(1163),s=t(7294),n=t(8456);let o=()=>{let e=(0,a.useRouter)();return(0,s.useEffect)(()=>{e.replace("/")},[]),(0,i.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(n.Z,{})})};r.default=o}},function(e){e.O(0,[717,774,888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);