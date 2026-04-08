import { useSelector } from 'react-redux';
import { selectAllProducts } from '../features/products/productsSelectors';
import ProductsContainer from '../components/ProductContainer';

import styles from './styles.module.css'

export default function Shop() {
	const products = useSelector(selectAllProducts);

	return (
		<div className={styles.pageContainer}>
			<ProductsContainer products={products} />
		</div>
	)
}
