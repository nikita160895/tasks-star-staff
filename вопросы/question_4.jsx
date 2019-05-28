import React, { Component } from 'react';

// конструктор в React'е следует использовать для привязки контекста к методам через 'bind',
// либо для того, чтобы задать исходное состояние компонента
// зачастую задавать свойства классу, которые приходят ему через props, не имеет смысла,
// в основном лучше сразу передать их туда куда нужно
// для описания значений по умолчанию лучше использовать defaultProps если это класс,
// либо воспользоваться возможностью в ES6+ задать значения аргументов по умолчанию,
// как показано в функциональном компоненте ниже

class RichFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			componentState: this.props.seedValue
		};

		this.someHandler = this.someHandler.bind(this);
	}

	someHandler() {
		// do things
	}

	static defaultProps = {
		values: [],
		options: [],
		classNames: []
	};

	render() {
		return values.map(val => <div>{val}</div>);
	}
}

// defaultProps вне тела класса
RichFilter.defaultProps = {
	values: [],
	options: [],
	classNames: []
};

// пример функционального компонента
function RichFilter({ value = [], options = [], classNames = [] }) {
	return <div>...</div>;
}
