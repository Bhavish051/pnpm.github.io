"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5216],{9848:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>u});var a=o(7689);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),m=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):p(p({},n),e)),o},d=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(o),u=t,f=c["".concat(s,".").concat(u)]||c[u]||l[u]||r;return o?a.createElement(f,p(p({ref:n},d),{},{components:o})):a.createElement(f,p({ref:n},d))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,p=new Array(r);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,p[1]=i;for(var m=2;m<r;m++)p[m]=o[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3596:(e,n,o)=>{o.r(n),o.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>m,toc:()=>d,default:()=>c});var a=o(2951),t=o(9877),r=(o(7689),o(9848)),p=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},s=void 0,m={unversionedId:"pnpm-vs-npm",id:"version-6.x/pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"A estrutura plana do npm",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/pt/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/pt",version:"6.x",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"}},d=[{value:"A estrutura plana do npm",id:"a-estrutura-plana-do-npm",children:[]},{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Depend\xeancias de diret\xf3rio",id:"depend\xeancias-de-diret\xf3rio",children:[]}],l={toc:d};function c(e){var n=e.components,o=(0,t.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-estrutura-plana-do-npm"},"A estrutura plana do npm"),(0,r.kt)("p",null,"O npm mant\xeam uma ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"estrutura de depend\xeancias plana")," desde a vers\xe3o 3. Isso faz com que menos espa\xe7o em disco seja utilizado, mas tem o efeito colateral de deixar a pasta ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," bagun\xe7ada."),(0,r.kt)("p",null,"Por outro lado, pnpm gerencia ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," utilizando hard links e links simb\xf3licos, direcionados a um armazenamento global. Isso te d\xe1 os benef\xedcios de bem menos uso de espa\xe7o em disco, enquanto mant\xe9m seu ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," limpo. H\xe1 documenta\xe7\xe3o acerca do",(0,r.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"layout do armazenamento global")," se voc\xea quiser saber mais."),(0,r.kt)("p",null,"A coisa boa sobre a estrutura adequada do ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),' feita pelo pnpm \xe9 que "',(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"ela ajuda a evitar bugs"),'" ao tornar imposs\xedvel que sejam usados m\xf3dulos n\xe3o especificados no ',(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," do projeto."),(0,r.kt)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,r.kt)("p",null,"pnpm n\xe3o permite a instala\xe7\xe3o de pacotes sem salv\xe1-los no ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Se nenhum par\xe2metro for passado para ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add"),", pacotes s\xe3o salvos como depend\xeancias. Assim como no npm, ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-dev")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-optional")," podem ser utilizados para instalar pacotes como depend\xeancias de desenvolvimento ou opcionais."),(0,r.kt)("p",null,"Como consequ\xeancia dessa limita\xe7\xe3o, projetos n\xe3o ter\xe3o nenhum pacote estranho ao usarem pnpm, a n\xe3o ser que removam uma depend\xeancia e deixem-na \xf3rf\xe3. Por isso que a implementa\xe7\xe3o do pnpm do ",(0,r.kt)("a",{parentName:"p",href:"cli/prune"},"comando prune")," n\xe3o permite que voc\xea especifique quais pacotes ser\xe3o removidos - ele SEMPRE remove todos os pacotes estranhos e \xf3rf\xe3os."),(0,r.kt)("h2",{id:"depend\xeancias-de-diret\xf3rio"},"Depend\xeancias de diret\xf3rio"),(0,r.kt)("p",null,"Depend\xeancias de diret\xf3rio come\xe7am com o prefixo ",(0,r.kt)("inlineCode",{parentName:"p"},"file:")," e apontam para um diret\xf3rio no sistema de arquivos. Assim como o npm, pnpm cria um link simb\xf3lico para essas depend\xeancias. Ao contr\xe1rio do npm, pnpm n\xe3o instala as depend\xeancias do arquivo."),(0,r.kt)("p",null,"Isso significa que se voc\xea tem um pacote chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,r.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") que tem ",(0,r.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," como depend\xeancia, pnpm n\xe3o ir\xe1 instalar depend\xeancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"<root>/bar")," quando voc\xea executar ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," em ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,r.kt)("p",null,"Se voc\xea precisar executar instala\xe7\xf5es em v\xe1rios pacotes ao mesmo tempo, como em um monorepo, voc\xea deve ver a documenta\xe7\xe3o para ",(0,r.kt)("a",{parentName:"p",href:"cli/recursive"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}c.isMDXComponent=!0}}]);