import { useDispatch, useSelector } from 'react-redux';

import CategoryFilter from '../components/Filters/CategoryFilter'
import SortDropdown from '../components/Filters/SortDropdown'

import { setCategory, setSortBy } from '../features/products/productsSlice';
import { selectProductsState, selectFilteredProducts } from '../features/products/productsSelectors';
import ProductsContainer from '../components/ProductContainer';

import styles from './styles.module.css'
import PageTitle from '../components/Header/Title';

export default function Shop() {
	const dispatch = useDispatch()
	const { products, category, sortValue } = useSelector(selectProductsState);
	const filteredProducts = useSelector(selectFilteredProducts);

	const data = filteredProducts.filtered
		? filteredProducts.data
		: products

	return (
		<div className={styles.pageContainer}>
			<div className={styles.pageTitleContainer}>
				<PageTitle text={"Shop"} />
				{data.length > 0 && <p className={styles.itemNumber}>Showing {data.length} Products</p>}
			</div>
			<div className={styles.filterContainer}>
				<CategoryFilter setCategory={(e) => dispatch(setCategory(e))} category={category} />
				<SortDropdown setSort={(e) => dispatch(setSortBy(e))} sortValue={sortValue} />
			</div>
			<ProductsContainer products={data} />
		</div>
	)
}
