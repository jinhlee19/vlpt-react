import './App.css';
import Section337 from './components/Section334';
import Section342 from './components/Section342';
import Section421 from './components/Section421';
import Section422 from './components/Section422';

function App() {
	const name = '리액트';
	// const name1 = undefined;
	const name1 = 'REACT';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '4rem',
		fontWeight: 'bold',
		padding: 16,
	};

	return (
		<>
			<Section342 />
			{name === '리액트' && <h1 style={style}>{name} 다시보기</h1>}
			<h2>{name1 || '리액트'}</h2>
			<Section337 favoriteNumber={1} />
			<Section421 />
			<Section422 />
		</>
	);
}

export default App;
