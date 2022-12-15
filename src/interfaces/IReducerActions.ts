import { IEmployee } from "./IEmployee";
import { ToggleableAchievement } from "./IEmpolyeeActions";
// export type ToggleableAchievement = Extract<keyof IEmployee, 'bonus' | 'award'>;

export const enum Action {
	ToggleAchievement,
	SetSalary,
	DeleteEmployee,
	AddEmployee
}

interface IToggleAchievementAction {
	type: Action.ToggleAchievement;
	payload: { id: IEmployee['id'], achievement: ToggleableAchievement; };
}

interface ISetSalaryAction {
	type: Action.SetSalary;
	payload: Pick<IEmployee, 'id' | 'salary'>;
}

interface IDeleteEmployeeAction {
	type: Action.DeleteEmployee;
	payload: Pick<IEmployee, 'id'>;
}

interface IAddEmployeeAction {
	type: Action.AddEmployee;
	payload: Pick<IEmployee, 'id' | 'name' | 'salary'>;
}

export type ReducerAction = IToggleAchievementAction | ISetSalaryAction | IDeleteEmployeeAction | IAddEmployeeAction;

