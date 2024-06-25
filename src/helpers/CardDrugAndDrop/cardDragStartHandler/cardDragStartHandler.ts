import { RefObject } from 'react'
import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'

export function cardDragStartHandler(
	//e: React.DragEvent<HTMLDivElement>,
	card: ICard,
	col: IKanbanCol,
	setCurrentCard: (col: ICard | null) => void,
	setCurrentCol: (col: IKanbanCol | null) => void,
	cardRef: RefObject<HTMLDivElement>
) {
	setCurrentCard(card)
	setCurrentCol(col)

	cardRef.current?.classList.add('opacity-30')
}
