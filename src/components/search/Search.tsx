import { FC, useState } from "react";
import { IHeaderCta } from "../../interfaces/IHeaderCta";

import './Search.css';

interface Props extends Pick<IHeaderCta, 'setSearchValue'> { }

export const Search: FC<Props> = ({ setSearchValue }) => {
	const [value, setValue] = useState('');

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const inputValue = e.target.value.toLowerCase();
		setValue(inputValue);
		setSearchValue(inputValue);
	};

	return (
		<input
			name="searchField"
			onChange={onChange}
			type="text"
			value={value}
			className="search-field"
			placeholder="Имя сотрудника" />
	);
};