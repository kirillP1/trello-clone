import { Route, Routes } from 'react-router-dom'
import Project from './Components/buisness/Project/Project'
import Projects from './Components/buisness/Projects/Projects'
import SideBar from './Components/buisness/SideBar/SideBar'

function App() {
	return (
		<div className='App flex h-screen'>
			<SideBar />
			<Projects />
			<div className='flex-1'>
				<Routes>
					<Route path='/project/:id' element={<Project />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
