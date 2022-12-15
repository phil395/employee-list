// import { Action } from "../interfaces/IReducerActions";
// import type { ReducerAction } from "../interfaces/IReducerActions";
import type { IReducerState } from "../interfaces/IReducerState";
import { ActionType, ReducerAction } from "./actions";

export const reducer = (state: IReducerState, action: ReducerAction): IReducerState => {
	switch (action.type) {
		case ActionType.ToggleAchievement: {
			const { id, achievement } = action.payload;
			return {
				employees: state.employees.map(employee => (employee.id === id)
					? { ...employee, [achievement]: !employee[achievement] }
					: employee
				)
			};
		}
		case ActionType.SetSalary: {
			const { id, salary } = action.payload;
			return {
				employees: state.employees.map(employee => (employee.id === id)
					? { ...employee, salary }
					: employee
				)
			};
		}
		case ActionType.DeleteEmployee: {
			const { id } = action.payload;
			return {
				employees: state.employees.filter(employee => employee.id !== id)
			};
		}
		case ActionType.AddEmployee: {
			const newEmployee = { ...action.payload, bonus: false, award: false };
			return {
				employees: [...state.employees, newEmployee]
			};
		}
	}
};
