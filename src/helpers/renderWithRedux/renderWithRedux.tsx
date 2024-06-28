import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'

export const renderWithRedux = (component: ReactNode, initialState = {}) => {
	const store = createReduxStore(initialState)

	return render(<Provider store={store}>{component}</Provider>)
}
