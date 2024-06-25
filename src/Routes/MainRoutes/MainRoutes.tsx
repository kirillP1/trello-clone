import { FunctionComponent, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

interface MainRoutesProps {}

const Home = lazy(() => import('../../pages/Home/Home'))
const ProjectPage = lazy(() => import('../../pages/ProjectPage/ProjectPage'))
const Board = lazy(() => import('../../Components/buisness/Board/Board'))

const MainRoutes: FunctionComponent<MainRoutesProps> = () => {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project/:projectId' element={<ProjectPage />} />
				<Route path='/board/:boardId' element={<Board />} />
			</Routes>
		</Suspense>
	)
}

export default MainRoutes
