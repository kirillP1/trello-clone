import { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateProjectModal } from '../../../../redux/slices/modals.slice'
import { AppDispatch, RootState } from '../../../../redux/store'
import CreateProjectForm from '../../../buisness/CreateProjectForm/CreateProjectForm'

interface CreateProjectModalProps {}

const CreateProjectModal: FunctionComponent<CreateProjectModalProps> = () => {
	const dispatch = useDispatch<AppDispatch>()
	const createProjectModal = useSelector(
		(state: RootState) => state.modals.createProjectModal
	)

	const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	return (
		createProjectModal &&
		createPortal(
			<div
				className='bg-black/70 fixed inset-0 flex justify-center items-center z-50'
				onClick={() => dispatch(setCreateProjectModal(false))}
			>
				<div
					className='bg-white w-1/2 h-auto rounded-md shadow-md shadow-black/30 relative flex justify-center items-center py-20'
					onClick={handleModalClick}
				>
					<CreateProjectForm />
					<IoMdClose
						className='absolute top-5 right-5 text-2xl transition-all duration-200 hover:cursor-pointer hover:text-gray-400 hover:scale-110'
						onClick={() => dispatch(setCreateProjectModal(false))}
					/>
				</div>
			</div>,
			document.getElementById('createProjectModal') as HTMLDivElement
		)
	)
}

export default CreateProjectModal
