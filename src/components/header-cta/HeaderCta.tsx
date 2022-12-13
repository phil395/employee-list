import type { FC } from "react";
import { Search } from "../search/Search";
import type { IHeaderCta } from "../../interfaces/IHeaderCta";

import './HeaderCta.css';

interface Props extends IHeaderCta {

}

export const HeaderCta: FC<Props> = ({ setSearchValue, setFilterValue }) => {
	return (
		<div className="header-cta-panel">
			<Search
				setSearchValue={setSearchValue} />
			<FilterBtns
				setFilterValue={setFilterValue} />
		</div>
	);
};