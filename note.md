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
