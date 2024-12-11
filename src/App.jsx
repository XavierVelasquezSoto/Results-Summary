import CardFlex from "./components/card-flex/Card-flex";
import CardResult from "./components/card-result/Card-result";
import CardSummary from "./components/card-summary/card-summary";
/* import { CARD_INFO } from "./constants/card-info"; */

const App = () => {
	return <CardFlex> 
		<CardResult titleResult="Your Result" numberResult="76" numberResultPercent="of 100" subtitle="Great" textResultPercent="Your performance exceed 65% of the people conducting the test here!"/>
		<CardSummary />		
	</CardFlex>
};

export default App;
