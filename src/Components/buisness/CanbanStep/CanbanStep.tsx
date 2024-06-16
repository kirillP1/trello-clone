import { FunctionComponent } from 'react'

interface CanbanStepProps {
	name: string
}

const CanbanStep: FunctionComponent<CanbanStepProps> = ({ name }) => {
	return (
		<div className='mb-4 rounded-md bg-blue-100 inline-block py-0.5 px-2 font-semibold'>
			{name} <span className='text-gray-500 ml-1'>2</span>
		</div>
	)
}

export default CanbanStep
