(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(8),o=(n(0),n(448)),i={id:"pnpmfile",title:".pnpmfile.cjs"},r={unversionedId:"pnpmfile",id:"version-6.x/pnpmfile",isDocsHomePage:!1,title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called .pnpmfile.cjs.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/pnpmfile.md",slug:"/pnpmfile",permalink:"/hu/pnpmfile",editUrl:"https://crowdin.com/project/pnpm/hu",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/hu/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/hu/workspaces"}},c=[{value:"Hooks",id:"hooks",children:[{value:"TL;DR",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[]},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile</code>",id:"hooksafterallresolvedlockfile-context-lockfile",children:[]}]},{value:"Related Configuration",id:"related-configuration",children:[{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[]},{value:"pnpmfile",id:"pnpmfile",children:[]},{value:"global-pnpmfile",id:"global-pnpmfile",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called ",Object(o.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be located in the same directory as the lockfile. For instance, in a ",Object(o.b)("a",{parentName:"p",href:"/hu/workspaces"},"workspace")," with a shared lockfile, ",Object(o.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be in the root of the monorepo."),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("h3",{id:"tldr"},"TL;DR"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Hook Function"),Object(o.b)("th",{parentName:"tr",align:null},"Process"),Object(o.b)("th",{parentName:"tr",align:null},"Uses"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),Object(o.b)("td",{parentName:"tr",align:null},"Called after pnpm parses the dependency's package manifest"),Object(o.b)("td",{parentName:"tr",align:null},"Allows you to mutate a dependency's ",Object(o.b)("inlineCode",{parentName:"td"},"package.json"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),Object(o.b)("td",{parentName:"tr",align:null},"Called after the dependencies have been resolved."),Object(o.b)("td",{parentName:"tr",align:null},"Allows you to mutate the lockfile.")))),Object(o.b)("h3",{id:"hooksreadpackagepkg-context-pkg"},Object(o.b)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg")),Object(o.b)("p",null,"Allows you to mutate a dependency's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to resolution. These mutations are not saved to the filesystem, however, they will affect what gets resolved in the lockfile and therefore what gets installed."),Object(o.b)("p",null,"Note that you will need to delete the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want to modify."),Object(o.b)("h4",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",Object(o.b)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("p",null,"Example ",Object(o.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),Object(o.b)("h4",{id:"known-limitations"},"Known limitations"),Object(o.b)("p",null,"Removing the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",Object(o.b)("inlineCode",{parentName:"p"},"readPackage")," will not prevent pnpm from building the dependency. When building a dependency, pnpm reads the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not affected by the hook. In order to ignore a package's build, use the ",Object(o.b)("a",{parentName:"p",href:"/hu/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),Object(o.b)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile"},Object(o.b)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile")),Object(o.b)("p",null,"Added in: v1.41.0"),Object(o.b)("p",null,"Allows you to mutate the lockfile output before it is serialized."),Object(o.b)("h4",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to ",Object(o.b)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",Object(o.b)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),Object(o.b)("h4",{id:"usage-example"},"Usage example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),Object(o.b)("h4",{id:"known-limitations-1"},"Known Limitations"),Object(o.b)("p",null,"There are none - anything that can be done with the lockfile can be modified via this function, and you can even extend the lockfile's functionality."),Object(o.b)("h2",{id:"related-configuration"},"Related Configuration"),Object(o.b)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),Object(o.b)("p",null,"Added in: v1.25.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," will be ignored. Useful together with ",Object(o.b)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),Object(o.b)("h3",{id:"pnpmfile"},"pnpmfile"),Object(o.b)("p",null,"Added in: v1.39.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},".pnpmfile.cjs")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"path")),Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),Object(o.b)("p",null,"The location of the local pnpmfile."),Object(o.b)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),Object(o.b)("p",null,"Added in: v1.39.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"path")),Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),Object(o.b)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is recommended to use local pnpmfiles. Only use a global pnpmfile if you use pnpm on projects that don't use pnpm as the primary package manager."))))}b.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?l.a.createElement(u,r(r({ref:t},p),{},{components:n})):l.a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);