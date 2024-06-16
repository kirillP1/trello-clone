import { FunctionComponent } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

interface AddProjectButtonProps {}

const AddProjectButton: FunctionComponent<AddProjectButtonProps> = () => {
	return (
		<button className='flex justify-between p-4 w-full text-gray-400 items-center hover:text-black transition-all duration-200'>
			<h4 className=''>Project</h4>

			<FaPlusCircle />
		</button>
	)
}

export default AddProjectButton
