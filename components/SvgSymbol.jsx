import SvgCross from '@compo/SvgCross.jsx';
import SvgNought from '@compo/SvgNought.jsx';
import * as s from '@styl/svg-symbol.module.css';

export default function SvgSymbol({ symbol }) {

  return (
    <div className={s.svgSymbol}>
      <SvgCross isVisible={symbol === 'X' ? true : false} />
      <SvgNought isVisible={symbol === 'O' ? true : false} />
    </div>
  )
}
