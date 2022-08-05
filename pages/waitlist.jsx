import React from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Waitlist.module.css";
import Two_Part from "../layouts/two-part/two_part";

const Waitlist = () => {
  const [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleWaitlist = async (data) => {
    axios.post("/api/waitlist", data).then((res) => {
      console.log(res.data);
      setLoading(true);
    });
  };

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Two_Part>
        <div className={styles.content}>
          <div className={styles.hero}>
            <p>
              We are developing a code review site for candidates interviewing
              in software companies like Google, Apple, Netflix etc. For
              example, visit out home page at
              https://www.interviewblindspots.com/waitlist Enter your contact
              information here if you want us to keep you updated.
            </p>
          </div>
          <form
            action="#"
            onSubmit={handleSubmit(handleWaitlist)}
            className={styles.form}
          >
            <div className={styles.row}>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                required
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="username">Username*</label>
              <input
                type="text"
                placeholder="Choose a username(We will try and reserve it when the site goes live)"
                {...register("username")}
                required
              />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">About*</label>
              <textarea
                cols="30"
                rows="8"
                placeholder="Add information about yourself"
                required
                {...register("about")}
              ></textarea>
            </div>
            <div className={styles.row}>
              <label htmlFor="website">
                Which website did you join us from? *
              </label>
              <input
                type="text"
                placeholder="Url/website name"
                {...register("website")}
                required
              />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">Painpoints</label>
              <textarea
                cols="30"
                rows="8"
                placeholder="What more features would you like to see in current interview
                preparation sites? "
                {...register("painpoints")}
              ></textarea>
            </div>
            <div className={styles.row}>
              <button type="submit">
                {loading ? (
                  <Image
                    src="/loader.svg"
                    alt="loader"
                    width={20}
                    height={20}
                  />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Waitlist;
