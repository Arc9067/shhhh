import React, { useState } from "react";
import { useFormik } from "formik";
import { ImTelegram, ImMail } from "react-icons/im";
import { AiFillTwitterSquare } from "react-icons/ai";
import axios from "axios";
import validator from "validator";

const Form = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, SetError] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://fine-lime-chick-hose.cyclic.app/api/sendmail",
      headers: { "Content-Type": "application/json" },
      data: {
        email: "team@grugtoken.com",
        name: "Folarin",
        message: "Hello, this is the another test message from the resend",
        recipient: "atandarokib@gmail.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  function handleBlur() {
    if (validator.isEmail(formik.values.email)) {
      SetError(false);
    } else {
      SetError(true);
    }
  }

  return (
    <section className="py-[100px] w-full">
      <div className="container flex justify-center items-center text-center flex-col gap-9">
        <h1 className="text-5xl uppercase hero-header">
          Welcome to Shhhh Beta
        </h1>

        {isCorrect ? (
          <h1>
            That Thanks For option in ! Once the Token is live , and beta
            version is up We will send you a notifying mail. For other info join
            us on tg and twitter.
          </h1>
        ) : (
          <form onSubmit={sendEmail} className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-xl">
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
                className="bg-neutral-900 rounded border border-white border-opacity-50 font-serif  px-5 py-3  focus:outline-none placeholder:text-white"
                onBlur={handleBlur}
              />
              {error && (
                <p className="text-center font-serif capitalize text-red-600 text-[16px] font-normal tracking-wide">
                  invalid email
                </p>
              )}
            </div>

            <button
              type="submit"
              className="px-9 py-4 font-primary text-black bg-white rounded-lg"
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
          <a href="" className="text-3xl">
            <ImMail />
          </a>
          <a href="" className="text-3xl">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_315_355)">
                <path
                  d="M4.99767 11.9134C4.99767 11.3595 5.45271 10.9045 6.00567 10.9045H7.70583C8.25975 10.9045 8.73399 11.3595 8.73399 11.9336V18.3454C8.93175 18.2859 9.16887 18.2264 9.44631 18.1669C9.82167 18.068 10.0991 17.732 10.0991 17.3355V9.38C10.0991 8.82608 10.5542 8.35088 11.1273 8.35088H12.8274C13.3814 8.35088 13.8556 8.80592 13.8556 9.38V16.7624C13.8556 16.7624 14.2713 16.5838 14.686 16.4062C15.0028 16.268 15.2006 15.9714 15.2006 15.6142V6.80816C15.2006 6.25424 15.6556 5.77904 16.2095 5.77904H17.9097C18.4636 5.77904 18.9186 6.23408 18.9186 6.80816V14.0715C20.3817 13.003 21.885 11.7166 23.0716 10.173C23.4278 9.71792 23.5266 9.12368 23.3289 8.56976C21.1535 2.31632 14.3126 -1.00912 8.06391 1.16816C1.81527 3.34544 -1.50633 10.1922 0.668072 16.4466C0.905192 17.1589 1.22199 17.8318 1.59735 18.4846C1.89399 18.9992 2.44791 19.2958 3.04119 19.2363C3.35799 19.2162 3.75351 19.1768 4.24695 19.1173C4.68183 19.0779 4.99863 18.7016 4.99863 18.2658L4.99767 11.9134Z"
                  fill="white"
                />
                <path
                  d="M4.95752 22.2046C10.3162 26.1032 17.811 24.9157 21.7057 19.5531C23.1889 17.4949 23.9991 15.021 23.9991 12.4885C23.9991 12.211 23.979 11.9346 23.9598 11.6571C19.5908 18.2072 11.5028 21.2744 4.95752 22.2046Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_315_355">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" className="text-3xl">
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_315_350)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.7532 1.86968C6.32506 2.61363 5.15664 3.24316 5.15689 3.26876C5.15752 3.33485 8.58448 5.07039 8.70611 5.06616C8.76144 5.06431 9.16283 4.87955 9.59803 4.65563L10.3894 4.24858L11.2537 4.69285L12.118 5.1372L13.5334 4.5012C15.6661 3.54284 15.8876 3.43782 15.8529 3.40254C15.8068 3.35573 15.0419 2.94478 12.9665 1.85215C11.9635 1.32407 10.9899 0.806303 10.8031 0.701533C10.6162 0.596764 10.4378 0.512483 10.4066 0.514115C10.3755 0.515746 9.18138 1.12576 7.7532 1.86968ZM1.48937 5.11331L0.00268215 5.88123V9.2515C0.00268215 11.1052 0.0222038 12.6217 0.0461495 12.6217C0.0700124 12.6217 0.801465 12.3047 1.67156 11.9171L3.25356 11.2125V7.66005L4.02662 8.08123C4.62234 8.40549 5.21841 8.72909 5.81484 9.05203L6.82997 9.60165L7.28167 9.39739C7.56497 9.26908 7.84769 9.13953 8.12984 9.00873C8.34787 8.90719 8.88308 8.66613 9.31917 8.47293C9.75525 8.27965 10.1589 8.08529 10.2162 8.041C10.2922 7.98215 9.36501 7.46978 6.78675 6.1458C4.8433 5.14779 3.19084 4.33441 3.11464 4.3383C3.03843 4.3422 2.30706 4.69091 1.48937 5.11331ZM16.1208 5.32896C15.1083 5.78606 14.2792 6.17831 14.2782 6.20068C14.2773 6.22303 14.8292 6.55116 15.5047 6.92976C16.1801 7.30844 16.7327 7.63851 16.7327 7.66337C16.7327 7.68817 16.135 7.97776 15.4046 8.30703C14.6741 8.63621 12.8277 9.47006 11.3014 10.16L6.18725 12.4717C4.90078 13.0533 3.74118 13.5774 3.61036 13.6367C0.982689 14.8262 0.260445 15.1563 0.161261 15.2129C0.0615235 15.27 0.0389326 15.6014 0.0211807 17.2647L0 19.2485L1.32946 19.9259L2.65889 20.6032L4.50236 19.7713C5.51629 19.3137 6.34582 18.9154 6.34582 18.8861C6.34582 18.8568 6.15846 18.7347 5.92957 18.6147C5.70056 18.4946 5.22784 18.2288 4.87897 18.0239C4.53012 17.819 4.18227 17.631 4.1059 17.6061C4.02955 17.5812 3.9682 17.5377 3.96944 17.5093C3.97071 17.481 4.78249 17.0955 5.77328 16.6524C7.69771 15.792 9.17043 15.1288 12.3322 13.699C13.746 13.0598 15.16 12.421 16.5741 11.7825C17.817 11.2216 19.262 10.5664 19.7853 10.3266L20.7368 9.8906L20.758 7.88421L20.7792 5.87791L19.4308 5.18581C18.6892 4.80519 18.0553 4.4947 18.022 4.49583C17.9888 4.49688 17.1333 4.87175 16.1208 5.32896ZM20.3756 12.5672C20.1769 12.6643 19.7844 12.846 19.5034 12.971C19.2224 13.096 18.6892 13.3366 18.3185 13.5057L17.6445 13.8131L17.6292 15.5746C17.6207 16.5433 17.585 17.3317 17.5499 17.3265C17.4701 17.3147 16.2069 16.6669 14.9372 15.9865C14.0208 15.4955 13.9632 15.476 13.7479 15.5826C13.6234 15.6443 12.8793 15.978 12.0943 16.3244C11.3093 16.6706 10.6415 16.9766 10.6101 17.0043C10.5788 17.0319 12.1586 17.8882 14.1209 18.9072L17.6887 20.7599L19.2128 19.9715C20.051 19.5379 20.7637 19.1424 20.7965 19.0927C20.8704 18.9808 20.8641 12.3754 20.7901 12.3843C20.7608 12.3878 20.5743 12.4702 20.3756 12.5672ZM11.9357 20.3203C11.6714 20.434 11.4071 20.5478 11.1428 20.6618C10.3449 21.007 10.5013 21.0184 9.55204 20.5459C8.9198 20.2311 8.64727 20.134 8.52898 20.1812C8.44025 20.2165 7.67661 20.5601 6.83187 20.9446C5.98719 21.3292 5.26677 21.6438 5.23094 21.6438C4.87653 21.6438 5.46572 21.9958 7.73927 23.1426L10.4056 24.4875L11.5275 23.9337C12.1445 23.629 13.389 23.019 14.2931 22.5781C15.1972 22.1371 15.9257 21.7648 15.9121 21.7508C15.8983 21.7368 15.1408 21.3478 14.2286 20.8863L12.57 20.0474L11.9357 20.3203Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_315_350">
                  <rect
                    width="20.8704"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Form;
