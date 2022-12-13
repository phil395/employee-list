import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ data, deleteItem, toggleItemAchievement, setNewItemSalary }) => {

	const employeesCollection = data.map(el => {
		const { id, ...restFieldsObj } = el
		const toggleMyAchievement = toggleItemAchievement(id)
		const setMyNewSalary = setNewItemSalary(id)

		return <EmployeesListItem
			key={id}
			{...restFieldsObj}
			toggleMyAchievement={toggleMyAchievement}
			setMyNewSalary={setMyNewSalary}
			deleteMe={() => deleteItem(id)} />
	})

	const emptyCollectionMessage = <div style={{ padding: 'calc(12.5px + 1.5vmin)' }}>Data not founded</div>

	return (
		<ul className="employees-list">
			{employeesCollection}

			{employeesCollection.length === 0 && emptyCollectionMessage}
		</ul>
	)
}

export default EmployeesList;