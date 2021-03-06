import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useActions, useTypedSelector } from '../hooks'
import { selectQueryParams } from '../store/todo/selectors'

const pages = [1, 2, 3, 4, 5]

export const TodoList: FC = () => {
	const { todos, loading, error } = useTypedSelector((state) => state.todo)
	const { page, limit } = useSelector(selectQueryParams)

	const { fetchTodos, setTodoPage } = useActions()

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>Error: {error}</h1>
	}

	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.id} - {todo.title}
				</div>
			))}

			<div style={{ display: 'flex' }}>
				{pages.map((p) => (
					<button
						key={p}
						style={{
							border: p === page ? '2px solid green' : '1px solid grey',
						}}
						type="button"
						onClick={() => setTodoPage(p)}
					>
						{p}
					</button>
				))}
			</div>
		</div>
	)
}
