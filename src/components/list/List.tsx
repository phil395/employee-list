import { FC } from "react";
import { ListItem } from "../list-item/ListItem";
import type { IEmployee } from "../../interfaces/IEmployee";
import type { IEmployeeActions } from "../../interfaces/IEmpolyeeActions";

import './List.css';

interface Props extends Omit<IEmployeeActions, 'addEmployee'> {
	employees: IEmployee[];
}

export const List: FC<Props> = ({ employees, ...actions }) => {

	return (
		<>
			{employees.length
				? employees.map(employee => <ListItem {...employee} {...actions} />)
				: <div style={{ padding: 'calc(12.5px + 1.5vmin)' }}>Data not founded</div>}
		</>
	);
};