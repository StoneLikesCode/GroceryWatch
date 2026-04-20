import PageHeader from '../components/PageHeader'
import styles from './Algorithms.module.css'
import imgProductMatching from '../assets/productmatchingalgo.png'
import imgAnomalousSale from '../assets/anomaloussaledetection.png'
import imgPriceComparison from '../assets/pricecomparisonalgo.png'
import imgWebScraping from '../assets/webscrapingpipelinealgo.png'
import productMatchingSvg from '../assets/Product Matching Algorithm.svg'
import anomalousSaleSvg from '../assets/Anomalous Sale Detection Algorithm.svg'
import priceComparisonSvg from '../assets/Price Comparison Algorithm.svg'
import webScrapingSvg from '../assets/Web Scraping Pipeline.svg'
import FullscreenViewer from '../components/FullscreenViewer'

const algorithms = [
    {
        id: 'product-matching',
        icon: '🔍',
        image: imgProductMatching,
        svg: productMatchingSvg,
        title: 'Product Matching Algorithm',
        description: 'UPC/GTN normalization as primary identifier; fuzzy matching on brand, size, quantity, and unit for products without standard codes. Confidence scoring with a manual review queue for low-confidence matches.',
        steps: [
            { label: 'Incoming Product Record', type: 'start' },
            { label: 'Has UPC/GTN?', type: 'decision' },
            { label: 'Normalize UPC/GTN → Check database', type: 'process' },
            { label: 'Match found in database?', type: 'decision' },
            { label: 'If no match: Use attribute matching', type: 'process' },
            { label: 'Extract attributes (brand, size, quantity, unit)', type: 'process' },
            { label: 'Compute Brand + Size Matching Scores', type: 'process' },
            { label: 'Aggregate confidence score', type: 'process' },
            { label: 'Confidence ≥ threshold?', type: 'decision' },
            { label: 'Yes → Assign product match & store', type: 'end' },
            { label: 'No → Send for manual review → Human correction', type: 'end' },
        ],
    },
    {
        id: 'anomalous-sale',
        icon: '📉',
        image: imgAnomalousSale,
        svg: anomalousSaleSvg,
        title: 'Anomalous Sale Detection Algorithm',
        description: 'Detects price spikes before sales using rolling average comparison (7/30/90-day windows). Flags "misleading discounts" with confidence scores when sale price ≥ recent baseline. Statistical outlier detection (Z-score) for sudden changes.',
        steps: [
            { label: 'Incoming Price Event', type: 'start' },
            { label: 'Load historical price data', type: 'process' },
            { label: 'Compute rolling averages: 7-day, 30-day, 90-day', type: 'process' },
            { label: 'Estimate baseline price', type: 'process' },
            { label: 'Calculate price deviation & Z-score', type: 'process' },
            { label: 'Z-score above threshold?', type: 'decision' },
            { label: 'Yes → Flag as outlier → Increase anomaly confidence score', type: 'process' },
            { label: 'Aggregate final score → Score ≥ alert threshold?', type: 'decision' },
            { label: 'Yes → Trigger alert', type: 'end' },
            { label: 'No → Log as normal variation', type: 'end' },
            { label: 'Sale event detected? → Check for misleading discount', type: 'decision' },
            { label: 'Sale price ≥ recent baseline → Flag as misleading discount', type: 'end' },
        ],
    },
    {
        id: 'price-comparison',
        icon: '🛒',
        image: imgPriceComparison,
        svg: priceComparisonSvg,
        title: 'Price Comparison / Cart Comparison Algorithm',
        description: 'Real-time aggregation of cart items across stores within a user-defined radius. Per-item and total cost ranking with tax calculation by jurisdiction. Substitution suggestions when exact matches are unavailable; optimization for partial-cart splits across stores.',
        steps: [
            { label: 'User cart input', type: 'start' },
            { label: 'Get user location + search radius', type: 'process' },
            { label: 'Fetch nearby stores → Retrieve inventory & prices', type: 'process' },
            { label: 'Normalize product data', type: 'process' },
            { label: 'Exact match found?', type: 'decision' },
            { label: 'If no match: Generate substitutes → Score substitutions', type: 'process' },
            { label: 'Build store-specific carts → Assign item prices', type: 'process' },
            { label: 'Calculate item costs → Apply tax by jurisdiction', type: 'process' },
            { label: 'Compute total cost per store', type: 'process' },
            { label: 'Generate multi-store combinations', type: 'process' },
            { label: 'Rank options by cost → Best option type?', type: 'decision' },
            { label: 'Single store → Return best store option', type: 'end' },
            { label: 'Split cart → Optimize split across stores → Display results', type: 'end' },
        ],
    },
    {
        id: 'web-scraping',
        icon: '🌐',
        image: imgWebScraping,
        svg: webScrapingSvg,
        title: 'Web Scraping Pipeline',
        description: 'Scheduled scraping jobs (Scrapy/Selenium) for retailer websites with rate limiting and proxy rotation. Data validation layer for price/inventory anomalies. Fallback to partner APIs and user-submitted receipts for stores without a web presence.',
        steps: [
            { label: 'Scheduled scraping event', type: 'start' },
            { label: 'Select target retailers', type: 'process' },
            { label: 'Has public website?', type: 'decision' },
            { label: 'Yes → Initialize scraping (Scrapy Spider or Selenium)', type: 'process' },
            { label: 'Apply rate limiting + proxy rotation', type: 'process' },
            { label: 'Extract product data → Normalize raw data', type: 'process' },
            { label: 'No → Fallback: Partner APIs / User-submitted receipts', type: 'process' },
            { label: 'Normalize API/receipt data', type: 'process' },
            { label: 'Data validation → Valid?', type: 'decision' },
            { label: 'Yes → Store in database → Update prices/inventory records', type: 'end' },
            { label: 'No → Flag anomaly → Secondary validation → Still invalid → Discard', type: 'end' },
        ],
    },
]

