"use strict";(self.webpackChunktil_archive=self.webpackChunktil_archive||[]).push([[648],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return k}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?t.createElement(d,i(i({ref:n},c),{},{components:a})):t.createElement(d,i({ref:n},c))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3725:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"JavaScript \ubc30\uc5f4 \uba54\uc18c\ub4dc\uc640 \ube44\ub3d9\uae30 \ucc98\ub9ac"},p=void 0,s={unversionedId:"JavaScript/asyncInArrayMethods",id:"JavaScript/asyncInArrayMethods",isDocsHomePage:!1,title:"JavaScript \ubc30\uc5f4 \uba54\uc18c\ub4dc\uc640 \ube44\ub3d9\uae30 \ucc98\ub9ac",description:"\\ \ubc30\uc5f4 \uba54\uc18c\ub4dc\uc5d0\uc11c\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac",source:"@site/docs/JavaScript/asyncInArrayMethods.md",sourceDirName:"JavaScript",slug:"/JavaScript/asyncInArrayMethods",permalink:"/TIL-archive/JavaScript/asyncInArrayMethods",tags:[],version:"current",frontMatter:{title:"JavaScript \ubc30\uc5f4 \uba54\uc18c\ub4dc\uc640 \ube44\ub3d9\uae30 \ucc98\ub9ac"},sidebar:"tutorialSidebar",previous:{title:"XMLHttpRequest",permalink:"/TIL-archive/JavaScript/XMLHttpRequest"},next:{title:"try..catch..finally \uc0ac\uc6a9\ubc95 \ubc0f \uc8fc\uc758\ud560 \uc810",permalink:"/TIL-archive/JavaScript/errorHandling"}},c=[{value:"# \ubc30\uc5f4 \uba54\uc18c\ub4dc\uc5d0\uc11c\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac",id:"-\ubc30\uc5f4-\uba54\uc18c\ub4dc\uc5d0\uc11c\uc758-\ube44\ub3d9\uae30-\ucc98\ub9ac",children:[]},{value:"# \ubc30\uc5f4 \uba54\uc18c\ub4dc\ub97c \ube44\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud560 \ub54c\uc758 \ud2b9\uc9d5, \uc8fc\uc758\ud560 \uc810 \ubc0f \uac19\uc740 \ub3d9\uc791\uc744 \ud558\ub3c4\ub85d \uad6c\ud604\ud558\uae30.",id:"-\ubc30\uc5f4-\uba54\uc18c\ub4dc\ub97c-\ube44\ub3d9\uae30-\ubc29\uc2dd\uc73c\ub85c-\uc0ac\uc6a9\ud560-\ub54c\uc758-\ud2b9\uc9d5-\uc8fc\uc758\ud560-\uc810-\ubc0f-\uac19\uc740-\ub3d9\uc791\uc744-\ud558\ub3c4\ub85d-\uad6c\ud604\ud558\uae30",children:[]}],m={toc:c};function u(e){var n=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"-\ubc30\uc5f4-\uba54\uc18c\ub4dc\uc5d0\uc11c\uc758-\ube44\ub3d9\uae30-\ucc98\ub9ac"},"#"," \ubc30\uc5f4 \uba54\uc18c\ub4dc\uc5d0\uc11c\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1\ucd08 \uac04\uaca9\uc73c\ub85c 1 ~ 10\uae4c\uc9c0\uc758 \uc22b\uc790\ub97c id\ub85c \ud558\uc5ec HTTP GET \uc694\uccad\uc744 \ubcf4\ub0b4\uc11c \uc21c\ucc28\uc801\uc73c\ub85c \ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4\uace0 \uac00\uc815.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ids = [1,2,3,4,5,6,7,8,9,10];\n\nids.forEach(async id => {\n    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)\n    const json = await res.json();\n    console.log(json);\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\uc774\ub514\ub97c 1\ubd80\ud130 10\uae4c\uc9c0 \uc21c\ucc28\uc801\uc73c\ub85c HTTP\uc694\uccad\uc744 \uc804\uc1a1\ud558\uc600\uc9c0\ub9cc, \uc751\ub2f5\uc73c\ub85c \ubc1b\uc740 \ub0b4\uc6a9\uc740 \uc21c\uc11c\uac00 \ub4a4\uc8fd\ubc15\uc8fd \ub418\uc5b4\uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c \ubc30\uc5f4 \uba54\uc18c\ub4dc ",(0,l.kt)("inlineCode",{parentName:"li"},"Array#forEach"),"\ub97c \uc0ac\uc6a9\ud588\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"MDN\uc744 \ud655\uc778\ud574\ubcf4\uba74 forEach \uba54\uc18c\ub4dc\uac00 \uc778\uc790\ub85c \ubc1b\ub294 \ucf5c\ubc31\ud568\uc218\ub294 \ub3d9\uae30\uc801\uc73c\ub85c \uc791\ub3d9\ud558\ub294 \uac83\uc73c\ub85c \uc608\uc0c1\ud55c\ub2e4\ub294 \uc124\uba85\uc774 \uc788\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ucf5c\ubc31\ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc5d0\ub9cc \uc2e0\uacbd\uc4f4\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ube44\ub3d9\uae30 \ucc98\ub9ac\uc5d0 \ub300\ud55c \uacb0\uacfc\uc5d0\ub294 \uad00\uc2ec\uc774 \uc5c6\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \ucc98\ub9ac\uc5d0 \ub300\ud55c \uacb0\uacfc\ub97c \uae30\ub2e4\ub9ac\uc9c0 \uc54a\ub294\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \uc21c\ucc28\uc801\uc73c\ub85c (\uc2e4\ud589\ud55c \uc21c\uc11c\ub300\ub85c) \ub3d9\uc791\ud558\ub3c4\ub85d \ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"Array#forEach")," \ub300\uc2e0\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"for .. of"),"\ub098 ",(0,l.kt)("inlineCode",{parentName:"li"},"\uc77c\ubc18\uc801\uc778 for\ubb38"),"\uc744 \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for loop\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30\ub97c \ucc98\ub9ac\ud558\uba74 \uc21c\ucc28\ucc98\ub9ac\uac00 \uc27d\uac8c \uac00\ub2a5\ud574\uc11c \uc758\ub3c4\ud55c\ub300\ub85c \ucf54\ub4dc\uac00 \ub3d9\uc791\ud55c\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc, ",(0,l.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"break"),"\ub098 \uc911\ucca9 \ubc18\ubcf5\ubb38\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, \ud558\ub098\uc758 loop\uc5d0\uc11c \uc5ec\ub7ec \ub3d9\uc791\uc744 \ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uac8c\ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc9d0."),(0,l.kt)("li",{parentName:"ul"},"for loop \ub300\uc2e0 map, reduce, filter \ub4f1\uc758 \ubc30\uc5f4 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ud558\ub098\uc758 \ub3d9\uc791\ub9cc \ud558\ub294 \ud568\uc218\ub97c \uc791\uc131\ud560 \uc218 \uc788\uae30 \ub584\ubb38\uc5d0 \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59\uc744 \uc9c0\ud0ac \uc218 \uc788\uc5b4\uc11c \uc88b\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \ud655\ub960\uc774 \ub192\uc544\uc9d0"))),(0,l.kt)("li",{parentName:"ul"},"\uc21c\uc11c\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ubcd1\ub82c\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise.all")," \uc774\ub098 ",(0,l.kt)("inlineCode",{parentName:"li"},"Array#map"),"\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud55c\ub2e4.")),(0,l.kt)("h3",{id:"-\ubc30\uc5f4-\uba54\uc18c\ub4dc\ub97c-\ube44\ub3d9\uae30-\ubc29\uc2dd\uc73c\ub85c-\uc0ac\uc6a9\ud560-\ub54c\uc758-\ud2b9\uc9d5-\uc8fc\uc758\ud560-\uc810-\ubc0f-\uac19\uc740-\ub3d9\uc791\uc744-\ud558\ub3c4\ub85d-\uad6c\ud604\ud558\uae30"},"#"," \ubc30\uc5f4 \uba54\uc18c\ub4dc\ub97c \ube44\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud560 \ub54c\uc758 \ud2b9\uc9d5, \uc8fc\uc758\ud560 \uc810 \ubc0f \uac19\uc740 \ub3d9\uc791\uc744 \ud558\ub3c4\ub85d \uad6c\ud604\ud558\uae30."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Array#reduce")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const delay = (ms) => \n    new Promise(resolve => \n    setTimeout(resolve, ms));\n\nconst arr = Array(10).fill(0).map((_, index) => index + 1);\nconst sum = await arr.reduce(async (acc, cur) => {\n  await delay(2000);\n    return (await acc) + cur;\n}, 0);\n\nconsole.log(sum);// 2\ucd08 \ub4a4, 55 \ucd9c\ub825\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uac01 \ubc18\ubcf5\ub9c8\ub2e4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"\ub97c \ubc18\ud658")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"acc")," \ub294 \uc774\uc804 \uacb0\uacfc\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \ud615\uc2dd"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sum = Promise( Promise( Promise( Promise( ... Promise( 0 ) + 1 ...) + 5 + 6 ) + 7 ) + 8 ) + 9 ) + 10 ")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"async (acc, cur) => await acc")," \uc640 \uac19\uc740 \ud615\uc2dd\uc73c\ub85c \ubaa8\ub4e0 \ube44\ub3d9\uae30 \ud568\uc218 \ucc98\ub9ac \uac00\ub2a5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ube44\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \ub3d9\uc791\ud558\ub294 Array#reduce\ub294 \ub3d9\uc2dc\uc131(Concurrency)\uc5d0 \ub300\ud55c \uc544\ub798\uc640 \uac19\uc740 \ud2b9\uc9d5\uc774 \uc788\uc74c."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud560 \ub54c\uc5d0\ub294 \ubc18\ubcf5 \ud55c\ubc88\uc5d0 \ud558\ub098\uc529 \ubc30\uc5f4 \uc6d0\uc18c\uac00 \ucc98\ub9ac\ub428.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ube44\ub3d9\uae30 \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud560 \ub54c\uc5d0\ub294 \ubcd1\ub82c\uc801\uc73c\ub85c \ud55c\ubc88\uc5d0 \ucc98\ub9ac\ub97c \ud558\ub418, \uc624\uc9c1 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc774\uc804 \uacb0\uacfc(await acc)\ub97c \uae30\ub2e4\ub9bc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const arr = Array(10).fill(0).map((_, index) => index + 1);\nconst startTime = Date.now();\n\nconst resultByReduceAsync = await arr.reduce(async (acc, cur) => {\n    await delay(1000);\n    return (await acc) + cur;\n}, 0);\n\nconsole.log(resultByReduceAsync, `${Date.now() - startTime} ms \uc18c\uc694.`);\n// 55 1003 ms \uc18c\uc694.\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud55c\ubc88 \ubc18\ubcf5\ud560 \ub54c\ub9c8\ub2e4 1\ucd08\uc758 \ub51c\ub808\uc774\ub97c \uac78\uc5b4 \ub450\uc5c8\uae30 \ub54c\ubb38\uc5d0 10\uac1c\uc758 \uc694\uc18c\ub97c \uc21c\ud68c\ud558\uba74 10\ucd08\uac00 \uac78\ub9b4 \uac83 \uac19\uc9c0\ub9cc, \ubcd1\ub82c\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 1\ucd08 \ub0a8\uc9d3\ud55c \uc2dc\uac04\uc774 \uac78\ub9ac\uba74\uc11c \ubc18\ud658\uac12\uc740 \uc815\ud655\ud788 \ucd9c\ub825\ub428.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uadf8\ub7f0\ub370 \uc774\uc804 \uacb0\uacfc\ub97c \uae30\ub2e4\ub9ac\ub294 \ubc29\uc2dd\uc73c\ub85c \uc21c\uc11c\ub97c \ubc14\uafd4\ubcf4\uba74 \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \ub41c\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const arr = Array(10).fill(0).map((_, index) => index + 1);\nconst startTime = Date.now();\n\nconst resultByReduceAsync = await arr.reduce(async (acc, cur) => {\n  const result = (await acc) + cur; // \uc704\uc758 \ucf54\ub4dc\uc640 \ucc28\uc774\n    await delay(1000);\n    return result;\n}, 0);\n\nconsole.log(resultByReduceAsync, `${Date.now() - startTime} ms \uc18c\uc694.`);\n// 55 10036 ms \uc18c\uc694.\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc774 \uacbd\uc6b0\uc5d0\ub294 10\ucd08 \ub0a8\uc9d3\ud55c \uc2dc\uac04\uc774 \uc18c\uc694\ub41c\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc774\ub294 \uc774\uc804 \uacb0\uacfc\ub97c \uae30\ub2e4\ub9ac\ub294 \ubc29\uc2dd\uc73c\ub85c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc21c\ucc28\uc801\uc73c\ub85c \uc9c4\ud589\ub428\uc744 \uc758\ubbf8\ud568."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc2dc \ub9d0\ud558\uba74, \uc774\uc804 \uacb0\uacfc\uc5d0 \uc885\uc18d\ub418\uc9c0 \uc54a\ub294 \uac83\uc740 \uc989\uc2dc \uacc4\uc0b0\ub418\uace0, \uc774\uc804 \uacb0\uacfc\uc5d0 \uc885\uc18d\ub418\ub294 \ubd80\ubd84\ub9cc \uc774\uc804 \uac12\uc744 \uae30\ub2e4\ub9ac\uace0 \uc788\uc74c\uc744 \uc758\ubbf8"))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Array#map")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30\ub85c \uc791\ub3d9\ud558\ub294 map\uc758 \uacbd\uc6b0\uc5d0\ub294 \ub450 \uac00\uc9c0 \ub3d9\uc791\uc774 \ud544\uc694\ud568.")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"map\uc758 \ucf5c\ubc31\ud568\uc218\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"async"),"\uc778 \uacbd\uc6b0\uc5d0\ub294 \ubaa8\ub4e0 \uc544\uc774\ud15c\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise"),"\ub85c \ub9f5\ud551\ub428.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const delay =  () => new Promise(resolve => setTimeout(resolve, 1000));\n\nconst arr = [1,2,3];\nconst asyncRes = arr.map(async v => {\n  await delay();\n  return i + 1;\n});\nconsole.log(asyncRes); // [Promise, Promise, Promise]\n")))))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\ubaa8\ub4e0 Promise\ub97c \uae30\ub2e4\ub9b0 \ud6c4\uc5d0 \ubc30\uc5f4\uc5d0 \uacb0\uacfc\ub97c \ubaa8\uc74c.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1,2,3];\nconst asyncRes = await Promise.all(arr.map(async v => {\n  await delay();\n  return i + 1;\n}));\nconsole.log(asyncRes); // [2, 3, 4]\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub3d9\uc2dc\uc131 (Concurrency)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubc29\uae08 \uc0b4\ud3b4\ubcf8 \uad6c\ud604 \ubc29\uc2dd\uc740 \ubcd1\ub82c \ucc98\ub9ac(\ud55c\ubc88\uc5d0 \uc5ec\ub7ec\uac1c\ub97c \ucc98\ub9ac)\ub97c \ud558\ub294 \ubc29\uc2dd\uc774\uae30 \ub54c\ubb38\uc5d0 \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0\ub294 \ucee4\ub2e4\ub780 \ub9ac\uc18c\uc2a4\ub97c \uc7a1\uc544 \uba39\uc744 \uc218 \uc788\uc74c.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   1. \uc77c\uad04 \ucc98\ub9ac (Batch Processing)\n\n      * \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 \uc694\uc18c\ub4e4\uc744 \uadf8\ub8f9\uc73c\ub85c \uc7a1\uc544\uc11c \uadf8\ub8f9\uc744 \ud558\ub098\uc529 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95.\n\n      * \ud55c\ubc88\uc5d0 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \ubcd1\ub82c \uc791\uc5c5 \uc218\ub97c \uc81c\uc5b4 \uac00\ub2a5.\n\n      * \ud558\uc9c0\ub9cc, \ud604\uc7ac \uadf8\ub8f9\uc5d0 \ub300\ud55c \ucc98\ub9ac\ub97c \ub2e4\uc74c \uadf8\ub8f9\uc5d0 \ub300\ud55c \uc791\uc5c5 \uc2dc\uc791 \uc804\uc5d0 \ub05d\ub0b4\uc57c\ud574\uc11c \uac01 \uadf8\ub8f9\uc5d0\uc11c \uac00\uc7a5 \ub290\ub9b0 \uc694\uc18c\uac00 \uc81c\ud55c \uc801\uc778 \uc694\uc778\uc73c\ub85c \uc791\uc6a9\ud568.\n\n      * \uadf8\ub8f9\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c\ub294 `underscore.js`\uc758 `groupBy`\ub97c \uc0ac\uc6a9\ud568. `lodash`\uc758 `groupBy` \ub294 \uc778\ub371\uc2a4\ub97c \uc804\ub2ec\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \ud2b9\uc131\uc774 \uc788\uc5b4\uc11c \uadf8\ub8f9 \ub098\ub204\uae30\uc5d0 \uc88b\uc9c0 \uc54a\ub2e4\uace0 \ud568.\n\n      * \uadf8\ub8f9\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \uc5f0\uacb0\ud558\ub824\uba74 `Array#reduce`\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\uc804 \uacb0\uacfc\ub97c \ud604\uc7ac \uacb0\uacfc\uc640 \uc5f0\uacb0\ud568.\n\n      * ```js\n        import groupBy from 'underscore/modules/groupBy.js';\n        \n        const asyncMapGroupBy = async () => {\n          const arr = [30, 10, 20, 20, 15, 20, 10];\n        \n          const mapInGroups = (arr, element, groupSize) => {\n            const groups = groupBy(arr, (_, i) => Math.floor(i / groupSize));\n            /**\n             * groups = {\n             *  '0': [ 30, 10, 20 ],\n             *  '1': [ 20, 15, 20 ],\n             *  '2': [ 10 ]\n             * }\n             */\n        \n            // \uadf8\ub8f9\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \ub9e4\ud551\ud558\uae30 \uc704\ud55c \uacfc\uc815.\n            // \uc774\uc804 \uacb0\uacfc\ub97c \ud604\uc7ac \uacb0\uacfc\uc640 \uc5f0\uacb0\n            return Object.values(groups).reduce(\n              async (previous, currentGroup) => [\n                    // \uc774\uc804 \uacb0\uacfc\ub97c \uc758\ubbf8\ud558\ub294 previous\ub97c await\ud574\uc57c \ub2e4\uc74c \uc904(\ucf54\ub4dc)\ub85c \uc774\ub3d9\ud558\uae30 \uc804\uc5d0\n                    // previous\ub97c \uae30\ub2e4\ub9ac\ub294 \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\ub294 \uac83\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc74c. <\uc704 reduce\uc5d0\uc11c \uc124\uba85>\n                ...(await previous), \n                ...(await Promise.all(currentGroup.map(element))),\n              ],\n              []\n            );\n          };\n        \n          const result = await mapInGroups(\n            arr,\n            async element => {\n              console.log(`${element} started`);\n              await delay();\n              console.log(`${element} finished`);\n              return element + 1;\n            },\n            3\n          );\n        \n          // -- \ucc3b\ubc88\uc9f8 \uadf8\ub8f9\uc758 \uc77c\uad04\ucc98\ub9ac --\n          // 30 started\n          // 10 started\n          // 20 started\n          // 10 finished\n          // 20 finished\n          // 30 finished\n          // -- \ub450\ubc88\uc9f8 \uadf8\ub8f9\uc758 \uc77c\uad04\ucc98\ub9ac --\n          // 20 started\n          // 15 started\n          // 20 started\n          // 15 finished\n          // 20 finished\n          // 20 finished\n          // -- \uc138\ubc88\uc9f8 \uadf8\ub8f9\uc758 \uc77c\uad04\ucc98\ub9ac --\n          // 10 started\n          // 10 finished\n        \n          console.log(result);\n          // 31,11,21,21,16,21,11\n        };\n        ```\n\n        \n\n   2. \ubcd1\ub82c \ucc98\ub9ac (Parallel Processing)\n\n      * \uc77c\uad04 \ucc98\ub9ac\uc640 \ub2e4\ub978 \ub610 \ud558\ub098\uc758 \ub3d9\uc2dc\uc131 \uc81c\uc5b4 \ubc29\ubc95\n\n      * \ucd5c\ub300 `n`\uac1c\uc758 \uc791\uc5c5\uc744 \ubcd1\ub82c\ub85c \ucc98\ub9ac\n\n      * \uc9c4\ud589\uc911\uc774\ub358 `n`\uac1c\uc758 \uc791\uc5c5\uc911\uc5d0\uc11c \ud558\ub098\uac00 \ub05d\ub098\uba74 \uc5b8\uc81c\ub4e0 \uc0c8\ub85c\uc6b4 \ud558\ub098\ub97c \uc2dc\uc791\ud568.\n\n      * \uc774\ubc88 \uc608\uc2dc \ucf54\ub4dc\uc5d0\uc11c\ub294 `bluebird` \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 `Promise.map`\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub3d9\uc2dc\uc131 \uc81c\uc5b4\n\n        * underscore\uc758 groupBy\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub3d9\uc791\uc6d0\ub9ac \ubd84\uc11d\ud574\ubcf4\uc790\n\n      * ```js\n        import Bluebird from 'bluebird';\n        const { Promise } = Bluebird;\n        \n        const asyncMapParallel = async () => {\n          const arr = [30, 10, 20, 20, 15, 20, 10];\n        \n          const result = await Promise.map(\n            arr,\n            async element => {\n              console.log(`${element} started`);\n              await delay();\n              console.log(`${element} finished`);\n              return element + 1;\n            },\n            { concurrency: 2 } // \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac \uac00\ub2a5\ud55c \uc791\uc5c5\uc758 \uc218: 2\uac1c\ub85c \uc124\uc815\n          );\n        \n          // 30 started\n          // 10 started\n          // 10 finished \ud558\ub098\uac00 \ub05d\ub098\ub2c8\uae4c\n          // 10 started \ub2e4\ub978 \ud558\ub098\uac00 \ub4e4\uc5b4\uc634\n          // 30 finished \ub610 \ud558\ub098\uac00 \ub05d\ub098\ub2c8\uae4c\n          // 20 started \ub2e4\ub978\ud558\ub098\uac00 \ub4e4\uc5b4\uc634\n          // 10 finished\n          // 15 started\n          // 20 finished\n          // 20 started\n          // 15 finished\n          // 20 started\n          // 20 finished\n          // 20 finished\n        \n          console.log(result);\n          // 31,11,21,21,16,21,11\n        };\n        ```\n\n        \n\n   3. \uc21c\ucc28 \ucc98\ub9ac (Sequential Processing)\n\n      * \uc21c\uc11c\uac00 \uc911\uc694\ud558\uac70\ub098 \ub9ac\uc18c\uc2a4\ub97c \ub9ce\uc774 \uc7a1\uc544 \uba39\ub294 \uc791\uc5c5 \uac19\uc740 \uacbd\uc6b0\uc5d0\ub294 \uc21c\ucc28\uc801\uc73c\ub85c \ucc98\ub9ac\ud574\uc544\ud568.\n\n      * ```js\n        const asyncMapSequential = async () => {\n          const arr = [1, 2, 3];\n        \n          const result = await arr.reduce(async (previous, current) => {\n            // reduce \ube44\ub3d9\uae30\ub97c \uc0ac\uc6a9\ud560 \ub54c, \uc21c\ucc28\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\ub824\uba74 \uc774\uc804 \uac12 previous\ub97c await\ud574\uc8fc\uc5b4\uc57c\ud568.\n            const results = await previous; \n            console.log(`${current} started`);\n            await delay(10);\n            console.log(`${current} finished`);\n            return [...results, v + 1];\n          }, []);\n        \n          // 1 started \uc2dc\uc791\n          // 1 finished \uc9c4\ud589\uc911\uc774\ub358 \uc791\uc5c5 1 \ub05d\n          // 2 started \ub2e4\uc74c \uc791\uc5c5 \uc2dc\uc791\n          // 2 finished\n          // 3 started\n          // 3 finished\n        \n          console.log(result);\n          // 2,3,4\n        };\n        ```\n\n        \n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Array#forEach")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Array#map"),"\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc, ",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\uc740 \ubc18\ud658\uac12\uc744 \ud1b5\ud574\uc11c \uac01 \uc694\uc18c\ub97c \ubcc0\uacbd\ud558\ub294 \ub3d9\uc791\uc744 \ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Array#forEach"),"\ub294 \uac01 \uc694\uc18c\uc5d0 \ub300\ud574 \uc2e4\ud589\ud558\uc9c0\ub9cc \uacb0\uacfc\ub294 \ud3d0\uae30(undefined) \uc2dc\ud0a8\ub2e4\ub294 \uac83\uc774 \ucc28\uc774.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"forEach\uc758 \uc778\uc790\ub85c \uc804\ub2ec\ud558\ub294 \ucf5c\ubc31\ud568\uc218\uac00 async\uc778 \uacbd\uc6b0\uc758 \ub3d9\uc791\uc5d0 \ub300\ud574 \uc798 \ud30c\uc545\ud574\uc57c\ud568.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uba3c\uc800, \ub3d9\uae30\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 (\uc77c\ubc18\uc801\uc778 \uacbd\uc6b0)\ub97c \uc0b4\ud3b4\ubcf4\uba74 \uc544\ub798\uc640 \uac19\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const syncForEach = () => {\n  const arr = [1, 2, 3];\n\n  arr.forEach(element => {\n    console.log(element);\n  });\n  console.log('Finished sync');\n  // 1\n  // 2\n  // 3\n  // Finished sync\n};\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ucf5c\ubc31\ud568\uc218\uc5d0 async\ub97c \ubd99\uc774\ub294 \uacbd\uc6b0(\uc774 \uacbd\uc6b0\ub97c \ud3b8\uc758\uc0c1 \ube44\ub3d9\uae30 forEach\ub77c\uace0 \uba85\uba85)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const asyncForEach = async () => {\n  const arr = [1, 2, 3];\n\n  arr.forEach(async element => {\n    await delay(10 - element);\n    console.log(element);\n  });\n\n  console.log('Finished async');\n  // Finished async\n  // 3\n  // 2\n  // 1\n};\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"forEach\uc758 \ud2b9\uc131\uc0c1 \uacb0\uacfc\ub294 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0(\uc778\uc790\ub85c \uc804\ub2ec\ud55c \ucf5c\ubc31\ud568\uc218\uc758 \ud638\ucd9c\ub9cc \ud558\uace0 \ud574\ub2f9 \ucf5c\ubc31\ud568\uc218\uc5d0 \ub300\ud55c \uacb0\uacfc\ub294 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0) \uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 \ub85c\uadf8\uac00 \ucd9c\ub825\ub428.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc774\uc720"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218\ub294 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ub418\uace0, \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc21c\uc11c\ub294 \ud568\uc218 \ud638\ucd9c\uc744 \uc9c0\ub098\uac10. (\ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 forEach\uc640\uc758 \uc911\uc694\ud55c \ucc28\uc774)"),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \uc904\uc758 \ucf54\ub4dc(console.log)\uac00 \uc2e4\ud589\ub420 \ub54c \ub3d9\uae30 forEach\ub294 \uc774\ubbf8 \uc791\uc5c5\uc744 \uc644\ub8cc\ud55c \uc0c1\ud669\uc774\uace0, \ube44\ub3d9\uae30 forEach\ub294 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc740 \uc0c1\ud669\uc774\ub77c \ub85c\uadf8\uac00 \uc704\uc640 \uac19\uc774 \ucd9c\ub825\uc774 \ub428."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub2e4\uc74c \uc904\uc758 \ucf54\ub4dc\ub85c \ub118\uc5b4\uac00\uae30 \uc804\uc5d0 \ube44\ub3d9\uae30 forEach\uc758 \uc791\uc5c5\uc774 \ub05d\ub0a0 \ub584\uae4c\uc9c0 \uae30\ub2e4\ub9ac\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise.all + map"),"\uc744 \uc0ac\uc6a9\ud558\uace0 \ubc18\ud658\uac12\uc740 \ubc84\ub9ac\ub294 \ubc29\uc2dd\uc73c\ub85c \uad6c\ud604\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const asyncForEachToWaitForFinish = async () => {\n  const arr = [1, 2, 3];\n  await Promise.all(\n    arr.map(async element => {\n      await delay(10 - element);\n      console.log(element);\n    })\n  );\n  console.log('Finished async');\n\n  // 3\n  // 2\n  // 1\n  // Finished async\n};\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc21c\ucc28 \ucc98\ub9ac (Sequential Processing)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc18\ubcf5\ub418\ub294 \ud568\uc218\ub4e4\uc740 \ubcd1\ub82c\ub85c \ud638\ucd9c\uc774 \ub418\ub098, \uc774\uc804 \uacb0\uacfc\ub97c \uae30\ub2e4\ub9ac\ub294 \ubc29\uc2dd\uc73c\ub85c reduce \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud558\uba74 \uc21c\ucc28\uc801\uc73c\ub85c \ucc98\ub9ac\uac00 \uac00\ub2a5\ud568.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc774 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uba74 \uac01 \uc694\uc18c\ub294 \uc21c\ucc28\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uace0 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc21c\uc11c\ub294 reduce\ud568\uc218\uac00 \uc791\uc5c5\uc744 \uc644\ub8cc\ud560 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const asyncForEachForSequential = async () => {\n  const arr = [1, 2, 3];\n  await arr.reduce(async (previous, element) => {\n    await previous;\n    await delay(10 - element);\n    console.log(element);\n  }, undefined);\n\n  console.log('Finished async');\n  // 1\n  // 2\n  // 3\n  // Finished async\n};\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc815\ub9ac"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\uc5b8\uc81c\ub4e0 \uc0c1\uad00\uc5c6\uc774 \ud568\uc218\ub97c \ud638\ucd9c\ud574\ub3c4 \ub41c\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"forEach")," \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ol"},"\uc21c\uc11c\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ubcd1\ub82c\ub85c \ucc98\ub9ac\ud558\uc9c0\ub9cc, \ub2e4\uc74c \ucf54\ub4dc(console.log)\ub85c \ub118\uc5b4\uac00\uae30 \uc804 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\uae38(\uae30\ub2e4\ub9ac\uae38) \uc6d0\ud55c\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"Promise.all + map")," \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ol"},"\uc21c\ucc28 \ucc98\ub9ac \ubc0f \ub2e4\uc74c \ucf54\ub4dc(console.log)\ub85c \ub118\uc5b4\uac00\uae30 \uc804 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\uae38(\uae30\ub2e4\ub9ac\uae38) \uc6d0\ud55c\ub2e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"reduce")," \uc0ac\uc6a9"))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Array#filter")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub2e8\uc21c\ud788 ",(0,l.kt)("inlineCode",{parentName:"p"},"Array#filter")," \ub85c \uc804\ub2ec\ud558\ub294 \ucf5c\ubc31\ud568\uc218\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," \ub97c \ubd99\uc778\ub2e4\uba74 \uc774\uc0c1\ud55c \uacb0\uacfc\uac00 \ub098\uc634")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const delay = ms => new Promise(resolve => setTimeout(resolve, ms));\nconst arr = [1, 2, 3, 4, 5];\n\nconst asyncFilteredArr = arr.filter(async element => {\n  await delay(10);\n  return element % 2 === 0;\n});\nconsole.log(asyncFilteredArr);\n// \ucd9c\ub825: [1, 2, 3, 4, 5] \n// \uc608\uc0c1: [2, 4]\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"filter \uba54\uc18c\ub4dc\uc758 \uc778\uc790\ub85c \uc804\ub2ec\ub418\ub294 \ucf5c\ubc31\ud568\uc218\ub97c \uc870\uac74\uc790 \ud568\uc218(\uc870\uac74\uc5d0 \ub530\ub978  boolean\uac12\uc744 \ubc18\ud658\ud558\ub294 \uc5ed\ud560)\ub77c\uace0 \ud558\uaca0\ub2e4."),(0,l.kt)("p",{parentName:"blockquote"},"\uc870\uac74\uc790 \ud568\uc218: predicate\ub77c\ub294 \ud568\uc218\uba85\uc73c\ub85c \uba85\uba85\ud568.")))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\uc744 \uc774\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30 ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," \uad6c\ud604\ud558\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ube44\ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 filter\uc640 \uac19\uc740 \uae30\ub2a5\uc744 \ud558\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub824\uba74 \ub450\uac00\uc9c0 \ub2e8\uacc4\ub97c \uac70\uccd0\uc57c\ud568."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc870\uac74\uc790 \ud568\uc218\ub97c \ud1b5\ud574\uc11c \uc5bb\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\uac12\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \ud615\ud0dc\ub85c \uac01 \ubc30\uc5f4\uc694\uc18c\uc5d0 \ub9f5\ud551")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \ud615\uc2dd\uc758 \uc694\uc18c\uac00 \ub2f4\uae34 \ubc30\uc5f4\uc744 \ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 filter\ud568\uc218\ub97c \ud1b5\ud574\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uc778 \uac12\ub9cc \ub0a8\uae40.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const asyncFilterWithMap = async (arr, predicate) => {\n  // predicate \ud568\uc218\uc758 \uacb0\uacfc\ub97c Promise\ub85c \ub9e4\ud551\ud55c \uacb0\uacfc\uc758 \ubc30\uc5f4\uc744 result\uc5d0 \ub2f4\uace0\n  const results = await Promise.all(arr.map(predicate));\n\n  // \ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 filter\ub85c true\uc778 \uac12\ub9cc \uac70\ub984\n  return arr.filter((_, index) => results[index]);\n};\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \uc704\uc758 \ud568\uc218 \ub2e8\ucd95 \ubc84\uc83c\nconst asyncFilterWithMapOneLiner = async (arr, predicate) =>\n  Promise.all(arr.map(predicate)).then(\n    results => arr.filter((_, index) => results[index])\n  );\n")))))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      ```js\n      const asyncResultWithMap = await asyncFilterWithMap(\n        [1, 2, 3, 4, 5], \n        async element => {\n          await delay(10);\n          return element % 2 === 0;\n        }\n      );\n      console.log(asyncResultWithMap); // [2, 4]\n      ```\n\n * \ub3d9\uc2dc\uc131 (Concurrency)\n\n   * \uc704\uc758 \ucf54\ub4dc\ub294\ubaa8\ub4e0 \uc870\uac74\uc790 \ud568\uc218(predicate)\ub97c \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ud568.\n   * \uac70\ub300\ud55c \ub9ac\uc18c\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud560 \ud655\ub960\uc774 \uc788\uc74c.\n   * \uc704\uc5d0\uc11c \uc791\uc131\ud55c `Array#map` \uc758 \ub0b4\uc6a9\uacfc \uac19\uc774 \uc5ec\ub7ec \ubc29\ubc95\uc73c\ub85c \ub3d9\uc2dc\uc131 \uc81c\uc5b4 \uac00\ub2a5\n\n   \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reduce"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30 ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," \uad6c\ud604\ud558\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ube44\ub3d9\uae30 reduce\ub97c \uc0ac\uc6a9\ud558\uba74 map\uc744 \uc774\uc6a9\ud55c \uad6c\ud604\ubcf4\ub2e4 \ucf54\ub4dc\uac00 \ub354 \uc9e7\uc544\uc9d0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uadf8\ub7ec\ub098 \ub3d9\uc2dc\uc131 \uc81c\uc5b4\uc2dc \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc5d0 \uc81c\uc57d\uc774 \uc788\uc74c.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const asyncFilterWithReduce = async (arr, predicate) =>\n  arr.reduce(\n    async (previous, element) =>\n      (await predicate(element)) // #2 predicate\ud568\uc218\ub97c \ud1b5\ud574\uc11c \ub2e4\uc74c \uc694\uc18c\ub97c \uc2e4\ud589\ud558\uace0\n            ? [...(await previous), element] // #3 \ud1b5\uacfc\ud558\uba74(\ubc18\ud658\uac12\uc774 true\uba74) \ubc30\uc5f4\uc5d0 \ucd94\uac00\n            : previous, // #4 \ud1b5\uacfc\ud558\uc9c0 \ubabb\ud558\uba74 \uc774\uc804 \uc0c1\ud0dc\uc758 \ubc30\uc5f4\uc744 \ubc18\ud658\ud568 (\ub2e4\uc74c \uc694\uc18c \uac74\ub108\ub700)\n        [] // #1 \ube48 \ubc30\uc5f4\ub85c \uc2dc\uc791\ud568\n  );\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc704\uc758 \ucf54\ub4dc\ub294 \ubcd1\ub82c\ub85c \ud638\ucd9c\ud558\ub294 \uac83\uc784"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc65c\ub0d0\ud558\uba74 \uc774\uc804 \uac12\uc744 \uae30\ub2e4\ub9ac\ub294 \ub3d9\uc791(await previous) \ubcf4\ub2e4 (await predicate(element))\uac00 \uba3c\uc800\ub2c8\uae4c."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc21c\ucc28\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \ucf54\ub4dc\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud574\uc57c\ud568.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const asyncFilterWithReduceInSequential = async (arr, predicate) =>\n  arr.reduce(\n    async (previous, element) => [\n      // \uc704\uc758 \ucf54\ub4dc\uc640 \ube44\uad50\ud558\uba74 \uc21c\uc11c \ubc14\ub01c.\n      ...(await previous), // #2 \uc774\uc804 \uac12\uc744 \uae30\ub2e4\ub9bc. (\ubc30\uc5f4 \ud615\uc2dd\uc774\ub2c8 spread opr\ub85c \ud480\uc5b4\uc90c)\n      ...((await predicate(element)) ? [element] : []), \n        // #3 predicate\ud568\uc218 \uacb0\uacfc\uc5d0 \ub530\ub77c \uc694\uc18c \ucd94\uac00 \uc5ec\ubd80 \uacb0\uc815.\n    ],\n    [] // #1 \ube48 \ubc30\uc5f4\ub85c \uc2dc\uc791\n  );\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc774\uc804 \uacb0\uacfc(previous)\ub97c \uae30\ub2e4\ub9b0(await)\ub2e4\uc74c, \ub2e4\uc74c predicate\ud568\uc218\uc758 \uc2e4\ud589 \uacb0\uacfc(predicate(element))\uc5d0 \ub530\ub77c \uc694\uc18c\ub97c \uc870\uac74\uc801\uc73c\ub85c \ucd94\uac00\uc2dc\ud0b4."))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ucc38\uace0\uc790\ub8cc")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://velog.io/@hanameee/%EB%B0%B0%EC%97%B4%EC%97%90-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85%EC%9D%84-%EC%8B%A4%EC%8B%9C%ED%95%A0-%EB%95%8C-%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4-%EC%A2%8B%EC%9D%84%EB%B2%95%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0%EB%93%A4#for-%EB%AC%B8%EC%9C%BC%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95"},"hanameee.log - \ubc30\uc5f4\uc5d0 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \uc2e4\uc2dc\ud560 \ub54c \uc54c\uc544\ub450\uba74 \uc88b\uc740 \uc774\uc57c\uae30\ub4e4")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://interacting.tistory.com/162"},"Carrot interacting - [JS] Promise.all()\uc740 \ubcd1\ub82c\uc77c\uae4c \uc9c1\ub82c\uc77c\uae4c\ud83e\udd14")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://advancedweb.hu/asynchronous-array-functions-in-javascript/"},"Advanced web machinary - Asynchronous array functions in Javascript Series")))}u.isMDXComponent=!0}}]);