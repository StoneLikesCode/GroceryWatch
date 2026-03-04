import PageHeader from "../components/PageHeader"
import styles from '../pages/Presentations.module.css'

const presentations = [
    { 
        id: "presentation1",
        title: "Iteration 1", 
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vTereLRR-9PecaQYJveLFZJ1wQkDoWs21VEV8_bWRWvPrRh8inQNyaWrQJSQMxr2aGHXpi1ht4Rqyfc/pubembed?start=false&loop=false&delayms=3000",
    },
    // add more presentations here
]

export default function Presentations() {
    return (
        <>
            <PageHeader
                title="Presentations"
                subtitle="GroceryWatch project presentations by iteration"
            />

            <div className={styles.wrapper}>
                {presentations.map((p, i) => (
                    <div key={i} id={p.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.dot} />
                            <div>
                                <span className={styles.cardTitle}>{p.title}</span>
                                <span className={styles.cardSubtitle}>{p.subtitle}</span>
                            </div>
                        </div>
                        <div className={styles.iframeWrapper}>
                            <iframe
                                src={p.src}
                                allowFullScreen
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}