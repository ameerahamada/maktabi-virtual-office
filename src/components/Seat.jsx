/* A coworker avatar placed on the 2D map, with status ring + dot. */
export default function Seat({ seat }) {
  return (
    <div
      className={`seat ${seat.status === 'busy' ? 'busy' : seat.status === 'focus' ? 'focus' : ''}`}
      style={{ ...seat.pos, animationDelay: `${seat.delay}s` }}
    >
      <div className="av" style={{ background: seat.bg }}>
        {seat.initial}
        {seat.speaking && <span className="speak" />}
      </div>
      <span className="ring" />
      <span className="sdot" />
      <span className="nm">{seat.name}</span>
    </div>
  )
}
