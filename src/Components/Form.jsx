import React, { useState } from "react";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import { ImTelegram } from "react-icons/im";
import { AiFillTwitterSquare } from "react-icons/ai";
import axios from "axios";

const Form = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function setCorrect() {
    const sendEmail = async () => {
      try {
        const response = await axios.post("http://3001/send-email", {
          to: formik.values.email,
          subject: "Test Email",
          message: "This is a test email",
        });
        console.log(response.data); // Email sent successfully
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };

    if (formik.values.email && formik.values.userName) {
      setIsCorrect(true);
      sendEmail();
    } else {
      setCorrect(false);
    }
  }

  return (
    <section className="py-[100px] w-full">
      <div className="container flex justify-center items-center text-center flex-col gap-9">
        <h1 className="text-6xl ">Welcome to Shhhh Beta</h1>

        {isCorrect ? (
          <h1>
            That Thanks For option in ! Once the Token is live , and beta
            version is up We will send you a notifying mail. For other info join
            us on tg and twitter.
          </h1>
        ) : (
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-3xl">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                placeholder="sample@gmail.com"
                className="bg-black border-white font-serif border rounded-md px-5 py-3 focus:border-white"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="userName" className="text-3xl">
                Telegram Username
              </label>
              <input
                id="userName"
                name="userName"
                type="url"
                onChange={formik.handleChange}
                value={formik.values.userName}
                required
                placeholder="https://t.me/eth"
                className="bg-black font-serif border-white border rounded-md px-5 py-3 focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="px-9 py-4 font-serif bg-white text-black rounded-lg"
              onClick={setCorrect}
            >
              Submit
            </button>
          </form>
        )}

        <div className="flex justify-between items-center gap-6">
          <a href="" className="text-3xl">
            <ImTelegram />
          </a>
          <a href="" className="text-3xl">
            <AiFillTwitterSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Form;
