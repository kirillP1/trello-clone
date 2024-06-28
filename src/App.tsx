import CardModal from './Components/UI/modals/CardModal/CardModal'
import CreateBoardModal from './Components/UI/modals/CreateBoardModal/CreateBoardModal'
import CreateProjectModal from './Components/UI/modals/CreateProjectModal/CreateProjectModal'
import Header from './Components/buisness/Header/Header'
import SideBar from './Components/buisness/SideBar/SideBar'
import MainRoutes from './Routes/MainRoutes/MainRoutes'
import { useGetBoards } from './hooks/useGetBoards'
import { useGetKanbanCols } from './hooks/useGetKanbanCols'
import { useGetProjects } from './hooks/useGetProjects'
import { useMobile } from './hooks/useMobile'

function App() {
	useGetBoards()
	useGetKanbanCols()
	useGetProjects()
	useMobile()

	return (
		<>
			<div className='App flex flex-col h-screen' data-testid='App'>
				<Header />
				<div className='flex-1 flex relative'>
					<SideBar />
					<div className='flex-1'>
						<MainRoutes />
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
