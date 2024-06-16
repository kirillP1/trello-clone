import { FunctionComponent } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setCreateProjectModal } from '../../../../redux/slices/modals.slice'
import { AppDispatch } from '../../../../redux/store'

interface AddProjectButtonProps {}

const AddProjectButton: FunctionComponent<AddProjectButtonProps> = () => {
	const dispatch = useDispatch<AppDispatch>()

	function clickHandler() {
		dispatch(setCreateProjectModal(true))
	}

	return (
		<button
			className='flex justify-between p-4 w-full text-gray-400 items-center hover:text-black transition-all duration-200'
			onClick={() => clickHandler()}
		>
			<h4 className=''>Project</h4>

			<FaPlusCircle />
		</button>
	)
}

export default AddProjectButton
