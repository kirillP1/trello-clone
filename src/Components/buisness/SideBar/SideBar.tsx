import { FunctionComponent, memo } from 'react'
import { useSelector } from 'react-redux'
import SidebarRoutes from '../../../Routes/SidebarRoutes/SidebarRoutes'
import { RootState } from '../../../redux/store'

interface SideBarProps {}

const SideBar: FunctionComponent<SideBarProps> = memo(() => {
	const mobileMenuActive = useSelector(
		(state: RootState) => state.mobile.mobileMenuActive
	)

	return (
		<aside
			className={`bg-gray-100 h-full transition-all duration-200 border-solid border-r-gray-200 border-r-2 lg:w-72 w-full md:relative absolute inset-0 z-20 sm:translate-x-0 -translate-x-full ${
				mobileMenuActive && 'translate-x-0'
			}`}
		>
			<SidebarRoutes />
		</aside>
	)
})

export default SideBar
