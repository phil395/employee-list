
import './icons-font/icons-font.css'
import './employees-list-item.css';


const EmployeesListItem = ({ name, salary, bonus, award, deleteMe, toggleMyAchievement, setMyNewSalary }) => {
	const changeHandler = (e) => {
		const salaryValue = parseInt(e.target.value) || ''
		setMyNewSalary(salaryValue)
	}

	const checkBonus = (bonus) ? 'item--with-bonus' : ''
	const checkAward = (award) ? 'item--awarded' : ''

	return (
		<li className={`employees-list__item item ${checkBonus} ${checkAward}`}>
			<div className="item__name">
				{name}
			</div>
			<div className="item__field">
				<input
					name="itemSalaty"
					onChange={changeHandler}
					type="number"
					value={salary} />
			</div>
			<div className="item__cta">
				<span className="icon-money"
					onClick={() => toggleMyAchievement('bonus')} />
				<span className="icon-award"
					onClick={() => toggleMyAchievement('award')} />
				<span className="icon-bin"
					onClick={deleteMe} />
			</div>
		</li>
	)


}

export default EmployeesListItem;