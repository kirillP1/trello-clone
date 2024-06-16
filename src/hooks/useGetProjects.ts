import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProjects } from '../redux/slices/projects.slice'
import { AppDispatch } from '../redux/store'

export const useGetProjects = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!localStorage.getItem('projects')) {
			localStorage.setItem(
				'projects',
				JSON.stringify([
					{ id: 1, name: 'Study project' },
					{ id: 2, name: 'Programming project' },
				])
			)
		}

		dispatch(
			setProjects(JSON.parse(localStorage.getItem('projects') as string))
		)
	})
}
