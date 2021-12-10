import styles from './OwnerInformationForm.module.css'

const OwnerInformationForm = ({handleSubmit}) => {
    return ( 

        <div className={styles["main-container"]}>
            

            
            <img src="images/Owner-Infromation.jpg" alt="dog and girl" className={styles["image-container"]}/>

            <form onSubmit={handleSubmit} className={styles["logIn-form"]} >
            <h1 className={styles["login-message"]}>Owner Information</h1>

            <label htmlFor="name">Enter name</label>
            <input 
            type="text"
            name="name"
            required
            />


            <label htmlFor="telephone">Enter phone number</label>
            <input 
            type="tel"
            name="telephone"
            required
            />

            <button>Submit</button>

            </form>
           

        </div>

     );
}
 
export default OwnerInformationForm;