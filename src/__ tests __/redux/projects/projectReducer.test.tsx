import projectsSlice, {
	addProject,
	deleteProject,
	setProjects,
} from '../../../redux/slices/projects.slice'

describe('projectReducer', () => {
	test('setProjects', () => {
		expect(
			projectsSlice({ projects: [] }, setProjects([{ id: 1, name: 'First' }]))
		).toEqual({ projects: [{ id: 1, name: 'First' }] })
	})

	test('setProjects empty state', () => {
		expect(
			projectsSlice(undefined, setProjects([{ id: 1, name: 'First' }]))
		).toEqual({ projects: [{ id: 1, name: 'First' }] })
	})

	test('addProject', () => {
		const reducer = projectsSlice(
			{ projects: [{ id: 1, name: 'First' }] },
			addProject({ id: 2, name: 'Second' })
		)

		expect(reducer.projects.length).toEqual(2)
	})

	test('deleteProject', () => {
		const reducer = projectsSlice(
			{
				projects: [
					{ id: 1, name: 'First' },
					{ id: 2, name: 'Second' },
				],
			},
			deleteProject(2)
		)

		expect(reducer.projects.length).toEqual(1)
	})
})
