import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { RootState } from '../../../redux/store'

interface BoardHeaderProps {}

interface BoardParams {
	id: string
	[name: string]: string
}

const BoardHeader: FunctionComponent<BoardHeaderProps> = () => {
	const params = useParams<BoardParams>()
	const boards = useSelector((state: RootState) => state.boards.boards)

	let currentBoard: IBoard | null = null

	if (!isNaN(Number(params.boardId))) {
		currentBoard = boards.find(
			board => board.id === Number(params.boardId)
		) as IBoard
	}

	return (
		<header className='p-10 border-solid border-gray-200 border-b-2 z-10 relative'>
			<div className='absolute inset-0 h-full w-full backdrop-blur-sm'></div>
			<div className='flex w-full justify-between items-center z-10 relative'>
				<h1 className='text-4xl font-bold text-white'>
					{currentBoard && currentBoard.name}
				</h1>

				<div></div>
			</div>
		</header>
	)
}

export default BoardHeader
