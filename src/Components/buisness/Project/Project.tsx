import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import SmBlueButton from '../../UI/buttons/SmBlueButton/SmBlueButton'

interface ProjectProps {}

interface ProjectParams {
	id: string
	[name: string]: string
}

const Project: FunctionComponent<ProjectProps> = () => {
	const params = useParams<ProjectParams>()

	return (
		<div className='Project'>
			<header className='p-10 border-solid border-gray-200 border-b-2'>
				<div className='flex w-full justify-between items-center'>
					<h1 className='text-4xl font-bold'>{params.id}: Case Study</h1>

					<div>
						<SmBlueButton>New Card</SmBlueButton>
					</div>
				</div>
			</header>
			<div></div>
		</div>
	)
}

export default Project
