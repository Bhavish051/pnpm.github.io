(window.webpackJsonp=window.webpackJsonp||[]).push([[2026],{2096:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(3064)),l={id:"run",title:"pnpm run",original_id:"run"},c={unversionedId:"cli/run",id:"version-5.14/cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Aliases: run-script",source:"@site/versioned_docs/version-5.14/cli/run.md",slug:"/cli/run",permalink:"/5.14/cli/run",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.14/cli/run.md",version:"5.14",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615066944,sidebar:"version-5.14/docs",previous:{title:"pnpm why",permalink:"/5.14/cli/why"},next:{title:"pnpm test",permalink:"/5.14/cli/test"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Details",id:"details",children:[]},{value:"Options",id:"options",children:[{value:"script-shell",id:"script-shell",children:[]},{value:"shell-emulator",id:"shell-emulator",children:[]},{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--stream",id:"--stream",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Aliases: ",Object(i.b)("inlineCode",{parentName:"p"},"run-script")),Object(i.b)("p",null,"Runs a defined package script."),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm run [[-r] [--no-bail] [--no-sort] [--workspace-concurrency=<number>]]\n     <command> [-- <args>...]\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,"Run the ",Object(i.b)("inlineCode",{parentName:"p"},"watch")," task:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm run watch\n")),Object(i.b)("p",null,"Same thing without the ",Object(i.b)("inlineCode",{parentName:"p"},"run")," keyword will work as well:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm watch\n")),Object(i.b)("h2",{id:"details"},"Details"),Object(i.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm run")," adds ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace,\n",Object(i.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool\nis installed in the workspace root, it may be called in any workspace package's ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),"."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"script-shell"},"script-shell"),Object(i.b)("p",null,"Added in: v5.10.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"The shell to use for scripts run with the ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm run")," command."),Object(i.b)("p",null,"Probably the most useful example of usage is forcing Git's bash shell on Windows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe\n')),Object(i.b)("h3",{id:"shell-emulator"},"shell-emulator"),Object(i.b)("p",null,"Added in: v5.8.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),Object(i.b)("p",null,"This option simplifies cross-platform scripting. For instance, by default the next script will fail on Windows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "scripts": {\n    "test": "NODE_ENV=test node test.js"\n  }\n')),Object(i.b)("p",null,"But if the ",Object(i.b)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"This runs an arbitrary command from each package's \"scripts\" object.\nIf a package doesn't have the command, it is skipped.\nIf none of the packages have the command, the command fails."),Object(i.b)("h3",{id:"--if-present"},"--if-present"),Object(i.b)("p",null,"Added in: v4.5.0"),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code\nwhen the script is undefined. This lets you run potentially undefined scripts\nwithout breaking the execution chain."),Object(i.b)("h3",{id:"--parallel"},"--parallel"),Object(i.b)("p",null,"Added in: v5.1.0"),Object(i.b)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes such as watch run over many packages."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm run --parallel watch\n")),Object(i.b)("h3",{id:"--stream"},"--stream"),Object(i.b)("p",null,"Added in: v5.1.0"),Object(i.b)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory.\nThis allows output from different packages to be interleaved."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},o),{},{components:n})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);