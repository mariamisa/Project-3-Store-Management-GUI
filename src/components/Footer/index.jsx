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
					<Facebook {...size} />
					<TicToc {...size} />
					<Instagram {...size} />
					<X {...size} />
				</div>
			</div>
		</div>
	)
}
