import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './styles.module.css'
	
export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Navbar />
			{children}
			<Footer />

		</div>
	)
}
