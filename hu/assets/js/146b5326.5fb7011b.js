(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),l=(n(0),n(448)),o={id:"list",title:"pnpm list",original_id:"list"},a={unversionedId:"cli/list",id:"version-3.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-3.x/cli/list.md",slug:"/cli/list",permalink:"/hu/3.x/cli/list",editUrl:"https://crowdin.com/project/pnpm/hu",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"pnpm install-test",permalink:"/hu/3.x/cli/install-test"},next:{title:"pnpm outdated",permalink:"/hu/3.x/cli/outdated"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, --production, --only prod",id:"--prod---production---only-prod",children:[]},{value:"--dev, --only dev",id:"--dev---only-dev",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Aliases: ",Object(l.b)("inlineCode",{parentName:"p"},"ls")),Object(l.b)("p",null,"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure."),Object(l.b)("p",null,"Positional arguments are ",Object(l.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm list babel-* eslint-* semver@5")),Object(l.b)("h2",{id:"synopsis"},"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"pnpm list [-r] [--filter <package selector>] [--depth <number>]\n          [<package pattern> ...]\n\npnpm recursive list [--filter <package selector>] [--depth <number>]\n                    [<package pattern> ...]\n")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(l.b)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),Object(l.b)("h3",{id:"--json"},"--json"),Object(l.b)("p",null,"Added in: 3.7.0"),Object(l.b)("p",null,"Show information in JSON format."),Object(l.b)("h3",{id:"--long"},"--long"),Object(l.b)("p",null,"Show extended information."),Object(l.b)("h3",{id:"--parseable"},"--parseable"),Object(l.b)("p",null,"Show parseable output instead of tree view."),Object(l.b)("h3",{id:"--global"},"--global"),Object(l.b)("p",null,"List packages in the global install prefix instead of in the current project."),Object(l.b)("h3",{id:"--depth-number"},"--depth ","<","number>"),Object(l.b)("p",null,"Max display depth of the dependency tree."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",Object(l.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(l.b)("h3",{id:"--prod---production---only-prod"},"--prod, --production, --only prod"),Object(l.b)("p",null,"Display only the dependency tree for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(l.b)("h3",{id:"--dev---only-dev"},"--dev, --only dev"),Object(l.b)("p",null,"Display only the dependency tree for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/hu/3.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||l;return n?i.a.createElement(m,a(a({ref:t},p),{},{components:n})):i.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);