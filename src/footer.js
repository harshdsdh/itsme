import React from "react";
import axios from "axios";
const PORT = process.env.PORT || 5000;
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <FooterContent />
    </div>
  );
};
const handleSubmit = async e => {
  e.preventDefault();
  axios
    .post("/", {
      name: document.getElementsByName("name")[0].value,
      email: document.getElementsByName("email")[0].value,
      subject: document.getElementsByName("subject")[0].value,
      message: document.getElementsByName("message")[0].value
    })
    .then(function(response) {
      document.getElementsByName("name")[0].value = "";
      document.getElementsByName("email")[0].value = "";
      document.getElementsByName("subject")[0].value = "";
      document.getElementsByName("message")[0].value = "";
      console.log(response.data + "from footer");
    })
    .catch(function(error) {
      console.log(error);
    });
};
function FooterContent(props) {
  return (
    <div>
      <section class="contact" data-aos="zoom-in">
        <form onSubmit={handleSubmit} method="POST" class="contact__form">
          <h1 className="contact__form__title">Contact</h1>
          <input
            type="text"
            class="contact__form__input"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            className="contact__form__input"
            name="email"
            placeholder="Your email"
            required
          />
          <input
            type="text"
            className="contact__form__input"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows="5"
            class="contact__form__textarea"
            placeholder="Message..."
            required
          />

          <button type="submit" class="contact__form__btn">
            Send Message
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xmlSpace="preserve"
            >
              <path
                id="paper-plane-icon"
                d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z
M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"
              />
            </svg>
          </button>
        </form>
      </section>
    </div>
  );
}
export default Footer;
