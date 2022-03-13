import { Provider } from 'react-redux'

import { TodoList, UserList } from './components'
import { store } from './store'

export const Redux = () => (
  <Provider store={store}>
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  </Provider>
)
