/* eslint-disable no-unused-vars */
import SideNav from './SideNav/SideNav'

import AccountInfo from './AccountInfo/AccountInfo'


import styles from './Account.module.css'

const Account = () => {


        return ( 
        <div className={styles['wrapper']}>
            
            <SideNav/>
            <AccountInfo  className={styles['account-info']}/>
        </div>
     );
}
 
export default Account;