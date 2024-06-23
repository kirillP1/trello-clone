import { ICard } from './ICard'

export interface IKanbanCol {
	id: number
	name: string
	boardId: number
	cards: ICard[]
}
