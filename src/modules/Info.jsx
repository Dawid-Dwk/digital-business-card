import React from "react";
import { Mail, Linkedin } from "react-feather";

export default function Info() {
  const fullName = "Dawid Drzewiński";
  const job = "Frontend Developer";
  const website = "dawiddrzewinski.website";
  const iconSize = 16;
  const fotoURL =
    "https://media-exp1.licdn.com/dms/image/C4E03AQE10m7SVjlTHA/profile-displayphoto-shrink_200_200/0/1604337353673?e=1669248000&v=beta&t=ycDeeIqGiBxTQcOqFyqUT4tqI7LaI_yEUXKNXqCIDfs";

  return (
    <div className="info">
      <img className="info-foto" src={fotoURL} alt="owner" />
      <h1 className="info--full-name">{fullName}</h1>
      <h2 className="info-job">{job}</h2>
      <a
        href="https://github.com/Dawid-Dwk/digital-business-card"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="info-website">{website}</h3>
      </a>
      <div className="info-buttons">
        <button className="info--email-button" type="button">
          <Mail className="info--email-icon" color="black" size={iconSize} />
          Email
        </button>
        <button className="info--linkedin-button" type="button">
          <Linkedin
            onClick={
              "location.href='www.linkedin.com/in/dawid-drzewiński-0028961ba'"
            }
            className="info--linkedin-icon"
            color="#5093E2"
            size={iconSize}
          />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
