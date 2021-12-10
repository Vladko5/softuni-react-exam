/* eslint-disable no-unused-vars */


import LogInForm from './LogInForm/LogInForm'
import {useContext} from 'react'
import userContext from '../../../../contexts/UserContext'


import {auth} from '../../../../Firebase/auth'


import styles from './LogIn.module.css'

import {useHistory} from 'react-router-dom'


const LogIn = () => {
    
    const {user,setUser} = useContext(userContext)
    
    
    let history = useHistory()
    
    
    
    function handleSubmit(e){
        e.preventDefault()
        
        
       let email = e.target.email.value
       let password = e.target.password.value

        
        auth.signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
        
            setUser(user.uid)
            history.push('/account')
        })
        .catch((error) => {
            //var errorCode = error.code;
            
            var errorMessage = error.message;
            console.log(errorMessage)
            
        });

        e.target.password.value = ''
        e.target.email.value =""
    }
    

    
    return ( 
        
        <div className={styles['main']}>
           
            <LogInForm handleSubmit={handleSubmit}/>
                
        </div>
     );
}


 
export default LogIn;