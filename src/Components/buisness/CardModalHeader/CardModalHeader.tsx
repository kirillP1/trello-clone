import { debounce } from 'lodash'
import {
	ChangeEvent,
	FunctionComponent,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { MdOutlineInput } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ICard } from '../../../@types/ICard'
import { changeCardFromCol } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch, RootState } from '../../../redux/store'

interface CardModalHeaderProps {}

const CardModalHeader: FunctionComponent<CardModalHeaderProps> = () => {
	const currentModalCard = useSelector(
		(state: RootState) => state.cards.currentModalCard
	)
	const [value, setValue] = useState<string>(currentModalCard?.name as string)
	const dispatch = useDispatch<AppDispatch>()

	const currentModalCol = useSelector((state: RootState) =>
		state.kanbanCols.kanbanCols.find(
			col => col.id === currentModalCard?.kanbanColId
		)
	)

	const debouncedSetValue = useCallback(
		debounce((value: string) => {
			dispatch(changeCardFromCol({ ...currentModalCard, name: value } as ICard))
		}, 300), // задержка в миллисекундах
		[]
	)

	useEffect(() => {
		debouncedSetValue(value)
	}, [value])

	function cardNameChangeHandler(e: ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}

	return (
		<div className='flex mb-10 w-full'>
			<MdOutlineInput className='mt-3 mr-3 text-gray-700' />
			<div className='w-full mr-10'>
				<input
					className='text-xl transition-all duration-100 font-bold text-gray-700 w-full resize-none h-10 focus:bg-gray-200 px-1 py-1 -ml-1'
					onChange={e => cardNameChangeHandler(e)}
					value={value}
				/>
				<p className='text-gray-500 '>
					in col <span>{currentModalCol?.name}</span>
				</p>
			</div>
		</div>
	)
}

export default CardModalHeader
