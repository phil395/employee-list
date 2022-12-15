import type { IEmployee } from "../interfaces/IEmployee";
import type { IReducerState } from "../interfaces/IReducerState";

export const initReducer = (initialEmployees: IEmployee[]): IReducerState => {
	return {
		employees: initialEmployees
	};
};