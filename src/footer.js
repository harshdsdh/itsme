import React from "react";

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <FooterContent />
    </div>
  );
};
function FooterContent(props) {
  return (
    <div>
      <section class="contact" data-aos="zoom-in">
        <form action="/" method="POST" class="contact__form">
          <h1 className="contact__form__title">Contact</h1>
          <input
            type="text"
            class="contact__form__input"
            name="name"
            placeholder="Your name"
          />
          <input
            type="email"
            class="contact__form__input"
            name="email"
            placeholder="Your email"
          />
          <input
            type="text"
            class="contact__form__input"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            rows="5"
            class="contact__form__textarea"
            placeholder="Message..."
          />

          <button class="contact__form__btn" disabled>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
export default Footer;
