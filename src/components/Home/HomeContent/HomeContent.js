
import styles from './HomeContent.module.css'

import useFetch from '../../../hooks/useFetch'




const HomeContent = () => {


    const [mainContent] = useFetch(`https://vets-for-pets-80140-default-rtdb.firebaseio.com/main.json`,[])


    return ( 
        <div className={styles['main-container']}>

                    
        {mainContent.map(x=>
              <div key={x.id}>
              <h3 className={styles["main-title"]}>{x.title}</h3>
          <div  className={styles['flex-wrapper']}>
              <p>{x.content}</p>
              <img src={`images/${x.img}`} alt="" className={styles[x.id]}/>
              </div>

              </div>
          )}
          
      </div>
     );
}
 
export default HomeContent;


