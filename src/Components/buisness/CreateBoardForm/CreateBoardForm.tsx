import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { addBoard } from '../../../redux/slices/boards.slice'
import { setCreateBoardModal } from '../../../redux/slices/modals.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import BoardImages from '../BoardsImages/BoardsImages'

interface CreateBoardFormProps {}

const CreateBoardForm: FunctionComponent<CreateBoardFormProps> = () => {
	const location = useLocation()
	const pathnameAr = location.pathname.split('/')
	const boardId = location.pathname.split('/')[pathnameAr.length - 1]

	const currentBoard = useSelector((state: RootState) =>
		state.boards.boards.find(board => board.id === Number(boardId))
	)

	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		reset,
	} = useForm<IBoard>()

	const dispatch = useDispatch<AppDispatch>()

	const onSubmit: SubmitHandler<IBoard> = data => {
		console.log('currentBoard', currentBoard)
		dispatch(addBoard({ ...data, projectId: currentBoard!.projectId }))
		reset()
		dispatch(setCreateBoardModal(false))
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
			<BoardImages register={register} setValue={setValue} />
			<input
				type='text'
				placeholder='Enter board name...'
				{...register('name')}
				className='bg-gray-100 px-4 py-2 block w-full rounded-sm mb-4'
			/>
			{errors.name && <span>There are errors</span>}
			<button
				type='submit'
				className='border-blue-600 border-2 w-full text-semibold border-slid bg-blue-600 text-white rounded-sm py-1 px-2 hover:bg-white hover:text-blue-600 transition-all duration-200'
			>
				Create board
			</button>
		</form>
	)
}

export default CreateBoardForm
