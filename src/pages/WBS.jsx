import PageHeader from '../components/PageHeader'
import styles from './WBS.module.css'

const overview = [
    {
        id: 'ui',
        title: 'User Interface',
        color: '#4ba173',
        items: ['Login Menu', 'User Profile', 'Favorites', 'Settings (Language, Preferences, Payment, Support)'],
    },
    {
        id: 'external',
        title: 'External Integrations',
        color: '#60a5fa',
        items: ['Notification API', 'Calendar API', 'Account Sign-in API', 'Location Services', 'Reviews API', 'E-mail Services', 'In-App Browser'],
    },
    {
        id: 'algorithms',
        title: 'Algorithms & Analysis',
        color: '#ffc107',
        items: ['Data Analysis & Recommendation', 'Badge / Rewards System'],
    },
    {
        id: 'database',
        title: 'Database Management',
        color: '#f87171',
        items: ['User Profile Data', 'Badge / Rewards Data'],
    },
    {
        id: 'testing',
        title: 'Testing & Quality',
        color: '#c084fc',
        items: ['Unit Tests', 'Integration Tests', 'System Tests', 'User Acceptance Testing'],
    },
]

const detailed = [
    {
        id: 'ui-detail',
        title: 'User Interface',
        color: '#4ba173',
        sections: [
            {
                label: 'All Roles',
                items: [
                    'Account Creation / Deletion',
                    'Profile Management',
                    'Rewards & Incentives',
                    'Basic Tools & Features',
                    'Technical Support / FAQ',
                    'Map Integration / Location Services',
                ],
            },
            {
                label: 'Administrator Only',
                items: ['Moderate Reviews / Resolve Issues', 'Database Management & Analytics'],
            },
            {
                label: 'Premium Shopper Only',
                items: ['Premium Tools & Features with Filters'],
            },
            {
                label: 'Stores Only',
                items: ['Advertising'],
            },
        ],
    },
    {
        id: 'ext-detail',
        title: 'External Integrations',
        color: '#60a5fa',
        sections: [
            {
                label: 'Notification API',
                items: ['Android/iOS Live Activities', 'Persistent Push Notifications & Badges', 'Two-factor Authentication', 'SMS Alerts'],
            },
            {
                label: 'Calendar API',
                items: ['Automatic Parsing & Event Detection (Apple/Google/Outlook)', 'Perishable Items Expiration Date', 'Special Holiday Deals / Clearance Deadlines'],
            },
            {
                label: 'Account Sign-in API',
                items: ['HTTPS Encryption', 'Online HTML or In-App Sign-in form', 'Forgot Username/Password Page', 'Google Password Manager / iCloud Keychain'],
            },
            {
                label: 'Location Services',
                items: ['Up-to-date map of partnered stores (Google/Apple)', 'Precise location tracking / GPS', 'Delivery API (USPS, Instacart, Walmart Spark)'],
            },
            {
                label: 'Customer Reviews API',
                items: ['Native 5-star rating (Recents, Photos, Top Comments)', 'Google Reviews, Trustpilot, or Yelp API', 'Web Scraping fallback'],
            },
            {
                label: 'E-mail Services',
                items: ['Gmail / iCloud API', 'Technical Support', 'New Account Verification', 'Coupons, Advertisements & Promotions'],
            },
            {
                label: 'In-App Browser',
                items: ['No external redirect unless required', 'Sandboxed to avoid malware', 'Simpler than full-browsing with minimal caching'],
            },
        ],
    },
    {
        id: 'algo-detail',
        title: 'Algorithms & Analysis',
        color: '#ffc107',
        sections: [
            {
                label: 'Cloud Computing',
                items: ['Encryption Algorithms (AES, RSA, SHA-256)', 'Online Order History'],
            },
            {
                label: 'Local Date-Time / Duration Facility',
                items: ['Date-Time for Sales & Special Deals'],
            },
            {
                label: 'Budget Creation & Tracking',
                items: ['Cart-builder', 'Optical Character Recognition (OCR) to scan physical receipts'],
            },
            {
                label: 'Data Analysis & Recommendation',
                items: ['Machine Learning for Anomalous Sale Detection & Trends', 'Price Comparison Engine', 'Webpage Scraping'],
            },
            {
                label: 'Rewards System',
                items: ['Reward Points from engagement (Premium earns more per purchase)', 'Points redeemable for food, items, or perks / discounts'],
            },
        ],
    },
    {
        id: 'db-detail',
        title: 'Database Management',
        color: '#f87171',
        sections: [
            {
                label: 'Partnered Store Tables',
                items: ['Regularly-updated Featured Foods List', 'Contact Info', 'Operating Hours'],
            },
            {
                label: 'Gamification Tables',
                items: ['Catalogue of rewards and badges with required redemption points', 'Tied to each individual user'],
            },
            {
                label: 'User Tables',
                items: ['User Profiles / Preferences', 'Location History', 'Dietary Restrictions', 'Favorites'],
            },
            {
                label: 'Finance Tables',
                items: ['User Budget', 'Credit Data', 'Transactions / Order History'],
            },
            {
                label: 'Real-time Data & Analytics',
                items: ['Stakeholder Analytical Charts', 'Activity Logs', 'Images & Reviews'],
            },
        ],
    },
    {
        id: 'test-detail',
        title: 'Testing & Quality',
        color: '#c084fc',
        sections: [
            {
                label: 'Unit Testing',
                items: ['Algorithms', 'UI/UX Components', 'Functions'],
            },
            {
                label: 'Integration Testing',
                items: ['Frontend/Backend API Calls', 'Database Integration'],
            },
            {
                label: 'System Testing',
                items: ['Security', 'Functionality', 'Performance', 'Stability', 'Data Validation', 'End-to-End External Systems'],
            },
            {
                label: 'User Acceptance Testing',
                items: ['Validating User Roles', 'Accessibility', 'Usability', 'Behavior'],
            },
        ],
    },
]

