import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Forms from "../layouts/forms/forms";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    setLoading(true);
    setDisabled(true);
    axios
      .post("/api/login", {
        username: data.username,
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
      <Forms text="Hi, Welcome back!">
        <div className={styles.content}>
          <p className={styles.header}>Login</p>
          <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
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
              <label htmlFor="passowrd">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                required
              />
            </div>
            <Link href="/forgotpasswrd">Forgot password!</Link>
            <button type="submit" disabled={disabled}>
              {loading ? (
                <Image src="/loader.svg" alt="loader" width={25} height={25} />
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p>
            Dont have an account!? <Link href="/signup">Signup here</Link>
          </p>
        </div>
      </Forms>
      <Footer />
    </div>
  );
};

export default Login;
