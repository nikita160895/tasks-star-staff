import React, { useState } from 'react';

function ColorInput() {
	const [typedInColor, setTypedInColor] = useState(null);

	const updateColor = ev => {
		const color = ev.target.value;
		setTypedInColor(color);
	};

	return (
		<div className='line-group'>
			<input onChange={updateColor} type='text' />
			<dir style={{ backgroundColor: typedInColor }} className='rect-box' />
		</div>
	);
}

// Предыдущая версия была написана императивно, она противоречит сути React'а
// React позволяет описывать компоненты декларативно и упрощает синхронизацию представления DOM елементов с данными
