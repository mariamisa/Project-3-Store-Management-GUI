import { useSelector } from 'react-redux'

import ProductsContainer from '../components/ProductContainer';
import EmptyCart from '../components/EmptyCart';

import { selectCartItems, selectCartTotalPrice } from '../features/cart/cartSelectors'

import styles from './styles.module.css';

export default function Cart() {
	const products = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotalPrice);

	return (
		<div className={styles.pageContainer}>
			<p>your total price is: {totalPrice}</p>
			{products.length > 0 ? <ProductsContainer cartProduct products={products} /> : <EmptyCart />}
		</div>
	)
}
