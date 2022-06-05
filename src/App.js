import './App.css';
import Section337 from './components/Section334';
import Section342 from './components/Section342';
import Section511 from './components/Section511';
import Section531 from './components/Section531';
import Section621 from './components/Section621';
import Section641 from './components/Section641';

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
			{name === '리액트' && <h1 style={style}>{name} 기초다지기</h1>}
			<h2>{name1 || '리액트'}</h2>
			<Section337 favoriteNumber={1} />

			<Section511 />
			{/* <Section531 /> */}
			{/* <Section531 ref={ref => (this.scrollBox = ref)} /> */}
			{/* <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button> */}
			<Section621 />
			<Section641 />
		</>
	);
}

export default App;
