import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
	createBoardModal: boolean
	createProjectModal: boolean
	cardModal: boolean
}

const initialState: ModalsState = {
	createBoardModal: false,
	createProjectModal: false,
	cardModal: false,
}

export const ModalsSlice = createSlice({
	name: 'Modals',
	initialState,
	reducers: {
		setCreateBoardModal: (state, action: PayloadAction<boolean>) => {
			state.createBoardModal = action.payload
		},
		setCreateProjectModal: (state, action: PayloadAction<boolean>) => {
			state.createProjectModal = action.payload
		},
		setCardModal: (state, action: PayloadAction<boolean>) => {
			state.cardModal = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setCreateBoardModal, setCardModal, setCreateProjectModal } =
	ModalsSlice.actions

export default ModalsSlice.reducer
