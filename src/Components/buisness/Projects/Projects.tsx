import { FunctionComponent, memo, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { IProject } from '../../../@types/IProject'
import { deleteProject } from '../../../redux/slices/projects.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import AddProjectButton from '../../UI/buttons/AddProjectButton/AddProjectButton'
import SidebarProjectLink from '../../UI/links/SidebarProjectLink/SidebarProjectLink'

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = memo(() => {
	const { projectId } = useParams()
	const memoProjectId = useMemo(() => projectId, [projectId])

	const navigate = useNavigate()

	const projects = useSelector((state: RootState) => state.projects.projects)

	const dispatch = useDispatch<AppDispatch>()

	const closeHandler = useCallback(
		() => (e: React.MouseEvent<SVGElement>, deleteProjectId: number) => {
			e.stopPropagation()
			e.preventDefault()
			dispatch(deleteProject(deleteProjectId))

			if (Number(memoProjectId) === deleteProjectId) {
				navigate('/')
			}
		},
		[memoProjectId]
	)

	return (
		<div>
			<nav>
				<AddProjectButton />
				<ul>
					{projects.map((project: IProject) => (
						<SidebarProjectLink
							key={project.id}
							projectId={project.id}
							projectName={project.name}
							closeHandler={closeHandler}
						/>
					))}
				</ul>
			</nav>
		</div>
	)
})

export default Projects
