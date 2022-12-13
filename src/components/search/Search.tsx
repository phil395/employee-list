import { FC, useState } from "react";
import { IHeaderCta } from "../../interfaces/IHeaderCta";

import './Search.css';

interface Props extends Pick<IHeaderCta, 'setSearchValue'> { }

export const Search: FC<Props> = ({ setSearchValue }) => {
	const [value, setValue] = useState('');

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
		setSearchValue(e.target.value);
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