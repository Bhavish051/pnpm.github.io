(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),c=(n(0),n(448)),i={id:"why",title:"pnpm why"},a={unversionedId:"cli/why",id:"version-3.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.x/cli/why.md",slug:"/cli/why",permalink:"/zh/3.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"3.x"},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Shows all packages that depend on the specified package."),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(c.b)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),Object(c.b)("h3",{id:"--json"},"--json"),Object(c.b)("p",null,"Added in: 3.7.0"),Object(c.b)("p",null,"Show information in JSON format."),Object(c.b)("h3",{id:"--long"},"--long"),Object(c.b)("p",null,"Show verbose output."),Object(c.b)("h3",{id:"--parseable"},"--parseable"),Object(c.b)("p",null,"Show parseable output instead of tree view."),Object(c.b)("h3",{id:"--global"},"--global"),Object(c.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(c.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(c.b)("p",null,"Only display the dependency tree for packages in ",Object(c.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(c.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(c.b)("p",null,"Only display the dependency tree for packages in ",Object(c.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(c.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/zh/3.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||s[b]||c;return n?o.a.createElement(f,a(a({ref:t},p),{},{components:n})):o.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);