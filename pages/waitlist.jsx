import React from "react";

import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Waitlist.module.css";
import Two_Part from "../layouts/two-part/two_part";

const Waitlist = () => {
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
          <form action="#" className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="email">Email*</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.row}>
              <label htmlFor="username">Username*</label>
              <input
                type="text"
                placeholder="Choose a username(We will try and reserve it when the site goes live) "
              />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">About*</label>
              <textarea
                cols="30"
                rows="8"
                placeholder="Add information about yourself"
              ></textarea>
            </div>
            <div className={styles.row}>
              <label htmlFor="website">
                Which website did you join us from? *
              </label>
              <input type="text" placeholder="Url/website name" />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">Painpoints</label>
              <textarea
                cols="30"
                rows="8"
                placeholder="What more features would you like to see in current interview
                preparation sites? "
              ></textarea>
            </div>
          </form>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Waitlist;
