import Icon from './Icon'
import Seat from './Seat'
import MediaDock from './MediaDock'
import { zones, seats, me } from '../data/office'

/* The hero: 2D office floor map with room zones, furniture and avatars. */
export default function OfficeMap({ onOpenChat }) {
  return (
    <main className="stage">
      <div className="stage-top">
        <div>
          <h1>الطابق الثاني — التطوير</h1>
          <div className="sub">أنت داخل المكتب • تحرّك بالنقر على الخريطة للانتقال بين المناطق</div>
        </div>
        <div className="live-pill"><i />١٢ متصلًا الآن</div>
        <div className="map-tools">
          <button className="mtool" aria-label="تكبير"><Icon name="plus" size={18} /></button>
          <button className="mtool" aria-label="تصغير"><Icon name="minus" size={18} /></button>
          <button className="mtool" aria-label="توسيط على موقعي"><Icon name="target" size={18} /></button>
        </div>
      </div>

      <div className="map-frame">
        <div className="map">
          <div className="corridor" style={{ top: '42%', left: '48.5%' }}>الممر</div>

          {zones.map((z) => (
            <div
              key={z.id}
              className={`zone${z.active ? ' active-room' : ''}`}
              style={{ ...z.pos, animationDelay: `${z.delay}s` }}
            >
              <div className="zhead">
                <span className="zi" style={{ background: z.color }}><Icon name={z.icon} size={13} stroke="#fff" /></span>
                <b>{z.name}</b>
              </div>
              <div className="zcap">
                {z.recording ? <><span className="blip" /> تسجيل</> : z.cap}
              </div>
              {z.furniture?.map((f, i) => <div key={i} className="desk" style={f.s} />)}
              {z.plants?.map((p, i) => <div key={i} className="plant" style={p} />)}
            </div>
          ))}

          {seats.map((s) => <Seat key={s.id} seat={s} />)}

          {/* the employee (you) */}
          <div className="seat me" style={{ top: '48%', insetInlineStart: '40%', animationDelay: '0.62s' }}>
            <span className="move-hint" />
            <div className="av">{me.initial}</div>
            <span className="tag">أنت</span>
          </div>
        </div>

        <MediaDock onOpenChat={onOpenChat} />
      </div>
    </main>
  )
}
