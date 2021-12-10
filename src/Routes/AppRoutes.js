import {Route ,Switch} from 'react-router-dom'
import Home from '../components/Home/Home'
import LogIn from '../components/Header/Navigation/LognIn/LogIn'
import SignUp from '../components/Header/Navigation/Sign Up/SignUp'
import Account from '../components/Account/Account'
import Services from '../components/Services/Services'
import PetInformation from '../components/Account/PetInformation/PetInformation'
import OwnerInformation from '../components/Account/OwnerInformation/OwnerInformation'
import ShareYourStory from '../components/Account/ShareYourStory/ShareYourStory'
import PatientStories from '../components/PatientStories/PatientStories'
import SeeYourStories from '../components/Account/SeeYourStories/SeeYourStories'



const AppRoutes = () => {

    

    return ( 
        <div>
            <Switch>



        <Route path='/' exact component={Home}/>
        <Route path='/services'component={Services}/>
        <Route path="/patientstories" component={PatientStories}/>
        <Route path="/signup" component={SignUp}/>
        <Route path='/login' component= {LogIn}/>
        <Route path="/account" component={Account}/>
        <Route path="/petinformation" component={PetInformation}/>
        <Route path="/ownerinformation" component={OwnerInformation}/>
        <Route path="/shareyourstory" component={ShareYourStory}/>
        <Route path="/seeyourstories" component={SeeYourStories}/>

       

            </Switch>

        </div>


     );
}
 
export default AppRoutes;