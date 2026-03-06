import SectionHeader from "./SectionHeader"
import PageHeader from "./PageHeader"
import styles from './Problem.module.css'

const stats = [
    { value: "#3", label: "Household Expense", sub: "Behind housing & transportation for 25+ years" },
    { value: "13%", label: "Cost Increase", sub: "Thrifty Food Plan Jan 2022 – Dec 2024" },
    { value: "$11k+", label: "Annual Grocery Cost", sub: "Lowest USDA food plan as of Dec 2025" },
    { value: "57%", label: "Price Gap", sub: "Between cheapest and most expensive supermarkets" },
]

// pain points are consistant and recurring problems that our customers face
const painPoints = [
    {
        title: "Spending Keeps Rising",
        description: "Grocery prices have climbed significantly over recent years. The USDA's Thrifty Food Plan saw a 13% increase between January 2022 and December 2024, costing roughly $11,000 annually as of December 2025.",
    },
    {
        title: "Prices Vary Wildly by Store",
        description: "Consumer Reports analysis shows a price gap of over 30% between the least and most expensive U.S. supermarkets — but consumers have no easy way to see this.",
    },
    {
        title: "Comparison is Too Much Effort",
        description: "Shoppers often buy from the closest store out of convenience or habit. Comparing prices across stores for a full grocery list is tedious and the perceived savings don't feel worth the effort.",
    },
    {
        title: "No Transparent Pricing Data",
        description: "Large data companies like Datasembly have built grocery price indices covering 150,000+ stores — but these tools target retailers, not consumers. There is no widely adopted platform for item-level cross-store comparison.",
    },
]

export default function Problem() {
    return (
        <>
            <SectionHeader title="The Problem" subtitle="Why grocery shopping costs more than it should" />

            <div className={styles.statsBar}>
                {stats.map((stat) => (
                    <div key={stat.value} className={styles.statCard}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                        <span className={styles.statSub}>{stat.sub}</span>
                    </div>
                ))}
            </div>

            <section className={styles.section}>
                <div className={styles.statementCard}>
                    <h2 className={styles.statementTitle}>Problem Statement</h2>
                    <p className={styles.statementText}>
                        With the price of groceries rising, consumers often <span className={styles.accent}>overpay</span> because
                        comparing prices can be <span className={styles.accent}>time consuming</span>, <span className={styles.accent}>tedious</span>,
                        or perceived as <span className={styles.accent}>not worth the effort</span>. Currently there is no transparent
                        and item-specific system that allows them to easily compare real-time grocery prices
                        across multiple stores in their area.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Why This Happens</h2>
                <div className={styles.painGrid}>
                    {painPoints.map((point, i) => (
                        <div key={i} className={styles.painCard}>
                            <div className={styles.painNumber}>{String(i + 1).padStart(2, '0')}</div>
                            <h3 className={styles.painTitle}>{point.title}</h3>
                            <p className={styles.painText}>{point.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>The Gap</h2>
                <p>TODO: ADD GAP IMAGE FROM PRESENTATION</p>
                <div className={styles.gapGrid}>
                    {[
                        "Lack of transparency with price data across various stores or locales",
                        "No accessible historical pricing data readily available to consumers",
                        "High effort and time cost of comparing prices manually vs. perceived savings",
                        "The information needed to make informed decisions is simply too hard to access",
                    ].map((gap, i) => (
                        <div key={i} className={styles.gapItem}>
                            <div className={styles.gapDot} />
                            <p>{gap}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}