import { useEffect, useRef } from 'react';
import * as s from '@styl/svg-grid-lines.module.css';

export default function Svg3x3Grid() {
  let ref = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      ref.current.setAttribute('stroke-dashoffset', '0');
    }, 200);
  });

  return (
    <svg width="100%" height="100%">
      <g ref={ref} className={s.svgGridLines} fill="none"
        stroke="#a4a4a4" strokeWidth="4" strokeLinecap="round"
        strokeDasharray="120" strokeDashoffset="120">

        <path d="m87 125v-120"></path>
        <path d="m167 125v-120"></path>
        <path d="m125 87h-120"></path>
        <path d="m125 167h-120"></path>

        <path d="m87 125v120"></path>
        <path d="m167 125v120"></path>
        <path d="m125 87h120"></path>
        <path d="m125 167h120"></path>
      </g>
    </svg>
  )
}