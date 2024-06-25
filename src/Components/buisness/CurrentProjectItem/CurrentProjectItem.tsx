import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IProject } from '../../../@types/IProject'
import { RootState } from '../../../redux/store'
import HeaderLinkToProject from '../../UI/links/HeaderLinkToProject/HeaderLinkToProject'

interface CurrentProjectItemProps {}

const CurrentProjectItem: FunctionComponent<CurrentProjectItemProps> = () => {
	const { projectId } = useParams()
	const memoProjectId = useMemo(() => projectId, [projectId])

	const [currentProject, setCurrentProject] = useState<IProject | null>(null)

	const projects = useSelector((state: RootState) => state.projects.projects)

	useEffect(() => {
		if (memoProjectId)
			setCurrentProject(
				projects.find(
					project => project.id === Number(memoProjectId)
				) as IProject
			)
	}, [projects, memoProjectId])

	return (
		<div>
			<HeaderLinkToProject
				currentProject={currentProject}
				projectId={Number(memoProjectId)}
			/>
		</div>
	)
}

export default CurrentProjectItem
