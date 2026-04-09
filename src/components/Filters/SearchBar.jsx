import SearchIcon from '../../svg/search'
import styles from './styles.module.css'

export default function SearchBar({ onSearch, query="" }) {

	const handleChange = (e) => {
		const query = e.target.value?.toLowerCase()?.trim();
		onSearch(query);
	};

	return (
		<div className={styles["search-container"]}>
			<SearchIcon className={styles["search-icon"]} />
			<input
				type="text"
				placeholder="Search products..."
				value={query}
				onChange={handleChange}
			/>
		</div>
	)
}
