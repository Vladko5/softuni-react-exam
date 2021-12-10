

import styles from './SeeYourStories.module.css'

import DeleteStory from './DeleteStoryButton/DeleteStoryButton'
import ChangeStoryButton from './ChangeStoryButton/ChangeStoryButton'
import SideNav from '../SideNav/SideNav'

import {useContext} from 'react'
import userContext from '../../../contexts/UserContext'
import useCollection from '../../../hooks/useCollection'



const SeeYourStories = () => {

    const {user} = useContext(userContext)
    
    const [stories] = useCollection(user,"Stories",[])

    
    return ( 

        <div className={styles["main"]}>

        <SideNav className={styles["side-nav"]}/>

        
             {stories.map(x => 
                <div key={x.id} className={styles["story-container"]}>
                    <h1 className={styles["story-title"]}>{x.title}</h1>
                    <p className={styles["story-content"]}>{x.content}</p>
                    <DeleteStory className={styles["delete-story"]} title={x.title}/>
                    <ChangeStoryButton title={x.title}/>
                </div>
                )}  
        </div>
        
     );
}
 
export default SeeYourStories;