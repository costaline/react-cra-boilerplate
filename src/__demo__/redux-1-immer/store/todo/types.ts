import { Immutable } from 'immer'

import { TodoActionTypes } from './constants'

export type TodoState = Immutable<{
	todos: any[]
	loading: boolean
	error: null | string
	page: number
	limit: number
}>

interface FetchTodoAction {
	type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
	type: TodoActionTypes.FETCH_TODOS_SUCCESS
	payload: any[]
}

interface FetchTodoErrorAction {
	type: TodoActionTypes.FETCH_TODOS_ERROR
	payload: string
}

interface SetTodoPage {
	type: TodoActionTypes.SET_TODO_PAGE
	payload: number
}

export type TodoAction =
	| FetchTodoAction
	| FetchTodoSuccessAction
	| FetchTodoErrorAction
	| SetTodoPage
