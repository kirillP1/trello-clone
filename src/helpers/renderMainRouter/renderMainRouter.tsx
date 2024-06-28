import { RenderResult, render } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import MainRoutes from '../../Routes/MainRoutes/MainRoutes'
import { createReduxStore } from '../../redux/store'

export const renderMainRouter = (
	component: ReactNode,
	route = '/'
): RenderResult => {
	const store = createReduxStore({})

	return render(
		<Provider store={store}>
			<MemoryRouter initialEntries={[route]}>
				<MainRoutes />
				{component}
			</MemoryRouter>
		</Provider>
	)
}
