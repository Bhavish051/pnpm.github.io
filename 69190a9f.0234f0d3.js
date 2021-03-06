(window.webpackJsonp=window.webpackJsonp||[]).push([[1228],{1297:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(3064)),c={id:"unlink",title:"pnpm unlink",original_id:"unlink"},o={unversionedId:"cli/unlink",id:"version-4.5/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Alias: dislink",source:"@site/versioned_docs/version-4.5/cli/unlink.md",slug:"/cli/unlink",permalink:"/4.5/cli/unlink",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.5/cli/unlink.md",version:"4.5",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615066944,sidebar:"version-4.5/docs",previous:{title:"pnpm link",permalink:"/4.5/cli/link"},next:{title:"pnpm import",permalink:"/4.5/cli/import"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"dislink")),Object(a.b)("p",null,"Unlinks a package. Like ",Object(a.b)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency\nafter removing the external link."),Object(a.b)("p",null,"If called without arguments, all linked-in dependencies will be unlinked."),Object(a.b)("h2",{id:"synopsis"},"Synopsis"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm unlink [-r] [--filter <package_selector>] [<pkg>...]\npnpm recursive unlink [--filter <package_selector>] [<pkg>...]\npnpm multi unlink [--filter <package_selector>] [<pkg>...]\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"Unlink in every package found in subdirectories\nor in every workspace package, when executed inside a ",Object(a.b)("a",{parentName:"p",href:"../workspaces"},"workspace"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return t?i.a.createElement(f,o(o({ref:n},p),{},{components:t})):i.a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);