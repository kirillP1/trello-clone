import { RefObject, useEffect, useState } from 'react'

export const useBeyondClick = (
	show: boolean,
	setShow: (arg: boolean) => void,
	formRef: RefObject<HTMLElement>
) => {
	const [flag, setFlag] = useState<boolean>(false)

	useEffect(() => {
		function handlerClick(e: MouseEvent) {
			if (!flag) {
				setFlag(true)
			} else {
				if (
					show &&
					formRef.current &&
					!formRef.current.contains(e.target as Node)
				) {
					setShow(false)
				}
			}
		}

		const inputName = formRef.current?.querySelector(
			'input[name="name"]'
		) as HTMLInputElement
		if (inputName) {
			inputName.focus()
		}

		addEventListener('click', handlerClick)

		return () => {
			removeEventListener('click', handlerClick)
		}
	}, [flag])
}
