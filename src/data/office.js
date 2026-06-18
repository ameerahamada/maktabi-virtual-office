/* Mock data for the employee office view.
   In a real app this comes from the API; the components are data-driven. */

export const me = {
  name: 'ريم الحربي',
  initial: 'ر',
  role: 'مطوّرة واجهات',
}

/* the three statuses the employee can switch between */
export const STATUSES = [
  { id: 'av', label: 'متاح', pip: 's-av', hint: 'يمكن للزملاء التواصل معك' },
  { id: 'busy', label: 'غير متاح', pip: 's-busy', hint: 'لن تتلقى دعوات أو مكالمات' },
  { id: 'focus', label: 'يركز', pip: 's-focus', hint: 'وضع التركيز — مقاطعة عند الضرورة فقط' },
]

export const company = { name: 'شركة أُفُق', floors: 3, online: 48 }

export const floors = [
  { id: 'f1', name: 'الطابق الأول — التصميم', count: '٦', icon: 'square' },
  {
    id: 'f2',
    name: 'الطابق الثاني — التطوير',
    count: '١٢',
    icon: 'squareLine',
    active: true,
    rooms: [
      { id: 'hall', name: 'قاعة الاجتماعات الكبرى', dot: 'var(--brand)', cap: '٥', current: true, withUsers: true },
      { id: 'focus', name: 'غرفة التركيز', dot: 'var(--amber)', cap: '١' },
      { id: 'open', name: 'منطقة العمل المفتوحة', dot: 'var(--green)', cap: '٤' },
      { id: 'team', name: 'غرفة الفريق', dot: 'var(--green)', cap: '٢' },
      { id: 'lounge', name: 'ركن الاستراحة', dot: 'var(--faint)', cap: '٠' },
    ],
  },
  { id: 'f3', name: 'الطابق الثالث — الإدارة', locked: true, icon: 'square' },
]

/* room zones drawn on the 2D map. pos = absolute placement (RTL-aware). */
export const zones = [
  {
    id: 'hall', name: 'قاعة الاجتماعات الكبرى', icon: 'board', color: 'var(--brand)',
    active: true, recording: true, delay: 0.05,
    pos: { top: '6%', insetInlineStart: '5%', width: '40%', height: '40%' },
    furniture: [{ type: 'desk', s: { top: '48%', left: '18%', width: '64%', height: '16%', borderRadius: '30px' } }],
    plants: [{ bottom: '14px', insetInlineStart: '16px' }],
  },
  {
    id: 'focus', name: 'غرفة التركيز', icon: 'focus', color: 'var(--amber)', cap: 'هدوء', delay: 0.12,
    pos: { top: '6%', insetInlineEnd: '5%', width: '40%', height: '24%' },
    furniture: [{ type: 'desk', s: { top: '54%', insetInlineStart: '14%', width: '30%', height: '26%' } }],
  },
  {
    id: 'team', name: 'غرفة الفريق', icon: 'users', color: 'var(--green)', cap: '٢', delay: 0.18,
    pos: { top: '34%', insetInlineEnd: '5%', width: '40%', height: '24%' },
    furniture: [{ type: 'desk', s: { top: '50%', insetInlineStart: '16%', width: '64%', height: '18%', borderRadius: '20px' } }],
  },
  {
    id: 'open', name: 'منطقة العمل المفتوحة', icon: 'desktop', color: '#5b8def', cap: '٤ مكاتب', delay: 0.24,
    pos: { bottom: '6%', insetInlineStart: '5%', width: '40%', height: '44%' },
    furniture: [
      { type: 'desk', s: { top: '42%', insetInlineStart: '12%', width: '30%', height: '18%' } },
      { type: 'desk', s: { top: '42%', insetInlineEnd: '12%', width: '30%', height: '18%' } },
      { type: 'desk', s: { bottom: '14%', insetInlineStart: '12%', width: '30%', height: '18%' } },
      { type: 'desk', s: { bottom: '14%', insetInlineEnd: '12%', width: '30%', height: '18%' } },
    ],
    plants: [{ top: '18%', insetInlineEnd: '18px' }],
  },
  {
    id: 'lounge', name: 'ركن الاستراحة', icon: 'sofa', color: '#8a7bd8', cap: 'فارغ', delay: 0.3,
    pos: { bottom: '6%', insetInlineEnd: '5%', width: '40%', height: '32%' },
    plants: [{ bottom: '18px', insetInlineStart: '18px' }, { top: '46%', insetInlineEnd: '20px' }],
  },
]

