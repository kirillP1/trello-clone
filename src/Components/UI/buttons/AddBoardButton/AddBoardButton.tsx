import { FunctionComponent } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setCreateBoardModal } from '../../../../redux/slices/modals.slice'
import { AppDispatch } from '../../../../redux/store'

interface AddBoardButtonProps {}

const AddBoardButton: FunctionComponent<AddBoardButtonProps> = () => {
	const dispatch = useDispatch<AppDispatch>()

	function clickHandler() {
		dispatch(setCreateBoardModal(true))
	}

	return (
		<button
			className='flex justify-between p-4 w-full text-gray-400 items-center hover:text-black transition-all duration-200'
			onClick={() => clickHandler()}
		>
			<h4 className=''>Board</h4>

			<FaPlusCircle />
		</button>
	)
}

export default AddBoardButton
