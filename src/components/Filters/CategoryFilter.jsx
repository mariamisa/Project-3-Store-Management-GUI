import { useSelector } from "react-redux"

import Dropdown from '../Dropdown'
import { selectAllCategories } from '../../features/products/productsSelectors'


export default function CategoryFilter({ setCategory, category }) {
	const categories = useSelector(selectAllCategories)
	
	return (
		<Dropdown
			id="category"
			value={category || "All"}
			onChange={setCategory}
			options={categories}
			defaultValue="All"
			defaultValueLabel="All Categories"
		/>
	)
}
