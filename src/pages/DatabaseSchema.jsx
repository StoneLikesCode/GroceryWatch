import PageHeader from '../components/PageHeader'
import styles from './DatabaseSchema.module.css'

const tables = [
    {
        name: 'USER',
        color: '#4ba173',
        fields: [
            { name: 'user_id', type: 'INT', key: 'PK' },
            { name: 'name', type: 'VARCHAR' },
            { name: 'email', type: 'VARCHAR' },
            { name: 'password_hash', type: 'VARCHAR' },
            { name: 'user_role', type: 'ENUM' },
            { name: 'subscription_status', type: 'ENUM' },
            { name: 'creation_date', type: 'DATETIME' },
            { name: 'last_login', type: 'DATETIME' },
            { name: 'location_id', type: 'INT', key: 'FK' },
            { name: 'user_settings', type: 'JSON' },
        ],
    },
    {
        name: 'CART',
        color: '#60a5fa',
        fields: [
            { name: 'cart_id', type: 'INT', key: 'PK' },
            { name: 'user_id', type: 'INT', key: 'FK' },
            { name: 'creation_date', type: 'DATETIME' },
            { name: 'last_updated', type: 'DATETIME' },
        ],
    },
    {
        name: 'CART_ITEM',
        color: '#60a5fa',
        fields: [
            { name: 'cart_item_id', type: 'INT', key: 'PK' },
            { name: 'cart_id', type: 'INT', key: 'FK' },
            { name: 'item_id', type: 'INT', key: 'FK' },
            { name: 'quantity', type: 'INT' },
        ],
    },
    {
        name: 'ITEM',
        color: '#4ba173',
        fields: [
            { name: 'item_id', type: 'INT', key: 'PK' },
            { name: 'name', type: 'VARCHAR' },
            { name: 'brand', type: 'VARCHAR' },
            { name: 'category', type: 'VARCHAR' },
            { name: 'description', type: 'TEXT' },
            { name: 'UPC', type: 'VARCHAR' },
            { name: 'GTN', type: 'VARCHAR' },
            { name: 'size', type: 'VARCHAR' },
            { name: 'unit_of_measure', type: 'VARCHAR' },
            { name: 'creation_date', type: 'DATETIME' },
        ],
    },
    {
        name: 'INVENTORY',
        color: '#ffc107',
        fields: [
            { name: 'inventory_id', type: 'INT', key: 'PK' },
            { name: 'store_id', type: 'INT', key: 'FK' },
            { name: 'item_id', type: 'INT', key: 'FK' },
            { name: 'current_price', type: 'DECIMAL' },
            { name: 'tax_rate', type: 'DECIMAL' },
            { name: 'current_stock', type: 'INT' },
            { name: 'last_updated', type: 'DATETIME' },
        ],
    },
    {
        name: 'PRICE_HISTORY',
        color: '#ffc107',
        fields: [
            { name: 'price_history_id', type: 'INT', key: 'PK' },
            { name: 'inventory_id', type: 'INT', key: 'FK' },
            { name: 'price', type: 'DECIMAL' },
            { name: 'tax_rate', type: 'DECIMAL' },
            { name: 'timestamp', type: 'DATETIME' },
            { name: 'anomalous_flag', type: 'BOOLEAN' },
        ],
    },
    {
        name: 'STORE',
        color: '#f87171',
        fields: [
            { name: 'store_id', type: 'INT', key: 'PK' },
            { name: 'name', type: 'VARCHAR' },
            { name: 'address', type: 'VARCHAR' },
            { name: 'location_id', type: 'INT', key: 'FK' },
            { name: 'phone', type: 'VARCHAR' },
            { name: 'partner_status', type: 'BOOLEAN' },
            { name: 'creation_date', type: 'DATETIME' },
        ],
    },
    {
        name: 'LOCATION',
        color: '#f87171',
        fields: [
            { name: 'location_id', type: 'INT', key: 'PK' },
            { name: 'latitude', type: 'DECIMAL' },
            { name: 'longitude', type: 'DECIMAL' },
            { name: 'city', type: 'VARCHAR' },
            { name: 'state', type: 'VARCHAR' },
            { name: 'zip', type: 'VARCHAR' },
        ],
    },
    {
        name: 'REVIEW',
        color: '#c084fc',
        fields: [
            { name: 'review_id', type: 'INT', key: 'PK' },
            { name: 'user_id', type: 'INT', key: 'FK' },
            { name: 'store_id', type: 'INT', key: 'FK' },
            { name: 'location_id', type: 'INT', key: 'FK' },
            { name: 'rating', type: 'TINYINT' },
            { name: 'review_text', type: 'TEXT' },
            { name: 'creation_date', type: 'DATETIME' },
            { name: 'flagged', type: 'BOOLEAN' },
        ],
    },
    {
        name: 'PRICE_REPORT',
        color: '#c084fc',
        fields: [
            { name: 'report_id', type: 'INT', key: 'PK' },
            { name: 'user_id', type: 'INT', key: 'FK' },
            { name: 'item_id', type: 'INT', key: 'FK' },
            { name: 'store_id', type: 'INT', key: 'FK' },
            { name: 'reported_price', type: 'DECIMAL' },
            { name: 'status', type: 'ENUM' },
            { name: 'submission_date', type: 'DATETIME' },
        ],
    },
    {
        name: 'REWARD',
        color: '#4ba173',
        fields: [
            { name: 'reward_id', type: 'INT', key: 'PK' },
            { name: 'title', type: 'VARCHAR' },
            { name: 'description', type: 'TEXT' },
            { name: 'discount_value', type: 'DECIMAL' },
            { name: 'expiration_date', type: 'DATE' },
        ],
    },
    {
        name: 'STORE_REWARD',
        color: '#4ba173',
        fields: [
            { name: 'store_reward_id', type: 'INT', key: 'PK' },
            { name: 'store_id', type: 'INT', key: 'FK' },
            { name: 'reward_id', type: 'INT', key: 'FK' },
        ],
    },
]

