import { FunctionComponent } from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
	return (
		<aside className='w-12 bg-gray-100 flex flex-col justify-between items-center '>
			<div className='p-4'>
				<FaPlus className='text-gray-600' />
			</div>
			<div className='border-solid border-gray-200 border-t-2 p-4'>
				<IoIosSettings className='text-2xl text-gray-600' />
			</div>
		</aside>
	)
}

export default SideBar
