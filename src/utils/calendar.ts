export type CalendarPopupOptions = {
  width?: number;
  height?: number;
};

export function openCalendarPopup(url: string, options: CalendarPopupOptions = {}) {
  const width = options.width ?? 1200;
  const height = options.height ?? 800;

  // Screen positions for dual-monitor setups
  const dualScreenLeft = (window as any).screenLeft !== undefined ? (window as any).screenLeft : (window as any).screenX;
  const dualScreenTop = (window as any).screenTop !== undefined ? (window as any).screenTop : (window as any).screenY;

  // Current viewport size
  const w = window.innerWidth || document.documentElement.clientWidth || (window as any).screen?.width;
  const h = window.innerHeight || document.documentElement.clientHeight || (window as any).screen?.height;

  const left = w ? dualScreenLeft + (w - width) / 2 : 0;
  const top = h ? dualScreenTop + (h - height) / 2 : 0;

  const features = [
    'scrollbars=yes',
    'resizable=yes',
    `width=${width}`,
    `height=${height}`,
    `top=${top}`,
    `left=${left}`,
    'noopener',
  ].join(',');

  const popup = window.open(url, 'calendar-popup', features);
  if (popup) {
    popup.focus();
    return true;
  }
  // Popup blocked: fallback to opening a new tab without disrupting current page
  window.open(url, '_blank', 'noopener,noreferrer');
  return false;
}
