import { debounce } from 'lodash'
import {
	ChangeEvent,
	FunctionComponent,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICard } from '../../../@types/ICard'
import { changeCardFromCol } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch, RootState } from '../../../redux/store'

interface CardModalBodyFormProps {}

const CardModalBodyForm: FunctionComponent<CardModalBodyFormProps> = () => {
	const currentModalCard = useSelector(
		(state: RootState) => state.cards.currentModalCard
	)
	const dispatch = useDispatch<AppDispatch>()

	const [value, setValue] = useState<string>(currentModalCard?.desc as string)

	const debouncedSetValue = useCallback(
		debounce((value: string) => {
			dispatch(changeCardFromCol({ ...currentModalCard, desc: value } as ICard))
		}, 300), // задержка в миллисекундах
		[]
	)

	useEffect(() => {
		debouncedSetValue(value)
	}, [value])

	function descChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
		setValue(e.target.value)
	}

	return (
		<div className='flex-1'>
			<h4 className='text-lg font-semibold text-gray-700 mb-2'>Description</h4>
			<textarea
				name='desc'
				value={value}
				id='desc'
				placeholder='Unique description'
				className='w-full bg-gray-200 text-gray-700 p-2 rounded-md resize-none h-20'
				onChange={e => descChangeHandler(e)}
			></textarea>
		</div>
	)
}

export default CardModalBodyForm
