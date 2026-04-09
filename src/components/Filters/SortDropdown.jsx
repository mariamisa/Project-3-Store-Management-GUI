import Dropdown from '../Dropdown'

export default function CategoryFilter({ setSort, sortValue }) {

	const sortByObject = {
		"default": "Default",
		"low": "Price: Low to High",
		"high": "Price: High to Low",
		"alpha": "Alphabetically"
	}

	return (
		<Dropdown
			id="sort"
			value={sortValue || "All"}
			onChange={setSort}
			options={["default", "low", "high", "alpha"]}
			labels={sortByObject}
			defaultValue="default"
			defaultValueLabel={"Default"}
		/>
	)
}
