import { FC } from 'react'
import cns from 'classnames'

import { TsElementProps } from './TsElement.props'

export const TsElement: FC<TsElementProps> = ({ className }) => (
  <div className={cns(className)}>TS element</div>
)
