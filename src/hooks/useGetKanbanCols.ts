import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setKanbanCols } from '../redux/slices/kanbanCols.slice'
import { AppDispatch } from '../redux/store'

export const useGetKanbanCols = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!localStorage.getItem('kanbanCols')) {
			localStorage.setItem(
				'kanbanCols',
				JSON.stringify([
					{
						id: 1,
						name: 'Planning',
						projectId: 1,
						cards: [
							{ id: 1, name: 'Stydy Math' },
							{ id: 2, name: 'Study Philosophy' },
						],
					},
					{
						id: 2,
						name: 'Doing',
						projectId: 1,
						cards: [{ id: 3, name: 'Study JavaScript' }],
					},
				])
			)
		}

		dispatch(
			setKanbanCols(JSON.parse(localStorage.getItem('kanbanCols') as string))
		)
	})
}
