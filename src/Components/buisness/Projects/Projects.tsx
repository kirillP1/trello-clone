import { FunctionComponent } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { IProject } from '../../../@types/IProject'
import { deleteProject } from '../../../redux/slices/projects.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import AddProjectButton from '../../UI/buttons/AddProjectButton/AddProjectButton'

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
	const { projectId } = useParams()

	const navigate = useNavigate()

	const projects = useSelector((state: RootState) => state.projects.projects)

	const dispatch = useDispatch<AppDispatch>()

	const closeHandler = (
		e: React.MouseEvent<SVGElement>,
		deleteProjectId: number
	) => {
		e.stopPropagation()
		e.preventDefault()
		dispatch(deleteProject(deleteProjectId))

		if (Number(projectId) === deleteProjectId) {
			navigate('/')
		}
	}

	return (
		<div>
			<nav>
				<AddProjectButton />
				<ul>
					{projects.map((project: IProject) => (
						<NavLink
							key={project.id}
							to={`/project/${project.id}`}
							className='sidebar-link flex justify-between'
						>
							<div className='inline-block'>
								<AiFillProject className='mr-2 -mt-1 inline-block' />
								<span>{project.name}</span>
							</div>

							<IoMdClose
								className='text-2xl transition-all duration-200 text-gray-500 hover:cursor-pointer hover:text-black hover:scale-110'
								onClick={e => closeHandler(e, project.id)}
							/>
						</NavLink>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Projects
