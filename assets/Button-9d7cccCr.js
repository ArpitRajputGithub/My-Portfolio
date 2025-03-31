import{j as t,L as g}from"./index-CfChF-8X.js";const L=({variant:x="primary",size:m="md",className:u="",children:p,isLoading:n=!1,disabled:l=!1,as:c="button",...a})=>{const b={primary:"btn-primary",secondary:"btn-secondary",outline:"btn-outline"},h={sm:"text-sm px-4 py-2",md:"text-base px-5 py-2.5",lg:"text-lg px-6 py-3"},o=`
    inline-flex items-center justify-center font-medium rounded-lg transition-all
    ${b[x]}
    ${h[m]}
    ${n||l?"opacity-70 cursor-not-allowed":""}
    ${u}
  `.trim(),j=()=>t.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),r=()=>t.jsxs(t.Fragment,{children:[n&&t.jsx(j,{}),p]});if(c==="a"){const{to:d,disabled:i,isLoading:s,...e}=a;return t.jsx("a",{className:o,...e,"aria-disabled":s||i,tabIndex:s||i?-1:void 0,children:t.jsx(r,{})})}if(c==="routerLink"){const{to:d,href:i,disabled:s,isLoading:e,...y}=a;return t.jsx(g,{className:o,to:d,...y,"aria-disabled":e||s,tabIndex:e||s?-1:void 0,children:t.jsx(r,{})})}const{href:w,to:C,...f}=a;return t.jsx("button",{className:o,disabled:n||l,...f,children:t.jsx(r,{})})};export{L as B};
