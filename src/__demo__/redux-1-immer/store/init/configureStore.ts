import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

const composeEnhancers = composeWithDevTools({})

const middlewares: Middleware[] = [thunk]

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
)
