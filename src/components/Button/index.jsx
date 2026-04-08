import styles from './styles.module.css'

export default function Button({ text, handelClick, ...rest }) {
	return (
		<button className={styles.btn} onClick={handelClick} {...rest}>
			{text}
		</button>
	)
}
