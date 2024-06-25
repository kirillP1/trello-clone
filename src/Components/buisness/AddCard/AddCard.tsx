import { FunctionComponent, memo, useState } from 'react'
import TaskAddButton from '../../UI/buttons/TaskAddButton/TaskAddButton'
import AddCardForm from '../AddCardForm/AddCardForm'

interface AddCardProps {
	kanbanColId: number
}

const AddCard: FunctionComponent<AddCardProps> = memo(({ kanbanColId }) => {
	const [show, setShow] = useState<boolean>(false)
	return (
		<div className='relative'>
			{show && (
				<AddCardForm show={show} setShow={setShow} kanbanColId={kanbanColId} />
			)}
			<TaskAddButton setShow={setShow} />
		</div>
	)
})

export default AddCard
