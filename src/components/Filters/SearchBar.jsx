import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from './styles.module.css'

export default function SearchBar() {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		setQuery(e.target.value);
		// if (onSearch) onSearch(e.target.value);
	};
	return (
		<div className={styles["search-container"]}>
			<FiSearch className={styles["search-icon"]} />
			<input
				type="text"
				placeholder="Search products..."
				value={query}
				onChange={handleChange}
			/>
		</div>
	)
}
