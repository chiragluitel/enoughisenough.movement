import { useAuthContext } from "../../hooks/Context/useAuthContext";
import NavbarForLoggedIn from "./NavbarForLoggedIn";
import NavbarForLoggedOut from "./NavbarForLoggedOut";

const Navbar = () => {
    
    const {user} = useAuthContext();
    console.log(user);
    return (
        <>
        {user ? (<NavbarForLoggedIn />):(<NavbarForLoggedOut />) }
        </>
    )
}
export default Navbar;