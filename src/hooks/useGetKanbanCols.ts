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
							{
								id: 1,
								name: 'Stydy Math',
								kanbanColId: 1,
								desc: 'Lorem indsad gasga agsa gasgas gasga',
							},
							{ id: 2, name: 'Study Philosophy', kanbanColId: 1, desc: '' },
						],
					},
					{
						id: 2,
						name: 'Doing',
						projectId: 1,
						cards: [
							{
								id: 3,
								name: 'Study JavaScript',
								kanbanColId: 2,
								desc: 'dsadasdasdasdasd dasda',
							},
						],
					},
				])
			)
		}

		dispatch(
			setKanbanCols(JSON.parse(localStorage.getItem('kanbanCols') as string))
		)
	})
}
