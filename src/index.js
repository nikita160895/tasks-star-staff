import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const simpleArray = [2, 5, 1, 0, 9, 9];

// this will return 'impossible'
// const monsterArray = [1337, 616, 1703, 777, 420, 1];

const findEqualOrLessThan = (number, array) => {
	const sortedByLargestNumber = array.filter(item => item <= number);
	if (sortedByLargestNumber.length === 0) throw new Error('IMPOSSIBLE');
	const largestNumber = Math.max(...sortedByLargestNumber);
	return array.splice([array.indexOf(largestNumber)], 1)[0];
};

const createFiftyNineOrLess = array => {
	let firstNumber = '';
	let secondNumber = '';

	firstNumber = findEqualOrLessThan(5, array);
	secondNumber = findEqualOrLessThan(9, array);

	const result = firstNumber.toString() + secondNumber.toString();

	return result;
};

const createLargestHours = array => {
	let firstNumber = '';
	let secondNumber = '';

	firstNumber = findEqualOrLessThan(2, array);

	if (firstNumber === 2) {
		secondNumber = findEqualOrLessThan(3, array);
	} else {
		secondNumber = findEqualOrLessThan(9, array);
	}

	const result = firstNumber.toString() + secondNumber.toString();

	return result;
};

function App() {
	const createDate = array => {
		try {
			const hours = createLargestHours(array);
			const minutes = createFiftyNineOrLess(array);
			const seconds = createFiftyNineOrLess(array);

			return `${hours}:${minutes}:${seconds}`;
		} catch (error) {
			return error.message;
		}
	};

	return (
		<div className='App'>
			<div className='result'>
				<h1>Hello StarStaff</h1>
				<h2>The data string is: {createDate(simpleArray)}</h2>
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
