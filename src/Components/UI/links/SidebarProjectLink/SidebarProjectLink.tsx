import { FunctionComponent, memo } from 'react'
import { AiFillProject } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setMobileMenuActive } from '../../../../redux/slices/mobile.slice'
import { AppDispatch } from '../../../../redux/store'

interface SidebarProjectLinkProps {
	projectId: number
	projectName: string
	closeHandler: (
		e: React.MouseEvent<SVGElement>,
		deleteProjectId: number
	) => void
}

const SidebarProjectLink: FunctionComponent<SidebarProjectLinkProps> = memo(
	({ projectId, projectName, closeHandler }) => {
		const dispatch = useDispatch<AppDispatch>()

		const clickHandler = () => {
			dispatch(setMobileMenuActive(false))
		}

		return (
			<NavLink
				key={projectId}
				to={`/project/${projectId}`}
				className='sidebar-link flex justify-between'
				data-testid='sidebar-project-link'
				onClick={clickHandler}
			>
				<div className='inline-block'>
					<AiFillProject className='mr-2 -mt-1 inline-block' />
					<span>{projectName}</span>
				</div>

				<IoMdClose
					data-testid='closeButton'
					className='text-2xl transition-all duration-200 text-gray-500 hover:cursor-pointer hover:text-black hover:scale-110'
					onClick={e => closeHandler(e, projectId)}
				/>
			</NavLink>
		)
	}
)

export default SidebarProjectLink
