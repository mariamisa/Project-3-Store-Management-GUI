import { useNavigate } from 'react-router-dom';

import Button from '../Button'
import styles from './styles.module.css'

export default function Header() {
	const navigate = useNavigate();

	return (
		<div className={styles.headerContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Discover Your Style</h1>
				<p className={styles.description}>Curated clothing & accessories for every mood, every moment.</p>
				<div className={styles.flex}>
					<Button text="Shop Now" onClick={() => navigate('/shop')} />
					<Button className={styles.btn} text="Learn More" onClick={() => navigate('/About')} />
				</div>
			</div>
		</div>
	)
}
