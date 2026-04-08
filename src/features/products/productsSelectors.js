export const selectAllProducts = (state) => state.products.products;

export const selectFeaturedProducts = (state) => {
	const allProducts = [...state.products.products];

	for (let i = allProducts.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
	}

	return allProducts.slice(0, 4);
};
