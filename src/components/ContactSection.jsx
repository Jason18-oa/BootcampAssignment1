import { useState } from "react";

export default function ContactSection({ email }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="contact-section" id="contact">
      <p className="section-label"> CONTACT ME</p>
      <h2>Have an idea worth building?</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          aria-label="Your name"
          autoComplete="name"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          aria-label="Your email"
          autoComplete="email"
          required
        />
        <textarea
          name="message"
          placeholder="Tell me about your idea..."
          aria-label="Your message"
          rows="5"
          required
        />
        <button type="submit" className="primary-button">
          Send message ↗
        </button>
        {sent && (
          <p className="form-note" aria-live="polite">
            Your email application should now be open. Send the message from
            there.
          </p>
        )}
      </form>
    </section>
  );
}
