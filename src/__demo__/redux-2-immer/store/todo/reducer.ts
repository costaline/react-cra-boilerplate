import { produce } from 'immer'

import C from './constants'
import { initialState } from './initialState'
import { TodoActions } from './types'

export const todoReducer = produce((draft, action: TodoActions) => {
  switch (action.type) {
    case C.FETCH_TODOS_START:
      draft.loading = true
      break
    case C.FETCH_TODOS_SUCCESS:
      draft.loading = false
      draft.todos = action.payload
      break
    case C.FETCH_TODOS_FAILURE:
      draft.loading = false
      draft.error = action.payload
      break
    case C.SET_TODO_PAGE:
      draft.page = action.payload
      break
    default: {
      const _: never = action

      break
    }
  }
}, initialState)
