import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Lakshya Dadhich</h4>
      <h4>Copyright &copy; 2024 LD</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/Lakshyadadhich"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/lakshya-dadhich-4255551b7/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:lakshyadadhich175@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <GrMail />
        </a>{" "}
        {/* Corrected mailto */}
      </div>
    </footer>
  );
};

export default Footer;
