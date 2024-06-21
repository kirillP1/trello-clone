import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ICard } from '../../@types/ICard'
import { IKanbanCol } from '../../@types/IKanbanCol'

export interface kanbanColsState {
	kanbanCols: IKanbanCol[]
}

const initialState: kanbanColsState = {
	kanbanCols: [],
}

export const kanbanColsSlice = createSlice({
	name: 'kanbanCols',
	initialState,
	reducers: {
		setKanbanCols: (state, action: PayloadAction<IKanbanCol[]>) => {
			state.kanbanCols = action.payload
			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		addKanbanCol: (state, action: PayloadAction<IKanbanCol>) => {
			action.payload.id = new Date().getTime()
			action.payload.cards = []
			state.kanbanCols.push(action.payload)
			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		deleteKanbanCol: (state, action: PayloadAction<number>) => {
			state.kanbanCols = state.kanbanCols.filter(
				kanbanCol => kanbanCol.id !== action.payload
			)
			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		addCardToCol: (state, action: PayloadAction<ICard>) => {
			action.payload.id = new Date().getTime()
			action.payload.desc = ''

			const changedCol = state.kanbanCols.find(
				col => col.id === action.payload.kanbanColId
			) as IKanbanCol

			changedCol.cards.push(action.payload)
			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		deleteCardFromCol: (state, action: PayloadAction<ICard>) => {
			const changedCol = state.kanbanCols.find(
				col => col.id === action.payload.kanbanColId
			) as IKanbanCol

			changedCol.cards = changedCol.cards.filter(
				card => card.id !== action.payload.id
			)

			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		changeCardFromCol: (state, action: PayloadAction<ICard>) => {
			const changedCol = state.kanbanCols.find(
				col => col.id === action.payload.kanbanColId
			) as IKanbanCol

			if (action.payload.name === '') action.payload.name = 'Without name'

			changedCol.cards = changedCol.cards.map(card => {
				if (card.id === action.payload.id) {
					return action.payload
				}
				return card
			})

			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		changeCol: (state, action: PayloadAction<IKanbanCol>) => {
			state.kanbanCols = state.kanbanCols.map(col => {
				if (col.id === action.payload.id) {
					return action.payload
				}
				return col
			})

			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	setKanbanCols,
	addKanbanCol,
	deleteKanbanCol,
	addCardToCol,
	deleteCardFromCol,
	changeCardFromCol,
	changeCol,
} = kanbanColsSlice.actions

export default kanbanColsSlice.reducer
