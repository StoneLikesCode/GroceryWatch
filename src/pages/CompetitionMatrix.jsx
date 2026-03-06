import PageHeader from '../components/PageHeader'
import styles from '../pages/CompetitionMatrix.module.css'

const competitors = [
    { name: 'GroceryWatch', highlight: true },
    { name: 'Basket' },
    { name: 'GroceryAI' },
    { name: 'Amazon' },
    { name: 'Flashfood' },
    { name: 'Instacart' },
    { name: 'Google Shopping' },
]

// values: if true: check else: x | competitors above correspond with the values. If a competitor has a feature we offer, set values: [true]. If they do not offer the feature, set values: [false]
const features = [
    {
        category: 'Price Intelligence',
        items: [
            {
                name: 'Price Comparison',
                values: [true, true, false, true, false, false, true],
            },
            {
                name: 'Price History',
                values: [true, false, false, true, false, false, true],
            },
            {
                name: 'Tax Inclusion in Price',
                values: ['Full', false, false, 'Cart & Checkout Only', false, 'Checkout Only', 'Checkout Only'],
            },
            {
                name: 'Anomalous Sale Marking',
                values: [true, false, false, false, false, false, false],
            },
        ],
    },
    {
        category: 'Shopping Tools',
        items: [
            {
                name: 'Shopping List',
                values: [true, true, true, true, false, true, false],
            },
            {
                name: 'Shopping List Comparisons',
                values: [true, true, false, false, false, false, false],
            },
            {
                name: 'Rewards',
                values: [true, false, false, true, false, true, false],
            },
        ],
    },
    {
        category: 'Discovery',
        items: [
            {
                name: 'Interactive Store Locator',
                values: [true, false, false, false, true, false, true],
            },
            {
                name: 'Store Reviews',
                values: [true, false, false, true, false, true, true],
            },
        ],
    },
]

function CellValue({ value, isUs }) {
    if (value === true) {
        return (
            <span className={`${styles.check} ${isUs ? styles.checkUs : ''}`}>
                ✓
            </span>
        )
    }
    if (value === false) {
        return <span className={styles.cross}>✕</span>
    }
    // partial / string value
    return <span className={styles.partial}>{value}</span>
}

export default function CompetitionMatrix() {
    const featureCount = features.reduce((acc, cat) => acc + cat.items.length, 0)

    // count how many features each competitor supports
    const scores = competitors.map((_, ci) => {
        let count = 0
        features.forEach(cat => cat.items.forEach(f => {
            if (f.values[ci] === true || typeof f.values[ci] === 'string') count++
        }))
        return count
    })

    return (
        <>
            <PageHeader
                title="Competition Matrix"
                subtitle="How GroceryWatch stacks up against existing platforms"
            />

            <div className={styles.wrapper}>

                {/* score cards */}
                <div className={styles.scoreRow}>
                    {competitors.map((comp, i) => (
                        <div
                            key={comp.name}
                            className={`${styles.scoreCard} ${comp.highlight ? styles.scoreCardUs : ''}`}
                        >
                            <span className={styles.scoreName}>{comp.name}</span>
                            <span className={styles.scoreValue}>
                                {scores[i]}
                                <span className={styles.scoreTotal}>/{featureCount}</span>
                            </span>
                            <span className={styles.scoreLabel}>features</span>
                        </div>
                    ))}
                </div>

                {/* matrix table */}
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.featureCol}>Feature</th>
                                {competitors.map(comp => (
                                    <th
                                        key={comp.name}
                                        className={`${styles.compCol} ${comp.highlight ? styles.compColUs : ''}`}
                                    >
                                        {/* "Us" button */}
                                        {/* {comp.highlight && <div className={styles.usTag}>Us</div>} 
                                        <p></p> */}
                                        {comp.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map(cat => (
                                <>
                                    <tr key={cat.category} className={styles.categoryRow}>
                                        <td colSpan={competitors.length + 1} className={styles.categoryLabel}>
                                            {cat.category}
                                        </td>
                                    </tr>
                                    {cat.items.map(feature => (
                                        <tr key={feature.name} className={styles.featureRow}>
                                            <td className={styles.featureName}>{feature.name}</td>
                                            {feature.values.map((val, ci) => (
                                                <td
                                                    key={ci}
                                                    className={`${styles.cell} ${competitors[ci].highlight ? styles.cellUs : ''}`}
                                                >
                                                    <CellValue value={val} isUs={competitors[ci].highlight} />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

                <section className={styles.diffSection}>
                    <h2 className={styles.sectionTitle}>Key Differentiators</h2>
                    <div className={styles.diffGrid}>
                        {[
                            {
                                icon: '📈',
                                title: 'Anomalous Sale Marking',
                                desc: 'The only platform that detects when a store raises prices before a "sale" — exposing misleading discounts.',
                            },
                            {
                                icon: '🧾',
                                title: 'Full Tax Inclusion',
                                desc: 'Shows the true all-in price including tax before you shop. Competitors only show tax at checkout.',
                            },
                            {
                                icon: '🛒',
                                title: 'Cart-Level Comparison',
                                desc: 'Compare an entire grocery list across multiple stores at once, not just individual items.',
                            },
                            {
                                icon: '📉',
                                title: 'Price History Tracking',
                                desc: 'Track price trends over time so shoppers know if today\'s price is actually a good deal.',
                            },
                        ].map((d, i) => (
                            <div key={i} className={styles.diffCard}>
                                <span className={styles.diffIcon}>{d.icon}</span>
                                <h3 className={styles.diffTitle}>{d.title}</h3>
                                <p className={styles.diffDesc}>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    )
}