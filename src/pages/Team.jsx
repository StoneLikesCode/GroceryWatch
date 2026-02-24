import Member from '../components/Member'
import PageHeader from '../components/pageHeader'
import styles from './Team.module.css'

export default function Team(){ 
    return(
    <>  
        <PageHeader title="Team Iron" subtitle="Meet the team behind GroceryWatch" />
        <div className={styles.grid}> 
            <Member 
                name="Sam Garden" 
                role="Database Lead" 
                bio="Sam Garden is a Senior Computer Science major at ODU. She plans on pursuing a masters in Cybersecurity once she is done with her bachelor's. She plays on the field hockey team and loves to hike and loves fitness." />
            <Member 
                name="Stone Casey" 
                role="Web Master" 
                bio="BIO NEEDED" />
            <Member 
                name="Blaine" 
                role="ROLE NEEDED" 
                bio="BIO NEEDED" />
            <Member 
                name="Aaron" 
                role="ROLE NEEDED" 
                bio="BIO NEEDED" />
            <Member 
                name="Joe" 
                role="ROLE NEEDED" 
                bio="BIO NEEDED" />
            <Member 
                name="Jordan" 
                role="ROLE NEEDED" 
                bio="BIO NEEDED" />
        </div>
    </>
    )
}