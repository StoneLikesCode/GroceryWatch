import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import siteLogo from '../assets/logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navLinkClass = ({ isActive }) => isActive ? styles.active : ""

    return (
        <>
        
        <nav className={styles.nav}>
        <div className={styles.logo}>
            <NavLink to='/'><img className={styles.siteLogo} src={siteLogo}></img></NavLink>
        </div>
            <div 
                className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        
            <ul className={`${styles.navMenu} ${isOpen ? styles.show : ""}`}>
                <li><NavLink className={navLinkClass} to="/team" >Team</NavLink></li>
                <li><NavLink className={navLinkClass} to="/problem">Problem</NavLink></li>
                <li><NavLink className={navLinkClass} to="/solution">Solution</NavLink></li>
                <li><NavLink className={navLinkClass} to="/presentations">Presentations</NavLink></li>
                <li><NavLink className={navLinkClass} to="/deliverables">Deliverables</NavLink></li>
                <li><NavLink className={navLinkClass} to="/references">References</NavLink></li>
            </ul>
        </nav>
        </>
    )
}