import { useSelector } from 'react-redux'

import Header from '../components/Header'
import Link from '../components/Navbar/Link'
import ProductsContainer from '../components/ProductContainer'
import { selectFeaturedProducts, selectFilteredProducts } from '../features/products/productsSelectors'

import styles from './styles.module.css'

export default function Home() {
	const featureidProducts = useSelector(selectFeaturedProducts);
	const filteredProducts = useSelector(selectFilteredProducts);

	return (
		<div className={styles.pageContainer}>
			<Header />
			<div className={styles.featuredSection}>
				<div className={styles.featured}>
					<h2>Featured Picks</h2>
					<Link className={styles.link} to="/shop" text=" view all" />
				</div>
				<ProductsContainer
					products={filteredProducts.filtered
						? filteredProducts?.data?.slice(0, 4)
						: featureidProducts?.slice(0, 4)}
				/>
			</div>
		</div>
	)
}
