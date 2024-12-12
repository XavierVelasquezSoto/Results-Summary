import { v4 } from 'uuid';

export const CARD_INFO = [
	{
		id: v4(),
		container: 'red',
		imgSummary: '/public/assets/images/icon-reaction.svg',
		textSummary: 'Reaction',
		numberResult: '80',
		numberTotal: '/ 100'
	},

	{
		id: v4(),
		container: 'yellow',
		imgSummary: '/public/assets/images/icon-memory.svg',
		textSummary: 'Memory',
		numberResult: '92',
		numberTotal: '/ 100'
	},

	{
		id: v4(),
		container: 'green',
		imgSummary: '/public/assets/images/icon-verbal.svg',
		textSummary: 'Verbal',
		numberResult: '61',
		numberTotal: '/ 100'
	},

	{
		id: v4(),
		container: 'blue',
		imgSummary: '/public/assets/images/icon-visual.svg',
		textSummary: 'Visual',
		numberResult: '73',
		numberTotal: '/ 100'
	}
];
