import {db} from 'react'
import styles from './ChangeStoryButton.module.css'
const ChangeStoryButton = ({title}) => {

    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
    
    const handleSubmitEvent = (e) =>{
        e.preventDefault()
        db.collection('user').doc(userUid).collection('Stories').doc(title).set({
            
        },{merge:true})
        .then(res =>{
            console.log(res)
        })

        

    }

    
    return ( 
        <div className={styles["change-story"]}>
            <button onClick={handleSubmitEvent}>Change Story</button>
        </div>
     );
}
 
export default ChangeStoryButton;