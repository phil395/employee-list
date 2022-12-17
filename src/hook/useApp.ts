import { useEffect, useMemo, useReducer, useState } from "react";
import { initialEmployees } from "../initialData/initialEmployees";
import { initReducer } from "../reducer/init";
import { reducer } from "../reducer/reducer";
import { bindActions } from "../reducer/actions";
import { localStorage } from "../services/storage";
import { curry } from "../utils/curry";
import { FilterValue } from "../interfaces/IHeaderCta";
import { IHeaderStats } from "../interfaces/IHeaderStats";
import { IEmployee, ToggleableAchievement } from "../interfaces/IEmployee";

export const MIN_SALARY_FILTER_VALUE = 1_000;

export const useApp = () => {
	const [employees, dispatch] = useReducer(reducer, initialEmployees, initReducer);

	const [searchValue, setSearchValue] = useState('');
	const [filterValue, setFilterValue] = useState<FilterValue>('all');

	const qty = useMemo<IHeaderStats>(() => ({
		qtyEmployees: employees.length,
		qtyEmployeesWithBonus: employees.filter(employee => employee.bonus).length
	}), [employees]);

	const filteredEmployees = useMemo<IEmployee[]>(() => {
		const filterBySearchValue = (employees: IEmployee[]) => {
			return employees.filter(({ name }) => name.toLowerCase().includes(searchValue));
		};
		const filterByAchievement = (achievement: ToggleableAchievement) => {
			return employees.filter(employee => employee[achievement]);
		};
		const filterBySalary = (salary: number) => {
			return employees.filter(employee => employee.salary > salary);
		};
		switch (filterValue) {
			case 'award': return curry(filterBySearchValue)(filterByAchievement)('award');
			// case 'bonus': return curry(filterBySearchValue)(filterByAchievement)('bonus');  
			// button 'bonus' not implemented yet on Filters component
			case 'salary': return curry(filterBySearchValue)(filterBySalary)(MIN_SALARY_FILTER_VALUE);
			default:
			case 'all': return filterBySearchValue(employees);
		}
	}, [employees, searchValue, filterValue]);

	const [actionsForList, addEmployee] = useMemo(() => {
		const { toggleAchievement, setSalary, deleteEmployee, addEmployee } = bindActions(dispatch);
		return [{ toggleAchievement, setSalary, deleteEmployee }, addEmployee] as const;
	}, [dispatch]);

	useEffect(() => {
		localStorage.set('employees', employees);
	}, [employees]);

	return {
		filteredEmployees,
		qty,
		actionsForList,
		addEmployee,
		setSearchValue,
		setFilterValue
	};
};