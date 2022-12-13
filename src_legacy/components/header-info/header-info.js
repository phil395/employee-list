
import './header-info.css'

const HeaderInfo = ({ statisticQty }) => {

	const { qtyEmployees, qtyEmployeesWithBonus } = statisticQty

	return (
		<div className="header-info">
			<h1>Учет соотрудников компании</h1>
			<h2>Общее число соотрудников: {qtyEmployees} </h2>
			<h2>Премию получают: {qtyEmployeesWithBonus} </h2>
		</div>
	)
}

export default HeaderInfo;