import React, { useState } from 'react';

const Section641 = () => {
	const [names, setNames] = useState([
		{ id: 1, text: '눈사람' },
		{ id: 2, text: '얼음' },
		{ id: 3, text: '눈' },
		{ id: 4, text: '바람' },
	]);
	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5);
	const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
	return <div>{namesList}</div>;
};

export default Section641;
