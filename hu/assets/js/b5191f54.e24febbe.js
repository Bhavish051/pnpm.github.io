(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{334:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),p=(n(0),n(448)),i={id:"pnpm-cli",title:"pnpm CLI",original_id:"pnpm-cli"},l={unversionedId:"pnpm-cli",id:"version-2.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Just use pnpm in place of npm:",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-2.x/pnpm-cli.md",slug:"/pnpm-cli",permalink:"/hu/2.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/hu",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"Telep\xedt\xe9s",permalink:"/hu/2.x/installation"},next:{title:"pnpx CLI",permalink:"/hu/2.x/pnpx-cli"}},c=[],o={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Just use pnpm in place of npm:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install lodash\n")),Object(p.b)("p",null,"npm commands that are re-implemented in pnpm:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/hu/2.x/pnpm-install"},"install")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"update")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"uninstall")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"link")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"prune")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"list")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"install-test")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"outdated")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"rebuild")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"root")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"help"))),Object(p.b)("p",null,"Also, there are some commands unique to pnpm:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/hu/2.x/pnpm-recursive"},"recursive")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/hu/2.x/pnpm-store"},"store")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/hu/2.x/pnpm-server"},"server")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/hu/2.x/pnpm-import"},"import"))),Object(p.b)("p",null,"The rest of the commands pass through to npm."),Object(p.b)("p",null,"For using the programmatic API, use pnpm's engine: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/tree/master/packages/supi"},"supi"),"."))}u.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,O=b["".concat(i,".").concat(s)]||b[s]||m[s]||p;return n?a.a.createElement(O,l(l({ref:t},o),{},{components:n})):a.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);