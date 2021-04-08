(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{413:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(8),l=(t(0),t(448)),o={id:"list",title:"pnpm list"},a={unversionedId:"cli/list",id:"version-6.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/list.md",slug:"/cli/list",permalink:"/ru/cli/list",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm audit",permalink:"/ru/cli/audit"},next:{title:"pnpm outdated",permalink:"/ru/cli/outdated"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Aliases: ",Object(l.b)("inlineCode",{parentName:"p"},"ls")),Object(l.b)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u0432 \u0434\u0435\u0440\u0435\u0432\u0435 \u0432\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438."),Object(l.b)("p",null,"Positional arguments are ",Object(l.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",Object(l.b)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(l.b)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),Object(l.b)("h3",{id:"--json"},"--json"),Object(l.b)("p",null,"Added in: 3.7.0"),Object(l.b)("p",null,"Log output in JSON format."),Object(l.b)("h3",{id:"--long"},"--long"),Object(l.b)("p",null,"Show extended information."),Object(l.b)("h3",{id:"--parseable"},"--parseable"),Object(l.b)("p",null,"Outputs package directories in a parseable format instead of their tree view."),Object(l.b)("h3",{id:"--global"},"--global"),Object(l.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(l.b)("h3",{id:"--depth-number"},"--depth ","<","number",">"),Object(l.b)("p",null,"Max display depth of the dependency tree."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",Object(l.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(l.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(l.b)("p",null,"Display only the dependency graph for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(l.b)("p",null,"Display only the dependency graph for packages in ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h3",{id:"--no-optional"},"--no-optional"),Object(l.b)("p",null,"Don't display packages from ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/ru/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),d=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||u[b]||l;return t?i.a.createElement(m,a(a({ref:n},p),{},{components:t})):i.a.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=b;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<l;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);