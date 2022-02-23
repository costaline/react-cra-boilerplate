import { CssElement } from './CssElement'
import { CssModuleElement } from './CssModuleElement'
import { EmotionCssElement } from './EmotionCssElement'
import { EmotionStyledElement } from './EmotionStyledElement'
import { JsElement } from './JsElement'
import { TsElement } from './TsElement'

export default () => (
  <div>
    <header>
      <h1>Main features</h1>
    </header>

    <main>
      <CssElement/>
      <CssModuleElement/>
      <EmotionStyledElement/>
      <EmotionCssElement/>
      <JsElement/>
      <TsElement/>
    </main>
  </div>
)

