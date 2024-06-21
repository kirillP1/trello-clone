import { Route, Routes } from 'react-router-dom'
import CardModal from './Components/UI/modals/CardModal/CardModal'
import CreateProjectModal from './Components/UI/modals/CreateProjectModal/CreateProjectModal'
import Project from './Components/buisness/Project/Project'
import Projects from './Components/buisness/Projects/Projects'
import SideBar from './Components/buisness/SideBar/SideBar'
import { useGetKanbanCols } from './hooks/useGetKanbanCols'
import { useGetProjects } from './hooks/useGetProjects'

function App() {
	useGetProjects()
	useGetKanbanCols()

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
			<CardModal />
		</div>
	)
}

export default App
