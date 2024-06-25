import { FunctionComponent, memo } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { IProject } from '../../../../@types/IProject'

interface HeaderLinkToProjectProps {
	currentProject: IProject | null
	projectId: number
}

const HeaderLinkToProject: FunctionComponent<HeaderLinkToProjectProps> = memo(
	({ currentProject, projectId }) => {
		console.log('link render')

		return (
			<div>
				{currentProject && (
					<NavLink
						to={`/project/${projectId}`}
						className='text-xl font-bold text-gray-700'
					>
						<AiFillProject className='mr-2 -mt-1 inline-block' />
						{currentProject?.name}
					</NavLink>
				)}
			</div>
		)
	}
)

export default HeaderLinkToProject
