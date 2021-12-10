import {useState,useEffect} from 'react'
import {db} from '../Firebase/auth'


    const useCollection = (user,collection,initialValue) =>{

        const [data,setData] = useState(initialValue)
        
    
        useEffect(() =>{
            if (user){
                
                db.collection('user').doc(user).collection(collection)
            .onSnapshot(res =>{
                let array = [];
    
                res.forEach(x =>{
                    array.push(x.data())
                })
                setData(array)
            })
            
            
            }
    
        },[user,collection])
    
        return[
            data,
            
        ]
    
    }



export default useCollection