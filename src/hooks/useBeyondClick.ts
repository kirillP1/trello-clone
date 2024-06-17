import { RefObject, useEffect, useState } from 'react'

export const useBeyondClick = (
	showForm: boolean,
	setShowForm: (arg: boolean) => void,
	formRef: RefObject<HTMLElement>
) => {
	const [flag, setFlag] = useState<boolean>(false)

	useEffect(() => {
		function handlerClick(e: MouseEvent) {
			if (!flag) {
				setFlag(true)
			} else {
				if (
					showForm &&
					formRef.current &&
					!formRef.current.contains(e.target as Node)
				) {
					setShowForm(false)
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
