import { debounce } from 'lodash'
import {
	ChangeEvent,
	FunctionComponent,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { changeCol } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch } from '../../../redux/store'

interface CanbanStepProps {
	col: IKanbanCol
}

const CanbanStep: FunctionComponent<CanbanStepProps> = ({ col }) => {
	const dispatch = useDispatch<AppDispatch>()

	const [value, setValue] = useState<string>(col.name as string)

	const debouncedSetValue = useCallback(
		debounce((value: string) => {
			dispatch(changeCol({ ...col, name: value }))
		}, 300), // задержка в миллисекундах
		[]
	)

	useEffect(() => {
		debouncedSetValue(value)
	}, [value])

	function colNameChangeHandler(e: ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}

	return (
		<div className='mb-4 rounded-md bg-blue-100 inline-block py-0.5 px-2 font-semibold'>
			<input
				type='text'
				value={value}
				className='bg-transparent w-fit'
				onChange={e => colNameChangeHandler(e)}
			/>
			<span className='text-gray-500 ml-1'>{col.cards.length}</span>
		</div>
	)
}

export default CanbanStep
