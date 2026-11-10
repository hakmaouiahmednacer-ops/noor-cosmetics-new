
import React from "react";

const WhatsAppButton: React.FC = () => {
  const phone = "212649415236";
  const message =
    "Bonjour Noor Cosmetics, je souhaite avoir des informations sur vos produits.";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Noor Cosmetics sur WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        textDecoration: "none",
      }}
    >
      <svg viewBox="0 0 32 32" width="34" height="34" fill="currentColor">
        <path d="M16.04 3C9.02 3 3.3 8.72 3.3 15.74c0 2.25.59 4.45 1.72 6.4L3.2 29l7.02-1.78a12.7 12.7 0 0 0 5.82 1.4h.01c7.02 0 12.74-5.72 12.74-12.74C28.79 8.86 23.06 3.14 16.04 3zm0 23.48h-.01c-1.85 0-3.66-.5-5.25-1.45l-.38-.23-4.17 1.06 1.11-4.06-.25-.41a10.68 10.68 0 0 1-1.64-5.65c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.13 7.56c0 5.9-4.8 10.74-10.71 10.74zm5.87-8.03c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.62-.52-.54-.73-.55h-.62c-.21 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.68s1.17 3.11 1.33 3.33c.16.21 2.3 3.52 5.58 4.94.78.34 1.39.55 1.86.7.78.25 1.49.21 2.05.13.63-.1 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
