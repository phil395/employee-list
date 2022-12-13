import './header-cta-panel.css';
import SearchField from '../search-field/search-field';
import FilterBtns from '../filter-btns/filter-btns';

const HeaderCtaPanel = ({ transitSearchReq, transitFilterValue }) => {
	return (
		<div className="header-cta-panel">
			<SearchField
				getSearchStr={transitSearchReq} />
			<FilterBtns
				setFilterValue={transitFilterValue} />
		</div>
	)
}

export default HeaderCtaPanel;