import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IProject } from '../../@types/IProject'

export interface ProjectsState {
	projects: IProject[]
}

const initialState: ProjectsState = {
	projects: [],
}

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjects: (state, action: PayloadAction<IProject[]>) => {
			state.projects = action.payload
		},
		addProject: (state, action: PayloadAction<IProject>) => {
			action.payload.id = new Date().getTime()
			state.projects.push(action.payload)
			localStorage.setItem('projects', JSON.stringify(state.projects))
		},
		deleteProject: (state, action: PayloadAction<number>) => {
			console.log(action.payload)
			state.projects = state.projects.filter(
				project => project.id !== action.payload
			)
			localStorage.setItem('projects', JSON.stringify(state.projects))
		},
	},
})

// Action creators are generated for each case reducer function
export const { setProjects, addProject, deleteProject } = projectsSlice.actions

export default projectsSlice.reducer
