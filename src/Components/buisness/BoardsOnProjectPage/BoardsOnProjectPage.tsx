import { FunctionComponent, memo } from 'react'
import { IBoard } from '../../../@types/IBoard'
import AddBoardInProject from '../AddBoardInProject/AddBoardInProject'
import BoardOnProjectPage from '../BoardOnProjectPage/BoardOnProjectPage'

interface BoardsOnProjectPageProps {
	projectsBoards: IBoard[]
}

const BoardsOnProjectPage: FunctionComponent<BoardsOnProjectPageProps> = memo(
	({ projectsBoards }) => {
		return (
			<div className='flex flex-wrap'>
				{projectsBoards.map((board: IBoard) => (
					<BoardOnProjectPage
						key={board.id}
						boardId={board.id}
						boardImageId={board.imageId}
						boardName={board.name}
					/>
				))}
				<AddBoardInProject />
			</div>
		)
	}
)
export default BoardsOnProjectPage
