import { IEmployee } from "./IEmployee";

export type ToggleableAchievement = Extract<keyof IEmployee, 'bonus' | 'award'>;


export interface IEmployeeActions {
	toggleAchievement: (id: string, achievement: ToggleableAchievement) => void;
	setSalary: (id: string, salary: number) => void;
	deleteEmployee: (id: string) => void;
	addEmployee: (name: string, salary: number) => void;
}