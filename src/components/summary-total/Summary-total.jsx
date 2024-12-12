import styles from './sumary-total.module.css';

const SummaryTotal = ({
	container,
	imgSummary,
	textSummary,
	numberResult,
	numberTotal
}) => {
	return (
		<div className={`${styles.container} ${styles[`container-${container}`]}`}>
			<img className={styles.imgSummaryTotal} src={imgSummary} alt='' />
			<span
				className={`${styles.textSummary} ${styles[`textSummary-${container}`]}`}
			>
				{textSummary}
			</span>
			<span className={styles.numberResult}>{numberResult}</span>
			<span className={styles.numberTotal}>{numberTotal}</span>
		</div>
	);
};

export default SummaryTotal;
