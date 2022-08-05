import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { MdDone, MdErrorOutline } from "react-icons/md";

import Nav from "../components/nav/nav";
import Forms from "../layouts/forms/forms";
import Footer from "../components/footer/footer";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [normal, setNormal] = useState(true);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();

  const handleSignup = async (data) => {
    setLoading(true);
    setDisabled(true);
    setError(false);
    setSuccess(false);
    setNormal(false);

    axios
      .post("/api/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data.id) {
          setSuccess(true);
          setError(false);
          setTimeout(() => {
            router.push("/login");
          }, 2000);
          reset({ username: "", password: "", email: "" });
          toast.success("Welcome abroad!", {
            position: "top-right",
            autoClose: 2000,
            pauseOnHover: false,
          });
        } else {
          setSuccess(false);
          setError(true);
          toast.error("User already exists!", {
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
              {normal && "Signup"}
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
