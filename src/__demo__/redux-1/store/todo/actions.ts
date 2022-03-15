import { Dispatch } from 'react'
import axios from 'axios'

import { TodoActionTypes } from './constants'
import { TodoAction } from './types'

export const fetchTodos =
  (page = 1, limit = 10) =>
  async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: { _page: page, _limit: limit },
        }
      )

      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'fetch error',
      })
    }
  }

export const setTodoPage = (page: number): TodoAction => ({
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: page,
})
