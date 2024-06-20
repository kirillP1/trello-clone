import { RefObject } from 'react'
import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'

export function colDragEndHandler(
	e: React.DragEvent<HTMLDivElement>,
	colRef: RefObject<HTMLElement>,
	setCurrentCol: (col: IKanbanCol | null) => void,
	setCurrentCard: (card: ICard | null) => void
) {
	const target = e.target as HTMLDivElement
	target.classList.remove('shadow-gray-400')
	target.classList.remove('shadow-md')

	colRef.current!.classList.remove('shadow-md')
	colRef.current!.classList.remove('shadow-gray-400')

	setCurrentCol(null)
	setCurrentCard(null)
}
