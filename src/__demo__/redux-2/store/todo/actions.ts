import C from './constants'
import * as T from './types'

export const fetchTodosStart = () =>
  ({
    type: C.FETCH_TODOS_START,
  } as const)

export const fetchTodosSuccess = (payload: T.FetchTodoSuccessPayload) =>
  ({
    type: C.FETCH_TODOS_SUCCESS,
    payload,
  } as const)

export const fetchTodosFailure = (error: T.FetchTodoFailurePayload) =>
  ({
    type: C.FETCH_TODOS_FAILURE,
    payload: error,
  } as const)

export const setTodoPage = (page: number) =>
  ({
    type: C.SET_TODO_PAGE,
    payload: page,
  } as const)
