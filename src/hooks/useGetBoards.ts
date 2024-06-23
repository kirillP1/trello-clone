import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBoards } from '../redux/slices/boards.slice'
import { AppDispatch } from '../redux/store'

export const useGetBoards = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!localStorage.getItem('boards')) {
			localStorage.setItem(
				'boards',
				JSON.stringify([
					{ id: 1, name: 'Study board', projectId: 1, imageId: 'mUxRPeq-jcg' },
					{
						id: 2,
						name: 'Programming board',
						projectId: 1,
						imageId: '33FUP-OHSb0',
					},
				])
			)
		}

		dispatch(setBoards(JSON.parse(localStorage.getItem('boards') as string)))
	})
}
