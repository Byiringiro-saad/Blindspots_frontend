import React from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "../components/nav/nav";
import Forms from "../layouts/forms/forms";
import Footer from "../components/footer/footer";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Forms text="Hi, Join the community!">
        <div className={styles.content}>
          <p className={styles.header}>Sign up</p>
          <form className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.row}>
              <label htmlFor="passowrd">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className={styles.recap}>
              <div className={styles.select}>
                <input type="checkbox" />I am not a robot
              </div>
              <Image
                src="/vectors/reCap.svg"
                width={50}
                height={50}
                alt="reCAPTCHA"
              />
            </div>
            <div className={styles.terms}>
              <input type="checkbox" />
              <p>
                I agree with <span>Terms</span> and
                <span> Privacy </span>
              </p>
            </div>
            <button type="button">Sign up</button>
          </form>
          <p>
            Already have an account!? <Link href="/login">Login here</Link>
          </p>
        </div>
      </Forms>
      <Footer />
    </div>
  );
};

export default Signup;
