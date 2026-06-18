import { useState } from 'react'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import OfficeMap from './components/OfficeMap'
import ContextPanel from './components/ContextPanel'

/* Maktabi — employee virtual-office screen.
   Layout: top bar / fixed right sidebar / office map / contextual left panel. */
export default function App() {
  const [tab, setTab] = useState('people')

  return (
    <div className="app">
      <TopBar />
      <div className="body">
        <Sidebar />
        <OfficeMap onOpenChat={() => setTab('chat')} />
        <ContextPanel tab={tab} setTab={setTab} />
      </div>
    </div>
  )
}
