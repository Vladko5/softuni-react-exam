

import Header from './components/Header/Header'
import './App.css';
import AppRoutes from './Routes/AppRoutes'


import {useState} from 'react'
import userContext from './contexts/UserContext'



function App() {

  const [user,setUser] = useState('')
  return (
    <div>

    <userContext.Provider value={{user,setUser}}>
      <Header/>
    <AppRoutes/>
   </userContext.Provider>    
    </div>
      
      
    
  );
}

export default App;
