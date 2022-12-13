import type { FC } from "react";
import { IHeaderCta } from "../../interfaces/IHeaderCta";

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