import { FunctionComponent } from 'react'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import TaskAddButton from '../../UI/buttons/TaskAddButton/TaskAddButton'
import CanbanStep from '../CanbanStep/CanbanStep'
import CanbanTask from '../CanbanTask/CanbanTask'

const KanbanCol: FunctionComponent<IKanbanCol> = ({ name }) => {
	return (
		<div className=' mr-5 w-72 whitespace-normal'>
			<CanbanStep name={name} />
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
