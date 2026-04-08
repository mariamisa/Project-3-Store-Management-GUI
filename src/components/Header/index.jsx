import Button from '../Button'
import styles from './styles.module.css'

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Discover Your Style</h1>
				<p className={styles.description}>Curated clothing & accessories for every mood, every moment.</p>
				<Button text="Shop Now" />
			</div>
		</div>
	)
}
