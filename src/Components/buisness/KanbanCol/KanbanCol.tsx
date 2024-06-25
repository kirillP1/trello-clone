import { FunctionComponent, memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { colDragEndHandler } from '../../../helpers/KanbanColDrugAndDrop/colDragEndHandler/colDragEndHandler'
import { colDragLeaveHandler } from '../../../helpers/KanbanColDrugAndDrop/colDragLeaveHandler/colDragLeaveHandler'
import { colDragOverHandler } from '../../../helpers/KanbanColDrugAndDrop/colDragOverHandler/colDragOverHandler'
import { colDragStartHandler } from '../../../helpers/KanbanColDrugAndDrop/colDragStartHandler/colDragStartHandler'
import { colDropHandler } from '../../../helpers/KanbanColDrugAndDrop/colDropHandler/colDropHandler'
import { AppDispatch, RootState } from '../../../redux/store'
import AddCard from '../AddCard/AddCard'
import Card from '../Card/Card'
import EditColInside from '../EditColInside/EditColInside'

interface KanbanColProps {
	col: IKanbanCol
	currentCol: IKanbanCol | null
	setCurrentCol: (col: IKanbanCol | null) => void
	currentCard: ICard | null
	setCurrentCard: (card: ICard | null) => void
}

const KanbanCol: FunctionComponent<KanbanColProps> = memo(
	({ col, currentCol, setCurrentCol, currentCard, setCurrentCard }) => {
		const dispatch = useDispatch<AppDispatch>()
		const kanbanCols: IKanbanCol[] = useSelector(
			(state: RootState) => state.kanbanCols.kanbanCols
		)
		const colRef = useRef<HTMLDivElement>(null)

		return (
			<div
				ref={colRef}
				className=' mr-5 w-72 whitespace-normal h-fit p-2 bg-white rounded-md transition-all duration-200 hover:cursor-pointer'
				data-name='col'
				draggable={true}
				onDragStart={e =>
					colDragStartHandler(e, col, setCurrentCol, currentCard, colRef)
				}
				onDragLeave={e => colDragLeaveHandler(e, colRef)}
				onDragEnd={e =>
					colDragEndHandler(e, colRef, setCurrentCol, setCurrentCard)
				}
				onDragOver={e => colDragOverHandler(e, currentCard, colRef)}
				onDrop={e =>
					colDropHandler(
						e,
						col,
						currentCol,
						currentCard,
						kanbanCols,
						colRef,
						dispatch,
						setCurrentCard
					)
				}
			>
				<EditColInside col={col} />
				<div className='tasksList'>
					{col.cards &&
						col.cards.map(card => (
							<Card
								key={card.id}
								card={card}
								col={col}
								currentCol={currentCol}
								setCurrentCol={setCurrentCol}
								currentCard={currentCard}
								setCurrentCard={setCurrentCard}
							/>
						))}
				</div>
				<AddCard kanbanColId={col.id} />
			</div>
		)
	}
)

export default KanbanCol
