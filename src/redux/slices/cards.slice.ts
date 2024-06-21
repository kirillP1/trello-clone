import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ICard } from '../../@types/ICard'

export interface cardsState {
	currentModalCard: ICard | null
}

const initialState: cardsState = {
	currentModalCard: null,
}

export const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setCurrentModalCard: (state, action: PayloadAction<ICard | null>) => {
			state.currentModalCard = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setCurrentModalCard } = cardsSlice.actions

export default cardsSlice.reducer
