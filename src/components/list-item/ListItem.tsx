import { FC } from "react";

import type { IEmployee } from "../../interfaces/IEmployee";
import type { BindedActions } from "../../reducer/actions";

import './ListItem.css';
import './icons-font/icons-font.css';

interface Props extends IEmployee {
	employeeActions: BindedActions;
}

export const ListItem: FC<Props> = ({
	id, name, award, bonus, salary, employeeActions
}) => {

	const onChangeSalary: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const newSalary = Number(e.target.value) || 0;
		employeeActions.setSalary({ id, salary: newSalary });
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
					onClick={() => employeeActions.toggleAchievement({ id, achievement: 'bonus' })} />
				<span className="icon-award"
					onClick={() => employeeActions.toggleAchievement({ id, achievement: 'bonus' })} />
				<span className="icon-bin"
					onClick={() => employeeActions.deleteEmployee({ id })} />
			</div>
		</li>
	);
};