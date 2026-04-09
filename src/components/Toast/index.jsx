import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Toast = ({
	message,
	type = "success",
	duration = 2000,
	onClose,
}) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);

			setTimeout(() => {
				onClose && onClose();
			}, 300);

			() => {
				setVisible(false)
			}
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	return (
		<div
			className={`${styles.toast} ${styles[type]} ${!visible ? styles.hide : ""
				}`}
		>
			<span>{message}</span>
			<button onClick={() => setVisible(false)}>×</button>
		</div>
	);
};

export default Toast;