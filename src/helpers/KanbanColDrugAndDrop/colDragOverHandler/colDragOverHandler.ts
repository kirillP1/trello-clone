import { RefObject } from 'react'
import { ICard } from '../../../@types/ICard'

export function colDragOverHandler(
	e: React.DragEvent<HTMLDivElement>,
	currentCard: ICard | null,
	colRef: RefObject<HTMLElement>
) {
	e.preventDefault()
	const target = e.target as HTMLDivElement

	if (target.dataset && target.dataset.name === 'col' && currentCard) {
		// dropCardToEmptyColStyleAdd
		target.classList.add('shadow-gray-400')
	} else if (!currentCard) {
		// dropColToColStyleAdd
		colRef.current!.classList.add('shadow-md')
		colRef.current!.classList.add('shadow-gray-400')
	}
}
