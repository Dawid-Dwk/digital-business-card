import React from "react";
import { Mail, Linkedin } from "react-feather";

export default function Info() {
  const fullName = "Dawid Drzewiński";
  const job = "Frontend Developer";
  const website = "Frontend Developer";
  const iconSize = 18;

  return (
    <div className="info">
      <img className="info-foto" src="../image/foto.img" alt="owner" />
      <h1 className="info--full-name">{fullName}</h1>
      <h2 className="info-job">{job}</h2>
      <h3 className="info-website">{website}</h3>
      <div className="info-buttons">
        <button className="info-email" type="button">
          <Mail className="info--email-icon" color="black" size={iconSize} />
          Email
        </button>
        <button className="info-linkedin" type="button">
          <Linkedin
            className="info--linkedin-icon"
            color="white"
            size={iconSize}
          />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
