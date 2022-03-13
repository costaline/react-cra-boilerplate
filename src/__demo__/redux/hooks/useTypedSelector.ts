import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@@/__demo__/redux/store/init/types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
