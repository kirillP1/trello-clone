import { FunctionComponent } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IBoard } from '../../@types/IBoard'
import AddBoardInProject from '../../Components/buisness/AddBoardInProject/AddBoardInProject'
import BoardOnProjectPage from '../../Components/buisness/BoardOnProjectPage/BoardOnProjectPage'
import ProjectHeader from '../../Components/buisness/ProjectHeader/ProjectHeader'
import { RootState } from '../../redux/store'

interface ProjectPageProps {}

const ProjectPage: FunctionComponent<ProjectPageProps> = () => {
	const { projectId } = useParams()
	const projectsBoards = useSelector((state: RootState) =>
		state.boards.boards.filter(board => board.projectId === Number(projectId))
	)

	return (
		<div className='py-5 px-10 pb-48 pt-0'>
			<ProjectHeader />
			<div className='flex align-middle pt-4 pb-4'>
				<FaRegUser className='mr-3 mt-2 text-xl' />
				<h2 className='font-semibold text-gray-700 text-2xl'>Your boards</h2>
			</div>
			<div className='flex flex-wrap'>
				{projectsBoards.map((board: IBoard) => (
					<BoardOnProjectPage key={board.id} board={board} />
				))}
				<AddBoardInProject />
			</div>
		</div>
	)
}

export default ProjectPage
