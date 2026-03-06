import PageHeader from '../components/PageHeader'
import styles from '../pages/RiskMatrices.module.css'

const LIKELIHOOD = ['Very Low', 'Low', 'Medium', 'High', 'Very High']
const IMPACT     = ['Very Low', 'Low', 'Medium', 'High', 'Very High']
const VeryLow = 0
const Low = 1
const Medium = 2
const High = 3
const VeryHigh = 4

// risk level determined by likelihood index + impact index
function riskLevel(lIdx, iIdx) {
    const score = lIdx + iIdx
    if (score >= 6) return 'high'
    if (score >= 4) return 'medium'
    return 'low'
}

const matrices = [
    {
        id: 'user',
        title: 'User Risk Matrix',
        subtitle: 'Risks affecting end-user experience and trust',
        risks: [
            {
                id: 'UR-1',
                name: 'Incorrect Price Information',
                description: 'Users receive inaccurate or out-of-date pricing data.',
                likelihood: Medium,
                impact: VeryHigh, 
            },
            {
                id: 'UR-2',
                name: 'Fake Reviews',
                description: 'Users submit fraudulent store or item reviews.',
                likelihood: High, 
                impact: Medium, 
            },
            {
                id: 'UR-3',
                name: 'Lack of User Participation',
                description: 'Low engagement leads to stale data and reduced platform value.',
                likelihood: Medium, 
                impact: High,  
            },
            {
                id: 'UR-4',
                name: 'User Privacy Data Usage',
                description: 'Misuse or overreach of collected user location and behavior data.',
                likelihood: High, 
                impact: Medium,
            },
        ],
        mitigations: [
            { id: 'UM-1', risk: 'UR-1', text: 'Allow users to report price discrepancies.', likelihood: Low, impact: Low},
            { id: 'UM-2', risk: 'UR-2', text: 'Moderate reviews and allow community flagging.', likelihood: VeryLow, impact: Low},
            { id: 'UM-3', risk: 'UR-3', text: 'Implement a rewards system to incentivize participation.', likelihood: Low, impact: Low },
            { id: 'UM-4', risk: 'UR-4', text: 'Allow users to opt out of various data collection.', likelihood: Low, impact: VeryLow },
        ],
    },
    {
        id: 'customer',
        title: 'Customer Risk Matrix',
        subtitle: 'Risks affecting paying customers and business partners',
        risks: [
            {
                id: 'CR-1',
                name: 'Inaccurate Prices Damage Store Reputation',
                description: 'Incorrectly reported prices reflect poorly on partnered stores.',
            },
            {
                id: 'CR-2',
                name: 'Low Ad Engagement',
                description: 'Advertisers see poor return on investment due to low click-through rates.',
            },
        ],
        mitigations: [
            { id: 'CM-1', risk: 'CR-1', text: 'Use multiple data sources to cross-validate pricing.'},
            { id: 'CM-2', risk: 'CR-2', text: 'Improve ad targeting through better data integration.'},
        ],
    },
    {
        id: 'technical',
        title: 'Technical Risk Matrix',
        subtitle: 'Risks related to system reliability and data integrity',
        risks: [
            {
                id: 'TR-1',
                name: 'Inability to Get Real-Time Pricing',
                description: 'Failure to access live store pricing data renders the core feature unusable.',
            },
            {
                id: 'TR-2',
                name: 'Server Downtime',
                description: 'Application becomes unavailable due to hosting failure.',    
            },
            {
                id: 'TR-3',
                name: 'Data Mismatch for Product or Pricing',
                description: 'Product or price records become inconsistent across data sources.',   
            },
        ],
        mitigations: [
            { id: 'TM-1', risk: 'TR-1', text: 'Offer store partnerships and use official APIs for direct data access.'},
            { id: 'TM-2', risk: 'TR-2', text: 'Use two hosting services so there is a backup when one goes down.'},
            { id: 'TM-3', risk: 'TR-3', text: 'Include automatic price updates and allow users to submit issue reports.'},
        ],
    },
]

