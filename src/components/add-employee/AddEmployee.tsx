import { FC, useState } from "react";
import { BindedActions } from "../../reducer/actions";

import './AddEmployee.css';

interface Props {
	addEmployee: BindedActions['addEmployee'];
}

export const AddEmployee: FC<Props> = ({ addEmployee }) => {
	const [name, setName] = useState('');
	const [salary, setSalary] = useState<number | ''>('');

	const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.target.name === 'salary') {
			setSalary(Number(e.target.value));
		} else {
			setName(e.target.value);
		}
	};

	const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (!name.length || !salary) return;
		addEmployee({ name, salary });
		setName('');
		setSalary('');
	};

	return (
		<div className="add-new-employee">
			<h3>Добавьте нового сотрудника</h3>
			<form action="#"
				name="newEmployee"
				onSubmit={onFormSubmit} >
				<input
					name="name"
					onChange={onInputChange}
					type="text"
					value={name}
					placeholder="Имя сотрудника"
					required />
				<input
					name="salary"
					onChange={onInputChange}
					type="number"
					value={salary}
					placeholder="з/п в $"
					required
					min='0' />
				<button>Добавить</button>
			</form>
		</div>
	);
};