import Navigation from './Navigation/Navigation'
import styles from './Header.module.css'

const Header = () => {
    return ( 
        
        <div className={styles['main-container']}>
            
            
            <Navigation/>
            
        </div>
     );
}
 
export default Header;