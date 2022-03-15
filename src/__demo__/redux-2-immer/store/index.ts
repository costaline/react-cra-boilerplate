import { TodoActions, TodoThunkActions } from './todo'
import { UserActions, UserThunkActions } from './user'

export const Actions = {
  ...TodoActions,
  ...TodoThunkActions,
  ...UserActions,
  ...UserThunkActions,
}
