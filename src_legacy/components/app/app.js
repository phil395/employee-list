import React from "react";

import HeaderInfo from "../header-info/header-info";
import HeaderCtaPanel from "../header-cta-panel/header-cta-panel";
import EmployeesList from "../employees-list/employees-list";
import AddNewEmployee from "../add-new-employee/add-new-employee";

import './app.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					id: 1,
					name: 'Leanne Graham',
					salary: 400,
					bonus: false,
					award: true
				},
				{
					id: 2,
					name: 'Ervin Howell',
					salary: 550,
					bonus: true,
					award: false
				},
				{
					id: 3,
					name: 'Clementine Bauch',
					salary: 390,
					bonus: false,
					award: false
				},
				{
					id: 4,
					name: 'Patricia Lebsack',
					salary: 297,
					bonus: false,
					award: false
				},
				{
					id: 5,
					name: 'Chelsey Dietrich',
					salary: 890,
					bonus: true,
					award: false
				},
				{
					id: 6,
					name: 'Mrs. Dennis Schulist',
					salary: 670,
					bonus: false,
					award: false
				},
				{
					id: 7,
					name: 'Kurtis Weissnat',
					salary: 570,
					bonus: false,
					award: false
				}
			],
			lastEmployeeId: 7,
			searchStr: '',
			filterValue: 'all'
		}
	}

	toggleEmployeeAchievement = (id) => (achievement) => {
		this.setState(({ data }) => ({
			data: data.map(el => {
				return (el.id === id)
					? { ...el, [achievement]: !el[achievement] }
					: el
			})
		}))
	}

	setNewSalar = (id) => (salary) => {
		this.setState(({ data }) => ({
			data: data.map(el => {
				return (el.id === id)
					? { ...el, salary }
					: el
			})
		}))
	}

	deleteEmployee = (id) => {
		this.setState(currentState => {
			const newEmployeesArray = currentState.data.filter(el => {
				return el.id !== id
			})
			return { data: newEmployeesArray }
		})
	}

	addNewEmployee = (name, salary) => {
		const newEntry = {
			id: this.state.lastEmployeeId + 1,
			name,
			salary,
			bonus: false,
			award: false
		};
		this.setState(currentState => ({
			lastEmployeeId: currentState.lastEmployeeId + 1,
			data: [...currentState.data, newEntry]
		}));
	}

	getStatisticQty = () => {
		const { data } = this.state

		return {
			qtyEmployees: data.length,
			qtyEmployeesWithBonus: data.filter(el => el.bonus).length
		}
	}

	setSearchRequest = (searchStr) => {
		this.setState({ searchStr: searchStr.toLowerCase() })
	}
	setFilterValue = (filterValue) => {
		this.setState({ filterValue })
	}

	getSerchedResults = (data) => {
		const { searchStr } = this.state

		if (searchStr.length === 0) return data

		return data.filter(el => {
			const nameInLoverCase = el.name.toLowerCase()
			return nameInLoverCase.indexOf(searchStr) > -1
		})
	}

	dataFilter = () => {
		const { data, filterValue } = this.state

		const filterByAchievement = (achievement) => {
			return data.filter(el => el[achievement])
		}

		const filterByMinSalary = (minSalary) => {
			return data.filter(el => el.salary > minSalary)
		}

		const curry = (a) => (b) => (x) => {
			return a(b(x))
		}

		const filteredData = {
			'all': this.getSerchedResults(data),
			'award': curry(this.getSerchedResults)(filterByAchievement)('award'),
			'bonus': curry(this.getSerchedResults)(filterByAchievement)('bonus'),
			'bigSalary': curry(this.getSerchedResults)(filterByMinSalary)(1000)
		}

		return filteredData[filterValue]
	}


	render() {
		const dataForRender = this.dataFilter()

		return (
			<div className="app">
				<HeaderInfo
					statisticQty={this.getStatisticQty()} />
				<HeaderCtaPanel
					transitSearchReq={this.setSearchRequest}
					transitFilterValue={this.setFilterValue} />
				<EmployeesList
					data={dataForRender}
					toggleItemAchievement={this.toggleEmployeeAchievement}
					setNewItemSalary={this.setNewSalar}
					deleteItem={this.deleteEmployee} />
				<AddNewEmployee
					actionAdd={this.addNewEmployee} />
			</div>
		)
	}
}

export default App