import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { addBoard } from '../../../redux/slices/boards.slice'
import BoardImages from '../BoardsImages/BoardsImages'

interface CreateBoardFormInProjectProps {
	setShow: (arg: boolean) => void
}

const CreateBoardFormInProject: FunctionComponent<
	CreateBoardFormInProjectProps
> = ({ setShow }) => {
	const dispatch = useDispatch()
	const { projectId } = useParams()

	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		reset,
	} = useForm<IBoard>()

	const onSubmit: SubmitHandler<IBoard> = data => {
		dispatch(addBoard({ ...data, projectId: Number(projectId) }))
		reset()
		setShow(false)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<BoardImages register={register} setValue={setValue} />
			<input
				type='text'
				{...register('name', { required: 'Name is required' })}
				className='bg-gray-100 px-4 py-2 block w-full rounded-sm mb-2'
				placeholder='Enter board name...'
			/>
			{errors.name && <span>{errors.name.message}</span>}
			<button
				type='submit'
				className='block w-full border-blue-600 border-2 border-slid bg-blue-600 text-white rounded-md py-1 px-2 hover:bg-white hover:text-blue-600 transition-all duration-200'
			>
				Create board
			</button>
		</form>
	)
}

export default CreateBoardFormInProject
