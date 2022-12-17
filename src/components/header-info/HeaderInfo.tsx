import type { FC } from "react";
import { IHeaderStats } from "../../interfaces/IHeaderStats";

import './HeaderInfo.css';

interface Props extends IHeaderStats { }

export const HeaderInfo: FC<Props> = ({ qtyEmployees, qtyEmployeesWithBonus }) => {
	return (
		<div className="header-info">
			<h1>Учет сотрудников компании</h1>
			<h2>Общее число сотрудников: {qtyEmployees} </h2>
			<h2>Премию получают: {qtyEmployeesWithBonus} </h2>
		</div>
	);
};