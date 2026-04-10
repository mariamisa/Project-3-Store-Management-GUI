import { useState } from "react";

import Up from '../../svg/up'
import Down from '../../svg/down'

import styles from "./styles.module.css";

const AccordionItem = ({ title, children }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.item}>
			<button
				className={styles.button}
				onClick={() => setOpen(!open)}
			>
				<span className={styles.title}>{title}</span>
				<span>{open ? <Down /> : <Up />}</span>
			</button>

			<div
				className={`${styles.content} ${open && styles.contentOpen}`}>
				<div className={styles.inner}>{children}</div>
			</div>
		</div>
	);
};

export default AccordionItem;