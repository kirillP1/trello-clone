import '@testing-library/jest-dom'
import SidebarProjectLink from '../../../Components/UI/links/SidebarProjectLink/SidebarProjectLink'
import { renderTestApp } from '../../../helpers/renderTestApp/renderTestApp'

test('demo', () => {
	expect(true).toBe(true)
})

describe('SidebarProjectLink Component', () => {
	test('should render SidebarProjectLink', () => {
		const closeHandler = jest.fn()

		const { getByTestId } = renderTestApp(
			<SidebarProjectLink
				projectId={1}
				projectName='First project'
				closeHandler={closeHandler}
			/>,
			{
				initialState: { projects: { projects: [{ id: 1 }, { id: 2 }] } },
				route: '/',
			}
		)

		expect(getByTestId('sidebar-project-link')).toBeInTheDocument()
	})
})
