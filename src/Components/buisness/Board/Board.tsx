import { FunctionComponent, memo, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IBoard } from '../../../@types/IBoard'
import { fetchImageById } from '../../../helpers/Boards/fetchImageById/fetchImageById'
import { RootState } from '../../../redux/store'
import BoardHeader from '../BoardHeader/BoardHeader'
import KanbanBoard from '../KanbanBoard/KanbanBoard'

interface BoardProps {}

const Board: FunctionComponent<BoardProps> = memo(() => {
	const { boardId } = useParams()
	const memoBoardId = useMemo(() => boardId, [boardId])

	const board = useSelector((state: RootState) =>
		state.boards.boards.find(board => board.id === Number(boardId))
	)
	const [imageUrl, setImageUrl] = useState<string | null>(null)
	useEffect(() => {
		setImageUrl(null)
		if (board) {
			fetchImageById(board?.imageId as string, 'regular').then(res =>
				setImageUrl(res as string)
			)
		}
	}, [board])

	const boards = useSelector((state: RootState) => state.boards.boards)

	const currentBoard: IBoard | null = useMemo(
		() => boards.find(board => board.id === Number(memoBoardId)) as IBoard,
		[memoBoardId]
	)
	return (
		<div className='Board h-full flex flex-col relative'>
			<img
				src={imageUrl as string}
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div className='absolute inset-0 bg-black/40'></div>
			<BoardHeader currentBoard={currentBoard} />
			<KanbanBoard />
		</div>
	)
})

export default Board
