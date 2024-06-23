import { Route, Routes } from 'react-router-dom'
import CardModal from './Components/UI/modals/CardModal/CardModal'
import CreateBoardModal from './Components/UI/modals/CreateBoardModal/CreateBoardModal'
import CreateProjectModal from './Components/UI/modals/CreateProjectModal/CreateProjectModal'
import Board from './Components/buisness/Board/Board'
import Header from './Components/buisness/Header/Header'
import SideBar from './Components/buisness/SideBar/SideBar'
import { useGetBoards } from './hooks/useGetBoards'
import { useGetKanbanCols } from './hooks/useGetKanbanCols'
import { useGetProjects } from './hooks/useGetProjects'
import Home from './pages/Home/Home'
import ProjectPage from './pages/ProjectPage/ProjectPage'

function App() {
	useGetBoards()
	useGetKanbanCols()
	useGetProjects()

	return (
		<>
			<div className='App flex flex-col h-screen'>
				<Header />
				<div className='flex-1 flex'>
					<SideBar />
					<div className='flex-1'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/project/:projectId' element={<ProjectPage />} />
							<Route path='/board/:boardId' element={<Board />} />
						</Routes>
					</div>
				</div>
			</div>
			<CreateBoardModal />
			<CardModal />
			<CreateProjectModal />
		</>
	)
}

export default App
