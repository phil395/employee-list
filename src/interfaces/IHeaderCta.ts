
export type FilterValue = 'all' | 'award' | 'salary';

export interface IHeaderCta {
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>;
}
