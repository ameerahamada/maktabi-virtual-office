import Icon from './Icon'
import StatusSwitcher from './StatusSwitcher'
import { me } from '../data/office'

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="mark">م</div>
        <div className="name">
          مكتبي<small>المكتب الافتراضي</small>
        </div>
      </div>

      <nav className="crumb" aria-label="المسار">
        <span>شركة أُفُق</span>
        <Icon name="chevronStart" size={14} />
        <b>الطابق الثاني — التطوير</b>
      </nav>

      <label className="search">
        <Icon name="search" size={17} />
        <input placeholder="ابحث عن غرفة أو زميل…" />
        <kbd>F</kbd>
      </label>

      <div className="rec-chip" title="يجري تسجيل الاجتماع الحالي">
        <span className="blip" /> جارٍ التسجيل
      </div>

      <StatusSwitcher />

      <button className="iconbtn" aria-label="الإشعارات">
        <span className="dot" />
        <Icon name="bell" size={20} />
      </button>

      <div className="avatar me-avatar">{me.initial}</div>
    </header>
  )
}
