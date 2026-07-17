import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import InkUnderline from "../components/InkUnderline.jsx";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons.jsx";
import { CONTACT, EMAILJS, WHATSAPP_LINK, isEmailJsConfigured } from "../config.js";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error" | "fallback"

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const openMailtoFallback = () => {
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      form.subject || `Message from ${form.name || "your blog"}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("fallback");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (!isEmailJsConfigured) {
      openMailtoFallback();
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "New message from Qalam contact form",
          message: form.message,
          to_email: CONTACT.email,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="container">
      <div className="about-hero">
        <span className="eyebrow">Get in touch</span>
        <h1><InkUnderline>Let's talk</InkUnderline></h1>
        <p>Questions, story ideas, or feedback on a post — send a message and it'll
          reach us directly, by email or WhatsApp, whichever you prefer.</p>
      </div>

      <div className="contact-grid">
        <div className="form-card">
          {status === "success" && (
            <div className="status-banner success">
              Message sent — thanks for reaching out! We'll reply by email soon.
            </div>
          )}
          {status === "fallback" && (
            <div className="status-banner success">
              Your email app should now be open with the message pre-filled — just hit send.
            </div>
          )}
          {status === "error" && (
            <div className="status-banner error">
              Something went wrong sending that. Please try again, or use the WhatsApp
              button instead.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" required value={form.name} onChange={update("name")} placeholder="Ali Raza" />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" value={form.subject} onChange={update("subject")} placeholder="Loved your post on…" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Write your message here…"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p className="form-note">
              {isEmailJsConfigured
                ? "Sent straight to our inbox — no email app needed."
                : "This opens your email app with the message pre-filled, addressed to " +
                  CONTACT.email +
                  "."}
            </p>
          </form>
        </div>

        <div className="info-card">
          <h3>Reach us directly</h3>
          <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem" }}>
            Prefer not to fill out a form? Use whichever of these is easiest.
          </p>
          <ul className="info-list">
            <li>
              <span className="info-icon"><MailIcon /></span>
              <div>
                <div>Email</div>
                <a href={`mailto:${CONTACT.email}`} style={{ color: "var(--pine)", fontWeight: 600 }}>
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li>
              <span className="info-icon"><PhoneIcon /></span>
              <div>
                <div>Phone</div>
                <strong>{CONTACT.phoneDisplay}</strong>
              </div>
            </li>
          </ul>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-rust btn-block"
          >
            <WhatsAppIcon style={{ width: 18, height: 18, fill: "#fff" }} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
