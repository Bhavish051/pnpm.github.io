(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{356:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return p})),n.d(a,"toc",(function(){return b})),n.d(a,"default",(function(){return c}));var t=n(3),l=n(8),r=(n(0),n(448)),i={id:"add",title:"pnpm add <pkg>"},p={unversionedId:"cli/add",id:"version-5.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. Varsay\u0131lan olarak, herhangi bir yeni paket bir sunum ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 olarak y\xfcklenir.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/add.md",slug:"/cli/add",permalink:"/tr/5.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/tr",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Filtering",permalink:"/tr/5.x/filtering"},next:{title:"pnpm install",permalink:"/tr/5.x/cli/install"}},b=[{value:"TL;DR",id:"tldr",children:[]},{value:"Desteklenen paket konumlar\u0131",id:"desteklenen-paket-konumlar\u0131",children:[{value:"Npm kay\u0131t defterinden y\xfckleyin",id:"npm-kay\u0131t-defterinden-y\xfckleyin",children:[]},{value:"\xc7al\u0131\u015fma alan\u0131ndan y\xfckleyin",id:"\xe7al\u0131\u015fma-alan\u0131ndan-y\xfckleyin",children:[]},{value:"Yerel dosya sisteminden y\xfckleyin",id:"yerel-dosya-sisteminden-y\xfckleyin",children:[]},{value:"Uzak tarball&#39;dan y\xfckle",id:"uzak-tarballdan-y\xfckle",children:[]},{value:"Git deposundan y\xfckleyin",id:"git-deposundan-y\xfckleyin",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:b};function c(e){var a=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. Varsay\u0131lan olarak, herhangi bir yeni paket bir sunum ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 olarak y\xfcklenir."),Object(r.b)("h2",{id:"tldr"},"TL;DR"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm add sax")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"dependencies")," k\u0131sm\u0131na kaydet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm add -D sax")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"devDependencies")," k\u0131sm\u0131na kaydet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm add -O sax")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"optionalDependencies")," k\u0131sm\u0131na kaydet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm add sax@next")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"next")," etiketinden kaydet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),Object(r.b)("td",{parentName:"tr",align:null},"S\xfcr\xfcm belirt ",Object(r.b)("inlineCode",{parentName:"td"},"3.0.0"))))),Object(r.b)("h2",{id:"desteklenen-paket-konumlar\u0131"},"Desteklenen paket konumlar\u0131"),Object(r.b)("h3",{id:"npm-kay\u0131t-defterinden-y\xfckleyin"},"Npm kay\u0131t defterinden y\xfckleyin"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm add paket-ismi"),", ",Object(r.b)("inlineCode",{parentName:"p"},"paket-ismi")," paketinin son s\xfcr\xfcm\xfcn\xfc varsay\u0131lan olarak ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm kay\u0131t defterinden")," y\xfckler. Paketi ba\u015fka kay\u0131t defterinden y\xfcklemek i\xe7in tarball dosyas\u0131n\u0131n linkini kullanabilirsiniz (bkz. ",Object(r.b)("a",{parentName:"p",href:"#install-from-remote-tarball"},"ilgili rehber"),")."),Object(r.b)("p",null,"Paketleri \u015fu \u015fekilde de kurabilirsiniz:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"etiket: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),Object(r.b)("li",{parentName:"ul"},"s\xfcr\xfcm: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),Object(r.b)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131: ",Object(r.b)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0<0.2.0"'))),Object(r.b)("h3",{id:"\xe7al\u0131\u015fma-alan\u0131ndan-y\xfckleyin"},"\xc7al\u0131\u015fma alan\u0131ndan y\xfckleyin"),Object(r.b)("p",null,"Note that when adding dependencies and working within a ",Object(r.b)("a",{parentName:"p",href:"/tr/5.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",Object(r.b)("a",{parentName:"p",href:"/tr/5.x/workspaces#link-workspace-packages"},Object(r.b)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",Object(r.b)("a",{parentName:"p",href:"/tr/5.x/workspaces#workspace-ranges-workspace"},Object(r.b)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),Object(r.b)("h3",{id:"yerel-dosya-sisteminden-y\xfckleyin"},"Yerel dosya sisteminden y\xfckleyin"),Object(r.b)("p",null,"Yerel dosya sisteminden y\xfcklemenin iki yolu vard\u0131r:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"tarball dosyas\u0131ndan (",Object(r.b)("inlineCode",{parentName:"li"},".tar"),", ",Object(r.b)("inlineCode",{parentName:"li"},".tar.gz")," veya ",Object(r.b)("inlineCode",{parentName:"li"},".tgz"),")"),Object(r.b)("li",{parentName:"ol"},"dizinden")),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),Object(r.b)("p",null,"Bir dizinden kurulum yapt\u0131\u011f\u0131n\u0131zda, ge\xe7erli projenin ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," k\u0131sm\u0131nda bir sembolik ba\u011flant\u0131 olu\u015fturulacakt\u0131r, bu nedenle ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm link")," komutunu \xe7al\u0131\u015ft\u0131rmakla ayn\u0131d\u0131r."),Object(r.b)("h3",{id:"uzak-tarballdan-y\xfckle"},"Uzak tarball'dan y\xfckle"),Object(r.b)("p",null,'Arg\xfcman "http://" ya da "https://" ile ba\u015flayan \xe7ekilebilir bir URL olmal\u0131d\u0131r.'),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),Object(r.b)("h3",{id:"git-deposundan-y\xfckleyin"},"Git deposundan y\xfckleyin"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),Object(r.b)("p",null,"Paketi, Git ile klonlayarak bar\u0131nd\u0131r\u0131lan Git sa\u011flay\u0131c\u0131s\u0131ndan y\xfckler. Belirli Git sa\u011flay\u0131c\u0131lar\u0131 i\xe7in bir protokol kullanabilirsiniz. \xd6rne\u011fin ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add github:kullan\u0131c\u0131/repo")),Object(r.b)("p",null,"Git'ten \u015fu \u015fekilde kurabilirsiniz:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"master'dan son commit: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),Object(r.b)("li",{parentName:"ul"},"commit: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),Object(r.b)("li",{parentName:"ul"},"bran\u015f: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),Object(r.b)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(r.b)("p",null,"Belirtilen paketleri ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," k\u0131sm\u0131na kurar."),Object(r.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(r.b)("p",null,"Belirtilen paketleri ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131na kurar."),Object(r.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(r.b)("p",null,"Belirtilen paketleri ",Object(r.b)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131na kurar."),Object(r.b)("h3",{id:"--save-exact--e"},"--save-exact, -E"),Object(r.b)("p",null,"Kaydedilen ba\u011f\u0131ml\u0131l\u0131klar, pnpm'in varsay\u0131lan anlamsal s\xfcr\xfcmlendirme aral\u0131\u011f\u0131 i\u015flecini kullanmak yerine tam bir s\xfcr\xfcmle yap\u0131land\u0131r\u0131lacakt\u0131r."),Object(r.b)("h3",{id:"--save-peer"},"--save-peer"),Object(r.b)("p",null,"Added in: v3.2.0"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"--save-peer")," kullanmak bir veya birden fazla paketi ",Object(r.b)("inlineCode",{parentName:"p"},"peerDependencies")," k\u0131sm\u0131na ekler ve geli\u015ftirici gereklili\u011fi olarak kurar."),Object(r.b)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),Object(r.b)("p",null,"v3.6.0 ile eklendi"),Object(r.b)("p",null,"K\xf6k \xe7al\u0131\u015fma alan\u0131na yeni ba\u011f\u0131ml\u0131l\u0131k eklerken ",Object(r.b)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," ya da ",Object(r.b)("inlineCode",{parentName:"p"},"-W")," bayra\u011f\u0131 kullan\u0131lmazsa hata verir."),Object(r.b)("p",null,"\xd6rne\u011fin, ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),Object(r.b)("h3",{id:"--global"},"--global"),Object(r.b)("p",null,"Global olarak bir paket y\xfckler."),Object(r.b)("h3",{id:"--workspace"},"--workspace"),Object(r.b)("p",null,"Added in: v4.4.0"),Object(r.b)("p",null,"Yeni ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 yaln\u0131zca \xe7al\u0131\u015fma alan\u0131nda bulunursa ekler."),Object(r.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/tr/5.x/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0},448:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return u}));var t=n(0),l=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=l.a.createContext({}),c=function(e){var a=l.a.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},o=function(e){var a=c(e.components);return l.a.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),o=c(n),m=t,u=o["".concat(i,".").concat(m)]||o[m]||s[m]||r;return n?l.a.createElement(u,p(p({ref:a},d),{},{components:n})):l.a.createElement(u,p({ref:a},d))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var b in a)hasOwnProperty.call(a,b)&&(p[b]=a[b]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);