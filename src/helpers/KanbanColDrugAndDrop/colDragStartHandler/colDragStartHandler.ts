import { IKanbanCol } from '../../../@types/IKanbanCol'

export function colDragStartHandler(
	e: React.DragEvent<HTMLDivElement>,
	col: IKanbanCol,
	setCurrentCol: (col: IKanbanCol) => void
) {
	setCurrentCol(col)
}
