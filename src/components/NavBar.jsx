import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";


const NavBar = () => {

  const {setShowLogin,user,logout,isOwner,axios,setIsOwner} = useAppContext()

  const location = useLocation();
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();
  const changeRole = async ()=>{
    try {
    const {data} = await axios.post("/api/owner/change-role")
    if(data.success){
      setIsOwner(true)
      toast.success(data.message)
    }else{
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  text-black border-b border-borderColor relative transition-all ${
        location.pathname === "/" && "bg-gray-100"
      }`}
    >
      <NavLink to={"/"}>
        <img src="/logo.svg" alt="logo" className="h-15" />
      </NavLink>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-[92px] max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-gray-100" : "bg-white"
        } ${Open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => {
          return (
            <NavLink to={link.path} key={index}>
              {link.name}
            </NavLink>
          );
        })}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Search Car"
          />
          <img src={assets.search_icon} alt="search_icon" />
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button onClick={() => isOwner?  navigate("/owner") : changeRole()} className="cursor-pointer">
            {isOwner ? "Dashboard" : "List cars"}
          </button>

          <button
            onClick={() => {user ? logout() : setShowLogin(true)}}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            {user ? "Logout" : "LogIn"}
          </button>
        </div>
      </div>
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!Open)}
      >
        <img src={Open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </div>
  );
};

export default NavBar;
