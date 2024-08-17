"use strict";(self.webpackChunktil_archive=self.webpackChunktil_archive||[]).push([[292],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:e},l),{},{components:n})):r.createElement(m,c({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1117:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"React Testing Library"},s=void 0,u={unversionedId:"Test/ReactTestingLibrary",id:"Test/ReactTestingLibrary",isDocsHomePage:!1,title:"React Testing Library",description:"\\ Basic Test",source:"@site/docs/Test/ReactTestingLibrary.md",sourceDirName:"Test",slug:"/Test/ReactTestingLibrary",permalink:"/TIL-archive/Test/ReactTestingLibrary",tags:[],version:"current",frontMatter:{title:"React Testing Library"},sidebar:"tutorialSidebar",previous:{title:"RCC vs RSC",permalink:"/TIL-archive/React/rsc"},next:{title:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud568\uc218",permalink:"/TIL-archive/TypeScript/function"}},l=[{value:"# Basic Test",id:"-basic-test",children:[]},{value:"# Follow TDD",id:"-follow-tdd",children:[]},{value:"# Test Functionality with FireEvent",id:"-test-functionality-with-fireevent",children:[]}],p={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-basic-test"},"#"," Basic Test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ComponentToTest from 'ComponentToTest';\nimport { render } from '@testing-library/react';\nimport '@testing-library/jest-dom/extend-expect';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function ComponentToTest() {\n  return <h3 data-testid=\"header\">MyComponent</h3>;\n}\n\ntest('Component contains text MyComponent', () => {\n    const component = render(<ComponentToTest />);\n      const headerEl = component.getByTestId('header');\n      expect(headerEl.textContent).toBe('MyComponent');\n});\n")),(0,a.kt)("h3",{id:"-follow-tdd"},"#"," Follow TDD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"test('counter initially start with text of 0', () => {\n  const { getByTestId } = render(<ComponentToTest />);\n  const counterEl = getByTestId('counter');\n\n  expect(counterEl.textContent).toBe('0');\n});\n\ntest('input contains initial value of 1', () => {\n  const { getByTestId } = render(<Counter />);\n  const input = getByTestId('input');\n  expect(counterEl.textContent).toBe('1');\n});\n\ntest('add button renders with +', () => {\n    const { getByTestId } = render(<Counter />)\n    const addBtn = getByTestId('add-btn');\n  expect(addBtn.textContent).toBe('+');\n});\n\ntest('subtract button renders with -', () => {\n  const { getByTestId } = render(<Counter />);\n  const subtractBtn = getByTestId('subtract-btn');\n  expect(subtractBtn.textContent).toBe('-');\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Counter() {\n  const [counterValue, setCounterValue] = useState(0);\n  const [inputValue, setInputValue] = useState(1);\n  \n  return (\n        <div>\n        <h3 data-testid="header">My Counter</h3>\n        <h2 data-testid="counter">{counterValue}</h2>\n        <button data-testid="subtract-btn">-</button>\n        <input data-testid="input" type="number" value={inputValue} />\n        <button data-testid="add-btn">+</button>\n        </div>\n  );\n}\n')),(0,a.kt)("h3",{id:"-test-functionality-with-fireevent"},"#"," Test Functionality with FireEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { fireEvent } from '@testing-library/react';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"test('change value of input works correctly', () => {\n  const { getByTestId } = render(<Counter />);\n  const inputEl = getByTestId('input');\n  \n  fireEvent.change(inputEl, {\n    target: {\n      value: '5''\n        }\n  });\n  \n  expect(inputEl.value).toBe('5');\n});\n\ntest('click on plus btn adds 1 to counter', () => {\n    const { getByTestId } = render(<Counter />);\n    const btnEl = getByTestId('add-btn');\n    const counterEl = getByTestId('counter');\n  \n  expect(counterEl.textContent).toBe('0');\n  fireEvent.click(btnEl);\n  expect(counterEl.textContent).toBe('1');\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucc38\uace0\uc790\ub8cc")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GLSSRtnNY0g"},"Laith Harb - React Testing Library Crach Course - 2021")))}d.isMDXComponent=!0}}]);