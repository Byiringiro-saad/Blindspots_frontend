import React from "react";
import Image from "next/image";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { MdOutlineWavingHand } from "react-icons/md";

import styles from "./forms.module.css";

const Forms = ({ children, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>{children}</div>
      <div className={styles.right}>
        <div className={styles.layer}>
          <div className={styles.hero}>
            <MdOutlineWavingHand className={styles.icon} />
            <p>{text}</p>
          </div>
          <div className={styles.quotes}>
            <div className={styles.num}>
              <p>01</p>
            </div>
            <div className={styles.content}>
              <p>
                If you are looking for a job, then you should go over code
                posted by others and study the comments on them.
              </p>
            </div>
            <div className={styles.navigate}>
              <AiOutlineLeft />
              <div className={styles.line}></div>
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/banner.png"
            width={700}
            height={700}
            alt="banner"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
