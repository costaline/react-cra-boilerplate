import axios from 'axios'

import {
	fetchTodosFailure,
	fetchTodosStart,
	fetchTodosSuccess,
} from './actions'
import { ThunkFetchTodos } from './types'

export const fetchTodos: ThunkFetchTodos = (page = 1, limit = 10) => {
	return async (dispatch) => {
		try {
			dispatch(fetchTodosStart())
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/todos',
				{
					params: { _page: page, _limit: limit },
				}
			)

			setTimeout(() => {
				dispatch(fetchTodosSuccess(response.data))
			}, 500)
		} catch (e) {
			dispatch(fetchTodosFailure('fetch error'))
		}
	}
}
