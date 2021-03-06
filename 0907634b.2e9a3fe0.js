(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),i=(t(0),t(3064)),a={id:"why",title:"pnpm why",original_id:"why"},c={unversionedId:"cli/why",id:"version-4.10/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Shows the packages that depend on &lt;pkg>",source:"@site/versioned_docs/version-4.10/cli/why.md",slug:"/cli/why",permalink:"/4.10/cli/why",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.10/cli/why.md",version:"4.10",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615066944,sidebar:"version-4.10/docs",previous:{title:"pnpm outdated",permalink:"/4.10/cli/outdated"},next:{title:"pnpm run",permalink:"/4.10/cli/run"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Shows the packages that depend on ","<","pkg>"),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm why [-r] [--filter <package selector>]\n         [<package pattern> ...]\n\npnpm recursive why [--filter <package selector>]\n                   [<package pattern> ...]\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"Perform command on every package in subdirectories\nor on every workspace package, when executed inside a workspace."),Object(i.b)("h3",{id:"--json"},"--json"),Object(i.b)("p",null,"Added in: 3.7.0"),Object(i.b)("p",null,"Show information in JSON format."),Object(i.b)("h3",{id:"--long"},"--long"),Object(i.b)("p",null,"Show extended information."),Object(i.b)("h3",{id:"--parseable"},"--parseable"),Object(i.b)("p",null,"Show parseable output instead of tree view."),Object(i.b)("h3",{id:"--global"},"--global"),Object(i.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(i.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(i.b)("p",null,"Display only the dependency tree for packages in ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(i.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(i.b)("p",null,"Display only the dependency tree for packages in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,f=s["".concat(a,".").concat(b)]||s[b]||u[b]||i;return t?o.a.createElement(f,c(c({ref:n},p),{},{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);