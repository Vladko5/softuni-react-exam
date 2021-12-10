import {Link} from 'react-router-dom'
import styles from './SideNav.module.css'
import LogOut from './LogOut/LogOut'


const SideNav = () => {
    return ( 

        <nav className={styles['side-nav']}>

        <ul>

            <li>
                <i className="fas fa-paw"></i>
                <Link to="/petinformation">Pet Information</Link>
            </li>
             
           

            <li>
                 <i className="fas fa-user-edit"></i>
                <Link to='/ownerinformation'>Owner Information</Link>
            </li>

             <li>
                <i className="fas fa-comment-alt"></i>
                <Link to="/shareyourstory">Share Your Story</Link>
            </li>


            <li>
                <i className="far fa-eye"></i>
                <Link to="/seeyourstories">See Your Stories</Link>
            </li>

            <li>
                <LogOut/>
            </li> 

        </ul>

        </nav>


     );
}
 
export default SideNav;