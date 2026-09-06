import { useState } from "react";
import { useReveal } from "../hooks/useReveal.js";

export default function Contact() {
  const [leftRef, leftVisible] = useReveal();
  const [formRef, formVisible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — wire this up to a form service (e.g. Formspree) or your own backend to go live.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div ref={leftRef} className={`reveal ${leftVisible ? "visible" : ""}`}>
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">
            Open to internships, freelance work, and collaboration.
          </p>
          <ul className="contact-list">
            <li>
              <span className="k">EMAIL</span>
              <span>priyahariyale4@gmail.com</span>
            </li>

            <li>
              <span className="k">GITHUB</span>
              <span>https://github.com/Priiyaa56</span>
            </li>
            <li>
              <span className="k">LINKEDIN</span>
              <span>
                <a href="  https://www.linkedin.com/in/priya-h-b00900333/" target = "_blank" rel = "noopener noreferrer">LinkedIn
                </a>
              </span>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          className={`reveal ${formVisible ? "visible" : ""}`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="cname">Name</label>
          <input
            id="cname"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="cemail">Email</label>
          <input
            id="cemail"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="cmsg">Message</label>
          <textarea
            id="cmsg"
            name="message"
            rows="4"
            placeholder="Say hello..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "6px" }}
          >
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
