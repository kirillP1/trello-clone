import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchImageById } from '../../../helpers/Boards/fetchImageById/fetchImageById'
import { RootState } from '../../../redux/store'
import BoardHeader from '../BoardHeader/BoardHeader'
import KanbanBoard from '../KanbanBoard/KanbanBoard'

interface BoardProps {}

const Board: FunctionComponent<BoardProps> = () => {
	const { boardId } = useParams()
	const board = useSelector((state: RootState) =>
		state.boards.boards.find(board => board.id === Number(boardId))
	)
	const [imageUrl, setImageUrl] = useState<string | null>(null)
	useEffect(() => {
		setImageUrl(null)
		if (board) {
			fetchImageById(board?.imageId as string).then(res =>
				setImageUrl(res as string)
			)
		}
	}, [board])
	return (
		<div className='Board h-full flex flex-col relative'>
			<img
				src={imageUrl as string}
				className='absolute inset-0 h-full w-full object-cover -top-4'
			/>
			<div className='absolute inset-0 bg-black/40'></div>
			<BoardHeader />
			<KanbanBoard />
		</div>
	)
}

export default Board
