
export type FilterValue = 'all' | 'award' | 'salary';

export interface IHeaderCta {
	setSearchValue: (employeeName: string) => {};
	setFilterValue: (value: FilterValue) => {};
}
