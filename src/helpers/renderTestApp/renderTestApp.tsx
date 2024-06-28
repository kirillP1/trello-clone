import { RenderResult, render } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { createReduxStore } from '../../redux/store'

export const renderTestApp = (
	component: ReactNode,
	options = { initialState: {}, route: '/' }
): RenderResult => {
	const store = createReduxStore(options?.initialState)

	return render(
		<Provider store={store}>
			<MemoryRouter initialEntries={[options?.route]}>{component}</MemoryRouter>
		</Provider>
	)
}
