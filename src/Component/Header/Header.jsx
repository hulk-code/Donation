import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
  const links = <>
 <li><NavLink to='/'>Home</NavLink></li> 
 <li><NavLink to='/Donation'>Donation</NavLink></li> 
 <li><NavLink to='/Statistics'>Statistics</NavLink></li>
  
  
   
  
</>

    return (
        <div className="navbar bg-base-100 lg:w-[1300px] mx-auto">
  <div className="flex-1">
    
    <img src="https://i.ibb.co/ypgWC6v/Logo.png" alt="" />
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 lg:mr-6 text-base">
      {links}
      
    </ul>
  </div>
</div>
    );
};

export default Header;