import { FunctionComponent } from 'react'
import AddBoardButton from '../../UI/buttons/AddBoardButton/AddBoardButton'
import BoardsNav from '../BoardsNav/BoardsNav'

interface BoardsProps {}

const Boards: FunctionComponent<BoardsProps> = () => {
	return (
		<div className='bg-gray-100 h-full border-solid border-r-gray-200 border-r-2 w-72'>
			<AddBoardButton />
			<BoardsNav />
		</div>
	)
}

export default Boards
