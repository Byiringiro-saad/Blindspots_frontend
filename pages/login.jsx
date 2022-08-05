import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { MdDone, MdErrorOutline } from "react-icons/md";

import Forms from "../layouts/forms/forms";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [normal, setNormal] = useState(true);

  const router = useRouter();
  const cookies = new Cookies();
  const { register, handleSubmit, reset } = useForm();

  const handleLogin = async (data) => {
    setLoading(true);
    setDisabled(true);
    setError(false);
    setSuccess(false);
    setNormal(false);

    axios
      .post("/api/login", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        if (res.data.auth_token) {
          setSuccess(true);
          setError(false);
          setTimeout(() => {
            cookies.set("auth_token", res.data.auth_token, { path: "/" });
            router.push("/explore");
          }, 2000);
          reset({ username: "", password: "" });
          toast.success("Welcome back!", {
            position: "top-right",
            autoClose: 2000,
            pauseOnHover: false,
          });
        } else {
          setSuccess(false);
          setError(true);
          toast.error("Invalid credentials!", {
            position: "top-right",
            autoClose: 2000,
            pauseOnHover: false,
          });
        }
      })
      .finally(() => {
        setLoading(false);
        setDisabled(false);
      });
  };

  useEffect(() => {
    if (cookies.get("auth_token")) {
      router.push("/explore");
    }
  });

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
            <button
              type="submit"
              disabled={disabled}
              style={
                error
                  ? { background: "var(--red)" }
                  : success
                  ? { background: "var(--success)" }
                  : {}
              }
            >
              {loading && (
                <Image src="/loader.svg" alt="loader" width={25} height={25} />
              )}
              {success && <MdDone className={styles.icon} />}
              {error && <MdErrorOutline className={styles.icon} />}
              {normal && "Login"}
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
