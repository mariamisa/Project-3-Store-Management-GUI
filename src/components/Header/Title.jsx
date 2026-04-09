import styles from './styles.module.css'

export default function PageTitle({text}) {
	return (
		<h1 className={styles.pageTitle}>{text}</h1>
	)
}
