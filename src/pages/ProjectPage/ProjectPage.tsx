import { FunctionComponent, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProjectPageTitle from '../../Components/UI/titles/ProjectPageTitle/ProjectPageTitle'
import BoardsOnProjectPage from '../../Components/buisness/BoardsOnProjectPage/BoardsOnProjectPage'
import ProjectHeader from '../../Components/buisness/ProjectHeader/ProjectHeader'
import { RootState } from '../../redux/store'

interface ProjectPageProps {}

const ProjectPage: FunctionComponent<ProjectPageProps> = memo(() => {
	const { projectId } = useParams()
	const projectsBoards = useSelector((state: RootState) =>
		state.boards.boards.filter(board => board.projectId === Number(projectId))
	)

	const memoProjectId = useMemo(() => projectId, [projectId])
	const memoProjectsBoards = useMemo(() => projectsBoards, [projectsBoards])

	return (
		<div className='py-5 px-10 pb-48 pt-0'>
			<ProjectHeader projectId={Number(memoProjectId)} />
			<ProjectPageTitle />
			<BoardsOnProjectPage projectsBoards={memoProjectsBoards} />
		</div>
	)
})

export default ProjectPage