const supporting = [
    { icon: '📍', name: 'Store Ranking', desc: 'Distance + price competitiveness weighted scoring to surface the most relevant stores.' },
    { icon: '🧾', name: 'Tax Calculation', desc: 'Jurisdiction-based lookup using ZIP/address to compute all-in pricing before checkout.' },
    { icon: '⚖️', name: 'Price Normalization', desc: 'Unit standardization (per oz, per lb) enabling fair cross-product price comparison.' },
    { icon: '🏆', name: 'Reward Points Engine', desc: 'Purchase-based point accrual with tiered multipliers and redemption tracking.' },
]

function StepBadge({ type }) {
    const map = { start: 'Start', end: 'End', decision: 'Decision', process: 'Process' }
    return <span className={`${styles.stepBadge} ${styles[`badge_${type}`]}`}>{map[type]}</span>
}

export default function Algorithms() {
    return (
        <>
            <PageHeader
                title="Algorithms"
                subtitle="Core algorithmic designs powering GroceryWatch"
            />
            <div className={styles.wrapper}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Supporting Algorithms</h2>
                    <div className={styles.supportGrid}>
                        {supporting.map((s, i) => (
                            <div key={i} className={styles.supportCard}>
                                <span className={styles.supportIcon}>{s.icon}</span>
                                <h3 className={styles.supportName}>{s.name}</h3>
                                <p className={styles.supportDesc}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {algorithms.map(algo => (
                    <section key={algo.id} className={styles.algoSection}>
                        <div className={styles.algoHeader}>
                            <span className={styles.algoIcon}>{algo.icon}</span>
                            <h2 className={styles.algoTitle}>{algo.title}</h2>
                        </div>
                        <p className={styles.algoDesc}>{algo.description}</p>
                            {algo.svg ? (
                                <div className={styles.diagramWrap}>
                                    <FullscreenViewer src={algo.svg} alt={`${algo.title} diagram`} title={algo.title} />
                                </div>
                            ) : algo.image ? (
                                <div className={styles.diagramWrap}>
                                    <FullscreenViewer src={algo.image} alt={`${algo.title} diagram`} title={algo.title} />
                                </div>
                            ) : null}
                        <div className={styles.flowLabel}>Process Flow</div>
                        <div className={styles.stepList}>
                            {algo.steps.map((step, i) => (
                                <div key={i} className={styles.stepRow}>
                                    <div className={styles.stepConnector}>
                                        <div className={styles.stepDot} />
                                        {i < algo.steps.length - 1 && <div className={styles.stepLine} />}
                                    </div>
                                    <div className={styles.stepCard}>
                                        <StepBadge type={step.type} />
                                        <span className={styles.stepText}>{step.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}



            </div>
        </>
    )
}
