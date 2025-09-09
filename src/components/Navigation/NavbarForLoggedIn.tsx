import {
    FaHome,
    FaNewspaper,
    FaCalendarAlt,
    FaHandHoldingHeart,
    FaUser,
  } from "react-icons/fa";
  import NavbarOptions from "./NavbarOptions";
  import { Link } from "react-router-dom";

  interface NavbarForLoggedInProps {
    profileId: string
  }
  const NavbarForLoggedIn:React.FC<NavbarForLoggedInProps> = ({profileId}) => {
    const profile = `profile/${profileId}`
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 relative h-14 flex items-center">
          <div className="absolute left-4 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-gray-900">Enough is Enough.</span>
            </Link>
          </div>
  
          <nav className="mx-auto flex items-center gap-1">
            <NavbarOptions label="Home" navigateTo="/" icon={<FaHome />} />
            <NavbarOptions label="Feed" navigateTo="/feed" icon={<FaNewspaper />} />
            <NavbarOptions label="Events" navigateTo="/events" icon={<FaCalendarAlt />} />
            <NavbarOptions label="Donate" navigateTo="/donate" icon={<FaHandHoldingHeart />} />
            <NavbarOptions label="Profile" navigateTo='/profile' icon={<FaUser />} />
          </nav>
        </div>
      </div>
    );
  };
  
  export default NavbarForLoggedIn;
  