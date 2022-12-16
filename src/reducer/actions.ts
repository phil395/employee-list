import { IEmployee, ToggleableAchievement } from '../interfaces/IEmployee';
import { curry } from '../utils/curry';
import { getId } from '../utils/getId';

export const enum ActionType {
	ToggleAchievement,
	SetSalary,
	DeleteEmployee,
	AddEmployee
}

const toggleAchievement = (payload: { id: IEmployee['id'], achievement: ToggleableAchievement; }) => ({
	type: ActionType.ToggleAchievement,
	payload
}) as const;

const setSalary = (payload: Pick<IEmployee, 'id' | 'salary'>) => ({
	type: ActionType.SetSalary,
	payload
}) as const;

const deleteEmployee = (payload: Pick<IEmployee, 'id'>) => ({
	type: ActionType.DeleteEmployee,
	payload
}) as const;

const addEmployee = (payload: Pick<IEmployee, 'name' | 'salary'>) => ({
	type: ActionType.AddEmployee,
	payload: {
		id: getId(),
		...payload,
	}
}) as const;


export const bindActions = (dispatch: React.Dispatch<ReducerAction>) => {
	return {
		toggleAchievement: curry(dispatch)(toggleAchievement) as ToggleAchievementActionCreator,
		setSalary: curry(dispatch)(setSalary) as SetSalaryActionCreator,
		deleteEmployee: curry(dispatch)(deleteEmployee) as DeleteEmployeeActionCreator,
		addEmployee: curry(dispatch)(addEmployee) as AddEmployeeActionCreator
	};
};


// types

type ToggleAchievementActionCreator = typeof toggleAchievement;
type SetSalaryActionCreator = typeof setSalary;
type DeleteEmployeeActionCreator = typeof deleteEmployee;
type AddEmployeeActionCreator = typeof addEmployee;

type ToggleAchievementAction = ReturnType<ToggleAchievementActionCreator>;
type SetSalaryAction = ReturnType<SetSalaryActionCreator>;
type DeleteEmployeeAction = ReturnType<DeleteEmployeeActionCreator>;
type AddEmployeeAction = ReturnType<AddEmployeeActionCreator>;

export type ReducerAction = ToggleAchievementAction | SetSalaryAction | DeleteEmployeeAction | AddEmployeeAction;
export type BindedActions = ReturnType<typeof bindActions>;
