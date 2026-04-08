import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function LinkComponent({ text = "", to = "/" }) {
	return (
		<Link className={styles.link} to={to}>{text}</Link>
	)
}
