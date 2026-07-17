import React from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const SunIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const HeartIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20.5s-7.5-4.6-10-9.3C.4 8 2 4.5 5.4 4c2-.3 4 .7 5.1 2.4C11.6 4.7 13.6 3.7 15.6 4c3.4.5 5 4 3.4 7.2C16.5 15.9 12 20.5 12 20.5z" />
  </svg>
);

export const ArrowLeftIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.6 21.1 2.9 13.4 2.9 3.1 2.9 2.5 3.4 2 4 2h3.4c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1L6.6 10.8z" />
  </svg>
);

export const ShareIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="18" cy="5" r="2.6" />
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="18" cy="19" r="2.6" />
    <path d="M8.3 10.7l7.4-4.2M8.3 13.3l7.4 4.2" />
  </svg>
);

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 32 32" {...p}>
    <path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.24.62 4.34 1.7 6.14L4 29l8.06-1.66A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3zm6.9 16.9c-.3.83-1.5 1.53-2.44 1.73-.65.14-1.5.25-4.36-.93-3.66-1.5-6.02-5.2-6.2-5.44-.18-.24-1.48-1.97-1.48-3.76 0-1.78.94-2.66 1.27-3.02.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.63.3.72 1.02 2.5 1.11 2.68.09.18.15.4.03.64-.12.24-.18.4-.36.6-.18.22-.38.48-.54.64-.18.18-.37.38-.16.74.21.36.93 1.55 2 2.5 1.38 1.23 2.54 1.62 2.9 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.4.24-.36.48-.3.8-.18.33.12 2.1 1 2.46 1.18.36.18.6.27.69.42.09.15.09.85-.21 1.68z" />
  </svg>
);

export const CalendarIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);
