import { FunctionComponent } from 'react'
import { ICard } from '../../../@types/ICard'

const Card: FunctionComponent<ICard> = ({ name }) => {
	return (
		<div className='Card p-4 font-semibold border-solid border-gray-200 border rounded-md mb-2 shadow-md shadow-gray-200'>
			{/*<span className='text-xs font-bold bg-green-100 text-green-900 py-0.5 px-2 rounded-md mb-2 inline-block'>
				Low
			</span>*/}
			<p>{name}</p>
		</div>
	)
}

export default Card
