import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { IProject } from '../../../@types/IProject'
import { setCreateProjectModal } from '../../../redux/slices/modals.slice'
import { addProject } from '../../../redux/slices/projects.slice'
import { AppDispatch } from '../../../redux/store'

interface CreateProjectFormProps {}

const CreateProjectForm: FunctionComponent<CreateProjectFormProps> = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<IProject>()

	const dispatch = useDispatch<AppDispatch>()

	const onSubmit: SubmitHandler<IProject> = data => {
		dispatch(addProject(data))
		reset()
		dispatch(setCreateProjectModal(false))
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
			<input
				type='text'
				placeholder='Введите название проекта...'
				{...register('name')}
				className='bg-gray-100 px-4 py-2 block w-full rounded-sm mb-4'
			/>
			{errors.name && <span>There are errors</span>}
			<button
				type='submit'
				className='border-blue-600 border-2 w-full text-semibold border-slid bg-blue-600 text-white rounded-sm py-1 px-2 hover:bg-white hover:text-blue-600 transition-all duration-200'
			>
				Создать проект
			</button>
		</form>
	)
}

export default CreateProjectForm
