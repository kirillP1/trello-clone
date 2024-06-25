import {
	FunctionComponent,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { IProject } from '../../../@types/IProject'
import { RootState } from '../../../redux/store'
import HeaderLinkToProject from '../../UI/links/HeaderLinkToProject/HeaderLinkToProject'

interface CurrentProjectItemInBoardProps {}

const CurrentProjectItemInBoard: FunctionComponent<
	CurrentProjectItemInBoardProps
> = () => {
	const { boardId } = useParams()
	const memoBoardId = useMemo(() => boardId, [boardId])

	const [currentProject, setCurrentProject] = useState<IProject | null>(null)
	const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null)

	const projects = useSelector((state: RootState) => state.projects.projects)
	const boards = useSelector((state: RootState) => state.boards.boards)

	const updateCurrentBoatd = useCallback(() => {
		if (memoBoardId) {
			setCurrentBoard(
				boards.find(board => board.id === Number(memoBoardId)) as IBoard
			)
		}
	}, [memoBoardId])

	useEffect(() => {
		updateCurrentBoatd()
		console.log('memoBoardId', memoBoardId)
	}, [boards, memoBoardId])

	useEffect(() => {
		if (currentBoard) {
			setCurrentProject(
				projects.find(
					project => project.id === currentBoard.projectId
				) as IProject
			)
		}
		console.log('setCurProject', currentBoard)
	}, [currentBoard, projects])

	return (
		<div>
			<HeaderLinkToProject
				currentProject={currentProject}
				projectId={Number(currentProject?.id)}
			/>
		</div>
	)
}

export default CurrentProjectItemInBoard
