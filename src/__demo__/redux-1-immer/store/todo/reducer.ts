import { produce } from 'immer'

import { TodoActionTypes } from './constants'
import { initialState } from './initialState'
import { TodoAction } from './types'

export const todoReducer = produce((draft, action: TodoAction) => {
	switch (action.type) {
		case TodoActionTypes.FETCH_TODOS:
			draft.loading = true
			break
		case TodoActionTypes.FETCH_TODOS_SUCCESS:
			draft.loading = false
			draft.todos = action.payload
			break
		case TodoActionTypes.FETCH_TODOS_ERROR:
			draft.loading = false
			draft.error = action.payload
			break
		case TodoActionTypes.SET_TODO_PAGE:
			draft.page = action.payload
			break
		default: {
			const _: never = action

			break
		}
	}
}, initialState)
