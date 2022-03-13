import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'

const composeEnhancers = composeWithDevTools({})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
