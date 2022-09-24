import React from "react";
import Nav from "./Nav";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import "../styles/aboutThisProyect.css";

import "../App.css";

function Contact() {
  return (
    <>
      <Nav />
      <div className="contact  d-flex align-items-center justify-content-end">
        <div className="col-4 mt-3 text-white">
          <div
            className=" card__linkdin d-flex flex-column align-items-center p-2 "
            id="alanCard"
          >
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQF6giCFp2NWXg/profile-displayphoto-shrink_200_200/0/1648464031374?e=1668643200&v=beta&t=PkN39jeL0QYJjlIfqqLPksHJpa0lcx-mb5QexekQ2ck"
              alt="profile_logo"
              className="profile_logo_linkedin"
            ></img>
            <h5>Alan Katz</h5>
            <h5 className="jobPosition">Full Stack Developer Jr.</h5>
            <div className="d-flex mt-1 gap-1">
              <a
                href="https://www.linkedin.com/in/alan-katz-401468101/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  className="iconHover"
                  style={{ fontSize: "2.2rem" }}
                />
              </a>
              <a
                href="https://github.com/alankatz3793"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub
                  className="iconHover"
                  style={{ fontSize: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
