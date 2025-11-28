import {NavLink} from "react-router-dom"
import { useAppContext } from "../../context/AppContext";

const NavbarOwner = () => {

    const {user}= useAppContext();


  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all'>
      <NavLink to="/">
        <img src={"/logo.svg"} alt="logo"  className='h-15'/>
      </NavLink>
      <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner
