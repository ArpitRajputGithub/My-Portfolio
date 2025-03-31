import{j as e,L as a}from"./index-CfChF-8X.js";import{m as i,j as o,k as n,l}from"./Section-yBl-XFcv.js";const x=({project:t})=>e.jsxs(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"card group overflow-hidden",children:[e.jsxs("div",{className:"relative h-48 md:h-56 lg:h-64 overflow-hidden",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),t.featured&&e.jsx("div",{className:"absolute top-3 left-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg",children:"Featured"}),e.jsxs("div",{className:"absolute bottom-3 right-3 flex space-x-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100",children:[t.github&&e.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-primary-500 hover:text-white transition-colors","aria-label":"View GitHub Repository",children:e.jsx(o,{})}),t.liveUrl&&e.jsx("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-accent-500 hover:text-white transition-colors","aria-label":"View Live Project",children:e.jsx(n,{})}),e.jsx(a,{to:`/projects/${t.id}`,className:"p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-primary-600 hover:text-white transition-colors","aria-label":"View Project Details",children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[t.tags.slice(0,3).map((r,s)=>e.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300",children:r},s)),t.tags.length>3&&e.jsxs("span",{className:"text-xs font-medium px-2 py-1 rounded bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300",children:["+",t.tags.length-3," more"]})]}),e.jsx("h3",{className:"text-lg font-bold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors",children:t.title}),e.jsx("p",{className:"text-secondary-700 dark:text-secondary-300 text-sm line-clamp-2",children:t.description}),e.jsxs(a,{to:`/projects/${t.id}`,className:"inline-block mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors",children:["View Details",e.jsx("span",{className:"ml-1 transition-transform group-hover:translate-x-1 inline-block",children:"→"})]})]})]}),m="/My-Portfolio/assets/Plunge-BRxBaZmF.jpg";export{m as P,x as a};
