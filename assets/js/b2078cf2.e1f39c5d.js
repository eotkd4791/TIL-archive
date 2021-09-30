"use strict";(self.webpackChunktil_archive=self.webpackChunktil_archive||[]).push([[112],{6191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"\ubaa8\ubc14\uc77c \uac00\ub85c/\uc138\ub85c\ubaa8\ub4dc \uc778\uc2dd"},p=void 0,c={unversionedId:"JavaScript/mobileResize",id:"JavaScript/mobileResize",isDocsHomePage:!1,title:"\ubaa8\ubc14\uc77c \uac00\ub85c/\uc138\ub85c\ubaa8\ub4dc \uc778\uc2dd",description:"\uac00\ub85c \ubaa8\ub4dc/ \uc138\ub85c \ubaa8\ub4dc \uc778\uc2dd\ud558\uae30",source:"@site/docs/JavaScript/mobileResize.md",sourceDirName:"JavaScript",slug:"/JavaScript/mobileResize",permalink:"/TIL-archive/JavaScript/mobileResize",tags:[],version:"current",frontMatter:{title:"\ubaa8\ubc14\uc77c \uac00\ub85c/\uc138\ub85c\ubaa8\ub4dc \uc778\uc2dd"},sidebar:"tutorialSidebar",previous:{title:"ES6 \uc81c\ub108\ub808\uc774\ud130 \uc0ac\uc6a9\ubc95",permalink:"/TIL-archive/JavaScript/generator"},next:{title:"React \ubc18\ubcf5\ubb38 key\uc5d0 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 \uc548\ub418\ub294 \uc774\uc720",permalink:"/TIL-archive/React/jsxLoop"}},s=[{value:"\uac00\ub85c \ubaa8\ub4dc/ \uc138\ub85c \ubaa8\ub4dc \uc778\uc2dd\ud558\uae30",id:"\uac00\ub85c-\ubaa8\ub4dc-\uc138\ub85c-\ubaa8\ub4dc-\uc778\uc2dd\ud558\uae30",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\uac00\ub85c-\ubaa8\ub4dc-\uc138\ub85c-\ubaa8\ub4dc-\uc778\uc2dd\ud558\uae30"},"\uac00\ub85c \ubaa8\ub4dc/ \uc138\ub85c \ubaa8\ub4dc \uc778\uc2dd\ud558\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\uc138\ub85c \ubaa8\ub4dc: Portrait \ubaa8\ub4dc\n\uac00\ub85c \ubaa8\ub4dc: Landscape \ubaa8\ub4dc\n")),(0,r.kt)("p",null,"#"," 1 CSS\ub97c \uc774\uc6a9\ud55c \ubc29\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@media (orientation: portrait) {\n  /* \uc138\ub85c \ubaa8\ub4dc\uc778 \uacbd\uc6b0 \uc801\uc6a9\ud560 CSS */\n}\n\n@media (orientation: landscape) {\n  /* \uac00\ub85c \ubaa8\ub4dc\uc778 \uacbd\uc6b0 \uc801\uc6a9\ud560 CSS */\n}\n")),(0,r.kt)("p",null,"#"," 2 JS\ub97c \uc774\uc6a9\ud55c \ubc29\ubc95"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"i) window.matchMedia \ud65c\uc6a9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (window.matchMedia('(orientation: portrait)').matches) {\n  // \uc138\ub85c \ubaa8\ub4dc\uc77c \ub54c \uc2e4\ud589\ud560 \uc2a4\ud06c\ub9bd\ud2b8\n  // width\uc640 height\uac00 \uac19\uc73c\uba74 portrait \ubaa8\ub4dc\ub85c \uc778\uc2dd\ud55c\ub2e4.\n} else {\n  // \uac00\ub85c \ubaa8\ub4dc\uc77c \ub54c \uc2e4\ud589\ud560 \uc2a4\ud06c\ub9bd\ud2b8\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ii) \ub108\ube44\uc640 \ub192\uc774\ub97c \ube44\uad50")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (window.innerWidth <= window.innerHeight) {\n  // \uc138\ub85c \ubaa8\ub4dc\uc77c \ub54c \uc2e4\ud589\ud560 \uc2a4\ud06c\ub9bd\ud2b8\n} else {\n  // \uac00\ub85c \ubaa8\ub4dc\uc77c \ub54c \uc2e4\ud589\ud560 \uc2a4\ud06c\ub9bd\ud2b8\n}\n")),(0,r.kt)("p",null,"\ud654\uba74 \ud06c\uae30\uac00 \ubc14\ub00c\ub294 \uacbd\uc6b0\uc5d0 resize Event\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('resize', function () {\n  // \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \ucf5c\ubc31 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uac00\ub85c/\uc138\ub85c \ubaa8\ub4dc \ud655\uc778 \ud6c4, \uacbd\uc6b0\uc5d0 \ub530\ub978 \ub85c\uc9c1 \uad6c\ud604\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ucc38\uace0 \uc790\ub8cc")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studiomeal.com/archives/1068"},"1\ubd84\ucf54\ub529 - \uc6f9\ud398\uc774\uc9c0 \uac00\ub85c \ubaa8\ub4dc/\uc138\ub85c \ubaa8\ub4dc \uc778\uc2dd\ud558\uae30")))}d.isMDXComponent=!0}}]);