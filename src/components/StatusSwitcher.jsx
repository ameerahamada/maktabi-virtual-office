import { useState, useEffect, useRef } from 'react'
import Icon from './Icon'
import { STATUSES } from '../data/office'

/* Status switcher — متاح / غير متاح / يركز */
export default function StatusSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(STATUSES[0])
  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <div className={`status-wrap${open ? ' open' : ''}`} ref={ref}>
      <button className="status-btn" aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        <span className={`pip ${current.pip}`} />
        <span>{current.label}</span>
        <Icon name="chevronDown" size={16} className="chev" />
      </button>
      <div className="status-menu">
        <div className="lbl">تغيير الحالة</div>
        {STATUSES.map((s) => (
          <button
            key={s.id}
            className={`smenu-item${current.id === s.id ? ' active' : ''}`}
            onClick={() => { setCurrent(s); setOpen(false) }}
          >
            <span className={`pip ${s.pip}`} />
            <span className="meta">
              <b>{s.label}</b>
              <span>{s.hint}</span>
            </span>
            <Icon name="check" size={16} className="check" />
          </button>
        ))}
      </div>
    </div>
  )
}
