import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import styles from '../pages/References.module.css'

const references = [
    {
        id: 'REF-1',
        authors: 'USDA Food and Nutrition Service',
        title: 'USDA Food Plans: Monthly Cost of Food Reports',
        publisher: 'USDA Food and Nutrition Service',
        date: '30 Jul. 2025',
        url: 'https://www.fns.usda.gov/research/cnpp/usda-food-plans/cost-food-monthly-reports',
        mla: 'USDA Food and Nutrition Service. "USDA Food Plans: Monthly Cost of Food Reports." USDA Food and Nutrition Service, 30 Jul. 2025, www.fns.usda.gov/research/cnpp/usda-food-plans/cost-food-monthly-reports.',
        category: 'Government',
        usedIn: 'Background, Slide 5',
    },
    {
        id: 'REF-2',
        authors: 'Yahoo Finance',
        title: '6 Apps to Help You Save Money on Groceries in 2025',
        publisher: 'Yahoo Finance',
        date: '13 Feb. 2025',
        url: 'https://finance.yahoo.com/news/6-apps-help-save-money-200105378.html',
        mla: 'Yahoo Finance. "6 Apps to Help You Save Money on Groceries in 2025." Yahoo Finance, 13 Feb. 2025, finance.yahoo.com/news/6-apps-help-save-money-200105378.html.',
        category: 'News',
        usedIn: 'Competition Analysis',
    },
    {
        id: 'REF-3',
        authors: 'Pew Research Center',
        title: '5 Facts About Food Costs in America',
        publisher: 'Pew Research Center',
        date: '6 Jun. 2025',
        url: 'https://www.pewresearch.org/short-reads/2025/05/15/5-facts-about-food-costs-in-america/',
        mla: 'Pew Research Center. "5 Facts About Food Costs in America." Pew Research Center, 6 Jun. 2025, www.pewresearch.org/short-reads/2025/05/15/5-facts-about-food-costs-in-america/.',
        category: 'Research',
        usedIn: 'Background, Problem Statement',
    },
    {
        id: 'REF-4',
        authors: 'AOL',
        title: 'Nearly Half of Americans Say Convenience Costs Too Much — 5 Things That Are Worth It and 5 That Aren\'t',
        publisher: 'AOL News',
        date: '17 Feb. 2026',
        url: 'https://www.aol.com/articles/nearly-half-americans-convenience-costs-160005718.html',
        mla: 'AOL. "Nearly Half of Americans Say Convenience Costs Too Much — 5 Things That Are Worth It and 5 That Aren\'t." AOL News, 17 Feb. 2026, www.aol.com/articles/nearly-half-americans-convenience-costs-160005718.html.',
        category: 'News',
        usedIn: 'Consumer Behavior',
    },
    {
        id: 'REF-5',
        authors: 'MakeMyReceipt Research Team',
        title: 'Grocery Spending Statistics 2026: Average Bills, Food Prices, and Shopping Trends',
        publisher: 'MakeMyReceipt',
        date: '13 Feb. 2026',
        url: 'https://www.makemyreceipt.com/reports/grocery-spending-statistics',
        mla: 'MakeMyReceipt Research Team. "Grocery Spending Statistics 2026: Average Bills, Food Prices, and Shopping Trends." MakeMyReceipt, 13 Feb. 2026, www.makemyreceipt.com/reports/grocery-spending-statistics.',
        category: 'Research',
        usedIn: 'Background, Grocery Spending',
    },
    {
        id: 'REF-6',
        authors: 'Food & Wine',
        title: 'Consumer Reports Names the Most and Least Expensive Supermarkets in America',
        publisher: 'Food & Wine',
        date: '18 Feb. 2026',
        url: 'https://www.foodandwine.com/consumer-reports-ranks-most-and-least-expensive-supermarkets-11908047',
        mla: 'Food & Wine. "Consumer Reports Names the Most and Least Expensive Supermarkets in America." Food & Wine, 18 Feb. 2026, www.foodandwine.com/consumer-reports-ranks-most-and-least-expensive-supermarkets-11908047.',
        category: 'Industry',
        usedIn: 'Price Variation, Background',
    },
    {
        id: 'REF-7',
        authors: 'Business Wire',
        title: 'Datasembly Launches GPI 2.0: The Most Comprehensive Real-Time Grocery Price Index in the Nation',
        publisher: 'Business Wire',
        date: '25 Jul. 2023',
        url: 'https://www.businesswire.com/news/home/20230725142433/en/Datasembly-Launches-GPI-2.0-The-Most-Comprehensive-Real-time-Grocery-Price-Index-in-the-Nation',
        mla: 'Business Wire. "Datasembly Launches GPI 2.0: The Most Comprehensive Real-Time Grocery Price Index in the Nation." Business Wire, 25 Jul. 2023, www.businesswire.com/news/home/20230725142433/en/Datasembly-Launches-GPI-2.0-The-Most-Comprehensive-Real-time-Grocery-Price-Index-in-the-Nation.',
        category: 'Industry',
        usedIn: 'Pricing History, Problem Context',
    },
]

