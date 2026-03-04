import style from "../components/Footer.module.css"

export default function Footer(){ 
    
    return (
        <>
            <footer className={style.siteFooter}>
                <div className={style.footerContainer}>
                    <p>© {new Date().getFullYear()} Grocery Watch</p>
                    <p>CS410 • Team Iron • Spring 2026</p>
                    <a target="_blank" href="https://www.odu.edu/" rel="noreferrer">ODU</a><br/>
                    <a target="_blank" href="https://www.odu.edu/computer-science"  rel="noreferrer">CS Department</a>
                </div>
            </footer>
        </>
    )
}