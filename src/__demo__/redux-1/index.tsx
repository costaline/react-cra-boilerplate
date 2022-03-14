import { Provider } from 'react-redux'

import { TodoList, UserList } from './components'
import { store } from './store/init'

export default () => (
  <Provider store={store}>
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  </Provider>
)
