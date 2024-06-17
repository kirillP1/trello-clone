import { FunctionComponent, useState } from 'react'
import AddKanbanColButton from '../../UI/buttons/AddKanbanColButton/AddKanbanColButton'
import AddKanbanColForm from '../AddKanbanColForm/AddKanbanColForm'

interface AddKanbanColProps {}

const AddKanbanCol: FunctionComponent<AddKanbanColProps> = () => {
	const [showForm, setShowForm] = useState<boolean>(false)

	return (
		<div className=' mr-5 w-72 whitespace-normal relative'>
			{showForm && (
				<AddKanbanColForm setShowForm={setShowForm} showForm={showForm} />
			)}
			<AddKanbanColButton onClickHandler={setShowForm} />
		</div>
	)
}

export default AddKanbanCol
