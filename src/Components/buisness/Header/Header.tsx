import { FunctionComponent, memo } from 'react'
import HeaderRoutes from '../../../Routes/HeaderRoutes/HeaderRoutes'
import MobileMenuButton from '../../UI/buttons/MobileMenuButton/MobileMenuButton'
import LinkToHome from '../../UI/links/LinkToHome/LinkToHome'

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = memo(() => {
	return (
		<div className='header px-5 py-3 border-2 border-b-gray-200 flex justify-between align-middle z-10 relative bg-white'>
			<div className='flex items-center '>
				<MobileMenuButton />
				<LinkToHome />
			</div>

			<HeaderRoutes />
		</div>
	)
})

export default Header
