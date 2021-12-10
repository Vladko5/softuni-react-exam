/* eslint-disable no-useless-constructor */
import {Component} from 'react'
import styles from './PetForm.module.css'

class PetForm extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 

            <form onSubmit = {this.props.handleSubmit} className={styles['pet-form']}>

            <label htmlFor="pet-name">Pet Name</label>
            <input type="text" name="pet-name" required/>

            <label htmlFor="pet-age">Pet Age</label>
            <input type="number" min="1" max="15" name="pet-age" required/>
          

            <label htmlFor="pet-type">Pet type</label>
            <select name="pet-type" required>
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                
            </select>

            <label htmlFor="breed">Pet Breed</label>
            <input type="text" name="pet-breed" required/>

            <button>Submit</button>
        </form>

         );
    }
}
 
export default PetForm;