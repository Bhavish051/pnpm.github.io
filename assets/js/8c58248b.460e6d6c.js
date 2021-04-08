(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{274:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(8),o=(r(0),r(448)),c={id:"rebuild",title:"pnpm rebuild"},a={unversionedId:"cli/rebuild",id:"cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Aliases: rb",source:"@site/docs/cli/rebuild.md",slug:"/cli/rebuild",permalink:"/next/cli/rebuild",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/cli/rebuild.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",sidebar:"docs",previous:{title:"pnpm import",permalink:"/next/cli/import"},next:{title:"pnpm prune",permalink:"/next/cli/prune"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aliases: ",Object(o.b)("inlineCode",{parentName:"p"},"rb")),Object(o.b)("p",null,"Rebuild a package."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"This command runs the ",Object(o.b)("strong",{parentName:"p"},"pnpm rebuild")," command in every package of the monorepo."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},448:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return r?i.a.createElement(f,a(a({ref:t},p),{},{components:r})):i.a.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);