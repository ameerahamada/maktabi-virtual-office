import Icon from './Icon'
import { company, floors, me } from '../data/office'

/* Fixed right sidebar — floors & rooms the employee is allowed to see.
   No management actions (admin-only) — only navigation. */
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="side-scroll">
        <div className="floor-pick">
          <div className="ico"><Icon name="building" size={20} /></div>
          <div className="t">
            <b>{company.name}</b>
            <span>{company.floors} طوابق • {company.online} زميلًا متصلًا</span>
          </div>
        </div>

        <div className="nav-h"><span>الطوابق والغرف</span></div>

        {floors.map((f) => (
          <div key={f.id}>
            <button
              className={`floor${f.active ? ' active' : ''}${f.locked ? ' locked' : ''}`}
              title={f.locked ? 'غير مصرّح لك بدخول هذا الطابق' : undefined}
              disabled={f.locked}
            >
              <span className="fi"><Icon name={f.icon} size={15} /></span>
              <span className="ft">{f.name}</span>
              {f.locked
                ? <span className="lk"><Icon name="lock" size={14} /></span>
                : <span className="cnt">{f.count}</span>}
            </button>

            {f.rooms && (
              <div className="rooms">
                {f.rooms.map((r) => (
                  <button key={r.id} className={`room-i${r.current ? ' cur' : ''}`}>
                    <span className="rdot" style={{ background: r.dot }} />
                    {r.name}
                    <span className="rcap">
                      {r.withUsers && <Icon name="userSingle" size={12} />}
                      {r.cap}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="perm-note">
          <Icon name="info" size={15} />
          <span>تعرض الطوابق والغرف المصرّح لك بدخولها فقط. إدارة الطوابق والخريطة من صلاحيات المشرف.</span>
        </div>
      </div>

      <div className="side-foot">
        <div className="avatar" style={{ width: 38, height: 38, fontSize: 13 }}>{me.initial}</div>
        <div className="t">
          <b>{me.name}</b>
          <span><i />متاح • {me.role}</span>
        </div>
      </div>
    </aside>
  )
}
