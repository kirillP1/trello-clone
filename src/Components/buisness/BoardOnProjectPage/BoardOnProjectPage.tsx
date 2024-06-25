import { FunctionComponent, memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchImageById } from '../../../helpers/Boards/fetchImageById/fetchImageById'

interface BoardOnProjectPageProps {
	boardImageId: string
	boardName: string
	boardId: number
}

const BoardOnProjectPage: FunctionComponent<BoardOnProjectPageProps> = memo(
	({ boardImageId, boardName, boardId }) => {
		const [imageUrl, setImageUrl] = useState<string>()

		useEffect(() => {
			fetchImageById(boardImageId, 'small').then(res => setImageUrl(res))
		}, [])
		return (
			<NavLink className='xl:w-1/4 lg:w-1/2 w-full' to={`/board/${boardId}`}>
				<div className='bg-gray-300 p-3 rounded-lg m-2 h-44 hover:scale-105 transition-all duration-200 relative'>
					{imageUrl && (
						<>
							<img
								src={imageUrl}
								className='absolute inset-0 object-cover z-0 h-full w-full rounded-lg'
							/>
						</>
					)}
					<div className='absolute inset-0 z-0 bg-black bg-opacity-40 rounded-lg'></div>
					<span className='font-semibold text-lg z-10 absolute text-white'>
						{boardName}
					</span>
				</div>
			</NavLink>
		)
	}
)

export default BoardOnProjectPage
