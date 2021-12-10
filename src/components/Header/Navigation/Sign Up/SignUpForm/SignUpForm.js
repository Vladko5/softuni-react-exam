import styles from './SignUpForm.module.css'

const SignUpForm = ({handleSubmit}) => {
    return ( 

        <div className={styles['main-container']}>

            
                <img src="images/Parrot2.jpg" alt="" className={styles['image-container']}/>
              <form onSubmit = {handleSubmit} className={styles['signup-form']}>
  
                  <h2 className={styles['signup-message']} >Sign Up</h2>
                  
  
                  <label htmlFor="email">Enter email</label>
                  <input 
                  type="email"
                  name="email"
                  
                  required/>
  
                  <label htmlFor="password">Enter password</label>
                  <input 
                  type="password"
                 name="password"
                  
                  required/>
  
  
  
                 <button>Sign Up</button>
              </form>

        </div>
     );
}
 
export default SignUpForm;