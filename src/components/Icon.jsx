export default function Icon({ name, size = 20, className = '', ...props }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, className, ...props }

  if (name === 'github') return <svg {...shared}><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c0-1 .1-1.5-.5-2 3.2-.4 6.5-1.6 6.5-7a5.5 5.5 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.2-.4-4 1.5a14 14 0 0 0-7 0C5.6 1.6 4.4 2 4.4 2a5 5 0 0 0-.1 3.8A5.5 5.5 0 0 0 2.8 9.6c0 5.4 3.3 6.6 6.5 7-.5.5-.6 1.1-.5 2V22" /></svg>
  if (name === 'arrow-up-right') return <svg {...shared}><path d="M6 18 18 6M6 6h12v12" /></svg>
  if (name === 'arrow-down') return <svg {...shared}><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
  if (name === 'arrow-right') return <svg {...shared}><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
  if (name === 'code') return <svg {...shared}><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></svg>
  if (name === 'layers') return <svg {...shared}><path d="m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></svg>
  if (name === 'terminal') return <svg {...shared}><rect x="2" y="3" width="20" height="18" rx="3" /><path d="m6 8 4 4-4 4m7 0h5" /></svg>
  if (name === 'spark') return <svg {...shared}><path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8Z" /></svg>
  if (name === 'close') return <svg {...shared}><path d="m6 6 12 12M18 6 6 18" /></svg>
  if (name === 'menu') return <svg {...shared}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  if (name === 'pause') return <svg {...shared}><path d="M9 5v14M15 5v14" /></svg>
  if (name === 'play') return <svg {...shared}><path d="m8 4 12 8-12 8Z" /></svg>
  if (name === 'check') return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>
  if (name === 'react') return <svg {...shared}><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>
  if (name === 'html' || name === 'css') return <svg {...shared}><path d="m3 2 1.8 18L12 22l7.2-2L21 2Z" />{name === 'html' ? <path d="M16 7H8l.5 5h7l-.5 4-3 1-3-1-.2-2" /> : <path d="M8 7h8l-.4 4H9l-.2 3m6.8-3-.6 5-3 1-3-1" />}</svg>
  if (name === 'javascript') return <svg {...shared}><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M11 9v8a2 2 0 0 1-4 0m12-7c-3-2-5 1-3 3l2 1c3 2 0 5-3 3" /></svg>
  if (name === 'php') return <svg {...shared}><ellipse cx="12" cy="12" rx="11" ry="7" /><path d="m5 16 1-7h2c3 0 2 4 0 4H6m5 1 1-7m-.5 4h2l-.5 3m3 2 1-7h2c3 0 2 4 0 4h-2" /></svg>
  if (name === 'laravel') return <svg {...shared}><path d="m3 3 5-2 5 2v8l5 3-5 3-5-3V5L3 3v12l10 6 8-5V8l-4-2-4 2 4 2 4-2M8 5l5-2m4 7v4m-4 3v4" /></svg>
  if (name === 'git') return <svg {...shared}><rect x="4.5" y="4.5" width="15" height="15" rx="2" transform="rotate(45 12 12)" /><path d="m8 4 4 4v9m0-9 5 5" /><circle cx="12" cy="8" r="1.2" /><circle cx="12" cy="17" r="1.2" /><circle cx="17" cy="13" r="1.2" /></svg>
  if (name === 'docker') return <svg {...shared}><path d="M2 12h15c3 0 4-2 4-4 2 1 3 4 0 6-1 5-5 7-10 7-5 0-8-3-9-9Z" /><path d="M4 8h4v4H4zm4 0h4v4H8zm4 0h4v4h-4zM8 4h4v4H8zm4 0h4v4h-4zm0-4h4v4h-4z" /></svg>
  return null
}
