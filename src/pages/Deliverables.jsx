import { HashLink } from 'react-router-hash-link'
import PageHeader from '../components/PageHeader'
import styles from './Deliverables.module.css'

const deliverables = [
    {
        icon: '🔄',
        title: 'Process Flows',
        description: 'Current and solution process flows showing how grocery shopping works today vs. with GroceryWatch — including pain points, gaps, and improvements at each step.',
        to: '/ProcessFlows',
        status: 'live',
    },
    {
        icon: '🧩',
        title: 'Major Functional Components Diagram',
        description: 'System architecture, role-based feature access, and component breakdown across Account Management, Price Comparison, Tracking, and Store Discovery.',
        to: '/MFCD',
        status: 'live',
    },
    {
        icon: '📊',
        title: 'Competition Matrix',
        description: 'Feature-by-feature comparison of GroceryWatch against 6 competitors including Basket, Amazon, and Instacart — highlighting our key differentiators.',
        to: '/CompetitionMatrix',
        status: 'live',
    },
    {
        icon: '📋',
        title: 'Feature Table',
        description: 'Categorized feature matrix covering Price Intelligence, Shopping Tools, and Discovery — with premium feature tagging and competitor scoring.',
        to: '/CompetitionMatrix',
        status: 'live',
    },
    {
        icon: '⚠️',
        title: 'Risk Matrices',
        description: 'User, Customer, and Technical risk matrices with likelihood/impact analysis and mitigation strategies for identified project risks.',
        to: '/RiskMatrices',
        status: 'live',
    },
    {
        icon: '🗂️',
        title: 'WBS Diagrams',
        description: 'Work Breakdown Structure diagrams decomposing the project into deliverable-oriented components across all phases.',
        status: 'soon',
    },
    {
        icon: '🗄️',
        title: 'Database Schema',
        description: 'Entity-relationship diagram and schema definition for the GroceryWatch data layer — users, products, stores, prices, and history.',
        status: 'soon',
    },
    {
        icon: '⚙️',
        title: 'Algorithms',
        description: 'Core algorithmic designs including price aggregation, anomalous sale detection, and cart-level store comparison logic.',
        status: 'soon',
    },
    {
        icon: '🎨',
        title: 'UI/UX Mockups',
        description: 'High-fidelity wireframes and design mockups for key screens including the cart builder, price history graphs, and store locator.',
        status: 'soon',
    },
]

function DeliverableCard({ icon, title, description, to, status }) {
    return (
        <div className={`${styles.card} ${status === 'live' ? styles.cardLive : styles.cardSoon}`}>
            <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{icon}</span>
                <span className={`${styles.badge} ${status === 'live' ? styles.badgeLive : styles.badgeSoon}`}>
                    {status === 'live' ? 'Live' : 'Coming Soon'}
                </span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
            {status === 'live' && (
                <HashLink smooth to={to} className={styles.cardLink}>
                    View →
                </HashLink>
            )}
        </div>
    )
}

export default function Deliverables() {
    return (
        <>
            <PageHeader
                title="Deliverables"
                subtitle="Key project artifacts created throughout the semester"
            />
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    {deliverables.map((d) => (
                        <DeliverableCard key={d.title} {...d} />
                    ))}
                </div>
            </div>
        </>
    )
}
