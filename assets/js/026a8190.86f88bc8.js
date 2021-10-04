"use strict";(self.webpackChunktil_archive=self.webpackChunktil_archive||[]).push([[368],{2009:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return k}});var l=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],u={title:"ES6 \uc81c\ub108\ub808\uc774\ud130 \uc0ac\uc6a9\ubc95"},i=void 0,c={unversionedId:"JavaScript/generator",id:"JavaScript/generator",isDocsHomePage:!1,title:"ES6 \uc81c\ub108\ub808\uc774\ud130 \uc0ac\uc6a9\ubc95",description:"Generator",source:"@site/docs/JavaScript/generator.md",sourceDirName:"JavaScript",slug:"/JavaScript/generator",permalink:"/TIL-archive/JavaScript/generator",tags:[],version:"current",frontMatter:{title:"ES6 \uc81c\ub108\ub808\uc774\ud130 \uc0ac\uc6a9\ubc95"},sidebar:"tutorialSidebar",previous:{title:"try..catch..finally \uc0ac\uc6a9\ubc95 \ubc0f \uc8fc\uc758\ud560 \uc810",permalink:"/TIL-archive/JavaScript/errorHandling"},next:{title:"\ubaa8\ubc14\uc77c \uac00\ub85c/\uc138\ub85c\ubaa8\ub4dc \uc778\uc2dd",permalink:"/TIL-archive/JavaScript/mobileResize"}},s=[],p={toc:s};function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Generator")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \uc2e4\ud589\uc744 \uc911\uac04\uc5d0 \uba48\ucdc4\ub2e4\uac00 \uc7ac\uac1c\ud560 \uc218 \uc788\ub294 \uae30\ub2a5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function* gn() {\n  yield 1;\n  yield 2;\n  yield 3;\n  return 'finish';\n}\n\nconst a = gn();\na.next(); // { value: 1, done: false }\na.next(); // { value: 2, done: false }\na.next(); // { value: 3, done: false }\na.next(); // { value: 'finish', done: true }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"next, return, throw \uba54\uc18c\ub4dc \uc0ac\uc6a9 \uac00\ub2a5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"a.return('END');\n// done\uc744 true\ub85c \uc989\uc2dc \ubc14\uafb8\uace0, 'END'\ub97c value \uc18d\uc131\uc5d0 \ub123\uc5b4 \ubc18\ud658\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"a.throw(new Error('err'));\n// done\uc744 \uc989\uc2dc true\ub85c \ubc14\uafb8\uace0, \uc5d0\ub7ec \ub358\uc9d0\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"iterable (\ubc18\ubcf5 \uac00\ub2a5\ud558\ub2e4\ub294 \uc758\ubbf8)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generator\ub294 iterable."),(0,o.kt)("li",{parentName:"ul"},"Symbol.iterator \uba54\uc18c\ub4dc\uac00 \uc874\uc7ac\ud574\uc57c iterable\uc784"),(0,o.kt)("li",{parentName:"ul"},"Symbol.iterator\ub294 iterable\uc744 \ubc18\ud658\ud574\uc57c\ud55c\ub2e4. (Symbol.iterator \uba54\uc18c\ub4dc\uac00 \ubc18\ud658\ud558\ub294 \uac83\uc774 iterable)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"iterator")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"next \uba54\uc18c\ub4dc\ub97c \uac00\uc9d0"),(0,o.kt)("li",{parentName:"ul"},"next \uba54\uc18c\ub4dc\ub294 value, done\uc744 \uac00\uc9c4 \uac1d\uccb4 \ubc18\ud658"),(0,o.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \uc885\ub8cc\ub418\uba74 done: true\uac00 \ub41c\ub2e4.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ubc30\uc5f4\ub3c4 iterable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const arr = [1, 2, 3, 4, 5];\nconst iter = arr[Symbol.iterator]();\nconsole.log(iter); // Array Iterator {}\nconsole.log(iter.next()); // {value: 1, done: false}\nconsole.log(iter.next()); // {value: 2, done: false}\nconsole.log(iter.next()); // {value: 3, done: false}\nconsole.log(iter.next()); // {value: 4, done: false}\nconsole.log(iter.next()); // {value: 5, done: false}\nconsole.log(iter.next()); // {value: undefined, done: true}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc81c\ub108\ub808\uc774\ud130\ub3c4 iterable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function* fn() {\n  yield 4;\n  yield 5;\n  yield 6;\n}\n\nconst gen = fn();\nconsole.log(gen[Symbol.iterator]() === gen); // true\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ubb38\uc790\uc5f4\ub3c4 iterator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const str = 'Hello, world!';\nconst strIter = str[Symbol.iterator]();\nconsole.log(strIter); // StringIterator\xa0{}\n\nfor (const s of str) {\n  console.log(s);\n}\nfor (const s of strIter) {\n  console.log(s);\n}\n\n// \ub450 for .. of \ubb38 \ubaa8\ub450\n// H e l l o , w o r l d ! \ucd9c\ub825 (\uac01 \ubb38\uc790\ubcc4 \ud558\ub098\uc758 console.log\uac00 \ucc0d\ud798\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"next\uc5d0 \uc778\uc790 \ub118\uaca8\uc8fc\uae30")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function* gn() {\n  const num1 = yield '\uccab\ubc88\uc9f8 \uc22b\uc790 \uc785\ub825';\n  console.log(num1);\n\n  const num2 = yield '\ub450\ubc88\uc9f8 \uc22b\uc790 \uc785\ub825';\n  console.log(num2);\n\n  return num1 + num2;\n}\n\nconst a = gn();\nconsole.log(a.next()); // {value: \"\uccab\ubc88\uc9f8 \uc22b\uc790 \uc785\ub825\", done: false}\n// 2 in gn\nconsole.log(a.next(2)); // {value: \"\ub450\ubc88\uc9f8 \uc22b\uc790 \uc785\ub825\", done: false}\n// 4 in gn\nconsole.log(a.next(4)); // {value: 6, done: true}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc81c\ub108\ub808\uc774\ud130\ub294 \uac12\uc744 \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4 \ub450\uc9c0 \uc54a\ub294\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ud544\uc694\ud55c \uc21c\uac04\uae4c\uc9c0 \uacc4\uc0b0\uc744 \ubbf8\ub8f0 \uc218 \uc788\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \uad00\ub9ac \uce21\uba74\uc5d0\uc11c \ud6a8\uc728\uc801\uc774\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ubb34\ud55c\ub8e8\ud504 \ub3cc\ub824\ub3c4 \ube0c\ub77c\uc6b0\uc800\uac00 \ubed7\uc9c0 \uc54a\uc74c.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function* gn() {\n  let index = 0;\n  while (true) {\n    yield index++;\n  }\n}\n\nconst a = gn();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uc81c\ub108\ub808\uc774\ud130 \ud568\uc218 \ud638\ucd9c\ud558\uae30")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function* gen1() {\n  yield 'W';\n  yield 'o';\n  yield 'r';\n  yield 'l';\n  yield 'd';\n}\n\nfunction* gen2() {\n  yield 'Hello,';\n  yield* gen1(); // \ubc18\ubcf5 \uac00\ub2a5\ud55c(iterable) \ubaa8\ub4e0 \uac1d\uccb4\uac00 \uc62c \uc218 \uc788\ub2e4.\n  yield '!';\n}\n\nconsole.log(...gen2());\n// 'Hello, W o r l d !'\n")))}k.isMDXComponent=!0}}]);