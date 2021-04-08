(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(448)),o={id:"publish",title:"pnpm publish",original_id:"publish"},c={unversionedId:"cli/publish",id:"version-3.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/versioned_docs/version-3.x/cli/publish.md",slug:"/cli/publish",permalink:"/3.x/cli/publish",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-3.x/cli/publish.md",version:"3.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",sidebar:"version-3.x/docs",previous:{title:"pnpm stop",permalink:"/3.x/cli/stop"},next:{title:"pnpm recursive",permalink:"/3.x/cli/recursive"}},p=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Publishes a package to the registry."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]\n")),Object(i.b)("p",null,"When publishing a package inside a ",Object(i.b)("a",{parentName:"p",href:"/3.x/workspaces"},"workspace"),", the LICENSE file from the\nroot of the workspace is packed with the package (unless the package has a license of its own)."),Object(i.b)("p",null,"You may override some fields before publish, using the ",Object(i.b)("a",{parentName:"p",href:"/3.x/package_json#publishconfig"},"publishConfig"),"\nfield in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--tag-tag"},"--tag ","<","tag>"),Object(i.b)("p",null,"Publishes the package with the given tag. By default, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(i.b)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted>"),Object(i.b)("p",null,"Tells the registry whether the published package should be public or restricted."))}s.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);