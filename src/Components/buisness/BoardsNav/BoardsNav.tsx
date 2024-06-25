import { FunctionComponent, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { deleteBoard } from '../../../redux/slices/boards.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import BoardLink from '../../UI/links/BoardLink/BoardLink'

interface BoardsNavProps {}

const BoardsNav: FunctionComponent<BoardsNavProps> = () => {
	const { boardId } = useParams()
	const memoBoardId = useMemo(() => boardId, [boardId])
	const navigate = useNavigate()

	const currentBoard = useSelector((state: RootState) =>
		state.boards.boards.find(board => board.id === Number(memoBoardId))
	)

	const boards = useSelector((state: RootState) =>
		state.boards.boards.filter(
			board => board.projectId === currentBoard?.projectId
		)
	)
	const dispatch = useDispatch<AppDispatch>()

	const closeHandler = useCallback(
		(e: React.MouseEvent<SVGElement>, deleteBoardId: number) => {
			console.log('closeHandler')
			e.stopPropagation()
			e.preventDefault()

			const deletedBoardProjectId = currentBoard?.projectId

			dispatch(deleteBoard(deleteBoardId))

			if (deleteBoardId === Number(memoBoardId)) {
				navigate(`/project/${deletedBoardProjectId}`)
			}
		},
		[currentBoard, dispatch, memoBoardId, navigate]
	)

	return (
		<nav>
			{boards.map((board: IBoard) => (
				<BoardLink
					key={board.id}
					boardId={board.id}
					boardName={board.name}
					closeHandler={closeHandler}
				/>
			))}
		</nav>
	)
}

export default BoardsNav
