import {auth} from "../../../../Firebase/auth"
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import userContext from '../../../../contexts/UserContext'
import styles from './LogOut.module.css'
const LogOut = () => {
    let history = useHistory()
    const {setUser} = useContext(userContext)

    const logOut = () =>{
        auth.signOut().then(() => {
            setUser("")
            history.push('/')
          }).catch((error) => {
            console.log(error)
          });
    }
    return ( 
        <button className={styles["main"]} onClick={logOut}>Log Out</button>
     );
}
 
export default LogOut;