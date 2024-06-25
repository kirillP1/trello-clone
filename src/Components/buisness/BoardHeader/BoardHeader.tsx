import { FunctionComponent, memo } from 'react'
import { IBoard } from '../../../@types/IBoard'
import BoardHeaderTitle from '../../UI/titles/BoardHeaderTitle/BoardHeaderTitle'

interface BoardHeaderProps {
	currentBoard: IBoard
}

const BoardHeader: FunctionComponent<BoardHeaderProps> = memo(
	({ currentBoard }) => {
		return (
			<header className='p-5 xl:p-10 border-solid border-gray-200 border-b-2 z-10 relative'>
				<div className='absolute inset-0 h-full w-full backdrop-blur-sm'></div>
				<div className='flex w-full justify-between items-center z-10 relative'>
					<BoardHeaderTitle currentBoard={currentBoard} />
					<div></div>
				</div>
			</header>
		)
	}
)

export default BoardHeader
