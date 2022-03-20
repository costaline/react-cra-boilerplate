import { Immutable } from 'immer'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actions from './actions'
import C from './constants'

/* state */
export type UserState = Immutable<{
  users: any[]
  loading: boolean
  error: null | string
}>

/* action payloads | errors */
export type FetchUsersSuccessPayload = any[]
export type FetchUsersFailurePayload = string

/* sync actions */
export type UserActions = ReturnType<InferValue<typeof actions>>

/* common thunk type */
type ThunkResult<R, A extends Action> = ThunkAction<R, UserState, void, A>

/* thunk actions */
export type FetchUsersResult = ThunkResult<
  Promise<void>,
  Extract<
    UserActions,
    Action<
      | typeof C.FETCH_USERS_START
      | typeof C.FETCH_USERS_SUCCESS
      | typeof C.FETCH_USERS_FAILURE
    >
  >
>

export type ThunkFetchUsers = () => FetchUsersResult
