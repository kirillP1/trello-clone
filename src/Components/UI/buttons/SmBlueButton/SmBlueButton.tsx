import { FunctionComponent } from 'react'
import { FiPlus } from 'react-icons/fi'

interface SmBlueButtonProps {
	children: string
}

const SmBlueButton: FunctionComponent<SmBlueButtonProps> = ({ children }) => {
	return (
		<button className='flex items-center border-blue-600 border-2 border-slid bg-blue-600 text-white rounded-lg py-1 px-2 hover:bg-white hover:text-blue-600 transition-all duration-200'>
			<FiPlus className='mr-1' />
			{children}
		</button>
	)
}

export default SmBlueButton
