import { produce } from 'immer'

import { UserActionTypes } from './constants'
import { initialState } from './initialState'
import { UserAction } from './types'

export const userReducer = produce((draft, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      draft.loading = true
      break
    case UserActionTypes.FETCH_USERS_SUCCESS:
      draft.loading = false
      draft.users = action.payload
      break
    case UserActionTypes.FETCH_USERS_ERROR:
      draft.loading = false
      draft.error = action.payload
      break
    default: {
      const _: never = action

      break
    }
  }
}, initialState)
