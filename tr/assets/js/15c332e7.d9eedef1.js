(self.webpackChunk=self.webpackChunk||[]).push([[1465],{9848:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>k,kt:()=>p});var r=n(7689);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=r.createContext({}),s=function(e){var a=r.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},k=function(e){var a=s(e.components);return r.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=t,c=m["".concat(d,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(c,l(l({ref:a},k),{},{components:n})):r.createElement(c,l({ref:a},k))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},293:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>o,metadata:()=>d,toc:()=>s,default:()=>u});var r=n(1424),t=n(2489),i=(n(7689),n(9848)),l=["components"],o={id:"motivation",title:"Motivasyon"},d={unversionedId:"motivation",id:"version-5.x/motivation",isDocsHomePage:!1,title:"Motivasyon",description:"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/tr/5.x/motivation",editUrl:"https://crowdin.com/project/pnpm/tr",version:"5.x",frontMatter:{id:"motivation",title:"Motivasyon"},sidebar:"version-5.x/docs",next:{title:"Kurulum",permalink:"/tr/5.x/installation"}},s=[{value:"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum",id:"daha-az-disk-t\xfcketimi-ve-a\u015f\u0131r\u0131-h\u0131zl\u0131-kurulum",children:[]},{value:"D\xfcz, klasik, &quot;hepsi bir arada&quot; node_modules dizin yap\u0131s\u0131ndan kurtulma",id:"d\xfcz-klasik-hepsi-bir-arada-node_modules-dizin-yap\u0131s\u0131ndan-kurtulma",children:[]}],k={toc:s};function u(e){var a=e.components,n=(0,t.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"daha-az-disk-t\xfcketimi-ve-a\u015f\u0131r\u0131-h\u0131zl\u0131-kurulum"},"Daha az disk t\xfcketimi ve a\u015f\u0131r\u0131 h\u0131zl\u0131 kurulum"),(0,i.kt)("p",null,"Varsayal\u0131m ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," ad\u0131nda bir k\xfct\xfcphaneyi (dependency), 100 adet projende kullan\u0131yorsun. Yarn ve npm kullan\u0131rken, ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," ad\u0131ndaki k\xfct\xfcphane, 100 adet projende tek tek klonlanarak y\xfcklendi\u011finden, disk t\xfcketimini x100 defa artt\u0131rarak depolam\u0131\u015f olursun. Pnpm ise",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," k\xfct\xfcphanesini ortak bir alanda depolar ve:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"E\u011fer, ",(0,i.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesinin birden fazla s\xfcr\xfcm\xfcn\xfcn kullan\u0131lmas\u0131 gerekiyorsa, ortak alanda sadece farkl\u0131 olan dosyalar depolan\u0131r ve fazla yer t\xfcketimine m\xfcsade etmez. \xd6rne\u011fin, ",(0,i.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesinde 100 adet dosya y\xfcklenmi\u015f ise ve gelecekte yay\u0131nlanacak olan yeni s\xfcr\xfcmde 1 adet dosyada de\u011fi\u015fiklik olmu\u015fsa; ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm update")," komutu, yeni s\xfcr\xfcm i\xe7in 100 adet dosyay\u0131 yeniden indirmek/y\xfcklemek yerine sadece de\u011fi\u015ftirilmi\u015f olan o 1 dosyay\u0131 \xe7ekerek g\xfcncellemeyi uygular."),(0,i.kt)("li",{parentName:"ol"},"B\xfct\xfcn dosyalar, disk \xfczerinde sadece bir yerde depolan\u0131r. Bu durumda ",(0,i.kt)("inlineCode",{parentName:"li"},"abc")," k\xfct\xfcphanesini farkl\u0131 bir projeye dahil etmek istedi\u011fin zaman, h\xe2li haz\u0131rda ortak alanda depolanan dosyalara, hard-link (sembolik ba\u011f) olu\u015fturularak, ekstra disk t\xfcketiminden tasarruf edilmi\u015f olur. B\xf6ylece bir k\xfct\xfcphanenin/paketin belirli bir s\xfcr\xfcm\xfcn\xfc, projelerin aras\u0131nda payla\u015ft\u0131rma imkan\u0131 elde etmi\u015f olursun.")),(0,i.kt)("p",null,"Sonu\xe7 olarak, projelerinde kulland\u0131\u011f\u0131n k\xfct\xfcphanelerin say\u0131s\u0131na orant\u0131l\u0131 olarak disk t\xfcketiminde ve y\xfckleme h\u0131z\u0131nda, m\xfcthi\u015f bir seviyede kazan\xe7 sa\u011flam\u0131\u015f olursun!"),(0,i.kt)("h2",{id:"d\xfcz-klasik-hepsi-bir-arada-node_modules-dizin-yap\u0131s\u0131ndan-kurtulma"},'D\xfcz, klasik, "hepsi bir arada" node_modules dizin yap\u0131s\u0131ndan kurtulma'),(0,i.kt)("p",null,"Normalde, npm ile projeye dahil etti\u011fimiz k\xfct\xfcphane ve bu k\xfct\xfcphane ile birlikte gelen yan k\xfct\xfcphanelerin tamam\u0131, node_modules klas\xf6r\xfcn\xfcn ana dizininde, yan yana depolan\u0131r. Haliyle sonu\xe7 olarak, projeye kesin olarak dahil etmedi\u011fimiz yan k\xfct\xfcphanelere, kaynak koduz eri\u015fim sa\u011flayabilir."),(0,i.kt)("p",null,"pnpm ise, sembolik ba\u011flar (symlink) olu\u015fturarak projenin node_modules klas\xf6r\xfcne sadece kesin olarak belirtilmi\u015f k\xfct\xfcphaneleri dahil eder. Pnpm'in, benzersiz ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r yap\u0131s\u0131 ve bu yap\u0131n\u0131n Node.js ekosistemi ile nas\u0131l ve neden uyumlu bi\xe7imde \xe7al\u0131\u015ft\u0131\u011f\u0131 hakk\u0131nda daha fazla bilgi almak istersen e\u011fer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"D\xfcz, klasik node_modules yap\u0131s\u0131 art\u0131k tek yol de\u011fil")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tr/5.x/symlinked-node-modules-structure"},(0,i.kt)("inlineCode",{parentName:"a"},"node_modules"),"'da sembolik ba\u011f (symlink) yap\u0131s\u0131"))))}u.isMDXComponent=!0}}]);