import { FunctionComponent, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

interface SidebarRoutesProps {}

const Projects = lazy(
	() => import('../../Components/buisness/Projects/Projects')
)
const Boards = lazy(() => import('../../Components/buisness/Boards/Boards'))

const SidebarRoutes: FunctionComponent<SidebarRoutesProps> = () => {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Projects />} />
				<Route path='/project/:projectId' element={<Projects />} />
				<Route path='/board/:boardId' element={<Boards />} />
			</Routes>
		</Suspense>
	)
}

export default SidebarRoutes
