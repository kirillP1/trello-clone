import { FunctionComponent, useEffect, useState } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { IProject } from '../../../@types/IProject'
import { RootState } from '../../../redux/store'

interface CurrentProjectItemInBoardProps {}

const CurrentProjectItemInBoard: FunctionComponent<
	CurrentProjectItemInBoardProps
> = () => {
	const params = useParams()

	const [currentProject, setCurrentProject] = useState<IProject | null>(null)
	const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null)

	const projects = useSelector((state: RootState) => state.projects.projects)
	const boards = useSelector((state: RootState) => state.boards.boards)

	useEffect(() => {
		if (params.boardId) {
			setCurrentBoard(
				boards.find(board => board.id === Number(params.boardId)) as IBoard
			)
		}
	}, [boards, params.boardId])

	useEffect(() => {
		if (currentBoard) {
			setCurrentProject(
				projects.find(
					project => project.id === currentBoard.projectId
				) as IProject
			)
		}
	}, [currentBoard, projects])

	return (
		<div>
			<div>
				{currentProject && (
					<NavLink
						to={`/project/${currentProject.id}`}
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

export default CurrentProjectItemInBoard