const relationships = [
    'USER ──< CART (one user has many carts)',
    'CART ──< CART_ITEM (one cart has many items)',
    'CART_ITEM >── ITEM (many cart items reference one item)',
    'STORE ──< INVENTORY (one store stocks many items)',
    'ITEM ──< INVENTORY (one item appears in many store inventories)',
    'INVENTORY ──< PRICE_HISTORY (one inventory entry has many price records)',
    'USER ──< REVIEW >── STORE (users review stores)',
    'USER ──< PRICE_REPORT (users report price discrepancies)',
    'STORE >── LOCATION (stores have a location)',
    'USER >── LOCATION (users have a location)',
    'STORE ──< STORE_REWARD >── REWARD (stores offer rewards)',
]

function TableCard({ table }) {
    return (
        <div className={styles.tableCard} style={{ '--table-color': table.color }}>
            <div className={styles.tableHeader}>
                <span className={styles.tableDot} />
                <span className={styles.tableName}>{table.name}</span>
            </div>
            <div className={styles.fieldList}>
                {table.fields.map((f, i) => (
                    <div key={i} className={styles.fieldRow}>
                        <span className={styles.fieldName}>{f.name}</span>
                        <div className={styles.fieldMeta}>
                            <span className={styles.fieldType}>{f.type}</span>
                            {f.key && (
                                <span className={`${styles.keyBadge} ${f.key === 'PK' ? styles.pk : styles.fk}`}>
                                    {f.key}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function DatabaseSchema() {
    return (
        <>
            <PageHeader
                title="Database Schema"
                subtitle="Entity-relationship model for the GroceryWatch data layer"
            />
            <div className={styles.wrapper}>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Entity Tables</h2>
                    <div className={styles.tableGrid}>
                        {tables.map(t => <TableCard key={t.name} table={t} />)}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Key Relationships</h2>
                    <div className={styles.relGrid}>
                        {relationships.map((rel, i) => (
                            <div key={i} className={styles.relRow}>
                                <span className={styles.relDot} />
                                <span className={styles.relText}>{rel}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    )
}
