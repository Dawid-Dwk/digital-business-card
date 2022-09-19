import React from "react";
import { Twitter, Facebook, Instagram, GitHub } from "react-feather";

export default function Footer() {
  const iconSize = 18;
  const iconColor = "black";
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
          <Twitter className="footer-icon" color={iconColor} size={iconSize} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Facebook className="footer-icon" color={iconColor} size={iconSize} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Instagram
            className="footer-icon"
            color={iconColor}
            size={iconSize}
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <GitHub className="footer-icon" color={iconColor} size={iconSize} />
        </a>
      </div>
    </div>
  );
}
