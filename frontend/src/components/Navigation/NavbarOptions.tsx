import { NavLink } from "react-router-dom";

interface NavbarOptionsProps {
    icon?: React.ReactElement;
    label: string;
    navigateTo: string;
}

const NavbarOptions: React.FC<NavbarOptionsProps> = ({ label, navigateTo, icon }) => {
    return (
        <NavLink
            to={navigateTo}
            className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    )
}

export default NavbarOptions;