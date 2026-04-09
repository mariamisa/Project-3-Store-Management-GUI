import styles from './styles.module.css'

export default function Button({ text, handelClick,className, ...rest }) {
	return (
		<button className={`${styles.btn} ${className}`} onClick={handelClick} {...rest}>
			{text}
		</button>
	)
}
