import React, { useState } from "react";
import Image from "next/image";

//languages
import {
  SiJavascript,
  SiJava,
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiGo,
  SiAsana,
  SiKotlin,
} from "react-icons/si";
import { DiRubyRough, DiSwift } from "react-icons/di";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Nav from "../components/nav/nav";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Language from "../components/language/language";
import Person from "../components/person/person";
import Developer from "../components/developer/developer";
import Footer from "../components/footer/footer";

export default function Home() {
  const [people, setPeople] = useState([
    {
      name: "Mary Freund",
      occupation: "Software engineer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      review:
        "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea ",
    },
  ]);

  const [developers, setDeveopers] = useState([
    {
      name: "John Dukes",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      linkedIn: "",
      github: "",
    },
    {
      name: "Frances Swann",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      linkedIn: "",
      github: "",
    },
    {
      name: "Corina McCoy",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      linkedIn: "",
      github: "",
    },
    {
      name: "Eddie Lake",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      linkedIn: "",
      github: "",
    },
    {
      name: "James Hall",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      linkedIn: "",
      github: "",
    },
    {
      name: "Jerry Helfer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      linkedIn: "",
      github: "",
    },
  ]);

  return (
    <div className={styles.container}>
      <Nav color="f9f9f9" />
      <div className={styles.hero}>
        <p className={styles.header}>What would seniors say about your code!</p>
        <p>
          Most companies do not tell why they rejected you. We do. <br /> Submit
          your code and get feedback.
        </p>
        <button>Join now</button>
        <div className={styles.languages}>
          <Language bottom={150} left={150} size={2.5}>
            <SiJavascript />
          </Language>
          <Language bottom={200} left={230} size={2.5}>
            <SiJava />
          </Language>
          <Language bottom={100} left={230} size={2.5}>
            <SiPython />
          </Language>
          <Language bottom={80} left={310} size={2.5}>
            <SiTypescript />
          </Language>
          <Language bottom={250} left={310} size={2.5}>
            <DiRubyRough />
          </Language>
          <Language bottom={150} left={350} size={2.5}>
            <SiCplusplus />
          </Language>
          <Language bottom={300} left={410} size={2.5}>
            <DiSwift />
          </Language>
          <Language bottom={180} left={480} size={8}>
            <SiGo />
          </Language>
          <Language bottom={150} left={510} size={2.5}>
            <SiAsana />
          </Language>
          <Language bottom={50} left={460} size={2.5}>
            <SiKotlin />
          </Language>
        </div>
        <div className={styles.images}>
          <div className={styles.one}>
            <Image
              src="/images/banner1.png"
              alt="banner"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.two}>
            <Image
              src="/images/banner2.png"
              alt="banner"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className={styles.using}>
        <Header>Using CodingBlindSpots</Header>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image
                src="/vectors/three.svg"
                width={80}
                height={80}
                alt="banner"
              />
            </div>
            <p>Submit a coding question and your solution.</p>
          </div>
          <div className={styles.next}>
            <AiOutlineRight />
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image
                src="/vectors/two.svg"
                width={80}
                height={80}
                alt="banner"
              />
            </div>
            <p>
              Hold tight while experienced professionals review your submission.
            </p>
          </div>
          <div className={styles.next}>
            <AiOutlineRight />
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image
                src="/vectors/one.svg"
                width={80}
                height={80}
                alt="banner"
              />
            </div>
            <p>Come back to review your feedback.</p>
          </div>
        </div>
      </div>
      <div className={styles.outcomes}>
        <Header>Achieved Outcomes</Header>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image
                src="/vectors/six.svg"
                width={80}
                height={80}
                alt="banner"
              />
            </div>
            <p className={styles.num}>200+</p>
            <p>People who can provide feedback for your codes.</p>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image
                src="/vectors/five.svg"
                width={80}
                height={80}
                alt="banner"
              />
            </div>
            <p className={styles.num}>4000+</p>
            <p>Reviews of questions and solutions you can learn from.</p>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image
                src="/vectors/four.svg"
                width={80}
                height={80}
                alt="banner"
              />
            </div>
            <p className={styles.num}>10+</p>
            <p>Languages you can get reviews on at CodingBlindSpots.</p>
          </div>
        </div>
      </div>
      <div className={styles.people}>
        <div className={styles.navigate}>
          <AiOutlineLeft />
        </div>
        {people.map((person, index) => (
          <Person key={index} person={person} />
        ))}
        <div className={styles.navigate}>
          <AiOutlineRight />
        </div>
      </div>
      <div className={styles.about}>
        <Header>About CodingBlindSpots</Header>
        <p>
          Companies rarely give feedback on coding interviews. On
          Interviewblindspots, post a coding question and your solution,
          experienced industry professionals will look at your code and provide
          feedback, explaining what went right and what went wrong. Improve your
          interview performance and increase your compensation.
        </p>
        <p>Built by a distrubuted team who have never met in person.</p>
        <div className={styles.developers}>
          {developers.map((developer, index) => (
            <Developer developer={developer} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
