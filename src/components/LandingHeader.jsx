import styles from '../components/LandingHeader.module.css'

export default function LandingHeader(props){ 
    return(
        <>
        <div className={styles.siteHeader}>
            <div className={styles.headerContainer}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
        </>
    )
}