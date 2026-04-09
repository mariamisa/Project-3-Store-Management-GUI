import { useSelector, useDispatch } from 'react-redux'

import ProductsContainer from '../components/ProductContainer';
import EmptyCart from '../components/EmptyCart';

import { selectCartItems, selectCartTotalPrice, selectCartCount } from '../features/cart/cartSelectors'
import { clearCart } from '../features/cart/cartSlice';
import { purchase } from '../features/products/productsSlice'

import styles from './styles.module.css';
import PageTitle from '../components/Header/Title';
import Button from '../components/Button';

export default function Cart() {
	const dispatch = useDispatch();
	const products = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotalPrice);
	const cartCount = useSelector(selectCartCount)

	const formattedPrice = totalPrice.toFixed(2);

	const handelPurchase = () => {
		dispatch(purchase(products.map(({ id, quantity }) => ({ id, quantity }))))
		dispatch(clearCart())
	}

	return (
		<div className={styles.pageContainer}>
			<div className={styles.pageTitleContainer}>
				<PageTitle text={`Cart (${cartCount})`} />
				<p className={styles.total}>Your Total Price is: ${formattedPrice}</p>
			</div>
			{products.length > 0 ?
				<>
					<ProductsContainer cartProduct products={products} />
					<div className={styles.footerCart}>
						<p className={styles.totalPrice}>SubTotal: {totalPrice > 0 && `$${formattedPrice}`} </p>
						<Button className={styles.secondaryBtn} text={"Purchase"} onClick={handelPurchase} />
					</div>
				</>
				: <EmptyCart />}
		</div>
	)
}
