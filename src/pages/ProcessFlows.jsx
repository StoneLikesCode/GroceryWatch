import PageHeader from '../components/PageHeader'
import styles from '../pages/ProcessFlows.module.css'

const currentFlow = {
    shopper: [],
    system: [],
    gaps: [],
}
const solutionFlow = {
    shopper: [],
    system: [],
    gaps: [],
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