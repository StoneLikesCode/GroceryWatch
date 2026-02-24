import { Link, useLocation} from 'react-router-dom'
import styles from './PageHeader.module.css'

export default function PageHeader( props ) {
    const location = useLocation()
    const paths = location.pathname.split('/').filter(Boolean)

    return (
        <div className={styles.pageHeader}>
            <div className={styles.pageHeaderContainer}>
                <nav className={styles.breadcrumb}>
                    <Link to='/'>Home</Link>
                    {paths.map((path, index) => (
                        <span key={index}>
                            <span className={styles.separator}></span>
                            <span className={styles.crumb}>
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                            </span>
                        </span>
                    ))}
                </nav>
                <div className={styles.accent}></div>
                <h1>{props.title}</h1>
                {props.subtitle && <p>{props.subtitle}</p>}
            </div>
        </div>
    )
}