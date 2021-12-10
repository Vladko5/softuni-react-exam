
import styles from './Services.module.css'
import useFetch from '../../hooks/useFetch'

const Services = () => {

    const [services] = useFetch(`https://vets-for-pets-80140-default-rtdb.firebaseio.com/services.json`,[])


    return ( 
        <div className={styles['service-wrapper']}>
            {services.map(x =>
                <div className={styles['service-data']} key={x.id}>
                    <h2>{x.title}</h2>
                    <p>{x.content}</p>
                
                </div>
                )}
        </div>
     );
}
 
export default Services;