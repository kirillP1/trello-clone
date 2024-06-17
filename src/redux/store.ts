import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from './slices/cards.slice'
import kanbanColsSlice from './slices/kanbanCols.slice'
import modalsSlice from './slices/modals.slice'
import projectsSlice from './slices/projects.slice'

export const store = configureStore({
	reducer: {
		projects: projectsSlice,
		modals: modalsSlice,
		kanbanCols: kanbanColsSlice,
		cards: cardsSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
