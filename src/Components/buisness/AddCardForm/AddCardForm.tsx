import { FunctionComponent, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { ICard } from '../../../@types/ICard'
import { useBeyondClick } from '../../../hooks/useBeyondClick'
import { addCard } from '../../../redux/slices/cards.slice'
import { AppDispatch } from '../../../redux/store'
import SmBlueButton from '../../UI/buttons/SmBlueButton/SmBlueButton'

interface AddCardFormProps {
	show: boolean
	setShow: (agr: boolean) => void
	kanbanColId: number
}

const AddCardForm: FunctionComponent<AddCardFormProps> = ({
	show,
	setShow,
	kanbanColId,
}) => {
	const formRef = useRef<HTMLFormElement>(null)

	const dispatch = useDispatch<AppDispatch>()

	useBeyondClick(show, setShow, formRef)

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<ICard>()

	const onSubmit: SubmitHandler<ICard> = data => {
		setShow(false)
		reset()
		dispatch(addCard({ ...data, kanbanColId: Number(kanbanColId) }))
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='bg-gray-300 p-3 rounded-md absolute w-full'
			ref={formRef}
		>
			<input
				type='text'
				placeholder='Enter card name...'
				className='bg-gray-100 w-full rounded-sm px-2 py-1'
				{...register('name')}
			/>
			{errors.name && <span>There are errors</span>}
			<div className='flex justify-between items-center mt-2'>
				<SmBlueButton>Add card</SmBlueButton>
				<IoMdClose
					onClick={() => setShow(false)}
					className='text-2xl text-gray-500 transition-all duration-200 hover:text-black hover:scale-110 hover:cursor-pointer'
				/>
			</div>
		</form>
	)
}

export default AddCardForm
