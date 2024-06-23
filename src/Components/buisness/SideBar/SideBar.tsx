import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import Boards from '../Boards/Boards'
import Projects from '../Projects/Projects'

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = () => {
	return (
		<aside className='bg-gray-100 h-full border-solid border-r-gray-200 border-r-2 w-72'>
			<Routes>
				<Route path='/' element={<Projects />} />
				<Route path='/project/:projectId' element={<Projects />} />
				<Route path='/board/:boardId' element={<Boards />} />
			</Routes>
		</aside>
	)
}

export default SideBar
