import React, { Component } from 'react';

class Section422 extends Component {
	state = {
		message: '',
	};
	render() {
		return (
			<div>
				<h1>이벤트연습</h1>
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력해 보세요"
					value={this.state.message}
					onChange={e => {
						this.setState({ message: e.target.value });
					}}
				/>
				<button
					onClick={() => {
						alert(this.state.message);
						this.setState({ message: '' });
					}}
				>
					확인
				</button>
			</div>
		);
	}
}

export default Section422;
