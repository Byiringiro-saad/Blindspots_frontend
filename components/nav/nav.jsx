import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineLogin } from "react-icons/ai";

import Logo from "../logo/logo";
import styles from "./nav.module.css";
import Card from "../card/card";
import Ad from "../ad/ad";

const Nav = ({ color }) => {
  const router = useRouter();
  const [blue, setBlue] = useState(false);
  const [relative, setRelative] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [card, setCard] = useState({
    title: "How to get sum and product of all numbers from an array.",
    language: "Python",
    reviews: 12,
  });

  const goToLogin = () => {
    if (localStorage.getItem("auth_token")) {
      localStorage.removeItem("auth_token");
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  const goToSubmit = () => {
    router.push("/submit");
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      setLoggedIn(true);
    }

    if (
      router.pathname.includes("waitlist") ||
      router.pathname.includes("explore") ||
      router.pathname.includes("submit")
    ) {
      setBlue(true);
    }

    if (router.pathname === "/") {
      setRelative(true);
    }
  }, [router.pathname]);

  return (
    <div
      className={styles.container}
      style={relative ? { position: "absolute" } : {}}
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <div
            className={styles.bars}
            style={
              relative ? { color: "var(--white)" } : { color: "var(--blue)" }
            }
            onClick={handleSideBar}
          >
            <FaBars />
          </div>
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
        <div
          className={styles.search}
          style={
            relative
              ? showSearch
                ? {
                    background: "var(--white)",
                    border: "2px solid var(--blue)",
                  }
                : { background: "var(--white)" }
              : showSearch
              ? {
                  background: "var(--gray)",
                  border: "2px solid var(--blue)",
                }
              : { background: "var(--gray)" }
          }
          onClick={handleShowSearch}
        >
          <FiSearch />
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
            {loggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
      {showSearch ? (
        <form className={styles.search}>
          <input type="text" placeholder="Search here" />
          <button>
            <FiSearch />
          </button>
        </form>
      ) : (
        <></>
      )}
      {sideBar ? (
        <div className={styles.sidebar}>
          <div className={styles.nav}>
            <div className={styles.top}>
              <Logo color="393939" />
              <IoClose className={styles.icon} onClick={handleSideBar} />
            </div>
            <ul>
              <li onClick={handleSideBar}>
                <Link href="/explore">Explore</Link>
              </li>
              <li onClick={handleSideBar}>
                <Link href="/waitlist">Join Waitlist</Link>
              </li>
              <li onClick={handleSideBar}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li onClick={handleSideBar}>
                <Link href="/submit">Submit</Link>
              </li>
              <li onClick={handleSideBar}>
                <Link href="/login">Login</Link>
              </li>
            </ul>
            <div className={styles.cards}>
              <p>Related</p>
              {[...Array(2)].map((x, index) => (
                <Card card={card} key={index} />
              ))}
              <Ad />
            </div>
          </div>
          <div className={styles.close} onClick={handleSideBar}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
