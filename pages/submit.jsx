import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Editor from "@monaco-editor/react";

import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import styles from "../styles/Submit.module.css";
import Two_Part from "../layouts/two-part/two_part";

const Submit = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const [languages, setLanguages] = useState([
    "javascript",
    "java",
    "python",
    "ruby",
    "swift",
    "go",
    "rust",
    "php",
    "clicke",
  ]);

  const { register, handleSubmit, reset } = useForm();

  const handleCodeChange = (e) => {
    setCode(e);
  };

  const handleSubmission = async (data) => {
    setLoading(true);
    axios
      .post("/api/submit", {
        title: data.title,
        language: data.language,
        text: code,
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.id) {
          toast.success("Submission Successful", {
            position: "top-right",
            autoClose: 2000,
            pauseOnHover: false,
          });
          reset({ title: "", position: "", description: "" });
          setCode("");
          router.push("/explore");
        } else {
          toast.error("Submission Failed", {
            position: "top-right",
            autoClose: 2000,
            pauseOnHover: false,
          });
        }
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      toast.error("Sign in first!", {
        toastId: "submit",
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: false,
      });
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Nav color="393939" />
      <Two_Part>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>Make a new Submission</p>
          </div>
          <form
            action="#"
            className={styles.form}
            onSubmit={handleSubmit(handleSubmission)}
          >
            <div className={styles.row}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Choose a short descriptive title"
                {...register("title")}
                required
              />
            </div>
            <div className={styles.row}>
              <select name="language" {...register("language")} required>
                {languages.map((lang, index) => (
                  <option value={`${lang}`} key={index}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.row}>
              <label htmlFor="title">
                What position are you interviewing for?
              </label>
              <input
                type="text"
                placeholder="e.g. Junior, senior, Principal Engineer..."
                {...register("position")}
              />
            </div>
            <div className={styles.bigRow}>
              <label htmlFor="email">Description</label>
              <textarea
                cols="30"
                rows="7"
                placeholder="Describe your question here"
                {...register("description")}
              ></textarea>
            </div>
            <div className={styles.editorRow}>
              <label htmlFor="codes">Solution</label>
              <Editor
                height={`100%`}
                width={`100%`}
                language="javascript"
                value={code}
                theme="vs-light"
                defaultValue="// Write codes here"
                onChange={handleCodeChange}
                options={{
                  lineNumbers: true,
                  minimap: { enabled: false },
                  scrollbar: {
                    vertical: "hidden",
                    horizontal: "hidden",
                  },
                  wordWrap: "on",
                  fontSize: "12px",
                }}
              />
            </div>
            <p>
              In order for us to give you feedback on your code, please ensure
              that you submit the complete question along with your solution.
              Submissions with inadequate context will be ignored.
            </p>
            <button type="submit">
              {loading ? (
                <Image src="/loader.svg" alt="loader" width={20} height={20} />
              ) : (
                "Submit your code"
              )}
            </button>
          </form>
        </div>
      </Two_Part>
      <Footer />
    </div>
  );
};

export default Submit;
