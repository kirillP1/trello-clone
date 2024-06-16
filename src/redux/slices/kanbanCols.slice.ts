import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
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
		},
		addKanbanCol: (state, action: PayloadAction<IKanbanCol>) => {
			action.payload.id = new Date().getTime()
			state.kanbanCols.push(action.payload)
			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
		deleteKanbanCol: (state, action: PayloadAction<number>) => {
			state.kanbanCols = state.kanbanCols.filter(
				project => project.id !== action.payload
			)
			localStorage.setItem('kanbanCols', JSON.stringify(state.kanbanCols))
		},
	},
})

// Action creators are generated for each case reducer function
export const { setKanbanCols, addKanbanCol, deleteKanbanCol } =
	kanbanColsSlice.actions

export default kanbanColsSlice.reducer
