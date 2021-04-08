(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(448)),p={id:"update",title:"pnpm update"},l={unversionedId:"cli/update",id:"version-6.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"Aliases: up",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/update.md",slug:"/cli/update",permalink:"/tr/cli/update",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm install",permalink:"/tr/cli/install"},next:{title:"pnpm remove",permalink:"/tr/cli/remove"}},c=[{value:"TL;DR",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--interactive, -i",id:"--interactive--i",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Aliases: ",Object(i.b)("inlineCode",{parentName:"p"},"up")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),Object(i.b)("p",null,"When used without arguments, updates all dependencies. You can use patterns to update specific dependencies."),Object(i.b)("h2",{id:"tldr"},"TL;DR"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Command"),Object(i.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pnpm up")),Object(i.b)("td",{parentName:"tr",align:null},"Updates all dependencies, adhering to ranges specified in ",Object(i.b)("inlineCode",{parentName:"td"},"package.json"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pnpm up --latest")),Object(i.b)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",Object(i.b)("inlineCode",{parentName:"td"},"package.json"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pnpm up foo@2")),Object(i.b)("td",{parentName:"tr",align:null},"Updates ",Object(i.b)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),Object(i.b)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",Object(i.b)("inlineCode",{parentName:"td"},"@babel")," scope")))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"Concurrently runs update in all subdirectories with a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),Object(i.b)("p",null,"Usage examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),Object(i.b)("h3",{id:"--latest--l"},"--latest, -L"),Object(i.b)("p",null,"Added in: v3.2.0"),Object(i.b)("p",null,"Ignores the version range specified in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),Object(i.b)("h3",{id:"--global"},"--global"),Object(i.b)("p",null,"Update global packages."),Object(i.b)("h3",{id:"--workspace"},"--workspace"),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),Object(i.b)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",Object(i.b)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),Object(i.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(i.b)("p",null,"Only update packages in ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(i.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(i.b)("p",null,"Only update packages in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--no-optional"},"--no-optional"),Object(i.b)("p",null,"Don't update packages in ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(i.b)("h3",{id:"--interactive--i"},"--interactive, -i"),Object(i.b)("p",null,"Added in: v4.8.0"),Object(i.b)("p",null,"Show outdated dependencies and select which ones to update."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/tr/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(p,".").concat(u)]||b[u]||s[u]||i;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);