import React from 'react';

const Section421 = () => {
	return (
		<div>
			<h1>이벤트연습</h1>
			{/* <input
				type="text"
				name="message"
				placeholder="아무거나 입력해보세요"
				onChange={e => {
					console.log(e);
				}}
			/> */}
			<input
				type="text"
				name="message"
				placeholder="아무거나 입력해보세요"
				onChange={e => {
					console.log(e.target.value);
				}}
			/>
		</div>
	);
};

export default Section421;
