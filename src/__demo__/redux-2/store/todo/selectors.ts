import { RootState } from '../init/types'

export const selectQueryParams = (state: RootState) => ({
	page: state.todo.page,
	limit: state.todo.limit,
})
