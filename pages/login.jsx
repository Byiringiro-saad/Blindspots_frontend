import React from "react";
import Link from "next/link";

import Forms from "../layouts/forms";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Forms text="Hi, Welcome back!">
        <div className={styles.content}>
          <p className={styles.header}>Login</p>
          <form className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className={styles.row}>
              <label htmlFor="passowrd">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <Link href="/forgotpasswrd">Forgot password!</Link>
            <button type="button">Login</button>
          </form>
          <p>
            Don't have an account!? <Link href="/signup">Signup here</Link>
          </p>
        </div>
      </Forms>
      <Footer />
    </div>
  );
};

export default Login;
