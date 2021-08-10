"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1517],{9848:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6286:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(2951),a=n(9877),l=(n(7689),n(9848)),p=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Shell parancs futtat\xe1sa egy projekt keret\xe9ben.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/hu/cli/exec",editUrl:"https://crowdin.com/project/pnpm/hu",version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm run",permalink:"/hu/cli/run"},next:{title:"pnpm test",permalink:"/hu/cli/test"}},s=[{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]},{value:"Opci\xf3k",id:"opci\xf3k",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Shell parancs futtat\xe1sa egy projekt keret\xe9ben."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," hozz\xe1ad\xf3dik a ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"-hoz, \xedgy a ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," lehet\u0151v\xe9 teszi a f\xfcgg\u0151s\xe9gek parancsainak v\xe9grehajt\xe1s\xe1t."),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)("p",null,"Ha a Jest a projekt f\xfcgg\u0151s\xe9ge, akkor nincs sz\xfcks\xe9g a Jest glob\xe1lis telep\xedt\xe9s\xe9re, csak futtassa ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," parancs seg\xedts\xe9g\xe9vel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"Az ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," r\xe9sz val\xf3j\xe1ban opcion\xe1lis, ha a parancs nem egyezik meg egy be\xe9p\xedtett pnpm paranccsal, el\xe9g csak mag\xe1t a parancsot nevezni:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Hozz\xe1adva: v2.9.0"),(0,l.kt)("p",null,"Futtassa a shell parancsot a workspace minden projektj\xe9ben."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Hozz\xe1adva: v5.1.0"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/hu/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);