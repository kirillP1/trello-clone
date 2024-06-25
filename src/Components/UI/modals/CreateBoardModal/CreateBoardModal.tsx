import { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateBoardModal } from '../../../../redux/slices/modals.slice'
import { AppDispatch, RootState } from '../../../../redux/store'
import CreateBoardForm from '../../../buisness/CreateBoardForm/CreateBoardForm'

interface CreateBoardModalProps {}

const CreateBoardModal: FunctionComponent<CreateBoardModalProps> = () => {
	const dispatch = useDispatch<AppDispatch>()
	const createBoardModal = useSelector(
		(state: RootState) => state.modals.createBoardModal
	)

	const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	return (
		createBoardModal &&
		createPortal(
			<div
				className='bg-black/70 fixed inset-0 flex justify-center items-center z-50'
				onClick={() => dispatch(setCreateBoardModal(false))}
			>
				<div
					className='bg-white w-3/4 sm:w-2/3 xl:w-1/2 h-auto rounded-md shadow-md shadow-black/30 relative flex justify-center items-center py-20'
					onClick={handleModalClick}
				>
					<CreateBoardForm />
					<IoMdClose
						className='absolute top-5 right-5 text-2xl transition-all duration-200 hover:cursor-pointer hover:text-gray-400 hover:scale-110'
						onClick={() => dispatch(setCreateBoardModal(false))}
					/>
				</div>
			</div>,
			document.getElementById('createBoardModal') as HTMLDivElement
		)
	)
}

export default CreateBoardModal
