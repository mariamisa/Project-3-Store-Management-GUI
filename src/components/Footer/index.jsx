import Logo from '../Logo'

import Facebook from '../../svg/facebook'
import Instagram from '../../svg/instagram'
import TicToc from '../../svg/tictoc'
import X from '../../svg/x'

import styles from './styles.module.css'

export default function Footer() {
	const size = {
		width: "30px",
		height: "30px",
	}
	return (
		<div className={styles.footer}>
			<div className={styles.section1}>
				<Logo color="white" />
				<p className={styles.copyRight}>
					© {new Date().getFullYear()} Styleva. All rights reserved.
				</p>
			</div>
			<div className={styles.section2}>
				<p>Follow Us</p>
				<div className={styles.socialMedia}>
					<a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><Facebook {...size} /></a>
					<a href='https://www.tiktok.com/' target="_blank" rel="noopener noreferrer"><TicToc {...size} /></a>
					<a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><Instagram {...size} /></a>
					<a href='https://x.com/' target="_blank" rel="noopener noreferrer"><X {...size} /></a>
				</div>
			</div>
		</div>
	)
}
