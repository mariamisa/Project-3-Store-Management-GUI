import { createSelector } from '@reduxjs/toolkit';

export const selectProductsState = (state) => state.products;

export const selectAllProducts = (state) => state.products.products;

export const selectSearchValue = (state) => state.products.searchValue;

export const selectCategory = (state) => state.products.category;

export const selectSortBy = (state) => state.products.sortBy;

export const selectAllCategories = (state) => ["All", ...new Set(state.products.products.map(el => el.category))];

export const selectFilteredProducts = createSelector(
	[selectProductsState],
	({ products, searchValue, category, sortBy }) => {
		let result = products;

		if (searchValue && searchValue.trim() !== "") {
			result = result.filter((el) => el.name.toLowerCase().includes(searchValue));
		}

		if (category && category !== 'All') {
			result = result.filter((el) => el.category === category);
		}

		if (sortBy !== "default") {
			if (sortBy === "alpha") {
				result = [...result].sort((a, b) => a.name.localeCompare(b.name));
			} else {
				result = [...result].sort((a, b) => (sortBy === "low" ? a.price - b.price : b.price - a.price));
			}
		}

		return {
			data: result,
			filtered: !!searchValue || (category && category !== 'All' || sortBy !== "default"),
		};
	}
);

export const selectFeaturedProducts = (state) => {
	const allProducts = [...state.products.products];

	for (let i = allProducts.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
	}

	return allProducts.slice(0, 4);
};
