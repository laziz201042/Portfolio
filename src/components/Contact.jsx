import React, { useRef } from "react";
import emailjs from "@emailjs/browser";   // ✅ to‘g‘ri kutubxona
import "./Contact.css";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7pd58as",   // EmailJS service ID
      "template_3qmbf9r",  // EmailJS template ID
      form.current,
      "7rMqyZtYuC8i1NpF-"    // EmailJS public key
    ).then(
      (result) => {
        alert("Message sent ✈️ successfully✅ ! ");
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <h2>Send Me Massage , 24h ⌚ to reply </h2>
     <form ref={form} onSubmit={sendEmail}>
  <input type="text" name="user_name" placeholder="Your Name" required />
  <input type="email" name="user_email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message 📝" required></textarea>
  <button type="submit">Send Message</button>
</form>
    </section>
  );
}

export default Contact;