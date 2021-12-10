
import {useState,useContext} from 'react'
import userContext from '../../../contexts/UserContext'
import useCollection from '../../../hooks/useCollection'

import styles from './AccountInfo.module.css'
import ChangePetInfo from '../ChangePetInfo/ChangePetInfo'


const AccountInfo = () => {
    
    const [changeButton,setChangeButton] = useState('')
    const [petChange,setPetChange] = useState(false)
    const {user} = useContext(userContext)
    const [accountInfo] = useCollection(user,"Pets",[])

   const handleChangeButtonClick = (petId) =>{
            
            setChangeButton(petId)

           if(petChange === false ){
                   setPetChange(true)
           }else{
                   setPetChange(false)
           }
    }

  

    const resetPetChange = (changeValue) =>{
                           
      setPetChange(changeValue)
                    
    }

    return ( 
        <div className={styles['main']}>
            
             {!accountInfo ? "": (accountInfo.map(x =>
                      
                    <div key={x.id} className={styles['pets-displayed']}>
                    <h1>Pet Name:{x.petName}</h1>
                    <p>Pet Breed:{x.petBreed}</p>
                    <p>Pet Age:{x.petAge}</p>
                    <button onClick={(e) => handleChangeButtonClick(x.id,e)}>Change Information</button>
                   
                     {(changeButton === x.id && !petChange ) ? <ChangePetInfo petName={x.petName} resetPetChange={resetPetChange} petChange={petChange}/> : ''} 
                     
                </div>)
                
                )} 

                
                  
        </div>

     );
}
 
export default AccountInfo;