import { ICard } from '../../../@types/ICard'

export function cardDragOverHandler(
	e: React.DragEvent<HTMLDivElement>,
	currentCard: ICard | null
) {
	e.preventDefault()
	const target = e.target as HTMLDivElement

	if (target.dataset && target.dataset.name === 'card' && currentCard) {
		target.classList.add('shadow-gray-400')
	}
}
