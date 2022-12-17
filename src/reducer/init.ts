import { IEmployee } from "../interfaces/IEmployee";
import { localStorage } from "../services/storage";

export const initReducer = (initialEmployees: IEmployee[]) => {
	const storedEmployee = localStorage.get<IEmployee[]>('employees');

	return storedEmployee ? storedEmployee : initialEmployees;
};