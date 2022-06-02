// 3.4. State (p103)
// 클래스형 컴포넌트의 state

import { Component } from 'react';

class Section341 extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// state의 초깃값 설정하기
	// 	this.state = { number: 0, fixedNumber: 0 };
	// }

	// constructor에서 꺼내기 3.4.1.2
	state = { number: 0, fixedNumber: 0 };

	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값: {fixedNumber}</h2>
				<button
					className="btn-base"
					onClick={() => {
						this.setState({ number: number + 1 });
					}}
				>
					+
				</button>
				<button
					className="btn-base"
					onClick={() => {
						this.setState({ number: number - 1 });
					}}
				>
					-
				</button>
			</div>
		);
	}
}

export default Section341;
