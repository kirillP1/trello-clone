import { FunctionComponent, memo } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

interface ProjectHeaderProps {
	projectId: number
}

const ProjectHeader: FunctionComponent<ProjectHeaderProps> = memo(
	({ projectId }) => {
		console.log('Project header')

		const currentProject = useSelector((state: RootState) =>
			state.projects.projects.find(project => project.id === projectId)
		)

		return (
			<header className='py-10 border-solid border-gray-200 border-b-2 z-10 relative'>
				<div className='flex w-full justify-between items-center z-10 relative'>
					<h1 className='text-4xl font-bold text-gray-700'>
						<AiFillProject className='mr-2 -mt-1 inline-block' />
						{currentProject && currentProject.name}
					</h1>

					<div></div>
				</div>
			</header>
		)
	}
)

export default ProjectHeader
