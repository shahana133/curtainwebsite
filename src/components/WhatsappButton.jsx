import React from "react";
import "../styles/home.css"; // Or separate CSS

function WhatsappButton() {
  const phoneNumber = "+919526135102"; // Replace with your number
  const message = "Hello! I want to know more about your curtains.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsappButton;