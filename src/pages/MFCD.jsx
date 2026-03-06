import PageHeader from '../components/PageHeader'
import styles from '../pages/MFCD.module.css'

const userRoles = [
    { id: 'shopper', label: 'Registered Shopper', color: '#4ba173' },
    { id: 'deluxe', label: 'Deluxe Shopper', color: '#ffc107' },
    { id: 'admin', label: 'Administrator', color: '#60a5fa' },
]

const components = [
    {
        id: 'account',
        title: 'Account Management',
        icon: '👤',
        features: [
            { name: 'Login / Authentication', roles: ['shopper', 'deluxe', 'admin'] },
            { name: 'Location Usage', roles: ['shopper', 'deluxe', 'admin'] },
            { name: 'Account Creation / Deletion', roles: ['shopper', 'deluxe', 'admin'] },
        ],
    },
    {
        id: 'comparison',
        title: 'Price Comparison',
        icon: '💸',
        features: [
            { name: 'Price Comparison', roles: ['shopper', 'deluxe', 'admin'] },
            { name: 'Cart Comparison', roles: ['deluxe', 'admin'], premium: true },
            { name: 'Price After Tax', roles: ['deluxe', 'admin'], premium: true },
        ],
    },
    {
        id: 'tracking',
        title: 'Price Tracking & Alerts',
        icon: '📈',
        features: [
            { name: 'Price History Tracker', roles: ['shopper', 'deluxe', 'admin'] },
            { name: 'Anomalous Sale Marking', roles: ['shopper', 'deluxe', 'admin'] },
        ],
    },
    {
        id: 'locator',
        title: 'Store Discovery',
        icon: '🗺️',
        features: [
            {name: 'Interactive Store Locator', roles: ['shopper', 'deluxe', 'admin']},
        ],
    },
]

const layers = [
    {
        id: 'frontend',
        label: 'Frontend',
        color: '#4ba173',
        items: ['React + Vite', 'CSS Modules', 'React Hash Router', 'Google Maps API'],
    },
    {
        id: 'backend',
        label: 'Backend',
        color: '#60a5fa',
        items: ['Node.js / Python', 'REST API', 'Authentication', 'Price Aggregation Engine'],
    },
    {
        id: 'data',
        label: 'Data Layer',
        color: '#ffc107',
        items: ['Database', 'Price History Store', 'Store Inventory Feed', 'Real-time Pricing'],
    },
]

function RoleDot({ roleId }) {
    const role = userRoles.find(r => r.id === roleId)
    return (
        <span
            className={styles.dot}
            style={{ background: role.color }}
            title={role.label}
        />
    )
}

function ComponentCard({ comp }) {
    return (
        <div className={styles.compCard}>
            <div className={styles.compHeader}>
                <span className={styles.compIcon}>{comp.icon}</span>
                <h3 className={styles.compTitle}>{comp.title}</h3>
            </div>
            <div className={styles.featureList}>
                {comp.features.map((f, i) => (
                    <div key={i} className={styles.featureRow}>
                        <span className={styles.featureName}>
                            {f.name}
                            {f.premium && <span className={styles.premiumTag}>Premium</span>}
                        </span>
                        <span className={styles.roleDots}>
                            {f.roles.map(r => <RoleDot key={r} roleId={r} />)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function MFCD() {
    return (
        <>
            <PageHeader
                title="Major Functional Components Diagram"
                subtitle="System architecture, features, and role-based access — Current"
            />

            <div className={styles.wrapper}>

                {/* legend */}
                <div className={styles.legendRow}>
                    {userRoles.map(role => (
                        <div key={role.id} className={styles.legendItem}>
                            <span className={styles.dot} style={{ background: role.color }} />
                            <span className={styles.legendLabel}>{role.label}</span>
                        </div>
                    ))}
                    <div className={styles.legendItem}>
                        <span className={styles.premiumTag}>Premium</span>
                        <span className={styles.legendLabel}>Premium feature</span>
                    </div>
                </div>

                {/* components grid */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Functional Components</h2>
                    <div className={styles.compGrid}>
                        {components.map(comp => (
                            <ComponentCard key={comp.id} comp={comp} />
                        ))}
                    </div>
                </section>

                {/* architecture layers */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>System Architecture</h2>
                    <div className={styles.archWrapper}>
                        {layers.map((layer, i) => (
                            <div key={layer.id} className={styles.archLayer} style={{ '--layer-color': layer.color }}>
                                <div className={styles.archLabel}>{layer.label}</div>
                                <div className={styles.archItems}>
                                    {layer.items.map((item, j) => (
                                        <div key={j} className={styles.archItem}>{item}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* future iterations placeholder */}
                <section className={styles.section}>
                    
                    <h2 className={styles.sectionTitle}>Diagram Iterations</h2>
                    
                    <div className={styles.iterationsGrid}>
                        <div className={styles.iterCard + ' ' + styles.iterActive}>
                            <div className={styles.iterDot}/>
                            <div>
                                <span className={styles.iterTitle}>Current</span>
                                <span className={styles.iterSub}>Spring 2026</span>
                            </div>
                        </div>

                        {[1, 2, 3].map(n => (
                            <div key={n} className={styles.iterCard + ' ' + styles.iterPlaceholder}>
                                <div className={styles.iterDotEmpty} />
                                <div>
                                    <span className={styles.iterTitle}>Iteration {n}</span>
                                    <span className={styles.iterSub}>Coming soon</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    )
}