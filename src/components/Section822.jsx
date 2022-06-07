import React, { useEffect, useState } from 'react';

const Section822 = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	useEffect(() => {
		console.log('마운팅 때 실행');
	}, []);
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