/* coworker avatars positioned on the map */
export const seats = [
  { id: 1, initial: 'س', name: 'سارة — تتحدث', status: 'av', speaking: true, bg: 'linear-gradient(150deg,#e6845b,#c75a32)', pos: { top: '30%', insetInlineStart: '14%' }, delay: 0.4 },
  { id: 2, initial: 'ف', name: 'فهد', status: 'av', bg: 'linear-gradient(150deg,#4eb38a,#1f7d5c)', pos: { top: '30%', insetInlineStart: '26%' }, delay: 0.45 },
  { id: 3, initial: 'ن', name: 'نورة', status: 'av', bg: 'linear-gradient(150deg,#7b8cf0,#3b54d6)', pos: { top: '38%', insetInlineStart: '20%' }, delay: 0.5 },
  { id: 4, initial: 'ل', name: 'ليلى', status: 'av', bg: 'linear-gradient(150deg,#d77fb8,#b14f8d)', pos: { top: '38%', insetInlineStart: '32%' }, delay: 0.55 },
  { id: 5, initial: 'خ', name: 'خالد — يركز', status: 'focus', bg: 'linear-gradient(150deg,#d8a14e,#b07a1f)', pos: { top: '18%', insetInlineEnd: '18%' }, delay: 0.5 },
  { id: 6, initial: 'م', name: 'ماجد', status: 'av', bg: 'linear-gradient(150deg,#4eb38a,#1f7d5c)', pos: { top: '46%', insetInlineEnd: '20%' }, delay: 0.55 },
  { id: 7, initial: 'ي', name: 'يوسف — غير متاح', status: 'busy', bg: 'linear-gradient(150deg,#6f7891,#474f66)', pos: { top: '46%', insetInlineEnd: '32%' }, delay: 0.6 },
  { id: 8, initial: 'ر', name: 'رهف', status: 'av', bg: 'linear-gradient(150deg,#5bb6c9,#2d8499)', pos: { bottom: '30%', insetInlineStart: '18%' }, delay: 0.6 },
  { id: 9, initial: 'ع', name: 'عبدالله — يركز', status: 'focus', bg: 'linear-gradient(150deg,#d8a14e,#b07a1f)', pos: { bottom: '18%', insetInlineStart: '30%' }, delay: 0.66 },
]

export const currentRoom = {
  name: 'قاعة الاجتماعات الكبرى',
  floor: 'الطابق الثاني',
  participantsCount: 5,
  recording: true,
  recordingStarted: '١٢:٤٠',
}

export const speakers = [
  { initial: 'س', name: 'سارة القحطاني', role: 'مديرة المنتج', bg: 'linear-gradient(150deg,#e6845b,#c75a32)', host: true },
]

export const participants = [
  { initial: 'ر', name: 'ريم الحربي', role: 'مطوّرة واجهات', bg: 'linear-gradient(150deg,#7b8cf0,#3b54d6)', you: true, mic: true },
  { initial: 'ف', name: 'فهد العتيبي', role: 'مهندس خلفية', bg: 'linear-gradient(150deg,#4eb38a,#1f7d5c)', mic: false },
  { initial: 'ن', name: 'نورة الزهراني', role: 'مصممة تجربة', bg: 'linear-gradient(150deg,#d8859a,#b14f6d)', mic: false },
  { initial: 'ل', name: 'ليلى السبيعي', role: 'محلّلة بيانات', bg: 'linear-gradient(150deg,#d77fb8,#b14f8d)', mic: true },
]

export const messages = [
  { initial: 'س', name: 'سارة', time: '١٢:٤١', text: 'أهلًا بالجميع، سنبدأ بمراجعة لوحة الطلبات.', bg: 'linear-gradient(150deg,#e6845b,#c75a32)' },
  { initial: 'ل', name: 'ليلى', time: '١٢:٤٢', text: 'جاهزة، شاركتُ الأرقام في القناة.', bg: 'linear-gradient(150deg,#d77fb8,#b14f8d)' },
  { initial: 'ر', name: 'أنت', time: '١٢:٤٣', text: 'تمام، سأعرض شاشة الواجهة بعد قليل.', bg: 'linear-gradient(150deg,#7b8cf0,#3b54d6)', mine: true },
]
