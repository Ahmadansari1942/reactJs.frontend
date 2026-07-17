// Central place for site details. Change these once and they update everywhere.

export const SITE = {
  name: "Qalam",
  tagline: "Stories worth reading",
  description:
    "Qalam is a blog on technology, health, travel, food, business, education, sports, entertainment, science and lifestyle.",
};

export const CONTACT = {
  email: "ahmad.shahid4219@gmail.com",
  phoneDisplay: "0324 5870783",
  // WhatsApp needs the number in international format with no leading 0.
  whatsappNumber: "923245870783",
  githubRepo: "https://github.com/Ahmadansari1942/reactJs.frontend",
};

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  "Hi! I came across your Qalam blog and wanted to reach out."
)}`;

// EmailJS lets the contact form send an email straight from the browser,
// with no backend server. Fill these in from your EmailJS dashboard
// (see README.md → "Connect the contact form to your email").
// Until they're filled in, the contact form automatically falls back to a
// plain mailto: link so the button always works.
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

export const isEmailJsConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey
);
