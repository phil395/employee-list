export interface IEmployee {
	id: string,
	name: string,
	salary: number,
	bonus: boolean,
	award: boolean;
}

export type ToggleableAchievement = Extract<keyof IEmployee, 'bonus' | 'award'>;
