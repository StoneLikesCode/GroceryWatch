import PageHeader from '../components/PageHeader'
import styles from './UXMockups.module.css'
import imgAuth from '../assets/uimockup1.png'
import imgHome from '../assets/uimockup.png'
import imgSettings from '../assets/uimockup3.png'
import imgSearch from '../assets/uimockup4.png'
import imgCart from '../assets/deluxeuimockup1.png'
import imgHistory from '../assets/deluxeuimockup2.png'

const screens = [
    {
        id: 'auth',
        title: 'Sign In / Sign Up',
        badge: 'All Users',
        badgeType: 'standard',
        image: imgAuth,
        alt: 'Sign In and Sign Up screens',
    },
    {
        id: 'home',
        title: 'Home & Map View',
        badge: 'All Users',
        badgeType: 'standard',
        image: imgHome,
        alt: 'Home screen with deals and price alerts, and Map View with nearby stores',
    },
    {
        id: 'settings',
        title: 'Settings & Store Reviews',
        badge: 'All Users',
        badgeType: 'standard',
        image: imgSettings,
        alt: 'Settings menu and Store Reviews screen',
    },
    {
        id: 'search',
        title: 'Product Search & Account',
        badge: 'All Users',
        badgeType: 'standard',
        image: imgSearch,
        alt: 'Search Products screen and Account screen with rewards points',
    },
    {
        id: 'cart',
        title: 'Cart Comparison',
        badge: 'Deluxe',
        badgeType: 'deluxe',
        image: imgCart,
        alt: 'Cart item price comparison and total cart comparison across stores',
    },
    {
        id: 'history',
        title: 'Price History & Trends',
        badge: 'Deluxe',
        badgeType: 'deluxe',
        image: imgHistory,
        alt: 'Price History search by store and price trend graph over time',
    },
]

export default function UXMockups() {
    return (
        <>
            <PageHeader
                title="UI/UX Mockups"
                subtitle="High-fidelity wireframes for key GroceryWatch screens"
            />
            <div className={styles.wrapper}>
                {screens.map(screen => (
                    <section key={screen.id} className={styles.screenSection}>
                        <div className={styles.screenHeader}>
                            <h2 className={styles.screenTitle}>{screen.title}</h2>
                            <span className={`${styles.screenBadge} ${styles[`badge_${screen.badgeType}`]}`}>
                                {screen.badge}
                            </span>
                        </div>
                        <div className={styles.imageWrap}>
                            <img src={screen.image} alt={screen.alt} className={styles.mockupImage} />
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}
