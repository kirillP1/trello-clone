import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { RootState } from '../../../redux/store'
import AddKanbanCol from '../AddKanbanCol/AddKanbanCol'
import KanbanCol from '../KanbanCol/KanbanCol'

interface KanbanBoardProps {}

const KanbanBoard: FunctionComponent<KanbanBoardProps> = () => {
	const { id } = useParams()

	const kanbanCols = useSelector(
		(state: RootState) => state.kanbanCols.kanbanCols
	).filter(kanbanCol => kanbanCol.projectId === Number(id))

	return (
		<div className='p-10 whitespace-nowrap overflow-x-auto relative flex-1'>
			<div className='absolute flex flex-nowrap pb-10'>
				{kanbanCols.map((kanbanCol: IKanbanCol) => (
					<KanbanCol key={kanbanCol.id} {...kanbanCol} />
				))}
				<AddKanbanCol />
			</div>
		</div>
	)
}

export default KanbanBoard
