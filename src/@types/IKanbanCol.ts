import { ICard } from './ICard'

export interface IKanbanCol {
	id: number
	name: string
	projectId: number
	cards: ICard[]
}
