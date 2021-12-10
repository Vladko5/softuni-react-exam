/* eslint-disable no-undef */
import {auth ,db} from '../../../../Firebase/auth'
import styles from './SignUp.module.css'
import SignUpForm from './SignUpForm/SignUpForm'

const SignUp = () => {
 

let handleSubmit = (e) =>{
    e.preventDefault()
    let email = e.target.email.value
    let password =e.target.password.value
    

    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;


    db.collection('user').doc(user.uid).set({
        
       
        email
    })
    // ...
  })
  .catch((error) => {
    //var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

  e.target.password.value = ''
  e.target.email.value = ''
 
}


 
 

    return ( 
            <div className={styles['sign-up-wrapper']}>

            <SignUpForm handleSubmit={handleSubmit}/>
                  

            </div>
        
        

     );
}
 
export default SignUp;