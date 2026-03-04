import SectionHeader from '../components/SectionHeader.jsx'
import styles from './Solution.module.css'

const features = [
    {
        title: "Price Comparison",
        tier: "All",
        description: "See prices for individual items across multiple stores side by side",
    },
    {
        title: "Price History Tracker",
        tier: "All",
        description: "Track and graph item prices over time. Manually add items to monitor, see price trends, and spot the best time to buy.",
    },
    {
        title: "Anomalous Sale Marking",
        tier: "All",
        description: "Identifies when a store raises prices shortly before a 'sale', making the discount misleading. Never get fooled by a fake deal again.",
    },
    {
        title: "Interactive Store Locator",
        tier: "All",
        description: "Find nearby grocery stores instantly using an interactive map interface. Locate the closest stores in real time and plan routes directly within the platform.",
    },
    {
        title: "Cart Comparision",
        tier: "Premium",
        description: "Build your full grocery list and compare the total cost across multiple retailers at once. See which store offers the lowest price for everything in your cart.",
    },
    {
        title: "Price After Tax",
        tier: "Premium",
        description: "View the final all-in price including tax before you shop. Avoid unexpected costs at checkout and plan purchases with greater budgeting confidence.",
    }
]

export default function Solution() {
    return (
        <>
            <SectionHeader
                title="The Solution"
                subtitle="Transparent, item-level grocery price comparison at your fingertips"
            />

            <section className={styles.section}>
                <div className={styles.statementCard}>
                    <h2 className={styles.statementTitle}>Solution Statement</h2>
                    <p className={styles.statementText}>
                        GroceryWatch is an app that <span className={styles.accent}>aggregates grocery item pricing</span> from
                        multiple local stores, enables <span className={styles.accent}>direct item-by-item comparisons</span>,
                        tracks <span className={styles.accent}>pricing over time</span>, and identifies <span className={styles.accent}>volatile pricing</span> to
                        provide consumers with a more transparent shopping experience.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Features</h2>
                <div className={styles.featuresGrid}>
                    {features.map((feature, i) => (
                        <div key={i} className={`${styles.featureCard} ${feature.tier === "Premium" ? styles.premium : ""}`}>
                            <div className={styles.featureHeader}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <span className={`${styles.tierBadge} ${feature.tier === "Premium" ? styles.premiumBadge : styles.allBadge}`}>
                                    {feature.tier}
                                </span>
                            </div>
                            <p className={styles.featureText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>What It Will Not Do</h2>
                <div className={styles.limitGrid}>
                    {[
                        {
                            title: "No Direct Purchases",
                            description: "GroceryWatch will not offer the ability to shop directly from the app. Its goal is to inform, not to replace your preferred retailer.",
                        },
                        {
                            title: "No Delivery Services",
                            description: "The app will not offer delivery ordering. The value of GroceryWatch is in the pricing data it provides, not logistics.",
                        },
                    ].map((limit, i) => (
                        <div key={i} className={styles.limitCard}>
                            <div className={styles.limitX}>✕</div>
                            <div>
                                <h3 className={styles.limitTitle}>{limit.title}</h3>
                                <p className={styles.limitText}>{limit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}