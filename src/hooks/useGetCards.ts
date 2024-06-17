import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCards } from '../redux/slices/cards.slice'
import { AppDispatch } from '../redux/store'

export const useGetCards = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!localStorage.getItem('cards')) {
			localStorage.setItem(
				'cards',
				JSON.stringify([
					{ id: 1, name: 'Stydy Math', kanbanColId: 1 },
					{ id: 2, name: 'Study Philosophy', kanbanColId: 1 },
					{ id: 3, name: 'Study JavaScript', kanbanColId: 2 },
				])
			)
		}

		dispatch(setCards(JSON.parse(localStorage.getItem('cards') as string)))
	})
}
