import {useState} from 'react'
import styles from './ShareYourStoryForm.module.css'


const ShareYourStoryForm = ({handleSubmit}) => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    

    return ( 

        <form onSubmit={(e) => handleSubmit(e,title,content)} className={styles["story-form"]}>
                <label htmlFor="title" className={styles["story-title"]}>Title:</label>
                <input required type="text" name="title" className={styles["title-input"]} onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="story-content" className={styles["story-content"]}>Content:</label>
                <textarea required className={styles["content-input"]} name ="content" onChange={(e) => setContent(e.target.value)}></textarea>
            
            <div className={styles['preview-story']}>
                <h2>Preview Before You Share</h2>
                <h3>You will see the title here: {title}</h3>
                <p>You will see the content here: {content}</p>
            </div>
                <button>Share Story</button>
            </form>
     );
}
 
export default ShareYourStoryForm;