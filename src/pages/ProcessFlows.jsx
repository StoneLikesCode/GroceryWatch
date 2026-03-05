import PageHeader from '../components/PageHeader'
import styles from '../pages/ProcessFlows.module.css'

const currentFlow = {
    shopper: [
        "Needs weekly grocery items",
        "Creates grocery list",
        "Checks current store pricing",
        "Chooses store based on visible pricing",
        "Proceeds to checkout",
        "Finalizes purchase",
        "Spends more than anticipated",
    ],
    system: [
        "- Displays current prices only\n- No historical pricing data\n- No cross-store aggregation",
        "- Other store prices not visible\n- Assumes visible price reflects market",
        "- Promotions may change\n- Conditional discounts apply\n- Price adjustments possible",
        "- Tax applied\n- Final total calculated",
    ],
    gaps: [
        "Budget estimated mentally",
        "- Cannot determine if price is good\n- Manual comparison required\n- Limited transparency",
        "- Decision based on incomplete data\n- Habit-driven bias",
        "- Assumes best price\n- Running total unclear",
        "- Unexpected total\n- Budget miscalculation",
        "- No price history insight\n- No learning feedback loop\n- Process repeats next week",
    ],
}
const solutionFlow = {
    shopper: [
        "Needs weekly grocery items",
        "Opens GroceryWatch and logs in",
        "Creates grocery list using cart builder",
        "Checks pricing using app database for quick comparison and graphs",
        "Proceeds to checkout with option to apply coupons",
        "Finalizes purchase",
    ],
    system: [
        "- Displays current prices only\n- No historical pricing data\n- No cross-store aggregation",
        "- Other store prices not visible\n- Assumes visible price reflects market",
        "- Promotions may change\n- Conditional discounts apply\n- Price adjustments possible",
        "- Tax applied\n- Final total calculated",
    ],
    gaps: [
        "Budget estimated mentally",
        "- Cannot determine if price is good\n- Manual comparison required\n- Limited transparency",
        "- Decision based on incomplete data\n- Habit-driven bias",
        "- Unexpected total\n- Budget miscalculation",
    ],
}

function FlowRow({ label, steps, color }) {
    return (
        <div className={styles.row}>
            <div className={styles.rowLabel} style={{ borderColor: color, color }}>
                {label}
            </div>
            <div className={styles.steps}>
                {steps.map((item, i) => (
                    <div key={i} className={styles.stepWrapper}>
                        {item ? (
                            <div className={styles.step} style={{ borderColor: color }}>
                                {item.split('\n').map((line, j) => (
                                    <span key={j}>{line}</span>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.stepEmpty} />
                        )}
                        {i < steps.length - 1 && item && (
                            <div className={styles.arrow}>→</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

function FlowDiagram({ title, flow, description }) {
    return (
        <div className={styles.diagram}>
            <div className={styles.diagramHeader}>
                <div className={styles.dot} />
                <h2 className={styles.diagramTitle}>{title}</h2>
            </div>
            {description && <p className={styles.diagramDesc}></p>}
            <div className={styles.flowGrid}>
                <FlowRow label="Shopper" steps={flow.shopper} color="var(--sitegreen)" />
                <FlowRow label={title.includes("Current") ? "Current System" : "GroceryWatch"} steps={flow.system} color="#60a5fa"/>
                <FlowRow label={title.includes("Current") ? "Inefficiencies / Gaps" : "Improvements"} steps={flow.gaps} color="#f87171"/>
            </div>
        </div>
    )
}

export default function ProcessFlows() {
    return (
        <>
            <PageHeader
                title="Process Flows"
                subtitle="How grocery shopping works today vs. with GroceryWatch"
            />

            <div className={styles.wrapper}>
                <FlowDiagram 
                    title="Current Process Flow"
                    description="The existing grocery shopping experience and where it breaks down."
                    flow={currentFlow}
                />
                <FlowDiagram 
                    title="Solution Process Flow"
                    description="How GroceryWatch improves the experience at every step."
                    flow={solutionFlow}
                />
            </div>
        </>
    )
}