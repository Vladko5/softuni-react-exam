
import {db} from '../../../../Firebase/auth'
import styles from './DeleteStoryButton.module.css'

const DeleteStory = ({title}) => {
    
    let userUid = 'vqcWIUj9oHaVRtFJ1VFwVe6GgNR2'
    
    const deleteStoryHandler = () =>{
        db.collection('user').doc(userUid).collection('Stories').doc(title).delete()
        
    }
    
    
    return ( 

        <div className={styles["delete-story"]}>
            <button onClick={deleteStoryHandler}>Delete Story</button>
        </div>
     );
}
 
export default DeleteStory;