import './App.css';
import Section334 from './components/Section334';

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
			{name === '리액트' && <h1 style={style}>{name} 안녕</h1>}
			<h2>{name1 || '리액트'}</h2>
			<Section334 />
		</>
	);
}

export default App;
