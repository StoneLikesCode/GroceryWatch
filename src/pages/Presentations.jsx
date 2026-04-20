import PageHeader from "../components/PageHeader"
import styles from '../pages/Presentations.module.css'

const presentations = [
    // Feasibility
    {
        id: "feas-1",
        category: "Feasibility",
        title: "Feasibility — Version 1",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1_OM5o1PYwF-HR0E4R3OP7ANJ94IoQP3ymvpTFioviJI/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "feas-2",
        category: "Feasibility",
        title: "Feasibility — Version 2",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1JImzpvtUhuXegEsNoMPR6_17IrZNXjBtAAQHURzTlkQ/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "feas-3",
        category: "Feasibility",
        title: "Feasibility — Version 3",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1zZu1t-MXibWDw4pTiA3Ztl0QmSNYB2bVOTC4E5LfpUQ/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "feas-4",
        category: "Feasibility",
        title: "Feasibility — Version 4",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1UPlRZxH0LAQxlWxj_vINdmQ6hpytG7VoIe_UxfIBMkE/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "feas-5",
        category: "Feasibility",
        title: "Feasibility — Version 5",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1C04LttjGVI5KQrjrGhUpx01rYL1DSM513HmTWa2HbiE/embed?start=false&loop=false&delayms=3000",
    },
    // Design
    {
        id: "design-1",
        category: "Design",
        title: "Design — Iteration 1",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1J4Zhw4AW9hD1OGn09C4fPJewObUj5B1cVaHwFKet_sQ/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "design-2",
        category: "Design",
        title: "Design — Iteration 2",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1LnNa4P7y2zBOFstBEdPjkQxU9h6y-7DTpy6cBj7bbcs/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "design-3",
        category: "Design",
        title: "Design — Iteration 3",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/15fS5LDtBJXwYZYVRGLZyDkIhVNeorr4jCTg0K5TmddE/embed?start=false&loop=false&delayms=3000",
    },
    {
        id: "design-4",
        category: "Design",
        title: "Design — Iteration 4",
        subtitle: "Spring 2026 - Team Iron",
        src: "https://docs.google.com/presentation/d/1l5jSJ9VkF8Z-Jmfci-pSga-vyqLYQcZFccuVWZkDROo/embed?start=false&loop=false&delayms=3000",
    },
]

export default function Presentations() {
    const grouped = presentations.reduce((acc, p) => {
        (acc[p.category] ??= []).push(p)
        return acc
    }, {})

    return (
        <>
            <PageHeader
                title="Presentations"
                subtitle="GroceryWatch project presentations by iteration"
            />

            <div className={styles.wrapper}>
                {Object.entries(grouped).map(([category, items]) => (
                    <section key={category} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{category}</h2>
                        {items.map((p) => (
                            <div key={p.id} id={p.id} className={styles.card}>
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
                    </section>
                ))}
            </div>
        </>
    )
}