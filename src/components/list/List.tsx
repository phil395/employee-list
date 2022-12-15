import { FC } from "react";
import { EmployeeListActions, ListItem } from "../list-item/ListItem";
import type { IEmployee } from "../../interfaces/IEmployee";
import type { BindedActions } from "../../reducer/actions";

import './List.css';

interface Props {
	employees: IEmployee[];
	employeeActions: EmployeeListActions;
}

export const List: FC<Props> = ({ employees, employeeActions }) => {

	return (
		<ul className="employees-list">
			{employees.length
				? employees.map(employee => <ListItem key={employee.id} {...employee} employeeActions={employeeActions} />)
				: <div style={{ padding: 'calc(12.5px + 1.5vmin)' }}>Data not founded</div>}
		</ul>
	);
};