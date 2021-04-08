(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),c=(n(0),n(448)),l={id:"filtering",title:"\u8fc7\u6ee4"},i={unversionedId:"filtering",id:"version-5.x/filtering",isDocsHomePage:!1,title:"\u8fc7\u6ee4",description:"\u6dfb\u52a0\u4e8e\uff1av2.13.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/filtering.md",slug:"/filtering",permalink:"/zh/5.x/filtering",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"\u914d\u7f6e",permalink:"/zh/5.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/zh/5.x/cli/add"}},p=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[]},{value:"\u591a\u91cd\u6027",id:"\u591a\u91cd\u6027",children:[]},{value:"\u6392\u9664",id:"\u6392\u9664",children:[]},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[]}],o={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),Object(c.b)("p",null,"\u8fc7\u6ee4\u5141\u8bb8\u60a8\u5c06\u547d\u4ee4\u9650\u5236\u4e8e\u5305\u7684\u7279\u5b9a\u5b50\u96c6\u3002"),Object(c.b)("p",null,"pnpm \u652f\u6301\u4e30\u5bcc\u9009\u62e9\u5668\u8bed\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u6216\u5173\u7cfb\u9009\u62e9\u5305\u3002"),Object(c.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"--filter")," \u6807\u5fd7\u6307\u5b9a\u9009\u62e9\u5668\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},Object(c.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's")))),Object(c.b)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(c.b)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),Object(c.b)("p",null,"To select an exact package, just specify its name (",Object(c.b)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a pattern to select a set of packages (",Object(c.b)("inlineCode",{parentName:"p"},"@scope/*"),")."),Object(c.b)("p",null,"Examples:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),Object(c.b)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(c.b)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),Object(c.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with an ellipsis: ",Object(c.b)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run tests of ",Object(c.b)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),Object(c.b)("p",null,"You may use a pattern to select a set of root packages:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),Object(c.b)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),Object(c.b)("p",null,"Added in: v4.4.0"),Object(c.b)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",Object(c.b)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),Object(c.b)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),Object(c.b)("p",null,"Added in: v2.14.0"),Object(c.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",Object(c.b)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",Object(c.b)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),Object(c.b)("h2",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),Object(c.b)("p",null,"Added in: v4.4.0"),Object(c.b)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",Object(c.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),Object(c.b)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(c.b)("p",null,"Added in: v2.15.0"),Object(c.b)("p",null,"To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format."),Object(c.b)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),Object(c.b)("p",null,"Added in: v4.7.0"),Object(c.b)("p",null,"Includes all projects that are under the specified directory."),Object(c.b)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),Object(c.b)("p",null,"It may also be combined with ",Object(c.b)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),Object(c.b)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),Object(c.b)("h2",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),Object(c.b)("p",null,"Added in: v4.6.0"),Object(c.b)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",Object(c.b)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),Object(c.b)("p",null,"For example, the next command will run tests in all changed packages since ",Object(c.b)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),Object(c.b)("h2",{id:"\u591a\u91cd\u6027"},"\u591a\u91cd\u6027"),Object(c.b)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),Object(c.b)("h2",{id:"\u6392\u9664"},"\u6392\u9664"),Object(c.b)("p",null,"Added in: v5.8.0"),Object(c.b)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',Object(c.b)("inlineCode",{parentName:"p"},"\\!"),"."),Object(c.b)("p",null,"For instance, this will run a command in all projects except for ",Object(c.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),Object(c.b)("p",null,"And this will run a command in all projects that are not under the ",Object(c.b)("inlineCode",{parentName:"p"},"lib")," directory:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),Object(c.b)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),Object(c.b)("p",null,"Added in: v5.14.0"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),Object(c.b)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))}s.isMDXComponent=!0},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||b[m]||c;return n?r.a.createElement(u,i(i({ref:t},o),{},{components:n})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);