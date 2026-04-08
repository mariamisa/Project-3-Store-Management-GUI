import { useSelector } from 'react-redux'

import ProductsContainer from '../components/ProductContainer';
import EmptyCart from '../components/EmptyCart';

import { selectCartItems } from '../features/cart/cartSelectors'

import styles from './styles.module.css';

export default function Cart() {
	const products = useSelector(selectCartItems);

	return (
		<div className={styles.pageContainer}>
			{products.length > 0 ? <ProductsContainer products={products} /> : <EmptyCart />}
		</div>
	)
}
