(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{448:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,s=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.a.createElement(s,p(p({ref:t},b),{},{components:n})):r.a.createElement(s,p({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(448)),i={id:"installation",title:"Instalaci\xf3n"},p={unversionedId:"installation",id:"version-6.x/installation",isDocsHomePage:!1,title:"Instalaci\xf3n",description:"Usando el script aut\xf3nomo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/installation.md",slug:"/installation",permalink:"/es/installation",editUrl:"https://crowdin.com/project/pnpm/es",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"Motivation",permalink:"/es/motivation"},next:{title:"pnpm CLI",permalink:"/es/pnpm-cli"}},c=[{value:"Usando el script aut\xf3nomo",id:"usando-el-script-aut\xf3nomo",children:[]},{value:"Usando pnpm",id:"usando-pnpm",children:[]},{value:"Via commando npx",id:"via-commando-npx",children:[]},{value:"Actualizando",id:"actualizando",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],b={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"usando-el-script-aut\xf3nomo"},"Usando el script aut\xf3nomo"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -f https://get.pnpm.io/v6.js | node - add --global pnpm\n")),Object(l.b)("p",null,"En Windows (PowerShell):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v6.js' -UseBasicParsing).Content | node - add --global pnpm\n")),Object(l.b)("h2",{id:"usando-pnpm"},"Usando pnpm"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(l.b)("h2",{id:"via-commando-npx"},"Via commando npx"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),Object(l.b)("h2",{id:"actualizando"},"Actualizando"),Object(l.b)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",Object(l.b)("a",{parentName:"p",href:"/es/continuous-integration"},"Continuous Integration"),"."))),Object(l.b)("h2",{id:"compatibility"},"Compatibility"),Object(l.b)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Node.js"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 1"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 2"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 3"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 4"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 5"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 6"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 4"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 8"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 10"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 12"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 14"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}o.isMDXComponent=!0}}]);