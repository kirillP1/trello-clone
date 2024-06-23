import { FunctionComponent } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { deleteBoard } from '../../../redux/slices/boards.slice'
import { AppDispatch, RootState } from '../../../redux/store'

interface BoardsNavProps {}

const BoardsNav: FunctionComponent<BoardsNavProps> = () => {
	const { boardId } = useParams()
	const navigate = useNavigate()

	const currentBoard = useSelector((state: RootState) =>
		state.boards.boards.find(board => board.id === Number(boardId))
	)

	const boards = useSelector((state: RootState) =>
		state.boards.boards.filter(
			board => board.projectId === currentBoard?.projectId
		)
	)
	const dispatch = useDispatch<AppDispatch>()

	const closeHandler = (
		e: React.MouseEvent<SVGElement>,
		deleteBoardId: number
	) => {
		e.stopPropagation()
		e.preventDefault()

		const deletedBoardProjectId = currentBoard?.projectId

		dispatch(deleteBoard(deleteBoardId))

		if (deleteBoardId === Number(boardId)) {
			navigate(`/project/${deletedBoardProjectId}`)
		}
	}
	return (
		<nav>
			{boards.map((board: IBoard) => (
				<NavLink
					to={`/board/${board.id}`}
					className='sidebar-link flex justify-between'
					key={board.id}
				>
					<div className='inline-block'>
						<span></span> {board.name}
					</div>
					<IoMdClose
						className='text-2xl transition-all duration-200 text-gray-500 hover:cursor-pointer hover:text-black hover:scale-110'
						onClick={e => closeHandler(e, board.id)}
					/>
				</NavLink>
			))}
		</nav>
	)
}

export default BoardsNav
