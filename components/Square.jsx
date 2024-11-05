import * as s from '@styl/square.module.css';

export default function Square({ symbol, onSquareClick }) {

  return (
    <div className={s.container} onClick={onSquareClick}>
      {symbol === 'X' ? <SvgX /> : symbol === 'O' ? <SvgO /> : null}
    </div>
  )
}

function SvgX() {

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <g fill="none" stroke="#c1c1c1" strokeWidth="15%" strokeDasharray="100" strokeDashoffset="100">
        <line x1="10" y1="10" x2="90" y2="90" pathLength="100"></line>
        <line x1="90" y1="10" x2="10" y2="90" pathLength="100"></line>

        <animate attributeName="stroke-dashoffset" dur=".4s" to="0" fill="freeze"></animate>
      </g>
    </svg>
  )
}

const c = Math.PI * 80;
function SvgO() {

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <g fill="none" stroke="#c1c1c1" strokeWidth="15%" strokeDasharray={c} strokeDashoffset={c}>
        <circle cx="50" cy="50" r="40"></circle>

        <animate attributeName="stroke-dashoffset" dur=".4s" to="0" fill="freeze"></animate>
      </g>
    </svg>
  )
}
