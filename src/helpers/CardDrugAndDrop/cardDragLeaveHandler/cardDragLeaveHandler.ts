export function cardDragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
	;(function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
		const target = e.target as HTMLDivElement
		target.classList.remove('shadow-gray-400')
	})(e)
}
