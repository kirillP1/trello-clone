import { FunctionComponent, useEffect, useState } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { IProject } from '../../../@types/IProject'
import { RootState } from '../../../redux/store'

interface CurrentProjectItemProps {}

const CurrentProjectItem: FunctionComponent<CurrentProjectItemProps> = () => {
	const params = useParams()

	const [currentProject, setCurrentProject] = useState<IProject | null>(null)

	const projects = useSelector((state: RootState) => state.projects.projects)

	useEffect(() => {
		if (params.projectId)
			setCurrentProject(
				projects.find(
					project => project.id === Number(params.projectId)
				) as IProject
			)
	}, [projects, params.projectId])

	return (
		<div>
			<div>
				{currentProject && (
					<NavLink
						to={`/project/${params.projectId}`}
						className='text-xl font-bold text-gray-700'
					>
						<AiFillProject className='mr-2 -mt-1 inline-block' />
						{currentProject?.name}
					</NavLink>
				)}
			</div>
		</div>
	)
}

export default CurrentProjectItem
