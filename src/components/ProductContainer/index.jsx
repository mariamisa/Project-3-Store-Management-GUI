
import Product from "../Product";
import styles from "./styles.module.css";

const ProductsContainer = ({ products = [] }) => {

	return (
		<div className={styles.gridContainer}>
			{products.length > 0
				? products.map(el => <Product key={el.id} product={el} />)
				: "no products to view"}
		</div>
	);
};

export default ProductsContainer;