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
				<Button text="Shop Now" onClick={() => navigate('/shop')} />
			</div>
		</div>
	)
}
