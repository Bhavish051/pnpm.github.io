(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),c=(n(0),n(448)),i={id:"recursive",title:"pnpm recursive",original_id:"recursive"},l={unversionedId:"cli/recursive",id:"version-4.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"tl;dr",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/recursive.md",slug:"/cli/recursive",permalink:"/hu/4.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm publish",permalink:"/hu/4.x/cli/publish"},next:{title:"pnpm server",permalink:"/hu/4.x/cli/server"}},o=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"workspace-concurrency",id:"workspace-concurrency",children:[]},{value:"bail",id:"bail",children:[]},{value:"sort",id:"sort",children:[]}]},{value:"pnpm recursive exec",id:"pnpm-recursive-exec",children:[]}],p={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tldr"},"tl;dr"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Command"),Object(c.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"pnpm install -r")),Object(c.b)("td",{parentName:"tr",align:null},"runs installation for every package in every subfolder")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"pnpm run build --filter foo-*")),Object(c.b)("td",{parentName:"tr",align:null},"builds all packages with names that start with ",Object(c.b)("inlineCode",{parentName:"td"},"foo-"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"pnpm update -- login-page...")),Object(c.b)("td",{parentName:"tr",align:null},"updates dependencies in ",Object(c.b)("inlineCode",{parentName:"td"},"login-page")," and any dependencies of ",Object(c.b)("inlineCode",{parentName:"td"},"login-page")," that are also in the repository")))),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/hu/4.x/filtering"},"Read more about filtering.")),Object(c.b)("h3",{id:"workspace-concurrency"},"workspace-concurrency"),Object(c.b)("p",null,"Added in: v2.13.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default: ",Object(c.b)("strong",{parentName:"li"},"4")),Object(c.b)("li",{parentName:"ul"},"Type: ",Object(c.b)("strong",{parentName:"li"},"Number"))),Object(c.b)("p",null,"Set the maximum number of concurrency. For unlimited concurrency use ",Object(c.b)("inlineCode",{parentName:"p"},"Infinity"),"."),Object(c.b)("h3",{id:"bail"},"bail"),Object(c.b)("p",null,"Added in: v2.13.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default: ",Object(c.b)("strong",{parentName:"li"},"true")),Object(c.b)("li",{parentName:"ul"},"Type: ",Object(c.b)("strong",{parentName:"li"},"Boolean"))),Object(c.b)("p",null,"If true, stops when a task throws an error."),Object(c.b)("p",null,"This config does not affect the exit code. Even if ",Object(c.b)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),Object(c.b)("p",null,"Usage example. Run tests in every package. Continue if tests fail in one of the packages:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"pnpm recursive test --no-bail\n")),Object(c.b)("h3",{id:"sort"},"sort"),Object(c.b)("p",null,"Added in: v2.14.0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default: ",Object(c.b)("strong",{parentName:"li"},"true")),Object(c.b)("li",{parentName:"ul"},"Type: ",Object(c.b)("strong",{parentName:"li"},"Boolean"))),Object(c.b)("p",null,"When ",Object(c.b)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",Object(c.b)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),Object(c.b)("p",null,"Usage examples:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test --no-sort\n")),Object(c.b)("h2",{id:"pnpm-recursive-exec"},"pnpm recursive exec"),Object(c.b)("p",null,"Added in: v2.9.0"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-test"},"pnpm recursive exec -- <command> [args...]\n")),Object(c.b)("p",null,"This command runs a command in each package of the monorepo."),Object(c.b)("p",null,"The name of the current package is available through the environment variable ",Object(c.b)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0)."),Object(c.b)("p",null,"Usage examples:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive exec -- rm -rf node_modules\npnpm recursive exec -- pnpm view $PNPM_PACKAGE_NAME\n")))}b.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||c;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);