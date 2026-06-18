import { useState } from 'react'
import Icon from './Icon'

/* Floating media controls: mic, camera, share screen, raise hand, chat, leave. */
export default function MediaDock({ onOpenChat }) {
  const [mic, setMic] = useState(true)
  const [cam, setCam] = useState(true)
  const [share, setShare] = useState(false)
  const [hand, setHand] = useState(false)

  return (
    <div className="dock" role="toolbar" aria-label="أدوات الصوت والفيديو">
      <div className="dgrp">
        <button className={`dbtn ${mic ? 'on' : 'off'}`} onClick={() => setMic((v) => !v)} aria-label="الميكروفون" aria-pressed={mic}>
          <span className="tip">{mic ? 'كتم الميكروفون' : 'تشغيل الميكروفون'}</span>
          <Icon name={mic ? 'mic' : 'micOff'} size={21} />
        </button>
        <button className={`dbtn ${cam ? 'on' : 'off'}`} onClick={() => setCam((v) => !v)} aria-label="الكاميرا" aria-pressed={cam}>
          <span className="tip">{cam ? 'إيقاف الكاميرا' : 'تشغيل الكاميرا'}</span>
          <Icon name="cam" size={21} />
        </button>
      </div>

      <div className="sep" />

      <div className="dgrp">
        <button className={`dbtn${share ? ' on' : ''}`} onClick={() => setShare((v) => !v)} aria-label="مشاركة الشاشة" aria-pressed={share}>
          <span className="tip">مشاركة الشاشة</span>
          <Icon name="screen" size={21} />
        </button>
        <button className={`dbtn${hand ? ' on' : ''}`} onClick={() => setHand((v) => !v)} aria-label="رفع اليد" aria-pressed={hand}>
          <span className="tip">رفع اليد</span>
          <Icon name="hand" size={21} />
        </button>
        <button className="dbtn" onClick={onOpenChat} aria-label="المحادثة">
          <span className="tip">المحادثة</span>
          <Icon name="chat" size={21} />
        </button>
      </div>

      <div className="sep" />

      <button className="dbtn leave" aria-label="مغادرة الغرفة">
        <Icon name="leave" size={19} />
        مغادرة
      </button>
    </div>
  )
}
