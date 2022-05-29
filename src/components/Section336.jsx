import React from 'react';

// const Section336 = function (props) {
// 	return <div>안녕하세요 제이름은 {props.name} 입니다. <br/> children의 값은 {props.children}입니다.</div>;
// };

const Section336 = props => {
	return (
		<div>
			안녕하세요 제이름은 {props.name} 입니다. <br /> children의 값은 {props.children}입니다.
		</div>
	);
};

Section336.defaultProps = {
	name: '기본이름',
	children: '리액트',
};

export default Section336;
