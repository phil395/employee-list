import React from 'react';

import './search-field.css';

class SearchField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchStr: ''
		}
	}

	changeHandler = (e) => {
		const searchStr = e.target.value;
		this.setState({ searchStr })
		this.props.getSearchStr(searchStr)
	}

	render() {
		return (
			<input
				name="searchField"
				onChange={this.changeHandler}
				type="text"
				value={this.state.searchStr}
				className="search-field"
				placeholder="Имя сотрудника" />
		)
	}
}

export default SearchField;