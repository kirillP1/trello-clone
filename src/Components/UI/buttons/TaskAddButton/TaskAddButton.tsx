import { FunctionComponent } from 'react'
import { FiPlus } from 'react-icons/fi'

interface TaskAddButtonProps {
	setShow: (arg: boolean) => void
}

const TaskAddButton: FunctionComponent<TaskAddButtonProps> = ({ setShow }) => {
	return (
		<button
			onClick={() => setShow(true)}
			className='rounded-lg py-1 px-2  bg-gray-100 font-semibold text-gray-600 flex items-center w-full'
		>
			<FiPlus className='mr-1' />
			New card
		</button>
	)
}

export default TaskAddButton
