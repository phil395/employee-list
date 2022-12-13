import React from "react";

import "./filter-btns.css";

class FilterBtns extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFilter: 'all'
		}
	}

	clickHandler = (e) => {
		const activeFilter = e.target.value

		this.setState({ activeFilter })
		this.props.setFilterValue(activeFilter)
	}

	setClassActivity(value) {
		const { activeFilter } = this.state

		return (value === activeFilter) ? 'filter-btns--selected' : ''
	}

	render() {
		return (
			<div className="filter-btns">
				<button
					value='all'
					onClick={this.clickHandler}
					className={this.setClassActivity('all')}>Все сотрудники</button>
				<button
					value='award'
					onClick={this.clickHandler}
					className={this.setClassActivity('award')}>На повышение</button>
				<button
					value='bigSalary'
					onClick={this.clickHandler}
					className={this.setClassActivity('bigSalary')}>з/п больше $1000</button>
			</div>
		)
	}
}

export default FilterBtns;