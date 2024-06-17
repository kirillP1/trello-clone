import { FunctionComponent, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { useBeyondClick } from '../../../hooks/useBeyondClick'
import { addKanbanCol } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch } from '../../../redux/store'
import SmBlueButton from '../../UI/buttons/SmBlueButton/SmBlueButton'

interface AddKanbanColFormProps {
	setShowForm: (arg: boolean) => void
	showForm: boolean
}

const AddKanbanColForm: FunctionComponent<AddKanbanColFormProps> = ({
	showForm,
	setShowForm,
}) => {
	const formRef = useRef<HTMLFormElement>(null)

	const { id } = useParams()
	const dispatch = useDispatch<AppDispatch>()

	useBeyondClick(showForm, setShowForm, formRef)

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<IKanbanCol>()

	const onSubmit: SubmitHandler<IKanbanCol> = data => {
		setShowForm(false)
		reset()
		dispatch(addKanbanCol({ ...data, projectId: Number(id) }))
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='bg-gray-300 p-3 rounded-md absolute w-full'
			ref={formRef}
		>
			<input
				type='text'
				placeholder='Enter column name...'
				className='bg-gray-100 w-full rounded-sm px-2 py-1'
				{...register('name')}
			/>
			{errors.name && <span>There are errors</span>}
			<div className='flex justify-between items-center mt-2'>
				<SmBlueButton>Add column</SmBlueButton>
				<IoMdClose
					onClick={() => setShowForm(false)}
					className='text-2xl text-gray-500 transition-all duration-200 hover:text-black hover:scale-110 hover:cursor-pointer'
				/>
			</div>
		</form>
	)
}

export default AddKanbanColForm
