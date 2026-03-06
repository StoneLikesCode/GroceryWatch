import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import styles from '../pages/Glossary.module.css'

const terms = [
    { term: 'API', category: 'Technical', definition: 'Application Programming Interface — a set of rules that allows different software systems to communicate with each other. Used to fetch real-time pricing data from store systems.' },
    { term: 'Barcode Scanning', category: 'Feature', definition: 'A feature that allows users to scan a product barcode using their device camera to instantly look up and compare prices across stores.' },
    { term: 'Crowdsourced Data', category: 'Data', definition: 'Pricing or product information submitted by app users rather than directly from stores. Relies on community participation to stay accurate and up to date.' },
    { term: 'Customer', category: 'Stakeholder', definition: 'A paying business partner such as a grocery store or advertiser who uses GroceryWatch to reach shoppers or maintain accurate store listings.' },
    { term: 'Data Mismatch', category: 'Risk', definition: 'An inconsistency between product or price records across different data sources, which can lead to incorrect information being shown to users.' },
    { term: 'Engagement', category: 'Metric', definition: 'A measure of how actively users interact with the app — including submitting prices, writing reviews, and using core features regularly.' },
    { term: 'Flyer Integration', category: 'Feature', definition: 'The ability to import and display weekly store flyers within the app, giving users visibility into current sales and promotions.' },
    { term: 'Geolocation', category: 'Technical', definition: 'The use of a device\'s GPS or network data to determine a user\'s physical location, used to surface nearby stores and relevant pricing.' },
    { term: 'GroceryWatch', category: 'Product', definition: 'The name of the grocery price comparison application being developed. Allows users to compare prices across local stores in real time.' },
    { term: 'Impact', category: 'Risk', definition: 'In the context of risk analysis, the severity of harm that would result if a given risk were to occur. Rated from Very Low to Very High.' },
    { term: 'Likelihood', category: 'Risk', definition: 'In the context of risk analysis, the probability that a given risk event will occur. Rated from Very Low to Very High.' },
    { term: 'Mitigation', category: 'Risk', definition: 'A planned action or strategy designed to reduce the likelihood or impact of an identified risk.' },
    { term: 'MVP', category: 'Product', definition: 'Minimum Viable Product — the earliest functional version of the app that delivers core value to users with the least development effort.' },
    { term: 'Price Comparison', category: 'Feature', definition: 'The core feature of GroceryWatch, allowing users to view and compare the prices of specific grocery items across multiple nearby stores.' },
    { term: 'Real-Time Pricing', category: 'Data', definition: 'Up-to-the-moment price data fetched directly from store systems or APIs, ensuring users see current prices rather than outdated information.' },
    { term: 'Review', category: 'Feature', definition: 'A user-submitted rating or comment about a store or product. Reviews are subject to moderation to prevent fraudulent or misleading submissions.' },
    { term: 'Risk Level', category: 'Risk', definition: 'A combined score derived from a risk\'s likelihood and impact ratings. Classified as Low, Medium, or High to prioritize mitigation efforts.' },
    { term: 'Risk Matrix', category: 'Risk', definition: 'A grid-based tool used to visualize and assess identified risks by plotting their likelihood against their potential impact.' },
    { term: 'Server Downtime', category: 'Risk', definition: 'A period during which the application\'s hosting infrastructure is unavailable, making the app inaccessible to users.' },
    { term: 'Stakeholder', category: 'Stakeholder', definition: 'Any individual or group with an interest in the project — including end users, paying customers, the development team, and investors.' },
    { term: 'Unit Testing', category: 'Technical', definition: 'A software testing method where individual components or functions are tested in isolation to verify they behave as expected.' },
    { term: 'User', category: 'Stakeholder', definition: 'An end user of the GroceryWatch app — typically a shopper who uses the platform to find the best prices on grocery items near them.' },
    { term: 'UX', category: 'Design', definition: 'User Experience — the overall experience a person has when interacting with the app, including ease of use, visual design, and overall satisfaction.' },
]

const CATEGORY_COLORS = {
    Technical:   { bg: 'rgba(59, 130, 246, 0.12)', border: 'rgba(59, 130, 246, 0.35)', text: '#93c5fd' },
    Feature:     { bg: 'rgba(75, 161, 115, 0.12)', border: 'rgba(75, 161, 115, 0.35)', text: '#4ba173' },
    Data:        { bg: 'rgba(168, 85, 247, 0.12)', border: 'rgba(168, 85, 247, 0.35)', text: '#c084fc' },
    Risk:        { bg: 'rgba(239, 68, 68, 0.12)',  border: 'rgba(239, 68, 68, 0.35)',  text: '#f87171' },
    Metric:      { bg: 'rgba(234, 179, 8, 0.12)',  border: 'rgba(234, 179, 8, 0.35)',  text: '#facc15' },
    Product:     { bg: 'rgba(20, 184, 166, 0.12)', border: 'rgba(20, 184, 166, 0.35)', text: '#2dd4bf' },
    Stakeholder: { bg: 'rgba(249, 115, 22, 0.12)', border: 'rgba(249, 115, 22, 0.35)', text: '#fb923c' },
    Design:      { bg: 'rgba(236, 72, 153, 0.12)', border: 'rgba(236, 72, 153, 0.35)', text: '#f472b6' },
}

export default function Glossary() {
    const [query, setQuery] = useState('')

    const filtered = terms.filter(t =>
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.definition.toLowerCase().includes(query.toLowerCase())
    )

    //alphabetic grouping (by first letter)
    const grouped = filtered.reduce((acc, t) => {
        const letter = t.term[0].toUpperCase()
        if (!acc[letter]) acc[letter] = []
        acc[letter].push(t)
        return acc
    }, {})

    const letters = Object.keys(grouped).sort()

    return (
        <>
            <PageHeader
                title="Glossary"
                subtitle="Key terms, concepts, and definitions used throughout the GroceryWatch project"
            />

            <div className={styles.wrapper}>

                {/* search */}
                <div className={styles.searchRow}>
                    <div className={styles.searchBox}>
                        <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none">
                            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
                            <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                        <input
                            className={styles.searchInput}
                            type="text"
                            placeholder="Search terms or definitions…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        {query && (
                            <button className={styles.clearBtn} onClick={() => setQuery('')}>✕</button>
                        )}
                    </div>
                    <span className={styles.count}>{filtered.length} term{filtered.length !== 1 ? 's' : ''}</span>
                </div>

                {/* category legend */}
                <div className={styles.legend}>
                    {Object.entries(CATEGORY_COLORS).map(([cat, colors]) => (
                        <span
                            key={cat}
                            className={styles.legendTag}
                            style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                {/* grouped terms */}
                {letters.length === 0 ? (
                    <div className={styles.empty}>No terms match "<strong>{query}</strong>"</div>
                ) : (
                    letters.map(letter => (
                        <div key={letter} className={styles.group}>
                            <div className={styles.letterHeading}>
                                <span className={styles.letter}>{letter}</span>
                                <div className={styles.letterLine} />
                            </div>
                            <div className={styles.termsList}>
                                {grouped[letter].map(t => {
                                    const colors = CATEGORY_COLORS[t.category] || CATEGORY_COLORS.Technical
                                    return (
                                        <div key={t.term} className={styles.termCard}>
                                            <div className={styles.termHeader}>
                                                <span className={styles.termName}>{t.term}</span>
                                                <span
                                                    className={styles.categoryTag}
                                                    style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                                                >
                                                    {t.category}
                                                </span>
                                            </div>
                                            <p className={styles.termDef}>{t.definition}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}