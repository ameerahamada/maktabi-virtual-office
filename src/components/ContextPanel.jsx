import Icon from './Icon'
import { currentRoom, speakers, participants, messages } from '../data/office'

/* Contextual left panel for the current room: participants + chat. */
export default function ContextPanel({ tab, setTab }) {
  return (
    <aside className="context">
      <div className="ctx-head">
        <div className="row1">
          <div className="ri"><Icon name="board" size={20} stroke="#fff" /></div>
          <div className="rt">
            <b>{currentRoom.name}</b>
            <span>{currentRoom.floor} • {currentRoom.participantsCount} مشاركين</span>
          </div>
        </div>
        {currentRoom.recording && (
          <div className="ctx-rec">
            <span className="blip" /> يتم تسجيل هذا الاجتماع
            <span>بدأ {currentRoom.recordingStarted}</span>
          </div>
        )}
      </div>

      <div className="ctx-tabs">
        <button className={`ctab${tab === 'people' ? ' active' : ''}`} onClick={() => setTab('people')}>
          المشاركون <span className="b">٥</span>
        </button>
        <button className={`ctab${tab === 'chat' ? ' active' : ''}`} onClick={() => setTab('chat')}>
          المحادثة <span className="b">٣</span>
        </button>
      </div>

      <div className="ctx-body">
        {tab === 'people' ? <PeoplePane /> : <ChatPane />}
      </div>

      {tab === 'chat' && (
        <div className="chat-foot">
          <div className="box">
            <input placeholder="اكتب رسالة…" />
            <Icon name="smile" size={18} style={{ color: 'var(--faint)' }} />
          </div>
          <button className="send"><Icon name="send" size={18} /></button>
        </div>
      )}
    </aside>
  )
}

function PeoplePane() {
  return (
    <div className="pane">
      <div className="sect-h">يتحدّثون الآن</div>
      {speakers.map((s) => (
        <div className="pp" key={s.name}>
          <div className="av" style={{ background: s.bg }}>
            {s.initial}
            <span className="mini">
              <svg width="9" height="9" viewBox="0 0 24 24"><path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" fill="#1f9d6b" /></svg>
            </span>
          </div>
          <div className="t"><b>{s.name}</b><span>{s.role}</span></div>
          {s.host && <span className="host">المضيف</span>}
        </div>
      ))}

      <div className="sect-h">المشاركون</div>
      {participants.map((p) => (
        <div className="pp" key={p.name}>
          <div className="av" style={{ background: p.bg }}>{p.initial}</div>
          <div className="t">
            <b>{p.name}{p.you && <span className="you">أنت</span>}</b>
            <span>{p.role}</span>
          </div>
          <span className={`mic${p.mic ? '' : ' muted'}`}>
            <Icon name={p.mic ? 'micSmall' : 'micOff'} size={17} />
          </span>
        </div>
      ))}

      <button className="btn-primary" style={{ marginTop: 14 }}>
        <Icon name="arrow" size={18} />
        انضمام إلى القاعة
      </button>
    </div>
  )
}

function ChatPane() {
  return (
    <div className="pane">
      {messages.map((m, i) => (
        <div className={`msg${m.mine ? ' mine' : ''}`} key={i}>
          <div className="av" style={{ background: m.bg }}>{m.initial}</div>
          <div className="mb">
            <div className="top"><b>{m.name}</b><time>{m.time}</time></div>
            <p>{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
