import React from "react";
import "../styles/home.css";

function Contact() {

  const phone1 = "9526135102";
  const phone2 = "9526135101";

  return (
    <section className="contact-page">

      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        We are here to help you with premium curtain solutions
      </p>

      <div className="contact-container">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="contact-info">
          <h3>Contact Details</h3>

          <p><strong>📧 Email:</strong><br/> cwpattikkara@gmail.com</p>

          <p><strong>📞 Phone:</strong><br/> +91 9526135102</p>

          <p><strong>📞 Alt Phone:</strong><br/> +91 9526135101</p>

          <p><strong>📍 Location:</strong><br/> Pattikkara, Kerala</p>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/91${phone1}?text=Hello I want to enquire about curtains`}
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form">
          <h3>Send Message</h3>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

    </section>
  );
}

export default Contact;