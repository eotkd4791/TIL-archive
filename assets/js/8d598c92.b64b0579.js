"use strict";(self.webpackChunktil_archive=self.webpackChunktil_archive||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(v,o(o({ref:t},l),{},{components:n})):a.createElement(v,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"ReactQuery \uc635\uc158 \uae30\ubcf8\uac12"},s=void 0,u={unversionedId:"ReactQuery/about_react_query_default_options",id:"ReactQuery/about_react_query_default_options",isDocsHomePage:!1,title:"ReactQuery \uc635\uc158 \uae30\ubcf8\uac12",description:"useQuery, useInfiniteQuery\uc744 \ud1b5\ud574 \uc0dd\uc131\ub41c Query \uc778\uc2a4\ud134\uc2a4\ub4e4\uc740 \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \uae30\ubcf8\uc801\uc73c\ub85c stale \uc0c1\ud0dc\ub85c \uac04\uc8fc\ud55c\ub2e4.",source:"@site/docs/ReactQuery/about_react_query_default_options.md",sourceDirName:"ReactQuery",slug:"/ReactQuery/about_react_query_default_options",permalink:"/TIL-archive/ReactQuery/about_react_query_default_options",tags:[],version:"current",frontMatter:{title:"ReactQuery \uc635\uc158 \uae30\ubcf8\uac12"},sidebar:"tutorialSidebar",previous:{title:"RCC vs RSC",permalink:"/TIL-archive/React/rsc"},next:{title:"SSR \ud658\uacbd\uc5d0\uc11c React Query \uc0ac\uc6a9\ud558\uae30",permalink:"/TIL-archive/ReactQuery/react_query_ssr"}},l=[{value:"useQuery, useInfiniteQuery\uc744 \ud1b5\ud574 \uc0dd\uc131\ub41c Query \uc778\uc2a4\ud134\uc2a4\ub4e4\uc740 \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \uae30\ubcf8\uc801\uc73c\ub85c <code>stale</code> \uc0c1\ud0dc\ub85c \uac04\uc8fc\ud55c\ub2e4.",id:"usequery-useinfinitequery\uc744-\ud1b5\ud574-\uc0dd\uc131\ub41c-query-\uc778\uc2a4\ud134\uc2a4\ub4e4\uc740-\uce90\uc2dc\ub41c-\ub370\uc774\ud130\ub97c-\uae30\ubcf8\uc801\uc73c\ub85c-stale-\uc0c1\ud0dc\ub85c-\uac04\uc8fc\ud55c\ub2e4",children:[]},{value:"stale \ucffc\ub9ac\ub4e4\uc740 \uc544\ub798\uc758 \uacbd\uc6b0\uc5d0 \ub4b7\ub2e8\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c refetch\ub41c\ub2e4.",id:"stale-\ucffc\ub9ac\ub4e4\uc740-\uc544\ub798\uc758-\uacbd\uc6b0\uc5d0-\ub4b7\ub2e8\uc5d0\uc11c-\uc790\ub3d9\uc73c\ub85c-refetch\ub41c\ub2e4",children:[]},{value:"useQuery, useInfiniteQuery\uc758 \uc778\uc2a4\ud134\uc2a4\ub4e4 \uc911 \ub354 \uc774\uc0c1 \ud65c\uc131(active) \uc0c1\ud0dc\uc778 \uac83\uc774 \uc5c6\uc73c\uba74 query observer\uac00 \ube44\ud65c\uc131(inactive)\uc774\ub77c\uace0 \ud45c\uc2dc\ud574\ub454\ub2e4.",id:"usequery-useinfinitequery\uc758-\uc778\uc2a4\ud134\uc2a4\ub4e4-\uc911-\ub354-\uc774\uc0c1-\ud65c\uc131active-\uc0c1\ud0dc\uc778-\uac83\uc774-\uc5c6\uc73c\uba74-query-observer\uac00-\ube44\ud65c\uc131inactive\uc774\ub77c\uace0-\ud45c\uc2dc\ud574\ub454\ub2e4",children:[]},{value:"\ucffc\ub9ac\ub4e4\uc740 \uc2e4\ud328\uc2dc \uc9c0\uc218 \ubc31\uc624\ud504 delay\uc640 \ud568\uaed8 3\ubc88 \uc870\uc6a9\ud788 retry\ud55c\ub2e4. (\uc774\ud6c4 UI\uc5d0 \uc5d0\ub7ec \ub178\ucd9c)",id:"\ucffc\ub9ac\ub4e4\uc740-\uc2e4\ud328\uc2dc-\uc9c0\uc218-\ubc31\uc624\ud504-delay\uc640-\ud568\uaed8-3\ubc88-\uc870\uc6a9\ud788-retry\ud55c\ub2e4-\uc774\ud6c4-ui\uc5d0-\uc5d0\ub7ec-\ub178\ucd9c",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"usequery-useinfinitequery\uc744-\ud1b5\ud574-\uc0dd\uc131\ub41c-query-\uc778\uc2a4\ud134\uc2a4\ub4e4\uc740-\uce90\uc2dc\ub41c-\ub370\uc774\ud130\ub97c-\uae30\ubcf8\uc801\uc73c\ub85c-stale-\uc0c1\ud0dc\ub85c-\uac04\uc8fc\ud55c\ub2e4"},"useQuery, useInfiniteQuery\uc744 \ud1b5\ud574 \uc0dd\uc131\ub41c Query \uc778\uc2a4\ud134\uc2a4\ub4e4\uc740 \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \uae30\ubcf8\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"h3"},"stale")," \uc0c1\ud0dc\ub85c \uac04\uc8fc\ud55c\ub2e4."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc774 \ub3d9\uc791\uc744 \ubc14\uafb8\uae30 \uc704\ud574\uc11c\ub294 \uac01 \ucffc\ub9ac \ud639\uc740 \uc804\uc5ed\uc801\uc73c\ub85c staleTime \uc635\uc158\uc744 \uc0ac\uc6a9\ud55c\ub2e4.\nstaleTime\uc774 \ub354 \uae38\uc5b4\uc9c4\ub2e4\ub294 \uac83\uc740 \ub35c \uc790\uc8fc refetch\ud55c\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4."))),(0,i.kt)("h3",{id:"stale-\ucffc\ub9ac\ub4e4\uc740-\uc544\ub798\uc758-\uacbd\uc6b0\uc5d0-\ub4b7\ub2e8\uc5d0\uc11c-\uc790\ub3d9\uc73c\ub85c-refetch\ub41c\ub2e4"},"stale \ucffc\ub9ac\ub4e4\uc740 \uc544\ub798\uc758 \uacbd\uc6b0\uc5d0 \ub4b7\ub2e8\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c refetch\ub41c\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc0c8 \ucffc\ub9ac \uc778\uc2a4\ud134\uc2a4\ub4e4\uc774 \ub9c8\uc6b4\ud2b8\ub420\ub54c"),(0,i.kt)("li",{parentName:"ul"},"\uc0c8 \ucc3d\uc774 refocues\ub420\ub54c"),(0,i.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c\uac00 \uc7ac\uc5f0\uacb0\ub420\ub54c"),(0,i.kt)("li",{parentName:"ul"},"\ucffc\ub9ac\uac00 refetch interval \uc124\uc815\ub41c \uacbd\uc6b0")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc774 \uc774 \uae30\ub2a5\uc744 \ubc14\uafb8\uae30 \uc704\ud574\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"refetchOnMount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"refetchOnWindowFocus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"refetchOnReconnect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"refetchInterval"),"\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4."))),(0,i.kt)("h3",{id:"usequery-useinfinitequery\uc758-\uc778\uc2a4\ud134\uc2a4\ub4e4-\uc911-\ub354-\uc774\uc0c1-\ud65c\uc131active-\uc0c1\ud0dc\uc778-\uac83\uc774-\uc5c6\uc73c\uba74-query-observer\uac00-\ube44\ud65c\uc131inactive\uc774\ub77c\uace0-\ud45c\uc2dc\ud574\ub454\ub2e4"},"useQuery, useInfiniteQuery\uc758 \uc778\uc2a4\ud134\uc2a4\ub4e4 \uc911 \ub354 \uc774\uc0c1 \ud65c\uc131(active) \uc0c1\ud0dc\uc778 \uac83\uc774 \uc5c6\uc73c\uba74 query observer\uac00 \ube44\ud65c\uc131(inactive)\uc774\ub77c\uace0 \ud45c\uc2dc\ud574\ub454\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uace0 \ub098\uc911\uc5d0 \uc7ac\uc0ac\uc6a9\ub420 \uacbd\uc6b0\ub97c \uc704\ud574 \uce90\uc2dc\uc5d0 \ub0a8\uc544\uc788\ub294\ub2e4. -\uae30\ubcf8\uc801\uc73c\ub85c \ube44\ud65c\uc131 \uc0c1\ud0dc\uc758 \ucffc\ub9ac \uc778\uc2a4\ud134\uc2a4\ub4e4\uc740 5\ubd84 \ud6c4\uc5d0 garbage collecting \ub41c\ub2e4.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc774\ub97c \ubc14\uafb8\uae30 \uc704\ud574\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"gcTime")," \uc635\uc158\uc744 \uc218\uc815\ud55c\ub2e4."))),(0,i.kt)("h3",{id:"\ucffc\ub9ac\ub4e4\uc740-\uc2e4\ud328\uc2dc-\uc9c0\uc218-\ubc31\uc624\ud504-delay\uc640-\ud568\uaed8-3\ubc88-\uc870\uc6a9\ud788-retry\ud55c\ub2e4-\uc774\ud6c4-ui\uc5d0-\uc5d0\ub7ec-\ub178\ucd9c"},"\ucffc\ub9ac\ub4e4\uc740 \uc2e4\ud328\uc2dc \uc9c0\uc218 \ubc31\uc624\ud504 delay\uc640 \ud568\uaed8 3\ubc88 \uc870\uc6a9\ud788 retry\ud55c\ub2e4. (\uc774\ud6c4 UI\uc5d0 \uc5d0\ub7ec \ub178\ucd9c)"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'\uc9c0\uc218 \ubc31\uc624\ud504(Exponential Backoff)\ub780 \ub124\ud2b8\uc6cc\ud06c \uc0ac\uc5e5\uc11c \uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c, \uc7ac\uc2dc\ub3c4 \uac04\uaca9\uc744 \uc810\uc9c4\uc801\uc73c\ub85c \ub298\ub824\uac00\uba70 \uc7ac\uc2dc\ub3c4\ub97c \uc218\ud589\ud558\ub294 \uc54c\uace0\ub9ac\uc998. \ub124\ud2b8\uc6cc\ud06c\uc758 \ud63c\uc7a1\uc744 \ud53c\ud558\uac70\ub098 \uc11c\ubc84\uac00 \uacfc\ubd80\ud558 \uc0c1\ud0dc\uc77c \ub54c \uacfc\ub3c4\ud55c \uc694\uccad\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4.\n\uc774 \ubc29\ubc95\uc758 \ud575\uc2ec\uc740 "\uc9c0\uc218\uc801\uc73c\ub85c" \ub300\uae30 \uc2dc\uac04\uc744 \ub298\ub9ac\ub294 \uac83\uc774\ub2e4.'),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://1yoouoo.tistory.com/37"},"\uc9c0\uc218 \ubc31\uc624\ud504 \uc54c\uc544\ubcf4\uae30")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc774\ub97c \ubc14\uafb8\uae30 \uc704\ud574\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"retry")," \uc635\uc158\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"retryDelay")," \uc635\uc158\uc744 \ubcc0\uacbd\ud55c\ub2e4."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ucc38\uace0\uc790\ub8cc\n",(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v5/docs/framework/react/guides/important-defaults"},"Tanstack Query v5 Important Defaults"))))}d.isMDXComponent=!0}}]);