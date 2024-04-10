import React from "react";
import "./footer.css";
import XLogo from "./footer-logos/twitter-x.svg";
import FacebookLogo from "./footer-logos/facebook.svg";
import InstagramLogo from "./footer-logos/instagram.svg";
import GithupLogo from "./footer-logos/github.svg";



const Footer = () => {

    return (
        <div className="footer-div">
            <footer className=" container d-flex flex-wrap justify-content-between align-items-center py-3 my-3">
                <div className="col-md-4 d-flex align-items-center">
                  <span className="mb-3 mb-md-0">© 2023 Copyright Kind-Moives</span>
                </div>
                <br />
                <ul className="nav col-md-6 justify-content-end d-flex "> 
                    <li className="ms-3">
                        <a href="https://www.twitter.com/" target="_blank"><img className="footer-logos" src={XLogo}/></a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.facebook.com/" target="_blank"><img className="footer-logos" src={FacebookLogo}/></a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.instagram.com/" target="_blank"><img className="footer-logos" src={InstagramLogo}/></a>
                    </li>
                    <li className="ms-3">
                        <a href="https://github.com/" target="_blank"><img className="footer-logos" src={GithupLogo}/></a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;