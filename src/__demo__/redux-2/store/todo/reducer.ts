import C from './constants'
import { initialState } from './initialState'
import { TodoActions, TodoState } from './types'

export const todoReducer = (
	state: TodoState = initialState,
	action: TodoActions
): TodoState => {
	switch (action.type) {
		case C.FETCH_TODOS_START:
			return { ...state, loading: true }
		case C.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, todos: action.payload }
		case C.FETCH_TODOS_FAILURE:
			return { ...state, loading: false, error: action.payload }
		case C.SET_TODO_PAGE:
			return { ...state, page: action.payload }
		default:
			return state
	}
}
