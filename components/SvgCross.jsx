import * as s from '@styl/svg-cross.module.css';

export default function SvgCross({ isVisible }) {
  const strokeDashoffset = isVisible ? '0' : '100%';
  
  return (
    <svg className={s.svgCanvas} width="100%" height="100%">
      <g className={s.svgCross} fill="none" stroke="#a4a4a4" strokeWidth="8" strokeDasharray="100%" strokeDashoffset={strokeDashoffset}>
        <line pathLength="80" x1="15" y1="15" x2="65" y2="65"></line>
        <line pathLength="80" x1="65" y1="15" x2="15" y2="65"></line>
      </g>
    </svg>
  )
}
