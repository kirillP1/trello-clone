import { FunctionComponent, memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { cardDragEndHandler } from '../../../helpers/CardDrugAndDrop/cardDragEndHandler/cardDragEndHandler'
import { cardDragLeaveHandler } from '../../../helpers/CardDrugAndDrop/cardDragLeaveHandler/cardDragLeaveHandler'
import { cardDragOverHandler } from '../../../helpers/CardDrugAndDrop/cardDragOverHandler/cardDragOverHandler'
import { cardDragStartHandler } from '../../../helpers/CardDrugAndDrop/cardDragStartHandler/cardDragStartHandler'
import { cardDropHandler } from '../../../helpers/CardDrugAndDrop/cardDropHandler/cardDropHandler'
import { setCurrentModalCard } from '../../../redux/slices/cards.slice'
import { setCardModal } from '../../../redux/slices/modals.slice'
import { AppDispatch, RootState } from '../../../redux/store'

interface CardProps {
	card: ICard
	col: IKanbanCol
	currentCol: IKanbanCol | null
	setCurrentCol: (col: IKanbanCol | null) => void
	currentCard: ICard | null
	setCurrentCard: (card: ICard | null) => void
}

const Card: FunctionComponent<CardProps> = memo(
	({ card, col, currentCol, setCurrentCol, currentCard, setCurrentCard }) => {
		const dispatch = useDispatch<AppDispatch>()

		const kanbanCols: IKanbanCol[] = useSelector(
			(state: RootState) => state.kanbanCols.kanbanCols
		)

		const cardRef = useRef<HTMLDivElement>(null)

		function cardClickHandler() {
			dispatch(setCardModal(true))
			dispatch(setCurrentModalCard(card))
		}

		return (
			<div
				draggable={true}
				onDragStart={() =>
					cardDragStartHandler(
						card,
						col,
						setCurrentCard,
						setCurrentCol,
						cardRef
					)
				}
				onDragLeave={e => cardDragLeaveHandler(e)}
				onDragEnd={e =>
					cardDragEndHandler(e, setCurrentCard, setCurrentCol, cardRef)
				}
				onDragOver={e => cardDragOverHandler(e, currentCard)}
				onDrop={e =>
					cardDropHandler(
						e,
						dispatch,
						{ col, currentCol },
						{ kanbanCols },
						{ card, currentCard, setCurrentCard }
					)
				}
				onClick={() => cardClickHandler()}
				data-name='card'
				className='card p-4 font-semibold border-solid border-gray-200 border-2 transition-all duration-200 rounded-md mb-2 shadow-md shadow-gray-200 hover:border-blue-300 hover:shadow-blue-200'
				ref={cardRef}
			>
				{card.name}
			</div>
		)
	}
)

export default Card
