import styles from './sumary-total.module.css';

const SummaryTotal = ({
	imgSummary,
	textSummary,
	numberResult,
	numberTotal
}) => {
	return (
		<div className={`{styles.container}`}>
			<img className={styles.imgSummaryTotal} src={imgSummary} alt='' />
			<span className={styles}>{textSummary}</span>
			<span className={styles}>{numberTotal}</span>
			<span className={styles}>{numberResult}</span>
		</div>
	);
};

export default SummaryTotal;
