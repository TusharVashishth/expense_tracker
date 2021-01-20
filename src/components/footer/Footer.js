import React from "react"
import "./Footer.css"
import Instagram from "../../assets/images/instagram.png"
import GitHub from "../../assets/images/github1.png"
import Linkedin from "../../assets/images/linkedin.png"
const Footer = () => {
  return (
    <div className="footer">
      <h5>Made with❤ By Tushar Vashishth</h5>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/tushar-vashishth-b15998172/">
          <img src={Linkedin} alt="Linkedin" />
        </a>

        <a href="https://github.com/TusharVashishth/">
          <img src={GitHub} alt="Github" />
        </a>

        <a href="https://www.instagram.com/tushar.vashishth/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer
