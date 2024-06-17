import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ICard } from '../../@types/ICard'

export interface cardsState {
	cards: ICard[]
}

const initialState: cardsState = {
	cards: [],
}

export const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setCards: (state, action: PayloadAction<ICard[]>) => {
			state.cards = action.payload
		},
		addCard: (state, action: PayloadAction<ICard>) => {
			action.payload.id = new Date().getTime()
			state.cards.push(action.payload)
			localStorage.setItem('cards', JSON.stringify(state.cards))
		},
		deleteCard: (state, action: PayloadAction<number>) => {
			state.cards = state.cards.filter(card => card.id !== action.payload)
			localStorage.setItem('cards', JSON.stringify(state.cards))
		},
	},
})

// Action creators are generated for each case reducer function
export const { setCards, addCard, deleteCard } = cardsSlice.actions

export default cardsSlice.reducer
