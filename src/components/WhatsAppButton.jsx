import React from "react";
import { WhatsAppIcon } from "./Icons.jsx";
import { WHATSAPP_LINK } from "../config.js";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
