import { FunctionComponent } from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink, Route, Routes } from 'react-router-dom'
import CurrentProjectItem from '../CurrentProjectItem/CurrentProjectItem'
import CurrentProjectItemInBoard from '../CurrentProjectItemInBoard/CurrentProjectItemInBoard'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	return (
		<div className='header px-5 py-3 border-2 border-b-gray-200 flex justify-between align-middle z-10 relative bg-white'>
			<NavLink to='/' className='flex align-middle'>
				<FaHome className='text-gray-400 text-2xl hover:text-black cursor-pointer transition-all duration-100 block m-auto my-1' />
			</NavLink>
			<Routes>
				<Route path='/project/:projectId' element={<CurrentProjectItem />} />
				<Route path='/board/:boardId' element={<CurrentProjectItemInBoard />} />
			</Routes>
		</div>
	)
}

export default Header
