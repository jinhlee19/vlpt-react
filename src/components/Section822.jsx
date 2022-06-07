import React, { useEffect, useState } from 'react';

const Section822 = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	useEffect(() => {
		console.log('effect');
		// console.log(name);
		return () => {
			// console.log('cleanup');
			// console.log('name');
			console.log('unmount');
		};
	}, [name]);
	const onChangeName = e => {
		setName(e.target.value);
	};
	const onChangeNickname = e => {
		setNickname(e.target.value);
	};
	return (
		<div>
			<input value={name} onChange={onChangeName} />
			<input value={nickname} onChange={onChangeNickname} />
		</div>
	);
};

export default Section822;
