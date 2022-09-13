import React from 'react'
import { Twitter, Facebook, Instagram, GitHub } from 'react-feather'

export default function Footer() {
    const iconSize = 18;
    return (<div className="footer">
        <div className="footer-icons">
            <a href="https://twitter.com/?lang=en">

            < Twitter className = "footer-icon" color="white" size={iconSize}  />
            </a>
            < Facebook className = "footer-icon" color="white" size={iconSize} />
            < Instagram className = "footer-icon" color="white" size={iconSize} />
            < GitHub className = "footer-icon" color="white" size={iconSize}/>
        </div>

    </div>)
}