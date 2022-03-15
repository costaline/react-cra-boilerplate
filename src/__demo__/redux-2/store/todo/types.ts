import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actions from './actions'
import C from './constants'

/* state */
export interface TodoState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

/* action payloads | errors */
export type FetchTodoSuccessPayload = any[]
export type FetchTodoFailurePayload = string

/* sync actions */
export type TodoActions = ReturnType<InferValue<typeof actions>>

/* common thunk type */
type ThunkResult<R, A extends Action> = ThunkAction<R, TodoState, void, A>

/* thunk actions */
export type FetchTodosResult = ThunkResult<
  Promise<void>,
  Extract<
    TodoActions,
    Action<
      | typeof C.FETCH_TODOS_START
      | typeof C.FETCH_TODOS_SUCCESS
      | typeof C.FETCH_TODOS_FAILURE
    >
  >
>

export type ThunkFetchTodos = (
  page?: number,
  limit?: number
) => FetchTodosResult
