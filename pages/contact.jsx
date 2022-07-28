import React from "react";

import Forms from "../layouts/forms";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Forms text="Hi, Talk to us!">
        <div className={styles.content}>
          <p className={styles.header}>Contact Us</p>
          <form className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="names">Names</label>
              <input type="text" placeholder="Enter your names" />
            </div>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">Message</label>
              <textarea
                cols="30"
                rows="7"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="button">Send</button>
          </form>
        </div>
      </Forms>
      <Footer />
    </div>
  );
};

export default Contact;
