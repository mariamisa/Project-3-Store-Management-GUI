
import Product from "../Product";
import CartProduct from "../CartProduct ";

import styles from "./styles.module.css";

const ProductsContainer = ({ products = [], cartProduct = false }) => {

	return (
		<div className={`${styles.gridContainer} ${cartProduct && styles.gridContainerCart}`}>
			{products.length > 0
				? products.map(el => (cartProduct ?
					<CartProduct key={el.id} product={el} /> : <Product key={el.id} product={el} />))
				: "no products to view"}
		</div>
	);
};

export default ProductsContainer;