import { Route, Routes } from 'react-router-dom'
import CreateProjectModal from './Components/UI/modals/CreateProjectModal/CreateProjectModal'
import Project from './Components/buisness/Project/Project'
import Projects from './Components/buisness/Projects/Projects'
import SideBar from './Components/buisness/SideBar/SideBar'
import { useGetCards } from './hooks/useGetCards'
import { useGetKanbanCols } from './hooks/useGetKanbanCols'
import { useGetProjects } from './hooks/useGetProjects'

function App() {
	useGetProjects()
	useGetKanbanCols()
	useGetCards()

	return (
		<div className='App flex h-screen'>
			<SideBar />
			<Projects />
			<div className='flex-1'>
				<Routes>
					<Route path='/project/:id' element={<Project />} />
				</Routes>
			</div>

			<CreateProjectModal />
		</div>
	)
}

export default App