function MatrixGrid({ risks, mitigations }) {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.yAxisLabel}>Likelihood →</div>
            <div className={styles.grid}>
                {/* column headers (likelihood) */}
                <div className={styles.cornerCell} />
                {LIKELIHOOD.map(label => (
                    <div key={label} className={styles.headerCell}>{label}</div>
                ))}

                {/* rows (Impact, high → low) */}
                {[...IMPACT].reverse().map((lLabel, rowIdx) => {
                    const lIdx = IMPACT.length - 1 - rowIdx
                    return (
                        <>
                            <div key={lLabel} className={styles.rowHeader}>{lLabel}</div>
                            {LIKELIHOOD.map((_, iIdx) => {
                                const level = riskLevel(lIdx, iIdx)
                                const cellRisks = risks.filter(
                                    r => r.impact === lIdx && r.likelihood === iIdx
                                )
                                const cellMitigations = mitigations.filter(
                                    m => m.likelihood !== undefined &&
                                         m.impact === lIdx && m.likelihood === iIdx
                                )
                                return (
                                    <div
                                        key={iIdx}
                                        className={`${styles.cell} ${styles[level]}`}
                                    >
                                        {cellRisks.map(r => (
                                            <span key={r.id} className={styles.riskBadge} title={r.name}>
                                                {r.id}
                                            </span>
                                        ))}
                                        {cellMitigations.map(m => (
                                            <span key={m.id} className={styles.mitigationBadge} title={m.text}>
                                                {m.id}
                                            </span>
                                        ))}
                                    </div>
                                )
                            })}
                        </>
                    )
                })}
            </div>
            <div className={styles.xAxisLabel}>← Impact</div>
        </div>
    )
}

function RiskTable({ risks, mitigations }) {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Risk</th>
                        <th>Likelihood</th>
                        <th>Impact</th>
                        <th>Level</th>
                        <th>Mitigation</th>
                    </tr>
                </thead>
                <tbody>
                    {risks.map(risk => {
                        const level = riskLevel(risk.likelihood, risk.impact)
                        const mitigation = mitigations.find(m => m.risk === risk.id)
                        return (
                            <tr key={risk.id}>
                                <td className={styles.idCell}>{risk.id}</td>
                                <td className={styles.nameCell}>
                                    <span className={styles.riskName}>{risk.name}</span>
                                    <span className={styles.riskDesc}>{risk.description}</span>
                                </td>
                                <td className={styles.centeredCell}>{LIKELIHOOD[risk.likelihood]}</td>
                                <td className={styles.centeredCell}>{IMPACT[risk.impact]}</td>
                                <td className={styles.centeredCell}>
                                    <span className={`${styles.levelBadge} ${styles[level]}`}>
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </span>
                                </td>
                                <td className={styles.mitigationCell}>
                                    {mitigation
                                        ? <><span className={styles.mitigationId}>{mitigation.id}</span> {mitigation.text}</>
                                        : '—'
                                    }
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default function RiskMatrices() {
    return (
        <>
            <PageHeader
                title="Risk Matrices"
                subtitle="Identified risks, impact analysis, and mitigations across all domains"
            />

            <div className={styles.wrapper}>

                {/* legend */}
                <div className={styles.legend}>
                    {[
                        { level: 'high',   label: 'High Risk' },
                        { level: 'medium', label: 'Medium Risk' },
                        { level: 'low',    label: 'Low Risk' },
                    ].map(({ level, label }) => (
                        <div key={level} className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles[level]}`} />
                            <span className={styles.legendLabel}>{label}</span>
                        </div>
                    ))}
                </div>

                {/* one section per matrix */}
                {matrices.map(matrix => (
                    <section key={matrix.id} className={styles.matrixSection}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.dot} />
                            <div>
                                <h2 className={styles.sectionTitle}>{matrix.title}</h2>
                                <p className={styles.sectionSubtitle}>{matrix.subtitle}</p>
                            </div>
                        </div>

                        <div className={styles.matrixBody}>
                            <MatrixGrid risks={matrix.risks} mitigations={matrix.mitigations}/>
                            <RiskTable risks={matrix.risks} mitigations={matrix.mitigations} />
                        </div>
                    </section>
                ))}

            </div>
        </>
    )
}