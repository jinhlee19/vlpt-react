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
