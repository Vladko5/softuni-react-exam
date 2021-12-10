
import styles from './PatientStories.module.css'
import {db} from '../../Firebase/auth'
import {useState,useEffect} from 'react'



const PatientStories = () => {

    const [stories,setStories] = useState([])

    useEffect(() =>{
        db.collection('stories')
        .onSnapshot(res =>{
            let array = [];
            
            res.forEach(x =>{
                array.push(x.data())
            })
            setStories(array)
            
        }) 
    },[])

    return ( 
        <div className={styles['main']}>

                <h1>TAILS FROM THE CLINIC</h1>
                    

                {stories.map(x =>
                    <div className={styles['story-wrapper']} key={x.id}>
                        <h3 className={styles["story-title"]}>{x.title}</h3>
                        <p className={styles["story-content"]}>{x.content}</p>
                    </div>
                    )}
                    </div>
     );
}
 
export default PatientStories;