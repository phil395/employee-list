import { FC } from "react";
import { ListItem } from "../list-item/ListItem";
import type { IEmployee } from "../../interfaces/IEmployee";
import type { BindedActions } from "../../reducer/actions";

import './List.css';

interface Props {
	employees: IEmployee[];
	employeeActions: BindedActions;
}

export const List: FC<Props> = ({ employees, employeeActions }) => {

	return (
		<>
			{employees.length
				? employees.map(employee => <ListItem {...employee} employeeActions={employeeActions} />)
				: <div style={{ padding: 'calc(12.5px + 1.5vmin)' }}>Data not founded</div>}
		</>
	);
};