import { useReducer } from 'react';

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	};
}
const Section832 = () => {
	const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
	const { name, nickname } = state;
	const onChange = e => {
		dispatch(e.target);
	};
	return (
		<div>
			<p>
				현재 카운터 값은 <b>{state.value}</b>
			</p>
			<input name="name" value={name} onChange={onChange} />
			<input name="nickname" value={nickname} onChange={onChange} />
			<div>
				<div>
					<b>이름:</b>
					{name}
				</div>
				<div>
					<b>닉네임:</b>
					{nickname}
				</div>
			</div>
		</div>
	);
};

export default Section832;
