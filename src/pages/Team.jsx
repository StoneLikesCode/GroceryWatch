import Member from '../components/Member'
import PageHeader from '../components/PageHeader'
import styles from './Team.module.css'
import StoneImage from '../assets/Stone.jpg'
import SamImage from '../assets/Sam.jpg'
import JordanImage from '../assets/Jordan.jpg'
import JoeImage from '../assets/Joe.jpg'
import AaronImage from '../assets/Aaron.jpg'
import BlaineImage from '../assets/Blaine.jpg'

export default function Team(){ 
    return(
    <>  
        <PageHeader title="Team Iron" subtitle="Meet the team behind GroceryWatch" />
        <div className={styles.grid}> 
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
                name="Blaine" 
                role="ROLE NEEDED" 
                bio="Blaine is  a Senior Computer Science major at ODU. He is interested in pursuing a career in software engineering after graduation. In his free time, Blaine enjoys both playing and developing video games."
                src={BlaineImage}/>
            <Member 
                name="Aaron Breslin" 
                role="Backend Developer" 
                bio="Aaron is a Senior Computer Science major at ODU. He is also studying for a minor in Computer Engineering. In his free time he enjoys reading books and playing both board games and video games with friends."
                src={AaronImage}/>
            <Member 
                name="Joseph Thompson" 
                role="Documentation Specialist" 
                bio="Joseph is a Senior Computer Science major at ODU. He has already earned a Masters in Electrical Engineering (ODU Spring 2019). He works full time in DRAM manufacturing as a Senior Engineer. When he's not working or studying, he's behind the wheel of his GR86 doing Autocross events, or he's hanging out at home playing Xbox."
                src={JoeImage}/>
            <Member 
                name="Jordan" 
                role="ROLE NEEDED" 
                bio="BIO NEEDED"
                src={JordanImage}/>
        </div>
    </>
    )
}