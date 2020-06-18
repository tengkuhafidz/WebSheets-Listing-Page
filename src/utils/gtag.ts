/* eslint-disable @typescript-eslint/camelcase */
declare global {
  interface Window {
    gtag: (e, action, label) => void
  }
}

export const gtagEventClick = (action: string, label?: string): void => {
  const { NODE_ENV } = process.env
  const isDevEnv = NODE_ENV === 'development'
  if (typeof window !== 'undefined' && !isDevEnv) {
    window.gtag('event', action, {
      event_category: 'engagement',
      event_label: label,
    })
  }
}
