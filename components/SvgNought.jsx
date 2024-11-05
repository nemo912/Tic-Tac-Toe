import * as s from '@styl/svg-nought.module.css';

export default function SvgNought({ isVisible }) {
  const strokeDashoffset = isVisible ? '0' : 50 * Math.PI;

  return (
    <svg className={s.svgCanvas} width="100%" height="100%">
      <g className={s.svgNought} fill="none" stroke="#a4a4a4" strokeWidth="8" strokeDasharray={50 * Math.PI} strokeDashoffset={strokeDashoffset}>
        <circle cx="50%" cy="50%" r="25"></circle>
      </g>
    </svg>
  )
}
