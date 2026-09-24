import Member from '../components/Member'
import PageHeader from '../components/PageHeader'
import styles from './Team.module.css'
import StoneImage from '../assets/Stone.jpg'
import SamImage from '../assets/Sam.jpg'
import JordanImage from '../assets/Jordan.jpg'
import AaronImage from '../assets/Aaron.jpg'
import BlaineImage from '../assets/Blaine.jpg'
import KyleImage from '../assets/Kyle.png'
import PeterImage from '../assets/Peter.png'
import JoshuaImage from '../assets/Joshua.png'

export default function Team(){ 
    return(
    <>  
        <PageHeader title="Team Iron" subtitle="Meet the team behind GroceryWatch" />
        <div id="team" className={styles.grid}> 
            <Member 
                name="Sam Garden" 
                role="Database Lead" 
                bio="Sam Garden is a Senior Computer Science major at ODU. She plans on pursuing a masters in Cybersecurity once she is done with her bachelor's. She plays on the field hockey team and loves to hike and loves fitness."
                src={SamImage}/>
            <Member 
                name="Stone Casey" 
                role="Web Master" 
                bio="Stone is a Senior Computer Science student at ODU with a passion for web development and game development. When he's not coding, you can find him painting, playing tabletop games, or spending time with his dog and cat."
                src={StoneImage}/>
            <Member 
                name="Blaine Langlois" 
                role="Frontend Developer" 
                bio="Blaine is  a Senior Computer Science major at ODU. He is interested in pursuing a career in software engineering after graduation. In his free time, Blaine enjoys both playing and developing video games."
                src={BlaineImage}/>
            <div className={styles.bottomRow}>
                <Member 
                    name="Aaron Breslin" 
                    role="Backend Developer" 
                    bio="Aaron is a Senior Computer Science major at ODU. He is also studying for a minor in Computer Engineering. In his free time he enjoys reading books and playing both board games and video games with friends."
                    src={AaronImage}/>
                <Member 
                    name="Jordan Dossou" 
                    role="Documentation Specialist" 
                    bio="Jordan is a Senior Computer Science major at ODU. He has background in Mathematics, Biology, and Organic Chemistry. He is pursuing a Master's Degree in Computer Science and hopes to join a top tech company."
                    src={JordanImage}/>
                <Member 
                    name="Kyle Pait"
                    role="Mentor"
                    bio="Software engineer with Booz Allen Hamilton and ODU graduate with a bachelors degree in computer science and biology. I'm a father of two and enjoy sharing my hobbies of surfing, soccer and video games with both my boys."
                    src={KyleImage}/>
                <Member 
                    name="Peter Langlands"
                    role="Mentor"
                    bio="Senior Software Engineer with Tegria Class of 2014 ODU graduate with a Bachelors of Science in Computer Science and minor in mathematics. They   say I have the best of both words being a father of a son and daughter sharing my passion for surfing, fishing, and other action sports with them. When I'm not working my remote job, you can find me at the beach or coaching my sons t-ball team or my daughters dance class. I'm busy as the next person they say."
                    src={PeterImage}/>
                <Member
                    name="Joshua Harris"
                    role="Presentation Specialist"
                    bio="Joshua Harris is a senior Computer Science major at Old Dominion University, currently completing his final semester toward his B.S. He served in the U.S. Marine Corps as an 1142 Electrical Equipment Repair Specialist. At 36, he balances school with family life and spends most of his free time with his children or gaming."
                    src={JoshuaImage}/>
            </div>
        </div>
    </>
    )
}
