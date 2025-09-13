import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or want to collaborate? 
          We’d love to hear from you!
        </p>

        <form className="contactForm">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
