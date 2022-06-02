import './App.css';
import Section337 from './components/Section334';
import Section341 from './components/Section341';

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
			{name === '리액트' && <h1 style={style}>{name} 다시보기</h1>}
			<h2>{name1 || '리액트'}</h2>
			<Section337 favoriteNumber={1} />
			<Section341 />
		</>
	);
}

export default App;
