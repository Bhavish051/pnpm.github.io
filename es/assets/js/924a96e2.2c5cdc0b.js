(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{281:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),i=t(8),o=(t(0),t(448)),c={id:"rebuild",title:"pnpm rebuild"},a={unversionedId:"cli/rebuild",id:"version-5.x/cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Aliases: rb",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/cli/rebuild.md",slug:"/cli/rebuild",permalink:"/es/5.x/cli/rebuild",editUrl:"https://crowdin.com/project/pnpm/es",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"pnpm import",permalink:"/es/5.x/cli/import"},next:{title:"pnpm prune",permalink:"/es/5.x/cli/prune"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aliases: ",Object(o.b)("inlineCode",{parentName:"p"},"rb")),Object(o.b)("p",null,"Rebuild a package."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"This command runs the ",Object(o.b)("strong",{parentName:"p"},"pnpm rebuild")," command in every package of the monorepo."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/es/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},448:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return t?i.a.createElement(f,a(a({ref:r},p),{},{components:t})):i.a.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<o;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);