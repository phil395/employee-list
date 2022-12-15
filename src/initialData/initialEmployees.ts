import { IEmployee } from "../interfaces/IEmployee";
import { getId } from "../utils/getId";

export const initialEmployees: IEmployee[] = [
	{
		id: getId(),
		name: 'Leanne Graham',
		salary: 400,
		bonus: false,
		award: true
	},
	{
		id: getId(),
		name: 'Ervin Howell',
		salary: 550,
		bonus: true,
		award: false
	},
	{
		id: getId(),
		name: 'Clementine Bauch',
		salary: 390,
		bonus: false,
		award: false
	},
	{
		id: getId(),
		name: 'Patricia Lebsack',
		salary: 297,
		bonus: false,
		award: false
	},
	{
		id: getId(),
		name: 'Chelsey Dietrich',
		salary: 890,
		bonus: true,
		award: false
	},
	{
		id: getId(),
		name: 'Mrs. Dennis Schulist',
		salary: 670,
		bonus: false,
		award: false
	},
	{
		id: getId(),
		name: 'Kurtis Weissnat',
		salary: 570,
		bonus: false,
		award: false
	}
];