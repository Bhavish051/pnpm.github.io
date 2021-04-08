(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{223:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(8),a=(t(0),t(448)),i={id:"motivation",title:"Motivation"},s={unversionedId:"motivation",id:"version-6.x/motivation",isDocsHomePage:!1,title:"Motivation",description:"Saving disk space and boosting installation speed",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/motivation.md",slug:"/motivation",permalink:"/es/motivation",editUrl:"https://crowdin.com/project/pnpm/es",version:"6.x",sidebar:"version-6.x/docs",next:{title:"Instalaci\xf3n",permalink:"/es/installation"}},l=[{value:"Saving disk space and boosting installation speed",id:"saving-disk-space-and-boosting-installation-speed",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],c={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"saving-disk-space-and-boosting-installation-speed"},"Saving disk space and boosting installation speed"),Object(a.b)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. With pnpm, the dependency will be stored in a content-addressable store, so:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that differ are added to the store. For instance, if it has 100 files, and a new version has a change in only one of those files, ",Object(a.b)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1 new file to the store, instead of cloning the entire dependency just for the singular change."),Object(a.b)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are installed, their files are hard-linked from that single place, consuming no additional disk space. This allows you to share dependencies of the same version across projects.")),Object(a.b)("p",null,"As a result, you save a lot of space on your disk proportional to the number of projects and dependencies, and you have a lot faster installations!"),Object(a.b)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),Object(a.b)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project."),Object(a.b)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. If you'd like more details about the unique ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and why it works fine with the Node.js ecosystem, read:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/es/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}d.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);