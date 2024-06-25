import { FunctionComponent, memo } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { IKanbanCol } from '../../../@types/IKanbanCol'
import { deleteKanbanCol } from '../../../redux/slices/kanbanCols.slice'
import { AppDispatch } from '../../../redux/store'
import CanbanStep from '../CanbanStep/CanbanStep'

interface EditColInsideProps {
	col: IKanbanCol
}

const EditColInside: FunctionComponent<EditColInsideProps> = memo(({ col }) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className='flex justify-between'>
			<CanbanStep col={col} />
			<IoMdClose
				onClick={() => dispatch(deleteKanbanCol(Number(col.id)))}
				className='text-gray-600 text-2xl transition-all duration-200 hover:cursor-pointer hover:text-black hover:scale-110'
			/>
		</div>
	)
})

export default EditColInside
