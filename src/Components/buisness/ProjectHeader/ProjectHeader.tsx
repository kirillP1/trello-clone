import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import SmBlueButton from '../../UI/buttons/SmBlueButton/SmBlueButton'

interface ProjectHeaderProps {}

interface ProjectParams {
	id: string
	[name: string]: string
}

const ProjectHeader: FunctionComponent<ProjectHeaderProps> = () => {
	const params = useParams<ProjectParams>()
	return (
		<header className='p-10 border-solid border-gray-200 border-b-2'>
			<div className='flex w-full justify-between items-center'>
				<h1 className='text-4xl font-bold'>{params.id}: Case Study</h1>

				<div>
					<SmBlueButton>New Card</SmBlueButton>
				</div>
			</div>
		</header>
	)
}

export default ProjectHeader
