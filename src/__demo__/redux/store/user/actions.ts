import { Dispatch } from 'react'
import axios from 'axios'

import { UserActionTypes } from './constants'
import { UserAction } from './types'

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS })
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    setTimeout(() => {
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    }, 500)
  } catch (e) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: 'fetch error',
    })
  }
}
