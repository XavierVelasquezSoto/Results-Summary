import { CARD_INFO } from '../../constants/card-info';
import SummaryTotal from '../summary-total/summary-total';
import styles from './card-summary.module.css';

const CardSummary = () => {
	return (
		<div>
			<h2 className={styles.summary}>Summary</h2>
			{CARD_INFO.map(cardInfo => {
				return (
					<SummaryTotal
						key={cardInfo.id}
						container={cardInfo.container}
						imgSummary={cardInfo.imgSummary}
						textSummary={cardInfo.textSummary}
						numberResult={cardInfo.numberResult}
						numberTotal={cardInfo.numberTotal}
					/>
				);
			})}
			<button className={styles.button}>Continue</button>
		</div>
	);
};

export default CardSummary;
