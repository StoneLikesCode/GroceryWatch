import LandingHeader from "../components/LandingHeader.jsx"
import styles from '../pages/Landing.module.css'
import Problem from "../components/Problem.jsx"
import Solution from "../components/Solution.jsx"

export default function Landing(){
    return(
        <>
        <div id="home" className={styles.mainContent}>
            <LandingHeader 
                className={styles.landingHeader} 
                title="GroceryWatch" 
                tagline="Shop Smart, Eat Well."/>
                <div id="problem">
                    <Problem></Problem>
                </div>
                <div id="solution">
                    <Solution></Solution>
                </div>
        </div>
    </>
    )
}