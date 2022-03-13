import { UserActionTypes } from './constants'

export interface UserState {
  users: any[]
  loading: boolean
  error: null | string
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersErrorAction
  | FetchUserSuccessAction
