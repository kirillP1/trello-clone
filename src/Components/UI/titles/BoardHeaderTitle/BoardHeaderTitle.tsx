import { FunctionComponent, memo } from 'react'
import { IBoard } from '../../../../@types/IBoard'

interface BoardHeaderTitleProps {
	currentBoard: IBoard
}

const BoardHeaderTitle: FunctionComponent<BoardHeaderTitleProps> = memo(
	({ currentBoard }) => {
		return (
			<h1 className='text-2xl xl:text-4xl font-bold text-white'>
				{currentBoard && currentBoard.name}
			</h1>
		)
	}
)

export default BoardHeaderTitle
