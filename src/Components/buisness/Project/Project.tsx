import { FunctionComponent } from 'react'
import KanbanBoard from '../KanbanBoard/KanbanBoard'
import ProjectHeader from '../ProjectHeader/ProjectHeader'

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
	return (
		<div className='Project h-full flex flex-col'>
			<ProjectHeader />
			<KanbanBoard />
		</div>
	)
}

export default Project
