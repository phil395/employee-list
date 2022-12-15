import { useCallback, useMemo, useReducer, useState } from "react";
import { EmployeeListActions } from "../components/list-item/ListItem";
import { initialEmployees } from "../initialData/initialEmployees";
import { IEmployee, ToggleableAchievement } from "../interfaces/IEmployee";
import { FilterValue } from "../interfaces/IHeaderCta";
import { IHeaderStats } from "../interfaces/IHeaderStats";
import { bindActions, BindedActions } from "../reducer/actions";
import { reducer } from "../reducer/reducer";
import { curry } from "../utils/curry";

export const MIN_SALARY_FILTER_VALUE = 1_000;

export const useApp = () => {
	const [employees, dispatch] = useReducer(reducer, initialEmployees);

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

	const employeeActions = useMemo<BindedActions>(() => bindActions(dispatch), [dispatch]);
	const actionsForList = useMemo<EmployeeListActions>(() => {
		const { toggleAchievement, setSalary, deleteEmployee } = employeeActions;
		return { toggleAchievement, setSalary, deleteEmployee };
	}, [employeeActions]);
	const addEmployee = useCallback(employeeActions.addEmployee, [employeeActions]);

	return {
		filteredEmployees,
		qty,
		actionsForList,
		addEmployee,
		setSearchValue,
		setFilterValue
	};
};