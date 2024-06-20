import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'

export function cardDragEndHandler(
	e: React.DragEvent<HTMLDivElement>,
	setCurrentCard: (col: ICard | null) => void,
	setCurrentCol: (col: IKanbanCol | null) => void
) {
	const target = e.target as HTMLDivElement
	target.classList.remove('shadow-gray-400')

	setCurrentCol(null)
	setCurrentCard(null)
}
