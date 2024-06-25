import { FunctionComponent, memo } from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

interface LinkToHomeProps {}

const LinkToHome: FunctionComponent<LinkToHomeProps> = memo(() => {
	return (
		<NavLink to='/' className='flex align-middle'>
			<FaHome className='text-gray-400 text-2xl hover:text-black cursor-pointer transition-all duration-100 block m-auto my-1' />
		</NavLink>
	)
})

export default LinkToHome
