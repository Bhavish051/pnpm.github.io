(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{406:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(448)),a={id:"production",title:"Production"},c={unversionedId:"production",id:"version-5.x/production",isDocsHomePage:!1,title:"Production",description:"There are two ways to bootstrap your package in a production environment with",source:"@site/versioned_docs/version-5.x/production.md",slug:"/production",permalink:"/5.x/production",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/production.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615336009,formattedLastUpdatedAt:"3/10/2021"},p=[],s={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two ways to bootstrap your package in a production environment with\npnpm. One of these is to commit the lockfile. Then, in your production\nenvironment, run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," - this will build the dependency tree using the\nlockfile, meaning the dependency versions will be consistent with how they were\nwhen the lockfile was committed. This is the most effective way (and the one we\nrecommend) to ensure your dependency tree persists across environments."),Object(i.b)("p",null,"The other method is to commit the lockfile AND copy the package store to your\nproduction environment (you can change where with the ",Object(i.b)("a",{parentName:"p",href:"npmrc#store-dir"},"store location option"),").\nThen, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --offline")," and pnpm will use the packages from\nthe global store, so it will not make any requests to the registry. This is\nrecommended ",Object(i.b)("strong",{parentName:"p"},"ONLY")," for environments where external access to the registry is\nunavailable for whatever reason."))}u.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);