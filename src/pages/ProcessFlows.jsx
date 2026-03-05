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
        null,
        null,
        "Displays current prices only\nNo historical pricing data\nNo cross-store aggregation",
        "Other store prices not visible\nAssumes visible price reflects market",
        "Promotions may change\nConditional discounts apply\nPrice adjustments possible",
        "Tax applied\nFinal total calculated",
        null,
    ],
    gaps: [
        null,
        "Budget estimated mentally",
        "Cannot determine if price is good\nManual comparison required\nLimited transparency",
        "Decision based on incomplete data\nHabit-driven bias",
        "Assumes best price\nRunning total unclear",
        "Unexpected total\nBudget miscalculation",
        "No price history insight\nNo learning feedback loop\nProcess repeats next week",
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
        null,
        "Displays current prices only\nNo historical pricing data\nNo cross-store aggregation",
        "Other store prices not visible\nAssumes visible price reflects market",
        "Promotions may change\nConditional discounts apply\nPrice adjustments possible",
        "Tax applied\nFinal total calculated",
        null,
    ],
    gaps: [
        null,
        "Budget estimated mentally",
        "Cannot determine if price is good\nManual comparison required\nLimited transparency",
        "Decision based on incomplete data\nHabit-driven bias",
        "Unexpected total\nBudget miscalculation",
        null,
    ],
}

function FlowRow({label, steps, color}){ 
    return(
        <div>

        </div>
    )
}

function FlowDiagram({title, flow, description}){ 
    return(
        <div>

        </div>
    )
}

export default function ProcessFlows(){ 
    return( 
        <>
            <PageHeader 
                title="Process Flows"
                subtitle="How grocery shopping works today vs. with GroceryWatch"
            />

            <div className={''}>
                <FlowDiagram>

                </FlowDiagram>
            </div>

        </>
    )
}