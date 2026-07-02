const iconClass = 'w-[22px] h-[22px]'

export const SearchIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
  </svg>
)

export const ProfileIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M5 20c0-4 3.5-6 7-6s7 2 7 6" strokeLinecap="round" />
  </svg>
)

export const CartIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 6h15l-1.5 9H7.5L6 6z" />
    <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none" />
    <path d="M6 6L5 3H2" strokeLinecap="round" />
  </svg>
)

export const MenuIcon = ({ className = iconClass }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
)

export const ChevronIcon = ({ className = 'w-4 h-4', direction = 'right' }) => (
  <svg
    className={`${className} ${direction === 'left' ? 'rotate-180' : direction === 'down' ? 'rotate-90' : ''}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const BinIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 7h16M9 7V5h6v2M7 7l1 12h8l1-12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const StarIcon = ({ className = 'w-3.5 h-3.5', filled = true }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
)

export const CrossIcon = ({ className = 'w-3 h-3' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
)

export const QualityIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 4l14 6v12c0 10-6 16-14 20C16 32 10 26 10 22V10l14-6z" />
    <path d="M18 24l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ExchangeIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 18h22M28 12l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 30H16M20 24l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SupportIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 22a14 14 0 0128 0v6a6 6 0 01-6 6h-2l-4 6v-6h-8a6 6 0 01-6-6v-6z" />
  </svg>
)
