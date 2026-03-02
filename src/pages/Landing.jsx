import LandingHeader from "../components/LandingHeader.jsx"
import styles from '../pages/Landing.module.css'
import Problem from "../components/Problem.jsx"
import Solution from "../components/Solution.jsx"

export default function Landing(){
    return(
        <>
        <LandingHeader title="Landing Page" tagline="Shop Smart, Eat Well."/>
        
        <div className={styles.mainContent}>
            <h1>Landing Page</h1>
            <Problem></Problem>
            <Solution></Solution>
        </div>
    </>
    )
}