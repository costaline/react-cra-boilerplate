import C from './constants'
import { initialState } from './initialState'
import { UserActions, UserState } from './types'

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case C.FETCH_USERS_START:
      return { loading: true, error: null, users: [] }
    case C.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload }
    case C.FETCH_USERS_FAILURE:
      return { loading: false, error: action.payload, users: [] }
    default:
      return state
  }
}
