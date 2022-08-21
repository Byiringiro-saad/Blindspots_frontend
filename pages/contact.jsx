import React from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import Forms from "../layouts/forms/forms";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleContact = async (data) => {
    setLoading(true);

    axios
      .post("/api/contact", {
        names: data.names,
        email: data.email,
        message: data.message,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      });
  };

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Forms text="Hi, Talk to us!">
        <div className={styles.content}>
          <p className={styles.header}>Contact Us</p>
          <form className={styles.form} onSubmit={handleSubmit(handleContact)}>
            <div className={styles.row}>
              <label htmlFor="names">Names</label>
              <input
                type="text"
                placeholder="Enter your names"
                {...register("names")}
                required
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                required
              />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">Message</label>
              <textarea
                cols="30"
                rows="7"
                placeholder="Enter your message"
                {...register("message")}
                required
              ></textarea>
            </div>
            <button type="submit">
              {loading ? (
                <Image src="/loader.svg" alt="loader" width={20} height={20} />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </Forms>
      <Footer />
    </div>
  );
};

export default Contact;
