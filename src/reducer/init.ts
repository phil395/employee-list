import { IEmployee } from "../interfaces/IEmployee";
import { LocalStorage } from "../services/storage";

export const initReducer = (initialEmployees: IEmployee[]) => {
	const storedEmployee = LocalStorage.get<IEmployee[]>('employees');

	return storedEmployee ? storedEmployee : initialEmployees;
};