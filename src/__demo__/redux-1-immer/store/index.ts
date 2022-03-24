import { TodoActions } from './todo'
import { UserActions } from './user'

export const Actions = {
	...TodoActions,
	...UserActions,
}
