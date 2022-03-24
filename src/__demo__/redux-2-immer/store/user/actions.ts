import C from './constants'
import * as T from './types'

export const fetchUsersStart = () =>
	({
		type: C.FETCH_USERS_START,
	} as const)

export const fetchUsersSuccess = (payload: T.FetchUsersSuccessPayload) =>
	({
		type: C.FETCH_USERS_SUCCESS,
		payload,
	} as const)

export const fetchUsersFailure = (error: T.FetchUsersFailurePayload) =>
	({
		type: C.FETCH_USERS_FAILURE,
		payload: error,
	} as const)
