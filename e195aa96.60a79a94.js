(window.webpackJsonp=window.webpackJsonp||[]).push([[2646],{2718:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(3064)),p={id:"store",title:"pnpm store",original_id:"store"},s={unversionedId:"cli/store",id:"version-4.9/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/versioned_docs/version-4.9/cli/store.md",slug:"/cli/store",permalink:"/4.9/cli/store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.9/cli/store.md",version:"4.9",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615066944,sidebar:"version-4.9/docs",previous:{title:"pnpm server",permalink:"/4.9/cli/server"},next:{title:"package.json",permalink:"/4.9/package_json"}},c=[{value:"Commands",id:"commands",children:[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store usages",id:"pnpm-store-usages",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}]}],i={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Managing the ",Object(o.b)("a",{parentName:"p",href:"../about-package-store"},"package store"),"."),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("h3",{id:"pnpm-store-status"},"pnpm store status"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm store status\n")),Object(o.b)("p",null,"Checks for modified packages in the store."),Object(o.b)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),Object(o.b)("h3",{id:"pnpm-store-add"},"pnpm store add"),Object(o.b)("p",null,"Added in: v2.12.0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm store add <pkg>...\n")),Object(o.b)("p",null,"Adds new packages to the pnpm store directly.\nDoes not modify any projects or files outside the store."),Object(o.b)("p",null,"Usage examples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),Object(o.b)("h3",{id:"pnpm-store-usages"},"pnpm store usages"),Object(o.b)("p",null,"Added in: v2.21.0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm store usages <pkg>...\n")),Object(o.b)("p",null,"Lists all pnpm projects on the current filesystem that depend on the specified packages in the store."),Object(o.b)("p",null,"Usage examples:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages flatmap-stream\npnpm store usages is-odd@3.0.0 is-even@2.0.0\npnpm store usages @babel/core ansi-regex\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that this command might be slow for very large stores.\nWe are working on improving performance.")),Object(o.b)("h3",{id:"pnpm-store-prune"},"pnpm store prune"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),Object(o.b)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),Object(o.b)("p",null,"Pruning the store is not harmful, but might slow down future installations."),Object(o.b)("p",null,"Please read ",Object(o.b)("a",{parentName:"p",href:"/4.9/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This command is prohibited when a ",Object(o.b)("a",{parentName:"p",href:"server"},"store server")," is running.")))}l.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,s(s({ref:t},i),{},{components:n})):a.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);