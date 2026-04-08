import LogoImage from '../../svg/logo'

import styles from './styles.module.css'

export default function Logo({ color = "#333" }) {
	return (
		<div className={styles.logoContainer}>
			<LogoImage className={styles.logo} color={color} />
			<span className={styles.title}>STYLEVA</span>
		</div>
	)
}
