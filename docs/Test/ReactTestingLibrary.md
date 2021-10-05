---
title: React Testing Library
---



### \# Basic Test

```jsx
import React from 'react';
import ComponentToTest from 'ComponentToTest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
```



```jsx
function ComponentToTest() {
  return <h3 data-testid="header">MyComponent</h3>;
}

test('Component contains text MyComponent', () => {
  	const component = render(<ComponentToTest />);
	  const headerEl = component.getByTestId('header');
	  expect(headerEl.textContent).toBe('MyComponent');
});
```

### \# Follow TDD

```jsx
test('counter initially start with text of 0', () => {
  const { getByTestId } = render(<ComponentToTest />);
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />);
  const input = getByTestId('input');
  expect(counterEl.textContent).toBe('1');
});

test('add button renders with +', () => {
	const { getByTestId } = render(<Counter />)
	const addBtn = getByTestId('add-btn');
  expect(addBtn.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId('subtract-btn');
  expect(subtractBtn.textContent).toBe('-');
});
```



```jsx
function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  
  return (
    	<div>
      	<h3 data-testid="header">My Counter</h3>
      	<h2 data-testid="counter">{counterValue}</h2>
      	<button data-testid="subtract-btn">-</button>
      	<input data-testid="input" type="number" value={inputValue} />
      	<button data-testid="add-btn">+</button>
    	</div>
  );
}
```



### \# Test Functionality with FireEvent

```jsx
import { fireEvent } from '@testing-library/react';
```

```jsx
test('change value of input works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');
  
  fireEvent.change(inputEl, {
  	target: {
      value: '5''
		}
  });
  
  expect(inputEl.value).toBe('5');
});

test('click on plus btn adds 1 to counter', () => {
  	const { getByTestId } = render(<Counter />);
  	const btnEl = getByTestId('add-btn');
  	const counterEl = getByTestId('counter');
  
  expect(counterEl.textContent).toBe('0');
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe('1');
});
```



> 참고자료

[Laith Harb - React Testing Library Crach Course - 2021](https://www.youtube.com/watch?v=GLSSRtnNY0g)
