import { Link, useLocation} from 'react-router-dom'
import styles from './SectionHeader.module.css'

export default function SectionHeader( props ) {
    const location = useLocation()
    const paths = location.pathname.split('/').filter(Boolean)

    return (
        <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderContainer}>
                <h1>{props.title}</h1>
                {props.subtitle && <p>{props.subtitle}</p>}
            </div>
        </div>
    )
}