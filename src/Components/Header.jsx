import {Link} from 'react-router-dom'
import '../css/header.css'

 const Header=()=>{

    return(
        <div className="header-div">
            <div className="logo-div">
                <h3>Comapany Name</h3>
            </div>
            <div className="link-div">
                      <ul className='ul-div'>
                      <li><Link to="/" className='Link'>Home</Link></li>
                      <li><Link to="/About" className='Link'>About us</Link></li>
                      <li><Link to="/Contact" className='Link'>Contact us</Link></li>
                      <li><Link to="/crud" className='Link'>CRUD</Link></li>

                  </ul>
           
            </div>
        </div>
    )
}

export default Header

