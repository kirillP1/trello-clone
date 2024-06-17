import { FunctionComponent } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { deleteKanbanCol } from '../../../redux/slices/kanbanCols.slice'
import TaskAddButton from '../../UI/buttons/TaskAddButton/TaskAddButton'
import CanbanStep from '../CanbanStep/CanbanStep'
import CanbanTask from '../CanbanTask/CanbanTask'

const KanbanCol: FunctionComponent<IKanbanCol> = ({ id, name }) => {
	const dispatch = useDispatch()

	return (
		<div className=' mr-5 w-72 whitespace-normal'>
			<div className='flex justify-between'>
				<CanbanStep name={name} />
				<IoMdClose
					onClick={() => dispatch(deleteKanbanCol(Number(id)))}
					className='text-gray-600 text-2xl transition-all duration-200 hover:cursor-pointer hover:text-black hover:scale-110'
				/>
			</div>
			<div className='tasksList'>
				<CanbanTask />
				<CanbanTask />
				<CanbanTask />
				<CanbanTask />
			</div>
			<TaskAddButton />
		</div>
	)
}

export default KanbanCol
