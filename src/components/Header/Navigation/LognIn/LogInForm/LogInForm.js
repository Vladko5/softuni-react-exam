// import {useState} from 'react'
import styles from './LogInForm.module.css'

// import {auth} from '../../../../../Firebase/auth'
// import EventBus from '../../../../../EventBus/EventBus'
// import {useHistory } from 'react-router-dom'


const LogInForm = ({handleSubmit}) => {
    
    
  
        
        
       
        return ( 
            
            <div className={styles["main-container"]}>
            

            
            <img src="images/Black-German-Shepherd.jpg" alt="" className={styles["image-container"]}/>

            <form onSubmit={handleSubmit} className={styles["logIn-form"]} >
            <h1 className={styles["login-message"]}>Member Login</h1>

            <label htmlFor="email">Enter email</label>
            <input 
            type="email"
            name="email"
            
            required
            />


            <label htmlFor="password">Enter password</label>
            <input 
            type="password"
            
            name="password"
            required
            />

            <button>Log In</button>

            </form>
           

        </div>


     );
}
 
export default LogInForm;