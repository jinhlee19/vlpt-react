### 오류처리

```jsx
import './App.css';

const name = '리액트';
function App() {
	// const name1 = undefined;
	const name1 = 'REACT';
	return (
		<>
			{name === '리액트' && <h1>리액트 안녕</h1>}
			<h2>{name1 || '리액트'}</h2>
		</>
	);
}

export default App;
```

### 인라인 스타일링

### 3.4.2.1. 배열 비구조화 할당 예시

```javascript
// 3.4.2.1. 배열 비구조화 할당 예시
const array1 = [1, 2];
const one = array1[0];
const two = array1[1];
const array2 = [3, 4];
const [three, four] = array2;
console.log(array1);
console.log(array2);
```

## 4.1.1. 이벤트 주의사항

1. 카멜케이스
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라 함수 형태의 값을 전달한다 \*\*
3. DOM요소에만 이벤트를 설정할 수 있다.

### 4.2.2.1. onChange 이벤트 설정\*

- e객체는 syntheticEvent로 웹브라우저의 네이티브 이벤트를 감싸는 객체
- jsx에서도 이런 네이티브와 동일하게 적용하면 되고, 이벤트가 끝나면 이벤트가 초기화되므로 정보를 참조할 수 없다.
- 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist()함수를 호출해야한다.
- 이때는 onChange이벤트가 발생할 때, 앞으로 변할 인풋값인 e.target.value로 기록한다.

```jsx
import React from 'react';

const Section421 = () => {
	return (
		<div>
			<h1>이벤트연습</h1>
			{/* <input
				type="text"
				name="message"
				placeholder="아무거나 입력해보세요"
				onChange={e => {
					console.log(e);
				}}
			/> */}
			<input
				type="text"
				name="message"
				placeholder="아무거나 입력해보세요"
				onChange={e => {
					console.log(e.target.value);
				}}
			/>
		</div>
	);
};

export default Section421;
```
