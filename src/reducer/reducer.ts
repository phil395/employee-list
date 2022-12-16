import { ActionType, ReducerAction } from "./actions";
import { IEmployee } from "../interfaces/IEmployee";

export const reducer = (state: IEmployee[], action: ReducerAction): IEmployee[] => {
	switch (action.type) {
		case ActionType.ToggleAchievement: {
			const { id, achievement } = action.payload;
			return state.map(employee => (employee.id === id)
				? { ...employee, [achievement]: !employee[achievement] }
				: employee
			);
		}
		case ActionType.SetSalary: {
			const { id, salary } = action.payload;
			return state.map(employee => (employee.id === id)
				? { ...employee, salary }
				: employee
			);
		}
		case ActionType.DeleteEmployee: {
			const { id } = action.payload;
			return state.filter(employee => employee.id !== id);
		}
		case ActionType.AddEmployee: {
			const newEmployee = { ...action.payload, bonus: false, award: false };
			return [...state, newEmployee];
		}
	}
};
