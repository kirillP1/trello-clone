import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
	createProjectModal: boolean
	cardModal: boolean
}

const initialState: ModalsState = {
	createProjectModal: false,
	cardModal: false,
}

export const ModalsSlice = createSlice({
	name: 'Modals',
	initialState,
	reducers: {
		setCreateProjectModal: (state, action: PayloadAction<boolean>) => {
			state.createProjectModal = action.payload
		},
		setCardModal: (state, action: PayloadAction<boolean>) => {
			state.cardModal = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setCreateProjectModal, setCardModal } = ModalsSlice.actions

export default ModalsSlice.reducer
