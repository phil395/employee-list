import { FC } from "react";

import type { IEmployee } from "../../interfaces/IEmployee";
import type { IEmployeeActions } from "../../interfaces/IEmpolyeeActions";

import './ListItem.css';
import './icons-font/icons-font.css';

interface Props extends IEmployee, Omit<IEmployeeActions, 'addEmployee'> { }

export const ListItem: FC<Props> = ({
	id, name, award, bonus, salary, setSalary, toggleAchievement, deleteEmployee
}) => {

	const onChangeSalary: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const newSalary = Number(e.target.value) || 0;
		setSalary(id, newSalary);
	};

	return (
		<li className={`employees-list__item item 
			${bonus ? 'item--with-bonus' : null} 
			${award ? 'item--awarded' : null}
		`}>
			<div className="item__name">
				{name}
			</div>
			<div className="item__field">
				<input
					name="itemSalary"
					onChange={onChangeSalary}
					type="number"
					value={salary} />
			</div>
			<div className="item__cta">
				<span className="icon-money"
					onClick={() => toggleAchievement(id, 'bonus')} />
				<span className="icon-award"
					onClick={() => toggleAchievement(id, 'award')} />
				<span className="icon-bin"
					onClick={() => deleteEmployee(id)} />
			</div>
		</li>
	);
};