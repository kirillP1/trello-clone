import { FunctionComponent } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IProject } from '../../../@types/IProject'
import { deleteProject } from '../../../redux/slices/projects.slice'
import { AppDispatch, RootState } from '../../../redux/store'

interface ProjectsNavProps {}

const ProjectsNav: FunctionComponent<ProjectsNavProps> = () => {
	const projects = useSelector((state: RootState) => state.projects.projects)
	const dispatch = useDispatch<AppDispatch>()

	console.log('projects', projects)
	const closeHandler = (e: React.MouseEvent<SVGElement>, projectId: number) => {
		e.stopPropagation()
		e.preventDefault()
		console.log(projectId)
		dispatch(deleteProject(projectId))
	}
	return (
		<nav>
			{projects.map((project: IProject) => (
				<NavLink
					to={`/project/${project.id}`}
					className='project-link flex justify-between'
					key={project.id}
				>
					<div className='inline-block'>
						<span></span> {project.name}
					</div>
					<IoMdClose
						className='text-2xl transition-all duration-200 text-gray-500 hover:cursor-pointer hover:text-black hover:scale-110'
						onClick={e => closeHandler(e, project.id)}
					/>
				</NavLink>
			))}
		</nav>
	)
}

export default ProjectsNav
