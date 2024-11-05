import * as s from '@styl/search-for-players.module.css';

export default function SearchForPlayers() {
  return (
    <div className={s.container}>
      <svg viewBox="0 0 200 200" className={s.loadingAnim}>
        <g fill="#00BBFF">
          <circle r="15" cx="35" cy="100">
            <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate>
          </circle>
          <circle opacity=".8" r="15" cx="35" cy="100">
            <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".05"></animate>
          </circle>
          <circle opacity=".6" r="15" cx="35" cy="100">
            <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate>
          </circle>
          <circle opacity=".4" r="15" cx="35" cy="100">
            <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".15"></animate>
          </circle>
          <circle opacity=".2" r="15" cx="35" cy="100">
            <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35" keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate>
          </circle>
        </g>
      </svg>

      <span className={s.search}>Searching for online players...</span>
    </div>
  )
}