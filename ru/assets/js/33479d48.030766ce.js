(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),l=t(8),o=(t(0),t(448)),r={id:"pnpmfile",title:"pnpmfile.js",original_id:"pnpmfile"},i={unversionedId:"pnpmfile",id:"version-4.x/pnpmfile",isDocsHomePage:!1,title:"pnpmfile.js",description:"pnpm allows to step directly into the installation process via special functions called hooks. Hooks can be declared in a file called pnpmfile.js.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/pnpmfile.md",slug:"/pnpmfile",permalink:"/ru/4.x/pnpmfile",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/ru/4.x/pnpm-workspace_yaml"},next:{title:"Workspaces",permalink:"/ru/4.x/workspaces"}},p=[{value:"Hooks",id:"hooks",children:[{value:"tl;dr",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[]},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile</code>",id:"hooksafterallresolvedlockfile-context-lockfile",children:[]}]},{value:"Configs",id:"configs",children:[{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[]},{value:"pnpmfile",id:"pnpmfile",children:[]},{value:"global-pnpmfile",id:"global-pnpmfile",children:[]}]}],c={toc:p};function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm allows to step directly into the installation process via special functions called ",Object(o.b)("em",{parentName:"p"},"hooks"),". Hooks can be declared in a file called ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js"),"."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," should be located in the same directory in which the lockfile is. So in a ",Object(o.b)("a",{parentName:"p",href:"/ru/4.x/workspaces"},"workspace")," with a shared lockfile, the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," should be in the root of the monorepo."),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("h3",{id:"tldr"},"tl;dr"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Option"),Object(o.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),Object(o.b)("td",{parentName:"tr",align:null},"Allows to mutate every dependency's ",Object(o.b)("inlineCode",{parentName:"td"},"package.json"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),Object(o.b)("td",{parentName:"tr",align:null},"Is called after resolution stage. Allows to mutate the lockfile object.")))),Object(o.b)("h3",{id:"hooksreadpackagepkg-context-pkg"},Object(o.b)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg")),Object(o.b)("p",null,"Allows to mutate every dependency's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," that changes the dependencies field of a dependency: You will need to delete the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want change."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg, context) {\n  // Override the manifest of foo@1 after downloading it from the registry\n  // Replace all dependencies with bar@2\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    pkg.dependencies = {\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will fix any dependencies on baz to 1.2.3\n  if (pkg.dependencies.baz === '*') {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n")),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pkg")," - ",Object(o.b)("em",{parentName:"li"},"Manifest")," - The manifest of the package. Either the response from the registry or the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",Object(o.b)("em",{parentName:"li"},"Function")," - Allows to log messages.")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("h5",{id:"substitute-a-package-with-your-fork"},"Substitute a package with your fork"),Object(o.b)("p",null,"Lets' suppose you forked a package with an important fix and you want the fixed version installed."),Object(o.b)("p",null,"The following hook substitutes ",Object(o.b)("inlineCode",{parentName:"p"},"resolve")," with ",Object(o.b)("inlineCode",{parentName:"p"},"@zkochan"),"'s fork."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: { readPackage }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.dependencies.resolve) {\n    pkg.dependencies.resolve = 'zkochan/node-resolve'\n  }\n\n  return pkg\n}\n")),Object(o.b)("h5",{id:"packages-validation"},"Packages validation"),Object(o.b)("p",null,"You want only packages with MIT license in your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"? Check the licenses and throw an exception if you don't like the package's license:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: { readPackage }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.license !== 'MIT') {\n    throw new Error('Invalid license!')\n  }\n\n  return pkg\n}\n")),Object(o.b)("h5",{id:"renaming-bins"},"Renaming bins"),Object(o.b)("p",null,"You want to rename a package's bin? Just replace it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: { readPackage }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.name === 'eslint') {\n    pkg.bin = { jslint: pkg.bin }\n  }\n\n  return pkg\n}\n")),Object(o.b)("p",null,"Now you can run ",Object(o.b)("inlineCode",{parentName:"p"},"jslint fix")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"eslint fix"),"."),Object(o.b)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile"},Object(o.b)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile")),Object(o.b)("p",null,"Added in: v1.41.0"),Object(o.b)("p",null,"Is called after resolution stage. Allows to mutate the lockfile object."),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lockfile")," - ",Object(o.b)("em",{parentName:"li"},"object")," - The object that is saved to ",Object(o.b)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",Object(o.b)("em",{parentName:"li"},"Function")," - Allows to log messages.")),Object(o.b)("h4",{id:"usage-1"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: { afterAllResolved }\n}\n\nfunction afterAllResolved (lockfile, context) {\n  // ...\n  return lockfile\n}\n")),Object(o.b)("h2",{id:"configs"},"Configs"),Object(o.b)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),Object(o.b)("p",null,"Added in: v1.25.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," will be ignored. Useful together with ",Object(o.b)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),Object(o.b)("h3",{id:"pnpmfile"},"pnpmfile"),Object(o.b)("p",null,"Added in: v1.39.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"pnpmfile.js")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"path")),Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("strong",{parentName:"li"},".pnpm/pnpmfile.js"))),Object(o.b)("p",null,"The location of the local pnpmfile."),Object(o.b)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),Object(o.b)("p",null,"Added in: v1.39.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"path")),Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.js"))),Object(o.b)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," It is recommended to use local pnpmfiles. Only use a global pnpmfile, if you use pnpm on projects that don't use pnpm as the primary package manager."))}b.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),b=function(e){var n=l.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=b(e.components);return l.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||o;return t?l.a.createElement(m,i(i({ref:n},c),{},{components:t})):l.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<o;c++)r[c]=t[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);