// 3.4.2.2. 함수 컴포넌트에서 useState 사용하기

import React, { useState } from 'react';

const Section342 = () => {
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('안녕하세요!');
	const onClickLeave = () => setMessage('안녕히 가세요');
	const [color, setColor] = useState('black');

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{ color }}>{message}</h1>
			<button style={{ color: 'red' }} onClick={() => setColor('red', console.log('빨간색바꿈'))}>
				빨간색
			</button>
			<button style={{ color: 'green' }} onClick={() => setColor('green')}>
				초록색
			</button>
			<button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
				파란색
			</button>
			<button style={{ color: 'black' }} onClick={() => setColor('black')}>
				검정색
			</button>
		</div>
	);
};

export default Section342;

// // 3.4.2.1. 배열 비구조화 할당 예시
// const array1 = [1, 2];
// const one = array1[0];
// const two = array1[1];

// const array2 = [3, 4];
// const [three, four] = array2;

// console.log(array1);
// console.log(array2);
