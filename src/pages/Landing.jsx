import LandingHeader from "../components/LandingHeader.jsx"
import styles from '../pages/Landing.module.css'
export default function Landing(){
    return(
        <>
        <LandingHeader title="Landing Page" description="Shop Smart, Eat Well."/>
        
        <div className={styles.mainContent}>
            <h1>Landing Page</h1>
            <p>Landing page content</p>
        </div>
    </>
    )
}