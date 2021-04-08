(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{306:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),l=(t(0),t(448)),i={id:"recursive",title:"pnpm recursive"},c={unversionedId:"cli/recursive",id:"version-6.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: add, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/recursive.md",slug:"/cli/recursive",permalink:"/tr/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm publish",permalink:"/tr/cli/publish"},next:{title:"pnpm server",permalink:"/tr/cli/server"}},o=[{value:"Options",id:"options",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[]},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[]},{value:"--no-bail",id:"--no-bail",children:[]},{value:"--no-sort",id:"--no-sort",children:[]},{value:"--reverse",id:"--reverse",children:[]}]},{value:"pnpm -r exec",id:"pnpm--r-exec",children:[{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:o};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: ",Object(l.b)("inlineCode",{parentName:"p"},"add"),", ",Object(l.b)("inlineCode",{parentName:"p"},"exec"),", ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"list"),", ",Object(l.b)("inlineCode",{parentName:"p"},"outdated"),", ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),", ",Object(l.b)("inlineCode",{parentName:"p"},"rebuild"),", ",Object(l.b)("inlineCode",{parentName:"p"},"remove"),", ",Object(l.b)("inlineCode",{parentName:"p"},"run"),", ",Object(l.b)("inlineCode",{parentName:"p"},"test"),", ",Object(l.b)("inlineCode",{parentName:"p"},"unlink"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),", ",Object(l.b)("inlineCode",{parentName:"p"},"why")),Object(l.b)("p",null,"Aliases: ",Object(l.b)("inlineCode",{parentName:"p"},"m"),", ",Object(l.b)("inlineCode",{parentName:"p"},"multi"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<command> -r")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"true, false, deep"))),Object(l.b)("p",null,"Link locally available packages in workspaces of a monorepo into ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," instead of re-downloading them from the registry. This emulates functionality similar to ",Object(l.b)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),Object(l.b)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),Object(l.b)("p",null,"Be advised that it is encouraged instead to use ",Object(l.b)("a",{parentName:"p",href:"/tr/workspaces#link-workspace-packages"},"npmrc")," for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary."),Object(l.b)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"4")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Number"))),Object(l.b)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency use ",Object(l.b)("inlineCode",{parentName:"p"},"Infinity"),"."),Object(l.b)("h3",{id:"--no-bail"},"--","[no-]","bail"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"If true, stops when a task throws an error."),Object(l.b)("p",null,"This config does not affect the exit code. Even if ",Object(l.b)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),Object(l.b)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),Object(l.b)("h3",{id:"--no-sort"},"--","[no-]","sort"),Object(l.b)("p",null,"Added in: v2.14.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",Object(l.b)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),Object(l.b)("h3",{id:"--reverse"},"--reverse"),Object(l.b)("p",null,"Added in: v5.17.1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"boolean"))),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),Object(l.b)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),Object(l.b)("p",null,"Added in: v2.9.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),Object(l.b)("p",null,"This command runs a command in each package of the monorepo."),Object(l.b)("p",null,"The name of the current package is available through the environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/tr/filtering"},"Read more about filtering.")))}b.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);