import { RefObject } from 'react'

export function colDragLeaveHandler(
	e: React.DragEvent<HTMLDivElement>,
	colRef: RefObject<HTMLElement>
) {
	const target = e.target as HTMLDivElement
	target.classList.remove('shadow-gray-400')

	colRef.current!.classList.remove('shadow-md')
	colRef.current!.classList.remove('shadow-gray-400')
}
