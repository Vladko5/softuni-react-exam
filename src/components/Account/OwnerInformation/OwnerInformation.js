import styles from './OwnerInformation.module.css'
import SideNav from '../SideNav/SideNav'
import OwnerInformationForm from './OwnerInformationForm/OwnerInformationForm'
import {db} from '../../../Firebase/auth'
import {useContext} from 'react'
import userContext from '../../../contexts/UserContext'


const OwnerInformation = () => {

    const {user} = useContext(userContext)


    const handleSubmit = (e) =>{
            e.preventDefault()
            

            db.collection('user').doc(user).set({
                "Owner name":e.target.name.value,
                "Owner phone":e.target.telephone.value,
                
            },{merge:true})
            .then(res =>{
                console.log(res)
            })

            e.target.name.value ="";
            e.target.telephone.value = "";
    }
    return ( 
        


        <div className={styles['main']}>
            <SideNav/>
           
            <OwnerInformationForm handleSubmit={handleSubmit}/>
                
        </div>
        

        
     );
}
 
export default OwnerInformation;