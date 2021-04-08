(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{306:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(448)),p={id:"pnpm-vs-npm",title:"pnpm vs npm"},i={unversionedId:"pnpm-vs-npm",id:"pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/pnpm-vs-npm.md",slug:"/pnpm-vs-npm",permalink:"/ru/next/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/ru",version:"current"},s=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],c={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"npms-flat-tree"},"npm's flat tree"),Object(o.b)("p",null,"npm maintains a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),Object(o.b)("p",null,"On the other hand, pnpm manages ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and symbolic linking to a global on-disk content-addressable store. This nets you the benefits of far less disk space usage, while also keeping your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",Object(o.b)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish to learn more."),Object(o.b)("p",null,"The good thing about pnpm's proper ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it "',Object(o.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not specified in the project's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),Object(o.b)("p",null,"pnpm does not allow installation of packages without saving them to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as regular dependencies. Like with npm, ",Object(o.b)("inlineCode",{parentName:"p"},"--save-dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),Object(o.b)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm unless they remove a dependency and leave it orphaned. That's why pnpm's implementation of the ",Object(o.b)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),Object(o.b)("h2",{id:"directory-dependencies"},"Directory dependencies"),Object(o.b)("p",null,"Directory dependencies start with the ",Object(o.b)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies."),Object(o.b)("p",null,"This means that if you have a package called ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," (",Object(o.b)("inlineCode",{parentName:"p"},"<root>/foo"),") that has ",Object(o.b)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for ",Object(o.b)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install")," on ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),"."),Object(o.b)("p",null,"If you need to run installations in several packages at the same time, for instance in the case of a monorepo, you should look at the documentation for ",Object(o.b)("a",{parentName:"p",href:"cli/recursive"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}l.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?a.a.createElement(b,i(i({ref:n},c),{},{components:t})):a.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);