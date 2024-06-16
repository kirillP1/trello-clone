import { FunctionComponent } from 'react'

interface CanbanTaskProps {}

const CanbanTask: FunctionComponent<CanbanTaskProps> = () => {
	return (
		<div className='task p-4 font-semibold border-solid border-gray-200 border rounded-md mb-2 shadow-md shadow-gray-200'>
			<span className='text-xs font-bold bg-green-100 text-green-900 py-0.5 px-2 rounded-md mb-2 inline-block'>
				Low
			</span>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
				doloremque!
			</p>
		</div>
	)
}

export default CanbanTask
