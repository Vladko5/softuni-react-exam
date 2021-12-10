import styles from './ShareYourStory.module.css'
import {db} from '../../../Firebase/auth'
import ShareYourStoryForm from './ShareYourStoryForm/ShareYourStoryForm'
import SideNav from '../SideNav/SideNav'
import {useContext} from 'react'
import userContext from '../../../contexts/UserContext'

const ShareYourStory = () => {

    const {user} = useContext(userContext)

    const handleSubmit = ((e,title,content) =>{
        e.preventDefault()

        db.collection('user').doc(user).collection('Stories').doc(title).set({
          id:content.length + content[1] + title[1] + title.length,
           title:title,
           content:content
        })
        .then(res =>{
            console.log(res)
        })

        db.collection('stories').doc(title).set({
            id:content.length + content[1] + title[1] + title.length,
             title:title,
             content:content
          })
          .then(res =>{
              console.log(res)
          })

        e.target.title.value =''
        e.target.content.value = ''
    })

    
    
    return ( 
        <div className={styles['main']}>
            <h1>Add Story</h1>
            <SideNav className={styles["side-nav"]}/>
            <ShareYourStoryForm handleSubmit={handleSubmit}/>

        </div>
     );
}
 
export default ShareYourStory;