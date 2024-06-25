import { FunctionComponent } from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setMobileMenuActive } from '../../../../redux/slices/mobile.slice'
import { AppDispatch, RootState } from '../../../../redux/store'

interface MobileMenuButtonProps {}

const MobileMenuButton: FunctionComponent<MobileMenuButtonProps> = () => {
	const { isMobile, mobileMenuActive } = useSelector(
		(state: RootState) => state.mobile
	)

	const dispatch = useDispatch<AppDispatch>()

	function clickHandler() {
		console.log('click', !mobileMenuActive)
		dispatch(setMobileMenuActive(!mobileMenuActive))
	}

	return (
		isMobile &&
		(!mobileMenuActive ? (
			<IoIosMenu
				className='mr-4 text-3xl mt-1 text-gray-500'
				onClick={clickHandler}
			/>
		) : (
			<IoMdClose
				className='mr-4 text-3xl mt-1 text-gray-500'
				onClick={clickHandler}
			/>
		))
	)
}

export default MobileMenuButton
