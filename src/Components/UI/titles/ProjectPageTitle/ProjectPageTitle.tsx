import { FunctionComponent, memo } from 'react'
import { FaRegUser } from 'react-icons/fa'

interface ProjectPageTitleProps {}

const ProjectPageTitle: FunctionComponent<ProjectPageTitleProps> = memo(() => {
	return (
		<div className='flex align-middle pt-4 pb-4'>
			<FaRegUser className='mr-3 mt-2 text-xl' />
			<h2 className='font-semibold text-gray-700 text-2xl'>Your boards</h2>
		</div>
	)
})

export default ProjectPageTitle
