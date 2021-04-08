(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{300:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(8),o=(t(0),t(448)),a={id:"limitations",title:"Limitations"},l={unversionedId:"limitations",id:"version-6.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm can install the same name@version multiple times and with different sets of dependencies. npm's lockfile is designed to reflect the flat node_modules layout, however, as pnpm cannot create a similar layout, it cannot respect npm's lockfile format. See pnpm import if you wish to convert a lockfile to pnpm's format, though.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/limitations.md",slug:"/limitations",permalink:"/zh/limitations",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"Benchmark",permalink:"/zh/benchmark"},next:{title:"Symlinked `node_modules` structure",permalink:"/zh/symlinked-node-modules-structure"}},s=[],p={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm can install the same ",Object(o.b)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of dependencies. npm's lockfile is designed to reflect the flat ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," layout, however, as pnpm cannot create a similar layout, it cannot respect npm's lockfile format. See ",Object(o.b)("a",{parentName:"li",href:"/zh/cli/import"},"pnpm import")," if you wish to convert a lockfile to pnpm's format, though."),Object(o.b)("li",{parentName:"ol"},"pnpm can't publish npm packages with ",Object(o.b)("inlineCode",{parentName:"li"},"bundledDependencies"),". Currently, there are no plans to add support for ",Object(o.b)("inlineCode",{parentName:"li"},"bundledDependencies")," either, as they do not work very consistently in publishing, even on npm. Instead, we recommend you use an actual package bundler, like webpack, rollup, or ESBuild."),Object(o.b)("li",{parentName:"ol"},"Binstubs (files in ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a JS file, reference the original file directly instead, as described in ",Object(o.b)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),Object(o.b)("li",{parentName:"ol"},"Node's ",Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag does not work when executed in a project that uses pnpm.")),Object(o.b)("p",null,"Got an idea for workarounds for these issues? ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}c.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||o;return t?i.a.createElement(f,l(l({ref:n},p),{},{components:t})):i.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);