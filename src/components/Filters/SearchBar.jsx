import { useNavigate, useLocation } from "react-router-dom";

import SearchIcon from '../../svg/search'
import styles from './styles.module.css'

export default function SearchBar({ onSearch, query = "" }) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleChange = (e) => {
		const query = e.target.value?.toLowerCase()?.trim();
		onSearch(query);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (location.pathname !== "/shop") {
				navigate("/shop");
			}
		}
	};

	return (
		<div className={styles["search-container"]}>
			<SearchIcon className={styles["search-icon"]} />
			<input
				type="text"
				placeholder="Search products..."
				value={query}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}
