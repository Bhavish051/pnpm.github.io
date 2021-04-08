(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(u,c(c({ref:t},o),{},{components:n})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(448)),l={id:"filtering",title:"Filtering",original_id:"filtering"},c={unversionedId:"filtering",id:"version-3.x/filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0 (Ability to pass selectors after -- added in v2.15.0)",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-3.x/filtering.md",slug:"/filtering",permalink:"/hu/3.x/filtering",editUrl:"https://crowdin.com/project/pnpm/hu",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"Configuring",permalink:"/hu/3.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/hu/3.x/cli/add"}},p=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-2",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]}],o={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Added in: v2.13.0 (Ability to pass selectors after ",Object(i.b)("inlineCode",{parentName:"p"},"--")," added in v2.15.0)"),Object(i.b)("p",null,"Filtering allows to restrict commands to subsets of packages."),Object(i.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by relation."),Object(i.b)("p",null,"Selectors may be specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <command> --filter <package_selector>\n")),Object(i.b)("p",null,"Most of the commands, also allow passing selectors after ",Object(i.b)("inlineCode",{parentName:"p"},"--"),". Except commands that run scripts (",Object(i.b)("inlineCode",{parentName:"p"},"pnpm run"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm start"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm test"),", etc)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <command> -- &lt;package_selectors>...\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"An article that compares Lerna's filtering to pnpm's: ",Object(i.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"))),Object(i.b)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select an exact package, just specify its name (",Object(i.b)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern to select a set of packages (",Object(i.b)("inlineCode",{parentName:"p"},"@babel/*"),")."),Object(i.b)("p",null,"Usage examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter @babel/core\npnpm install --filter @babel/*\n# or\npnpm install -- @babel/core\npnpm install -- @babel/*\n")),Object(i.b)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",Object(i.b)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run installation in all dependencies of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter foo...\n# or\npnpm install -- foo...\n")),Object(i.b)("p",null,'You may use a pattern to select a set of "root" packages:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter @babel/preset-*...\n# or\npnpm install -- @babel/preset-*...\n")),Object(i.b)("h2",{id:"--filter-package_name-2"},"--filter ...","<","package_name>"),Object(i.b)("p",null,"Added in: 2.14.0"),Object(i.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",Object(i.b)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, the next command will run installation in all dependents of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter ...foo\n# or\npnpm install -- ...foo\n")),Object(i.b)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install --filter ...foo --filter bar --filter qar...\n# or\npnpm install -- ...foo bar qar...\n")),Object(i.b)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(i.b)("p",null,"Added in: v2.15.0"))}s.isMDXComponent=!0}}]);