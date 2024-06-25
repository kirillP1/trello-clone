import { FunctionComponent } from 'react'
import { MdDeleteOutline, MdOutlineDescription } from 'react-icons/md'
import CardModalBodyForm from '../CardModalBodyForm/CardModalBodyForm'

interface CardModalBodyProps {
	deleteCardHandler: () => void
}

const CardModalBody: FunctionComponent<CardModalBodyProps> = ({
	deleteCardHandler,
}) => {
	return (
		<div className='block sm:flex'>
			<div className='w-full sm:w-9/12 flex sm:pr-4'>
				<MdOutlineDescription className='mt-1.5 mr-1 sm:mr-3 text-gray-700 sm:block hidden' />

				<CardModalBodyForm />
			</div>
			<div className='w-full sm:w-3/12 '>
				<h5 className='text-sm font-bold text-gray-700 leading-7 mb-2'>
					Actions
				</h5>
				{/*<button className='w-full bg-gray-200 text-gray-700 px-3 py-1.5 mb-2 transition-all duration-200 rounded-md text-left font-semibold flex items-center hover:bg-gray-300'>
					<MdContentCopy className='mr-2' />
					Copy
				</button>*/}
				<button
					className='w-full bg-gray-200 text-gray-700 px-3 py-1.5 transition-all duration-200 rounded-md text-left font-semibold flex items-center hover:bg-gray-300'
					onClick={() => deleteCardHandler()}
				>
					<MdDeleteOutline className='mr-2' />
					Delete
				</button>
			</div>
		</div>
	)
}

export default CardModalBody
