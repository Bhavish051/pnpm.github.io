(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{412:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(448)),c={id:"publish",title:"pnpm publish",original_id:"publish"},p={unversionedId:"cli/publish",id:"version-4.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/publish.md",slug:"/cli/publish",permalink:"/es/4.x/cli/publish",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm stop",permalink:"/es/4.x/cli/stop"},next:{title:"pnpm recursive",permalink:"/es/4.x/cli/recursive"}},o=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],l={toc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Publishes a package to the registry."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm [-r] publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]\n")),Object(a.b)("p",null,"When publishing a package inside a ",Object(a.b)("a",{parentName:"p",href:"/es/4.x/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),Object(a.b)("p",null,"You may override some fields before publish, using the ",Object(a.b)("a",{parentName:"p",href:"/es/4.x/package_json#publishconfig"},"publishConfig")," field in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("p",null,"When running this command recursively (",Object(a.b)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--tag-tag"},"--tag ","<","tag>"),Object(a.b)("p",null,"Publishes the package with the given tag. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",Object(a.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(a.b)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted>"),Object(a.b)("p",null,"Tells the registry whether the published package should be public or restricted."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(a.b)("p",null,"Added in: 4.6.0"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(h,p(p({ref:t},l),{},{components:n})):i.a.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);