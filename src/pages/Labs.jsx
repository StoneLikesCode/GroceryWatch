import PageHeader from '../components/PageHeader'
import pres from './Presentations.module.css'
import styles from './Labs.module.css'

const labs = [
    {
        id: 'lab1-sam',
        title: 'Lab 1 — Sam Garden',
        subtitle: 'Version 1 (Draft)',
        src: 'https://docs.google.com/document/d/1WJo6Q-wyENe47-Kuv5BlOU_9QC4aCX5m/preview',
    },
    {
        id: 'lab1-stone',
        title: 'Lab 1 — Stone Casey',
        subtitle: 'Draft',
        src: 'https://docs.google.com/document/d/1_T0JyzeUsnZWzrQKN-soFEeNh8jjI5oD/preview',
    },
    {
        id: 'lab1-blaine',
        title: 'Lab 1 — Blaine Langlois',
        subtitle: 'Draft 1',
        src: 'https://docs.google.com/document/d/1bmDrHeI6lVfKN3D8HCT24pd3vgKnibFZ/preview',
    },
    {
        id: 'lab1-jordan',
        title: 'Lab 1 — Jordan Dossou',
        subtitle: 'Version 1 (Draft)',
        src: 'https://docs.google.com/document/d/1VqBc6fryB54Fn-RLObtnUld_q0B0Zehb/preview',
    },
]

export default function Labs() {
    return (
        <>
            <PageHeader
                title="Labs"
                subtitle="Team Iron lab documentation and deliverables"
            />

            <div className={pres.wrapper}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Lab 1</h2>
                    {labs.map((lab) => (
                        <div key={lab.id} id={lab.id} className={pres.card}>
                            <div className={pres.cardHeader}>
                                <div className={pres.dot} />
                                <div>
                                    <span className={pres.cardTitle}>{lab.title}</span>
                                    <span className={pres.cardSubtitle}>{lab.subtitle}</span>
                                </div>
                            </div>
                            <div className={styles.docIframe}>
                                <iframe
                                    src={lab.src}
                                    title={lab.title}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}
