(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{411:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(8),a=(r(0),r(448)),c={id:"publish",title:"pnpm publish"},l={unversionedId:"cli/publish",id:"version-2.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-2.x/cli/publish.md",slug:"/cli/publish",permalink:"/tr/2.x/cli/publish",editUrl:"https://crowdin.com/project/pnpm/tr",version:"2.x"},p=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"--force",id:"--force",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"--force",id:"--force-1",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:p};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Publishes a package to the registry."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),Object(a.b)("p",null,"When publishing a package inside a ",Object(a.b)("a",{parentName:"p",href:"/tr/2.x/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),Object(a.b)("p",null,"You may override some fields before publish, using the ",Object(a.b)("a",{parentName:"p",href:"/tr/2.x/package_json#publishconfig"},"publishConfig")," field in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("p",null,"When running this command recursively (",Object(a.b)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),Object(a.b)("p",null,"Publishes the package with the given tag. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",Object(a.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),Object(a.b)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),Object(a.b)("p",null,"Tells the registry whether the published package should be public or restricted."),Object(a.b)("h3",{id:"--force"},"--force"),Object(a.b)("p",null,"Added in: v5.18.0"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pnpm publish -r --force")," will try to publish packages even if their current version is already in the registry."),Object(a.b)("h3",{id:"git-checks"},"git-checks"),Object(a.b)("p",null,"Added in: v4.11.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default : ",Object(a.b)("strong",{parentName:"li"},"true")," (since v5)"),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When true, ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),Object(a.b)("h3",{id:"publish-branch"},"publish-branch"),Object(a.b)("p",null,"Added in: v4.11.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"master")),Object(a.b)("li",{parentName:"ul"},"Types: ",Object(a.b)("strong",{parentName:"li"},"String"))),Object(a.b)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),Object(a.b)("h3",{id:"--force-1"},"--force"),Object(a.b)("p",null,"Added in: v5.18.0"),Object(a.b)("p",null,"Try to publish packages even if their current version is already found in the registry or any other checks fail."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,"Added in: 4.6.0"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/tr/2.x/filtering"},"Read more about filtering.")))}b.isMDXComponent=!0},448:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=b(r),h=n,d=s["".concat(c,".").concat(h)]||s[h]||u[h]||a;return r?i.a.createElement(d,l(l({ref:t},o),{},{components:r})):i.a.createElement(d,l({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<a;o++)c[o]=r[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);