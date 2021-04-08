(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(8),o=(t(0),t(448)),l={id:"pnpm-list",title:"pnpm list",original_id:"pnpm-list"},a={unversionedId:"pnpm-list",id:"version-4.x/pnpm-list",isDocsHomePage:!1,title:"pnpm list",description:"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/pnpm-list.md",slug:"/pnpm-list",permalink:"/zh/4.x/pnpm-list",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x"},p=[{value:"Options",id:"options",children:[{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"-r",id:"-r",children:[]},{value:"--prod, --production, --only prod",id:"--prod---production---only-prod",children:[]},{value:"--dev, --only dev",id:"--dev---only-dev",children:[]}]}],c={toc:p};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure."),Object(o.b)("p",null,"Positional arguments are ",Object(o.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm list babel-* eslint-* semver@5")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--json"},"--json"),Object(o.b)("p",null,"Added in: 3.7.0"),Object(o.b)("p",null,"Show information in JSON format."),Object(o.b)("h3",{id:"--long"},"--long"),Object(o.b)("p",null,"Show extended information."),Object(o.b)("h3",{id:"--parseable"},"--parseable"),Object(o.b)("p",null,"Show parseable output instead of tree view."),Object(o.b)("h3",{id:"--global"},"--global"),Object(o.b)("p",null,"List packages in the global install prefix instead of in the current project."),Object(o.b)("h3",{id:"--depth-number"},"--depth ","<","number>"),Object(o.b)("p",null,"Max display depth of the dependency tree."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",Object(o.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(o.b)("h3",{id:"-r"},"-r"),Object(o.b)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),Object(o.b)("h3",{id:"--prod---production---only-prod"},"--prod, --production, --only prod"),Object(o.b)("p",null,"Display only the dependency tree for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(o.b)("h3",{id:"--dev---only-dev"},"--dev, --only dev"),Object(o.b)("p",null,"Display only the dependency tree for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"devDependencies"),"."))}d.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),d=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,m=s["".concat(l,".").concat(b)]||s[b]||u[b]||o;return t?i.a.createElement(m,a(a({ref:n},c),{},{components:t})):i.a.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);