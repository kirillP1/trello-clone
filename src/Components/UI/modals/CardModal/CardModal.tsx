import { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { ICard } from '../../../../@types/ICard'
import { setCurrentModalCard } from '../../../../redux/slices/cards.slice'
import { deleteCardFromCol } from '../../../../redux/slices/kanbanCols.slice'
import { setCardModal } from '../../../../redux/slices/modals.slice'
import { AppDispatch, RootState } from '../../../../redux/store'
import CardModalBody from '../../../buisness/CardModalBody/CardModalBody'
import CardModalHeader from '../../../buisness/CardModalHeader/CardModalHeader'

interface CardModalProps {}

const CardModal: FunctionComponent<CardModalProps> = () => {
	const cardModal = useSelector((state: RootState) => state.modals.cardModal)
	const currentModalCard = useSelector(
		(state: RootState) => state.cards.currentModalCard
	)

	const dispatch = useDispatch<AppDispatch>()

	function closeCardModalHandler() {
		dispatch(setCardModal(false))
		dispatch(setCurrentModalCard(null))
	}

	function deleteCardHandler() {
		dispatch(deleteCardFromCol(currentModalCard as ICard))
		closeCardModalHandler()
	}

	return (
		cardModal &&
		currentModalCard &&
		createPortal(
			<div
				className='bg-black/70 fixed inset-0 flex justify-center items-center z-50'
				onClick={() => closeCardModalHandler()}
			>
				<div
					className='bg-white w-1/2 h-auto rounded-md shadow-md shadow-black/30 relative p-5'
					onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
				>
					<CardModalHeader />
					<CardModalBody deleteCardHandler={deleteCardHandler} />

					<IoMdClose
						className='absolute top-5 right-5 text-2xl transition-all duration-200 hover:cursor-pointer hover:text-gray-400 hover:scale-110'
						onClick={() => closeCardModalHandler()}
					/>
				</div>
			</div>,
			document.getElementById('cardModal') as HTMLElement
		)
	)
}

export default CardModal
