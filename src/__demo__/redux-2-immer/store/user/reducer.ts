import { produce } from 'immer'

import C from './constants'
import { initialState } from './initialState'
import { UserActions } from './types'

export const userReducer = produce((draft, action: UserActions) => {
	switch (action.type) {
		case C.FETCH_USERS_START:
			draft.loading = true
			break
		case C.FETCH_USERS_SUCCESS:
			draft.loading = false
			draft.users = action.payload
			break
		case C.FETCH_USERS_FAILURE:
			draft.loading = false
			draft.error = action.payload
			break
		default: {
			const _: never = action

			break
		}
	}
}, initialState)
