(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{425:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(8),r=(t(0),t(448)),i={id:"fetch",title:"pnpm fetch"},c={unversionedId:"cli/fetch",id:"version-6.x/cli/fetch",isDocsHomePage:!1,title:"pnpm fetch",description:"Fetch packages from a lockfile into virtual store, package manifest is ignored.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/cli/fetch.md",slug:"/cli/fetch",permalink:"/es/cli/fetch",editUrl:"https://crowdin.com/project/pnpm/es",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm prune",permalink:"/es/cli/prune"},next:{title:"pnpm install-test",permalink:"/es/cli/install-test"}},l=[{value:"Usage scenario",id:"usage-scenario",children:[]},{value:"Options",id:"options",children:[{value:"--dev",id:"--dev",children:[]},{value:"--prod",id:"--prod",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Fetch packages from a lockfile into virtual store, package manifest is ignored."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This is an experimental command. Breaking changes may be introduced in non-major versions of the CLI."))),Object(r.b)("h2",{id:"usage-scenario"},"Usage scenario"),Object(r.b)("p",null,"This command is specifically designed to boost building a docker image."),Object(r.b)("p",null,"You may have read the ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js app, if you didn't read it yet, you may want to read it first."),Object(r.b)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using pnpm, which shall look like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),Object(r.b)("p",null,"As long as there is no change to ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc"),", ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",Object(r.b)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of ",Object(r.b)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time when building a docker image."),Object(r.b)("p",null,"However, modification to ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than we expected, because it does not only contain dependencies, but may also contain the version number, scripts, and arbitrary configuration for any other tool."),Object(r.b)("p",null,"It's also hard to maintain a Dockerfile that build a monorepo project, it may look like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/backage.json packages/foo/\nCOPY packages/bar/backage.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),Object(r.b)("p",null,"As you can see, the Dockerfile has to be updated when you add or remove sub-packages."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm fetch")," will solve the above problem perfectly by providing the ability to fetch package to virtual store with information only from a lockfile."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),Object(r.b)("p",null,"It works for both simple project and monorepo project, ",Object(r.b)("inlineCode",{parentName:"p"},"--offline")," enforces pnpm not to communicate with package registry as all needed packages shall be already presented in the virtual store."),Object(r.b)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the layer ",Object(r.b)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", which will save you much time."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"--dev"},"--dev"),Object(r.b)("p",null,"Only development packages will be fetched"),Object(r.b)("h3",{id:"--prod"},"--prod"),Object(r.b)("p",null,"Development packages will not be fetched"))}s.isMDXComponent=!0},448:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,u=d["".concat(i,".").concat(b)]||d[b]||m[b]||r;return t?o.a.createElement(u,c(c({ref:n},p),{},{components:t})):o.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);