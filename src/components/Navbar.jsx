import { useState } from 'react'
import {HashLink} from 'react-router-hash-link'
import styles from './Navbar.module.css'
import siteLogo from '../assets/logo.png'
import Dropdown from './Dropdown'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <HashLink smooth to='/'><img className={styles.siteLogo} src={siteLogo}></img></HashLink>
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
                    <li><HashLink className={styles.navLink} smooth to='/'>Home</HashLink></li>
                    
                    <li>
                        <Dropdown
                            label="About"
                            links={[
                                {to: "/team", label:"Team"},
                                {to: "/#problem", label:"Problem"},
                                {to: "/#solution", label:"Solution"}
                            ]}
                        />
                    </li>
                    
                    <li>
                        <Dropdown
                            link="/presentation"
                            label="Presentations"
                            links={[
                                {to: "/presentations/#presentation1", label: "Presentation 1"},
                                {to: "/presentations/#presentation2", label: "Presentation 2"},
                                {to: "/presentations/#presentation3", label: "Presentation 3"},
                                {to: "/presentations", label: "View All"},
                            ]}
                        />
                    </li>
                    <li>
                        <Dropdown
                            label="Deliverables"
                            links={[
                                {to: "/processflows", label: "Process Flows"},
                                {to: "/mfcd", label: "Major Functional Components Diagram (MFCD)"},
                                {to: "/competitionmatrix", label: "Competition Matrix"},
                                {to: "/riskmatrices", label: "Risk Matrices"},
                            ]}
                        />
                    </li>
                    <li>
                        <Dropdown
                            label="Resources"
                            links={[
                                {to: "/glossary", label: "Glossary"},
                                {to: "/references", label: "References"},
                            ]}
                        />
                    </li>
                </ul>
            </nav>
        </>
    )
}