const CATEGORY_COLORS = {
    Government: { bg: 'rgba(59, 130, 246, 0.12)', border: 'rgba(59, 130, 246, 0.35)', text: '#93c5fd' },
    Research:   { bg: 'rgba(168, 85, 247, 0.12)', border: 'rgba(168, 85, 247, 0.35)', text: '#c084fc' },
    News:       { bg: 'rgba(234, 179, 8, 0.12)',  border: 'rgba(234, 179, 8, 0.35)',  text: '#facc15' },
    Industry:   { bg: 'rgba(75, 161, 115, 0.12)', border: 'rgba(75, 161, 115, 0.35)', text: '#4ba173' },
}

export default function References() {
    const [query, setQuery] = useState('')
    const [copied, setCopied] = useState(null)

    const filtered = references.filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.authors.toLowerCase().includes(query.toLowerCase()) ||
        r.mla.toLowerCase().includes(query.toLowerCase()) ||
        r.usedIn.toLowerCase().includes(query.toLowerCase())
    )

    function copyMLA(ref) {
        navigator.clipboard.writeText(ref.mla)
        setCopied(ref.id)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <>
            <PageHeader
                title="References"
                subtitle="Sources cited throughout the GroceryWatch project presentation"
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
                            placeholder="Search by title, author, or topic…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        {query && (
                            <button className={styles.clearBtn} onClick={() => setQuery('')}>✕</button>
                        )}
                    </div>
                    <span className={styles.count}>{filtered.length} source{filtered.length !== 1 ? 's' : ''}</span>
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

                {/* reference cards */}
                <div className={styles.list}>
                    {filtered.length === 0 ? (
                        <div className={styles.empty}>No references match "<strong>{query}</strong>"</div>
                    ) : (
                        filtered.map(ref => {
                            const colors = CATEGORY_COLORS[ref.category]
                            return (
                                <div key={ref.id} className={styles.card}>
                                    <div className={styles.cardTop}>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.refId}>{ref.id}</span>
                                            <span
                                                className={styles.categoryTag}
                                                style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                                            >
                                                {ref.category}
                                            </span>
                                            <span className={styles.usedIn}>Used in: {ref.usedIn}</span>
                                        </div>
                                        <button
                                            className={`${styles.copyBtn} ${copied === ref.id ? styles.copied : ''}`}
                                            onClick={() => copyMLA(ref)}
                                            title="Copy MLA citation"
                                        >
                                            {copied === ref.id ? (
                                                <>
                                                    <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                                                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    Copied
                                                </>
                                            ) : (
                                                <>
                                                    <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                                                        <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                                        <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" stroke="currentColor" strokeWidth="1.5"/>
                                                    </svg>
                                                    Copy MLA
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <h3 className={styles.title}>{ref.title}</h3>
                                    <p className={styles.authors}>{ref.authors} · {ref.publisher} · {ref.date}</p>

                                    <div className={styles.mlaBlock}>
                                        <span className={styles.mlaLabel}>MLA</span>
                                        <p className={styles.mlaText}>{ref.mla}</p>
                                    </div>

                                    <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                                            <path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path d="M10 2h4v4M14 2L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        {ref.url.replace(/^https?:\/\//, '').substring(0, 60)}{ref.url.length > 63 ? '…' : ''}
                                    </a>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}