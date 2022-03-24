import cns from 'classnames'
import T from 'prop-types'

import { getSassVar } from '@@/shared/helpers'

export const JsElement = ({ className }) => (
	<div className={cns(className)} style={{ color: getSassVar('color-common') }}>
		JS element
	</div>
)

JsElement.propTypes = {
	className: T.string,
}
