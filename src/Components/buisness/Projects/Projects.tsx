import { FunctionComponent } from 'react'
import AddProjectButton from '../../UI/buttons/AddProjectButton/AddProjectButton'
import ProjectsNav from '../ProjectsNav/ProjectsNav'

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
	return (
		<div className='bg-gray-100 h-full border-solid border-gray-200 border-2 w-72'>
			<AddProjectButton />
			<ProjectsNav />
		</div>
	)
}

export default Projects
