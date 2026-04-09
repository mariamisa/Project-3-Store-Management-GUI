import PageTitle from '../components/Header/Title';

import styles from './styles.module.css';

export default function About() {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.pageTitleContainer}>
				<PageTitle text={"About"} />
			</div>
			<div>
				<p>hello</p>
			</div>
		</div>
	)
}
