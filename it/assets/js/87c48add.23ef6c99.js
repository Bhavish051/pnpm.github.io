"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8090],{9848:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4772:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>d,default:()=>m});var a=t(2951),o=t(9877),i=(t(7689),t(9848)),r=["components"],s={id:"faq",title:"Domande frequenti (FAQ)"},p=void 0,l={unversionedId:"faq",id:"version-6.x/faq",isDocsHomePage:!1,title:"Domande frequenti (FAQ)",description:"Perch\xe9 la mia cartella node_modules utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/it/faq",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",frontMatter:{id:"faq",title:"Domande frequenti (FAQ)"}},d=[{value:"Perch\xe9 la mia cartella <code>node_modules</code> utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?",id:"perch\xe9-la-mia-cartella-node_modules-utilizza-spazio-su-disco-se-i-pacchetti-sono-salvati-in-un-archivio-globale",children:[]},{value:"Funziona su Windows?",id:"funziona-su-windows",children:[]},{value:"But the nested <code>node_modules</code> approach is incompatible with Windows?",id:"but-the-nested-node_modules-approach-is-incompatible-with-windows",children:[]},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",children:[]},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[]},{value:"Does pnpm work across multiple drives or filesystems?",id:"does-pnpm-work-across-multiple-drives-or-filesystems",children:[{value:"Store path is specified",id:"store-path-is-specified",children:[]},{value:"Store path is NOT specified",id:"store-path-is-not-specified",children:[]}]},{value:"What does <code>pnpm store prune</code> do? Is it harmful?",id:"what-does-pnpm-store-prune-do-is-it-harmful",children:[]},{value:"Cosa significa <code>pnpm</code>?",id:"cosa-significa-pnpm",children:[]},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",children:[{value:"Solution 1",id:"solution-1",children:[]},{value:"Solution 2",id:"solution-2",children:[]},{value:"Solution 3",id:"solution-3",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"perch\xe9-la-mia-cartella-node_modules-utilizza-spazio-su-disco-se-i-pacchetti-sono-salvati-in-un-archivio-globale"},"Perch\xe9 la mia cartella ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?"),(0,i.kt)("p",null,"pnpm crea ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},'"hard link"')," dall'archivio globale alla cartella ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," del progetto. Hard links point to the same place on the disk where the original files are. So, for example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in your project as a dependency and it occupies 1MB of space, then it will look like it occupies 1MB of space in the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and the same amount of space in the global store. However, that 1MB is ",(0,i.kt)("em",{parentName:"p"},"the same space")," on the disk addressed from two different locations. So in total ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," occupies 1MB, not 2MB."),(0,i.kt)("p",null,"For more on this subject:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),(0,i.kt)("h2",{id:"funziona-su-windows"},"Funziona su Windows?"),(0,i.kt)("p",null,"Short answer: Yes."),(0,i.kt)("p",null,"Long answer: Using symbolic linking on Windows is problematic to say the least, however, pnpm has a workaround. Per Windows, usiamo ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junctions"),"."),(0,i.kt)("h2",{id:"but-the-nested-node_modules-approach-is-incompatible-with-windows"},"But the nested ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," approach is incompatible with Windows?"),(0,i.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),". However, pnpm does not create deep folders, it stores all packages flatly and uses symbolic links to create the dependency tree structure."),(0,i.kt)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),(0,i.kt)("p",null,"Although pnpm uses linking to put dependencies into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," together with its own dependencies."),(0,i.kt)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),(0,i.kt)("p",null,"One package can have different sets of dependencies on one machine."),(0,i.kt)("p",null,"In project ",(0,i.kt)("strong",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",(0,i.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,i.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,i.kt)("h2",{id:"does-pnpm-work-across-multiple-drives-or-filesystems"},"Does pnpm work across multiple drives or filesystems?"),(0,i.kt)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,i.kt)("p",null,"pnpm functions differently in the 2 cases below:"),(0,i.kt)("h3",{id:"store-path-is-specified"},"Store path is specified"),(0,i.kt)("p",null,"If the store path is specified via ",(0,i.kt)("a",{parentName:"p",href:"/it/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". If the pnpm store is located on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", then all required packages will be directly copied to the project location instead of being linked. This severely inhibits the storage and performance benefits of pnpm."),(0,i.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,i.kt)("p",null,"If the store path is not set, then multiple stores are created (one per drive or filesystem)."),(0,i.kt)("p",null,"If installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),(0,i.kt)("h2",{id:"what-does-pnpm-store-prune-do-is-it-harmful"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm store prune")," do? Is it harmful?"),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," removes ",(0,i.kt)("em",{parentName:"p"},"unreferenced packages"),"."),(0,i.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,i.kt)("p",null,"For example, during ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,i.kt)("p",null,"It is best practice to run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,i.kt)("h2",{id:"cosa-significa-pnpm"},"Cosa significa ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," significa ",(0,i.kt)("inlineCode",{parentName:"p"},"npm performante"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,i.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,i.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,i.kt)("h3",{id:"solution-1"},"Solution 1"),(0,i.kt)("p",null,"In the following example, a dependency does ",(0,i.kt)("strong",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,i.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,i.kt)("strong",{parentName:"p"},"add ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,i.kt)("p",null,"You can do so, by installing it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"solution-2"},"Solution 2"),(0,i.kt)("p",null,"One of the solutions is to use ",(0,i.kt)("a",{parentName:"p",href:"/it/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"An example was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,i.kt)("p",null,"It used to throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"The problem was that ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"The solution was to create a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,i.kt)("p",null,"After creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."),(0,i.kt)("h3",{id:"solution-3"},"Solution 3"),(0,i.kt)("p",null,"In case there are too many issues, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,i.kt)("p",null,"To use it, try ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}m.isMDXComponent=!0}}]);