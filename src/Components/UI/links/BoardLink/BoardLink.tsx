import { FunctionComponent, memo } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setMobileMenuActive } from '../../../../redux/slices/mobile.slice'
import { AppDispatch } from '../../../../redux/store'

interface BoardLinkProps {
	boardId: number
	boardName: string
	closeHandler: (e: React.MouseEvent<SVGElement>, deleteBoardId: number) => void
}

const BoardLink: FunctionComponent<BoardLinkProps> = memo(
	({ boardId, boardName, closeHandler }) => {
		const dispatch = useDispatch<AppDispatch>()

		const clickHandler = () => {
			dispatch(setMobileMenuActive(false))
		}
		return (
			<NavLink
				to={`/board/${boardId}`}
				className='sidebar-link flex justify-between'
				key={boardId}
				onClick={clickHandler}
			>
				<div className='inline-block'>
					<span></span> {boardName}
				</div>
				<IoMdClose
					className='text-2xl transition-all duration-200 text-gray-500 hover:cursor-pointer hover:text-black hover:scale-110'
					onClick={e => closeHandler(e, boardId)}
				/>
			</NavLink>
		)
	}
)

export default BoardLink
