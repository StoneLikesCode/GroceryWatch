import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Dropdown.module.css';

export default function Dropdown(props){ 
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div
            className={styles.dropdown}
            onMouseEnter={() => props.links?.length > 0 && setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={styles.dropbtn}
                onClick={() => setIsOpen(!isOpen)}
                >
                    {props.label}
                </button>
                {props.links && props.links.length > 1 && (
                <div 
                    className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
                    onMouseEnter={() =>setIsOpen(true)}>
                        {props.links.map(link => (
                            <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}