import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsMobile } from '../redux/slices/mobile.slice'
import { AppDispatch } from '../redux/store'

export function useMobile() {
	const [width, setWidth] = useState<number>(window.innerWidth)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		function resizeHandler() {
			setWidth(window.innerWidth)
		}

		resizeHandler()

		window.addEventListener('resize', resizeHandler)

		return () => window.removeEventListener('resize', resizeHandler)
	}, [])

	useEffect(() => {
		if (width >= 768) {
			dispatch(setIsMobile(false))
		} else {
			dispatch(setIsMobile(true))
		}
	}, [width])
}
