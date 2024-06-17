import { FunctionComponent } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { deleteKanbanCol } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch, RootState } from '../../../redux/store'
import AddCard from '../AddCard/AddCard'
import CanbanStep from '../CanbanStep/CanbanStep'
import Card from '../Card/Card'

const KanbanCol: FunctionComponent<IKanbanCol> = ({ id, name }) => {
	const dispatch = useDispatch<AppDispatch>()
	const cards = useSelector((state: RootState) => state.cards.cards).filter(
		card => card.kanbanColId === id
	)

	return (
		<div className=' mr-5 w-72 whitespace-normal '>
			<div className='flex justify-between'>
				<CanbanStep name={name} />
				<IoMdClose
					onClick={() => dispatch(deleteKanbanCol(Number(id)))}
					className='text-gray-600 text-2xl transition-all duration-200 hover:cursor-pointer hover:text-black hover:scale-110'
				/>
			</div>
			<div className='tasksList'>
				{cards.map(card => (
					<Card {...card} />
				))}
			</div>
			<AddCard kanbanColId={id} />
		</div>
	)
}

export default KanbanCol
