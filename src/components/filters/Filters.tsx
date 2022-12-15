import { FC, useCallback, useState } from "react";
import { MIN_SALARY_FILTER_VALUE } from "../../hook/useApp";
import type { FilterValue, IHeaderCta } from "../../interfaces/IHeaderCta";

import './Filters.css';

interface Props extends Pick<IHeaderCta, 'setFilterValue'> { }

interface BtnProps {
	filterValue: FilterValue;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	text: string;
	activeFilter: FilterValue;
}

const Btn: FC<BtnProps> = ({ filterValue, onClick, text, activeFilter }) => {
	const isActiveFilter = activeFilter === filterValue;
	return (
		<button
			value={filterValue}
			onClick={onClick}
			className={isActiveFilter ? 'filter-btns--selected' : undefined}>{text}</button>
	);
};

export const Filters: FC<Props> = ({ setFilterValue }) => {
	const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

	const onClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
		const value = e.currentTarget.value as FilterValue;
		setActiveFilter(value);
		setFilterValue(value);
	}, []);

	return (
		<div className="filter-btns">
			<Btn filterValue="all" onClick={onClick} activeFilter={activeFilter} text="Все сотрудники" />
			<Btn filterValue="award" onClick={onClick} activeFilter={activeFilter} text="На повышение" />
			<Btn filterValue="salary" onClick={onClick} activeFilter={activeFilter} text={`з/п больше $${MIN_SALARY_FILTER_VALUE}`} />
		</div>
	);
};