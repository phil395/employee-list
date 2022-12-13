export interface IHeaderCta {
	setSearchValue: (employeeName: string) => {};
	setFilterValue: (value: FilterValue) => {};
}

export type FilterValue = 'all' | 'award' | 'salary';