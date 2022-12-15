import { useMemo, useReducer, useState } from 'react';
import { HeaderCta } from './components/header-cta/HeaderCta';
import { HeaderInfo } from './components/header-info/HeaderInfo';
import { List } from './components/list/List';
import { initialEmployees } from './initialData/initialEmployees';
import { IEmployee, ToggleableAchievement } from './interfaces/IEmployee';
import { FilterValue } from './interfaces/IHeaderCta';
import { IHeaderStats } from './interfaces/IHeaderStats';
import { bindActions } from './reducer/actions';
import { initReducer } from './reducer/init';
import { reducer } from './reducer/reducer';
import { curry } from './utils/curry';

export const MIN_SALARY_FILTER_VALUE = 1_000;

export const App = () => {
  // todo: переписать тип state в reducer - сделать его IEmployee[]
  const [employees, dispatch] = useReducer(reducer, initialEmployees, initReducer);

  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState<FilterValue>('all');

  const qty = useMemo<IHeaderStats>(() => ({
    qtyEmployees: employees.employees.length,
    qtyEmployeesWithBonus: employees.employees.filter(employee => employee.bonus).length
  }), [employees]);

  const listForRender = useMemo<IEmployee[]>(() => {
    const filterBySearchValue = (employees: IEmployee[]) => {
      return employees.filter(({ name }) => name.toLowerCase().includes(searchValue));
    };
    const filterByAchievement = (achievement: ToggleableAchievement) => {
      return employees.employees.filter(employee => employee[achievement]);
    };
    const filterBySalary = (salary: number) => {
      return employees.employees.filter(employee => employee.salary > salary);
    };
    switch (filterValue) {
      case 'award': return curry(filterBySearchValue)(filterByAchievement)('award');
      // case 'bonus': return curry(filterBySearchValue)(filterByAchievement)('bonus');  
      // button 'bonus' not implemented yet on Filters component
      case 'salary': return curry(filterBySearchValue)(filterBySalary)(MIN_SALARY_FILTER_VALUE);
      default:
      case 'all': return filterBySearchValue(employees.employees);
    }
  }, [employees, searchValue, filterValue]);

  const employeeActions = useMemo(() => bindActions(dispatch), []);

  return (
    <div className="app">
      <HeaderInfo {...qty} />
      <HeaderCta setFilterValue={setFilterValue} setSearchValue={setSearchValue} />
      <List employees={listForRender} employeeActions={employeeActions} />

    </div>
  );
};
