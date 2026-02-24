import styles from './Member.module.css'

export default function Member(props){ 
    return(
        <div className={styles.card}>
            <div className={styles.avatar}>
                {props.name.charAt(0)}
                {/* change to image later */}
            </div>
            <h3 className={styles.name}>{props.name}</h3>
            <span className={styles.role}>{props.role}</span>
            <p className={styles.bio}>{props.bio}</p>
        </div>
    )
}
