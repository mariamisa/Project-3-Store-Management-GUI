import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems, selectCartTotalPrice, selectCartCount } from '../features/cart/cartSelectors'
import { clearCart } from '../features/cart/cartSlice';
import { purchase } from '../features/products/productsSlice'

import ProductsContainer from '../components/ProductContainer';
import EmptyCart from '../components/EmptyCart';
import PageTitle from '../components/Header/Title';
import Button from '../components/Button';
import Toast from '../components/Toast';

import styles from './styles.module.css';

export default function Cart() {
	const dispatch = useDispatch();
	const products = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotalPrice);
	const cartCount = useSelector(selectCartCount)
	const [toast, setToast] = useState()

	const formattedPrice = totalPrice.toFixed(2);

	const handelPurchase = () => {
		try {
			dispatch(purchase(products.map(({ id, quantity }) => ({ id, quantity }))))
			dispatch(clearCart())
			setToast({ msg: "Purchased successfully", status: "success" })
			// eslint-disable-next-line no-unused-vars
		} catch (e) {
			setToast({ msg: "Something went wrong", status: "error" })

		}
	}

	return (
		<div className={styles.pageContainer}>
			<div className={styles.pageTitleContainer}>
				<PageTitle text={`Cart (${cartCount})`} />
				{products.length > 0 && <p className={styles.total}>Your Total Price is: ${formattedPrice}</p>}
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
			{toast && (
				<Toast
					message={toast.msg}
					type={toast.status}
					onClose={() => setToast(null)}
				/>
			)}
		</div>
	)
}
