(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{448:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=o(n),s=a,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return n?r.a.createElement(m,p(p({ref:t},c),{},{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(448)),i={id:"installation",title:"Installation"},p={unversionedId:"installation",id:"version-5.x/installation",isDocsHomePage:!1,title:"Installation",description:"Using a standalone script",source:"@site/versioned_docs/version-5.x/installation.md",slug:"/installation",permalink:"/5.x/installation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/installation.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617313360,formattedLastUpdatedAt:"4/1/2021",sidebar:"version-5.x/docs",previous:{title:"Motivation",permalink:"/5.x/motivation"},next:{title:"pnpm CLI",permalink:"/5.x/pnpm-cli"}},b=[{value:"Using a standalone script",id:"using-a-standalone-script",children:[]},{value:"Using npm",id:"using-npm",children:[]},{value:"Via npx resolution",id:"via-npx-resolution",children:[]},{value:"Upgrading",id:"upgrading",children:[]},{value:"Compatibility",id:"compatibility",children:[]}],c={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"using-a-standalone-script"},"Using a standalone script"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"curl -f https://get.pnpm.io/v5.js | node - add --global pnpm\n")),Object(l.b)("p",null,"On Windows (PowerShell):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v5.js' -UseBasicParsing).Content | node - add --global pnpm\n")),Object(l.b)("h2",{id:"using-npm"},"Using npm"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),Object(l.b)("h2",{id:"via-npx-resolution"},"Via npx resolution"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),Object(l.b)("h2",{id:"upgrading"},"Upgrading"),Object(l.b)("p",null,"Once you have installed pnpm, there is no need to use other package managers to\nupdate it. You can upgrade pnpm using itself, like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",Object(l.b)("a",{parentName:"p",href:"/5.x/continuous-integration"},"Continuous Integration"),"."))),Object(l.b)("h2",{id:"compatibility"},"Compatibility"),Object(l.b)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Node.js"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 1"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 2"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 3"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 4"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 5"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm 6"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 4"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 8"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 10"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 12"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Node.js 14"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}o.isMDXComponent=!0}}]);