import { useSelector } from 'react-redux'

import Header from '../components/Header'
import Link from '../components/Navbar/Link'
import ProductsContainer from '../components/ProductContainer'
import { selectFeaturedProducts } from '../features/products/productsSelectors'

import styles from './styles.module.css'

export default function Home() {
	const featureidProducts = useSelector(selectFeaturedProducts);

	return (
		<div className={styles.pageCOntainer}>
			<Header />
			<div className={styles.featuredSection}>
				<div className={styles.featured}>
					<h2>Featured Picks</h2>
					<Link className={styles.link} to="/shop" text=" view all" />
				</div>
				<ProductsContainer products={featureidProducts} />
			</div>
		</div>
	)
}
