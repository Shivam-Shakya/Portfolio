import '../styles/Ticker.css'

export default function Ticker() {
  return (
    <div className="ticker-container">
      <div className="ticker" aria-label="Areas of work">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, idx) => <div className="ticker-set" key={idx}>
            {['DEVELOPMENT', 'CREATIVE THINKING', 'RESPONSIVE DESIGN', 'FULL STACK', 'CONTINUOUS LEARNING'].map((item) => <span key={item}>{item}<b>✳</b></span>)}
          </div>)}
        </div>
      </div>
    </div>
  )
}