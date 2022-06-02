// 3.4. State (p103)
// 클래스형 컴포넌트의 state

import { Component } from 'react';

class Section341 extends Component {
	constructor(props) {
		super(props);
		// state의 초깃값 설정하기
		this.state = { number: 0 };
	}
	render() {
		const { number } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<button
					className=""
					onClick={() => {
						this.setState({ number: number + 1 });
					}}
				>
					+
				</button>
				<button
					className=""
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
