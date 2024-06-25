import { configureStore } from '@reduxjs/toolkit'
import boardsSlice from './slices/boards.slice'
import cardsSlice from './slices/cards.slice'
import kanbanColsSlice from './slices/kanbanCols.slice'
import mobileSlice from './slices/mobile.slice'
import modalsSlice from './slices/modals.slice'
import projectsSlice from './slices/projects.slice'

export const store = configureStore({
	reducer: {
		boards: boardsSlice,
		modals: modalsSlice,
		kanbanCols: kanbanColsSlice,
		cards: cardsSlice,
		projects: projectsSlice,
		mobile: mobileSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
