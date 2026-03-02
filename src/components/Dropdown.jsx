import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Dropdown.module.css';

export default function Dropdown(props){ 
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div
            className={styles.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={styles.dropbtn}
                onClick={() => setIsOpen(!isOpen)}
                >
                    {props.label}
                </button>
                <div 
                className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
                onMouseEnter={() =>setIsOpen(true)}>
                    {props.links.map(link => (
                        <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}