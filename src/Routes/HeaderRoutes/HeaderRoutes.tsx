import { FunctionComponent, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

interface HeaderRoutesProps {}

const CurrentProjectItem = lazy(
	() =>
		import('../../Components/buisness/CurrentProjectItem/CurrentProjectItem')
)
const CurrentProjectItemInBoard = lazy(
	() =>
		import(
			'../../Components/buisness/CurrentProjectItemInBoard/CurrentProjectItemInBoard'
		)
)

const HeaderRoutes: FunctionComponent<HeaderRoutesProps> = () => {
	return (
		<Suspense>
			<Routes>
				<Route path='/project/:projectId' element={<CurrentProjectItem />} />
				<Route path='/board/:boardId' element={<CurrentProjectItemInBoard />} />
			</Routes>
		</Suspense>
	)
}

export default HeaderRoutes
