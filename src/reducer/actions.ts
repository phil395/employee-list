import { IEmployee, ToggleableAchievement } from '../interfaces/IEmployee';
import { curry } from '../utils/curry';
import { getId } from '../utils/getId';

export const enum ActionType {
	ToggleAchievement,
	SetSalary,
	DeleteEmployee,
	AddEmployee
}


const actions = {
	toggleAchievement: (payload: { id: IEmployee['id'], achievement: ToggleableAchievement; }) => ({
		type: ActionType.ToggleAchievement,
		payload
	}) as const,
	setSalary: (payload: Pick<IEmployee, 'id' | 'salary'>) => ({
		type: ActionType.SetSalary,
		payload
	}) as const,
	deleteEmployee: (payload: Pick<IEmployee, 'id'>) => ({
		type: ActionType.DeleteEmployee,
		payload
	}) as const,
	addEmployee: (payload: Pick<IEmployee, 'name' | 'salary'>) => ({
		type: ActionType.AddEmployee,
		payload: {
			id: getId(),
			...payload,
		}
	}) as const
};


export type ActionsMap = {
	[Property in keyof typeof actions]: typeof actions[Property]
};

export const bindActions = (dispatch: React.Dispatch<ReducerAction>) => {
	const mappedEntries = Object.entries(actions).map(([actionName, action]) => {
		return [actionName, curry(dispatch)(action)];
	});
	return Object.fromEntries(mappedEntries) as ActionsMap;
};


export type ReducerAction = ReturnType<(typeof actions)[keyof typeof actions]>;
