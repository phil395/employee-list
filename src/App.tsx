import { AddEmployee } from './components/add-employee/AddEmployee';
import { HeaderCta } from './components/header-cta/HeaderCta';
import { HeaderInfo } from './components/header-info/HeaderInfo';
import { List } from './components/list/List';
import { useApp } from './hook/useApp';

export const App = () => {
  const { filteredEmployees, qty, actionsForList, addEmployee, setSearchValue, setFilterValue } = useApp();

  return (
    <div className="app">
      <HeaderInfo {...qty} />
      <HeaderCta setFilterValue={setFilterValue} setSearchValue={setSearchValue} />
      <List employees={filteredEmployees} employeeActions={actionsForList} />
      <AddEmployee addEmployee={addEmployee} />
    </div>
  );
};
