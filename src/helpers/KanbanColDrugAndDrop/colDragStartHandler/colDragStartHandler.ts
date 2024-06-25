import { RefObject } from 'react'
import { IKanbanCol } from '../../../@types/IKanbanCol'

export function colDragStartHandler(
	e: React.DragEvent<HTMLDivElement>,
	col: IKanbanCol,
	setCurrentCol: (col: IKanbanCol) => void,
	//currentCard: ICard | null,
	colRef: RefObject<HTMLDivElement>
) {
	const target = e.target as HTMLDivElement

	if (target.dataset.name !== 'card') {
		colRef.current?.classList.add('opacity-30')
	}

	setCurrentCol(col)
}
