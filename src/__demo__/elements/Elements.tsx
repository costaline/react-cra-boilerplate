import { CssElement } from './CssElement'
import { CssModuleElement } from './CssModuleElement'
import { CssScopedElement } from './CssScopedElement'
import { EmotionCssElement } from './EmotionCssElement'
import { EmotionStyledElement } from './EmotionStyledElement'
import { JsElement } from './JsElement'
import { SassElement } from './SassElement'
import { SassModuleElement } from './SassModuleElement'
import { SassScopedElement } from './SassScopedElement'
import { ScssElement } from './ScssElement'
import { ScssModuleElement } from './ScssModuleElement'
import { ScssScopedElement } from './ScssScopedElement'
import { TsElement } from './TsElement'

export const Elements = () => (
	<div>
		<header>
			<h1>Main features</h1>
		</header>

		<main>
			<CssElement />
			<CssModuleElement />
			<CssScopedElement />
			<SassElement />
			<SassModuleElement />
			<SassScopedElement />
			<ScssElement />
			<ScssModuleElement />
			<ScssScopedElement />
			<EmotionStyledElement />
			<EmotionCssElement />
			<JsElement />
			<TsElement />
		</main>
	</div>
)
