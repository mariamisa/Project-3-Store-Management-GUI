
import styles from './styles.module.css'

export default function CategoryFilter({
	options = [],
	onChange,
	value, defaultValue = "",
	defaultValueLabel,
	id,
	labels = {}
}) {
	return (
		<div className={styles.container}>
			<select
				id={id}
				name={id}
				className={styles.dropdown}
				value={value || defaultValue}
				onChange={(e) => onChange(e.target.value)}>
				{options.map((el) => <option key={el}
					value={el}>
					{el === defaultValue ? defaultValueLabel : labels?.[el] || el}
				</option>)}
			</select>
		</div>
	)
}

