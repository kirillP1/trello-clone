import { FunctionComponent } from 'react'
import { FiPlus } from 'react-icons/fi'

interface AddKanbanColButtonProps {
	onClickHandler: (arg: boolean) => void
}

const AddKanbanColButton: FunctionComponent<AddKanbanColButtonProps> = ({
	onClickHandler,
}) => {
	return (
		<button
			onClick={() => onClickHandler(true)}
			className='bg-gray-200 text-black font-semibold w-full flex items-center py-3 px-3 rounded-md'
		>
			<FiPlus className='mr-1' />
			Add another column
		</button>
	)
}

export default AddKanbanColButton