const sprints = [
    { num: 1, weeks: 'Wks 1–2', focus: 'Setup & Auth', story: 'Account creation, login, location setup', features: 'Login/Auth, Location/Account Management', tables: 'USER, LOCATION' },
    { num: 2, weeks: 'Wks 3–4', focus: 'Item Search & Price Comparison', story: 'Search item, view prices at nearby stores', features: 'Price Comparison, Item Search API', tables: 'ITEM, INVENTORY, STORE' },
    { num: 3, weeks: 'Wks 5–6', focus: 'Cart Builder & Cart Compare', story: 'Build cart, compare total across stores', features: 'Cart Comparison, Cart API', tables: 'CART, CART_ITEM, INVENTORY' },
    { num: 4, weeks: 'Wks 7–8', focus: 'Price History & Sale Alerts', story: 'View price history, flag misleading sales', features: 'Price History Tracker, Anomalous Sale Marking', tables: 'PRICE_HISTORY (anomalous_flag)' },
    { num: 5, weeks: 'Wks 9–10', focus: 'Reviews & Map Locator', story: 'Leave store reviews, find stores on map', features: 'Reviews, Interactive Store Locator, Maps API', tables: 'REVIEW, STORE, LOCATION' },
    { num: 6, weeks: 'Wks 11–12', focus: 'Rewards, Alerts & Deluxe', story: 'Earn points, get price drop notifications', features: 'Rewards, Notifications, Price After Tax', tables: 'REWARD, STORE_REWARD, PRICE_HISTORY' },
    { num: 7, weeks: 'Wks 13–14', focus: 'Admin, Polish & QA', story: 'Moderate reviews, flag bad data, support page', features: 'Admin Tools, Price Report, Analytics, FAQ', tables: 'PRICE_REPORT, REVIEW (flagged), USER' },
]

export default function WBS() {
    return (
        <>
            <PageHeader
                title="Work Breakdown Structure"
                subtitle="Project decomposition across all phases — Spring 2026"
            />
            <div className={styles.wrapper}>

                {/* top-level overview */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Top-Level Breakdown</h2>
                    <div className={styles.rootNode}>GroceryWatch</div>
                    <div className={styles.overviewGrid}>
                        {overview.map(branch => (
                            <div key={branch.id} className={styles.branchCard} style={{ '--branch-color': branch.color }}>
                                <div className={styles.branchHeader}>{branch.title}</div>
                                <ul className={styles.branchList}>
                                    {branch.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* detailed sections */}
                {detailed.map(branch => (
                    <section key={branch.id} className={styles.section}>
                        <h2 className={styles.sectionTitle} style={{ color: branch.color }}>{branch.title} — Detail</h2>
                        <div className={styles.detailGrid}>
                            {branch.sections.map((sec, i) => (
                                <div key={i} className={styles.detailCard} style={{ '--branch-color': branch.color }}>
                                    <div className={styles.detailLabel}>{sec.label}</div>
                                    <ul className={styles.detailList}>
                                        {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* sprint breakdown */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Sprint Breakdown</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.sprintTable}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Weeks</th>
                                    <th>Sprint Focus</th>
                                    <th>User Stories</th>
                                    <th>Features</th>
                                    <th>DB Tables</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sprints.map(s => (
                                    <tr key={s.num}>
                                        <td className={styles.sprintNum}>{s.num}</td>
                                        <td className={styles.sprintWeeks}>{s.weeks}</td>
                                        <td className={styles.sprintFocus}>{s.focus}</td>
                                        <td>{s.story}</td>
                                        <td>{s.features}</td>
                                        <td className={styles.sprintTables}>{s.tables}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </>
    )
}
