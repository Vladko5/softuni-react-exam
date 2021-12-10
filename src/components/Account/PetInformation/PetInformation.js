import PetForm from './PetForm/PetForm'
import {db} from '../../../Firebase/auth'
import SideNav from '../SideNav/SideNav'
import {useContext} from 'react'
import userContext from '../../../contexts/UserContext'
import styles from './PetInformation.module.css'


const PetInformation = () => {

    

    const {user} = useContext(userContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        

            db.collection('user').doc(user).collection('Pets').doc(e.target['pet-name'].value).set({
            petName:e.target["pet-name"].value,
            petAge:e.target["pet-age"].value,
            petType:e.target["pet-type"].value,
            petBreed:e.target["pet-breed"].value,
            id:e.target["pet-name"].value[2] + e.target["pet-type"].value[1] + e.target["pet-breed"].value[1]
        })
        .then(res =>{
            console.log(res)
        })
        
        e.target["pet-name"].value = ""
        e.target["pet-age"].value =""
        e.target["pet-breed"].value = ""
    }

    return ( 
        <div className={styles["main"]}>
            <SideNav/>
            <PetForm handleSubmit={handleSubmit}/>
        </div>

     );
}
 
export default PetInformation;