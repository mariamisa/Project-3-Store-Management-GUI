import { createSelector } from '@reduxjs/toolkit';

import { sortFunctions } from '../../helper'

export const selectProductsState = (state) => state.products;

export const selectAllProducts = (state) => state.products.products.filter(el => el.stock);

export const selectSearchValue = (state) => state.products.searchValue;

export const selectCategory = (state) => state.products.category;

export const selectSortBy = (state) => state.products.sortBy;

export const selectAllCategories = createSelector(
	[selectAllProducts],
	(products) => {
		const categories = products.map(el => el.category);
		return ["All", ...new Set(categories)];
	}
);

export const selectFilteredProducts = createSelector(
	[selectAllProducts, selectSearchValue, selectCategory, selectSortBy],
	(products, searchValue, category, sortBy) => {
		let result = products;

		if (searchValue && searchValue.trim() !== "") {
			const lower = searchValue.toLowerCase();
			result = result.filter((el) =>
				el.name.toLowerCase().includes(lower)
			);
		}

		if (category && category !== 'All') {
			result = result.filter((el) => el.category === category);
		}

		if (sortBy && sortBy !== "default" && sortFunctions[sortBy]) {
			result = [...result].sort(sortFunctions[sortBy]);
		}

		return {
			data: result,
			filtered:
				!!searchValue ||
				(category && category !== 'All') ||
				(sortBy && sortBy !== "default"),
		};
	}
);

export const selectFeaturedProducts = createSelector(
	[selectAllProducts],
	(products) => products.slice(0, 4)
);