import PageHeader from "../components/pageHeader"
import styles from '../pages/Presentations.module.css'

export default function Presentations(){
    
    return(
        <>
            <PageHeader title="Presentations" />

            <div className={styles.presentationsWrapper}>
                <div className={styles.presentationCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.dot} />
                        <span className={styles.cardTitle}>GroceryWatch — Spring 2026</span>
                    </div>
                    <div className={styles.iframeWrapper}>
                        <iframe 
                            src="https://docs.google.com/presentation/d/e/2PACX-1vTereLRR-9PecaQYJveLFZJ1wQkDoWs21VEV8_bWRWvPrRh8inQNyaWrQJSQMxr2aGHXpi1ht4Rqyfc/pubembed?start=false&loop=false&delayms=3000"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"> 
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}