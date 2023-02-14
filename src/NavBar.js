import {Link} from 'react-router-dom'
export const NavBar=()=>{
    return(
        <div>
            <Link to ="/">Home</Link>
            <Link to ="/profile">Profile</Link>
            <Link to= "/contacts">Contacts</Link>
        </div>
    )
}