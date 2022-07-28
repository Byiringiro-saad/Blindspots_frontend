import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineLogin } from "react-icons/ai";

import Logo from "../logo/logo";
import styles from "./nav.module.css";

const Nav = ({ color }) => {
  const router = useRouter();
  const [blue, setBlue] = useState(false);

  const goToLogin = () => {
    router.push("/login");
  };

  const goToSubmit = () => {
    router.push("/submit");
  };

  useEffect(() => {
    if (
      router.pathname.includes("waitlist") ||
      router.pathname.includes("submit")
    ) {
      setBlue(true);
    }
  }, [router.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo color={color} />
        <div className={styles.links}>
          <Link href="/explore">
            <p style={{ color: `#${color}` }}>Explore</p>
          </Link>
          <Link href="/waitlist">
            <p style={{ color: `#${color}` }}>Join Waitlist</p>
          </Link>
          <Link href="/contact">
            <p style={{ color: `#${color}` }}>Contact Us</p>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={styles.search}
          style={blue ? { background: "#EFEFEF" } : {}}
        >
          <FiSearch />
          <input type="text" placeholder="Search here" />
        </div>
        <button
          onClick={goToSubmit}
          style={
            blue ? { background: "var(--blue)", color: "var(--white)" } : {}
          }
        >
          <AiOutlinePlus
            className={styles.logo}
            style={blue ? { color: "var(--white)" } : {}}
          />
          Submit
        </button>
        <button
          onClick={goToLogin}
          style={
            blue ? { background: "var(--blue)", color: "var(--white)" } : {}
          }
        >
          <AiOutlineLogin
            className={styles.logo}
            style={blue ? { color: "var(--white)" } : {}}
          />
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
