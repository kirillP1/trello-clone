import cardsSlice, {
	cardsState,
	setCurrentModalCard,
} from '../../../redux/slices/cards.slice'

describe('projectReducer', () => {
	let initialState: cardsState
	beforeEach(() => {
		initialState = { currentModalCard: null }
	})
	test('setCreateBoardModal', () => {
		const cardSlice = cardsSlice(
			initialState,
			setCurrentModalCard({
				id: 1,
				name: 'First',
				kanbanColId: 1,
				desc: 'desc of card',
			})
		)

		expect(cardSlice.currentModalCard?.id).toEqual(1)
	})
})
