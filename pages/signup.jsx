import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Nav from "../components/nav/nav";
import Forms from "../layouts/forms/forms";
import Footer from "../components/footer/footer";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleSignup = async (data) => {
    setLoading(true);
    setDisabled(true);
    axios
      .post("/api/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
        setDisabled(false);
      });
  };

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Forms text="Hi, Join the community!">
        <div className={styles.content}>
          <p className={styles.header}>Sign up</p>
          <form className={styles.form} onSubmit={handleSubmit(handleSignup)}>
            <div className={styles.row}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                required
                {...register("username")}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="passowrd">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                {...register("password")}
              />
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
            <button type="submit" disabled={disabled}>
              {loading ? (
                <Image src="/loader.svg" alt="loader" width={25} height={25} />
              ) : (
                "Sign up"
              )}
            </button>
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
