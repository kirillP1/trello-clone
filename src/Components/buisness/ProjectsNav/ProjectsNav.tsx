import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

interface ProjectsNavProps {}

const ProjectsNav: FunctionComponent<ProjectsNavProps> = () => {
	return (
		<nav>
			<NavLink to='/project/1' className='project-link'>
				<span></span> Study projects
			</NavLink>
			<NavLink to='/project/2' className='project-link'>
				<span></span> Programming projects
			</NavLink>
		</nav>
	)
}

export default ProjectsNav
