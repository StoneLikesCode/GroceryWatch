import PageHeader from '../components/PageHeader'
import styles from './Labs.module.css'

const labs = [
    {
        id: 'lab1',
        number: 1,
        title: 'Lab 1 Outline',
        description: 'Project Introduction & GroceryWatch Overview',
        file: 'assets/Team Iron - Lab 1 Outline.docx',
        fileType: 'DOCX',
        fileSize: '15 KB',
    },
    // Add more labs here as needed
]

export default function Labs() {
    return (
        <>
            <PageHeader
                title="Labs"
                subtitle="Team Iron lab documentation and deliverables"
            />

            <div className={styles.wrapper}>
                {labs.map(lab => (
                    <div key={lab.id} id={lab.id} className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.labNumber}>Lab {lab.number}</div>
                            <div className={styles.labInfo}>
                                <h3 className={styles.labTitle}>{lab.title}</h3>
                                <p className={styles.labDesc}>{lab.description}</p>
                            </div>
                        </div>
                        <div className={styles.cardRight}>
                            <span className={styles.fileMeta}>{lab.fileType} • {lab.fileSize}</span>
                            <a 
                                href={lab.file} 
                                download 
                                className={styles.downloadBtn}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}