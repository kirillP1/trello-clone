import { FunctionComponent } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { RootState } from '../../../redux/store'
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
				<div className=' mr-5 w-72 whitespace-normal'>
					<button className='bg-gray-200 text-black font-semibold w-full flex items-center py-3 px-3 rounded-md'>
						<FiPlus className='mr-1' />
						Add another column
					</button>
				</div>
			</div>
		</div>
	)
}

export default KanbanBoard
