import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [socialMenuOpen, setSocialMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li onClick={() => {setNavMenuOpen(!navMenuOpen);
                setSocialMenuOpen(false);
                }}>
                    Navigation
                </li>
                <li onClick={() => {
                    setSocialMenuOpen(!socialMenuOpen);
                    setNavMenuOpen(false);
                }}>
                    Social
                </li>
            </ul>

            <ul className={`${styles.navMenu} ${navMenuOpen ? styles.navMenuOpen : ""}`}
                    onClick={() => setNavMenuOpen(false)}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
            </ul>

            <ul className={`${styles.socialMenu} ${socialMenuOpen ? styles.socialMenuOpen : ""}`}
                    onClick={() => setSocialMenuOpen(false)}>
                        <li>
                            <a href="https://github.com/Rianna-Kate" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rianna-armour/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
            </ul>

        </div>
    </nav>
}