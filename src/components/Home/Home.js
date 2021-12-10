import HomeContent from './HomeContent/HomeContent'
import styles from './Home.module.css'

const Home = () => {
    return ( 
        <div className={styles["main-wrapper"]}>

            
            <HomeContent/>
        </div>
     );
}
 
export default Home;