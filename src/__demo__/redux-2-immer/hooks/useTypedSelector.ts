import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../store/init/types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
