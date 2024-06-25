import { FunctionComponent, memo, useEffect, useRef, useState } from 'react'
import CreateBoardFormInProject from '../CreateBoardFormInProject/CreateBoardFormInProject'

interface AddBoardInProjectProps {}

const AddBoardInProject: FunctionComponent<AddBoardInProjectProps> = memo(
	() => {
		const [show, setShow] = useState<boolean>(false)
		const formRef = useRef<HTMLDivElement>(null)

		function buttonClickHandler() {
			setShow(true)
		}

		const [flag, setFlag] = useState<boolean>(false)

		useEffect(() => {
			const outsideClickHandler = (e: MouseEvent) => {
				if (!flag) {
					setFlag(true)
				} else {
					if (!formRef.current?.contains(e.target as Node) && show) {
						console.log('clickl')
						setShow(false)
						setFlag(false)
					}
				}
			}

			addEventListener('click', outsideClickHandler)

			return () => {
				removeEventListener('click', outsideClickHandler)
			}
		})

		return (
			<div className='xl:w-1/4 lg:w-1/2 w-full'>
				<div className='bg-gray-300 p-3 rounded-lg m-2 h-44 hover:scale-105 transition-all duration-200 relative'>
					{show && (
						<div
							className='absolute inset-0 p-3 h-80 bg-gray-300 rounded-lg z-10'
							ref={formRef}
						>
							<CreateBoardFormInProject setShow={setShow} />
						</div>
					)}
					<button
						onClick={() => buttonClickHandler()}
						className='absolute inset-0'
					>
						<span className='font-semibold text-lg'>Create new board</span>
					</button>
				</div>
			</div>
		)
	}
)

export default AddBoardInProject
