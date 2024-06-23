import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IBoard } from '../../@types/IBoard'

export interface BoardsState {
	boards: IBoard[]
}

const initialState: BoardsState = {
	boards: [],
}

export const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		setBoards: (state, action: PayloadAction<IBoard[]>) => {
			state.boards = action.payload
		},
		addBoard: (state, action: PayloadAction<IBoard>) => {
			action.payload.id = new Date().getTime()
			state.boards.push(action.payload)
			localStorage.setItem('boards', JSON.stringify(state.boards))
		},
		deleteBoard: (state, action: PayloadAction<number>) => {
			console.log(action.payload)
			state.boards = state.boards.filter(board => board.id !== action.payload)
			localStorage.setItem('boards', JSON.stringify(state.boards))
		},
	},
})

// Action creators are generated for each case reducer function
export const { setBoards, addBoard, deleteBoard } = boardsSlice.actions

export default boardsSlice.reducer
