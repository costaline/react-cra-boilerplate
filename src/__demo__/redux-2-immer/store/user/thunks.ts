import axios from 'axios'

import {
  fetchUsersFailure,
  fetchUsersStart,
  fetchUsersSuccess,
} from './actions'
import { ThunkFetchUsers } from './types'

export const fetchUsers: ThunkFetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersStart())
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      setTimeout(() => {
        dispatch(fetchUsersSuccess(response.data))
      }, 500)
    } catch (e) {
      dispatch(fetchUsersFailure('fetch error'))
    }
  }
}
