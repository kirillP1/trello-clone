import modalsSlice, {
	ModalsState,
	setCardModal,
	setCreateBoardModal,
	setCreateProjectModal,
} from '../../../redux/slices/modals.slice'

describe('projectReducer', () => {
	let initialState: ModalsState
	beforeEach(() => {
		initialState = {
			createBoardModal: false,
			createProjectModal: false,
			cardModal: false,
		}
	})
	test('setCreateBoardModal', () => {
		expect(modalsSlice(initialState, setCreateBoardModal(true))).toEqual({
			...initialState,
			createBoardModal: true,
		})
	})

	test('setCreateProjectModal', () => {
		expect(modalsSlice(initialState, setCreateProjectModal(true))).toEqual({
			...initialState,
			createProjectModal: true,
		})
	})

	test('setCardModal', () => {
		expect(modalsSlice(initialState, setCardModal(true))).toEqual({
			...initialState,
			cardModal: true,
		})
	})
})
