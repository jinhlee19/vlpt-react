// Section 337 - 클래스형 컴포넌트에서 Props 사용하기
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// const Section337 = function (props) {
// 	return <div>안녕하세요 제이름은 {props.name} 입니다. <br/> children의 값은 {props.children}입니다.</div>;
// };

class Section337 extends Component {
	render() {
		const { name, favoriteNumber, children } = this.props;
		return (
			<div>
				안녕하세요 제이름은 {name} 입니다. <br /> children의 값은 {children}입니다.
				<br />
				제가 좋아하는 숫자는 {favoriteNumber}입니다.
			</div>
		);
	}
}

Section337.defaultProps = {
	name: '기본이름',
	children: '리액트',
};

Section337.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};

export default Section337;
