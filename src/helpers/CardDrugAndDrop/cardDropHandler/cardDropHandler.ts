import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { setKanbanCols } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch } from '../../../redux/store'

interface IColParams {
	col: IKanbanCol
	currentCol: IKanbanCol | null
}

interface ICardParams {
	card: ICard
	currentCard: ICard | null
	setCurrentCard: (card: ICard | null) => void
}

interface IKanbanColParams {
	kanbanCols: IKanbanCol[]
}

export function cardDropHandler(
	e: React.DragEvent<HTMLDivElement>,
	dispatch: AppDispatch,
	{ col, currentCol }: IColParams,
	{ kanbanCols }: IKanbanColParams,
	{ card, currentCard, setCurrentCard }: ICardParams
) {
	e.preventDefault()
	if (!currentCard || !currentCol) {
		console.error('currentCard or currentCol is null')
		return
	}

	deleteTargetStyles(e)

	const currentCards = getCurrentCards(currentCol, currentCard)

	const targetCards = [...col.cards]

	const dropIndex = targetCards.indexOf(card)

	if (currentCol.id === col.id) {
		setCardToSameCol(
			currentCards,
			currentCard,
			dropIndex,
			kanbanCols,
			currentCol,
			dispatch
		)
	} else {
		setCardToTargetCol(
			targetCards,
			currentCard,
			dropIndex,
			currentCol,
			kanbanCols,
			currentCards,
			col,
			dispatch
		)
	}

	setCurrentCard(null)
}

function deleteTargetStyles(e: React.DragEvent<HTMLDivElement>) {
	const target = e.target as HTMLDivElement
	target.classList.remove('shadow-gray-400')
}

function getCurrentCards(currentCol: IKanbanCol, currentCard: ICard): ICard[] {
	const currentIndex = currentCol.cards.indexOf(currentCard)
	const currentCards = [...currentCol.cards]
	currentCards.splice(currentIndex, 1)

	return currentCards
}

function setCardToSameCol(
	currentCards: ICard[],
	currentCard: ICard,
	dropIndex: number,
	kanbanCols: IKanbanCol[],
	currentCol: IKanbanCol,
	dispatch: AppDispatch
): void {
	currentCards.splice(dropIndex + 1, 0, currentCard)

	dispatch(
		setKanbanCols(
			kanbanCols.map((c: IKanbanCol) => {
				if (c.id === currentCol.id) {
					return { ...currentCol, cards: currentCards }
				}
				return c
			})
		)
	)
}

function setCardToTargetCol(
	targetCards: ICard[],
	currentCard: ICard,
	dropIndex: number,
	currentCol: IKanbanCol,
	kanbanCols: IKanbanCol[],
	currentCards: ICard[],
	col: IKanbanCol,
	dispatch: AppDispatch
): void {
	const copyCurrentCard = { ...currentCard }
	copyCurrentCard.kanbanColId = col.id
	targetCards.splice(dropIndex + 1, 0, copyCurrentCard)

	dispatch(
		setKanbanCols(
			kanbanCols.map((c: IKanbanCol) => {
				if (c.id === currentCol.id) {
					return { ...currentCol, cards: currentCards }
				}
				if (c.id === col.id) {
					return { ...col, cards: targetCards }
				}
				return c
			})
		)
	)
}
