import React from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../env";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpinnerRoundOutlined } from "spinners-react";
import GmailLogo from "../../assets/images/icons/Gmail";
import FacebookLogo from "../../assets/images/icons/Facebook";
import LinkedLogo from "../../assets/images/icons/LinkedIn";
import GithubLogo from "../../assets/images/icons/Github";
const ContactUs = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const notify = () => {
    toast.success(" Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    //  formState: { errors },
  } = useForm();
  // onSubmit function axios post request
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(API_URL + "/contactUs", data)
      .then((res) => {
        setIsLoading(false);
        notify();
        //clear data  form
        reset(); // reset form
      })
      .catch((err) => {
        setIsLoading(true);
      });
  };
  return (
    <div id="contact" className="contact-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="title-contact">CONTACT</h1>
      <div className="contact-box">
        <div className="contact-links">
          <div className="links">
            <div className="link">
              <a
                href="https://www.linkedin.com/in/haithem-hajri-959421188/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedLogo className="img-contact" />
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.facebook.com/haithemm.hajri"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookLogo />
              </a>
            </div>
            <div className="link">
              <a
                href="https://github.com/haithem-hajri"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo />
              </a>
            </div>
            <div className="link">
              <a
                href="mailto:haiithemhajri@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <GmailLogo />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
              <input {...register("name")} type="text" name="name" required />
              <label>Name</label>
            </div>
            <div className="form-item">
              <input {...register("email")} type="text" name="email" required />
              <label>Email</label>
            </div>
            <div className="form-item">
              <textarea
                {...register("message")}
                className=""
                name="message"
                required
              />
              <label>Message</label>
            </div>
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <SpinnerRoundOutlined size={25} style={{ color: "white" }} />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
