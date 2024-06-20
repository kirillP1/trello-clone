import { RefObject } from 'react'
import { ICard } from '../../../@types/ICard'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { setKanbanCols } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch } from '../../../redux/store'

export function colDropHandler(
	e: React.DragEvent<HTMLDivElement>,
	col: IKanbanCol,
	currentCol: IKanbanCol | null,
	currentCard: ICard | null,
	kanbanCols: IKanbanCol[],
	colRef: RefObject<HTMLElement>,
	dispatch: AppDispatch
) {
	e.preventDefault()

	if (!currentCol) {
		console.error('currentCol is null')
		return
	}

	removeColRefStyles(colRef)

	if (!currentCard && currentCol) {
		dropColToCol(kanbanCols, currentCol, col, dispatch)
	} else if (
		col.cards.length === 0 &&
		currentCol.id !== col.id &&
		currentCard
	) {
		dropCardToEmptyCol(currentCol, currentCard, col, dispatch, kanbanCols)
	}
}

function removeColRefStyles(colRef: RefObject<HTMLElement>) {
	colRef.current!.classList.remove('shadow-md')
	colRef.current!.classList.remove('shadow-gray-400')
}

function dropColToCol(
	kanbanCols: IKanbanCol[],
	currentCol: IKanbanCol,
	col: IKanbanCol,
	dispatch: AppDispatch
) {
	const currentColIndex = kanbanCols.indexOf(currentCol)

	const kanbanColsCopy = [...kanbanCols]
	kanbanColsCopy.splice(currentColIndex, 1)

	const dropIndex = kanbanCols.indexOf(col)
	kanbanColsCopy.splice(dropIndex, 0, currentCol)

	dispatch(setKanbanCols(kanbanColsCopy))
}

function dropCardToEmptyCol(
	currentCol: IKanbanCol,
	currentCard: ICard,
	col: IKanbanCol,
	dispatch: AppDispatch,
	kanbanCols: IKanbanCol[]
) {
	const currentIndex = currentCol.cards.indexOf(currentCard)

	if (currentIndex === -1) {
		console.error('Card not found in the current column')
		return
	}

	const targetCards = [...col.cards]

	targetCards.push(currentCard)

	// Создаем копию массива cards текущей колонки
	const currentCards = [...currentCol.cards]
	currentCards.splice(currentIndex, 1)

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
