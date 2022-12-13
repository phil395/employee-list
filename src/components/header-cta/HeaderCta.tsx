import type { FC } from "react";
import { Search } from "../search/Search";
import type { IHeaderCta } from "../../interfaces/IHeaderCta";

import './HeaderCta.css';
import { Filters } from "../filters/Filters";

interface Props extends IHeaderCta {

}

export const HeaderCta: FC<Props> = ({ setSearchValue, setFilterValue }) => {
	return (
		<div className="header-cta-panel">
			<Search
				setSearchValue={setSearchValue} />
			<Filters
				setFilterValue={setFilterValue} />
		</div>
	);
};