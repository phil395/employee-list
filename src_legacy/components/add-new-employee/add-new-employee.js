import React from "react";

import "./add-new-employee.css";

class AddNewEmployee extends React.Component {
	static #nullState = {
		name: '',
		salary: ''
	}
	constructor(props) {
		super(props);
		this.state = AddNewEmployee.#nullState
	}

	updateState = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitHandler = (e) => {
		e.preventDefault();

		const { name, salary } = this.state
		const { actionAdd } = this.props

		actionAdd(name, salary);
		this.setState(AddNewEmployee.#nullState)
	}

	render() {
		const { name, salary } = this.state

		return (
			<div className="add-new-employee">
				<h3>Добавьте нового сотрудника</h3>
				<form action="#"
					name="newEmployee"
					onSubmit={this.submitHandler} >
					<input
						name="name"
						onChange={this.updateState}
						type="text"
						value={name}
						placeholder="Имя сотрудника"
						required />
					<input
						name="salary"
						onChange={this.updateState}
						type="number"
						value={salary}
						placeholder="з/п в $"
						required
						min='100' />
					<button>Добавить</button>
				</form>
			</div>
		)
	}
}

export default AddNewEmployee;